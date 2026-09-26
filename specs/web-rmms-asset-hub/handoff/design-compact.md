# Handoff compact — design

schemaVersion: 1
feature: web-rmms-asset-hub
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:20:00.000Z
taskId: task_a4670627
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile Hub / full · phone 430 · N/A ERP Modal/Slideout · no master form · no CRUD on hub · DES-LEAVE N/A
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone Hub tiles
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-hub
- mfeStdRoute: /web-rmms-asset-hub · nativeRouteCite SCREENS /asset
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset (+cite AiVision/Gis/Integration) · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Hub: wallet RO · tiles kcht/list/collect/ai/adjust · row gis · AI pending Draft · empty hide
- REMOVED: me* / feedback / cam-view
- labels: useFormOptions() · GPS none on Hub
- UNCLEAR-WALLET-ORG: PO accept GAP-F-AHUB-01 · no invent API
- UNCLEAR-STD-ROUTE: PO chốt STATUS URL
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Home |
| wallet.* | wallet RO | Text RO | road-routes + asset-types count |
| tile×5 | assetHub.tile.* | Button/Nav | kcht list collect ai adjust |
| rowGis | map | Button/Nav | → /gis |
| aiPending | Draft | ListRow/CTA | asset-candidates · hide empty |

## Screens / zones (ids only)
- AH-00 · AH-01 · AH-02 · AH-03 · AH-04 · AH-05 · AH-06 · AH-07
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-hub
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone Hub

## API / tasks (ids only)
- FormMode↔API: wallet GET · candidates GET · tiles nav only
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-AHUB: SA add DOMAIN-MAP row web-rmms-asset-hub
- UNCLEAR-WALLET-ORG: GAP-F-AHUB-01 · PO accept · no invent API
- UNCLEAR-STD-ROUTE: PO chốt mfeStdRoute=/web-rmms-asset-hub · alias /asset if shell needs

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-hub-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-hub-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/STATUS.md
