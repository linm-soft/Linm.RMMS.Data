# Handoff compact — data_analy

schemaVersion: 1
feature: nghiem-thu
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.31.2
writtenAt: 2026-09-20T00:39:00.000Z
changeScope: edit_page
taskId: task_b82ebc4c
contentHash: sha256:1044ba719edda88d256d5c2a780cd2293f2fab87e2a39acdbb86001fad6ff659
planCite: docs/plan/nghiem-thu-mau/{README,MAU-10,CHI-SO,SCHEMA}.md · features/nghiem-thu-mau.md

## Decisions
- changeScope: edit_page · NEW AutocodeTask `task_b82ebc4c` · keep prior PO/Design/SA/mobile ship · § Delta MAU+Result
- TemplateType value mau-01…10 GIỮ · Label = TT 41 PL IV Mẫu 01 §1.2.1 (cấm «Mẫu nghiệm thu NN»)
- P1: ResultCode pass/fail/deduct + ResultNote + scores[] criteria từ init-data — list chỉ badge ResultCode; scores owner create/detail
- Schema_NghiemThuMau pair CLI → SA · data_analy SKIP Step 4b
- Lane: native dual + Mobile.Bff catch-all + Patrol path · FileService mediaIds giữ · cấm files-nt · ERP.* · csdl-so-08 · kcht-cong-trinh
- Web Field /nghiem-thu OUT queue · 1 slug=1 action
- packKind: list · formPattern N/A on list
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm mẫu nghiệm thu… | SearchField | ?search= |
| rowCode | NT-* | Text | Code |
| rowSub | Label MAU-10 · tuyến · Km | Text | TemplateLabel·Route·KmFrom |
| rowStatus | Nháp/Đang NT/Hoàn thành/Hủy | Badge | Status |
| rowResult | Đạt/Không đạt/Khấu trừ | Badge | ResultCode · ẩn null |
| navCreate | Tạo | TextButton | → nghiem-thu-create |
| rowTap | Chi tiết | ListRow | → nghiem-thu-detail + Id |

## Screens / zones (ids only)
- DES-MOB-NGHIEM-THU · `#sc-nghiem-thu` · `#row-nghiem-thu`
- siblings: create/detail (scores · MAU picker) · **cấm** start trong task này
- reviewUrl= prior dual prototype · Design overlay sau PO

## API / tasks (ids only)
- GET `mobile-bff/api/v1/patrol/nghiem-thu` · init-data (MAU-10+criteria+ResultCodes) · **cấm invent**
- DTO + ResultCode · Schema_NghiemThuMau → SA
- Files: FileService guid · create/detail only

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-control-hint.md`
- real-data: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-real-data.md`
- bff: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-bff-endpoints.md`
- action-tree: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/nghiem-thu-action-tree.md`
- context: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/nghiem-thu.md`
- plan: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/plan/nghiem-thu-mau/README.md`
- STATUS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/nghiem-thu/STATUS.md`
