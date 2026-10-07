# Data-analy — controlHint — gis-patrol-map (map · ca thật · scope segment)

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
| contentHash | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| analyzedAt | `2026-09-30T15:15:00.000Z` |
| taskId | `task_6ed3e65f` |
| autoApprove | `ON` |
| realData | `specs/_data-analy/features/gis-patrol-map-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Patrol** (+ cite Gis tiles/chainage) · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · route **`/gis/tuan-duong`** |
| mfeStdUrl | `http://localhost:9301/gis-patrol-map` · live page `/gis/tuan-duong` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` · `/gis-tai-san-snap` · `/map-snap-centerline` |
| FileGate | `/init-bff-file` + `/integrate-file-upload-web` · **cấm** `/implement-file-service` |
| runMode | `full_pipeline` · E2E QA queued |
| peerBake | `web-rmms-patrol-map` · chainageKm/Label · GisRouteGeoms bake · **cấm** migration nếu pair đã có |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map + prototype/reviewUrl. SA **chốt** scope filter + media guid.  
> **Giữ** PO/Design artifacts đã confirm (route `/gis/tuan-duong` keep · `design_confirm` prior).  
> Demo = **N/A** — zone/field từ CTX + live page · **cấm** invent demo-json SSOT.

## Sources

| Source | Path | sha256 / cite |
|--------|------|---------------|
| Context | `docs/context/features/gis-patrol-map.md` | `ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| Demo | N/A | — |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Patrol `api/v1/patrol` · peer `web-rmms-patrol-map` | cite |
| Controller | `Domains/Patrol/Controllers/PatrolSessionsController.cs` | `api/v1/patrol/sessions` · `…/{id}/check-ins` |
| BFF Patrol | `PatrolSessionsBffController.cs` | `web-bff/api/v1/patrol/sessions` |
| Gis chainage / KM_POST | `Domains/Gis/Services/GisService.cs` · `UserRouteSegments` · `rmms_user_route_segments` | cite live |
| DTO | `PatrolCheckInDtos.cs` · `PhotoLocalIds` · chainageKm/Label (peer patrol-map) | media + chainage |
| File host | `bff/src/RMMS.Service.Bff` · NuGet `Linm.Platform.FileService.Bff` | `web-bff/api/v1/files/*` |
| MFE page | `GisPatrolMapPage.tsx` · `animateAlongPath.ts` · `vinhPatrolSeed.ts` | Kind map patrol |
| MFE svc | `services/patrol/patrolService.ts` · `responseModel.ts` | GET list + check-ins |
| Basemap | `attachVnClipBasemap` (MapService tile) · peer `gis-draw-live` | **cấm** OSM.org / Esri · **cấm** nhúng VietnamBoundaries vào RMMS |
| Peer bake | `web-rmms-patrol-map` · `GET gis/chainage` · `GisRouteGeoms` | reuse pair |
| Seed | `local-script/seed-nghe-an-mock.sql` · waypoints `map-oms.js` | chỉ khi **không** có session |

## § Delta Current vs New (`edit_page` · `task_6ed3e65f`)

Giữ shell đã ship (tabs Tuần đường / Tuần kiểm / Chi tiết · list person · clip GIS · `routeDrivingTrack` · pin badge · gallery FileService · **cấm** lớp TS / menu ha-tang). Delta **NEW** = **review ca thật + scope đoạn giao + chainage/KM_POST**:

| ID | Current (live / prior) | New (SSOT packet + CTX) | Surface |
|----|------------------------|-------------------------|---------|
| GAP-WEB-EDIT-01 | Context lock — menu/tabs đúng | **Giữ** · **cấm** re-add lớp TS / Lớp / Chú giải | shell |
| GAP-MAP-PATROL-REAL-01 | Marker/check-in có fallback `vinhPatrolSeed` / `QL1_VINH_WAYPOINTS` kể cả khi có session | **Review ca thật** · **Bỏ** fallback seed/waypoints **khi đã có session** (BFF có data) · seed chỉ khi sessions/check-ins trống hoặc BFF down | map / list |
| GAP-MAP-PATROL-SCOPE-01 | List ca theo company / chưa filter đoạn giao | **RMMS-TDTK**: chỉ đoạn `rmms_user_route_segments` của mình (cuc-01) · **Admin** + **MANAGER-RMMS**: mọi ca trong công ty | list / API filter |
| GAP-MAP-PATROL-LAYER-01 | Track animate theo ca · pins check-in | Danh sách người · **nét đoạn được giao** · pin check-in · lọc **văn phòng / tuyến / tuần đường \| tuần kiểm** | sidebar + map |
| GAP-MAP-PATROL-FIT-01 | CTX cấm Fit **chip** trên map-bar | **Bấm người → fit nét** đoạn giao (programmatic fitBounds) · **vẫn cấm** Fit chip UI | list click |
| GAP-MAP-PATROL-PIN-02 | Popup label/GPS/status (+ gallery prior) | Pin popup: **họ tên · mã NV · chainageLabel · GPS 6 số lẻ · giờ** · **cấm** title-only / `setView` | MapPopup |
| GAP-MAP-PATROL-KMPOST-01 | KM_POST / corridor peer Gis chưa clamp theo đoạn chọn | Lưới **KM_POST chỉ trong khoảng km** của đoạn đang chọn | map layer |
| GAP-MAP-PATROL-BASE-01 | `attachVnClipBasemap` đã dùng | **Giữ** MapService tile · **cấm** OSM.org / Esri · **cấm** nhúng VietnamBoundaries vào RMMS | basemap |
| GAP-MAP-PATROL-CHAIN-01 | Peer mobile `web-rmms-patrol-map` đã có chainageKm/Label + bake | **Reuse** chainageKm/chainageLabel + tim bake · **cấm** migration mới nếu pair đã có | contract |
| GAP-MAP-PATROL-KM-EMPTY-01 | — | Đoạn **chưa đủ cột km** vẫn **vẽ nét giao** · ô km **trống** · **cấm** bịa mét | list / popup |
| GAP-MAP-PATROL-SNAP-01 | `routeDrivingTrack` · cấm `/match` 100m | **Giữ** | track |
| GAP-MAP-PATROL-PIN-01 | Badge xanh+giờ / đỏ «Chưa» | **Giữ** | pin |
| GAP-MAP-PATROL-PHOTO-01 | Gallery FileService trên inspect (prior) | **Giữ** nếu field có photo ids | inspect |
| GAP-MAP-OMS-KEEP | OMS R1–R11 | **Giữ** · Dev `/agent-dev-oms-map` | map host |

**Không** đổi: route `/gis/tuan-duong` · 3 tabs · BE prefix `api/v1/patrol` · **cấm** invent `api/v1/gis-patrol-map` · **cấm ERP.*** · mobile lane **off**.

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| Nav shell | 3 GIS items | Bản đồ tài sản · **Tuần đường** · Camera — **cấm** ha-tang trên page này |
| Sidebar tabs | 3 | **Tuần đường** · **Tuần kiểm** · **Chi tiết** — **cấm** Lớp / Chú giải / Thuộc tính / Kết quả / tree TS |
| Filters | Office · Route · Mode | Lọc văn phòng · tuyến · tuần đường \| tuần kiểm |
| List | Person rows | Họ tên · tuyến · badge · click → **fit nét** + Chi tiết |
| Chi tiết | Mobile `#sc-patrol-detail` parity | Họ tên · Danh sách tuyến · Lịch sử hoạt động |
| Map host | Peer live clip | `attachVnClipBasemap` · Tiêu chuẩn \| Vệ tinh · Vị trí của tôi · **cấm** lớp TS · **cấm** Fit chip |
| Assigned segment | MapPolyline | Nét đoạn `rmms_user_route_segments` / bake tim |
| KM_POST grid | corridor layer | Chỉ trong km range đoạn chọn |
| Animation | raf interpolate | `routeDrivingTrack` · pin teardrop · rider arc-length |
| MapPopup / inspect | `/map-inspect-popup` | Tên · mã NV · chainageLabel · GPS 6dp · giờ · (+ gallery nếu có) |
| Legend | **Không** isolate legend MFE | peer GIS list |

## Map tech factors (`packKind=map`)

| Factor | P1 | Notes |
|--------|----|-------|
| Engine | **yes** | `/agent-dev-oms-map` · Leaflet · **cấm** Cesium |
| Basemap | `attachVnClipBasemap` MapService | **cấm** OSM.org/Esri · **cấm** VietnamBoundaries embed |
| Fit | load = `fitVnClipMap` · click person = fitBounds nét · **cấm** Fit chip | R11 · GAP-MAP-PATROL-FIT-01 |
| Line levels | corridor + assigned + track panes | R7b · bake + `routeDrivingTrack` |
| OSRM | highway driving bake `{LineIndex}` · **cấm** `/match` đường nhỏ | R8 |
| KM_POST | filter by selected segment km | GAP-MAP-PATROL-KMPOST-01 |
| GPS geolocate | «Vị trí của tôi» | map-bar |
| Draw tools | **display + animate only** | **cấm** Point/Line/Polygon invent |
| Inspect | popup fields HARD | GAP-MAP-PATROL-PIN-02 |
| Click | popup only · **cấm** auto `setView` | |
| Offline / empty | map mở | seed chỉ khi **không** có session · **cấm** seed khi đã có ca |

## Control hint — list / detail / filter

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| filter.office | Văn phòng | `Select` | office | filter |
| filter.route | Tuyến | `Select` | route | filter |
| filter.mode | Loại tuần | `TabGroup` / chip | — | tuần đường \| tuần kiểm |
| list.personName | Họ tên | `Text` | — | row |
| list.employeeCode | Mã NV | `Text` | — | row / popup |
| list.route | Tuyến | `Text` | — | row |
| list.status | Trạng thái | `Badge` | — | closed set |
| list.kmFromTo | Km đoạn | `Text` | — | empty nếu thiếu cột · **cấm** bịa |
| detail.name | Họ tên | `Text` | — | Chi tiết |
| detail.routes | Danh sách tuyến đường | `List` readonly | — | parity mobile |
| detail.history | Lịch sử hoạt động | `Timeline` / list | — | check-in GPS |
| sideTab | Tab sidebar | `TabGroup` | — | 3 tabs fixed |

## Control hint — map / inspect / media

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| map.basemapChip | Lớp nền | `ChipGroup` | basemap | Tiêu chuẩn \| Vệ tinh · MapService |
| map.btnLocateMe | Vị trí của tôi | `Button` | — | map-bar |
| map.assignedSeg | Nét đoạn giao | `MapPolyline` | — | bake / segment |
| map.track | Nét tuần GPS | `MapPolyline` | — | OSRM driving |
| map.kmPost | Lưới KM_POST | `MapLayer` | corridor | clamp km đoạn chọn |
| map.pinDone | Pin đã check-in | `MapPin` + badge xanh + giờ | — | |
| map.pinPending | Pin chưa | `MapPin` + badge đỏ «Chưa» | — | |
| inspect.name | Họ tên | `Text` | — | popup |
| inspect.employeeCode | Mã NV | `Text` | — | popup |
| inspect.chainageLabel | Lý trình | `Text` | — | chainageLabel · empty ok |
| inspect.gps | GPS | `Text` | — | lat,lng **6 số lẻ** |
| inspect.time | Giờ | `Text` | — | check-in time |
| inspect.photoIds | Ảnh tuần đường | `ImageGallery` | FileService | keep prior · resign |
| inspect.photoEmpty | Empty gallery | `EmptyState` | — | «Chưa có ảnh» |

## Lookup / map APIs (SA cite)

| Lookup | API | controlHint consumer |
|--------|-----|----------------------|
| sessions | `GET /api/v1/patrol/sessions` | list / tabs · **scope** ROLE |
| check-ins | `GET /api/v1/patrol/sessions/{id}/check-ins` | pins · history · chainage · photos |
| BFF | `web-bff/api/v1/patrol/sessions` (+ check-ins) | MFE |
| user segments | `rmms_user_route_segments` / existing Integration-or-Patrol cite | scope TDTK · nét giao |
| chainage / bake | peer `GET gis/chainage` · `GisRouteGeoms` (`web-rmms-patrol-map`) | label · tim |
| files | `web-bff/api/v1/files/*` | resign gallery |
| basemap/clip | `attachVnClipBasemap` MapService | chips |

## UNCLEAR

| id | Q | Default nếu Design/SA silent |
|----|---|------------------------------|
| U-SCOPE-API | Scope TDTK filter ở BE query hay MFE client trên segments? | SA: **BE filter** theo `rmms_user_route_segments` + role · MFE không tự bypass |
| U-KM-COLS | Tên cột km From/To trên segment entity khi thiếu? | Empty UI · **cấm** invent mét · vẫn vẽ nét |
| U-PHOTO-FIELD | `PhotoLocalIds` guid vs legacy? | SA: **guid FileService** (prior) |
| U-GALLERY-ZONE | Gallery popup vs Chi tiết? | **Cả hai parity** (prior) |

## Cấm

| ❌ | ✅ |
|----|-----|
| Fallback `vinhPatrolSeed` / `QL1_VINH_WAYPOINTS` khi đã có session | Ca thật · seed chỉ empty/BFF-down |
| Lớp tài sản / Fit chip / title-only popup / `setView` | CTX + OMS + pin HARD |
| OSM.org / Esri · nhúng VietnamBoundaries vào RMMS | `attachVnClipBasemap` MapService |
| Invent migration khi chainage/bake pair đã có | Reuse `web-rmms-patrol-map` |
| Bịa mét khi thiếu cột km | Ô km trống · vẫn vẽ nét |
| Invent `api/v1/gis-patrol-map` · ERP.* | Patrol sessions + check-ins + Gis cite |
| Yarn build/e2e/start:std ở data_analy | Verify gate roleOnly |
| Mobile lane | Lane **web** only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| contentHash | sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247 |
| analyzedAt | 2026-09-30T15:15:00.000Z |
| status | done |
