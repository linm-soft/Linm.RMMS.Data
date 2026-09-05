# STATUS — incident

| Field | Value |
|-------|-------|
| feature | `incident` |
| phase | `dev` |
| status | `pending` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fill_gaps` · gap=`crud_formtype` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/incident-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident.md` |
| filterBar | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident-filter-bar.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/incident/incidents`** (**cấm ERP.***) |
| domain | **Incident** |
| taskId | `task_e5e3ba46` |
| mfeStdRoute | `/incident` |
| mfeStdUrl | `http://localhost:9304/incident` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.02` |
| updatedAt | `2026-08-29T05:04:29.925Z` |
| dataAnaly | `done` · `specs/_data-analy/features/incident-control-hint.md` + `incident-real-data.md` |
| contentHash | `sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577` |
| po | `done` · `specs/incident/po/requirement.md` |
| design | `confirmed` · `specs/incident/ui/design.md` + prototype |
| sa | `confirmed` · `specs/incident/be/solution-discovery.md` |
| teamLead | `confirmed` · `specs/incident/task/incident.md` |
| dev | `done` · `specs/incident/implement/incident.md` |
| qa | `fail` · `specs/incident/qa/scenarios.md` · **GAP-QA-BFF-INIT-01** |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | `_data-analy/features/incident-control-hint.md` + `incident-real-data.md` | **done** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/incident.md + incident-filter-bar.md | **confirmed** |
| 4 | dev | implement/incident.md | **blocked** (failed) |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Field`) |
| route_confirm | **route_keep** `/su-co` (autopilot · Design/SA lock · reject packet `/incident`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **approve** (autopilot · prior FormType) |
| autoApprove | **ON** |
| e2eQa | **ON** |
| qa_fail_rollback | **pending** board · Dev plan + `qa_fix_plan` |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-DA-01 | incident | data_analy | — | **done** | control-hint + real-data · `task_29a0c673` |
| T-PO-01 | incident | po | T-DA-01 | **done** | requirement · Q-INC-* autopilot · `task_4fa6ad08` |
| T-DES-01 | incident | design | T-PO-01 | **done** | design.md + prototype · `task_c4cdbe48` · design_confirm=approve |
| T-SA-01 | incident | sa | T-DES-01 | **done** | solution-discovery · API-08 · LKP · FormMode↔API · `task_d95d36f3` |
| T-TL-01 | incident | team-lead | T-SA-01 | **done** | task pack fill_gaps P1 · filter-bar context · `task_0387effb` |
| T-CTX-01 | incident | docs | — | done | context API Signed |
| T-BE-01 | incident | api | T-CTX-01 | done | CRUD + assign/close |
| T-BE-02 | incident | migration | T-BE-01 | done | rmms_incidents · **n/a** new mig |
| T-BFF-01 | incident | bff | T-BE-01 | **fail** | list OK · **init-data 404** · GAP-QA-BFF-INIT-01 |
| T-PERM-01 | incident | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-BE-LIST-Q-01 | incident | api | T-BE-01 | **done** | routeName+incidentType |
| T-BE-INIT-01 | incident | api | T-BE-01 | **done** | API init-data **200** (docker rebuild) |
| T-BE-VAL-01 | incident | api | T-BE-INIT-01 | **done** | catalog 422 |
| T-UI-LIST-01 | incident | ui | T-BFF-01 | done | A–D · LAYOUT-06 · **cấm** rewrite |
| T-UI-FILTER-01 | incident | ui | T-BE-LIST-Q-01 | **done** | LinErpListFilterBar · e2e S1 PASS |
| T-UI-FORM-01 | incident | ui | T-UI-LIST-01 | **done** | Slideout footer-only · QA-20 PASS |
| T-UI-ACT-01 | incident | ui | T-UI-FORM-01 | done | Delete + assign/close · **CLOSED** |
| T-UI-LKP-01 | incident | ui | T-BE-INIT-01 | **done** | SearchInput · Dropdown (fallback when BFF init 404) |
| T-UI-HIST-01 | incident | ui | T-UI-LIST-01 | **done** | LinCatalogHistoryModal |
| T-UI-LEAVE-01 | incident | ui | T-UI-FORM-01 | done | LeaveConfirmModal |
| T-UI-FIELD-01 | incident | ui | T-UI-LKP-01 | **done** | Design §5.2 |
| T-UI-PROD-01 | incident | ui | T-UI-FORM-01 | **done** | cấm demo-json SSOT |
| T-UI-UX-01 | incident | ui | T-UI-FORM-01 | **done** | typography · 2-col |
| T-UI-RESP-01 | incident | ui | T-UI-UX-01 | **done** | erp-filter-bar shell |
| T-BE-CRUD-01 | incident | api | T-BE-01 | done | API-01…07 verify · **cấm** re-CRUD |
| T-UI-MAP-FORM | — | — | — | n/a | packKind=list |
| T-QA-01 | incident | qa | T-UI-FORM-01 | done | scenarios prior |
| T-QA-CRUD-01 | incident | qa | T-UI-ACT-01 | **fail** | e2e UI PASS · BFF init block |
| T-QA-FILTER-01 | incident | qa | T-UI-FILTER-01 | **done** | S1 PASS |
| T-QA-FORM-01 | incident | qa | T-UI-FORM-01 | **done** | QA-20 PASS |
| T-PILOT-01 | `/su-co` | qa+docs | T-QA-CRUD-01 | pending | blocked by QA fail |
| T-UD-BUG-10 | /su-co/tao-moi | qa | T-UI-FORM-01 | **done** | confirmed `/run-user-doc` 2026-08-30 · HDSD-P0-08/11 · capture=03-su-co-tao-moi.png |
| task_e5e3ba46 | incident | dev | task_c7ae2881 | **pending** | qaFailFix=1 · qaFixPhase=plan · `incident-qa-fix-plan.md` · from task_c7ae2881 |

## Blockers / open questions

- **GAP-QA-BFF-INIT-01** — BFF `GET web-bff/api/v1/incident/incidents/init-data` → **404** (swagger missing) · API `:5111` same path **200** · Asset/Maintenance init-data **200** · FE dùng FALLBACK · **blocks QA complete** · `qa_fail_rollback`
- **GAP-INC-ORG-01** — org-unit filter **DEFER P2**
- **GAP-RPT-SRC-INC-*** — DurationMin / damage lines / DefectItem **DEFER** report (**Q-INC-02**)
- **GAP-INC-MAP-01** — Kind F MFE **DEFER** (**Q-INC-03**)
- FormType CRUD ACT/DELETE/ASSIGN-CLOSE — **CLOSED** · **cấm** re-open
- P1 SA/Design gaps (Q01/INIT/LKP/VAL/ROUTE/TYPE/HIST/FOOTER) — Dev claimed closed · **BFF init live FAIL**

## Links

- data-analy → po → ui → be → task → implement → qa → review
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/incident-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/incident-real-data.md`
- po: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/po/requirement.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/design.md`
- solution: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/be/solution-discovery.md`
- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/task/incident.md`
- implement: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/implement/incident.md`
- qa: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/qa/scenarios.md`
- filter-bar: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident-filter-bar.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/incident`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/prototype/incident-list-prototype.html`
- peerStdUrl: `http://localhost:9304/su-co`

## Resume / closeout

- next: **Dev** via **`qa_fail_rollback`** · fix **GAP-QA-BFF-INIT-01** · then re-queue `/agent-qa`
- qa closeout: `task_c7ae2881` · 2026-08-29T03:58:00.000Z · autopilot ON · e2e PNG S0/S1/QA-20 PASS · BFF init-data FAIL · queue **failed** · **cấm** completed
- dev closeout: `task_3ad0be44` · 2026-08-29T03:15:02.581Z · autopilot ON · yarn build + dotnet build PASS · **cấm** e2e ở Dev
- tl closeout: `task_0387effb` · 2026-08-29T02:55:29.972Z
- sa closeout: `task_d95d36f3` · 2026-08-29T09:47:32.595Z
- design closeout: `task_c4cdbe48` · 2026-08-29T02:40:00.000Z
- po closeout: `task_4fa6ad08` · 2026-08-29T02:30:00.000Z
- data_analy closeout: `task_29a0c673` · hash skip consumers
- prior FormType: GAP-P2-ACT-DELETE · GAP-P2-ACT-ASSIGN-CLOSE · GAP-TL-FORMTYPE-01 **CLOSED**
- MFE SSOT: `Linm.Web.RMMS.Field` (`Linm.Web.RMMS.Incident` không tồn tại)

## Retry

- from: `data_analy` · at: `2026-08-29T02:13:31.467Z` · board user Retry step · **closed** this role
- mode: `fill_gaps` · gap=`crud_formtype` · TL re-audit `tl-retry-ssot-rereview` · **done**

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | orchestrator |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 4 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-08-29T03:58:00.000Z |
| versionGate | rechecked |
| teamLeadSkillVersion | 2026.08.19.04 |
| taskSchemaVersion | 2 |

<!-- Version meta: skillVersion=2026.08.25.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.25.02 · versionGate=rechecked · taskId=task_c7ae2881 -->
