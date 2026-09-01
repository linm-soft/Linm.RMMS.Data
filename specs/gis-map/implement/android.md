# Dev — Implement — gis-map (Android)

| | |
|--|--|
| Feature | `gis-map` |
| Title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| Role | `dev` · `/edit-mobile-feature` · `/agent-dev-android` · `/agent-dev-oms-map` |
| status | **confirmed** |
| taskId | `task_ad6cbe30` |
| packKind | **map** |
| changeScope | `edit_page` (cleanup_mock) |
| route_confirm | **route_a** |
| updatedAt | `2026-09-01T07:50:00.000Z` |

## Shipped

| Area | Path / note |
|------|-------------|
| Feature | `presentation/feature/gismap/*` — Screen · ViewModel · UiState · `#sc-gis-map` |
| Domain | `GisMapModels` · `LoadGisOverlayUseCase` · `GisRepository` |
| Data | Gis geojson DTO · `GET gis/geojson/{layer}` |
| Focus | `FetchRoadAssetByIdUseCase` · **chỉ** Loaded · **cấm** OfflineDemo focus |
| Chrome | TopBar Danh sách · basemap · legend (không search / không Hành lang — dual) |

## Notes (cleanup_mock)

- Removed `GisMapDemoOverlay` · `usedDemo` → `loadFailed`
- Fail → empty/partial live + toast `gis.map.loadFallback` · map **vẫn mở**
- Empty GET OK → map trống · **cấm** demo SSOT
- Step 4b **N/A** · **cấm** mfeStdUrl

## Verify

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```

| Gate | Result |
|------|--------|
| assembleDebug | **PASS** |
| Step 4b | **N/A** |
| e2e / start:std / mfeStdUrl | **skipped** |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android · edit-mobile-feature |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T07:50:00.000Z |
| versionGate | rechecked |
| taskId | `task_ad6cbe30` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 versionGate=rechecked -->
