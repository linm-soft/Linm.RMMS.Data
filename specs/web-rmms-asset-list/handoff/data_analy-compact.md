# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-asset-list
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:03:21.192Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile List+Detail / full (phone max-width 430) · N/A ERP Modal/Slideout · no PUT on detail · master no demo
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-list
- nativeRouteCite: SCREENS /asset/list + /asset/:id
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Asset road-assets (+cite Gis) · cấm ERP.*
- demo: N/A
- List: Live GET asset/road-assets?search&page&pageSize · Detail GET /{id} · pin nav /gis?focus={id}
- Detail RO: Code·Type·Route·KmFrom/KmTo·Lat/Lng (hide null) · no PUT
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Field doors + journal/kết ca/tồn tại/tần suất → shell / web-rmms-mobile-a…e (out)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: display stored only · no new geolocation · peer deep deny blocks coords
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-LIST · UNCLEAR-STD-ROUTE · UNCLEAR-TYPE-FILTER · UNCLEAR-DETAIL-ROUTE

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| pageTitle | title | Text RO | assetList.title |
| search | search | Text/Search | server search query |
| listRow | row.* | ListRow | GET road-assets · page/pageSize |
| empty/error | empty/retry | Empty/Button | toast · no alert |
| detail.* | Code/Type/Route/Km/LatLng | Text RO | GET /{id} · hide null coords |
| pinMap | pin | Button/Nav | /gis?focus={id} · disable no coords |

## Screens / zones (ids only)
- AL-00 · AL-01 · AL-02 · AL-03 · AL-04 · AL-05 · AL-06 · AL-10 · AL-11 · AL-12 · AL-13
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-list
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: road-assets GET list+detail only · pin = Gis nav · no write
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-LIST: add DOMAIN-MAP row web-rmms-asset-list (SA · Asset)
- UNCLEAR-STD-ROUTE: SCREENS /asset/list vs mfeStdRoute /web-rmms-asset-list — follow STATUS URL
- UNCLEAR-TYPE-FILTER: optional ?type= from KCHT — PO chốt · no invent API
- UNCLEAR-DETAIL-ROUTE: nested /asset/:id vs same-slug zones — Design chốt

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-list-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-list-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-list.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/STATUS.md
