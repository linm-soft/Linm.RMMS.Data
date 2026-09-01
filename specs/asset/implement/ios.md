# Dev — Implement — asset (iOS)

| Field | Value |
|-------|-------|
| Feature | `asset` |
| Title | [Mobile] List danh mục tài sản · cleanup mock |
| Role | `dev` · `/edit-mobile-feature` · `/agent-dev-ios` |
| status | **PASS** |
| changeScope | `edit_page` |
| packKind | **`list`** · `#sc-asset-list` · `DES-MOB-ASSET-LIST` |
| taskId | `task_dc98ed58` · cleanup_mock |
| dest | **iPhone 17 Pro** · **BUILD SUCCEEDED** |
| updatedAt | `2026-09-01T03:40:00.000Z` |

## Summary

Live-only `#sc-asset-list`: gỡ empty/fail → `AssetListCopy.demoRows`. GET OK empty = EmptyChrome · GET fail = [] + toast (**cấm** «Đang dùng dữ liệu mẫu»). Search debounce + row → detail giữ. Step 4b **N/A** · BE empty OK.

## Notes (cleanup mock)

| Before | After |
|--------|-------|
| `FetchAssetListUseCase` empty/catch → demoRows | `FetchAssetListOutcome.loaded` / `.loadFailed` |
| UiState default demoRows | `items = []` |
| luôn có 2 fake rows | EmptyChrome `asset.list.empty.*` |
| — | toast `asset.list.toast.loadFail` (no demo stamp) |

`AssetListCopy.demoRows` giữ cho sibling adjust only · **cấm** list path dùng.

## Files

| Path | Change |
|------|--------|
| `Domain/UseCases/FetchAssetListUseCase.swift` | Outcome live-only |
| `Presentation/Features/AssetList/AssetListViewModel.swift` | fail toast · empty items |
| `Presentation/Features/AssetList/AssetListView.swift` | EmptyChrome |
| `Presentation/Features/AssetList/AssetListUiState.swift` | no demo default |
| `Presentation/Shared/LinmCopy.swift` | empty + loadFail keys |
| `Domain/Entities/AssetListModels.swift` | comment sibling-only |

## ACTION WORK GATE

| Action | Result |
|--------|--------|
| Search | debounce → GET `search=` · **work** |
| View (row) | push `#sc-asset-detail` · **work** |
| Create / Edit / Copy | **N/A** — không nút trên list P1 · **không** GAP-P2-ACT |

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` dest **iPhone 17 Pro** | **BUILD SUCCEEDED** |
| Mobile.Bff `dotnet build` | **PASS** |
| Step 4b / e2e / mfeStdUrl | **N/A** / **cấm** Dev |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
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
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
