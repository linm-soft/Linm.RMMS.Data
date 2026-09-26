# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-asset-hub
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:25:00.000Z
taskId: task_f67e9a7b
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile Hub / full · phone 430 · N/A ERP Modal/Slideout · no master form · no CRUD
- domain: Asset (`asset`) · DOMAIN-MAP row `web-rmms-asset-hub` added · UNCLEAR-DOMAIN-MAP-AHUB resolved
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-asset-hub` · mfeStdUrl http://localhost:9301/web-rmms-asset-hub · native cite `/asset`
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` · cấm ERP.* · cấm invent Hub CRUD
- Live: GET integration/road-routes/search · GET integration/asset-types · GET ai-vision/asset-candidates · tiles/gis nav-only
- API Mới / entity / migration: **none** · Step 4b skip
- GAP-F-AHUB-01 wallet org: PO accept · no invent API
- REMOVED: me* / feedback / cam-view · GPS none · DES-GRID N/A
- labels: useFormOptions() · cấm hardcode VN
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | controlHint | API |
|----|-------------|-----|
| navBack | Button/Nav | nav Home |
| wallet.title | Text RO | GET integration/road-routes/search |
| wallet.subtitle | Text RO | GET integration/asset-types |
| tile×5 | Button/Nav | /asset/kcht|list|collect|ai|adjust |
| rowGis | Button/Nav | /gis |
| aiPending | ListRow/CTA | GET ai-vision/asset-candidates · empty hide |

## Screens / zones
- AH-00 · AH-01 · AH-02 · AH-03 · AH-04 · AH-05 · AH-06 · AH-07
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-hub

## API / tasks
- FormMode↔API: wallet 2×GET · candidates GET · tiles=nav
- BFF vs API: Mobile.Bff only · no AssetHub controller
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none blocking) DOMAIN-MAP-AHUB resolved · STD-ROUTE PO · WALLET-ORG GAP accept

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-hub-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/STATUS.md
