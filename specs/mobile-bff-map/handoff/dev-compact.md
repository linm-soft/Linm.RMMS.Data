# Handoff compact — dev

schemaVersion: 1
feature: mobile-bff-map
packKind: map
role: dev
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.1
writtenAt: 2026-09-12T07:01:31.000Z
contentHash: sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131
taskId: task_21def1bf
autoApprove: ON

## Decisions
- changeScope: edit_page
- formPattern: N/A (TileUrl + BFF tile · no #sc-* mới)
- route_confirm: route_reuse
- mfeStdUrl: n/a native · **cấm** mfeStdUrl / yarn start:std
- mfe / be: Mobile.Bff `:5202` · MapService `:5021` · RMMS overlay keep · **cấm** ERP.*
- wave2_host: mobile_bff · AddLinmMapServiceBff only · **cấm** AddLinmMapServiceBffControllers
- NuGet: Linm.Platform.MapService.Bff 1.1.0 (parity Web)
- open questions: MapService `:5021` up at QA verify · Wave 4 MVT paint

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tileUrl | TileUrl | Text | BFF MVT path |
| tileBasemap | Basemap | MapTile | guest basemap |
| tileOverlay | Overlay | MapTile | JWT · debt Wave4 |
| overlayGeo | Peer geo | MapPin/Polyline | keep RMMS |

## Screens / zones (ids only)
- DES-MOB-TILEURL-NOTE `#zone-tileurl-note`
- `#zone-tile-url` · `#zone-tile-basemap` · `#zone-tile-overlay` · `#zone-peer-cite`
- peer `#sc-gis-map` / patrol-map reuse · **none** #sc-* mới

## API / tasks (ids only)
- API-01: `GET mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService (GisTilesController)
- API-02..04 gis/* ≠ tiles → catch-all RMMS **keep**
- **T-BE-MAP-BFF** PASS · `dotnet build`
- **T-IOS-MAP-TILE** PASS · xcodegen + iPhone 17 Pro Max
- **T-AND-MAP-TILE** PASS · assembleDebug
- **T-QA-MAP-01** pending · queued `/agent-qa-mobile`

## Build
- BFF: PASS
- iOS: PASS (iPhone 17 Pro Max)
- Android: PASS (assembleDebug)

## Debt
- osmdroid/MapKit ≠ MVT decode → Wave 4 clip UI
- overlay JWT tile hop with renderer
- curl live tile needs MapService `:5021` (QA)

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement ios: specs/mobile-bff-map/implement/ios.md
- implement android: specs/mobile-bff-map/implement/android.md
- task: specs/mobile-bff-map/task/mobile-bff-map.md
- STATUS: specs/mobile-bff-map/STATUS.md
