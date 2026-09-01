# Design — cam-patrol

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập camera |
| role | `/agent-design-mobile` |
| status | **confirmed** (autoApprove=ON) |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-CAM-PACK-01 · **cấm** sheet chrome) |
| changeScope | `new_page` · **edit_page** post cleanup_mock (`task_e7101ed6`) |
| taskId | `task_0f0d1974` |
| priorPo | `po/requirement.md` **confirmed** |
| priorDa | `_data-analy/cam-patrol-control-hint.md` + `cam-patrol-real-data.md` **confirmed** · hash skip · **cấm** re-scan (`GAP-DES-DEMO-RESCAN-01`) |
| contentHash | `sha256:cam-patrol-control-hint-20260828` |
| realDataHash | `sha256:cam-patrol-real-data-20260828` |
| updatedAt | `2026-09-01T06:00:00.000Z` |

## Context lock (cleanup_mock · 2026-09-01)

- Live route stamp từ active session · **cấm** ship `demoRouteStamp` / invent `QL.1 · Km 1556+040` khi empty/fail.
- Empty/no active → copy `patrol.empty.active.route` · fail → toast `cam.toast.sessionFail`.
- Demo HTML prototype **giữ** sample stamp (visual only · `?ship` unrelated).

## reviewUrl (dual — REQUIRED)

| Platform | Path | reviewUrl |
|----------|------|-----------|
| iOS | `ui/prototype/ios/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/ios/index.html` |
| iOS ship (ẩn %) | same + `?ship=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/ios/index.html?ship=1` |
| iOS GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/ios/index.html?deny=1` |
| Android | `ui/prototype/android/index.html` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/android/index.html` |
| Android ship | same + `?ship=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/android/index.html?ship=1` |
| Android GPS deny | same + `?deny=1` | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/android/index.html?deny=1` |
| Workflow (ref) | `specs/mobile-p1/ui/prototype/workflow-cam-patrol/index.html` | optional · `/wf-anim` ref |

**Cấm** `mfeStdUrl` / `yarn start:std` / port 9301.

## Frame / chrome

| | iOS | Android |
|--|-----|---------|
| Frame | 390×844 | 412×915 |
| Back | `#i-chevron-left` + label **Tuần đường** | icon-btn chevron only (parity OK) |
| Title | inline **Thu thập bằng camera** 17 | TopAppBar **Thu thập bằng camera** ~20 |
| Shell | Tab 5 · tab **`field`** (Tuần đường) active | NavigationBar 5 · cùng index |
| pack tabs | **none** — **cấm** invent segment (`GAP-TAB-01`) | same |
| Surface | **full screen** `#sc-cam-patrol` — **cấm** bottom-sheet | same |

## DES table

| DES | Zone | iOS | Android | Notes |
|-----|------|-----|---------|-------|
| `DES-MOB-CAM-PATROL` | Screen owner `#sc-cam-patrol` | push từ `patrol-home` | same | `data-tab="field"` |
| `DES-MOB-CAM-FINDER` | Camera finder + FOV `.box` | AVCapture overlay | CameraX overlay | **app native surface** · `kit_missing_confirm` **approve** |
| OverlayStamp route | `QL.1 · Km 1556+040` | Text 13 on finder | same | bind `GET patrol/sessions` |
| OverlayStamp GPS | `{lat}, {lng} · ±{a} m · đã chốt` | Text 13 | same | device GPS · **cấm** fake |
| `LinmListRow` detect | Phát hiện / Ổ gà · Mặt đường | label 13 / value ≥16 | same | bind `DefectClass` |
| Score row | Độ tin cậy / 91% | **demo only** | same | **ship ẩn** (`GAP-MOB-CAM-SCORE-01`) · `?ship=1` |
| `LinmListRow` action | Hành động / Tạo vấn đề sau xác nhận | fixed copy P1 | same | local |
| Confirm | Xác nhận · tạo vấn đề | `LinmPrimaryButton` | same | POST incident · toast SC-* |
| Skip | Bỏ qua | `LinmSecondaryButton` | same | clear card · toast bỏ |
| Toast OK / Skip | banner | `LinmToast` | same | **cấm** system alert |
| `DES-MOB-GPS-DENY` | `#modal-gps` | in-app modal | Material dialog card | deny · **chặn** Confirm |

## SF ↔ Material icon

| `#i-*` | Motif (SSOT mobile-p1) | SF Symbol | Material |
|--------|------------------------|-----------|----------|
| `#i-chevron-left` | `M15 5l-7 7 7 7` | `chevron.left` | `ArrowBack` |
| `#i-mappin` | pin + circle r=2.2 | kit / `mappin` | `Place` |
| `#i-home` | house path | `house` | `Home` |
| `#i-warning` | triangle | `exclamationmark.triangle` | `Warning` |
| `#i-wrench` | wrench path | `wrench` | `Build` |
| `#i-person` | person | `person` | `Person` |
| `#i-video` | (entry hub only) | `video` | `Videocam` |

**Cấm** invent `#i-*` · **cấm** lệch `d=` dual (`GAP-MOB-ICON-*`).

## Copy VN (SSOT — parity dual)

| Key | Copy |
|-----|------|
| Title | **Thu thập bằng camera** |
| Back (iOS) | **Tuần đường** |
| Stamp route | **QL.1 · Km 1556+040** |
| Stamp GPS | **11.5308, 109.0082 · ±4 m · đã chốt** |
| Row detect | **Phát hiện** / **Ổ gà · Mặt đường** |
| Row score (demo) | **Độ tin cậy** / **91%** |
| Row action | **Hành động** / **Tạo vấn đề sau xác nhận** |
| Primary | **Xác nhận · tạo vấn đề** |
| Secondary | **Bỏ qua** |
| Toast OK | **Đã tạo vấn đề SC-2409 · định vị đã chốt** |
| Toast Skip | **Đã bỏ · nhận nhầm** |
| Modal title | **Định vị bị tắt** |
| Modal body | **Cần vị trí để chấm công / chấm điểm tuần. Mở Cài đặt → Quyền vị trí cho RMMS.** |
| Modal primary | **Sao chép hướng dẫn** |
| Modal secondary | **Để sau** |
| Tabs | Trang Chủ · Tuần đường · Vấn đề · Công việc · Tôi |

**Cấm ship:** watermark Gói · device label «iPhone»/«· Android» · «Có mạng» · score % · fake lat/lng · sheet pack chrome.

## Kit map

| Demo | Kit iOS+Android | Notes |
|------|-----------------|-------|
| `.nav-bar` / `.top-bar` | `LinmTopBar` | leading chevron |
| `.finder` | **native camera layer** `DES-MOB-CAM-FINDER` | **không** invent kit name · `kit_missing_confirm` **approve** |
| `.stamp` | overlay Text on finder | app surface |
| `.row` card-group | `LinmListRow` | score row **không ship** |
| `.btn-primary` | `LinmPrimaryButton` | Confirm |
| `.btn-secondary` | `LinmSecondaryButton` | Skip |
| toast | `LinmToast` | OK / Skip / deny copy |
| `#modal-gps` | feature modal reuse | **cấm** `UIAlert` / `AlertDialog` |
| Tab 5 | `LinmTabBar` / NavigationBar | giữ shell |

### kit_missing_confirm (CameraFinder)

**approve** · autoApprove=ON · Finder = AVCapture (iOS) / CameraX (Android) overlay + FOV + stamp · **không** tạo `LinmCameraFinder` package mới P1 · Dev map app surface theo `DES-MOB-CAM-FINDER`.

## controlHint ↔ DES

Khớp PO §5 / DA controlHint — UNCLEAR=**none**. Confirm = POST create · Skip = dismiss local · **không** auto-POST trước confirm.

## BFF (Design note · SA chi tiết)

| Zone | Method · Path |
|------|----------------|
| Stamp tuyến | `GET patrol/sessions` |
| Detect | `POST ai-vision/detect` |
| Confirm | `POST incident/incidents` |
| GPS / camera / Skip | device · local |

**Cấm** invent `api/v1/cam-patrol` · ERP.* · `mfeStdUrl`.

## Out of pack

| Item | Owner |
|------|-------|
| `field-reflect` / `cam-view` / `vis-capture` / web `camera-connect` | sibling · **cấm** gộp |
| Score % ship | **cấm** (`GAP-MOB-CAM-SCORE-01`) |
| Detect body ảnh/GPS/video expand | SA · GAP-MOB-CAM-DETECT-01 |
| Bottom-sheet chrome | **cấm** (pack = screen) |

## Gates

| Gate | Artifact | Result |
|------|----------|--------|
| `/mobile-ui-ux-analy` | `ui/ux-analy.md` §1–§9 | **PASS** |
| html-to-native-map | `ui/html-to-native-map.md` | **PASS** |
| `/review-demo-design-mobile` | `ui/review/demo-parity.md` | Must=**0** |
| `kit_missing_confirm` | Finder native surface | **approve** |
| `design_confirm` | autoApprove=ON | **approve** |

## design_confirm

**approve** · autoApprove=ON · dual `ios/`+`android/` · ux-analy §1–§9 · demo-parity Must=0 · packKind=`screen` · ẩn score ship · Confirm=create · hash skip (no re-scan).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-design-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T21:08:48.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-control-hint-20260828 |
| realDataHash | sha256:cam-patrol-real-data-20260828 |
| demoHash | sha256:mobile-p1-sc-cam-patrol-20260828 |
| ctxHash | sha256:cam-patrol-ctx-20260828 |

---
<!-- Version meta: skillId=agent-design-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
