# Handoff compact — po

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T07:05:00.000Z
contentHash: sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e
taskId: task_91e15981

## Decisions
- changeScope: edit_page · editTask=1 · keep prior PO/Design · § Delta only
- formPattern: Mobile Full (TD-04/05) · N/A ERP Modal · DES-GRID N/A/WAIVE · no Excel
- packKind: list (phone) · Report N/A
- Leave: LeaveConfirmModal on TD-05 dirty · cấm native alert/confirm
- Pattern B: JournalFormPage Lưu always on except saving/hydrating · GPS/narrative banner+inline on-click · cấm alert.warning · cấm disabled=!canSave
- capture: LinImageUpload/input → capture=environment · cấm fork package
- transport: mobileApiBase()/VITE_MOBILE_API_URL only · users forward nếu thiếu · road-routes KEEP · cấm web-bff · cấm ERP.*
- align: /align-mobile-to-mfe · 430px · no new tab/route/icon · no android/ios proto
- wave B KEEP: TD-04 sổ · TD-05 dòng · Live journal-lines · check-in ≠ list
- out of B: TD-06 · TK-02…07 · WO/scope đợt D
- labels: useFormOptions() · cấm hardcode VN
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · slug B
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-b
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files
- autoApprove: ON · e2eQa queued QA
- open questions: UNCLEAR-CAPTURE-PROP → Dev · UNCLEAR-BANNER-KEYS → prefer existing keys · UNCLEAR-LRS KEEP

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
- Pattern: Full · tabs: none · Leave: §9 · banner zone TD-05
- Grid AC: N/A/WAIVE · Report AC: N/A
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-b
- Design: keep prototype · patch TD-05 Pattern B + capture + banner

## List AC (ids)
- L-01…L-06 KEEP · F-01/02 Pattern B · F-03 save gate · F-04 API · F-05 labels · F-06 TK · F-07 violation · F-08 out D · F-09 capture · F-10 mobileApiBase · F-11 Leave

## API / tasks (ids only)
- FormMode↔API: GET …/journal-lines · POST/PUT journal-lines · parent GET sessions/{id} · mobileApiBase · files · auth/profile
- real-data §A+§B: PASS · delta gaps PATTERN-B/CAPTURE/BFF/ALIGN
- T-*: prior done · TL mint delta T-DELTA-* (STATUS)

## UNCLEAR
- UNCLEAR-CAPTURE-PROP → Dev (prop vs local input)
- UNCLEAR-BANNER-KEYS → prefer useFormOptions/existing keys
- UNCLEAR-LRS → kmText tay KEEP

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
