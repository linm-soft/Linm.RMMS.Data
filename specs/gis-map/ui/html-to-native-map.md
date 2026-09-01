# HTML → native — gis-map

Nguồn inventory: DA controlHint + real-data §B + PO §5 · board `ui/prototype/{ios,android}/index.html` `#sc-gis-map` · **hash skip** (không re-scan).

| Demo | Ý nghĩa | SwiftUI | Compose | Notes |
|------|---------|---------|---------|-------|
| `.nav-bar` / `.top-bar` | Nav | `LinmTopBar` | `LinmTopBar` | iOS leadingText **Tài sản** · Android icon back `#i-chevron-left` |
| `#gis-layer-hint` / trailing Lớp | Trailing iOS | `LinmTopBar` trailing TextButton | — | toast **Lớp tài sản / sự cố · chú giải** P1 · sheet **P2** · **cấm** invent layer UX P1 |
| trailing Danh sách | Trailing Android | — | `LinmTopBar` trailing TextButton | `go('asset-list')` reuse · **cấm** reimplement list |
| `.map-next-card` search glass | Search overlay | SearchField + `#i-search` | **N/A P1** | placeholder **Tìm tài sản, sự cố…** · local filter / toast · **cấm invent** search API |
| `#map-gis-host` / `#map-gis` | Live map OMS | MapKit `Map` | osmdroid / Esri `MapView` | GET `gis/geojson/*` · fail → demo OMS · **cấm** WebView HTML · **cấm** `LinmMap` kit |
| `#map-gis-bar` `.mb` | Basemap wrap | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` | Đường default on · Phố · Vệ tinh · Toàn tuyến fit |
| `#map-gis-legend` `.lg` | Legend wrap | `ChipWrap` + `LinmChip` | `FlowRow` + `LinmChip` | Tất cả · Tài sản · Sự cố · **iOS + Hành lang** |
| pin TS / SC | Map pins | Map annotation + pin glyph | same | TS từ `gis/geojson/all` · SC từ `gis/geojson/incidents` · **cấm** `incident/incidents` pin |
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
| incident Bản đồ / Xem trên bản đồ | Segment / Secondary | shared_action |

**Cấm** raw M3 `NavigationBar` / `TabView` / `AlertDialog` / `UIAlert` khi kit đã map (`GAP-MOB-ACT-05`).

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
