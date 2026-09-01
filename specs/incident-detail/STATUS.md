# STATUS — incident-detail

| Field | Value |
|-------|-------|
| feature | `incident-detail` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` (cleanup-mock) |
| packKind | **`screen`** (PO+Design+SA+TL chốt · đóng GAP-MOB-INC-DETAIL-PACK-01) |
| stack | `native_dual` |
| mode | `feature_context` |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-detail/ui/prototype/{ios,android}/index.html `#sc-incident-detail` · `DES-MOB-INC-DETAIL` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident-detail.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/incident/incidents/{id}` · `…/{id}/close` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Incident — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/incident-detail-control-hint.md` · `incident-detail-bff-endpoints.md` · `incident-detail-action-tree.md` · `incident-detail-real-data.md` |
| po | `specs/incident-detail/po/requirement.md` |
| design | `specs/incident-detail/ui/design.md` · `ux-analy.md` · `html-to-native-map.md` · `review/demo-parity.md` · `prototype/ios|android/index.html` |
| sa | `specs/incident-detail/be/solution-discovery.md` |
| task | `specs/incident-detail/task/incident-detail.md` |
| implement | `specs/incident-detail/implement/ios.md` · `implement/android.md` |
| qa | `specs/incident-detail/qa/scenarios.md` · `qa/store/incident-detail/` · `ui/review/align-ux.md` |
| review | `specs/incident-detail/review/findings.md` · `REVIEW-META.json` |
| taskId | `task_3774bc97` |
| lastRole | `review` · `/agent-review-mobile` · **PASS** |
| autoApprove | `ON` |
| e2eQa | ON — `yarn e2e-qa-mobile` **PASS** · task_f0f56b29 post cleanup-mock |
| skillId | `agent-review-mobile` |
| skillVersion | `2026.08.20.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.25.01` |
| rulesVersion | `2026.08.25.2` |
| versionGate | `rechecked` |
| contentHash | `sha256:incident-detail-control-hint-20260829` |
| realDataHash | `sha256:incident-detail-mobile-real-data-20260829` |
| bffContentHash | `sha256:incident-incidents-getbyid-close-proxy` |
| reviewHash | `sha256:cb070b814f5c15b1fd0e2152b78bae87fc29be6e4c44746f8d623f6a2419d6c7` |
| updatedAt | `2026-09-01T04:38:09.165Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| review | incident-detail | task_3774bc97 | released 2026-09-01T04:45:00Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/incident-detail-control-hint.md · incident-detail-bff-endpoints.md · incident-detail-real-data.md · incident-detail-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/incident-detail.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/incident-detail/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` |
| packKind | **`screen`** (PO + Design + SA + TL) |
| kit_missing_confirm | **N/A** — reuse map detail kit dual |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| ios_repo_confirm | **confirmed** · `Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | **confirmed** · `Linm.RMMS.Mobile.Android` |
| route_confirm | **route_a** (autoApprove) · list/create → push detail + `Id` |
| autoApprove | **ON** |
| e2eQa | ON — `/agent-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** · `store_qa=run_store` · **PASS** |
| align_confirm | **confirmed** (autoApprove) · Must **0** · **Aligned** |
| review_confirm | **confirmed** (user Approve board) |
| post_review | **skip** (autoApprove) |
| Step 4b | **N/A** · reuse GetById + Close · Lat/Lng Signed **DEFER** |
| VERIFY GATE | Review findings **PASS** · prior Dev/QA evidence only · **cấm** yarn build/e2e/start:std |
| GAP-DES-DEMO-RESCAN-01 | hash skip · **không** re-scan demo |
| GAP-MOB-INC-DETAIL-GPS-01 | **closed P1** SA · HasGps+Route/Km · demo coords offline · Lat/Lng DEFER |
| GAP-MOB-INC-DETAIL-SRC-01 | **closed** Design · dual Nguồn khi có data |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_42bb4141 | incident-detail | data_analy | — | **done** | control-hint + BFF + real-data + action-tree · handoff PO |
| task_7563d8e0 | incident-detail | po | data_analy | **done** | requirement · packKind screen · GAP pack/GPS/source chốt · handoff Design |
| task_db8582b2 | incident-detail | design | po | **done** | dual proto · ux-analy · html-to-native-map · demo-parity · design_confirm approve · handoff SA |
| task_578d3886 | incident-detail | sa | design | **done** | solution-discovery · GetById+Close · GPS DEFER Lat/Lng · solution_confirm approve · handoff TL |
| task_fd50c854 | incident-detail | team_lead | sa | **done** | task MD · T-IOS-INC-DETAIL · T-AND-INC-DETAIL · T-BE n/a · route_a · handoff Dev |
| task_ebf09e82 | incident-detail | dev | team_lead | **done** | iOS+Android detail · GET/close · VERIFY PASS · handoff QA |
| task_21b55839 | incident-detail | qa | dev | **done** | e2e-qa-mobile PASS · align Aligned · store PNG · handoff Review |
| task_23be5dc0 | incident-detail | review | qa | **done** | findings · review_confirm done · pipeline complete |
| task_53a77d94 | incident-detail | dev | team_lead | **done** | cleanup-mock live-only · dev-compact · VERIFY PASS |
| task_f0f56b29 | incident-detail | qa | dev | **done** | e2e-qa-mobile PASS · post cleanup-mock · align Aligned · store PNG |
| task_3774bc97 | incident-detail | review | qa | **done** | findings · review_confirm done · live-only cleanup-mock recheck · pipeline complete |

## Blockers / open questions

- GAP-MOB-INC-DETAIL-PACK-01 — **closed** PO+Design+SA+TL · packKind=`screen`
- GAP-MOB-INC-DETAIL-GPS-01 — **closed P1** · HasGps+Route/Km · Lat/Lng Signed **DEFER** (không block ship)
- GAP-MOB-INC-DETAIL-SRC-01 — **closed** Design · dual Nguồn khi có data (empty omit)
- GAP-MOB-A11Y-INC-DETAIL-01 — Should · iOS list detail btn a11y merge (non-blocking)
- RequirePermission TODO IncidentsController — Accept P2 CommonLib (non-blocking)

## Links

- data-analy → po → ui → be → task → implement → qa → review (**done**)
- native: e2eQa ON → prior QA PASS — Review **cấm** mfeStdUrl / re-run e2e
- analy artifacts: `specs/_data-analy/incident-detail-*.md`
- po: `specs/incident-detail/po/requirement.md`
- design: `specs/incident-detail/ui/design.md` · `ux-analy.md` · `review/demo-parity.md` · `review/align-ux.md`
- sa: `specs/incident-detail/be/solution-discovery.md`
- task: `specs/incident-detail/task/incident-detail.md`
- implement: `specs/incident-detail/implement/ios.md` · `implement/android.md`
- qa: `specs/incident-detail/qa/scenarios.md` · `qa/store/incident-detail/`
- review: `specs/incident-detail/review/findings.md` · `REVIEW-META.json`
