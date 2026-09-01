# Dev — Implement — asset-detail (iOS)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| packKind | `screen` |
| changeScope | `new_page` |
| route_confirm | `route_a` |
| taskId | `task_c6001628` |
| updatedAt | `2026-08-30T21:50:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-IOS-AL-01 | **done** | `AssetListViewModel.rowTap` → `setOnOpenDetail(id)` · toast removed |
| T-IOS-AD-01 | **done** | `Presentation/Features/AssetDetail/*` · GET by id · hero+rows+CTA · demo fallback |
| T-BE / T-BFF | **n/a · reuse** | GetById live · proxy catch-all · **không** Write BFF/BE |
| Step 4b | **N/A** | SA chốt |

## Ship summary

- **Screen** `#sc-asset-detail` · `DES-MOB-ASSET-DETAIL` · push (không sheet)
- **Entry:** list `row-asset-*` → push + `Id`
- **API:** `GET asset/road-assets/{id}` · `FetchRoadAssetByIdUseCase` · extend `AssetRepository.fetchById`
- **DTO:** `RoadAssetItemDto` + `lat`/`lng` · mapper `detail` + reuse `typeLabel`
- **Bind:** Mã TS · Loại · Tuyến · lý trình · Tọa độ (ẩn null) · CTA **Ghim trên bản đồ** (toast P1 · gis-map chưa ship)
- **404** → EmptyChrome · **GET fail** → demo `TS-20260810-014` + toast · **cấm** fake 200
- **Copy:** title **Chi tiết** · back **Tài sản** · hero code **28** · caption **13**
- **Router:** nest `showAssetDetail` under AssetList · DI `AppContainer.fetchRoadAssetByIdUseCase`

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **PASS** |
| BFF `dotnet build` | **PASS** (no BFF write · verify only) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `Presentation/Features/AssetDetail/*` | NEW screen |
| `Domain/Entities/AssetDetailModels.swift` | NEW |
| `Domain/UseCases/FetchRoadAssetByIdUseCase.swift` | NEW |
| `Domain/Repositories/AssetRepository.swift` | +`fetchById` |
| `Data/Repositories/AssetRepositoryImpl.swift` | +GET by id |
| `Data/Dto/AssetListDto.swift` | +lat/lng |
| `Data/Mappers/AssetDtoMapper.swift` | +detail / routeKm / gps |
| `Presentation/Features/AssetList/AssetListViewModel.swift` | push wire |
| `App/AppRouter.swift` · `App/AppContainer.swift` | nav + DI |
| `Presentation/Shared/LinmCopy.swift` | `asset.detail.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-control-hint-20260830 |
| designContentHash | sha256:asset-detail-design-20260830 |
| saContentHash | sha256:asset-detail-solution-20260830 |
| tlContentHash | sha256:asset-detail-tl-task-20260830 |
| iosContentHash | sha256:asset-detail-implement-ios-20260830 |
| taskId | `task_c6001628` |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
