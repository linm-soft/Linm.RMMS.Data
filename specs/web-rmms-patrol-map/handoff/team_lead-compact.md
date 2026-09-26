# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-patrol-map
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-26T04:00:00.000Z
taskId: task_c952b382
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
team_lead_confirm: approve
autoApprove: ON
changeScope: new_page
route_confirm: confirm

## Decisions
- formPattern: Mobile Map / full · phone ≤430 · Android 1-1 · N/A ERP Modal · no POST check-in/tracks P1
- mfe: Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-patrol-map · mfeStdUrl http://localhost:9301/web-rmms-patrol-map · product /patrol-map · alias /field/map
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Patrol + Gis tiles · cấm ERP.* · cấm invent PatrolMapController · Step 4b skip
- Overlay P1: empty tracks · no next-pin · next-card Route text · cấm OMS
- T-01 route+chrome · T-02 tiles/basemap · T-03 locate/GPS · T-04 legend/next-card · T-05 toast+BFF+parity · T-BE N/A · T-QA queued
- HARD: GPS deny hide me · toast check-in only · useFormOptions patrolMap.* · no Fit/Đường/Phố
- DES-GRID: N/A phone Map · demo N/A
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2eQa queued QA

## Inventory (slim)
| id | controlHint | T-* |
|----|-------------|-----|
| navBack+title | Button/Text | T-01 |
| trailingCheckin | Button toast | T-05 |
| mapHost | Map | T-02 |
| basemap×2 | Chip | T-02 |
| locate | Button | T-03 |
| legend×4 | Chip isolate | T-04 |
| nextCard | Card RO Route | T-04 |
| gpsMe+popup | Marker/Popup | T-03 |

## Screens / zones
- PM-00 · PM-01 · PM-02 · PM-03 · PM-04 · PM-05 · PM-06 · PM-07 · PM-08
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-patrol-map

## API / tasks
- FormMode↔API: GET patrol/sessions · GET gis/tiles · nav/toast writes only
- T-01…T-05 pending · T-BE N/A · T-QA queued · devSlash=/agent-dev

## UNCLEAR
- (none blocking)

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/task/web-rmms-patrol-map.md
- sa: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-patrol-map/STATUS.md
