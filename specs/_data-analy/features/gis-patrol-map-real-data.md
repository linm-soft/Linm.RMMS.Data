# Real-data bind — gis-patrol-map (map · ca thật · scope segment)

| | |
|---|---|
| feature | `gis-patrol-map` |
| packKind | `map` |
| changeScope | `edit_page` |
| taskId | `task_6ed3e65f` |
| contentHash | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| prefix | API `api/v1/patrol` · BFF `web-bff/api/v1/patrol` · files `web-bff/api/v1/files` · Gis cite `api/v1/gis` |
| MapGateSlash | `/agent-dev-oms-map` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP **Patrol** (+ Gis tiles/chainage) — **cấm** ERP.WebService / Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · `/gis/tuan-duong` |
| progress | session status + check-in done/pending (read) · **không** invent workflow PATCH trên map page |
| runMode | `full_pipeline` · gap=`real_session` + `scope_segment` + `chainage_kmpost` + `no_fake_km` |
| peer | `web-rmms-patrol-map` · chainageKm/Label · GisRouteGeoms bake · **migration=none** nếu pair có |

## § Delta Current vs New (`edit_page` · `task_6ed3e65f`)

| ID | Current | New |
|----|---------|-----|
| GAP-MAP-PATROL-REAL-01 | Live page import `vinhPatrolSeed` / `QL1_VINH_WAYPOINTS` làm center + fallback check-ins | **Bỏ fallback khi đã có session** · review ca thật · seed chỉ empty/BFF-down |
| GAP-MAP-PATROL-SCOPE-01 | Sessions list company-wide (không clamp đoạn user) | **RMMS-TDTK** → chỉ `rmms_user_route_segments` của mình (cuc-01) · **Admin** / **MANAGER-RMMS** → mọi ca công ty |
| GAP-MAP-PATROL-LAYER-01 | Person list + track + pins | + **nét đoạn giao** · filter văn phòng / tuyến / tuần đường\|tuần kiểm |
| GAP-MAP-PATROL-FIT-01 | No Fit chip (CTX) | Click người → **fitBounds** nét giao · vẫn **cấm** Fit chip |
| GAP-MAP-PATROL-PIN-02 | Popup label/GPS/status (+ gallery) | Popup: tên · mã NV · **chainageLabel** · GPS **6dp** · giờ |
| GAP-MAP-PATROL-KMPOST-01 | KM_POST corridor GisService | Chỉ trong **km range** đoạn đang chọn |
| GAP-MAP-PATROL-BASE-01 | `attachVnClipBasemap` | **Giữ** MapService · **cấm** OSM.org/Esri · **cấm** VietnamBoundaries embed |
| GAP-MAP-PATROL-CHAIN-01 | Peer mobile POST/GET chainage | Reuse chainageKm/Label + bake · **cấm** migration mới nếu pair có |
| GAP-MAP-PATROL-KM-EMPTY-01 | — | Thiếu cột km → vẽ nét · ô km trống · **cấm** bịa mét |
| GAP-MAP-PATROL-PHOTO-01 | Gallery FileService (prior) | **Giữ** |
| Demo | N/A | **cấm** invent demo-json SSOT |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/gis-patrol-map.md` | — | version gate |
| `demo` | N/A | — | — |
| `api` · sessions | `PatrolSessionsController` `GET api/v1/patrol/sessions` | list empty · seed **chỉ** khi empty | toast soft · **cấm** seed nếu đã có ca |
| `api` · check-ins | `GET …/sessions/{id}/check-ins` → DTO (+ chainageKm/Label peer) | pins empty history | BFF fail → seed only if no session data |
| `api` · segments | `rmms_user_route_segments` · `AppUserRouteSegmentEntity` · `GisService` AllowChainage | no assigned → empty nét / empty km | — |
| `api` · media | `PatrolCheckInDto.PhotoLocalIds` | gallery empty | — |
| `api` · chainage/bake | peer `web-rmms-patrol-map` · `GET gis/chainage` · `GisRouteGeoms` · KM_POST | label empty | **cấm** invent mét |
| `bff` · patrol | `PatrolSessionsBffController` | — | proxy fail |
| `bff` · files | `web-bff/api/v1/files/*` | no photos | empty gallery |
| `mfe` · page | `GisPatrolMapPage.tsx` · `vinhPatrolSeed.ts` (deprecate path when sessions) | — | |
| `mfe` · svc | `services/patrol/patrolService.ts` | — | — |
| `domain-map` | Patrol `api/v1/patrol` · peer slug `web-rmms-patrol-map` | — | prefix SSOT |
| `seed` | `seed-nghe-an-mock.sql` | — | **không** SSOT khi live session có |
| `geo` · basemap | `attachVnClipBasemap` MapService tile | — | **cấm** OSM.org/Esri |
| `geo` · track | `routeDrivingTrack` / bake `{LineIndex}` | ẩn nét GPS | **cấm** chord = xong |
| `peer` · chrome | `gis-draw-live` clip · **cấm** lớp TS | — | — |

`sourceCite` = file/controller **có trong repo**. Fallback seed **không** SSOT khi đã có session.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| filter.office | Văn phòng | Select | office | sessions/org cite | — | **gap** | n/a |
| filter.route | Tuyến | Select | route | segments/routes | — | **gap** | yes |
| filter.mode | Tuần đường/kiểm | Tab/Chip | — | session kind | — | yes | yes |
| list.personName | Họ tên | Text | — | sessions | — | yes | patrol-home |
| list.employeeCode | Mã NV | Text | — | sessions actor | — | **gap** | yes |
| list.route | Tuyến | Text | — | sessions | — | yes | yes |
| list.status | Trạng thái | Badge | — | sessions.status | — | yes | yes |
| list.kmFromTo | Km đoạn | Text | — | segment km cols | — | **gap** | empty-ok |
| detail.name | Họ tên | Text | — | session | — | yes | `#sc-patrol-detail` |
| detail.routes | Danh sách tuyến | List | — | session routes | — | yes | yes |
| detail.history | Lịch sử hoạt động | Timeline | — | `…/check-ins` | — | yes | yes |
| checkIn.chainageLabel | Lý trình | Text | — | chainageLabel | — | **gap** | patrol-map |
| checkIn.chainageKm | Km số | Text | — | chainageKm | — | **gap** | yes |
| checkIn.gps | GPS | Text | — | lat,lng **6dp** | — | yes | yes |
| checkIn.time | Giờ | Text | — | checkInAt | — | yes | yes |
| checkIn.photoLocalIds | Ảnh tuần đường | ImageGallery | FileService | check-ins → resign | fileIds[] | keep | yes |
| map.basemap | Lớp nền | ChipGroup | basemap | MapService clip | — | yes | n/a |
| map.assignedSeg | Nét đoạn giao | MapPolyline | — | segments + bake | — | **gap** | n/a |
| map.kmPost | KM_POST | MapLayer | corridor | Gis KM_POST clamp | — | **gap** | n/a |
| map.track | Nét tuần | MapPolyline | — | OSRM / bake | — | yes | yes |
| map.pin | Pin check-in | MapPin | — | check-ins | — | yes | yes |

**Prefix map (live cite):**

| Operation | Path |
|-----------|------|
| Sessions list (scoped) | `GET /web-bff/api/v1/patrol/sessions` → `api/v1/patrol/sessions` |
| Check-ins | `GET …/patrol/sessions/{id}/check-ins` |
| User segments | `rmms_user_route_segments` (cite existing API/service — **cấm** invent map-only table) |
| Chainage / bake | peer `GET gis/chainage` · `GisRouteGeoms` · KM_POST |
| Files | `web-bff/api/v1/files/*` |
| Invent patrol-map API | **cấm** |

**Write trên page:** map = **read-only** inspect + animate + filters. **Cấm** invent POST files/check-in trên web P1.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| session status | sessions DTO | seed Nghệ An (empty only) | hardcode badge demo |
| role scope | RMMS-TDTK / Admin / MANAGER-RMMS | Auth + segments | client bypass scope |
| FileService | `files/*` | NuGet Bff | invent FilesController |
| basemap | MapService via `attachVnClipBasemap` | peer Gis | OSM.org/Esri · VietnamBoundaries embed |
| route / office | existing Integration/org cite | — | invent office API |

## §D — Map / vẽ (`packKind=map` HARD)

| Mục | Ghi |
|-----|-----|
| Engine | Leaflet OMS — `/agent-dev-oms-map` · **cấm** Cesium |
| Tools | Select person · fit nét · animate · zoom · geolocate · filter · **không** Point/Line/Polygon · **cấm** Fit chip |
| Layer | nét đoạn giao + track + pins + KM_POST clamp · **cấm** lớp tài sản |
| Load | sessions (scoped) + check-ins + segments · **cấm** seed khi đã có session |
| Save | **không** Lưu bản vẽ · web không POST check-in P1 |
| Pick | Click pin → popup HARD fields · **cấm** title-only · **cấm** `setView` |
| Fit | load `fitVnClipMap` · person click = fitBounds nét · **no Fit button** |
| Line levels | assigned / corridor / track panes · R7b |
| OSRM | `routeDrivingTrack` · **cấm** `/match` 100m · **cấm** chord = xong |
| KM_POST | only selected segment km range |
| Chainage | reuse peer pair · empty label ok · **cấm** bịa mét |
| Media | file id · resign · **cấm** log presigned |
| Basemap | `attachVnClipBasemap` only |
| Animation | raf · **cấm** `setIcon` mỗi frame |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| session.status | `PatrolSessions` | field/mobile | existing patrol | badge list |
| checkIn kind | check-in presence | field POST | `POST …/check-ins` (mobile) | pin xanh/đỏ |
| scope | role + `rmms_user_route_segments` | Auth | sessions query filter | list visibility |

Map web = **read** progress · không PATCH status trên GIS tuần đường P1.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD ca thật + scope + pin/chainage/KM_POST · copy § Delta · keep prior DoD photo |
| Design | control-map filters + pin popup fields · prototype + reviewUrl |
| SA | Scope BE · reuse chainage/bake · migration=none · **cấm** ERP |
| Dev web | Wire §B · remove seed-when-session · OMS Fit person · gate `/agent-dev-oms-map` |
| QA | queued — scope TDTK vs Admin · no seed when session · pin 6dp · empty km |

## § Empty / fail

| Case | Behavior |
|------|----------|
| sessions empty | Seed fallback Vinh ok · toast soft |
| sessions **có data** | **Cấm** seed/waypoints fallback |
| check-ins empty (có session) | Map mở · nét giao vẫn vẽ · pins empty history |
| BFF patrol fail · no cache | Seed · **cấm** blank |
| segment thiếu km | Vẽ nét · ô km trống |
| no photo ids | Gallery «Chưa có ảnh» |
| geolocation deny | toast · không crash |
| TDTK không có segment | List/map empty state · **cấm** hiện ca ngoài scope |

## § Cấm

| ❌ | ✅ |
|----|-----|
| Seed khi đã có session | Ca thật |
| Mock demo-json SSOT | Cite controllers / BFF / Gis / segments |
| ERP.WebService / Domains/Master | `Linm.RMMS.WebService` Patrol + Gis cite |
| Migration mới nếu chainage/bake pair có | Reuse `web-rmms-patrol-map` |
| OSM.org / Esri / VietnamBoundaries embed | `attachVnClipBasemap` |
| Bịa mét | Empty km cells |
| Invent `api/v1/gis-patrol-map` | `api/v1/patrol/sessions` + check-ins |
| yarn build / e2e / start:std ở data_analy | Verify gate roleOnly |
| Skip §D | §D REQUIRED mọi edit_page map |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| contentHash | sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247 |
| analyzedAt | 2026-09-30T15:15:00.000Z |
| status | done |
