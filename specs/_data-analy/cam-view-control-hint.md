# Data-analy — cam-view (controlHint · mobile Camera xem)

| | |
|---|---|
| feature | `cam-view` |
| title | [Mobile] Camera xem |
| role | `data_analy` · `/agent-data-analy-mobile` · mode `feature_context` |
| packKind | **`sheet`** (STATUS / `_form-type-mobile` scan) · **demo surface** = full screen `#sc-cam-view` (không `#sheet-*`) |
| changeScope | `new_page` |
| status | **confirmed** |
| taskId | `task_2a5ed594` |
| autoApprove | `ON` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-cam-view` · `DES-MOB-CAM-VIEW` |
| ctx | `docs/context/features/cam-view.md` · peer `camera-connect.md` · `me.md` · `specs/mobile-p1/ui/design.md` § Camera xem |
| generatedAt | `2026-08-29T17:30:00.000Z` |

**Cấm:** watermark Gói · invent `api/v1/cam-view` · gộp `camera-connect` HW / `cam-patrol` / `vis-capture` · fake JPEG/events · ERP.* · mfeStdUrl · system alert · credentials `connect/snapshot` trên app.

## Skill packet (`/agent-data-analy-mobile`) — 4 file

| File | Skill step |
|------|------------|
| **file này** | 4–5 controlHint + tech factors |
| [`cam-view-bff-endpoints.md`](cam-view-bff-endpoints.md) | 6 BFF · **cấm invent** |
| [`cam-view-action-tree.md`](cam-view-action-tree.md) | 7 tree + share/reuse |
| [`cam-view-real-data.md`](cam-view-real-data.md) | 6b real-data bind |

## § Delta Current vs New (`new_page`)

| ID | Current (native) | New (SSOT mobile demo + CTX) | Surface |
|----|------------------|------------------------------|---------|
| GAP-MOB-CAMVIEW-SCR-01 | Stub / missing | Full `#sc-cam-view` «Camera xem» · back Tôi | screen |
| GAP-MOB-CAMVIEW-JPEG-01 | — | JPEG card · model + Cập nhật HH:mm | preview |
| GAP-MOB-CAMVIEW-EVT-01 | — | Section Sự kiện · rows tốc độ / biển | list |
| GAP-MOB-CAMVIEW-REF-01 | — | Trailing «Làm mới» → snapshot + events · toast | CTA |
| GAP-MOB-CAMVIEW-DATA-01 | — | GET `cameras` · POST `{id}/snapshot` · GET `cameras/events` via Mobile.Bff | BFF |
| GAP-MOB-CAMVIEW-DUAL-01 | Android 1 row · thiếu «làn 2» + biển | Design dual parity iOS | dual |
| GAP-MOB-CAMVIEW-PACK-01 | STATUS packKind=`sheet` vs demo full screen | Design/PO chốt sheet→screen | meta |
| GAP-MOB-CAMVIEW-PICK-01 | Demo 1 cam | P1 first Online · empty-state | meta |

**Không** đổi (OUT pack): web `camera-connect` HW form · wall · RTSP/WebRTC live · `cam-patrol` finder · `vis-capture` · CRUD create/update/delete · `connect/test`.

## Tech factors

| Factor | P1 | Notes |
|--------|----|-------|
| GPS | n/a | Không stamp GPS trên màn này |
| Camera | **no device cam** | JPEG từ domain snapshot — **không** AVCapture / CameraX finder |
| Offline | yes | Fail snapshot/events → toast lỗi · **cấm** fake 200 JPEG |
| Map | n/a | |
| Biometric | n/a | |
| Push | n/a | |

## § Tab index

`tabs: none` trên surface — **không** segment riêng (`GAP-TAB-01`). Shell Tab 5: tab **`me`** (Tôi) active khi đứng `#sc-cam-view` (`data-tab="me"`). Entry từ hub `me` row «Camera xem».

## § Demo dual

Cùng title «Camera xem» · cùng preview «Ảnh JPEG · iDS-TCM403» · «Cập nhật 08:41» · cùng section «Sự kiện» · cùng CTA «Làm mới» · toast «Đã làm mới ảnh» · cùng `#i-video` / `#i-chevron-left`.  
iOS: back label «Tôi» · 2 event rows («Tốc độ 72 km/h» + «Phát hiện biển P.127» · sub «08:41 · làn 2» / «08:36»).  
Android: icon-btn chevron only · **1** event row «Tốc độ 72 km/h» / «08:41» (thiếu lane + biển) → **GAP-MOB-CAMVIEW-DUAL-01** (Design chốt parity).  
**Cấm** invent icon — entry hub dùng `#i-video` (đã có).

## controlHint — `#sc-cam-view` (`DES-MOB-CAM-VIEW`)

| Field | VN | controlHint | Size | Kit | Notes |
|-------|----|-------------|------|-----|-------|
| navBack | Tôi | BackButton | 16 | `LinmTopBar` leading `#i-chevron-left` | `go('me')` |
| title | Camera xem | TopBar title | 17 | `LinmTopBar` | fixed |
| btnRefresh | Làm mới | TextButton trailing | 16 | `LinmTopBar` trailing | POST snapshot + GET events · toast |
| jpegCard | Ảnh JPEG · {ModelCode} | ImageCard / MediaPreview | 16 / 13 | dark surface + `#i-video` placeholder | bind Base64 · caption model |
| jpegUpdated | Cập nhật {HH:mm} | Text caption | **13** | on card | bind `CapturedAt` local |
| sectionEvents | Sự kiện | SectionLabel | **13** | | fixed |
| rowEventSpeed | Tốc độ {n} km/h | ListRow | 13 / ≥16 | `LinmListRow` | bind `SpeedKmh` · sub time · lane optional |
| rowEventPlate | Phát hiện biển {Plate} | ListRow | 13 / ≥16 | `LinmListRow` | bind `Plate` / RawKind · dual GAP |
| toastRefresh | Đã làm mới ảnh | Toast | 13–16 | `LinmToast` | sau refresh OK |
| emptyCam | (empty-state) | EmptyState | 13–16 | | khi GET cameras empty / offline |
| toastFail | (lỗi tải ảnh / sự kiện) | Toast | 13–16 | `LinmToast` | **cấm** fake |

### Entry (parent chrome — không control riêng slug)

| Field | VN | controlHint | Kit | Notes |
|-------|----|-------------|-----|-------|
| rowCamView | Camera xem | ListRow nav | `LinmListRow` `#i-video` | `me` · `go('cam-view')` |
| chipCamRoute | Camera tuyến | Chip jump | ops/home chip | `data-jump="cam-view"` · shared_action |

## UNCLEAR

**none** — demo + design § Camera xem chốt JPEG + events · picker mặc định = GAP-MOB-CAMVIEW-PICK-01 (PO/Design · không UNCLEAR UI).

## Handoff → PO

| Field | Value |
|-------|-------|
| feature | `cam-view` |
| control-hint | **PASS** · file này |
| real-data | **PASS** · `cam-view-real-data.md` |
| bff | **PASS** · `cam-view-bff-endpoints.md` |
| action-tree | **PASS** · `cam-view-action-tree.md` |
| next | `/agent-po-mobile` · autoApprove ON |
| e2eQa | queued `/agent-qa*` — **cấm** e2e ở data_analy |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-29T17:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-view-control-hint-20260829 |
| ctxHash | sha256:cam-view-ctx-20260829 |
| demoHash | sha256:mobile-p1-sc-cam-view-20260829 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
