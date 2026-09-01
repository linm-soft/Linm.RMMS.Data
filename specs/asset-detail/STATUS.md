# STATUS — asset-detail

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| phase | `qa` |
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
| qa.scenarios | `specs/asset-detail/qa/scenarios.md` |
| qa.store | `specs/asset-detail/qa/store/asset-detail/` |
| qa.bugs | `specs/asset-detail/qa/bugs/asset-detail.md` |
| lastRole | `qa` · `/agent-qa-mobile` · **FAIL** · blocked |
| autoApprove | `ON` · **cấm** skip `qa_fail_rollback` |
| e2eQa | ON · yarn e2e-qa-mobile **FAIL** · **cấm** start:std / mfeStdUrl |
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
| skillId | `agent-qa-mobile` |
| skillVersion | `2026.08.29.1` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.31.2` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `rechecked` |
| verifyGate | roleOnly=qa · e2e-qa-mobile **FAIL** · BFF build PASS · GAP-QA-REAL-01 · GAP-MOB-ASSET-DET-NAV-02 · **cấm** completed |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-detail/ui/prototype/ios/index.html#sc-asset-detail` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/asset-detail/ui/prototype/android/index.html#sc-asset-detail` |
| updatedAt | `2026-08-30T22:23:26.831Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (qa fail · `task_cbda6a54`) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/asset-detail-control-hint.md · asset-detail-bff-endpoints.md · asset-detail-real-data.md · asset-detail-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/asset-detail.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
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

## Confirms

| Gate | Value |
|------|-------|
| data_analy | **PASS** · 4 artifacts · CTX written |
| po | **PASS** · `po/requirement.md` confirmed · autoApprove=ON |
| design | **PASS** · dual proto + ux-analy §1–§9 + demo-parity Must closed · `design_confirm` approve · autoApprove=ON |
| sa | **PASS** · `be/solution-discovery.md` confirmed · `solution_confirm` approve · autoApprove=ON |
| team_lead | **PASS** · `task/asset-detail.md` confirmed · `route_confirm=route_a` · ios/android repo confirm · autoApprove=ON |
| dev | **PASS** · `implement/ios.md` + `implement/android.md` · dual build PASS · autoApprove=ON |
| qa | **FAIL** · e2e-qa-mobile ok:false · Verdict fail · **cấm** completed |
| qa_fail_rollback | **await_confirm** · Dev plan required |
| change_scope | `new_page` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-ASSET-DET-PACK-01) |
| kit_missing_confirm | **N/A** — reuse map detail kit dual |
| route_confirm | **route_a** |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse |
| autoApprove | ON · **không** skip qa_fail_rollback |
| e2eQa | ON · runtime FAIL |
| ios_test_phase | **phase1_iphone** (A4-IPAD DEFER · dest iPhone 17 Pro Max) |
| store_qa | **run_store** · FAIL content |
| be_repo | `Linm.RMMS.WebService` · **cấm ERP.*** |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| Step 4b | **N/A** · reuse GetById live |

## Blockers / open questions

- **QA FAIL** · GAP-QA-REAL-01 · GAP-QA-STORE-01/03 · GAP-MOB-ASSET-DET-NAV-02 · GAP-MOB-E2E-VIS-01 → Dev fix plan
- Sibling `gis-map` `task_23d7eba0` · CTA toast P1 · **cấm** auto start

## Links

- data-analy → po → design → sa → tl → dev confirmed → **qa blocked** → review pending
- native: e2eQa ON → `yarn e2e-qa-mobile` **FAIL** — **cấm** mfeStdUrl · **cấm** completed
- bugs: `qa/bugs/asset-detail.md` · align: `ui/review/align-ux.md`
- BFF live OK với `X-Company-Id: LINM` · app path broken on detail push / Android demo list
- Next: board **`qa_fail_rollback`** → Dev `asset-detail-qa-fix-plan.md` · **cấm** chain review
- closeout QA mobile: `task_cbda6a54` · roleOnly=`qa` · `/agent-qa-mobile` · Verdict **fail** · at: `2026-08-30T22:21:24.000Z`
