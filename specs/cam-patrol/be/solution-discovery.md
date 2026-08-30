# SA — Solution — cam-patrol (Thu thập bằng camera)

| Field | Value |
|-------|-------|
| feature | `cam-patrol` |
| title | [Mobile] [Tuần đường] -> Thu thập bằng camera |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_4e92ee1d`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-CAM-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-CAM-PATROL` + finder `DES-MOB-CAM-FINDER` · **cấm** sheet chrome / Kind A–G web / Grid / Report / invent tab |
| thisAction | **Thu thập bằng camera** only · entry reuse `patrol-home` + `#sc-inc-form` secondary · **cấm** gộp `field-reflect` / `cam-view` / `vis-capture` / `camera-connect` / `ai-asset-detect` (`GAP-MOB-ACT-01/02`) |
| domain | **Patrol** sessions read + **AiVision** detect + **Incident** create · device GPS/camera · **cấm** invent `api/v1/cam-patrol` / `CamPatrolController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_0f0d1974` |
| prior · po | **confirmed** · `po/requirement.md` · `task_078f6674` |
| prior · data_analy | **confirmed** · `_data-analy/cam-patrol-*.md` · contentHash `sha256:cam-patrol-control-hint-20260828` · realDataHash `sha256:cam-patrol-real-data-20260828` · bffContentHash `sha256:cam-patrol-mobile-bff-20260828` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| versionGate | `rechecked` |
| taskId | `task_4e92ee1d` |
| confirmedBy | agent autoApprove · `task_4e92ee1d` |
| updatedAt | `2026-08-28T21:14:26.000Z` |

**Cấm:** invent `api/v1/cam-patrol` · invent path ngoài BFF table · clone domain controller trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · fake lat/lng · watermark Gói · device label · score % ship (`GAP-MOB-CAM-SCORE-01`) · fake HTTP 200 / fake SC code khi POST fail · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `PatrolSessionsController` · AiVision `AiVisionOpsController.Detect` · Incident `IncidentsController.Create` |
| API downstream | `GET patrol/sessions` live · `POST ai-vision/detect` **live stub** · `POST incident/incidents` live |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Prefill stamp | `GET patrol/sessions` filter «Đang tuần» · fail/empty → demo SSOT `QL.1 · Km 1556+040` · GPS **vẫn** chạy |
| GPS | Device CL / Fused · stamp «đã chốt» · deny → `DES-MOB-GPS-DENY` · **chặn** Confirm · **cấm** fake |
| Camera | Continuous finder `DES-MOB-CAM-FINDER` · AVCapture (iOS) / CameraX (Android) · FOV + overlay stamps · **kit_missing approve** (app surface · **không** invent `LinmCameraFinder` P1) |
| Detect P1 | `POST ai-vision/detect` body stub `Engine?`·`Note?` · bind card từ `AiVisionDetectionDto` · **ship ẩn Score** |
| Confirm P1 | `POST incident/incidents` bind `DetectionId` + stamp · toast `Code` SC-* · **cấm** invent SC khi fail |
| Skip | Clear local detection card · toast bỏ · **không** API |
| Offline | POST fail / mất sóng → `OfflineQueueKind.incident` + sibling `patrol-offline` · toast nháp · **cấm** fake 200 |
| Persist BE mới | **GAP-MOB-CAM-DETECT-01** mở rộng `DetectAiVisionRequest` (ảnh · lat/lng · video) · Step 4b **pending TL/T-BE** (SA **không** chạy migration) |
| Sibling | entry `patrol-home` / `#sc-inc-form` · queue `patrol-offline` · **cấm** re-own |
| Out of pack | field-reflect · cam-view · vis-capture · camera-connect · ai-asset-detect · score chrome ship · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `cam-patrol` → **screen** · owner `DES-MOB-CAM-PATROL` (+ finder `DES-MOB-CAM-FINDER` cùng slug) |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | `GET patrol/sessions` (Bearer) |
| App path P1 detect | `POST ai-vision/detect` — wire sẵn · live stub P1 |
| App path P1 write | `POST incident/incidents` — Confirm · bind `DetectionId` |
| Downstream | existing controllers · **không** dedicated invent `CamPatrolController` |
| GPS / camera stream | Device — **không** API |
| Skip | local only |
| Step 4b | **Pending TL/T-BE** — expand `DetectAiVisionRequest` + Detect service bind frame/GPS · **cấm** SA chạy `/new-endpoint` / `/database-migration` turn này |
| Rationale | Prefill live sessions · detect + confirm = CTX paths đã live · P1 offline-safe trên Confirm · detect stub đủ ship card (DefectClass) · body ảnh/GPS = GAP stamp |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `CamPatrolController` local trên BFF |
| BE HTTP | `PatrolSessionsController` · `AiVisionOpsController` · `IncidentsController` | live GET sessions · live stub Detect · live Create |
| Response DTO (detect) | `ApiResponse<AiVisionDetectionDto>` | `Id` · `Code` · `DefectClass` · `Score` · `Severity` · `RouteLabel` · `SectionId` · `Lat`·`Lng` · … |
| Request body (detect P1) | `DetectAiVisionRequest` live | `Engine?` · `Note?` — **không** fork app-only |
| Request body (detect P2 / T-BE) | expand same DTO | `ImageBase64?` / media ref · `Lat?`·`Lng?`·`AccuracyM?` · optional video ref — **GAP-MOB-CAM-DETECT-01** |
| Request body (confirm) | `CreateIncidentRequest` live | map từ detection + stamp — bảng dưới |
| HTTP app | reuse `FetchPatrolSessionsUseCase` / `PatrolRepository*` + new `DetectAiVisionUseCase` + `CreateIncidentUseCase` | **cấm** raw HTTP trong View · AiVision repo hiện chỉ `asset-candidates` → **mở rộng** `detect()` · Incident repo **mới** |
| Location | `GetCurrentLocationUseCase` · `LocationReading` | allow / deny / unavailable |
| Offline queue | `OfflineQueueStore` · `OfflineQueueKind.incident` | enqueue Confirm payload · sync qua sibling pack |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Kit chrome | `LinmTopBar` · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell | Design `kit_missing_confirm` **approve** Finder = app native surface |
| Modals | GPS deny `DES-MOB-GPS-DENY` reuse | **cấm** system alert |
| Surfaces | New feature screen · wire entry từ hub / inc-form | owner slug = `cam-patrol` |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`field`** active | **cấm** invent (`GAP-TAB-01`) |

---

## BFF / API contract (live audit 2026-08-28)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Prefill Route / Km / active | `GET patrol/sessions` | proxy | `GET api/v1/patrol/sessions` | **PASS** |
| Auto detect (frame) | `POST ai-vision/detect` | proxy | `AiVisionOpsController.Detect` · `DetectStubAsync` | **PASS stub** · body mỏng · **GAP-MOB-CAM-DETECT-01** |
| Optional detections | `GET ai-vision/detections` · `…/{id}` | proxy | detections CRUD | **PASS** · optional P1 |
| Confirm · tạo vấn đề | `POST incident/incidents` | proxy | `IncidentsController.Create` | **PASS** |
| GPS / camera / Skip | — | — | Device / local | **N/A** API |
| Offline / POST fail | — | — | local `OfflineQueueKind.incident` → `patrol-offline` | **không** invent path |
| Invent cam-patrol API | `cam-patrol` / dedicated invent | — | — | **cấm invent** |

### Query params (sessions)

`search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50)  
Mobile P1: client filter `Status=Đang tuần` · `page=1` · `pageSize=50`.

### Detect request (P1 live stub)

| Field | Required | Notes |
|-------|----------|-------|
| `Engine` | optional | default P1 · gửi `"P1"` từ app |
| `Note` | optional | session code / stamp context (không thay GPS stamp UI) |

Stub BE hiện trả `DefectClass="Ổ gà"` · `Score=0.89` · `RouteLabel` / `SectionId` mock · `SourceKind=detect-stub`. UI row Phát hiện bind `DefectClass` (+ surface label Design «· Mặt đường» khi thiếu asset surface). **Ship: ẩn Score %** (`GAP-MOB-CAM-SCORE-01`).

### Detect request (P2 / T-BE — GAP-MOB-CAM-DETECT-01)

| Field | Required | Notes |
|-------|----------|-------|
| `ImageBase64` / media ref | khi Signed | frame từ finder — **không** invent endpoint mới |
| `Lat` · `Lng` · `AccuracyM` | khi Signed | device GPS chốt lúc detect |
| `VideoRef?` | optional | design detect ảnh+tọa độ+video |
| giữ `Engine` · `Note` | — | tương thích ngược |

**Cấm** invent `POST ai-vision/cam-patrol-detect` · **cấm** app fork DTO khác BFF table.

### Create incident (Confirm) — map từ detect + stamp

| UI / detect / stamp | → `CreateIncidentRequest` |
|---------------------|---------------------------|
| Phát hiện / `DefectClass` | `Title` · `IncidentType` |
| `RouteLabel` / stamp QL.1 | `RouteName` |
| Km stamp | `KmStart` |
| Detection `Id` | `DetectionId` (string Guid) |
| GPS chốt | `HasGps=true` |
| `Severity` detect | `Severity` |
| action copy / Note | `Description` (optional) |
| now | `RequestedAt` UTC |
| P1 default | `Status` = draft/open SSOT BE (`""` hoặc giá trị BE validate — Dev khớp live Create) |

Response toast: `Code` từ `IncidentDto` → «Đã tạo vấn đề {Code} · định vị đã chốt».

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.read` | GET list | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `ai-vision` detect | POST detect | **reuse** stub · no new permission slug |
| `incident.incidents.create` | POST create | **reuse** · BE TODO debt P1 |
| cameras* / detect-assets / ITS / predict | OUT | **cấm** gọi |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** form date edit · toast time local display | `/review-timezone-implement` | |
| XCO | **xco_na** | list current-user / company filter BE | `/implement-view-cross-company` | |
| SHARE | **share_na** | reuse AiVisionDetection + Incident tables **đã có** · detect expand = same DTO/table · **cấm** parent JSON · **cấm** invent bảng `cam_patrol_*` | `/implement-shared-table` | T-BE chỉ mở rộng request fields / service bind |
| Offline | **screen mở + queue** | GET fail → demo stamp · POST Confirm fail → `OfflineQueueKind.incident` · detect fail → toast lỗi **cấm** fake detection | offline-sync | **cấm** full-screen block · **cấm** fake 200/SC |
| GPS | **Live loc required** Confirm | stamp + gate Confirm | — | allow → stamp «đã chốt» · deny modal · **cấm** fake lat/lng |
| Camera | **Live finder required** | `DES-MOB-CAM-FINDER` continuous | — | permission deny → toast / block detect · **cấm** static fake placeholder khi granted |
| Push | **n/a** | — | — | — |
| Store | **camera + location claim** | PrivacyInfo / Play · Info.plist `NSCameraUsageDescription` **thiếu** hôm nay · Android `CAMERA` **thiếu** · location đã có | — | Dev **phải** declare trước ship · **cấm** `localhost` / LAN IP in solution · family `1` · **cấm** iPad listing claim |
| Step 4b | **Pending TL/T-BE** | expand `DetectAiVisionRequest` | — | **không** chạy ở role SA · stamp GAP |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=approve` (Finder app surface) · `solution_confirm=approve` · `2026-08-28T21:14:26.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** trên pack mobile |
| Child tables this pack (BE) | **reuse** `AiVisionDetection` + `Incident` — **không** invent bảng · detect expand = columns/DTO fields trên entity đã có nếu cần |
| Client store | screen state + `OfflineQueueStore` incident items · frame local (không upload path mới P1 stub) |
| Migration | **không** chạy turn SA · TL/T-BE khi Signed expand detect body (chỉ nếu cần cột mới) |
| T-BE-API | **yes** — mở rộng `DetectAiVisionRequest` + `DetectStubAsync`/`Detect` bind ảnh/GPS trên **đúng** `POST api/v1/ai-vision/detect` |
| T-BE-MIG | **pending** — chỉ nếu cần cột entity mới (TL quyết sau audit schema) · **cấm** invent `rmms_cam_patrol` |

---

## Live vs delta (audit 2026-08-28 / `task_4e92ee1d`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/sessions` | BE + Mobile.Bff proxy live | **Giữ** · stamp Route / chainage / active |
| `POST …/ai-vision/detect` | live stub Engine/Note | **Giữ path** · call stub P1 · card bind DefectClass · **GAP-MOB-CAM-DETECT-01** T-BE body |
| `POST …/incident/incidents` | live Create | **Giữ** · Confirm bind DetectionId + HasGps |
| `api/v1/cam-patrol` / CamPatrolController | **không** | **Cấm** tạo invent slug |
| Screen `#sc-cam-patrol` | hub toast stub only | **Ship** dual Design kit / finder / stamp / card / CTA |
| Score row | demo 91% | **Ẩn ship** · demo proto `?ship=1` |
| Finder native | — | AVCapture / CameraX + FOV · kit_missing **approve** |
| Tab 5 shell | dưới hub | **Giữ** · `tabs: none` pack · tab field active |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Screen `#sc-cam-patrol` | finder + stamps + detection rows + Confirm/Skip | GET sessions + device GPS/camera + POST detect → POST incident / queue | Patrol session + AiVisionDetection + Incident |
| GPS deny | modal | local UI | — |

### Field map (ui → dto → store)

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tuần đường | — | local | `go('patrol-home')` · Android icon-only OK |
| title | Thu thập bằng camera | — | local | `LinmTopBar` |
| finder | (viewfinder) | — | device camera | `DES-MOB-CAM-FINDER` |
| stampRoute | QL.1 · Km … | `Route` / chainage | GET sessions | fallback demo SSOT |
| stampGps | {lat}, {lng} · ±{a} m · đã chốt | `lat`·`lng`·`accuracyM` | device | **cấm** fake |
| rowDetect | Phát hiện / … | `DefectClass` | POST detect | + surface label |
| rowScore | Độ tin cậy / % | `Score` | POST detect | **ship ẩn** |
| rowAction | Hành động / Tạo vấn đề sau xác nhận | — | local copy | fixed P1 |
| btnConfirm | Xác nhận · tạo vấn đề | CreateIncident | POST / queue | disable khi !HasGps / deny |
| btnSkip | Bỏ qua | — | local clear | toast skip |
| toastOk | Đã tạo vấn đề SC-* · … | Incident `Code` | after Create | `LinmToast` |
| toastSkip | Đã bỏ · nhận nhầm | — | local | `LinmToast` |
| gpsDeny | Định vị bị tắt | — | modal reuse | chặn Confirm |

**Demo fallback SSOT** (GET fail/empty): stamp `QL.1 · Km 1556+040` · GPS vẫn device · detect fail **không** fake card 200 · Confirm offline → queue + toast nháp **không** invent SC-2409.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub **Thu thập bằng camera** `#i-video` | push `#sc-cam-patrol` (thay toast) | **owner** `cam-patrol` (entry reuse) |
| `#sc-inc-form` secondary | cùng route | owner (`shared_action` · **không** enqueue) |
| Detect (auto / frame tick) | `POST ai-vision/detect` · show card | owner · **cấm** enqueue |
| Confirm | HasGps → POST incident hoặc queue · toast | owner · **cấm** enqueue sibling |
| Skip | clear card · toast · finder tiếp | owner |
| Back | `go('patrol-home')` | owner |
| GPS deny | modal reuse | chrome reuse `DES-MOB-GPS-DENY` |
| Tab 5 | shell giữ · field active | **cấm** invent |
| field-reflect / cam-view / … | **không** ship | siblings |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue Confirm/Skip/detect/finder (`GAP-MOB-ACT-07`).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-CAM-PACK-01 | **CLOSED** · packKind=`screen` |
| GAP-MOB-CAM-SCORE-01 | **Ship ẩn** Score row/% · demo giữ 91% |
| GAP-MOB-CAM-DETECT-01 | Path giữ `POST ai-vision/detect` · P1 stub Engine/Note · T-BE expand body ảnh/GPS/video · **cấm** invent path · Step 4b **pending TL** |
| GAP-MOB-BFF-01 | **Không** — proxy catch-all đủ 3 path domain |
| GAP-MOB-CAM-SCR-01 | Ship screen dual · thay hub toast |
| GAP-MOB-CAM-FIND-01 | Finder native surface · kit_missing **approve** |
| GAP-MOB-CAM-DET-01 | Card bind detect DTO |
| GAP-MOB-CAM-CONFIRM-01 | POST incident + DetectionId |
| GAP-MOB-CAM-SKIP-01 | Local dismiss |
| GAP-MOB-CAM-DATA-01 | Sessions + detect + incident via BFF only |
| GAP-MOB-REAL-01 | §B = BFF table only |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp sibling · kit toast/modal · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK |
| GAP-SA-STORE-01 | Dev declare camera privacy + Play · **cấm** localhost/LAN · no iPad listing claim |
| Step 4b / T-BE-* | **Pending TL** — không chạy turn SA |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/CamPatrol/*` (screen + finder overlay + card + GPS deny) | `presentation/feature/campatrol/*` |
| Entry wire | `PatrolHome*` toast → push · inc-form secondary | same |
| Use case | `FetchPatrolSessionsUseCase` · `GetCurrentLocationUseCase` · `DetectAiVisionUseCase` (new) · `CreateIncidentUseCase` (new) · camera session use case | same |
| Location | `CoreLocationReader` | `AndroidLocationReader` |
| Camera | AVCaptureSession overlay | CameraX PreviewView overlay |
| Repo | `PatrolRepository*` · expand `AiVisionRepository.detect` · new `IncidentRepository` · offline enqueue incident | same |
| Mapper / copy | `CamPatrolCopy` VN SSOT Design · hide score ship flag | same |
| State | session stamp · gps · detection? · busy · showGpsDeny · cameraPermission | same |
| Shell | `AppRouter` field tab dưới screen | `MainTabScreen` / nav host |
| Store | `NSCameraUsageDescription` + PrivacyInfo camera · location already | `CAMERA` permission + Play Data safety |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent cam-patrol API slug · score % ship.

### Delta Dev (role sau — không implement turn SA)

1. Ship screen dual theo Design / html-to-native-map / copy VN / finder native / ẩn score ship.
2. Prefill GET sessions · GPS live stamp · GPS deny gate Confirm.
3. Detect POST stub · card bind · Skip local · Confirm POST incident hoặc `OfflineQueueKind.incident` · **cấm** fake 200/SC.
4. Wire hub + inc-form entry · **cấm** sibling surfaces.
5. Declare camera privacy (iOS Info.plist + PrivacyInfo · Android CAMERA + Play).
6. Verify builds: xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-CAM-PAT` | Dev iOS | screen + finder AVCapture + GPS + detect/confirm/offline + privacy |
| `T-AND-CAM-PAT` | Dev Android | parity dual + CameraX + CAMERA permission |
| `T-BE-CAM-DETECT-API` | T-BE | expand `DetectAiVisionRequest` + Detect service bind ảnh/GPS trên đúng path |
| `T-BE-CAM-DETECT-MIG` | T-BE | chỉ nếu cần cột entity mới · `/database-migration` |
| `T-BFF-*` | — | **n/a** · proxy catch-all đủ |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `cam-patrol` / **`screen`** |
| solution_confirm | **approve** |
| BFF | `GET patrol/sessions` live · `POST ai-vision/detect` live stub · `POST incident/incidents` live · **GAP-MOB-CAM-DETECT-01** Step 4b **pending TL/T-BE** |
| Tasks đề xuất | `T-IOS-CAM-PAT` · `T-AND-CAM-PAT` · `T-BE-CAM-DETECT-API` · `T-BE-CAM-DETECT-MIG` (nếu cần) |
| Kit | reuse TopBar / ListRow / Primary / Secondary / Toast · Finder = app surface (**approve**) |
| Delta Dev | screen+finder · GPS · detect stub · confirm/queue · dual parity · privacy camera · entry wire · ẩn score |
| Verify (Dev) | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · Android `assembleDebug` · BFF `dotnet build` |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa` · GAP-PKT-ROLE-01) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / e2e ở SA |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-28T21:14:26.000Z` |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-control-hint-20260828 |
| realDataHash | sha256:cam-patrol-real-data-20260828 |
| bffContentHash | sha256:cam-patrol-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
