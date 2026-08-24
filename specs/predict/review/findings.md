# Review findings — predict

> Status: **done**  
> Mode: `review_only` (autopilot · roleOnly=`review`)  
> reviewHash: `sha256:prd-rev-task_25e2c960-20260825` · rulesVersion: `2026.08.15.25`

| Field | Value |
|-------|-------|
| feature | `predict` |
| this role | `review` · `/agent-review` |
| status | **done** · **approve** |
| review_confirm | **approve** (autoApprove=ON · `task_25e2c960`) |
| taskId | `task_25e2c960` |
| autoApprove | ON → agent tự confirm gate |
| packKind | `ai` · Kind B list + Kind D slideout · Config **FULL** |
| prior · qa | **`done`/`PASS`** · `qa/scenarios.md` · S0/S1/QA-20 · `task_6c88c1ab` |
| prior · dev | `done` · Config FULL · `implement/predict.md` · ssot_rereview PASS · `task_3fa71fe6` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · `api/v1/ai-vision/predict` · ui-schema `ai-predict` · **cấm ERP.*** |
| mfeStdRoute | `/ai-kd/du-bao-bt` |
| mfeStdUrl | `http://localhost:9303/ai-kd/du-bao-bt` |
| reviewedAt | `2026-08-25T01:10:00.000Z` |
| method | live code SSOT re-review + QA screens + typecheck/build |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| versionGate | `ok` · keep_current (autopilot · no AskQuestion) |

## Scope

| Surface | Repo / path |
|---------|-------------|
| List Kind B | `PredictListPage.tsx` · `mfeStdUrl` |
| Form Kind D | `PredictFormSlideout.tsx` |
| Config FULL | `LinCatalogUiSchemaEditorModal` · kind `ai-predict` |
| BE / BFF | AiVision predict + Integration CatalogUiSchema |
| QA evidence | `specs/predict/qa/screens/` · `S0`/`S1`/`QA-20` |

## Verdict

**APPROVE** · `review_confirm=approve` · pipeline **closed**.

Không P0. Config FULL live + Dev ssot_rereview PASS + QA e2e PASS. Build FE+BE PASS. Chỉ còn P1/P2 accept/defer đã ghi STATUS.

## Live SSOT re-review

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` · **cấm** nested `CatalogListShell` | 1× layout · title «AI dự báo bảo trì» · no AI badge header | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | grid + `buildDynamicGridColumns` | **PASS** |
| 3 | Footer `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar | pager only · pageSize 50+ | **PASS** |
| 4 | Flex root + skeleton / `useServerPagedListLoading` | present | **PASS** |
| 5 | Zone F **`LinCatalogUiSchemaEditorModal`** · **cấm** `configHint` / `LinListTableConfigModal` | modal wired · **no** `configHint` in Predict CSS/TSX | **PASS** |
| 6 | `columns={buildDynamicGridColumns(schema, uiColumns)}` · `useCatalogUiSchema('ai-predict')` | `CATALOG_KIND='ai-predict'` · dynamic columns | **PASS** |
| 7 | BE `CatalogUiSchemaRegistry` + Seed `ai-predict` | Registry + `AiPredict()` seed | **PASS** |
| 8 | Zone B filters route · horizon · topN · scoreMin · Áp dụng/Xóa lọc · **cấm** `filterMaxWidthPx` | present · apply/clear buttons | **PASS** |
| 9 | KPI strip `rmms-predict-list-kpi` | `data-testid="rmms-predict-list-kpi"` | **PASS** |
| 10 | Path FE `/ai-kd/du-bao-bt` · BE `api/v1/ai-vision/predict` · **cấm** `/ai-predict` · **cấm ERP.*** | endpoint + domain AiVision only | **PASS** |
| 11 | Form Kind D slideout footer-only + `LeaveConfirmModal` | present · View `<dl>` fields | **PASS** |
| 12 | Confirm `Modal` · **cấm** `window.confirm` · no auto WO | Modal confirm · stub toast only | **PASS** |
| 13 | `LinCatalogHistoryModal` · **cấm** custom audit Modal | wired via `useCatalogHistoryModal` | **PASS** |
| 14 | BE parent drivers → child `PredictDriverEntity` · **cấm** `DriversJson` | migration `20260825120000_Schema_RmmsAiVisionPredictDrivers` | **PASS** |
| 15 | End-user · **cấm** demo note / AI chrome badge | no DEMO banner · no Kind/GAP labels on UI | **PASS** |
| 16 | Prior QA e2e | `qa/scenarios.md` **PASS** · manifest `ok:true` | **PASS gate** |

## Findings

| ID | Class | Sev | Status | Where | Note / Fix |
|----|-------|-----|--------|-------|------------|
| R-CFG-01 | ui-fn | P0 | **closed** | Zone F | Config FULL · `LinCatalogUiSchemaEditorModal` · QA-CFG **PASS** |
| R-CFG-02 | ui-fn | P0 | **closed** | columns | `buildDynamicGridColumns` + `useCatalogUiSchema` |
| R-CFG-03 | be-fn | P0 | **closed** | CatalogUiSchema | seed/registry `ai-predict` |
| R-QA-01 | process | P0 | **closed** | QA gate | `task_6c88c1ab` PASS · S0/S1/QA-20 |
| R-PATH-01 | be-fn | — | closed | domain | AiVision · no ERP.* |
| R-UI-01 | ui-fn | — | closed | list/form | shell · pager · leave · confirm |
| R-UI-LAYOUT-06 | ui-fn | P0 | closed | list shell | title+toolbar+grid visible |
| R-UI-DEMO-NOTE-01 | ui-fn | P0 | closed | copy | no end-user demo notes |
| R-S-01 | security | P2 | **accept** | Controller | `[RequirePermission]` TODO when CommonLib ready |
| R-P2-01 | product | P2 | defer | ML / WO | Real ML model · auto WO · `GAP-F-PRD-01` |
| R-P2-02 | product | P2 | defer | stubs | Export/Dashboard toast stub |

**P0 open:** 0.

## Query (`/review-query`)

- List: server page via `predictService.getPriorityList` · filters route/horizon/topN/scoreMin — no FE N+1 on grid.
- Init-data dropdowns only (`getInitData`) — no hardcode enum on list filters.
- Drivers: child entity rows (`PredictDriverEntity`) per SA — **PASS**.
- Lookup 422 / OOM: không phát hiện P0 trên surface predict.

## Security

- FE: no secrets / token in predict services · uses shared `apiClient`.
- BE: tenant entity · soft-delete path.
- `[RequirePermission]` still TODO comments — **P2 accept** (STATUS known).
- IDOR by id: standard authenticated CRUD path · no extra gap beyond perm stub.
- **cấm ERP.*** paths — verified.

## UI / BE function

- CRUD list + note + create/delete + batch predict + predict-one + history — QA **PASS**.
- Config FULL editor columns List/width/filter/sort · **Lưu cấu hình** — QA-CFG **PASS**.
- Score badge · leave dirty confirm · no `window.confirm`.
- Util import `demo/predictStore` (formatLocal/scoreClass only) — **not** UI demo note.

## Task gate

| Task | Result |
|------|--------|
| T-CTX-01 / T-PERM-01 | **PASS** |
| T-UI-LIST-01 A–D+F | **PASS** |
| T-UI-FILTER-01 | **PASS** |
| **T-UI-CONFIG / Config FULL** | **PASS** |
| T-UI-FORM / T-UI-ACT / T-UI-LEAVE / T-UI-HIST | **PASS** |
| T-BE-CRUD / T-BFF / T-MIG | **PASS** · no ERP |
| **T-BE-SCHEMA `ai-predict`** | **PASS** |
| **T-QA e2e S0/S1/QA-20** | **PASS** |

## Build gate (`task_25e2c960`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE AiVision) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (2 size warnings · 0 errors · webpack compiled) |
| `dotnet build` API Release | **PASS** 0 error |
| `dotnet build` BFF Release | **PASS** 0 error |
| BE write this role | **n/a** — Review không đụng API |
| ERP.* | **none** |

## Confirm (autoApprove=ON)

| Gate | Decision |
|------|----------|
| review | **approve** · pipeline **closed** · no Dev retry |

## Handoff

| Field | Value |
|-------|-------|
| next | **none** · feature `predict` review done |
| review_confirm | **approve** |
| open P2 | RequirePermission · Real ML · Export/Dashboard stubs · auto WO |
| evidence | `qa/screens/S0.png` · `S1.png` · `QA-20.png` · live `PredictListPage.tsx` |
| BE | `Linm.RMMS.WebService` · AiVision · **cấm ERP.*** |
| MFE | `Linm.Web.RMMS.AiVision` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.15.17 |
| schemaVersion | 4 |
| workflowVersion | 2026.08.16.02 |
| rulesVersion | 2026.08.15.25 |
| reviewHash | sha256:prd-rev-task_25e2c960-20260825 |
| generatedAt | 2026-08-25T01:10:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=4 · workflowVersion=2026.08.16.02 · versionGate=ok · skillId=agent-review -->
