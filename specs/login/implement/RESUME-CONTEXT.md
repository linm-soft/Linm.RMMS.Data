# RESUME-CONTEXT — login

> Compressed at stop · 2026-08-18T19:13:44.828Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_4d1e2f3a` |
| alias | `login` |
| title | [QA] [Mobile] Đăng nhập |
| source | `qldb_mobile_implement` |
| cursorAgentId | `—` |
| mfeRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| beRoot | `—` |
| reason | user_stop |
| notes | slash=/agent-qldb-workflow-mobile · roleOnly=qa · chainRole=1 · enqueueReason=chain · startFrom=qa · startSlash=/agent-qa-mobile · autoApprove=1 · e2eQa=1 · lane=mobile · productRoot=/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data · iosAndroid=/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS · iosRoot=/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS · androidRoot=/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.M |

## Done / next (heuristic from worker stream)

- (no live events — dùng STATUS + implement MD)

## STATUS excerpt

```markdown
# STATUS — login

| Field | Value |
|-------|-------|
| feature | `login` |
| phase | `qa` |
| status | `pending` |
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
| reviewUrlIos | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login/ui/prototype/ios/index.html#sc-login` |
| reviewUrlAndroid | `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/login/ui/prototype/android/index.html#sc-login` |
| backup | `specs/login/_backup/20260818T173515Z` · PO `20260818T181819Z` · Design `20260818T182200Z` · SA `20260818T183223Z` |
| taskId | `task_1e440396` |
| skillVersion | `2026.08.19.10` (agent-dev-ios + agent-dev-android) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.10` |
| rulesVersion | `2026.08.19.11` |
| versionGate | `rechecked` |
| contentHash | `sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef` |
| bffContentHash | `sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017` |
| verifyGate | iOS `xcodegen` + `xcodebuild` **iPhone 17 Pro Max** **PASS** · **iPad Pro 13-inch (M5)** **PASS** (M4 không có trên lab) · Android `assembleDebug` **PASS** · BFF `dotnet build` **PASS** |
| updatedAt | `2026-08-18T19:10:40.600Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy-mobile | `_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` | **done** · confirmed |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios+android | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/login.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md · implement/bff.md · ui/review/login.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/login/CAPTURE.md | pending |
| 6 | review | review/findings.md | pending |
## Confirms

| Gate | Value |
|------|-------|
| change_scope | `new_page` (STATUS + data-analy · autoApprove) |
| packKind | **`shell`** (PO confirm) |
| stack_confirm | `native_dual` |
| be_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` |
| ios_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android_repo_confirm | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| version_mismatch_action | **recheck_new** (SA stub no Version meta · backup `20260818T183223Z`) |
| autoApprove | **ON** |
| kit_missing_confirm | **implement_kit** · `LinmSecureTextField` dual · map + gallery · `/install-mobile-kit-local` done |
| design_confirm | **confirmed** (user Approve board) |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **tenant_keep** |
| solution_confirm | **confirmed** (user Approve board) |
| route_confirm | **route_a** (autoApprove=ON · TL) — auth `#sc-login` → Home |
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

## Blockers / open questions

- `login-forgot` — **GAP-MOB-BFF-01** **đóng** (PO+SA): link + toast demo · **cấm** invent path · backlog
- **GAP-MOB-BFF-02** **đóng** — app `POST auth/refresh-token` · **cấm** `auth/refresh`
- **GAP-MOB-BFF-MW** **đóng (P1)** — app GET `session-window` sau login · DTO `allowed`/`reason` · forceLogout copy Web middleware · T-BE-MW attach middleware Mobile.Bff **optional** (parity Web · **không** path mới)
- Password/eye kit — **closed** Design · `LinmSecureTextField` · Dev **cấm** raw
- **GAP-MOB-ACT-02** none — `#sc-login` không child form/sheet
- **GAP-SA-LOGIN-ID** — UI `userName` → body Auth **`id`** 
```

## Resume instructions (for agent)

1. Đọc file này + STATUS.md + implement/{alias}.md.
2. **Không** làm lại bước đã confirmed/done trên STATUS.
3. Tiếp tục đúng phase hiện tại → hoàn tất tới Review / verify gate.
4. Cập nhật STATUS + implement MD khi xong từng phần.
5. Giữ cursorAgentId continuity nếu Agent.resume khả dụng.
