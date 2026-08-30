# TL — Tasks — field-reflect (Ghi nhận hư hỏng)

| Field | Value |
|-------|-------|
| feature | `field-reflect` |
| title | [Mobile] [Tuần đường] -> Ghi nhận hư hỏng |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`screen`** (PO + Design + SA confirm · GAP-MOB-FIELD-PACK-01 **closed**) |
| stack | `native_dual` |
| thisAction | **Ghi nhận hư hỏng** `DES-MOB-FIELD-REFLECT` (+ kind `DES-MOB-FIELD-KIND`) only · **cấm** gộp `cam-patrol` / `inc-form` / `#sheet-incident` / `cam-view` / `camera-connect` / `ai-asset-detect` (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · entry hub `#sc-patrol-home` `#row-reflect` `#i-camera` · deep link n/a P1 · pack `tabs: none` · shell Tab 5 **giữ** · tab **`field`** active |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `FieldReflectController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol + AiVision + Incident + Integration · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_f5ff9463` · solution_confirm=approve |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_06d4623f` |
| prior · po | **confirmed** · `po/requirement.md` · `task_d6774c35` |
| prior · data_analy | **confirmed** · `_data-analy/field-reflect-*.md` · contentHash `sha256:field-reflect-control-hint-20260829` · realDataHash `sha256:field-reflect-real-data-20260829` · bffContentHash `sha256:field-reflect-mobile-bff-20260829` · actionTreeHash `sha256:field-reflect-action-tree-20260829` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_387eac33` |
| updatedAt | `2026-08-28T22:30:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/field-reflect` / `FieldReflectController` · invent checklist API (`GAP-MOB-FIELD-CHK-01`) · fake lat/lng · fake HTTP 200 / fake SC khi POST fail · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · badge P1/P2 header · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue Create/Draft/kind/photo/detect/checklist (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e ở role TL · implement native code ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — screen owner `field-reflect` · entry reuse hub `#row-reflect` · không tab mới · không deep link P1 |
| `kit_skip` / PhotoRow+Checkbox | TopBar / KindPills / ListRow / Primary / Secondary / Toast / GPS deny **đã map** · PhotoRow + CheckboxList = **compose pattern** (`kit_missing_confirm` **approve** · Design) · **cấm** `T-KIT-*` |
| `T-BE-*` | **yes (optional Signed)** — `T-BE-FIELD-MEDIA-API` (GAP-MOB-FIELD-MEDIA-01) · `T-BE-FIELD-MIG` **conditional** · Detect bind **LIVE** (audit) · **không** chạy Step 4b / migration ở turn TL |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ path |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Có phiên → Tab 5 · tab **`field`** (Tuần đường) → `#sc-patrol-home` → quick **Ghi nhận hư hỏng** `#row-reflect` `#i-camera` → **push** `#sc-field-reflect` `DES-MOB-FIELD-REFLECT` (thay toast stub). Back → `go('patrol-home')` (iOS label **Tuần đường** · Android icon-only OK). Kind / photo / detect / checklist / Create / Draft = **cùng slug**. Pack `tabs: none` · shell Tab 5 **giữ**. |
| route_b / route_c | — không dùng |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `kit_skip=yes` · `2026-08-28T22:30:00.000Z`.

---

## Live gap (TL audit 2026-08-28)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-field-reflect` | **DELTA** — hub quick `field-reflect` → toast stub · **chưa** feature screen | **T-IOS-FIELD-REF** |
| Android `#sc-field-reflect` | **DELTA** — cùng toast/stub entry (`TapQuick` → toast) | **T-AND-FIELD-REF** |
| `GET patrol/sessions` | BE + Mobile.Bff proxy live | **reuse** · prefill Route / Km / active |
| `GET integration/asset-types` | live | **optional** P1 host catalog · checklist rows = local CHK |
| `POST ai-vision/detect` | live stub · `DetectAiVisionRequest` **đã có** ImageBase64/Lat/Lng/AccuracyM/VideoRef · `DetectStubAsync` **đã bind** ảnh→ImageUrl + Lat/Lng | **wire P1** từ app · **T-BE-FIELD-DETECT-BIND = n/a** (audit LIVE) |
| `POST ai-vision/uploads` (+ object) | live | **optional** P1 trước detect khi ready |
| `POST incident/incidents` | live Create · **không** `media[]` | **reuse** · Create bind DetectionId + GPS + kind + Description · **GAP-MOB-FIELD-MEDIA-01** → T-BE optional |
| Checklist API | **không** | Local `asset-kcht-32` PAVEMENT · **cấm** invent · **GAP-MOB-FIELD-CHK-01** |
| Offline queue | `OfflineQueueKind.incident` live | Create fail / Draft → enqueue · sibling `patrol-offline` |
| Camera / location privacy | Info.plist `NSCameraUsageDescription` + location **đã có** · Android `CAMERA` + `ACCESS_FINE_LOCATION` **đã có** | Dev verify PrivacyInfo / Play (`GAP-SA-STORE-01`) |
| Kit TopBar/KindPills/ListRow/Buttons/Toast/GPS deny | dual map | **reuse** · PhotoRow + CheckboxList compose · **cấm** `T-KIT-*` |
| Detect/Create use cases | live từ peer `cam-patrol` | **reuse** `DetectAiVisionUseCase` · `CreateIncidentUseCase` · **cấm** fork DTO |
| Sibling cam-patrol / cam-view / … | out of pack | **cấm** ship / start |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-FIELD-REF` | iOS | SA confirmed · kit_skip · Design dual · route_a | `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` | Ship `DES-MOB-FIELD-REFLECT` + `DES-MOB-FIELD-KIND` · PhotoRow still · GPS · detect/create/draft/offline · checklist local · wire hub `#row-reflect` |
| `T-AND-FIELD-REF` | Android | SA confirmed · kit_skip · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` | Compose parity dual · CameraX ImageCapture · checklist · same BFF/GPS/offline |
| `T-BE-FIELD-MEDIA-API` | BE | SA GAP-MOB-FIELD-MEDIA-01 · **Signed** | `/new-endpoint` (expand CreateIncident · **không** invent path) · **cấm** TL chạy | Optional Signed — media trên `CreateIncidentRequest` / Incident · **cấm** invent `api/v1/field-reflect` · P1 app **không** block (Create không media[]) |
| `T-BE-FIELD-DETECT-BIND` | BE | — | — | **N/A** · audit LIVE — stub đã bind ImageBase64/Lat/Lng trên **đúng** `POST api/v1/ai-vision/detect` |
| `T-BE-FIELD-MIG` | BE | only if Signed media cần cột entity | `/database-migration` · **cấm** TL chạy | Conditional · **cấm** invent `rmms_field_reflect_*` · **cấm** invent checklist bảng |
| `T-BFF-*` | — | — | — | **N/A** · proxy catch-all |
| `T-KIT-*` | — | — | — | **N/A** · kit reuse + PhotoRow/Checkbox compose |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab field active · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| `T-QA-FIELD-REF` | QA | T-IOS · T-AND | `/agent-qa-mobile` | Maestro slug `field-reflect` · `yarn e2e-qa-mobile` · store PNG `qa/store/field-reflect` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-FIELD-REF`) → `/agent-dev-android` (`T-AND-FIELD-REF`) · T-BE-MEDIA chỉ khi Signed (khác lock scope=be) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling.

---

## Source map (cite live paths)

### T-IOS-FIELD-REF

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/FieldReflect/*` — screen + kind pills + PhotoRow + detect/severity/location card + checklist + GPS deny · **cấm** WebView HTML · **cấm** continuous finder |
| Entry wire | `Presentation/Features/PatrolHome/PatrolHomeViewModel.swift` — quick id `field-reflect` **thay toast** → push owner |
| Router | `App/AppRouter.swift` · field tab dưới screen |
| Use cases | reuse `FetchPatrolSessionsUseCase` · `GetCurrentLocationUseCase` · `DetectAiVisionUseCase` · `CreateIncidentUseCase` · optional uploads · still camera capture · checklist local |
| Location | `CoreLocationReader` · `LocationReading` · stamp «đã chốt» · deny → `DES-MOB-GPS-DENY` · **chặn** Create |
| Camera | AVFoundation **still** takePicture · PhotoRow `#i-camera` · **không** AVCapture continuous finder |
| Repo / offline | `PatrolRepository*` · `AiVisionRepository.detect` (+ uploads optional) · `IncidentRepository` · optional asset-types · `OfflineQueueStore` · `OfflineQueueKind.incident` |
| Deny | reuse `Presentation/Shared/GpsDenyModal.swift` · **cấm** `UIAlertController` |
| Copy | VN SSOT Design · toast Create `Code` · toast draft · empty-session banner |
| Store privacy | Info.plist camera + location **đã có** · verify PrivacyInfo |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` · `DES-MOB-GPS-DENY` · `#sc-field-reflect` |
| kit | `LinmTopBar` · `LinmKindPills`/`LinmSegment` · `LinmListRow` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell · PhotoRow + CheckboxList **compose** · typography `LinmTokens` label **13** · value/button **≥16** (`GAP-TYP-01`) · cite `ui/html-to-native-map.md` |
| BFF | `GET patrol/sessions` · optional `GET integration/asset-types` · optional `POST ai-vision/uploads` · `POST ai-vision/detect` · `POST incident/incidents` · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent `field-reflect` path · **cấm** fake 200/SC |

### T-AND-FIELD-REF

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/fieldreflect/*` — screen + kind + PhotoRow + card + checklist + GPS deny |
| Entry wire | `presentation/feature/patrolhome/PatrolHomeViewModel.kt` · quick `field-reflect` thay toast |
| Use cases | same dual · Detect + CreateIncident + location + still camera + checklist |
| Location | `AndroidLocationReader` |
| Camera | CameraX `ImageCapture` · permission `CAMERA` + Play Data safety |
| Repo / offline | same paths · `OfflineQueueKind.Incident` |
| Deny | reuse `presentation/feature/shared/GpsDenyDialog.kt` · **cấm** system raw AlertDialog product |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK |
| DI | Hilt |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | same paths · offline parity |

### T-BE-FIELD-MEDIA-API (optional Signed)

| | |
|--|--|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| Controller | `IncidentsController.Create` — **giữ** path `POST api/v1/incident/incidents` |
| Request expand | `CreateIncidentRequest` (+ entity nếu cần) — media refs / `media[]` khi Signed · **cấm** invent `POST field-reflect/*` |
| BFF | **không** clone controller — catch-all proxy đủ |
| Skills (Dev turn) | `/new-endpoint` · api-endpoint · company-field · no-parent-json-field · `/implement-shared-table` (`share_na`) |
| TL turn | **pack only** · **cấm** Step 4b / implement |
| P1 app | Create **không** gửi media[] · optional `POST ai-vision/uploads` riêng · **không** block native P1 |

### T-BE-FIELD-DETECT-BIND

| | |
|--|--|
| Status | **N/A (LIVE)** — `DetectAiVisionRequest` + `DetectStubAsync` đã bind ImageBase64 → ImageUrl + Lat/Lng trên `POST api/v1/ai-vision/detect` (peer cam-patrol) · **không** pack task mới |
| App P1 | gửi Engine/Note + ImageBase64/Lat/Lng/AccuracyM khi có ảnh/GPS |

### T-BE-FIELD-MIG

| | |
|--|--|
| Status | **conditional** — chỉ nếu Signed media cần cột entity mới · **cấm** invent bảng `rmms_field_reflect_*` · **cấm** invent checklist schema API |
| Skill (Dev turn) | `/database-migration` · **cấm** parent JSON |
| TL turn | **pack only** · **cấm** chạy migration |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Ghi nhận hư hỏng** full (`DES-MOB-FIELD-REFLECT`): nav back → `patrol-home` · title fixed · kind pills · PhotoRow · detect/severity/location card · checklist · CTA Create/Draft · toast · **cấm** bottom-sheet chrome · **cấm** badge P1/P2 header.
2. Kind pills Hư/Mất/Hỏng (`DES-MOB-FIELD-KIND`) · single select · default **Hư** · filter checklist · **cấm** invent loại ngoài closed set 3.
3. PhotoRow + still camera `#i-camera` · permission deny → toast/block detect · **cấm** fake detection · **không** continuous finder (`cam-patrol`).
4. Card rows: Nhận diện bind `DefectClass` (+ surface) · Mức bind `Severity` badge · Vị trí đã chốt = route · Km · ±m từ sessions + **device GPS** · **cấm** fake lat/lng · empty detect OK.
5. Checklist local PAVEMENT `asset-kcht-32` (+ optional host asset-types) · ticks → Create `Description` join · **cấm** invent checklist API (`GAP-MOB-FIELD-CHK-01`).
6. Prefill: `GET patrol/sessions` filter `Status=Đang tuần` · empty → banner «Không có ca đang tuần» · **vẫn** cho draft · GPS **vẫn** chạy · **cấm** fake ca.
7. Optional detect sau ảnh: `POST ai-vision/detect` · fail → toast · **cấm** fake «Ổ gà».
8. Create: HasGps → `POST incident/incidents` bind kind + detect + GPS + Description · toast **Đã tạo vấn đề {Code} · gắn ca tuần** · fail/offline → `OfflineQueueKind.incident` + toast nháp · **cấm** invent SC · **cấm** fake 200 · **chặn** Create nếu GPS deny/chưa chốt.
9. Draft: enqueue incident · toast **Đã lưu nháp · Lưu trữ** · reuse sibling `patrol-offline` · **cấm** fake 200/SC.
10. Entry: hub `#row-reflect` push (thay toast) · **cấm** reimplement hub.
11. Kit reuse map · PhotoRow/Checkbox compose · **cấm** system alert · **cấm** watermark Gói / device label.
12. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
13. Tab 5 shell giữ · pack `tabs: none` · tab field active (`T-QA-TAB-01`).
14. Store: verify camera + location privacy claims trước ship (`GAP-SA-STORE-01`) · **cấm** localhost/LAN in solution · **cấm** iPad listing claim.
15. **Cấm** ship sibling surfaces trên pack này.

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack / title | `LinmTopBar` | iOS back **Tuần đường** · Android icon-only |
| kindPills | `LinmKindPills` / Segment | Hư/Mất/Hỏng · default Hư |
| photos / addPhoto | PhotoRow compose + camera | still · `#i-camera` |
| detectRow / severityRow / locationRow | `LinmListRow` (+ badge) | label 13 · value ≥16 |
| checklist | CheckboxList compose | PAVEMENT SSOT · filter by kind |
| btnCreate | `LinmPrimaryButton` | disable khi !HasGps / deny |
| btnDraft | `LinmSecondaryButton` | local queue |
| toastOk / toastDraft | `LinmToast` | 13–16 · **cấm** alert |
| gpsDeny* | modal reuse | `DES-MOB-GPS-DENY` |
| emptySession | banner | draft OK |
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
| Prefill | `GET patrol/sessions?page=1&pageSize=50` | client filter Đang tuần |
| Catalog (optional) | `GET integration/asset-types` | host · checklist = local CHK |
| Media (optional) | `POST ai-vision/uploads` · `PUT …/uploads/{id}/object` | trước detect khi ready |
| Detect | `POST ai-vision/detect` | ImageBase64/Lat/Lng khi có · stub LIVE |
| Create | `POST incident/incidents` | DetectionId · HasGps · IncidentType · Title/AssetLabel/Severity · Route/Km · Description |
| Draft / GPS / camera / kind / checklist | — | device / local · queue |

**Cấm** invent `api/v1/field-reflect`.

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| Thu thập bằng camera (finder) | sibling `cam-patrol` |
| cam-view / vis-capture / camera-connect / ai-asset-detect / inc-form | siblings · **cấm** gộp |
| Offline sync UI | sibling `patrol-offline` (reuse queue only) |
| Invent `FieldReflectController` / `api/v1/field-reflect` | **cấm** |
| Invent checklist API / schema | **cấm** (`GAP-MOB-FIELD-CHK-01`) |
| New kit chrome package | **cấm** `T-KIT-*` (PhotoRow/Checkbox = compose) |
| Step 4b / migration / e2e | **không** ở TL · T-BE/Dev/QA khi tới lượt |
| Watermark Gói / device label / proto-click | **cấm** |

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-FIELD-REF`) rồi `/agent-dev-android` (`T-AND-FIELD-REF`) · T-BE `T-BE-FIELD-MEDIA-API` (+ MIG nếu Signed) khi tới lượt |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/field-reflect/ui/prototype/{ios,android}/index.html` · ship `?ship=1` · deny `?deny=1` · empty `?empty=1` |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `field-reflect` · store PNG `qa/store/field-reflect` · **chỉ** `/agent-qa*` |
| Step 4b | **Pending T-BE Signed** — pack `T-BE-FIELD-MEDIA-API` / `T-BE-FIELD-MIG` · Detect bind **LIVE** · **cấm** TL chạy · **cấm** invent checklist API |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/field-reflect.md | **PASS** · T-IOS-FIELD-REF · T-AND-FIELD-REF · T-BE-FIELD-MEDIA-API (optional) · T-BE-FIELD-DETECT-BIND **n/a LIVE** · T-BE-FIELD-MIG conditional · route_a · source lock |
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
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-28T22:30:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:field-reflect-control-hint-20260829 |
| realDataHash | sha256:field-reflect-real-data-20260829 |
| bffContentHash | sha256:field-reflect-mobile-bff-20260829 |
| actionTreeHash | sha256:field-reflect-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
