# Handoff compact — qa

schemaVersion: 1
feature: web-rmms-gis
packKind: list
role: qa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T17:12:00.000Z
taskId: task_ddc3a16c
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
e2eQa: ON
mfeStdUrl: http://localhost:9301/web-rmms-gis

## Decisions
- changeScope: new_page
- formPattern: Mobile Map / full · phone 430 · Leave N/A · DES-GRID WAIVE
- verdict: **PASS** · visual Aligned · Must 0
- method: start:std :9301 (no kill) + docker up + capture_gis S0/S1/QA-20 · MFE /login · geo grant
- T-QA-MAP/LEGEND/SEARCH/PEER/GPS **PASS** · FILTER/Leave **WAIVE**
- stock e2e soft-fail PORT :5101 vs :5111 · capture_gis S1=Hub `#rowGis`
- Live: gis/layers + geojson/all **200** · map canvas + me-dot
- next: review · `/agent-review` · roleOnly stop · **cấm** phase=done

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| mapHost | map | MapLibre | S0 canvas Live |
| search | search | Search | GIS-05 |
| basemap/fit | chips | Chip | local |
| legend | all/ts/sc/corridor | Chip | isolate |
| gpsMe | me-dot | MapMarker | RO grant |
| rowGis | Xem bản đồ | Button/Nav | S1/QA-20 Hub |

## Screens / zones (ids only)
- GIS-00…GIS-09 · PNG `qa/screens/{S0,S1,QA-20}.png`
- S1 peer: `/web-rmms-asset-hub` `#rowGis`
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-gis

## API / tasks (ids only)
- VERIFY: gis/layers + geojson/all **200** · visual Aligned · 0 crash
- T-QA-MAP/LEGEND/SEARCH/PEER/GPS = done
- soft: GAP-QA-E2E-STOCK-PORT · LOOKUP_HINT_KEYS (Hub) · layers sheet P2

## UNCLEAR
- none

## Full paths (Read only if needed)
- qa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/qa/scenarios.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/STATUS.md
- prior: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-gis/handoff/dev-compact.md
