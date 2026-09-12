# HTML → native — mobile-bff-map

| Demo | Ý nghĩa | SwiftUI | Compose | Notes |
|------|---------|---------|---------|-------|
| `#zone-tileurl-note` `.note-title` | Title note | `LinmTopBar` | `LinmTopBar` | **Nguồn lớp nền** dual |
| `#zone-tile-url` | TileUrl config | `InfoRow` + caption | Material list item | path `{Bff}/mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` |
| `#zone-tile-basemap` | Basemap MVT guest | peer Map tile layer | same | guest 200 · **cấm** CDN |
| `#zone-tile-overlay` | Overlay MVT JWT | peer Map tile layer | same | 401 → empty · toast peer |
| `#zone-peer-cite` | Peer consumers | text cite | same | gis-map · patrol-map **reuse** |
| peer `#map-*` host | Live map | MapKit `Map` + BFF MVT | osmdroid / MapLibre + BFF MVT | OMS R2 · **cấm** WebView HTML · **cấm** invent SDK |
| toast peer | Feedback lỗi tile | `LinmToast` | same | **cấm** alert · **cấm** fake 200 CDN |

**OMS:** R2 HARD (TileUrl = BFF) · R1–R4e/R11 = peer packs — **không** AC lại chrome peer trên slug này.

**Cấm** raw M3 `NavigationBar` / `AlertDialog` khi kit đã map (`GAP-MOB-ACT-05`) · ERP.* · invent `api/v1/map-service/*`.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| generatedAt | 2026-09-12T07:00:00.000Z |
| taskId | `task_d741af34` |
