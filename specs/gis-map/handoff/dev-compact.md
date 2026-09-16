# Handoff compact — dev

schemaVersion: 1
feature: gis-map
packKind: map
role: dev
status: done
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T07:52:00.000Z
taskId: task_ad6cbe30
slash: /edit-mobile-feature
gap: cleanup_mock

## Decisions
- changeScope: edit_page
- formPattern: N/A (map shell · no Create/Edit form)
- mfeStdUrl: none (native · **cấm**)
- live-only: removed `GisMapDemoOverlay` iOS+Android
- fail: empty/partial + toast `gis.map.loadFallback` · map vẫn mở
- empty: map trống OK (GAP-QA-GIS-EMPTY seed optional)
- focus: GetById `.loaded` only · **cấm** OfflineDemo focus
- Step 4b: N/A · APIs reuse gis/geojson/* + asset/road-assets/{id}
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-gis-map | Bản đồ tài sản | Map OMS | live geojson |
| search (iOS) | Tìm… | SearchInput | → loadOverlay search |
| mb-* | Đường/Phố/Vệ tinh/Fit | Chip | basemap |
| lg-* | isolate | Chip | All/TS/SC/(corridor iOS) |
| layers / list | Lớp / Danh sách | TextButton | toast / open list |

## Screens / zones (ids only)
- DES-MOB-GIS / DES-MOB-OMS-GIS / #sc-gis-map
- reviewUrlIos=file://…/prototype/ios/index.html#sc-gis-map
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-gis-map
- peerStdUrl=—

## API / tasks (ids only)
- GET `mobile-bff/api/v1/gis/geojson/{all,incidents,tuyen-duong}`
- GET `mobile-bff/api/v1/asset/road-assets/{id}` focus
- T-IOS-GIS-MAP · T-AND-GIS-MAP · cleanup_mock

## Builds
- iOS xcodegen + xcodebuild iPhone 17 Pro: **PASS**
- Android assembleDebug: **PASS**
- BFF dotnet build: **PASS**

## Debt
- none blocking · QA/review re-open after cleanup (e2eQa OFF this packet)

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: specs/gis-map/implement/{ios,android}.md
- STATUS: specs/gis-map/STATUS.md
- context: docs/context/features/gis-map.md
