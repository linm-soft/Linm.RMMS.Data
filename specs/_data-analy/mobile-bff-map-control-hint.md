# Data-analy — mobile-bff-map (controlHint · Mobile.Bff MapService tile)

| | |
|---|---|
| feature | `mobile-bff-map` |
| title | [Mobile] Mobile.Bff × MapService (tile clip) |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`map`** |
| changeScope | `edit_page` |
| status | **done** |
| taskId | `task_acda32fe` |
| autoApprove | queue Autopilot |
| demo | `Linm.RMMS.Demo/src/demo/ios/index.html` — **không** `#sc-*` mới · consumers = peer `gis-map` / `patrol-map` TileUrl |
| ctx | `docs/context/features/mobile-bff-map.md` · peers `map-service` · `gis-osm-clip` · `gis-map` · `patrol-map` |
| bff | `Linm.RMMS.Mobile.Bff` · `:5202` · prefix `mobile-bff/api/v1` |
| generatedAt | `2026-09-12T06:40:00.000Z` |

**Cấm:** invent `api/v1/map-service/*` · `AddLinmMapServiceBffControllers` · `{MapDb}` thứ 2 · ERP.* · mfeStdUrl · gộp Wave 4 UI clip vào slug · OSM.org/Esri/Google tile URL ship.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`mobile-bff-map-bff-endpoints.md`](mobile-bff-map-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`mobile-bff-map-action-tree.md`](mobile-bff-map-action-tree.md) | 7 tree + share/reuse |
| [`mobile-bff-map-real-data.md`](mobile-bff-map-real-data.md) | 6b real-data · §D map |

## § Delta Current vs New (`edit_page`)

| ID | Current | New (CTX + Web parity) | Surface |
|----|---------|------------------------|---------|
| GAP-MOB-BFF-MAP-01 | `appsettings` **không** `ServiceEndpoints:MapService` | `MapService` = `:5021` · Docker `host.docker.internal:5021` · `AddLinmMapServiceBff` NuGet | BFF config |
| GAP-MOB-BFF-MAP-02 | Catch-all `MobileApiProxyController` → `gis/tiles` đi `ApiBase` RMMS | Explicit `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService (parity `GisBffController.GetTiles`) | BFF route |
| GAP-MAP-OSM-CDN-01 | Native TileUrl có thể còn CDN OSM/Esri | Wave 3: TileUrl = `{BffBase}/mobile-bff/api/v1/gis/tiles/…` · **0** `openstreetmap.org` | iOS+Android |
| KEEP-01 | `gis/clusters` · `gis/geojson/*` · drawings | **giữ** catch-all → RMMS `{AssetDb}` | BFF proxy |
| OUT-01 | Wave 4 UI clip / mới màn map | **không** trong slug — `/implement-gis-map` / `/edit-mobile-feature` | OUT |

**Không** đổi (OUT): màn `#sc-gis-map` layout · draw CRUD · heatmap · Twin · ERP WebService / Domains/Master.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| Map | **yes** | packKind=map · R1–R11 OMS · TileUrl BFF clip · overlay RMMS |
| GPS | n/a | slug = BFF+TileUrl · GPS thuộc peer map UI |
| Camera | n/a | |
| Offline | tile cache client | empty/401 overlay = UI peer · basemap guest OK |
| Biometric | n/a | |
| Push | n/a | |
| token | Keychain / Encrypted | JWT overlay tiles · guest `basemap` |

## § Tab index

`tabs: none` — **không** surface/tab mới (`GAP-TAB-01`). IA Tab 5 + peer map screens **không** đổi trong slug.

## § Demo dual

| # | iOS | Android | Note |
|---|-----|---------|------|
| Screen mới | **không** | **không** | CTX §2 |
| TileUrl | BFF origin | BFF origin | Wave 3 · cùng path |
| Checklist | curl `:5202` tile | same | guest basemap 200 · overlay 401 no JWT |
| `#i-*` | — | — | **cấm** invent icon · reuse peer map chrome |

## controlHint — BFF / TileUrl (không form field mới)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| tileBasemap | Lớp nền clip | MapTile | — | MapKit / OSM style từ **BFF** MVT | `layer=basemap` · guest |
| tileOverlay | Lớp overlay MVT | MapTile | — | cùng host BFF | JWT inspector · 401 không token |
| tileUrlConfig | URL tile native | Text (config) | — | iOS+Android `TileUrl` | `{BffBase}/mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| mapHostPeer | Bản đồ peer | Map | full | peer `gis-map` / `patrol-map` | **reuse** · không control mới slug |

### OMS R1–R11 (cite `/agent-dev-oms-map` — apply peer UI · slug này = TileUrl source)

| R | Áp dụng slug | Note |
|---|--------------|------|
| R1–R4e | peer map UI | slug **không** ship demo HTML map |
| R2 / CDN | **HARD Wave 3** | prod TileUrl = BFF clip · **cấm** OSM.org CDN |
| R11 fit | peer | clip fill · không đổi ở BFF |

## UNCLEAR

**none** trên path tile (Web `GisBffController.GetTiles` live). Open Q = MapService listen `:5021` lúc verify · pin NuGet `Linm.Platform.MapService.Bff` parity Web — SA/Dev · **không** bịa path.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | BFF tile → MapService · overlay GIS RMMS · dual TileUrl BFF · 0 CDN OSM |
| Gaps | GAP-MOB-BFF-MAP-01 · GAP-MOB-BFF-MAP-02 · GAP-MAP-OSM-CDN-01 |
| OUT | invent map-service path · AddLinmMapServiceBffControllers · Wave 4 UI · ERP.* |
| Next | PO `po/requirement.md` · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| generatedAt | 2026-09-12T06:40:00.000Z |
| versionGate | ok |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| sources | CTX + `GisBffController.cs` + `MobileApiProxyController.cs` + `appsettings.json` |
| taskId | `task_acda32fe` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.12.1 versionGate=ok -->
