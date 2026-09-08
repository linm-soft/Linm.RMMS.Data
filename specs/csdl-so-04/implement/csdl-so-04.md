# Dev implement — csdl-so-04

| Field | Value |
|-------|-------|
| feature | `csdl-so-04` |
| title | CSDL Sổ 04 — Tổng hợp đếm xe |
| this role | `dev` · `/agent-dev` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `traffic-counts` |
| formNo | `04` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| route_confirm | `route_a` · `/csdl-so-04` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-counts` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| taskId | `task_b4b31215` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprintPrior | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| updatedAt | `2026-09-06T05:45:00.000Z` |

## Summary

Typed Kind B list + Kind D Slideout for Sổ 04 (`traffic-counts`): FE alias page with 16-class count matrix + `totalCars` derived RO; BE `CsdlSo04Entity` + `Schema_CsdlSo04`, unique 422 station+year+quarter, hub title without TNGT. API prefix unchanged. Builds PASS.

## FE (MFE Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlSo04Page/` — list + FormSlideout + css |
| Route | `src/index.tsx` · `csdl-so-04` |
| Hub redirect | `TYPED_RESOURCE_ROUTES['traffic-counts']` → `/csdl-so-04` |
| Label | SO_RESOURCES formNo `4` · title «Sổ 04 — Tổng hợp đếm xe» · **cấm** «(+ TNGT)» |
| List | `uiColumns` + `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` kind `traffic-counts` |
| Filter | search · province · status · road-route · COUNT_STATION · year · quarter · countMethod · **cấm** nút Tìm |
| Form | 2col typed header + count matrix class01…16 · totalCars RO · LeaveConfirm · C/E/V/Copy/Delete · History reuse · **cấm** journal/col1–3 |
| Lookups | road-route + COUNT_STATION via `/asset/road-assets?type=COUNT_STATION` |
| DTOs | `services/csdlSoSach` — station*/year/quarter/countMethod/class01–16/totalCars |
| Media | **N/A** |

## BE (Linm.RMMS.WebService)

| Item | Note |
|------|------|
| Entity | `CsdlSo04Entity` · `rmms_csdl_so04` · Station* · Year · Quarter · CountMethod · Class01…16 · TotalCars |
| Migration | `20260906080000_Schema_CsdlSo04` |
| Service | `CsdlCatalogService` traffic-counts branch · join/filter/upsert · derive TotalCars · unique 422 · stop journal/detail* |
| DTO | widen catalog DTOs so04 fields |
| DOMAIN-MAP | `csdl-so-04` → Asset |
| BFF | proxy only · no logic |
| Hub title | «Tổng hợp đếm xe» (drop TNGT) |
| IdCode | ResourceMap `SO` confirmed |

## Gates checked

| Gate | Result |
|------|--------|
| List config FULL (no leftover `const columns`) | PASS |
| Kind D Slideout · 2col · footer actions · count matrix | PASS |
| Lookup road + station · field types · view readOnly | PASS |
| yarn build | PASS |
| dotnet build | PASS |
| ERP.* / invent `/api/v1/traffic-counts` | none |

## Debt (non-blocking P1)

- Class Excel overlay pending cite · interim «Hạng xe {nn}»
- CatalogUiSchemaSeed default for `traffic-counts` DEFER
- Auth permission wire · org SearchInput P2 · XLS OUT
- Legacy detail*/col1–3 backfill → typed DEFER
- Apply migration on target DB (ops)
- FE dedicated toast for unique 422 (generic error path)

## Verify

```
MFE: yarn build → PASS (webpack size warnings only)
BE:  dotnet build Linm.RMMS.WebService.sln → PASS (0 errors)
```

## Next

- QA: `/agent-qa*` · mfeStdUrl · CRUD · matrix · unique 422 · alias+hub
- Review: after QA
