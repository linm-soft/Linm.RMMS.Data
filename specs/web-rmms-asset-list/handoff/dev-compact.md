# Handoff compact — dev

schemaVersion: 1
feature: web-rmms-asset-list
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:55:00.000Z
taskId: task_215a5913
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON
changeScope: new_page
mfeStdUrl: http://localhost:9301/web-rmms-asset-list
mfeStdRoute: /web-rmms-asset-list

## Decisions
- formPattern: Mobile List+Detail / full · phone 430 · no ERP Modal · no PUT
- Live GET asset/road-assets?search&page&pageSize[&type] · GET /{id} · pin /gis?focus
- DETAIL same-slug ?id= · TYPE passthrough only · labels assetList.* / useFormOptions
- Kind B / ui-schema / filter-bar: WAIVE phone list
- BE: dual mobile-bff route RoadAssetsBff · no entity/migration · cấm ERP.*
- Build: MFE yarn build PASS · BE dotnet build PASS
- e2eQa: queued /agent-qa* · cấm e2e Dev
- next: /agent-qa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub |
| pageTitle | Text RO | assetList.title |
| search | Text/Search | GET ?search |
| listRow | ListRow | GET road-assets · ?id= |
| empty/error | Empty/Button | toast · retry |
| detail.* | Text RO | GET /{id} · hide null |
| pinMap | Button/Nav | /gis?focus · disable no coords |

## Screens / zones
- AL-00 · AL-01 · AL-02 · AL-03 · AL-04 · AL-05 · AL-06 · AL-10 · AL-11 · AL-12 · AL-13
- peerStdUrl= http://localhost:9301/web-rmms-asset-list
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html

## API / tasks
- FormMode↔API: road-assets GET list+detail only · pin = Gis nav · no write
- T-01…T-05 done · T-06 qa pending · T-07 review pending
- debt: Kind B WAIVE · peer collect/ai/adjust stubs

## UNCLEAR
- (none)

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/implement/web-rmms-asset-list.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/STATUS.md
