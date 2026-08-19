# STATUS — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` (**PO confirm**) |
| stack | `native_dual` |
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
| po | `specs/ops/po/requirement-mobile.md` (+ web `po/requirement.md` kept) |
| design | `specs/ops/ui/design-mobile.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md` · prototype dual |
| sa | `specs/ops/be/solution-discovery-mobile.md` |
| tl | `specs/ops/task/ops-mobile.md` |
| implement | `specs/ops/implement/ios.md` · `implement/android.md` |
| qa | `specs/ops/qa/scenarios.md` · `qa/store/ops/` · `ui/review/align-ux.md` · `qa/e2e/{ios,android}.yaml` |
| review | `specs/ops/review/findings-mobile.md` · `REVIEW-META.json` |
| taskId | `task_a85d01a0` |
| skillVersion | `2026.08.19.26` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.27` |
| rulesVersion | `2026.08.19.32` |
| versionGate | `rechecked` |
| contentHash | `sha256:ops-mobile-edit-list-20260819` |
| bffContentHash | `sha256:notification-inbox-proxy-passthrough` |
| autoApprove | **ON** |
| e2eQa | **ON** |
| solution_confirm | **approve** (autoApprove=ON · `task_47a20229`) |
| route_confirm | **route_a** (autoApprove=ON · TL `task_104d8dd0`) |
| review_confirm | **approve** (autoApprove=ON · `task_a85d01a0`) |
| post_review | **skip** |
| verifyGate | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** **PASS** · Android `assembleDebug` **PASS** · BFF `dotnet build` **PASS** · prior QA `yarn e2e-qa-mobile` **ok:true** · roleOnly=`review` · Step 4b **N/A** · **cấm** mfeStdUrl |
| ios_test_phase | `phase1_iphone` (autoApprove=ON) · **A4-IPAD DEFER** |
| align_confirm | **approve** (autoApprove=ON · QA) |
| updatedAt | `2026-08-19T13:10:08.544Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after Review `task_a85d01a0` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/ops-*.md | **confirmed** |
| 1 | po | po/requirement-mobile.md | **confirmed** |
| 2.1 | design | ui/design-mobile.md · ux-analy.md · demo-parity.md · prototype dual | **confirmed** |
| 2.2 | sa | be/solution-discovery-mobile.md | **confirmed** |
| 3 | team-lead | task/ops-mobile.md | **confirmed** |
| 4 | dev | implement/ios.md · android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/ops · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings-mobile.md · REVIEW-META.json | **done** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `edit_page` |
| packKind | **`list`** (PO confirm) |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| kit_missing_confirm | **N/A** — reuse list kit dual |
| route_confirm | **route_a** (autoApprove=ON · TL) |
| autoApprove | **ON** |
| e2eQa | **ON** · runtime PASS (prior QA) |
| align_confirm | **approve** (QA · Must 0) |
| version_mismatch_action | **recheck_new** |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| review_confirm | **confirmed** (user Approve board) |
| post_review | **skip** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_f2c9a5de | ops | review | qa | **completed** | prior full_pipeline · Review approve · native list shipped |
| task_8f46a3b3 | ops | po | data_analy | **completed** | `/agent-po-mobile` · roleOnly=`po` · autoApprove=ON · packKind `list` · VERIFY PASS |
| task_7e65792d | ops | design | po | **completed** | `/agent-design-mobile` · roleOnly=`design` · dual proto + ux-analy + demo-parity · VERIFY PASS |
| task_47a20229 | ops | sa | design | **completed** | `/agent-sa-mobile` · roleOnly=`sa` · solution_confirm approve · Step 4b N/A · VERIFY PASS |
| task_104d8dd0 | ops | team_lead | sa | **completed** | `/agent-tl-mobile` · route_a · VERIFY PASS |
| task_3b00ed47 | ops | dev | team_lead | **completed** | `/agent-dev-ios` + `/agent-dev-android` · DELTA verify · VERIFY PASS |
| task_6be285ee | ops | qa | dev | **completed** | `/agent-qa-mobile` · roleOnly=`qa` · e2e-qa-mobile **ok:true** · align Must 0 · VERIFY PASS |
| task_a85d01a0 | ops | review | qa | **completed** | `/agent-review-mobile` · review_confirm approve · verifyGate PASS · roleOnly · post_review skip |

## Blockers / open questions

- GAP-MOB-OPS-NAV/LIST/READ/DATA/DEMO — **CLOSED**
- GAP-QA-OPS-IOS-01 — **CLOSED** (yaml: assert `sc-ops`+row · bỏ assert title «Thông báo» iOS a11y)
- GAP-MOB-UX-COMP-OPS-01 — Android TopBar trailing default · **Should DEFER** · non-block
- R-07 P2 — thiếu `PrivacyInfo.xcprivacy` / Play Data safety / landing HTTPS → **Accept** đến `post_review`/`app_submit` (**không** chặn list done)
- Web Kind B form/schema · SignalR · Command — **OUT** mobile P1
- Pipeline **complete** — visual sau done → `/edit-mobile-feature`

## Handoff → Done

| Field | Value |
|-------|-------|
| feature / packKind | `ops` / **`list`** (confirmed) |
| phase_from / phase_to | review **confirmed** → **done** |
| STATUS | `specs/ops/STATUS.md` |
| review | `review/findings-mobile.md` · `review_confirm=approve` |
| Open Must align | **0** |
| post_review | **skip** |
| Chain this turn | **không** (roleOnly=`review`) |
| e2eQa | prior QA **PASS** · **cấm** mfeStdUrl / yarn start:std |

## Links

- data-analy: `specs/_data-analy/ops-control-hint.md`
- PO mobile: `specs/ops/po/requirement-mobile.md`
- Design mobile: `specs/ops/ui/design-mobile.md` · `ui/ux-analy.md` · `ui/review/demo-parity.md`
- QA: `specs/ops/qa/scenarios.md` · `qa/store/ops/CAPTURE.md` · `ui/review/align-ux.md`
- SA mobile: `specs/ops/be/solution-discovery-mobile.md`
- TL mobile: `specs/ops/task/ops-mobile.md`
- DOMAIN-MAP: `Linm.RMMS.WebService/docs/DOMAIN-MAP.md`

## Resume / closeout

- closeout Review: `task_a85d01a0` · `/agent-review-mobile` · roleOnly=`review` · `review_confirm=approve` · P0 **none** · Must align **0** · VERIFY GATE PASS · iOS xcodegen+xcodebuild iPhone 17 Pro · Android assembleDebug · BFF dotnet build · prior e2e **ok:true** · post_review **skip** · pipeline **complete** · at: `2026-08-19T13:09:24.000Z`
- closeout QA: `task_6be285ee` · `/agent-qa-mobile` · roleOnly=`qa` · autoApprove=ON · ios_test_phase **phase1_iphone** · VERIFY GATE PASS · docker API :5101 + BFF :5202 · `yarn e2e-qa-mobile` **ok:true** · iPhone 17 Pro Max · Pixel_2 · Maestro iOS+Android PASS · PNG `qa/screens` + `qa/store/ops` · align-ux Must 0 · GAP-QA-OPS-IOS-01 **CLOSED** (yaml fix) · at: `2026-08-19T13:05:00.000Z`
- closeout Dev: `task_3b00ed47` · VERIFY GATE PASS · at: `2026-08-19T12:55:00.000Z`
- prior Review: `task_f2c9a5de` · **approve** · at: `2026-08-19T12:05:00.000Z`

## Verify

| Gate | Result |
|------|--------|
| Role | review · **done** |
| iOS xcodegen + xcodebuild iPhone 17 Pro | **PASS** |
| Android assembleDebug | **PASS** |
| BFF dotnet build | **PASS** |
| e2e-qa-mobile | **ok:true** · prior QA `2026-08-19T12:59:36.360Z` |
| Step 4b | **N/A** — Notification Signed |
| ERP.* | **none** |
| mfeStdUrl | **none** |
| align Must | **0** |
| review_confirm | **approve** |

<!-- Version meta: skillVersion=2026.08.19.26 · schemaVersion=1 · workflowVersion=2026.08.19.27 · rulesVersion=2026.08.19.32 · versionGate=rechecked -->
