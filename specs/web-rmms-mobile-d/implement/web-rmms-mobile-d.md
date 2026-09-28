# Implement — web-rmms-mobile-d

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| role | `dev` · `/agent-dev` |
| status | `done` |
| packKind | `list` (phone Field list+form) |
| changeScope | `edit_page` · delta SUBMIT-VALIDATE |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/kien-nghi/moi` |
| mfeStdUrl | `http://localhost:9301/kien-nghi/moi` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Maintenance WO + Integration · **cấm ERP.*** |
| BFF | Mobile.Bff `mobile-bff/api/v1/**` · `mobileApiBase()` only · **cấm** web-bff |
| contentHash | `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T09:00:00.000Z` |
| taskId | `task_5fffffd3` |
| build | MFE `yarn build` **PASS** · `Linm.RMMS.WebService.sln` **PASS** · Mobile.Bff **PASS** |

## Delta delivered (SUBMIT-VALIDATE)

### T-BE-BFF-01 — Mobile.Bff users (GAP-DA-MOB-D-USERS-01)
- **Keep/verify:** `UsersMobileController` → forward `GET mobile-bff/…/integration/users` → Live `api/v1/integration/users`
- **Cấm** new WS API · **cấm** web-bff transport
- DOMAIN-MAP row `web-rmms-mobile-d` cite Integration users + road-routes

### T-BE-CRUD-01 — no seed (GAP-DA-MOB-D-SEED-01)
- TK-06 route = Live `ROAD_ROUTE_LOOKUP_CONFIG` · **no** `ROAD_ROUTE_SEED` / QL.22 in MobileD

### T-UI-LKP-01 — SearchInput users + road-routes
- `USER_LOOKUP_CONFIG` in `services/patrol/lookups.ts` — map `username|code` + `fullName` · miss `--`
- TD-06 `receiverName` → Mobile `SearchInput` (cấm free-text · cấm ERP UserSearchInput)
- TK-06 `route` → `SearchInput` + `ROAD_ROUTE_LOOKUP_CONFIG`

### T-UI-FORM-01 / Pattern B
- TD-06 + TK-06: Lưu always-on except `saving` · `validationAttempted` · banner `string[]` + inline `fieldError`
- GPS TK-06: idle until click · deny after click · noFace OK · cấm fake

### Keep baseline
- Schema_PatrolPetition · TK-03 assign · TK-05 feedback · LeaveConfirm · Note D1| · IsPaused

## APIs wired (delta)

| Surface | Method | Path |
|---------|--------|------|
| receiver SearchInput | GET | `integration/users?search=` (Mobile.Bff) |
| route SearchInput | GET | `integration/road-routes/search` (Mobile.Bff) |
| TD-06 save | PUT | `patrol/sessions/{id}` |
| TK-06 save | POST | `patrol/petitions` |

## WAIVE (phone)
Kind B grid · LinErpListFilterBar · ui-schema editor · HIST — N/A  
**T-UI-LKP-01 KEEP** (delta)

## Debt
- RequirePermission TODO peer (CommonLib ≥1.4.0)
- e2e **queued QA** — cấm Dev role

## Verify
- [x] `yarn build` PASS (MFE)
- [x] `dotnet build Linm.RMMS.WebService.sln` PASS
- [x] `dotnet build` Mobile.Bff PASS
- [ ] e2e — `/agent-qa*` only
