# Dev implement — csdl-so-05

| Field | Value |
|-------|-------|
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| this role | `dev` · `/agent-dev` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `accident-summaries` |
| formNo | `05` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| route_confirm | `route_a` · `/csdl-so-05` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-05` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=accident-summaries` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| taskId | `task_63d978f8` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprintPrior | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| updatedAt | `2026-09-06T06:22:26.191Z` |

## Summary

Typed Kind B list + Kind D Slideout for Sổ 05 (`accident-summaries`): FE alias page with **3 tabs** C.1 / C.2 / BS add-row; BE `CsdlSo05Entity` + C1/C2/BS children + `Schema_CsdlSo05`; hub NEW card formNo 05; so-04 title remains without «(+ TNGT)». API prefix unchanged. Builds PASS.

## FE (MFE Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlSo05Page/` — list + FormSlideout + css |
| Route | `src/index.tsx` · `csdl-so-05` |
| Hub redirect | `TYPED_RESOURCE_ROUTES['accident-summaries']` → `/csdl-so-05` |
| Label | SO_RESOURCES formNo `5` · title «Sổ 05 — TNGT + điểm đen» · bridge-inspections→formNo 6 · row-violations→7 |
| List | `uiColumns` + `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` kind `accident-summaries` · **cấm** leftover `const columns` |
| Filter | search · province · status · road-route · year · periodType · tableKind · **cấm** nút Tìm |
| Form | 2col typed header + 3 tabs entriesC1/C2/BlackSpot · period sync · LeaveConfirm · C/E/V/Copy/Delete · History reuse · **cấm** col1–3 / 16 hạng |
| Lookups | road-route `API-LKP-01` |
| DTOs | `services/csdlSoSach` — period*/tableKind/rollups/entries* |
| Media | **N/A** |

## BE (Linm.RMMS.WebService)

| Item | Note |
|------|------|
| Entity | `CsdlSo05Entity` · `rmms_csdl_so05` + `_c1` / `_c2` / `_bs` |
| Migration | `20260906090000_Schema_CsdlSo05` |
| Service | `CsdlCatalogService` accident-summaries · join/filter/upsert · replace-all lines · rollups · period/enum 422 · stop journal/detail*/class01–16 |
| DTO | `CsdlSo05Dtos.cs` + widen catalog DTOs |
| DOMAIN-MAP | `csdl-so-05` → Asset |
| BFF | proxy only · QS periodType/tableKind forwarded |
| Hub title | «Sổ 05 — TNGT + điểm đen» · ResourceMap SO |
| IdCode | ResourceMap `SO` confirmed |

## Gates checked

| Gate | Result |
|------|--------|
| List config FULL (no leftover `const columns`) | PASS |
| Kind D Slideout · 2col · footer · 3 tabs add-row | PASS |
| Lookup road · field types · view readOnly | PASS |
| yarn build | PASS |
| dotnet build | PASS |
| ERP.* / invent `/api/v1/accident-summaries` | none |

## Debt (non-blocking P1)

- CatalogUiSchemaSeed default for `accident-summaries` DEFER
- Auth permission wire · org SearchInput P2 · XLS OUT
- Soft unique advisory (no harden 422)
- Apply migration on target DB (ops)
- AppDbContextModelSnapshot drift until next ef add
- List projection lines only on GetById (So07 parity)

## Verify

```text
MFE: yarn build → PASS (webpack warnings size only)
BE:  dotnet build api/src/RMMS.Service.Api/RMMS.Service.Api.csproj → PASS 0/0
```

## T-* DoD

T-DM-01 · T-CTX-01 · T-BE-01..06 · T-BFF-01 · T-PERM-01 · T-BE-UISCHEMA-01 · T-UI-* (LIST/FILTER/CFG/FORM/ENTRIES/LEAVE/ACT/HIST/LKP/FIELD/PROD/UX/RESP) → **done** · T-OUT-01 OUT · T-QA-* queued

## Version meta

| Field | Value |
|-------|-------|
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| writtenAt | 2026-09-06T06:22:26.191Z |
