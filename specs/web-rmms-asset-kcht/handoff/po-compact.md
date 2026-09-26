# Handoff compact — po

schemaVersion: 1
feature: web-rmms-asset-kcht
packKind: list
role: po
status: done
skillVersion: 2026.09.05.03
writtenAt: 2026-09-25T13:40:00.000Z
contentHash: sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e

## Decisions
- changeScope: new_page
- formPattern: Mobile type-grid / full · phone max-width 430 · no ERP Modal/Slideout · no master CRUD · no POST/PUT
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile · mfeStdUrl http://localhost:9301/web-rmms-asset-kcht · mfeStdRoute /web-rmms-asset-kcht
- nativeRouteCite: SCREENS /asset/kcht · PLAN AssetKchtDashboardView (alias only)
- be: D:/AI-QLBD/Linm.RMMS.WebService · Mobile.Bff :5202 mobile-bff/api/v1 · Integration asset-type (+cite Asset) · cấm ERP.*
- demo: N/A · hash-skip analy · no re-scan
- KCHT: Live GET integration/asset-types · grid tiles · back Hub · labels useFormOptions/assetKcht.*
- TAP chốt: peer list ?type={code} · passport out P1 · no invent API
- SEARCH: optional P1 client filter (may cut Design)
- STD-ROUTE: follow STATUS /web-rmms-asset-kcht
- DOMAIN-MAP row: open → SA
- REMOVED/Leave: me* · feedback · cam-view · CRUD loại · Field doors · journal/kết ca/tồn tại/tần suất a…e · DES-GRID · invent asset/kcht · hardcode VN/32/36 · iOS/Android edit · GPS on KCHT

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| navBack | back | Button/Nav | → Hub |
| pageTitle | title | Text RO | assetKcht.title |
| search | search | Text/Search | optional client P1 |
| typeTile | type.* | HubTile/ListRow | GET asset-types · code/name/icon |
| empty/error | empty/retry | Empty/Button | toast · no alert |
| typeTap | nav peer | Button/Nav | list ?type={code} |

## Screens / zones (ids only)
- AK-00 · AK-01 · AK-02 · AK-03 · AK-04 · AK-05 · AK-06
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/web-rmms-asset-kcht
- DES-GRID / LinErpListFilterBar: N/A phone type-grid
- Grid AC: AC-G-01…10 · Report AC: N/A

## API / tasks (ids only)
- FormMode↔API: asset-types GET only · tiles nav peer list · no write
- real-data §A+§B: PASS (reuse)
- T-*: (team_lead)

## UNCLEAR
- UNCLEAR-DOMAIN-MAP-KCHT: SA add DOMAIN-MAP row web-rmms-asset-kcht (Integration · cite Asset) — still open
- UNCLEAR-KCHT-TAP: RESOLVED → peer list ?type={code}
- UNCLEAR-STD-ROUTE: RESOLVED → STATUS /web-rmms-asset-kcht
- UNCLEAR-SEARCH-P1: RESOLVED → optional P1

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-kcht-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/web-rmms-asset-kcht-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-kcht.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-kcht/STATUS.md
