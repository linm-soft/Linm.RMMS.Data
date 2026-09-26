# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-asset-kcht
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:50:00.000Z
taskId: task_c49b406e
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile type-grid / full · phone 430 · N/A ERP Modal/Slideout · no master CRUD · no POST/PUT
- domain: Integration (asset-type) · cite Asset
- DOMAIN-MAP: web-rmms-asset-kcht → Integration · Live asset-types · cấm invent kcht CRUD
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute /web-rmms-asset-kcht
- mfeStdUrl: http://localhost:9301/web-rmms-asset-kcht
- nativeRouteCite: SCREENS /asset/kcht · PLAN AssetKchtDashboardView
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · cấm ERP.*
- Live GET: mobile-bff/api/v1/integration/asset-types → tiles code/name/icon
- API Mới / entity / migration / Step 4b: none · skip
- TAP: peer list ?type={code} · SEARCH: optional client P1 · back Hub
- labels: useFormOptions assetKcht.* · GPS none · cấm hardcode 32/36
- REMOVED: me* / feedback / cam-view · invent kcht CRUD · DES-GRID
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

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
- DES-GRID / LinErpListFilterBar: N/A phone type-grid

## API / tasks (ids only)
- FormMode↔API: asset-types GET only · tiles nav peer list · no write
- BFF: Mobile.Bff proxy integration/asset-types · no AssetKcht controller
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-KCHT: RESOLVED → DOMAIN-MAP Integration row
- UNCLEAR-KCHT-TAP: RESOLVED → peer list ?type={code}
- UNCLEAR-STD-ROUTE: RESOLVED → /web-rmms-asset-kcht
- UNCLEAR-SEARCH-P1: RESOLVED → optional P1

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-kcht-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/STATUS.md
