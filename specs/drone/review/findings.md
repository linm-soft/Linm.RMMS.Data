# Review findings — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| this role | `review` · `/agent-review` |
| status | `approve` |
| taskId | `task_3009fa90` |
| autoApprove | ON → **confirm** (không chờ board) |
| packKind | `list` Kind B catalog + form full-page |
| changeScope | `edit_page` |
| prior · qa | `confirmed` · `qa/scenarios.md` · T-QA-01 + T-QA-CRUD-01 **PASS** · P0 none · `task_d3584c9d` |
| prior · dev | `confirmed` · `implement/drone.md` · `task_12c629c0` |
| mfeStdUrl | `http://localhost:9313/drone` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/drone/scans`** (**cấm ERP.***) |
| bff | `web-bff/api/v1/drone/scans` |
| domain | **Drone** |
| reviewedAt | `2026-08-16T09:45:00.000+07:00` |
| method | static live `DroneListPage` + `DroneFormPage` + `lookups.ts` + `DroneScansController` / BFF · QA scenarios · SSOT list/form gates · `yarn typecheck` + `yarn build` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` (`keep_current` · STATUS feature SSOT · qldb-workflow-skill-version.json not on disk) |

## Verdict

**Approve** (autopilot). Kind B «Drone / Reality Capture» + full-page form C/E/V/Copy khớp PO/Design/SA/TL/Dev/QA. Schema editor `drone-scans`, CRUD Drone API/BFF. Không P0. **Cấm** reopen Dev/QA. Pipeline **closed**.

## Live SSOT re-review

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog · **cấm** nested `CatalogListShell` | `DroneListPage` 1× layout · title «Drone / Reality Capture» · `fa-helicopter` | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | `catalogListTableConfigFromSchema` · `columns={buildDynamicGridColumns(schema, uiColumns)}` | **PASS** |
| 3 | Footer `LinCatalogListPagination` only · default 50 | footer pager · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| 4 | Flex root + skeleton | `data-catalog-list-page` · `skeletonRows={8}` · `useServerPagedListLoading` | **PASS** |
| 5 | Zone F `LinCatalogUiSchemaEditorModal` · **cấm** `configHint` | catalogKind=`drone-scans` · title schema editor | **PASS** |
| 6 | leftover `LinListTableConfigModal` | none | **PASS** |
| 7 | Zone B filter | SearchTextInput + Select flight/status/office · `filterCols={3}` · extra nút «Tìm» + `filterMaxWidthPx={1100}` | **PASS** (P2 debt) |
| 8 | Routes `/drone` `/new` `/:id` | `index.tsx` | **PASS** |
| 9 | Form full-page · View `<dl>` · **cấm** Slideout / Resource | View `data-testid=rmms-drone-view` · footer Sửa · **không** Input disabled-as-View toàn form | **PASS** |
| 10 | T-UI-LKP `SearchInput` | form flight/office/device/status/tiles/artifact · list enum `Select` | **PASS** |
| 11 | T-UI-UX toast · Leave dirty · History | dirty confirm Huỷ/Quay lại · `LinCatalogHistoryModal` (stub) · delete confirm | **PASS** |
| 12 | FE BASE `/drone/scans` · BFF proxy | `droneService` · BFF `ForwardAsync` | **PASS** |
| 13 | **Cấm** ERP.* / `api/v1/rmms/*` | void on drone surface · domain `Domains/Drone` | **PASS** |
| 14 | List/BE filter search + flightType + status + office | GET QS + page/pageSize | **PASS** |
| 15 | Process / artifacts | POST `/{id}/process` stub · artifacts inline | **PASS** (P2/P3 backlog) |

## Findings

| ID | Sev | Status | Note |
|----|-----|--------|------|
| R-01 | — | closed | UI SSOT 1× LinPageLayout · grid + schema · LinCatalogListPagination |
| R-02 | P2 | accept | IAM / `[RequirePermission]` stub allow-all (F-03) |
| R-03 | — | closed | Tenant/company filter prior Dev · GET list QS |
| R-04 | — | closed | Domain Drone only · no ERP.* · no `api/v1/rmms/*` |
| R-05 | — | closed | Soft-delete · BFF proxy-only |
| R-06 | P2 | accept | Cesium live (F-01) · real upload/PDAL (F-02) · event bus DEFER |
| R-07 | — | closed | FormType ACT C/E/V/Copy/Delete · toolbar + row menu |
| R-08 | — | closed | GET/POST/PUT/DELETE + process + artifacts API |
| R-09 | — | closed | SearchInput master form · list enum Select |
| R-10 | — | closed | QA T-QA-01 · T-QA-CRUD-01 **PASS** |
| R-11 | P2 | accept | GAP-QA-CODE-DISABLED — create/edit mã scan `Input disabled` |
| R-12 | P2 | accept | GAP-QA-SEARCH-BTN extra «Tìm» · GAP-QA-FILTER-MAXW `filterMaxWidthPx={1100}` |
| R-13 | P2 | accept | History modal stub (QA P1 debt — không P0) |
| R-14 | — | closed | GAP-P2-CC-06 / GRID-SCHEMA-BOOTSTRAP — `useCatalogUiSchema` + `LinCatalogUiSchemaEditorModal` |

**P0:** none.

## Task gate

| Task | Result |
|------|--------|
| T-CTX-01 | PASS |
| T-PERM-01 | PASS FE · IAM stub P2 |
| T-UI-LIST | PASS |
| T-UI-FORM | PASS |
| T-UI-ACT-01 | PASS |
| T-UI-LKP | PASS |
| T-UI-FIELD | PASS |
| T-UI-PROD | PASS |
| T-UI-UX | PASS |
| T-BE-01 / T-BE-02 / T-BE-03 / T-BE-SCHEMA / T-BE-CRUD-01 | PASS (prior Dev) |
| T-QA-01 / T-QA-CRUD-01 | PASS (QA prior) |
| T-RV-01 | PASS this role |

## Build gate (`task_3009fa90`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Drone) | **PASS** (`tsc --noEmit` 0) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · 0 errors · 3 size warnings) |
| BE write this role | **n/a** — Review không đụng API · Step 4b **n/a** |
| Prior Dev `dotnet` API+BFF | **PASS** (`task_12c629c0`) |
| ERP.* | **none** |

## Confirm (autoApprove=ON)

| Gate | Decision |
|------|----------|
| review | **approve** · pipeline **closed** (no next role) |

## Handoff

| Field | Value |
|-------|-------|
| Next | **none** — feature `drone` review completed |
| Artifact | `specs/drone/review/findings.md` |
| review_confirm | **approve** (autopilot) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.09.02 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-16T09:45:00.000+07:00 |
| versionGate | ok |
| version_mismatch_action | keep_current |
| taskId | `task_3009fa90` |
| contentHashPriorQa | `task_d3584c9d` |

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · rulesVersion=2026.08.09.02 · versionGate=ok · skillId=agent-review -->
