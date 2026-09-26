# Handoff compact — design

schemaVersion: 1
feature: web-rmms-asset-kcht
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:45:00.000Z
taskId: task_f515cfe1
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile type-grid / full · phone 430 · N/A ERP Modal/Slideout · no master CRUD · no POST/PUT · DES-LEAVE N/A
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone type-grid
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-kcht
- mfeStdRoute: /web-rmms-asset-kcht · nativeRouteCite SCREENS /asset/kcht · PLAN AssetKchtDashboardView
- be: D:/AI-QLBD/Linm.RMMS.WebService · Integration asset-type (+cite Asset) · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- KCHT: Live GET asset-types · tiles · optional search P1 · back Hub · tap list ?type={code}
- REMOVED: me* / feedback / cam-view · invent kcht CRUD
- labels: useFormOptions() · GPS none on KCHT · cấm hardcode 32/36 SSOT
- UNCLEAR-DOMAIN-MAP-KCHT: open → SA
- TAP/STD/SEARCH: PO resolved
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| pageTitle | title | Text RO | assetKcht.title |
| search | search | Text/Search | optional P1 client |
| typeTile | type.* | HubTile/ListRow | GET asset-types |
| empty/error | empty/retry | Empty/Button | toast · no alert |
| typeTap | nav peer | Button/Nav | list ?type={code} |

## Screens / zones (ids only)
- AK-00 · AK-01 · AK-02 · AK-03 · AK-04 · AK-05 · AK-06
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-kcht
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone type-grid

## API / tasks (ids only)
- FormMode↔API: asset-types GET only · tiles nav peer list · no write
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-KCHT: SA add DOMAIN-MAP row web-rmms-asset-kcht (Integration · cite Asset)
- UNCLEAR-KCHT-TAP: RESOLVED → peer list ?type={code}
- UNCLEAR-STD-ROUTE: RESOLVED → STATUS /web-rmms-asset-kcht
- UNCLEAR-SEARCH-P1: RESOLVED → optional P1

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-kcht-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-kcht-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/STATUS.md
