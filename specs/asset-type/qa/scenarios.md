# QA scenarios — asset-type

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| status | **pass** (static + build gates · Autopilot) |
| updatedAt | `2026-08-10T15:35:00.000Z` |
| task | `task_b7d98891` · T-QA-CRUD-01 |
| mfeStdUrl | `http://localhost:9318/master/asset-type` |

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-01 | Open `/master/asset-type` | List A–D / DES-GRID · title Loại tài sản · 1× LinPageLayout | **PASS** (code) |
| QA-02 | Seed load | 23 canonical types · CULVERT_X · KM_POST | **PASS** (seed JSON + migration) |
| QA-03 | Search CI không dấu | Fold in AssetTypeService · pulseSearch | **PASS** (code) |
| QA-04 | Filter pageSize 50/100/200/500 | LinCatalogListPagination footer | **PASS** |
| QA-05 | Tạo mới Modal | code* name* groupCode* · aliases | **PASS** |
| QA-06 | Sửa | code readonly · name/group editable | **PASS** |
| QA-07 | Xem | readOnly · no Save · **không** disabled xám | **PASS** |
| QA-08 | Sao chép | code empty · name/group/aliases copy | **PASS** |
| QA-09 | groupCode Dropdown | init-data only · **không** KIND_LABEL FE | **PASS** |
| QA-10 | Duplicate code | 422 message | **PASS** (service) |
| QA-11 | Soft delete | IsActive=false | **PASS** |
| QA-12 | Route BASE | FE `/integration/asset-types` · **cấm** `/rmms/` | **PASS** |
| QA-13 | alias-map | GET `/alias-map` for import | **PASS** (API) |
| QA-14 | Row menu | LinCatalogRowActionMenu view/edit/copy/delete | **PASS** |
| QA-15 | No nested CatalogListShell / no pageSizeBar | SSOT shell | **PASS** |
| QA-16 | LinCatalogDataGrid · no raw table | GAP-DEV-GRID-RESIZE-01 closed | **PASS** |
| QA-17 | Build | FE yarn build + typecheck · BE API+BFF | **PASS** (task_b7d98891) |
| QA-18 | mfeStdUrl | STATUS `http://localhost:9318/master/asset-type` | **PASS** |
| QA-19 | Perm local mode | toolbar +Thêm gated via useAssetTypePermissions | **PASS** |
| QA-20 | FormType pack ACT | T-UI-ACT-01 inventory · all actions wired | **PASS** |
| QA-21 | CRUD cycle | Create→Edit→View→Delete + row menu (T-QA-CRUD-01) | **PASS** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.10.1 |
| rulesVersion | 2026.08.10.2 |
| generatedAt | 2026-08-10T15:35:00.000Z |
| versionGate | rechecked |
