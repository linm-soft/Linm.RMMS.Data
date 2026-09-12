# Handoff compact — team_lead

schemaVersion: 1
feature: mobile-bff-map
packKind: map
role: team_lead
status: done
skillVersion: 2026.09.05.03
rulesVersion: 2026.09.12.1
writtenAt: 2026-09-12T06:54:11.000Z
contentHash: sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131
taskId: task_1d5e2e5a
autoApprove: ON

## Decisions
- changeScope: edit_page
- formPattern: N/A (no new screen · TileUrl + BFF tile)
- route_confirm: route_reuse (no new tab/deep-link)
- ios_repo_confirm: path · android_repo_confirm: path
- mfe / be: Mobile.Bff `:5202` · MapService `:5021` · RMMS overlay · **cấm** ERP.*
- open questions: MapService `:5021` verify · NuGet pin — Dev
- Wave 2 PASS → Wave 3 · Wave 4 **không** slug này

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| tileUrl | TileUrl | Text | BFF MVT |
| tileBasemap | Basemap | MapTile | guest |
| tileOverlay | Overlay | MapTile | JWT |
| overlayGeo | Peer geo | MapPin/Polyline | keep RMMS |

## Screens / zones (ids only)
- DES-MOB-TILEURL-NOTE `#zone-tileurl-note`
- `#zone-tile-url` · `#zone-tile-basemap` · `#zone-tile-overlay` · `#zone-peer-cite`
- **none** `#sc-*` mới · peer gis-map / patrol-map reuse
- reviewUrlIos/Android= prototype `#zone-tileurl-note`

## API / tasks (ids only)
- FormMode↔API: MapTile→API-01 `GET gis/tiles/…`→MapService · geo keep RMMS
- **T-BE-MAP-BFF** deps=none · devSlash=`/implement-map-stack` (wave2_host=mobile_bff) · DoD `dotnet build` · aliases T-MAP-BFF-01..05
- **T-IOS-MAP-TILE** deps=T-BE · devSlash=`/agent-dev-ios` + OMS R2
- **T-AND-MAP-TILE** deps=T-BE · devSlash=`/agent-dev-android` + OMS R2
- **T-QA-MAP-01** deps=all · `/agent-qa-mobile` queued
- Gaps: GAP-MOB-BFF-MAP-01/02 · GAP-MAP-OSM-CDN-01

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: specs/mobile-bff-map/task/mobile-bff-map.md
- sa: specs/mobile-bff-map/be/solution-discovery.md
- design: specs/mobile-bff-map/ui/design.md
- control-hint: specs/_data-analy/mobile-bff-map-control-hint.md
- real-data: specs/_data-analy/mobile-bff-map-real-data.md
- STATUS: specs/mobile-bff-map/STATUS.md
