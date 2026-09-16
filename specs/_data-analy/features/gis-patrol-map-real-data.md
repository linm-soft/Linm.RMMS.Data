# Real-data bind — gis-patrol-map (map · leftover + ảnh inspect)

| | |
|---|---|
| feature | `gis-patrol-map` |
| packKind | `map` |
| changeScope | `edit_page` |
| taskId | `task_fe94573e` |
| contentHash | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| prefix | API `api/v1/patrol` · BFF `web-bff/api/v1/patrol` · files `web-bff/api/v1/files` |
| MapGateSlash | `/agent-dev-oms-map` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP **Patrol** — **cấm** ERP.WebService / Domains/Master |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` · `/gis/tuan-duong` |
| progress | session status + check-in done/pending (read) · **không** invent workflow PATCH trên map page |
| runMode | `full_pipeline` · gap=`leftover` + `patrol_photo_inspect` + `files_hard` |
| meeting | `Họp 04/09 — 5 / W5-4` |

## § Delta Current vs New (`edit_page` · `task_fe94573e`)

| ID | Current | New |
|----|---------|-----|
| GAP-MAP-PATROL-PHOTO-01 | `GET …/check-ins` trả `photoLocalIds` · map UI **không** gallery | Bind gallery fileIds trên MapPopup + Chi tiết lịch sử · resign view |
| GAP-MAP-PATROL-FILE-HARD | — | FileService.Bff only · **cấm** scaffold API mới · **cấm** persist presigned |
| GAP-MAP-CLICK-ZOOM / leftover | Popup / animate / seed parity có thể dở | Hoàn leftover Dev `/gis/tuan-duong` per CTX gaps |
| Map shell | clip · tabs · OSRM track · pins | **Giữ** · cite existing controllers |
| Demo | N/A | **cấm** invent demo-json SSOT |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/gis-patrol-map.md` | — | version gate |
| `demo` | N/A | — | — |
| `api` · sessions | `PatrolSessionsController` `GET api/v1/patrol/sessions` | list empty UI · seed fallback | toast soft |
| `api` · check-ins | `GET api/v1/patrol/sessions/{id}/check-ins` → `PatrolCheckInDto` | pins empty · seed Vinh (`vinhPatrolSeed` / `FALLBACK_CHECKINS`) | BFF fail → seed · **cấm** blank page |
| `api` · media field | `PatrolCheckInDto.PhotoLocalIds` | gallery «Chưa có ảnh» | — |
| `bff` · patrol | `PatrolSessionsBffController` `web-bff/api/v1/patrol/sessions` (+ check-ins) | — | proxy fail → seed |
| `bff` · files | `RMMS.Service.Bff` · NuGet `Linm.Platform.FileService.Bff` · `web-bff/api/v1/files/*` | no photos | **GAP-MAP-PATROL-PHOTO-01** empty gallery |
| `mfe` · page | `GisPatrolMapPage.tsx` · `animateAlongPath.ts` | — | catch → seed |
| `mfe` · svc | `services/patrol/patrolService.ts` · `responseModel.ts` (`photoLocalIds`) | — | — |
| `domain-map` | `docs/DOMAIN-MAP.md` · Patrol `api/v1/patrol` | — | prefix SSOT |
| `seed` | `local-script/seed-nghe-an-mock.sql` · `rmms_patrol_check_ins` | — | **cấm** app-memory-only list SSOT |
| `geo` · track | OSRM driving via `routeDrivingTrack` / `{OsrmRoute}` · bake `{LineIndex}` | ẩn nét | **cấm** chord thẳng = xong |
| `peer` · chrome | `gis-draw-live` clip BFF · **cấm** lớp TS | — | — |

`sourceCite` = file/controller **có trong repo**. Fallback seed chỉ khi BFF trống/down — **không** SSOT.

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe | sameMobile |
|---------|-------|-------------|-------------|-----|-------------|---------|------------|
| list.personName | Họ tên | Text | — | sessions | — | yes | patrol-home |
| list.route | Tuyến | Text | — | sessions | — | yes | yes |
| list.status | Trạng thái | Badge | — | sessions.status | — | yes | yes |
| detail.name | Họ tên | Text | — | session | — | yes | `#sc-patrol-detail` |
| detail.routes | Danh sách tuyến | List | — | session routes | — | yes | yes |
| detail.history | Lịch sử hoạt động | Timeline | — | `…/check-ins` | — | yes | yes |
| checkIn.label | Điểm tuần | Text | — | `planPointLabel` | — | yes | yes |
| checkIn.gps | GPS | Text | — | lat,lng | — | yes | yes |
| checkIn.status | Trạng thái điểm | Badge | — | derived done/pending | — | yes | yes |
| checkIn.content | Ghi chú | Text | — | content | — | yes | yes |
| checkIn.photoLocalIds | Ảnh tuần đường | ImageGallery | FileService | check-ins → resign `files/{id}` | fileIds[] (guid) | **gap** | patrol-map media |
| map.basemap | Lớp nền | ChipGroup | basemap | peer Gis clip | — | yes | n/a |
| map.locate | Vị trí của tôi | Button + popup | — | geolocation | — | yes | yes |
| map.track | Nét tuần | MapPolyline | — | OSRM / bake | — | yes | yes |
| map.pin | Pin check-in | MapPin | — | check-ins | — | yes | yes |

**Prefix map (live cite):**

| Operation | Path |
|-----------|------|
| Sessions list | `GET /web-bff/api/v1/patrol/sessions` → `api/v1/patrol/sessions` |
| Check-ins | `GET …/patrol/sessions/{id}/check-ins` |
| Files upload/view | `web-bff/api/v1/files/*` — FileService.Bff · **GAP-MAP-PATROL-FILE-HARD** |
| Invent patrol-files | **cấm** |

**Write trên page này:** map = **read-only** inspect + animate. Upload ảnh = mobile/field path (đã có check-in POST) — web **chỉ resign/view**. **Cấm** invent POST files riêng page.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| session status | sessions DTO | seed Nghệ An | hardcode badge từ demo string |
| FileService | `files/*` | NuGet Bff trên host | invent FilesController / `api/v1/nghiem-thu-files` |
| basemap | peer Gis live config | clip Carto MFE | OSM.org/Esri DTO trên MFE |

## §D — Map / vẽ (`packKind=map` HARD)

| Mục | Ghi |
|-----|-----|
| Engine | Leaflet OMS — CTX + `/agent-dev-oms-map` · **cấm** Cesium |
| Tools | Select person · animate · zoom · geolocate · **không** Point/Line/Polygon · **cấm** Fit chip |
| Layer | **cấm** lớp tài sản · chỉ track + pins tuần |
| Load | sessions + check-ins · seed fallback Vinh |
| Save | **không** Lưu bản vẽ · web không POST check-in trên P1 map (mobile path) |
| Pick | Click pin → `{MapPopup}` + gallery · **cấm** title-only · **cấm** `setView` zoom |
| Fit | load `fitVnClipMap` · page **no Fit button** |
| Line levels | corridor/track panes · R7b · rider arc-length |
| OSRM | `routeDrivingTrack` · **cấm** `/match` 100m · **cấm** chord = xong |
| Media | file id only · resign mỗi view · **cấm** log presigned URL |
| Animation | raf interpolate · **cấm** `setIcon` mỗi frame |

## §E — Progress / vòng đời

| stateField | Nguồn | Ai đổi | API | UI |
|------------|-------|--------|-----|-----|
| session.status | `PatrolSessions` | field/mobile | existing patrol APIs | badge list |
| checkIn kind | derived from check-in presence / flags | field POST check-ins | `POST …/check-ins` (mobile) | pin xanh/đỏ · timeline |

Map web page = **read** progress · không PATCH status trên GIS tuần đường P1.

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD leftover + ảnh inspect · copy § Delta · keep prior map DoD |
| Design | control-map PHOTO · prototype + reviewUrl (user opens before Approve) |
| SA | FileService confirm · `PhotoLocalIds` = guid · **cấm** ERP / invent files API |
| Dev web | Wire §B gallery + leftover OMS/popup · gate `/agent-dev-oms-map` · **không** trong `roleOnly=data_analy` |
| QA | queued — resign · empty gallery · popup · **cấm** yarn ở data_analy |

## § Empty / fail

| Case | Behavior |
|------|----------|
| sessions empty | Seed fallback Vinh · toast soft |
| check-ins empty | Map mở · pins seed / empty history |
| BFF patrol fail | Seed · **cấm** blank |
| no photo ids | Gallery empty «Chưa có ảnh» |
| resign fail | placeholder + toast · **cấm** raw expired URL persist |
| geolocation deny | toast · không crash |

## § Cấm

| ❌ | ✅ |
|----|-----|
| Mock demo-json SSOT | Cite PatrolSessionsController / BFF / FileService |
| ERP.WebService / Domains/Master | `Linm.RMMS.WebService` Patrol |
| `/implement-file-service` · copy FilesController · `api/v1/nghiem-thu-files` | `web-bff/api/v1/files/*` |
| Persist/log full presigned URL | Persist **guid** · resign on view |
| Invent `api/v1/gis-patrol-map` | `api/v1/patrol/sessions` + check-ins |
| yarn build / e2e / start:std ở data_analy | Verify gate roleOnly |
| Skip §D vì «đã ship map» | §D REQUIRED mọi edit_page map |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.12.1 |
| contentHash | sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287 |
| analyzedAt | 2026-09-12T05:45:00.000Z |
| status | done |
