# handoff-compact — data_analy → po

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| role | `data_analy` |
| status | `PASS` |
| taskId | `task_8c25b03b` |
| title | Users — chức vụ lookup (job-title) |
| kind | `B` |
| analyzedAt | `2026-09-18T15:52:39.759Z` |
| skillVersion | `2026.08.08.20` |
| workflowVersion | `2026.08.15.1` |
| rulesVersion | `2026.08.15.2` |
| contentHash | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| handoffTo | `po` |
| autoApprove | `ON` |

## Artifacts

| Kind | Path |
|------|------|
| controlHint | `specs/_data-analy/features/users-control-hint.md` |
| realData | `specs/_data-analy/features/users-real-data.md` |
| context | `docs/context/features/users.md` |
| cite | `docs/context/features/job-title.md` §5b · GAP-F-USR-05 |
| seed | `docs/context/seed/job-title-seed.json` (19) |
| priorPO | `specs/users/po/requirement.md` (**KEEP**) |
| priorDesign | `specs/users/ui/design.md` (**KEEP**) |
| mfe | `Linm.Web.RMMS.Integration` · `/integration/users` |
| be | `Linm.RMMS.WebService` · Integration |

## Delta (mandatory)

- List: cột **Chức vụ** = lookup name(`jobTitleCode`) · **≠** roleCode
- Form: SearchInput Chức vụ peer orgCode · View `<dl>` · **cấm** Input text
- ProfileTab/switch: SearchInput catalog · **cấm** placeholder «Chuyên viên IT»
- Persist `jobTitleCode` · denormalize JobTitle/Position = catalog name
- LKP `api/v1/integration/job-titles` · BFF same · **cấm** open-api · **cấm** `api/v1/rmms/*`
- **cấm** invent package Cục/VP · **cấm** new_page typed CRUD

## Zones

| Zone | Hint |
|------|------|
| B | + SearchInput `job-title` filter |
| C | + col Chức vụ |
| Form | + `jobTitleCode` SearchInput |
| Profile | SearchInput catalog |

## GAP

| ID | Sev |
|----|-----|
| GAP-F-USR-05 | P1 this task |
| GAP-DA-USR-JOBTITLE-UI | P0 MFE missing field |
| GAP-DA-USR-JOBTITLE-API | P0 DTO/LKP |
| GAP-JOB-05/02/06 | peer master/Auth |

## UNCLEAR

— none (Autopilot)

## DoR

controlHint=yes · realData=yes · §Delta=yes · cite§5b=yes · packKind=list · edit_page=yes
