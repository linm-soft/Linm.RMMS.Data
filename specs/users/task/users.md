# Team-lead — task pack · users

| Field | Value |
|-------|-------|
| feature | `users` |
| status | `confirmed` |
| mfeStdRoute | `/integration/users` |
| route_confirm | **approve** A = `/integration/users` (context + DOMAIN-MAP) |
| updatedAt | 2026-08-10T08:37:00.000Z |

## Source lock

| Key | Value |
|-----|-------|
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | Integration |
| api | `api/v1/integration/users` |
| bff | `web-bff/api/v1/integration/users` |
| org reuse | `api/v1/integration/org-units` |

## DES-GRID → Lin\* map

| DES-GRID | Component |
|----------|-----------|
| A | `LinPageLayout` header |
| B | catalogToolbar (refresh · history · editConfig · add) + page actions profile/pwd |
| C1 | `ErpListHeaderFilters` · `SearchTextInput` · `Select` |
| C2 | org tree panel + `LinCatalogDataGrid` (resizable ON) · `LinCatalogRowActionMenu` |
| D | `LinCatalogListPagination` |
| Form | dedicated page Z1–Z3 · SearchInput lookup · View `<dl>` |
| LAYOUT-06 | page flex column · gridWrap `min-height:0` · skeleton |

## Tasks

| id | page | layer | deps | DoD |
|----|------|-------|------|-----|
| T-CTX-01 | users | docs | — | context API paths Signed Integration |
| T-PERM-01 | users | ui+api | T-CTX-01 | codes `integration.users.*` · FE gate · BE stub TODO RequirePermission |
| T-BE-01 | users | api | T-CTX-01 | CRUD + change-password + assign stubs · DTOs |
| T-BE-02 | users | migration | T-BE-01 | `Schema_RmmsUsers` · AppDbContext |
| T-BFF-01 | users | bff | T-BE-01 | proxy UsersBffController |
| T-UI-LIST-01 | users | ui | T-BFF-01 | A–D · tree · grid · pagination · no nested shell |
| T-UI-FORM-01 | users | ui | T-UI-LIST-01 | Form page Z1–Z3 (không Slideout) |
| T-QA-01 | users | qa | T-UI-FORM-01 | scenarios.md · mfeStdUrl smoke |
| T-UI-ACT-01 | users | ui | T-UI-LIST-01 | Toolbar Thêm/Sửa/Xem/Xóa + row menu → `/integration/users/new` · `/:id` · change-password · assign-routes · managed-users (GAP-P2-ACT) |
| T-UI-MAP-FORM | users | ui | T-UI-FORM-01 | Map control ↔ DTO: username/fullName/email/phone Input · org/role/status SearchInput · routesCsv text · password Input |
| T-UI-LKP-01 | users | ui | T-BE-CRUD-01 | Role/status/org = SearchInput + `GET .../users/init-data` · org-units/search (cấm native select) |
| T-UI-FIELD-01 | users | ui | T-UI-MAP-FORM | string/email/phone/csv ↔ Input; lookup codes ↔ SearchInput value |
| T-UI-PROD-01 | users | ui | T-UI-FORM-01 | Cấm Resource/Slideout/View=readOnly/N-control; View = `<dl>` |
| T-UI-UX-01 | users | ui | T-UI-LIST-01 | gap 4/8/16 · LinPageLayout/LinCatalog* · không width px ad-hoc trên filter |
| T-BE-CRUD-01 | users | api | T-BE-01 | `GET init-data` · CRUD + change-password + assign-routes + managed-users đã có; BFF proxy init-data |
| QA-CRUD | users | qa | T-UI-ACT-01 | Smoke Create/Edit/View + row assign/pwd/delete |

## Action inventory (GAP-P2-ACT)

| UI action | Zone | Pair |
|-----------|------|------|
| Thêm | toolbar | GET/POST form `/integration/users/new` |
| Sửa / Xem | toolbar + row | GET/PUT `/integration/users/:id` |
| Sao chép | row | POST create `?copyFrom=` |
| Xóa | toolbar + row | DELETE `{id}` |
| Phân tuyến | row | POST `{id}/assign-routes` |
| Cán bộ QL | row | POST `{id}/managed-users` |
| Đổi MK | toolbar + row | POST `{id}/change-password` |
| Hồ sơ | toolbar | View fields (active row) |

## retry.ssot_rereview (TL live page 2026-08-14)

| Check | Live | Gap |
|-------|------|-----|
| 1× LinPageLayout, no nested CatalogListShell | PASS | — |
| LinCatalogDataGrid + resizable ON | PASS | — |
| LinCatalogListPagination footer | PASS | — |
| flex + skeleton | PASS | — |
| toolbar config | PASS | — |
| tree_master org | PASS (local seed) | Wire tree API |
| Form Slideout + View readOnly | FAIL T-UI-PROD | Dedicated form page + dl view |
| Select native catalog | FAIL T-UI-LKP | SearchInput |
| assign managed / delete FE | FAIL T-UI-ACT | Wire API |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-14T13:50:00.000Z |
| versionGate | rechecked |

## SD flags

| Flag | Value |
|------|-------|
| SD-BFF | proxy-only |
| SD-AUTH | stub local perms |
| SD-JOB | n/a |
| SD-TOKEN | reuse existing API client |
| SD-HEADER | X-Company-Id forward |

## Handoff → Dev

1. Chỉ implement task ids mới: T-BE-CRUD-01 · T-UI-ACT-01 · T-UI-MAP-FORM · T-UI-LKP/FIELD/PROD/UX · QA-CRUD
2. Không rewrite T-UI-LIST-01 đã PASS
3. VERIFY: `yarn typecheck` + `yarn build` · `dotnet build` API + BFF
