# Handoff compact — sa

schemaVersion: 1
feature: web-rmms-asset-collect
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T14:50:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: new_page
- formPattern: Mobile full form ≤430 · N/A ERP Modal/Slideout · Android 1-1 · useFormOptions / assetCollect.*
- domain: Asset (asset) · cite Integration + Patrol · DOMAIN-MAP row applied
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdRoute=/web-rmms-asset-collect · mfeStdUrl http://localhost:9301/web-rmms-asset-collect
- nativeRouteCite: SCREENS /asset/collect · alias nếu shell
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · cấm ERP.*
- FormMode: Create only · reuse road-assets · no CollectController · no entity/migration · Step 4b skip
- Write: POST road-assets Source=manual · Name* Type* Route* KmFrom* Status* Lat/Lng* · KmTo opt
- Lookups: GET init-data · asset-types · road-routes/search · sessions prefill
- GPS: navigator.geolocation · deny blocks submit · cấm fake
- photos: local GAP-MOB-ASSET-COLLECT-MEDIA-01 · no invent media
- demo: N/A · cấm Write MFE/native ở SA
- next: /agent-team-lead · roleOnly stop (GAP-PKT-ROLE-01)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset · DES-LEAVE |
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
- T-*: (team_lead) · devSlash=/agent-dev

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-ACOLLECT: resolved — DOMAIN-MAP row Asset
- UNCLEAR-STD-ROUTE: resolved Design — /web-rmms-asset-collect
- UNCLEAR-STATUS-ANDROID: resolved — init-data Select
- UNCLEAR-MEDIA-01: open GAP — local only · no invent

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/be/solution-discovery.md
- design compact: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/handoff/design-compact.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-collect-real-data.md
- DOMAIN-MAP: D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-collect/STATUS.md
