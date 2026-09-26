# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T08:20:00.000Z
taskId: task_ea115b13
contentHash: sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page
- formPattern: Full (TD-04 list · TD-05 create/edit) · phone 430 · LeaveConfirmModal
- Grid/DES-GRID/LinErpListFilterBar: N/A phone · query: sessionId·page·pageSize
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-b
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files · cấm ERP.*
- BFF: mobile-bff/api/v1/patrol/** proxy · API owns · web-bff cite peer
- PATH CLOSED: GET sessions/{id}/journal-lines · POST journal-lines · GET/PUT journal-lines/{id}
- SCHEMA CLOSED: PatrolJournalLineEntity + Schema_PatrolJournalLine + rmms_patrol_journal_lines trước form
- LRS CLOSED: kmText tay · WEATHER CLOSED: 6 LOOKUP_STATIC keys
- entity: PatrolJournalLine **Mới** · parent PatrolSession Live · migration required B
- demo: N/A · wave B · out TD-06·TK-02…07·WO/scope D
- gates: TZ=tz_required · XCO=xco_get_only · SHARE=tenant_keep
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| journalList | sổ dòng | List cards | GET sessions/{id}/journal-lines |
| at | giờ | DateTime | |
| userName | người | Text RO | auth/profile |
| lat/lng/accuracyM | GPS | GPS | TD-05 HARD deny→block |
| kmText | lý trình | Text | tay · GAP-TD-LRS-01 |
| direction | chiều | Dropdown | default ca Note chieu= |
| weather | thời tiết | Dropdown | 6 keys LOOKUP_STATIC |
| kind | loại | Radio/Dropdown | 9 keys |
| narrative | diễn biến | TextArea | required |
| mediaIds | ảnh | FileMulti | files/* |
| onSiteAction/Result | xử lý tại chỗ | Toggle+Text | |
| reportedTo/At | báo tuần kiểm | Button+DateTime | no TK-03 |
| violationFlag | đề nghị BB | Button | if hanh-lang |
| status | trạng thái | Dropdown | 4 keys |

## Screens / zones (ids only)
- TD-04 · TD-05 · DES-LEAVE
- Leave: TD-04↔TD-05 · Back→TD-01 · Save→TD-04
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-b

## API / tasks (ids only)
- FormMode↔API: GET sessions/{id}/journal-lines · POST journal-lines · GET/PUT journal-lines/{id} · GET sessions/{id} · auth/profile · files/*
- entity/migration: PatrolJournalLine + Schema required B · parent Live
- TZ/XCO/SHARE: tz_required · xco_get_only · tenant_keep
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- none

## Full paths (Read only if needed)
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
