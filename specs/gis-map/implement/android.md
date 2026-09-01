# Dev — Implement — gis-map (Android)

| | |
|--|--|
| Feature | `gis-map` |
| Title | [Mobile] [Tài sản] -> Xem trên bản đồ |
| Role | `dev` · `/agent-dev-android` |
| status | **confirmed** |
| taskId | `task_3f6f4524` |
| packKind | **map** |
| changeScope | `new_page` |
| route_confirm | **route_a** |
| updatedAt | `2026-08-31T00:57:35.000Z` |

## Shipped

| Area | Path / note |
|------|-------------|
| Feature | `presentation/feature/gismap/*` — Screen · ViewModel · UiState · `#sc-gis-map` |
| Domain | `GisMapModels` · `LoadGisOverlayUseCase` · `GisRepository` |
| Data | `GisRepositoryImpl` (ResponseBody + JSONObject) · `ApiService.gisGeoJson` |
| Focus | reuse `FetchRoadAssetByIdUseCase` |
| Hilt | `AuthBindModule` binds `GisRepository` |
| Nav | HomeStack `gis-map` · `gis-map/{assetId}` · `pendingGisMap` từ Incident |
| Wire hub | `AssetHubScreen.onOpenGisMap` · TileMap/RowMap → navigate |
| Wire detail | `AssetDetailScreen.onOpenMap` → `gis-map/{id}` |
| Wire incident | list/detail → Home + `gis-map` (**≠** patrol-map) |
| Chrome | `LinmTopBar` + trailing **Danh sách** · basemap · legend All/TS/SC · OSM/Esri |
| Fail | demo OMS SSOT + toast · map vẫn mở |

## Verify

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
# BUILD SUCCESSFUL
```

| Gate | Result |
|------|--------|
| assembleDebug | **PASS** |
| BFF `dotnet build` | **PASS** (baseline · Step 4b N/A) |
| Step 4b / new-endpoint | **N/A** (SA) |
| e2e / start:std / mfeStdUrl | **skipped** (cấm Dev · queued QA) |
| ERP.* | **none** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T00:57:35.000Z |
| versionGate | rechecked |
| contentHash | sha256:gis-map-control-hint-20260831 |
| taskId | `task_3f6f4524` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 versionGate=rechecked -->
