# Implement — contract

| Field | Value |
|-------|-------|
| feature | `contract` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `formtype_quality` |
| packKind | `list` |
| taskId | `task_d7cdf08b` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/contract/contracts` |
| mfeStdRoute | `/contract` |
| mfeStdUrl | `http://localhost:9312/contract` |
| updatedAt | 2026-08-16T04:50:00.000Z |
| versionGate | rechecked |
| autoApprove | ON |

## Done this turn — Dev P1 (task_d7cdf08b)

TL `task_f8dd6827` chốt 2 GAP cùng surface — Dev sửa cả hai (cấm patch 1 chỗ).

| Gap / Task | Fix |
|------------|-----|
| GAP-SA-SCHEMA-01 · T-BE-SCHEMA-01 | Integration `CatalogUiSchemaRegistry.Contracts = "contracts"` + `Supported` + `CatalogUiSchemaSeed.Contracts()` — Zone C: code · contractNo · name · type · contractor · amount · kpiScore · status · effectiveTo. GET/PUT `api/v1/integration/catalogs/contracts/ui-schema` không throw `No UI schema seed`. **Cấm** clone schema vào Contract BFF. |
| GAP-TL-CONFIRM-01 · T-UI-ACT-01 · T-UI-UX-01 | List delete → `Modal` Lin. Form dirty leave → `useFormLeaveGuard` + `LeaveConfirmModal`. Form delete → `Modal`. **Cấm** `window.confirm` / `window.alert` trên Contract list/form. |
| T-UI-CONFIG-01 | Runtime seed kind `contracts` — editor Zone F load/save không throw. FE editor giữ nguyên (`LinCatalogUiSchemaEditorModal`). |

**Cấm** ERP.* · **cấm** rewrite list shell · **cấm** regen migration · **cấm** extra lookup API.

## retry.ssot_rereview: **pass** (live re-audit trước Write · 2026-08-16)

Live: `ContractListPage.tsx` · `ContractFormPage.tsx`.

| # | Check | Result |
|---|-------|--------|
| 1 | 1× `LinPageLayout` — cấm nested CatalogListShell | **PASS** |
| 2 | Footer `LinCatalogListPagination` 50/100/200/500 | **PASS** |
| 3 | Flex + skeleton + LAYOUT-06 | **PASS** |
| 4 | Toolbar catalog: refresh · history · config · +Tạo | **PASS** |
| 5 | Filter SearchTextInput + SearchInput type/status/contractor — cấm nút Tìm | **PASS** |
| 6 | `LinCatalogDataGrid` + column resize ON | **PASS** |
| 7 | Zone F `LinCatalogUiSchemaEditorModal` kind=`contracts` · cấm `configHint` | **PASS** (BE seed **CLOSED** this turn) |
| 8 | History modal stub | **PASS** |
| 9 | tree_master? | **n/a** |
| 10 | Form C/E/V/Copy + payment lines · View=`<dl>` | **PASS** |
| 11 | leftover `const columns` / `LinCatalogDataColumn[]` grid | **PASS** — `uiColumns` + `buildDynamicGridColumns` |
| 12 | `filterMaxWidthPx` | **PASS** (không trên Contract list) |
| 13 | native `<select>` catalog | **PASS** — SearchInput |
| 14 | Lin confirm (cấm `window.confirm`) | **PASS** this turn (list + form) |

`implement.list_parity.layout` = `flex-root + GAP-P2-LAYOUT-06 smoke`

## Step 4b BE

| Layer | Change |
|-------|--------|
| Integration API | `CatalogUiSchemaRegistry` + `CatalogUiSchemaSeed` kind `contracts` |
| Contract API | **none** (CRUD `?contractor=` đã PASS) |
| BFF | **none** (ui-schema không clone vào Contract BFF) |
| Migration | **none** |

## Build

```
yarn typecheck → PASS
yarn build → PASS (webpack 5.109.2 compiled; size warnings only)
dotnet build RMMS.Service.Api -c Release → PASS 0 err 0 warn
dotnet build RMMS.Service.Bff -c Release → PASS 0 err 0 warn
```

## Gaps / nợ (out of pack)

- `[RequirePermission]` chờ CommonLib NuGet
- History API stub empty
- Excel / quyết toán / sign+kpi dedicated = out of pack
- partner-unit / org-unit CUC2 / road-route SearchInput = P2 UNCLEAR
- Inventory `window.confirm` = **không** trong pack contract list/form

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T04:50:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.19 |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
