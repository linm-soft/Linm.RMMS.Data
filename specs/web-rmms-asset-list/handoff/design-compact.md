# Handoff compact — design

schemaVersion: 1
feature: web-rmms-asset-list
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:20:00.000Z
taskId: task_f4202e27
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile List+Detail / full · phone 430 · N/A ERP Modal/Slideout · no PUT · DES-LEAVE N/A
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone list
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-list
- mfeStdRoute: /web-rmms-asset-list · nativeRouteCite SCREENS /asset/list + /asset/:id
- DETAIL-ROUTE: RESOLVED same-slug zones ?id={id} · AL-10…13 · no new STATUS slug · nested child OK same page
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset road-assets (+cite Gis) · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- List: Live GET road-assets?search&page&pageSize[&type] · Detail GET /{id} · pin → /gis?focus={id}
- TYPE-FILTER: optional ?type= passthrough only · no type UI
- REMOVED: me* / feedback / cam-view · PUT · Field deep · journal b–e
- labels: useFormOptions() · GPS display stored only · pin disable no coords
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-list
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: road-assets GET list+detail only · pin = Gis nav · no write
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-LIST: SA add DOMAIN-MAP row web-rmms-asset-list (Asset · cite Gis)
- UNCLEAR-DETAIL-ROUTE: RESOLVED → same-slug ?id={id}
- UNCLEAR-STD-ROUTE: RESOLVED (PO) → STATUS /web-rmms-asset-list
- UNCLEAR-TYPE-FILTER: RESOLVED (PO) → passthrough only

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-list-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-list-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-list/STATUS.md
