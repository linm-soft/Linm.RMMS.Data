# Handoff compact — po

schemaVersion: 1
feature: nghiem-thu-create
packKind: sheet
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-19T16:55:00.000Z
taskId: task_a31ee0a5
autoApprove: ON
changeScope: new_page
contentHash: sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f

## Decisions
- changeScope: new_page · packKind **sheet** · Pattern sheet→screen `#sc-nghiem-thu-create`
- formPattern: sheet→screen · FormMode Create draft P1 · **cấm** Full list/detail trên slug
- Grid AC / Report AC: **N/A** · Leave: **Must** leave-dirty modal · fail=toast
- Lưu=`POST` draft · mediaIds guid max 10 · GPS deny reuse · **cấm** enqueue Lưu/files
- mfe / be: native dual · Mobile.Bff catch-all + files · BE Patrol live · Step 4b N/A · **cấm ERP.***
- open questions: none · GAP REQ/COPY = Design surface

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navCancel | Hủy | BackButton | → nghiem-thu · leave-dirty |
| title | Tạo nghiệm thu | TopBar title | fixed |
| navSave | Lưu | TextButton | POST draft · cùng slug |
| templateRow | Mẫu | Select LOOKUP_STATIC | mau-01…10 · init-data |
| locationRow | Vị trí | ListRow+GPS | Zone·Route·FieldInfo |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| assignee/inspectedAt | (ẩn) | derived | API required |
| toastOk/Fail | Đã lưu nháp · NT-* | Toast | **cấm** alert |
| gpsDeny | Định vị bị tắt | Modal | DES-MOB-GPS-DENY |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-CREATE · `#sc-nghiem-thu-create`
- parent `#sc-nghiem-thu` · sibling detail pending_confirm (navigate only)
- peerStdUrl= http://localhost:9304/patrol (web ref only · **cấm** mfeStdUrl native)
- reviewUrl= (Design mobile sau)
- Grid/Report AC= N/A · Leave= leave-dirty Must
- controlHint cite: `_data-analy/nghiem-thu-create-control-hint.md`
- Pattern: sheet→screen · TopBar + 3 ListRows
- devSlash: `/agent-dev-ios` + `/agent-dev-android`

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu/init-data`
- POST `mobile-bff/api/v1/patrol/nghiem-thu` · CreateNghiemThuRequest Status=draft
- files `mobile-bff/api/v1/files/*` · **cấm** invent nghiem-thu-files / nghiem-thu-create path
- T-*: Design dual proto → SA proxy keep → Dev wire dual → QA e2e-mobile

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/po/requirement.md
- control-hint: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-create-control-hint.md
- real-data: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-create-real-data.md
- prior compact: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/handoff/data_analy-compact.md
- STATUS: /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/STATUS.md
