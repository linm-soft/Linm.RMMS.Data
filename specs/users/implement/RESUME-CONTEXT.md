# RESUME-CONTEXT — users

> Compressed at stop · 2026-08-14T14:47:32.632Z

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
| notes | slash=/agent-qldb-workflow · roleOnly=dev · chainRole=1 · startFrom=dev · startSlash=/agent-dev · autoApprove=0 · productRoot=D:/AI-QLBD/Linm.RMMS.Data · mfeSource=D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration · status=D:/AI-QLBD/Linm.RMMS.Data/specs/users/STATUS.md · demo=D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/users-demo.html → integration/users.html · mfeStdUrl=http://localhost:9314/integ |

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
| taskId | `task_8b8a998f` |
| mfeStdRoute | `/integration/users` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html` |
| updatedAt | `2026-08-14T13:50:20.330Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** (autopilot) |
| 2.2 | sa | be/solution-discovery.md | **confirmed** (autopilot) |
| 3 | team-lead | task/users.md | **done** (gap pack) |
| 4 | dev | implement/users.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **approve** (autopilot) |
| solution_confirm | **approve** (autopilot) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Integration`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **approve** (autopilot) |
| autoApprove | **ON** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | users | docs | — | **done** | Integration paths |
| T-PERM-01 | users | ui+api | T-CTX-01 | **done** | integration.users.* |
| T-BE-01 | users | api | T-CTX-01 | **done** | CRUD + pwd + assign |
| T-BE-02 | users | migration | T-BE-01 | **done** | Schema_RmmsUsers |
| T-BFF-01 | users | bff | T-BE-01 | **done** | proxy |
| T-UI-LIST-01 | users | ui | T-BFF-01 | **done** | A–D · tree · grid (giữ PASS) |
| T-UI-FORM-01 | users | ui | T-UI-LIST-01 | **done** | form page (gap: bỏ Slideout) |
| T-QA-01 | users | qa | T-UI-FORM-01 | **done** | scenarios |
| T-UI-ACT-01 | users | ui | T-UI-LIST-01 | **done** | toolbar/row → form/API |
| T-UI-MAP-FORM | users | ui | T-UI-FORM-01 | **done** | control-map ↔ DTO |
| T-UI-LKP-01 | users | ui | T-BE-CRUD-01 | **done** | SearchInput / init-data |
| T-UI-FIELD-01 | users | ui | T-UI-MAP-FORM | **done** | field type map |
| T-UI-PROD-01 | users | ui | T-UI-FORM-01 | **done** | cấm Resource/Slideout/View=readOnly |
| T-UI-UX-01 | users | ui | T-UI-LIST-01 | **done** | constitution P1–7 · footer only · Lin* Modal |
| T-BE-CRUD-01 | users | api | T-BE-01 | **done** | init-data + CRUD pair |
| QA-CRUD | users | qa | T-UI-ACT-01 | **done** | Create/Edit/View + row |

## Blockers / open questions

-

## Links

- po → ui → be → task → implement → qa → review
- DOMAIN-MAP: `users` → Integration
- mfeStdUrl: `http://localhost:9314/integration/users`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T08:47:00.000Z |
| versionGate | rechecked |

```

## Resume instructions (for agent)

1. Đọc file này + STATUS.md + implement/{alias}.md.
2. **Không** làm lại bước đã confirmed/done trên STATUS.
3. Tiếp tục đúng phase hiện tại → hoàn tất tới Review / verify gate.
4. Cập nhật STATUS + implement MD khi xong từng phần.
5. Giữ cursorAgentId continuity nếu Agent.resume khả dụng.
