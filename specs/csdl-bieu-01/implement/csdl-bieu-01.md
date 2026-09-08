# Implement — csdl-bieu-01

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `pavement-sections` |
| formNo | `01` |
| IdCode | `MD-yyyyMMdd-nnnn` |
| route | `/csdl-bieu-01` + hub `?resource=pavement-sections` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-01` |
| domain | Asset · `api/v1/asset/csdl-records` |
| taskId | `task_aefea7f3` |
| contentHashPrior | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T12:45:00.000Z` |
| yarn build | **PASS** |
| dotnet build | **PASS** |

## Summary

Typed Biểu 01 list+Slideout on alias `/csdl-bieu-01`. Shell `CsdlCatalogRecordEntity` + child `CsdlBieu1Entity` (`Schema_CsdlBieu1`). API kept `asset/csdl-records`; BFF proxy unchanged. Hub peer entry retained; Sổ TS deep-link only.

## Tasks DoD

| id | status | notes |
|----|--------|-------|
| T-DM-01 | **done** | DOMAIN-MAP `csdl-bieu-01`→Asset |
| T-CTX-01 | **done** | context feature sync |
| T-BE-01 | **done** | `CsdlBieu1Entity` + EF 1:1 |
| T-BE-02 | **done** | Migration `Schema_CsdlBieu1` (apply DB at deploy) |
| T-BE-03 | **done** | typed DTO join · stop detail* write for pavement-sections |
| T-BE-04 | **done** | IdCode `MD-` keep |
| T-BE-05 | **done** | filters roadCode + kmFrom/kmTo |
| T-BFF-01 | **done** | proxy QS as-is |
| T-PERM-01 | **done** | reuse stub codes · Auth wire DEFER |
| T-BE-UISCHEMA-01 | **done** | catalogKind `pavement-sections` typed seed |
| T-UI-LIST-01 | **done** | route alias + Kind B |
| T-UI-FILTER-01 | **done** | FilterBar + road SearchInput |
| T-UI-CFG-01 | **done** | LinCatalogUiSchemaEditorModal + buildDynamicGridColumns |
| T-UI-FORM-01 | **done** | Slideout typed · no detail*-only |
| T-UI-LEAVE-01 | **done** | LeaveConfirmModal |
| T-UI-ACT-01 | **done** | C/E/V/Copy/Delete |
| T-UI-LKP-01 | **done** | road-route P1 |
| T-UI-FIELD-01 | **done** | four_buckets · one_enum |
| T-UI-PROD-01 | **done** | hub + peer deep-link |
| T-UI-UX-01 | **done** | 2col footer_only |
| T-UI-RESP-01 | **done** | CSS responsive fields |
| T-OUT-01 | OUT | XLS/skip-bridge |

## FE paths

- `Linm.Web.RMMS.Asset/src/pages/CsdlBieu01Page/*`
- route `src/index.tsx` · `csdl-bieu-01`
- services `csdlSoSach/*` widened typed + filters

## BE paths

- Entity `CsdlBieu1Entity` · migration `20260905052251_Schema_CsdlBieu1`
- Service/Controller/DTO widen · CatalogUiSchemaSeed PavementSections
- DOMAIN-MAP row `csdl-bieu-01`

## APIs

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=pavement-sections&…` |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` |
| API-03 | POST | `/api/v1/asset/csdl-records` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` |

BFF: `/web-bff/api/v1/asset/csdl-records` proxy.

## Debt

- Auth RequirePermission still TODO (DEFER)
- Migration not applied to runtime DB in this pass
- UiSchema DB override may need clear if old Sổ TS schema saved
- org SearchInput / province master / XLS — P2/OUT

## Next

| Role | Need |
|------|------|
| QA | e2e `/agent-qa*` · T-QA-* |
| Review | after QA |
