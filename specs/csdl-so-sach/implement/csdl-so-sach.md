# Implement — csdl-so-sach

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| status | **done** |
| changeScope | `edit_page` |
| taskId | `task_92b7fce4` |
| pack | list · roleOnly=dev |
| updatedAt | `2026-08-29T18:45:00.000Z` |
| versionGate | ok |
| mfeStdRoute | `/so-ts/csdl-so-sach` |
| mfeStdUrl | `http://localhost:9301/so-ts/csdl-so-sach` |
| API | `api/v1/asset/csdl-records` · **cấm** so-ts / ERP.* |

## retry.ssot_rereview: **pass**

checklist: `tl-grid-ssot` · `list_parity` · `filter-bar V1–V5` · `form slideout` · `LAYOUT-06`  
gaps fixed this turn: **GAP-CSDL-ROAD-01** · **GAP-QA-HUB-SLUG** · **GAP-CSDL-HIST-01** · **GAP-DEV-LEAVE-01** · **GAP-DEV-ALERT-01** · filter-bar 1:1

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested CatalogListShell) | **PASS** |
| `LinCatalogDataGrid` + `buildDynamicGridColumns` + column filter/sort | **PASS** |
| Footer `LinCatalogListPagination` 50/100/200/500 | **PASS** |
| `LinErpListFilterBar` · search·province·status·from/to·roadName · 🔍 | **PASS** |
| `LinCatalogUiSchemaEditorModal` full · **cấm** configHint/`const columns` | **PASS** |
| Hub title VN from API-00 · **cấm** slug meta | **PASS** |
| Slideout 2col · `LeaveConfirmModal` · roadName SearchInput | **PASS** |
| History `LinCatalogHistoryModal` · **cấm** invent API · stacked | **PASS** |
| **cấm** `window.confirm`/`alert` | **PASS** (`useAlert` + LeaveConfirm) |
| LAYOUT-06 flex root | **PASS** |

## Done this turn (Dev · task_92b7fce4)

| Task | Result |
|------|--------|
| T-BE-CRUD-01 | `?roadName=` optional AND contains · ResourceMap title VN |
| T-UI-LIST-01 | Re-audit + grid_flow `useLinCatalogColumnFilterSort` |
| T-UI-FILTER-01 | filter-bar.md 1:1 · roadName SearchInput |
| T-UI-CFG-01 | verify `LinCatalogUiSchemaEditorModal` |
| T-UI-FORM-01 | roadName SearchInput · 2col footer_only |
| T-UI-LEAVE-01 | `useLeaveConfirm` + `LeaveConfirmModal` |
| T-UI-LKP-01 | API-LKP-01 bind label → `roadName` |
| T-UI-PROD-01 | hub/listTitle VN · AlertProvider |
| T-UI-HIST-01 | History modal + `useAlert` (no invent API) |
| T-UI-FIELD-01 / UX / ACT | verify PASS |
| T-UI-RESP-01 | layout CSS already D/T wrap · no shrink invent |
| T-BFF-01 | proxy-only · qs forward (no BFF code change) |

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `Domains/Asset/Controllers/CsdlCatalogRecordsController.cs` |
| Service | `CsdlCatalogService.cs` · `ICsdlCatalogService.cs` |
| BFF | `CsdlCatalogRecordsBffController.cs` (proxy qs) |
| MFE | `pages/CsdlSoSachPage/` · `services/csdlSoSach/` |
| Lookup | `services/csdlSoSach/lookups.ts` → `/integration/road-routes/search` |

**Cấm** ERP.* — void. Migration **none**.

## Verify (task_92b7fce4 · 2026-08-29)

```
yarn build (MFE Asset) → PASS (webpack 5.109.2, size warnings only, 0 errors)
dotnet build RMMS.Service.Api -c Release → PASS (0 errors, 0 warnings)
dotnet build LINM.RMMS.Asset.Bff -c Release → PASS (0 errors)
rg window.confirm|ErpListHeaderFilters|configHint on CsdlSoSachPage → 0
```

**e2e / start:std:** **cấm** ở Dev — queued `/agent-qa*`.

## QA verdict (`task_dc38e4de` · 2026-08-29)

| Check | Result |
|-------|--------|
| verdict | **pass** · `qa/scenarios.md` **confirmed** |
| e2e S0/S1/QA-20 | **PASS** · `qa/screens/*.png` |
| typecheck + build | **PASS** |
| phase | **review** (**cấm** done) |

## Debt (unchanged)

| ID | Note |
|----|------|
| GAP-CSDL-AUTH-01 | Auth NuGet DEFER |
| GAP-CSDL-XLS-01 | Excel OUT |
| GAP-CSDL-ORG-01 | org SearchInput P2 |
| GAP-CSDL-HIST-01 | History API real optional — UI wired common client |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC P1 keep |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.03 |
| rulesVersion | 2026.08.29.31 |
| generatedAt | 2026-08-29T18:45:00.000Z |
| versionGate | ok |
| formTypePack | list |
| changeScope | edit_page |
| tlTaskId | task_167e4298 |
| taskId | task_92b7fce4 |
| route_confirm | route_a |
| contentHashPriorDataAnaly | sha256:e13a39df3b06c9b08f1ef4f197b6b0e76e3d7863b1e6fffe42a196a22bb1faad |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.09.02 schemaVersion=1 workflowVersion=2026.08.29.03 rulesVersion=2026.08.29.31 versionGate=ok taskId=task_92b7fce4 route_confirm=route_a -->
