# handoff-compact — design → sa

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| role | `design` |
| status | `PASS` |
| taskId | `task_141a68a1` |
| title | Users — chức vụ lookup (job-title) |
| kind | `B` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued qa) |
| skillVersion | `2026.08.08.31` |
| workflowVersion | `2026.08.09.02` |
| rulesVersion | `2026.08.09.3` |
| contentHashAnaly | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| design_confirm | `approve` |
| handoffTo | `sa` |
| full | `specs/users/ui/design.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/users/ui/prototype/users-list-prototype.html` |

## Artifacts

| Kind | Path |
|------|------|
| design | `specs/users/ui/design.md` (**KEEP** + delta) |
| prototype | `specs/users/ui/prototype/users-list-prototype.html` |
| controlHint | `specs/_data-analy/features/users-control-hint.md` |
| realData | `specs/_data-analy/features/users-real-data.md` |
| cite | `job-title.md` §5b · GAP-F-USR-05 |
| mfe | `/integration/users` |
| be | Integration · LKP `job-titles` · **cấm ERP.*** |

## Delta (mandatory)

- Zone B: + SearchInput filter `jobTitleCode` · `catalogKind=job-title` · page=1
- Zone C: + cột **Chức vụ** = name(`jobTitleCode`) · **≠** roleCode · AC-G-09
- Form: SearchInput `jobTitleCode` peer orgCode · View `<dl>` · **cấm** Text
- Profile/switch: SearchInput catalog · **cấm** «Chuyên viên IT»
- Persist `jobTitleCode` · denormalize JobTitle/Position = name
- LKP `api/v1/integration/job-titles` · BFF same · soft GAP-JOB-05 stub OK

## Zones / control-map

| Zone | Control |
|------|---------|
| A | Header KEEP |
| B | + `job-title` SearchInput |
| C | + col Chức vụ |
| D | Pagination KEEP |
| Form | + `jobTitleCode` SearchInput |
| Profile | SearchInput catalog (boundary SA) |

## Grid AC (delta)

AC-G-01…08 KEEP · **AC-G-09** cột Chức vụ catalog name

## GAP

| ID | Sev | Design |
|----|-----|--------|
| GAP-F-USR-05 | P1 | IN control-map |
| GAP-DA-USR-JOBTITLE-UI/API | P0 | IN → SA/Dev |
| GAP-JOB-05 | soft | stub OK |
| GAP-F-USR-01 | P2 | no block |

## UNCLEAR

— none (Autopilot)

## DoR

design=yes · prototype=yes · reviewUrl=yes · control-map=yes · zones A–D=yes · KEEP+delta=yes · design_confirm=approve
