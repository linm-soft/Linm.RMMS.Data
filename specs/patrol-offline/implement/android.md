# Implement — Android — patrol-offline

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| role | `dev` · `/edit-mobile-feature` · `/dev-android-compose` |
| task | **T-AND-PAT-OFF-APPLY** |
| changeScope | `edit_page` · gap=`offline_sync_reconnect` |
| status | **done** |
| taskId | `task_8bf4b63c` |
| writtenAt | `2026-09-16T14:00:00.000Z` |
| contentHash | `sha256:patrol-offline-reconnect-sync-20260916` |
| skillVersion | `2026.08.19.29` |

## Delta

| Area | Change |
|------|--------|
| Enqueue | `SubmitPatrolCheckInUseCase` persist `sessionId` + `CreatePatrolCheckInBody` · incident persist `incidentBody` |
| Model | `OfflineQueueItem.sessionId` · `.checkInBody` · `.incidentBody` |
| Store | `OfflineQueueStore` v2 JSON Moshi · migrate legacy pipe v1 once |
| Sync apply | `OfflineQueueRepositoryImpl.syncPending` · checkIn → `POST patrol/sessions/{id}/check-ins` · incident → `POST incident/incidents` · remove **chỉ** 2xx · `Mutex` join in-flight |
| Reconnect | `OfflineReconnectSync` Hilt `@Singleton` · `observeOnline()` (`NET_CAPABILITY_INTERNET` · **cấm** grade Yeu) · false→true + `Application.onCreate` leftover + login + `MainActivity.onStart` → `syncPending` · toast **chỉ** N>0 · skip guest |
| Receipt | optional offline-batch sau ≥1 OK · ignore receipt fail |
| Fail | `OfflineSyncException` khi attempted>0 && synced==0 |
| UI | keep Compose `#sc-patrol-offline` · `#btn-sync` · `didSync` reload list + Me badge |

## VERIFY

| Gate | Result |
|------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **N/A** this delta (reuse live) |
| Step 4b | **N/A** |
| e2e / start:std | **cấm** (queued QA) |

## Files

- `domain/usecase/OfflineReconnectSync.kt`
- `domain/repository/NetworkStatusRepository.kt` (`observeOnline`)
- `data/repository/NetworkStatusRepositoryImpl.kt`
- `data/repository/OfflineQueueRepositoryImpl.kt` (mutex + incident replay)
- `app/RmmsApplication.kt` · `app/MainActivity.kt`
- `presentation/feature/login/LoginViewModel.kt`
- `presentation/feature/patroloffline/PatrolOfflineViewModel.kt`
- `presentation/feature/me/MeViewModel.kt`

## Debt

- Legacy pipe rows không có payload → skip
- patrol-home «Đồng bộ» stub Defer
- **Cấm revert:** auto-reconnect · incident replay · mutex · EmptyChrome dashed+title+hint (parity iOS)

## Notes (`/edit-mobile-feature` 2026-09-16)

- Empty chrome: `EmptyChrome` title `offline.empty.title` + hint `offline.empty.hint` + dashed rect = iOS `ContentUnavailableView` (`GAP-MOB-EDIT-EMPTY-01` CLOSED).
- `assembleDebug` dest.
