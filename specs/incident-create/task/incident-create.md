# TL — Tasks — incident-create (Ghi sự cố)

| Field | Value |
|-------|-------|
| feature | `incident-create` |
| title | [Mobile] Ghi sự cố |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-INC-CREATE-PACK-01 **closed**) |
| stack | `native_dual` |
| thisAction | **Ghi sự cố** `DES-MOB-INC-FORM` (+ kind `DES-MOB-INC-KIND`) only · entry `startIncidentPick()` → asset pick → `#sc-inc-form` · **cấm** gộp `field-reflect` / `#sheet-incident` / `incident-list` CRUD / web Kind F (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · entry Home quick / FAB `incident-list` / asset-type CTA → `startIncidentPick()` · deep link n/a P1 · pack `tabs: none` · shell Tab 5 **giữ** · tab **`home`** active |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `IncidentCreateController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Incident + Integration + AiVision + optional Patrol · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_497ffbf0` · solution_confirm=approve |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_706e535d` |
| prior · po | **confirmed** · `po/requirement.md` · `task_4dd8f7a1` |
| prior · data_analy | **confirmed** · `_data-analy/incident-create-*.md` · contentHash `sha256:incident-create-control-hint-20260829` · realDataHash `sha256:incident-create-real-data-20260829` · bffContentHash `sha256:incident-create-mobile-bff-20260829` · actionTreeHash `sha256:incident-create-action-tree-20260829` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_ff5ed868` |
| updatedAt | `2026-08-29T00:45:30.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/incident-create` / `IncidentCreateController` · invent checklist API (`GAP-MOB-INC-CREATE-CHK-01`) · fake lat/lng · fake HTTP 200 / fake SC khi POST fail · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · badge P1/P2 header · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue Create/Draft/kind/photo/detect/checklist/pick (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e ở role TL · implement native code ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — screen owner `incident-create` · entry reuse Home/FAB/asset CTA → pick → form · không tab mới · không deep link P1 |
| `kit_skip` / PhotoRow+Checkbox | TopBar / WalletCard / Segment / ListRow / Select / TextArea / Primary / Secondary / Toast / GPS deny **đã map** · PhotoRow + CheckboxList = **compose pattern** (`kit_missing_confirm` **approve** · Design/SA) · **cấm** `T-KIT-*` |
| `T-BE-*` | **yes (optional Signed)** — `T-BE-INC-CREATE-MEDIA-API` (GAP-MOB-INC-CREATE-MEDIA-01) · `T-BE-INC-CREATE-MIG` **conditional** · Detect bind **LIVE** → `T-BE-INC-CREATE-DETECT-BIND` **n/a** · **không** chạy Step 4b / migration ở turn TL |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ path |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Tab 5 · tab **`home`** → Home quick **Ghi sự cố** (và/hoặc FAB `#sc-incident-list` · CTA asset-type) → `startIncidentPick()` → banner + asset-types grid → `openIncidentForm(code)` → **push** `#sc-inc-form` `DES-MOB-INC-FORM` (thay toast stub). Back → `go('asset-type')` / pop pick (iOS label **Thông tin tài sản** · Android icon-only OK). Kind / photo / detect / checklist / severity / Create / Draft = **cùng slug**. Pack `tabs: none` · shell Tab 5 **giữ**. Secondary `cam-patrol` / `estimate` = nav reuse · **không** enqueue. |
| route_b / route_c | — không dùng |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `kit_skip=yes` · `2026-08-29T00:45:30.000Z`.

---

## Live gap (TL audit 2026-08-29)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-inc-form` | **DELTA** — `HomeViewModel.quickIncident` → toast stub · **chưa** feature screen / pick | **T-IOS-INC-CREATE** |
| Android `#sc-inc-form` | **DELTA** — `HomeViewModel` quick-incident → toast stub | **T-AND-INC-CREATE** |
| `GET integration/asset-types` | BE + Mobile.Bff proxy live · `IntegrationRepository` iOS live | **reuse** · pick grid + AssetLabel + optional checklist host |
| `GET patrol/sessions` | live | **optional** P1 · prefill Route / Km |
| `POST ai-vision/detect` | live stub · `DetectAiVisionRequest` **đã có** ImageBase64/Lat/Lng/AccuracyM/VideoRef · `DetectStubAsync` **đã bind** ảnh→ImageUrl + Lat/Lng | **wire P1** từ app · **T-BE-INC-CREATE-DETECT-BIND = n/a** (audit LIVE) |
| `POST ai-vision/uploads` (+ object) | live | **optional** P1 trước detect khi ready |
| `POST incident/incidents` | live Create · **không** `media[]` trên `CreateIncidentRequest` | **reuse** · Create bind asset + GPS + kind + Severity + Description · **GAP-MOB-INC-CREATE-MEDIA-01** → T-BE optional |
| Checklist API | **không** | Local `asset-kcht-32` by asset `code` · **cấm** invent · **GAP-MOB-INC-CREATE-CHK-01** |
| Offline queue | `OfflineQueueKind.incident` live | Create fail / Draft → enqueue · sibling `patrol-offline` |
| Camera / location privacy | Info.plist `NSCameraUsageDescription` + location **đã có** · Android `CAMERA` + `ACCESS_FINE_LOCATION` **đã có** | Dev verify PrivacyInfo / Play (`GAP-SA-STORE-01`) |
| Kit TopBar/WalletCard/Segment/ListRow/Select/TextArea/Buttons/Toast/GPS deny | dual map | **reuse** · PhotoRow + CheckboxList compose · **cấm** `T-KIT-*` |
| Detect/Create use cases | live từ peer `cam-patrol` / `field-reflect` | **reuse** `DetectAiVisionUseCase` · `CreateIncidentUseCase` · **cấm** fork DTO |
| Sibling field-reflect / `#sheet-incident` / list CRUD | out of pack | **cấm** ship / start |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-INC-CREATE` | iOS | SA confirmed · kit_skip · Design dual · route_a | `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` | Ship pick + `DES-MOB-INC-FORM` + `DES-MOB-INC-KIND` · WalletCard · PhotoRow still · GPS · checklist local · severity · detect/create/draft/offline · wire Home/FAB/asset CTA |
| `T-AND-INC-CREATE` | Android | SA confirmed · kit_skip · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` | Compose parity dual · CameraX ImageCapture · checklist · same BFF/GPS/offline |
| `T-BE-INC-CREATE-MEDIA-API` | BE | SA GAP-MOB-INC-CREATE-MEDIA-01 · **Signed** | `/new-endpoint` (expand CreateIncident · **không** invent path) · **cấm** TL chạy | Optional Signed — media trên `CreateIncidentRequest` / Incident · **cấm** invent `api/v1/incident-create` · P1 app **không** block (Create không media[]) |
| `T-BE-INC-CREATE-DETECT-BIND` | BE | — | — | **N/A** · audit LIVE — stub đã bind ImageBase64/Lat/Lng trên **đúng** `POST api/v1/ai-vision/detect` |
| `T-BE-INC-CREATE-MIG` | BE | only if Signed media cần cột entity | `/database-migration` · **cấm** TL chạy | Conditional · **cấm** invent `rmms_incident_create_*` · **cấm** invent checklist bảng |
| `T-BFF-*` | — | — | — | **N/A** · proxy catch-all |
| `T-KIT-*` | — | — | — | **N/A** · kit reuse + PhotoRow/Checkbox compose |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **home** active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| `T-QA-INC-CREATE` | QA | T-IOS · T-AND | `/agent-qa-mobile` | Maestro slug `incident-create` · `yarn e2e-qa-mobile` · store PNG `qa/store/incident-create` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-INC-CREATE`) → `/agent-dev-android` (`T-AND-INC-CREATE`) · T-BE-MEDIA chỉ khi Signed (khác lock scope=be) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling.

---

## Source map (cite live paths)

### T-IOS-INC-CREATE

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/IncidentCreate/*` — pick gate + screen + WalletCard + kind pills + PhotoRow + detect/severity/location + checklist + GPS deny · **cấm** WebView HTML · **cấm** continuous finder |
| Entry wire | `Presentation/Features/Home/HomeViewModel.swift` — `.quickIncident` **thay toast** → `startIncidentPick()` · FAB / asset-type CTA cùng owner khi live · **cấm** reimplement Home chrome |
| Router | `App/AppRouter.swift` · home tab dưới screen |
| Use cases | reuse `FetchAssetTypes` / Integration · `GetCurrentLocationUseCase` · `DetectAiVisionUseCase` · `CreateIncidentUseCase` · optional uploads · optional `FetchPatrolSessionsUseCase` · still camera capture · checklist local by code |
| Location | `CoreLocationReader` · `LocationReading` · stamp «đã chốt» · deny → `DES-MOB-GPS-DENY` · **chặn** Create |
| Camera | AVFoundation **still** takePicture · PhotoRow `#i-camera` · **không** AVCapture continuous finder |
| Repo / offline | `IntegrationRepository*` · `IncidentRepository` · `AiVisionRepository.detect` (+ uploads optional) · optional `PatrolRepository*` · `OfflineQueueStore` · `OfflineQueueKind.incident` |
| Deny | reuse `Presentation/Shared/GpsDenyModal.swift` · **cấm** `UIAlertController` |
| Copy | VN SSOT Design · toast Create `Code` · toast draft · toast pick |
| Store privacy | Info.plist camera + location **đã có** · verify PrivacyInfo |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-INC-FORM` · `DES-MOB-INC-KIND` · `DES-MOB-GPS-DENY` · `#sc-inc-form` |
| kit | `LinmTopBar` · `LinmWalletCard` · `LinmSegment`/pills · `LinmListRow` · `LinmSelect` · `LinmTextArea` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell · PhotoRow + CheckboxList **compose** · typography `LinmTokens` label **13** · value/button **≥16** (`GAP-TYP-01`) · cite `ui/html-to-native-map.md` |
| BFF | `GET integration/asset-types` · optional `GET patrol/sessions` · optional `POST ai-vision/uploads` · `POST ai-vision/detect` · `POST incident/incidents` · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent `incident-create` path · **cấm** fake 200/SC |

### T-AND-INC-CREATE

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/incidentcreate/*` — pick + screen + WalletCard + kind + PhotoRow + card + checklist + GPS deny |
| Entry wire | `presentation/feature/home/HomeViewModel.kt` · quick-incident thay toast · FAB / asset CTA cùng owner |
| Use cases | same dual · Detect + CreateIncident + location + still camera + checklist + asset-types |
| Location | `AndroidLocationReader` |
| Camera | CameraX `ImageCapture` · permission `CAMERA` + Play Data safety |
| Repo / offline | same paths · `OfflineQueueKind.Incident` |
| Deny | reuse `presentation/feature/shared/GpsDenyDialog.kt` · **cấm** system raw AlertDialog product |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK |
| DI | Hilt |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | same paths · offline parity |

### T-BE-INC-CREATE-MEDIA-API (optional Signed)

| | |
|--|--|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| Controller | `IncidentsController.Create` — **giữ** path `POST api/v1/incident/incidents` |
| Request expand | `CreateIncidentRequest` (+ entity nếu cần) — media refs / `media[]` khi Signed · **cấm** invent `POST incident-create/*` |
| BFF | **không** clone controller — catch-all proxy đủ |
| Skills (Dev turn) | `/new-endpoint` · api-endpoint · company-field · no-parent-json-field · `/implement-shared-table` (`share_na`) |
| TL turn | **pack only** · **cấm** Step 4b / implement |
| P1 app | Create **không** gửi media[] · optional `POST ai-vision/uploads` riêng · **không** block native P1 |

### T-BE-INC-CREATE-DETECT-BIND

| | |
|--|--|
| Status | **N/A (LIVE)** — `DetectAiVisionRequest` + `DetectStubAsync` đã bind ImageBase64 → ImageUrl + Lat/Lng trên `POST api/v1/ai-vision/detect` (peer cam-patrol / field-reflect) · **không** pack task mới |
| App P1 | gửi Engine/Note + ImageBase64/Lat/Lng/AccuracyM khi có ảnh/GPS |

### T-BE-INC-CREATE-MIG

| | |
|--|--|
| Status | **conditional** — chỉ nếu Signed media cần cột entity mới · **cấm** invent bảng `rmms_incident_create_*` · **cấm** invent checklist schema API |
| Skill (Dev turn) | `/database-migration` · **cấm** parent JSON |
| TL turn | **pack only** · **cấm** chạy migration |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Ghi sự cố** full (`DES-MOB-INC-FORM`): nav back → asset-type/pick · title fixed · WalletCard · kind pills · checklist · PhotoRow · aiRow · loc · severity · mô tả · CTA Create + secondary · toast · **cấm** bottom-sheet chrome · **cấm** badge P1/P2 header · **cấm** `#sheet-incident`.
2. Entry pick: `startIncidentPick()` → banner + grid 32 · click → `openIncidentForm(code)` · thiếu chọn → toast pick · **cấm** enqueue pack pick · **cấm** open Create không asset.
3. WalletCard **TÀI SẢN ĐÃ CHỌN** bind code · title/sub từ catalog · **chặn** Create nếu chưa chọn TS (`GAP-MOB-INC-CREATE-ASSET-01`).
4. Kind pills Hư/Mất/Hỏng (`DES-MOB-INC-KIND`) · single select · default **Hư** · filter checklist · **cấm** invent loại ngoài closed set 3.
5. Checklist local by asset `code` từ `asset-kcht-32` (+ optional host asset-types) · ticks + mô tả → Create `Description` join · **cấm** invent checklist API (`GAP-MOB-INC-CREATE-CHK-01`).
6. PhotoRow + still camera `#i-camera` · permission deny → toast/block detect · **cấm** fake detection · **không** continuous finder (`cam-patrol`).
7. aiRow: empty SSOT OK · optional `POST ai-vision/detect` sau ảnh · bind `DetectionId` / DefectClass · fail → toast · **cấm** fake «Ổ gà».
8. Loc: device GPS «đã chốt» · optional sessions Route/Km · deny → `DES-MOB-GPS-DENY` · **chặn** Create · **cấm** fake lat/lng.
9. Severity select closed 4 · default **Cao** · **cấm** invent severity API.
10. Create: asset + HasGps → `POST incident/incidents` bind kind + GPS + Severity + Description (+ DetectionId) · toast **Đã tạo vấn đề {Code} · gắn tài sản đã chọn** · fail/offline → `OfflineQueueKind.incident` + toast nháp · **cấm** invent SC · **cấm** fake 200.
11. Draft: enqueue incident · toast **Nháp mất sóng** · reuse sibling `patrol-offline` · **cấm** fake 200/SC.
12. Secondary: **Thu thập bằng camera** → `cam-patrol` · **Giao việc xử lý** → `estimate` · **cấm** enqueue / reimplement sibling.
13. Entry Home quick (thay toast) · FAB / asset CTA cùng owner · **cấm** reimplement Home chrome.
14. Kit reuse map · PhotoRow/Checkbox compose · **cấm** system alert · **cấm** watermark Gói / device label.
15. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
16. Tab 5 shell giữ · pack `tabs: none` · tab **home** active (`T-QA-TAB-01`).
17. Store: verify camera + location privacy claims trước ship (`GAP-SA-STORE-01`) · **cấm** localhost/LAN in solution · **cấm** iPad listing claim.
18. **Cấm** ship sibling surfaces trên pack này (`field-reflect` · `#sheet-incident` · list CRUD).

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack / title | `LinmTopBar` | iOS back **Thông tin tài sản** · Android icon-only |
| assetCard | `LinmWalletCard` | TÀI SẢN ĐÃ CHỌN · required Create |
| kindPills | `LinmSegment` / pills | Hư/Mất/Hỏng · default Hư |
| checklist | CheckboxList compose | by asset code · filter by kind |
| photos / addPhoto | PhotoRow compose + camera | still · `#i-camera` |
| aiRow / location | `LinmListRow` / readonly field | label 13 · value ≥16 |
| severity | `LinmSelect` | closed 4 · default Cao |
| description | `LinmTextArea` | placeholder SSOT |
| btnCreate | `LinmPrimaryButton` | disable khi !asset / !HasGps / deny |
| btnCam / btnAssign / btnDraft | `LinmSecondaryButton` | cam-patrol / estimate / queue |
| toastOk / toastDraft / toastPick | `LinmToast` | 13–16 · **cấm** alert |
| gpsDeny* | modal reuse | `DES-MOB-GPS-DENY` |
| pickBanner / assetGrid | entry pick | GET asset-types · 3 cột stretch · `LinmAssetKchtPict` 36 · **cấm** GridView (`GAP-MOB-INC-PICK-ALIGN-01`) |
| typography | `LinmTokens` | `GAP-TYP-01` |

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew :app:assembleDebug` | debug APK |
| BFF | `dotnet build` `RMMS.Mobile.Bff.csproj` | PASS |
| BE (T-BE) | `dotnet build` WebService khi MEDIA/MIG Signed | PASS |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` ở TL · mark Dev done khi build fail.

### API contract (from SA — cite only)

| Action | App path | Notes |
|--------|----------|-------|
| Catalog | `GET integration/asset-types` | pick + AssetLabel + optional host CHK |
| Prefill (optional) | `GET patrol/sessions?page=1&pageSize=50` | client filter Đang tuần |
| Media (optional) | `POST ai-vision/uploads` · `PUT …/uploads/{id}/object` | trước detect khi ready |
| Detect | `POST ai-vision/detect` | ImageBase64/Lat/Lng khi có · stub LIVE |
| Create | `POST incident/incidents` | Title/AssetLabel · IncidentType · Severity · Route/Km · HasGps · DetectionId · Description · Status · RequestedAt |
| Draft / GPS / camera / kind / checklist | — | device / local · queue |

**Cấm** invent `api/v1/incident-create`.

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| `#sheet-incident` / DES-MOB-INC-CREATE-SHEET | **OUT** · GAP-MOB-INC-CREATE-SHEET-01 |
| field-reflect (Ghi nhận hư hỏng) | sibling · **cấm** gộp |
| incident-list CRUD / assign / close | sibling · FAB chỉ entry pick |
| Thu thập bằng camera (finder) | sibling `cam-patrol` (secondary nav only) |
| Giao việc xử lý UI | sibling `estimate` (secondary nav only) |
| Offline sync UI | sibling `patrol-offline` (reuse queue only) |
| Invent `IncidentCreateController` / `api/v1/incident-create` | **cấm** |
| Invent checklist API / schema | **cấm** (`GAP-MOB-INC-CREATE-CHK-01`) |
| New kit chrome package | **cấm** `T-KIT-*` (PhotoRow/Checkbox = compose) |
| Step 4b / migration / e2e | **không** ở TL · T-BE/Dev/QA khi tới lượt |
| Watermark Gói / device label / proto-click | **cấm** |

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-INC-CREATE`) rồi `/agent-dev-android` (`T-AND-INC-CREATE`) · T-BE `T-BE-INC-CREATE-MEDIA-API` (+ MIG nếu Signed) khi tới lượt |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-create/ui/prototype/{ios,android}/index.html` · ship `?ship=1` · deny `?deny=1` · pick `?pick=1` |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `incident-create` · store PNG `qa/store/incident-create` · **chỉ** `/agent-qa*` |
| Step 4b | **Pending T-BE Signed** — pack `T-BE-INC-CREATE-MEDIA-API` / `T-BE-INC-CREATE-MIG` · Detect bind **LIVE** · **cấm** TL chạy · **cấm** invent checklist API |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/incident-create.md | **PASS** · T-IOS-INC-CREATE · T-AND-INC-CREATE · T-BE-INC-CREATE-MEDIA-API (optional) · T-BE-INC-CREATE-DETECT-BIND **n/a LIVE** · T-BE-INC-CREATE-MIG conditional · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read abs · hashes khớp · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có · autoApprove route_a |
| Kit | **PASS** · reuse map · PhotoRow/Checkbox compose · T-KIT **n/a** |
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
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T00:45:30.000Z` |
| versionGate | rechecked |
| contentHash | sha256:incident-create-control-hint-20260829 |
| realDataHash | sha256:incident-create-real-data-20260829 |
| bffContentHash | sha256:incident-create-mobile-bff-20260829 |
| actionTreeHash | sha256:incident-create-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
