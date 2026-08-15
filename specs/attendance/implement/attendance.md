# Implement — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| this role | `dev` · `/agent-dev` |
| status | `done` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| taskId | `task_47f14701` |
| autoApprove | ON (run packet) |
| updatedAt | `2026-08-14T17:00:00.000Z` |
| versionGate | rechecked |

## retry.ssot_rereview: **pass**

Live re-audit Field `AttendanceListPage` + `AttendanceFormSlideout` **trước Write**. Cùng surface đóng hết GAP-SA-ATT-* + GAP-TL-ATT-* (không patch 1 chỗ).

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` (no nested `CatalogListShell`) | **PASS** |
| `LinCatalogDataGrid` + kéo cột default ON | **PASS** (`resizable: true`) |
| Footer `LinCatalogListPagination` | **PASS** · 50/100/200/500 · **cấm** footerPagination / pageSizeBar |
| flex + skeleton + LAYOUT-06 | **PASS** |
| toolbar `catalogToolbar` | **PASS** |
| filter: search + status + **route SearchInput** + **onlyOutZone Checkbox** · no Tìm btn | **PASS** |
| `filterMaxWidthPx` | **removed** (GAP-TL-ATT-FILTER-MAX) |
| header icon `fa-user-clock` | **PASS** (GAP-TL-ATT-ICON) |
| list_parity Kind B | **PASS** |
| tree_master? | n/a |
| form Slideout footer_only · View `readOnly` · **cấm** Resource | **PASS** |
| T-UI-LKP `GET /integration/road-routes/search` | **PASS** · persist `code` · fallback 38 CUC2 (có `QL.1`, không `QL.22`) |
| T-UI-FIELD | **PASS** · UTC datetime-local · lat/lng number · InZone Trong/Ngoài |
| SearchInput `dropdownPortal` | **PASS** |

## Done this turn (`task_47f14701` · roleOnly=`dev`)

Delta trên CRUD shell đã PASS — **không rewrite** list/form/BFF.

| Task | Layer | Result |
|------|--------|--------|
| T-BE-Q-01 | API | list `route` exact · `onlyOutZone` → `InZone==false` · search GPS `Lat`/`Lng` ToString Contains |
| T-BE-VAL-01 | API | Route ∈ `rmms_road_routes` IsActive · cấm `QL.22` · status allow-list · 422 VN |
| T-BFF-01 | BFF | `Request.QueryString` passthrough `route` + `onlyOutZone` · no Patrol road-routes proxy |
| T-FE-API-01 | UI | `getList` params `route` · `onlyOutZone` |
| T-UI-LKP-01 | UI | SearchInput form + Zone B |
| T-UI-FIELD-01 | UI | control map |
| T-UI-PROD-01 | UI | mock `QL.22`→`QL.1` (attendance + patrol store · storage v2) |
| T-UI-LIST-01 extend | UI | Zone B route + onlyOutZone · KEEP A–D shell |
| T-UI-FORM-01 extend | UI | `route` SearchInput · KEEP Slideout |
| T-UI-UX-01 | UI | icon · bỏ filterMaxWidthPx · portal |

**Cấm** ERP.* · `api/v1/rmms/*` · Resource · invent QL.22 · users LKP · Schema mới.

## Paths

| Layer | Path |
|-------|------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Patrol/` · `api/v1/patrol/attendance-logs` |
| BFF | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/AttendanceLogsBffController.cs` |
| Lookup | `api/v1/integration/road-routes/search` (không copy Patrol) |
| MFE | `pages/AttendanceListPage/*` · `services/attendance/*` |
| mfeStdUrl | `http://localhost:9304/patrol/attendance` |

## Build (HARD)

```
yarn typecheck → PASS
LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build → PASS (webpack 5.109.2, 0 errors, size warnings only)
dotnet build RMMS.Service.Api.csproj -c Release → PASS (0 Error(s), 0 Warning(s))
dotnet build LINM.RMMS.Patrol.Bff.csproj -c Release → PASS (0 Error(s), 0 Warning(s))
```

## Handoff → QA

| Field | Value |
|-------|-------|
| Next | `/agent-qa` · `qa/scenarios.md` · T-QA-01 / T-QA-CRUD-01 |
| Verify | filter route + onlyOutZone · SearchInput 38 · seed QL.1 · 422 QL.22 · GPS search · mfeStdUrl · no ERP |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T17:00:00.000Z |
| versionGate | rechecked |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.14.5 |
| designSkillVersion | 2026.08.14.5 |
| saSkillVersion | 2026.08.14.5 |
| teamLeadSkillVersion | 2026.08.14.5 |
| taskId | `task_47f14701` |
