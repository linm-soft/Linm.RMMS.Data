# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T06:55:00.000Z
contentHash: sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e
taskId: task_c25cf1eb

## Decisions
- changeScope: edit_page · editTask=1 · NEW AutocodeTask · keep PO/Design
- formPattern: Mobile full (phone max-width 430) · N/A ERP Modal/Slideout
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-b
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol + Auth + Files · cấm ERP.*
- demo: N/A · no Excel toolbar/export (SUBMIT override)
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · slug web-rmms-mobile-b
- Pattern B: JournalFormPage Lưu luôn bật trừ saving/hydrating · GPS/narrative on-click banner+inline · cấm alert.warning thay banner
- capture: LinImageUpload / input → capture=environment
- transport: mobileApiBase()/VITE_MOBILE_API_URL only · cấm web-bff · users forward nếu thiếu · road-routes/search KEEP
- align: /align-mobile-to-mfe · 430px · no new tab/route/icon · no android/ios proto
- wave B KEEP: TD-04 sổ · TD-05 dòng · Live journal-lines · check-in ≠ list
- out of B: TD-06 · TK-02…07 · WO/scope đợt D
- real-data §A+§B: PASS · map: none
- open questions: UNCLEAR-CAPTURE-PROP · UNCLEAR-LRS · UNCLEAR-BANNER-KEYS

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| journalList | sổ dòng | List cards | GET sessions/{id}/journal-lines |
| at | giờ | DateTime | |
| userName | người | Text RO | auth/profile |
| lat/lng/accuracyM | GPS | GPS | banner on submit |
| kmText | lý trình | Text | GAP-TD-LRS-01 |
| direction | chiều | Dropdown | default ca Note |
| weather | thời tiết | Dropdown | 6 keys |
| kind | loại | Radio/Dropdown | 9 keys |
| narrative | diễn biến | TextArea | required · on-submit |
| mediaIds | ảnh | FileMulti | files/* · capture |
| onSiteAction/Result | xử lý tại chỗ | Toggle+Text | |
| reportedTo/At | báo tuần kiểm | Button+DateTime | no TK-03 |
| violationFlag | đề nghị BB | Button | if hanh-lang |
| status | trạng thái | Dropdown | 4 keys |
| save | Lưu | Button | disable only saving |

## Screens / zones (ids only)
- TD-04 · TD-05
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-b
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET …/journal-lines · POST/PUT journal-lines · parent GET sessions/{id} · mobileApiBase
- real-data §A+§B: PASS · delta gaps PATTERN-B/CAPTURE/BFF/ALIGN
- T-*: (team_lead from delta)

## UNCLEAR
- UNCLEAR-CAPTURE-PROP: LinImageUpload capture prop vs local input
- UNCLEAR-LRS: kmText tay · KEEP
- UNCLEAR-BANNER-KEYS: lookup keys for GPS/narrative messages

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-mobile-b.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
