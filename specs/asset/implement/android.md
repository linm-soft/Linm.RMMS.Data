# Dev — Implement — asset (Android)

| Field | Value |
|-------|-------|
| Feature | `asset` |
| Title | [Mobile] List danh mục tài sản · cleanup mock |
| Role | `dev` · `/edit-mobile-feature` · `/agent-dev-android` |
| status | **PASS** |
| changeScope | `edit_page` |
| packKind | **`list`** · `#sc-asset-list` · `DES-MOB-ASSET-LIST` |
| taskId | `task_dc98ed58` · cleanup_mock |
| updatedAt | `2026-09-01T03:40:00.000Z` |

## Summary

Live-only dual parity iOS: gỡ `AssetListCopy.demoRows` fallback. EmptyChrome + `LoginToastHub` loadFail · **cấm** demo stamp toast. Search + row→detail giữ. Step 4b **N/A** · BE empty OK.

## Notes (cleanup mock)

| Before | After |
|--------|-------|
| UseCase empty/catch → demoRows | `FetchAssetListOutcome.Loaded` / `LoadFailed` |
| UiState default demoRows | `items = emptyList()` |
| fake 2 rows | EmptyChrome `asset.list.empty.title` |
| — | toast `asset.list.toast.loadFail` |

## Files

| Path | Change |
|------|--------|
| `domain/usecase/FetchAssetListUseCase.kt` | Outcome live-only |
| `presentation/feature/assetlist/AssetListViewModel.kt` | toastHub fail |
| `presentation/feature/assetlist/AssetListScreen.kt` | EmptyChrome |
| `presentation/feature/assetlist/AssetListUiState.kt` | no demo default |
| `presentation/copy/LinmCopy.kt` | empty + loadFail |
| `domain/model/AssetListModels.kt` | comment sibling-only |

## ACTION WORK GATE

| Action | Result |
|--------|--------|
| Search | debounce → GET `search=` · **work** |
| View (row) | navigate detail · **work** |
| Create / Edit / Copy | **N/A** — không nút list P1 |

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
| generatedAt | 2026-09-01T03:40:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-mobile-edit-list-20260823 |
| bffContentHash | sha256:asset-mobile-list-road-assets-proxy-20260823 |
| taskId | task_dc98ed58 |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
