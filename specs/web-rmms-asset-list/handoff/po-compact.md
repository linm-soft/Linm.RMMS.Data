# Handoff compact — po

schemaVersion: 1
feature: web-rmms-asset-list
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:10:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page · formPattern: Mobile List+Detail / full · phone ≤430 · no ERP Modal · no PUT
- mfeStdRoute: /web-rmms-asset-list · mfeStdUrl http://localhost:9301/web-rmms-asset-list
- nativeCite: SCREENS /asset/list + /asset/:id (alias · STATUS URL canonical)
- Live GET asset/road-assets?search&page&pageSize[&type] · detail GET /{id} · pin → /gis?focus={id}
- TYPE-FILTER: optional ?type= passthrough only · no type UI invent · no invent API
- DETAIL-ROUTE: Design chốt nested vs same-slug zones · AC row→detail
- DOMAIN-MAP-LIST: SA thêm row · Asset
- labels: useFormOptions / assetList.* · cấm hardcode VN
- GPS: display stored only · pin disable no coords · no geolocation
- Out: me* · PUT · Field deep · journal/b–e · ERP.* · Web BFF base · demo SSOT

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| pageTitle | title | Text RO | assetList.title |
| search | search | Text/Search | server search |
| listRow | row.* | ListRow | GET road-assets |
| empty/error | empty/retry | Empty/Button | toast · no alert |
| detail.* | Code/Type/Route/Km/LatLng | Text RO | hide null |
| pinMap | pin | Button/Nav | /gis?focus · disable no coords |

## Screens / zones (ids only)
- AL-00 · AL-01 · AL-02 · AL-03 · AL-04 · AL-05 · AL-06 · AL-10 · AL-11 · AL-12 · AL-13
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-list
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: road-assets GET list+detail only · pin = Gis nav · no write
- AC-L01…L10 · AC-D01…D06
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-LIST → SA
- UNCLEAR-DETAIL-ROUTE → Design chốt (PO: zones OK either way)
- UNCLEAR-STD-ROUTE → resolved (STATUS URL canonical)
- UNCLEAR-TYPE-FILTER → resolved (passthrough only)

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-list-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-list-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/STATUS.md
