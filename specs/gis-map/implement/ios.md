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
| updatedAt | `2026-09-01T07:50:00.000Z` |

## Shipped

| Area | Path / note |
|------|-------------|
| Feature | `Presentation/Features/GisMap/*` — View · ViewModel · UiState · `#sc-gis-map` |
| Domain | `GisMapModels` · `LoadGisOverlayUseCase` · `GisRepository` |
| Data | `GisGeoJsonDto` · `GisRepositoryImpl` → `GET gis/geojson/{layer}` |
| Focus | `FetchRoadAssetByIdUseCase` · **chỉ** `.loaded` · **cấm** OfflineDemo focus |
| Wire | hub/detail/incident → push (prior) |

## Notes (cleanup_mock)

- Removed `GisMapDemoOverlay` · `usedDemo` → `loadFailed`
- Fail → empty/partial live + toast `gis.map.loadFallback` («…bản đồ trống») · map **vẫn mở**
- Empty GET OK → map trống · **cấm** demo SSOT pins
- Search (iOS) → `loadOverlay.execute(search:)` live filter
- Step 4b **N/A** · **cấm** mfeStdUrl

## Verify

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

| Gate | Result |
|------|--------|
| xcodegen + xcodebuild iPhone 17 Pro | **PASS** |
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
