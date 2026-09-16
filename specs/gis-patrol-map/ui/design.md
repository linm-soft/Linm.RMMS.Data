# Design — gis-patrol-map (Kind F map · leftover + ảnh inspect)

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
| versionGate | `ok` (aligned prior analy/po) |
| contentHashPriorDataAnaly | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| taskId | `task_33939515` |
| priorTaskId | `task_138c4ae2` |
| updatedAt | `2026-09-12T06:20:00.000Z` |
| prior · data_analy | `done` · hash skip · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · § Delta PHOTO + FILE-HARD · U-* locked |

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
| SCR-MAP | Full `/gis/tuan-duong` | NAV-GIS · TAB-* · LIST-PERSON · MAP-HOST · map-bar |
| SCR-INSPECT | MapPopup Modal | MAP-POPUP-INSPECT · GALLERY-PATROL |
| SCR-DETAIL | Sidebar Chi tiết | TAB-DETAIL · history → GALLERY-PATROL parity |

| Zone id | Name | Content |
|---------|------|---------|
| NAV-GIS | Nav shell | Bản đồ tài sản · **Tuần đường** · Camera — **cấm** ha-tang |
| TAB-ROAD | Tab Tuần đường | Person list + map animate |
| TAB-CHECK | Tab Tuần kiểm | Peer tab (keep) |
| TAB-DETAIL | Tab Chi tiết | Họ tên · tuyến · Lịch sử hoạt động |
| LIST-PERSON | List người | Họ tên · tuyến · Badge status |
| MAP-HOST | Map host | Leaflet clip · track · pins · rider animate · **cấm** lớp TS |
| MAP-BAR | Map-bar | **Tiêu chuẩn \| Vệ tinh** · **Vị trí của tôi** · **cấm** Fit chip |
| MAP-POPUP-INSPECT | Inspect popup | Label · GPS · status · note · **gallery** |
| GALLERY-PATROL | Ảnh tuần đường | `ImageGallery` fileIds + resign · empty «Chưa có ảnh» |

**Header chrome:** content-only · **cấm** note/GAP/Kind badge · **cấm** Hồ sơ/Đổi MK.

## 3. § Delta Current vs New (`edit_page` · họp 04/09 — 5 / W5-4)

| ID | Current | New (Design chốt) |
|----|---------|-------------------|
| GAP-WEB-EDIT-01 | Shell tabs/list đúng | **Giữ** · **cấm** lớp TS / Lớp / Chú giải |
| GAP-MAP-PATROL-GPS/SNAP/PIN | Track OSRM · pins xanh/đỏ | **Giữ** leftover parity |
| GAP-MAP-CLICK-ZOOM | Popup risk title-only | **Hoàn** MapPopup đủ field · **cấm** `setView` |
| GAP-MAP-PATROL-PHOTO-01 | API `photoLocalIds` · **không** gallery UI | **GALLERY-PATROL** trên popup + Chi tiết history |
| GAP-MAP-PATROL-FILE-HARD | — | FileService.Bff only · persist **guid** · resign view |
| GAP-MAP-OMS-KEEP | R1–R11 | **Giữ** · Dev `/agent-dev-oms-map` nếu paint |

## 4. Control map (Control = controlHint)

| Field key | Label | Control | Zone |
|-----------|-------|---------|------|
| list.personName | Họ tên | Text | LIST-PERSON |
| list.route | Tuyến | Text | LIST-PERSON |
| list.status | Trạng thái | Badge | LIST-PERSON |
| sideTab | Tab sidebar | TabGroup | TAB-ROAD/CHECK/DETAIL |
| detail.name | Họ tên | Text | TAB-DETAIL |
| detail.routes | Danh sách tuyến | List readonly | TAB-DETAIL |
| detail.history | Lịch sử hoạt động | Timeline | TAB-DETAIL |
| map.basemapChip | Lớp nền | ChipGroup | MAP-BAR |
| map.btnLocateMe | Vị trí của tôi | Button | MAP-BAR |
| map.track | Nét tuần | MapPolyline | MAP-HOST |
| map.pinDone / map.pinPending | Pin check-in | MapPin + badge | MAP-HOST |
| inspect.label | Điểm tuần | Text | MAP-POPUP-INSPECT |
| inspect.gps | GPS | Text | MAP-POPUP-INSPECT |
| inspect.status | Trạng thái điểm | Badge | MAP-POPUP-INSPECT |
| inspect.content | Ghi chú | Text | MAP-POPUP-INSPECT |
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
[NAV-GIS]     Bản đồ tài sản | Tuần đường | Camera
[TAB-*]       Tuần đường | Tuần kiểm | Chi tiết
[LIST-PERSON] rows Họ tên · tuyến · Badge
[TAB-DETAIL]  history rows → mở GALLERY-PATROL
[MAP-HOST]    track OSRM · pins xanh/đỏ · rider · +/- only
[MAP-BAR]     Tiêu chuẩn|Vệ tinh · Vị trí của tôi · cấm Fit · cấm lớp TS
[MAP-POPUP]   label · GPS · status · note · GALLERY-PATROL
```

## 6. Visual / map rules (KEEP + OMS)

- Live Leaflet clip peer GIS — **cấm** Cesium · **cấm** OSM.org/Esri DTO trên MFE
- Load = `fitVnClipMap` · **cấm** Fit chip map-bar (R11)
- Track = `routeDrivingTrack` / OSRM driving · line levels corridor+track (R7b/R8) · **cấm** chord = xong · **cấm** `/match` 100m
- Pins badge xanh+giờ / đỏ «Chưa» · click → MapPopup · **cấm** title-only · **cấm** auto `setView` (R7c)
- Animate rider arc-length · **cấm** `setIcon` mỗi frame
- Gallery: resign `web-bff/api/v1/files/*` · empty «Chưa có ảnh» · **cấm** persist/log full presigned URL
- BFF trống/fail → seed Vinh · toast soft · **cấm** blank page
- Web **read-only** — **cấm** invent POST files / PATCH status trên map P1
- Soft error = toast/`useAlert` · **cấm** native `alert`/`confirm`

## 7. Handoff → SA

- Files: `web-bff/api/v1/files/*` · resign on view · persist **guid** only (`PhotoLocalIds`)
- Patrol: `api/v1/patrol/sessions` + `/{id}/check-ins` · BFF `web-bff/api/v1/patrol/sessions`
- Domain Patrol only · **cấm ERP.*** · **cấm** invent `api/v1/gis-patrol-map` / FilesController
- U-PHOTO-FIELD / U-GALLERY-ZONE = PO defaults locked
- Next Dev: wire GALLERY-PATROL + leftover popup · OMS gate nếu paint

## 8. design_confirm

| Key | Value |
|-----|-------|
| design_confirm | `approve` (autoApprove ON) |
| reviewUrl opened | path above (artifact written) |
| UNCLEAR | none |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.09.05.03 rulesVersion=2026.09.12.1 versionGate=ok contentHashPriorDataAnaly=sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287 taskId=task_33939515 real_view_parity=v1 -->
