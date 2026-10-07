# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: map
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-30T15:05:00.000Z
contentHash: sha256:52bd4a74401781b03b20ace930fd7d47d9e5ca2c5714b39fc6927f0d4fd6bcaf
taskId: task_c35139c7
autoApprove: ON
changeScope: edit_page
verdict: PASS

## Decisions
- changeScope: edit_page · keep PM-00… · delta chainage/Ghim/sheet verified soft+live
- formPattern: Mobile Map / full ≤430 · peer sheet CheckInSheet · LeaveConfirmModal
- mfeStdUrl live: http://localhost:9301/m/ban-do-tuan · route `/ban-do-tuan`
- e2eQa ON · docker + start:std + capture S0/S1/QA-20 PNG · vision Aligned
- stock yarn e2e-qa legacy url FAIL soft DUP · capture = evidence
- **cấm** phase=done · next=/agent-review* · roleOnly stop
- **cấm** ERP.* · **cấm** kill worker

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| map+tiles | map | Map/MapLine | canvas PASS |
| pinHere | ghim | Button | btn-pin-here live |
| chainage* | lý trình | Number/Text | sheet code PASS soft |
| checkin.sheet | PM-10 | Form | LeaveModal code |
| peer Home | Tuần đường | Link | hub hop QA-20 |

## Screens / zones (ids only)
- S0/S1/QA-20 PNG: specs/web-rmms-patrol-map/qa/screens/{S0,S1,QA-20}.png
- PM-00 · HM-* · DES-MOB-TABBAR
- peerStdUrl= http://localhost:9301/m/ban-do-tuan
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html

## API / tasks (ids only)
- T-QA-MAP-01 · LEGEND · NEXT · PEER · GPS · CHAINAGE soft · TRACK soft = PASS
- T-QA-FILTER WAIVE · VI-ENC PASS
- debt: STATUS url legacy · zone PM thin · migration deploy

## UNCLEAR
- (none)

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/qa/scenarios.md
- manifest: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/qa/screens/manifest.json
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/implement/web-rmms-patrol-map.md
