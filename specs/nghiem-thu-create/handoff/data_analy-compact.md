# Handoff compact — data_analy

schemaVersion: 1
feature: nghiem-thu-create
packKind: sheet
role: data_analy
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-19T16:50:00.000Z
changeScope: new_page
contentHash: sha256:c2b17a793325c8eb40cc64a98b7775db138841107cd178cd6a6aa12ba8cfa66f

## Decisions
- changeScope: new_page · task `task_eb0e541f`
- formPattern: sheet→screen `#sc-nghiem-thu-create` · `DES-MOB-NGHIEM-THU-CREATE`
- packKind: sheet · entry list nav **Tạo**
- mfe / be: native · BE `api/v1/patrol/nghiem-thu` live · Mobile.Bff catch-all + `files/*` · **cấm ERP.*** · **cấm** invent create path
- real-data §A+§B: yes · sameMobile=yes · Lưu=`POST` draft · mediaIds guid
- open questions: none (GAP REQ/COPY = Design surface)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| templateRow | Mẫu | Select LOOKUP_STATIC | mau-01…10 · init-data |
| locationRow | Vị trí | ListRow+GPS | Zone·Route·FieldInfo |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| navSave | Lưu | TextButton | POST draft · cùng slug |
| navCancel | Hủy | BackButton | → nghiem-thu |
| assignee/inspectedAt | (ẩn) | derived | API required |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-CREATE · `#sc-nghiem-thu-create`
- parent `#sc-nghiem-thu` · sibling detail pending_confirm
- peerStdUrl= (web clone ref only · **cấm** mfeStdUrl native)
- reviewUrl= (Design mobile sau PO)

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu/init-data`
- POST `mobile-bff/api/v1/patrol/nghiem-thu` · CreateNghiemThuRequest
- files `mobile-bff/api/v1/files/*`
- **cấm** enqueue Lưu/files · **cấm** start detail

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-create-control-hint.md`
- real-data: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-create-real-data.md`
- bff: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-create-bff-endpoints.md`
- action-tree: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-create-action-tree.md`
- context: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/nghiem-thu-create.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-create/STATUS.md`
