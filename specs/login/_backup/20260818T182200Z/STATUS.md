# STATUS — login

| Field | Value |
|-------|-------|
| feature | `login` |
| phase | `design` |
| status | `in_progress` |
| changeScope | `new_page` |
| packKind | `shell` (**PO confirm**) |
| stack | `native_dual` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-login` |
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
| backup | `specs/login/_backup/20260818T173515Z` · PO `specs/login/_backup/20260818T181819Z` |
| taskId | `task_e19d880c` |
| skillVersion | `2026.08.19.01` (agent-po-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.19.02` |
| rulesVersion | `2026.08.19.03` |
| versionGate | `rechecked` |
| contentHash | `sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef` |
| bffContentHash | `sha256:de9bc7143374ca6a38aad393b3ce928ad00462ade2254adf9bcdfd97ac7eb017` |
| updatedAt | `2026-08-18T18:19:49.101Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy-mobile | `_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` | **done** · confirmed |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · prototype/ios+android | **in_progress** |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/login.md | pending |
| 4 | dev | implement/ios.md · implement/android.md | pending |
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
| version_mismatch_action | **recheck_new** (PO draft no Version meta · backup `20260818T181819Z`) |
| autoApprove | **ON** |
| design_confirm | pending (Design turn) |
| solution_confirm | pending (SA turn) |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_bf9355f7 | login | data_analy | — | completed | roleOnly · skill 2026.08.18.10 · autoApprove=OFF |
| task_3b190d5a | login | data_analy | — | **completed** | retry · `/agent-data-analy-mobile` · recheck `2026.08.19.01` · autoApprove=ON · roleOnly · **không** chain PO |
| task_e19d880c | login | po | data_analy | **completed** | roleOnly · `/agent-po-mobile` · autoApprove=ON · packKind `shell` · **không** chain Design |

## Blockers / open questions

- `login-forgot` — **GAP-MOB-BFF-01** PO chốt: link + toast demo · **cấm** invent path · backlog
- **GAP-MOB-BFF-02** — PO chốt: app `POST auth/refresh-token` (package 1.26.0) · **cấm** `auth/refresh`
- Mobile.Bff chưa `ContractWindowDefenseMiddleware` — P1 app GET `session-window` sau login · SA chốt middleware
- Password/eye **không** trên `docs/html-to-native-map.md` — Design `kit_missing_confirm` (cấm Dev raw)
- **GAP-MOB-ACT-02** none — `#sc-login` không child form/sheet
- Native: user mở Xcode + Android Studio và test thủ công · **cấm** cite `mfeStdUrl` / localhost MFE · BFF `mobile-bff/api/v1`

## Handoff → Design

| Field | Value |
|-------|-------|
| feature / packKind | `login` / **`shell`** (confirmed) |
| phase_from / phase_to | po confirmed → design |
| Context / Demo / DI | CTX + SPEC §7.1 + dual `#sc-login` · no Excel |
| controlHint / UNCLEAR | `po/requirement.md` §5 · none |
| Screens / Pattern / devSlash | Full page `#sc-login` · `/agent-dev-ios` + `/agent-dev-android` |
| Action tree / BFF | `_data-analy/login-action-tree.md` · `login-bff-endpoints.md` |
| Open questions | GAP-MOB-BFF-01/02 đã chốt PO — Design không vẽ forgot-form / biometric / companyCode |
| Kit | password/eye → `kit_missing_confirm` khi Design |
| Next AskQuestion | autoApprove=ON — `design_confirm` khi đủ ios+android mock + `ui/ux-analy.md` |
| Next slash | `/agent-design-mobile` |
| e2eQa | ON khi QA · user Simulator / emulator · **cấm** yarn e2e-qa web |

## Links

- scan → `specs/_form-type-mobile/ACTION-TREE.md`
- data-analy-mobile → po-mobile → design-mobile → sa-mobile
- BFF: `mobile-bff/api/v1/auth/login` · `auth/refresh-token` · `auth/logout`
- requirement → `specs/login/po/requirement.md`

## Retry

- from: `data_analy` · at: `2026-08-18T17:32:49.987Z` · board user Retry step
- recheck: `recheck_new` · skill `2026.08.19.01` → workflow `2026.08.19.02` · backup `specs/login/_backup/20260818T173515Z` · PO backup `20260818T181819Z`
