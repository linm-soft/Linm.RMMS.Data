# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:20:00.000Z
taskId: task_38806eff
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile full ≤430 · detect + HITL · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / assetAi.*
- domain: AiVision (`ai-vision`) · DOMAIN-MAP row `web-rmms-asset-ai` added · UNCLEAR-DOMAIN-MAP-AAI resolved
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-asset-ai` · mfeStdUrl http://localhost:9301/web-rmms-asset-ai · native cite `/asset/ai` + `/asset/ai/hitl/{id}`
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` · cấm ERP.* · cấm invent AssetAiController · cấm auto-confirm
- Live: uploads init+PUT · detect-assets · nearby · sessions · road-routes/search · candidates/{id} · confirm · dismiss
- API Mới / entity / migration: **none** · Step 4b skip
- HITL in-scope · score SHOW RO % · no gate (Design)
- REMOVED: me* / feedback / cam-view · collect/adjust/list · Field a…e
- labels: useFormOptions() · cấm hardcode VN · GPS Acc≤30 · cấm fake
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| navBack | Button/Nav | nav Hub `/asset` |
| photo | PhotoRow | POST ai-vision/uploads/init + PUT |
| gps | Text RO | geolocation → Lat/Lng/AccuracyM |
| route/trip | Select | GET integration/road-routes/search · GET patrol/sessions |
| nearbyWarn | Alert | GET ai-vision/asset-candidates/nearby |
| detect/cancel | Button | POST detect-assets · Hub |
| hitl fields/pin/score | Text/MapPin | candidates/{id} · score SHOW · pin local |
| confirm/dismiss | Button | POST …/confirm · POST …/dismiss |

## Screens / zones
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08 · AA-09 · AA-10 · AA-11 · AA-12 · AA-13 · AA-14
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-ai
- DES-GRID: N/A phone

## API / tasks
- FormMode↔API: Detect Create Draft · HITL Confirm|Dismiss
- BFF vs API: Mobile.Bff only · reuse AiVision · no AssetAi controller
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none blocking) DOMAIN-MAP-AAI resolved · HITL-SPLIT/SCORE/STD-ROUTE Design chốt

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
