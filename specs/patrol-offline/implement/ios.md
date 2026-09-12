# Implement — iOS — patrol-offline

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` |
| task | **T-IOS-PAT-OFF-APPLY** |
| changeScope | `edit_page` · gap=`offline_sync_apply_checkins` |
| status | **done** |
| taskId | `task_8bf4b63c` |
| writtenAt | `2026-09-12T14:45:00.000Z` |
| contentHash | `sha256:patrol-offline-delta-apply-checkins-20260912` |
| skillVersion | `2026.08.19.29` |

## Delta

| Area | Change |
|------|--------|
| Enqueue | `SubmitPatrolCheckInUseCase` persist `sessionId` + `CreatePatrolCheckInBody` dual trên `OfflineQueueItem` |
| Model | `OfflineQueueItem.sessionId` · `.checkInBody` · `CreatePatrolCheckInBody: Codable` |
| Sync | `OfflineQueueRepositoryImpl.syncPending` replay POST `patrol/sessions/{sessionId}/check-ins` per pending `checkIn` · remove **chỉ** 2xx · incident P2 keep · **không** `clearPending` |
| Receipt | optional `POST integration/sync/offline-batch` sau ≥1 OK · `RecordCount=synced` · ignore receipt fail |
| Fail | `attempted>0 && synced==0` → `OfflineSyncError` · toast fail · giữ queue |
| UI | keep `#sc-patrol-offline` zones · TopBar sync `#btn-sync` unchanged |
| Wire | `AppContainer` inject `patrol` vào offline repo |

## VERIFY

| Gate | Result |
|------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild` dest **iPhone 17 Pro** | **PASS** |
| BFF `dotnet build` | **PASS** (shared) |
| Step 4b | **N/A** — reuse live check-ins + offline-batch |
| e2e / start:std | **cấm** (queued QA) |

## Files

- `Domain/Entities/PatrolOfflineModels.swift`
- `Domain/Entities/PatrolCheckInModels.swift`
- `Domain/UseCases/SubmitPatrolCheckInUseCase.swift`
- `Domain/UseCases/CamPatrolUseCases.swift` (incident init nil payload)
- `Data/Repositories/OfflineQueueRepositoryImpl.swift`
- `App/AppContainer.swift`

## Debt

- Incident sync apply = P2 keep
- Legacy queue rows thiếu `sessionId`/`checkInBody` → skip (không clear)
- GAP-MOB-ACT-PAT-OFFLINE-01 patrol-home «Đồng bộ» stub Defer
