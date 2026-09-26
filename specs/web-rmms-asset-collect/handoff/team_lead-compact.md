# Handoff compact — team_lead

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:55:00.000Z
taskId: task_5451211a
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
route_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile full form ≤430 · Create only · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / assetCollect.*
- domain: Asset (asset) · cite Integration + Patrol · DOMAIN-MAP row applied
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-asset-collect · mfeStdUrl http://localhost:9301/web-rmms-asset-collect
- nativeRouteCite: SCREENS /asset/collect · alias nếu shell
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · cấm ERP.*
- FormMode: Create · reuse POST road-assets Source=manual · no CollectController · no entity/migration · Step 4b skip
- DoD: Name* Type* Route* KmFrom* Status* GPS* · KmTo opt · photos local GAP · toast Code · back Hub
- GPS: navigator.geolocation · deny blocks submit · cấm fake/type-in
- DES-LEAVE: in-app discard · cấm native confirm
- photos: GAP-MOB-ASSET-COLLECT-MEDIA-01 · local only · no invent
- route_confirm: approve · STATUS URL canonical
- T-01…T-05 /agent-dev · T-06 /agent-qa · T-07 /agent-review
- next: /agent-dev · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub · DES-LEAVE |
| name/type/route/km/status | fields | Text/Select | CreateRoadAsset required |
| gpsPin | Lat/Lng RO | Text RO | geolocation gate |
| photos | local | PhotoRow | media GAP |
| submit/cancel | CTA | Button | POST · back Hub |

## Screens / zones (ids only)
- AC-00 · AC-01 · AC-02 · AC-03 · AC-04 · AC-05 · AC-06 · AC-07 · AC-08 · AC-09 · AC-10
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/ui/prototype/index.html
- peerStdUrl= http://localhost:9301/web-rmms-asset-collect
- DES-GRID / LinErpListFilterBar: N/A phone form

## API / tasks (ids only)
- FormMode↔API: GET init-data · asset-types · road-routes/search · sessions · POST road-assets
- API mới: none · migration: none · entity: none
- T-01 route/shell · T-02 fields/lookups · T-03 GPS · T-04 photos+DES-LEAVE · T-05 POST submit · T-06 QA · T-07 review
- devSlash=/agent-dev · implement=specs/web-rmms-asset-collect/implement/web-rmms-asset-collect.md

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ACOLLECT: resolved — DOMAIN-MAP Asset
- UNCLEAR-STD-ROUTE: resolved — /web-rmms-asset-collect
- UNCLEAR-STATUS-ANDROID: resolved — init-data Select
- UNCLEAR-MEDIA-01: open GAP — local only · no invent

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/task/web-rmms-asset-collect.md
- sa compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/handoff/sa-compact.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
