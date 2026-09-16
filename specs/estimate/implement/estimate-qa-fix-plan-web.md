# QA fix plan — estimate

> Status: **approved** · **implemented** (`task_5554ab03`)  
> Nguồn: `qa/scenarios.md` · `review/findings.md` · STATUS blockers  
> Phase: `qaFixPhase=implement` · taskId=`task_5554ab03` · planFrom=`task_552b72f8` · qaFailFrom=`task_482fbe3a`  
> catalogKind: **`ai-estimates`**

## Gaps (từ QA + Review)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-P2-CC-06** / **GAP-DEV-CONFIG-PLACEHOLDER-01** / **GAP-SA-EST-03** | **P0** | Open `mfeStdUrl` → toolbar **Cấu hình** → hiện Zone F `configHint` stub (không modal schema) · evidence `qa/screens/QA-CFG.png` | FE `EstimateListPage.tsx` · `configHint` / `setConfigHint` · CSS `.configHint*` |
| **R-CFG-02** (leftover static columns) | **P0** | Live page: `const columns = useMemo<LinCatalogDataColumn<…>>` · không `buildDynamicGridColumns` | FE `EstimateListPage.tsx` ~L437+ |
| **GAP-SA-EST-02** | **P0** | GET/PUT ui-schema kind `ai-estimates` không có trong Registry/Seed | BE `CatalogUiSchemaRegistry.cs` · `CatalogUiSchemaSeed.cs` |
| **R-QA-01** | **P0** gate | QA `task_482fbe3a` verdict **FAIL** · Review `task_e4f4dd95` **reject** | Re-QA sau implement (e2eQa ON) |

## Implement result (`task_5554ab03`)

| # | Việc | Result |
|---|------|--------|
| 1 | BE Registry `AiEstimates = "ai-estimates"` | **done** |
| 2 | BE Seed `AiEstimates()` 8 cột list | **done** |
| 3 | Integration BFF path (existing) | **verified** · no new ERP.* |
| 4 | FE bootstrap Camera peer stack | **done** · hook/service/utils |
| 5 | FE Config FULL · remove `configHint` | **done** |
| 6 | `uiColumns` custom renderers | **done** |
| 7 | SSOT retry re-review | **done** · ghi `implement/estimate.md` |
| 8 | Build HARD | **PASS** · BE API + MFE typecheck + MFE build |
| 9 | Re-QA | **pending** · next `/agent-qa` |

## Plan (reference)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | BE: thêm catalogKind **`ai-estimates`** vào Registry + Supported set | BE `Linm.RMMS.WebService` · **cấm ERP.*** | `CatalogUiSchemaRegistry.cs` | `IsSupported("ai-estimates")` |
| 2 | BE: Seed default schema cột list | BE | `CatalogUiSchemaSeed.cs` | 8 cột list · SchemaVersion = Current |
| 3 | Verify API path (đã có Integration controller) | BE | existing | GET/PUT `/api/v1/integration/catalogs/ai-estimates/ui-schema` |
| 4 | FE bootstrap peer Camera | UI MFE | hook/service/utils | get/save unwrap · **không** auto-PUT |
| 5 | FE list Config FULL | UI | `EstimateListPage.tsx` | modal + dynamic columns · **xóa** `configHint` |
| 6 | FE custom cell render | UI | `uiColumns` | code link · labels · money · date |
| 7 | SSOT retry re-review | — | `implement/estimate.md` | checklist PASS |
| 8 | Build HARD | UI + BE | — | typecheck + build + dotnet **PASS** |
| 9 | Re-QA | QA | scenarios/screens | e2eQa ON · **QA-CFG PASS** |

## Peer reference

| Piece | Peer |
|-------|------|
| Hook + service + bootstrap | `Linm.Web.RMMS.Camera` |
| Modal wiring | `CameraListPage` |
| BE seed shape | `DroneScans` / `CameraDevices` |

## Out of scope

- UnitPriceCatalog / Auto WO / `estimate.created` (P2 defer)
- `[RequirePermission]` CommonLib (P2 accept)
- Filter bar regress (`LinErpListFilterBar` CLOSED)
- Path rename / ERP.* / demo chrome / AI badge

## Evidence

- Prior FAIL: `qa/screens/QA-CFG.png` · `qa/scenarios.md` · `review/findings.md`
- mfeStdUrl: `http://localhost:9303/ai-vision/estimate`
- BE: `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- UI: `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision`

## Handoff

| Field | Value |
|-------|-------|
| next | `/agent-qa` · e2eQa ON · rồi Review |
| STATUS | Dev implement **completed** · QA pending |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.17.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.17.05 |
| rulesVersion | 2026.08.15.25 |
| generatedAt | 2026-08-17T16:51:40.000Z |
| versionGate | ok |
| qaFixPhase | implement |
| taskId | task_5554ab03 |

---
<!-- Version meta: skillVersion=2026.08.17.03 · schemaVersion=1 · workflowVersion=2026.08.17.05 · versionGate=ok · skillId=agent-dev · qaFixPhase=implement -->
