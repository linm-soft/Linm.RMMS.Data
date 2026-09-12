# Handoff compact — po

schemaVersion: 1
feature: mobile-bff-map
packKind: map
role: po
status: done
skillVersion: 2026.08.25.01
rulesVersion: 2026.09.12.1
writtenAt: 2026-09-12T06:45:00.000Z
contentHash: sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131
taskId: task_f45d7dcb

## Decisions
- changeScope: edit_page
- formPattern: N/A (no new screen · Wave 2 BFF + Wave 3 TileUrl)
- Pattern: N/A · Grid AC: N/A · Report AC: N/A · Leave: n/a slug
- mfe / be: Mobile.Bff `:5202` · MapService `:5021` · RMMS overlay · **cấm** ERP.*
- packKind confirmed: map
- open questions: MapService `:5021` verify · NuGet pin — SA/Dev
- autoApprove: ON · e2eQa queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tileUrl | TileUrl native | Text (config) | BFF MVT path |
| tileBasemap | Basemap MVT | MapTile | guest |
| tileOverlay | Overlay MVT | MapTile | JWT · 401 |
| overlayGeo | Peer geo | MapPin/Polyline | reuse RMMS |
| mapHostPeer | Peer map | Map | reuse gis-map/patrol-map |

controlHint cite: specs/_data-analy/mobile-bff-map-control-hint.md

## Screens / zones (ids only)
- **none** `#sc-*` mới
- peer: gis-map · patrol-map (TileUrl consumer · reuse)
- reviewUrl= Design peer TileUrl note · no new prototype
- peerStdUrl= n/a native
- tabs: none

## API / tasks (ids only)
- GET `gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService
- GET `gis/clusters|geojson|…` → RMMS (keep)
- Gaps: GAP-MOB-BFF-MAP-01 · GAP-MOB-BFF-MAP-02 · GAP-MAP-OSM-CDN-01
- T-MAP-BFF-01..05 · T-MAP-APP-01 · T-MAP-QA-01 (TL later)
- devSlash: /agent-dev-ios + /agent-dev-android (+ OMS R2)

## Device AC (flags)
- guest basemap 200 · overlay 401/JWT · dual TileUrl BFF · 0 OSM CDN
- GPS/Leave form: n/a slug · offline blank ok

## UNCLEAR
- none (path)

## Full paths (Read only if needed)
- requirement: specs/mobile-bff-map/po/requirement.md
- control-hint: specs/_data-analy/mobile-bff-map-control-hint.md
- real-data: specs/_data-analy/mobile-bff-map-real-data.md
- action-tree: specs/_data-analy/mobile-bff-map-action-tree.md
- prior: specs/mobile-bff-map/handoff/data_analy-compact.md
- STATUS: specs/mobile-bff-map/STATUS.md
