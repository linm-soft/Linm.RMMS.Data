# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: team_lead
status: confirmed
changeScope: edit_page
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:45:00.000Z
contentHash: sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c
taskId: task_d7075d83
team_lead_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page · cấm typed CRUD new_page · cấm Excel · cấm invent API
- Delta: Pattern B detect (drop !canDetect) · SearchInput route no seed miss=-- · GPS deny không khóa CTA trước · HITL busy-only · score SHOW % · no auto-confirm
- formPattern: Mobile 430 · Pattern B · SearchInput · no ERP Modal · useFormOptions assetAi.*
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/tai-san/ai · mfeStdUrl http://localhost:9301/tai-san/ai
- nativeRouteCite: /asset/ai + /asset/ai/hitl/{id} · cấm native edit
- be: AiVision · Mobile.Bff · cấm ERP.* · cấm web-bff · T-BE N/A · Step 4b skip
- demo: N/A · DES-LEAVE in-app discard
- REMOVED: me* · feedback · cam-view · collect/adjust · ROAD_ROUTE_SEED · disabled={!canDetect}
- route_confirm: confirm existing /tai-san/ai (không new URL)
- T-01…T-05 done · T-EDIT pending FE · T-QA queued · T-REV after QA
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| photo/gps/route/trip | fields | Photo/Text/SearchInput/Select | Pattern B · SearchInput Live |
| nearbyWarn | warn | Alert | optional nearby |
| detect/cancel | CTA | Button | Pattern B · chỉ disable detecting |
| hitl fields/pin/score | HITL | Text/MapPin | Draft · score SHOW · local drag |
| confirm/dismiss | CTA | Button | busy-only |

## Screens / zones (ids only)
- AA-00…AA-14
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/tai-san/ai
- DES-GRID / filterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: uploads · detect-assets · nearby · sessions · road-routes/search · candidates/{id} · confirm · dismiss
- T-EDIT FE only · T-BE N/A · T-QA queued /agent-qa* · T-REV after QA
- task full: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/task/web-rmms-asset-ai.md

## UNCLEAR
- (none) · all prior UNCLEAR resolved

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/task/web-rmms-asset-ai.md
- sa-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/handoff/sa-compact.md
- design-compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/handoff/design-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
