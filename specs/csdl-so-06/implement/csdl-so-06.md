# Dev implement — csdl-so-06

| Field | Value |
|-------|-------|
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| this role | `dev` · `/agent-dev` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `bridge-inspections` |
| formNo | `06` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| route_confirm | `route_a` · `/csdl-so-06` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| taskId | `task_e9296e25` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| updatedAt | `2026-09-06T03:55:00.000Z` |

## Summary

Typed Kind B list + Kind D Slideout for Sổ 06 (`bridge-inspections`): FE alias page, BE `CsdlSo06Entity` + widened book entries (PartCode·DamageDesc·Priority·PhotoIds…), seed fixed-20, DOMAIN-MAP. API prefix unchanged. Builds PASS.

## FE (MFE Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlSo06Page/` — list + FormSlideout + css |
| Route | `src/index.tsx` · `csdl-so-06` |
| Hub redirect | `TYPED_RESOURCE_ROUTES['bridge-inspections']` → `/csdl-so-06` |
| Title | «Sổ 06 — QL cầu / phiếu KT» · status `draft\|done\|cancelled` (local SO06_STATUSES) |
| List | `uiColumns` + `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` kind `bridge-inspections` |
| Filter | search · province · status · road-route · bridgeId · fromDate/toDate (inspectedAt) |
| Form | 2col typed header + entries **fixed-20** · LeaveConfirm · C/E/V/Copy/Delete · History reuse |
| Entries | partCode/Name ro · damageDesc · proposedActionQty · priority · photoIds (CSV max5) · note · **cấm** add/remove |
| Peer | passportRef → `/csdl-bieu-02` deep-link · **cấm** merge |
| DTOs | `services/csdlSoSach` — bridge*/kmStation/passportRef/inspectedAt/adminArea + entry typed |
| Media | photoIds Text CSV · FileMulti UI DEFER (integrate-file-upload-web) |

## BE (Linm.RMMS.WebService)

| Item | Note |
|------|------|
| Entity | `CsdlSo06Entity` · table `rmms_csdl_so06` · Bridge* · KmStation · ManageUnit · PassportRef · InspectedAt · Inspector · AdminArea |
| Entries | widen PartCode · PartName · DamageDesc · ProposedActionQty · Priority · PhotoIds |
| Migration | `20260906063000_Schema_CsdlSo06` |
| Service | `CsdlCatalogService` IsBridgeInspections · seed 20 · validate priority/photoIds · list bridgeId + inspectedAt TZ |
| DTO | flatten So06 header + typed entry on catalog DTOs |
| DOMAIN-MAP | `csdl-so-06` → Asset |
| BFF | proxy only · bridgeId QS passthrough |
| IdCode | ResourceMap `SO` |

## Gates checked

| Gate | Result |
|------|--------|
| List config FULL (no leftover `const columns`) | PASS |
| Kind D Slideout · 2col · fixed-20 · footer actions | PASS |
| Lookup road-route · status LOOKUP · view readOnly | PASS |
| yarn build | PASS |
| dotnet build | PASS |
| ERP.* / invent `/api/v1/bridge-inspections` runtime | none |

## Debt (non-blocking P1)

- FileMulti widget → photoIds CSV Text until integrate-file-upload-web wired
- Bridge SearchInput peer → Text fallback P1
- UiSchema seed default for `bridge-inspections`
- Auth permission wire · org SearchInput · hub rename T-REN-01 · XLS — DEFER/OUT
- Apply migration on target DB (ops)

## Verify

```
MFE: yarn build → PASS (webpack size warnings only)
BE:  dotnet build RMMS.Service.Api.csproj → PASS (0 errors)
```

## Next

QA (`/agent-qa*`) · e2e CRUD + fixed-20 + filter + route alias/hub · **cấm** start role khác ở Dev.
