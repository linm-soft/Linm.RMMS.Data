# Implement — csdl-bieu-12

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `green-assets` |
| formNo | `12` |
| IdCode | `CX-yyyyMMdd-nnnn` |
| route | `/csdl-bieu-12` + hub `?resource=green-assets` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` |
| peer | **none** · **cấm** invent so-ts-green |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu12Entity` · `rmms_csdl_bieu12` · `Schema_CsdlBieu12` |
| taskId | `task_b5ce8177` |
| tlTaskId | `task_04119979` |
| contentHashPrior | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| updatedAt | `2026-09-05T14:05:00.000Z` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |

## Delivered

### FE (MFE Asset)
- Page `CsdlBieu12Page` Kind B · `LinErpListFilterBar` · `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` (catalogKind=`green-assets`)
- Form `CsdlBieu12FormSlideout` Kind D · 2col · **2 section** Khóm cây + Thảm cỏ · LeaveConfirm · View readOnly
- Route alias `/csdl-bieu-12` · hub redirect `TYPED_RESOURCE_ROUTES` · **no peer**
- List subset: shared + 4 khóm + grassAreaM2 + status
- Filters: search · province · status · road-route SearchInput · km · side (side_only)
- DTO models `oleanderClumps`…`grassAreaM2` on request/response
- Validation FE `allow_either` (sum khóm > 0 OR grass > 0)

### BE (Linm.RMMS.WebService)
- `CsdlBieu12Entity` + migration `Schema_CsdlBieu12` · EF 1:1 cascade
- Flattened typed fields on catalog DTO/create/update
- `CsdlCatalogService` join/create/upsert/map · `RequireBieu8Side` · `allow_either`
- UiSchema seed `green-assets`
- DOMAIN-MAP `csdl-bieu-12` → Asset
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
| T-OUT-01/02 | done (XLS OUT · **no peer**) |

## APIs

| Method | Path |
|--------|------|
| GET/POST/PUT/DELETE | `/api/v1/asset/csdl-records` (+ BFF `web-bff/...`) · `resource=green-assets` |
| GET | `/api/v1/integration/road-routes/search` |
| GET/PUT | `/api/v1/integration/catalogs/green-assets/ui-schema` |

## Debt / DEFER

- Migration apply DB (runtime Step 4b / migrate-on-start)
- Auth wire `asset.csdl-records.*` (reuse stub)
- manageUnit SearchInput org-unit **P2**
- XLS Biểu 12 **OUT**

## Cấm respected

ERP.* · invent API · detail* only · Guid IdCode · invent so-ts-green · parent *Json · e2e/start:std @ Dev
