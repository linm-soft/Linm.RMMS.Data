# TL — Tasks — cam-patrol (Thu thập bằng camera · capture frame)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập bằng camera · capture frame |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `edit_page` · gap=`cam_patrol_capture_frame` · **GAP-MOB-CAM-FRAME-01/02/03** |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-CAM-PACK-01 **closed**) |
| stack | `native_dual` |
| thisAction | **Thu thập bằng camera** `DES-MOB-CAM-PATROL` (+ finder `DES-MOB-CAM-FINDER`) only · **cấm** gộp sibling (`GAP-MOB-ACT-01/02`) |
| deltaThisEdit | **GAP-MOB-CAM-FRAME-01** — finder JPEG → non-null `imageBase64` trên POST detect · **GAP-MOB-CAM-FRAME-02** — fail/empty → toast detectFail · card nil · **cấm** fake class · **GAP-MOB-CAM-FRAME-03** — parity `DetectAiVisionBody` dual · prior screen ship **giữ** |
| route_confirm | **route_a** (autoApprove=ON · **giữ**) · entry hub `#sc-patrol-home` `#i-video` + `#sc-inc-form` secondary · pack `tabs: none` · shell Tab 5 **giữ** · tab **`field`** · **không** URL mới |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all · **paths unchanged** · **cấm** `CamPatrolController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol + AiVision + Incident · **cấm ERP.*** · DTO `ImageBase64` **live** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` · `task_0afc45c5` · solution_confirm=approve · Step 4b **SKIP** |
| prior · design | **confirmed** · `ui/design.md` · dual proto · `handoff/design-compact.md` · `task_0ab8d0f5` · design_confirm=approve |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_71013e61` |
| prior · data_analy | **confirmed** · `_data-analy/cam-patrol-*.md` · `handoff/data_analy-compact.md` · `task_9ab16ef2` · bffHash `sha256:cam-patrol-mobile-bff-20260912-frame` |
| priorTlTaskId | `task_8f763f78` **giữ** (full screen ship · T-IOS/AND-CAM-PAT) |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** e2e / `yarn start:std` / `mfeStdUrl` / yarn build ở role TL |
| taskId | `task_9068a243` |
| updatedAt | `2026-09-12T11:27:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02/07`) · invent `api/v1/cam-patrol` · fake lat/lng · fake 200 / fake class UI · ERP.* · system alert · watermark Gói · device label · score % ship · `mfeStdUrl` · gộp iOS+Android 1 task id · POST detect với `imageBase64=null` / omit · Step 4b / migration / e2e / implement native ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a giữ** — screen owner `cam-patrol` · entry hub `#i-video` · không tab mới · không deep link P1 · **không** URL mới |
| `kit_skip` | **yes** — TopBar / ListRow / Primary / Secondary / Toast / GPS deny / Finder app surface **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a this edit** — DTO `ImageBase64` live · Step 4b **SKIP** · **cấm** TL chạy |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ 3 path |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `kit_skip=yes` · `T-BE=n/a` · `2026-09-12T11:27:00.000Z`.

---

## Live gap (TL audit 2026-09-12 · edit_page)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `CamPatrolViewModel.runDetect` | **DELTA** — `imageBase64: nil` → BE heuristic | **T-IOS-CAM-FRAME** |
| Android `CamPatrolViewModel.runDetect` | **DELTA** — omit `imageBase64` | **T-AND-CAM-FRAME** |
| fail / empty frame | Design proto `?fail=1` · native **chưa** toast sạch + card nil | wire dual · **GAP-MOB-CAM-FRAME-02** |
| `POST ai-vision/detect` body | DTO `ImageBase64` live · siblings đã gửi base64 | **parity** · **GAP-MOB-CAM-FRAME-03** · **cấm** invent path |
| sessions / GPS / Confirm / Skip / finder UI | prior ship | **keep** · prior `T-IOS-CAM-PAT` / `T-AND-CAM-PAT` **giữ** |
| `T-BE-*` / Step 4b | DTO live · GAP-MOB-CAM-DETECT-01 **CLOSED client** | **n/a** |
| Kit / route | dual map · route_a | **reuse** · **cấm** `T-KIT-*` |

---

## Tasks (1 action = 1 feature · this edit)

| id | platform | deps | skills / `devSlash` | summary |
|----|----------|------|---------------------|---------|
| `T-IOS-CAM-FRAME` | iOS | SA `task_0afc45c5` · Design dual · route_a **giữ** | `/agent-dev-ios` · `/dev-ios-swiftui` | **GAP-MOB-CAM-FRAME-01/02/03** · capture finder JPEG → non-null `DetectAiVisionBody.imageBase64` · fail toast · card nil |
| `T-AND-CAM-FRAME` | Android | SA · Design · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` | parity dual capture frame + fail toast |
| `T-IOS-CAM-PAT` | iOS | — | — | prior **shipped** · **giữ** · **không** reopen full screen |
| `T-AND-CAM-PAT` | Android | — | — | prior **shipped** · **giữ** |
| `T-BE-*` / `T-BFF-*` / `T-KIT-*` | — | — | — | **N/A this edit** · Step 4b **SKIP** |
| `T-QA-TAB-01` | QA cite | Dev FRAME dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · **cấm** invent (`GAP-TAB-01`) |
| `T-QA-CAM-FRAME` | QA | T-IOS · T-AND FRAME | `/agent-qa-mobile` | frame+base64 · fail toast sạch · Maestro slug `cam-patrol` · **chỉ** `/agent-qa*` · **cấm** e2e ở TL |
| `T-QA-CAM-PAT` | QA | — | — | prior **giữ** · re-run after FRAME |

**Serial Dev this edit:** `/agent-dev-ios` (`T-IOS-CAM-FRAME`) → `/agent-dev-android` (`T-AND-CAM-FRAME`) · **cấm** gộp dual 1 task · **cấm** TL build/e2e/Step 4b.

---

## Delta this edit (`task_9068a243` · GAP-MOB-CAM-FRAME-01/02/03)

| Concern | Decision |
|---------|----------|
| Scope | Client capture frame only · **cấm** API/BFF/DTO invent · Step 4b **SKIP** |
| Current | iOS `imageBase64: nil` · Android omit → BE heuristic |
| New DoD | Capture finder JPEG → non-null `imageBase64` trên POST detect · fail/empty → toast detectFail · detection=nil · **cấm** fake class UI |
| Keep | finder continuous · stamps · Confirm / Skip · GPS deny · sessions · score ẩn · route_a |
| BFF / API | `GET patrol/sessions` · `POST ai-vision/detect` · `POST incident/incidents` · **giữ** path · body Engine·Note·**ImageBase64**·Lat/Lng/AccuracyM |
| route_confirm | **route_a giữ** · không URL mới |
| T-BE | **n/a** · DTO live · GAP-MOB-CAM-DETECT-01 CLOSED client |

### Client outcome matrix (HARD)

| Outcome | UI / API |
|---------|----------|
| Camera granted + capture OK | JPEG → base64 · POST detect **có** `imageBase64` non-null · card bind live `DefectClass` |
| Capture fail / empty / deny camera | toast detectFail · detection card **nil** · **cấm** fake class · **không** POST với null/omit nếu policy = block (SA: fail → toast sạch) |
| Detect HTTP fail | toast lỗi · card nil · **cấm** fake 200 / fake class |
| Confirm / Skip / GPS | prior keep · HasGps gate · offline queue incident |

### Shared AC this edit (cite PO AC-F-* + SA + Design)

1. **AC-F-02** — Detect gửi non-null `imageBase64` từ finder frame (dual).
2. **AC-F-08** — fail/empty frame → toast detectFail · card nil · **cấm** fake class.
3. **AC-F-06** — score % **ẩn** (keep).
4. Parity body dual với siblings đã gửi base64 (**GAP-MOB-CAM-FRAME-03**).
5. **Cấm** redesign UI · **cấm** invent path · **cấm** Step 4b ở Dev client turn này.

---

## Source map (cite live paths)

### T-IOS-CAM-FRAME

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| ViewModel | `Presentation/Features/CamPatrol/CamPatrolViewModel.swift` — `runDetect` · replace `imageBase64: nil` |
| Capture | AVCapture finder snapshot JPEG → base64 · **cấm** static fake khi granted |
| API body | `DetectAiVisionBody` / use case · set `imageBase64` non-null · Lat/Lng/AccuracyM keep |
| Fail | toast detectFail · `detection = nil` · **cấm** fake class |
| Keep | screen / finder / GPS / Confirm / Skip / sessions · prior ship |
| ssot.zones | `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` · `DES-MOB-GPS-DENY` · `#sc-cam-patrol` |
| BFF | same 3 paths · **cấm** invent |
| Build (Dev) | `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · **cấm** TL chạy |

### T-AND-CAM-FRAME

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| ViewModel | `presentation/feature/campatrol/CamPatrolViewModel.kt` — `runDetect` · stop omit `imageBase64` |
| Capture | CameraX frame JPEG → base64 · permission CAMERA keep |
| API body | same Detect body parity |
| Fail | toast detectFail · card nil · **cấm** fake class |
| Keep | Compose screen / GPS / Confirm / Skip |
| ssot.zones | same DES dual |
| Build (Dev) | `./gradlew :app:assembleDebug` · **cấm** TL chạy |

---

## DoD per task (this edit)

### T-IOS-CAM-FRAME / T-AND-CAM-FRAME

1. Before each Detect: capture current finder frame → non-null base64 on body.
2. Fail/empty capture → toast detectFail · clear detection card · **không** fake class.
3. Detect success → card bind live DTO only · score ẩn.
4. Confirm / Skip / GPS / sessions / route_a **không** regress.
5. Dual parity copy + body fields (`GAP-MOB-ALIGN-01` · FRAME-03).
6. Ghi `implement/ios.md` / `implement/android.md` · build PASS trước Dev done.
7. **Cấm** sibling ship · **cấm** invent API · **cấm** Step 4b.

### Build gate (Dev — HARD · **cấm** TL chạy)

| Platform | Command |
|----------|---------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` |
| Android | `./gradlew :app:assembleDebug` |
| BFF / BE | **n/a this edit** |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` ở TL.

### API contract (from SA — cite only · unchanged paths)

| Action | App path | Notes |
|--------|----------|-------|
| Prefill | `GET patrol/sessions?page=1&pageSize=50` | keep |
| Detect | `POST ai-vision/detect` | Engine · Note · **ImageBase64** · Lat/Lng/AccuracyM |
| Confirm | `POST incident/incidents` | DetectionId · HasGps · keep |
| Skip / GPS / camera | — | device / local |

**Cấm** invent `api/v1/cam-patrol`.

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| Full redesign / new zones | **cấm** |
| Sibling field-reflect / cam-view / vis-capture | **cấm** gộp |
| T-BE expand / Step 4b / migration | **n/a this edit** · DTO live |
| Invent CamPatrolController | **cấm** |
| Score % / watermark / device label | **cấm** |
| e2e / yarn build ở TL | **cấm** · queued QA |

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-CAM-FRAME`) rồi `/agent-dev-android` (`T-AND-CAM-FRAME`) |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/cam-patrol/ui/prototype/{ios,android}/index.html` · `?fail=1` · `?ship=1` · `?deny=1` |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `cam-patrol` · store PNG `qa/store/cam-patrol` · **chỉ** `/agent-qa*` |
| Step 4b | **SKIP** · DTO live |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/cam-patrol.md | **PASS** · T-IOS-CAM-FRAME · T-AND-CAM-FRAME · T-BE n/a · route_a giữ |
| Prior SA + Design + PO + data-analy | **PASS** · compact abs · **cấm** invent API |
| ios_repo + android_repo + route_confirm | **PASS** · reuse · autoApprove route_a giữ |
| Kit | **PASS** · reuse · T-KIT **n/a** |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-09-12T11:27:00.000Z` |
| versionGate | rechecked |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260912-frame |
| contentHash | sha256:cam-patrol-control-hint-20260912-frame |
| realDataHash | sha256:cam-patrol-real-data-20260912-frame |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.09.05.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
