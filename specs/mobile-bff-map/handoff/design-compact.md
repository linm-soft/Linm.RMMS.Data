# Handoff compact — design

schemaVersion: 1
feature: mobile-bff-map
packKind: map
role: design
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.1
writtenAt: 2026-09-12T07:00:00.000Z
contentHash: sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131
taskId: task_d741af34
design_confirm: approve
autoApprove: ON

## Decisions
- changeScope: edit_page
- formPattern: N/A (no new screen · TileUrl note)
- real_view_parity: v1
- mfe / be: Mobile.Bff `:5202` · MapService `:5021` · RMMS overlay · **cấm** ERP.*
- open questions: MapService `:5021` verify · NuGet pin — SA/Dev
- OMS: R2 HARD TileUrl BFF · peer chrome reuse

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tileUrl | Đường dẫn lớp nền | Text (config) | BFF MVT path |
| tileBasemap | Lớp nền clip | MapTile | guest |
| tileOverlay | Lớp overlay | MapTile | JWT · 401 |
| overlayGeo | Peer geo | MapPin/Polyline | reuse RMMS |
| mapHostPeer | Peer map | Map | gis-map / patrol-map |

## Screens / zones (ids only)
- DES-MOB-TILEURL-NOTE `#zone-tileurl-note`
- `#zone-tile-url` · `#zone-tile-basemap` · `#zone-tile-overlay` · `#zone-peer-cite`
- **none** `#sc-*` mới · tabs: none
- reviewUrlIos= `…/ui/prototype/ios/index.html#zone-tileurl-note`
- reviewUrlAndroid= `…/ui/prototype/android/index.html#zone-tileurl-note`
- peerStdUrl= n/a native

## API / tasks (ids only)
- GET `gis/tiles/{layer}/{z}/{x}/{y}.pbf` → MapService
- GET `gis/clusters|geojson|…` → RMMS keep
- Gaps: GAP-MOB-BFF-MAP-01 · GAP-MOB-BFF-MAP-02 · GAP-MAP-OSM-CDN-01
- T-MAP-BFF-01..05 · T-MAP-APP-01 · T-MAP-QA-01 (TL later)

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: specs/mobile-bff-map/ui/design.md
- ux-analy: specs/mobile-bff-map/ui/ux-analy.md
- html-to-native: specs/mobile-bff-map/ui/html-to-native-map.md
- demo-parity: specs/mobile-bff-map/ui/review/demo-parity.md
- prototype ios: specs/mobile-bff-map/ui/prototype/ios/index.html
- prototype android: specs/mobile-bff-map/ui/prototype/android/index.html
- control-hint: specs/_data-analy/mobile-bff-map-control-hint.md
- real-data: specs/_data-analy/mobile-bff-map-real-data.md
- po: specs/mobile-bff-map/po/requirement.md
- STATUS: specs/mobile-bff-map/STATUS.md
