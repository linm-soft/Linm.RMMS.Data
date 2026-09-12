# Handoff compact — sa

schemaVersion: 1
feature: mobile-bff-map
packKind: map
role: sa
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.1
writtenAt: 2026-09-12T06:52:00.000Z
contentHash: sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131
taskId: task_825b8a3d
solution_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page
- formPattern: N/A (no new screen · TileUrl + BFF tile proxy)
- mfe / be: Mobile.Bff `:5202` · MapService `:5021` · RMMS overlay catch-all · **cấm** ERP.*
- TZ: tz_na · XCO: xco_na · SHARE: share_na
- entity/migration: none · Step 4b N/A
- open questions: MapService `:5021` verify · NuGet pin — Dev

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tileUrl | TileUrl | Text | BFF MVT path |
| tileBasemap | Basemap | MapTile | guest API-01 |
| tileOverlay | Overlay | MapTile | JWT API-01 |
| overlayGeo | Peer geo | MapPin/Polyline | API-02/03 keep |

## Screens / zones (ids only)
- DES-MOB-TILEURL-NOTE `#zone-tileurl-note`
- `#zone-tile-url` · `#zone-tile-basemap` · `#zone-tile-overlay` · `#zone-peer-cite`
- reviewUrlIos/Android= prototype `#zone-tileurl-note`
- peerStdUrl= n/a native

## API / tasks (ids only)
- FormMode↔API: TileUrl/MapTile→API-01 `GET gis/tiles/{layer}/{z}/{x}/{y}.pbf`→MapService · peer geo→API-02/03 keep RMMS
- API-04: `gis/*`≠tiles catch-all keep
- **cấm** `AddLinmMapServiceBffControllers` · invent `api/v1/map-service/*`
- Gaps: GAP-MOB-BFF-MAP-01/02 · GAP-MAP-OSM-CDN-01
- T-MAP-BFF-01..05 · T-MAP-APP-01 · T-MAP-QA-01 (TL)
- devSlash: /agent-dev-ios + /agent-dev-android (+ OMS R2)

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: specs/mobile-bff-map/be/solution-discovery.md
- bff: specs/_data-analy/mobile-bff-map-bff-endpoints.md
- control-hint: specs/_data-analy/mobile-bff-map-control-hint.md
- real-data: specs/_data-analy/mobile-bff-map-real-data.md
- design: specs/mobile-bff-map/ui/design.md
- STATUS: specs/mobile-bff-map/STATUS.md
