# STATUS — incident

| Field | Value |
|-------|-------|
| feature | `incident` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` · `qa_fail_rollback` · gap=`bff_init` + `media_upload` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/incident-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident.md` |
| filterBar | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident-filter-bar.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/incident/incidents`** (**cấm ERP.***) |
| domain | **Incident** |
| taskId | `task_3c03bd81` |
| mfeStdRoute | `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| skillVersion | `2026.08.25.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.25.02` |
| updatedAt | `2026-09-06T19:26:16.786Z` |
| dataAnaly | `done` · `specs/_data-analy/features/incident-control-hint.md` + `incident-real-data.md` · compact `handoff/data_analy-compact.md` |
| contentHash | `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| po | `done` · `specs/incident/po/requirement.md` · compact `handoff/po-compact.md` · § Delta BFF-init + media |
| design | `done` · `ui/design.md` + prototype media · compact `handoff/design-compact.md` · design_confirm=**approve** |
| sa | `done` · BFF init + FileService · compact `handoff/sa-compact.md` · solution_confirm=**approve** |
| teamLead | `done` · `task/incident.md` + `handoff/team_lead-compact.md` · T-TL-02 · tasks chỉ 2 GAP NEW |
| dev | `done` · T-BFF-INIT-02 · T-BE-MEDIA-01 · T-BFF-FILE-01 · T-UI-MEDIA-01 · compact `handoff/dev-compact.md` |
| qa | `done` · T-QA-MEDIA-01 · T-QA-CRUD-01 · e2e S0/S1/QA-20 **PASS** · compact `handoff/qa-compact.md` |
| review | `done` · findings PASS · review_confirm=**done** · compact `handoff/review-compact.md` · `task_3c03bd81` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data_analy | `_data-analy/features/incident-control-hint.md` + `incident-real-data.md` + `handoff/data_analy-compact.md` | **done** |
| 1 | po | po/requirement.md + `handoff/po-compact.md` (§ Delta BFF-init + media · keep prior) | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl (media zone) + `handoff/design-compact.md` | **confirmed** |
| 2.2 | sa | be/solution-discovery.md + `handoff/sa-compact.md` (BFF init + FileService) | **confirmed** |
| 3 | team-lead | task/incident.md + `handoff/team_lead-compact.md` | **confirmed** |
| 4 | dev | implement + `handoff/dev-compact.md` (GAP-QA-BFF-INIT-01 + GAP-INC-MEDIA-01) | **confirmed** |
| 5 | qa | qa/scenarios.md + `handoff/qa-compact.md` | **confirmed** |
| 6 | review | review/findings.md + `handoff/review-compact.md` | **done** |
## Confirms

| Gate | Value |
|------|-------|
| design_confirm | **confirmed** (user Approve board) |
| solution_confirm | **confirmed** (user Approve board) |
| be_repo_confirm | **approve** (packet default `Linm.RMMS.WebService`) |
| ui_repo_confirm | **approve** (packet default `Linm.Web.RMMS.Field`) |
| route_confirm | **route_keep** `/su-co` (autopilot · Design/SA lock · reject packet `/incident`) |
| version_mismatch_action | **recheck_new** |
| review_confirm | **confirmed** (user Approve board) |
| autoApprove | **ON** |
| e2eQa | **ON** |
| qa_fail_rollback | **cleared** · QA PASS · GAP-QA-BFF-INIT-01 + GAP-INC-MEDIA-01 **CLOSED** |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-DA-01 | incident | data_analy | — | **done** | control-hint + real-data · `task_29a0c673` |
| T-DA-02 | incident | data_analy | — | **done** | edit_page § Delta BFF-init + media FileService · `task_2ed457c2` · compact |
| T-PO-01 | incident | po | T-DA-01 | **done** | requirement · Q-INC-* autopilot · `task_4fa6ad08` |
| T-PO-02 | incident | po | T-DA-02 | **done** | § Delta BFF-init + media · keep prior · `task_900ecdd8` · compact |
| T-DES-01 | incident | design | T-PO-01 | **done** | design.md + prototype · `task_c4cdbe48` · design_confirm=approve |
| T-DES-02 | incident | design | T-PO-02 | **done** | media zone prototype + reviewUrl · `task_e0587959` · compact · design_confirm=approve |
| T-SA-01 | incident | sa | T-DES-01 | **done** | solution-discovery · API-08 · LKP · FormMode↔API · `task_d95d36f3` |
| T-SA-02 | incident | sa | T-DES-02 | **done** | BFF init + FileService confirm · `task_343230dc` · compact |
| T-TL-01 | incident | team-lead | T-SA-01 | **done** | task pack fill_gaps P1 · filter-bar context · `task_0387effb` |
| T-TL-02 | incident | team-lead | T-SA-02 | **done** | tasks chỉ GAP-QA-BFF-INIT-01 + GAP-INC-MEDIA-01 (+ HARD) · `task_554b5a39` · compact |
| T-CTX-01 | incident | docs | — | done | context API Signed |
| T-BE-01 | incident | api | T-CTX-01 | done | CRUD + assign/close |
| T-BE-02 | incident | migration | T-BE-01 | done | rmms_incidents · **n/a** new mig prior |
| T-BFF-01 | incident | bff | T-BE-01 | **done** | list OK · init-data **200** (T-BFF-INIT-02) |
| T-PERM-01 | incident | ui+api | T-BE-01 | done | FE gate · BE stub |
| T-BE-LIST-Q-01 | incident | api | T-BE-01 | **done** | routeName+incidentType |
| T-BE-INIT-01 | incident | api | T-BE-01 | **done** | API init-data **200** (docker rebuild) |
| T-BE-VAL-01 | incident | api | T-BE-INIT-01 | **done** | catalog 422 |
| T-UI-LIST-01 | incident | ui | T-BFF-01 | done | A–D · LAYOUT-06 · **cấm** rewrite |
| T-UI-FILTER-01 | incident | ui | T-BE-LIST-Q-01 | **done** | LinErpListFilterBar · e2e S1 PASS |
| T-UI-FORM-01 | incident | ui | T-UI-LIST-01 | **done** | Slideout footer-only · QA-20 PASS |
| T-UI-ACT-01 | incident | ui | T-UI-FORM-01 | done | Delete + assign/close · **CLOSED** |
| T-UI-LKP-01 | incident | ui | T-BE-INIT-01 | **done** | SearchInput · Dropdown (init-data 200) |
| T-UI-HIST-01 | incident | ui | T-UI-LIST-01 | **done** | LinCatalogHistoryModal |
| T-UI-LEAVE-01 | incident | ui | T-UI-FORM-01 | done | LeaveConfirmModal |
| T-UI-FIELD-01 | incident | ui | T-UI-LKP-01 | **done** | Design §5.2 |
| T-UI-PROD-01 | incident | ui | T-UI-FORM-01 | **done** | cấm demo-json SSOT |
| T-UI-UX-01 | incident | ui | T-UI-FORM-01 | **done** | typography · 2-col |
| T-UI-RESP-01 | incident | ui | T-UI-UX-01 | **done** | erp-filter-bar shell |
| T-UI-MEDIA-01 | incident | ui | T-UI-FORM-01 | **done** | LinImageUpload · DES-FORM-Z2-MEDIA · `task_f7a94b25` |
| T-BFF-INIT-02 | incident | bff | T-BE-INIT-01 | **done** | proxy init-data **200** · GAP-QA-BFF-INIT-01 closed |
| T-BE-MEDIA-01 | incident | api+mig | T-SA-02 | **done** | MediaIds CSV + DTO · Schema_RmmsIncidents_MediaIds |
| T-BFF-FILE-01 | incident | bff | T-SA-02 | **done** | AddLinmFileServiceBff · `files/*` · NuGet 1.1.0 |
| T-BE-CRUD-01 | incident | api | T-BE-01 | done | API-01…07 verify · **cấm** re-CRUD |
| T-UI-MAP-FORM | — | — | — | n/a | packKind=list |
| T-QA-01 | incident | qa | T-UI-FORM-01 | done | scenarios prior |
| T-QA-CRUD-01 | incident | qa | T-UI-ACT-01 | **done** | re-smoke PASS · `task_715a9115` |
| T-QA-FILTER-01 | incident | qa | T-UI-FILTER-01 | **done** | S1 PASS |
| T-QA-FORM-01 | incident | qa | T-UI-FORM-01 | **done** | QA-20 PASS |
| T-QA-MEDIA-01 | incident | qa | T-UI-MEDIA-01 | **done** | LinImageUpload + files/init 401 · `task_715a9115` |
| T-REV-01 | incident | review | T-QA-MEDIA-01 | **done** | findings + compact · PASS · `task_3c03bd81` |
| T-PILOT-01 | `/su-co` | qa+docs | T-REV-01 | pending | after review PASS |
| T-UD-BUG-10 | /su-co/tao-moi | qa | T-UI-FORM-01 | **done** | confirmed `/run-user-doc` 2026-08-30 · HDSD-P0-08/11 · capture=03-su-co-tao-moi.png |
| task_e5e3ba46 | incident | dev | task_c7ae2881 | **done** | superseded by `task_f7a94b25` · BFF init + media |

## Blockers / open questions

- **GAP-QA-BFF-INIT-01** — **CLOSED QA** · BFF init-data **200** live
- **GAP-INC-MEDIA-01** — **CLOSED QA** · LinImageUpload + files/init **401** + MediaIds
- **GAP-INC-MEDIA-HARD** — lock kept · cấm invent FilesController · persist presigned · ERP.*
- **GAP-QA-E2E-PW-01** — info · yarn e2e-qa install hung · chromium executablePath fallback · S0/S1/QA-20 PASS
- **GAP-INC-ORG-01** — org-unit filter **DEFER P2**
- **GAP-RPT-SRC-INC-*** — DurationMin / damage / DefectItem **DEFER** (**Q-INC-02**)
- **GAP-INC-MAP-01** — Kind F MFE **DEFER** (**Q-INC-03**)
- FormType CRUD ACT/DELETE/ASSIGN-CLOSE — **CLOSED** · **cấm** re-open
- Note: FileService API `:5018` may be down → files/* auth/route OK (401) · upload 2xx needs File.Api

## Links

- data-analy → po → ui → be → task → implement → qa → review
- control-hint: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/incident-control-hint.md`
- real-data: `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/incident-real-data.md`
- compact data_analy: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/handoff/data_analy-compact.md`
- compact po: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/handoff/po-compact.md`
- compact design: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/handoff/design-compact.md`
- compact sa: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/handoff/sa-compact.md`
- compact team_lead: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/handoff/team_lead-compact.md`
- compact dev: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/handoff/dev-compact.md`
- compact qa: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/handoff/qa-compact.md`
- compact review: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/handoff/review-compact.md`
- review findings: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/review/findings.md`
- po: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/po/requirement.md`
- design: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/design.md`
- solution: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/be/solution-discovery.md`
- task: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/task/incident.md`
- implement: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/implement/incident.md`
- qa: `D:/AI-QLBD/Linm.RMMS.Data/specs/incident/qa/scenarios.md`
- filter-bar: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident-filter-bar.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- mfeStdUrl: `http://localhost:9304/su-co`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/incident/ui/prototype/incident-list-prototype.html`
- peerStdUrl: `http://localhost:9304/su-co`

## Resume / closeout

- next: **T-PILOT-01** · **cấm** phase=done · **cấm** rewrite A–D · qldb review **complete**
- review closeout: `task_3c03bd81` · 2026-09-07T02:24:48.578Z · verdict=PASS · review_confirm=done · QUERY/SEC/UI-FN/BE-FN PASS · P0/P1=0
- qa closeout: `task_715a9115` · 2026-09-06T19:22:00.000Z · verdict=PASS · e2e S0/S1/QA-20 · BFF init 200 · files/init 401 · route_keep `/su-co`
- dev closeout: `task_f7a94b25` · 2026-09-06T19:05:00.000Z · autopilot ON · route_keep `/su-co` · build PASS · BFF init 200 · FileService.Bff · MediaIds · FE upload
- tl closeout: `task_554b5a39` · 2026-09-07T01:52:00.000Z · autopilot ON · route_keep `/su-co` · task pack + compact
- sa closeout: `task_343230dc` · 2026-09-07T01:48:00.000Z · solution_confirm=approve · MediaIds CSV · BFF init rebuild
- design closeout: `task_e0587959` · 2026-09-07T01:42:00.000Z · DES-FORM-Z2-MEDIA · design_confirm=approve
- po closeout: `task_900ecdd8` · 2026-09-07T01:40:00.000Z · § Delta GAP-QA-BFF-INIT-01 + GAP-INC-MEDIA-01
- data_analy closeout: `task_2ed457c2` · 2026-09-07T01:30:00.000Z · CTX hash changed · compact written
- prior SA: `task_d95d36f3` · CRUD/FormMode KEEP
- qa closeout prior: `task_c7ae2881` · BFF init-data FAIL · queue failed · fixed by Dev
- MFE SSOT: `Linm.Web.RMMS.Field`

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
| generatedAt | 2026-09-07T02:24:48.578Z |
| versionGate | rechecked |
| teamLeadSkillVersion | 2026.08.19.04 |
| taskSchemaVersion | 2 |
| reviewHash | sha256:f97d7887de42851b5759a8e8adb8b3cb9fd80ba8e4c7cb68de3efc438b56e021 |

<!-- Version meta: skillVersion=2026.08.25.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.25.02 · versionGate=rechecked · taskId=task_3c03bd81 · contentHash=sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad · review=PASS · review_confirm=done · next=T-PILOT-01 -->
