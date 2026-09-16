# PO — Requirement — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| changeScope | `edit_page` |
| packKind | `map` (confirm) |
| formType | map inspect + sidebar tabs (N/A Kind B list / report) |
| status | `confirmed` |
| lane | `web` |
| autoApprove | `ON` |
| taskId | `task_138c4ae2` |
| contentHash | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| analyReuse | hash skip · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| updatedAt | `2026-09-12T06:05:00.000Z` |

## Goal

Hoàn leftover Bản đồ Tuần đường (`/gis/tuan-duong`) trên GIS MFE: shell tabs + list person + track/pin/animate OMS giữ nguyên; **delta NEW** = gallery **ảnh tuần đường** trên map inspect (+ parity Chi tiết lịch sử) qua FileService resign — **cấm** lớp tài sản / invent API / ERP.*.

## § Delta Current vs New (`edit_page`)

| ID | Current | New | Surface |
|----|---------|-----|---------|
| GAP-WEB-EDIT-01 | Menu/tabs đúng CTX | **Giữ** · **cấm** re-add lớp TS / Lớp / Chú giải | shell |
| GAP-MAP-PATROL-GPS-01 | Marker = check-in GPS · seed Vinh fallback | **Giữ** leftover parity | pins |
| GAP-MAP-PATROL-SNAP-01 | `routeDrivingTrack` · **cấm** `/match` 100m | **Giữ** | track |
| GAP-MAP-PATROL-PIN-01 | Badge xanh+giờ / đỏ «Chưa» | **Giữ** | pin |
| GAP-MAP-CLICK-ZOOM | Popup / leftover title-only risk | **Hoàn** `{MapPopup}` đủ field · **cấm** title-only / `setView` | popup |
| GAP-MAP-PATROL-PHOTO-01 | `photoLocalIds` API · UI map **không** gallery | Gallery ảnh tuần đường · persist **guid** · resign mỗi view | Inspect + Chi tiết |
| GAP-MAP-PATROL-FILE-HARD | — | Reuse `web-bff/api/v1/files/*` · **cấm** `/implement-file-service` · **cấm** persist presigned URL | SA/Dev |
| GAP-MAP-OMS-KEEP | OMS R1–R11 | **Giữ** · Dev `/agent-dev-oms-map` | map host |

**Không đổi:** route `/gis/tuan-duong` · 3 tabs · BE `api/v1/patrol` · mobile lane **off**.

## Sources (from analy — no re-scan)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/gis-patrol-map.md` | P0 · hash above |
| DEM-01 | N/A | demo N/A · inventory từ CTX + live MFE |
| CH-01 | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-control-hint.md` | controlHint SSOT |
| RD-01 | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/gis-patrol-map-real-data.md` | §A+§B+§D PASS |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol | **cấm ERP.*** |
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` | `GisPatrolMapPage` |
| peerStdUrl | `http://localhost:9301/gis-patrol-map` | Design peer |
| liveRoute | `/gis/tuan-duong` | keep (`route_confirm`) |

## § Control hints (copy analy)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| list.personName | Họ tên | Text | sessions |
| list.route | Tuyến | Text | |
| list.status | Trạng thái | Badge | |
| detail.name | Họ tên | Text | Chi tiết |
| detail.routes | Danh sách tuyến đường | List readonly | mobile parity |
| detail.history | Lịch sử hoạt động | Timeline | check-ins |
| sideTab | Tab sidebar | TabGroup | 3 fixed |
| map.basemapChip | Lớp nền | ChipGroup | Tiêu chuẩn \| Vệ tinh |
| map.btnLocateMe | Vị trí của tôi | Button | map-bar |
| map.track | Nét tuần | MapPolyline | OSRM driving |
| map.pinDone / map.pinPending | Pin check-in | MapPin + badge | xanh/đỏ |
| inspect.label | Điểm tuần | Text | |
| inspect.gps | GPS | Text | |
| inspect.status | Trạng thái điểm | Badge | |
| inspect.content | Ghi chú | Text | optional |
| inspect.photoIds | Ảnh tuần đường | ImageGallery | FileService · resign |
| inspect.photoEmpty | Empty gallery | EmptyState | «Chưa có ảnh» |

## § Screens (REQUIRED)

| Surface | Pattern | FormMode | Actions | Zone ids | `devSlash` |
|---------|---------|----------|---------|----------|------------|
| Bản đồ Tuần đường page | **Full page** | read-only map | select person · animate · locate · inspect | NAV-GIS · TAB-ROAD · TAB-CHECK · TAB-DETAIL · LIST-PERSON · MAP-HOST | `/agent-dev-oms-map` |
| Map inspect popup | **Modal** (MapPopup card) | read | open/close · gallery view | MAP-POPUP-INSPECT · GALLERY-PATROL | `/map-inspect-popup` · `/agent-dev-oms-map` |
| Chi tiết lịch sử media | Full page sidebar panel | read | open gallery từ dòng history | TAB-DETAIL · GALLERY-PATROL | `/agent-dev-oms-map` |

**Nav shell:** Bản đồ tài sản · **Tuần đường** · Camera — **cấm** ha-tang trên page này.  
**Tabs:** Tuần đường · Tuần kiểm · Chi tiết — **cấm** Lớp / Chú giải / Thuộc tính / Kết quả / tree TS.  
**Grid list AC:** N/A (`packKind=map`).  
**Report AC:** N/A.

## § Map AC (`packKind=map`)

1. Live Leaflet clip peer GIS · chips Tiêu chuẩn \| Vệ tinh · **cấm** OSM.org/Esri DTO trên MFE (OMS R2).
2. Load = `fitVnClipMap` · **cấm** Fit chip trên map-bar (R11 · CTX).
3. Track = `routeDrivingTrack` / OSRM driving bake · line levels corridor+track (R7b/R8) · **cấm** chord = xong · **cấm** `/match` 100m.
4. Pins badge xanh+giờ / đỏ «Chưa» · click → `{MapPopup}` đủ field · **cấm** title-only · **cấm** auto `setView` (R7c · GAP-MAP-CLICK-ZOOM).
5. Animate rider arc-length trên path · **cấm** `setIcon` mỗi frame.
6. **NEW** gallery `inspect.photoIds` từ check-in → resign `web-bff/api/v1/files/*` · empty «Chưa có ảnh» · **cấm** log/persist full presigned URL.
7. BFF trống/fail → seed Vinh · **cấm** blank page · toast soft.
8. Web page **read-only** — **cấm** invent POST files / PATCH status trên map P1.

## § Leave / alert (REQUIRED)

| Case | Behavior |
|------|----------|
| Dirty form | **N/A** — page map read-only (không edit form / không Lưu bản vẽ) |
| Soft error (BFF/resign/geo deny) | toast / `useAlert` · **cấm** `window.alert` / `confirm` native |
| Chặn thao tác (nếu sau này thêm panel edit) | `LeaveConfirmModal` (`/implement-show-leave-confirm`) · **GAP-PO-LEAVE-01** |

## § Tab index

| tabs | Surfaces |
|------|----------|
| `3` | Tuần đường · Tuần kiểm · Chi tiết |

## APIs (cite real-data §B)

| Op | Path |
|----|------|
| Sessions | `GET /web-bff/api/v1/patrol/sessions` → `api/v1/patrol/sessions` |
| Check-ins | `GET …/patrol/sessions/{id}/check-ins` |
| Files view | `web-bff/api/v1/files/*` · FileService.Bff |
| Invent | **cấm** `api/v1/gis-patrol-map` · `api/v1/nghiem-thu-files` · ERP.* |

## Open questions (autoApprove defaults)

| id | Decision (PO confirm) |
|----|------------------------|
| U-PHOTO-FIELD | SA treat `PhotoLocalIds` = FileService **guid** · empty → empty gallery · **cấm** invent upload API page |
| U-GALLERY-ZONE | **Cả hai parity**: MapPopup click pin + dòng lịch sử Chi tiết cùng media |

## DoD (measurable)

- [ ] Leftover popup/animate/seed parity per CTX gaps PASS
- [ ] Click pin → gallery ảnh tuần đường (hoặc empty state) · resign OK
- [ ] Chi tiết lịch sử mở cùng media
- [ ] OMS R1–R11 không regress · không lớp TS / Fit chip
- [ ] FileService reuse only · không scaffold FilesController

## Assign Dev

| Field | Value |
|-------|-------|
| `devSlash` | `/agent-dev-oms-map` |
| peers | `/map-inspect-popup` · `/gis-tai-san-snap` · `/map-snap-centerline` · FileGate `/init-bff-file` + `/integrate-file-upload-web` (view/resign) |
| **cấm** | `/implement-file-service` · Cesium · ERP.* |

## Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `gis-patrol-map` / `map` |
| phase_from / phase_to | `po` → `design` |
| STATUS | `confirmed` (autoApprove) |
| Context / Demo / DI | CTX-01 · DEM N/A · DI N/A |
| controlHint / UNCLEAR | § Control hints · U-* resolved defaults above |
| Screens / Pattern / devSlash | Full page + MapPopup · `/agent-dev-oms-map` |
| peerStdUrl / reviewUrl | `http://localhost:9301/gis-patrol-map` · reviewUrl=**(Design)** |
| Grid/Report AC | N/A map |
| Leave | N/A dirty · toast/useAlert only |
| Next | `/agent-design` — control-map PHOTO · prototype + reviewUrl · real_view_parity |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | `agent-po` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.12.1` |
| contentHash | `sha256:e1d043dbf402977a2d0e888df1d32d0e542b2792b22076e2dc5fc482e8a7c287` |
| analyzedAt | `2026-09-12T05:45:00.000Z` |
| writtenAt | `2026-09-12T06:05:00.000Z` |
| versionGate | `ok` |
| status | `confirmed` |
