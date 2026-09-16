# STATUS — incident-list

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| phase | `done` |
| status | `done` |
| packKind | `list` (**PO confirm**) |
| changeScope | `new_page` |
| stack | `native_dual` (**Design confirm**) |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-list/ui/prototype/{ios,android}/index.html `#sc-incident-list` · `DES-MOB-INC-LIST` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident-list.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/incident/incidents` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP Incident — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/incident-list-control-hint.md` · `incident-list-bff-endpoints.md` · `incident-list-action-tree.md` · `incident-list-real-data.md` |
| po | `specs/incident-list/po/requirement.md` |
| design | `specs/incident-list/ui/design.md` · `ux-analy.md` · `html-to-native-map.md` · `review/demo-parity.md` · `prototype/ios|android/index.html` |
| sa | `specs/incident-list/be/solution-discovery.md` |
| task | `specs/incident-list/task/incident-list.md` |
| implement | `specs/incident-list/implement/ios.md` · `implement/android.md` |
| qa | `specs/incident-list/qa/scenarios.md` · `qa/store/incident-list/CAPTURE.md` · `ui/review/align-ux.md` |
| review | `specs/incident-list/review/findings.md` |
| taskId | `task_3a718e5d` |
| skillId | `edit-mobile-feature` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.25.01` |
| rulesVersion | `2026.08.25.2` |
| versionGate | `rechecked` |
| contentHash | `sha256:incident-list-mobile-list-20260829` |
| realDataHash | `sha256:incident-list-mobile-real-data-20260829` |
| bffContentHash | `sha256:incident-incidents-proxy-passthrough` |
| updatedAt | `2026-09-01T04:27:38.945Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after `/agent-review-mobile` task_8fd8993f |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | `_data-analy/incident-list-control-hint.md` · `incident-list-bff-endpoints.md` · `incident-list-action-tree.md` · `incident-list-real-data.md` | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/incident-list.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/incident-list/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` |
| packKind | **`list`** (PO confirm) |
| kit_missing_confirm | **N/A** — reuse map list kit dual |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| route_confirm | **route_a** (TL autoApprove) |
| ios_repo_confirm | **confirmed** · `Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | **confirmed** · `Linm.RMMS.Mobile.Android` |
| autoApprove | **ON** |
| e2eQa | **ON** · `/agent-qa-mobile` **PASS** · **cấm** start:std / mfeStdUrl |
| ios_test_phase | **phase1_iphone** · iPhone 17 Pro Max · A4-IPAD DEFER |
| store_qa | **run_store** · store PNG live |
| align_confirm | **approve** · Must **0** · **Aligned** |
| review_confirm | **confirmed** (user Approve board) |
| Step 4b | **N/A** — reuse `GET incident/incidents` |
| sibling_assign | `vis-capture` · `incident-detail` · `incident-chat` (± `gis-map`) · **pending_confirm** (**cấm** auto start) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_246a6ce0 | incident-list | data_analy | — | **done** | control-hint + BFF + real-data + action-tree · handoff PO |
| task_7fea88b7 | incident-list | po | data_analy | **completed** | `/agent-po-mobile` · roleOnly · packKind `list` · hash skip |
| task_6800d075 | incident-list | design | po | **completed** | `/agent-design-mobile` · dual proto · ux-analy · demo-parity · design_confirm approve · **cấm** re-scan · **cấm** e2e |
| task_6ca4ad05 | incident-list | sa | design | **completed** | `/agent-sa-mobile` · solution_confirm approve · GET `incident/incidents` only · Step 4b N/A · **cấm** Write native · **cấm** e2e |
| task_08bb7863 | incident-list | team_lead | sa | **completed** | `/agent-tl-mobile` · T-IOS-INC-LIST · T-AND-INC-LIST · T-BE n/a · route_a · **cấm** implement · **cấm** e2e |
| T-IOS-INC-LIST | incident-list | dev_ios | TL | **done** | GET list · tab + tile → list · xcodegen+xcodebuild PASS |
| T-AND-INC-LIST | incident-list | dev_android | TL | **done** | dual parity · assembleDebug PASS |
| task_0d0a8786 | incident-list | dev | TL | **completed** | `/agent-dev-ios` + `/agent-dev-android` · VERIFY GATE PASS · Step 4b N/A · **cấm** e2e |
| task_f70a425c | incident-list | qa | dev | **completed** | `/agent-qa-mobile` · e2eQa ON · ok:true · align Aligned Must 0 · re-QA post edit-mobile-feature |
| task_ddcd049e | incident-list | review | qa | **completed** | `/agent-review-mobile` · review_confirm=done · Must 0 · **cấm** e2e/build |
| task_8fd8993f | incident-list | review | dev | **completed** | `/agent-review-mobile` · re-review post edit-mobile-feature · review_confirm=done · Must 0 · **cấm** e2e/build |
| task_3a718e5d | incident-list | dev | review | **completed** | `/edit-mobile-feature` · GAP-MOB-EDIT-STATUS-01 · GAP-MOB-EDIT-ACT-01 · VERIFY GATE PASS · **cấm** e2e |
| task_086ba802 | vis-capture | — | incident-list | pending_confirm | sibling_assign · cấm auto start |
| task_42bb4141 | incident-detail | — | incident-list | pending_confirm | sibling_assign · cấm auto start |
| task_9e8d18c5 | incident-chat | — | incident-list | pending_confirm | sibling_assign · cấm auto start |

## Blockers / open questions

- GAP-MOB-INC-LIST-PLACE-01 · GAP-MOB-INC-LIST-ORG-01 · GAP-MOB-INC-LIST-THUMB-01 — closed for Dev (bind + thumb DEFER)
- **GAP-MOB-EDIT-STATUS-01** · **GAP-MOB-EDIT-ACT-01** — **closed** (`/edit-mobile-feature` task_3a718e5d · dual iOS+Android)
- *(closed epic cleanup `task_a33dfede`)* residual `demoItems` empty/fail → live-only EmptyChrome + `inc.list.toast.loadFail`

## Links

- data-analy → po → ui → be → task → implement → qa → review **complete**
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- design: `specs/incident-list/ui/design.md` · `ux-analy.md` · `html-to-native-map.md` · `review/demo-parity.md` · `prototype/{ios,android}/index.html`
- sa: `specs/incident-list/be/solution-discovery.md`
- task: `specs/incident-list/task/incident-list.md`
- implement: `specs/incident-list/implement/ios.md` · `implement/android.md`
- qa: `specs/incident-list/qa/scenarios.md` · `qa/store/incident-list/` · `ui/review/align-ux.md`
- review: `specs/incident-list/review/findings.md`
- analy: `specs/_data-analy/incident-list-*.md` (4 files)
- po: `specs/incident-list/po/requirement.md`
- next: siblings **cấm** auto start (`vis-capture` · `incident-detail` · `incident-chat`)
- closeout epic cleanup_mock: `task_a33dfede` · live-only dual · at: `2026-09-01T10:10:00.000Z`
