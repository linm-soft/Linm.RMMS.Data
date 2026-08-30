# SA — Solution — incident-create (Ghi sự cố)

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| title | [Mobile] Ghi sự cố |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_497ffbf0`) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design confirm · GAP-MOB-INC-CREATE-PACK-01 **closed**) |
| stack | `native_dual` |
| Feature Kind | **screen** · `DES-MOB-INC-FORM` + kind `DES-MOB-INC-KIND` · **cấm** sheet chrome / `#sheet-incident` / Kind F web / Grid / Report / invent tab |
| thisAction | **Ghi sự cố** only · entry `startIncidentPick()` → asset pick → `#sc-inc-form` · **cấm** gộp `field-reflect` / `#sheet-incident` / `incident-list` CRUD / web Kind F (`GAP-MOB-ACT-01/02`) |
| domain | **Incident** create + **Integration** asset-types + optional **AiVision** detect/uploads + optional **Patrol** sessions · device GPS/camera · local checklist · **cấm** invent `api/v1/incident-create` / `IncidentCreateController` |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_706e535d` |
| prior · po | **confirmed** · `po/requirement.md` · `task_4dd8f7a1` |
| prior · data_analy | **confirmed** · `_data-analy/incident-create-*.md` · contentHash `sha256:incident-create-control-hint-20260829` · realDataHash `sha256:incident-create-real-data-20260829` · bffContentHash `sha256:incident-create-mobile-bff-20260829` · actionTreeHash `sha256:incident-create-action-tree-20260829` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role SA |
| versionGate | `rechecked` |
| taskId | `task_497ffbf0` |
| confirmedBy | agent autoApprove · `task_497ffbf0` |
| updatedAt | `2026-08-29T00:40:29.000Z` |

**Cấm:** invent `api/v1/incident-create` · invent path ngoài BFF table · invent checklist API · clone domain controller trên Mobile.Bff · app `:5101` · ERP.* · `mfeStdUrl` / `yarn start:std` · system `UIAlert` / `AlertDialog` · fake lat/lng · watermark Gói · device label · badge P1/P2 header · fake HTTP 200 / fake SC khi POST fail · Write MFE/native ở role SA · chạy Step 4b / migration / e2e ở role này · gộp sibling (`GAP-MOB-ACT-01/02/07`) · re-scan demo (`hash skip`).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync · PrivacyInfo / Play Data safety (`GAP-SA-STORE-01`).

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | Integration `AssetTypesController` · Incident `IncidentsController.Create` · AiVision `AiVisionOpsController.Detect` + uploads · Patrol `PatrolSessionsController` (optional prefill) |
| API downstream | `GET integration/asset-types` live · `GET patrol/sessions` live · `POST ai-vision/detect` **live stub** · `POST ai-vision/uploads` live · `POST incident/incidents` live |
| BFF mobile | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS + Android · base `{BffBase}/mobile-bff/api/v1` · **cấm** URLSession/OkHttp trong View |
| Entry pick | `startIncidentPick()` → banner + asset-types grid · click → `openIncidentForm(code)` · thiếu chọn → toast pick · **cấm** enqueue pack pick · **cấm** open form không asset |
| Asset card | WalletCard TÀI SẢN ĐÃ CHỌN bind code · title/sub từ catalog · **chặn** Create nếu chưa chọn TS |
| Prefill Route/Km | optional `GET patrol/sessions` filter «Đang tuần» · empty → GPS-only label vẫn chốt · **cấm** fake ca |
| GPS | Device CL / Fused · location «đã chốt *» · deny → `DES-MOB-GPS-DENY` · **chặn** Create · **cấm** fake |
| Camera | Still capture PhotoRow slot `#i-camera` · AVFoundation / CameraX takePicture · Design `kit_missing` PhotoRow **approve** (compose) |
| Kind pills | Local closed set Hư/Mất/Hỏng → `IncidentType` · default Hư · filter checklist |
| Severity | Local closed set 4 · default **Cao** → `Severity` · **cấm** invent severity API |
| Detect P1 | After photo optional · `POST ai-vision/detect` · bind aiRow từ `AiVisionDetectionDto` · fail → toast · giữ empty SSOT · **cấm** fake nhận diện |
| Media optional | `POST ai-vision/uploads` (+ object) trước detect khi ready · Create **chưa** `media[]` (`GAP-MOB-INC-CREATE-MEDIA-01`) |
| Checklist | Local CHK by asset `code` từ `asset-kcht-32` + optional host `GET integration/asset-types` · join ticks + mô tả → `Description` · **cấm** invent checklist path (`GAP-MOB-INC-CREATE-CHK-01`) |
| Create P1 | `POST incident/incidents` bind asset + kind + GPS + severity + checklist/mô tả · toast `Code` SC-* · **cấm** invent SC khi fail |
| Draft | Local `OfflineQueueKind.incident` → sibling `patrol-offline` · toast «Nháp mất sóng» · **cấm** fake 200 |
| Persist BE mới | **GAP-MOB-INC-CREATE-MEDIA-01** media trên Incident · detect bind ảnh/GPS service · checklist schema API **không invent** · Step 4b **pending TL/T-BE** (SA **không** chạy migration) |
| Sibling | entry `home` / FAB `incident-list` / CTA asset-type · secondary `cam-patrol` · `estimate` · queue `patrol-offline` · **cấm** re-own |
| Out of pack | `#sheet-incident` · `field-reflect` · `incident-list` CRUD · assign/close web · invent tab |

### Route decision

| | Choice |
|--|--------|
| Slug | `incident-create` → **screen** · owner `DES-MOB-INC-FORM` (+ kind `DES-MOB-INC-KIND` cùng slug) |
| App prefix | `mobile-bff/api/v1` |
| App path P1 read | `GET integration/asset-types` · optional `GET patrol/sessions` |
| App path P1 detect | `POST ai-vision/detect` — wire · live stub · gửi ImageBase64/Lat/Lng khi có |
| App path P1 media | `POST ai-vision/uploads` · `PUT …/uploads/{id}/object` — optional P1 |
| App path P1 write | `POST incident/incidents` — Create · bind asset + kind + GPS + Severity + Description |
| Downstream | existing controllers · **không** dedicated invent `IncidentCreateController` |
| GPS / camera / kind / severity / checklist / draft | Device / local — **không** invent API |
| Step 4b | **Pending TL/T-BE** — media trên Incident nếu Signed · Detect service bind frame/GPS trên **đúng** path · **cấm** invent checklist endpoint · **cấm** SA chạy `/new-endpoint` / `/database-migration` turn này |
| Rationale | Pick + create = CTX paths đã live · checklist local catalog · P1 offline-safe trên Create/Draft · **cấm** invent `incident-create` slug API |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` catch-all | **cấm** `IncidentCreateController` local trên BFF |
| BE HTTP | `AssetTypesController` · `IncidentsController` · `AiVisionOpsController` · `AiVisionUploadsController` · `PatrolSessionsController` | live paths cited |
| Response DTO (detect) | `ApiResponse<AiVisionDetectionDto>` | `Id` · `Code` · `DefectClass` · `Score` · `Severity` · `RouteLabel` · … |
| Request body (detect) | `DetectAiVisionRequest` live | `Engine?` · `Note?` · `ImageBase64?` · `Lat?` · `Lng?` · `AccuracyM?` · `VideoRef?` — **không** fork app-only |
| Request body (create) | `CreateIncidentRequest` live | map từ form + asset + GPS + detect — bảng dưới · **không** `media[]` P1 |
| HTTP app | reuse asset-types + `CreateIncidentUseCase` + optional `DetectAiVisionUseCase` / uploads + optional `FetchPatrolSessionsUseCase` + offline enqueue | **cấm** raw HTTP trong View |
| Location | `GetCurrentLocationUseCase` · `LocationReading` | allow / deny / unavailable |
| Offline queue | `OfflineQueueStore` · `OfflineQueueKind.incident` | enqueue Create/Draft payload · sync qua sibling `patrol-offline` |
| Token | Keychain / EncryptedSharedPreferences | Bearer + company headers |
| Kit chrome | `LinmTopBar` · `LinmWalletCard` · `LinmSegment`/pills · `LinmListRow` · `LinmSelect` · `LinmTextArea` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell | Design `kit_missing_confirm` **approve** PhotoRow + CheckboxList = compose pattern |
| Modals | GPS deny `DES-MOB-GPS-DENY` reuse | **cấm** system alert |
| Surfaces | New feature screen · wire entry từ home quick / FAB / asset-type CTA | owner slug = `incident-create` |
| Tabs | Shell Tab 5 **giữ** · pack `tabs: none` · tab **`home`** active | **cấm** invent (`GAP-TAB-01`) |

---

## BFF / API contract (live audit 2026-08-29)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| Catalog loại TS (pick + host) | `GET integration/asset-types` | proxy | `AssetTypesController` | **PASS** |
| Prefill Route / Km (optional) | `GET patrol/sessions` | proxy | `GET api/v1/patrol/sessions` | **PASS** · optional |
| Optional media init | `POST ai-vision/uploads` | proxy | uploads | **PASS** · **GAP-MOB-INC-CREATE-MEDIA-01** |
| Optional media object | `PUT ai-vision/uploads/{id}/object` | proxy | uploads | **PASS** · optional |
| Nhận diện sau ảnh | `POST ai-vision/detect` | proxy | `AiVisionOpsController.Detect` · stub | **PASS stub** · DTO body ảnh/GPS **đã có** · service bind **GAP-MOB-CAM-DETECT-01** |
| Tạo vấn đề | `POST incident/incidents` | proxy | `IncidentsController.Create` | **PASS** · **không** `media[]` |
| GPS / camera / kind / severity / checklist / draft | — | — | Device / local | **N/A** API |
| Offline / POST fail | — | — | local `OfflineQueueKind.incident` → `patrol-offline` | **không** invent path |
| Invent incident-create API | `incident-create` / dedicated invent | — | — | **cấm invent** |

### Query params (sessions · optional)

`search` · `status` · `route` · `page` (default 1) · `pageSize` (default 50)  
Mobile P1: client filter `Status=Đang tuần` · `page=1` · `pageSize=50`.

### Detect request (P1 · optional)

| Field | Required | Notes |
|-------|----------|-------|
| `Engine` | optional | default P1 · gửi `"P1"` từ app |
| `Note` | optional | asset code / kind context |
| `ImageBase64` | optional | frame từ PhotoRow khi Signed/ready |
| `Lat` · `Lng` · `AccuracyM` | optional | device GPS chốt lúc detect |
| `VideoRef` | optional | **n/a** pack này (still photo) |

Detect fail → empty aiRow SSOT + toast · **cấm** fake «Ổ gà» / fake nhận diện.

### Create incident (Tạo vấn đề) — map từ form + asset + GPS

| UI / detect / GPS | → `CreateIncidentRequest` |
|-------------------|---------------------------|
| Asset card title/sub | `Title` (prefix) · `AssetLabel` |
| Kind pill Hư/Mất/Hỏng | `IncidentType` (closed set 3) |
| Severity select | `Severity` (closed set 4 · default Cao) |
| Route / Km chốt (sessions + GPS) | `RouteName` · `KmStart` |
| Detection `Id` (optional) | `DetectionId` (string Guid) |
| GPS chốt | `HasGps=true` |
| Checklist ticks + mô tả | `Description` (join) P1 |
| now | `RequestedAt` UTC |
| P1 default | `Status` = `Mới` / draft-open SSOT BE (Dev khớp live Create validate) |

Required validate (live): `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt`.

Response toast: `Code` từ `IncidentDto` → «Đã tạo vấn đề {Code} · gắn tài sản đã chọn».

**Cấm** app fork DTO khác BFF table · **cấm** invent `media[]` trên Create P1 (GAP Signed → T-BE).

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `integration.asset-types.read` | GET catalog | **reuse** |
| `patrol.sessions.read` | GET list | **reuse** optional · BE `[RequirePermission]` TODO debt P1 |
| `ai-vision` detect / uploads | POST | **reuse** · no new permission slug |
| `incident.incidents.create` | POST create | **reuse** · BE TODO debt P1 |
| cameras* / detect-assets / ITS / predict / list CRUD / assign/close | OUT | **cấm** gọi |

**Cấm** thêm controller/permission trên Mobile.Bff · **cấm** invent permission slug mới trên app.

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_na** | **không** form date edit · toast time local display | `/review-timezone-implement` | |
| XCO | **xco_na** | list current-user / company filter BE | `/implement-view-cross-company` | |
| SHARE | **share_na** | reuse Incident + AssetType (+ AiVisionDetection) tables **đã có** · **cấm** parent JSON · **cấm** invent bảng `incident_create_*` | `/implement-shared-table` | T-BE chỉ mở rộng media/service bind nếu Signed |
| Offline | **screen mở + queue** | GET fail → keep last catalog / banner · POST Create fail / Draft → `OfflineQueueKind.incident` · detect fail → toast **cấm** fake detection | offline-sync | **cấm** full-screen block · **cấm** fake 200/SC |
| GPS | **Live loc required** Create | location row + gate Create | — | allow → «đã chốt» · deny modal · **cấm** fake lat/lng · Draft **vẫn** cho (queue) · **chặn** Create nếu !asset |
| Camera | **Live capture** PhotoRow | still photo `#i-camera` | — | permission deny → toast / block detect · **cấm** static fake placeholder khi granted · **không** continuous finder |
| Push | **n/a** | — | — | — |
| Store | **camera + location claim** | PrivacyInfo / Play · Info.plist `NSCameraUsageDescription` **đã có** · Android `CAMERA` **đã có** · location **đã có** | — | Dev verify claim trước ship · **cấm** `localhost` / LAN IP in solution · family `1` · **cấm** iPad listing claim |
| Step 4b | **Pending TL/T-BE** | media Incident · Detect service bind · **không** invent checklist API | — | **không** chạy ở role SA · stamp GAP |

AskQuestion (autoApprove=ON · không chờ board): `be_repo_confirm`=`/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `kit_missing_confirm=approve` (PhotoRow + CheckboxList compose) · `solution_confirm=approve` · `2026-08-29T00:40:29.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory (BE) | **none** trên pack mobile |
| Child tables this pack (BE) | **reuse** Incident (+ AssetType catalog · optional AiVisionDetection) — **không** invent bảng |
| Client store | screen state + pick mode + `OfflineQueueStore` incident items · photo local · checklist ticks local |
| Migration | **không** chạy turn SA · TL/T-BE khi Signed media trên Incident (chỉ nếu cần cột mới) |
| T-BE-API | **yes (optional Signed)** — media trên CreateIncident / Detect service bind ảnh-GPS trên **đúng** `POST api/v1/ai-vision/detect` · **cấm** invent checklist endpoint |
| T-BE-MIG | **pending** — chỉ nếu cần cột entity mới (TL quyết sau audit) · **cấm** invent `rmms_incident_create` |

---

## Live vs delta (audit 2026-08-29 / `task_497ffbf0`)

| Surface | Live | SA chốt P1 |
|---------|------|------------|
| `GET …/integration/asset-types` | live | **Giữ** · pick grid + AssetLabel + optional checklist host |
| `GET …/patrol/sessions` | live | **Optional** · prefill Route / Km |
| `POST …/ai-vision/detect` | live stub · DTO body ảnh/GPS **đã expand** | **Giữ path** · call sau ảnh · aiRow bind · service bind T-BE nếu stub chưa dùng ImageBase64 |
| `POST …/ai-vision/uploads` | live | **Optional** P1 · **GAP-MOB-INC-CREATE-MEDIA-01** Create chưa media[] |
| `POST …/incident/incidents` | live Create | **Giữ** · Create bind asset + HasGps + kind + Severity + Description |
| `api/v1/incident-create` / IncidentCreateController | **không** | **Cấm** tạo invent slug |
| Screen `#sc-inc-form` | Home/FAB toast hoặc stub | **Ship** dual Design kit / WalletCard / kind / checklist / PhotoRow / severity / CTA |
| Checklist API | **không** | Local `asset-kcht-32` by code · **cấm** invent |
| Tab 5 shell | dưới home | **Giữ** · `tabs: none` pack · tab **home** active |
| `#sheet-incident` | demo OUT | **OUT** · GAP-MOB-INC-CREATE-SHEET-01 |

---

## Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| Entry pick | banner + asset grid 32 | GET asset-types / catalog | AssetType |
| Screen `#sc-inc-form` | WalletCard + kind + checklist + PhotoRow + aiRow + loc + severity + mô tả + Create/Draft/secondary | GET asset-types + GPS/camera + optional sessions/detect → POST incident / queue + local CHK | AssetType + Incident (+ AiVisionDetection) |
| GPS deny | modal | local UI | — |
| Toast pick | toast | local | — |

### Field map (ui → dto → store) — khớp real-data §B

| uiField | Label VN | dtoField | Wire | Notes |
|---------|----------|----------|------|-------|
| navBack | Thông tin tài sản | — | local | `go('asset-type')` · Android icon-only OK |
| title | Ghi sự cố | — | local | `LinmTopBar` · **cấm** badge P1/P2 |
| assetCard | TÀI SẢN ĐÃ CHỌN | `Title` · `AssetLabel` | pick + GET asset-types | WalletCard · **required** Create |
| kindLabel | Loại ghi nhận | — | local | SectionLabel 13 |
| kindPills | Hư / Mất / Hỏng | `IncidentType` | local → Create | `DES-MOB-INC-KIND` · default Hư |
| chkLabel | Checklist theo loại | — | local | SectionLabel 13 |
| checklist | checklist items | `Description` (join) | local CHK by code + optional asset-types | GAP-MOB-INC-CREATE-CHK-01 |
| photoLabel | Ảnh hiện trường | — | local | SectionLabel 13 |
| photos | Ảnh | media local / uploads | device · optional uploads | PhotoRow |
| addPhoto | (camera) | — | device camera | `#i-camera` · `openCapture('inc-form')` |
| aiRow | Nhận diện từ ảnh | `DetectionId` · optional Title/AssetLabel | POST detect | empty SSOT OK |
| location | Vị trí đã chốt * | `RouteName` · `KmStart` · `HasGps` | GPS + optional sessions | **cấm** fake |
| severity | Mức độ | `Severity` | local select | default Cao · closed 4 |
| description | Mô tả | `Description` | form | placeholder SSOT |
| btnCreate | Tạo vấn đề | CreateIncident | POST / queue | disable khi !asset / !HasGps / deny |
| btnCam | Thu thập bằng camera | — | nav `cam-patrol` | shared_action · **cấm** enqueue |
| btnAssign | Giao việc xử lý | — | nav `estimate` | sibling · **cấm** enqueue |
| btnDraft | Lưu nháp mất sóng | — | local queue | `OfflineQueueKind.incident` · toast draft |
| toastOk | Đã tạo vấn đề SC-* · gắn tài sản đã chọn | Incident `Code` | after Create | `LinmToast` |
| toastDraft | Nháp mất sóng | — | local | `LinmToast` |
| toastPick | Chọn loại tài sản để ghi sự cố | — | local | entry pick |
| gpsDeny | Định vị bị tắt | — | modal reuse | chặn Create |
| pickBanner | Chọn loại tài sản… | — | local | `[data-ak32-pick]` |
| assetGrid | (32 loại) | pick code | GET asset-types | → `openIncidentForm(code)` |
| homeQuick / fabCreate | Ghi sự cố | — | entry | `startIncidentPick()` |

**Demo fallback SSOT** (GET fail/empty): keep last catalog · location GPS vẫn device · detect fail **không** fake aiRow · Create offline → queue + toast nháp **không** invent SC-2418 · thiếu asset → toast pick / chặn Create.

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner slug |
|---------|-------------|------------|
| Home quick / FAB / asset CTA | `startIncidentPick()` → pick → `#sc-inc-form` | **owner** `incident-create` (entry reuse) |
| Asset pick grid | select code → WalletCard bind | owner · **cấm** enqueue |
| Kind pills | single select · filter checklist | owner · **cấm** enqueue |
| Camera / PhotoRow | capture still · optional uploads → detect | owner · **cấm** enqueue |
| Detect (after photo) | `POST ai-vision/detect` · show aiRow | owner · **cấm** enqueue |
| Checklist ticks / severity / mô tả | local | owner |
| Create | asset + HasGps → POST incident hoặc queue · toast | owner · **cấm** enqueue sibling |
| Draft | enqueue incident · toast · reuse `patrol-offline` | owner · **cấm** enqueue new sibling pack |
| btnCam | `go('cam-patrol')` | shared_action reuse |
| btnAssign | `go('estimate')` | sibling reuse |
| Back | `go('asset-type')` | owner |
| GPS deny | modal reuse | chrome reuse `DES-MOB-GPS-DENY` |
| Tab 5 | shell giữ · **home** active | **cấm** invent |
| `#sheet-incident` / field-reflect / list CRUD | **không** ship | OUT |

**Cấm** start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · **cấm** enqueue Create/Draft/kind/photo/detect/checklist/pick (`GAP-MOB-ACT-07`).

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-MOB-INC-CREATE-PACK-01 | **CLOSED** · packKind=`screen` full `#sc-inc-form` |
| GAP-MOB-INC-CREATE-SHEET-01 | **OUT** · `#sheet-incident` không ship |
| GAP-MOB-INC-CREATE-MEDIA-01 | P1 Create **không** `media[]` · optional uploads/detect · Title/AssetLabel/Description bind · T-BE expand media trên Incident nếu Signed · Step 4b **pending TL** |
| GAP-MOB-INC-CREATE-CHK-01 | Checklist = local `asset-kcht-32` by code + optional `GET integration/asset-types` · **cấm** invent checklist API |
| GAP-MOB-CAM-DETECT-01 | Path giữ `POST ai-vision/detect` · DTO body ảnh/GPS **đã có** · P1 call stub · T-BE service bind frame/GPS nếu cần · **cấm** invent path · Step 4b **pending TL** |
| GAP-MOB-BFF-01 | **Không** — proxy catch-all đủ path domain |
| GAP-MOB-INC-CREATE-ENTRY-01 | Ship pick → form · thay Home/FAB toast/stub |
| GAP-MOB-INC-CREATE-SCR-01 | Ship screen dual |
| GAP-MOB-INC-CREATE-ASSET-01 | WalletCard required |
| GAP-MOB-INC-CREATE-KIND-01 | Pills Hư/Mất/Hỏng closed set |
| GAP-MOB-INC-CREATE-PHOTO-01 | PhotoRow + still capture |
| GAP-MOB-INC-CREATE-AI-01 | aiRow bind detect / empty SSOT |
| GAP-MOB-INC-CREATE-LOC-01 | GPS chốt · deny gate |
| GAP-MOB-INC-CREATE-SEV-01 | Select closed 4 · default Cao |
| GAP-MOB-INC-CREATE-DESC-01 | Textarea → Description |
| GAP-MOB-INC-CREATE-CTA-01 | POST incident + toast SC-* |
| GAP-MOB-INC-CREATE-SEC-01 | cam-patrol / estimate / offline draft |
| GAP-MOB-REAL-01 | §B = BFF table only |
| GAP-TAB-01 | Tab 5 shell **giữ** · pack `tabs: none` · home active |
| GAP-MOB-ACT-01/02/05/06/07 | 1 slug · không gộp sibling · kit toast/modal · không enqueue |
| GAP-MOB-ALIGN-01 | iOS + Android cùng copy · Android back icon-only OK |
| GAP-SA-STORE-01 | Camera + location **đã declare** · Dev verify PrivacyInfo/Play · **cấm** localhost/LAN · no iPad listing claim |
| Step 4b / T-BE-* | **Pending TL** — không chạy turn SA |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature UI | `Presentation/Features/IncidentCreate/*` (pick gate + screen + WalletCard + kind + checklist + PhotoRow + severity + GPS deny) | `presentation/feature/incidentcreate/*` |
| Entry wire | Home quick / FAB / asset-type CTA → `startIncidentPick()` | same |
| Use case | asset-types fetch · `GetCurrentLocationUseCase` · optional `DetectAiVisionUseCase` · `CreateIncidentUseCase` · optional uploads · optional sessions · camera capture · checklist local | same |
| Location | `CoreLocationReader` | `AndroidLocationReader` |
| Camera | AVFoundation still | CameraX ImageCapture |
| Repo | asset-types · `IncidentRepository` · optional `AiVisionRepository.detect` (+ uploads) · optional `PatrolRepository*` · offline enqueue incident | same |
| Mapper / copy | `IncidentCreateCopy` VN SSOT Design | same |
| State | pickMode · selectedAsset · kind · photos · gps · detection? · severity · description · checklist ticks · busy · showGpsDeny · cameraPermission | same |
| Shell | `AppRouter` home tab dưới screen | `MainTabScreen` / nav host |
| Store | camera + location already · verify PrivacyInfo/Play | same |
| DI | `AppContainer` | Hilt |

**Cấm** WebView HTML · watermark Gói · device label · native alert · invent incident-create API slug · continuous finder · invent checklist API · open Create không asset.

### Delta Dev (role sau — không implement turn SA)

1. Ship screen dual theo Design / html-to-native-map / copy VN / WalletCard / kind pills / checklist / PhotoRow / severity / CTA.
2. Wire entry pick `startIncidentPick()` · GET asset-types · GPS live · GPS deny + !asset gate Create.
3. Optional detect POST · aiRow bind · Create POST incident hoặc `OfflineQueueKind.incident` · Draft queue · **cấm** fake 200/SC.
4. Secondary nav cam-patrol / estimate · **cấm** sibling CRUD / sheet.
5. Verify camera/location privacy claims · Play Data safety.
6. Verify builds: xcodegen + xcodebuild dest **iPhone 17 Pro** · `assembleDebug` · BFF `dotnet build`.

### Tasks đề xuất (TL)

| ID | Owner | Note |
|----|-------|------|
| `T-IOS-INC-CREATE` | Dev iOS | pick + screen + WalletCard + kind + PhotoRow + GPS + severity + detect/create/draft/offline + entry wire |
| `T-AND-INC-CREATE` | Dev Android | parity dual + CameraX still + checklist |
| `T-BE-INC-CREATE-MEDIA-API` | T-BE | optional Signed — media trên Incident Create · **cấm** invent path riêng |
| `T-BE-INC-CREATE-DETECT-BIND` | T-BE | Detect service bind ImageBase64/Lat/Lng trên đúng `POST ai-vision/detect` nếu stub chưa |
| `T-BE-INC-CREATE-MIG` | T-BE | chỉ nếu cần cột entity mới · `/database-migration` |
| `T-BFF-*` | — | **n/a** · proxy catch-all đủ |

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `incident-create` / **`screen`** |
| solution_confirm | **approve** |
| BFF | `GET integration/asset-types` live · `GET patrol/sessions` optional live · `POST ai-vision/detect` live stub · `POST ai-vision/uploads` live · `POST incident/incidents` live · **GAP-MOB-INC-CREATE-MEDIA-01** · **GAP-MOB-INC-CREATE-CHK-01** · **GAP-MOB-CAM-DETECT-01** Step 4b **pending TL/T-BE** |
| Tasks đề xuất | `T-IOS-INC-CREATE` · `T-AND-INC-CREATE` · `T-BE-INC-CREATE-MEDIA-API` · `T-BE-INC-CREATE-DETECT-BIND` · `T-BE-INC-CREATE-MIG` (nếu cần) |
| Kit | reuse TopBar / WalletCard / Segment / ListRow / Select / TextArea / Primary / Secondary / Toast · PhotoRow + CheckboxList = compose (**approve**) |
| Delta Dev | pick + screen · WalletCard · kind · checklist · PhotoRow · GPS · severity · detect stub · create/draft queue · dual parity · entry wire |
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
| generatedAt | `2026-08-29T00:40:29.000Z` |
| versionGate | rechecked |
| contentHash | sha256:incident-create-control-hint-20260829 |
| realDataHash | sha256:incident-create-real-data-20260829 |
| bffContentHash | sha256:incident-create-mobile-bff-20260829 |
| actionTreeHash | sha256:incident-create-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
