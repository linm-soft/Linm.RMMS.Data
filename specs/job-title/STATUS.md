# STATUS — job-title

| Field | Value |
|-------|-------|
| feature | `job-title` |
| phase | `qa` |
| status | `await_confirm` |
| packKind | `master` |
| changeScope | `new_page` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/job-title.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdRoute | `/mas/chuc-vu` |
| mfeStdUrl | `http://localhost:9318/mas/chuc-vu` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| task | `task_f94ade78` |
| priorTask | `task_7017698c` |
| updatedAt | `2026-09-18T20:13:17.136Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/job-title-control-hint.md · job-title-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/job-title.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/job-title.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **blocked** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-PERM-01 | API | dev | — | **done** | `master.job-titles.*` |
| T-DM-01 | DOMAIN-MAP | dev | — | **done** | GAP-JOB-DM-01 |
| T-BE-CRUD-01 | Integration | dev | T-PERM-01 | **done** | API-01/02/04…07 |
| T-BE-INIT-01 | Integration | dev | T-BE-CRUD-01 | **done** | API-03 |
| T-SEED-01 | migration | dev | T-BE-CRUD-01 | **done** | Seed_RmmsJobTitles · 19 |
| T-BFF-01 | BFF | dev | T-BE-CRUD-01 | **done** | proxy only |
| T-BE-UISCHEMA-01 | catalog | dev | — | **done** | kind `job-title` |
| T-UI-FILTER-01 | S-LIST | dev | T-BE-CRUD-01 · T-BE-INIT-01 | **done** | `/agent-dev` |
| T-UI-LIST-01 | S-LIST | dev | T-BE-* · T-UI-FILTER-01 | **done** | `/agent-dev` |
| T-UI-CFG-01 | S-LIST | dev | T-UI-LIST-01 | **done** | `/agent-dev` |
| T-UI-FORM-01 | S-FORM | dev | T-UI-LIST-01 | **done** | Slideout · `/agent-dev` |
| T-UI-LEAVE-01 | DES-LEAVE | dev | T-UI-FORM-01 | **done** | `/agent-dev` |
| T-UI-ACT-01 | S-LIST | dev | T-UI-FORM-01 | **done** | `/agent-dev` |
| T-UI-LKP-01 | API-02 | dev | T-BE-CRUD-01 | **done** | peer users out of pack |
| T-UI-FIELD-01 | S-FORM | dev | T-UI-FORM-01 | **done** | `/agent-dev` |
| T-UI-PROD-01 | S-LIST | dev | T-UI-LIST-01 | **done** | `/agent-dev` |
| T-UI-UX-01 | S-FORM | dev | T-UI-FORM-01 | **done** | `/agent-dev` |
| T-UI-RESP-01 | S-LIST | dev | T-UI-LIST-01 | **done** | `/dev-web-responsive` |
| T-UI-HIST-01 | DES-GRID-H | dev | T-UI-LIST-01 | **done** | `/agent-dev` |
| T-CTX-01 | context | dev | — | **done** | verify CTX |
| T-QA-CRUD-01 | — | qa | T-UI-ACT-01 | **fail** | GAP-QA-CRUD-EMPTY-01 · API 404 |
| T-QA-FORM-01 | — | qa | T-UI-FORM-01 | **fail** | GAP-QA-FORM-BODY-01 |
| T-QA-FILTER-01 | — | qa | T-UI-FILTER-01 | **fail** | GAP-FILTER-BAR-16 |
| T-QA-FILTER-02 | — | qa | T-UI-FILTER-01 | **fail** | GAP-QA-FILTER-DTM-01 |
| T-QA-TYP-01 | — | qa | T-UI-UX-01 | **fail** | GAP-TYP-02 · title 20px |
| T-QA-TAB-01 | — | qa | T-UI-FORM-01 | **blocked** | not measured · P0 fail |

## Blockers / open questions

- QA **FAIL** `task_bd915c30` · live API/BFF `job-titles` 404 · grid empty · 🔍 gap 230px · title 20px
- Dev debt still: RequirePermission stub · migrate DB ops · filter-bar context MD

## Links

- data-analy → po → ui → be → task → implement → qa → review
- control-hint: `specs/_data-analy/features/job-title-control-hint.md`
- real-data: `specs/_data-analy/features/job-title-real-data.md`
- compact: `specs/job-title/handoff/dev-compact.md`
- implement: `specs/job-title/implement/job-title.md`
- task: `specs/job-title/task/job-title.md`
- design: `specs/job-title/ui/design.md`
- solution: `specs/job-title/be/solution-discovery.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html`
- mfeStdUrl: `http://localhost:9318/mas/chuc-vu`
- mfeStdRoute: `/mas/chuc-vu`

## Handoff (data_analy → po)

| Field | Value |
|-------|-------|
| feature | `job-title` |
| phase_from / phase_to | data_analy → po |
| artifacts | control-hint + real-data · compact |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| autoApprove | ON |
| e2eQa | ON (queued — `/agent-qa*` only) |
| Next | done · `/agent-po` confirmed |

## Handoff (po → design)

| Field | Value |
|-------|-------|
| feature | `job-title` |
| phase_from / phase_to | po → design |
| packKind | `master` (PO confirm) |
| artifacts | `po/requirement.md` · `handoff/po-compact.md` |
| Screens / Pattern | List Full page · Form Slideout · `devSlash=/agent-dev` |
| grid_standard | v1 · Report AC N/A · `tabs: none` · LeaveConfirmModal |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| autoApprove | ON |
| e2eQa | ON (queued — `/agent-qa*` only) |
| Next | done · `/agent-design` confirmed |

## Handoff (design → sa)

| Field | Value |
|-------|-------|
| feature | `job-title` |
| phase_from / phase_to | design → sa |
| artifacts | `ui/design.md` · `ui/prototype/job-title-list-prototype.html` · `handoff/design-compact.md` |
| formPattern | Slideout · `data-form-cols=2` |
| zones | DES-GRID-A…D · F · H · Z · LEAVE |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html` |
| peerStdUrl | `file:///D:/AI-Rules/Linm.Development.Rules/common/skill/agent-design/example/shared-grid-example.html` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| design_confirm | `approve` (autoApprove ON) |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| autoApprove | ON |
| e2eQa | ON (queued — `/agent-qa*` only) |
| Next | done · `/agent-sa` confirmed |

## Handoff (sa → team_lead)

| Field | Value |
|-------|-------|
| feature | `job-title` |
| phase_from / phase_to | sa → team_lead |
| packKind | `master` |
| artifacts | `be/solution-discovery.md` · `handoff/sa-compact.md` |
| FormMode↔API | C→API-05 · E→API-04+06 · V→API-04 · List→API-01 · init→API-03 · search→API-02 · DEL→API-07 |
| entity/migration | `JobTitleEntity` · `rmms_job_titles` · `Schema_RmmsJobTitles` + seed |
| TZ/XCO/SHARE | `tz_na` · `xco_get_only` · `share_a` |
| BFF | proxy only · `web-bff/api/v1/integration/job-titles` |
| solution_confirm | `approve` (autoApprove ON) |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| autoApprove | ON |
| e2eQa | ON (queued — `/agent-qa*` only) |
| Next | done · `/agent-team-lead` confirmed |

## Handoff (team_lead → dev)

| Field | Value |
|-------|-------|
| feature | `job-title` |
| phase_from / phase_to | team_lead → dev |
| packKind | `master` |
| artifacts | `task/job-title.md` · `handoff/team_lead-compact.md` |
| devSlash | `/agent-dev` |
| route_confirm | `/mas/chuc-vu` · URL không mới · Autopilot |
| formPattern | Slideout · `data-form-cols=2` |
| deps | T-BE-* trước T-UI-* · T-QA queued `/agent-qa*` |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| autoApprove | ON |
| e2eQa | ON (queued — `/agent-qa*` only) |
| Next | done · `/agent-dev` confirmed |

## Handoff (dev → qa)

| Field | Value |
|-------|-------|
| feature | `job-title` |
| phase_from / phase_to | dev → qa |
| packKind | `master` |
| artifacts | `implement/job-title.md` · `handoff/dev-compact.md` |
| mfeStdUrl | `http://localhost:9318/mas/chuc-vu` |
| build | MFE `yarn build` PASS · API+BFF `dotnet build` PASS |
| APIs | API-01…07 · ui-schema `job-title` · BFF proxy |
| debt | RequirePermission stub · DB migrate ops · filter-bar context MD |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| autoApprove | ON |
| e2eQa | ON (queued — `/agent-qa*` only) |
| Next | `/agent-qa` **blocked** · không Review |

## Handoff (qa → review)

| Field | Value |
|-------|-------|
| feature | `job-title` |
| phase_from / phase_to | qa → **blocked** (không review) |
| packKind | `master` |
| artifacts | `qa/scenarios.md` · `handoff/qa-compact.md` |
| verdict | **FAIL** |
| T-QA | CRUD/FORM/FILTER/TYP **fail** · TAB blocked |
| PNG | `qa/screens/S0.png` · `S1.png` · `QA-20.png` · `T-QA-FORM-01.png` · `QA-FILTER-*.png` |
| GAP | GAP-QA-CRUD-EMPTY-01 · GAP-QA-FORM-BODY-01 · GAP-FILTER-BAR-16 · GAP-QA-FILTER-DTM-01 · GAP-TYP-02 |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| autoApprove | ON · **không** bỏ `qa_fail_rollback` |
| e2eQa | ON · runtime đã chạy |
| Next | queue `failed` · board `qa_fail_rollback` · cấm `phase=done` |

## Retry

- from: `data_analy` · at: `2026-09-18T17:42:43.348Z` · board user Retry step
- resolved: `task_fe86d194` · hash refresh CTX+seed · §5b consumer · DoR PASS

## Version meta

| Field | Value |
|-------|-------|
| skillId | `agent-qa` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| schemaVersion | STATUS `4` |
| versionGate | `ok` |
