# Implement — incident (Dev · fill_gaps P1)

| Field | Value |
|-------|-------|
| feature | `incident` |
| this role | `dev` · `/agent-dev` |
| status | `done` (autoApprove=ON · DoR PASS) |
| packKind | `list` |
| changeScope | `edit_page` |
| runMode | `fill_gaps` · gap=`crud_formtype` |
| taskId | `task_3ad0be44` |
| prior · team_lead | `confirmed` · `task/incident.md` · `task_0387effb` |
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/su-co` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/incident/incidents` |
| updatedAt | `2026-08-29T03:15:02.581Z` |

**Cấm** re-CRUD FormType CLOSED · **cấm** e2e / `yarn start:std` ở role Dev (e2e queued QA).

---

## Gaps closed (P1)

| Task | Result |
|------|--------|
| T-BE-LIST-Q-01 | GET list += `routeName` · `incidentType` exact filter |
| T-BE-INIT-01 | `GET …/incidents/init-data` · Design §5.3 (3/4/6 + handle/read/report) |
| T-BE-VAL-01 | Create/Update: type∈6 · status∈3 · severity∈4 · RouteName ∈ `RoadRoutes.Code` IsActive → 422 VN |
| T-BFF-01δ | `GET web-bff/…/init-data` · list QS passthrough (routeName/incidentType) |
| T-UI-FILTER-01 | `LinErpListFilterBar` + `incident-filter-bar.md` 5 fields · **0** ErpListHeaderFilters / LinListFilterField |
| T-UI-LKP-01 | SearchInput road-route (filter+form) · Dropdowns from init-data (6 types) |
| T-UI-FORM-01δ | footer-only Hủy/Lưu · `data-form-cols=2` · View=readOnly display |
| T-UI-HIST-01 | **verify done** — `LinCatalogHistoryModal` (prior) · **0** `window.alert` |
| T-UI-FIELD-01 / PROD / UX / RESP | Design §5 map · no demo-json SSOT · label 13 · 2-col slideout · shell erp-filter-bar |

**DEFER (unchanged):** GAP-INC-ORG-01 · GAP-RPT-SRC-INC-* · GAP-INC-MAP-01

---

## Files touched

### BE (`Linm.RMMS.WebService`)
- `api/domains/incident/…/IncidentDtos.cs` — `IncidentInitDataDto` + `IncidentLookupOption`
- `api/…/Incident/Services/IIncidentRecordService.cs` · `IncidentRecordService.cs` — list QS · init-data · ValidateCatalogAsync
- `api/…/Incident/Controllers/IncidentsController.cs` — query + `init-data`
- `bff/domains/incident/…/IncidentsBffController.cs` — `init-data` proxy

### FE (`Linm.Web.RMMS.Field`)
- `src/services/incident/endpoint.ts` · `incidentService.ts` · `responseModel.ts`
- `src/demo/incidentStore.ts` — 6 types · FALLBACK_INIT_DATA · filter routeName/incidentType · seed Code
- `src/pages/IncidentListPage/IncidentListPage.tsx` — LinErpListFilterBar + LKP
- `src/pages/IncidentListPage/IncidentFormSlideout.tsx` — footer · SearchInput · init-data selects

---

## Build (HARD)

| Gate | Result |
|------|--------|
| `dotnet build` RMMS.Service.Api | **PASS** 0 warn / 0 err |
| `dotnet build` LINM.RMMS.Incident.Bff | **PASS** 0 warn / 0 err |
| MFE `yarn build` (`Linm.Web.RMMS.Field`) | **PASS** exit 0 (asset size WARN only · not compile) |
| Overlay / webpack module-export fail | none |
| Migration | **n/a** (no schema change) |

---

## Verify notes (Dev)

- Route keep `/su-co` · listTitle «Danh sách sự cố»
- History: toolbar + row menu → `LinCatalogHistoryModal`
- Leave: `LeaveConfirmModal` on dirty slideout
- Config: `LinCatalogUiSchemaEditorModal` kind=`incidents` · **0** `configHint`
- `rg` page: **0** ErpListHeaderFilters · LinListFilterField · window.alert · leftover `const columns`

E2E / live smoke: **queued** `/agent-qa*` only.

---

## QA verdict (`task_c7ae2881` · `/agent-qa`)

| Field | Value |
|-------|-------|
| verdict | **FAIL** |
| e2e UI | S0/S1/QA-20 **PASS** · PNG distinct · `/su-co` |
| API init-data | **PASS** 200 (docker rebuild) |
| BFF init-data | **FAIL** 404 · **GAP-QA-BFF-INIT-01** |
| next | `qa_fail_rollback` · Dev fix BFF route · re-QA |

---

## Handoff → QA

| Field | Value |
|-------|-------|
| Next | `/agent-qa` · T-QA-FILTER-01 · T-QA-FORM-01 · T-QA-CRUD-01 re-smoke · T-PILOT-01 |
| mfeStdUrl | `http://localhost:9304/su-co` |
| API | `api/v1/incident/incidents` + `/init-data` |
| blockedReason | **GAP-QA-BFF-INIT-01** (QA `task_c7ae2881`) |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-dev |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-08-29T03:15:02.581Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 |
| teamLeadSkillVersion | 2026.08.19.04 |
| taskId | `task_3ad0be44` |

---
<!-- Version meta: skillId=agent-dev skillVersion=2026.08.25.02 schemaVersion=2 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 taskId=task_3ad0be44 -->
