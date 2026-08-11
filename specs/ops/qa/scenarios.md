# QA — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| status | `done` |
| pack | T-QA-CRUD-01 · FormType |
| mfeStdUrl | `http://localhost:9308/ops` |
| reviewUrl (design only) | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ops/ui/prototype/ops-list-prototype.html` |
| taskId | `task_02070244` |
| updatedAt | 2026-08-10T17:05:00.000Z |

## Smoke (mfeStdUrl) — prior giữ

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| S-01 | Open `/ops` | Kind B list · A–D · no nested shell | **PASS** |
| S-02 | Search text apply | page=1 · filter rows | **PASS** |
| S-03 | Status / priority / type filter | list refresh | **PASS** |
| S-04 | Unread toggle | unreadOnly filter | **PASS** |
| S-05 | Pagination pageSize 50→100 | LinCatalogListPagination | **PASS** |
| S-06 | Row menu View/Edit/Copy/MarkRead | Slideout / mark-read | **PASS** |
| S-07 | Create send / draft | IdCode OPS-* · validation banner | **PASS** |
| S-08 | View readOnly | không disabled xám | **PASS** |
| S-09 | Dirty leave-confirm | confirm dialog | **PASS** |
| S-10 | KPI overview strip | 4 ô | **PASS** |
| S-11 | Command / nav stubs | alert · ≠ map embed | **PASS** |
| S-12 | BE build Release | 0 errors · migration present | **PASS** |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | Toolbar + row menu pair form/API | **PASS** |
| QA-21 | Create | Toolbar +Tạo → Slideout → Send | POST `/inbox` · OPS-* | **PASS** |
| QA-22 | Edit | Toolbar/row Edit → Save | GET + PUT | **PASS** |
| QA-23 | View | Toolbar/row View · readOnly | GET (+ mark-read if unread) | **PASS** |
| QA-24 | Delete row menu | Row Delete confirm → soft DELETE | `showDelete` · `deleteRow` | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | `canDelete`/`onDelete` | **PASS** (GAP-P2-ACT-DELETE closed) |
| QA-26 | Mark-read | row Mark-read → POST mark-read | `notificationService.markRead` | **PASS** |
| QA-27 | Mark-all-read | extra bar → POST mark-all-read | `notificationService.markAllRead` | **PASS** |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-P2-ACT-DELETE | — | **CLOSED** |
| GAP-TL-FORMTYPE-01 | — | **CLOSED** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T17:05:00.000Z |
| versionGate | rechecked |
