# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-asset-kcht
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:55:00.000Z
taskId: task_98713989
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON
changeScope: new_page

## Decisions
- formPattern: Mobile type-grid / full · phone 430 · N/A ERP Modal/Slideout · no master CRUD · no POST/PUT
- domain: Integration (asset-type) · cite Asset · DOMAIN-MAP resolved · cấm ERP.* · cấm invent AssetKcht API
- mfe: Linm.Web.RMMS.Mobile · `/web-rmms-asset-kcht` · mfeStdUrl http://localhost:9301/web-rmms-asset-kcht · native cite `/asset/kcht`
- be: Linm.RMMS.WebService · Mobile.Bff :5202 `mobile-bff/api/v1` · Live 1 GET · API Mới/migration/Step4b: none
- Live: GET integration/asset-types → tiles code/name/icon
- TAP: peer list `?type={code}` · SEARCH optional P1 client · back Hub · GPS none · REMOVED me*/feedback/cam-view
- labels: useFormOptions assetKcht.* · Android layout 1-1 · DES-GRID N/A
- T-*: T-01 shell/route · T-02 Live tiles · T-03 search+empty · T-04 typeTap+back · T-05 auth/quality · T-06 qa · T-07 review
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01) · e2e queued /agent-qa*

## Inventory (slim)
| id | controlHint | API / nav |
|----|-------------|-----------|
| navBack | Button/Nav | Hub |
| pageTitle | Text RO | assetKcht.title |
| search | Text/Search | optional P1 client |
| typeTile | HubTile/ListRow | GET asset-types |
| empty/error | Empty/Button | toast · retry |
| typeTap | Button/Nav | list ?type={code} |

## Screens / zones
- AK-00 · AK-01 · AK-02 · AK-03 · AK-04 · AK-05 · AK-06
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-kcht

## API / tasks
- FormMode↔API: asset-types GET only · tiles nav peer list · no write
- BFF vs API: Mobile.Bff proxy · no AssetKcht controller
- T-01…T-05 → /agent-dev · T-06 /agent-qa · T-07 /agent-review

## UNCLEAR
- (none blocking) DOMAIN-MAP · TAP · STD-ROUTE · SEARCH all resolved

## Full paths
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/task/web-rmms-asset-kcht.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/STATUS.md
