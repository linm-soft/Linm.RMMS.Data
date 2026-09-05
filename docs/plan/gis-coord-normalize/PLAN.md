# PLAN — chuẩn hóa tọa độ pin TS (all data)

> **Trigger:** 2026-09-04 · screenshot `KM-km_post_539080` · tuyến **QL.Nghi Sơn - Bãi Trành - Tỉnh Thanh Hóa** · GPS `19.43000, 105.67000` · popup **`raw`** · pin nằm đường làng (Phú Sơn / Phú Lâm) lệch cao tốc OSM **«Đường Cao tốc QL.45-Nghi Sơn»**.  
> **Peers:** `/gis-tai-san-snap` · `/data-gov-integration` · `/implement-map-stack` · [`../gov-vn-nationwide/PLAN.md`](../gov-vn-nationwide/PLAN.md) · STATUS [`../../../specs/map-service/STATUS.md`](../../../specs/map-service/STATUS.md)

## Chẩn đoán tuyến mẫu (không phải bug cluster UI)

| # | Hiện tượng | Root |
|---|------------|------|
| 1 | Pin lệch cao tốc / nằm thôn | Dump GOV **lưới 0.01°** (~1 km) — `19.43000, 105.67000` là ô lưới, **không** GPS khảo sát trên mặt đường |
| 2 | Popup `raw` (chưa snap) | `osrmPinPlacement` không khớp corridor OSRM theo `itemRouteKey` |
| 3 | Canon named dài | `QL.Nghi Sơn - Bãi Trành…` → fold `QLNGHISONBAITRANH…` — **không** `QL\d+[A-Z]?` → FE/BE không alias sang OSM `QL.45` / CT Nghi Sơn |
| 4 | Nhãn map ≠ sổ | OSM: **QL.45-Nghi Sơn**; DB: **QL.Nghi Sơn - Bãi Trành** — thiếu **route alias map** |
| 5 | Seed corridor Khu2 | `GisKhu2Corridors` có `NGHISON` → `CtBacNam` (Nghi Sơn–Diễn Châu, ~19.32↓) — **không** dùng để ghi DB; FE live OSRM cũng **không** map tên named này |

**Kết luận:** gim sai do **data dump + thiếu alias/snap bake**, không phải sample-GPS cluster. FE chỉ hiện dump khi detail/cụm (`GAP-MAP-CLUSTER-PAINT-OSRM-01`) → thấy rõ lệch đường làng.

**Cấm (SSOT hiện tại):** invent GPS · km-lerp ghi đè dump làm “survey” · đổi CSV GOV tay từng điểm · seed OSM POI làm sổ TS.

---

## Mục tiêu

1. Pin trên GIS **bám tim đường đúng mã tuyến** (sau alias), không ô lưới thôn.  
2. Giữ dump gốc audit được (`LatDump`/`LngDump` hoặc `coordSource`).  
3. All-data: job batch + alias catalog — **không** dựa OSRM browser 650k.

---

## Phase 0 — Inventory (P0 · 1–2 ngày)

| # | Việc | DoD |
|---|------|-----|
| 0.1 | SQL/%: `lat/lng` khớp lưới `ROUND(x,2)=x` (0.01°) theo `route` / `type` | Bảng % coarse-grid toàn quốc + top tuyến lệch |
| 0.2 | Sample 20 TS tuyến **Nghi Sơn–Bãi Trành**: khoảng cách (m) tới nearest OSM motorway/trunk trong bbox | Báo cáo: median dist · % > 200 m |
| 0.3 | Catalog **named ≠ QL\d+**: đếm `route` fold không match `QL\d+[A-Z]?` / `DT\d+` / alias sẵn (`QLHCM`, `QLTSDONG`) | List ưu tiên alias |
| 0.4 | Đối chiếu `road_routes.csv` tên đoạn ↔ OSM `ref` / `name` (Overpass offline 1 lần) | Draft alias CSV |

**Gate:** nếu % coarse-grid > ngưỡng (vd. >40% KM_POST trên tuyến named) → bật Phase 1–2; nếu chỉ vài tuyến → pilot narrow.

---

## Phase 1 — Route alias SSOT (P0)

| # | Việc | Host | DoD |
|---|------|------|-----|
| 1.1 | File alias `route_alias.json` (hoặc bảng `GisRouteAlias`) | Data + WebService | `QL.Nghi Sơn - Bãi Trành*` → key OSRM/OSM ổn định (vd. `CT.NS-BT` / `QL45` — **chốt sau Overpass**, không đoán) |
| 1.2 | `GisRouteCanon` + FE `canonRouteKey` đọc alias **trước** fold digit | FE + BE | Named → cùng key corridor index |
| 1.3 | Corridor index (IDB / BE) index theo alias key | Gis MFE + Map index | `byRoute[alias]` có LineString cao tốc đúng |
| 1.4 | Pilot 1 tuyến (Nghi Sơn–Bãi Trành hoặc QL.48E) | Manual QA | Popup `snapped` · pin trên nét hồng/cao tốc · không thôn |

**Cấm:** alias cứng «mọi NGHISON → CtBacNam Khu2» nếu bbox Thanh Hóa lệch Diễn Châu.

---

## Phase 2 — Offline snap bake (P1 · all-data)

| # | Việc | DoD |
|---|------|-----|
| 2.1 | Job CLI / MapService worker: input dump + alias + centerline (OSRM/OSM pack offline) | Output `LatSnap`, `LngSnap`, `snapQuality`, `snapAt` |
| 2.2 | Rule: chỉ bake khi dist(dump, centerline) ≤ R (vd. 2–5 km) **và** cùng route alias; else `snapStatus=reject` giữ dump | Không kéo pin sang tuyến khác |
| 2.3 | KM_POST ưu tiên chainage dọc centerline (km marker) khi có `Km` + đoạn | Pin Km 21 gần station 21 trên tim đường — **không** invent ngoài corridor |
| 2.4 | EF: cột snap **hoặc** bảng `RoadAssetCoordBake` — Schema pair CLI | Migration pair; dump cột gốc **không** xóa |
| 2.5 | `GET /gis/clusters` + geojson: pin = snap nếu `snapStatus=ok` else dump | Cluster sample GPS = bake khi có |
| 2.6 | Re-run khi đổi alias / centerline pack (`bakeVersion`) | Idempotent |

**Cấm:** ghi đè Lat/Lng dump không backup · bake bằng `GisKhu2Corridors` lerp production · browser OSRM 650k.

---

## Phase 3 — FE gate sau bake (P1)

| # | Việc | DoD |
|---|------|-----|
| 3.1 | `shouldShowInventoryPin`: ưu tiên snap bake; coarse dump chỉ detail/cụm hoặc khi `snapStatus!=ok` | Hết “rừng pin thôn” ở z trung bình |
| 3.2 | Inspect: hiện `coordSource` = `dump` \| `snap-bake` \| `raw` | QA rõ nguồn |
| 3.3 | Overlay status: `snap ok N / reject M` khi filter 1 tuyến | Ops |

---

## Phase 4 — GOV re-import (P2 · nếu dump mới)

| # | Việc | DoD |
|---|------|-----|
| 4.1 | Nếu CSDL có GPS khảo sát thật → `/data-gov-integration` version mới | % coarse-grid giảm; bake ít reject hơn |
| 4.2 | Không chờ GOV để ship Phase 1–2 | Bake dùng dump hiện tại |

---

## Thứ tự ship đề xuất

```
0 inventory → 1 alias + pilot Nghi Sơn–Bãi Trành
  → 2 bake job (pilot route) → verify map
  → 2 all-route bake (batch)
  → 3 FE gate
  → 4 GOV (khi có)
```

## Effort thô

| Phase | Effort |
|-------|--------|
| 0 | 1–2 ngày |
| 1 + pilot | 2–4 ngày |
| 2 all-data | 1–2 tuần (infra + QA) |
| 3 | 1–2 ngày |
| 4 | theo dump GOV |

## Ngoài scope

- Sửa từng pin tay trên UI.  
- Coi MVT `assets` MapService là sổ TS.  
- Đổi luật «cấm km-lerp» thành seed giả — bake phải gắn **centerline thật** + quality gate.
