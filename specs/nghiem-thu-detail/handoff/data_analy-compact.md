# Handoff compact — data_analy

schemaVersion: 1
feature: nghiem-thu-detail
packKind: sheet
role: data_analy
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-19T18:55:00.000Z
changeScope: edit_page
contentHash: sha256:250aebcbfb9a445c517a0c40f399fee82a5a00d524499e7310fd7feac0fb5380

## Decisions
- changeScope: edit_page · task `task_edea0c3a` · **cấm** new_page typed CRUD
- formPattern: sheet→screen `#sc-nghiem-thu-detail` · `DES-MOB-NGHIEM-THU-DETAIL` · Design gen (demo = row toast)
- packKind: sheet · entry list row `#sc-nghiem-thu`
- Label: value `mau-01`…`10` giữ · display MAU-10 TT 41 PL IV Mẫu 01 §1.2.1 · **cấm** «Mẫu nghiệm thu NN»
- scores: `ResultCode` pass/fail/deduct + `ResultNote` + `scores[]` criteria init-data
- mfe / be: native · BE `api/v1/patrol/nghiem-thu/{id}` live · Mobile.Bff catch-all + `files/*` · Schema_NghiemThuMau live · **cấm ERP.*** · **cấm** invent detail / `files-nt`
- real-data §A+§B: yes · sameMobile=yes · mở=`GET` · Lưu=`PUT` · mediaIds guid
- open questions: none (GAP-MOB-NT-DETAIL-01 = Design screen · DELETE OUT P1)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| templateRow | Mẫu | Select LOOKUP_STATIC | TemplateLabel MAU-10 |
| resultRow | Kết quả | Select | pass/fail/deduct |
| resultNote | Ghi chú kết quả | Text | ResultNote |
| scoreList | Tiêu chí | Checklist | scores[] · n_a |
| routeRow/kmRow/fieldRow | Tuyến · Km · Hiện trường | ListRow+GPS | Route · Km · FieldInfo |
| attachRow | Đính kèm | PhotoRow/files | MediaIds max 10 |
| navSave | Lưu | TextButton | PUT · cùng slug |
| navClose | Đóng | BackButton | → nghiem-thu |
| statusRow | Trạng thái | Select | done ⇒ ResultCode |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU-DETAIL · `#sc-nghiem-thu-detail` (Design · chưa HTML)
- parent `#sc-nghiem-thu` · sibling `#sc-nghiem-thu-create`
- peerStdUrl= (web `/nghiem-thu/:id` ref only · **cấm** mfeStdUrl native)
- reviewUrl= (Design mobile sau PO)

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu/{id}`
- GET `mobile-bff/api/v1/patrol/nghiem-thu/init-data`
- PUT `mobile-bff/api/v1/patrol/nghiem-thu/{id}` · UpdateNghiemThuRequest
- files `mobile-bff/api/v1/files/*`
- **cấm** enqueue Lưu/files/scores · **cấm** start list/create · DELETE OUT · Step 4b SKIP

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-detail-control-hint.md`
- real-data: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-detail-real-data.md`
- bff: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-detail-bff-endpoints.md`
- action-tree: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-detail-action-tree.md`
- context: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/nghiem-thu-detail.md`
- plan: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/plan/nghiem-thu-mau/README.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu-detail/STATUS.md`
