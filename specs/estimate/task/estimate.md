# TL — Tasks — estimate (mobile sheet → screen · Giao việc xử lý)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| title | [Mobile] [Công việc] -> Giao việc xử lý |
| this role | `team_lead` · `/agent-tl-mobile` |
| status | **confirmed** |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO + Design + SA confirm · GAP-MOB-EST-PACK-01 **closed** · surface = **full screen** `#sc-estimate` · **cấm** bottom-sheet) |
| stack | `native_dual` |
| thisAction | **Giao việc xử lý** `#sc-estimate` `DES-MOB-EST` only · entry mnt-list hub/card `#i-sum` + incident-create/detail CTA · **cấm** gộp `mnt-chat` / `mnt-progress` / `mnt-log` / web Kind B+D (`GAP-MOB-ACT-01/02`) |
| route_confirm | **route_a** (autoApprove=ON) · push `#sc-estimate` · pack `tabs: none` · shell Tab 5 **giữ** · tab **`work`** khi entry mnt-list |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · **reuse** (scaffold live · **không** `/mobile-app-architecture`) |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · **reuse** |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` · catch-all proxy · **cấm** `EstimateController` local |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · AiVision + Maintenance + Incident · **cấm ERP.*** |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_9f669577` · solution_confirm=approve · WorkType=`repair` · Step 4b **N/A** |
| prior · design | **confirmed** · `ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · dual `#sc-estimate` · `ui/review/demo-parity.md` · `task_c0fb308d` · design_confirm=approve |
| prior · po | **confirmed** · `po/requirement.md` · `task_5338c2be` |
| prior · data_analy | **confirmed** · `_data-analy/estimate-*.md` · contentHash `sha256:estimate-mobile-control-hint-20260829` · realDataHash `sha256:estimate-mobile-real-data-20260829` · bffContentHash `sha256:estimate-mobile-bff-20260829` · actionTreeHash `sha256:estimate-mobile-action-tree-20260829` |
| priorWeb | **giữ** · `task/estimate-web.md` (+ `po|ui|be|implement|qa|review` *-web*) · Kind B+D — **OUT** mobile P1 |
| autoApprove | **ON** |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · sim 6.9" + emulator + Maestro · PNG `qa/store/estimate` · **cấm** `yarn start:std` / `mfeStdUrl` / e2e ở role TL |
| taskId | `task_cc28db20` |
| updatedAt | `2026-08-29T04:42:00.000Z` |

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
| `T-IOS-EST` | iOS | SA confirmed · kit N/A · Design dual · route_a | `/agent-dev-ios` · `/dev-ios-swiftui` · `/ios-new-screen` | Ship `#sc-estimate` · entry wire thay toast · seed/Lines[0]/draft/WO(`repair`)/assign · toast real Code |
| `T-AND-EST` | Android | SA confirmed · kit N/A · serial after iOS preferred | `/agent-dev-android` · `/dev-android-compose` · `/android-new-screen` · `/android-new-api-call` | Compose parity dual · same BFF bind · entry wire |
| `T-BE-*` | — | — | — | **N/A** · live Signed · **cấm** invent endpoint / migration |
| `T-BFF-*` | — | — | — | **N/A** · proxy catch-all |
| `T-KIT-*` | — | — | — | **N/A** · kit reuse |
| `T-QA-TAB-01` | QA cite | Dev dual PASS | `/agent-qa-mobile` | Shell Tab 5 **giữ** · pack `tabs: none` · tab **work** when entry mnt-list · **cấm** invent (`GAP-TAB-01`) · cite `tab-index-analy-review.md` |
| `T-QA-EST` | QA | T-IOS · T-AND | `/agent-qa-mobile` | Maestro slug `estimate` · `yarn e2e-qa-mobile` · store PNG `qa/store/estimate` · **chỉ** `/agent-qa*` |

**Serial Dev:** `/agent-dev-ios` (`T-IOS-EST`) → `/agent-dev-android` (`T-AND-EST`) · **cấm** 1 file task gộp hai nền · **cấm** enqueue sibling · **cấm** TL chạy build/e2e.

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
| Next | `/agent-dev-ios` (`T-IOS-EST`) rồi `/agent-dev-android` (`T-AND-EST`) |
| Chain this turn | **không** (roleOnly=`team_lead` · GAP-PKT-ROLE-01) |
| implement stubs | Dev ghi `implement/ios.md` · `implement/android.md` khi tới lượt |
| reviewUrl | dual `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/{ios,android}/index.html` · missing `?missing=1` |
| QA sau Dev | `yarn e2e-qa-mobile` · Maestro slug `estimate` · store PNG `qa/store/estimate` · **chỉ** `/agent-qa*` |
| Step 4b | **N/A** · T-BE n/a · **cấm** TL chạy |
| WorkType | **`repair`** (SA) — không `sua-chua` |
| priorWeb | `task/estimate-web.md` **giữ** |

---

## VERIFY GATE (roleOnly=`team_lead`)

| Check | Result |
|-------|--------|
| task/estimate.md | **PASS** · T-IOS-EST · T-AND-EST · T-BE **n/a** · T-BFF **n/a** · route_a · source lock |
| Prior SA + Design + PO + data-analy | **PASS** · read abs · hashes khớp · **cấm** invent API / control |
| ios_repo + android_repo + route_confirm | **PASS** · repos có · autoApprove route_a |
| Kit | **PASS** · reuse map · T-KIT **n/a** |
| prior web task | **PASS** · moved → `task/estimate-web.md` |
| Step 4b / migration / e2e | **SKIP** (cấm role TL) |
| yarn build / start:std / implement native Write | **SKIP** (cấm role TL) |
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
| generatedAt | `2026-08-29T04:42:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |
| realDataHash | sha256:estimate-mobile-real-data-20260829 |
| bffContentHash | sha256:estimate-mobile-bff-20260829 |
| actionTreeHash | sha256:estimate-mobile-action-tree-20260829 |
| ctxContentHash | sha256:58cb5c3279c3df7360e1f3f29adccc79fada11ce219853dfce035217e25b7f3d |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_cc28db20` |

---
<!-- Version meta: skillId=agent-tl-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
