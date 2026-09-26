# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:20:00.000Z
taskId: task_890b5f77
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-asset-ai
mfeStdRoute: /web-rmms-asset-ai

## Decisions
- formPattern: Mobile full ≤430 · detect + HITL · Android 1-1 · useFormOptions / assetAi.*
- e2e: docker up + start:std :9301 (no kill) + capture_aai · cases S0,S1,QA-20
- stock yarn e2e-qa FAIL soft (DUP S1=S0) · workaround capture Hub #tileAi
- visual: Aligned · Must 0 · P0 none
- WAIVE: filter-bar · POST detect · HITL Draft · Leave click · AA-07 empty
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01) · cấm phase=done

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub · DES-LEAVE |
| photo/gps/route/trip | Photo/Text/Select | uploads · geo · routes · sessions |
| nearbyWarn | Alert | GET nearby (opt) |
| detect/cancel | Button | POST detect · Hub |
| hitl/score/pin | Text/MapPin | GET · confirm · dismiss |

## Screens / zones
- AA-00…AA-09 (AA-07 opt) · S0/S1/QA-20 PNG PASS · S1≠S0
- peerStdUrl= http://localhost:9301/web-rmms-asset-ai
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html

## API / tasks
- Live: Mobile.Bff :5202 health 200 · routes select · GPS Acc 12
- T-QA done · review pending
- debt: STOCK-DUP · LOOKUP_HINT_KEYS · HITL smoke · pin note-only

## UNCLEAR
- (none blocking)

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
