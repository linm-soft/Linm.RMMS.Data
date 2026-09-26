# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:33:05.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile full form (phone max-width 430) · N/A ERP Modal/Slideout · master no demo · /erp-form-context labels
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-collect
- nativeRouteCite: SCREENS /asset/collect · delta T17 Thêm tài sản thủ công
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Asset (+cite Integration/Patrol) · cấm ERP.*
- demo: N/A
- Form: Name* Type* Route* KmFrom* Status* GPS* · KmTo opt · photos local GAP · POST road-assets Source→manual
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Field doors + journal/kết ca/tồn tại/tần suất → shell / web-rmms-mobile-a…e (out)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation · deny blocks submit · cấm fake / type-in
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-ACOLLECT · UNCLEAR-MEDIA-01 · UNCLEAR-STD-ROUTE · UNCLEAR-STATUS-ANDROID

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| name/type/route/km/status | fields | Text/Select | CreateRoadAsset required |
| gpsPin | Lat/Lng RO | Text RO | geolocation gate |
| photos | local | PhotoRow | media GAP |
| submit/cancel | CTA | Button | POST · back Hub |

## Screens / zones (ids only)
- AC-00 · AC-01 · AC-02 · AC-03 · AC-04 · AC-05 · AC-06 · AC-07 · AC-08 · AC-09 · AC-10
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-collect
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks (ids only)
- FormMode↔API: GET init-data · asset-types · road-routes/search · sessions prefill · POST road-assets
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ACOLLECT: add DOMAIN-MAP row web-rmms-asset-collect (SA)
- UNCLEAR-MEDIA-01: GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media path
- UNCLEAR-STD-ROUTE: SCREENS /asset/collect vs mfeStdRoute /web-rmms-asset-collect — follow STATUS URL
- UNCLEAR-STATUS-ANDROID: peer thiếu Tình trạng — use init-data Select

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-collect.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
