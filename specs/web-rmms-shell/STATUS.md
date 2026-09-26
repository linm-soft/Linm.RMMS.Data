# STATUS — web-rmms-shell

| Field | Value |
|-------|-------|
| feature | `web-rmms-shell` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-shell.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-shell` |
| mfeStdUrl | `http://localhost:9301/web-rmms-shell` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| updatedAt | `2026-09-25T11:49:49.429Z` |
| lastRole | `review` · **PASS** · task `task_f8c53dca` |
| changeScope | `new_page` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-shell-control-hint.md · web-rmms-shell-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/web-rmms-shell.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/web-rmms-shell.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-BE-CRUD-01 | shell chrome APIs | Dev | — | **done** | auth+notification+session-window · migration none |
| T-BE-INIT-01 | labels | Dev | — | **done** | useFormOptions + LOOKUP_STATIC |
| T-PERM-01 | session gate | Dev | T-BE-CRUD-01 | **done** | auth gate |
| T-UI-SHELL-01 | SH-00…06 | Dev | T-BE-CRUD-01 | **done** | 4 tabs · Field doors peer A |
| T-UI-FORM-01 | SH-02 login | Dev | T-BE-* | **done** | login overlay |
| T-UI-ACT-01 | actions | Dev | SHELL+FORM | **done** | no dead buttons |
| T-UI-LEAVE-01 | DES-LEAVE | Dev | FORM | **done** | LeaveConfirmModal |
| T-UI-FIELD-01 | field map | Dev | FORM | **done** | GAP-LIST-FIELD-01 |
| T-UI-PROD-01 | chrome | Dev | SHELL+FORM | **done** | end-user only |
| T-UI-UX-01 | UX | Dev | SHELL+FORM | **done** | constitution phone |
| T-UI-RESP-01 | responsive | Dev | UX | **done** | 375/768/1280 CSS |
| T-UI-HIST-01 | toast | Dev | FORM | **done** | no alert() |
| T-QA-CRUD-01 | QA | QA | SHELL+FORM | **done** | S0/S1/QA-20 live PASS |
| T-QA-FORM-01 | QA | QA | LEAVE+ACT | **done** | SH-02 overlay PASS |

## Blockers / open questions

- (none) · UNCLEAR-DOMAIN-MAP-SHELL CLOSED · UNCLEAR-STD-PORT CLOSED (`:9301`) · route_confirm=approve `/web-rmms-shell` · review_confirm=done · soft: token multi-key · LOOKUP_STATIC · QA staff-session observe

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/web-rmms-shell`
- mfeStdRoute: `/web-rmms-shell`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-shell/ui/prototype/index.html`
- handoff: `specs/web-rmms-shell/handoff/review-compact.md`
- findings: `specs/web-rmms-shell/review/findings.md`
- DOMAIN-MAP: `web-rmms-shell` → Notification/`notification`
- implement: `specs/web-rmms-shell/implement/web-rmms-shell.md`
- task: `specs/web-rmms-shell/task/web-rmms-shell.md`
- qa: `specs/web-rmms-shell/qa/scenarios.md`
