# Handoff compact — review

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: review
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:25:00.000Z
taskId: task_5065b058
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
review_confirm: approve
autoApprove: ON
e2eQa: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-asset-ai
mfeStdRoute: /web-rmms-asset-ai
verdict: PASS

## Decisions
- formPattern: Mobile full ≤430 · detect + HITL · Android 1-1 · useFormOptions / assetAi.*
- gates: QUERY·SEC·UI-FN·BE-FN all PASS · P0/Must 0 · no fix_gaps
- hash: unchanged → skip analy rescan
- be: Mobile.Bff AiVision Live · Step 4b skip · cấm ERP.* · cấm invent AssetAiController · cấm auto-confirm
- Detect: photo* GPS Acc≤30 RouteId* · POST detect → Draft → HITL
- HITL: score SHOW RO · pin local note-only · confirm|dismiss · DES-LEAVE
- DES-GRID: N/A phone
- next: pipeline complete · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub · DES-LEAVE |
| photo/gps/route/trip | Photo/Text/Select | uploads · geo · routes · sessions |
| nearbyWarn | Alert | GET nearby (opt) |
| detect/cancel | Button | POST detect · Hub |
| hitl/score/pin | Text/MapPin | GET · confirm · dismiss |

## Screens / zones
- AA-00…AA-14 · QA S0/S1/QA-20 Must 0
- peerStdUrl= http://localhost:9301/web-rmms-asset-ai
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html

## API / tasks
- Live BFF only · T-01…T-05 + T-QA done · T-BE N/A
- debt: DEBT-PIN · DEBT-SCORE · DEBT-QA-STOCK · DEBT-LOOKUP (non-blocking)

## UNCLEAR
- (none blocking)

## Full paths
- findings: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/review/findings.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
