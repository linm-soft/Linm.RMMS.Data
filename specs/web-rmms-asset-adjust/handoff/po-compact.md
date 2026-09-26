# Handoff compact — po

schemaVersion: 1
feature: web-rmms-asset-adjust
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:25:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page · packKind list confirmed
- formPattern: Mobile list + confirm (phone ≤430) · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-adjust
- STD route: STATUS /web-rmms-asset-adjust canonical · SCREENS /asset/adjust = native cite/alias
- Edit: Sửa → peer web-rmms-asset-list detail /asset/:id · no PUT P1
- Soft-delete UX: confirm dialog + toast keys · reload list · cấm silent/hard delete
- List: GET road-assets search/page active · DELETE soft · labels useFormOptions / assetAdjust.*
- be: Mobile.Bff :5202 mobile-bff/api/v1 · Asset road-assets · cấm ERP.* · cấm web-bff base
- demo: N/A · hash skip · cấm re-scan
- GPS: không capture · Lat/Lng không row P1
- copy: Android 1-1 · cấm sửa iOS/Android · cấm hardcode VN
- open: UNCLEAR-DOMAIN-MAP-ADJUST → SA

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| search/list | active rows | Search/ListRow | GET road-assets |
| remove | Bớt | Button+Dialog | soft DELETE + toast |
| edit | Sửa | Button/Nav | peer detail · no PUT P1 |

## Screens / zones (ids only)
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08
- List AC: L-01…L-10
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-adjust
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET road-assets?search&page&pageSize · DELETE road-assets/{id} · edit=nav peer
- Copy keys: assetAdjust.title|search|empty|nav.back|action.remove|action.edit|confirm.*|toast.delete*
- real-data §A+§B: PASS (reuse)
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ADJUST: SA add DOMAIN-MAP row web-rmms-asset-adjust (Asset)
- RESOLVED-STD-ROUTE: STATUS URL canonical
- RESOLVED-EDIT-SURFACE: peer list detail · no PUT P1
- RESOLVED-SOFT-DELETE-UX: confirm + toast keys · reload

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-adjust-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-adjust-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-adjust.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/STATUS.md
