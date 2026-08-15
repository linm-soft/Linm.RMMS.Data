# Review — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| this role | `review` · `/agent-review` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_3b8b3994`) |
| prior QA | `task_35eccf28` · `qa/scenarios.md` · **confirmed** |
| mfeStdUrl | `http://localhost:9304/patrol/attendance` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/patrol/attendance-logs` |
| bff | `web-bff/api/v1/patrol/attendance-logs` |
| lookup | `GET /integration/road-routes/search` |
| autoApprove | ON |
| updatedAt | `2026-08-14T17:45:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| MFE | `AttendanceListPage` + `AttendanceFormSlideout` · `/patrol/attendance` |
| BE | `api/v1/patrol/attendance-logs` · `rmms_attendance_logs` · Patrol BFF proxy |
| skillVersion | 2026.08.14.5 |
| gap | `crud_formtype` + Kind B list-form-quality |

## Live re-audit (Field + Patrol API)

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` kind=catalog · **không** nested `CatalogListShell` | **PASS** |
| `LinCatalogDataGrid` `resizable: true` | **PASS** |
| Footer `LinCatalogListPagination` · 50/100/200/500 · **cấm** footerPagination / pageSizeBar | **PASS** |
| flex + skeletonRows=8 · `data-catalog-list-page` | **PASS** |
| Zone A `fa-user-clock` · title «Chấm công và định vị» · **cấm** Thêm mới trên A | **PASS** |
| Zone B search + status + SearchInput tuyến + Checkbox `onlyOutZone` · **không** `filterMaxWidthPx` · **không** nút Tìm | **PASS** |
| Form Slideout `customFooter` · View `readOnly` · **cấm** Resource / full-page · **không** `attendance-btn-save-top` | **PASS** |
| T-UI-LKP persist `code` · seed 38 có `QL.1` · **cấm** invent `QL.22` trên seed | **PASS** |
| FE BASE `/patrol/attendance-logs` · **cấm** `ERP.*` · **cấm** `api/v1/rmms/*` | **PASS** |
| BFF QueryString passthrough · no business logic | **PASS** |
| DOMAIN-MAP `attendance` → Patrol | **PASS** |

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | UI SSOT | — | 1× LinPageLayout · grid resize · LinCatalogListPagination | **OK** |
| R-02 | Security | P2 | `[RequirePermission]` stub CommonLib ≥1.4.0 — cùng pattern Patrol sessions | **Accept** (GAP-P2-PERM-ATTR) |
| R-03 | Query | — | `route` exact · `onlyOutZone`→`InZone==false` · GPS search Lat/Lng | **OK** |
| R-04 | Path | — | Domain Patrol only · no ERP.* · no `api/v1/attendance` | **OK** |
| R-05 | Persist | — | Flat scalars · route code · UTC check-in | **OK** |
| R-06 | Scope | P2 | Kind E map / Face NFC / Excel / users LKP **DEFER** documented | **Accept** |
| R-07 | FormType ACT | — | C/E/V/Copy/Delete + footer-only · GAP ACT **CLOSED** | **OK** |
| R-08 | T-BE-CRUD-01 | — | GET/POST/PUT/DELETE + VAL route/status · 422 VN | **OK** |
| R-09 | LKP/PROD/UX | — | SearchInput master · seed QL.1 · dropdownPortal · no filterMaxWidth | **OK** |
| R-10 | QA | — | T-QA-01 · T-QA-CRUD-01 **PASS** | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-UI-LIST-01 | PASS |
| T-UI-FORM-01 | PASS |
| T-UI-ACT-01 | PASS |
| T-BE-CRUD-01 | PASS |
| T-UI-LKP-01 | PASS |
| T-UI-FIELD-01 | PASS |
| T-UI-PROD-01 | PASS |
| T-UI-UX-01 | PASS |
| T-BE-Q-01 | PASS |
| T-BE-VAL-01 | PASS |
| T-BFF-01 | PASS |
| T-FE-API-01 | PASS |
| T-QA-01 | PASS |
| T-QA-CRUD-01 | PASS |

## Build gate (`task_3b8b3994`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (Field MFE) | **PASS** |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · 0 errors · size warnings only) |
| BE write this role | **n/a** — Review không đụng API |
| Prior Dev `dotnet` API + Patrol BFF Release | **PASS** (`task_47f14701`) |

## Verdict

CRUD + Kind B list-form-quality gap closed: Slideout footer-only, filter `route`/`onlyOutZone`, lookup `road-routes/search`, seed QL.1, Patrol API/BFF. Build gates PASS. **Approve** (autopilot).

## Handoff

Pipeline **complete** · không role sau Review · STATUS `completed`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T17:45:00.000Z |
| versionGate | rechecked (`recheck_new` · SSOT workflow **2026.08.14.5**) |
| taskId | `task_3b8b3994` |
| contentHashPriorQa | `task_35eccf28` |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.14.5 |
| designSkillVersion | 2026.08.14.5 |
| saSkillVersion | 2026.08.14.5 |
| teamLeadSkillVersion | 2026.08.14.5 |
| devSkillVersion | 2026.08.14.5 |
| qaSkillVersion | 2026.08.14.5 |
