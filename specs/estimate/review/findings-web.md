# Review findings — estimate

> Status: **done**  
> Mode: `review_only` (autopilot · roleOnly=`review`)  
> reviewHash: `sha256:est-rev-4d8efb95-8f59b71b-2abaf41c` · rulesVersion: `2026.08.16.05`

| Field | Value |
|-------|-------|
| feature | `estimate` |
| this role | `review` · `/agent-review` |
| status | **done** · **approve** |
| review_confirm | **approve** (autoApprove=ON · `task_f699faf1`) |
| taskId | `task_f699faf1` |
| autoApprove | ON → agent tự confirm gate |
| packKind | `ai` · Kind B list + Kind D slideout · Config **FULL** |
| prior · qa | **`confirmed`/`PASS`** · `qa/scenarios.md` · e2e 21/21 · QA-CFG **PASS** · `task_1c6c0433` |
| prior · dev | `done` · Config FULL · `implement/estimate.md` · `task_5554ab03` |
| prior · review | `task_e4f4dd95` **reject** (Config P0) → fixed + re-QA |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · `api/v1/ai-vision/estimates` · ui-schema `ai-estimates` · **cấm ERP.*** |
| mfeStdRoute | `/ai-vision/estimate` |
| mfeStdUrl | `http://localhost:9303/ai-vision/estimate` |
| reviewedAt | `2026-08-17T17:28:23.648Z` |
| method | live code SSOT re-review + QA screens + typecheck/build |
| skillVersion | `2026.08.15.17` |
| schemaVersion | `1` |
| workflowVersion | `2026.08.18.02` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` · prior artifacts keep_current (autopilot · no AskQuestion) |

## Scope

| Surface | Repo / path |
|---------|-------------|
| List Kind B | `EstimateListPage.tsx` · `mfeStdUrl` |
| Form Kind D | `EstimateFormSlideout.tsx` |
| Config FULL | `LinCatalogUiSchemaEditorModal` · kind `ai-estimates` |
| BE / BFF | AiVision estimates + Integration CatalogUiSchema |
| QA evidence | `specs/estimate/qa/screens/` · especially `QA-CFG.png` · `S0`/`S1` |

## Verdict

**APPROVE** · `review_confirm=approve` · pipeline **closed**.

Không P0. Config FULL live + QA re-PASS đóng reject trước (`task_e4f4dd95` / `GAP-P2-CC-06`). Build PASS. Chỉ còn P2 accept/defer đã ghi STATUS.

## Live SSOT re-review

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` · **cấm** nested `CatalogListShell` | 1× layout · title «Ước lượng sửa chữa» · no AI badge | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | grid + schema-driven columns | **PASS** |
| 3 | Footer `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar | pager only · pageSize 50+ | **PASS** |
| 4 | Flex root + skeleton / `useServerPagedListLoading` | present | **PASS** |
| 5 | Zone F **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · **cấm** `configHint` / `LinListTableConfigModal` | modal wired · **no** `configHint` in Estimate CSS/TSX | **PASS** |
| 6 | `columns={buildDynamicGridColumns(schema, uiColumns)}` · `useCatalogUiSchema('ai-estimates')` | `CATALOG_KIND='ai-estimates'` · dynamic columns | **PASS** |
| 7 | BE `CatalogUiSchemaRegistry` + Seed `ai-estimates` | Registry + `AiEstimates()` 8 fields | **PASS** |
| 8 | Zone B `LinErpListFilterBar` · SearchTextInput + status · **cấm** nút chữ «Tìm» | present · icon apply | **PASS** |
| 9 | Path FE `/ai-vision/estimate` · BE `api/v1/ai-vision/estimates` · **cấm** `/ai-estimate` · **cấm ERP.*** | endpoint + domain AiVision only | **PASS** |
| 10 | Form Kind D slideout footer-only + `LeaveConfirmModal` | present | **PASS** |
| 11 | Confirm `Modal` · **cấm** `window.confirm` · no auto WO | Modal confirm · no WO | **PASS** |
| 12 | LAYOUT-06 shell (title+toolbar+grid visible) | QA `S0`/`S1` · live list populated | **PASS** |
| 13 | End-user · **cấm** demo note / AI chrome | no DEMO banner · no Kind/GAP labels on UI | **PASS** |
| 14 | Prior QA e2e | `qa/scenarios.md` **PASS** · 21/21 · QA-CFG **PASS** | **PASS gate** |

## Findings

| ID | Class | Sev | Status | Where | Note / Fix |
|----|-------|-----|--------|-------|------------|
| R-CFG-01 | ui-fn | P0 | **closed** | Zone F | Config FULL · modal «Cấu hình hiển thị danh mục» · evidence `QA-CFG.png` |
| R-CFG-02 | ui-fn | P0 | **closed** | columns | `buildDynamicGridColumns` + `useCatalogUiSchema` |
| R-CFG-03 | be-fn | P0 | **closed** | CatalogUiSchema | seed/registry `ai-estimates` |
| R-QA-01 | process | P0 | **closed** | QA gate | `task_1c6c0433` PASS |
| R-PATH-01 | be-fn | — | closed | domain | AiVision · no ERP.* |
| R-UI-01 | ui-fn | — | closed | list/form | shell · pager · leave · confirm |
| R-UI-LAYOUT-06 | ui-fn | P0 | closed | list shell | title+toolbar+grid visible |
| R-UI-DEMO-NOTE-01 | ui-fn | P0 | closed | copy | no end-user demo notes |
| R-S-01 | security | P2 | **accept** | Controller | `[RequirePermission]` TODO when CommonLib ready |
| R-MIG-01 | be-fn | P2 | **accept** | migration | **GAP-QA-MIG-EST-01** Designer/snapshot missing · SQL applied in QA |
| R-P2-01 | product | P2 | defer | catalog / WO | UnitPriceCatalog · Auto WO / `estimate.created` |

**P0 open:** 0.

## Query (`/review-query`)

- List: server page via `estimateEndpoint.getList` · filters search/status/sourceType/from/to — no FE N+1 on grid.
- Init-data dropdowns only (`getInitData`) — no hardcode enum on list filters.
- Lines: entity rows (no `*LinesJson`) per SA — **PASS**.
- Lookup 422 / OOM: không phát hiện P0 trên surface estimate.

## Security

- FE: no secrets / token in estimate services · uses shared `apiClient`.
- BE: tenant/`allowed_company_ids` claim used in service · soft-delete Draft-only.
- `[RequirePermission]` still TODO comments — **P2 accept** (STATUS known).
- IDOR by id: standard authenticated CRUD path · no extra gap beyond perm stub.
- **cấm ERP.*** paths — verified.

## UI / BE function

- CRUD from-incident / from-defects / edit / view / copy / delete Draft / confirm / history — QA **PASS**.
- Config FULL editor columns List/width/filter/sort · **Lưu cấu hình** — QA-CFG **PASS**.
- Money `vi-VN` · leave dirty confirm · no `window.confirm`.
- Util import `demo/estimateStore` (formatMoneyVi only) — **not** UI demo note · no REV-UI-DEMO-NOTE.

## Task gate

| Task | Result |
|------|--------|
| T-CTX-01 / T-PERM-01 | **PASS** |
| T-UI-LIST-01 A–D | **PASS** |
| T-UI-FILTER-01 | **PASS** |
| **T-UI-CONFIG / Config FULL** | **PASS** |
| T-UI-FORM / T-UI-ACT / T-UI-LEAVE | **PASS** |
| T-BE-CRUD / T-BFF | **PASS** · no ERP |
| **T-BE-SCHEMA `ai-estimates`** | **PASS** |
| **T-QA-CRUD-01 · QA-CFG** | **PASS** |

## Build gate (`task_f699faf1`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE AiVision) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (3 size warnings · 0 errors · webpack compiled) |
| BE write this role | **n/a** — Review không đụng API |
| ERP.* | **none** |

## Confirm (autoApprove=ON)

| Gate | Decision |
|------|----------|
| review | **approve** · pipeline **closed** · no Dev retry |

## Handoff

| Field | Value |
|-------|-------|
| next | **none** · feature `estimate` review done |
| review_confirm | **approve** |
| open P2 | GAP-QA-MIG-EST-01 · RequirePermission · UnitPriceCatalog / Auto WO |
| evidence | `qa/screens/QA-CFG.png` · `S0.png` · `S1.png` · live `EstimateListPage.tsx` |
| BE | `Linm.RMMS.WebService` · AiVision · **cấm ERP.*** |
| MFE | `Linm.Web.RMMS.AiVision` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.15.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.02 |
| rulesVersion | 2026.08.16.05 |
| reviewHash | sha256:est-rev-4d8efb95-8f59b71b-2abaf41c |
| generatedAt | 2026-08-17T17:28:23.648Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.08.15.17 · schemaVersion=1 · workflowVersion=2026.08.18.02 · versionGate=ok · skillId=agent-review -->
