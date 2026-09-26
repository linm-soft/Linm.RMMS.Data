# Handoff compact — design

schemaVersion: 1
feature: web-rmms-asset-adjust
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:30:00.000Z
taskId: task_17437bf8
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile list + confirm · phone 430 · N/A ERP Modal/Slideout · no PUT P1 · DES-LEAVE N/A
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone list
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-adjust
- mfeStdRoute: /web-rmms-asset-adjust · nativeRouteCite SCREENS /asset/adjust (alias)
- Edit: Sửa → peer web-rmms-asset-list /asset/:id · no PUT on adjust P1
- Soft-delete: AA-08 confirm + toast keys · reload · cấm silent/hard delete
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset road-assets · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- List: Live GET road-assets?search&page&pageSize active · DELETE soft
- GPS: no capture · no Lat/Lng row P1
- REMOVED: me* / feedback / cam-view · PUT · Field deep · journal b–e
- labels: useFormOptions() / assetAdjust.*
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| pageTitle | title | Text RO | assetAdjust.title |
| search | search | Text/Search | server search |
| listRow | row.* | ListRow | Code/Type/Route · no LatLng |
| empty/error | empty/retry | Empty/Button | toast · no alert |
| action.remove | Bớt | Button | → AA-08 soft DELETE |
| action.edit | Sửa | Button/Nav | peer detail · no PUT |
| confirmDelete | confirm | Dialog | cancel/ok + toast |

## Screens / zones (ids only)
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-adjust
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone list
- List AC: L-01…L-10

## API / tasks (ids only)
- FormMode↔API: GET road-assets?search&page&pageSize · DELETE road-assets/{id} · edit=nav peer
- Copy keys: assetAdjust.title|search|empty|nav.back|action.*|confirm.*|toast.delete*
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ADJUST: SA add DOMAIN-MAP row web-rmms-asset-adjust (Asset · cite list)
- RESOLVED-STD-ROUTE: STATUS /web-rmms-asset-adjust canonical
- RESOLVED-EDIT-SURFACE: peer list detail · no PUT P1
- RESOLVED-SOFT-DELETE-UX: confirm + toast · reload

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-adjust-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-adjust-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/STATUS.md
