# SA — Solution — vis-capture (Nhận diện mặt đường)

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| title | [Mobile] [Vấn đề] -> Nhận diện mặt đường |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_5dc1deb6`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-VIS-PACK-01 **closed** · **cấm** sheet chrome / `#sheet-*`) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-VIS-CAPTURE` · **cấm** Kind A–G web / Grid / Report / invent tab |
| thisAction | **Nhận diện mặt đường** only · entry reuse `incident-list` `.vn-banner` + AI hub chip · **cấm** gộp `cam-patrol` / `det-hitl` / `incident-create` / `cam-view` (`GAP-MOB-ACT-01/02`) |
| domain | **AiVision** detect (+ optional uploads) · **Incident** create · **Patrol** sessions optional · device GPS/camera · **cấm** invent `api/v1/vis-capture` / `VisCaptureController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_27b1bf39` |
| prior · po | **confirmed** · `po/requirement.md` · `task_8735d614` |
| prior · data_analy | **confirmed** · `_data-analy/vis-capture-*.md` · contentHash `sha256:vis-capture-control-hint-20260829` · realDataHash `sha256:vis-capture-real-data-20260829` · bffContentHash `sha256:vis-capture-mobile-bff-20260829` · actionTreeHash `sha256:vis-capture-action-tree-20260829` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| versionGate | `rechecked` |
| taskId | `task_5dc1deb6` |
| confirmedBy | agent autoApprove · `task_5dc1deb6` |
| updatedAt | `2026-08-29T09:31:02.000Z` |

**Cấm:** invent `api/v1/vis-capture` · invent path ngoài BFF table · clone domain controller trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · fake lat/lng · gõ tay tọa độ · nhận diện on-device · watermark Gói · device label · score % row P1 · fake HTTP 200 / fake SC / fake class khi POST fail · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`) · re-scan demo (`hash skip`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | AiVision `AiVisionOpsController.Detect` (+ optional `AiVisionUploadsController`) · Incident `IncidentsController.Create` · Patrol `PatrolSessionsController.GetList` |
| API downstream | `POST ai-vision/detect` **live stub** (body ImageBase64 · Lat · Lng · AccuracyM **đã có**) · optional uploads · `GET patrol/sessions` live · `POST incident/incidents` live |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Prefill Loc | live `GET patrol/sessions` filter «Đang tuần» · fail/empty → `patrol.empty.active.route` · **cấm** demoLoc · GPS accuracy **vẫn** device |
| GPS | Device CL / Fused · stamp «đã chốt» · gate **AccuracyM ≤ 30** trước detect · deny → `DES-MOB-GPS-DENY` · **chặn** detect + Gắn · **cấm** fake |
| Camera | Still PhotoRow · reuse field-reflect `UIImagePicker` / Android still · `#i-camera` · **không** continuous finder (`cam-patrol` OUT) |
| Detect P1 | `POST ai-vision/detect` body full `DetectAiVisionRequest` · bind `DefectClass` / `Severity` · **cấm** tên thuật toán · **cấm** Score row |
| Attach P1 | `POST incident/incidents` bind `DetectionId` + stamp · toast «Đã gắn sự cố» · **cấm** invent SC khi fail |
| Skip | Local dismiss · `go('incident-list')` · **không** API |
| Offline | POST detect/attach fail → queue local · sibling `patrol-offline` · toast lỗi · **cấm** fake 200 / fake class |
| Persist BE mới | **GAP-MOB-VIS-DETECT-01** engine stub → Signed harden trên **đúng** path · Step 4b **pending TL/T-BE** (SA **không** chạy migration) · body fields **đã live** (cam-patrol expand) |
| Sibling | entry `incident-list` / AI hub · queue `patrol-offline` · GPS deny chrome · **cấm** re-own |
| Out of pack | cam-patrol · det-hitl · incident-create · cam-view · web AiVision catalog · on-device model · invent tab · score % |

### Route decision

| | Choice |
|--|--------|
| Slug | `vis-capture` → **screen** · owner `DES-MOB-VIS-CAPTURE` |
| App prefix | `mobile-bff/api/v1` |
| App path P1 detect | `POST ai-vision/detect` — wire body ImageBase64 + Lat + Lng + AccuracyM + Engine/Note |
| App path P1 optional media | `POST ai-vision/uploads/init` · `PUT …/object` · `POST …/complete` — optional (P1 ưu tiên ImageBase64 trên detect) |
| App path P1 optional loc | `GET patrol/sessions` |
| App path P1 write | `POST incident/incidents` — Gắn · bind `DetectionId` |
| Downstream | existing controllers · **không** dedicated `VisCaptureController` |
| GPS / camera / Skip | Device / local — **không** API |
| Step 4b | **Pending TL/T-BE** — harden Detect engine (stub → Signed runtime) trên đúng path · **cấm** SA chạy `/new-endpoint` / `/database-migration` turn này · **cấm** invent path |
| Rationale | BFF table + real-data §B khớp live · GPS gate client · still capture · attach DetectionId · engine stub đủ ship P1 bind DefectClass/Severity |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `VisCaptureController` local trên BFF |
| BE HTTP | `AiVisionOpsController` · uploads · `IncidentsController` · `PatrolSessionsController` | live Detect stub · live Create · live sessions |
| Response DTO (detect) | `ApiResponse<AiVisionDetectionDto>` | `Id` · `Code` · `DefectClass` · `Score` · `Severity` · `RouteLabel` · `SectionId` · `Lat`·`Lng` · … |
| Request body (detect) | `DetectAiVisionRequest` **live** | `Engine?` · `Note?` · `ImageBase64?` · `Lat?` · `Lng?` · `AccuracyM?` · `VideoRef?` — **không** fork app-only |
| Request body (attach) | `CreateIncidentRequest` live | map từ detection + stamp — bảng dưới |
| HTTP app | reuse `DetectAiVisionUseCase` · `CreateIncidentUseCase` · `FetchPatrolSessionsUseCase` · PhotoRow still (field-reflect) | **cấm** raw HTTP trong View |
| Location | `GetCurrentLocationUseCase` · `LocationReading` | allow / deny / unavailable · gate ≤ 30 m |
| Offline queue | `OfflineQueueStore` · `OfflineQueueKind.incident` | enqueue Attach payload · sync qua sibling pack |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Kit chrome | `LinmTopBar` · SectionLabel · PhotoRow · `LinmListRow` · Badge · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell | Design `kit_missing_confirm` = **none** |
| Modals | GPS deny `DES-MOB-GPS-DENY` reuse | **cấm** system alert |
| Surfaces | New feature screen · wire entry từ incident-list banner / hub | owner slug = `vis-capture` |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`incident`** (Vấn đề) active | **cấm** invent (`GAP-TAB-01`) |

---

## BFF / API contract (live audit 2026-08-29)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Optional media init | `POST ai-vision/uploads/init` | proxy | `AiVisionUploadsController.Init` | **PASS** · optional P1 |
| Optional media object | `PUT ai-vision/uploads/{id}/object` | proxy | Put object | **PASS** · optional |
| Optional media complete | `POST ai-vision/uploads/complete` | proxy | Complete | **PASS** · optional |
| Nhận diện sau ảnh + GPS | `POST ai-vision/detect` | proxy | `AiVisionOpsController.Detect` · `DetectStubAsync` | **PASS stub** · body ImageBase64/Lat/Lng/AccuracyM **đã bind** · engine stub → **GAP-MOB-VIS-DETECT-01** |
| Optional reload detection | `GET ai-vision/detections/{id}` | proxy | GetById | **PASS** · optional |
| Prefill tuyến / ca | `GET patrol/sessions` | proxy | `PatrolSessionsController.GetList` | **PASS** · optional |
| Gắn sự cố | `POST incident/incidents` | proxy | `IncidentsController.Create` | **PASS** |
| GPS / camera / Skip | — | — | Device / local | **N/A** API |
| Offline / POST fail | — | — | local `OfflineQueueKind.incident` → `patrol-offline` | **không** invent path |
| Invent vis-capture API | `vis-capture` / dedicated invent | — | — | **cấm invent** |

### Query params (sessions)

`search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50)  
Mobile P1: client filter `Status=Đang tuần` · `page=1` · `pageSize=50`.

### Detect request (P1 — live fields)

| Field | Required | Notes |
|-------|----------|-------|
| `Engine` | optional | default `"P1"` từ app |
| `Note` | optional | session / stamp context |
| `ImageBase64` | **yes** sau capture (P1) | still JPEG/PNG base64 từ PhotoRow |
| `Lat` · `Lng` | **yes** khi GPS chốt | device · **cấm** fake |
| `AccuracyM` | **yes** khi GPS chốt | gate client ≤ 30 · request-only (MIG n/a) |
| `VideoRef` | optional | **không** P1 still |

Stub BE hiện: bind Lat/Lng/AccuracyM vào Create · ImageUrl từ base64 hoặc mock · `DefectClass` stub (vd `Ổ gà`) · `SourceKind=detect-stub`. UI bind **live** `DefectClass` / `Severity` — **cấm** hardcode demo «Nứt dọc» khi API trả khác · demo SSOT chỉ fallback empty/fail UI label Loc, **không** fake class.

### Client GPS gate (GAP-MOB-VIS-GPS-01) — HARD

| Condition | Behavior |
|-----------|----------|
| GPS deny | Modal `DES-MOB-GPS-DENY` · **không** POST detect · **không** Gắn |
| Chưa chốt / AccuracyM thiếu | toastGpsBlock · **không** POST detect |
| AccuracyM **> 30** | toastGpsBlock «Sai số định vị quá lớn · cần ≤ 30 m…» · **không** POST detect |
| AccuracyM ≤ 30 + ảnh | POST detect với body đầy đủ |

### Create incident (Gắn sự cố) — map từ detect + stamp

| UI / detect / stamp | → `CreateIncidentRequest` |
|---------------------|---------------------------|
| Phân loại / `DefectClass` | `Title` · `IncidentType` |
| `RouteLabel` / rowLoc | `RouteName` · `KmStart` |
| Detection `Id` | `DetectionId` (string Guid) |
| `Severity` / Mức | `Severity` |
| GPS chốt | `HasGps=true` |
| Note | `Description` optional |
| now | `RequestedAt` UTC |
| P1 default | `Status` = giá trị BE validate (Dev khớp live Create) |

Response toast: cố định **Đã gắn sự cố** (Design SSOT) · **không** bắt buộc hiện SC code trên toast P1.

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `ai-vision` detect / uploads | POST detect · optional uploads | **reuse** · no new permission slug |
| `incident.incidents.create` | POST create | **reuse** |
| `patrol.sessions.read` | GET list optional | **reuse** |
| detect-assets / ITS / predict | OUT | **cấm** gọi |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** form date edit · toast time local display | `/review-timezone-implement` | |
| XCO | **xco_na** | list current-user / company filter BE | `/implement-view-cross-company` | |
| SHARE | **share_na** | reuse AiVisionDetection + Incident tables **đã có** · engine harden = same path/DTO · **cấm** parent JSON · **cấm** invent bảng `vis_capture_*` | `/implement-shared-table` | |
| Offline | **screen mở + queue** | GET sessions fail → demo Loc · POST fail → `OfflineQueueKind.incident` · detect fail → toast **cấm** fake class | offline-sync | **cấm** full-screen block · **cấm** fake 200/SC |
| GPS | **Live loc required** detect + attach | gate ≤ 30 m · deny modal | — | **cấm** fake lat/lng · **cấm** gõ tay |
| Camera | **Live still required** | PhotoRow · field-reflect picker reuse | — | deny → toast · **cấm** fake detection · **không** continuous finder |
| Push | **n/a** | — | — | — |
| Store | **camera + location claim** | PrivacyInfo + Play · Info.plist `NSCameraUsageDescription` **đã có** · Android `CAMERA` **đã có** · location **đã có** | — | Dev verify copy đủ «nhận diện mặt đường» · **cấm** `localhost` / LAN IP in solution · family `1` · **cấm** iPad listing claim |
| Step 4b | **Pending TL/T-BE** | harden Detect engine Signed | — | **không** chạy ở role SA · stamp GAP |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=none` · `solution_confirm=approve` · `2026-08-29T09:31:02.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** trên pack mobile |
| Child tables this pack (BE) | **reuse** `AiVisionDetection` + `Incident` — **không** invent bảng |
| Client store | screen state + `OfflineQueueStore` incident items · local photo bytes tới detect |
| Migration | **không** chạy turn SA · AccuracyM/VideoRef request-only (MIG n/a) · engine Signed **không** bắt buộc cột mới P1 |
| T-BE-API | **pending Signed** — harden `DetectStubAsync` → real engine trên **đúng** `POST api/v1/ai-vision/detect` · body fields **đã có** (không expand DTO lại) |
| T-BE-MIG | **n/a** P1 — **cấm** invent `rmms_vis_capture` |

---

## Live vs delta (audit 2026-08-29 / `task_5dc1deb6`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `POST …/ai-vision/detect` | live stub · body ImageBase64/Lat/Lng/AccuracyM bind | **Giữ path** · client gửi full body sau gate 30 m · UI bind DefectClass/Severity · **GAP-MOB-VIS-DETECT-01** engine Signed → T-BE |
| `POST …/ai-vision/uploads/*` | live | **Optional** · P1 ưu tiên ImageBase64 |
| `GET …/patrol/sessions` | live | **Optional** Loc Route/Km |
| `POST …/incident/incidents` | live Create + DetectionId | **Giữ** · Gắn bind DetectionId + HasGps |
| `api/v1/vis-capture` / VisCaptureController | **không** | **Cấm** tạo invent slug |
| Screen `#sc-vis-capture` | prototype / stub entry | **Ship** dual Design kit / PhotoRow / rows / CTA |
| Score row | — | **Cấm** P1 |
| Tab 5 shell | incident active | **Giữ** · `tabs: none` pack |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Screen `#sc-vis-capture` | PhotoRow + Loc/Acc/Class/Sev + Gắn/Bỏ qua | device GPS/camera + optional sessions + POST detect → POST incident / queue | AiVisionDetection + Incident (+ Patrol session stamp) |
| GPS deny | modal | local UI | — |

### Field map (ui → dto → store) — khớp real-data §B

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Vấn đề | — | local | `go('incident-list')` · Android icon-only OK |
| title | Nhận diện mặt đường | — | local | `LinmTopBar` |
| sectionPhoto | Ảnh hiện trường | — | local | dual Android **bắt buộc** |
| photos | (slots) | `ImageBase64` / media | device · optional uploads | still · `#i-camera` |
| rowLoc | Vị trí đã chốt | `RouteName` · `KmStart` / `RouteLabel` | GPS + optional sessions | fallback demo SSOT |
| rowAcc | Sai số định vị | `AccuracyM` | device | gate ≤ 30 · `±{n} m` |
| rowClass | Phân loại | `DefectClass` | POST detect | **cấm** fake |
| rowSev | Mức | `Severity` | POST detect | badge color map |
| btnAttach | Gắn sự cố | CreateIncident + `DetectionId` | POST / queue | disable khi !detect / !HasGps / deny |
| btnSkip | Bỏ qua | — | local dismiss | **không** API |
| toastOk | Đã gắn sự cố | — | after Create | `LinmToast` |
| toastGpsBlock | Sai số… ≤ 30 m | — | local | chặn detect |
| gpsDeny | Định vị bị tắt | — | modal reuse | chặn detect + Gắn |

**Demo fallback SSOT** (sessions fail/empty Loc): `QL.1 · Km 1556+050` · Acc/Class/Sev từ device/detect live · detect fail **không** fake «Nứt dọc».

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| `incident-list` `.vn-banner` `#i-camera` | push `#sc-vis-capture` | **owner** `vis-capture` (entry reuse) |
| AI hub / chip | cùng route | owner (`shared_action` · **không** enqueue) |
| PhotoRow / camera | still capture → filled | owner · **cấm** enqueue |
| GPS stamp / gate | device · ≤ 30 m | owner · **cấm** enqueue |
| Detect | `POST ai-vision/detect` · bind rows | owner · **cấm** enqueue |
| Gắn sự cố | HasGps + detection → POST incident hoặc queue · toast | owner · **cấm** enqueue sibling (`GAP-MOB-ACT-07`) |
| Bỏ qua | dismiss · `go('incident-list')` | owner |
| Back | `go('incident-list')` | owner |
| GPS deny | modal reuse | chrome reuse `DES-MOB-GPS-DENY` |
| Tab 5 | shell giữ · incident active | **cấm** invent |
| cam-patrol / det-hitl / incident-create | **không** ship | siblings |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue Gắn/Bỏ qua/detect/camera/GPS (`GAP-MOB-ACT-07`).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-VIS-PACK-01 | **CLOSED** · packKind=`screen` |
| GAP-MOB-VIS-DUAL-01 | **CLOSED** Design · Android section + Bỏ qua |
| GAP-MOB-VIS-GPS-01 | **CLOSED** client · AccuracyM ≤ 30 trước detect · toastGpsBlock |
| GAP-MOB-VIS-DETECT-01 | Path giữ `POST ai-vision/detect` · P1 stub engine + body live · Signed engine harden → **T-BE pending TL** · **cấm** invent path · Step 4b **không** ở SA |
| GAP-MOB-BFF-01 | **Không** — proxy catch-all đủ path domain |
| GAP-MOB-VIS-NAV-01 / SCR-01 / PHOTO-01 / ATTACH-01 / SKIP-01 / DATA-01 | Ship screen dual · PhotoRow · POST incident · Skip local · BFF only |
| GAP-MOB-REAL-01 | §B = BFF table only |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` · incident active |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp sibling · kit reuse · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK |
| GAP-SA-STORE-01 | camera + location **đã declare** · Dev verify copy · **cấm** localhost/LAN · no iPad listing claim |
| Step 4b / T-BE-* | **Pending TL** — engine Signed · **không** chạy turn SA |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/VisCapture/*` (screen + PhotoRow + rows + GPS deny) | `presentation/feature/viscapture/*` |
| Entry wire | `IncidentList*` banner → push · AI hub chip | same |
| Use case | `GetCurrentLocationUseCase` · `DetectAiVisionUseCase` (reuse) · `CreateIncidentUseCase` (reuse) · optional `FetchPatrolSessionsUseCase` · still camera picker (field-reflect) | same |
| Location | `CoreLocationReader` | `AndroidLocationReader` |
| Camera | still `UIImagePicker` / PhotoRow (field-reflect) | still capture / PhotoRow |
| Repo | expand reuse AiVision + Incident + Patrol · offline enqueue incident | same |
| Mapper / copy | `VisCaptureCopy` VN SSOT Design · severity badge map · **cấm** thuật toán | same |
| State | photo? · gps · accuracy · detection? · busy · showGpsDeny · cameraPermission | same |
| Shell | `AppRouter` incident tab dưới screen | `MainTabScreen` / nav host |
| Store | camera + location already · verify PrivacyInfo / Play | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent vis-capture API slug · continuous finder · score % · on-device vision.

### Delta Dev (role sau — không implement turn SA)

1. Ship screen dual theo Design / html-to-native-map / copy VN / PhotoRow still / section + Bỏ qua Android.
2. GPS live + gate ≤ 30 m · GPS deny modal · optional GET sessions Loc.
3. After photo + gate OK → POST detect full body · bind Class/Sev · Skip local · Attach POST incident hoặc `OfflineQueueKind.incident` · **cấm** fake 200/class.
4. Wire incident-list banner + hub entry · **cấm** sibling surfaces.
5. Verify privacy strings; builds: xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-VIS-CAP` | Dev iOS | screen + PhotoRow still + GPS gate + detect/attach/offline + entry |
| `T-AND-VIS-CAP` | Dev Android | parity dual + still camera + CAMERA already |
| `T-BE-VIS-DETECT-ENGINE` | T-BE | Signed harden Detect engine trên đúng `POST ai-vision/detect` · **không** invent path |
| `T-BE-VIS-DETECT-MIG` | T-BE | **n/a** P1 (AccuracyM request-only) |
| `T-BFF-*` | — | **n/a** · proxy catch-all đủ |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `vis-capture` / **`screen`** |
| solution_confirm | **approve** |
| BFF | `POST ai-vision/detect` live stub (body full) · optional uploads · optional `GET patrol/sessions` · `POST incident/incidents` · **GAP-MOB-VIS-DETECT-01** Step 4b **pending TL/T-BE** |
| Tasks đề xuất | `T-IOS-VIS-CAP` · `T-AND-VIS-CAP` · `T-BE-VIS-DETECT-ENGINE` · `T-BE-VIS-DETECT-MIG` n/a |
| Kit | reuse TopBar / SectionLabel / PhotoRow / ListRow / Badge / Primary / Secondary / Toast · `kit_missing` **none** |
| Delta Dev | screen+PhotoRow · GPS gate 30 m · detect body · attach/queue · dual parity · entry wire |
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
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-08-29T09:31:02.000Z` |
| versionGate | rechecked |
| contentHash | sha256:vis-capture-control-hint-20260829 |
| realDataHash | sha256:vis-capture-real-data-20260829 |
| bffContentHash | sha256:vis-capture-mobile-bff-20260829 |
| actionTreeHash | sha256:vis-capture-action-tree-20260829 |
| priorDesignHash | sha256:vis-capture-design-20260829 |
| priorPoHash | sha256:vis-capture-po-requirement-20260829 |
| taskId | `task_5dc1deb6` |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
