# Review findings — its-anpr-overload

> Status: **done**  
> Mode: `review_only` (autopilot · roleOnly=`review`)  
> reviewHash: `sha256:anpr-rev-task_0c438b3f-20260825` · rulesVersion: `2026.08.16.05`

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| this role | `review` · `/agent-review` |
| status | **done** · **approve** |
| review_confirm | **approve** (autoApprove=ON · `task_0c438b3f`) |
| taskId | `task_0c438b3f` |
| autoApprove | ON → agent tự confirm gate |
| packKind | `ai` · Kind B list + Kind D HITL · Config **FULL** |
| prior · qa | **`done`/`PASS`** · `qa/scenarios.md` · S0/S1/QA-20 · `task_654f39e7` |
| prior · dev | `done` · Config FULL · QA-fix implement · `task_524f0c3e` · ssot_rereview PASS |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · AiVision · `api/v1/ai-vision/anpr/events` · ui-schema `its-anpr-overload` · **cấm ERP.*** |
| mfeStdRoute | `/its-anpr-overload` |
| mfeStdUrl | `http://localhost:9303/its-anpr-overload` |
| reviewedAt | `2026-08-25T02:00:00.000Z` |
| method | live code SSOT re-review + QA screens + typecheck/build |
| skillVersion | `2026.08.19.04` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.24.01` |
| rulesVersion | `2026.08.16.05` |
| versionGate | `ok` · keep_current (autopilot · no AskQuestion) |

## Scope

| Surface | Repo / path |
|---------|-------------|
| List Kind B | `ItsAnprOverloadListPage.tsx` · `mfeStdUrl` |
| Form Kind D | `ItsAnprFormSlideout.tsx` |
| S-DETECT panel | Zones ①②③ inline detail panel |
| Config FULL | `LinCatalogUiSchemaEditorModal` · kind `its-anpr-overload` |
| BE / BFF | AiVision anpr/events + Integration CatalogUiSchema |
| QA evidence | `specs/its-anpr-overload/qa/screens/` · `S0`/`S1`/`QA-20` |

## Verdict

**APPROVE** · `review_confirm=approve` · pipeline **closed**.

Không P0. Config FULL live + Dev ssot_rereview PASS + QA e2e re-PASS sau QA-fix. Build FE+BE PASS. Chỉ còn P1/P2 accept/defer đã ghi STATUS.

## Live SSOT re-review

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` · **cấm** nested `CatalogListShell` | 1× layout · title «ITS ANPR · Quá tải / tốc độ» · no AI badge header | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | grid + `buildDynamicGridColumns` | **PASS** |
| 3 | Footer `LinCatalogListPagination` only · **cấm** footerPagination / pageSizeBar | pager only · pageSize 50+ | **PASS** |
| 4 | Flex root + skeleton / `useServerPagedListLoading` | present · `data-testid=rmms-its-anpr-overload-list-page` | **PASS** |
| 5 | Zone F **`LinCatalogUiSchemaEditorModal`** · **cấm** `configHint` / `LinListTableConfigModal` | modal wired · **no** `configHint` in CSS/TSX | **PASS** |
| 6 | `columns={buildDynamicGridColumns(schema, uiColumns)}` · `useCatalogUiSchema('its-anpr-overload')` | `CATALOG_KIND='its-anpr-overload'` · dynamic columns | **PASS** |
| 7 | BE `CatalogUiSchemaRegistry` + Seed `its-anpr-overload` | Registry + `ItsAnprOverload()` seed | **PASS** |
| 8 | Zone B filters · search biển số + camera + status · Áp dụng/Xóa lọc · **cấm** `filterMaxWidthPx` | `LinErpListFilterBar` + `hideDateRange` · apply/clear | **PASS** |
| 9 | KPI strip | `data-testid="rmms-its-anpr-overload-list-kpi"` | **PASS** |
| 10 | Path FE `/its-anpr-overload` · BE `api/v1/ai-vision/anpr/events` · **cấm ERP.*** | DOMAIN-MAP AiVision · endpoint verified | **PASS** |
| 11 | Form Kind D slideout footer-only + `LeaveConfirmModal` | present · View fields | **PASS** |
| 12 | Confirm/Dismiss `Modal` · **cấm** `window.confirm` · **cấm** «stub» on UI | Modal confirm/dismiss · user-friendly copy | **PASS** |
| 13 | `LinCatalogHistoryModal` · **cấm** custom audit Modal | wired via `useCatalogHistoryModal` | **PASS** |
| 14 | S-DETECT panel ①②③ | Camera · Đăng kiểm · Violations blocks | **PASS** |
| 15 | End-user · **cấm** demo note / AI chrome badge | no DEMO banner · no Kind/GAP labels on UI | **PASS** |
| 16 | Prior QA e2e re-QA | `qa/scenarios.md` **PASS** · manifest `ok:true` · `task_654f39e7` | **PASS gate** |

## Findings

| ID | Class | Sev | Status | Where | Note / Fix |
|----|-------|-----|--------|-------|------------|
| R-CFG-01 | ui-fn | P0 | **closed** | Zone F | Config FULL · `LinCatalogUiSchemaEditorModal` · QA-CFG **PASS** |
| R-CFG-02 | ui-fn | P0 | **closed** | columns | `buildDynamicGridColumns` + `useCatalogUiSchema` |
| R-CFG-03 | be-fn | P0 | **closed** | CatalogUiSchema | seed/registry `its-anpr-overload` |
| R-QA-01 | process | P0 | **closed** | QA gate | `task_654f39e7` PASS · S0/S1/QA-20 after QA-fix |
| R-FILTER-01 | ui-fn | P0 | **closed** | Zone B | `LinErpListFilterBar` · GAP-QA-FILTER-01 fixed |
| R-DEMO-01 | ui-fn | P0 | **closed** | confirm modal | no «stub» on end-user UI · GAP-QA-DEMO-01 fixed |
| R-PATH-01 | be-fn | — | closed | domain | AiVision · no ERP.* |
| R-UI-01 | ui-fn | — | closed | list/form | shell · pager · leave · confirm/dismiss |
| R-UI-LAYOUT-06 | ui-fn | P0 | closed | list shell | title+toolbar+grid visible |
| R-HITL-01 | ui-fn | — | closed | HITL | Confirm/Dismiss + simulate + lookup |
| R-S-01 | security | P2 | **accept** | Controller | `[RequirePermission]` TODO when CommonLib ready |
| R-P2-01 | product | P2 | defer | Incident | Confirm → Incident domain full (stub VI-ANPR OK P1) |
| R-P2-02 | product | P2 | defer | adapter | Real Cục Đăng kiểm adapter |
| R-P2-03 | product | P2 | defer | S-MAP | S-MAP DEFER per STATUS |

**P0 open:** 0.

## Query (`/review-query`)

- List: server page via `itsAnprService.getList` · filters search/camera/status — no FE N+1 on grid.
- Init-data dropdowns only (`getInitData`) — no hardcode enum on list filters.
- KPI refresh uses pageSize 500 aggregate — acceptable P2 for large tenants.
- Lookup/confirm/dismiss: standard authenticated API path · local fallback in service for dev only.
- **cấm ERP.*** paths — verified.

## Security

- FE: no secrets / token in itsAnpr services · uses shared `apiClient` / fallback store.
- BE: tenant entity `AiVisionAnprEventEntity` · soft-delete path · migration present.
- `[RequirePermission]` still TODO comments — **P2 accept** (STATUS known).
- IDOR by id: standard authenticated CRUD path · no extra gap beyond perm stub.
- **cấm ERP.*** paths — verified.

## UI / BE function

- CRUD list + create/edit/view/copy + delete + simulate + lookup + confirm/dismiss + history — QA **PASS**.
- Config FULL editor columns List/width/filter/sort · **Lưu cấu hình** — QA-CFG **PASS**.
- S-DETECT panel ①②③ with registry/violations JSON parse — live present.
- Leave dirty confirm · no `window.confirm` · no «stub» on modals.

## Task gate

| Task | Result |
|------|--------|
| T-CTX-01 / T-PERM-01 | **PASS** |
| T-UI-LIST-01 A–D+F | **PASS** |
| T-UI-FILTER-01 | **PASS** |
| **T-UI-CONFIG / Config FULL** | **PASS** |
| T-UI-FORM / T-UI-ACT / T-UI-LEAVE / T-UI-HIST | **PASS** |
| T-UI-AI-01 / T-UI-AI-FORM-01 | **PASS** |
| T-BE-CRUD / T-BFF / T-MIG | **PASS** · no ERP |
| **T-BE-SCHEMA `its-anpr-overload`** | **PASS** |
| **T-QA e2e S0/S1/QA-20** | **PASS** |

## Build gate (`task_0c438b3f`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE AiVision) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (2 size warnings · 0 errors · webpack compiled) |
| `dotnet build` API Release | **PASS** 0 error |
| BE write this role | **n/a** — Review không đụng API |
| ERP.* | **none** |

## Confirm (autoApprove=ON)

| Gate | Decision |
|------|----------|
| review | **approve** · pipeline **closed** · no Dev retry |

## Handoff

| Field | Value |
|-------|-------|
| next | **none** · feature `its-anpr-overload` review done |
| review_confirm | **approve** |
| open P2 | RequirePermission · Real đăng kiểm adapter · Incident full · S-MAP DEFER · DB migration UAT |
| evidence | `qa/screens/S0.png` · `S1.png` · `QA-20.png` · live `ItsAnprOverloadListPage.tsx` |
| BE | `Linm.RMMS.WebService` · AiVision · **cấm ERP.*** |
| MFE | `Linm.Web.RMMS.AiVision` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 4 |
| workflowVersion | 2026.08.24.01 |
| rulesVersion | 2026.08.16.05 |
| reviewHash | sha256:anpr-rev-task_0c438b3f-20260825 |
| generatedAt | 2026-08-25T02:00:00.000Z |
| versionGate | ok |

---
<!-- Version meta: skillVersion=2026.08.19.04 · schemaVersion=4 · workflowVersion=2026.08.24.01 · versionGate=ok · skillId=agent-review -->
