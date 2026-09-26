# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-asset-hub
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:30:00.000Z
taskId: task_e768ad49
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile Hub / full · phone 430 · N/A ERP Modal/Slideout · no master form · no CRUD
- domain: Asset (`asset`) · DOMAIN-MAP resolved · cấm ERP.* · cấm invent Hub CRUD / wallet org API
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-asset-hub` · mfeStdUrl http://localhost:9301/web-rmms-asset-hub · native cite `/asset`
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` · Live 3 GET · API Mới/migration/Step4b: none
- Live: GET integration/road-routes/search · GET integration/asset-types · GET ai-vision/asset-candidates
- GAP-F-AHUB-01 wallet org: PO accept · no invent · DES-GRID N/A · GPS none · REMOVED me*/feedback/cam-view
- labels: useFormOptions() · Android layout 1-1
- T-*: T-01 shell/route · T-02 wallet · T-03 tiles+gis · T-04 AI pending · T-05 auth/quality · T-06 qa · T-07 review
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued /agent-qa*

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Home |
| wallet.* | Text RO | 2×GET Integration |
| tile×5 | Button/Nav | /asset/kcht|list|collect|ai|adjust |
| rowGis | Button/Nav | /gis |
| aiPending | ListRow/CTA | GET candidates · empty hide |

## Screens / zones
- AH-00 · AH-01 · AH-02 · AH-03 · AH-04 · AH-05 · AH-06 · AH-07
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-hub

## API / tasks
- FormMode↔API: wallet 2×GET · candidates GET · tiles=nav
- BFF vs API: Mobile.Bff only · no AssetHub controller
- T-01…T-05 → /agent-dev · T-06 /agent-qa · T-07 /agent-review

## UNCLEAR
- (none blocking) DOMAIN-MAP · STD-ROUTE · WALLET-ORG GAP accept

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/task/web-rmms-asset-hub.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/STATUS.md
