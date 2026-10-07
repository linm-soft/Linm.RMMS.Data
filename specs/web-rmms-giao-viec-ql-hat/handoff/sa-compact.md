# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-giao-viec-ql-hat
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-10-01T03:35:00.000Z
contentHash: sha256:96af983c06df39ae72f23cd8bca1d51b7851c175d5d43f1a62d1fea87673ecb7
taskId: task_aac1513f
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · cấm new_page · cấm invent route/giao-viec/*
- primaryDomain: Maintenance · kebab maintenance · POST work-orders Live
- cite: Incident list/detail(+optional assign) · Patrol history/detail · Integration users · Auth profile roleCaps.qlHat
- bff: Mobile.Bff :5202 mobile-bff/api/v1 · cấm web-bff · cấm ERP.*
- SA-DEC-01: DueAt absolute required · SlaHours omit/null · else derive from DueAt · cấm default 24
- SA-DEC-02: DOMAIN-MAP row Maintenance (GAP-GV-DM-01 closed)
- SA-DEC-03: RPT Design PO-DEC-03 · lich-su + /:sessionId + ?reportId=mode=assign
- SA-DEC-04: hangMuc client static TT41 · no BE MVP
- SA-DEC-05: gate roleCaps.qlHat · dep web-rmms-role-gate · cấm MANAGER-RMMS
- SA-DEC-06: migration skip · reuse CreateWorkOrderRequest
- OUT: Excel · Mục IV tiền · Hoàn thành hộ · invent API · demo-json
- demo: N/A · mfeStdUrl http://localhost:9301/web-rmms-giao-viec-ql-hat
- next: /agent-team-lead · roleOnly stop

## Inventory (slim)
| id | controlHint | API bind |
|----|-------------|----------|
| assignCta | Button gated | profile/roleCaps.qlHat |
| assignee | SearchInput | GET integration users |
| team | SearchInput | partner/org Live |
| hangMuc | Dropdown | client TT41 static |
| dueAt | DateTime | write DueAt · SA-DEC-01 |
| note | TextArea | Description/Note |
| submitAssign | Button | POST maintenance/work-orders |
| list.* | CardList | GET incidents · patrol history · no creator |

## Screens / zones (ids only)
- GV-00 · GV-L-INC · GV-L-RPT · GV-D-INC · GV-D-RPT · GV-F · GV-W · DES-LEAVE · TOAST
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-giao-viec-ql-hat
- DES-GRID / LinErpListFilterBar: N/A

## API / tasks (ids only)
- FormMode↔API: GET incidents · patrol · POST work-orders · opt assign · users · auth/profile
- T-GV-01 CTA gate · T-GV-02 GV-F DueAt · T-GV-03 list unscoped · T-GV-04 leave/nav · T-GV-05 DOMAIN-MAP verify
- e2eQa: ON queued /agent-qa*
- UNCLEAR: none open (GAP-GV-DM-01 · SLA · RPT · hangMuc · ROLE closed)

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-giao-viec-ql-hat-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-giao-viec-ql-hat/STATUS.md
