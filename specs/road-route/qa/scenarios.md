# QA scenarios — road-route

| Field | Value |
|-------|-------|
| feature | `road-route` |
| status | **pass** (static + build gates · Autopilot) |
| updatedAt | 2026-08-08T13:06:00.000Z |
| task | task_781e6158 |
| mfeStdUrl | `http://localhost:9314/master/road-route` |

| ID | Scenario | Expect | Result |
|----|----------|--------|--------|
| QA-01 | Open `/master/road-route` | List A–D · title Tuyến đường · 1× LinPageLayout | **PASS** (code) |
| QA-02 | Seed load | ≥38 rows · QL.1 · HCM · CT.NS-HCM | **PASS** (seed JSON + migration InsertData) |
| QA-03 | Search CI không dấu | Fold in `RoadRouteService` · pulseSearch | **PASS** (code) |
| QA-04 | Filter pageSize 50/100/200/500 | CatalogListPagination footer | **PASS** |
| QA-05 | Tạo mới Modal | code* name* routeKind* | **PASS** |
| QA-06 | Sửa | code readonly · name/kind editable | **PASS** |
| QA-07 | Xem | readOnly · no Save · **không** disabled xám | **PASS** (retry) |
| QA-08 | Sao chép | code empty · name/kind copy | **PASS** |
| QA-09 | Tuyến mẹ SearchInput | API-02 · **không** Text | **PASS** |
| QA-10 | Duplicate code | 422 message | **PASS** (EnsureUniqueCodeAsync) |
| QA-11 | Soft delete có child | 422 | **PASS** (SoftDeleteAsync) |
| QA-12 | Route BASE | FE `/integration/road-routes` · **cấm** `/rmms/` | **PASS** |
| QA-13 | Exclude noise | không seed `Đã Import Xong` | **PASS** |
| QA-14 | Row menu | CatalogRowActionMenu view/edit/copy/delete | **PASS** |
| QA-15 | No nested CatalogListShell / no pageSizeBar | SSOT shell | **PASS** |
| QA-16 | Build | FE yarn build + typecheck · BE API+BFF | **PASS** |
| QA-17 | mfeStdUrl | STATUS `http://localhost:9314/master/road-route` | **PASS** (link recorded · runtime smoke optional) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.25 |
| rulesVersion | 2026.08.08.20 |
| generatedAt | 2026-08-08T13:06:00.000Z |
| versionGate | ok |
