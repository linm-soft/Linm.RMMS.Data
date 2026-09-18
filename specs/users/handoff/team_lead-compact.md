# handoff-compact — team_lead → dev

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| role | `team_lead` |
| status | `PASS` |
| taskId | `task_8149b4c8` |
| title | Users — chức vụ lookup (job-title) |
| kind | `B` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued qa) |
| route_confirm | `approve` `/integration/users` (KEEP · no new URL) |
| skillVersion | `2026.08.09.02` |
| workflowVersion | `2026.08.09.02` |
| rulesVersion | `2026.08.09.3` |
| contentHashAnaly | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| handoffTo | `dev` |
| full | `specs/users/task/users.md` |

## Artifacts

| Kind | Path |
|------|------|
| task | `specs/users/task/users.md` (**KEEP** + delta T-*-JOB) |
| solution | `specs/users/be/solution-discovery.md` (**confirmed**) |
| design | `specs/users/ui/design.md` (**confirmed**) |
| cite | `job-title.md` §5b · GAP-F-USR-05 |
| mfe | `/integration/users` |
| be | Integration · `users` + LKP `job-titles` · **cấm ERP.*** |

## Delta (mandatory)

- Zone B: + SearchInput filter `jobTitleCode` · `catalogKind=job-title`
- Zone C: + cột **Chức vụ** = name(**≠** roleCode) · AC-G-09
- Form: SearchInput `jobTitleCode` peer orgCode · View `<dl>` · **cấm** Text
- BE: ADD `job_title_code` · DTO · denorm name · `?jobTitleCode=` · soft validate
- BFF: QS + proxy LKP · LKP wire stub OK (GAP-JOB-05)
- **cấm** rewrite A–D DONE · invent package · master CRUD · Profile P1

## Emit tasks

| id | layer | status |
|----|-------|--------|
| T-BE-JOB-01 | api | pending |
| T-BFF-JOB-01 | bff | pending |
| T-UI-JOB-01 | ui | pending |
| T-UI-LKP-JOB | ui | pending |
| T-QA-JOB-01 / QA-JOB-CRUD | qa | pending |
| prior T-* (route/CRUD/…) | — | **KEEP done** |

## FormMode ↔ API

List `?jobTitleCode=` · Create/Edit + code · View GET · LKP `job-titles/search`

## GAP

| ID | Sev | TL |
|----|-----|-----|
| GAP-F-USR-05 | P1 | IN |
| GAP-DA-USR-JOBTITLE-UI/API | P0 | IN T-*-JOB |
| GAP-JOB-05 | soft | stub OK |
| GAP-JOB-06 | boundary | out P1 |
| GAP-F-USR-01 | P2 | no block |

## UNCLEAR

— none (Autopilot)

## DoR

task=yes · T-*-JOB=yes · route_confirm=approve · KEEP+delta=yes · FormMode↔API=yes · cấm ERP=yes
