# Design — gis-patrol-map (Kind F map · Delta ca thật / scope / KM_POST)

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| packKind | `map` |
| Feature Kind | **F** |
| changeScope | `edit_page` |
| this role | `design` · `/agent-design` |
| status | `confirmed` (autopilot · `design_confirm=approve`) |
| formPattern | `Full page` (+ MapPopup Modal inspect) |
| Grid AC | `N/A` (map · **cấm** DES-GRID A–D) |
| Report AC | `N/A` |
| Leave | `N/A` dirty (read-only) · soft error = toast/`useAlert` · **cấm** native alert/confirm |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html` |
| peerStdUrl | `http://localhost:9301/gis-patrol-map` · live `/gis/tuan-duong` |
| real_view_parity | `v1` |
| MapGateSlash | `/agent-dev-oms-map` · `/map-inspect-popup` · `/gis-tai-san-snap` · `/map-snap-centerline` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.1` |
| versionGate | `ok` (aligned analy/po · hash `ca2b1f0e…`) |
| contentHashPriorDataAnaly | `sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247` |
| taskId | `task_7fb86e87` |
| priorTaskId | `task_7e3aa2a7` (po) · prior design photo `task_33939515` |
| updatedAt | `2026-09-30T15:40:00.000Z` |
| prior · data_analy | `done` · hash skip · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · Delta REAL/SCOPE/LAYER/FIT/PIN-02/KMPOST/BASE/CHAIN/KM-EMPTY · keep PHOTO |

## 1. Context & sources (hash skip · **cấm** DEM re-scan)

| Source | Path |
|--------|------|
| Context | `docs/context/features/gis-patrol-map.md` |
| Demo | **N/A** — **không** crawl |
| control-hint | `specs/_data-analy/features/gis-patrol-map-control-hint.md` |
| real-data | `specs/_data-analy/features/gis-patrol-map-real-data.md` |
| PO | `specs/gis-patrol-map/po/requirement.md` |
| OMS | `/agent-dev-oms-map` R1–R11 (+ R7b/R7c/R11) |

## 2. Screens / zones (ids)

| Screen | Route / surface | Zones |
|--------|-----------------|-------|
| SCR-MAP | Full `/gis/tuan-duong` | NAV-GIS · FILTER-BAR · TAB-* · LIST-PERSON · MAP-HOST · LAYER-* · MAP-BAR |
| SCR-INSPECT | MapPopup Modal | MAP-POPUP-INSPECT · GALLERY-PATROL |
| SCR-DETAIL | Sidebar Chi tiết | TAB-DETAIL · history → GALLERY-PATROL parity |

| Zone id | Name | Content |
|---------|------|---------|
| NAV-GIS | Nav shell | Bản đồ tài sản · **Tuần đường** · Camera — **cấm** ha-tang |
| FILTER-BAR | Filters | Văn phòng · Tuyến · tuần đường \| tuần kiểm |
| TAB-ROAD | Tab Tuần đường | Person list + map animate |
| TAB-CHECK | Tab Tuần kiểm | Peer tab (keep) |
| TAB-DETAIL | Tab Chi tiết | Họ tên · tuyến · Lịch sử hoạt động |
| LIST-PERSON | List người | Họ tên · mã NV · tuyến · Km đoạn (empty ok) · Badge · **click → fitBounds nét** |
| MAP-HOST | Map host | Leaflet clip · assigned + track + pins + KM_POST · rider · **cấm** lớp TS |
| LAYER-ASSIGNED | Nét đoạn giao | MapPolyline bake / `rmms_user_route_segments` |
| LAYER-KMPOST | Lưới KM_POST | Chỉ km range đoạn chọn |
| MAP-BAR | Map-bar | **Tiêu chuẩn \| Vệ tinh** · **Vị trí của tôi** · **cấm** Fit chip |
| MAP-POPUP-INSPECT | Inspect popup | Tên · mã NV · chainageLabel · GPS 6dp · giờ · gallery |
| GALLERY-PATROL | Ảnh tuần đường | `ImageGallery` fileIds + resign · empty «Chưa có ảnh» |

**Header chrome:** content-only · **cấm** note/GAP/Kind badge · **cấm** Hồ sơ/Đổi MK.

## 3. § Delta Current vs New (`edit_page` · `task_7fb86e87`)

| ID | Current | New (Design chốt) |
|----|---------|-------------------|
| GAP-WEB-EDIT-01 | Shell tabs/list đúng | **Giữ** · **cấm** lớp TS / Lớp / Chú giải |
| GAP-MAP-PATROL-REAL-01 | Seed/waypoints fallback | **Ca thật** · không seed trong mọi trường hợp |
| GAP-MAP-PATROL-SCOPE-01 | List company-wide | **TDTK** = đoạn giao mình · **Admin/MANAGER** = mọi ca công ty (BE filter) |
| GAP-MAP-PATROL-LAYER-01 | Track + pins | + **FILTER-BAR** · **LAYER-ASSIGNED** nét giao |
| GAP-MAP-PATROL-FIT-01 | No Fit chip | Click người → **fitBounds** nét · **cấm** Fit chip UI |
| GAP-MAP-PATROL-PIN-02 | Popup label/GPS/status | Popup HARD: **họ tên · mã NV · chainageLabel · GPS 6dp · giờ** · **cấm** title-only / `setView` |
| GAP-MAP-PATROL-KMPOST-01 | KM_POST corridor full | **LAYER-KMPOST** clamp km đoạn chọn |
| GAP-MAP-PATROL-BASE-01 | `attachVnClipBasemap` | **Giữ** MapService · **cấm** OSM.org/Esri · **cấm** VietnamBoundaries embed |
| GAP-MAP-PATROL-CHAIN-01 | Peer chainage/bake | **Reuse** · **cấm** migration mới nếu pair có |
| GAP-MAP-PATROL-KM-EMPTY-01 | — | Thiếu cột km → **vẽ nét** · ô km **trống** · **cấm** bịa mét |
| GAP-MAP-PATROL-SNAP-01 / PIN-01 | Track · badge pin | **Giữ** |
| GAP-MAP-PATROL-PHOTO-01 | GALLERY-PATROL FileService | **Giữ** prior |
| GAP-MAP-OMS-KEEP | R1–R11 | **Giữ** · Dev `/agent-dev-oms-map` |

## 4. Control map (Control = controlHint)

| Field key | Label | Control | Zone |
|-----------|-------|---------|------|
| filter.office | Văn phòng | Select | FILTER-BAR |
| filter.route | Tuyến | Select | FILTER-BAR |
| filter.mode | Loại tuần | TabGroup / Chip | FILTER-BAR |
| list.personName | Họ tên | Text | LIST-PERSON |
| list.employeeCode | Mã NV | Text | LIST-PERSON |
| list.route | Tuyến | Text | LIST-PERSON |
| list.kmFromTo | Km đoạn | Text | LIST-PERSON (empty ok) |
| list.status | Trạng thái | Badge | LIST-PERSON |
| sideTab | Tab sidebar | TabGroup | TAB-ROAD/CHECK/DETAIL |
| detail.name | Họ tên | Text | TAB-DETAIL |
| detail.routes | Danh sách tuyến | List readonly | TAB-DETAIL |
| detail.history | Lịch sử hoạt động | Timeline | TAB-DETAIL |
| map.basemapChip | Lớp nền | ChipGroup | MAP-BAR |
| map.btnLocateMe | Vị trí của tôi | Button | MAP-BAR |
| map.assignedSeg | Nét đoạn giao | MapPolyline | LAYER-ASSIGNED |
| map.kmPost | Lưới KM_POST | MapLayer | LAYER-KMPOST |
| map.track | Nét tuần | MapPolyline | MAP-HOST |
| map.pinDone / map.pinPending | Pin check-in | MapPin + badge | MAP-HOST |
| inspect.name | Họ tên | Text | MAP-POPUP-INSPECT |
| inspect.employeeCode | Mã NV | Text | MAP-POPUP-INSPECT |
| inspect.chainageLabel | Lý trình | Text | MAP-POPUP-INSPECT (empty ok) |
| inspect.gps | GPS | Text | MAP-POPUP-INSPECT (**6 số lẻ**) |
| inspect.time | Giờ | Text | MAP-POPUP-INSPECT |
| inspect.photoIds | Ảnh tuần đường | ImageGallery | GALLERY-PATROL |
| inspect.photoEmpty | Empty gallery | EmptyState | GALLERY-PATROL |

## 5. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/gis-patrol-map-prototype.html` |
| List zones | **N/A** (packKind=map · **cấm** DES-GRID) |
| Form zones | Full page map + MapPopup · **không** form 5-cột voucher |
| SSOT | `design-prototype-review.md` · `design-real-view-parity.md` · `/agent-dev-oms-map` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/gis-patrol-map/ui/prototype/gis-patrol-map-prototype.html` |
| **peerStdUrl** | `http://localhost:9301/gis-patrol-map` |
| **real_view_parity** | `v1` |

### Wire (map · content-only)

```
[NAV-GIS]        Bản đồ tài sản | Tuần đường | Camera
[FILTER-BAR]     Văn phòng · Tuyến · tuần đường|tuần kiểm
[TAB-*]          Tuần đường | Tuần kiểm | Chi tiết
[LIST-PERSON]    Họ tên · mã NV · tuyến · Km (empty ok) · Badge · click→fit nét
[TAB-DETAIL]     history → GALLERY-PATROL
[MAP-HOST]       LAYER-ASSIGNED · LAYER-KMPOST · track · pins · rider · +/- only
[MAP-BAR]        Tiêu chuẩn|Vệ tinh · Vị trí của tôi · cấm Fit · cấm lớp TS
[MAP-POPUP]      tên · mã NV · chainageLabel · GPS 6dp · giờ · GALLERY-PATROL
```

## 6. Visual / map rules (KEEP + OMS + Delta)

- Live Leaflet clip peer GIS — **cấm** Cesium · **cấm** OSM.org/Esri · **cấm** VietnamBoundaries embed
- Load = `fitVnClipMap` · person click = **fitBounds** nét giao · **cấm** Fit chip (R11 · FIT-01)
- Assigned = bake/`rmms_user_route_segments` · track = `routeDrivingTrack` · panes assigned+corridor+track (R7b/R8)
- KM_POST chỉ trong km range đoạn chọn · thiếu cột km → vẫn vẽ nét · ô km trống · **cấm** bịa mét
- Pins badge xanh+giờ / đỏ «Chưa» · click → MapPopup HARD fields · **cấm** title-only · **cấm** auto `setView`
- Animate rider arc-length · **cấm** `setIcon` mỗi frame
- Gallery: resign `web-bff/api/v1/files/*` · empty «Chưa có ảnh» · **cấm** persist/log full presigned URL
- Sessions trống hoặc có data → **cấm** seed/waypoints Vinh. Trống thì danh sách trống + toast. **Cấm** blank page không thông báo
- Web **read-only** — **cấm** invent POST files / PATCH status trên map P1
- Soft error = toast/`useAlert` · **cấm** native `alert`/`confirm`

## 7. Handoff → SA

- Scope: BE filter `rmms_user_route_segments` + role (U-SCOPE-API default) · MFE **không** bypass
- Chainage/bake: reuse `web-rmms-patrol-map` · **migration=none** nếu pair có
- Files: `web-bff/api/v1/files/*` · resign · persist **guid** (`PhotoLocalIds`)
- Patrol: `api/v1/patrol/sessions` + `/{id}/check-ins` · BFF `web-bff/api/v1/patrol/sessions`
- Domain Patrol (+ Gis cite) · **cấm ERP.*** · **cấm** invent `api/v1/gis-patrol-map`
- U-* locked: SCOPE=BE · KM empty ok · PHOTO=guid · GALLERY=popup+Chi tiết
- Next Dev: wire Delta REAL/SCOPE/LAYER/FIT/PIN-02/KMPOST/KM-EMPTY · keep PHOTO · OMS `/agent-dev-oms-map`

## 8. design_confirm

| Key | Value |
|-----|-------|
| design_confirm | `approve` (autoApprove ON) |
| reviewUrl opened | path above (artifact written) |
| UNCLEAR | none (U-* inherit PO defaults) |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.12.1 versionGate=ok contentHashPriorDataAnaly=sha256:ca2b1f0e2bf0bd97e92b99936fde30e4e92f1db00023191cf55297415b8d8247 taskId=task_7fb86e87 real_view_parity=v1 -->
