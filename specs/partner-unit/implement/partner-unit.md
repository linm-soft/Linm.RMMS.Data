# Implement — partner-unit

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| status | **done** |
| domain | Integration · `api/v1/integration/partner-units` |
| mfe | `Linm.Web.RMMS.Master` · `/master/partner-unit` |
| mfeStdUrl | `http://localhost:9314/master/partner-unit` (`yarn start:std`) |
| verify | FE `yarn typecheck` + `yarn build` · BE API+BFF `dotnet build` **PASS** |
| updatedAt | `2026-08-08T18:45:00.000Z` |

## retry.ssot_rereview: **pass**

```
checklist: tl-grid-ssot · list_parity · tree_master=N/A · form · tl-dropdown-from-backend
gaps (pre-fix): GAP-P2-LAYOUT (nested CatalogListShell) · GAP-P2-62 (footerPagination) · pageSizeBar · raw table · missing row menu/history/useServerPagedListLoading · GAP-DEV-DROPDOWN-HARDCODE-01 (form partnerKind VN fallback)
then: fix_all
```

### Post-fix checklist

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — no nested `CatalogListShell` | **pass** |
| 2 | Footer `LinCatalogListPagination` | **pass** |
| 3 | No `pageSizeBar` in body | **pass** |
| 4 | Flex + `useServerPagedListLoading` | **pass** |
| 5 | Toolbar FULL + row menu | **pass** |
| 6 | Filter `SearchTextInput` only | **pass** |
| 7 | `LinCatalogDataGrid` + resize/filter/sort + ui-schema bootstrap | **pass** |
| 8 | Tree | N/A |
| 9 | Form Create/Edit/View/Copy modal | **pass** |
| 10 | Dropdown partnerKind **chỉ** từ BE `GET …/init-data` | **pass** (removed FE hardcode fallback) |

## Done checklist

- [x] T-CTX-01 — context API path Integration · seed JSON 13
- [x] T-BE-01 — Entity · DTOs · Service · Controller
- [x] T-BE-02 — `Schema_RmmsPartnerUnits` (+ seed 13 in Up)
- [x] T-SEED-01 — seed in schema migration · JSON SSOT
- [x] T-BFF-01 — `PartnerUnitsBffController` proxy
- [x] T-PERM-01 — `usePartnerUnitPermissions` · codes `master.partner-units.*`
- [x] T-UI-LIST-01 — LinPageLayout + LinCatalogDataGrid · SSOT footer/pager · search CI
- [x] T-UI-FORM-01 — Modal · partnerKind Dropdown ← init-data · province · legacyFolder · View readOnly
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
| FE perms | `hooks/usePartnerUnitPermissions.ts` |
| FE svc | `services/partnerUnit/` |
| Seed | `docs/context/seed/partner-unit-seed.json` |

## implement.list_parity

Parity reference: `AssetTypeListPage` (Kind B flat catalog).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.08.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.25 |
| generatedAt | 2026-08-08T18:45:00.000Z |
| versionGate | rechecked |
