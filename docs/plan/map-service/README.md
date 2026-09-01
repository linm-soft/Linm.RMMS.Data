# MapService — implement BE → BFF → UI

> **Hai backend / một map (SSOT)**  
> **Clip + tile nền** = `Linm.Platform.MapService` (`API-CORE`).  
> **Pin tài sản / PCI / drawings** = `Linm.RMMS.WebService` Gis — `GET /api/v1/gis/clusters`.  
> **Cấm** hai bảng `VietnamBoundaries` trên WebService. **Cấm** copy 650k TS sang `overlay_features` để pin.  
> **Cấm invent** `api/v1/map-service/*` · `api/assets/{z}/{x}/{y}.pbf`

**Context:** [`../../context/features/map-service.md`](../../context/features/map-service.md) · clip UI [`gis-osm-clip.md`](../../context/features/gis-osm-clip.md) · luật [`legal-tech-corridor.md`](../../context/features/legal-tech-corridor.md)  
**Pack cắt VN:** [`../../gis-vn-map/`](../../gis-vn-map/) — SSOT `Việt Nam (tỉnh thành) - 34.geojson`  
**Entry:** `/implement-map-stack` (`/map-be-bff-ui`) — một wave / lượt · STATUS [`../../../specs/map-service/STATUS.md`](../../../specs/map-service/STATUS.md)

Chạy **đúng thứ tự**. Không copy prompt generic MapLibre/Flutter.

---

## Chuỗi slash (SSOT)

| # | Tầng | Slash | Repo / host | Output |
|---|------|-------|-------------|--------|
| 0 | Context | *(xong)* `/hey-linm` | `Linm.RMMS.Data` | Clip SSOT + maxBounds 6.8–23.5 |
| 1 | **BE clip** | `/implement-map-service` · `svc_host=new_svc` | `Linm.Platform.MapService` | Ingest 34 tỉnh · `ST_Union` mask · Osmium `.poly` · `ST_AsMVT` **`basemap` / `boundaries` / `mask`** · guest overlay **401** · rate limit · **không** pin TS |
| 1b | EF | `/database-migration` | `Linm.Platform.MapService` `api/src/Map.Api` | `Schema_GisBoundary` **pair** (.cs + Designer) |
| 2 | **BFF web** | `/create-bff-api-feature` · Ask **BFF** (không API mới) | `Linm.RMMS.Web.Bff` (hoặc host `web-bff` hiện có) | Proxy **cùng origin** `web-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` · forward JWT · **cấm** lộ URL Martin/OSM |
| 2b | **BFF mobile** | `/create-bff-api-feature` lần 2 · BFF | `Linm.RMMS.Mobile.Bff` | Cùng path `mobile-bff/api/v1/gis/tiles/…` — **cấm** app gọi `:5101` / WebService trực tiếp |
| 3 | **UI web** | `/implement-gis-map` · host `web` | `Linm.Web.RMMS.Gis` | MapLibre · `{TileUrl}` BFF · invert mask · maxBounds · `transformRequest` JWT · tắt OSM.org · pin = `clusters` WebService |
| 3b | Chrome OMS | `/agent-dev-oms-map` | Cùng MFE Gis | Fit **map-bar** · **cấm** isolate legend bottom · map **flex fill** · attribution `RMMS.vn` · tile URL **override** clip |
| 4 | **UI native** | `/implement-gis-map` · host `ios` rồi `android` | `Linm.RMMS.Mobile.iOS` · `.Android` | MapLibre Native · cùng `{TileUrl}` BFF · cùng bounds/mask · cùng LOD pin |
| 4b | Tuần + GPS | `/edit-mobile-feature` · `patrol-map` | Native dual | Follow WhenInUse · **cấm** invent `api/v1/patrol-map` · tracks = P2 SA |
| 5 | Gate | `/review-map-release` rồi `/review-app-vn-map-law` | Web + iOS + Android | 0 request `openstreetmap.org` · HS/TS trên mask · **cấm** geo-block reviewer |

**Wave 1 + 1b = done** (STATUS 2026-09-01). Wave 4 **web done**. **P2 streets done** (Osmium + Planetiler MBTiles · `streetTilesReady`). Next = Wave 2 mobile BFF · Wave 3 integrate · Wave 4 iOS/Android.

**Không** dùng: `/init-bff-file` / `/init-bff-auth` / `/init-bff-job` (BFF platform khác). GIS BFF **đã có** `web-bff/api/v1/gis` — skill 2 = **mở rộng proxy tile**, không tạo BFF mới.

Sổ TS: `/data-gov-integration` (set `gov-vn`) trên **WebService** — **không** seed OSM POI · **không** copy sang MapService để pin.

**Confirm bắt buộc** khi chạy Wave 1 (service) và Wave 3 (integrate): `/implement-map-stack` AskQuestion — **cấm** prose «làm tiếp?». Đã chốt: `wave1_pin=clusters_rmms` · Wave 3 queued `both` + `viewport_lod`.

---

## Pin tài sản theo view user (gộp PLAN C)

SSOT pin ~650k: viewport + zoom trên **RMMS.WebService**. **Không** dump GeoJSON toàn quốc. **Không** dùng MVT `assets` MapService làm pin P1.

| Zoom (view) | Hiện | API |
|-------------|------|-----|
| z ≤ 8 | Bubble + count DB | `GET /api/v1/gis/clusters` — **RMMS.WebService** Gis |
| z 9–13 | Theo tuyến trong bbox | Cùng `clusters` |
| z ≥ 14 | Pin chi tiết **trong bbox** | `clusters` detail + `geojson/{layer}?bbox=` · take **100** · cap **2000** |

| Rule | |
|------|--|
| Chỉ tọa độ dump WGS-84 | Bỏ thiếu lat/lng · placeholder · VN-2000 mét · lưới 0.01° — **cấm** km-lerp |
| `total` | = totalRaw DB (không = số pin đang vẽ) |
| Quyền | Overlay JWT + `org-route-scope` khi Signed |
| Guest | **Cấm** pin TS · **cấm** `clusters` / `geojson` overlay |

**P2 (không pin SSOT):** MVT layer `assets` / `cameras` / `routes` trên MapService — `overlay_features` **trống** đến khi có publish lọc. **Cấm** coi tile đó là sổ TS.

Nguồn gộp: [`../gov-vn-nationwide/PLAN.md`](../gov-vn-nationwide/PLAN.md) §C.3.

---

## API Signed (reuse — hai host)

### MapService — clip / nền

| Method | Path | Ai gọi |
|--------|------|--------|
| GET | `/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | Client **qua BFF** · P1: `basemap` \| `boundaries` \| `mask` |
| GET | `/api/v1/gis/basemap-config` | Guest · maxBounds 102–118 / **6.8–23.5** · minZoom 5 |
| GET | `/api/v1/gis/layers` | Guest lớp public · inspector thêm overlay |
| GET | `/api/v1/gis/geojson/{layer}?bbox=` | Staff JWT only — **không** thay `clusters` |

`layer=basemap` guest OK. `assets` / `cameras` / `patrol` / `routes` = `[Authorize]` · P1 **trống** (không pin).

### RMMS.WebService — pin + domain Gis

| Method | Path | Ai gọi |
|--------|------|--------|
| GET | `/api/v1/gis/clusters?bbox=&z=` | Pin theo view — **SSOT** |
| GET | `/api/v1/gis/geojson/{layer}?bbox=` | Staff · take 100 · cap 2000 |
| GET | `/api/v1/gis/heatmap/pci` | Staff |
| GET | `/api/v1/gis/geojson/cameras?bbox=` | Overlay cam — Signed `gis.md` P1.6 |

PCI / drawings / clusters **ở lại** WebService.

---

## Clip chỉ Việt Nam

| | |
|--|--|
| File | `docs/gis-vn-map/Việt Nam (tỉnh thành) - 34.geojson` |
| maxBounds | Lon 102.0–118.0 · Lat **6.8–23.5** · minZoom 5 |
| HS / TS | Đà Nẵng / Khánh Hòa (trong 34 — không file 65) |
| Cấm | 31 MB GeoJSON trong MFE/Store · Lat min 8.0 · `tile.openstreetmap.org` prod |

---

## Ba màn UI (một map · hai backend)

| Màn | Nền (MapService → BFF) | Overlay (WebService) | Slash UI |
|-----|------------------------|----------------------|----------|
| Tuyến + tài sản (vẽ) `/gis/live` · `/gis/ha-tang` | Tile clip | `clusters` + draw APIs **existing** | `/implement-gis-map` web · chrome **gis-mfe-map-standard** |
| Tuyến + camera `/gis` | Tile clip | `geojson/cameras` · Signed `gis.md` P1.6 | Cùng map · **giữ** toolbar vận hành · **cấm** page header |
| Tuần + GPS user | Tile clip | `patrol-map` existing · tracks P2 | `/implement-gis-map` native + `/edit-mobile-feature` |

**Không** một pipeline tile cho pin TS.

---

## Verify (fail closed)

- `dotnet ef migrations list` hiện `Schema_GisBoundary` trên MapService.  
- `dotnet build` MapService + WebService + Web.Bff + Mobile.Bff.  
- Tile biển tây VN: không đường đứt đoạn. HS/TS thấy trên mask.  
- MFE/app: 0 request `openstreetmap.org` / Esri / Google (release).  
- Guest: không `clusters` pin · không MVT overlay `assets`.

---

## Skill path (Rules)

| Slash | File |
|-------|------|
| `/implement-map-service` | `{RulesRoot}/common/skill/implement-map-service/implement-map-service.md` |
| `/create-bff-api-feature` | `{RulesRoot}/service/skill/bff-api-structure/bff-api-structure.md` |
| `/database-migration` | `{RulesRoot}/service/skill/database-migration/` |
| `/implement-gis-map` | `{RulesRoot}/common/skill/implement-gis-map/implement-gis-map.md` |
| `/agent-dev-oms-map` | `{RulesRoot}/common/skill/agent-dev-oms-map/` |
| `/edit-mobile-feature` | `{AutoCodeRoot}/.cursor/skills/edit-mobile-feature/` |
| `/review-map-release` | `{RulesRoot}/common/skill/review-map-release/` |
| `/review-app-vn-map-law` | `{RulesRoot}/common/skill/review-app-vn-map-law/` |
