# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-work
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T21:53:27.279Z
contentHash: sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770

## Decisions
- changeScope: new_page
- formPattern: Mobile full (phone max-width 430) · Android 1-1 · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-work · productRoute /work
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance (WorkOrder) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff client
- demo: N/A
- WORK-L list only · peer WORK-P/G/C/E (progress/log/chat/estimate)
- HARD: no create on list · live GET work-orders · useFormOptions · cấm fake coords · cấm Me*
- OUT: Me*/feedback/cam-view · journal/kết ca/tồn tại/tần suất (B–E) · invent slug controller · Kind E summary
- open: UNCLEAR-DOMAIN-MAP-WORK · FILTER-P1 · PEER-SPLIT · MSG-VS-COMMENT · STD-NEST · CREATE-FROM

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | tìm | SearchInput | GET maintenance/work-orders?search |
| filter.status | trạng thái | Chip/Select | init-data / LOOKUP |
| filter.workType | loại | Chip/Select | init-data / LOOKUP |
| hub.estimate | giao việc | HubRow | nav peer estimate |
| list.card | thẻ WO | CardList | Title/Code/Assignee/Due/Route/Status/% |
| action.progress | tiến độ | IconButton | peer web-rmms-mnt-progress |
| action.log | nhật ký | IconButton | peer web-rmms-mnt-log |
| action.chat | chat | IconButton | peer web-rmms-mnt-chat |

## Screens / zones (ids only)
- WORK-L · (peer WORK-P · WORK-G · WORK-C · WORK-E)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-list
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET maintenance/work-orders · GET init-data · GET{id} cite peer
- real-data §A+§B: PASS
- T-*: T-W5-01 (cite TASKS) · peers T-W5-02/03/04

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-WORK: SA add DOMAIN-MAP row web-rmms-work
- UNCLEAR-FILTER-P1: chips live vs toast-only filter
- UNCLEAR-PEER-SPLIT: progress/log/chat/estimate peer not primary
- UNCLEAR-MSG-VS-COMMENT: messages vs comments DEFER — SA cite
- UNCLEAR-STD-NEST: std peer mounts
- UNCLEAR-CREATE-FROM: no FAB create · estimate creates WO

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-work-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-work-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-work.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- peer: mnt-list · maintenance · web-rmms-mnt-progress · web-rmms-mnt-log · web-rmms-mnt-chat
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/STATUS.md
