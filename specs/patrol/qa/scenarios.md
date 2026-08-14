# QA — scenarios — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| status | `done` |
| pack | T-QA-CRUD-01 · FormType · list-form-quality |
| mfeStdUrl | `http://localhost:9304/patrol` |
| reviewUrl (design only) | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html` |
| taskId | `task_1ede6934` |
| updatedAt | 2026-08-14T20:40:00.000Z |

## Smoke — Final MFE (REQUIRED)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · mở `http://localhost:9304/patrol` | Page load · không 404 | **PASS** (route mount) |
| S1 | Grid visible (demo fallback nếu BFF down) | Rows hoặc empty · **không blank 0px / title clip** | **PASS** (LAYOUT-06) |
| S2 | Footer pager | `LinCatalogListPagination` · pageSize 50/100/200/500 | **PASS** |
| S3 | Search debounce (không nút Tìm) | Filter apply · skeleton filter mode | **PASS** |
| S4 | Status SearchInput change | List refetch page=1 | **PASS** |
| S5 | Toolbar Refresh / +Tạo mới / Config | `/patrol/new` · Config hint dialog | **PASS** |
| S6 | History toolbar/menu | alert stub OK | **PASS** |
| S7 | Row menu View/Edit/Copy | Full-page form routes | **PASS** |
| S8 | Form Create/Edit/View/Copy | Z1–Z3 · View `<dl>` (không readOnly) | **PASS** |
| S9 | No ERP.* path | BASE `/patrol/sessions` · BE `Linm.RMMS.WebService` | **PASS** |

## List A–D

| Zone | Scenario | Result |
|------|----------|--------|
| A | Header title + icon route | PASS |
| B | catalogToolbar refresh·history·cog·add·**delete** | PASS |
| C | SearchTextInput + SearchInput · LinCatalogDataGrid resize ON | PASS |
| D | LinCatalogListPagination | PASS |

## T-QA-CRUD-01 — Create→Edit→View→Delete

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| QA-20 | FormType ACT | T-UI-ACT-01 inventory · all actions wired | Toolbar + row menu pair form/API | **PASS** |
| QA-21 | Create | Toolbar +Tạo → `/patrol/new` → Lưu | POST `/sessions` | **PASS** |
| QA-22 | Edit | Toolbar/row Edit → `/:id?mode=edit` → Lưu | GET + PUT | **PASS** |
| QA-23 | View | Toolbar/row View · `<dl>` display | GET | **PASS** |
| QA-24 | Delete row menu | Row Delete confirm → soft DELETE | `showDelete` · `deleteRow` | **PASS** |
| QA-25 | Delete toolbar | Select row → Delete confirm → soft DELETE | `canDelete`/`onDelete` | **PASS** |
| QA-26 | LKP | Filter/form SearchInput master | no native Select | **PASS** |
| QA-27 | PROD | No Slideout / Resource / View=readOnly | PatrolFormPage | **PASS** |

## Gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-P2-ACT-DELETE | — | **CLOSED** |
| GAP-TL-FORMTYPE-01 | — | **CLOSED** |
| GAP-TL-LIST-QUALITY-01 | — | **CLOSED** |

## Build verify (from Dev)

| Check | Result |
|-------|--------|
| yarn typecheck | PASS |
| yarn build (LINM_RUN_DEV_LOCAL_BUNDLE=1) | PASS |
| dotnet sln Release | PASS |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-14T20:40:00.000Z |
| versionGate | rechecked |
