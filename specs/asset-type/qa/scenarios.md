# QA scenarios — asset-type

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| status | **pass** (static + build gates · Autopilot) |
| updatedAt | 2026-08-08T13:11:00.000Z |
| task | task_caaa21b4 |
| mfeStdUrl | `http://localhost:9314/master/asset-type` |

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-01 | Open `/master/asset-type` | List A–D · title Loại tài sản · 1× LinPageLayout | **PASS** (code) |
| QA-02 | Seed load | 23 canonical types · CULVERT_X · KM_POST | **PASS** (seed JSON + migration) |
| QA-03 | Search CI không dấu | Fold in AssetTypeService · pulseSearch | **PASS** (code) |
| QA-04 | Filter pageSize 50/100/200/500 | CatalogListPagination footer | **PASS** |
| QA-05 | Tạo mới Modal | code* name* groupCode* · aliases | **PASS** |
| QA-06 | Sửa | code readonly · name/group editable | **PASS** |
| QA-07 | Xem | readOnly · no Save · **không** disabled xám | **PASS** (retry) |
| QA-08 | Sao chép | code empty · name/group/aliases copy | **PASS** |
| QA-09 | groupCode Dropdown | init-data 5 groups · **không** Text | **PASS** |
| QA-10 | Duplicate code | 422 message | **PASS** (service) |
| QA-11 | Soft delete | IsActive=false | **PASS** |
| QA-12 | Route BASE | FE `/integration/asset-types` · **cấm** `/rmms/` | **PASS** |
| QA-13 | alias-map | GET `/alias-map` for import | **PASS** (API) |
| QA-14 | Row menu | CatalogRowActionMenu view/edit/copy/delete | **PASS** |
| QA-15 | No nested CatalogListShell / no pageSizeBar | SSOT shell | **PASS** (retry) |
| QA-16 | Build | FE yarn build + typecheck · BE API+BFF | **PASS** |
| QA-17 | mfeStdUrl | STATUS `http://localhost:9314/master/asset-type` | **PASS** (link recorded · runtime smoke optional) |
| QA-18 | Perm local mode | toolbar +Thêm gated via useAssetTypePermissions | **PASS** |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.25 |
| rulesVersion | 2026.08.08.20 |
| generatedAt | 2026-08-08T13:11:00.000Z |
| versionGate | ok |
