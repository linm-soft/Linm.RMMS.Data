# Dev — Implement — gis-map (iOS)

| | |
|--|--|
| Feature | `gis-map` |
| Title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| Role | `dev` · `/agent-dev-ios` |
| status | **confirmed** |
| taskId | `task_3f6f4524` |
| packKind | **map** |
| changeScope | `new_page` |
| route_confirm | **route_a** |
| updatedAt | `2026-08-31T00:57:35.000Z` |

## Shipped

| Area | Path / note |
|------|-------------|
| Feature | `Presentation/Features/GisMap/*` — View · ViewModel · UiState · `#sc-gis-map` |
| Domain | `GisMapModels` · `LoadGisOverlayUseCase` · `GisRepository` |
| Data | `GisGeoJsonDto` · `GisRepositoryImpl` → `GET gis/geojson/{layer}` |
| Focus | reuse `FetchRoadAssetByIdUseCase` · `GET asset/road-assets/{id}` |
| DI | `AppContainer.loadGisOverlayUseCase` · `AppRouter` `GisMapViewModel` |
| Wire hub | `AssetHubViewModel.setOnOpenGisMap` · tile/row → push (không toast) |
| Wire detail | `assetDetailViewModel.setOnOpenMap` → push + `gisFocusAssetId` |
| Wire incident | list/detail map → Home + `#sc-gis-map` (**≠** patrol-map) |
| Chrome | `LinmTopBar` Tài sản/Lớp · search · basemap · legend (+ Hành lang) · MapKit |
| Fail | demo OMS `map-oms.js` SSOT + toast · map vẫn mở |

## Verify

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
# ** BUILD SUCCEEDED **
```

| Gate | Result |
|------|--------|
| xcodegen | **PASS** |
| xcodebuild iPhone 17 Pro | **PASS** |
| Step 4b | **N/A** (SA) |
| e2e / start:std / mfeStdUrl | **skipped** (cấm Dev · queued QA) |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:57:35.000Z |
| versionGate | rechecked |
| contentHash | sha256:gis-map-control-hint-20260831 |
| taskId | `task_3f6f4524` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 versionGate=rechecked -->
