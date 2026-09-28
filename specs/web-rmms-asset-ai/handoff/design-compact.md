# Handoff compact — design

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: design
status: confirmed
changeScope: edit_page
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:20:00.000Z
taskId: task_6344a6ae
contentHash: sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: edit_page · cấm typed CRUD new_page · cấm Excel
- Delta: Pattern B detect (drop !canDetect) · SearchInput route no seed miss=-- · GPS deny không khóa CTA · keep HITL busy-only · score SHOW %
- formPattern: Mobile 430 · Pattern B · SearchInput · no ERP Modal · /erp-form-context labels
- Grid AC / DES-GRID / DES-RPT / LinErpListFilterBar: N/A phone
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/tai-san/ai · mfeStdUrl http://localhost:9301/tai-san/ai
- nativeRouteCite: /asset/ai + /asset/ai/hitl/{id}
- be: AiVision (+Asset/Integration/Patrol) · Mobile.Bff · cấm ERP.* · cấm web-bff
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- DES-LEAVE: in-app discard · cấm native confirm
- REMOVED: me* · feedback · cam-view · collect/adjust · disabled={!canDetect}
- UNCLEAR-SCORE-01: Design chốt SHOW score RO %
- UNCLEAR-HITL-SPLIT: Design chốt HITL in-scope
- UNCLEAR-STD-ROUTE: resolved /tai-san/ai
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| photo/gps/route/trip | fields | Photo/Text/SearchInput/Select | Pattern B · SearchInput live |
| nearbyWarn | warn | Alert | optional |
| detect/cancel | CTA | Button | Pattern B · chỉ disable detecting |
| hitl fields/pin/score | HITL | Text/MapPin | Draft · score SHOW · local drag |
| confirm/dismiss | CTA | Button | busy-only |

## Screens / zones (ids only)
- AA-00…AA-14
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/tai-san/ai
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: uploads · detect-assets · nearby · sessions · road-routes/search · confirm · dismiss
- real-data §A+§B: PASS · T-EDIT: Pattern B + SearchInput · T-QA queued

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-AAI: SA row AiVision
- UNCLEAR-HITL-SPLIT: Design chốt HITL in-scope
- UNCLEAR-SCORE-01: Design chốt SHOW score RO %

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
