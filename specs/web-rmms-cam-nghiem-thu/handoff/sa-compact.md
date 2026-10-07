# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-cam-nghiem-thu
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T02:30:00.000Z
contentHash: sha256:c4e8a1b9d2f57306e8a0c1d4b7f9e2a5c8d0f3b6a9e1c4d7f0b2e5a8c1d4f7b0
taskId: task_bbcbf513
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · cấm new_page · cấm route mới · cấm CamNghiemThu*
- DOMAIN-MAP: bind peer `nghiem-thu` / `web-rmms-nghiem-thu` · **không** slug mới
- domain: Patrol · resource `nghiem-thu` · reuse `NghiemThuController` · entity `rmms_nghiem_thu`
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · cấm web-bff · cấm ERP.*
- FormMode↔API: GET list/init/GET{id}/POST/PUT keep · files · routes/users keep
- Delta: roleCaps.nghiemThu gate · hide Tạo · NT-RO-LINK · Pattern B keep
- Role source: cite `web-rmms-role-gate` · seed NGHIEM-THU · QL_HAT=HAT-* only
- RO deep-link: `/tuan-duong` + `/phat-hien`(+filter đạt) · GET sessions/findings RO · cấm recheck/assign
- productRoute: /nghiem-thu · /moi · /:id · mfeStdUrl alias only
- migration/Step 4b: **none** · skip @ SA
- cấm: Giao việc · Xác nhận SC · Mục IV · SlaHours=24 · fake GPS · invent API
- solution_confirm: approve (autoApprove)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| photos | RouteCapture | NT write only |
| gps | GPS+Banner | Pattern B |
| templateType/route/assignee/scores | Select+Search+Checklist | keep Live |
| save | Button | roleCaps.nghiemThu |
| btnCreate | Button | hide non-NT |
| cards | List | GET nghiem-thu |
| linkRo | Nav RO | /tuan-duong · /phat-hien |
| roleCaps | Hidden | auth/profile |
| assignCta/confirmSc | — | CẤM |

## Screens / zones (ids only)
- NT-L · NT-F · NT-RO-LINK · NT-leave · roleGateBanner
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/ui/prototype/index.html
- peerStd deep-link= /nghiem-thu/moi
- DES-GRID: N/A phone

## API / tasks (ids only)
- API-01…06 keep peer nghiem-thu CRUD+files+lookups
- API-07 GET auth/profile(+roleCaps) cite role-gate
- API-08 GET patrol/sessions RO → /tuan-duong
- API-09 GET patrol/findings (đạt) RO → /phat-hien
- T-*: edit NghiemThu* role-gate + hide create + RO links · no new API/entity
- next: /agent-team-lead

## UNCLEAR
- UNCLEAR-NT-DOMAIN-ROW: RESOLVED (bind nghiem-thu peer)
- UNCLEAR-NT-ROLE-SOURCE: RESOLVED (deps role-gate · roleCaps.nghiemThu)
- UNCLEAR-NT-RO-LINKS: RESOLVED (/tuan-duong · /phat-hien filter đạt)
- CTX / LIST-VIS: RESOLVED prior

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/be/solution-discovery.md
- design-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/handoff/design-compact.md
- po-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/handoff/po-compact.md
- data_analy-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-nghiem-thu/STATUS.md
