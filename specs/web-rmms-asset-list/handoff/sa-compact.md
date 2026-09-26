# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-asset-list
packKind: list
role: sa
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:30:00.000Z
taskId: task_4c6efeb4
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Mobile List+Detail / full · phone ≤430 · N/A ERP Modal · no PUT
- domain: Asset (`asset`) · cite Gis · DOMAIN-MAP row `web-rmms-asset-list` applied
- mfeStdRoute: /web-rmms-asset-list · mfeStdUrl http://localhost:9301/web-rmms-asset-list
- nativeCite: SCREENS /asset/list + /asset/:id · DETAIL same-slug ?id={id}
- BFF: Mobile.Bff :5202 · mobile-bff/api/v1 · **cấm** web-bff client base · **cấm** ERP.*
- Live GET asset/road-assets?search&page&pageSize[&type] · GET /{id} · pin nav /gis?focus={id}
- TYPE-FILTER: optional ?type= passthrough only · no type UI · no invent API
- API Mới / entity / migration / Step 4b: **none** at SA
- labels: useFormOptions assetList.* · GPS display stored only · pin disable no coords
- Out: me* · PUT · Field deep · journal b–e · invent write · demo SSOT
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| pageTitle | title | Text RO | assetList.title |
| search | search | Text/Search | GET road-assets?search |
| listRow | row.* | ListRow | page/pageSize · tap ?id= |
| empty/error | empty/retry | Empty/Button | toast · no alert |
| detail.* | Code/Type/Route/Km/LatLng | Text RO | GET /{id} · hide null |
| pinMap | pin | Button/Nav | /gis?focus · disable no coords |

## Screens / zones (ids only)
- AL-00 · AL-01 · AL-02 · AL-03 · AL-04 · AL-05 · AL-06 · AL-10 · AL-11 · AL-12 · AL-13
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-list
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: road-assets GET list+detail only · pin = Gis nav · no write
- DOMAIN-MAP-LIST: resolved · UNCLEAR-* prior: all resolved
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none open) · UNCLEAR-DOMAIN-MAP-LIST resolved SA

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-list-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/STATUS.md
