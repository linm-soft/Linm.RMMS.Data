# Handoff compact — po

schemaVersion: 1
feature: web-rmms-asset-ai
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T16:00:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- packKind: list (confirm) · DES-GRID / LinErpListFilterBar: N/A phone
- formPattern: Mobile full ≤430 · detect + HITL · no ERP Modal/Slideout · useFormOptions / assetAi.*
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-ai
- nativeRouteCite: SCREENS /asset/ai + /asset/ai/hitl/{id}
- be: Mobile.Bff :5202 mobile-bff/api/v1 · AiVision (+Asset/Integration/Patrol) · cấm ERP.*
- demo: N/A · hash skip analy · cấm re-scan
- Detect AC: photo* GPS Acc≤30 RouteId* · nearby opt · POST detect → Draft → HITL · cấm auto-confirm
- HITL AC: confirm + dismiss · pin drag local · in-scope slug (SCREENS)
- REMOVED: me* / feedback / cam-view · collect/adjust/list · Field doors · journal/a…e
- GPS: geolocation · deny/poor blocks detect · cấm fake/type-in/0,0
- copy: Android 1-1 · cấm iOS/Android native
- open: UNCLEAR-DOMAIN-MAP-AAI (SA) · UNCLEAR-HITL-SPLIT (follow SCREENS) · UNCLEAR-SCORE-01 (Design) · UNCLEAR-STD-ROUTE (Design/Dev)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub /asset |
| photo/gps/route/trip | fields | Photo/Text/Select | DetectAssetsRequest |
| nearbyWarn | warn | Alert | optional GET nearby |
| detect/cancel | CTA | Button | POST detect · Hub |
| hitl fields/pin | HITL | Text/MapPin | Draft · local drag |
| confirm/dismiss | CTA | Button | POST confirm|dismiss |

## Screens / zones (ids only)
- AA-00 · AA-01 · AA-02 · AA-03 · AA-04 · AA-05 · AA-06 · AA-07 · AA-08 · AA-09 · AA-10 · AA-11 · AA-12 · AA-13 · AA-14
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-ai
- DES-GRID: N/A phone

## API / tasks (ids only)
- uploads init+PUT · detect-assets · nearby · sessions · road-routes/search · confirm · dismiss
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-AAI: SA DOMAIN-MAP row · AiVision
- UNCLEAR-HITL-SPLIT: HITL in-scope this slug
- UNCLEAR-SCORE-01: Design chốt %
- UNCLEAR-STD-ROUTE: ship mfeStdUrl · alias if shell needs

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-ai-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-ai.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/STATUS.md
