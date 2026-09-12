# Implement — Android — patrol-offline

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` |
| task | **T-AND-PAT-OFF-APPLY** |
| changeScope | `edit_page` · gap=`offline_sync_apply_checkins` |
| status | **done** |
| taskId | `task_8bf4b63c` |
| writtenAt | `2026-09-12T14:45:00.000Z` |
| contentHash | `sha256:patrol-offline-delta-apply-checkins-20260912` |
| skillVersion | `2026.08.19.29` |

## Delta

| Area | Change |
|------|--------|
| Enqueue | `SubmitPatrolCheckInUseCase` persist `sessionId` + `CreatePatrolCheckInBody` dual |
| Model | `OfflineQueueItem.sessionId` · `.checkInBody` · Moshi `@Json` kind names |
| Store | `OfflineQueueStore` v2 JSON Moshi · migrate legacy pipe v1 once |
| Sync | `OfflineQueueRepositoryImpl.syncPending` replay POST check-ins · remove **chỉ** 2xx · incident P2 keep |
| Receipt | optional offline-batch sau ≥1 OK · ignore receipt fail |
| Fail | `OfflineSyncException` khi attempted>0 && synced==0 |
| UI | keep Compose `#sc-patrol-offline` · `#btn-sync` |

## VERIFY

| Gate | Result |
|------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** (shared) |
| Step 4b | **N/A** |
| e2e / start:std | **cấm** (queued QA) |

## Files

- `domain/model/PatrolOfflineModels.kt`
- `domain/usecase/SubmitPatrolCheckInUseCase.kt`
- `data/local/OfflineQueueStore.kt`
- `data/repository/OfflineQueueRepositoryImpl.kt`

## Debt

- Incident sync = P2
- Legacy pipe rows không có payload → skip
- patrol-home «Đồng bộ» stub Defer
