# PO — Requirement — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| changeScope | `edit_page` |
| packKind | `map` (confirm) |
| formType | map inspect + sidebar tabs + filters (N/A Kind B list / report) |
| status | `confirmed` |
| lane | `web` |
| autoApprove | `ON` |
| taskId | `task_7e3aa2a7` |
| contentHash | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| analyReuse | hash skip · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| updatedAt | `2026-09-30T15:25:00.000Z` |

## Goal

Edit Bản đồ Tuần đường (`/gis/tuan-duong`) trên GIS MFE: giữ shell tabs · list person · track/pin/animate OMS · gallery FileService; **delta NEW** = **review ca thật** · **scope đoạn giao** · **nét đoạn + KM_POST clamp** · **fitBounds khi bấm người** · **pin popup HARD** (tên · mã NV · chainageLabel · GPS 6dp · giờ) · **cấm** lớp TS / invent API / ERP.* / migration nếu pair `web-rmms-patrol-map` đã có.

## § Delta Current vs New (`edit_page` · `task_7e3aa2a7`)

| ID | Current | New | Surface |
|----|---------|-----|---------|
| GAP-WEB-EDIT-01 | Menu/tabs đúng CTX | **Giữ** · **cấm** re-add lớp TS / Lớp / Chú giải | shell |
| GAP-MAP-PATROL-REAL-01 | Fallback `vinhPatrolSeed` / waypoints | **Không seed** trong mọi trường hợp, kể cả API trống. Tâm bản đồ = clip quốc gia | map / list |
| GAP-MAP-PATROL-SCOPE-01 | List ca company-wide | **RMMS-TDTK**: chỉ đoạn `rmms_user_route_segments` của mình · **Admin** + **MANAGER-RMMS**: mọi ca công ty | list / API |
| GAP-MAP-PATROL-LAYER-01 | Track + pins | + **nét đoạn giao** · filter văn phòng / tuyến / tuần đường\|tuần kiểm | sidebar + map |
| GAP-MAP-PATROL-FIT-01 | CTX cấm Fit chip | Click người → **fitBounds** nét giao · **vẫn cấm** Fit chip UI | list click |
| GAP-MAP-PATROL-PIN-02 | Popup label/GPS/status (+ gallery) | Popup: **họ tên · mã NV · chainageLabel · GPS 6dp · giờ** · **cấm** title-only / `setView` | MapPopup |
| GAP-MAP-PATROL-KMPOST-01 | KM_POST corridor chưa clamp | Lưới **KM_POST chỉ trong km** đoạn đang chọn | map layer |
| GAP-MAP-PATROL-BASE-01 | `attachVnClipBasemap` | **Giữ** MapService · **cấm** OSM.org/Esri · **cấm** VietnamBoundaries embed | basemap |
| GAP-MAP-PATROL-CHAIN-01 | Peer mobile chainage/bake | **Reuse** chainageKm/Label + bake · **cấm** migration mới nếu pair có | contract |
| GAP-MAP-PATROL-KM-EMPTY-01 | — | Thiếu cột km → **vẽ nét** · ô km **trống** · **cấm** bịa mét | list / popup |
| GAP-MAP-PATROL-SNAP-01 | `routeDrivingTrack` · cấm `/match` | **Giữ** | track |
| GAP-MAP-PATROL-PIN-01 | Badge xanh+giờ / đỏ «Chưa» | **Giữ** | pin |
| GAP-MAP-PATROL-PHOTO-01 | Gallery FileService (prior) | **Giữ** · resign · empty «Chưa có ảnh» | inspect + Chi tiết |
| GAP-MAP-OMS-KEEP | OMS R1–R11 | **Giữ** · Dev `/agent-dev-oms-map` | map host |

**Không đổi:** route `/gis/tuan-duong` · 3 tabs · BE `api/v1/patrol` · mobile lane **off**.

## Sources (from analy — no re-scan)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis-patrol-map.md` | P1 · hash above |
| DEM-01 | N/A | demo N/A · inventory CTX + live MFE |
| CH-01 | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-control-hint.md` | controlHint SSOT |
| RD-01 | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-real-data.md` | §A+§B+§D PASS |
| COMPACT-01 | `specs/gis-patrol-map/handoff/data_analy-compact.md` | prior handoff |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol (+ Gis cite) | **cấm ERP.*** |
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` | `GisPatrolMapPage` |
| peerStdUrl | `http://localhost:9301/gis-patrol-map` | Design peer |
| liveRoute | `/gis/tuan-duong` | keep (`route_confirm`) |

## § Control hints (copy analy)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| filter.office | Văn phòng | Select | filter |
| filter.route | Tuyến | Select | filter |
| filter.mode | Loại tuần | TabGroup / chip | tuần đường \| tuần kiểm |
| list.personName | Họ tên | Text | click → fit nét |
| list.employeeCode | Mã NV | Text | row / popup |
| list.route | Tuyến | Text | |
| list.status | Trạng thái | Badge | |
| list.kmFromTo | Km đoạn | Text | empty ok · **cấm** bịa |
| detail.name | Họ tên | Text | Chi tiết |
| detail.routes | Danh sách tuyến đường | List readonly | mobile parity |
| detail.history | Lịch sử hoạt động | Timeline | check-ins |
| sideTab | Tab sidebar | TabGroup | 3 fixed |
| map.basemapChip | Lớp nền | ChipGroup | Tiêu chuẩn \| Vệ tinh · MapService |
| map.btnLocateMe | Vị trí của tôi | Button | map-bar |
| map.assignedSeg | Nét đoạn giao | MapPolyline | segments + bake |
| map.kmPost | Lưới KM_POST | MapLayer | clamp km đoạn chọn |
| map.track | Nét tuần | MapPolyline | OSRM driving |
| map.pinDone / map.pinPending | Pin check-in | MapPin + badge | xanh/đỏ |
| inspect.name | Họ tên | Text | popup HARD |
| inspect.employeeCode | Mã NV | Text | popup HARD |
| inspect.chainageLabel | Lý trình | Text | empty ok |
| inspect.gps | GPS | Text | lat,lng **6 số lẻ** |
| inspect.time | Giờ | Text | check-in time |
| inspect.photoIds | Ảnh tuần đường | ImageGallery | FileService · resign |
| inspect.photoEmpty | Empty gallery | EmptyState | «Chưa có ảnh» |

## § Screens (REQUIRED)

| Surface | Pattern | FormMode | Actions | Zone ids | `devSlash` |
|---------|---------|----------|---------|----------|------------|
| Bản đồ Tuần đường page | **Full page** | read-only map | filter · select person · fit nét · animate · locate · inspect | NAV-GIS · TAB-ROAD · TAB-CHECK · TAB-DETAIL · FILTER-BAR · LIST-PERSON · MAP-HOST · LAYER-ASSIGNED · LAYER-KMPOST | `/agent-dev-oms-map` |
| Map inspect popup | **Modal** (MapPopup card) | read | open/close · gallery view | MAP-POPUP-INSPECT · GALLERY-PATROL | `/map-inspect-popup` · `/agent-dev-oms-map` |
| Chi tiết lịch sử media | Full page sidebar panel | read | open gallery từ dòng history | TAB-DETAIL · GALLERY-PATROL | `/agent-dev-oms-map` |

**Nav shell:** Bản đồ tài sản · **Tuần đường** · Camera — **cấm** ha-tang trên page này.  
**Tabs:** Tuần đường · Tuần kiểm · Chi tiết — **cấm** Lớp / Chú giải / Thuộc tính / Kết quả / tree TS.  
**Grid list AC:** N/A (`packKind=map`).  
**Report AC:** N/A.

## § Map AC (`packKind=map`)

1. Live Leaflet clip peer GIS · chips Tiêu chuẩn \| Vệ tinh · `attachVnClipBasemap` MapService · **cấm** OSM.org/Esri · **cấm** VietnamBoundaries embed (OMS R2 · BASE-01).
2. Load = `fitVnClipMap` · **cấm** Fit chip trên map-bar (R11) · click người = **fitBounds** nét đoạn giao (FIT-01).
3. Layers: **nét đoạn giao** (bake) + track `routeDrivingTrack` + pins + **KM_POST clamp** theo km đoạn chọn (LAYER-01 · KMPOST-01 · R7b/R8) · **cấm** lớp TS · **cấm** chord = xong · **cấm** `/match` 100m.
4. Pins badge xanh+giờ / đỏ «Chưa» · click → `{MapPopup}`: họ tên · mã NV · chainageLabel · GPS **6dp** · giờ (+ gallery) · **cấm** title-only · **cấm** auto `setView` (PIN-01 · PIN-02).
5. Animate rider arc-length trên path · **cấm** `setIcon` mỗi frame.
6. **Ca thật (REAL-01):** không fallback `vinhPatrolSeed` / `QL1_VINH_WAYPOINTS` trong mọi trường hợp, kể cả sessions trống hoặc BFF down. Danh sách trống thì để trống.
7. **Scope (SCOPE-01):** TDTK chỉ segment mình · Admin/MANAGER-RMMS mọi ca công ty · **cấm** client bypass.
8. **KM empty (KM-EMPTY-01):** thiếu cột km → vẫn vẽ nét · ô km trống · **cấm** bịa mét · chainageLabel empty ok (CHAIN-01 reuse pair · migration=none).
9. Gallery `inspect.photoIds` → resign `web-bff/api/v1/files/*` · empty «Chưa có ảnh» · **cấm** log/persist full presigned (PHOTO-01 keep).
10. Soft fail BFF → danh sách trống + toast. **Cấm** seed Vinh. **Cấm** blank page không thông báo.
11. Web page **read-only** — **cấm** invent POST files / PATCH status / check-in trên map P1.

## § Leave / alert (REQUIRED)

| Case | Behavior |
|------|----------|
| Dirty form | **N/A** — page map read-only (không edit form / không Lưu bản vẽ) |
| Soft error (BFF/resign/geo deny / empty scope) | toast / `useAlert` · **cấm** `window.alert` / `confirm` native |
| Chặn thao tác (nếu sau này thêm panel edit) | `LeaveConfirmModal` (`/implement-show-leave-confirm`) · **GAP-PO-LEAVE-01** |

## § Tab index

| tabs | Surfaces |
|------|----------|
| `3` | Tuần đường · Tuần kiểm · Chi tiết |

## APIs (cite real-data §B)

| Op | Path |
|----|------|
| Sessions (scoped ROLE) | `GET /web-bff/api/v1/patrol/sessions` → `api/v1/patrol/sessions` |
| Check-ins | `GET …/patrol/sessions/{id}/check-ins` |
| User segments | `rmms_user_route_segments` (cite existing — **cấm** invent map-only table) |
| Chainage / bake / KM_POST | peer `GET gis/chainage` · `GisRouteGeoms` · reuse `web-rmms-patrol-map` |
| Files view | `web-bff/api/v1/files/*` · FileService.Bff |
| Invent | **cấm** `api/v1/gis-patrol-map` · ERP.* |

## Open questions (autoApprove defaults)

| id | Decision (PO confirm) |
|----|------------------------|
| U-SCOPE-API | SA: **BE filter** theo `rmms_user_route_segments` + role · MFE **không** tự bypass |
| U-KM-COLS | Empty UI khi thiếu cột · **cấm** invent mét · vẫn vẽ nét |
| U-PHOTO-FIELD | SA: `PhotoLocalIds` = FileService **guid** · empty → empty gallery · **cấm** invent upload API page |
| U-GALLERY-ZONE | **Cả hai parity**: MapPopup click pin + dòng lịch sử Chi tiết cùng media |

## DoD (measurable)

- Có session → map/list dùng ca thật · **không** seed/waypoints fallback, kể cả API trống
- [ ] Scope TDTK vs Admin/MANAGER-RMMS đúng segment / company
- [ ] Filter văn phòng · tuyến · mode · nét đoạn giao + KM_POST clamp
- [ ] Click người → fitBounds nét · **không** Fit chip
- [ ] Click pin → popup HARD fields (tên · mã · chainageLabel · GPS 6dp · giờ) + gallery/empty
- [ ] Thiếu cột km → nét vẫn vẽ · ô km trống
- [ ] Gallery FileService resign OK · Chi tiết parity
- [ ] OMS R1–R11 không regress · basemap MapService only · migration=none nếu pair có

## Assign Dev

| Field | Value |
|-------|-------|
| `devSlash` | `/agent-dev-oms-map` |
| peers | `/map-inspect-popup` · `/gis-tai-san-snap` · `/map-snap-centerline` · FileGate `/init-bff-file` + `/integrate-file-upload-web` (view/resign) |
| **cấm** | `/implement-file-service` · Cesium · ERP.* · OSM.org/Esri · VietnamBoundaries embed |

## Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `gis-patrol-map` / `map` |
| phase_from / phase_to | `po` → `design` |
| STATUS | `confirmed` (autoApprove) |
| Context / Demo / DI | CTX-01 · DEM N/A · DI N/A |
| controlHint / UNCLEAR | § Control hints · U-* defaults above |
| Screens / Pattern / devSlash | Full page + filters + MapPopup · `/agent-dev-oms-map` |
| peerStdUrl / reviewUrl | `http://localhost:9301/gis-patrol-map` · keep prior prototype path (Design update Delta) |
| Grid/Report AC | N/A map |
| Leave | N/A dirty · toast/useAlert only |
| Next | `/agent-design` — control-map REAL/SCOPE/LAYER/FIT/PIN-02/KMPOST · prototype + reviewUrl · real_view_parity |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.1` |
| contentHash | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| analyzedAt | `2026-09-30T15:15:00.000Z` |
| writtenAt | `2026-09-30T15:25:00.000Z` |
| versionGate | `ok` |
| status | `confirmed` |
