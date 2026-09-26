# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-asset-hub
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:05:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile Hub / full (phone max-width 430) · N/A ERP Modal/Slideout · no master form · no CRUD on hub
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-hub
- nativeRouteCite: SCREENS /asset
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Asset (+cite AiVision/Gis/Integration) · cấm ERP.*
- demo: N/A
- Hub: wallet RO · tiles kcht/list/collect/ai/adjust · row gis · AI pending Draft
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Field doors + journal/kết ca/tồn tại/tần suất → shell / web-rmms-mobile-a…e (out)
- labels: useFormOptions() · cấm hardcode VN form
- GPS: none on Hub · peer deep navigator.geolocation · deny blocks coords
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-AHUB · UNCLEAR-WALLET-ORG · UNCLEAR-STD-ROUTE

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Home |
| wallet.* | wallet RO | Text RO | road-routes + asset-types count |
| tile×5 | assetHub.tile.* | Button/Nav | kcht list collect ai adjust |
| rowGis | map | Button/Nav | → /gis |
| aiPending | Draft | ListRow/CTA | asset-candidates · hide empty |

## Screens / zones (ids only)
- AH-00 · AH-01 · AH-02 · AH-03 · AH-04 · AH-05 · AH-06 · AH-07
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-hub
- DES-GRID / LinErpListFilterBar: N/A phone Hub

## API / tasks (ids only)
- FormMode↔API: wallet GET · candidates GET · tiles nav only
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-AHUB: add DOMAIN-MAP row web-rmms-asset-hub (SA)
- UNCLEAR-WALLET-ORG: wallet title live org — GAP-F-AHUB-01 · no invent API
- UNCLEAR-STD-ROUTE: SCREENS /asset vs mfeStdRoute /web-rmms-asset-hub — follow STATUS URL

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-hub-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-hub-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-hub.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-hub/STATUS.md
