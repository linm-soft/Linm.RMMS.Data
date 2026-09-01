# Implement — so-ts-spillway

| Field | Value |
|-------|-------|
| feature | `so-ts-spillway` |
| status | **done** |
| changeScope | `new_page` |
| taskId | `task_330799f3` |
| tlTaskId | `task_d7836041` |
| pack | list · roleOnly=dev · `/agent-dev` |
| updatedAt | `2026-09-01T04:47:46.822Z` |
| versionGate | ok |
| mfeStdRoute | `/so-ts?type=SPILLWAY` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=SPILLWAY` |
| alias | `/so-ts-spillway` → `/so-ts?type=SPILLWAY` |
| API | `api/v1/asset/road-assets` · **cấm** so-ts invent · **cấm** ERP.* |
| Migration | **none** |

## new_page.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · filter-bar V1–V5 · form full 5col · LAYOUT-06 · leave Modal  
gaps closed: **GAP-SOTS-COL-01** · **GAP-SOTS-FORM-01** · **GAP-SOTS-REUSE-01** · **GAP-SPW-POINT-01** · **GAP-SPW-LOOKUP-01** · **GAP-SPW-LEAVE-01** · **GAP-SPW-SPEC-01** · **GAP-SPW-NAME-01** · **GAP-SPW-ROUTE-01**

| Check | Result |
|-------|--------|
| 1× LinPageLayout · LinCatalogDataGrid · buildDynamicGridColumns | **PASS** |
| SPILLWAY column profile hide type/kmTo/qty/unit/KM_POST-only · show spillway attrs | **PASS** |
| LinErpListFilterBar · type lock/hide · title «Danh sách đường tràn» · order search→route→km→org | **PASS** |
| LinCatalogUiSchemaEditorModal full · **0** configHint/`const columns` | **PASS** |
| Form reuse AssetFormPage · data-form-cols=5 · S-ATTR editable | **PASS** |
| kmTo/qty/unit ẩn khi SPILLWAY | **PASS** |
| spillwayTypes / structureTypeSpillways Dropdown từ init-data | **PASS** |
| LeaveConfirmModal + useFormLeaveGuard · useAlert delete | **PASS** |
| **0** window.confirm/alert trên list/form | **PASS** |

## Done this turn (Dev · task_330799f3)

| Task | Result |
|------|--------|
| T-CTX-01 | context lane web=dev done · filter-bar.md loaded |
| T-BE-CRUD-01 | API-01…05 verify · search DumpSpecs · Create prefix `TR-` · RebuildGovVn name_work |
| T-BE-INIT-01 | `RoadAssetInitDataDto.SpillwayTypes` + `StructureTypeSpillways` · dump distinct ∪ seed |
| T-BE-UISCHEMA-01 | verify catalogKind road-assets |
| T-BFF-01 | proxy-only · no BFF change |
| T-PERM-01 | stub keep · Auth DEFER |
| T-UI-LIST-01 | SPILLWAY profile + titles + create type lock |
| T-UI-FILTER-01 | hide type SearchInput · filter-bar.md field order |
| T-UI-CFG-01 | LinCatalogUiSchemaEditorModal verify |
| T-UI-FORM-01 | S-ATTR Number+Select · merge dumpSpecs · name_work / name_river |
| T-UI-LEAVE-01 | LeaveConfirmModal |
| T-UI-ACT-01 | inventory wired |
| T-UI-LKP-01 | spillway LOOKUP_STATIC · route/type/org SearchInput |
| T-UI-FIELD-01 | dumpSpecs keys 1:1 |
| T-UI-PROD-01 | end-user chrome |
| T-UI-UX-01 | 5 cột full-page |
| T-UI-RESP-01 | shared shell wrap |
| T-UI-HIST-01 | LinCatalogHistoryModal · useAlert delete |

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| DTO | `RoadAssetDtos.cs` · SpillwayTypes · StructureTypeSpillways |
| Service | `RoadAssetService.cs` · GetInitDataAsync · search DumpSpecs · TR- prefix |
| Rebuild | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` · GAP-SPW-NAME-01 |
| DOMAIN-MAP | `docs/DOMAIN-MAP.md` · `so-ts-spillway` → Asset |
| MFE | `AssetListPage.tsx` · `AssetFormPage.tsx` |
| Helpers | `dumpSpecLabels.ts` · lookups/endpoint spillway |
| Route | `index.tsx` · `mfe.routes.json` alias |

**Cấm** ERP.* — void. Migration **none** this turn. BFF unchanged (proxy).

## Verify (task_330799f3 · 2026-09-01T04:47:46.822Z)

```
yarn build (MFE Asset) → PASS (webpack 5.109.2, size warnings only, 0 errors)
dotnet build RMMS.Service.Api → PASS (0 errors, 0 warnings)
```

**e2e / start:std:** **cấm** ở Dev — queued `/agent-qa*`.

## Debt / DEFER

| ID | Note |
|----|------|
| GAP-SPW-FLAT-01 | Flatten Schema_* P2 |
| GAP-SPW-AUTH-01 | Auth NuGet DEFER |
| Spillway/structure master SearchInput | P2 |
| Rebuild+reimport DB | run RebuildGovVn then import để dump spillway attrs vào DB |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.29.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T04:47:46.822Z |
| versionGate | ok |
| formTypePack | list |
| changeScope | new_page |
| tlTaskId | task_d7836041 |
| taskId | task_330799f3 |
| route_confirm | route_a |
| contentHashPriorDataAnaly | sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.29.02 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_330799f3 route_confirm=route_a -->
