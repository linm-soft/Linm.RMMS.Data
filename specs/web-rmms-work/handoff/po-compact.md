# Handoff compact — po

schemaVersion: 1
feature: web-rmms-work
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:56:00.000Z
contentHash: sha256:56146b96759461d425413e7e27e31fc1a5a4ed0a5f376f6a526959f62eb62770

## Decisions
- changeScope: new_page
- formPattern: Mobile full · phone max-width 430 · Android 1-1 · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-work · productRoute /work
- be: D:/AI-QLBD/Linm.RMMS.WebService · Maintenance · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff · VITE_MOBILE_API_URL http://localhost:5202/mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- WORK-L primary DoD · peers WORK-P/G/C/E nav-only
- HARD: live GET work-orders · chips live (FILTER-P1) · no FAB create · useFormOptions · cấm fake GPS · cấm Me*
- OUT: Me*/feedback/cam-view · journal B–E · invent slug controller · Kind E summary · web-bff
- PO chốt: FILTER-P1=chips live · PEER-SPLIT=WORK-L only · CREATE-FROM=estimate peer · STD-NEST→Design
- Defer SA: DOMAIN-MAP-WORK · MSG-VS-COMMENT

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | tìm | SearchInput | GET work-orders?search |
| filter.status | trạng thái | Chip/Select | init-data live |
| filter.workType | loại | Chip/Select | init-data live |
| hub.estimate | giao việc | HubRow | nav peer estimate |
| list.card | thẻ WO | CardList | Title/Code/Assignee/Due/Route/Status/% |
| action.progress | tiến độ | IconButton | peer mnt-progress |
| action.log | nhật ký | IconButton | peer mnt-log |
| action.chat | chat | IconButton | peer mnt-chat |

## Screens / zones (ids only)
- WORK-L · (peer WORK-P · WORK-G · WORK-C · WORK-E)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-work
- prototype zone: #sc-mnt-list
- DES-GRID / LinErpListFilterBar: N/A phone

## AC (ids)
- AC-L-01…12 list · Report AC: N/A
- FormMode↔API: GET maintenance/work-orders · init-data · GET{id} cite peer
- real-data §A+§B: PASS (analy reuse)
- T-*: T-W5-01 · peers T-W5-02/03/04

## UNCLEAR (open → next)
- UNCLEAR-DOMAIN-MAP-WORK → SA
- UNCLEAR-MSG-VS-COMMENT → SA
- UNCLEAR-STD-NEST → Design/Dev
- closed: FILTER-P1 · PEER-SPLIT · CREATE-FROM

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-work-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-work-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-work.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-work/STATUS.md
