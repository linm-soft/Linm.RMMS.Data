# Real-data bind — gis (Kind F map)

| | |
|---|---|
| feature | `gis` |
| packKind | `map` |
| prefix | `web-bff/api/v1` · API `api/v1/gis` |
| changeScope | `edit_page` |
| taskId | `task_026922f7` |
| MapGateSlash | `/agent-dev-oms-map` |
| beRepo | `Linm.RMMS.WebService` · DOMAIN-MAP **Gis** — **cấm** ERP.WebService / Domains/Master |

## § Delta Current vs New (`edit_page` · `task_026922f7`)

| ID | Current | New |
|----|---------|-----|
| GAP-L3-REAL-DATA | Không có file real-data | Packet §A–§F đầy đủ (map §D HARD) |
| Source | Demo GeoJSON + in-memory seed only documented in CTX | Cite `GisMapController` + `GisService` + `RoadAssetEntity` / `rmms_road_assets` + `GisDrawingStore` |
| Camera | CTX P1.6 · seed layer `cameras` | §B bind `geojson/cameras` + layer toggle |
| Draw | Sibling pages live | §B drawings CRUD · §D tools on draw surface only |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `geo` · inventory | `GisMapController.GetGeoJson` · `GisService.LoadInventoryAsync` · `AppDbContext.RoadAssets` (`rmms_road_assets`) | Map mở · overlay trống · toast «Không có đối tượng trong viewport» | 4xx → local seed fallback (`gisMapSeed`) · overlayStatus = fail |
| `geo` · seed PCI | `GisMapSeed` (heatmap / road_sections / incidents / cameras) | Heatmap empty circles | same fallback |
| `geo` · drawings | `GisDrawingStore` (P1 in-memory · PostGIS DEFER) | Empty draw layer | 404 drawing · toast |
| `catalog` · layers | `GisMapSeed.Layers` · `GisDrawingStore.DrawLayers` (`purpose=live`) | Dropdown empty | hide options · keep last |
| `api` · basemap | `GisDrawingStore.LiveBasemapConfig` / `BasemapConfig` | Default OSM client | hardcode OMS defaults |
| `api` · health | `GisHealthController` / `GetHealthAsync` | — | overlayStatus idle/fail |
| `derived` · summary | `GetSummaryByTypeAsync` group `RoadAssets.Type` | counts 0 | type plan demo |

`sourceCite` = path/controller **có trong repo**. Demo HTML = zone/field tham chiếu — **không** SSOT data.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| gMapInputTextSearch | Nhập thông tin đối tượng | SearchInput | — | `gis/geojson/{layer}?search=` | — | yes | n/a |
| ddlLopDuLieu | Lớp dữ liệu | Dropdown | layer-code | `gis/layers` | — | yes | n/a |
| pciMin | PCI từ | Text (number) | — | `gis/geojson/{layer}?pciMin=` · `gis/heatmap/pci?pciMin=` | — | yes | n/a |
| pciMax | PCI đến | Text (number) | — | `gis/geojson/{layer}?pciMax=` · `gis/heatmap/pci?pciMax=` | — | yes | n/a |
| bboxReadout | Viewport bbox | Text readonly | — | client moveend → query `bbox=` | — | yes | n/a |
| heToaDo | Hệ tọa độ | Text readonly | — | static EPSG:4326 | — | yes | n/a |
| overlayStatus | Trạng thái overlay | Text readonly | — | `gis/health` (+ stub SignalR) | — | yes | n/a |
| twinAssetId | Tài sản Twin (P2) | Text | — | — (badge only) | — | yes (badge) | n/a |
| layer.road_sections | Đoạn đường | Checkbox | — | `gis/geojson/road_sections?bbox=&lod=` | — | yes | n/a |
| layer.pci_heatmap | Heatmap PCI | Checkbox | — | `gis/heatmap/pci?bbox=` | — | yes | n/a |
| layer.incidents | Sự cố | Checkbox | — | `gis/geojson/incidents?bbox=` | — | yes | n/a |
| layer.cameras | Camera ITS | Checkbox | — | `gis/geojson/cameras?bbox=` | — | yes | n/a |
| basemap | Lớp nền | Dropdown/chips | basemap | `gis/basemap-config` | — | yes | n/a |
| clusters | Cluster LOD | Map | — | `gis/clusters?bbox=&zoom=&layer=` | — | yes | n/a |
| typeSummary | Thống kê loại | Text/chip | — | `gis/summary-by-type` | — | yes | n/a |
| drawing.* | Geometry draw (sibling) | Map tools | draw-layer | `gis/drawings` · `gis/layers?purpose=live` | `layerCode` · `geometry` · geomType · SRID 4326 | yes (`/gis/draw*`) | n/a |

**BFF:** `web-bff/api/v1/gis/*` proxy → `api/v1/gis/*` (`GisBffController`).  
**Cấm** invent `api/v1/so-gis/*` · ERP Master · prefix `/rmms/`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| layer-code (monitor) | `GET gis/layers` | `GisMapSeed.Layers` · values `road_sections` · `pci_heatmap` · `incidents` · `cameras` · `3d_tiles` | Dropdown nhãn demo cứng không gọi API |
| layer-code (draw) | `GET gis/layers?purpose=live` | `GisDrawingStore.DrawLayers` · `tuyen-duong` · `cot-km` · `bien-bao` · `cau` · `ham` · `ho-lan` · `cong` · `ta-luy` · `mat-duong` | invent layer code ngoài store |
| basemap | `GET gis/basemap-config` | LiveBasemapConfig osm/esri/sat | Google JS key trên client P1 |
| asset-type (derived) | `GET gis/summary-by-type` | `RoadAssets.Type` → `GisInventoryMapper.LayerCodeForType` | hardcode count |

## §D — Map / vẽ (`packKind=map` HARD)

| Mục | Ghi |
|-----|-----|
| Engine | Leaflet OMS — CTX `gis.md` + `/agent-dev-oms-map` · MFE `useLeaflet` · `mapLineLevels.ts` · **cấm** invent Cesium trên `/gis` P1 |
| Tools (monitor) | Select · Fit · zoom · geolocate · isolate — **không** Point/Line/Polygon trên monitor |
| Tools (draw sibling) | Point / LineString / Polygon — CTX `gis-draw-google` · pages `/gis/draw` · `/gis/draw-google` |
| Layer | Monitor codes từ `GisMapSeed.Layers` · draw codes từ `DrawLayers` — **không** nhãn demo làm code |
| Load | `GET gis/geojson/{layer}?bbox=&pciMin=&pciMax=&search=&route=&lod=&skip=&take=` · `GET gis/heatmap/pci` · `GET gis/clusters` |
| Save | `POST/PUT gis/drawings` body `layerCode` + GeoJSON `geometry` · SRID 4326 · **chỉ** draw surface |
| Pick | Draw: chọn lớp **trước** khi vẽ = **yes** (`purpose=live` layers) · Monitor: toggle lớp sidebar |
| Fit | Overview `OVERVIEW_FIT_MAX_ZOOM` ≤13 · isolate `FOCUS_FIT_MAX_ZOOM` ≤15 |
| Line levels | Corridor pane `rmms-corridor` + track `rmms-track` · ensureLinePaneStyles (GAP-MAP-LINE-LEVEL) · isolate focus (GAP-MAP-LINE-FOCUS) |
| OSRM | `osrmCenterline` / route snap R8/R9 · fallback nét đứt |

## §E — Progress / vòng đời

`progress: none` — map monitor không có workflow status entity. Overlay status = health/stub only (không PATCH vòng đời).

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = data thật / seed BE» · copy § Delta · Ask nếu UNCLEAR (none) |
| Design | control-map khớp §B · giữ reviewUrl prototype |
| SA | giữ path đã cite · PostGIS migration = DEFER gap |
| Dev web | Wire §B + `/agent-dev-oms-map` §D · **không** trong task `roleOnly=data_analy` |
| QA | queued sau Dev — scenarios map layers/Fit/isolate |

## § Empty / fail

| Case | Behavior |
|------|----------|
| geojson empty | Map vẫn mở · results empty · props clear |
| geojson/BFF fail | Local seed fallback · overlayStatus fail · **cấm** blank white page |
| layers fail | Keep last known · or seed monitor 4+cameras |
| heatmap fail | Toggle off + toast |
| drawing 404 | Toast · list refresh |
| health fail | overlayStatus = offline stub |

## § Cấm

| ❌ | ✅ |
|----|-----|
| Mock demo-json làm SSOT API | Cite `GisMapController` / BFF |
| ERP.WebService / Domains/Master | `Linm.RMMS.WebService` Gis only |
| Invent tiles Martin path P1 | GeoJSON + heatmap seed OK |
| Cesium embed trên `/gis` P1 | Twin badge + link only |
| `window.alert` / `confirm` | toast / panel / LeaveConfirm |
| Skip §D vì «đã ship map» | §D REQUIRED mọi edit_page map |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-25T15:06:52.075Z |
| versionGate | rechecked |
| contentHash | sha256:131af800fbec56a23f6233a7ad257c244d7bf777f1a411ccf39b3fc2fe1349f0 |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHash=sha256:131af800fbec56a23f6233a7ad257c244d7bf777f1a411ccf39b3fc2fe1349f0 -->
