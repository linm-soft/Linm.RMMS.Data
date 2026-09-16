# HTML → native — gis-map

Nguồn inventory: DA controlHint + real-data §B + PO §5 · board `ui/prototype/{ios,android}/index.html` `#sc-gis-map` · **hash skip** (không re-scan).

| Demo | Ý nghĩa | SwiftUI | Compose | Notes |
|------|---------|---------|---------|-------|
| `.nav-bar` / `.top-bar` | Nav | `LinmTopBar` | `LinmTopBar` | iOS leadingText **Tài sản** · Android icon back `#i-chevron-left` |
| `#gis-layer-hint` / trailing Lớp | Trailing iOS / Android chip | `LinmTopBar` trailing TextButton | `LinmChip` `#btn-gis-layers` | sheet loại: `LinmAssetKchtPict` + tên · count · toggle · default off · tick → load |
| trailing Danh sách | Trailing Android | — | `LinmTopBar` trailing TextButton | `go('asset-list')` reuse · **cấm** reimplement list |
| `.map-next-card` search glass | Search overlay | SearchField + `#i-search` | **N/A P1** | placeholder **Tìm tài sản, sự cố…** · local filter / toast · **cấm invent** search API |
| `#map-gis-host` / `#map-gis` | Live map OMS | `GisClipMapView` MapLibre | same | GET `gis/geojson/*` · BFF MVT `{TileUrl}` · **cấm** osmdroid PBF raster · **cấm** GisMapDemoOverlay · **cấm** WebView HTML · **cấm** `LinmMap` kit |
| `#map-gis-bar` `.mb` | Basemap wrap | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` | Tiêu chuẩn default · Vệ tinh cùng clip · Toàn tuyến fit · **cấm** Đường/Phố OSM.org |
| `#map-gis-legend` `.lg` | Legend wrap | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` | Tất cả · Tài sản · Sự cố · **iOS + Hành lang** |
| pin TS / SC | Map pins | Map annotation + pin glyph | same | TS từ `gis/geojson/{type}` đã tick · **cấm** `geojson/all` on zoom · **cấm** `incident/incidents` pin |
| corridor polyline | Hành lang | MapPolyline | Polyline overlay | `gis/geojson/tuyen-duong` · load cả hai khi Tất cả |
| focus pin | Ghim từ detail | highlight annotation | same | `GET asset/road-assets/{id}` Lat/Lng · fail → fit all · **cấm** fake coords |
| toast | Feedback | `LinmToast` | same | GET fail · Lớp · **cấm** alert |
| Tab 5 shell | Home selected | `LinmTabBar` | same | **cấm** invent tab (`GAP-TAB-01`) |

### Entry (parent chrome — reuse)

| Demo | Native | Notes |
|------|--------|-------|
| hub tile `#i-scope` Xem trên bản đồ | `LinmHubTile` | `go('gis-map')` |
| hub row Bản đồ tài sản | `LinmListRow` | cùng slug |
| detail Ghim trên bản đồ | `LinmPrimaryButton` | pass Id (+ Lat/Lng) |
| incident Bản đồ / Xem trên bản đồ | Segment / Secondary | shared_action · **ẩn** khi `allowsClipMap` false |

**Cấm** raw M3 `NavigationBar` / `TabView` / `AlertDialog` / `UIAlert` khi kit đã map (`GAP-MOB-ACT-05`).
**GAP-MOB-EDIT-SIL-01:** iOS `AppRouter` dùng `$showGisMap` — **cấm** `Binding(get: { flag && state })`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:40:00.000Z |
| contentHash | sha256:gis-map-control-hint-20260831 |
| taskId | `task_81ce36d6` |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.31.2 versionGate=rechecked -->
