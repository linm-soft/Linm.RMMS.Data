# Implement — users

| Field | Value |
|-------|-------|
| feature | `users` |
| status | `done` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| mfeStdRoute | `/integration/users` |
| updatedAt | 2026-08-10T08:45:00.000Z |

## Done tasks

| id | status | notes |
|----|--------|-------|
| T-CTX-01 | done | context API Integration |
| T-PERM-01 | done | `integration.users.*` FE gate · BE TODO RequirePermission |
| T-BE-01 | done | AppUsersController + AppUserService CRUD · change-password · assign |
| T-BE-02 | done | `Schema_RmmsUsers` · `rmms_users` · AppDbContext |
| T-BFF-01 | done | AppUsersBffController proxy |
| T-UI-LIST-01 | done | LinPageLayout A–D · org tree · LinCatalogDataGrid · pagination |
| T-UI-FORM-01 | done | Slideout · pwd · profile modals |

## Verify gate

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS
dotnet build RMMS.Service.Api → PASS
dotnet build LINM.RMMS.Integration.Bff → PASS
```

## SSOT checklist (list)

- [x] 1× LinPageLayout (no nested CatalogListShell)
- [x] LinCatalogDataGrid + resizable ON
- [x] LinCatalogListPagination footer
- [x] flex + skeleton (useServerPagedListLoading)
- [x] toolbar config fa-cog
- [x] search work · row menu · org tree filter

## Files (key)

### FE (`Linm.Web.RMMS.Integration`)

- `src/pages/UsersListPage/*`
- `src/services/users/*`
- `src/demo/usersStore.ts`
- `src/index.tsx` · `src/dev/devRoutes.ts`

### BE (`Linm.RMMS.WebService`)

- `Entities/AppUserEntity.cs`
- `DTOs/AppUserDtos.cs`
- `Services/AppUserService.cs` · `IAppUserService.cs`
- `Controllers/AppUsersController.cs`
- `Bff/AppUsersBffController.cs`
- `Migrations/20260810083600_Schema_RmmsUsers.cs`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T08:45:00.000Z |
| versionGate | rechecked |
