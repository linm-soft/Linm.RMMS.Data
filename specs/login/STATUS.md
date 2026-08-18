# STATUS — login

| Field | Value |
|-------|-------|
| feature | `login` |
| phase | `data_analy` |
| status | `draft` |
| packKind | `mobile` (pilot shell) · web list giữ mfeStd* dưới đây |
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
| updatedAt | `2026-08-18T17:04:04.414Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| agent-data-analy-mobile | login shell + app logo + BFF table | analy_login_mobile_pilot | 2026-08-18T16:48:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy-mobile | `_data-analy/login-control-hint.md` · `login-bff-endpoints.md` · `login-action-tree.md` | **done** |
| 1 | po | po/requirement.md | **pending** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **pending** |
| 2.2 | sa | be/solution-discovery.md | **pending** |
| 3 | team-lead | task/login.md | **pending** |
| 4 | dev | implement/login.md | **pending** |
| 5 | qa | qa/scenarios.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|

## Blockers / open questions

- `login-forgot` — **GAP-MOB-BFF-01** không có path quên MK trong CTX / Mobile.Bff · **cấm** invent
- Web `mfeStdUrl` giữ cho scan web · native dùng BFF prefix

## Links

- scan → `specs/_form-type-mobile/ACTION-TREE.md`
- data-analy-mobile → po-mobile → design-mobile → sa-mobile
- BFF: `mobile-bff/api/v1/auth/login` · `refresh` · `logout`
