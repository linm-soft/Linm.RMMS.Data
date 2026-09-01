# Implement — so-ts-interchange

| Field | Value |
|-------|-------|
| feature | `so-ts-interchange` |
| status | **done** |
| changeScope | `new_page` |
| taskId | `task_ac84f4d2` |
| tlTaskId | `task_298afb04` |
| pack | list · roleOnly=dev · `/agent-dev` |
| updatedAt | `2026-09-01T06:55:00.000Z` |
| versionGate | ok |
| mfeStdRoute | `/so-ts?type=INTERCHANGE` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=INTERCHANGE` |
| alias | `/so-ts-interchange` → `/so-ts?type=INTERCHANGE` |
| API | `api/v1/asset/road-assets` · **cấm** so-ts invent · **cấm** ERP.* |
| Migration | **none** |

## new_page.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · filter-bar V1–V5 · form full 5col · LAYOUT-06 · leave Modal  
gaps closed: **GAP-SOTS-COL-01** · **GAP-SOTS-FORM-01** · **GAP-SOTS-REUSE-01** · **GAP-IX-POINT-01** · **GAP-IX-LOOKUP-01** · **GAP-IX-LEAVE-01** · **GAP-IX-SPEC-01** · **GAP-IX-NAME-01** · **GAP-IX-ROUTE-01**

| Check | Result |
|-------|--------|
| 1× LinPageLayout · LinCatalogDataGrid · buildDynamicGridColumns | **PASS** |
| INTERCHANGE column profile hide type/kmTo/qty/unit · show IX attrs · hide-low-fill OFF | **PASS** |
| LinErpListFilterBar · type lock/hide · title «Danh sách nút giao» | **PASS** |
| LinCatalogUiSchemaEditorModal full · **0** configHint/`const columns` | **PASS** |
| Form reuse AssetFormPage · data-form-cols=5 · S-ATTR editable | **PASS** |
| kmTo/qty/unit ẩn · name/kmFrom optional · intersection_type_id * | **PASS** |
| intersectionTypes / intersectWiths / intersectionShapes Dropdown init-data | **PASS** |
| LeaveConfirmModal + useFormLeaveGuard · useAlert delete | **PASS** |
| **0** window.confirm/alert trên list/form | **PASS** |

## Done this turn (Dev · task_ac84f4d2)

| Task | Result |
|------|--------|
| T-CTX-01 | filter-bar.md loaded · context keep |
| T-BE-CRUD-01 | API-01…05 · Validate INTERCHANGE · prefix `NG-` · RebuildGovVn name_intersection |
| T-BE-INIT-01 | IntersectionTypes · IntersectWiths · IntersectionShapes dump∪seed |
| T-BE-UISCHEMA-01 | catalogKind road-assets verify |
| T-BFF-01 | proxy-only · no BFF change |
| T-PERM-01 | stub keep · Auth DEFER |
| T-UI-LIST-01 | INTERCHANGE profile + titles + create type lock |
| T-UI-FILTER-01 | hide type SearchInput · filter-bar.md |
| T-UI-CFG-01 | LinCatalogUiSchemaEditorModal verify |
| T-UI-FORM-01 | S-ATTR Dropdown/Number/Text · merge dumpSpecs · name_intersection |
| T-UI-LEAVE-01 | LeaveConfirmModal |
| T-UI-ACT-01 | inventory wired |
| T-UI-LKP-01 | LOOKUP_STATIC init · route/type/org SearchInput |
| T-UI-FIELD-01 | dumpSpecs keys 1:1 |
| T-UI-PROD-01 | end-user chrome |
| T-UI-UX-01 | 5 cột full-page |
| T-UI-RESP-01 | shared shell wrap |
| T-UI-HIST-01 | LinCatalogHistoryModal · useAlert delete |

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| DTO | `RoadAssetDtos.cs` · IntersectionTypes · IntersectWiths · IntersectionShapes |
| Service | `RoadAssetService.cs` · GetInitDataAsync · Validate INTERCHANGE · NG- prefix |
| Rebuild | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · GAP-IX-NAME-01 |
| DOMAIN-MAP | `docs/DOMAIN-MAP.md` · `so-ts-interchange` → Asset |
| MFE | `AssetListPage.tsx` · `AssetFormPage.tsx` |
| Helpers | `dumpSpecLabels.ts` · lookups/endpoint intersection* |
| Route | `index.tsx` · `mfe.routes.json` alias |

**Cấm** ERP.* — void. Migration **none**. BFF unchanged (proxy).

## Verify (task_ac84f4d2 · 2026-09-01T06:55:00.000Z)

```
yarn build (MFE Asset) → PASS (webpack 5.109.2, size warnings only, 0 errors)
dotnet build RMMS.Service.Api → PASS (0 errors, 0 warnings)
```

## Debt (QA/next)

- GAP-IX-FLAT-01 DEFER P2
- GAP-IX-AUTH-01 DEFER
- rebuild+reimport DB for dump attrs (ops)

## Next

role: qa · `/agent-qa*` · write `specs/so-ts-interchange/qa/scenarios.md` · **cấm** Dev e2e
