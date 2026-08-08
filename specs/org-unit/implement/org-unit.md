# Implement — org-unit

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `master` |
| domain | **Integration** |
| updatedAt | 2026-08-08T18:15:00.000Z |

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
| T-UI-FORM-01 | **done** | Modal · SearchInput parent · VN labels |

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
| `dotnet build` API | **PASS** |
| `dotnet build` BFF | **PASS** |
| `yarn typecheck` Master | **PASS** |
| `VITE_API_URL=… yarn build` Master | (run) |

## Permissions (stub)

`master.org-units.read|create|update|delete|approve`

## Notes

- Shared Type A: **no** `TenantEntity` / **no** `HasQueryFilter`
- Cấm parent `*Json` — flat `ParentCode`
- FE deep-link `/master/org-unit/new` → Modal via query redirect
