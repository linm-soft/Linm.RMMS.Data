# Review — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| this role | `review` · `/agent-review` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_5a7638a1`) |
| prior QA | `task_b470f2da` · `qa/scenarios.md` · **confirmed** |
| mfeStdUrl | `http://localhost:9314/integration/citizen` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/citizen-incidents` |
| bff | `web-bff/api/v1/integration/citizen-incidents` |
| lookup | `GET /integration/road-routes/search` |
| autoApprove | ON |
| updatedAt | `2026-08-15T00:55:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| MFE | `CitizenListPage` + `CitizenFormPage` · `/integration/citizen` |
| BE | `api/v1/integration/citizen-incidents` · `rmms_citizen_incidents` · Integration BFF proxy |
| skillVersion | 2026.08.14.5 |
| gap | `crud_formtype` + Kind B list-form-quality |

## Live re-audit (Integration + citizen-incidents)

| Check | Result |
|-------|--------|
| 1× `LinPageLayout` kind=catalog · **không** nested `CatalogListShell` | **PASS** |
| `LinCatalogDataGrid` `resizable: true` | **PASS** |
| Footer `LinCatalogListPagination` · 50/100/200/500 · **cấm** footerPagination / pageSizeBar | **PASS** |
| flex + skeletonRows=8 · `data-catalog-list-page` | **PASS** |
| Zone A `fa-users` · title «Cổng người dân» · **cấm** Thêm mới trên A · badge ≠ feedback | **PASS** |
| Zone B search + status + SearchInput tuyến · **không** `filterMaxWidthPx` · **không** nút Tìm | **PASS** (`filterCols={3}`) |
| Form **full-page** · View `<dl>` · footer Lưu/Hủy · **cấm** Resource / Slideout · **không** `citizen-btn-save-top` | **PASS** |
| T-UI-LKP persist `code` · seed 38 có `QL.1` · **cấm** invent `QL.22` trên seed | **PASS** |
| FE BASE `/integration/citizen-incidents` · **cấm** `ERP.*` · **cấm** `api/v1/rmms/*` | **PASS** |
| BFF QueryString passthrough · no business logic | **PASS** (`BuildListPath`) |
| DOMAIN-MAP `citizen` → Integration | **PASS** |
| List/BE filter `road` exact trim AND search | **PASS** (GAP-SA-CIT-Q01) |
| VAL Road ∈ `rmms_road_routes.Code` IsActive · Status 5 · Type 6 · Source=`citizen` | **PASS** |

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | UI SSOT | — | 1× LinPageLayout · grid resize · LinCatalogListPagination | **OK** |
| R-02 | Security | P2 | `[RequirePermission]` stub CommonLib ≥1.4.0 | **Accept** (GAP-P2-PERM-ATTR) |
| R-03 | Query | — | `road` exact · search ILIKE TrackingCode/Name/Phone/Type/Status/Road | **OK** |
| R-04 | Path | — | Domain Integration only · no ERP.* · no `api/v1/rmms/*` | **OK** |
| R-05 | Persist | — | Road **code** · UTC reportedAt · GPS number · Source force `citizen` | **OK** |
| R-06 | Scope | P2 | Kind G public / Leaflet / OTP / media presign / Incident adapter **DEFER** | **Accept** |
| R-07 | FormType ACT | — | C/E/V/Copy/Delete + full-page footer-only · GAP ACT **CLOSED** | **OK** |
| R-08 | T-BE-CRUD-01 | — | GET/POST/PUT/DELETE + VAL catalog · 422 VN unknown road | **OK** |
| R-09 | LKP/PROD/UX | — | SearchInput master list+form · seed QL.1 · dropdownPortal · no filterMaxWidth | **OK** |
| R-10 | QA | — | T-QA-01 · T-QA-CRUD-01 **PASS** | **OK** |
| R-11 | View | — | View `<dl>` · trackingCode/source `disabled` trên edit (system) · **không** View=Input readOnly | **OK** |

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
| T-BE-01 | PASS |
| T-BE-VAL-01 | PASS |
| T-BFF-01 | PASS |
| T-FE-API-01 | PASS |
| T-PERM-01 | PASS |
| T-QA-01 | PASS |
| T-QA-CRUD-01 | PASS |

## Build gate (`task_5a7638a1`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (Integration MFE) | **PASS** (`tsc --noEmit` 0) |
| `LINM_RUN_DEV_LOCAL_BUNDLE=1 yarn build` | **PASS** (webpack 5.109.2 · 0 errors · 3 size warnings) |
| BE write this role | **n/a** — Review không đụng API |
| Prior Dev `dotnet` sln Release | **PASS** (`task_49b91f68`) |
| Step 4b / new-endpoint | **n/a** — không FE/BE write trong role review |

## Verdict

CRUD + Kind B list-form-quality gap closed: full-page form, filter `road`, lookup `road-routes/search`, seed QL.1, Integration API/BFF. Build gates PASS. **Approve** (autopilot).

## Handoff

Pipeline **complete** · không role sau Review · STATUS `done`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-15T00:55:00.000Z |
| versionGate | rechecked (`recheck_new` · SSOT workflow **2026.08.14.5**) |
| taskId | `task_5a7638a1` |
| contentHashPriorQa | `task_b470f2da` |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.14.5 |
| designSkillVersion | 2026.08.14.5 |
| saSkillVersion | 2026.08.14.5 |
| teamLeadSkillVersion | 2026.08.14.5 |
| devSkillVersion | 2026.08.14.5 |
| qaSkillVersion | 2026.08.14.5 |
