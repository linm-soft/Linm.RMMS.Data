# SA — Solution — cam-patrol (Thu thập bằng camera)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập bằng camera |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_0afc45c5`) |
| changeScope | `edit_page` |
| packKind | **`screen`** (GAP-MOB-CAM-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-CAM-PATROL` + `DES-MOB-CAM-FINDER` · **cấm** sheet / Kind A–G web / invent tab |
| thisAction | **Thu thập bằng camera** · entry `patrol-home` + `#sc-inc-form` · **cấm** gộp sibling |
| domain | Patrol sessions · AiVision detect · Incident create · device GPS/camera · **cấm** invent `api/v1/cam-patrol` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `task_0ab8d0f5` · `handoff/design-compact.md` · dual proto + `?fail=1` |
| prior · po | **confirmed** · `task_71013e61` · `handoff/po-compact.md` |
| prior · data_analy | **confirmed** · `task_9ab16ef2` · `handoff/data_analy-compact.md` · bff `sha256:cam-patrol-mobile-bff-20260912-frame` |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** e2e / `yarn start:std` / `mfeStdUrl` ở SA |
| versionGate | `rechecked` |
| taskId | `task_0afc45c5` |
| confirmedBy | agent autoApprove · `task_0afc45c5` |
| updatedAt | `2026-09-12T11:25:15.000Z` |

**Cấm:** invent path · ERP.* · `mfeStdUrl` · fake class UI · fake lat/lng · fake HTTP 200/SC · score % ship · Write MFE/native ở SA · Step 4b / migration / e2e turn này.

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play.

---

## § Delta (edit_page) — FRAME

| ID | Current | New (SA chốt) |
|----|---------|---------------|
| GAP-MOB-CAM-FRAME-01 | iOS/Android `runDetect` gửi `imageBase64=null`/omit → BE Signed heuristic | Capture finder JPEG → **non-null** `ImageBase64` trên `POST ai-vision/detect` · path/BFF **không** đổi |
| GAP-MOB-CAM-FRAME-02 | null body vẫn có thể ra class stub | fail/empty frame → toast `detectFail` · detection=nil · **cấm** fake class UI (`?fail=1` Design) |
| GAP-MOB-CAM-FRAME-03 | siblings field-reflect / vis-capture đã gửi base64 | Parity `DetectAiVisionBody` / `DetectAiVisionRequest.ImageBase64` dual |
| GAP-MOB-CAM-DETECT-01 | (prior) expand DTO | **Superseded client** — DTO `ImageBase64` **đã live** · Step 4b **SKIP** |
| Optional BE | Signed vẫn heuristic nếu null | Optional sau: BE reject null — **không** block client DoD · **không** chạy turn SA |

**Keep:** zones `#sc-cam-patrol` · DES · copy VN · score ẩn · BFF 3 path · offline Confirm queue · GPS gate · Step 4b **SKIP** · **cấm** full redesign / invent API.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol sessions · AiVision `Detect` · Incident `Create` |
| BFF | `MobileApiProxyController` catch-all → `ApiBase` |
| App | `{BffBase}/mobile-bff/api/v1` · **cấm** raw HTTP trong View |
| Prefill | `GET patrol/sessions` · filter «Đang tuần» · empty → live-only copy (cleanup_mock) |
| GPS | Device · stamp «đã chốt» · deny `DES-MOB-GPS-DENY` · chặn Confirm · **cấm** fake |
| Camera | Continuous finder · **capture frame** trước detect · AVCapture / CameraX |
| Detect | `POST ai-vision/detect` · body **must** `ImageBase64` + GPS fields · ẩn Score |
| Confirm | `POST incident/incidents` · `DetectionId` + stamp · toast `Code` |
| Skip | local clear · toast · **không** API |
| Offline | Confirm fail → `OfflineQueueKind.incident` → `patrol-offline` · **cấm** fake 200 |
| Persist BE | DTO live · Step 4b **SKIP** · Migration **n/a** |
| Out | field-reflect · cam-view · vis-capture · camera-connect · ai-asset-detect · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `cam-patrol` · screen |
| Paths P1 | `GET patrol/sessions` · `POST ai-vision/detect` · `POST incident/incidents` |
| Downstream | existing controllers · **không** `CamPatrolController` |
| Frame / GPS | Device — **không** API mới |
| Step 4b | **SKIP** · ImageBase64 live |
| Rationale | edit_page client capture only · BFF table DA PASS · Design frame DoD PASS |

---

## BFF / API contract (audit 2026-09-12 · DA)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Prefill | `GET patrol/sessions` | proxy | Patrol sessions | **PASS** |
| Auto detect + frame | `POST ai-vision/detect` | proxy | `AiVisionOpsController.Detect` | **PASS** · body **ImageBase64 required client** |
| Optional detections | `GET ai-vision/detections` · `…/{id}` | proxy | detections | optional |
| Confirm | `POST incident/incidents` | proxy | `IncidentsController.Create` | **PASS** |
| GPS / camera / Skip | — | — | Device / local | N/A |
| Offline | — | — | `OfflineQueueKind.incident` | **không** invent |
| Invent | `cam-patrol` | — | — | **cấm** |

### Detect request (`DetectAiVisionRequest` — live)

| Field | P1 cam-patrol |
|-------|----------------|
| `Engine?` | `"P1"` |
| `Note?` | route stamp |
| `ImageBase64?` | **DoD non-null** JPEG/PNG base64 từ finder |
| `Lat?` · `Lng?` · `AccuracyM?` | GPS chốt |
| `VideoRef?` | null P1 |

Response `AiVisionDetectionDto`: `Id` · `Code` · `DefectClass` · `Score` (ship ẩn) · `Severity` · `Lat` · `Lng` · `RouteLabel` · `SectionId` · …

### Create incident map

| UI / detect | → Create body |
|-------------|----------------|
| DefectClass | `Title` · `IncidentType` |
| RouteLabel / stamp | `RouteName` |
| Km stamp | `KmStart` |
| Detection `Id` | `DetectionId` |
| GPS chốt | `HasGps=true` |

**Cấm** app fork DTO khác BFF table.

---

## Implement gates (confirm)

| Gate | Decision | Note |
|------|----------|------|
| TZ | **tz_na** | không form date edit |
| XCO | **xco_na** | company filter BE |
| SHARE | **share_na** | reuse AiVisionDetection + Incident · **cấm** invent `cam_patrol_*` |
| Offline | **screen mở + queue** | detect fail → toast **cấm** fake card · Confirm fail → queue |
| GPS | **Live required** Confirm | deny modal · **cấm** fake |
| Camera | **Live finder + capture** | empty/fail frame → FRAME-02 |
| Push | **n/a** | — |
| Store | camera + location claim | PrivacyInfo / Play · **cấm** localhost |
| Step 4b | **SKIP** | DTO live · **không** chạy SA |

AskQuestion (autoApprove=ON): `be_repo_confirm`=`Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=approve` · `solution_confirm=approve` · `2026-09-12T11:25:15.000Z`.

---

## Persist gate

| | |
|--|--|
| Parent JSON | **none** |
| Child tables | **reuse** AiVisionDetection + Incident |
| Client | screen state + OfflineQueue incident · frame local → base64 body |
| Migration | **n/a** · Step 4b SKIP |
| T-BE-API | **optional** reject-null later · **không** block DoD |
| T-BE-MIG | **n/a** |

---

## Live vs delta (FRAME)

| Surface | Live | SA chốt edit_page |
|---------|------|-------------------|
| Paths BFF 3 | live | **Giữ** |
| Detect body | DTO ImageBase64 live · app gửi null | **Client capture** non-null |
| Fail frame | heuristic / stub class risk | toast detectFail · card nil |
| Screen / finder / GPS / Confirm / Skip / score ẩn | shipped prior | **Keep** · **cấm** redesign |
| Step 4b | DTO live | **SKIP** |

---

## Form data / field map (delta focus)

| uiField | dtoField | Wire | Notes |
|---------|----------|------|-------|
| finder | — | device | capture JPEG |
| frameBytes | `ImageBase64` | POST detect | **must** non-null · FRAME-01 |
| stampGps | Lat/Lng/AccuracyM | POST detect + Confirm | **cấm** fake |
| rowDetect | DefectClass | detect resp | fail → nil · FRAME-02 |
| rowScore | Score | detect | **ship ẩn** |
| btnConfirm | CreateIncident | POST / queue | GPS gate |
| btnSkip | — | local | toast skip |
| toastDetectFail | — | local | FRAME-02 · Design `?fail=1` |

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-CAM-FRAME-01 | **OPEN → Dev dual** capture → non-null ImageBase64 |
| GAP-MOB-CAM-FRAME-02 | **OPEN → Dev dual** fail toast sạch · cấm fake class |
| GAP-MOB-CAM-FRAME-03 | **OPEN → Dev dual** parity body siblings |
| GAP-MOB-CAM-DETECT-01 | **CLOSED client** · DTO live · Step 4b SKIP |
| GAP-MOB-CAM-PACK-01 | **CLOSED** screen |
| GAP-MOB-CAM-SCORE-01 | Ship ẩn Score |
| GAP-MOB-BFF-01 | proxy đủ · **không** BFF mới |
| GAP-MOB-EDIT-DEMO-01 | **CLOSED** cleanup_mock |
| GAP-QA-CAM-GPS-TIMING-01 | Should · non-block |
| Step 4b / T-BE-* | **SKIP** DoD · optional reject-null sau |

---

## Client architecture (TL/Dev — delta only)

| Layer | Delta |
|-------|-------|
| iOS | `CamPatrolViewModel.runDetect` · capture finder → `imageBase64` non-null · fail → toast · **cấm** nil body |
| Android | same · CameraX frame → body · omit-null **cấm** |
| Use case / repo | reuse `DetectAiVisionUseCase` · body bind ImageBase64 + GPS |
| Offline / Confirm / GPS / entry | **keep** prior ship |
| Privacy | camera + location **keep** |

### Delta Dev (role sau — không implement turn SA)

1. Dual capture frame JPEG → `DetectAiVisionBody.imageBase64` non-null trước POST.
2. Capture/empty fail → toast detectFail · detection=nil · **cấm** fake class.
3. Parity iOS+Android với siblings đã gửi base64 · GPS fields giữ.
4. **Cấm** đổi BFF path · **cấm** Step 4b · **cấm** full redesign.
5. Verify Dev: xcodegen + xcodebuild **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-CAM-FRAME` | Dev iOS | capture → ImageBase64 · fail toast |
| `T-AND-CAM-FRAME` | Dev Android | parity CameraX frame |
| `T-BE-*` / `T-BFF-*` | — | **n/a** DoD · Step 4b SKIP |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `cam-patrol` / **`screen`** |
| changeScope | `edit_page` |
| solution_confirm | **approve** |
| BFF | 3 path **giữ** · ImageBase64 **client DoD** · Step 4b **SKIP** |
| Tasks | `T-IOS-CAM-FRAME` · `T-AND-CAM-FRAME` |
| Delta Dev | dual capture · fail toast · parity base64 · keep GPS/offline/score-ẩn |
| Verify (Dev) | iPhone 17 Pro · assembleDebug · dotnet build |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa` · GAP-PKT-ROLE-01) |
| e2eQa | queued QA · **cấm** e2e ở SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T11:25:15.000Z` |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-control-hint-20260912-frame |
| realDataHash | sha256:cam-patrol-real-data-20260912-frame |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260912-frame |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
