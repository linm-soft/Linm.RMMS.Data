# STATUS — home

| Field | Value |
|-------|-------|
| feature | `home` |
| phase | `sa` |
| status | `in_progress` |
| changeScope | `new_page` |
| packKind | `hub` (**PO + Design confirm**) |
| stack | `native_dual` |
| demo | `specs/home/ui/prototype/{ios,android}/index.html` `#sc-home` · SSOT mobile-p1 |
| context | `docs/context/features/home.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/home/ui/prototype/ios/index.html#sc-home` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/home/ui/prototype/android/index.html#sc-home` |
| ios | `Linm.RMMS.Mobile.iOS` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/auth/profile` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/home-control-hint.md` · `home-bff-endpoints.md` · `home-action-tree.md` |
| po | `specs/home/po/requirement.md` |
| design | `specs/home/ui/design.md` · `ux-analy.md` · `prototype/{ios,android}/index.html` |
| backup | `specs/home/_backup/20260819T054500Z` |
| taskId | `task_41cb12f0` |
| skillVersion | `2026.08.19.07` (agent-design-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.20` |
| rulesVersion | `2026.08.19.23` |
| versionGate | `rechecked` |
| contentHash | `sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed` |
| bffContentHash | `sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581` |
| verifyGate | iOS `xcodegen` + `xcodebuild` scheme **LinmRmms** dest **iPhone 17 Pro** **PASS** · Android `assembleDebug` **PASS** · BFF `dotnet build` **PASS** · roleOnly=`design` · **cấm** mfeStdUrl |
| updatedAt | `2026-08-19T05:45:41.666Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after Design `task_41cb12f0` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/home-control-hint.md · home-bff-endpoints.md · home-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **in_progress** |
| 3 | team-lead | task/home.md | pending |
| 4 | dev | implement/ios.md · implement/android.md | pending |
| 5 | qa | qa/scenarios.md · qa/store/home/CAPTURE.md | pending |
| 6 | review | review/findings.md | pending |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` |
| packKind | **`hub`** (PO + Design confirm) |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| kit_missing_confirm | **N/A** — reuse map home kit dual |
| autoApprove | **ON** |
| e2eQa | **ON** |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | pending (SA turn) |
| sibling_assign | 6 × `pending_confirm` (chờ Approve · **cấm** auto start) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_46fb294c | home | data_analy | — | **completed** | `/agent-data-analy-mobile` · roleOnly · autoApprove=ON |
| task_b088605a | home | po | data_analy | **completed** | `/agent-po-mobile` · roleOnly · autoApprove=ON · packKind `hub` |
| task_41cb12f0 | home | design | po | **completed** | `/agent-design-mobile` · roleOnly · dual mock + ux-analy · design_confirm approve |
| task_26954659 | patrol-home | data_analy | home | pending_confirm | sibling_assign |
| task_5f9013dd | incident-create | data_analy | home | pending_confirm | sibling_assign |
| task_e8ad42d2 | supervise | data_analy | home | pending_confirm | sibling_assign |
| task_659bf5c2 | mnt-list | data_analy | home | pending_confirm | sibling_assign |
| task_246a6ce0 | incident-list | data_analy | home | pending_confirm | sibling_assign |
| task_56d16d11 | asset-hub | data_analy | home | pending_confirm | sibling_assign |

## Blockers / open questions

- GAP-F-HOME-01 — PO+Design: role **ẩn live** · wallet **static demo** · **cấm** invent API
- GAP-F-HOME-02 — PO+Design: badge 0 ẩn · **cấm** GET inbox trên `home` · owner `ops`
- GAP-F-HOME-03 — PO+Design: **cấm** ship foot Gói · pack proto skip
- Sibling **không** start đến khi board Approve (`GAP-MOB-ACT-06`)

## Handoff → SA

| Field | Value |
|-------|-------|
| feature / packKind | `home` / **`hub`** (confirmed) |
| phase_from / phase_to | design **confirmed** → sa pending |
| STATUS | `specs/home/STATUS.md` |
| Context / Demo / DI | CTX `home.md` · dual `#sc-home` · no Excel |
| design / ux-analy | `ui/design.md` · `ui/ux-analy.md` §1–§9 |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-home` |
| controlHint / UNCLEAR | `po/requirement.md` §5 · none |
| Action tree / BFF | `_data-analy/home-action-tree.md` · `GET auth/profile` only · Step 4b **N/A** |
| Open questions | GAP-F-HOME-01/02/03 đã chốt |
| Kit | reuse map · `kit_missing_confirm` N/A |
| Next AskQuestion | autoApprove=ON — `solution_confirm` khi SA xong |
| Next slash | `/agent-sa-mobile` |
| Chain this turn | **không** (roleOnly=design) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / yarn start:std |

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- Handoff → `/agent-sa-mobile` (roleOnly turn này **không** chain SA)

## Retry

- from: `data_analy` · at: `2026-08-19T05:20:19.977Z` · board user Retry step · **resolved** data_analy done
