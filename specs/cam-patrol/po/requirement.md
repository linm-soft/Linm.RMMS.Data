# PO — Requirement — cam-patrol (mobile screen)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập camera |
| this role | `po` · `/agent-po-mobile` |
| changeScope | **`edit_page`** · GAP-MOB-CAM-FRAME-01 (null imageBase64 → real frame) |
| packKind | **`screen`** (confirmed · GAP-MOB-CAM-PACK-01 **closed**) |
| stack | `native_dual` |
| thisAction | **Thu thập bằng camera** `#sc-cam-patrol` only · owner `DES-MOB-CAM-PATROL` · entry `patrol-home` + shared `inc-form` · **cấm** gộp `field-reflect` / `cam-view` / `vis-capture` / `camera-connect` |
| status | `confirmed` (autoApprove=ON) |
| requestSource | run packet `task_71013e61` · `/agent-qldb-workflow-mobile` · roleOnly=`po` · `/agent-po-mobile` |
| autoApprove | **ON** — Design/SA tự confirm **khi tới lượt** · turn này **không** chain role khác |
| e2eQa | ON · queued `/agent-qa*` · `yarn e2e-qa-mobile` · **cấm** e2e / `yarn start:std` / `mfeStdUrl` ở PO |
| prior | data-analy **confirmed** · task `task_9ab16ef2` · compact `handoff/data_analy-compact.md` · control-hint `sha256:cam-patrol-control-hint-20260912-frame` · real-data `sha256:cam-patrol-real-data-20260912-frame` · **hash skip** — **cấm** re-scan demo (`GAP-PO-DEMO-RESCAN-01`) |
| `devSlash` | `/agent-dev-ios` + `/agent-dev-android` |
| updatedAt | `2026-09-12T11:22:00.000Z` |
| taskId | `task_71013e61` |

**Cấm:** gộp sibling · invent `api/v1/cam-patrol` · ERP.* · WebView HTML · `mfeStdUrl` · system alert · watermark Gói · fake lat/lng · score chrome ship % · POST detect `imageBase64=null` khi camera granted · class giả UI khi fail/thiếu frame · re-scan demo (`GAP-PO-DEMO-RESCAN-01`).

## 1. Goal

Màn **Thu thập bằng camera** native dual (iOS SwiftUI + Android Compose): trong ca tuần đường — camera finder + GPS chốt → **capture frame thật** → AI detect → user **Xác nhận · tạo vấn đề** hoặc **Bỏ qua**. Persona: Tuần đường · hiện trường. App **chỉ** `{BffBase}/mobile-bff/api/v1/…`.

**1 action = 1 feature.** Slug `cam-patrol` = `#sc-cam-patrol` `DES-MOB-CAM-PATROL` (+ `DES-MOB-CAM-FINDER`). Confirm / Skip / detect / stamp = **cùng slug**.

Entry: `patrol-home` `#i-video` · shared `#sc-inc-form` secondary (`reuse` · **không** enqueue).

## 2. changeScope `edit_page` · § Delta FRAME

Pack **đã ship** (prior Dev/QA/Review PASS · cleanup_mock). AutocodeTask mới = **edit_page** — **giữ** PO/Design zones · **không** full redesign.

| ID | Current (native) | New (DoD) | Surface |
|----|------------------|-----------|---------|
| GAP-MOB-CAM-FRAME-01 | iOS `runDetect` `imageBase64: nil` · Android omit → BE heuristic signed không khung thật | Capture JPEG từ finder → `imageBase64` **non-null** trên `POST ai-vision/detect` · GPS lat/lng/accuracyM giữ | finder → detect |
| GAP-MOB-CAM-FRAME-02 | Detect 200 null-image → card class heuristic | Capture fail / empty base64 / HTTP fail → toast `cam.toast.detectFail` · `detection=nil` · **cấm** bind class giả / demo «Ổ gà» | card + toast |
| GAP-MOB-CAM-FRAME-03 | incident-create / field-reflect / vis-capture đã gửi base64 | Cam-patrol parity: cùng `DetectAiVisionBody.imageBase64` từ camera session | iOS+Android |

**Keep (OUT of delta):** zones `#sc-cam-patrol` · packKind `screen` · copy VN · score ẩn · fake GPS cấm · BFF paths · Step 4b **SKIP** (DTO `ImageBase64` live) · sibling screens.

SSOT visual = dual HTML `#sc-cam-patrol` (iOS 390×844 · Android 412×915) — zone ids **không** đổi (code-only GAP).

## 3. DoD (đo được)

1. Dual native parity zones `#sc-cam-patrol` `DES-MOB-CAM-PATROL`: nav back · title · finder · stamps · detection card · Confirm/Skip · toasts. Tab **`field`** active · `tabs: none`.
2. Finder live continuous + FOV · **cấm** placeholder tĩnh khi camera granted.
3. **Frame capture (NEW):** trước mỗi `POST ai-vision/detect` — capture JPEG/PNG từ finder → base64 non-empty · gửi `DetectAiVisionBody.imageBase64` · **cấm** null/omit khi camera granted (`GAP-MOB-CAM-FRAME-01`).
4. Stamp tuyến/Km live từ `GET patrol/sessions` · fail/empty → empty label · **cấm** demoRouteStamp native · GPS vẫn chạy.
5. Stamp GPS device-only · deny → `DES-MOB-GPS-DENY` · chặn Confirm · **cấm** fake lat/lng.
6. Detection card **chỉ** sau detect 200 + real frame đã gửi:

   | Row | Demo SSOT | Ship |
   |-----|-----------|------|
   | Phát hiện | Ổ gà · Mặt đường | bind `DefectClass` (+ surface) · **chỉ** sau detect thật |
   | Độ tin cậy | 91% | **Ẩn** (`GAP-MOB-CAM-SCORE-01`) |
   | Hành động | Tạo vấn đề sau xác nhận | copy cố định P1 |

7. Capture fail / empty base64 → **không** POST · toast `cam.toast.detectFail` · card nil (`GAP-MOB-CAM-FRAME-02`).
8. Detect HTTP fail → card nil · toast detectFail · **cấm** fake class / fallback che fail.
9. Primary Confirm → `POST incident/incidents` + `DetectionId` · toast SC-* · **cấm** invent SC khi fail.
10. Skip → clear card · toast bỏ · finder tiếp · **không** API.
11. Offline / POST fail → queue · `patrol-offline` · **cấm** fake 200/SC.
12. Entry hub / inc-form → push owner (đã ship) · kit map giữ.
13. App chỉ `{BffPrefix}` · Dev dual build PASS (role sau) · QA Maestro (role sau).
14. BE: reuse paths · Step 4b **SKIP** · **cấm** invent `cam-patrol` controller.

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/cam-patrol.md` | screen |
| CTX-02 | `docs/context/features/patrol-home.md` | entry |
| CTX-03 | `docs/context/features/ai-vision.md` | detect |
| CTX-04 | `docs/context/features/patrol-offline.md` | queue reuse |
| DEM-01 | `specs/cam-patrol/ui/prototype/ios/index.html` `#sc-cam-patrol` | iOS proto |
| DEM-02 | `specs/cam-patrol/ui/prototype/android/index.html` `#sc-cam-patrol` | Android proto |
| DES | `specs/cam-patrol/ui/` · prior design confirmed | keep · **cấm** full redesign |
| MAP | `docs/html-to-native-map.md` | kit |
| DI-01 | — | **no Excel** |
| DA-01 | `specs/_data-analy/cam-patrol-control-hint.md` | § Delta FRAME |
| DA-02 | `specs/_data-analy/cam-patrol-bff-endpoints.md` | BFF |
| DA-03 | `specs/_data-analy/cam-patrol-action-tree.md` | action-tree |
| DA-04 | `specs/_data-analy/cam-patrol-real-data.md` | §A–§F |
| IOS | `…/Linm.RMMS.Mobile.iOS` · `CamPatrolViewModel.runDetect` | Current nil base64 |
| AND | `…/Linm.RMMS.Mobile.Android` · `CamPatrolViewModel.runDetect` | Current omit |
| BFF | `…/Linm.RMMS.Mobile.Bff` | proxy |
| BE | `…/Linm.RMMS.WebService` | AiVision · Incident · Patrol |

**Cấm** re-scan demo — inventory từ DA-* (hash skip).

## 5. controlHint (PO chốt — Design keep · Dev wire frame)

Nguồn DA-01. UNCLEAR = **none**.

| Field | VN | controlHint | Required | Kit | Notes |
|-------|----|-------------|----------|-----|-------|
| navBack | Tuần đường | BackButton | * | `LinmTopBar` leading | `go('patrol-home')` |
| title | Thu thập bằng camera | TopBar title | * | `LinmTopBar` | fixed |
| finder | (viewfinder) | CameraFinder | * | native camera | `DES-MOB-CAM-FINDER` · **frame capture** |
| stampRoute | QL.1 · Km 1556+040 | OverlayStamp | * | on finder | live session |
| stampGps | {lat}, {lng} · ±{a} m · đã chốt | OverlayStamp | * | on finder | device GPS |
| rowDetect | Phát hiện / {DefectClass} | ListRow | * | `LinmListRow` | **chỉ** sau detect ok + real frame |
| rowScore | Độ tin cậy / 91% | ListRow | | `LinmListRow` | demo · **ship ẩn** |
| rowAction | Hành động / Tạo vấn đề sau xác nhận | ListRow | * | `LinmListRow` | copy cố định |
| btnConfirm | Xác nhận · tạo vấn đề | PrimaryButton | * | `LinmPrimaryButton` | cần detection thật |
| btnSkip | Bỏ qua | SecondaryButton | * | `LinmSecondaryButton` | local dismiss |
| toastOk | Đã tạo vấn đề SC-* · định vị đã chốt | Toast | * | `LinmToast` | Create `Code` |
| toastSkip | Đã bỏ · nhận nhầm | Toast | * | `LinmToast` | sau skip |
| toastDetectFail | (copy `cam.toast.detectFail`) | Toast | * | `LinmToast` | capture/HTTP fail · **cấm** fake class |
| gpsDeny | (reuse) | Modal | * | `DES-MOB-GPS-DENY` | chặn confirm |

## 6. BFF (PO chốt — **cấm** invent)

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Khớp DA-02 + real-data §B.

| Action / zone | Method | Path | In slug? |
|---------------|--------|------|----------|
| Prefill ca active | GET | `patrol/sessions` | yes |
| Detect + **ImageBase64** | POST | `ai-vision/detect` | yes · body non-null frame |
| Confirm create | POST | `incident/incidents` | yes · `DetectionId` |
| Frame capture | — | device camera | local → base64 |
| GPS / Skip | — | device / local | không API |
| Offline queue | — | local → `patrol-offline` | reuse |

**Cấm** invent `cam-patrol` path · Step 4b **SKIP**.

### Detect body (NEW bind)

| Field | Source | Rule |
|-------|--------|------|
| `ImageBase64` | finder JPEG/PNG | **required** non-empty khi camera granted |
| `Lat` · `Lng` · `AccuracyM` | GPS stamp | giữ |
| Fail empty/null frame | — | **không** POST · toast detectFail |

### Create body map (P1) — unchanged

DefectClass → Title/Type · RouteLabel → RouteName · Km → KmStart · Detection Id → DetectionId · GPS → HasGps · Description from action.

## 7. Open questions — PO chốt (autoApprove=ON)

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-MOB-CAM-FRAME-01 | null base64 → heuristic | **Must:** dual capture frame → non-null `imageBase64` trước detect |
| GAP-MOB-CAM-FRAME-02 | fail hiện class giả? | **Must:** toast detectFail · card nil · **cấm** fake class |
| GAP-MOB-CAM-FRAME-03 | parity siblings | **Must:** cùng body pattern incident-create / field-reflect / vis-capture |
| GAP-MOB-CAM-PACK-01 | sheet vs screen | **CLOSED** · screen |
| GAP-MOB-CAM-SCORE-01 | 91% ship? | **Ship ẩn** |
| GAP-MOB-CAM-DETECT-01 | expand Detect DTO? | **SKIP** Step 4b — `ImageBase64` live |
| Design redesign? | edit_page | **Keep** zones/copy · **cấm** full redesign |
| UNCLEAR | — | **none** |

## 8. Screens (REQUIRED)

| Surface | Demo | Pattern | FormMode | Actions this feature | `devSlash` |
|---------|------|---------|----------|----------------------|------------|
| Thu thập bằng camera | `#sc-cam-patrol` · `DES-MOB-CAM-FINDER` | **Screen** | none | GET sessions · GPS · **capture frame** · POST detect · POST incident · Skip · toast | `/agent-dev-ios` + `/agent-dev-android` |

Reuse: `patrol-home` · `patrol-offline` · `DES-MOB-GPS-DENY` · `inc-form` entry.

## 9. Device AC (REQUIRED)

| ID | Behavior | AC |
|----|----------|-----|
| AC-D-01 | Offline | Queue / toast nháp · **cấm** fake SC |
| AC-D-02 | GPS deny | Modal deny · **không** Confirm · **cấm** fake lat/lng |
| AC-D-03 | Leave dirty | N/A · Skip clears · back OK |
| AC-D-04 | Native alert | **Cấm** · chỉ Toast / in-app modal |
| AC-D-05 | Keyboard | N/A |
| AC-D-06 | Safe area | TopBar + finder + card + CTA + tab |
| AC-D-07 | Biometric | N/A |
| AC-D-08 | Signal | **Cấm** «Có mạng» |
| AC-D-09 | Token | Bearer Keychain / Encrypted · `{BffPrefix}` only |
| AC-D-10 | Tab | Tab Tuần đường active · **cấm** segment riêng |
| AC-D-11 | Camera deny | toast · **không** detect · **cấm** fake detection |
| AC-D-12 | Push | N/A |
| AC-F-01 | Appear | GET sessions · GPS · finder |
| AC-F-02 | Detect | Capture frame → POST detect + **ImageBase64** · bind card · fail → detectFail toast · **cấm** null-image POST khi granted |
| AC-F-03 | Confirm | POST incident · toast SC-* · chặn nếu GPS deny / no detection |
| AC-F-04 | Skip | Clear · toast bỏ |
| AC-F-05 | Dual parity | iOS+Android cùng zones/copy (trừ back chrome) |
| AC-F-06 | Score | **Không** hiện % ship |
| AC-F-07 | Entry | Hub / inc-form → push owner |
| AC-F-08 | Frame fail | empty/capture fail → **không** POST · toast detectFail · card nil · **cấm** class giả |

Typography: label **13** · value **≥16**.

## 10. Leave / alert (REQUIRED)

| Case | UI |
|------|-----|
| Dirty leave | Back hub OK |
| GPS deny | `DES-MOB-GPS-DENY` · **cấm** native alert |
| Capture / Detect fail | `LinmToast` detectFail · card nil |
| Offline POST | Queue + toast nháp |
| Skip | Toast **Đã bỏ · nhận nhầm** |
| Success Confirm | Toast **Đã tạo vấn đề SC-* · định vị đã chốt** |

## 11. Out of scope (this pack)

- Full redesign zones/copy · sibling screens · invent path · score chrome · auto-POST trước Confirm · Step 4b · watermark/mfeStdUrl/ERP.* · re-scan demo · enqueue sibling

## 12. KPI

Camera tuần = thu thập hiện trường theo tọa độ + **khung hình thật** → tạo vấn đề sau xác nhận. DoD delta = dual capture frame + fail toast sạch.

## 13. Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `cam-patrol` / **`screen`** |
| changeScope | `edit_page` · § Delta FRAME |
| phase_from / phase_to | po **confirmed** → design pending |
| STATUS | `specs/cam-patrol/STATUS.md` |
| Design work | **Keep** prototype zones · **cấm** full redesign · optional note frame DoD trên mock |
| controlHint / UNCLEAR | §5 · none |
| Screens / `devSlash` | Screen `#sc-cam-patrol` · `/agent-dev-ios` + `/agent-dev-android` |
| peerStdUrl | **cấm** mfeStdUrl · dual `file://…/prototype/{ios,android}/index.html#sc-cam-patrol` |
| Dev hint | dual capture finder → `DetectAiVisionBody.imageBase64` · fail toast · **cấm** fake class |
| Next slash | `/agent-design-mobile` |
| Chain this turn | **không** (roleOnly=po) |
| e2eQa | queued QA · **cấm** e2e ở PO |
| SA note | Step 4b **SKIP** · ImageBase64 live |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T11:22:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-po-requirement-20260912-frame |
| priorControlHintHash | sha256:cam-patrol-control-hint-20260912-frame |
| priorRealDataHash | sha256:cam-patrol-real-data-20260912-frame |
| priorTaskId | `task_9ab16ef2` |
| thisTaskId | `task_71013e61` |

---
<!-- Version meta: skillId=agent-po-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
