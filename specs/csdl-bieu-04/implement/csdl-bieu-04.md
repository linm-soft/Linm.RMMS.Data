# Implement — csdl-bieu-04

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-yyyyMMdd-nnnn` |
| route | `/csdl-bieu-04` + hub `?resource=culverts` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` |
| domain | Asset · `api/v1/asset/csdl-records` |
| taskId | `task_cd72c67e` |
| contentHashPrior | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T06:30:00.000Z` |
| yarn build | **PASS** |
| dotnet build | **PASS** |

## Summary

Typed Biểu 04 list+Slideout on alias `/csdl-bieu-04`. Shell `CsdlCatalogRecordEntity` + child `CsdlBieu4Entity` (`Schema_CsdlBieu4`). GPS **four_xy** · shape hộp/tròn · loadClass free_text. API kept `asset/csdl-records`; BFF proxy unchanged. Peer Sổ TS deep-link only · **cấm** merge.

## Tasks DoD

| id | status | notes |
|----|--------|-------|
| T-DM-01 | **done** | DOMAIN-MAP `csdl-bieu-04`→Asset |
| T-CTX-01 | **done** | context feature sync |
| T-BE-01 | **done** | `CsdlBieu4Entity` + EF 1:1 |
| T-BE-02 | **done** | Migration `Schema_CsdlBieu4` (apply DB at deploy) |
| T-BE-03 | **done** | typed DTO join · stop detail* write for culverts |
| T-BE-04 | **done** | IdCode prefix `CG` |
| T-BE-05 | **done** | filters roadCode + kmPoint→KmFrom |
| T-BFF-01 | **done** | proxy QS as-is |
| T-PERM-01 | **done** | reuse stub codes · Auth wire DEFER |
| T-BE-UISCHEMA-01 | **done** | catalogKind `culverts` typed seed |
| T-UI-LIST-01 | **done** | route alias + Kind B |
| T-UI-FILTER-01 | **done** | FilterBar + road SearchInput + kmPoint |
| T-UI-CFG-01 | **done** | LinCatalogUiSchemaEditorModal + buildDynamicGridColumns |
| T-UI-FORM-01 | **done** | Slideout typed 17 · no detail*-only |
| T-UI-LEAVE-01 | **done** | LeaveConfirmModal |
| T-UI-ACT-01 | **done** | C/E/V/Copy/Delete |
| T-UI-LKP-01 | **done** | road-route P1 |
| T-UI-FIELD-01 | **done** | four_xy · shape · free_text load |
| T-UI-PROD-01 | **done** | hub + peer deep-link |
| T-UI-UX-01 | **done** | 2col footer_only |
| T-UI-RESP-01 | **done** | CSS responsive fields |
| T-OUT-01 | OUT | XLS/skip-bridge |

## FE paths

- `Linm.Web.RMMS.Asset/src/pages/CsdlBieu04Page/*`
- route `src/index.tsx` · `csdl-bieu-04`
- services `csdlSoSach/*` widened typed + kmPoint filter

## BE paths

- Entity `CsdlBieu4Entity` · migration `20260905061652_Schema_CsdlBieu4`
- Service/Controller/DTO widen · CatalogUiSchemaSeed Culverts
- DOMAIN-MAP row `csdl-bieu-04`

## APIs

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/asset/csdl-records?resource=culverts&…` |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` |
| API-03 | POST | `/api/v1/asset/csdl-records` |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` |
| API-LKP-01 | GET | `/api/v1/integration/road-routes/search` |

BFF: `/web-bff/api/v1/asset/csdl-records` proxy.

## Debt

- Auth RequirePermission wire DEFER
- Migration apply at deploy (not run in Dev role)
- manageUnit org SearchInput P2
- Legacy detail* → typed backfill optional
- XLS/skip-bridge OUT

## Next

| Role | Need |
|------|------|
| **QA** | e2e T-QA-* · CRUD/form/filter/route · **cấm** Dev e2e |
| Review | after QA |
