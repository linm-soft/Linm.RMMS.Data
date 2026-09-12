# STATUS — home

| Field | Value |
|-------|-------|
| feature | `home` |
| phase | `done` |
| status | `done` |
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
| implement | `specs/home/implement/ios.md` · `implement/android.md` |
| qa | `specs/home/qa/scenarios.md` · `qa/store/home/CAPTURE.md` · `qa/e2e/{ios,android}.yaml` |
| review | `specs/home/review/findings.md` · `REVIEW-META.json` |
| backup | `specs/home/_backup/20260819T054702Z` |
| taskId | `task_29b1f560` |
| skillVersion | `2026.08.19.20` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.20` |
| rulesVersion | `2026.08.19.23` |
| versionGate | `rechecked` |
| contentHash | `sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed` |
| bffContentHash | `sha256:ca96af7dda63e5e34998ce57d51d7e76fd2391c0ffbdb39d7fca7abbf39ca581` |
| verifyGate | iOS `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** **PASS** · Android `assembleDebug` **PASS** · BFF `dotnet build` **PASS** · prior QA `yarn e2e-qa-mobile` **PASS** · roleOnly=`review` · Step 4b **N/A** · **cấm** mfeStdUrl |
| review_confirm | **approve** (autoApprove=ON · `task_29b1f560`) |
| post_review | **skip** |
| updatedAt | `2026-08-19T06:31:38.485Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after Review `task_29b1f560` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/home-control-hint.md · home-bff-endpoints.md · home-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios/index.html · prototype/android/index.html | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/home.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/home/CAPTURE.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
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
| e2eQa | **ON** · runtime PASS (prior QA) |
| ios_test_phase | **phase1_iphone** (autoApprove) · A4-IPAD DEFER |
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| review_confirm | **confirmed** (user Approve board) |
| post_review | **skip** |
| sibling_assign | 6 × `pending_confirm` (chờ Approve · **cấm** auto start) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_46fb294c | home | data_analy | — | **completed** | `/agent-data-analy-mobile` · roleOnly · autoApprove=ON |
| task_b088605a | home | po | data_analy | **completed** | `/agent-po-mobile` · roleOnly · autoApprove=ON · packKind `hub` |
| task_41cb12f0 | home | design | po | **completed** | `/agent-design-mobile` · roleOnly · dual mock + ux-analy · design_confirm approve |
| task_15a962de | home | sa | design | **completed** | `/agent-sa-mobile` · roleOnly · solution_confirm approve · GET `auth/profile` only · Step 4b N/A |
| task_b40d1e9d | home | team_lead | sa | **completed** | `/agent-tl-mobile` · roleOnly · route_a · T-IOS-HOME · T-AND-HOME · T-BE n/a |
| task_8a2d59d6 | home | dev | team_lead | **completed** | `/agent-dev-ios` + `/agent-dev-android` · T-IOS-HOME · T-AND-HOME · verifyGate PASS · Step 4b N/A |
| task_dfb8f4a1 | home | qa | dev | **completed** | `/agent-qa-mobile` · e2e-qa-mobile PASS · store PNG live · roleOnly |
| task_29b1f560 | home | review | qa | **completed** | `/agent-review-mobile` · review_confirm approve · verifyGate PASS · roleOnly · post_review skip |
| task_26954659 | patrol-home | data_analy | home | pending_confirm | sibling_assign |
| task_5f9013dd | incident-create | data_analy | home | pending_confirm | sibling_assign |
| task_e8ad42d2 | supervise | data_analy | home | pending_confirm | sibling_assign |
| task_659bf5c2 | mnt-list | data_analy | home | pending_confirm | sibling_assign |
| task_246a6ce0 | incident-list | data_analy | home | pending_confirm | sibling_assign |
| task_56d16d11 | asset-hub | data_analy | home | pending_confirm | sibling_assign |

## Notes

`/edit-mobile-feature` 2026-08-19: notify stay `#sc-home` · toast **Thông báo** + `includeNotification` · iOS tap UN → tab Trang Chủ + replay · **cấm** push `#sc-ops`.

`/edit-mobile-feature` 2026-08-29: Home **không required login** · guest **Khách** + `btn-home-login` · overlay slug `login` · context lock dual.

`/edit-mobile-feature` 2026-08-29: guest FAQ `#sc-faq` + privacy `#sc-privacy` · ref legacy layout · static catalog · **cấm** invent API.

`/edit-mobile-feature` 2026-09-12: **GAP-MOB-EDIT-GUEST-TAB** — guest ẩn tab 5 · pin Đăng nhập + Chính sách quyền riêng tư đáy.

`/edit-mobile-feature` 2026-09-12: **GAP-MOB-EDIT-GUEST-OPS** — logo RMMS giữa hero · chuông Home = Tôi → Thông báo · GET inbox guest không JWT.

## Blockers / open questions

- GAP-F-HOME-01 — SA/TL/Dev/QA/Review: role **ẩn live** · wallet **static demo** · **verified**
- GAP-F-HOME-02 — **supersede** `GAP-MOB-EDIT-GUEST-OPS` · live overview · Home → `#sc-ops`
- GAP-F-HOME-03 — **cấm** ship foot Gói · **verified**
- R-07 P2 — thiếu `PrivacyInfo.xcprivacy` / Play Data safety / landing HTTPS → **Accept** đến `post_review`/`app_submit` (**không** chặn hub done)
- Sibling **không** start đến khi board Approve (`GAP-MOB-ACT-06`)
- Step 4b / T-BE-* **N/A** (reuse Auth profile)

## Handoff → Done

| Field | Value |
|-------|-------|
| feature / packKind | `home` / **`hub`** (confirmed) |
| phase_from / phase_to | review **confirmed** → **done** |
| STATUS | `specs/home/STATUS.md` |
| review | `review/findings.md` · `review_confirm=approve` |
| Open Must align | **0** |
| post_review | **skip** |
| Next | sibling `pending_confirm` chờ board — **cấm** auto chain |
| Chain this turn | **không** (roleOnly=`review`) |
| e2eQa | prior QA **PASS** · **cấm** mfeStdUrl / yarn start:std |

## Links

- data-analy → po → ui → be → task → implement → qa → review → **done**
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- Visual sau done → `/edit-mobile-feature` — **cấm** re-run full pipeline

## Retry

- from: `data_analy` · at: `2026-08-19T05:20:19.977Z` · board user Retry step · **resolved** data_analy done
