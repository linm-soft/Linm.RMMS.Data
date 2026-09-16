# Implement — iOS — patrol-offline

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| role | `dev` · `/edit-mobile-feature` · `/dev-ios-swiftui` |
| task | **T-IOS-PAT-OFF-APPLY** |
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
| Sync apply | `OfflineQueueRepositoryImpl.syncPending` · checkIn → `POST patrol/sessions/{sessionId}/check-ins` · incident → `POST incident/incidents` (`CreateIncidentCatalog.prepare`) · remove **chỉ** 2xx · mutex join in-flight · **không** `clearPending` |
| Reconnect | `OfflineReconnectSync` · `NetworkPathMonitor.observeOnline` (`path.status == .satisfied` · **cấm** grade `.yeu`) · false→true + cold start leftover + login + `scenePhase.active` → `syncPending` · toast **chỉ** N>0 · skip guest |
| Receipt | optional `POST integration/sync/offline-batch` sau ≥1 OK · `RecordCount=synced` · ignore receipt fail |
| Fail | `attempted>0 && synced==0` → `OfflineSyncError` · toast fail · giữ queue |
| UI | keep `#sc-patrol-offline` · `#btn-sync` unchanged · list reload `.linmOfflineQueueDidChange` |
| Wire | `AppContainer.offlineReconnectSync` · `AppRouter.onAppear` start |

## VERIFY

| Gate | Result |
|------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` dest **iPhone 17 Pro** | **PASS** |
| BFF `dotnet build` | **N/A** this delta (reuse live) |
| Step 4b | **N/A** — reuse live check-ins + incident create + offline-batch |
| e2e / start:std | **cấm** (queued QA) |

## Files

- `Domain/UseCases/OfflineReconnectSync.swift`
- `Domain/Repositories/NetworkStatusRepository.swift` (`observeOnline`)
- `Data/Network/NetworkPathMonitor.swift`
- `Data/Repositories/OfflineQueueRepositoryImpl.swift` (mutex + incident replay)
- `App/AppContainer.swift` · `App/AppRouter.swift`
- `Presentation/Features/PatrolOffline/PatrolOfflineViewModel.swift`
- `Presentation/Features/Me/MeViewModel.swift`

## Debt

- Legacy queue rows thiếu `sessionId`/`checkInBody`/`incidentBody` → skip (không clear)
- GAP-MOB-ACT-PAT-OFFLINE-01 patrol-home «Đồng bộ» stub Defer
- **Cấm revert:** auto-reconnect · incident replay · mutex
