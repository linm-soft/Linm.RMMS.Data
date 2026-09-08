# Implement — csdl-bieu-07

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
| title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| this role | `dev` · `/agent-dev` |
| status | **done** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `shoulders-fences` |
| formNo | `07` |
| columns | `20` |
| IdCode | `LE-yyyyMMdd-nnnn` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-07` |
| hub | `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| taskId | `task_457e5414` |
| tlTaskId | `task_02e3c2e7` |
| contentHashPrior | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T17:00:00.000Z` |

## Summary

Typed Biểu 07 page + BE child `Schema_CsdlBieu7` for `resource=shoulders-fences`. Kind B list + Kind D Slideout (2col · 3 section). Unit convert FenceLengthM↔km and SlopeClearingM↔slopeLengthM in API service. Hub formNo 10→07. BFF proxy-only (no logic).

## FE (MFE Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlBieu07Page/` |
| Route | `/csdl-bieu-07` · `index.tsx` + `devRoutes` + topbar |
| CatalogKind | `shoulders-fences` · `LinCatalogUiSchemaEditorModal` + `buildDynamicGridColumns` |
| Filters | search · province · status · side · fenceKind · roadCode · kmFrom/kmTo |
| Form | Slideout Z1–Z3 · LeaveConfirm · C/E/V/Copy/Delete |
| Hub | `csdlSoSachStore` formNo **7** · title taluy · AT→formNo 10 |
| Models | `requestModel` / `responseModel` / `endpoint` · `side`+`fenceKind` |

## BE (Linm.RMMS.WebService)

| Item | Path / note |
|------|-------------|
| Entity | `CsdlBieu7Entity` · `rmms_csdl_bieu7` |
| Migration | `20260905094346_Schema_CsdlBieu7` |
| DTO / lookups | `CsdlBieu7Dtos.cs` + flat fields on `CsdlCatalogDtos` |
| Service | `CsdlCatalogService` typed branch · filters · km↔m |
| UiSchema | Registry + Seed `shoulders-fences` |
| DOMAIN-MAP | `csdl-bieu-07` → Asset |
| BFF | proxy comment only · forwards `side`/`fenceKind` |

## Verify

| Gate | Result |
|------|--------|
| MFE `yarn build` | **PASS** |
| BE `dotnet build` (Api) | **PASS** · 0 errors |
| E2E / start:std | **skipped** (queued `/agent-qa*`) |

## Debt / OUT

- FencePanelCount P1 omit · org SearchInput P2 · XLS OUT · Auth RequirePermission DEFER · map none · peer SHOULDER deep-link only

## T-* done

T-DM-01 · T-REN-01 · T-CTX-01 · T-BE-01..05 · T-BFF-01 · T-PERM-01 stub · T-BE-UISCHEMA-01 · T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX · T-OUT-01/02
