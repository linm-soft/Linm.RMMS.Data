# STATUS — drone

| Field | Value |
|-------|-------|
| feature | `drone` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/drone-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/drone.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Drone` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/fly` (DOMAIN-MAP — **cấm ERP.***) |
| taskId | `task_3009fa90` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| mfeStdRoute | `/drone` |
| mfeStdUrl | `http://localhost:9313/drone` |
| updatedAt | `2026-08-16T02:44:40.804Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | released |

## Confirms (packet HARD — board / Autopilot)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | `Linm.RMMS.WebService` | RUN PACKET · **cấm** ERP.WebService / Domains/Master |
| uiRepo | `MFE-Source` | `Linm.Web.RMMS.Drone` |
| design_confirm | approve | Autopilot · prototype + reviewUrl |
| solution_confirm | approve | Autopilot · RMMS Drone domain |
| review_confirm | **approve** | Autopilot · `/agent-review` · `task_3009fa90` · findings.md |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | `_data-analy/features/drone-control-hint.md` | **done** |
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/drone.md | **done** |
| 4 | dev | implement/drone.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | drone | team_lead | — | done | Context/demo/controlHint |
| T-PERM-01 | drone | dev | — | done | useDronePermissions |
| T-UI-LIST | /fly | dev | T-PERM-01 | done | LinCatalogDataGrid + schema editor |
| T-UI-FORM | /fly/:id | dev | T-UI-LIST | done | C/E/V/Copy + artifacts |
| T-UI-LKP | /fly/:id | dev | T-UI-FORM | done | SearchInput master lookups |
| T-UI-FIELD | /fly/:id | dev | T-UI-LKP | done | date/number/select vs BE |
| T-UI-PROD | /fly | dev | T-UI-LIST | done | LinListFilterField · toast |
| T-UI-UX | /fly | dev | T-UI-LIST | done | 1× LinPageLayout · skeleton |
| T-BE-01 | scans | dev | — | done | Entity+DTO+Service+Controller |
| T-BE-02 | scans | dev | T-BE-01 | done | BFF proxy |
| T-BE-03 | scans | dev | T-BE-01 | done | Schema_RmmsDroneScans |
| T-BE-SCHEMA | drone-scans | dev | T-UI-LIST | done | CatalogUiSchemaRegistry seed |
| T-QA-01 | drone | qa | T-UI-FORM,T-BE-02 | **done** | scenarios.md (roleOnly=qa · task_d3584c9d) |
| T-RV-01 | drone | review | T-QA-01 | **done** | findings.md · task_3009fa90 · approve |
| T-UI-ACT-01 | /fly | dev | T-UI-FORM | done | toolbar/row → form/API |
| T-BE-CRUD-01 | scans | dev | T-BE-01 | done | verify list/C/U/D |
| T-UI-MAP-FORM | — | — | — | n/a | packKind=list |
| T-QA-CRUD-01 | drone | qa | T-UI-ACT-01 | **done** | Create/Edit/View/Delete |

## Blockers / open questions

- None P0. Follow-up: Cesium live (F-01) · real upload/worker (F-02) · IAM (F-03). QA P2: code `disabled` · extra «Tìm» · `filterMaxWidthPx`. History stub.

## Links
- mfeStdUrl: `http://localhost:9313/drone`
- mfeStdRoute: `/drone`

- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- controlHint: `specs/_data-analy/features/drone-control-hint.md`
- implement: `specs/drone/implement/drone.md`
- qa: `specs/drone/qa/scenarios.md`
- review: `specs/drone/review/findings.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/drone/ui/prototype/drone-list-prototype.html`

## Resume / closeout

- closeout Review: `task_3009fa90` · roleOnly=`review` · `/agent-review` · autoApprove=ON · **approve** · yarn typecheck+build **PASS** · pipeline **closed** · at: `2026-08-16T09:45:00.000+07:00`
- closeout QA: `task_d3584c9d` · roleOnly=`qa` · `/agent-qa` · T-QA-01 / T-QA-CRUD-01 **PASS** · chain next=`review`
- closeout Dev: `task_12c629c0` · implement `done`/`confirmed`

## Verify

| Gate | Result |
|------|--------|
| Role | review · completed · review/findings.md |
| FE/BE write this role | **none** (artifact STATUS + findings only) |
| FE typecheck | PASS |
| FE build (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | PASS (webpack 5.109.2 · 3 size warnings) |
| BE API Release | PASS (prior Dev · Review n/a write) |
| BE BFF Release | PASS (prior Dev · Review n/a write) |
| QA T-QA-01 / T-QA-CRUD-01 | PASS (code review · no P0) |
| ERP.* | **none** |

## Handoff

- next role: **none** (pipeline end)
- autoApprove: ON · review_confirm=`approve`
- roles sau review: none

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->


## Retry

- from: `dev` · at: `2026-08-14T14:44:27.946Z` · board user Retry step
