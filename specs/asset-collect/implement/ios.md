# Dev — Implement — asset-collect (iOS)

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
| status | **PASS** |
| packKind | `screen` |
| changeScope | `new_page` |
| route_confirm | `route_a` |
| taskId | `task_ea1c812a` |
| updatedAt | `2026-08-31T00:15:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-IOS-ASSET-COLLECT | **done** | form + hub wire + types/init/GPS/PhotoRow + POST create |
| T-BE / T-BFF | **n/a · reuse** | Create + init-data + types LIVE · catch-all · **không** Write BFF/BE |
| MEDIA-01 | **DEFER** | local PhotoRow only · **không** invent upload |
| Step 4b | **N/A** | SA/TL chốt · Create live · media DEFER |

## Ship summary

- **Screen** `#sc-asset-collect` · `DES-MOB-ASSET-COLLECT` · push (không sheet)
- **Entry:** hub tile Thủ công → `setOnOpenCollect` → `showAssetCollect` (toast stub removed)
- **API:** `GET integration/asset-types` (live only) · `GET asset/road-assets/init-data` · `POST asset/road-assets` · optional sessions/routes prefill
- **Bind:** type Select · name · routeKm parse `Route`+`KmFrom` · GPS pin · status default `tot` · PhotoRow local · CTA **Thêm tài sản**
- **Toast OK:** `Đã thêm tài sản · {Code}` · fail giữ form · **cấm** invent Code
- **GPS deny / leave dirty:** in-app modals · CTA off khi deny
- **Router:** nest under AssetHub · DI `fetchRoadAssetInitData` + `createRoadAsset`

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
| `Presentation/Features/AssetCollect/*` | NEW screen + VM + state |
| `Domain/Entities/RoadAssetCreateModels.swift` | NEW body/init/parser |
| `Domain/UseCases/FetchRoadAssetInitDataUseCase.swift` | NEW |
| `Domain/UseCases/CreateRoadAssetUseCase.swift` | NEW |
| `Domain/UseCases/FetchAssetTypesUseCase.swift` | +`executeLiveOnly` |
| `Domain/Repositories/AssetRepository.swift` | +init-data + create |
| `Data/Repositories/AssetRepositoryImpl.swift` | GET init-data · POST create |
| `Data/Dto/AssetListDto.swift` | init/create DTOs |
| `Data/Mappers/AssetDtoMapper.swift` | +initData |
| `Presentation/Features/AssetHub/AssetHubViewModel.swift` | wire collect push |
| `App/AppRouter.swift` · `App/AppContainer.swift` | nav + DI |
| `Presentation/Shared/LinmCopy.swift` | `asset.collect.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| priorControlHintHash | sha256:asset-collect-control-hint-20260830 |
| priorRealDataHash | sha256:asset-collect-real-data-20260830 |
| priorDesignHash | sha256:asset-collect-design-20260831 |
| priorSaHash | sha256:asset-collect-sa-solution-20260830 |
| priorTlHash | sha256:asset-collect-tl-task-20260830 |
| contentHash | sha256:asset-collect-implement-ios-20260831 |
| taskId | `task_ea1c812a` |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-dev-ios skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked dorGate=PASS -->
