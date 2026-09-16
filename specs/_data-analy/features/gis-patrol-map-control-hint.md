# Data-analy — controlHint — gis-patrol-map (map · leftover + ảnh inspect)

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| packKind | `map` |
| mode | `feature_context` (`edit_page` · NEW AutocodeTask · CTX + live MFE/BE cite · demo N/A) |
| changeScope | `edit_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.1` |
| versionGate | `ok` |
| contentHash | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| analyzedAt | `2026-09-12T05:45:00.000Z` |
| taskId | `task_fe94573e` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/gis-patrol-map-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · route **`/gis/tuan-duong`** |
| mfeStdUrl | `http://localhost:9301/gis-patrol-map` · live page `/gis/tuan-duong` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` · `/gis-tai-san-snap` · `/map-snap-centerline` |
| FileGate | `/init-bff-file` + `/integrate-file-upload-web` · **cấm** `/implement-file-service` |
| runMode | `full_pipeline` · E2E QA queued |
| meeting | `Họp 04/09 — 5 / W5-4` · leftover Dev + ảnh tuần đường trên inspect |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype/reviewUrl. SA **chốt** media field = FileService guid.  
> **Giữ** PO/Design artifacts đã confirm (`design_confirm=approve` · route `/gis/tuan-duong` keep).  
> Demo = **N/A** — zone/field từ CTX + live page · **cấm** invent demo-json SSOT.

## Sources

| Source | Path | sha256 / cite |
|--------|------|---------------|
| Context | `docs/context/features/gis-patrol-map.md` | `e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| Demo | N/A | — |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Patrol `api/v1/patrol` | cite |
| Controller | `Domains/Patrol/Controllers/PatrolSessionsController.cs` | `api/v1/patrol/sessions` · `…/{id}/check-ins` |
| BFF Patrol | `PatrolSessionsBffController.cs` | `web-bff/api/v1/patrol/sessions` |
| DTO | `PatrolCheckInDtos.cs` · `PhotoLocalIds` | media ids trên check-in |
| File host | `bff/src/RMMS.Service.Bff` · NuGet `Linm.Platform.FileService.Bff` | `web-bff/api/v1/files/*` |
| MFE page | `GisPatrolMapPage.tsx` · `animateAlongPath.ts` · `vinhPatrolSeed.ts` | Kind map patrol |
| MFE svc | `services/patrol/patrolService.ts` · `responseModel.ts` | GET list + check-ins |
| Peer chrome | `gis-draw-live` · **cấm** lớp tài sản trên tuần đường | CTX §2 |
| Mobile copy | `patrol-home` · `patrol-map` · `#sc-patrol-detail` | parity Chi tiết |
| Seed | `local-script/seed-nghe-an-mock.sql` · waypoints `map-oms.js` | Vinh–Nghệ An |

## § Delta Current vs New (`edit_page` · `task_fe94573e` · họp 04/09 — 5 / W5-4)

Giữ shell đã ship (tabs Tuần đường / Tuần kiểm / Chi tiết · list person · clip GIS · `routeDrivingTrack` · pin badge xanh/đỏ · **cấm** lớp TS / Fit chip / menu ha-tang). Delta **NEW** = hoàn leftover + **ảnh tuần đường trên map inspect**:

| ID | Current (live / prior) | New (SSOT họp + FileService) | Surface |
|----|------------------------|------------------------------|---------|
| GAP-WEB-EDIT-01 | Context lock — menu/tabs đúng | **Giữ** · **cấm** re-add lớp TS / Lớp / Chú giải | shell |
| GAP-MAP-PATROL-GPS-01 | Marker = check-in GPS · fallback seed Vinh | **Giữ** · leftover Dev nếu thiếu parity | map pins |
| GAP-MAP-PATROL-SNAP-01 | Track = `routeDrivingTrack` · **cấm** `/match` 100m | **Giữ** · skill `/gis-tai-san-snap` | track |
| GAP-MAP-PATROL-PIN-01 | Badge xanh+giờ / đỏ «Chưa» | **Giữ** | pin |
| GAP-MAP-CLICK-ZOOM | Click pin → `{MapPopup}` · **cấm** title-only / `setView` | **Hoàn leftover** nếu popup còn title-only | popup |
| GAP-MAP-PATROL-PHOTO-01 | Check-in có `photoLocalIds` API · **UI map không gallery** trên inspect | Click pin / chọn điểm tuần → gallery **ảnh tuần đường** · persist **file id (guid)** · resign mỗi lần xem | Inspect / MapPopup |
| GAP-MAP-PATROL-FILE-HARD | — | Reuse FileService **đang có** · host `RMMS.Service.Bff` · `web-bff/api/v1/files/*` · **cấm** `/implement-file-service` · **cấm** copy `FilesController` · **cấm** invent `api/v1/nghiem-thu-files` · **cấm** persist/log full presigned URL · lane **web** only | SA/Dev |
| GAP-MAP-OMS-KEEP | OMS R1–R11 peer GIS list | **Giữ** · Dev gate `/agent-dev-oms-map` khi đụng paint/Fit/line — **không** regress | map host |
| GAP-DA-NAME-PHOTO | Field DTO `PhotoLocalIds` | SA: treat values as FileService **guid** (resign) · **cấm** invent resource mới · rename optional later | contract |

**Không** đổi: route `/gis/tuan-duong` · 3 tabs · BE prefix `api/v1/patrol` · **cấm** invent `api/v1/gis-patrol-map` · **cấm ERP.*** · PO/Design confirmed · mobile lane **off**.

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| Nav shell | 3 GIS items | Bản đồ tài sản · **Tuần đường** · Camera — **cấm** ha-tang trên page này |
| Sidebar tabs | 3 | **Tuần đường** · **Tuần kiểm** · **Chi tiết** — **cấm** Lớp / Chú giải / Thuộc tính / Kết quả / tree TS |
| List | Person rows | Họ tên · tuyến · badge trạng thái → click Chi tiết + animate |
| Chi tiết | Mobile `#sc-patrol-detail` parity | Họ tên · Danh sách tuyến · Lịch sử hoạt động (check-in GPS) |
| Map host | Peer live clip | Tiêu chuẩn \| Vệ tinh · Vị trí của tôi · **cấm** lớp TS · **cấm** Fit chip |
| Animation | raf interpolate | `routeDrivingTrack` · pin teardrop · rider arc-length · **cấm** `setIcon` mỗi frame |
| MapPopup / inspect | `/map-inspect-popup` | Label điểm · GPS · status · **NEW** gallery ảnh tuần đường |
| Legend | **Không** isolate legend MFE | peer GIS list |

## Map tech factors (`packKind=map`)

| Factor | P1 | Notes |
|--------|----|-------|
| Engine | **yes** | `/agent-dev-oms-map` · Leaflet · **cấm** Cesium |
| Basemap | clip BFF · chips Tiêu chuẩn/Vệ tinh | peer `gis-draw-live` · **cấm** OSM.org/Esri DTO |
| Fit | load = `fitVnClipMap` · **cấm** Fit chip trên map-bar | R11 · CTX |
| Line levels | corridor + track panes | R7b · `routeDrivingTrack` |
| OSRM | highway driving bake `{LineIndex}` · **cấm** `/match` đường nhỏ | R8 · GAP-MAP-PATROL-SNAP-01 |
| GPS geolocate | «Vị trí của tôi» | map-bar |
| Draw tools | **display + animate only** | **cấm** Point/Line/Polygon invent |
| Inspect media | FileService resign | `photoLocalIds` → guid view |
| Click | popup only · **cấm** auto `setView` | GAP-MAP-CLICK-ZOOM |
| Offline | map mở | BFF trống → seed Vinh · gallery empty |

## Control hint — list / detail (giữ)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| list.personName | Họ tên | `Text` | — | row |
| list.route | Tuyến | `Text` | — | row |
| list.status | Trạng thái | `Badge` | — | closed set session status |
| detail.name | Họ tên | `Text` | — | Chi tiết |
| detail.routes | Danh sách tuyến đường | `List` readonly | — | parity mobile |
| detail.history | Lịch sử hoạt động | `Timeline` / list | — | check-in GPS |
| sideTab | Tab sidebar | `TabGroup` | — | 3 tabs fixed |

## Control hint — map / inspect / media (delta)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| map.basemapChip | Lớp nền | `ChipGroup` | basemap | Tiêu chuẩn \| Vệ tinh |
| map.btnLocateMe | Vị trí của tôi | `Button` | — | map-bar |
| map.track | Nét tuần | `MapPolyline` | — | OSRM driving · line levels |
| map.pinDone | Pin đã check-in | `MapPin` + badge xanh + giờ | — | GAP-MAP-PATROL-PIN-01 |
| map.pinPending | Pin chưa | `MapPin` + badge đỏ «Chưa» | — | |
| inspect.label | Điểm tuần | `Text` | — | `planPointLabel` |
| inspect.gps | GPS | `Text` | — | lat,lng |
| inspect.status | Trạng thái điểm | `Badge` | — | done / pending / skipped |
| inspect.content | Ghi chú | `Text` | — | optional |
| inspect.photoIds | Ảnh tuần đường | `ImageGallery` | FileService | **GAP-MAP-PATROL-PHOTO-01** · fileIds · resign GET |
| inspect.photoEmpty | Empty gallery | `EmptyState` | — | «Chưa có ảnh» |

## Lookup / map APIs (SA cite)

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| sessions | `GET /api/v1/patrol/sessions` | list / tabs |
| check-ins | `GET /api/v1/patrol/sessions/{id}/check-ins` | pins · history · photos |
| BFF | `web-bff/api/v1/patrol/sessions` (+ check-ins) | MFE |
| files | `web-bff/api/v1/files/*` | resign gallery |
| basemap/clip | peer Gis live (không invent patrol basemap) | chips |

## UNCLEAR

| id | Q | Default nếu Design/SA silent |
|----|---|------------------------------|
| U-PHOTO-FIELD | `PhotoLocalIds` đã là FileService guid hay local-path legacy? | SA: **guid FileService** · seed/demo empty → empty gallery · **cấm** invent upload API riêng page |
| U-GALLERY-ZONE | Gallery trong MapPopup card hay sidebar Chi tiết? | **Cả hai parity**: popup click pin + dòng lịch sử Chi tiết mở cùng media |

## Cấm

| ❌ | ✅ |
|----|-----|
| Lớp tài sản / Fit chip / title-only popup | CTX gaps + OMS R7c/R11 |
| Invent `api/v1/gis-patrol-map` · ERP.* | Patrol sessions + check-ins |
| `/implement-file-service` · copy FilesController | `web-bff/api/v1/files/*` |
| Persist/log full presigned URL | Persist guid · resign on view |
| Yarn build/e2e/start:std ở data_analy | Verify gate roleOnly |
| Mobile queue / `run-implement-mobile` | Lane **web** only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| contentHash | sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287 |
| analyzedAt | 2026-09-12T05:45:00.000Z |
| status | done |
