# Implement — partner-unit

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| status | **done** |
| domain | Integration · `api/v1/integration/partner-units` |
| mfe | `Linm.Web.RMMS.Master` · `/master/partner-unit` |
| verify | FE `yarn build` · BE API+BFF `dotnet build` (see STATUS) |
| updatedAt | 2026-08-08T12:40:00.000Z |

## Done checklist

- [x] T-CTX-01 — context API path Integration · seed JSON 13
- [x] T-BE-01 — Entity · DTOs · Service · Controller
- [x] T-BE-02 — `Schema_RmmsPartnerUnits` (+ seed 13 in Up)
- [x] T-SEED-01 — seed in schema migration · JSON SSOT
- [x] T-BFF-01 — `PartnerUnitsBffController` proxy
- [x] T-PERM-01 — codes `master.partner-units.*` stub TODO RequirePermission
- [x] T-UI-LIST-01 — LinPageLayout + CatalogListShell · search CI
- [x] T-UI-FORM-01 — Modal · partnerKind Dropdown · province · legacyFolder · View readOnly
- [x] T-QA-01 — scenarios.md

## Key paths

| Layer | Path |
|-------|------|
| Entity | `RMMS.Service.Persistence/Entities/PartnerUnitEntity.cs` |
| DTOs | `LINM.RMMS.Integration.Models/DTOs/PartnerUnitDtos.cs` |
| API | `Domains/Integration/Controllers/PartnerUnitsController.cs` |
| BFF | `LINM.RMMS.Integration.Bff/Controllers/PartnerUnitsBffController.cs` |
| Migration | `Migrations/20260808121000_Schema_RmmsPartnerUnits.cs` |
| FE page | `pages/PartnerUnitListPage/` |
| FE svc | `services/partnerUnit/` |
| Seed | `docs/context/seed/partner-unit-seed.json` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.21 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T12:40:00.000Z |
| versionGate | ok |
