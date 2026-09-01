# STATUS — asset-detail

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| phase | `dev` |
| status | `await_confirm` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-DET-PACK-01 · surface full `#sc-asset-detail`) |
| changeScope | `new_page` |
| stack | `native_dual` |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| demo | `specs/asset-detail/ui/prototype/{ios,android}/index.html` `#sc-asset-detail` · `DES-MOB-ASSET-DETAIL` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/asset-detail.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/asset/road-assets/{id}` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP Asset — **cấm ERP.*** |
| dataAnaly.controlHint | `_data-analy/asset-detail-control-hint.md` |
| dataAnaly.bff | `_data-analy/asset-detail-bff-endpoints.md` |
| dataAnaly.realData | `_data-analy/asset-detail-real-data.md` |
| dataAnaly.actionTree | `_data-analy/asset-detail-action-tree.md` |
| po | `specs/asset-detail/po/requirement.md` |
| design | `specs/asset-detail/ui/design.md` |
| sa | `specs/asset-detail/be/solution-discovery.md` |
| tl | `specs/asset-detail/task/asset-detail.md` |
| implement.ios | `specs/asset-detail/implement/ios.md` |
| implement.android | `specs/asset-detail/implement/android.md` |
| implement.qaFixPlan | `specs/asset-detail/implement/asset-detail-qa-fix-plan.md` |
| qa.scenarios | `specs/asset-detail/qa/scenarios.md` |
| qa.store | `specs/asset-detail/qa/store/asset-detail/` |
| qa.bugs | `specs/asset-detail/qa/bugs/asset-detail.md` |
| lastRole | `dev` · `/agent-dev-ios`+`/agent-dev-android` · **qaFixPhase=plan** · await `qa_fix_plan` |
| autoApprove | `ON` · **cấm** skip `qa_fail_rollback` / `qa_fix_plan` |
| e2eQa | ON · prior e2e **FAIL** · re-QA sau implement · **cấm** start:std / mfeStdUrl |
| contentHash | `sha256:asset-detail-control-hint-20260830` |
| realDataHash | `sha256:asset-detail-real-data-20260830` |
| bffContentHash | `sha256:asset-detail-bff-20260830` |
| actionTreeHash | `sha256:asset-detail-action-tree-20260830` |
| demoContentHash | `sha256:mobile-p1-sc-asset-detail-20260830` |
| poContentHash | `sha256:asset-detail-po-requirement-20260830` |
| designContentHash | `sha256:asset-detail-design-20260830` |
| saContentHash | `sha256:asset-detail-solution-20260830` |
| tlContentHash | `sha256:asset-detail-tl-task-20260830` |
| iosContentHash | `sha256:asset-detail-implement-ios-20260830` |
| androidContentHash | `sha256:asset-detail-implement-android-20260830` |
| qaFixPlanContentHash | `sha256:asset-detail-qa-fix-plan-20260901` |
| skillId | `agent-dev-ios` + `agent-dev-android` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.31.2` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `rechecked` |
| verifyGate | roleOnly=dev · qaFixPhase=**plan** · plan written · **cấm** code · board `qa_fix_plan` |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-detail/ui/prototype/ios/index.html#sc-asset-detail` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-detail/ui/prototype/android/index.html#sc-asset-detail` |
| updatedAt | `2026-09-01T09:55:19.419Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (plan-only · `task_24109163` completed) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/asset-detail-control-hint.md · asset-detail-bff-endpoints.md · asset-detail-real-data.md · asset-detail-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/asset-detail.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md · **`implement/asset-detail-qa-fix-plan.md`** | **await_confirm** |
| 5 | qa | qa/scenarios.md · qa/store/asset-detail/CAPTURE.md · qa/bugs/asset-detail.md | **blocked** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_f6ca06ad | asset-detail | data_analy | — | **completed** | roleOnly PASS · changeScope=new_page · packKind=sheet→PO screen · handoff PO |
| task_df4700bc | asset-detail | po | data_analy | **completed** | roleOnly PASS · hash skip · GAPs TITLE/GPS/PACK/TYPE chốt · handoff Design · **cấm** re-scan |
| task_039c59ba | asset-detail | design | po | **completed** | roleOnly PASS · dual proto + ux-analy + demo-parity · GPS dual · design_confirm approve · **cấm** re-scan / e2e |
| task_ce65a25c | asset-detail | sa | design | **completed** | roleOnly PASS · solution_confirm approve · GET by id + XCO · Step 4b N/A · handoff TL · **cấm** Write native / e2e |
| task_26ea4179 | asset-detail | team_lead | sa | **completed** | roleOnly PASS · `/agent-tl-mobile` · route_a · T-IOS-AL-01 · T-IOS-AD-01 · T-AND-AL-01 · T-AND-AD-01 · T-BE n/a · T-BFF reuse · handoff Dev · **cấm** e2e / Step 4b / yarn build |
| task_c6001628 | asset-detail | dev | team_lead | **completed** | roleOnly PASS · dual native · T-IOS-AL/AD · T-AND-AL/AD · verify iOS+Android+BFF PASS · Step 4b N/A · handoff QA · **cấm** e2e |
| task_cbda6a54 | asset-detail | qa | dev | **failed** | roleOnly=`qa` · e2e FAIL · GAP-QA-REAL-01 · GAP-MOB-ASSET-DET-NAV-02 · `qa_fail_rollback` |
| task_24109163 | asset-detail | dev | task_cbda6a54 | **pending_confirm** | qaFailFix=1 · qaFixPhase=**plan** · plan written · handoff `dev-compact.md` · **cấm** code · board **`qa_fix_plan`** Approve |

## Confirms

| Gate | Value |
|------|-------|
| data_analy | **PASS** · 4 artifacts · CTX written |
| po | **PASS** · `po/requirement.md` confirmed · autoApprove=ON |
| design | **PASS** · dual proto + ux-analy §1–§9 + demo-parity Must closed · `design_confirm` approve · autoApprove=ON |
| sa | **PASS** · `be/solution-discovery.md` confirmed · `solution_confirm` approve · autoApprove=ON |
| team_lead | **PASS** · `task/asset-detail.md` confirmed · `route_confirm=route_a` · ios/android repo confirm · autoApprove=ON |
| dev | **PASS** · prior ship · `implement/ios.md` + `implement/android.md` · dual build PASS · autoApprove=ON |
| qa | **FAIL** · e2e-qa-mobile ok:false · Verdict fail · **cấm** completed |
| qa_fail_rollback | **confirmed** · Dev plan required |
| qa_fix_plan | **await_confirm** · `implement/asset-detail-qa-fix-plan.md` · **cấm** autoApprove skip |
| change_scope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-DET-PACK-01) |
| kit_missing_confirm | **N/A** — reuse map detail kit dual |
| route_confirm | **route_a** |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| autoApprove | ON · **không** skip qa_fail_rollback / qa_fix_plan |
| e2eQa | ON · runtime FAIL (prior) |
| ios_test_phase | **phase1_iphone** (A4-IPAD DEFER · dest iPhone 17 Pro Max) |
| store_qa | **run_store** · FAIL content (prior) |
| be_repo | `Linm.RMMS.WebService` · **cấm ERP.*** |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| Step 4b | **N/A** · reuse GetById live |

## Blockers / open questions

- *(closed epic cleanup `task_a33dfede`)* OfflineDemo / toast «dữ liệu mẫu» → live-only EmptyChrome dual · VERIFY PASS
- **(open QA)** GAP-QA-REAL-01 · GAP-QA-STORE-01/03 · GAP-MOB-ASSET-DET-NAV-02 · GAP-MOB-E2E-VIS-01 · **cấm** completed / review
- *(plan ready)* `implement/asset-detail-qa-fix-plan.md` · await board **`qa_fix_plan`** → Dev `qaFixPhase=implement`
- Sibling `gis-map` CTA toast P1 · **cấm** auto start

## Links

- data-analy → po → design → sa → tl → dev confirmed → **qa blocked** → **dev plan await_confirm** → review pending
- native: e2eQa ON → prior FAIL — **cấm** mfeStdUrl · **cấm** chain review
- bugs: `qa/bugs/asset-detail.md` · align: `ui/review/align-ux.md`
- QA fix plan: `specs/asset-detail/implement/asset-detail-qa-fix-plan.md`
- handoff: `specs/asset-detail/handoff/dev-compact.md`
- Next: board **`qa_fix_plan`** Approve → Dev implement Plan §1–6 · rồi `/agent-qa*`
- closeout Dev QA-fix plan: `task_24109163` · roleOnly=`dev` · qaFixPhase=**plan** · **cấm** code · board **`qa_fix_plan`** · at: `2026-09-01T09:52:57.000Z`
- closeout epic cleanup_mock: `task_a33dfede` · live-only dual · at: `2026-09-01T10:10:00.000Z`
