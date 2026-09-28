# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-27T10:22:00.000Z
taskId: task_5a497c25
contentHash: sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c
autoApprove: ON
e2eQa: ON
changeScope: edit_page
mfeStdUrl: http://localhost:9301/m/tai-san/ai
mfeStdRoute: /tai-san/ai
nextRole: review

## Decisions
- changeScope: edit_page · Pattern B + SearchInput · Acc≤30 submit · no seed
- e2e: docker up + start:std :9301 (no kill) + capture_aai · S0,S1,QA-20
- stock yarn e2e-qa FAIL soft (API :5101 vs :5111) · capture_aai PASS
- visual: Aligned · Must 0 · P0 none · S1≠S0 · searchInput=true
- WAIVE: filter-bar · POST detect · HITL Draft · Leave click · AA-07 empty
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01) · cấm phase=done

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub · DES-LEAVE |
| photo/gps/route/trip | Photo/Text/SearchInput/Select | uploads · geo · search · sessions |
| nearbyWarn | Alert | GET nearby (opt) |
| detect/cancel | Button | POST detect · Hub · Pattern B |
| hitl/score/pin | Text/MapPin | GET · confirm · dismiss |

## Screens / zones
- AA-00…AA-09 (AA-07 opt) · aaValidateBanner · S0/S1/QA-20 PNG PASS
- peerStdUrl= http://localhost:9301/m/tai-san
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html

## API / tasks
- Live: Mobile.Bff :5202 health 200 · SearchInput · GPS Acc 12
- T-QA done · T-REV pending
- debt: STOCK-PORT · HITL smoke · pin note-only

## UNCLEAR
- (none blocking)

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
