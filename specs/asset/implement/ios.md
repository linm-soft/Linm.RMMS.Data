# Dev — Implement — asset (iOS)

| Field | Value |
|-------|-------|
| Feature | `asset` |
| Title | [Mobile] List danh mục tài sản |
| Role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| changeScope | `edit_page` |
| packKind | **`list`** · `#sc-asset-list` · `DES-MOB-ASSET-LIST` |
| taskId | `task_bee51c9e` · T-IOS-LIST-01 |
| dest | **iPhone 17 Pro** · **BUILD SUCCEEDED** |
| updatedAt | `2026-08-29T17:04:05.000Z` |

## Summary

Ship `#sc-asset-list` SwiftUI list · hub tile **Danh sách** push thay toast · GET `asset/road-assets` · typeLabel mapper · demo 2 rows fallback · row toast **Chi tiết tài sản** · **cấm** detail push / filter / sibling · Step 4b **N/A**.

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/AssetList/AssetListView.swift` | **NEW** · TopBar Tài sản+chev · Search · LinmListRow · cube icon |
| `Presentation/Features/AssetList/AssetListViewModel.swift` | **NEW** · appear/search debounce/row toast |
| `Presentation/Features/AssetList/AssetListUiState.swift` | **NEW** |
| `Domain/Entities/AssetListModels.swift` | **NEW** · AssetListItem + demoRows SSOT |
| `Domain/Repositories/AssetRepository.swift` | **NEW** |
| `Domain/UseCases/FetchAssetListUseCase.swift` | **NEW** · fail/empty → demo |
| `Data/Dto/AssetListDto.swift` | **NEW** |
| `Data/Mappers/AssetDtoMapper.swift` | **NEW** · listRow + typeLabel |
| `Data/Repositories/AssetRepositoryImpl.swift` | **NEW** · GET `asset/road-assets` |
| `Presentation/Features/AssetHub/AssetHubViewModel.swift` | tileList → `onOpenList` |
| `App/AppContainer.swift` | DI AssetRepository + FetchAssetListUseCase |
| `App/AppRouter.swift` | showAssetList nested push · wire callbacks |
| `Presentation/Shared/LinmCopy.swift` | `asset.list.*` |

## IA / API

- Entry: `asset-hub` tile-list → push `#sc-asset-list`
- Back: pop hub · **cấm** reimplement hub
- Appear / search debounce → `GET asset/road-assets?page=1&pageSize=50&search=`
- Row tap → `LinmToast` **Chi tiết tài sản** · **cấm** `#sc-asset-detail`
- Fail/empty/offline → demo 2 rows · list vẫn mở

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` dest **iPhone 17 Pro** | **BUILD SUCCEEDED** |
| Mobile.Bff `dotnet build` | **PASS** (reuse proxy · no AssetListController) |
| Step 4b / e2e / mfeStdUrl | **N/A** / **cấm** Dev |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
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
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
