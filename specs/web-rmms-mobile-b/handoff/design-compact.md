# Handoff compact — design

schemaVersion: 1
feature: web-rmms-mobile-b
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T07:08:00.000Z
taskId: task_3d7eae05
contentHash: sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · editTask=1 · keep prior prototype · § Delta only
- formPattern: Full (TD-04 list · TD-05 create/edit) · phone 430 · LeaveConfirmModal · N/A ERP Modal/Slideout
- Pattern B: Lưu always on except saving/hydrating · GPS/narrative banner string[] + inline on-click · cấm alert.warning · cấm disabled=!canSave
- capture: mediaIds → capture=environment · cấm fork package
- transport: mobileApiBase()/VITE_MOBILE_API_URL only · cấm web-bff · cấm ERP.*
- align: /align-mobile-to-mfe · 430 · no new tab/route/icon · no android/ios proto
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone · no Excel
- Report AC: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-mobile-b
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol+Auth+Files
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- wave B KEEP: TD-04 sổ · TD-05 dòng · Live journal-lines · check-in ≠ list
- out of B: TD-06 · TK-02…07 · WO/scope đợt D
- labels: useFormOptions() · cấm hardcode VN
- deltaCite: docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md · slug B
- open questions: UNCLEAR-CAPTURE-PROP → Dev · UNCLEAR-BANNER-KEYS → prefer existing keys · UNCLEAR-LRS KEEP
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| journalList | sổ dòng | List cards | GET sessions/{id}/journal-lines |
| at | giờ | DateTime | |
| userName | người | Text RO | auth/profile |
| lat/lng/accuracyM | GPS | GPS | banner+inline on submit |
| kmText | lý trình | Text | GAP-TD-LRS-01 |
| direction | chiều | Dropdown | default ca Note |
| weather | thời tiết | Dropdown | 6 keys |
| kind | loại | Radio/Dropdown | 9 keys |
| narrative | diễn biến | TextArea | required · on-submit |
| mediaIds | ảnh | FileMulti | files/* · capture=env |
| onSiteAction/Result | xử lý tại chỗ | Toggle+Text | |
| reportedTo/At | báo tuần kiểm | Button+DateTime | no TK-03 |
| violationFlag | đề nghị BB | Button | if hanh-lang |
| status | trạng thái | Dropdown | 4 keys |
| save | Lưu | Button | disable only saving |
| validationBanner | banner | Banner | zone banner · string[] |

## Screens / zones (ids only)
- TD-04 · TD-05 · TD-05g (validationAttempted) · DES-LEAVE · banner
- Pattern: Full · tabs: none · Leave: § DES-LEAVE · Pattern B submit
- Grid AC: N/A/WAIVE · Report AC: N/A
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-mobile-b
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## List AC (ids)
- L-01…L-06 KEEP · F-01/02 Pattern B · F-03 save gate · F-04 API · F-05 labels · F-06 TK · F-07 violation · F-08 out D · F-09 capture · F-10 mobileApiBase · F-11 Leave

## API / tasks (ids only)
- FormMode↔API: GET …/journal-lines · POST/PUT journal-lines · parent GET sessions/{id} · mobileApiBase · files · auth/profile
- real-data §A+§B: PASS · delta gaps PATTERN-B/CAPTURE/BFF/ALIGN
- T-*: prior done · T-DELTA-* pending (STATUS) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-CAPTURE-PROP → Dev (prop vs local input)
- UNCLEAR-BANNER-KEYS → prefer useFormOptions/existing keys
- UNCLEAR-LRS → kmText tay KEEP

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-mobile-b-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/STATUS.md
- delta: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md
