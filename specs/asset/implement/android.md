# Dev — Implement — asset (Android)

| Field | Value |
|-------|-------|
| Feature | `asset` |
| Title | [Mobile] List danh mục tài sản |
| Role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| changeScope | `edit_page` |
| packKind | **`list`** · `#sc-asset-list` · `DES-MOB-ASSET-LIST` |
| taskId | `task_bee51c9e` · T-AND-LIST-01 |
| updatedAt | `2026-08-29T17:04:05.000Z` |

## Summary

Ship `#sc-asset-list` Compose · dual parity iOS · hub `TileList` navigate `asset-list` · GET `asset/road-assets` · typeLabel · demo 2 rows · row toast detail · Step 4b **N/A**.

## Files

| Path | Change |
|------|--------|
| `presentation/feature/assetlist/AssetListScreen.kt` | **NEW** · TopBar · Search · ListRow · ViewInAr cube |
| `presentation/feature/assetlist/AssetListViewModel.kt` | **NEW** · Hilt · debounce search · toast |
| `presentation/feature/assetlist/AssetListUiState.kt` | **NEW** |
| `domain/model/AssetListModels.kt` | **NEW** · demoRows SSOT |
| `domain/repository/AssetRepository.kt` | **NEW** |
| `domain/usecase/FetchAssetListUseCase.kt` | **NEW** |
| `data/remote/AssetListDto.kt` | **NEW** |
| `data/mapper/AssetDtoMapper.kt` | **NEW** |
| `data/repository/AssetRepositoryImpl.kt` | **NEW** |
| `data/remote/ApiService.kt` | `@GET("asset/road-assets")` |
| `di/NetworkModule.kt` | `@Binds AssetRepository` |
| `presentation/feature/assethub/AssetHubViewModel.kt` | TileList → `onOpenList` |
| `presentation/feature/assethub/AssetHubScreen.kt` | `onOpenAssetList` |
| `presentation/navigation/MainTabScreen.kt` | route `asset-list` |
| `presentation/copy/LinmCopy.kt` | `asset.list.*` |

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **BUILD SUCCESSFUL** |
| Mobile.Bff `dotnet build` | **PASS** |
| Step 4b / e2e / mfeStdUrl | **N/A** / **cấm** Dev |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-29T17:04:05.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-mobile-edit-list-20260823 |
| bffContentHash | sha256:asset-mobile-list-road-assets-proxy-20260823 |
| taskId | task_bee51c9e |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
