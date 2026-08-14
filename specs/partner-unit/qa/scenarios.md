# QA — partner-unit

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| status | **done** |
| mfeStdUrl | `http://localhost:9318/master/partner-unit` |
| updatedAt | `2026-08-08T16:26:00.000Z` |

## Scenarios

| ID | Zone | Steps | Expect |
|----|------|-------|--------|
| Q1 | A Header | Open mfeStdUrl | Title «Đơn vị đối tác» · 1 LinPageLayout |
| Q2 | B Toolbar | Refresh · Config cog · +Thêm · History (need row) | Actions visible · modal create opens |
| Q3 | B Filter | Type mã/tên · Enter / SearchTextInput | List filters CI · page resets 1 |
| Q4 | C Grid | Rows render · column resize · filter/sort header | `LinCatalogDataGrid` · no raw table / nested CatalogListShell |
| Q5 | C Row menu | Right-click / ⋮ · View/Edit/Copy/Delete | Modal modes · delete confirm |
| Q6 | D Footer | Change page / pageSize | `LinCatalogListPagination` · no pageSizeBar in body |
| Q7 | Form | Create · Edit · View readOnly · Copy | Fields code/name/kind/province/legacy/active |
| Q8 | Seed | List without filter | ≥1 partner (13 seed when migrated) |
| Q9 | Perm local | `VITE_PERMISSIONS_LOCAL_MODE=true` | canCreate/Update/Delete true |
| Q10 | Shell | Visual | Flex fill · skeleton on page change · no double shell blank |

## Verify gates (worker)

| Gate | Result |
|------|--------|
| FE `yarn typecheck` | **PASS** |
| FE `yarn build` | **PASS** |
| BE API `dotnet build` | **PASS** |
| BE BFF `dotnet build` | **PASS** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.25 |
| generatedAt | 2026-08-08T16:26:00.000Z |
| versionGate | rechecked |
