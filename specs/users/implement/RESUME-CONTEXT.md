# RESUME-CONTEXT — users

> Compressed at stop · 2026-08-16T04:05:45.653Z

## Meta

| Field | Value |
|---|---|
| taskId | `task_4e00089f` |
| alias | `users` |
| title | [Dev] Quản lý người dùng / tổ chức |
| source | `qldb_implement` |
| cursorAgentId | `—` |
| mfeRoot | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| beRoot | `—` |
| reason | user_stop_all |
| notes | slash=/agent-qldb-workflow · roleOnly=dev · chainRole=1 · startFrom=dev · startSlash=/agent-dev · autoApprove=1 · productRoot=D:/AI-QLBD/Linm.RMMS.Data · mfeSource=D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration · status=D:/AI-QLBD/Linm.RMMS.Data/specs/users/STATUS.md · demo=D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/users-demo.html → integration/users.html · mfeStdUrl=http://localhost:9314/integ |

## Done / next (heuristic from worker stream)

- (no live events — dùng STATUS + implement MD)

## STATUS excerpt

```markdown
# STATUS — users

| Field | Value |
|-------|-------|
| feature | `users` |
| phase | `dev` |
| status | `pending` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/users-demo.html` → `integration/users.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/users.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/users`** (**cấm ERP.***) |
| domain | **Integration** |
| taskId | `task_d7246ce9` |
| mfeStdRoute | `/integration/users` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| dataAnaly | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/../specs/_data-analy/features/users-control-hint.md` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html` |
| updatedAt | `2026-08-16T02:10:23.866Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | `_data-analy/features/users-control-hint.md` | **done** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/users.md | **confirmed** |
| 4 | dev | implement/users.md | pending |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** (`Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (`Linm.Web.RMMS.Integration`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **confirmed** (user Approve board) |
| autoApprove | **ON** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|--------|-------|-------|
| T-DA-01 | users | data_analy | — | **done** | controlHint SearchInput org-unit + road-route |
| T-CTX-01 | users | docs | T-DA-01 | **done** | Kind B LinPageLayout |
| T-PERM-01 | users | ui+api | T-CTX-01 | FE **done** · BE stub | `integration.users.read\|create\|update\|delete` |
| T-BE-01 | users | api | T-CTX-01 | **done** | `?route=` + validate RoutesCsv / OrgCode / ManagedUserIdsCsv |
| T-BE-02 | users | migration | T-BE-01 | **n/a** | Schema_RmmsUsers DONE |
| T-BFF-01 | users | bff | T-BE-01 | **done** | QS forward `route` |
| T-UI-LIST-01 | users | ui | T-BFF-01 | **done** | shell + filter tuyến SearchInput |
| T-UI-FORM-01 | users | ui | T-UI-LIST-01 | **done** | full-page · View `<dl>` |
| T-UI-ACT-01 | users | ui | T-UI-LIST-01 | **done** | Đổi MK · Phân tuyến / Cán bộ QL SearchInput |
| T-UI-MAP-FORM | users | ui | T-UI-FORM-01 | **done** | routesCsv SearchInput multi |
| T-UI-LKP-01 | users | ui | T-BE-CRUD-01 | **done** | road-route + users |
| T-UI-FIELD-01 | users | ui | T-UI-MAP-FORM | **done** | cấm Text `routesCsv` |
| T-UI-PROD-01 | users | ui | T-UI-FORM-01 | **done** | cấm Resource/Slideout/View=readOnly |
| T-UI-UX-01 | users | ui | T-UI-LIST-01 | **done** | spacing · Lin confirm |
| T-BE-CRUD-01 | users | api | T-BE-01 | **done** | CRUD + validate |
| T-QA-01 | users | qa | T-UI-FORM-01 | **done** | scenarios.md · list A–D + `?route=` |
| QA-CRUD | users | qa | T-UI-ACT-01 | **done** | Create/Edit/View + assign SearchInput + pwd + delete |

## Blockers / open questions

- GAP-F-USR-01 Auth tách — **P2 không block** · BE `RequirePermission` stub
- History API stub P1 — **không block** complete
- pipeline **complete** (Review approve)

## Links

- data_analy → po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `users` → Integration
- mfeStdUrl: `http://localhost:9314/integration/users`
- PO: `specs/users/po/requirement.md`
- Design: `specs/users/ui/design.md`
- SA: `specs/users/be/solution-discovery.md`
- TL: `specs/users/task/users.md`
- Dev: `specs/users/implement/users.md`
- QA: `specs/users/qa/scenarios.md`
- Review: `specs/users/review/findings.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html`
- controlHint: `specs/_data-analy/features/users-control-hint.md`

## Retry

- from: `design` · at: `2026-08-15T01:47:54.076Z` · board user Retry step

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-15T09:15:00.000Z |
| versionGate | rechecked |
| reviewSkillVersion | 2026.08.08.21 |
| dataAnalySkillVersion | 2026.08.08.20 |
| dataAnalyWorkflowVersion | 2026.08.15.1 |
| dataAnalyRulesVersion | 2026.08.15.2 |
| poSkillVersion | 2026.08.08.30 |
| designSkillVersion | 2026.08.08.31 |
| saSkillVersion | 2026.08.08.21 |
| teamLeadSkillVersion | 2026.08.09.02 |
| devSkillVersion | 2026.08.09.02 |
| qaSkillVersion | 2026.08.08.21 |

```

## Resume instructions (for agent)

1. Đọc file này + STATUS.md + implement/{alias}.md.
2. **Không** làm lại bước đã confirmed/done trên STATUS.
3. Tiếp tục đúng phase hiện tại → hoàn tất tới Review / verify gate.
4. Cập nhật STATUS + implement MD khi xong từng phần.
5. Giữ cursorAgentId continuity nếu Agent.resume khả dụng.
