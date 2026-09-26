# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-asset-adjust
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:20:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile list + confirm (phone max-width 430) · N/A ERP Modal/Slideout · master no demo · /erp-form-context labels
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-adjust
- nativeRouteCite: SCREENS /asset/adjust · delta T19 Bớt hoặc sửa tài sản
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Asset road-assets · cấm ERP.* · cấm web-bff base
- demo: N/A
- List: GET road-assets search/page · active only · soft DELETE confirm · Sửa → peer detail (no PUT P1)
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Field doors + journal/kết ca/tồn tại/tần suất → shell / web-rmms-mobile-a…e (out)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: không capture · Lat/Lng không hiện row P1
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-ADJUST · UNCLEAR-STD-ROUTE · UNCLEAR-EDIT-SURFACE · UNCLEAR-SOFT-DELETE-UX

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| search/list | active rows | Search/ListRow | GET road-assets |
| remove | Bớt | Button+Dialog | soft DELETE |
| edit | Sửa | Button/Nav | peer /asset/:id · no PUT P1 |

## Screens / zones (ids only)
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-adjust
- DES-GRID / LinErpListFilterBar: N/A phone list

## API / tasks (ids only)
- FormMode↔API: GET road-assets?search&page&pageSize · DELETE road-assets/{id} · edit=nav peer
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ADJUST: add DOMAIN-MAP row web-rmms-asset-adjust (SA)
- UNCLEAR-STD-ROUTE: SCREENS /asset/adjust vs mfeStdRoute /web-rmms-asset-adjust — follow STATUS URL
- UNCLEAR-EDIT-SURFACE: prefer peer list detail · no PUT on adjust P1
- UNCLEAR-SOFT-DELETE-UX: PO/Design chốt confirm/toast copy

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-adjust-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-adjust-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-adjust.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-adjust/STATUS.md
