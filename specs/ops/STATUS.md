# STATUS — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` (**PO confirm**) |
| stack | `native_dual` |
| runMode | `fix_gaps` · gap=`cleanup_mock` |
| demo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/ios/index.html#sc-ops` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/ops.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/ios/index.html#sc-ops` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/android/index.html#sc-ops` |
| ios | `Linm.RMMS.Mobile.iOS` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `Linm.RMMS.Mobile.Android` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/notification/*` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP Notification — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/ops-control-hint.md` · `ops-bff-endpoints.md` · `ops-action-tree.md` · `ops-real-data.md` |
| po | `specs/ops/po/requirement-mobile.md` |
| design | `specs/ops/ui/design-mobile.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` |
| sa | `specs/ops/be/solution-discovery-mobile.md` |
| tl | `specs/ops/task/ops-mobile.md` |
| implement | `specs/ops/implement/ios.md` · `implement/android.md` |
| qa | `specs/ops/qa/scenarios.md` · `qa/store/ops/` · `ui/review/align-ux.md` |
| review | `specs/ops/review/findings-mobile.md` · `handoff/review-compact.md` |
| taskId | `task_992292aa` |
| parent | `mobile-cleanup-mock` |
| skillVersion | `2026.08.19.26` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.27` |
| rulesVersion | `2026.08.19.32` |
| versionGate | `rechecked` |
| contentHash | `sha256:ops-mobile-cleanup-mock-20260901` |
| bffContentHash | `sha256:notification-inbox-proxy-passthrough` |
| autoApprove | **ON** |
| e2eQa | **ON** · PASS · harvest remedi |
| solution_confirm | **approve** |
| route_confirm | **route_a** |
| review_confirm | **approve** |
| post_review | **skip** |
| verifyGate | review roleOnly **PASS** · prior e2e-qa-mobile **PASS** · align Must 0 · **cấm** build/e2e this role |
| updatedAt | `2026-09-01T02:36:56.739Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after Review `task_992292aa` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/ops-*.md | **confirmed** |
| 1 | po | po/requirement-mobile.md | **confirmed** |
| 2.1 | design | ui/design-mobile.md · ux-analy.md | **confirmed** |
| 2.2 | sa | be/solution-discovery-mobile.md | **confirmed** |
| 3 | team-lead | task/ops-mobile.md | **confirmed** |
| 4 | dev | implement/ios.md · android.md | **confirmed** |
| 5 | qa | qa/* | **confirmed** |
| 6 | review | review/findings-mobile.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `edit_page` |
| packKind | **`list`** |
| stack_confirm | `native_dual` |
| autoApprove | **ON** |
| e2eQa | **ON** · **PASS** |
| ios_test_phase | **phase1_iphone** |
| store_qa | **run_store** |
| align_confirm | **approve** |
| route_confirm | **route_a** |
| review_confirm | **confirmed** (user Approve board) |
| post_review | **skip** |
| version_mismatch_action | **recheck_new** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_a85d01a0 | ops | review | qa | **completed** | prior approve |
| task_708dcc0b | ops | dev | — | **completed** | cleanup_mock · VERIFY PASS |
| task_1f014c56 | ops | qa | — | **completed** | `/agent-qa-mobile` · e2e PASS · EmptyChrome |
| task_992292aa | ops | review | qa | **completed** | `/agent-review-mobile` · approve · cleanup_mock re-audit |

## Blockers / open questions

- GAP-MOB-UX-COMP-OPS-01 Android TopBar trailing · **DEFER**
- GAP-BE-OPS-INBOX-500 API inbox 500 · EmptyChrome OK · BE follow-up

## Handoff → done

| Field | Value |
|-------|-------|
| feature / packKind | `ops` / **`list`** |
| phase_from / phase_to | review **confirmed** → **done** |
| review_confirm | **approve** |
| post_review | **skip** |
| findings | `review/findings-mobile.md` · compact `handoff/review-compact.md` |
| Next | optional Should/BE · **cấm** re-run full pipeline |

## Resume / closeout

- Review closeout: `task_992292aa` · review_confirm approve · post_review skip · `2026-09-01T02:40:00.000Z`

## Verify

| Gate | Result |
|------|--------|
| Role | review · roleOnly · **done** |
| Artifact + STATUS | **PASS** |
| e2e / build this role | **skipped** (cấm) · prior QA **PASS** |
| align Must | **0** |
| mfeStdUrl | **none** |

<!-- Version meta: skillVersion=2026.08.19.26 · schemaVersion=1 · workflowVersion=2026.08.19.27 · rulesVersion=2026.08.19.32 · versionGate=rechecked -->
