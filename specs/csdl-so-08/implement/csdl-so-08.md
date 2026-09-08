# Dev implement — csdl-so-08

| Field | Value |
|-------|-------|
| feature | `csdl-so-08` |
| title | CSDL Sổ 08 — Kết quả BDTX |
| this role | `dev` · `/agent-dev` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `maintenance-work-logs` |
| formNo | `08` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| route_confirm | `route_a` · `/csdl-so-08` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-08` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=maintenance-work-logs` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| taskId | `task_85207485` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| updatedAt | `2026-09-06T02:10:00.000Z` |

## Summary

Typed Kind B list + Kind D Slideout for Sổ 08 (`maintenance-work-logs`): FE alias page, BE `CsdlSo08Entity` + widened book entries (WorkItem·Solution·MainResult), UiSchema registry, DOMAIN-MAP. API prefix unchanged. Builds PASS.

## FE (MFE Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlSo08Page/` — list + FormSlideout + css |
| Route | `src/index.tsx` · `csdl-so-08` |
| Hub redirect | `TYPED_RESOURCE_ROUTES['maintenance-work-logs']` → `/csdl-so-08` |
| Label | SO_RESOURCES formNo `8` · title «Sổ 08 — Kết quả BDTX» |
| List | `uiColumns` + `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` kind `maintenance-work-logs` |
| Filter | search · province · status · road-route · fromDate/toDate |
| Form | 2col typed header (thầu·VP·Khu·period) + entries inline_grid 5 cột · LeaveConfirm · C/E/V/Copy/Delete · History reuse |
| DTOs | `services/csdlSoSach` — officeUnit/zoneUnit + workItem/solution/mainResult |
| Media | **N/A** · **cấm** FileMulti |

## BE (Linm.RMMS.WebService)

| Item | Note |
|------|------|
| Entity | `CsdlSo08Entity` · table `rmms_csdl_so08` · Contractor · OfficeUnit · ZoneUnit · PeriodStart/End |
| Entries | widen WorkItem · Solution · MainResult (KmFrom/KmTo/Note reuse) |
| Migration | `20260906020000_Schema_CsdlSo08` |
| Service | `CsdlCatalogService` branch IsMaintenanceWorkLogs · join/filter/upsert · stop Col1–3 SSOT |
| DTO | flatten OfficeUnit/ZoneUnit + typed entry on catalog DTOs |
| UiSchema | Registry kind `maintenance-work-logs` |
| DOMAIN-MAP | `csdl-so-08` → Asset |
| BFF | proxy only · no logic change |
| IdCode | ResourceMap `SO` confirmed |

## Gates checked

| Gate | Result |
|------|--------|
| List config FULL (no leftover `const columns`) | PASS |
| Kind D Slideout · 2col · footer actions | PASS |
| Lookup road-route · field types · view readOnly | PASS |
| yarn build | PASS |
| dotnet build | PASS |
| ERP.* / invent API | none |

## Debt (non-blocking P1)

- CatalogUiSchemaSeed default for `maintenance-work-logs` (registry Supported only)
- Auth permission wire · org SearchInput · XLS — DEFER/OUT per TL
- Apply migration on target DB (ops)

## Verify

```
MFE: yarn build → PASS (webpack warnings size only)
BE:  dotnet build RMMS.Service.Api.csproj → PASS (0 errors)
```

## Next

- QA: `/agent-qa*` · T-QA-* · mfeStdUrl
- Review: after QA
