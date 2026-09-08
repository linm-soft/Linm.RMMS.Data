# Dev implement — csdl-so-09

| Field | Value |
|-------|-------|
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| this role | `dev` · `/agent-dev` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `its-ops-logs` |
| formNo | `09` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| route_confirm | `route_a` · `/csdl-so-09` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| peerStdUrl | `http://localhost:9301/csdl-bieu-14` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| taskId | `task_55ae2864` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| updatedAt | `2026-09-06T00:10:00.000Z` |

## Summary

Typed Kind B list + Kind D Slideout for Sổ 09 (`its-ops-logs`): FE alias page, BE `CsdlSo09Entity` + widened book entries (OccurredAt·Shift·OperatorName·SystemStatus·Anomaly·ActionTaken·Result·Recommendation·Signature), UiSchema registry, DOMAIN-MAP, optional `linkBieu14Id` → Biểu 14. API prefix unchanged. Builds PASS.

## FE (MFE Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlSo09Page/` — list + FormSlideout + css |
| Route | `src/index.tsx` · `csdl-so-09` |
| Hub redirect | `TYPED_RESOURCE_ROUTES['its-ops-logs']` → `/csdl-so-09` |
| Label | SO_RESOURCES formNo `9` · title «Sổ 09 — QL vận hành ITS/ETC/KSTTX» |
| List | `uiColumns` + `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` kind `its-ops-logs` |
| Filter | search · province · status · road-route · fromDate/toDate (period TZ) |
| Form | 2col typed header (thầu·Km·period·link14) + entries inline_grid **9 cột** · LeaveConfirm · C/E/V/Copy/Delete · History reuse |
| Link14 | `ITS_SYSTEMS_LOOKUP_CONFIG` + deep-link `/csdl-bieu-14?form=view&id=` · **cấm** embed |
| DTOs | `services/csdlSoSach` — linkBieu14Id + entry ops fields |
| Media | **N/A** · **cấm** FileMulti |
| ≠ Biểu 9 | resource `its-ops-logs` · **≠** `boundary-markers` |

## BE (Linm.RMMS.WebService)

| Item | Note |
|------|------|
| Entity | `CsdlSo09Entity` · table `rmms_csdl_so09` · Contractor · PeriodStart/End · LinkBieu14Id |
| Entries | widen OccurredAt · OperatorName · SystemStatus · Anomaly · ActionTaken · Result · Recommendation · Signature (Shift reuse) |
| Migration | `20260906100000_Schema_CsdlSo09` |
| Service | `CsdlCatalogService` branch IsItsOpsLogs · join/filter/upsert · stop Col1–3 SSOT |
| DTO | LinkBieu14Id + typed entry (`action` JSON → ActionTaken) |
| UiSchema | Registry kind `its-ops-logs` |
| DOMAIN-MAP | `csdl-so-09` → Asset |
| BFF | proxy only · no logic change |
| IdCode | ResourceMap `SO` · seed label Sổ 09 |

## Gates checked

| Gate | Result |
|------|--------|
| List config FULL (no leftover `const columns`) | PASS |
| Kind D Slideout · 2col · footer actions | PASS |
| Lookup road-route + its-systems · field types · view readOnly | PASS |
| yarn build | PASS |
| dotnet build | PASS |
| ERP.* / invent API | none |

## Debt (non-blocking P1)

- CatalogUiSchemaSeed default for `its-ops-logs` (registry Supported only)
- Auth permission wire · org SearchInput · XLS / e-sign — DEFER/OUT per TL
- Apply migration on target DB (ops)
- EF model snapshot regenerate (ops)

## Verify

```
MFE: yarn build → PASS (webpack size warnings only · chunk csdl-so-09 emitted)
BE:  dotnet build Linm.RMMS.WebService.sln → PASS (0 errors)
```

## Next

→ **QA** `/agent-qa*` e2e · CRUD · typed form+entries 9 cột · filter · route alias+hub · link14
→ Review after QA
