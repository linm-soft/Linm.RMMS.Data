# STATUS — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/maintenance-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/maintenance.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/maintenance/work-orders`** + **`api/v1/maintenance/work-orders/init-data`** + **`api/v1/integration/catalogs/work-orders/ui-schema`** (**cấm ERP.***) |
| domain | **Maintenance** (+ Integration ui-schema) |
| updatedAt | `2026-08-15T18:05:23.432Z` |
| taskId | `task_1d66d0dc` |
| autoApprove | `ON` |
| mfeStdRoute | `/maintenance` |
| mfeStdUrl | `http://localhost:9304/maintenance` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Confirms

| Gate | Value |
|------|-------|
| design | **approve** (`autoApprove=ON` · `task_1e3650ac`) |
| sa | **approve** (`autoApprove=ON` · `task_1e3650ac`) |
| review | **approve** (`autoApprove=ON` · `task_1d66d0dc`) |
| beRepo | true |
| uiRepo | true |
| autoApprove | ON |

### SA implement gates

| Gate | Decision |
|------|----------|
| sa_tz_gate | `tz_required` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | `_data-analy/features/maintenance-control-hint.md` | **done** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/maintenance.md | **confirmed** |
| 4 | dev | implement/maintenance.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_1e3650ac | maintenance | sa | design | **completed** | autoApprove ON · solution confirm · enqueue TL |
| task_324395f2 | maintenance | team_lead | sa | **completed** | roleOnly · `/agent-team-lead` · re-emit T-* · retry.ssot_rereview live |
| task_c0e21b40 | maintenance | dev | team_lead | **completed** | `/agent-dev` · enum+init-data+routes+lookups+seed · yarn+dotnet PASS |
| task_707b2054 | maintenance | qa | dev | **completed** | `/agent-qa` · T-QA-CRUD-01 PASS · yarn typecheck+build PASS · P0 none |
| task_1d66d0dc | maintenance | review | qa | **completed** | `/agent-review` · approve · P0 none · yarn typecheck+build PASS |
| T-CTX-01 | docs | tl/dev | — | **done** | context enum §3.3 + API-09 |
| T-PERM-01 | ui+api | tl/dev | — | **done** | `maintenance.work-orders.*` stub |
| T-UI-LIST-01 | ui | tl/dev | T-UI-LKP-01 | **done** | SearchInput từ init-data |
| T-UI-LIST-CONFIG-01 | ui | tl/dev | T-BE-UISCHEMA-01 | **done** | editor giữ · seed keys dueAt+progress |
| T-UI-FORM-01 | ui | tl/dev | — | **done** | `/edit` `/copy` · copy code empty |
| T-UI-ACT-01 | ui | tl/dev | T-UI-FORM-01 | **done** | action inventory |
| T-UI-LKP-01 | ui | tl/dev | T-BE-INIT-01 | **done** | **cấm** maintenanceStore SSOT |
| T-UI-FIELD-01 | ui | tl/dev | T-BE-ENUM-01 | **done** | Design §3.2 + TZ dueAt |
| T-UI-PROD-01 | ui | tl/dev | T-UI-LKP-01 | **done** | cấm Resource/Slideout/readOnly |
| T-UI-UX-01 | ui | tl/dev | — | **done** | toast SSOT · GAP-TL-UX-TOAST-01 |
| T-BE-CRUD-01 | api | tl/dev | — | **done** | API-01…07 giữ |
| T-BE-ENUM-01 | api | tl/dev | — | **done** | Align status/workType = Design §3.3 |
| T-BE-INIT-01 | api | tl/dev | T-BE-ENUM-01 | **done** | GET `work-orders/init-data` |
| T-BE-UISCHEMA-01 | api | tl/dev | — | **done** | List keys Hạn+Tiến độ · description |
| T-BFF-01 | bff | tl/dev | T-BE-INIT-01 | **done** | forward init-data |
| T-QA-CRUD-01 | qa | qa | Dev | **done** | smoke A–D + Zone F + C/E/V/Copy + init-data |

## Blockers / open questions

- **GAP-RPT-SRC-WO-01** — `rpt-nhat-ky-cong-viec` Quantity + UnitCode — **out of this list pack**

## Links

- controlHint → po → ui → be → task → implement → qa → review
- PO: `D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/po/requirement.md`
- Design: `D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/ui/design.md`
- SA: `D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/be/solution-discovery.md`
- TL: `D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/task/maintenance.md`
- Implement: `D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/implement/maintenance.md`
- QA: `D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/qa/scenarios.md`
- Review: `D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/review/findings.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/maintenance`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/maintenance/ui/prototype/maintenance-list-prototype.html`

## Closeout

- closeout Review: `task_1d66d0dc` · roleOnly=`review` · `/agent-review` · **approve** · P0 none · yarn typecheck+build PASS · pipeline **completed** · at: `2026-08-16T01:10:00.000Z`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-16T01:10:00.000Z |
| versionGate | rechecked |
