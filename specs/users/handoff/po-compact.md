# handoff-compact — po → design

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| role | `po` |
| status | `PASS` |
| taskId | `task_e3d2b6f8` |
| title | Users — chức vụ lookup (job-title) |
| kind | `B` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued qa) |
| skillVersion | `2026.08.08.30` |
| workflowVersion | `2026.08.09.02` |
| rulesVersion | `2026.08.09.3` |
| contentHashAnaly | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| handoffTo | `design` |
| full | `specs/users/po/requirement.md` |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/users/po/requirement.md` (**KEEP** + delta) |
| controlHint | `specs/_data-analy/features/users-control-hint.md` |
| realData | `specs/_data-analy/features/users-real-data.md` |
| cite | `job-title.md` §5b · GAP-F-USR-05 |
| seed | `job-title-seed.json` (19) |
| mfe | `/integration/users` |
| be | Integration · LKP `job-titles` · **cấm ERP.*** |

## Delta (mandatory)

- List: cột **Chức vụ** = name(`jobTitleCode`) · **≠** roleCode · AC-G-09
- Zone B: + SearchInput filter `job-title`
- Form: SearchInput `jobTitleCode` peer orgCode · View `<dl>` · **cấm** Text
- Profile/switch: SearchInput catalog · **cấm** «Chuyên viên IT»
- Persist `jobTitleCode` · denormalize JobTitle/Position = name
- LKP `api/v1/integration/job-titles` · BFF same · soft GAP-JOB-05
- **cấm** invent package · **cấm** new_page · **cấm** master CRUD job-title

## Zones

| Zone | Hint |
|------|------|
| B | + SearchInput `job-title` |
| C | + col Chức vụ |
| Form | + `jobTitleCode` SearchInput |
| Profile | SearchInput catalog |

## Grid AC (delta)

AC-G-01…08 KEEP · **AC-G-09** cột Chức vụ catalog name

## GAP

| ID | Sev | PO |
|----|-----|-----|
| GAP-F-USR-05 | P1 | IN |
| GAP-DA-USR-JOBTITLE-UI/API | P0 | IN Design/SA/Dev |
| GAP-JOB-05 | soft | stub OK |
| GAP-F-USR-01 | P2 | no block |

## UNCLEAR

— none (Autopilot)

## DoR

requirement=yes · GridAC=yes · Screens/Leave=yes · controlHint=yes · packKind=list · edit_page=yes · KEEP+delta=yes
