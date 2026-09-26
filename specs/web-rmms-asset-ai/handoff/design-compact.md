# Handoff compact — design

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:10:00.000Z
taskId: task_c4a5e35d
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full ≤430 · detect + HITL · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / assetAi.* · cấm hardcode VN
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-ai
- mfeStdRoute: /web-rmms-asset-ai · nativeRouteCite SCREENS /asset/ai + /asset/ai/hitl/{id} · alias nếu shell
- be: D:/AI-QLBD/Linm.RMMS.WebService · AiVision (+Asset/Integration/Patrol) · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Detect: photo* GPS Acc≤30 RouteId* · trip opt · nearby opt · POST detect → Draft → HITL · cấm auto-confirm
- HITL: confirm + dismiss · pin drag local · score SHOW RO % · no gate
- DES-LEAVE: in-app discard · cấm native confirm
- REMOVED: me* / feedback / cam-view · collect/adjust/list · Field a…e
- UNCLEAR-SCORE-01: Design chốt ship SHOW score %
- UNCLEAR-STD-ROUTE: Design chốt mfeStdRoute=/web-rmms-asset-ai
- UNCLEAR-HITL-SPLIT: HITL in-scope this slug
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| photo/gps/route/trip | fields | Photo/Text/Select | DetectAssetsRequest |
| nearbyWarn | warn | Alert | optional GET nearby |
| detect/cancel | CTA | Button | POST detect · Hub |
| hitl fields/pin/score | HITL | Text/MapPin | Draft · score SHOW · local drag |
| confirm/dismiss | CTA | Button | POST confirm|dismiss |

## Screens / zones (ids only)
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08 · AA-09 · AA-10 · AA-11 · AA-12 · AA-13 · AA-14
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-ai
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: uploads init+PUT · detect-assets · nearby · sessions · road-routes/search · confirm · dismiss
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-AAI: SA add DOMAIN-MAP row web-rmms-asset-ai · AiVision
- UNCLEAR-HITL-SPLIT: Design chốt HITL in-scope
- UNCLEAR-SCORE-01: Design chốt SHOW score RO %
- UNCLEAR-STD-ROUTE: Design chốt mfeStdRoute=/web-rmms-asset-ai · alias /asset/ai if shell

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
