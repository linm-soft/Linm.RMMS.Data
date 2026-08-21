# TL — Tasks — patrol-pin (Ghim vị trí hiện tại)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`sheet`** (CTA/flow · không full hub) |
| stack | `native_dual` |
| thisAction | **Ghim vị trí hiện tại** `DES-MOB-CI-PIN-HERE` only · **cấm** gộp form check-in |
| route_confirm | **route_a** (autoApprove=ON) · entry hub `#sc-patrol-home` + map `#sc-patrol-map` reuse · deep link n/a · pack `tabs: none` · shell Tab 5 **giữ** |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · Step 4b **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_688fe507` · solution_confirm=approve |
| prior · design | **confirmed** · `ui/design.md` · dual proto · `task_463367a8` |
| prior · po | **confirmed** · `po/requirement.md` · `task_6bd56781` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-pin-*.md` · contentHash `sha256:patrol-pin-control-hint-20260821` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` |
| taskId | `task_018ad2c4` |
| updatedAt | `2026-08-21T03:36:23.000Z` |

**Cấm:** gộp `patrol-checkin` form (`GAP-MOB-ACT-02`) · invent `api/v1/patrol-pin` / `POST …/pins` · fake lat/lng · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue sibling check-in (`GAP-MOB-ACT-06/07`).

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — CTA owner trên hub + shared_action map · không tab mới · không deep link P1 |
| `kit_skip` | **yes** — `LinmPrimaryButton` / `LinmMapPinGlyph` / `LinmToast` / `LinmSecondaryButton` đã có · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — SA Step 4b N/A · chỉ `GET patrol/sessions` live |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-PAT-PIN` | iOS | SA confirmed · kit_skip | `/agent-dev-ios` · `/dev-ios-swiftui` | Hub+map CTA pin → live GPS · toast Route±m · deny modal · timeout toast · map `.here`+follow · handoff check-in stub only |
| `T-AND-PAT-PIN` | Android | SA confirmed · kit_skip · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` | Same Compose parity · permission launcher · in-app deny · map reuse |
| `T-BE-PAT-PIN` | — | — | — | **N/A** · không `/new-endpoint` · không `/database-migration` · không BFF controller mới |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · **cấm** invent tab (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |

**Serial Dev:** `/agent-dev-ios` → `/agent-dev-android` · **cấm** 1 file task gộp hai nền.

---

## Source map (cite live paths)

### T-IOS-PAT-PIN

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Domain | `Domain/Entities/PatrolPinModels.swift` (`PatrolPinCopy`) · `GetCurrentLocationUseCase` · `CoreLocationReader` |
| Sessions | `FetchPatrolSessionsUseCase` · `PatrolRepository*` · `PatrolDtoMapper.active` |
| Home | `Presentation/Features/PatrolHome/PatrolHomeView*.swift` · `PatrolHomeViewModel.pinHere` |
| Map | `Presentation/Features/PatrolMap/PatrolMapView*.swift` · `PatrolMapViewModel.pinHere` |
| Deny | `Presentation/Shared/GpsDenyModal.swift` · **cấm** `UIAlertController` |
| Copy | `Presentation/Shared/LinmCopy.swift` keys `patrol.pinHere` / gps deny / timeout |
| DI | `App/AppContainer.swift` inject `getCurrentLocationUseCase` |
| ssot.zones | `DES-MOB-CI-PIN-HERE` · `DES-MOB-GPS-DENY` |
| kit | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` · `LinmToast` · `LinmSecondaryButton` · typography `LinmTokens` label 13 · button ≥16 |
| BFF | **chỉ** `GET patrol/sessions` · base `{BffBase}/mobile-bff/api/v1` |

### T-AND-PAT-PIN

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Domain | `domain/model/PatrolPinCopy.kt` · `GetCurrentLocationUseCase` · `AndroidLocationReader` |
| Sessions | `FetchPatrolSessionsUseCase` · `PatrolRepository` · ApiService |
| Home | `presentation/feature/patrolhome/PatrolHome*` · `pinHere` |
| Map | `presentation/feature/patrolmap/PatrolMap*` · pin + follow |
| Deny | `presentation/feature/shared/GpsDenyDialog.kt` · **cấm** system `AlertDialog` raw |
| Copy | `presentation/copy/LinmCopy.kt` parity VN |
| DI | Hilt · permission launcher on hub/map |
| ssot.zones | same DES dual |
| kit | same kit map · Material chrome only for shell |
| BFF | same `GET patrol/sessions` |

### T-BE-PAT-PIN

| | |
|--|--|
| Status | **n/a** |
| Rationale | SA: list live `PatrolSessionsController.GetList` · Mobile.Bff catch-all proxy · GPS device · **không** bảng/API pin mới |

---

## DoD per task

### Shared AC (both native)

1. Hub CTA **Ghim vị trí hiện tại** → xin quyền → fix live → toast `Đã ghim vị trí hiện tại · {route} · ±N m` (route active / demo `QL.1 · Km 1561+134`).
2. Map cùng CTA → cùng toast + pin `.here` + camera follow · **cấm** fake lat/lng.
3. Deny → in-app `DES-MOB-GPS-DENY` (title/body/Sao chép/Để sau) · **cấm** system alert.
4. Timeout → toast `Chưa lấy được vị trí. Thử lại.`
5. Offline: ghim local OK · GET fail → demo route toast · **cấm** full-screen block.
6. Handoff sibling `patrol-checkin` stub only · **cấm** form / `POST …/check-ins`.
7. Dual copy + `#i-mappin` parity (`GAP-MOB-ALIGN-01`).
8. Tab 5 shell giữ · pack tabs none (`T-QA-TAB-01`).

### Build gate (Dev — HARD trước Dev done)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** |
| Android | `./gradlew assembleDebug` | debug APK |
| BFF | `dotnet build` `RMMS.Mobile.Bff.csproj` | PASS |

**Cấm** `yarn start:std` / `mfeStdUrl` / mark Dev done khi build fail.

### Field / kit parity

| Field | Kit | Notes |
|-------|-----|-------|
| pinHere | `LinmPrimaryButton` + `LinmMapPinGlyph` | hub + map |
| pinToast / locTimeout | `LinmToast` | success / warning |
| locDeny* | feature modal + primary/secondary | cite `ui/html-to-native-map.md` |
| typography | `LinmTokens` | label/toast 13 · CTA ≥16 (`GAP-TYP-01`) |

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| Form **Ghi điểm tuần** / `#sheet-checkin` | sibling `patrol-checkin` |
| `POST …/check-ins` · invent pin API | **cấm** |
| New kit chrome | **cấm** `T-KIT-*` (đã có) |
| New BE endpoint / migration | **cấm** Step 4b |

---

## Handoff

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-PAT-PIN`) rồi `/agent-dev-android` (`T-AND-PAT-PIN`) |
| Chain this turn | **không** (roleOnly=`team_lead`) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `patrol-pin` · store PNG `qa/store/patrol-pin` |
| Step 4b | **N/A** — không BE align mới |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | `2026-08-21T03:36:23.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-pin-control-hint-20260821 |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260821 |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
