# Implement — csdl-bieu-11

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `lighting-systems` |
| formNo | `11` |
| IdCode | `LT-yyyyMMdd-nnnn` |
| route | `/csdl-bieu-11` + hub `?resource=lighting-systems` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-11` |
| peer | `/so-ts-lighting` (toolbar · ≠ merge) |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu11Entity` · `rmms_csdl_bieu11` · `Schema_CsdlBieu11` |
| taskId | `task_049ab5a3` |
| tlTaskId | `task_345a7e07` |
| contentHashPrior | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| updatedAt | `2026-09-05T13:00:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |

## Delivered

### FE (MFE Asset)
- Page `CsdlBieu11Page` Kind B · `LinErpListFilterBar` · `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` (catalogKind=`lighting-systems`)
- Form `CsdlBieu11FormSlideout` Kind D · 2col · **2 section** lưới + NLMT optional · LeaveConfirm · View readOnly
- Route alias `/csdl-bieu-11` · hub redirect · peer toolbar `so-ts-lighting`
- List subset: shared + LED4 + gridStatus + pole/cabinet + status
- Filters: search · province · status · road-route SearchInput · km · side · gridStatus
- DTO models + `gridStatus` list query on `csdlService`/`endpoint`

### BE (Linm.RMMS.WebService)
- `CsdlBieu11Entity` + migration `Schema_CsdlBieu11` · EF 1:1 cascade
- Flattened typed fields on catalog DTO/create/update
- `CsdlCatalogService` join/create/upsert/map + list filter `gridStatus`
- UiSchema seed `lighting-systems`
- DOMAIN-MAP `csdl-bieu-11` → Asset
- BFF proxy unchanged (typed fields ride JSON)

## Task matrix (Dev)

| ID | Status |
|----|--------|
| T-DM-01 | done |
| T-CTX-01 | done (STATUS/context sync) |
| T-BE-01..06 | done |
| T-BFF-01 | done (proxy verify · no logic) |
| T-PERM-01 | done (reuse) |
| T-BE-UISCHEMA-01 | done |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP | done |
| T-OUT-01/02 | done (XLS OUT stub · peer toolbar) |

## APIs

| Method | Path |
|--------|------|
| GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF `web-bff/...`) · `resource=lighting-systems` |
| GET | `/api/v1/integration/road-routes/search` |
| GET/PUT | `/api/v1/integration/catalogs/lighting-systems/ui-schema` |

## Debt / DEFER

- Migration apply DB (runtime Step 4b / migrate-on-start)
- Auth wire `asset.csdl-records.*` (reuse stub)
- manageUnit SearchInput org-unit **P2**
- XLS Biểu 11 **OUT**
- Solar child entity **cấm P1**

## Cấm respected

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · dump điểm→qty · parent *Json · Solar child · e2e/start:std @ Dev
