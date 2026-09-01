# Implement — so-ts-km-post

| Field | Value |
|-------|-------|
| feature | `so-ts-km-post` |
| status | **done** |
| changeScope | `edit_page` |
| taskId | `task_86ca8f12` |
| tlTaskId | `task_a2f290f2` |
| pack | list · roleOnly=dev · `/agent-dev` |
| updatedAt | `2026-08-31T20:13:21.978Z` |
| versionGate | ok |
| mfeStdRoute | `/so-ts?type=KM_POST` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=KM_POST` |
| alias | `/so-ts-km-post` → `/so-ts?type=KM_POST` |
| API | `api/v1/asset/road-assets` · **cấm** so-ts invent · **cấm** ERP.* |
| Migration | **none** |

## edit.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · filter-bar V1–V5 · form full 5col · LAYOUT-06 · leave Modal  
gaps closed: **GAP-SOTS-COL-01** · **GAP-SOTS-FORM-01** · **GAP-SOTS-REUSE-01** · **GAP-KM-POINT-01** · **GAP-KM-MAT-01** · **GAP-KM-LEAVE-01** · **GAP-KM-SPEC-01** (rebuild CSV) · **GAP-KM-NAME-01** (verify rebuild) · **GAP-KM-ROUTE-01**

| Check | Result |
|-------|--------|
| 1× LinPageLayout · LinCatalogDataGrid · buildDynamicGridColumns | **PASS** |
| KM_POST column profile hide type/kmTo/qty/unit · show distance/materials | **PASS** |
| LinErpListFilterBar · type lock/hide · title «Danh sách cột Km» | **PASS** |
| LinCatalogUiSchemaEditorModal full · **0** configHint/`const columns` | **PASS** |
| Form reuse AssetFormPage · data-form-cols=5 · S-ATTR editable | **PASS** |
| kmTo/qty/unit ẩn khi KM_POST | **PASS** |
| materials Dropdown từ init-data | **PASS** |
| LeaveConfirmModal + useFormLeaveGuard · useAlert delete | **PASS** |
| **0** window.confirm/alert trên list/form | **PASS** |

## Done this turn (Dev · task_86ca8f12)

| Task | Result |
|------|--------|
| T-CTX-01 | context lane web=dev done · filter-bar.md loaded |
| T-BE-CRUD-01 | API-01…05 verify · RebuildGovVn emit materials/distance/name_km_post |
| T-BE-INIT-01 | `RoadAssetInitDataDto.Materials` · dump distinct ∪ seed |
| T-BE-UISCHEMA-01 | verify catalogKind road-assets |
| T-BFF-01 | proxy-only · no BFF change |
| T-PERM-01 | stub keep · Auth DEFER |
| T-UI-LIST-01 | KM_POST profile + titles + create type lock |
| T-UI-FILTER-01 | hide type SearchInput when deep-link KM_POST |
| T-UI-CFG-01 | LinCatalogUiSchemaEditorModal verify |
| T-UI-FORM-01 | S-ATTR Number+Select · merge dumpSpecs · name_km_post mirror |
| T-UI-LEAVE-01 | LeaveConfirmModal |
| T-UI-ACT-01 | inventory wired |
| T-UI-LKP-01 | materials LOOKUP_STATIC · route/type/org SearchInput |
| T-UI-FIELD-01 | dumpSpecs keys 1:1 |
| T-UI-PROD-01 | end-user chrome |
| T-UI-UX-01 | 5 cột full-page |
| T-UI-RESP-01 | shared shell wrap |
| T-UI-HIST-01 | LinCatalogHistoryModal · useAlert delete |

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| DTO | `RoadAssetDtos.cs` · Materials |
| Service | `RoadAssetService.cs` · GetInitDataAsync materials |
| Rebuild | `Linm.RMMS.Data/local-script/RebuildGovVn.cs` |
| MFE | `AssetListPage.tsx` · `AssetFormPage.tsx` |
| Helpers | `dumpSpecLabels.ts` · lookups/endpoint materials |
| Route | `index.tsx` · `mfe.routes.json` alias |

**Cấm** ERP.* — void. Migration **none** this turn.

## Verify (task_86ca8f12 · 2026-08-31T20:13:21.978Z)

```
yarn build (MFE Asset) → PASS (webpack 5.109.2, size warnings only, 0 errors)
dotnet build RMMS.Service.Api → PASS (0 errors, 0 warnings)
```

**e2e / start:std:** **cấm** ở Dev — queued `/agent-qa*`.

## Debt / DEFER

| ID | Note |
|----|------|
| GAP-KM-FLAT-01 | Flatten Schema_* P2 |
| GAP-KM-AUTH-01 | Auth NuGet DEFER |
| Materials master SearchInput | P2 |
| Rebuild+reimport DB | run RebuildGovVn then import để dump materials/distance vào DB |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.29.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.30.01 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T20:13:21.978Z |
| versionGate | ok |
| formTypePack | list |
| changeScope | edit_page |
| tlTaskId | task_a2f290f2 |
| taskId | task_86ca8f12 |
| route_confirm | route_a |
| contentHashPriorDataAnaly | sha256:3a11d776482d57eebc6be1ed1a101e42525ea576986a8e8f7a49ef00b542e9fc |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.29.02 schemaVersion=1 workflowVersion=2026.08.30.01 rulesVersion=2026.08.31.2 versionGate=ok taskId=task_86ca8f12 route_confirm=route_a -->

## QA verdict (task_2197869b · 2026-08-31T20:32:30.000Z)

| Field | Value |
|-------|-------|
| verdict | **PASS** |
| method | e2e runtime · start:std + docker + Playwright Chrome channel |
| evidence | `qa/screens/{S0,S1,QA-20}.png` · `manifest.json` ok · `live-assert.json` |
| typecheck/build | PASS |
| next | `/agent-review` · **cấm** phase=done |

