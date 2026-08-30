# SA — Solution — field-reflect (Ghi nhận hư hỏng)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_f5ff9463`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-FIELD-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-FIELD-REFLECT` + kind `DES-MOB-FIELD-KIND` · **cấm** sheet chrome / Kind A–G web / Grid / Report / invent tab |
| thisAction | **Ghi nhận hư hỏng** only · entry reuse `patrol-home` `#row-reflect` · **cấm** gộp `cam-patrol` / `inc-form` / `#sheet-incident` / `cam-view` / `camera-connect` / `ai-asset-detect` (`GAP-MOB-ACT-01/02`) |
| domain | **Patrol** sessions read + **AiVision** detect/uploads + **Incident** create + **Integration** asset-types · device GPS/camera · local checklist · **cấm** invent `api/v1/field-reflect` / `FieldReflectController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_06d4623f` |
| prior · po | **confirmed** · `po/requirement.md` · `task_d6774c35` |
| prior · data_analy | **confirmed** · `_data-analy/field-reflect-*.md` · contentHash `sha256:field-reflect-control-hint-20260829` · realDataHash `sha256:field-reflect-real-data-20260829` · bffContentHash `sha256:field-reflect-mobile-bff-20260829` · actionTreeHash `sha256:field-reflect-action-tree-20260829` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| versionGate | `rechecked` |
| taskId | `task_f5ff9463` |
| confirmedBy | agent autoApprove · `task_f5ff9463` |
| updatedAt | `2026-08-28T22:22:42.000Z` |

**Cấm:** invent `api/v1/field-reflect` · invent path ngoài BFF table · invent checklist API · clone domain controller trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · fake lat/lng · watermark Gói · device label · badge P1/P2 header · fake HTTP 200 / fake SC khi POST fail · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`) · re-scan demo (`hash skip`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Patrol `PatrolSessionsController` · AiVision `AiVisionOpsController.Detect` + uploads · Incident `IncidentsController.Create` · Integration `AssetTypesController` |
| API downstream | `GET patrol/sessions` live · `GET integration/asset-types` live · `POST ai-vision/detect` **live stub** (body đã có ImageBase64/Lat/Lng) · `POST ai-vision/uploads` live · `POST incident/incidents` live |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Prefill stamp | `GET patrol/sessions` filter «Đang tuần» · empty → banner «Không có ca đang tuần» · **vẫn** cho draft · GPS **vẫn** chạy · **cấm** fake ca |
| GPS | Device CL / Fused · location row «đã chốt» · deny → `DES-MOB-GPS-DENY` · **chặn** Create · **cấm** fake |
| Camera | Still capture PhotoRow slot `#i-camera` · AVFoundation / CameraX takePicture · **không** continuous finder (`cam-patrol`) · Design `kit_missing` PhotoRow **approve** (compose) |
| Kind pills | Local closed set Hư/Mất/Hỏng → `IncidentType` (hoặc prefix Description) · default Hư · filter checklist |
| Detect P1 | After photo optional · `POST ai-vision/detect` · bind card từ `AiVisionDetectionDto` · fail → toast · **cấm** fake «Ổ gà» |
| Media optional | `POST ai-vision/uploads` (+ object) trước detect khi ready · Create **chưa** `media[]` (`GAP-MOB-FIELD-MEDIA-01`) |
| Checklist | Local CHK `asset-kcht-32` PAVEMENT + optional host `GET integration/asset-types` · join ticks → `Description` · **cấm** invent checklist path (`GAP-MOB-FIELD-CHK-01`) |
| Create P1 | `POST incident/incidents` bind kind + detect + GPS + checklist · toast `Code` SC-* · **cấm** invent SC khi fail |
| Draft | Local `OfflineQueueKind.incident` → sibling `patrol-offline` · toast nháp · **cấm** fake 200 |
| Persist BE mới | **GAP-MOB-FIELD-MEDIA-01** media trên Incident · detect bind ảnh/GPS service (DTO fields **đã có**) · checklist schema API **không invent** · Step 4b **pending TL/T-BE** (SA **không** chạy migration) |
| Sibling | entry `patrol-home` · queue `patrol-offline` · peer `cam-patrol` · **cấm** re-own |
| Out of pack | cam-patrol finder · cam-view · vis-capture · camera-connect · ai-asset-detect · inc-form / sheet-incident · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `field-reflect` → **screen** · owner `DES-MOB-FIELD-REFLECT` (+ kind `DES-MOB-FIELD-KIND` cùng slug) |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | `GET patrol/sessions` · optional `GET integration/asset-types` |
| App path P1 detect | `POST ai-vision/detect` — wire · live stub · gửi ImageBase64/Lat/Lng khi có |
| App path P1 media | `POST ai-vision/uploads` · `PUT …/uploads/{id}/object` — optional P1 |
| App path P1 write | `POST incident/incidents` — Create · bind `DetectionId` + GPS + kind + Description |
| Downstream | existing controllers · **không** dedicated invent `FieldReflectController` |
| GPS / camera / kind / checklist / draft | Device / local — **không** invent API |
| Step 4b | **Pending TL/T-BE** — media trên Incident nếu Signed · Detect service bind frame/GPS trên **đúng** path · **cấm** invent checklist endpoint · **cấm** SA chạy `/new-endpoint` / `/database-migration` turn này |
| Rationale | Prefill live sessions · detect + create = CTX paths đã live · checklist local catalog · P1 offline-safe trên Create/Draft · **cấm** invent `field-reflect` slug API |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `FieldReflectController` local trên BFF |
| BE HTTP | `PatrolSessionsController` · `AiVisionOpsController` · `AiVisionUploadsController` · `IncidentsController` · `AssetTypesController` | live paths cited |
| Response DTO (detect) | `ApiResponse<AiVisionDetectionDto>` | `Id` · `Code` · `DefectClass` · `Score` · `Severity` · `RouteLabel` · `SectionId` · `Lat`·`Lng` · … |
| Request body (detect) | `DetectAiVisionRequest` live | `Engine?` · `Note?` · `ImageBase64?` · `Lat?` · `Lng?` · `AccuracyM?` · `VideoRef?` — **không** fork app-only · service bind = T-BE nếu stub chưa dùng ảnh |
| Request body (create) | `CreateIncidentRequest` live | map từ form + detect + GPS — bảng dưới · **không** `media[]` P1 |
| HTTP app | reuse `FetchPatrolSessionsUseCase` / `PatrolRepository*` + `DetectAiVisionUseCase` (peer cam-patrol) + `CreateIncidentUseCase` + optional uploads + asset-types | **cấm** raw HTTP trong View |
| Location | `GetCurrentLocationUseCase` · `LocationReading` | allow / deny / unavailable |
| Offline queue | `OfflineQueueStore` · `OfflineQueueKind.incident` | enqueue Create/Draft payload · sync qua sibling `patrol-offline` |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Kit chrome | `LinmTopBar` · `LinmKindPills`/`LinmSegment` · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell | Design `kit_missing_confirm` **approve** PhotoRow + CheckboxList = compose pattern |
| Modals | GPS deny `DES-MOB-GPS-DENY` reuse | **cấm** system alert |
| Surfaces | New feature screen · wire entry từ hub `#row-reflect` | owner slug = `field-reflect` |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`field`** active | **cấm** invent (`GAP-TAB-01`) |

---

## BFF / API contract (live audit 2026-08-28)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Prefill Route / Km / active | `GET patrol/sessions` | proxy | `GET api/v1/patrol/sessions` | **PASS** |
| Catalog loại TS (host) | `GET integration/asset-types` | proxy | `AssetTypesController` | **PASS** · optional P1 |
| Optional media init | `POST ai-vision/uploads` | proxy | uploads | **PASS** · **GAP-MOB-FIELD-MEDIA-01** |
| Optional media object | `PUT ai-vision/uploads/{id}/object` | proxy | uploads | **PASS** · optional |
| Nhận diện sau ảnh | `POST ai-vision/detect` | proxy | `AiVisionOpsController.Detect` · stub | **PASS stub** · DTO body ảnh/GPS **đã có** · service bind **GAP-MOB-CAM-DETECT-01** |
| Tạo vấn đề | `POST incident/incidents` | proxy | `IncidentsController.Create` | **PASS** · **không** `media[]` |
| GPS / camera / kind / checklist / draft | — | — | Device / local | **N/A** API |
| Offline / POST fail | — | — | local `OfflineQueueKind.incident` → `patrol-offline` | **không** invent path |
| Invent field-reflect API | `field-reflect` / dedicated invent | — | — | **cấm invent** |

### Query params (sessions)

`search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50)  
Mobile P1: client filter `Status=Đang tuần` · `page=1` · `pageSize=50`.

### Detect request (P1)

| Field | Required | Notes |
|-------|----------|-------|
| `Engine` | optional | default P1 · gửi `"P1"` từ app |
| `Note` | optional | session code / kind context |
| `ImageBase64` | optional | frame từ PhotoRow khi Signed/ready — **cùng** path |
| `Lat` · `Lng` · `AccuracyM` | optional | device GPS chốt lúc detect |
| `VideoRef` | optional | **n/a** pack này (still photo) |

Stub BE có thể trả `DefectClass="Ổ gà"` · `Severity` · `RouteLabel` / `SectionId`. UI bind `DefectClass` (+ surface «· Mặt đường» khi thiếu) · `Severity` badge. Detect fail → empty rows + toast · **cấm** fake card.

### Create incident (Tạo vấn đề) — map từ form + detect + GPS

| UI / detect / GPS | → `CreateIncidentRequest` |
|-------------------|---------------------------|
| Kind pill Hư/Mất/Hỏng | `IncidentType` (closed set 3) |
| Nhận diện / `DefectClass` | `Title` · `AssetLabel` |
| `Severity` detect | `Severity` |
| Route / Km chốt (sessions + GPS) | `RouteName` · `KmStart` |
| Detection `Id` | `DetectionId` (string Guid) |
| GPS chốt | `HasGps=true` |
| Checklist ticks | `Description` (join labels) P1 |
| now | `RequestedAt` UTC |
| P1 default | `Status` = draft/open SSOT BE (`""` hoặc giá trị BE validate — Dev khớp live Create) |

Response toast: `Code` từ `IncidentDto` → «Đã tạo vấn đề {Code} · gắn ca tuần».

**Cấm** app fork DTO khác BFF table · **cấm** invent `media[]` trên Create P1 (GAP Signed → T-BE).

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.read` | GET list | **reuse** · BE `[RequirePermission]` TODO debt P1 |
| `integration.asset-types.read` | GET catalog | **reuse** optional |
| `ai-vision` detect / uploads | POST | **reuse** · no new permission slug |
| `incident.incidents.create` | POST create | **reuse** · BE TODO debt P1 |
| cameras* / detect-assets / ITS / predict / cam-patrol finder | OUT | **cấm** gọi |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** form date edit · toast time local display | `/review-timezone-implement` | |
| XCO | **xco_na** | list current-user / company filter BE | `/implement-view-cross-company` | |
| SHARE | **share_na** | reuse AiVisionDetection + Incident + AssetType tables **đã có** · **cấm** parent JSON · **cấm** invent bảng `field_reflect_*` | `/implement-shared-table` | T-BE chỉ mở rộng media/service bind nếu Signed |
| Offline | **screen mở + queue** | GET fail → banner empty session · POST Create fail / Draft → `OfflineQueueKind.incident` · detect fail → toast **cấm** fake detection | offline-sync | **cấm** full-screen block · **cấm** fake 200/SC |
| GPS | **Live loc required** Create | location row + gate Create | — | allow → «đã chốt» · deny modal · **cấm** fake lat/lng · Draft **vẫn** cho (queue) |
| Camera | **Live capture required** PhotoRow | still photo `#i-camera` | — | permission deny → toast / block detect · **cấm** static fake placeholder khi granted · **không** continuous finder |
| Push | **n/a** | — | — | — |
| Store | **camera + location claim** | PrivacyInfo / Play · Info.plist `NSCameraUsageDescription` **đã có** · Android `CAMERA` **đã có** · location **đã có** | — | Dev verify claim trước ship · **cấm** `localhost` / LAN IP in solution · family `1` · **cấm** iPad listing claim |
| Step 4b | **Pending TL/T-BE** | media Incident · Detect service bind · **không** invent checklist API | — | **không** chạy ở role SA · stamp GAP |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=approve` (PhotoRow + CheckboxList compose) · `solution_confirm=approve` · `2026-08-28T22:22:42.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** trên pack mobile |
| Child tables this pack (BE) | **reuse** `AiVisionDetection` + `Incident` (+ AssetType catalog) — **không** invent bảng |
| Client store | screen state + `OfflineQueueStore` incident items · photo local · checklist ticks local |
| Migration | **không** chạy turn SA · TL/T-BE khi Signed media trên Incident (chỉ nếu cần cột mới) |
| T-BE-API | **yes (optional Signed)** — media trên CreateIncident / Detect service bind ảnh-GPS trên **đúng** `POST api/v1/ai-vision/detect` · **cấm** invent checklist endpoint |
| T-BE-MIG | **pending** — chỉ nếu cần cột entity mới (TL quyết sau audit) · **cấm** invent `rmms_field_reflect` |

---

## Live vs delta (audit 2026-08-28 / `task_f5ff9463`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/patrol/sessions` | BE + Mobile.Bff proxy live | **Giữ** · prefill Route / Km / active |
| `GET …/integration/asset-types` | live | **Giữ** optional host · checklist rows = local CHK |
| `POST …/ai-vision/detect` | live stub · DTO body ảnh/GPS **đã expand** | **Giữ path** · call sau ảnh · card bind · service bind T-BE nếu stub chưa dùng ImageBase64 |
| `POST …/ai-vision/uploads` | live | **Optional** P1 · **GAP-MOB-FIELD-MEDIA-01** Create chưa media[] |
| `POST …/incident/incidents` | live Create | **Giữ** · Create bind DetectionId + HasGps + kind + Description |
| `api/v1/field-reflect` / FieldReflectController | **không** | **Cấm** tạo invent slug |
| Screen `#sc-field-reflect` | hub toast/stub only | **Ship** dual Design kit / kind / PhotoRow / card / checklist / CTA |
| Checklist API | **không** | Local `asset-kcht-32` · **cấm** invent |
| Tab 5 shell | dưới hub | **Giữ** · `tabs: none` pack · tab field active |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Screen `#sc-field-reflect` | kind + PhotoRow + detect/severity/location + checklist + Create/Draft | GET sessions + device GPS/camera + POST detect → POST incident / queue + local CHK | Patrol session + AiVisionDetection + Incident |
| GPS deny | modal | local UI | — |
| Empty session | banner | GET empty | — |

### Field map (ui → dto → store) — khớp real-data §B

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Tuần đường | — | local | `go('patrol-home')` · Android icon-only OK |
| title | Ghi nhận hư hỏng | — | local | `LinmTopBar` · **cấm** badge P1/P2 |
| kindLabel | Loại phản ánh | — | local | SectionLabel 13 |
| kindPills | Hư / Mất / Hỏng | `IncidentType` | local → Create | `DES-MOB-FIELD-KIND` · default Hư |
| photoLabel | Ảnh hiện trường | — | local | SectionLabel 13 |
| photos | Ảnh | media local / uploads | device · optional uploads | PhotoRow |
| addPhoto | (camera) | — | device camera | `#i-camera` · `openCapture('reflect')` |
| detectRow | Nhận diện | `Title` · `AssetLabel` · `DetectionId` | POST detect | `DefectClass` · empty OK |
| severityRow | Mức | `Severity` | detect | badge orange |
| locationRow | Vị trí đã chốt | `RouteName` · `KmStart` · `HasGps` | GPS + sessions | **cấm** fake |
| chkLabel | Checklist theo loại tài sản | — | local | SectionLabel 13 |
| checklist | checklist items | `Description` (join) | local CHK + optional asset-types | PAVEMENT SSOT · filter by kind |
| btnCreate | Tạo vấn đề | CreateIncident | POST / queue | disable khi !HasGps / deny |
| btnDraft | Lưu nháp mất sóng | — | local queue | `OfflineQueueKind.incident` · toast draft |
| toastOk | Đã tạo vấn đề SC-* · gắn ca tuần | Incident `Code` | after Create | `LinmToast` |
| toastDraft | Đã lưu nháp · Lưu trữ | — | local | `LinmToast` |
| gpsDeny | Định vị bị tắt | — | modal reuse | chặn Create |
| emptySession | Không có ca đang tuần | — | banner | draft OK |

**Demo fallback SSOT** (GET fail/empty): banner empty · location GPS vẫn device · detect fail **không** fake card · Create offline → queue + toast nháp **không** invent SC-2408.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Hub **Ghi nhận hư hỏng** `#row-reflect` `#i-camera` | push `#sc-field-reflect` (thay toast) | **owner** `field-reflect` (entry reuse) |
| Kind pills | single select · filter checklist | owner · **cấm** enqueue |
| Camera / PhotoRow | capture still · optional uploads → detect | owner · **cấm** enqueue |
| Detect (after photo) | `POST ai-vision/detect` · show card | owner · **cấm** enqueue |
| Checklist ticks | local toggle | owner |
| Create | HasGps → POST incident hoặc queue · toast | owner · **cấm** enqueue sibling |
| Draft | enqueue incident · toast · reuse `patrol-offline` | owner · **cấm** enqueue new sibling pack |
| Back | `go('patrol-home')` | owner |
| GPS deny | modal reuse | chrome reuse `DES-MOB-GPS-DENY` |
| Tab 5 | shell giữ · field active | **cấm** invent |
| cam-patrol / inc-form / cam-view / … | **không** ship | siblings |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue Create/Draft/kind/photo/detect/checklist (`GAP-MOB-ACT-07`).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-FIELD-PACK-01 | **CLOSED** · packKind=`screen` |
| GAP-MOB-FIELD-MEDIA-01 | P1 Create **không** `media[]` · optional uploads/detect · Title/AssetLabel/Description bind · T-BE expand media trên Incident nếu Signed · Step 4b **pending TL** |
| GAP-MOB-FIELD-CHK-01 | Checklist = local `asset-kcht-32` PAVEMENT + optional `GET integration/asset-types` · **cấm** invent checklist API |
| GAP-MOB-CAM-DETECT-01 | Path giữ `POST ai-vision/detect` · DTO body ảnh/GPS **đã có** · P1 call stub · T-BE service bind frame/GPS nếu cần · **cấm** invent path · Step 4b **pending TL** |
| GAP-MOB-BFF-01 | **Không** — proxy catch-all đủ path domain |
| GAP-MOB-FIELD-SCR-01 | Ship screen dual · thay hub toast |
| GAP-MOB-FIELD-KIND-01 | Pills Hư/Mất/Hỏng closed set |
| GAP-MOB-FIELD-PHOTO-01 | PhotoRow + still capture |
| GAP-MOB-FIELD-DET-01 | Card bind detect DTO |
| GAP-MOB-FIELD-CREATE-01 | POST incident + DetectionId + GPS |
| GAP-MOB-FIELD-DRAFT-01 | Offline queue · reuse `patrol-offline` |
| GAP-MOB-FIELD-DATA-01 | Sessions + detect + uploads + asset-types + incident via BFF only |
| GAP-MOB-REAL-01 | §B = BFF table only |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp sibling · kit toast/modal · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK |
| GAP-SA-STORE-01 | Camera + location **đã declare** · Dev verify PrivacyInfo/Play · **cấm** localhost/LAN · no iPad listing claim |
| Step 4b / T-BE-* | **Pending TL** — không chạy turn SA |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/FieldReflect/*` (screen + kind + PhotoRow + card + checklist + GPS deny) | `presentation/feature/fieldreflect/*` |
| Entry wire | `PatrolHome*` toast → push `#row-reflect` | same |
| Use case | `FetchPatrolSessionsUseCase` · `GetCurrentLocationUseCase` · `DetectAiVisionUseCase` · `CreateIncidentUseCase` · optional uploads · camera capture · checklist local | same |
| Location | `CoreLocationReader` | `AndroidLocationReader` |
| Camera | AVFoundation still | CameraX ImageCapture |
| Repo | `PatrolRepository*` · `AiVisionRepository.detect` (+ uploads) · `IncidentRepository` · asset-types optional · offline enqueue incident | same |
| Mapper / copy | `FieldReflectCopy` VN SSOT Design | same |
| State | kind · photos · session · gps · detection? · checklist ticks · busy · showGpsDeny · cameraPermission · emptySession | same |
| Shell | `AppRouter` field tab dưới screen | `MainTabScreen` / nav host |
| Store | camera + location already · verify PrivacyInfo/Play | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent field-reflect API slug · continuous finder · invent checklist API.

### Delta Dev (role sau — không implement turn SA)

1. Ship screen dual theo Design / html-to-native-map / copy VN / kind pills / PhotoRow / checklist compose.
2. Prefill GET sessions · GPS live location · GPS deny gate Create · empty-session banner.
3. Optional detect POST · card bind · Create POST incident hoặc `OfflineQueueKind.incident` · Draft queue · **cấm** fake 200/SC.
4. Wire hub `#row-reflect` entry · **cấm** sibling surfaces / finder.
5. Verify camera/location privacy claims · Play Data safety.
6. Verify builds: xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-FIELD-REF` | Dev iOS | screen + kind + PhotoRow + GPS + detect/create/draft/offline + entry wire |
| `T-AND-FIELD-REF` | Dev Android | parity dual + CameraX still + checklist |
| `T-BE-FIELD-MEDIA-API` | T-BE | optional Signed — media trên Incident Create · **cấm** invent path riêng |
| `T-BE-FIELD-DETECT-BIND` | T-BE | Detect service bind ImageBase64/Lat/Lng trên đúng `POST ai-vision/detect` nếu stub chưa |
| `T-BE-FIELD-MIG` | T-BE | chỉ nếu cần cột entity mới · `/database-migration` |
| `T-BFF-*` | — | **n/a** · proxy catch-all đủ |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `field-reflect` / **`screen`** |
| solution_confirm | **approve** |
| BFF | `GET patrol/sessions` live · `GET integration/asset-types` live · `POST ai-vision/detect` live stub · `POST ai-vision/uploads` live · `POST incident/incidents` live · **GAP-MOB-FIELD-MEDIA-01** · **GAP-MOB-FIELD-CHK-01** · **GAP-MOB-CAM-DETECT-01** Step 4b **pending TL/T-BE** |
| Tasks đề xuất | `T-IOS-FIELD-REF` · `T-AND-FIELD-REF` · `T-BE-FIELD-MEDIA-API` · `T-BE-FIELD-DETECT-BIND` · `T-BE-FIELD-MIG` (nếu cần) |
| Kit | reuse TopBar / KindPills / ListRow / Primary / Secondary / Toast · PhotoRow + CheckboxList = compose (**approve**) |
| Delta Dev | screen · kind · PhotoRow · GPS · detect stub · create/draft queue · dual parity · entry wire · checklist local |
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
| generatedAt | `2026-08-28T22:22:42.000Z` |
| versionGate | rechecked |
| contentHash | sha256:field-reflect-control-hint-20260829 |
| realDataHash | sha256:field-reflect-real-data-20260829 |
| bffContentHash | sha256:field-reflect-mobile-bff-20260829 |
| actionTreeHash | sha256:field-reflect-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
