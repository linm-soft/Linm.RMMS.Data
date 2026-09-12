# TL — Tasks — patrol-pin (Ghim vị trí hiện tại · edit_page persist)

| Field | Value |
|-------|-------|
| feature | `patrol-pin` |
| title | [Mobile] [Tuần đường] -> Ghim vị trí hiện tại · handoff check-in |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** (CTA + sheet handoff · không full hub / không form) |
| stack | `native_dual` |
| gap | `GAP-MOB-PIN-PERSIST-01` |
| thisAction | **Ghim vị trí hiện tại** `DES-MOB-CI-PIN-HERE` only · handoff `#sheet-handoff-checkin` · **cấm** gộp form check-in / auto-POST |
| route_confirm | **route_a** (autoApprove=ON) · entry hub `#sc-patrol-home` + map `#sc-patrol-map` reuse · deep link n/a · pack `tabs: none` · shell Tab 5 **giữ** · sheet handoff in-flow (không route mới) |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · Step 4b **N/A** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `handoff/sa-compact.md` · `task_44e11065` · solution_confirm=approve |
| prior · design | **confirmed** · `ui/design.md` · dual proto · `handoff/design-compact.md` · `task_4e8a5d46` |
| prior · po | **confirmed** · `po/requirement.md` · `handoff/po-compact.md` · `task_cf3ce7eb` |
| prior · data_analy | **confirmed** · `_data-analy/patrol-pin-*.md` · `handoff/data_analy-compact.md` · `task_48f136ed` · contentHash `sha256:patrol-pin-control-hint-20260912-persist` |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · **cấm** `yarn start:std` / `mfeStdUrl` |
| taskId | `task_181e8784` |
| updatedAt | `2026-09-12T12:04:56.000Z` |

**Cấm:** gộp `patrol-checkin` form vào pack (`GAP-MOB-ACT-02`) · invent `api/v1/patrol-pin` / `POST …/pins` · pin auto-POST check-ins · fake lat/lng · ERP.* · system `UIAlert`/`AlertDialog` · watermark Gói · device label · `mfeStdUrl` · gộp iOS+Android 1 task id · enqueue sibling submit API (`GAP-MOB-ACT-06/07`).

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — CTA owner hub+map · sheet `#sheet-handoff-checkin` in-flow · **không** tab/deep-link mới |
| `kit_skip` | **yes** — `LinmPrimaryButton` / `LinmMapPinGlyph` / `LinmToast` / `LinmSecondaryButton` · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — SA entity/migration none · GET sessions live · POST check-ins = sibling only |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills / `devSlash` | summary |
|----|----------|------|---------------------|---------|
| `T-IOS-PAT-PIN` | iOS | SA confirmed · kit_skip | `/agent-dev-ios` · `/dev-ios-swiftui` | Hub+map pin → live GPS · toast · deny modal · timeout · map `.here`+follow · **real** handoff sheet payload `sessionId`+`LocationFix` · **cấm** auto-POST |
| `T-AND-PAT-PIN` | Android | SA confirmed · kit_skip · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` | Same Compose parity · permission launcher · in-app deny · real sheet handoff · **cấm** auto-POST |
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
| Handoff | Sheet `#sheet-handoff-checkin` · payload `sessionId` + `LocationFix` → sibling `patrol-checkin` · **cấm** call POST từ pin |
| Deny | `Presentation/Shared/GpsDenyModal.swift` · **cấm** `UIAlertController` |
| Copy | `Presentation/Shared/LinmCopy.swift` keys `patrol.pinHere` / gps deny / timeout / handoff |
| DI | `App/AppContainer.swift` inject `getCurrentLocationUseCase` |
| ssot.zones | `DES-MOB-CI-PIN-HERE` · `DES-MOB-GPS-DENY` · `DES-MOB-HANDOFF-CHECKIN` · `toast-pin-ok` |
| kit | `LinmPrimaryButton` + `LinmMapPinGlyph` `#i-mappin` · `LinmToast` · `LinmSecondaryButton` · typography `LinmTokens` label 13 · button ≥16 |
| BFF | **chỉ** `GET patrol/sessions` (this pack) · base `{BffBase}/mobile-bff/api/v1` · POST check-ins = sibling |

### T-AND-PAT-PIN

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Domain | `domain/model/PatrolPinCopy.kt` · `GetCurrentLocationUseCase` · `AndroidLocationReader` |
| Sessions | `FetchPatrolSessionsUseCase` · `PatrolRepository` · ApiService |
| Home | `presentation/feature/patrolhome/PatrolHome*` · `pinHere` |
| Map | `presentation/feature/patrolmap/PatrolMap*` · pin + follow |
| Handoff | Sheet `#sheet-handoff-checkin` · same payload · **cấm** auto-POST |
| Deny | `presentation/feature/shared/GpsDenyDialog.kt` · **cấm** system `AlertDialog` raw |
| Copy | `presentation/copy/LinmCopy.kt` parity VN |
| DI | Hilt · permission launcher on hub/map |
| ssot.zones | same DES + handoff |
| kit | same kit map · Material chrome only for shell |
| BFF | same `GET patrol/sessions` · POST = sibling |

### T-BE-PAT-PIN

| | |
|--|--|
| Status | **n/a** |
| Rationale | SA: FormMode none · GET `patrol/sessions` live · POST `…/check-ins` sibling `patrol-checkin` · entity/migration none · **không** invent `/pins` |

---

## DoD per task

### Shared AC (both native) — edit_page delta

1. Hub CTA **Ghim vị trí hiện tại** → xin quyền → fix live → toast `Đã ghim vị trí hiện tại · {route} · ±N m` (route = live active · empty = `Chưa có ca đang chạy` · **cấm** demoRoute).
2. Map cùng CTA → cùng toast + pin `.here` + camera follow · **cấm** fake lat/lng.
3. Deny → in-app `DES-MOB-GPS-DENY` · **cấm** system alert · **không** mở handoff.
4. Timeout → toast `Chưa lấy được vị trí. Thử lại.` · **không** handoff.
5. Offline: ghim local OK · GET fail → empty-label + sessionFail toast · **cấm** demo route · **cấm** full-screen block.
6. **Persist delta:** sau pin OK → **real** `#sheet-handoff-checkin` (`DES-MOB-HANDOFF-CHECKIN`) với `sessionId` + `LocationFix` · **cấm** stub-only · **cấm** pin auto-POST `…/check-ins` · **cấm** form trên pack · POST = sibling owner Live.
7. Dual copy + `#i-mappin` parity (`GAP-MOB-ALIGN-01`).
8. Tab 5 shell giữ · pack tabs none (`T-QA-TAB-01`).

### Build gate (Dev — HARD trước Dev done)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro Max' build` | **iPhone 17 Pro Max** · A4-IPAD **DEFER** |
| Android | `./gradlew assembleDebug` | debug APK |
| BFF | `dotnet build` `RMMS.Mobile.Bff.csproj` | PASS (reuse only · no pin controller) |

**Cấm** `yarn start:std` / `mfeStdUrl` / mark Dev done khi build fail.

### Field / kit parity

| Field | Kit | Notes |
|-------|-----|-------|
| pinHere | `LinmPrimaryButton` + `LinmMapPinGlyph` | hub + map · `DES-MOB-CI-PIN-HERE` |
| pinToast / locTimeout | `LinmToast` | success / warning · trước handoff |
| locDeny* | feature modal + primary/secondary | `DES-MOB-GPS-DENY` · cite `ui/html-to-native-map.md` |
| handoffCheckin | sheet / route payload | `DES-MOB-HANDOFF-CHECKIN` · sessionId+LocationFix |
| typography | `LinmTokens` | label/toast 13 · CTA ≥16 (`GAP-TYP-01`) |

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| Form **Ghi điểm tuần** submit / PlanPointLabel+MatchOk | sibling `patrol-checkin` |
| `POST …/check-ins` từ pin / invent pin API | **cấm** |
| New kit chrome | **cấm** `T-KIT-*` |
| New BE endpoint / migration | **cấm** Step 4b |

---

## Handoff

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-PAT-PIN`) rồi `/agent-dev-android` (`T-AND-PAT-PIN`) |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `patrol-pin` · store PNG `qa/store/patrol-pin` · AC-PERSIST-01 |
| Step 4b | **N/A** |

---

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.20.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.20.04 |
| rulesVersion | 2026.08.20.8 |
| generatedAt | `2026-09-12T12:04:56.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-pin-control-hint-20260912-persist |
| bffContentHash | sha256:patrol-pin-mobile-bff-20260912-persist |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.20.03 schemaVersion=1 workflowVersion=2026.08.20.04 rulesVersion=2026.08.20.8 versionGate=rechecked -->
