# Handoff compact — design

schemaVersion: 1
feature: web-rmms-work
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T05:02:00.000Z
taskId: task_bb98583f
contentHash: sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile list/full · phone 430 · Android 1-1 #sc-mnt-list · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone chips
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-work · productRoute /work
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- WORK-L primary · peers WORK-P/G/C/E nav-only
- FILTER-P1: chips live · CREATE-FROM: estimate peer · no FAB
- STD-NEST closed: product nest /work/* · progress/log/chat ?id= · estimate /:id · std /web-rmms-work = WORK-L only
- labels: useFormOptions() · GPS none on list · cấm fake · cấm Me*
- open: UNCLEAR-DOMAIN-MAP-WORK · UNCLEAR-MSG-VS-COMMENT → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
| action.chat | chat | IconButton | /work/chat?id= |
| action.estimate | ước lượng | IconButton | /work/estimate/:id |

## Screens / zones (ids only)
- WORK-L · (peer WORK-P · WORK-G · WORK-C · WORK-E)
- AC-L-01…12 · reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html#sc-mnt-list
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-list
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET maintenance/work-orders · init-data · GET{id} cite peer
- real-data §A+§B: PASS · T-*: T-W5-01 · peers T-W5-02/03/04 · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-WORK: SA add DOMAIN-MAP row web-rmms-work
- UNCLEAR-MSG-VS-COMMENT: SA cite Live messages vs comments
- closed: FILTER-P1 · PEER-SPLIT · CREATE-FROM · STD-NEST

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-work-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-work-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/STATUS.md
