# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-asset-adjust
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:35:00.000Z
taskId: task_72b4150a
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile list + confirm · phone 430 · N/A ERP Modal/Slideout · no PUT P1
- domain: Asset (asset) · DOMAIN-MAP row web-rmms-asset-adjust applied
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-adjust
- mfeStdRoute: /web-rmms-asset-adjust · nativeRouteCite SCREENS /asset/adjust
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · cấm ERP.* · cấm web-bff base
- API: reuse road-assets · no new controller/entity/migration · Step 4b skip
- FormMode↔API: GET road-assets?search&page&pageSize (active) · DELETE road-assets/{id} soft · edit=nav peer list detail
- Soft-delete: AA-08 confirm + toast · reload · cấm silent/hard
- Edit: Sửa → web-rmms-asset-list /asset/:id · no PUT on adjust P1
- GPS: no capture · no Lat/Lng row P1
- labels: useFormOptions() / assetAdjust.*
- demo: N/A · hash skip · cấm Write MFE/native at SA
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| search/list | active rows | Search/ListRow | GET road-assets |
| remove | Bớt | Button+Dialog | soft DELETE + toast |
| edit | Sửa | Button/Nav | peer detail · no PUT |

## Screens / zones (ids only)
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-adjust
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET mobile-bff/api/v1/asset/road-assets?search&page&pageSize · DELETE …/road-assets/{id} · edit=nav peer
- Live: both · API mới: none · migration: none
- UNCLEAR-DOMAIN-MAP-ADJUST: resolved
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- (none open) · RESOLVED-DOMAIN-MAP-ADJUST · RESOLVED-STD-ROUTE · RESOLVED-EDIT-SURFACE · RESOLVED-SOFT-DELETE-UX

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/be/solution-discovery.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-adjust-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/STATUS.md
