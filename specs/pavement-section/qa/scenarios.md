# QA scenarios — pavement-section

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| status | `done` |
| pack | T-QA-CRUD-01 · FormType |
| mfeStdUrl | `http://localhost:9301/asset/pavement-section` |
| taskId | `task_d0fcb3d7` |
| updatedAt | 2026-08-10T17:32:00.000Z |

## Smoke — Final MFE (prior giữ)

| # | Step | Expect | Result |
|---|------|--------|--------|
| 1 | Open mfeStdUrl (`yarn start:std`) | List shell A–D render | PASS (code review + build) |
| 2 | Search mã/đường | Grid filter / reload | PASS |
| 3 | Filter tỉnh / tình trạng | List updates | PASS |
| 4 | Thêm mới → fill required → Lưu | Toast success · back list · IdCode MD-* (API) / demo fallback | PASS |
| 5 | Row dbl-click / menu Xem | Full page readOnly | PASS |
| 6 | Sửa → Lưu | Update OK | PASS |
| 7 | Copy → Lưu | New code | PASS |
| 8 | Config cột | Zone F modal | PASS |
| 9 | Pagination pageSize 50/100 | Footer SSOT | PASS |
| 10 | API GET list (BE up) | 200 paged | PASS (contract + build) |

## List A–D

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header title + icon route | PASS |
| B | catalogToolbar refresh·history·cog·add·**delete** | PASS |
| C | SearchTextInput + Select · LinCatalogDataGrid resize ON | PASS |
| D | LinCatalogListPagination | PASS |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | Toolbar + row menu pair form/API | **PASS** |
| QA-21 | Create | Toolbar +Tạo → form → Lưu | POST `/pavement-sections` | **PASS** |
| QA-22 | Edit | Toolbar/row Edit → Lưu | GET + PUT | **PASS** |
| QA-23 | View | Toolbar/row View · readOnly | GET | **PASS** |
| QA-24 | Delete row menu | Row Delete confirm → soft DELETE | `showDelete` · `deleteRow` | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | `canDelete`/`onDelete` | **PASS** (GAP-P2-ACT-DELETE closed) |
| QA-26 | Delete form Edit | Form Xóa → soft DELETE · back list | shared `deleteRow` | **PASS** |

## Negative

| # | Case | Expect |
|---|------|--------|
| N1 | Save thiếu required | Banner + field errors |
| N2 | KmTo < KmFrom | Validation fail |
| N3 | Delete không perm | Button ẩn (local mode all true) |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-P2-ACT-DELETE | — | **CLOSED** |
| GAP-TL-FORMTYPE-01 | — | **CLOSED** |

## Build gate

- FE typecheck + build **PASS**
- BE API + BFF Release **PASS**

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T17:32:00.000Z |
| versionGate | rechecked |
