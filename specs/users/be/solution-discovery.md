# SA — solution-discovery · users

| Field | Value |
|-------|-------|
| feature | `users` |
| status | `confirmed` |
| solution_confirm | `approve` (autopilot · task_abbcb82f) |
| domain | **Integration** (DOMAIN-MAP slug `users`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| updatedAt | 2026-08-10T08:36:30.000Z |

## 1. Ownership

| Layer | Path |
|-------|------|
| API | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/` |
| Persistence | `rmms_users` · `AppUserEntity` · tenant `CompanyCode` |
| MFE | `Linm.Web.RMMS.Integration` |

**Cấm:** ERP.WebService · Domains/Master · `api/v1/rmms/*` ERP · invent domain ngoài Integration.

## 2. Gates

| Gate | Decision |
|------|----------|
| sa_tz_gate | `tz_na` (Auth host tạm Integration) |
| sa_xco_gate | `xco_na` |
| sa_shared_table | `tenant_a` (users theo company) |
| Org tree | **Reuse** `api/v1/integration/org-units` tree (share_a) — không duplicate schema org |

## 3. API catalog

| Method | Path | Notes |
|--------|------|-------|
| GET | `api/v1/integration/users` | search · status · role · orgCode · page · pageSize |
| GET | `api/v1/integration/users/{id}` | |
| POST | `api/v1/integration/users` | create · gen `USR-YYYYMMDD-NNNN` |
| PUT | `api/v1/integration/users/{id}` | update |
| DELETE | `api/v1/integration/users/{id}` | soft delete |
| POST | `api/v1/integration/users/{id}/change-password` | stub hash validate |
| POST | `api/v1/integration/users/{id}/assign-routes` | body `routesCsv` |
| POST | `api/v1/integration/users/{id}/managed-users` | body `managedUserIdsCsv` |
| GET | `api/v1/integration/org-units/tree` | **reuse** filter sidebar |

BFF mirror: `web-bff/api/v1/integration/users/**` proxy-only.

Permission codes (Auth stub):
`integration.users.read|create|update|delete`

## 4. Schema — `rmms_users`

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | varchar(64) | tenant filter |
| Code | varchar(64) | unique / company · USR-* |
| Username | varchar(64) | unique / company |
| FullName | varchar(128) | |
| Email | varchar(128) | |
| Phone | varchar(32) | nullable |
| OrgCode | varchar(64) | FK soft → org unit code |
| RoleCode | varchar(64) | |
| Status | varchar(32) | active \| locked |
| RoutesCsv | varchar(2000) | flat — **no JSON** |
| ManagedUserIdsCsv | varchar(2000) | flat |
| PasswordHash | varchar(256) | stub |
| IsActive | bool | |
| CreatedAt / UpdatedAt | timestamptz | |

Indexes: `(CompanyCode, Code)` unique · `(CompanyCode, Username)` unique · `(CompanyCode, OrgCode, IsActive)` · `(CompanyCode, Status, IsActive)`.

## 5. Migration

- EF: `Schema_RmmsUsers` via `/database-migration` pattern (hand or `dotnet ef`)
- Seed optional in service first-list empty OK · FE local fallback seed

## 6. Handoff → TL

- T-BE users CRUD + change-password + assign stubs
- T-BFF proxy
- T-UI-LIST tree+grid A–D · T-UI-FORM slideout + modals
- route lock `/integration/users`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T08:36:30.000Z |
| versionGate | rechecked |
