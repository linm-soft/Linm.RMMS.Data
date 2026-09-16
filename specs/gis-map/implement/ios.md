# Dev — Implement — gis-map (iOS)

| | |
|--|--|
| Feature | `gis-map` |
| Title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| Role | `dev` · `/edit-mobile-feature` · `/agent-dev-ios` · `/agent-dev-oms-map` |
| status | **confirmed** |
| taskId | `task_ad6cbe30` |
| packKind | **map** |
| changeScope | `edit_page` (cleanup_mock) |
| route_confirm | **route_a** |
| updatedAt | `2026-09-16T12:00:00.000Z` |

## Shipped

| Area | Path / note |
|------|-------------|
| Feature | `Presentation/Features/GisMap/*` — View · ViewModel · UiState · `#sc-gis-map` |
| Domain | `GisMapModels` · `LoadGisOverlayUseCase` · `GisRepository` |
| Data | `GisGeoJsonDto` · `GisRepositoryImpl` → `GET gis/geojson/{layer}` |
| Focus | `FetchRoadAssetByIdUseCase` · **chỉ** `.loaded` · **cấm** OfflineDemo focus |
| Wire | hub/detail/incident → push (prior) |

## Notes (edit-mobile-feature 2026-09-16)

- Appear: `GET gis/summary-by-type` · loại **default off** (web `layersVisible`)
- Tick loại → `geojson/{type}` + `lod=detail` + padded bbox · loại lớn z&lt;14 = `gis/clusters?layer=`
- Zoom idle 450ms · skip khi coverage còn (`shouldReloadOverlay`) · cancel pinch **không** toast · **cấm** `geojson/all`
- iOS **Lớp** = `LinmSheet` + `LinmAssetKchtPict` + toggle · Android chip **Lớp** + trailing **Danh sách**
- Empty hint `gis.map.layersEmpty`
- **GAP-MOB-EDIT-SIL-01:** skip map hide = `guard ReleaseFlags.allowsClipMap` trên handler · `navigationDestination(isPresented: $showGisMap)` · **cấm** `Binding(get: { flag && showGisMap })` — Swift SIL `invalid reuse after initialization failure`. dest **iPhone 17 Pro Max** `xcodebuild` **PASS**.`

## Verify

## Verify

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

| Gate | Result |
|------|--------|
| xcodegen + xcodebuild iPhone 17 Pro | **PASS** (2026-09-16 type-filter + lod) |
| Step 4b | **N/A** |
| e2e / start:std / mfeStdUrl | **skipped** |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios · edit-mobile-feature |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T07:50:00.000Z |
| versionGate | rechecked |
| taskId | `task_ad6cbe30` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 versionGate=rechecked -->
