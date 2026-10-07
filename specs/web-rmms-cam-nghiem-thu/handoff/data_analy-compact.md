# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-cam-nghiem-thu
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:20:00.000Z
contentHash: sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0
taskId: task_85003423

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- deltaCite: docs/plan/web-rmms-mobile/PLAN-3-VAI.md § enqueue #6 · § Công tác nghiệm thu · Plan #7
- forms: NghiemThuFormPage (NT-F) · NghiemThuListPage (NT-L)
- productRoute: /nghiem-thu · /nghiem-thu/moi · /nghiem-thu/:id
- mfeStdUrl alias: http://localhost:9301/web-rmms-cam-nghiem-thu (không invent product route)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · phone 430px
- be: D:/AI-QLBD/Linm.RMMS.WebService · Patrol · nghiem-thu · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff
- demo: N/A · CTX missing → PLAN+code (UNCLEAR-NT-CTX)
- Role: nghiệm thu lập phiếu + ảnh · không giao việc · không xác nhận hoàn thành sự cố / Xác nhận đạt
- QL_HAT = HAT-TRUONG + HAT-PHO · cấm suy từ MANAGER-RMMS · không giao trên NT-*
- cấm: Mục IV tiền · SlaHours=24 · iOS/Android · web-bff · Excel · invent CamNghiemThu* · chấm kỳ trên form này
- Pattern B GPS: banner on Lưu · cấm fake
- RO: link ca tuần đường + finding đã đạt · chỉ đọc
- OUT: invent product route · assign/recheck/hoàn thành SC UI · Mục IV

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | RouteCaptureControl | nghiệm thu write |
| gps | định vị | GPS + Banner | Pattern B |
| templateType | mẫu | Select | mau-01…10 init |
| route | tuyến | SearchInput | ROAD_ROUTE |
| fieldInfo | hiện trường | Text | required |
| assignee | người NT | SearchInput | users |
| resultCode | kết quả | Select | pass/fail/deduct |
| scores | hạng mục | Checklist | Đạt/KĐạt/N/A |
| save | Lưu | Button | role nghiệm thu |
| btnCreate | Tạo | Button | ẩn non-NT |
| cards | list | List | GET nghiem-thu |
| linkRo | đối chiếu | Nav RO | ca + finding đạt |
| assignCta | Giao việc | — | CẤM |
| confirmSc | Xác nhận SC | — | CẤM |
| roleCaps | quyền | Hidden | cite role-gate |

## Screens / zones (ids only)
- NT-L · NT-F · NT-RO-LINK
- reviewUrl= (Design) prototype keep list/form
- peerStd deep-link= /nghiem-thu/moi
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET list · init-data · GET{id} · POST · PUT · files cite · routes/users SearchInput
- findings/sessions: RO cite only · no recheck/assign from NT
- real-data §A+§B: PASS
- T-*: edit NghiemThu* role-gate + hide create + RO links (cite PLAN #6)

## UNCLEAR
- UNCLEAR-NT-CTX: CTX file missing — PO create hoặc accept PLAN+code
- UNCLEAR-NT-DOMAIN-ROW: SA add DOMAIN-MAP slug hoặc bind peer web-rmms-nghiem-thu
- UNCLEAR-NT-ROLE-SOURCE: deps web-rmms-role-gate
- UNCLEAR-NT-RO-LINKS: Design/Dev zone link RO
- UNCLEAR-NT-LIST-VIS: PO chốt visibility list cho non-NT

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-nghiem-thu-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-nghiem-thu-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-nghiem-thu.md (MISSING)
- plan: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/PLAN-3-VAI.md
- code: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsNghiemThu/NghiemThuFormPage.tsx
- code2: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile/src/pages/WebRmmsNghiemThu/NghiemThuListPage.tsx
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/STATUS.md
