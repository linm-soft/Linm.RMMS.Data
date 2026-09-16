# Data-analy — gis-map (controlHint · mobile Xem trên bản đồ)

| | |
|---|---|
| feature | `gis-map` |
| title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`map`** |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_23d7eba0` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-gis-map` · `DES-MOB-GIS` · `DES-MOB-OMS-GIS` · `map-oms.js` `initGis` · entry hub `#i-scope` |
| ctx | `docs/context/features/gis-map.md` · peer `gis.md` · `asset-hub.md` · `asset-detail.md` · DOMAIN-MAP Gis |
| generatedAt | `2026-08-31T00:35:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/gis-map` · invent Finance paths · gộp web Kind F / draw / Twin · ERP.* · mfeStdUrl · WebView HTML · fake toast · ship hardcode pins khi BFF live.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`gis-map-bff-endpoints.md`](gis-map-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`gis-map-action-tree.md`](gis-map-action-tree.md) | 7 tree + share/reuse |
| [`gis-map-real-data.md`](gis-map-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (CTX + demo + GIS GET) | Surface |
|----|------------------|----------------------------|---------|
| GAP-MOB-GIS-NAV-01 | Hub/detail/incident → toast / pending | Push `#sc-gis-map` · back → `asset-hub` | map |
| GAP-MOB-GIS-SCR-01 | Không màn bản đồ TS | Full map OMS · basemap · legend · overlay | screen |
| GAP-MOB-GIS-DATA-01 | — | GET `gis/geojson/*` · fail → demo OMS · **cấm** mock-only ship | BFF |
| GAP-MOB-GIS-FOCUS-01 | — | Detail pass Id → center pin | CTA entry |
| GAP-MOB-GIS-SEARCH-01 | — | iOS search overlay · Android thiếu | dual |
| GAP-MOB-GIS-LAYER-01 | — | iOS Lớp toast · Android Danh sách | dual |
| GAP-MOB-GIS-CORRIDOR-LEGEND-01 | — | iOS Hành lang · Android thiếu | dual |
| GAP-MOB-GIS-SC-01 | — | SC = GIS incidents layer · IncidentDto no Lat | bind |

**Không** đổi (OUT): web 20-action toolbar · heatmap PCI · Cesium · draw CRUD · camera ITS slideout · patrol-map.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| Map | **yes** | OMS live · iOS MapKit · Android OSM/Esri tiles · **cấm** WebView |
| GPS | display/focus | Center từ Lat/Lng detail · **không** bắt buộc device GPS P1 |
| Camera | n/a | sibling AI |
| Offline | yes | GET fail → demo `GIS_ASSETS` + corridor · map **vẫn mở** · toast lỗi |
| Biometric | n/a | |
| Push | n/a | |
| token | Keychain / Encrypted | Bearer trên GET gis/asset |

## § Tab index

`tabs: none` trên surface — demo `data-tab="home"` (shell Tab **Trang chủ** giữ). **Không** segment trên map (`GAP-TAB-01`). Entry hub/detail/incident — không đổi IA Tab 5.

## § Demo dual

| # | iOS `#sc-gis-map` | Android `#sc-gis-map` | `#i-*` |
|---|-------------------|-----------------------|--------|
| Back | text **Tài sản** + chevron | icon-only chevron | `#i-chevron-left` |
| Title | Bản đồ tài sản | **same** | — |
| Trailing | **Lớp** → toast | **Danh sách** → `asset-list` | — |
| Search overlay | **Tìm tài sản, sự cố…** + `#i-search` | **thiếu** | `#i-search` · GAP-SEARCH-01 |
| Basemap | Đường · Phố · Vệ tinh · Toàn tuyến | **same** | — |
| Legend | Tất cả · Tài sản · Sự cố · **Hành lang** | Tất cả · Tài sản · Sự cố (**không** Hành lang) | GAP-CORRIDOR-LEGEND-01 |
| Map | Leaflet demo host | **same** demo · native MapKit/OSM ship | — |
| Hub entry | tile **Xem trên bản đồ** `#i-scope` | **same** | `#i-scope` |
| Hub row | Bản đồ tài sản `#i-scope` | **same** | `#i-scope` |

**Cấm** invent icon. Chrome Lớp vs Danh sách = Design parity — không đổi field bind.

## controlHint — `#sc-gis-map` (`DES-MOB-GIS`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tài sản | BackButton | label 13 / 16 | `LinmTopBar` leading `#i-chevron-left` | `go('asset-hub')` / pop |
| title | Bản đồ tài sản | NavTitle | 17 | `LinmTopBar` | fixed |
| navLayers | Lớp | TextButton | 13 | `LinmTopBar` trailing | **iOS** · toast P1 · sheet **P2** |
| navList | Danh sách | TextButton | 13 | `LinmTopBar` trailing | **Android** · `go('asset-list')` |
| searchHint | Tìm tài sản, sự cố… | SearchField | 15 | overlay glass `#i-search` | **iOS** · local filter / toast · **cấm invent** search API |
| mapHost | Bản đồ GIS overlay OMS | Map | full | MapKit / OSM · `DES-MOB-OMS-GIS` | **cấm** WebView HTML |
| baseOsm | Đường | Chip | 13 | `LinmChip` | default on · OSM |
| baseEsri | Phố | Chip | 13 | `LinmChip` | Esri Streets |
| baseSat | Vệ tinh | Chip | 13 | `LinmChip` | imagery |
| fitAll | Toàn tuyến | Chip | 13 | `LinmChip` | fit overview |
| lgAll | Tất cả | Chip | 13 | `LinmChip` | isolate all |
| lgTs | Tài sản | Chip | 13 | `LinmChip` | isolate `ts` |
| lgSc | Sự cố | Chip | 13 | `LinmChip` | isolate `sc` |
| lgCorridor | Hành lang | Chip | 13 | `LinmChip` | **iOS** · isolate corridor · dual GAP |
| pinTs | (popup TS) | MapPin | — | pin glyph | bind geojson / focus |
| pinSc | (popup SC) | MapPin | — | pin glyph | GIS incidents layer |
| toastErr | (lỗi mạng) | Toast | 13–16 | `LinmToast` | GET fail · map vẫn mở |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| tileGis | Xem trên bản đồ | HubTile | `LinmHubTile` `#i-scope` | `asset-hub` · `go('gis-map')` |
| rowGis | Bản đồ tài sản | ListRow | `LinmListRow` `#i-scope` | cùng slug tile |
| btnPinMap | Ghim trên bản đồ | PrimaryButton | detail | `asset-detail` · pass Id/Lat/Lng |
| segMap / CTA | Bản đồ / Xem trên bản đồ | Segment / Secondary | incident | shared_action · reuse |

## UNCLEAR

**none** trên path GET `gis/geojson/*` live. Open Q = dual search/Lớp/Hành lang · SC geometry từ GIS vs Incident — PO/Design · **không** bịa path.

## Handoff → PO

| Field | Value |
|-------|-------|
| DoD | Hub/detail → map · GET geojson overlay · basemap+legend · dual chrome · demo fallback |
| Gaps | SEARCH-01 · LAYER-01 · CORRIDOR-LEGEND-01 · SC-01 · FOCUS-01 |
| OUT | invent path · ERP.* · mfeStdUrl · WebView · draw/heatmap/Twin · gộp list |
| Next | PO `po/requirement.md` · **cấm** start Design/Dev trong task data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:35:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:gis-map-control-hint-20260831 |
| ctxContentHash | sha256:gis-map-ctx-20260831 |
| demoContentHash | sha256:mobile-p1-sc-gis-map-20260831 |
| taskId | `task_23d7eba0` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
