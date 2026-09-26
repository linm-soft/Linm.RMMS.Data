# Handoff compact — data_analy

schemaVersion: 1
feature: web-rmms-asset-kcht
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:31:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile type-grid / full (phone max-width 430) · N/A ERP Modal/Slideout · no master CRUD · no POST/PUT on screen
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-kcht
- nativeRouteCite: SCREENS /asset/kcht · PLAN AssetKchtDashboardView
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Integration asset-type (+cite Asset) · cấm ERP.*
- demo: N/A
- KCHT: Live GET integration/asset-types · grid tiles · optional client search · back Hub
- REMOVED: me / me-profile / me-settings / feedback / cam-view
- Field doors + journal/kết ca/tồn tại/tần suất → shell / web-rmms-mobile-a…e (out)
- labels: useFormOptions() · cấm hardcode VN form · cấm hardcode count 32/36 SSOT
- GPS: none on KCHT · peer deep navigator.geolocation · deny blocks coords
- copy: Android icon/layout 1-1 · cấm sửa iOS/Android
- open questions: UNCLEAR-DOMAIN-MAP-KCHT · UNCLEAR-KCHT-TAP · UNCLEAR-STD-ROUTE · UNCLEAR-SEARCH-P1

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| pageTitle | title | Text RO | assetKcht.title |
| search | search | Text/Search | optional client filter |
| typeTile | type.* | HubTile/ListRow | GET asset-types · code/name/icon |
| empty/error | empty/retry | Empty/Button | toast · no alert |
| typeTap | nav peer | Button/Nav | UNCLEAR-KCHT-TAP |

## Screens / zones (ids only)
- AK-00 · AK-01 · AK-02 · AK-03 · AK-04 · AK-05 · AK-06
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-kcht
- DES-GRID / LinErpListFilterBar: N/A phone type-grid

## API / tasks (ids only)
- FormMode↔API: asset-types GET only · tiles nav peer · no write
- real-data §A+§B: PASS
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-KCHT: add DOMAIN-MAP row web-rmms-asset-kcht (SA · Integration cite Asset)
- UNCLEAR-KCHT-TAP: tap type → list?type= vs passport — PO chốt · no invent API
- UNCLEAR-STD-ROUTE: SCREENS /asset/kcht vs mfeStdRoute /web-rmms-asset-kcht — follow STATUS URL
- UNCLEAR-SEARCH-P1: search optional default · PO may drop

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-kcht-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-kcht-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-kcht.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/docs/plan/web-rmms-mobile/SCREENS.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/STATUS.md
