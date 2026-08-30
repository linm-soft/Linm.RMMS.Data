# TL — Tasks — cam-patrol (Thu thập bằng camera)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập bằng camera |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-CAM-PACK-01 **closed**) |
| stack | `native_dual` |
| thisAction | **Thu thập bằng camera** `DES-MOB-CAM-PATROL` (+ finder `DES-MOB-CAM-FINDER`) only · **cấm** gộp `field-reflect` / `cam-view` / `vis-capture` / `camera-connect` / `ai-asset-detect` (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · entry hub `#sc-patrol-home` `#i-video` + `#sc-inc-form` secondary · deep link n/a P1 · pack `tabs: none` · shell Tab 5 **giữ** · tab **`field`** active |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `CamPatrolController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol + AiVision + Incident · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_4e92ee1d` · solution_confirm=approve · GAP-MOB-CAM-DETECT-01 |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_0f0d1974` |
| prior · po | **confirmed** · `po/requirement.md` · `task_078f6674` |
| prior · data_analy | **confirmed** · `_data-analy/cam-patrol-*.md` · contentHash `sha256:cam-patrol-control-hint-20260828` · realDataHash `sha256:cam-patrol-real-data-20260828` · bffContentHash `sha256:cam-patrol-mobile-bff-20260828` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_8f763f78` |
| updatedAt | `2026-08-28T21:19:30.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/cam-patrol` / `CamPatrolController` · fake lat/lng · fake HTTP 200 / fake SC khi POST fail · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · score % ship (`GAP-MOB-CAM-SCORE-01`) · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue Confirm/Skip/detect/finder (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e ở role TL · implement native code ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — screen owner `cam-patrol` · entry reuse hub + inc-form · không tab mới · không deep link P1 |
| `kit_skip` / Finder | TopBar / ListRow / Primary / Secondary / Toast / GPS deny **đã map** · Finder = **app native surface** (`kit_missing_confirm` **approve** · **không** invent `LinmCameraFinder` P1) · **cấm** `T-KIT-*` |
| `T-BE-*` | **yes** — `T-BE-CAM-DETECT-API` (GAP-MOB-CAM-DETECT-01) · `T-BE-CAM-DETECT-MIG` **conditional** · **không** chạy Step 4b / migration ở turn TL |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ 3 path |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **`field`** (Tuần đường) → `#sc-patrol-home` → quick **Thu thập bằng camera** `#i-video` → **push** `#sc-cam-patrol` `DES-MOB-CAM-PATROL` (thay toast stub). Secondary từ `#sc-inc-form` → **cùng** route (`shared_action` · **không** enqueue). Back → `go('patrol-home')` (iOS label **Tuần đường** · Android icon-only OK). Detect / Confirm / Skip / finder = **cùng slug**. Pack `tabs: none` · shell Tab 5 **giữ**. |
| route_b / route_c | — không dùng |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `kit_skip=yes` · `2026-08-28T21:19:30.000Z`.

---

## Live gap (TL audit 2026-08-28)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-cam-patrol` | **DELTA** — hub quick `cam-patrol` → toast stub · **chưa** feature screen | **T-IOS-CAM-PAT** |
| Android `#sc-cam-patrol` | **DELTA** — cùng toast/stub entry | **T-AND-CAM-PAT** |
| `GET patrol/sessions` | BE + Mobile.Bff proxy live | **reuse** · stamp Route/Km |
| `POST ai-vision/detect` | live stub `Engine?`·`Note?` | **wire P1** · card bind · **GAP-MOB-CAM-DETECT-01** → T-BE |
| `POST incident/incidents` | live Create | **reuse** · Confirm bind `DetectionId` + GPS |
| `DetectAiVisionRequest` | chỉ `Engine` · `Note` | **T-BE-CAM-DETECT-API** expand ảnh/GPS/video |
| Entity `AiVisionDetection` | có `Lat`·`Lng`·`ImageUrl` · **không** `AccuracyM` / `VideoRef` | **T-BE-CAM-DETECT-MIG** conditional |
| Finder / camera privacy | Info.plist **thiếu** `NSCameraUsageDescription` · Android **thiếu** `CAMERA` | Dev declare (`GAP-SA-STORE-01`) |
| Offline queue | `OfflineQueueKind.incident` live | Confirm fail → enqueue · sibling `patrol-offline` |
| Score row | demo 91% | **ship ẩn** (`GAP-MOB-CAM-SCORE-01`) |
| Kit TopBar/ListRow/Buttons/Toast | dual map | **reuse** · Finder app surface · **cấm** `T-KIT-*` |
| Sibling field-reflect / cam-view / … | out of pack | **cấm** ship / start |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-CAM-PAT` | iOS | SA confirmed · kit_skip · Design dual · route_a | `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` | Ship `DES-MOB-CAM-PATROL` + `DES-MOB-CAM-FINDER` · AVCapture · GPS · detect/confirm/skip/offline · privacy camera · wire hub + inc-form |
| `T-AND-CAM-PAT` | Android | SA confirmed · kit_skip · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` | Compose parity dual · CameraX · `CAMERA` permission · same BFF/GPS/offline |
| `T-BE-CAM-DETECT-API` | BE | SA GAP-MOB-CAM-DETECT-01 | `/new-endpoint` (expand request · **không** invent path) · **cấm** TL chạy | Expand `DetectAiVisionRequest` + Detect service bind ảnh/GPS trên **đúng** `POST api/v1/ai-vision/detect` |
| `T-BE-CAM-DETECT-MIG` | BE | audit schema | `/database-migration` (chỉ nếu cần cột mới) · **cấm** TL chạy | Conditional · entity đã có Lat/Lng/ImageUrl · AccuracyM/VideoRef nếu Signed cần cột · **cấm** invent `rmms_cam_patrol` |
| `T-BFF-*` | — | — | — | **N/A** · proxy catch-all |
| `T-KIT-*` | — | — | — | **N/A** · kit reuse + Finder app surface |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab field active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| `T-QA-CAM-PAT` | QA | T-IOS · T-AND | `/agent-qa-mobile` | Maestro slug `cam-patrol` · `yarn e2e-qa-mobile` · store PNG `qa/store/cam-patrol` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-CAM-PAT`) → `/agent-dev-android` (`T-AND-CAM-PAT`) · T-BE có thể song song (khác lock scope=be) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling.

---

## Source map (cite live paths)

### T-IOS-CAM-PAT

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/CamPatrol/*` — screen + finder overlay + detect card + GPS deny · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/PatrolHome/PatrolHomeViewModel.swift` — quick id `cam-patrol` **thay toast** → push owner · `#sc-inc-form` secondary cùng route |
| Router | `App/AppRouter.swift` · field tab dưới screen |
| Use cases | reuse `FetchPatrolSessionsUseCase` · `GetCurrentLocationUseCase` · **new** `DetectAiVisionUseCase` · **new** `CreateIncidentUseCase` · camera session use case |
| Location | `CoreLocationReader` · `LocationReading` · stamp «đã chốt» · deny → `DES-MOB-GPS-DENY` |
| Camera | AVCaptureSession + FOV overlay `DES-MOB-CAM-FINDER` · **cấm** static fake khi granted |
| Repo / offline | `PatrolRepository*` · expand `AiVisionRepository.detect` (hiện chỉ `asset-candidates`) · **new** `IncidentRepository` · `OfflineQueueStore` · `OfflineQueueKind.incident` |
| Deny | reuse `Presentation/Shared/GpsDenyModal.swift` · **cấm** `UIAlertController` |
| Copy | VN SSOT Design · **ship ẩn Score** · toast Confirm/Skip |
| Store privacy | Info.plist `NSCameraUsageDescription` + PrivacyInfo camera · location **đã có** |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` · `DES-MOB-GPS-DENY` · `#sc-cam-patrol` |
| kit | `LinmTopBar` · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell · typography `LinmTokens` label **13** · value/button **≥16** (`GAP-TYP-01`) · cite `ui/html-to-native-map.md` |
| BFF | `GET patrol/sessions` · `POST ai-vision/detect` · `POST incident/incidents` · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent `cam-patrol` path · **cấm** fake 200/SC |

### T-AND-CAM-PAT

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/campatrol/*` — screen + CameraX + card + GPS deny |
| Entry wire | `presentation/feature/patrolhome/PatrolHomeViewModel.kt` · quick `cam-patrol` thay toast · inc-form secondary |
| Use cases | same dual · Detect + CreateIncident + location + camera |
| Location | `AndroidLocationReader` |
| Camera | CameraX `PreviewView` + FOV · permission `CAMERA` + Play Data safety |
| Repo / offline | same paths · `OfflineQueueKind.Incident` |
| Deny | reuse `presentation/feature/shared/GpsDenyDialog.kt` · **cấm** system raw AlertDialog product |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK |
| DI | Hilt |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | same 3 paths · offline parity |

### T-BE-CAM-DETECT-API

| | |
|--|--|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| Controller | `AiVisionOpsController.Detect` — **giữ** path `POST api/v1/ai-vision/detect` |
| Request expand | `DetectAiVisionRequest`: giữ `Engine?`·`Note?` + thêm `ImageBase64?` / media ref · `Lat?`·`Lng?`·`AccuracyM?` · optional `VideoRef?` |
| Service | `DetectStubAsync` / Detect bind frame + GPS vào `AiVisionDetectionDto` / entity · **cấm** invent `POST ai-vision/cam-patrol-detect` |
| BFF | **không** clone controller — catch-all proxy đủ |
| Skills (Dev turn) | `/new-endpoint` · api-endpoint · company-field · no-parent-json-field · `/implement-shared-table` (`share_na`) |
| TL turn | **pack only** · **cấm** Step 4b / implement |
| P1 app | vẫn gọi stub với `Engine`/`Note` nếu body expand chưa ship — **không** block native P1 card |

### T-BE-CAM-DETECT-MIG

| | |
|--|--|
| Status | **conditional** — entity `rmms_ai_vision_detections` **đã có** `Lat`·`Lng`·`ImageUrl` · audit: chỉ MIG nếu Signed cần `AccuracyM` / `VideoRef` (hoặc cột media) · **cấm** invent bảng `rmms_cam_patrol_*` |
| Skill (Dev turn) | `/database-migration` · **cấm** parent JSON |
| TL turn | **pack only** · **cấm** chạy migration |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Thu thập bằng camera** full (`DES-MOB-CAM-PATROL`): nav back → `patrol-home` · title fixed · finder · stamps · detect card · Confirm / Skip · toast · **cấm** bottom-sheet chrome.
2. Finder live continuous (`DES-MOB-CAM-FINDER`) + FOV · **cấm** fake placeholder khi camera granted · deny camera → toast/block detect.
3. Stamp tuyến/Km: live `GET patrol/sessions` filter `Status=Đang tuần` · fail/empty → demo SSOT **QL.1 · Km 1556+040** · GPS **vẫn** chạy.
4. Stamp GPS device only: `{lat}, {lng} · ±{a} m · đã chốt` · **cấm** fake lat/lng · deny → `DES-MOB-GPS-DENY` · **chặn** Confirm.
5. Detect: `POST ai-vision/detect` · card bind `DefectClass` (+ surface) · row Hành động cố định · **ship ẩn Score %** (`GAP-MOB-CAM-SCORE-01`) · detect fail → toast lỗi · **cấm** fake card.
6. Confirm: HasGps → `POST incident/incidents` bind `DetectionId` + stamp · toast **Đã tạo vấn đề {Code} · định vị đã chốt** · fail/offline → `OfflineQueueKind.incident` + toast nháp · **cấm** invent SC · **cấm** fake 200.
7. Skip: clear detection card local · toast **Đã bỏ · nhận nhầm** · finder tiếp · **không** API.
8. Entry: hub `#i-video` push (thay toast) · `#sc-inc-form` secondary cùng route · **cấm** reimplement hub/form.
9. Kit reuse map · Finder app surface · **cấm** system alert · **cấm** watermark Gói / device label.
10. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
11. Tab 5 shell giữ · pack `tabs: none` · tab field active (`T-QA-TAB-01`).
12. Store: declare camera privacy iOS + Android trước ship (`GAP-SA-STORE-01`) · **cấm** localhost/LAN in solution · **cấm** iPad listing claim.
13. **Cấm** ship sibling surfaces trên pack này.

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack / title | `LinmTopBar` | iOS back **Tuần đường** · Android icon-only |
| finder + FOV | app AVCapture / CameraX | `DES-MOB-CAM-FINDER` · **không** kit package mới |
| stampRoute / stampGps | Text 13 overlay | sessions + device GPS |
| rowDetect / rowAction | `LinmListRow` | label 13 · value ≥16 |
| rowScore | — | **không map ship** |
| btnConfirm | `LinmPrimaryButton` | disable khi !HasGps / deny |
| btnSkip | `LinmSecondaryButton` | local clear |
| toastOk / toastSkip | `LinmToast` | 13–16 · **cấm** alert |
| gpsDeny* | modal reuse | `DES-MOB-GPS-DENY` |
| typography | `LinmTokens` | `GAP-TYP-01` |

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew :app:assembleDebug` | debug APK |
| BFF | `dotnet build` `RMMS.Mobile.Bff.csproj` | PASS |
| BE (T-BE) | `dotnet build` WebService khi API/MIG | PASS |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` ở TL · mark Dev done khi build fail.

### API contract (from SA — cite only)

| Action | App path | Notes |
|--------|----------|-------|
| Prefill | `GET patrol/sessions?page=1&pageSize=50` | client filter Đang tuần |
| Detect | `POST ai-vision/detect` | P1 stub `Engine`/`Note` · T-BE expand body |
| Confirm | `POST incident/incidents` | `DetectionId` · `HasGps` · Route/Km/Title |
| Skip / GPS / camera | — | device / local |

**Cấm** invent `api/v1/cam-patrol`.

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| Ghi nhận hư hỏng tay | sibling `field-reflect` |
| cam-view / vis-capture / camera-connect / ai-asset-detect | siblings · **cấm** gộp |
| Offline sync UI | sibling `patrol-offline` (reuse queue only) |
| Invent `CamPatrolController` / `api/v1/cam-patrol` | **cấm** |
| New kit chrome package | **cấm** `T-KIT-*` (Finder = app surface) |
| Score % ship chrome | **cấm** (`GAP-MOB-CAM-SCORE-01`) |
| Step 4b / migration / e2e | **không** ở TL · T-BE/Dev/QA khi tới lượt |
| Watermark Gói / device label / proto-click | **cấm** |

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-CAM-PAT`) rồi `/agent-dev-android` (`T-AND-CAM-PAT`) · T-BE `T-BE-CAM-DETECT-API` (+ MIG nếu cần) khi tới lượt |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/{ios,android}/index.html` · ship `?ship=1` · deny `?deny=1` |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `cam-patrol` · store PNG `qa/store/cam-patrol` · **chỉ** `/agent-qa*` |
| Step 4b | **Pending T-BE** — pack `T-BE-CAM-DETECT-API` / `T-BE-CAM-DETECT-MIG` · **cấm** TL chạy |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/cam-patrol.md | **PASS** · T-IOS-CAM-PAT · T-AND-CAM-PAT · T-BE-CAM-DETECT-API · T-BE-CAM-DETECT-MIG conditional · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read abs · hashes khớp · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có · autoApprove route_a |
| Kit | **PASS** · reuse map · Finder app surface · T-KIT **n/a** |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-28T21:19:30.000Z` |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-control-hint-20260828 |
| realDataHash | sha256:cam-patrol-real-data-20260828 |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
