# STATUS — login

| Field | Value |
|-------|-------|
| feature | `login` |
| phase | `data_analy` |
| status | `paused` |
| taskIdQa | `task_4d1e2f3a` |
| taskIdReview | `task_67ecabfa` |
| changeScope | `new_page` |
| packKind | `shell` (**PO confirm**) |
| stack | `native_dual` |
| demo | `specs/login/ui/prototype/{ios,android}/index.html` `#sc-login` · SSOT peer `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| context | `docs/context/features/login.md` |
| logo | `logo/mobile` AppIcon 1024 → `assets/app-logo.png` |
| mfe | — (native · **cấm** mfeStdUrl / yarn start:std) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `Linm.RMMS.Mobile.Android` · `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/auth/*` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` |
| po | `specs/login/po/requirement.md` |
| design | `specs/login/ui/design.md` · `ui/ux-analy.md` · `ui/html-to-native-map.md` · prototype dual |
| sa | `specs/login/be/solution-discovery.md` |
| tl | `specs/login/task/login.md` |
| review | `specs/login/review/findings.md` · `REVIEW-META.json` |
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login/ui/prototype/ios/index.html#sc-login` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login/ui/prototype/android/index.html#sc-login` |
| backup | `specs/login/_backup/20260818T173515Z` · PO `20260818T181819Z` · Design `20260818T182200Z` · SA `20260818T183223Z` |
| taskId | `task_67ecabfa` |
| skillVersion | `2026.08.19.10` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.19` |
| rulesVersion | `2026.08.19.22` |
| versionGate | `rechecked` |
| contentHash | `sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef` |
| bffContentHash | `sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017` |
| verifyGate | iOS `xcodegen` + `xcodebuild` **iPhone 17 Pro Max** **PASS** · Android `assembleDebug` **PASS** · BFF `dotnet build` **PASS** · E2E prior QA **PASS** · Review **approve** · **cấm** READY_TO_SUBMIT |
| updatedAt | `2026-08-28T18:30:36.237Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released after Review `task_67ecabfa` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy-mobile | `_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` | **paused** |
| 1 | po | po/requirement.md | **pending** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios+android | **pending** |
| 2.2 | sa | be/solution-discovery.md | **pending** |
| 3 | team-lead | task/login.md | **pending** |
| 4 | dev | implement/ios.md · implement/android.md · implement/bff.md · ui/review/login.md | **pending** |
| 5 | qa | qa/scenarios.md · qa/store/login/CAPTURE.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` (STATUS + data-analy · autoApprove) |
| packKind | **`shell`** (PO confirm) |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| version_mismatch_action | **recheck_new** (Review recheck orchestrator `2026.08.19.19`) |
| autoApprove | **ON** |
| kit_missing_confirm | **implement_kit** · `LinmSecureTextField` dual · map + gallery · `/install-mobile-kit-local` done |
| design_confirm | **confirmed** (user Approve board) |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **tenant_keep** |
| solution_confirm | **confirmed** (user Approve board) |
| route_confirm | **route_a** (autoApprove=ON · TL) — auth `#sc-login` → Home |
| review_confirm | **confirmed** (user Approve board) |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_bf9355f7 | login | data_analy | — | completed | roleOnly · skill 2026.08.18.10 · autoApprove=OFF |
| task_3b190d5a | login | data_analy | — | **completed** | retry · `/agent-data-analy-mobile` · recheck `2026.08.19.01` · autoApprove=ON · roleOnly · **không** chain PO |
| task_e19d880c | login | po | data_analy | **completed** | roleOnly · `/agent-po-mobile` · autoApprove=ON · packKind `shell` · **không** chain Design |
| task_47ebc1c0 | login | design | po | **completed** | roleOnly · `/agent-design-mobile` · autoApprove=ON · kit `LinmSecureTextField` · VERIFY GATE PASS |
| task_71bfea96 | login | sa | design | **superseded** | queue chain stub · SA chạy `task_3be7da84` |
| task_3be7da84 | login | sa | design | **completed** | roleOnly · `/agent-sa-mobile` · autoApprove=ON · solution_confirm approve · VERIFY GATE PASS · **không** chain TL |
| task_5618e40d | login | team_lead | sa | **completed** | roleOnly · `/agent-tl-mobile` · autoApprove=ON · route_confirm route_a · T-IOS-LOGIN · T-AND-LOGIN · T-BE-MW optional · VERIFY GATE PASS · **không** chain Dev |
| task_1e440396 | login | dev | team_lead | **completed** | roleOnly · `/agent-dev-ios` + `/agent-dev-android` · T-IOS-LOGIN · T-AND-LOGIN · T-BE-MW · VERIFY GATE PASS · **không** chain QA |
| task_4d1e2f3a | login | qa | dev | **completed** | roleOnly · `/agent-qa-mobile` · e2eQa ON · Maestro iOS+Android PASS · Pixel_2 1080×1920 · A4 DEFER · VERIFY GATE PASS · **không** chain Review |
| task_67ecabfa | login | review | qa | **completed** | roleOnly · `/agent-review-mobile` · autoApprove=ON · review_confirm approve · VERIFY GATE PASS · **cấm** READY_TO_SUBMIT · pipeline complete |

## Blockers / open questions

- `login-forgot` — hyperlink Quên MK · **`task_20426736` `pending_confirm`** (sibling_assign) · chờ Approve board · **cấm** start tự động · UI sibling đã có trong tree (Review Accept out-of-pack)
- **GAP-MOB-BFF-02** **đóng** — app `POST auth/refresh-token` · **cấm** `auth/refresh`
- **GAP-MOB-BFF-MW** **đóng (P1)** — app GET `session-window` sau login · DTO `allowed`/`reason` · forceLogout copy Web middleware · T-BE-MW attach middleware Mobile.Bff **optional** (parity Web · **không** path mới)
- Password/eye kit — **closed** Design · `LinmSecureTextField` · Dev **cấm** raw
- **GAP-MOB-ACT-02** none — `#sc-login` không child form/sheet
- **GAP-SA-LOGIN-ID** — UI `userName` → body Auth **`id`** (`LoginRequestDto`)
- Native: user mở Xcode + Android Studio và test thủ công · **cấm** cite `mfeStdUrl` / localhost MFE · BFF `mobile-bff/api/v1`
- `/edit-mobile-feature` 2026-08-19: demo Home **Đăng xuất** (`btn-logout`) local clear → retest `#sc-login` · **không** slug `login-logout` · context lock design/ux/map/task/po/implement
- `/edit-mobile-feature` 2026-08-19: **GAP-MOB-EDIT-IME** — kit `LinmKeyboardAwareScroll` dual · focus field pin trên IME · logo 192 tĩnh · context lock
- `/edit-mobile-feature` 2026-08-19: **GAP-MOB-EDIT-PASS** — submit reset `#f-pass` · giữ last `#f-user` · **cấm** persist MK · context lock
- `/edit-mobile-feature` 2026-08-19: **GAP-MOB-EDIT-FOOTER-01** — `.login-meta` pin đáy giữa (Android `BottomCenter` · iOS `.bottom`) · ẩn khi IME · context lock dual
- `/edit-mobile-feature` 2026-08-19: **GAP-MOB-EDIT-IME-ENTER** — `#f-user` Enter + MK có giá trị → login · Enter + MK rỗng → focus `#f-pass` · `#f-pass` Enter → login · kit `onSubmit` dual · context lock
- Review R-LOGIN-03 — BE `session-window` bind JWT `sub` ↔ `authUserId` (backlog · không block)
- Review R-LOGIN-08 — `PrivacyInfo.xcprivacy` + landing HTTPS · **cấm** READY_TO_SUBMIT

## Handoff → Done

| Field | Value |
|-------|-------|
| feature / packKind | `login` / **`shell`** (confirmed) |
| phase_from / phase_to | review **done** → pipeline **complete** |
| STATUS | `specs/login/STATUS.md` |
| review | `review/findings.md` · `review_confirm=approve` |
| qa | `qa/scenarios.md` · `qa/store/login/CAPTURE.md` · `qa/screens/*.png` |
| implement | `implement/ios.md` · `implement/android.md` · `implement/bff.md` |
| route_confirm | **route_a** — Login auth root → Home |
| Kit | `LinmSecureTextField` dual — **cấm** raw |
| BFF | `auth/login` · `auth/refresh-token` · `contract-accounts/session-window` |
| e2eQa | **PASS** · Maestro iOS hint + AutoFill Not Now · Android testTag + Enter · seed `linm-soft` / `Linm@2026` |
| Store | A11/A3/A9 1320×2868 · P6 1080×1920 · A4 **DEFER** · **cấm** READY_TO_SUBMIT (thiếu privacy URL + PrivacyInfo) |
| Open questions | `login-forgot` chờ Approve · `login-logout` backlog · R-LOGIN-03/08/10 |
| Next slash | — (pipeline complete) |
| Chain this turn | **không** (roleOnly=review) |

## Links

- scan → `specs/_form-type-mobile/ACTION-TREE.md`
- design → `specs/login/ui/design.md`
- ux-analy → `specs/login/ui/ux-analy.md`
- solution → `specs/login/be/solution-discovery.md`
- task → `specs/login/task/login.md`
- implement → `specs/login/implement/ios.md` · `implement/android.md` · `implement/bff.md`
- qa → `specs/login/qa/scenarios.md` · `qa/store/login/CAPTURE.md`
- review → `specs/login/review/findings.md`
- ui-review → `specs/login/ui/review/login.md`
- BFF: `mobile-bff/api/v1/auth/login` · `auth/refresh-token` · `contract-accounts/session-window`
- requirement → `specs/login/po/requirement.md`

## Retry

- from: `data_analy` · at: `2026-08-18T17:32:49.987Z` · board user Retry step
- recheck: `recheck_new` · skill `2026.08.19.01` → workflow `2026.08.19.04` · backup SA `20260818T183223Z`
- review recheck: `recheck_new` · workflow `2026.08.19.19` · rules `2026.08.19.22` · at: `2026-08-19T01:43:18.000Z`

## Closeout SA

- closeout SA: `task_3be7da84` · roleOnly=`sa` · `/agent-sa-mobile` · `solution_confirm=approve` · live Auth + session-window **giữ** · **không** endpoint/migration mới P1 · enqueue **team-lead** pending · autoApprove **ON** · VERIFY GATE PASS · at: `2026-08-18T18:32:23.000Z`

## Closeout TL

- closeout TL: `task_5618e40d` · roleOnly=`team_lead` · `/agent-tl-mobile` · `route_confirm=route_a` · tasks `T-IOS-LOGIN` · `T-AND-LOGIN` · `T-BE-MW` optional · T-BE-API/MIG **n/a** · enqueue **dev** pending · autoApprove **ON** · VERIFY GATE PASS · **không** chain Dev · at: `2026-08-18T18:39:00.000Z`

## Closeout Dev

- closeout Dev: `task_1e440396` · roleOnly=`dev` · `/agent-dev-ios` + `/agent-dev-android` · T-IOS-LOGIN · T-AND-LOGIN · T-BE-MW · T-BE-API/MIG **n/a** · VERIFY GATE PASS · enqueue **qa** pending · autoApprove **ON** · **không** chain QA · at: `2026-08-18T19:05:00.000Z`

## Closeout QA

- closeout QA: `task_4d1e2f3a` · roleOnly=`qa` · `/agent-qa-mobile` · e2eQa **ON** · `yarn e2e-qa-mobile` Maestro iOS+Android **PASS** · dest iPhone 17 Pro Max · Pixel_2 1080×1920 · A4 **DEFER** · VERIFY GATE PASS · enqueue **review** pending · autoApprove **ON** · **không** chain Review · at: `2026-08-19T01:38:22.000Z`

## Closeout Review

- closeout Review: `task_67ecabfa` · roleOnly=`review` · `/agent-review-mobile` · `review_confirm=approve` · P0 **none** · VERIFY GATE PASS · **cấm** READY_TO_SUBMIT · pipeline **complete** · autoApprove **ON** · at: `2026-08-19T01:43:18.000Z`
