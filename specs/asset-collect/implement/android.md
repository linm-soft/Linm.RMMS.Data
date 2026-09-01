# Dev — Implement — asset-collect (Android)

| Field | Value |
|-------|-------|
| feature | `asset-collect` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| packKind | `screen` |
| changeScope | `new_page` |
| route_confirm | `route_a` |
| taskId | `task_ea1c812a` |
| updatedAt | `2026-08-31T00:15:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-AND-ASSET-COLLECT | **done** | Compose parity · CameraX still · Status + photo label dual |
| T-BE / T-BFF | **n/a · reuse** | same paths as iOS · **không** Write BFF/BE |
| MEDIA-01 | **DEFER** | local PhotoRow only |
| Step 4b | **N/A** | SA/TL chốt |

## Ship summary

- **Screen** `#sc-asset-collect` · `DES-MOB-ASSET-COLLECT` · push under HomeStack
- **Entry:** hub `TileCollect` → `navigate("asset-collect")` (toast stub removed)
- **API:** same BFF paths · `ApiService.roadAssetInitData` + `createRoadAsset`
- **Bind:** type/status Select · name · routeKm · GPS · PhotoRow CameraX · CTA **Thêm tài sản**
- **Android:** back icon-only OK · Status Select + photo label **bắt buộc** (STATUS-01)
- **GPS deny / leave:** `GpsDenyDialog` + in-app leave · **cấm** system AlertDialog

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (no BFF write · verify only) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `presentation/feature/assetcollect/*` | NEW screen + VM + state |
| `domain/model/RoadAssetCreateModels.kt` | NEW |
| `domain/usecase/FetchRoadAssetInitDataUseCase.kt` | NEW |
| `domain/usecase/CreateRoadAssetUseCase.kt` | NEW |
| `domain/usecase/FetchAssetTypesUseCase.kt` | +`executeLiveOnly` |
| `domain/repository/AssetRepository.kt` | +init-data + create |
| `data/repository/AssetRepositoryImpl.kt` | impl |
| `data/remote/ApiService.kt` · `AssetListDto.kt` | GET init · POST create |
| `data/mapper/AssetDtoMapper.kt` | +initData |
| `presentation/feature/assethub/*` | wire collect |
| `presentation/navigation/MainTabScreen.kt` | route `asset-collect` |
| `presentation/copy/LinmCopy.kt` | `asset.collect.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
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
| contentHash | sha256:asset-collect-implement-android-20260831 |
| taskId | `task_ea1c812a` |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked dorGate=PASS -->
