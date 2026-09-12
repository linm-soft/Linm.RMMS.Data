# TL — Tasks — estimate (mobile sheet → screen · Giao việc xử lý)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| title | [Mobile] [Công việc] -> Giao việc xử lý |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `edit_page` · **GAP-MOB-EDIT-01** labelHeader UX-only |
| packKind | **`sheet`** (PO + Design + SA confirm · GAP-MOB-EST-PACK-01 **closed** · surface = **full screen** `#sc-estimate` · **cấm** bottom-sheet) |
| stack | `native_dual` |
| thisAction | **Giao việc xử lý** `#sc-estimate` `DES-MOB-EST` only · entry mnt-list hub/card `#i-sum` + incident-create/detail CTA · **cấm** gộp `mnt-chat` / `mnt-progress` / `mnt-log` / web Kind B+D (`GAP-MOB-ACT-01/02`) |
| deltaThisEdit | **GAP-MOB-EDIT-01** — labelHeader 13pt ×6 fields dual · `T-IOS-EST-LABEL` · `T-AND-EST-LABEL` · prior `T-IOS-EST`/`T-AND-EST` **giữ** · BFF/API **skip** |
| route_confirm | **route_a** (autoApprove=ON · **giữ**) · push `#sc-estimate` · pack `tabs: none` · shell Tab 5 **giữ** · tab **`work`** khi entry mnt-list |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all · **paths unchanged** · **cấm** `EstimateController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · AiVision + Maintenance + Incident · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` § Delta · `task_e5be941e` · solution_confirm=approve · prior `task_9f669577` **giữ** · Step 4b **N/A** |
| prior · design | **confirmed** · `ui/design.md` § Delta labelHeader · dual · `task_18e9655b` · design_confirm=approve · prior `task_c0fb308d` **giữ** |
| prior · po | **confirmed** · `po/requirement.md` § Current vs New · `task_eadacecf` · prior `task_5338c2be` **giữ** |
| prior · data_analy | **confirmed** · `_data-analy/estimate-*.md` · contentHash `sha256:estimate-mobile-control-hint-20260901-edit01` · realDataHash `sha256:estimate-mobile-real-data-20260901-edit01` · bff/action-tree hash-skip `20260829` |
| priorWeb | **giữ** · `task/estimate-web.md` · Kind B+D — **OUT** mobile P1 |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** e2e / `yarn start:std` / `mfeStdUrl` ở role TL |
| taskId | `task_93fd2561` |
| priorTlTaskId | `task_cc28db20` **giữ** |
| updatedAt | `2026-09-01T14:44:00.000Z` |

**Cấm:** gộp sibling (`GAP-MOB-ACT-01/02`) · invent `api/v1/estimate` / `ai-estimate/*` · invent `EstimateController` trên Mobile.Bff · invent staff / SLA policy API · ERP.* · WebView HTML · `mfeStdUrl` · system `UIAlert`/`AlertDialog` · watermark Gói · device label · badge P1/P2 header · fake CV / fake 200 khi POST fail · WorkType ngoài live `repair|inspect|emergency` · enqueue Giao việc / Lưu nháp / fields (`GAP-MOB-ACT-07`) · start sibling `pending_confirm` (`GAP-MOB-ACT-06`) · gộp iOS+Android 1 task id · chạy Step 4b / migration / e2e / yarn build ở role TL · implement native code ở role TL.

---

## AskQuestion gates (autoApprove=ON)

| Gate | Decision |
|------|----------|
| `ios_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| `android_repo_confirm` | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| `route_confirm` | **route_a** — screen owner `estimate` · entry mnt-list hub/card + incident CTA → push `#sc-estimate` · không tab mới · không deep link P1 |
| `kit_missing_confirm` | **N/A** — TopBar / ListRow / TextField / Primary / Secondary / Toast **đã map** · **cấm** `T-KIT-*` |
| `T-BE-*` | **n/a** — SA Signed live endpoints · **không** `/new-endpoint` / `/database-migration` |
| `T-BFF-*` | **n/a** — Mobile.Bff catch-all đủ path |

### route_confirm (autoApprove=ON)

| Option | Decision |
|--------|----------|
| **route_a** (chọn) | Tab 5 · tab **`work`** (entry mnt-list) · hub **Giao việc xử lý** + card `#i-sum` → **push** `#sc-estimate` `DES-MOB-EST` (thay toast stub · **GAP-MOB-EST-NAV-01**). Incident-create / incident-detail CTA «Giao việc xử lý» → cùng screen + `incidentId` (shared_action · reuse owner · **cấm** enqueue). Back → `go('mnt-list')` / pop parent (iOS label **Công việc** + chevron · Android icon-only OK). Fields / Lưu nháp / Giao việc = **cùng slug**. Pack `tabs: none` · shell Tab 5 **giữ**. Siblings mnt-chat/progress/log = **không** ship / start. |
| route_b / route_c | — không dùng |

AskQuestion: `route_confirm=route_a` · `ios_repo_confirm` · `android_repo_confirm` · `kit_missing_confirm=N/A` · `2026-08-29T04:42:00.000Z`.

---

## Live gap (TL audit 2026-08-29)

| Surface | Live | TL task |
|---------|------|---------|
| iOS `#sc-estimate` | **DELTA** — `MntListViewModel` Hub/Estimate → toast · `AppRouter` incident create/detail `setOpenEstimate` → toast | **T-IOS-EST** |
| Android `#sc-estimate` | **DELTA** — `MntListViewModel` Hub/Estimate → toast · `MainTabScreen` onOpenEstimate → toast | **T-AND-EST** |
| `POST ai-vision/estimates/from-incident/{id}` · GET/PUT/draft/confirm | BE live · app **chưa** EstimateRepository / ApiService | **NEW** repo + use cases (app) |
| `POST maintenance/work-orders` | BE live · app chỉ `GET` via `MaintenanceRepository.fetchWorkOrders` | **expand** create WO |
| `POST incident/incidents/{id}/assign` | BE live · app `IncidentRepository` **chưa** assign | **expand** assign (optional P1 sync) |
| `GET incident/incidents/{id}` | live `fetchById` | **reuse** prefill header |
| Mobile.Bff proxy | catch-all live | **reuse** · **cấm** EstimateController |
| Kit TopBar/ListRow/TextField/Primary/Secondary/Toast/Tab | dual map | **reuse** · **cấm** `T-KIT-*` |
| T-BE / Step 4b | schema + endpoints Signed | **n/a** |
| Web Kind B+D | prior closed | **OUT** · `estimate-web.md` **giữ** |

---

## Tasks (1 action = 1 feature)

| id | platform | deps | skills | summary |
|----|----------|------|--------|---------|
| `T-IOS-EST-LABEL` | iOS | SA `task_e5be941e` · Design labelHeader · route_a **giữ** | `/agent-dev-ios` · `/dev-ios-swiftui` | **GAP-MOB-EDIT-01** · labelHeader 13pt ×6 fields · AC-F-13 · **cấm** placeholder-only · **cấm** API/BFF change |
| `T-AND-EST-LABEL` | Android | SA · Design · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` | parity dual labelHeader · same 6 fields |
| `T-IOS-EST` | iOS | — | — | prior **shipped** · **giữ** · **không** reopen path |
| `T-AND-EST` | Android | — | — | prior **shipped** · **giữ** |
| `T-BE-*` | — | — | — | **N/A** · paths hash-skip · **cấm** invent / migration |
| `T-BFF-*` | — | — | — | **N/A** · proxy catch-all · unchanged |
| `T-KIT-*` | — | — | — | **N/A** · kit reuse · labelAbove / external label |
| `T-QA-TAB-01` | QA cite | Dev LABEL dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · **cấm** invent (`GAP-TAB-01`) |
| `T-QA-EST-LABEL` | QA | T-IOS-EST-LABEL · T-AND-EST-LABEL | `/agent-qa-mobile` | AC-F-13 labelHeader visible ×6 · Maestro slug `estimate` · **chỉ** `/agent-qa*` |
| `T-QA-EST` | QA | — | — | prior **giữ** · re-run after LABEL |

**Serial Dev this edit:** `/agent-dev-ios` (`T-IOS-EST-LABEL`) → `/agent-dev-android` (`T-AND-EST-LABEL`) · **cấm** gộp dual 1 task · **cấm** TL build/e2e.

---

## Delta this edit (`task_93fd2561` · GAP-MOB-EDIT-01)

| Concern | Decision |
|---------|----------|
| Scope | **UX-only** · labelHeader 13pt above 6 form fields · dual · **cấm** placeholder-only |
| Fields | assignee · qty · unitPrice · total · slaHours · dueAt — each +labelHeader |
| Native | `LinmTextField` + external label / kit `labelAbove` · typography label **13** (`GAP-TYP-01`) |
| BFF / API / DTO | **unchanged** · hash-skip · Step 4b **N/A** |
| route_confirm | **route_a giữ** · không URL mới |
| Prior GAP-MOB-EST-* / R-QA-* | **giữ closed** |
| Invent / ERP.* / mfeStdUrl | **none** |

### Source map — T-IOS-EST-LABEL

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| UI | `Presentation/Features/Estimate/*` — ensure visible labelHeader trên 6 `LinmTextField` · **cấm** title=placeholder-only |
| Kit | `LinmTextField` + external label / `labelAbove` · `LinmTokens` 13pt |
| API / entry / WO | **không đổi** · prior T-IOS-EST **giữ** |
| ssot | `DES-MOB-EST` · `#sc-estimate` · cite `ui/html-to-native-map.md` |

### Source map — T-AND-EST-LABEL

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| UI | `presentation/feature/estimate/*` — parity labelHeader ×6 |
| Kit | same map · Material chrome shell only |
| API / entry | **không đổi** |

### DoD delta (AC-F-13 · cite PO/Design)

1. Mỗi field trong inventory EDIT-01 có **labelHeader visible** 13pt above control (không chỉ placeholder).
2. Dual iOS+Android parity copy + layout (`GAP-MOB-ALIGN-01`).
3. Behavior seed/draft/WO/toast **giữ** prior DoD 1–14 · **không** regress API.
4. Build gate Dev: iPhone 17 Pro · `assembleDebug` · **cấm** TL chạy.

---

## Source map (cite live paths)

### T-IOS-EST

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| Feature UI (NEW) | `Presentation/Features/Estimate/*` — `EstimateView` · `EstimateViewModel` · `EstimateUiState` · `EstimateCopy` · ListRow header · TextField assignee/qty/price/total/sla/due · Primary Giao việc · Secondary Lưu nháp · banner missing · toast · **cấm** WebView HTML |
| Entry wire | `Presentation/Features/MntList/MntListViewModel.swift` — `.hub` / `.estimate` **thay toast** → push Estimate (+ incidentId nếu có) · `App/AppRouter.swift` — `incidentCreateViewModel.setOpenEstimate` · `incidentDetailViewModel.setOnOpenEstimate` **thay toast** → push Estimate + id · **cấm** reimplement mnt-list / incident chrome |
| Router | `App/AppRouter.swift` · work tab dưới screen |
| Use cases (NEW/expand) | seed `from-incident` · get/update/draft estimate · create WO · optional confirm · optional assign · optional get incident |
| Repo | **NEW** `EstimateRepository` (+ Impl/DTO) · **expand** `MaintenanceRepository` + `createWorkOrder` · **expand** `IncidentRepository` + `assign` · **reuse** `fetchById` |
| Copy | VN SSOT Design · toast `Đã giao việc · {Code} · thời hạn {SlaHours} giờ` · draft · err · **cấm** fake CV |
| DI | `App/AppContainer.swift` |
| ssot.zones | `DES-MOB-EST` · `#sc-estimate` |
| kit | `LinmTopBar` · `LinmListRow` · `LinmTextField` · `LinmPrimaryButton` · `LinmSecondaryButton` · `LinmToast` · Tab shell · typography `LinmTokens` label **13** · value/button **≥16** (`GAP-TYP-01`) · cite `ui/html-to-native-map.md` |
| BFF | paths dưới · base `{BffBase}/mobile-bff/api/v1` · **cấm** invent `estimate` / `ai-estimate` path · **cấm** fake 200/CV |
| WorkType P1 | **`repair`** (SA live enum) · Status=`new` · **không** `sua-chua` |

### T-AND-EST

| Area | Path |
|------|------|
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| Feature UI (NEW) | `presentation/feature/estimate/*` — screen + VM + UiState + Copy · parity dual |
| Entry wire | `presentation/feature/mntlist/MntListViewModel.kt` Hub/Estimate thay toast · `presentation/navigation/MainTabScreen.kt` `onOpenEstimate` thay toast → navigate Estimate + incidentId |
| Use cases / repo | same dual · NEW EstimateRepository · expand Maintenance create · expand Incident assign · ApiService paths |
| Copy | parity VN (`GAP-MOB-ALIGN-01`) · Android back icon-only OK |
| DI | Hilt |
| ssot.zones | same `DES-MOB-EST` |
| kit | same kit map · Material chrome shell only |
| BFF | same paths · no offline queue P1 |

### T-BE-* / T-BFF-*

| | |
|--|--|
| Status | **N/A (LIVE Signed)** — `AiVisionEstimatesController` · `WorkOrdersController.Create` · `IncidentsController.Assign` · Mobile.Bff catch-all |
| TL turn | **không** pack T-BE · **cấm** Step 4b / migration |
| App P1 | wire existing paths only · **cấm** invent controller/path |

---

## DoD per task

### Shared AC (both native · cite PO §3 + SA + Design)

1. Screen **Giao việc xử lý** full (`DES-MOB-EST` `#sc-estimate`): nav back → mnt-list / incident parent · title fixed · card Từ sự cố + Loại TS · fields · CTA Giao việc + Lưu nháp · toast · **cấm** bottom-sheet · **cấm** badge P1/P2 header.
2. Entry: mnt-list hub/card `#i-sum` + incident CTA → **push** `#sc-estimate` (thay toast · **GAP-MOB-EST-NAV-01**) · **cấm** reimplement parent chrome · **cấm** enqueue.
3. Prefill header: Code · defect · route/Km (+ Loại TS) từ nav và/hoặc `GET incident/incidents/{id}` · thiếu incidentId → banner · **chặn** Giao việc (`?missing=1`).
4. Seed: có incidentId → `POST ai-vision/estimates/from-incident/{id}` (hoặc resume GET) · prefill qty/giá từ `Lines[0]` · fail → form + demo fallback rows · **cấm** invent path · **cấm** fake toast CV.
5. **Giao cho *** required free text · empty → disable primary hoặc toast validate · **cấm** invent staff API (`GAP-MOB-EST-ASSIGNEE-01`).
6. Qty decimal · Đơn giá VND · Thành tiền = qty × unitPrice · write `Lines[0].Qty` / `UnitPrice` (`GAP-MOB-EST-SIMP-01`).
7. SLA hours readonly default **24** · DueAt = now + sla · wire UTC · display VN · bind WO `SlaHours`/`DueAt` · **cấm** invent SLA API (`GAP-MOB-EST-SLA-01`).
8. Primary **Giao việc**: optional PUT lines / confirm · **`POST maintenance/work-orders`** (`WorkType=repair` · `Status=new` · RouteName · DueAt · AssigneeName · IncidentId…) · optional `POST …/assign` · busy · toast **Đã giao việc · {Code} · thời hạn {SlaHours} giờ** · back mnt-list · **cấm** fake CV · **chặn** !assignee / !incidentId (`GAP-MOB-EST-WO-01`).
9. Secondary **Lưu nháp**: `POST …/estimates/{id}/draft` · toast **Đã lưu nháp ước lượng** · offline queue **DEFER** · **cấm** fake 200.
10. Kit reuse map · **cấm** system alert · **cấm** watermark Gói / device label.
11. Dual copy parity · Android back icon-only OK (`GAP-MOB-ALIGN-01`).
12. Tab 5 shell giữ · pack `tabs: none` · tab **work** khi entry mnt-list (`T-QA-TAB-01` · `GAP-TAB-01`).
13. App chỉ `{BffPrefix}` · token Keychain / Encrypted · **cấm** `:5101` · **cấm** ERP.*.
14. **Cấm** ship siblings mnt-chat / progress / log / web Kind B+D trên pack này.

### Field / kit parity (cite `ui/html-to-native-map.md`)

| Field | Kit / surface | Notes |
|-------|---------------|-------|
| navBack / title | `LinmTopBar` | iOS back **Công việc** · Android icon-only |
| fromIncident / assetType | `LinmListRow` | readonly · label 13 · value ≥16 |
| assignee | `LinmTextField` | * required free text |
| qty / unitPrice | `LinmTextField` | decimal / money → Lines[0] |
| totalAmount / slaHours / dueAt | `LinmTextField` readonly | derived |
| btnAssign | `LinmPrimaryButton` | POST WO · busy |
| btnDraft | `LinmSecondaryButton` | draft |
| toastOk / toastDraft / toastErr | `LinmToast` | **cấm** alert · **cấm** fake CV |
| bannerMissing | banner | thiếu incidentId |
| typography | `LinmTokens` | `GAP-TYP-01` |

### Build gate (Dev — HARD trước Dev done · **cấm** TL chạy)

| Platform | Command | Dest |
|----------|---------|------|
| iOS | `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **iPhone 17 Pro** (iPad DEFER Phase 2) |
| Android | `./gradlew :app:assembleDebug` | debug APK |
| BFF | `dotnet build` `RMMS.Mobile.Bff.csproj` nếu Dev đụng BFF | PASS · else reuse |
| BE | — | **n/a** T-BE |

**Cấm** `yarn start:std` / `mfeStdUrl` / `yarn e2e-qa-mobile` / `yarn build` ở TL · mark Dev done khi build fail.

### API contract (from SA — cite only)

| Action | App path | Notes |
|--------|----------|-------|
| Prefill SC | `GET incident/incidents/{id}` | optional nếu nav đủ |
| Seed | `POST ai-vision/estimates/from-incident/{incidentId}` | open |
| Resume | `GET ai-vision/estimates/{id}` | |
| Update lines | `PUT ai-vision/estimates/{id}` | `Lines[0]` |
| Draft | `POST ai-vision/estimates/{id}/draft` | secondary |
| Confirm (opt) | `POST ai-vision/estimates/{id}/confirm` | optional chain |
| Giao việc | `POST maintenance/work-orders` | **primary** · WorkType=`repair` · Status=`new` |
| Assign (opt) | `POST incident/incidents/{id}/assign` | AssigneeName sync |
| Init (opt) | `GET …/estimates/init-data` · `GET …/work-orders/init-data` | optional P1 |

**Cấm** invent `api/v1/estimate` · `ai-estimate/*`.

---

## Out of pack (cấm giao Dev trên slug này)

| Item | Owner |
|------|-------|
| mnt-chat / mnt-progress / mnt-log | siblings · toast giữ / pending_confirm · **cấm** start |
| Web Kind B list / Kind D multi-line / Config | prior web · `estimate-web.md` **giữ** · OUT |
| Auto WO event `estimate.created` | web DEFER · mobile dùng explicit POST |
| Staff lookup / SLA policy API | **cấm** invent |
| Invent EstimateController / bare `estimate` path | **cấm** |
| Offline draft queue | **DEFER** |
| New kit package | **cấm** `T-KIT-*` |
| Step 4b / migration / e2e | **không** ở TL · Dev/QA khi tới lượt |
| Watermark Gói / device label / proto-click | **cấm** |

---

## Handoff → Dev / QA

| Field | Value |
|-------|-------|
| Next | `/agent-dev-ios` (`T-IOS-EST-LABEL`) rồi `/agent-dev-android` (`T-AND-EST-LABEL`) |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev append `implement/ios.md` · `implement/android.md` § Delta LABEL |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/{ios,android}/index.html` |
| QA sau Dev | `yarn e2e-qa-mobile` · AC-F-13 · store PNG `qa/store/estimate` · **chỉ** `/agent-qa*` |
| Step 4b | **N/A** · T-BE n/a · **cấm** TL chạy |
| WorkType | **`repair`** (SA) — không `sua-chua` |
| priorWeb | `task/estimate-web.md` **giữ** |

---

## VERIFY GATE (roleOnly=`team_lead` · `task_93fd2561`)

| Check | Result |
|-------|--------|
| task/estimate.md | **PASS** · T-IOS-EST-LABEL · T-AND-EST-LABEL · T-BE **n/a** · route_a **giữ** |
| Prior SA + Design + PO + data-analy | **PASS** · compact read · GAP-MOB-EDIT-01 |
| ios_repo + android_repo + route_confirm | **PASS** · reuse · route_a |
| Kit | **PASS** · TextField+labelHeader · T-KIT **n/a** |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native | **SKIP** (cấm role TL) |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-tl-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-09-01T14:44:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260901-edit01 |
| realDataHash | sha256:estimate-mobile-real-data-20260901-edit01 |
| bffContentHash | sha256:estimate-mobile-bff-20260829 |
| actionTreeHash | sha256:estimate-mobile-action-tree-20260829 |
| ctxContentHash | sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_93fd2561` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked · taskId=task_93fd2561 -->
