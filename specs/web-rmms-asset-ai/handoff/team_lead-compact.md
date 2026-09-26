# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:01:00.000Z
taskId: task_d405f168
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: confirm

## Decisions
- formPattern: Mobile full ≤430 · detect + HITL · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / assetAi.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-asset-ai · mfeStdUrl http://localhost:9301/web-rmms-asset-ai · native cite /asset/ai + hitl/{id}
- be: Mobile.Bff :5202 mobile-bff/api/v1 · AiVision · cấm ERP.* · cấm invent AssetAiController · Step 4b skip
- T-01 route+AA-00 · T-02 detect fields+GPS Acc≤30 · T-03 nearby+detect→HITL · T-04 HITL pin/score/confirm/dismiss · T-05 BFF wire+DES-LEAVE+parity · T-BE N/A
- Detect: photo* GPS RouteId* · no auto-confirm · HITL score SHOW RO · pin local
- DES-GRID: N/A phone · demo N/A
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| navBack | Button/Nav | T-01 |
| photo/gps/route/trip | Photo/Text/Select | T-02 |
| nearbyWarn | Alert | T-03 |
| detect/cancel | Button | T-03 |
| hitl fields/pin/score | Text/MapPin | T-04 |
| confirm/dismiss | Button | T-04 |

## Screens / zones
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08 · AA-09 · AA-10 · AA-11 · AA-12 · AA-13 · AA-14
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-ai

## API / tasks
- FormMode↔API: Detect Create Draft · HITL Confirm|Dismiss
- T-01…T-05 pending · T-BE N/A · devSlash=/agent-dev

## UNCLEAR
- (none blocking)

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/task/web-rmms-asset-ai.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
