# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T07:55:00.000Z
contentHash: sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773

## Decisions
- changeScope: edit_page
- packKind: list · confirmed
- formPattern: Mobile full (phone max-width 430) · N/A ERP Modal/Slideout · DES-GRID N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-b
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · cấm ERP.*
- demo: N/A · hash skip analy · no re-scan
- wave B: TD-04 sổ · TD-05 dòng · API Mới journal-lines
- HARD: Schema_PatrolJournalLine + entity pair trước form
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation · deny blocks TD-05 save · cấm fake coords
- check-in ≠ journal list
- out of B: TD-06 · TK-02…07 · WO/scope đợt D
- open questions: UNCLEAR-JL-PATH · UNCLEAR-JL-SCHEMA · UNCLEAR-LRS · UNCLEAR-WEATHER → SA/Design

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
- TD-04 · TD-05
- Leave: TD-04↔TD-05 · Back→TD-01 · Save→TD-04
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-mobile-b
- DES-GRID / LinErpListFilterBar: N/A phone

## List AC (ids)
- L-01 empty · L-02 data cards · L-03 no check-in · L-04 tap · L-05 no session · L-06 no mock
- F-01 GPS deny · F-02 narrative · F-03 POST/PUT · F-04 labels · F-05 report TK · F-06 violation · F-07 out D

## API / tasks (ids only)
- FormMode↔API: GET …/journal-lines · POST/PUT journal-lines · parent GET sessions/{id}
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-JL-PATH: POST nested vs top-level
- UNCLEAR-JL-SCHEMA: Schema_PatrolJournalLine chưa Live
- UNCLEAR-LRS: kmText tay
- UNCLEAR-WEATHER: GAP-TD-WEATHER-01

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
