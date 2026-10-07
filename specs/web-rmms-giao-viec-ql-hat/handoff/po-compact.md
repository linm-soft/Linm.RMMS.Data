# Handoff compact — po

schemaVersion: 1
feature: web-rmms-giao-viec-ql-hat
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:28:00.000Z
contentHash: sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7
taskId: task_afd19ed3
autoApprove: true

## Decisions
- changeScope: edit_page · cấm new_page · cấm route public mới
- packKind: list (confirm) · DES-GRID/LinErpListFilterBar: N/A phone
- formPattern: Mobile full 430 · DES-MOB-INC-DETAIL
- CTA/form giao: chỉ QL_HAT (HAT-TRUONG/HAT-PHO) · cấm MANAGER-RMMS suy giao
- dueAt: gợi ý TT41 Phụ lục IV · editable · cấm SlaHours=24 default
- list: mọi sự cố+báo cáo · cấm filter creator
- OUT: Excel · Mục IV tiền · Hoàn thành hộ · invent giao-viec · web-bff · ERP.* · iOS/Android
- PO-DEC-01: hangMuc→hạn = client static PLAN (MVP)
- PO-DEC-02: DueAt absolute · SlaHours null|derive (SA)
- PO-DEC-03: giữ RPT path shipped · cấm invent
- PO-DEC-04: SA DOMAIN-MAP row slug
- PO-DEC-05: dep web-rmms-role-gate roleCaps.qlHat
- demo: N/A · mfeStdUrl http://localhost:9301/web-rmms-giao-viec-ql-hat

## Inventory (slim)
| id | controlHint | AC |
|----|-------------|-----|
| assignCta | Button gated | qlHat only |
| assignee | SearchInput | required users |
| team | SearchInput | bảo dưỡng |
| hangMuc | Search/Dropdown | trigger due hint |
| dueAt | DateTime | TT41 hint · editable |
| note | TextArea | optional |
| submitAssign | Button | POST WO (+assign) |
| list.* | CardList | unscoped · no creator |

## Screens / Leave
- Screens: GV-00 · GV-L-INC · GV-L-RPT · GV-D-INC · GV-D-RPT · GV-F · GV-W
- Leave: submit→/cong-viec · cancel discard · non-qlHat deny · error toast
- reviewUrl= (Design next)
- peerStdUrl= http://localhost:9301/web-rmms-giao-viec-ql-hat

## API / tasks
- GET incidents · patrol history · POST work-orders · optional assign · users · auth/profile
- T-*: CTA gate · form due · list unscoped (TL/Dev)
- e2eQa: ON queued /agent-qa*

## UNCLEAR → owned
- GAP-GV-DM-01 → SA (PO-DEC-04)
- UNCLEAR-GV-RPT-ROUTE → Design+SA (PO-DEC-03)
- UNCLEAR-GV-SLA-MAP → SA (PO-DEC-02)
- UNCLEAR-GV-HANGMUC-CAT → Design map options (PO-DEC-01)
- DEP-GV-ROLE → role-gate (PO-DEC-05)

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-giao-viec-ql-hat-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-giao-viec-ql-hat-real-data.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/STATUS.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-giao-viec-ql-hat.md
