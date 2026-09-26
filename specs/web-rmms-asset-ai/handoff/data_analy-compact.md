# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T15:55:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile full (phone max-width 430) · detect + HITL · N/A ERP Modal/Slideout · master no demo · /erp-form-context labels
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-ai
- nativeRouteCite: SCREENS /asset/ai + /asset/ai/hitl/{id} · delta T18 Camera AI và HITL
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · AiVision (+cite Asset/Integration/Patrol) · cấm ERP.*
- demo: N/A
- Detect: photo* GPS* RouteId* · PatrolTripId opt · nearby warn · POST detect-assets → Draft · nav HITL
- HITL: confirm + dismiss · pin drag local · cấm auto-confirm trên detect
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Field doors + journal/kết ca/tồn tại/tần suất → shell / web-rmms-mobile-a…e (out)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: navigator.geolocation · Acc≤30 · deny/poor blocks detect · cấm fake / type-in / 0,0
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-AAI · UNCLEAR-HITL-SPLIT · UNCLEAR-SCORE-01 · UNCLEAR-STD-ROUTE

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| photo/gps/route/trip | fields | Photo/Text/Select | DetectAssetsRequest |
| nearbyWarn | warn | Alert | optional GET nearby |
| detect/cancel | CTA | Button | POST detect · back Hub |
| hitl fields/pin | HITL | Text/MapPin | Draft bind · local drag |
| confirm/dismiss | CTA | Button | POST confirm|dismiss |

## Screens / zones (ids only)
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08 · AA-09 · AA-10 · AA-11 · AA-12 · AA-13 · AA-14
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-ai
- DES-GRID / LinErpListFilterBar: N/A phone

## API / tasks (ids only)
- FormMode↔API: uploads init+PUT · detect-assets · nearby · sessions · road-routes/search · confirm · dismiss
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-AAI: add DOMAIN-MAP row web-rmms-asset-ai (SA) · AiVision
- UNCLEAR-HITL-SPLIT: peer asset-ai split det-hitl — SCREENS+packet gộp HITL vào slug này
- UNCLEAR-SCORE-01: GAP-MOB-ASSET-AI-SCORE-01 · Design chốt % ship
- UNCLEAR-STD-ROUTE: SCREENS /asset/ai vs mfeStdRoute /web-rmms-asset-ai — follow STATUS URL

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-ai.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
