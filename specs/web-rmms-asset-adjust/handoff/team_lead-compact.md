# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-asset-adjust
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:40:00.000Z
taskId: task_8e7fe12d
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile list + confirm · phone 430 · N/A ERP Modal/Slideout · no PUT P1
- domain: Asset (`asset`) · DOMAIN-MAP resolved · cấm ERP.* · reuse road-assets · Step4b/migration none
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-asset-adjust` · mfeStdUrl http://localhost:9301/web-rmms-asset-adjust · native cite `/asset/adjust`
- Edit: Sửa → peer web-rmms-asset-list `/asset/:id` · no PUT on adjust
- Soft-delete: AA-08 confirm + toast · DELETE soft · reload · cấm silent/hard
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` · Live GET list + DELETE soft
- Live: GET asset/road-assets?search&page&pageSize · DELETE …/road-assets/{id}
- GPS: no capture · no Lat/Lng row P1 · labels useFormOptions assetAdjust.* · DES-GRID N/A
- REMOVED: me*/feedback/cam-view · Field deep · journal b–e
- T-*: T-01 shell/route · T-02 Live list · T-03 empty/error · T-04 soft-delete · T-05 edit-nav+quality · T-06 qa · T-07 review
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued /agent-qa*

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub /asset |
| pageTitle | Text RO | assetAdjust.title |
| search | Text/Search | GET ?search |
| listRow | ListRow | GET road-assets · no LatLng |
| empty/error | Empty/Button | toast · retry |
| remove | Button+Dialog | DELETE soft · AA-08 |
| edit | Button/Nav | peer detail · no PUT |

## Screens / zones
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-adjust
- List AC: L-01…L-10

## API / tasks
- FormMode↔API: GET road-assets · DELETE soft · edit=nav peer
- BFF vs API: Mobile.Bff proxy · no invent controller
- T-01…T-05 → /agent-dev · T-06 /agent-qa · T-07 /agent-review

## UNCLEAR
- (none blocking) · RESOLVED-DOMAIN-MAP-ADJUST · RESOLVED-STD-ROUTE · RESOLVED-EDIT-SURFACE · RESOLVED-SOFT-DELETE-UX

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/task/web-rmms-asset-adjust.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/STATUS.md
