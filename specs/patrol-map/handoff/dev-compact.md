# Handoff compact — dev

schemaVersion: 1
feature: patrol-map
packKind: map
role: dev
status: done
skillVersion: session
writtenAt: 2026-09-16T03:39:40.000Z
taskId: task_1f6d86c4
alias: patrol-map

## Decisions
- changeScope: edit_page · gap=ios_map_host_clip · mode=fix_gaps · slash `/implement-gis-map` `ios_replace_all_maps`
- formPattern: N/A (map host)
- mfeStdUrl: — (native · **cấm** mfeStdUrl)
- be: Step 4b **N/A** — reuse `GET patrol/sessions` · `gis/tiles/*` BFF (no new endpoint)
- open questions: none · sibling check-in sheet still pending_confirm (out of scope)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| map-patrol-host | Bản đồ ca | GisClipMapView | SSOT `#sc-gis-map` |
| mb-clip / mb-sat | Tiêu chuẩn / Vệ tinh | LinmChip | was osm/esri |
| map-confirm | HITL pin | GisClipMapView | photo-geo-capture |

## Screens / zones (ids only)
- `#sc-patrol-map` · `#sheet-pgc` `map-confirm`
- peerStdUrl= —

## API / tasks (ids only)
- TileUrl: `{Bff}/mobile-bff/api/v1/gis/tiles/{layer}/{z}/{x}/{y}.pbf`
- GET `patrol/sessions` · OSRM public route/snap (unchanged)
- T-IOS-PAT-MAP · T-AND-PAT-MAP · GAP-MOB-IOS-MAP-HOST-01 **closed**

## Build
- iOS: xcodegen + xcodebuild iPhone 17 Pro **PASS**
- Android: assembleDebug **PASS** (HITL → BFF tile)
- Mobile.Bff: dotnet build **PASS**
- debt: Android patrol chips still osm/esri labels (tile already BFF) · Wave 4 tone — out of this UX lock

## UNCLEAR
- none

## Full paths (Read only if needed)
- implement: specs/patrol-map/implement/ios.md · android.md
- context: docs/context/features/patrol-map.md · gis-map.md · photo-geo-capture.md · gis-osm-clip.md
- STATUS: specs/patrol-map/STATUS.md
