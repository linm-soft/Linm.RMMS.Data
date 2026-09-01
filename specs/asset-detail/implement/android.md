# Dev — Implement — asset-detail (Android)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| packKind | `screen` |
| changeScope | `new_page` |
| route_confirm | `route_a` |
| taskId | `task_c6001628` |
| updatedAt | `2026-08-30T21:50:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-AND-AL-01 | **done** | `AssetListViewModel.RowTap` → `onOpenDetail(id)` · nav `asset-detail/{id}` |
| T-AND-AD-01 | **done** | `presentation/feature/assetdetail/*` · Compose parity · GET by id |
| T-BE / T-BFF | **n/a · reuse** | GetById live · proxy catch-all |
| Step 4b | **N/A** | SA chốt |

## Ship summary

- **Screen** `#sc-asset-detail` · frame 412×915 · push (không sheet)
- **Entry:** list row → `navigate("asset-detail/$id")`
- **API:** Retrofit `@GET("asset/road-assets/{id}")` · `FetchRoadAssetByIdUseCase` · `AssetRepository.fetchById`
- **DTO:** `RoadAssetItemDto` + `lat`/`lng` · `BffRoadAssetByIdResponse` · mapper reuse `typeLabel`
- **Bind:** parity iOS · title **Chi tiết tài sản** · back icon-only · hero code **24**
- **404** → EmptyChrome · **GET fail** → demo `TS-20260810-014` + toast
- **CTA** Ghim trên bản đồ → toast P1 (gis-map chưa ship)
- **DI:** Hilt `@HiltViewModel` · repo bind sẵn `AuthBindModule`

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (verify only) |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files

| Path | Change |
|------|--------|
| `presentation/feature/assetdetail/*` | NEW screen |
| `domain/model/AssetDetailModels.kt` | NEW |
| `domain/usecase/FetchRoadAssetByIdUseCase.kt` | NEW |
| `domain/repository/AssetRepository.kt` | +`fetchById` |
| `data/repository/AssetRepositoryImpl.kt` | +GET by id |
| `data/remote/AssetListDto.kt` · `ApiService.kt` | +by-id + lat/lng |
| `data/mapper/AssetDtoMapper.kt` | +detail / routeKm / gps |
| `presentation/feature/assetlist/*` | push wire |
| `presentation/navigation/MainTabScreen.kt` | route `asset-detail/{id}` |
| `presentation/copy/LinmCopy.kt` | `asset.detail.*` |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-control-hint-20260830 |
| designContentHash | sha256:asset-detail-design-20260830 |
| saContentHash | sha256:asset-detail-solution-20260830 |
| tlContentHash | sha256:asset-detail-tl-task-20260830 |
| androidContentHash | sha256:asset-detail-implement-android-20260830 |
| taskId | `task_c6001628` |

---
<!-- Version meta: skillId=agent-dev-android skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
