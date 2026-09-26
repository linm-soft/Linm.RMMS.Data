# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-asset-list
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:40:00.000Z
taskId: task_63351d6e
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile List+Detail / full · phone 430 · N/A ERP Modal/Slideout · no PUT
- domain: Asset (`asset`) · cite Gis · DOMAIN-MAP resolved · cấm ERP.* · cấm invent write
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-asset-list` · mfeStdUrl http://localhost:9301/web-rmms-asset-list · native cite `/asset/list`+`/asset/:id`
- DETAIL: same-slug `?id={id}` · AL-10…13 · no new STATUS slug
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` · Live GET list+detail · API Mới/migration/Step4b: none
- Live: GET asset/road-assets?search&page&pageSize[&type] · GET /{id} · pin nav /gis?focus={id}
- TYPE-FILTER: optional ?type= passthrough only · no type UI · GPS display stored only · pin disable no coords
- labels: useFormOptions assetList.* · Android layout 1-1 · DES-GRID N/A · REMOVED me*/feedback/cam-view
- T-*: T-01 shell/route · T-02 Live list · T-03 empty/error · T-04 detail · T-05 pin+auth/quality · T-06 qa · T-07 review
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued /agent-qa*

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub |
| pageTitle | Text RO | assetList.title |
| search | Text/Search | GET ?search |
| listRow | ListRow | GET road-assets · tap ?id= |
| empty/error | Empty/Button | toast · retry |
| detail.* | Text RO | GET /{id} · hide null |
| pinMap | Button/Nav | /gis?focus · disable no coords |

## Screens / zones
- AL-00 · AL-01 · AL-02 · AL-03 · AL-04 · AL-05 · AL-06 · AL-10 · AL-11 · AL-12 · AL-13
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-list

## API / tasks
- FormMode↔API: road-assets GET list+detail only · pin = Gis nav · no write
- BFF vs API: Mobile.Bff proxy · no invent Asset write controller
- T-01…T-05 → /agent-dev · T-06 /agent-qa · T-07 /agent-review

## UNCLEAR
- (none blocking) DOMAIN-MAP · DETAIL-ROUTE · STD-ROUTE · TYPE-FILTER all resolved

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/task/web-rmms-asset-list.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/STATUS.md
