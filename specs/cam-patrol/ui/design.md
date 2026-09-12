# Design — cam-patrol

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập camera |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON · `design_confirm` **approve**) |
| packKind | **`screen`** · **cấm** sheet chrome |
| changeScope | `edit_page` · GAP-MOB-CAM-FRAME-01..03 · **cấm** full redesign |
| taskId | `task_0ab8d0f5` |
| priorPo | `handoff/po-compact.md` · `po/requirement.md` **confirmed** |
| priorDa | `_data-analy/cam-patrol-control-hint.md` + `cam-patrol-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:cam-patrol-control-hint-20260912-frame` |
| realDataHash | `sha256:cam-patrol-real-data-20260912-frame` |
| updatedAt | `2026-09-12T11:30:00.000Z` |

## § Delta FRAME (edit_page · keep zones)

| ID | Design DoD | Surface |
|----|------------|---------|
| GAP-MOB-CAM-FRAME-01 | Finder capture JPEG → non-null `imageBase64` trước POST detect · **không** đổi layout zones | `DES-MOB-CAM-FINDER` → detect |
| GAP-MOB-CAM-FRAME-02 | Capture/HTTP fail → toast `cam.toast.detectFail` = **Không nhận diện được. Thử lại.** · card nil · **cấm** fake «Ổ gà» | toast + `#detect-card` |
| GAP-MOB-CAM-FRAME-03 | Parity body `DetectAiVisionBody.imageBase64` với siblings · Design ghi bind note · Dev dual | iOS+Android |

**Keep:** `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` · copy VN · score ẩn ship · packKind `screen` · cleanup_mock live stamp.

## Context lock (cleanup_mock · giữ)

- Live route stamp từ active session · **cấm** ship `demoRouteStamp` khi empty/fail.
- Empty/no active → `patrol.empty.active.route` · fail → toast `cam.toast.sessionFail`.
- Demo HTML **giữ** sample stamp (visual only).

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/ios/index.html` |
| iOS ship (ẩn %) | same + `?ship=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/ios/index.html?ship=1` |
| iOS GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/ios/index.html?deny=1` |
| iOS frame fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/ios/index.html?fail=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/android/index.html` |
| Android ship | same + `?ship=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/android/index.html?ship=1` |
| Android GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/android/index.html?deny=1` |
| Android frame fail | same + `?fail=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/android/index.html?fail=1` |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + **Tuần đường** | icon-btn chevron only |
| Title | **Thu thập bằng camera** 17 | TopAppBar ~20 |
| Shell | Tab 5 · tab **`field`** active | NavigationBar 5 |
| pack tabs | **none** | same |
| Surface | full screen `#sc-cam-patrol` | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-CAM-PATROL` | Screen owner `#sc-cam-patrol` | push từ `patrol-home` | same | `data-tab="field"` |
| `DES-MOB-CAM-FINDER` | Camera finder + FOV `.box` | AVCapture + **frame capture** | CameraX + **frame capture** | app surface · JPEG→base64 trước detect |
| OverlayStamp route | live session route | Text 13 | same | GET sessions · **cấm** demo stamp ship |
| OverlayStamp GPS | `{lat}, {lng} · ±{a} m · đã chốt` | Text 13 | same | **cấm** fake |
| `LinmListRow` detect | Phát hiện / DefectClass | label 13 / value ≥16 | same | **chỉ** sau detect ok + real frame |
| Score row | Độ tin cậy / 91% | demo only | same | **ship ẩn** · `?ship=1` |
| `LinmListRow` action | Hành động / Tạo vấn đề sau xác nhận | fixed P1 | same | local |
| Confirm | Xác nhận · tạo vấn đề | `LinmPrimaryButton` | same | POST incident · cần detection thật |
| Skip | Bỏ qua | `LinmSecondaryButton` | same | clear · toast bỏ |
| Toast OK / Skip / Fail | banner | `LinmToast` | same | fail = `cam.toast.detectFail` |
| `DES-MOB-GPS-DENY` | `#modal-gps` | in-app modal | Material dialog | deny · chặn Confirm |

## SF ↔ Material icon

| `#i-*` | Motif | SF Symbol | Material |
|--------|-------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-mappin` | pin + circle r=2.2 | `mappin` | `Place` |
| `#i-home` | house | `house` | `Home` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |
| `#i-video` | entry hub only | `video` | `Videocam` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual.

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Thu thập bằng camera** |
| Back (iOS) | **Tuần đường** |
| Stamp route (demo) | **QL.1 · Km 1556+040** |
| Stamp GPS (demo) | **11.5308, 109.0082 · ±4 m · đã chốt** |
| Row detect (demo ok) | **Phát hiện** / **Ổ gà · Mặt đường** |
| Row score (demo) | **Độ tin cậy** / **91%** |
| Row action | **Hành động** / **Tạo vấn đề sau xác nhận** |
| Primary | **Xác nhận · tạo vấn đề** |
| Secondary | **Bỏ qua** |
| Toast OK | **Đã tạo vấn đề SC-2409 · định vị đã chốt** |
| Toast Skip | **Đã bỏ · nhận nhầm** |
| Toast detectFail | **Không nhận diện được. Thử lại.** (`cam.toast.detectFail`) |
| Modal title | **Định vị bị tắt** |
| Modal body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| Modal primary | **Sao chép hướng dẫn** |
| Modal secondary | **Để sau** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label · «Có mạng» · score % · fake lat/lng · class giả khi fail · sheet chrome.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron |
| `.finder` | native camera `DES-MOB-CAM-FINDER` | capture frame → base64 · `kit_missing_confirm` **approve** |
| `.stamp` | overlay Text | app surface |
| `.row` card-group | `LinmListRow` | score **không ship** · fail → card nil |
| `.btn-primary` | `LinmPrimaryButton` | Confirm |
| `.btn-secondary` | `LinmSecondaryButton` | Skip |
| toast | `LinmToast` | OK / Skip / detectFail |
| `#modal-gps` | feature modal | **cấm** system alert |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell |

### kit_missing_confirm (CameraFinder)

**approve** · autoApprove=ON · Finder = AVCapture / CameraX + FOV + stamp + **frame capture** · **không** tạo `LinmCameraFinder` package mới P1.

## controlHint ↔ DES

Khớp DA controlHint + PO § Delta FRAME — UNCLEAR=**none**. Confirm = POST create · Skip = local · detect **chỉ** sau real frame · fail → toast detectFail · **không** auto-POST trước confirm.

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Stamp tuyến | `GET patrol/sessions` |
| Frame | device camera · local JPEG/PNG → base64 |
| Detect | `POST ai-vision/detect` + **ImageBase64** non-null |
| Confirm | `POST incident/incidents` |
| GPS / Skip / Fail toast | device · local |

**Cấm** invent `api/v1/cam-patrol` · ERP.* · `mfeStdUrl` · POST detect với null image khi camera granted.

## Out of pack

| Item | Owner |
|------|-------|
| `field-reflect` / `cam-view` / `vis-capture` | sibling · **cấm** gộp |
| Score % ship | **cấm** |
| Capture encode / ViewModel wiring | Dev dual |
| Step 4b / MIG | **SKIP** (DTO ImageBase64 live) |
| Bottom-sheet chrome | **cấm** |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| html-to-native-map | `ui/html-to-native-map.md` | **PASS** |
| `/review-demo-design-mobile` | zones unchanged · `?fail=1` | Must=**0** |
| `kit_missing_confirm` | Finder + frame capture | **approve** |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual ios/android · keep prototype zones · § Delta FRAME · ux-analy §1–§9 · packKind=`screen` · hash skip (no re-scan) · handoff SA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T11:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-control-hint-20260912-frame |
| realDataHash | sha256:cam-patrol-real-data-20260912-frame |
| demoHash | sha256:cam-patrol-sc-cam-patrol-zones-unchanged |
| ctxHash | sha256:cam-patrol-ctx-20260912 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
