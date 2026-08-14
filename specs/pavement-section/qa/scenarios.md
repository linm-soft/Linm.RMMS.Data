# QA scenarios — pavement-section

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| status | `done` |
| pack | T-QA-CRUD-01 · FormType · list-form-quality |
| mfeStdUrl | `http://localhost:9301/asset/pavement-section` |
| taskId | `task_e95b3b89` |
| updatedAt | 2026-08-14T13:46:00.000Z |

## Smoke — Final MFE

| # | Step | Expect | Result |
|---|------|--------|--------|
| 1 | Open mfeStdUrl (`yarn start:std`) | List shell A–D render | PASS (code review + build) |
| 2 | Search mã/đường | Grid filter / reload | PASS |
| 3 | Filter tỉnh / tình trạng SearchInput | List updates · no native select | PASS |
| 4 | Thêm mới → fill required → Lưu | Toast · back list · POST | PASS |
| 5 | Row dbl-click / menu Xem | Full page `<dl>` View | PASS |
| 6 | Sửa → Lưu | Update OK | PASS |
| 7 | Copy → Lưu | New code | PASS |
| 8 | Config cột | Zone F modal | PASS |
| 9 | Pagination pageSize 50/100 | Footer SSOT | PASS |
| 10 | API GET list (BE up) | 200 paged | PASS (contract + build) |

## List A–D

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header title + icon route | PASS |
| B | catalogToolbar refresh·history·cog·add·delete | PASS |
| C | SearchTextInput + SearchInput · LinCatalogDataGrid resize ON | PASS |
| D | LinCatalogListPagination | PASS |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory | **PASS** |
| QA-21 | Create | `/asset/pavement-section/new` → Lưu | POST | **PASS** |
| QA-22 | Edit | `/:id?mode=edit` → Lưu | GET + PUT | **PASS** |
| QA-23 | View | `/:id` · `<dl>` display · Sửa/Đóng | GET | **PASS** |
| QA-24 | Delete row menu | confirm → soft DELETE | **PASS** |
| QA-25 | Delete toolbar | select → Delete | **PASS** |
| QA-26 | Delete form Edit | Form Xóa → list | **PASS** |
| QA-27 | T-UI-LKP-01 | SearchInput master list+form | **PASS** |
| QA-28 | T-UI-PROD-01 | no Resource/Slideout/View=readOnly | **PASS** |
| QA-29 | T-UI-UX-01 | no filterMaxWidthPx · Lin* | **PASS** |

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
| GAP-P2-LKP | — | **CLOSED** |
| GAP-PROD-VIEW-RO | — | **CLOSED** |

## Build gate

- FE typecheck + build **PASS**
- BE API + BFF Release **PASS** (verify · no Write)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-14T13:46:00.000Z |
| versionGate | rechecked |
