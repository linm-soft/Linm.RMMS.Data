# Review findings — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| this role | `review` · `/agent-review` |
| status | `approve` |
| taskId | `task_50a2ff4d` |
| autoApprove | ON → **confirm** (không chờ board) |
| packKind | `list` Kind B inbox + form full-page 5-col |
| changeScope | `edit_page` |
| prior · qa | `confirmed` · `qa/scenarios.md` · T-QA-01 + T-QA-CRUD-01 **PASS** · P0 none · `task_88a84739` |
| prior · dev | `done` · `implement/citizen.md` · `task_49b91f68` |
| mfeStdUrl | `http://localhost:9314/integration/citizen` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/citizen-incidents`** (**cấm ERP.***) |
| bff | `web-bff/api/v1/integration/citizen-incidents` |
| lookup | `GET /integration/road-routes/search` |
| domain | **Integration** |
| reviewedAt | `2026-08-16T09:30:00.000+07:00` |
| method | static live `CitizenListPage` + `CitizenFormPage` + lookups + Integration API/BFF · QA scenarios · SSOT list/form gates · `yarn typecheck` + `yarn build` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.15.19` |
| versionGate | `rechecked` (`recheck_new`) |

## Verdict

**Approve** (autopilot). Inbox Kind B «Cổng người dân» + full-page form 5 cột khớp PO/Design/SA/TL/Dev/QA. Filter `road` exact, LKP `road-routes/search`, seed 38 có `QL.1`, CRUD Integration API/BFF. Không P0. **Cấm** reopen Dev/QA. Pipeline **closed**.

## Live SSOT re-review

| # | Check | Live | Verdict |
|---|-------|------|---------|
| 1 | 1× `LinPageLayout` kind=catalog · **cấm** nested `CatalogListShell` | `CitizenListPage` 1× layout · title «Cổng người dân» · `fa-users` | **PASS** |
| 2 | `LinCatalogDataGrid` + kéo cột default ON | `tableConfig.resizable: true` · static `columns` | **PASS** (schema editor = P2 Accept) |
| 3 | Footer `LinCatalogListPagination` only · 50/100/200/500 | footer pager · **cấm** footerPagination / pageSizeBar / raw table | **PASS** |
| 4 | Flex root + skeleton | `data-catalog-list-page` · `skeletonRows={8}` | **PASS** |
| 5 | Zone F `LinCatalogUiSchemaEditorModal` · **cấm** `configHint` | toolbar `onEditConfig` → stub `configHint` dialog | **P2 Accept** GAP-DEV-CONFIG-PLACEHOLDER-01 (QA + prior Review) |
| 6 | leftover `LinListTableConfigModal` | none | **PASS** |
| 7 | Zone B filter | SearchTextInput + status + tuyến SearchInput · `filterCols={3}` · **cấm** `filterMaxWidthPx` · **cấm** nút Tìm | **PASS** |
| 8 | Routes `/integration/citizen` `/new` `/:id` | `index.tsx` | **PASS** |
| 9 | Form full-page · View locked · **cấm** Slideout / Resource | `data-form-surface="full"` · `data-form-cols="5"` · header chrome · View `.viewDisabled` · trackingCode/source `readOnly` system · **không** Input readOnly-as-View trên toàn form | **PASS** (QA-23) |
| 10 | T-UI-LKP `SearchInput` · persist **code** | list+form `ROAD_ROUTE_LOOKUP_CONFIG` · seed 38 · **cấm** `QL.22` | **PASS** |
| 11 | T-UI-UX toast · LeaveConfirm · History | `LeaveConfirmModal` · `LinCatalogHistoryModal` · delete confirm | **PASS** |
| 12 | FE BASE `/integration/citizen-incidents` · BFF QS passthrough | `citizenService` · `BuildListPath` | **PASS** |
| 13 | **Cấm** ERP.* / `api/v1/rmms/*` | void on citizen surface | **PASS** |
| 14 | List/BE filter `road` exact trim AND search | GAP-SA-CIT-Q01 | **PASS** |
| 15 | VAL Road catalog · Status 5 · Type 6 · Source=`citizen` | `ValidateCatalogAsync` | **PASS** |

## Findings

| ID | Sev | Status | Note |
|----|-----|--------|------|
| R-01 | — | closed | UI SSOT 1× LinPageLayout · grid resize · LinCatalogListPagination |
| R-02 | P2 | accept | `[RequirePermission]` stub CommonLib ≥1.4.0 · GAP-P2-PERM-ATTR |
| R-03 | — | closed | `road` exact · search ILIKE TrackingCode/Name/Phone/Type/Status/Road |
| R-04 | — | closed | Domain Integration only · no ERP.* · no `api/v1/rmms/*` |
| R-05 | — | closed | Road **code** · UTC reportedAt · GPS number · Source force `citizen` |
| R-06 | P2 | accept | Kind G public / Leaflet / OTP / media presign / Incident adapter **DEFER** |
| R-07 | — | closed | FormType ACT C/E/V/Copy/Delete + full-page header chrome · GAP-P2-FORM-GRID-05 |
| R-08 | — | closed | GET/POST/PUT/DELETE + VAL catalog · 422 VN unknown road |
| R-09 | — | closed | SearchInput master list+form · seed QL.1 · no filterMaxWidth |
| R-10 | — | closed | QA T-QA-01 · T-QA-CRUD-01 **PASS** |
| R-11 | — | closed | View `.viewDisabled` · trackingCode/source `readOnly` (system) |
| R-12 | P2 | accept | GAP-DEV-CONFIG-PLACEHOLDER-01 `configHint` · chưa `LinCatalogUiSchemaEditorModal` / `useCatalogUiSchema` / `buildDynamicGridColumns` — **không block** P1 |

**P0:** none.

## Task gate

| Task | Result |
|------|--------|
| T-CTX-01 | PASS |
| T-PERM-01 | PASS FE · BE stub P2 |
| T-UI-LIST-01 | PASS |
| T-UI-FORM-01 | PASS |
| T-UI-ACT-01 | PASS |
| T-UI-LKP-01 | PASS |
| T-UI-FIELD-01 | PASS |
| T-UI-PROD-01 | PASS |
| T-UI-UX-01 | PASS |
| T-BE-01 / T-BE-VAL-01 / T-BE-CRUD-01 | PASS (prior Dev) |
| T-BFF-01 / T-FE-API-01 | PASS |
| T-QA-01 / T-QA-CRUD-01 | PASS (QA prior) |

## Build gate (`task_50a2ff4d`)

| Check | Result |
|-------|--------|
| `yarn typecheck` (MFE Integration) | **PASS** (`tsc --noEmit` 0) |
| `yarn build` | **PASS** (webpack 5.109.2 · 0 errors · 3 size warnings) |
| BE write this role | **n/a** — Review không đụng API · Step 4b **n/a** |
| Prior Dev `dotnet` sln Release | **PASS** (`task_49b91f68`) |
| ERP.* | **none** |

## Confirm (autoApprove=ON)

| Gate | Decision |
|------|----------|
| review | **approve** · pipeline **closed** (no next role) |

## Handoff

| Field | Value |
|-------|-------|
| Next | **none** — feature `citizen` review completed |
| Artifact | `specs/citizen/review/findings.md` |
| review_confirm | **approve** (autopilot) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.16.02 |
| generatedAt | 2026-08-16T09:30:00.000+07:00 |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.19 |
| qaSkillVersion | 2026.08.15.19 |
| devSkillVersion | 2026.08.15.19 |
| teamLeadSkillVersion | 2026.08.15.19 |
| saSkillVersion | 2026.08.15.19 |
| designSkillVersion | 2026.08.15.19 |
| poSkillVersion | 2026.08.15.19 |
| dataAnalySkillVersion | 2026.08.15.19 |
| taskId | `task_50a2ff4d` |
| contentHashPriorQa | `task_88a84739` |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · rulesVersion=2026.08.16.02 · versionGate=rechecked · skillId=agent-review -->
