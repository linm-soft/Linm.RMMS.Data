# Handoff compact — data_analy

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-19T15:29:13.000Z
changeScope: edit_page
contentHash: sha256:a635f3f55a8bedd952c4449056cf072a8eda890eda2b30a45e84bda5d7bf3859

## Decisions
- changeScope: edit_page · NEW task `task_1bd5874a` · keep web PO/Design/SA confirmed
- formPattern: N/A on list · create/detail = sibling sheets · web Full page kept
- packKind: list · demo `#sc-nghiem-thu` · `DES-MOB-NGHIEM-THU` · hub `#row-nghiem-thu`
- mfe / be: web Field done · BE `api/v1/patrol/nghiem-thu` live · Mobile.Bff catch-all proxy · **cấm ERP.***
- real-data §A+§B: yes · sameMobile=yes · **cấm** demoItems SSOT
- open questions: none (web TMPL/STATUS/DOMAIN/API CLOSED)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm mẫu nghiệm thu… | SearchField | ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Mẫu · tuyến · Km | Text | TemplateType·Route·KmFrom |
| rowStatus | Nháp/Đang NT/Hoàn thành/Hủy | Badge | init-data |
| navCreate | Tạo | TextButton | → nghiem-thu-create |
| rowTap | Chi tiết | ListRow | → nghiem-thu-detail + Id |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · `#row-nghiem-thu`
- siblings: `#sc-nghiem-thu-create` · detail (pending_confirm)
- peerStdUrl= http://localhost:9304/patrol (web clone ref only)
- reviewUrl= (Design mobile sau PO)

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu` · init-data · **cấm invent**
- Files: create/detail only · FileService guid
- Siblings: nghiem-thu-create · nghiem-thu-detail = pending_confirm · **cấm** start

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-control-hint.md`
- real-data: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-real-data.md`
- bff: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-bff-endpoints.md`
- action-tree: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-action-tree.md`
- context: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/nghiem-thu.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md`
