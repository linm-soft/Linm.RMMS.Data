# Handoff compact — design

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: design
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:45:00.000Z
taskId: task_d7c33eb0
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
design_confirm: approve
autoApprove: ON
real_view_parity: v1
shared_grid_example: N/A

## Decisions
- changeScope: new_page
- formPattern: Mobile full form ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / assetCollect.* · cấm hardcode VN
- Grid AC Kind B / DES-GRID / LinErpListFilterBar: N/A phone form
- Report AC / DES-RPT: N/A
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-collect
- mfeStdRoute: /web-rmms-asset-collect · nativeRouteCite SCREENS /asset/collect · alias nếu shell
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset (+cite Integration/Patrol) · Mobile.Bff :5202 · cấm ERP.*
- demo: N/A · hash skip · cấm rescan (GAP-DES-DEMO-RESCAN-01)
- Form: Name* Type* Route* KmFrom* Status* GPS* · KmTo opt · photos local GAP · POST Source→manual · toast Code · back Hub
- GPS: navigator.geolocation · deny blocks submit · cấm fake / type-in
- DES-LEAVE: in-app discard confirm · cấm native confirm
- REMOVED: me* / feedback / cam-view · AI/HITL/adjust/list-detail · Field a…e
- UNCLEAR-STD-ROUTE: Design chốt STATUS mfeStdRoute · alias /asset/collect if shell
- next: /agent-sa · roleOnly stop (GAP-PKT-ROLE-01)

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
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-collect
- real_view_parity= v1
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks (ids only)
- FormMode↔API: GET init-data · asset-types · road-routes/search · sessions prefill · POST road-assets
- real-data §A+§B: PASS · T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ACOLLECT: SA add DOMAIN-MAP row web-rmms-asset-collect
- UNCLEAR-MEDIA-01: GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media path
- UNCLEAR-STD-ROUTE: Design chốt mfeStdRoute=/web-rmms-asset-collect · alias /asset/collect if shell
- UNCLEAR-STATUS-ANDROID: use init-data Select

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/design.md
- prototype: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-real-data.md
- po: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/po/requirement.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
