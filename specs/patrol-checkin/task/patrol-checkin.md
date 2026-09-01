# TL — Tasks — patrol-checkin (Ghi điểm tuần)

| Field | Value |
|-------|-------|
| feature | `patrol-checkin` |
| title | [Mobile] [Tuần đường] -> Ghi điểm tuần |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`sheet`** (PO + Design + SA confirm) |
| stack | `native_dual` |
| thisAction | **Ghi điểm tuần** `DES-MOB-PAT-CHECKIN-SHEET` (+ read `DES-MOB-CI-DETAIL`) only · **cấm** gộp pin CTA / map host (`GAP-MOB-ACT-02`) |
| route_confirm | **route_a** (autoApprove=ON) · entry hub `#sc-patrol-home` + map `#sc-patrol-map` + pin handoff `openSheet('checkin')` reuse · deep link n/a P1 · pack `tabs: none` · shell Tab 5 **giữ** |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `PatrolCheckInController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Patrol · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_87205a40` · solution_confirm=approve · GAP-MOB-BFF-01 |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual proto · `ui/review/demo-parity.md` · `task_34eb58bb` |
| prior · po | **confirmed** · `po/requirement.md` · `task_10f5eb97` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-checkin-*.md` · contentHash `sha256:patrol-checkin-control-hint-20260828` · bffContentHash `sha256:patrol-checkin-mobile-bff-20260828` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_c4343b55` |
| updatedAt | `2026-08-28T20:12:00.000Z` |

**Cấm:** gộp `patrol-pin` form / map host (`GAP-MOB-ACT-02`) · invent `api/v1/patrol-checkin` · fake lat/lng · fake HTTP 200 khi POST MISSING · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · `mfeStdUrl` · gộp iOS+Android 1 task id · gộp submit/camera/leave/detail thành sibling (`GAP-MOB-ACT-07`) · chạy Step 4b / migration / e2e ở role TL · implement native code ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — sheet owner `patrol-checkin` · entry reuse hub/map/pin · không tab mới · không deep link P1 |
| `kit_skip` | **yes** — BottomSheet / TextField / TextArea / Primary / Secondary / Toast / TopBar / camera `#i-camera` đã map (`ui/html-to-native-map.md`) · **cấm** `T-KIT-*` |
| `T-BE-*` | **yes** — `T-BE-PAT-CI-API` (GAP-MOB-BFF-01) · `T-BE-PAT-CI-MIG` conditional · **không** chạy Step 4b / migration ở turn TL |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-PAT-CI` | iOS | SA confirmed · kit_skip · Design dual | `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` | Ship `DES-MOB-PAT-CHECKIN-SHEET` + `DES-MOB-CI-DETAIL` · GPS match 50 m · camera · leave/GPS deny · POST/queue · wire hub/map/pin entry |
| `T-AND-PAT-CI` | Android | SA confirmed · kit_skip · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` | Compose parity dual · label **Ảnh** · same BFF/GPS/camera/offline |
| `T-BE-PAT-CI-API` | BE | SA GAP-MOB-BFF-01 | `/new-endpoint` (Dev/T-BE turn) · **cấm** TL chạy | `POST api/v1/patrol/sessions/{id}/check-ins` trên `PatrolSessionsController` · body SSOT · **cấm** invent slug |
| `T-BE-PAT-CI-MIG` | BE | audit schema | `/database-migration` (Dev/T-BE turn · chỉ nếu entity mới) · **cấm** TL chạy | Child check-ins table/entity nếu cần · **cấm** nhét JSON vào `PatrolSession.Note` |
| `T-BFF-*` | — | — | — | **N/A** · proxy catch-all |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-PAT-CI`) → `/agent-dev-android` (`T-AND-PAT-CI`) · T-BE có thể song song (khác lock scope=be) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling submit/camera/leave/detail.

---

## Source map (cite live paths)

### T-IOS-PAT-CI

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/PatrolCheckIn/*` — sheet + detail + leave · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/PatrolHome/PatrolHomeViewModel.swift` · `setOpenCheckIn` / `.checkIn` (thay toast stub) · `PatrolMapViewModel` `.checkIn` · pin handoff `openSheet('checkin')` |
| Router | `App/AppRouter.swift` · `patrolHomeViewModel.setOpenCheckIn` hiện toast stub → mở sheet owner |
| Use cases | reuse `FetchPatrolSessionsUseCase` · `GetCurrentLocationUseCase` · **new** `SubmitPatrolCheckInUseCase` · camera capture use case |
| Location | `CoreLocationReader` · `LocationReading` · haversine `MATCH_RADIUS_M = 50` |
| Repo / offline | `PatrolRepository*` · `OfflineQueueStore` · `OfflineQueueKind.checkIn` (`Domain/Entities/PatrolOfflineModels.swift`) |
| DTO / mapper | `Data/Dto/PatrolDto.swift` · `PatrolDtoMapper.active` · POST body SSOT |
| Deny / leave | reuse `Presentation/Shared/GpsDenyModal.swift` · in-app leave `DES-MOB-LEAVE` · **cấm** `UIAlertController` |
| Copy | `Presentation/Shared/LinmCopy.swift` — keys sheet/match/toast/leave/detail VN SSOT Design |
| DI | `App/AppContainer.swift` inject submit + location + sessions |
| ssot.zones | `DES-MOB-PAT-CHECKIN-SHEET` · `DES-MOB-LOC-MISMATCH` · `DES-MOB-LEAVE` · `DES-MOB-GPS-DENY` · `DES-MOB-CI-DETAIL` |
| kit | `LinmBottomSheet` · `LinmTextField` · `LinmTextArea` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · PhotoRow / `LinmIconButton` `#i-camera` · `LinmTopBar` · typography `LinmTokens` label/banner/toast **13** · field/button **≥16** (`GAP-TYP-01`) · cite `ui/html-to-native-map.md` |
| BFF | `GET patrol/sessions` (+ optional `{id}`) · `POST patrol/sessions/{id}/check-ins` wire sẵn · base `{BffBase}/mobile-bff/api/v1` · khi MISSING/offline → enqueue `OfflineQueueKind.checkIn` · **cấm** fake 200 · **cấm** invent `patrol-checkin` path |

### T-AND-PAT-CI

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/patrolcheckin/*` — sheet + detail + leave |
| Entry wire | `presentation/feature/patrolhome/PatrolHomeViewModel.kt` · `setOpenCheckIn` / `CheckIn` (thay toast) · `patrolmap` `CheckIn` · pin handoff |
| Use cases | reuse `FetchPatrolSessionsUseCase` · `GetCurrentLocationUseCase` · **new** `SubmitPatrolCheckInUseCase` · camera |
| Location | `AndroidLocationReader` · haversine radius 50 |
| Repo / offline | `PatrolRepository` · `data/local/OfflineQueueStore.kt` · `OfflineQueueKind.CheckIn` |
| Deny / leave | reuse `presentation/feature/shared/GpsDenyDialog.kt` · in-app leave · **cấm** system `AlertDialog` raw |
| Copy | `presentation/copy/LinmCopy.kt` parity VN · section-label **Ảnh** |
| DI | Hilt · permission / camera launchers |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome shell only |
| BFF | same paths · POST/queue parity |

### T-BE-PAT-CI-API

| | |
|--|--|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| Controller | `PatrolSessionsController` — thêm action Kind E `POST …/sessions/{id}/check-ins` |
| Path | `api/v1/patrol/sessions/{id}/check-ins` (CTX) · **cấm** invent `api/v1/patrol-checkin` / dedicated invent controller slug |
| Body SSOT | `planPointLabel` · `route` · `lat`·`lng`·`accuracyM` · `distanceToPlanM`·`matchOk` · `content` · `photoLocalIds[]` |
| BFF | **không** clone controller — catch-all proxy đủ |
| Skills (Dev turn) | `/new-endpoint` · api-endpoint · company-field · no-parent-json-field |
| TL turn | **pack only** · **cấm** Step 4b / implement |

### T-BE-PAT-CI-MIG

| | |
|--|--|
| Status | **conditional** — chỉ nếu audit cần entity/table check-ins mới |
| Skill (Dev turn) | `/database-migration` · `/implement-shared-table` (`share_pending_tbe`) |
| Hard | **cấm** nhét JSON parent vào `PatrolSession.Note` · **cấm** assume table name trước audit |
| TL turn | **pack only** · **cấm** chạy migration |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Sheet **Ghi điểm tuần** (`LinmBottomSheet`): nav **Hủy** / **Lưu** · readonly fields · TextArea · PhotoRow · primary **Ghi nhận điểm tuần** · footer **Hủy**.
2. Prefill **Điểm kế hoạch** / **Tuyến / lý trình** từ `GET patrol/sessions` (Status=Đang tuần) · fail/empty → demo SSOT `Km 1561+134 · Phước Dinh` / `QL.1 · Km 1561+134`.
3. Live GPS + haversine vs plan · `MATCH_RADIUS_M=50` · banner `DES-MOB-LOC-MISMATCH` đúng/sai · **cấm** fake lat/lng.
4. `matchOk=false` → disable **Lưu** + **Ghi nhận** · toast **Chặn — không đúng điểm kế hoạch**.
5. GPS deny → `DES-MOB-GPS-DENY` · **không** submit · **cấm** system alert.
6. PhotoRow + `#i-camera` → `openCapture('checkin')` · local URI P1.
7. Submit khi `matchOk`: POST `patrol/sessions/{id}/check-ins` khi live · else `OfflineQueueKind.checkIn` + toast **Đã ghi điểm tuần · …** · **cấm** fake 200.
8. Dirty leave → `DES-MOB-LEAVE` (**Bỏ thay đổi?** / **Tiếp tục sửa**) · leave **trên** sheet (iOS in-sheet · Android `Dialog`) · swipe dirty không ẩn sheet trước confirm · **cấm** under-sheet / orphan leave trên map.
9. Detail `#sc-checkin-detail` cùng slug · banner **Đã lưu** · rows Điểm KH / Cách điểm · back Ca.
10. Dual copy + `#i-camera` + Android label **Ảnh** (`GAP-MOB-ALIGN-01`).
11. Tab 5 shell giữ · pack `tabs: none` (`T-QA-TAB-01`).
12. **Cấm** ship pin form / map host trên pack này.
13. **UI note Dev (edit):** `matchOk=false` → toast chặn only · **không** mở leave; Cancel khi `showGpsDeny`/`showLeave` = no-op.

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew assembleDebug` | debug APK |
| BFF | `dotnet build` `RMMS.Mobile.Bff.csproj` | PASS |
| BE (T-BE) | `dotnet build` WebService khi API/MIG | PASS |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` ở Dev trừ QA · mark Dev done khi build fail.

### Field / kit parity (cite map)

| Field | Kit | Notes |
|-------|-----|-------|
| sheetTitle | `LinmBottomSheet` | Ghi điểm tuần 17 |
| navCancel / btnCancelFooter | TextButton / `LinmSecondaryButton` | leave dirty |
| navSave / btnSave | TextButton / `LinmPrimaryButton` | disable khi sai điểm |
| matchBanner | Banner ok/warn | size 13 · `DES-MOB-LOC-MISMATCH` |
| planPoint / routeChainage / gpsPinned / distPlan | `LinmTextField` | readonly · label 13 / ≥16 |
| content | `LinmTextArea` | editable |
| photos / addPhoto | PhotoRow + `#i-camera` | Android section-label **Ảnh** |
| toastOk / toastBlock | `LinmToast` | 13–16 |
| leave* / gpsDeny* | in-app modal | **cấm** system |
| detail* | `LinmTopBar` + rows | `DES-MOB-CI-DETAIL` |
| typography | `LinmTokens` | `GAP-TYP-01` |

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| CTA / form **Ghim vị trí hiện tại** | sibling `patrol-pin` (handoff only) |
| Map host / basemap / tracks / coverage / kpi | sibling `patrol-map` |
| Invent `api/v1/patrol-checkin` | **cấm** |
| New kit chrome | **cấm** `T-KIT-*` (đã map) |
| Step 4b / migration / e2e | **không** ở TL · T-BE/Dev/QA khi tới lượt |
| Watermark Gói / device label / proto-click | **cấm** |

---

## Handoff

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-PAT-CI`) rồi `/agent-dev-android` (`T-AND-PAT-CI`) · T-BE `T-BE-PAT-CI-API` (+ MIG nếu cần) khi tới lượt |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `patrol-checkin` · store PNG `qa/store/patrol-checkin` · **chỉ** `/agent-qa*` |
| Step 4b | **Pending T-BE** — pack `T-BE-PAT-CI-API` / `T-BE-PAT-CI-MIG` · **cấm** TL chạy |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.29.4 |
| generatedAt | `2026-08-28T20:12:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-control-hint-20260828 |
| bffContentHash | sha256:patrol-checkin-mobile-bff-20260828 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.29.4 versionGate=rechecked -->
