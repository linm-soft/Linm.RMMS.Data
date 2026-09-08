# Dev implement — csdl-so-07

| Field | Value |
|-------|-------|
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| this role | `dev` · `/agent-dev` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| route_confirm | `route_a` · `/csdl-so-07` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-07` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=row-violations` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| taskId | `task_24b3bbfd` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| updatedAt | `2026-09-06T04:45:00.000Z` |

## Summary

Typed Kind B list + Kind D Slideout for Sổ 07 (`row-violations`): FE alias page with **2 tabs** (`violations[]` / `permits[]`+QLDA), BE `Schema_CsdlSo07` + child VP/GP tables (no book_entries write), DOMAIN-MAP, hub redirect. API prefix unchanged. Builds PASS.

## FE (MFE Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlSo07Page/` — list + FormSlideout 2-tab + css |
| Route | `src/index.tsx` · `csdl-so-07` |
| Hub redirect | `TYPED_RESOURCE_ROUTES['row-violations']` → `/csdl-so-07` |
| Label | title «Sổ 07 — HL + GPTC + Dự án» · hub rename DEFER T-REN-01 |
| List | `uiColumns` + `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` kind `row-violations` |
| Filter | search · province · status(`draft\|active\|closed`) · road-route · fromDate/toDate UpdatedAt |
| Form | 2col typed header · Tab A VP · Tab B GPTC+QLDA · add/remove · LeaveConfirm · C/E/V/Copy/Delete · History reuse |
| DTOs | `services/csdlSoSach` — `violations[]` / `permits[]` |
| File | **N/A** · **cấm** FileMulti |

## BE (Linm.RMMS.WebService)

| Item | Note |
|------|------|
| Entity | `CsdlSo07Entity` · `rmms_csdl_so07` · Contractor · KmFrom/To · ManageUnit |
| Children | `CsdlSo07ViolationEntity` · `CsdlSo07PermitEntity` · FK CatalogRecordId · LineNo |
| Migration | `20260906070000_Schema_CsdlSo07` |
| Service | `CsdlCatalogService` IsRowViolations · join/filter/upsert · **stop** book_entries write |
| DTO | `Violations` / `Permits` on catalog create/update/detail |
| DOMAIN-MAP | `csdl-so-07` → Asset |
| BFF | proxy only · no logic change |
| IdCode | ResourceMap `SO` confirmed |
| Enums | sổ `draft\|active\|closed` · VP `open\|processing\|resolved\|dismissed` |

## Gates checked

| Gate | Result |
|------|--------|
| List config FULL (no leftover `const columns`) | PASS |
| Kind D Slideout · 2col · footer actions · 2 tabs | PASS |
| Lookup road-route · field types · view readOnly | PASS |
| yarn build | PASS |
| dotnet build | PASS |
| ERP.* / invent API / runtime row-violations path | none |

## Debt (non-blocking P1)

- CatalogUiSchemaSeed default for `row-violations` (registry Supported only)
- Auth permission wire · org SearchInput · hub rename T-REN-01 · XLS — DEFER/OUT
- Apply migration on target DB (ops)
- Legacy Col1–3 / detail* backfill → typed children — ops

## Verify

```
MFE: yarn build → PASS (webpack size warnings only · chunk csdl-so-07 emitted)
BE:  dotnet build Linm.RMMS.WebService.sln → PASS (0 errors)
```

## Next

- QA: `/agent-qa*` · T-QA-* · mfeStdUrl · tabs + nested arrays
- Review: after QA
