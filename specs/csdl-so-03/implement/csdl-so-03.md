# Dev implement — csdl-so-03

| Field | Value |
|-------|-------|
| feature | `csdl-so-03` |
| title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| this role | `dev` · `/agent-dev` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `duty-incident-logs` |
| retireKeys | `duty-logs` · `checkpoint-duties` |
| formNo | `03` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| route_confirm | `route_a` · `/csdl-so-03` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=duty-incident-logs` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| taskId | `task_dd89680a` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprintPrior | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| updatedAt | `2026-09-06T03:15:00.000Z` |

## Summary

Typed Kind B list + Kind D Slideout for Sổ 03 (`duty-incident-logs`): FE alias page, merge/retire 2 hub keys, BE `CsdlSo03Entity` + widened book entries, UiSchema, DOMAIN-MAP. API prefix unchanged. Builds PASS.

## FE (MFE Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlSo03Page/` — list + FormSlideout + css |
| Route | `src/index.tsx` · `csdl-so-03` · `devRoutes` · topbar |
| Hub redirect | `TYPED_RESOURCE_ROUTES['duty-incident-logs']` → `/csdl-so-03` · legacy `duty-logs`/`checkpoint-duties` → same |
| Label | SO_RESOURCES **1** card formNo `3` · title «Sổ 03 — Trực BĐGT + chốt + sự cố» · retire 2 keys |
| List | `uiColumns` + `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` kind `duty-incident-logs` |
| Filter | search · province · status(`draft\|active\|closed`) · road-route · fromDate/toDate |
| Form | 2col typed header + entries inline_grid · **cấm** dutyKind · LeaveConfirm · C/E/V/Copy/Delete · History reuse |
| DTOs | `services/csdlSoSach` — period* + entry dutyDate/shift/personName/content/handling/signRemark |

## BE (Linm.RMMS.WebService)

| Item | Note |
|------|------|
| Entity | `CsdlSo03Entity` · table `rmms_csdl_so03` · PeriodStart/End |
| Entries | widen DutyDate · Shift · PersonName · Content · Handling · SignRemark |
| Migration | `20260906030000_Schema_CsdlSo03` (+ SQL migrate resource) |
| Service | `CsdlCatalogService` IsDutyIncidentLogs · join/filter/upsert · ResourceMap swap |
| DTO | typed entry fields on catalog DTOs |
| UiSchema | Registry kind `duty-incident-logs` |
| DOMAIN-MAP | `csdl-so-03` → Asset |
| BFF | proxy only · no logic change |
| IdCode | ResourceMap `SO` |

## Gates checked

| Gate | Result |
|------|--------|
| List config FULL (no leftover `const columns`) | PASS |
| Kind D Slideout · 2col · footer actions | PASS |
| Lookup road-route · field types · view readOnly | PASS |
| Merge retire 2 hub keys · 1 card | PASS |
| yarn build | PASS |
| dotnet build | PASS |
| ERP.* / invent API | none |

## Debt (non-blocking P1)

- Auth permission wire DEFER
- org-unit SearchInput contractor P2
- XLS OUT
- Apply migration to env = ops/Step 4b deploy

## Verify

```
MFE: yarn build → PASS (webpack size warnings only · chunk csdl-so-03 emitted)
BE:  dotnet build RMMS.Service.Api.csproj → PASS (0 errors)
```

## Next

- QA e2e queued `/agent-qa*` · Review after QA
