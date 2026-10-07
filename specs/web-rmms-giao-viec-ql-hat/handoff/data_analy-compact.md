# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-giao-viec-ql-hat
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:25:00.000Z
contentHash: sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7
taskId: task_46b5e132

## Decisions
- changeScope: edit_page · cấm new_page · cấm route public mới
- deltaCite: docs/plan/web-rmms-mobile/PLAN-3-VAI.md § enqueue #8
- formPattern: Mobile full 430 · DES-MOB-INC-DETAIL · N/A ERP Modal
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-giao-viec-ql-hat
- be: D:/AI-QLBD/Linm.RMMS.WebService · Incident+Maintenance (+Patrol/Integration/Auth) · cấm ERP.*
- bff: Linm.RMMS.Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff
- demo: N/A
- Delta: CTA+form giao chỉ QL_HAT (HAT-TRUONG/HAT-PHO) · list mọi sự cố/báo cáo · cấm filter người tạo · hạng mục→hạn TT41 editable · cấm SLA 24h · cấm tiền Mục IV · cấm MANAGER-RMMS suy giao · cấm iOS/Android
- OUT: Excel · invent giao-viec controller · chấm 100 · Hoàn thành hộ

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| assignCta | Giao việc xử lý | Button gated | qlHat only · GV-D-INC/RPT |
| assignee | người nhận | SearchInput | users · required |
| team | đơn vị | SearchInput | bảo dưỡng |
| hangMuc | hạng mục | Search/Dropdown | trigger due hint |
| dueAt | hạn | DateTime | TT41 gợi ý · editable · cấm SlaHours=24 |
| note | ghi chú | TextArea | optional |
| submitAssign | Giao | Button | POST work-orders (+ assign cite) |
| list.* | danh sách | CardList | unscoped · no creator filter |

## Screens / zones (ids only)
- GV-00 · GV-L-INC · GV-L-RPT · GV-D-INC · GV-D-RPT · GV-F · GV-W
- reviewUrl= (Design next)
- peerStdUrl= http://localhost:9301/web-rmms-giao-viec-ql-hat
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: GET incidents/history · POST maintenance/work-orders · optional incident assign · GET users · GET auth/profile
- real-data §A+§B: PASS
- T-*: edit CTA gate + form due hint + list unscoped (PO/TL)

## UNCLEAR
- GAP-GV-DM-01: DOMAIN-MAP thiếu slug
- UNCLEAR-GV-RPT-ROUTE: path detail báo cáo ca / assign-from-report
- UNCLEAR-GV-SLA-MAP: DueAt ↔ bỏ SlaHours=24
- UNCLEAR-GV-HANGMUC-CAT: static PLAN vs BE lookup
- DEP-GV-ROLE: web-rmms-role-gate caps

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-giao-viec-ql-hat-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-giao-viec-ql-hat-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-giao-viec-ql-hat.md
- plan: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/PLAN-3-VAI.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/STATUS.md
