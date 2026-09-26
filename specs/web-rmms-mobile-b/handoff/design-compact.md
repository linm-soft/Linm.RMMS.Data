# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T08:10:00.000Z
taskId: task_839ca8ac
contentHash: sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page
- formPattern: Full (TD-04 list · TD-05 create/edit) · phone 430 · LeaveConfirmModal · N/A ERP Modal/Slideout
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone
- Report AC: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-b
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- wave B: TD-04 sổ · TD-05 dòng · API Mới journal-lines · schema-before-form
- labels: useFormOptions() · GPS deny blocks TD-05 save · cấm fake coords
- check-in ≠ journal list · out: TD-06 · TK-02…07 · WO/scope đợt D
- open questions: UNCLEAR-JL-PATH · UNCLEAR-JL-SCHEMA · UNCLEAR-LRS · UNCLEAR-WEATHER → SA
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| journalList | sổ dòng | List cards | GET sessions/{id}/journal-lines |
| at | giờ | DateTime | |
| userName | người | Text RO | auth/profile |
| lat/lng/accuracyM | GPS | GPS | TD-05 HARD deny→block |
| kmText | lý trình | Text | GAP-TD-LRS-01 |
| direction | chiều | Dropdown | default ca Note |
| weather | thời tiết | Dropdown | 6 keys |
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
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET …/journal-lines · POST/PUT journal-lines · parent GET sessions/{id}
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-JL-PATH: POST nested vs top-level → SA
- UNCLEAR-JL-SCHEMA: Schema_PatrolJournalLine chưa Live → SA
- UNCLEAR-LRS: kmText tay
- UNCLEAR-WEATHER: GAP-TD-WEATHER-01

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
