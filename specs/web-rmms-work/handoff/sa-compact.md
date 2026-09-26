# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-work
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:05:00.000Z
taskId: task_f0f9668d
contentHash: sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile list/full · phone ≤430 · N/A ERP Modal · DES-GRID N/A
- domain: Maintenance (`maintenance`) · Live work-orders · DOMAIN-MAP row `web-rmms-work` applied
- mfeStdRoute: /web-rmms-work · mfeStdUrl http://localhost:9301/web-rmms-work · productRoute /work
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff · **cấm** ERP.* · **cấm** invent WorkListController
- FormMode↔API: GET work-orders · GET init-data · GET{id} cite peer · no list write
- MSG-VS-COMMENT: Live **messages** GET/POST `{id}/messages` · **cấm** invent comments
- FILTER-P1 chips live · CREATE-FROM estimate peer · no FAB · STD-NEST /work/*
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions · GPS N/A list · demo N/A · **cấm** fake · **cấm** Me*
- Out: Me*/FAB create/journal B–E/invent path/web-bff/native edits
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | tìm | SearchInput | GET ?search |
| filter.status | trạng thái | Chip | init-data live |
| filter.workType | loại | Chip | init-data live |
| hub.estimate | giao việc | HubRow | nav estimate |
| list.card | thẻ WO | CardList | Title/Code/Assignee/Due/Route/Status/% |
| action.progress | tiến độ | IconButton | /work/progress?id= |
| action.log | nhật ký | IconButton | /work/log?id= |
| action.chat | chat | IconButton | /work/chat?id= · messages |
| action.estimate | ước lượng | IconButton | /work/estimate/:id |

## Screens / zones (ids only)
- WORK-L · (peer WORK-P · WORK-G · WORK-C · WORK-E)
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html#sc-mnt-list
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-list
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET/init-data/GET{id} maintenance/work-orders · peer messages/progress
- UNCLEAR-DOMAIN-MAP-WORK: resolved · UNCLEAR-MSG-VS-COMMENT: messages Live
- T-*: T-W5-01 · peers T-W5-02/03/04 · devSlash=/agent-dev

## UNCLEAR
- GAP-MOB-MNT-PROG-GPS-01: carry peer progress Note GPS
- (none open on this slug for SA)

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-work-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/STATUS.md
