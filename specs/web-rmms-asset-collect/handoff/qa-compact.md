# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T15:05:00.000Z
taskId: task_1e2c84e5
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-asset-collect
mfeStdRoute: /web-rmms-asset-collect

## Decisions
- formPattern: Mobile full form ≤430 · Create · GPS gate · photos local GAP · DES-LEAVE
- e2e: docker up + start:std :9301 (no kill) + capture_acollect · cases S0,S1,QA-20
- stock yarn e2e-qa FAIL soft (API probe :5101 vs :5111) · workaround capture
- visual: Aligned · Must 0 · P0 none
- hotfix QA: restore `.topbar .title` in WebRmmsShell CSS (compile)
- WAIVE: filter-bar · POST create smoke · Leave click
- next: /agent-review · roleOnly stop (GAP-PKT-ROLE-01) · cấm phase=done

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub · DES-LEAVE |
| name/type/route/km/status | Text/Select | Live lookups |
| gpsPin | Text RO | geolocation |
| photos | PhotoRow | local GAP |
| submit/cancel | Button | POST · Hub |

## Screens / zones
- AC-00…AC-10 · S0/S1/QA-20 PNG PASS
- peerStdUrl= http://localhost:9301/web-rmms-asset-collect
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html

## API / tasks
- Live 200: asset-types · road-routes/search · road-assets/init-data · patrol/sessions
- T-06 qa **done** · T-07 review pending
- debt: MEDIA GAP · LOOKUP_HINT_KEYS · STOCK-PORT

## UNCLEAR
- UNCLEAR-MEDIA-01: open GAP — local only

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
