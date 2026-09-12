# Handoff compact — data_analy

schemaVersion: 1
feature: mobile-bff-map
packKind: map
role: data_analy
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.1
writtenAt: 2026-09-12T06:40:00.000Z
contentHash: sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131
taskId: task_acda32fe

## Decisions
- changeScope: edit_page
- formPattern: N/A (no new screen · Wave 2 BFF tile + Wave 3 TileUrl)
- mfe / be: Mobile.Bff `:5202` · MapService `:5021` · RMMS ApiBase overlay · **cấm** ERP.*
- open questions: none on path · MapService must listen `:5021` at verify

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tileUrl | TileUrl native | Text (config) | `{Bff}/mobile-bff/api/v1/gis/tiles/…` |
| tileBasemap | Basemap MVT | MapTile | guest `basemap` |
| tileOverlay | Overlay MVT | MapTile | JWT · 401 no token |
| overlayGeo | Peer geojson | MapPin/Polyline | **giữ** RMMS catch-all |

## Screens / zones (ids only)
- **no** new `#sc-*` · consumers peer `gis-map` / `patrol-map`
- reviewUrl= (Design later · no prototype this role)
- peerStdUrl= n/a native

## API / tasks (ids only)
- GET `gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService (parity GisBff GetTiles)
- GET `gis/clusters|geojson|…` → RMMS ApiBase (keep)
- T-MAP-BFF-01..05 · T-MAP-APP-01 · T-MAP-QA-01 (task file · not start Dev)

## Real-data flags
- §A: ok · §B: ok (khớp BFF) · §D: map tile load · §E: progress none
- gaps: GAP-MOB-BFF-MAP-01 · GAP-MOB-BFF-MAP-02 · GAP-MAP-OSM-CDN-01

## UNCLEAR
- none

## Full paths (Read only if needed)
- control-hint: specs/_data-analy/mobile-bff-map-control-hint.md
- real-data: specs/_data-analy/mobile-bff-map-real-data.md
- bff: specs/_data-analy/mobile-bff-map-bff-endpoints.md
- action-tree: specs/_data-analy/mobile-bff-map-action-tree.md
- ctx: docs/context/features/mobile-bff-map.md
- STATUS: specs/mobile-bff-map/STATUS.md
