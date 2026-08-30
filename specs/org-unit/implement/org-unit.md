# Implement — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `master` |
| domain | **Integration** |
| updatedAt | 2026-08-09T01:32:00.000Z |
| task | `task_9c375c48` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-CTX-01 | **done** | context API → `/integration/org-units` · DOMAIN-MAP already Integration |
| T-BE-01 | **done** | `OrgUnitEntity` shared Type A (no tenant filter) · `OrgUnitsController` API-01…07 · CI fold search |
| T-BE-02 | **done** | `Schema_RmmsOrgUnits` pair |
| T-SEED-01 | **done** | `Seed_RmmsOrgUnits` · 60 rows · keep_legacy VP-II.1/II.6 |
| T-BFF-01 | **done** | `OrgUnitsBffController` proxy `web-bff/api/v1/integration/org-units/**` |
| T-PERM-01 | **done** | codes `master.org-units.*` documented · TODO RequirePermission until CommonLib |
| T-UI-LIST-01 | **done** | Kind B A–D · LinTreeNav · badge «hệ cũ» · BASE `/integration/org-units` |
| T-UI-FORM-01 | **done** | Modal · SearchInput parent · VN labels · kind from init-data only |

## retry.ssot_rereview (close gate 2026-08-09)

| Check | Result | Note |
|-------|--------|------|
| `implement.page_shell` 1× LinPageLayout | **pass** | no nested CatalogListShell |
| `implement.grid` LinCatalogDataGrid | **pass** | ui-schema bootstrap · resize default ON |
| footer LinCatalogListPagination | **pass** | no footerPagination / raw table |
| tree_master LinTreeNav + LinTreeGridLayout | **pass** | Kind B |
| dropdown init-data only | **pass** | removed FE KIND_LABEL fallback (**GAP-DEV-DROPDOWN-HARDCODE-01**) |
| form SearchInput parent | **pass** | |

## Paths

| Layer | Path |
|-------|------|
| Entity | `api/shared/RMMS.Service.Persistence/Entities/OrgUnitEntity.cs` |
| API | `api/src/RMMS.Service.Api/Domains/Integration/` |
| DTOs | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/OrgUnitDtos.cs` |
| BFF | `bff/domains/integration/…/OrgUnitsBffController.cs` |
| Migrations | `Schema_RmmsOrgUnits` · `Seed_RmmsOrgUnits` |
| FE | `MFE-Source/Linm.Web.RMMS.Master` · `/master/org-unit` |

## Verify

| Check | Result |
|-------|--------|
| `dotnet build` API | **PASS** (2026-08-09T01:31 · Release) |
| `dotnet build` Integration.Bff + RMMS.Service.Bff | **PASS** (2026-08-09T01:31 · Release) |
| `yarn typecheck` Master | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` Master | **PASS** |

## Permissions (stub)

`master.org-units.read|create|update|delete|approve`

## Notes

- **GAP-P2-LKP-DISPLAY-01** — SearchInput Đơn vị chủ quản (form + filter): `primaryDisplay=code` · `secondaryDisplay=name` · `codeNameDisplay` + `getDetail` (`2026-08-30`)
- Thuật ngữ — label **Đơn vị chủ quản** (không «Đơn vị cha») `2026-08-30`
- Shared Type A: **no** `TenantEntity` / **no** `HasQueryFilter`
- Cấm parent `*Json` — flat `ParentCode`
- FE deep-link `/master/org-unit/new` → Modal via query redirect
