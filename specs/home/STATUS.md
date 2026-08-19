# STATUS — home

| Field | Value |
|-------|-------|
| feature | `home` |
| phase | `dev` |
| status | `in_progress` |
| changeScope | `new_page` |
| packKind | `hub` (**PO + Design + SA confirm**) |
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
| sa | `specs/home/be/solution-discovery.md` |
| tl | `specs/home/task/home.md` |
| backup | `specs/home/_backup/20260819T054702Z` |
| taskId | `task_b40d1e9d` |
| skillVersion | `2026.08.19.20` (agent-tl-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.20` |
| rulesVersion | `2026.08.19.23` |
| versionGate | `rechecked` |
| contentHash | `sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed` |
| bffContentHash | `sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581` |
| verifyGate | iOS `xcodegen` + `xcodebuild` scheme **LinmRmms** dest **iPhone 17 Pro** **PASS** · Android `assembleDebug` **PASS** · BFF `dotnet build` **PASS** · roleOnly=`team_lead` · Step 4b **N/A** · **cấm** mfeStdUrl |
| updatedAt | `2026-08-19T05:53:59.451Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after TL `task_b40d1e9d` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/home-control-hint.md · home-bff-endpoints.md · home-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/home.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **in_progress** |
| 5 | qa | qa/scenarios.md · qa/store/home/CAPTURE.md | pending |
| 6 | review | review/findings.md | pending |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` |
| packKind | **`hub`** (PO + Design + SA confirm) |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| kit_missing_confirm | **N/A** — reuse map home kit dual |
| route_confirm | **route_a** (autoApprove=ON · TL) |
| autoApprove | **ON** |
| e2eQa | **ON** |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| sibling_assign | 6 × `pending_confirm` (chờ Approve · **cấm** auto start) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_46fb294c | home | data_analy | — | **completed** | `/agent-data-analy-mobile` · roleOnly · autoApprove=ON |
| task_b088605a | home | po | data_analy | **completed** | `/agent-po-mobile` · roleOnly · autoApprove=ON · packKind `hub` |
| task_41cb12f0 | home | design | po | **completed** | `/agent-design-mobile` · roleOnly · dual mock + ux-analy · design_confirm approve |
| task_15a962de | home | sa | design | **completed** | `/agent-sa-mobile` · roleOnly · solution_confirm approve · GET `auth/profile` only · Step 4b N/A |
| task_b40d1e9d | home | team_lead | sa | **completed** | `/agent-tl-mobile` · roleOnly · route_a · T-IOS-HOME · T-AND-HOME · T-BE n/a |
| task_26954659 | patrol-home | data_analy | home | pending_confirm | sibling_assign |
| task_5f9013dd | incident-create | data_analy | home | pending_confirm | sibling_assign |
| task_e8ad42d2 | supervise | data_analy | home | pending_confirm | sibling_assign |
| task_659bf5c2 | mnt-list | data_analy | home | pending_confirm | sibling_assign |
| task_246a6ce0 | incident-list | data_analy | home | pending_confirm | sibling_assign |
| task_56d16d11 | asset-hub | data_analy | home | pending_confirm | sibling_assign |

## Notes

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-ALIGN-01c** tab `tabLabel` **10** · iOS Tuần đường **`location.fill`** ≡ Android **`Place`** · proto Android **cấm** 11.

## Blockers / open questions

- GAP-F-HOME-01 — SA/TL: role **ẩn live** · wallet **static demo** · **cấm** invent API
- GAP-F-HOME-02 — SA/TL: badge 0 ẩn · **cấm** GET inbox trên `home` · owner `ops`
- GAP-F-HOME-03 — SA/TL: **cấm** ship foot Gói
- Sibling **không** start đến khi board Approve (`GAP-MOB-ACT-06`)
- Step 4b / T-BE-* **N/A** (reuse Auth profile)

## Handoff → Dev

| Field | Value |
|-------|-------|
| feature / packKind | `home` / **`hub`** (confirmed) |
| phase_from / phase_to | team-lead **confirmed** → dev pending |
| STATUS | `specs/home/STATUS.md` |
| Context / Demo / DI | CTX `home.md` · dual `#sc-home` · no Excel |
| design / ux-analy | `ui/design.md` · `ui/ux-analy.md` §1–§9 |
| solution | `be/solution-discovery.md` · `solution_confirm=approve` |
| task pack | `task/home.md` · `route_confirm=route_a` |
| reviewUrl | dual `file://…/prototype/{ios,android}/index.html#sc-home` |
| controlHint / UNCLEAR | `po/requirement.md` §5 · none |
| Action tree / BFF | `_data-analy/home-action-tree.md` · **chỉ** `GET auth/profile` · Step 4b **N/A** |
| Open questions | GAP-F-HOME-01/02/03 đã chốt SA/TL |
| Kit | reuse map · `kit_missing_confirm` N/A · **không** T-KIT |
| Tasks | `T-IOS-HOME` · `T-AND-HOME` · `T-BE` n/a |
| Nav | Hồ sơ → tab Tôi · sibling → toast nhãn |
| Next AskQuestion | autoApprove=ON — Dev tự chạy khi tới lượt |
| Next slash | `/agent-dev-ios` + `/agent-dev-android` |
| Chain this turn | **không** (roleOnly=team_lead) |
| e2eQa | ON khi QA · `yarn e2e-qa-mobile` · **cấm** mfeStdUrl / yarn start:std |

## Links

- data-analy → po → ui → be → task → implement → qa → review
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- Handoff → `/agent-dev-ios` + `/agent-dev-android` (roleOnly turn này **không** chain Dev)

## Retry

- from: `data_analy` · at: `2026-08-19T05:20:19.977Z` · board user Retry step · **resolved** data_analy done
