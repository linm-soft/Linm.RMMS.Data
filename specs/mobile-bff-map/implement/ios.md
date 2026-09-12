# Implement iOS — mobile-bff-map

| Field | Value |
|-------|-------|
| feature | `mobile-bff-map` |
| role | `dev` · `/agent-dev-ios` + OMS R2 |
| task | `T-IOS-MAP-TILE` |
| changeScope | `edit_page` · route_reuse |
| status | **PASS** |
| taskId | `task_21def1bf` |
| updatedAt | `2026-09-12T07:01:31.000Z` |

## Done

- `Data/Network/MapTileUrl.swift` — TileUrl SSOT = `{BffBase}/{BffPrefix}/gis/tiles/{layer}/{z}/{x}/{y}.pbf`
- Peer `GisMap` / `PatrolMap`: `tileUrlTemplate` on appear · accessibilityValue on map host
- **0** `openstreetmap.org` / Esri / Google tile URL in Swift
- Host chrome MapKit Apple styles kept (Wave 4 = MVT clip render) — **cấm** reimplement map UI

## Build

| Check | Result |
|-------|--------|
| `xcodegen generate` | PASS |
| `xcodebuild` dest **iPhone 17 Pro Max** | **BUILD SUCCEEDED** |
| iPad M5 | N/A · `TARGETED_DEVICE_FAMILY=1` (iphone-only) |

## Debt

- Wave 4 peer: MapKit cannot paint MVT `.pbf` — clip basemap render deferred (`gis-osm-clip` / map UI)
- Overlay JWT hop on tile requests deferred with MVT renderer

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.09.05.03 |
| contentHash | sha256:b04a50005f77e99fc2c564e39ac3a438cce8742996899ef2aaa47b698f7e0131 |
| taskId | `task_21def1bf` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.09.05.03 -->
