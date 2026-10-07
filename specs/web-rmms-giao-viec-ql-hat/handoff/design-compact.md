# Handoff compact — design

schemaVersion: 1
feature: web-rmms-giao-viec-ql-hat
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:30:00.000Z
taskId: task_772e5a0b
contentHash: sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent product route
- formPattern: Mobile full 430 · DES-MOB-INC-DETAIL · LeaveConfirmModal · N/A ERP Modal
- DES-GRID / LinErpListFilterBar / DES-RPT: N/A phone
- CTA/form: chỉ roleCaps.qlHat (HAT-TRUONG/HAT-PHO) · cấm MANAGER-RMMS
- hangMuc: client static TT41 PLAN (PO-DEC-01) · va-o-ga/nut/lun-lom/ve-sinh/nuoc-dong/bien-bao/vach-son/ton-tai-nt
- dueAt: hint on hangMuc change · editable · cấm SlaHours=24 (PO-DEC-02→SA)
- RPT: list `/tuan-duong/lich-su` · detail `/tuan-duong/:sessionId` · assign `/cong-viec?reportId=&mode=assign` (PO-DEC-03)
- INC assign: edit `paths.workFor` → `/cong-viec?incidentId=&mode=assign` opens GV-F
- list: unscoped QL_HAT · cấm creator filter
- OUT: Excel · Mục IV tiền · Hoàn thành hộ · invent giao-viec · web-bff · ERP.* · iOS/Android
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| assignCta | Button gated | qlHat only · GV-D/L |
| assignee | SearchInput | users required |
| team | SearchInput | bảo dưỡng |
| hangMuc | Dropdown | TT41 static · due trigger |
| dueAt | DateTime | hint · editable |
| note | TextArea | optional |
| submitAssign | Button | POST WO (+assign) |
| list.* | CardList | unscoped · no creator |

## Screens / zones (ids only)
- GV-00 · GV-L-INC · GV-L-RPT · GV-D-INC · GV-D-RPT · GV-F · GV-W · DES-LEAVE · TOAST
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html
- modes=?screen=list-inc|list-rpt|detail-inc|detail-rpt|form|work · ?role=qlhat|other · ?leave=1 · ?deny=1
- peerStdUrl= http://localhost:9301/web-rmms-giao-viec-ql-hat
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET incidents · patrol history · POST work-orders · optional assign · users · auth/profile
- real-data §A+§B: PASS · A–D PASS · DES-RPT N/A
- T-*: edit CTA gate + GV-F due + list unscoped (TL/Dev)

## UNCLEAR
- GAP-GV-DM-01 → SA DOMAIN-MAP row
- UNCLEAR-GV-RPT-ROUTE: resolved Design — lich-su + /:sessionId + ?reportId=mode=assign
- UNCLEAR-GV-SLA-MAP → SA (DueAt absolute · SlaHours null|derive)
- UNCLEAR-GV-HANGMUC-CAT: resolved Design — static TT41 table §design
- DEP-GV-ROLE → role-gate caps (PO-DEC-05)

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-giao-viec-ql-hat-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-giao-viec-ql-hat-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/STATUS.md
