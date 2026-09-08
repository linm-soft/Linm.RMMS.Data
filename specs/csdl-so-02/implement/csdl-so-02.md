# Dev implement — csdl-so-02

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường |
| this role | `dev` · `/agent-dev` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-yyyyMMdd-nnnn` |
| route_confirm | `route_a` · `/csdl-so-02` + hub |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| taskId | `task_d4e4f9fe` |
| yarnBuild | **PASS** |
| dotnetBuild | **PASS** |
| e2eQa | ON (queued `/agent-qa*` only · **cấm** e2e ở Dev) |
| contentHashPrior | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| updatedAt | `2026-09-06T00:36:00.000Z` |

## Summary

Typed Kind B list + Kind D Slideout for Sổ 02 (`patrol-logs`): FE alias page, BE `CsdlSo02Entity` + widened book entries, UiSchema, DOMAIN-MAP. API prefix unchanged. Builds PASS.

## FE (MFE Asset)

| Item | Path / note |
|------|-------------|
| Page | `src/pages/CsdlSo02Page/` — list + FormSlideout + css |
| Route | `src/index.tsx` · `csdl-so-02` |
| Hub redirect | `TYPED_RESOURCE_ROUTES['patrol-logs']` → `/csdl-so-02` |
| Label | SO_RESOURCES formNo `2` · title «Sổ 02 — Nhật ký tuần đường» |
| List | `uiColumns` + `buildDynamicGridColumns` · `LinCatalogUiSchemaEditorModal` kind `patrol-logs` |
| Filter | search · province · status · road-route · fromDate/toDate |
| Form | 2col typed header + entries inline_grid · LeaveConfirm · C/E/V/Copy/Delete · History reuse |
| DTOs | `services/csdlSoSach` — patrolStaff/period* + typed entry fields |
| File P1 | sketchRef + mediaIds as text ids · max 10 (BE validates) |

## BE (Linm.RMMS.WebService)

| Item | Note |
|------|------|
| Entity | `CsdlSo02Entity` · table `rmms_csdl_so02` · PatrolStaff · PeriodStart/End |
| Entries | widen EventAt · LocationKm · WeatherEvent · OnSiteAction · RemarkSign · SketchRef · MediaIds |
| Migration | `20260905240000_Schema_CsdlSo02` |
| Service | `CsdlCatalogService` branch IsPatrolLogs · join/filter/upsert · stop Col1–3 SSOT |
| DTO | flatten PatrolStaff/Period* + typed entry on catalog DTOs |
| UiSchema | Registry+Seed kind `patrol-logs` |
| DOMAIN-MAP | `csdl-so-02` → Asset |
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

- FileRef/FileMulti UI → text ids until Common File components wired
- Hub `duty-logs` formNo still `2` (display collision with Sổ 02) — other-sổ pack
- Auth permission wire · org/partner SearchInput · XLS — DEFER/OUT per TL

## Verify

```
MFE: yarn build → PASS (webpack warnings size only)
BE:  dotnet build Linm.RMMS.WebService.sln → PASS (0 errors)
```

## Next

- QA: `/agent-qa*` · T-QA-* · mfeStdUrl
- Review: after QA
