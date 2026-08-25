# Data-analy — controlHint — gis (Kind F map)

| Field | Value |
|-------|-------|
| feature | `gis` |
| packKind | `map` |
| mode | `feature_context` (`edit_page` · NEW task `task_026922f7`) |
| status | `done` |
| changeScope | `edit_page` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.25.01` |
| rulesVersion | `2026.08.25.4` |
| versionGate | `rechecked` |
| contentHash | `sha256:131af800fbec56a23f6233a7ad257c244d7bf777f1a411ccf39b3fc2fe1349f0` |
| analyzedAt | `2026-08-25T15:06:52.075Z` |
| taskId | `task_026922f7` |
| realData | `specs/_data-analy/features/gis-real-data.md` |
| mfeStdRoute | `/gis` |
| mfeStdUrl | `http://localhost:9302/gis` |

## § Delta Current vs New (`edit_page` · `task_026922f7`)

Giữ PO/Design/SA/TL/implement/QA/Review artifacts đã confirmed (`task_54063d94`). Delta **bắt buộc** pack edit:

| ID | Current (prior Review `task_54063d94`) | New (SSOT) | Surface |
|----|----------------------------------------|------------|---------|
| GAP-L3-REAL-DATA | **Thiếu** `gis-real-data.md` | §A+§B+§D bind layers/geojson/heatmap/drawings/clusters/summary · RoadAssets cite | data-analy |
| GAP-DA-MAP-01 | control-hint cũ thiếu § Map OMS factors | § Map engine OMS/OSRM · Fit ≤13 · line levels R7b/R7c · isolate focus | data-analy → Dev gate |
| GAP-HINT-CAM | CTX P1.6 camera · seed `cameras` · hint chưa ghi | Layer toggle «Camera ITS» + 1-click panel (slideout live DEFER Camera MFE) | map |
| GAP-HINT-DRAW | Drawings API + draw layers live · hint chỉ monitor 4 lớp | Document `purpose=live` layers · drawings CRUD paths (sibling draw pages) | map / draw |
| GAP-HARNESS-02 | STATUS `task_54063d94` closed · data_analy pending vs real ship | Sync `task_026922f7` · analy done · later roles pending | docs |

**Không** đổi: Kind F shell (sidebar · toolbar · map-host/bar · legend · results · props) · route `/gis` · BE `api/v1/gis` + BFF `web-bff/api/v1/gis` · **cấm** ERP.WebService / Domains/Master · Cesium Twin = badge/link P2 · PostGIS tiles DEFER · SignalR = stub.

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput / Dropdown khi đã có bảng này.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/gis.md` | `30d754f3588dc83461595c7365a06b07b456e1790ad49f0cb514ba3fbf3f40a1` |
| Control map | `docs/context/_raw/legacy-govone/demo-maps/gis-control-map.md` | `53787ffe729cf7db765cbe81e9533d8965f5b9e43c7eab566da2db5d32bd1fff` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/gis-demo.html` | `3c98b0ca29c6b0352d8e059ec448be7330e3272394a8a563fc3c4c2d723e57c7` |
| Demo page | `Linm.RMMS.Demo/src/demo/gis/gis.html` | `3a717f07804dca5d615e3623b14eefa7b66854a8279e074d57e8ded396a657cb` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · domain **Gis** | cite |
| Controller | `Domains/Gis/Controllers/GisMapController.cs` · `GisBffController.cs` | cite |
| MFE | `Linm.Web.RMMS.Gis` · `GisListPage` · `mapLineLevels.ts` · `services/gis/endpoint.ts` | cite |

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header / title | GIS bản đồ 2D — **cấm** CRUD «Thêm mới» trên map chrome |
| B | Toolbar | Search · Lớp dữ liệu · PCI min/max · Lấy dữ liệu · Làm mới overlay · Heatmap · Lớp nền · Fit · Twin P2 · Mở vẽ |
| Sidebar | Tabs | Lớp bản đồ · Chú giải · Thuộc tính · Kết quả |
| Map | Kind F host | Leaflet live · map-host → map-bar → legend · OMS R1–R11 |
| Results | Table dock | Select feature → props · isolate Fit focus |
| Props | Panel | Selected geometry / asset fields |

## Map tech factors (`packKind=map`)

| Factor | P1 | Notes |
|--------|----|-------|
| Engine | **yes** | `/agent-dev-oms-map` · Leaflet OMS |
| Basemap | OSM VI default · Esri · sat `maxNativeZoom: 17` | `GET basemap-config` |
| Fit | overview `maxZoom` ≤13 · isolate focus ≤15 | R11 · R7c |
| Line levels | corridor pane + track pane · isolate | R7b/R7c · `mapLineLevels.ts` |
| OSRM | route/snap when corridor | R8/R9 · fallback dashed |
| GPS geolocate | toolbar «Vị trí của tôi» | browser geolocation |
| Draw tools | sibling `/gis/draw*` | Point/Line/Polygon — **không** invent trên monitor |
| Offline | map vẫn mở | BFF fail → local seed fallback |

## Control hint cluster (filter / props)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| gMapInputTextSearch | Nhập thông tin đối tượng | `SearchInput` | text | Toolbar search → `geojson?search=` |
| ddlLopDuLieu | Lớp dữ liệu | `Dropdown` | enum | từ `GET layers` · **cấm** hardcode VN-only prod |
| pciMin | PCI từ | `Text` (number) | number | 0–100 |
| pciMax | PCI đến | `Text` (number) | number | 0–100 |
| bboxReadout | Viewport bbox | `Text` | readonly | map moveend |
| heToaDo | Hệ tọa độ | `Text` | readonly | EPSG:4326 |
| overlayStatus | Trạng thái overlay | `Text` | readonly | SignalR stub |
| twinAssetId | Tài sản Twin (P2) | `Text` | optional | badge P2 only |

## Layer toggles (sidebar)

| key | controlHint | DoD |
|-----|-------------|-----|
| road_sections | Checkbox | ON default · corridor/track |
| pci_heatmap | Checkbox | toggle heatmap circles |
| incidents | Checkbox | pin overlay |
| cameras | Checkbox | Camera ITS · Online/Offline · 1-click panel |
| 3d_tiles | Checkbox disabled + badge P2 | Twin link only |

## Lookup / map APIs (SA cite)

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| basemap | `GET /api/v1/gis/basemap-config` | Lớp nền |
| layers | `GET /api/v1/gis/layers` | Dropdown ddlLopDuLieu |
| layers (draw) | `GET /api/v1/gis/layers?purpose=live` | draw shell layers |
| geojson | `GET /api/v1/gis/geojson/{layer}?bbox=&pciMin=&pciMax=&search=&lod=` | map render |
| heatmap | `GET /api/v1/gis/heatmap/pci?bbox=` | heatmap toggle |
| clusters | `GET /api/v1/gis/clusters?bbox=&zoom=&layer=` | cluster LOD |
| summary | `GET /api/v1/gis/summary-by-type` | type plan / counts |
| drawings | `GET/POST/PUT/DELETE /api/v1/gis/drawings` | sibling draw |
| health | `GET /api/v1/gis/health` | overlay status |

**Prefix BFF:** `web-bff/api/v1/gis` · **cấm** invent path ngoài DOMAIN-MAP Gis.

## Actions (inventory · Design chốt)

| label | kind | zone |
|-------|------|------|
| Lớp bản đồ / Chú giải / Thuộc tính / Kết quả | action | sidebar tabs |
| Lấy dữ liệu | nav | toolbar |
| Làm mới overlay | action | toolbar |
| Heatmap PCI | action | toolbar |
| Lớp nền | action | toolbar |
| Vị trí của tôi · Fit · + · − | action | map |
| Chụp màn hình · Xuất bản đồ | export | toolbar (stub OK P1) |
| Digital Twin 3D | nav | toolbar · P2 badge |
| Mở vẽ Google / live | nav | toolbar → `/gis/draw*` |
| Tìm kiếm | filter | toolbar |

UNCLEAR = **none**.

## Handoff

→ PO: Kind F map DoD · copy § Delta vào requirement § Current vs New  
→ Design: zones + control-map khớp bảng trên · giữ prototype/reviewUrl  
→ SA: giữ path DOMAIN-MAP Gis đã cite trên real-data  
→ Dev: `/agent-dev-oms-map` (OMS · Fit · line levels) — **không** start trong task data_analy này

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-25T15:06:52.075Z |
| versionGate | rechecked |
| contentHash | sha256:131af800fbec56a23f6233a7ad257c244d7bf777f1a411ccf39b3fc2fe1349f0 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHash=sha256:131af800fbec56a23f6233a7ad257c244d7bf777f1a411ccf39b3fc2fe1349f0 -->
