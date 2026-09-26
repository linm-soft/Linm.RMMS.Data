# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:15:00.000Z
taskId: task_e57c44e0
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
dev_confirm: approve
autoApprove: ON
changeScope: new_page
build: PASS

## Decisions
- formPattern: Mobile full ≤430 · detect + HITL · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / assetAi.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-asset-ai · hitl=/web-rmms-asset-ai/hitl/:id · alias /asset/ai(+hitl)
- mfeStdUrl: http://localhost:9301/web-rmms-asset-ai
- be: Mobile.Bff :5202 · AiVision Live · Step 4b skip · cấm invent AssetAiController · cấm ERP.*
- Detect: photo* upload Live · GPS Acc≤30 · RouteId* · trip opt · nearby · POST detect → Draft → HITL · no auto-confirm
- HITL: score SHOW RO % · pin local drag · confirm+dismiss · DES-LEAVE in-app
- yarn build PASS · chunk web-rmms-asset-ai
- next: /agent-qa · roleOnly stop · e2eQa ON (QA only)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| navBack | Button/Nav | Hub /web-rmms-asset-hub |
| photo/gps/route/trip | Photo/Text/Select | uploads · geo · road-routes · sessions |
| nearbyWarn | Alert | GET …/nearby |
| detect/cancel | Button | POST detect-assets · Hub |
| hitl fields/pin/score | Text/MapPin | GET {id} · score SHOW · pin local |
| confirm/dismiss | Button | POST confirm · dismiss |

## Screens / zones
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08 · AA-09 · AA-10 · AA-11 · AA-12 · AA-13 · AA-14
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-ai

## API / tasks
- FormMode↔API: Detect Create Draft · HITL Confirm|Dismiss
- T-01…T-05 done · T-BE N/A
- debt: pin note-only (no PUT GPS) · score no CTA gate

## UNCLEAR
- (none blocking)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/implement/web-rmms-asset-ai.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/task/web-rmms-asset-ai.md
