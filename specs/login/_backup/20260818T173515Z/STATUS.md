# STATUS — login

| Field | Value |
|-------|-------|
| feature | `login` |
| phase | `data_analy` |
| status | `in_progress` (lock) |
| changeScope | `new_page` |
| packKind | `shell` (mobile P1 · đề xuất data-analy · PO confirm) · web list giữ mfeStd* dưới đây |
| stack | `native_dual` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-login` |
| context | `docs/context/features/login.md` |
| logo | `logo/mobile` AppIcon 1024 → `assets/app-logo.png` |
| mfe | web: `Linm.Web.RMMS.Contract` · **mobile không dùng mfeStdUrl** |
| mfeStdRoute | `/login` (web only) |
| mfeStdUrl | `http://localhost:9301/login` (web only) |
| ios | `Linm.RMMS.Mobile.iOS` |
| android | `Linm.RMMS.Mobile.Android` |
| bff | `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/auth/*` |
| backend | `Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| dataAnaly | `specs/_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` |
| taskId | `task_bf9355f7` |
| skillVersion | `2026.08.18.10` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.18.11` |
| rulesVersion | `2026.08.18.26` |
| versionGate | `ok` |
| contentHash | `sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef` |
| updatedAt | `2026-08-18T17:32:50.381Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| agent-data-analy-mobile | page | task_3b190d5a | 2026-08-18T17:33:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy-mobile | `_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` | **in_progress** |
| 1 | po | po/requirement.md | pending |
| 2.1 | design | ui/design.md + prototype + reviewUrl | pending |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/login.md | pending |
| 4 | dev | implement/login.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_bf9355f7 | login | data_analy | — | **completed** | roleOnly · `/agent-data-analy-mobile` · chain ON · autoApprove=OFF · enqueue PO |

## Blockers / open questions

- `login-forgot` — **GAP-MOB-BFF-01** không path quên MK trong CTX §3 / Mobile.Bff / Auth BFF 1.26.0 · **cấm** invent · backlog
- **GAP-MOB-BFF-02** — CTX/`init-bff-auth.md` ghi `refresh` · package 1.26.0 = `POST auth/refresh-token` · app dùng path package
- Mobile.Bff chưa gắn `ContractWindowDefenseMiddleware` (Web BFF có) — GET `contract-accounts/session-window` **đã** proxy · SA chốt sau login
- Web `mfeStdUrl` giữ cho scan web · native dùng BFF prefix `mobile-bff/api/v1`

## Handoff → PO

| Field | Value |
|-------|-------|
| feature / packKind | `login` / `shell` (đề xuất) |
| phase_from / phase_to | data_analy done → po |
| Context / Demo / DI | CTX + dual `#sc-login` · no Excel |
| controlHint / UNCLEAR | `_data-analy/login-control-hint.md` · none |
| Action tree / BFF | `_data-analy/login-action-tree.md` · `login-bff-endpoints.md` |
| Open questions | GAP-MOB-BFF-01 · GAP-MOB-BFF-02 |
| Next AskQuestion | Design/SA `await_confirm` khi tới lượt (`autoApprove=OFF`) |
| Next slash | `/agent-po-mobile` |

## Links

- scan → `specs/_form-type-mobile/ACTION-TREE.md`
- data-analy-mobile → po-mobile → design-mobile → sa-mobile
- BFF: `mobile-bff/api/v1/auth/login` · `auth/refresh-token` · `auth/logout`


## Retry

- from: `data_analy` · at: `2026-08-18T17:32:49.987Z` · board user Retry step
