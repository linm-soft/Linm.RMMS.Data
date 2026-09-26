# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:50:00.000Z
taskId: task_0ea11a1b
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON · runtime PASS
mfeStdUrl: http://localhost:9301/web-rmms-patrol-map

## Decisions
- changeScope: new_page
- formPattern: Mobile Map / full · phone 430 · Leave N/A · DES-GRID WAIVE
- verdict: **PASS** · DOM Aligned · Must 0
- method: start:std :9301 (no kill) + docker up + capture_patrol_map S0/S1/QA-20 · MFE /login · geo grant
- T-QA-MAP/LEGEND/NEXT/PEER/GPS/CHECKIN **PASS** · FILTER/Leave **WAIVE**
- stock e2e soft-fail PORT :5101 vs :5111 · capture S1=Home `#gridPatrolMap`
- Live: next Route QL.1-LANGSON · canvas + PM-06 me
- next: review · `/agent-review` · roleOnly stop · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| mapHost | map | MapLibre | S0 canvas Live |
| basemap/locate | chips | Chip/Button | PM-03 |
| legend | all/track/done/next | Chip | PM-04 isolate |
| nextCard | Route | Card RO | QL.1-LANGSON |
| gpsMe | me-dot | MapMarker | PM-06 grant |
| checkin | toast | Button | PM-08 no POST |
| gridPatrolMap | Bản đồ tuần | Button/Nav | S1/QA-20 Home |

## Screens / zones (ids only)
- PM-00…PM-08 · PNG `qa/screens/{S0,S1,QA-20}.png`
- S1 peer: `/web-rmms-home` `#gridPatrolMap`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map

## API / tasks (ids only)
- VERIFY: sessions Live Route · canvas · visual/DOM Aligned · 0 crash
- T-QA-MAP/LEGEND/NEXT/PEER/GPS/CHECKIN = done
- soft: GAP-QA-E2E-STOCK-PORT · HISTORY-FALLBACK · S0/QA-20 DUP hash

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/handoff/dev-compact.md
