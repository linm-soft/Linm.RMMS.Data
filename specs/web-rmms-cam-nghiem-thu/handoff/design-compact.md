# Handoff compact — design

schemaVersion: 1
feature: web-rmms-cam-nghiem-thu
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:22:22.000Z
contentHash: sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0
taskId: task_d877da9e
design_confirm: approve
autoApprove: ON
real_view_parity: v1

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới
- forms: NghiemThuListPage (NT-L) · NghiemThuFormPage (NT-F)
- productRoute: /nghiem-thu · /nghiem-thu/moi · /nghiem-thu/:id
- mfeStdUrl: alias only · cấm invent product slug
- Role: nghiệm thu write+capture+Tạo · tuần đường ẩn list · TK/QL_HAT RO · không Tạo
- Pattern B GPS · leaveConfirm dirty NT-F · disabled=saving|photoBusy only
- NT-RO-LINK: RO ca tuần đường + finding đã đạt · no write/recheck/assign
- DES-GRID / LinErpListFilterBar: N/A phone
- cấm: Giao việc · Xác nhận SC · Mục IV · SlaHours=24 · Excel · ERP.* · web-bff · CamNghiemThu* · fake GPS
- reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html
- modes: ?screen=list|form|leave · ?role=nt|tk|qlhat|tuan · ?gps=deny · ?banner=1

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | NT write · RO view khác vai |
| gps | GPS+Banner | Pattern B · cấm fake |
| templateType/route/assignee | Select+SearchInput | keep peer |
| scores | Checklist | Đạt/KĐạt/N/A |
| save | Button | NT · Pattern B |
| btnCreate | Button | ẩn non-NT |
| cards | List | GET nghiem-thu |
| linkRo | Nav RO | NT-RO-LINK |
| assignCta/confirmSc | — | CẤM |
| roleCaps | Hidden | cite role-gate |

## Screens / zones (ids only)
- NT-L · NT-F · NT-RO-LINK · NT-leave · roleGateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html
- peerStd deep-link= /nghiem-thu/moi
- real_view_parity= v1

## API / tasks (ids only)
- FormMode↔API: GET list · init · GET{id} · POST/PUT · files · routes/users · sessions/findings RO
- T-*: edit NghiemThu* role-gate + hide create + RO links (PLAN #6)
- handoff SA: UNCLEAR-NT-DOMAIN-ROW · ROLE-SOURCE · RO-LINKS

## UNCLEAR
- UNCLEAR-NT-DOMAIN-ROW: SA DOMAIN-MAP slug hoặc bind peer nghiem-thu
- UNCLEAR-NT-ROLE-SOURCE: deps web-rmms-role-gate caps
- UNCLEAR-NT-RO-LINKS: SA confirm deep-link ca / finding đạt
- UNCLEAR-NT-CTX / LIST-VIS: RESOLVED

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-nghiem-thu-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-cam-nghiem-thu-real-data.md
- prior-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/STATUS.md
