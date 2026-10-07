# Handoff compact — po

schemaVersion: 1
feature: web-rmms-cam-nghiem-thu
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:25:00.000Z
contentHash: sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0
taskId: task_131a0d3f

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- packKind: list confirmed · Report AC N/A · DES-GRID N/A phone
- Goal: role-gate nghiệm thu write + capture · hide Tạo non-NT · RO links · giữ cấm giao/hoàn thành SC
- productRoute: /nghiem-thu · /nghiem-thu/moi · /nghiem-thu/:id
- mfeStdUrl alias: http://localhost:9301/web-rmms-cam-nghiem-thu · deep-link product
- Pattern B GPS · cấm fake · cấm pre-disable Lưu
- QL_HAT = HAT-TRUONG + HAT-PHO · cấm suy MANAGER-RMMS
- LIST-VIS: NT full+Tạo · tuần đường ẩn list · tuần kiểm/QL_HAT RO tối thiểu · không Tạo
- CTX: created docs/context/features/web-rmms-cam-nghiem-thu.md
- cấm: Mục IV · SlaHours=24 · Excel · CamNghiemThu* · web-bff · ERP.* · iOS/Android
- autoApprove: ON · e2eQa queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| photos | ảnh | RouteCapture | NT write only |
| gps | định vị | GPS+Banner | Pattern B |
| templateType | mẫu | Select | mau-01…10 |
| route | tuyến | SearchInput | ROAD_ROUTE |
| fieldInfo | hiện trường | Text | required |
| assignee | người NT | SearchInput | users |
| resultCode | kết quả | Select | pass/fail/deduct |
| scores | hạng mục | Checklist | Đạt/KĐạt/N/A |
| save | Lưu | Button | role NT · Pattern B |
| btnCreate | Tạo | Button | ẩn non-NT |
| cards | list | List | GET nghiem-thu |
| linkRo | đối chiếu | Nav RO | ca + finding đạt |
| assignCta | Giao việc | — | CẤM |
| confirmSc | Xác nhận SC | — | CẤM |
| roleCaps | quyền | Hidden | role-gate |

## Screens / zones (ids only)
- NT-L · NT-F · NT-RO-LINK · NT-leave
- reviewUrl= (Design) prototype keep list/form
- peerStd deep-link= /nghiem-thu/moi
- DES-GRID / LinErpListFilterBar: N/A phone

## Grid AC (ids)
- AC-G-01…11 Live list · hide Tạo · phone 430 · product route
- AC-F-01…17 form keep + role write + RO links + Pattern B + leaveConfirm
- Report AC: N/A

## API / tasks (ids only)
- FormMode↔API: GET list · init · GET{id} · POST/PUT · files · routes/users
- findings/sessions: RO cite only
- T-*: edit NghiemThu* role-gate + hide create + RO links (PLAN #6)

## UNCLEAR
- UNCLEAR-NT-CTX: RESOLVED (CTX created)
- UNCLEAR-NT-LIST-VIS: RESOLVED (NT full; tuần đường ẩn; TK/QL_HAT RO)
- UNCLEAR-NT-DOMAIN-ROW: OPEN → SA
- UNCLEAR-NT-ROLE-SOURCE: OPEN → deps role-gate
- UNCLEAR-NT-RO-LINKS: OPEN → Design/Dev

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/po/requirement.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-cam-nghiem-thu.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/handoff/data_analy-compact.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-nghiem-thu-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-nghiem-thu-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/STATUS.md
