# PO — Requirement — mobile-bff-map

| | |
|--|--|
| Feature | `mobile-bff-map` |
| Title | [Mobile] Mobile.Bff × MapService (tile clip) |
| Role | `po` · `/agent-po-mobile` |
| packKind | `map` |
| changeScope | `edit_page` |
| Lane | `mobile` · native_dual |
| Status | **confirmed** · autoApprove |
| Prior | data_analy **PASS** · hash skip · `contentHash=sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131` |
| Task | `task_f45d7dcb` |

**Cấm:** ERP.* · invent `api/v1/map-service/*` · `AddLinmMapServiceBffControllers` · Wave 4 UI clip / draw / Twin · mfeStdUrl · re-scan demo (**GAP-PO-DEMO-RESCAN-01**) · gộp sibling Lưu/Đăng nhập · ship watermark/process placeholder.

## § Mục tiêu

Wire **Mobile.Bff** tile proxy → **MapService `:5021`** (parity Web `GisBffController.GetTiles`) và Wave 3 dual-OS **TileUrl** trỏ BFF clip — **0** OSM.org/Esri/Google CDN làm SSOT prod. Overlay geojson/clusters **giữ** RMMS `{AssetDb}` qua catch-all. **Không** màn `#sc-*` mới — consumers = peer `gis-map` / `patrol-map`.

## § Context / Demo inventory (hash skip — copy analy)

| ID | Path | Loại | Notes |
|----|------|------|-------|
| CTX-01 | `docs/context/features/mobile-bff-map.md` | feature CTX | P0 · peers map-service · gis-osm-clip · gis-map · patrol-map |
| CTX-02 | `docs/plan/mobile-bff-platform-integrate/PLAN.md` | plan | Wave 2 `mobile_bff` → Wave 3 `mobile` |
| DEM-01 | `Linm.RMMS.Demo/src/demo/ios/index.html` | demo root | **không** `#sc-*` mới · **cấm** re-crawl |
| CH-01 | `specs/_data-analy/mobile-bff-map-control-hint.md` | controlHint | abs · **không** prefix `specs/{feature}/` |
| RD-01 | `specs/_data-analy/mobile-bff-map-real-data.md` | real-data §A+§B+§D | abs |
| AT-01 | `specs/_data-analy/mobile-bff-map-action-tree.md` | action-tree | 1 action = 1 feature |
| BFF-01 | `specs/_data-analy/mobile-bff-map-bff-endpoints.md` | BFF table | cite Web GetTiles |
| WEB-01 | `LINM.RMMS.Gis.Bff/Controllers/GisBffController.cs` | parity | GetTiles |

**demo:** N/A new screen · reviewUrl = Design later (peer TileUrl note · **không** prototype màn mới).

## § Delta Current vs New (`edit_page`)

| ID | Current | New | AC |
|----|---------|-----|-----|
| GAP-MOB-BFF-MAP-01 | thiếu `ServiceEndpoints:MapService` | MapService `:5021` · Docker `host.docker.internal:5021` · `AddLinmMapServiceBff` NuGet | Wave 2 BFF config |
| GAP-MOB-BFF-MAP-02 | catch-all `gis/tiles` → RMMS ApiBase | Explicit `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService | Wave 2 route |
| GAP-MAP-OSM-CDN-01 | TileUrl có thể CDN OSM/Esri | TileUrl = `{BffBase}/mobile-bff/api/v1/gis/tiles/…` · 0 openstreetmap.org | Wave 3 iOS+Android |
| KEEP-01 | `gis/clusters` · `gis/geojson/*` | **giữ** catch-all → RMMS | regression AC |
| OUT-01 | Wave 4 UI / draw | **không** trong slug | **cấm** AC |

## § controlHint (cite analy — không invent)

| Field | VN | controlHint | Kit / notes |
|-------|----|-------------|-------------|
| tileUrl | TileUrl native | Text (config) | `{Bff}/mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| tileBasemap | Lớp nền clip | MapTile | `layer=basemap` · guest 200 |
| tileOverlay | Lớp overlay MVT | MapTile | JWT · 401 no token |
| overlayGeo | Peer geojson | MapPin/Polyline | **reuse** peer · RMMS catch-all |
| mapHostPeer | Bản đồ peer | Map | **reuse** `gis-map` / `patrol-map` · **cấm** control mới |

**OMS R1–R11** (`/agent-dev-oms-map`): slug này = **TileUrl source** · R2/CDN **HARD Wave 3** · R1–R4e/R11 apply **peer** UI — **cấm** AC implement lại map chrome peer (`reuse`).

## § Tab index

`tabs: none` — không surface/tab mới (**GAP-TAB-01**). IA Tab 5 + peer map **không** đổi.

## § Screens + Pattern + action-tree

**Pattern:** N/A (no new screen · service + config edit).  
**formPattern:** N/A.  
**Grid AC / Report AC:** N/A (`packKind=map` · không list/report).

### Action-tree (1 action = 1 feature)

```
mobile-bff-map                 ← owner · Wave 2–3 · THIS FEATURE
├── ServiceEndpoints:MapService     ← cùng slug · không enqueue
├── GET gis/tiles → MapService      ← cùng slug bind
├── gis/* non-tile → RMMS           ← giữ catch-all
├── gis-map                         ← reuse TileUrl consumer · không start
├── patrol-map                      ← reuse · không start
└── map-service / gis-osm-clip      ← peer platform · không gộp
```

| Screen / surface | Zone ids | Role in slug |
|------------------|----------|--------------|
| **none** `#sc-*` mới | — | OUT |
| Peer `gis-map` / `patrol-map` | peer map host | **reuse** · Wave 3 chỉ đổi TileUrl config |
| Mobile.Bff `:5202` | route `gis/tiles` | Wave 2 owner |
| MapService `:5021` | upstream clip | verify dependency · không implement trong slug UI |

**share/reuse:** peer map = `reuse={gis-map|patrol-map}` → AC **dùng kit/map** · **cấm** AC re-implement basemap chips / draw.

## § Device AC

| ID | Scenario | Expected |
|----|----------|----------|
| AC-DEV-01 | Guest `GET …/tiles/basemap/{z}/{x}/{y}.pbf` qua BFF | 200 MVT · forward MapService · **không** fake CDN 200 |
| AC-DEV-02 | Overlay tile **không** JWT | 401 · peer overlay empty · map vẫn mở |
| AC-DEV-03 | Overlay tile **có** JWT inspector | 200 MVT từ MapService |
| AC-DEV-04 | `GET gis/geojson/*` · `gis/clusters` | vẫn RMMS `{AssetDb}` · không MapDb |
| AC-DEV-05 | Offline / empty tile | peer map mở · blank basemap ok · **cấm** hardcode OSM.org fallback SSOT |
| AC-DEV-06 | Leave-dirty | **n/a** slug (no form) · peer draw = peer LeaveConfirmModal · **cấm** native alert trong mọi surface đụng |
| AC-DEV-07 | GPS deny | **n/a** slug (GPS = peer UI) |
| AC-DEV-08 | Typography | **n/a** new labels · peer: label/tab ≥13 · field ≥16 (cite typography-analy-qa) |
| AC-DEV-09 | Dual OS TileUrl | iOS + Android cùng path BFF · `#i-*` **không** invent |
| AC-DEV-10 | Signup / xóa TK | **n/a** — CTX không signup (**GAP-PO-STORE-01** không áp) |

## § API / bind (real-data §B)

| uiField | Method path | Auth | Notes |
|---------|-------------|------|-------|
| tileUrl / tileBasemap / tileOverlay | `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` | guest basemap · JWT overlay | → MapService |
| overlayGeo / clusters | `GET gis/geojson/*` · `GET gis/clusters` | app JWT | giữ ApiBase RMMS |

**progress:** none.

## § KPI / DoD

| KPI | Đo |
|-----|-----|
| BFF tile | curl `:5202` basemap 200 · overlay 401 no JWT |
| MapService | upstream `:5021` listen lúc verify |
| Dual TileUrl | iOS+Android config = BFF origin · **0** `openstreetmap.org` trong prod TileUrl |
| Overlay GIS | geojson/clusters vẫn RMMS |
| Scope | **không** Wave 4 UI · **không** ERP.* · **không** invent map-service path |

## § Gaps (handoff)

- GAP-MOB-BFF-MAP-01 · GAP-MOB-BFF-MAP-02 · GAP-MAP-OSM-CDN-01  
- Open Q: MapService listen `:5021` tại verify · pin NuGet `Linm.Platform.MapService.Bff` parity Web — SA/Dev  
- UNCLEAR: **none**

## § Assign

| Wave | Owner slash | Scope |
|------|-------------|-------|
| 2 `mobile_bff` | Dev BFF (via TL pack · `/implement-map-stack` wave2) | MapService endpoint + explicit tiles route |
| 3 `mobile` | `/agent-dev-ios` + `/agent-dev-android` (+ OMS map R2 TileUrl) | TileUrl → BFF · dual OS |
| QA | `/agent-qa-mobile` (queued e2e) | curl tile + dual smoke · **không** chạy ở role PO |

**devSlash:** `/agent-dev-ios` + `/agent-dev-android` (+ OMS `/agent-dev-oms-map` R2 cho TileUrl).

## Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `mobile-bff-map` / `map` |
| phase_from / phase_to | `po` → `design` |
| STATUS | **confirmed** · autoApprove |
| changeScope | `edit_page` |
| Pattern / formPattern | N/A · no new screen |
| Screens | **none** `#sc-*` · peer TileUrl note only |
| Grid AC / Report AC | N/A |
| Leave | n/a slug · peer LeaveConfirmModal |
| controlHint | CH-01 · real-data RD-01 |
| Tab index | `tabs: none` |
| peerStdUrl | n/a native · peer `gis-map` / `patrol-map` |
| reviewUrl | Design: peer TileUrl config note · **không** prototype HTML mới |
| OMS | R2 HARD · cite `/agent-dev-oms-map` |
| Context / Demo | CTX-01 · DEM-01 (hash skip) |
| Open questions | MapService `:5021` verify · NuGet pin — SA |
| Next AskQuestion | `design_confirm` (autoApprove ON → self-confirm khi Design DoR) |
| Next role | `/agent-design-mobile` · **cấm** start trong task PO này (**GAP-PKT-ROLE-01**) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.09.12.1 |
| generatedAt | 2026-09-12T06:45:00.000Z |
| versionGate | ok |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| analyReuse | hash skip · control-hint + real-data + action-tree |
| taskId | `task_f45d7dcb` |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only) |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.09.12.1 versionGate=ok -->
