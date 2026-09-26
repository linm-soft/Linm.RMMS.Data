# Handoff compact — po

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:36:45.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
autoApprove: ON

## Decisions
- changeScope: new_page
- packKind: list · surface=phone form · DES-GRID/LinErpListFilterBar=N/A · Form AC=PASS · Grid/Report AC=N/A
- formPattern: Mobile full form ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / assetCollect.* · cấm hardcode VN
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-collect · mfeStdRoute /web-rmms-asset-collect
- nativeRouteCite: SCREENS /asset/collect · std URL STATUS ưu tiên (UNCLEAR-STD-ROUTE → Design/Dev)
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Asset (+Integration/Patrol) · cấm ERP.*
- demo: N/A · hash skip · cấm re-scan
- DoD: Name* Type* Route* KmFrom* Status* GPS* · KmTo opt · photos local GAP · POST road-assets Source→manual · toast Code · back Hub
- GPS: navigator.geolocation · deny blocks submit · cấm fake / type-in
- REMOVED: me* / feedback / cam-view · AI/HITL/adjust/list-detail · Field doors · journal/kết ca/tồn tại/tần suất (a…e)
- labels: useFormOptions() · cấm hardcode VN form
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android · cấm invent CollectController
- open: UNCLEAR-DOMAIN-MAP-ACOLLECT · UNCLEAR-MEDIA-01 · UNCLEAR-STD-ROUTE · UNCLEAR-STATUS-ANDROID

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
- real-data §A+§B: PASS (analy reuse)
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ACOLLECT: SA add DOMAIN-MAP row
- UNCLEAR-MEDIA-01: GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media path
- UNCLEAR-STD-ROUTE: follow STATUS mfeStdUrl · alias nếu shell
- UNCLEAR-STATUS-ANDROID: use init-data Select

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/handoff/data_analy-compact.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-collect.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
