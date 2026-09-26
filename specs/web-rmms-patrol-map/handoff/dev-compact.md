# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T03:45:00.000Z
taskId: task_94c320c9
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
changeScope: new_page
autoApprove: ON

## Decisions
- formPattern: Mobile Map / full · phone ≤430 · Android 1-1 · N/A ERP Modal · no POST check-in/tracks P1
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-patrol-map · mfeStdUrl http://localhost:9301/web-rmms-patrol-map · product /patrol-map · alias /field/map
- be: Mobile.Bff Live GET patrol/sessions + gis/tiles · cấm ERP.* · cấm invent PatrolMapController · Step 4b skip (T-BE N/A)
- Overlay P1: empty tracks · no next-pin · next-card Route text · legend isolate chips only
- GPS: geolocation me-dot · deny hide/disable locate · map opens · cấm fake · toast check-in only
- labels: useFormOptions('web-rmms-patrol-map') · patrolMap.* · no Fit/Đường/Phố
- T-01…T-05 done · build PASS · e2e queued QA
- next: /agent-qa* · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | notes |
|----|-------------|-------|
| navBack+title | Button/Text | PM-01 |
| trailingCheckin | Button toast | PM-08 · no POST |
| mapHost | Map | PM-02 · gis/tiles |
| basemap×2+locate | Chip/Button | PM-03 · no Fit |
| legend×4 | Chip isolate | PM-04 · empty geom |
| nextCard | Card RO Route | PM-05 · GET sessions |
| gpsMe+popup | Marker/Popup | PM-06/07 |

## Screens / zones
- PM-00 · PM-01 · PM-02 · PM-03 · PM-04 · PM-05 · PM-06 · PM-07 · PM-08
- mfeStdUrl= http://localhost:9301/web-rmms-patrol-map
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- DES-GRID: N/A phone Map

## API / tasks
- FormMode↔API: GET patrol/sessions · GET gis/tiles · nav/toast writes only
- T-01…T-05 done · T-BE N/A · T-QA queued
- build: yarn build PASS · Patrol.Bff+Gis.Bff PASS · e2e skipped Dev

## Debt
- typecheck pre-existing fieldReflect (out of scope)
- P2 tracks/next-pin/check-in POST = peer OUT

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/implement/web-rmms-patrol-map.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
