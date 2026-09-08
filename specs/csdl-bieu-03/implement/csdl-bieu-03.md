# Implement — csdl-bieu-03 (CSDL Biểu 03 — Hầm đường bộ)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-yyyyMMdd-nnnn` |
| mfeStdRoute | `/csdl-bieu-03` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| domain | Asset · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu3Entity` · `Schema_CsdlBieu3` |
| taskId | `task_8650b573` |
| contentHashPrior | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| writtenAt | `2026-09-05T09:20:00.000Z` |
| yarn build | **PASS** |
| dotnet build | **PASS** |

## Decisions locked (no controlHint change)

- Q-GPS **six_numbers** · Q-TUBE **two_rows** · Q-VENT **text** · Q-SECTION **sectioned** · Q-ROUTE **alias_now** · Q-PROV **keep_static**
- Kind B list + Kind D Slideout 2col · **cấm** Full-page · **cấm** detail* only
- API giữ `asset/csdl-records` · BFF proxy · **cấm ERP.***
- Peer Sổ 6 deep-link only · map none

## FE (Linm.Web.RMMS.Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlBieu03Page/` |
| Route | `src/index.tsx` → `/csdl-bieu-03` |
| Dev menu | `src/dev/devRoutes.ts` |
| Types/query | `responseModel` · `requestModel` · `csdlService` · `endpoint` (+ `tunnelClass`/`tubeCount`) |
| List | `LinErpListFilterBar` · `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` · **no** leftover `const columns`/`configHint` |
| Form | Slideout sectioned: chung · GPS · kết cấu · thoát+PCCC · thiết bị |
| Copy/tube | Copy → ống 2 (`tubeCount=2`,`tubeIndex=2`) khi 1 ống; multi → increment `tubeIndex` |
| Peer | deep-link `bridge-inspections` · hub `road-tunnels` |

## BE (Linm.RMMS.WebService)

| Item | Path / note |
|------|-------------|
| Entity | `CsdlBieu3Entity` · table `rmms_csdl_bieu3` |
| DTO | `CsdlBieu3Dtos.cs` + flatten on `CsdlCatalogDtos` |
| Service | `CsdlCatalogService` · `IsRoadTunnels` · join/CRUD/validate |
| Filters | `tunnelClass` · `tubeCount` · search `TunnelName` |
| Migration | `20260905085812_Schema_CsdlBieu3` |
| DOMAIN-MAP | `csdl-bieu-03` → Asset (**T-DM-01**) |
| BFF | proxy only (no logic change) |

## Task matrix status

| Task | Status |
|------|--------|
| T-DM-01 · T-CTX-01 | **done** |
| T-BE-01..05 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 | **done** (perm reuse stub) |
| T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP | **done** |
| T-OUT-01 | OUT (XLS) |
| T-QA-* | pending `/agent-qa*` |

## Build gate

- MFE `yarn build` → **PASS** (asset-size warnings only)
- BE `dotnet build Linm.RMMS.WebService.sln` → **PASS** 0 errors
- **Cấm** e2e / `start:std` ở Dev (queued QA)

## Debt

- Legacy `detail*` backfill → typed **optional** (not run)
- LOOKUP tunnelClass/crossingType normalize-only (strict 422 DEFER)
- Auth wire `asset.csdl-records.*` DEFER
- `dotnet ef database update` deploy gate for `Schema_CsdlBieu3`
- GAP-CSDL-ORG-01 SearchInput org P2 · GAP-CSDL-XLS-01 OUT

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| packKind | list |
| changeScope | new_page |
