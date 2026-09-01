# Dev — Implement — patrol-offline (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| taskId | `task_93163b23` |
| slash | `/edit-mobile-feature` · cleanup_mock |
| status | **confirmed** |
| changeScope | `edit_page` · live-only local queue |
| updatedAt | `2026-09-01T08:10:00.000Z` |

## Cleanup mock (this turn)

- **Removed** `PatrolOfflineCopy.demoItems` + first-launch seed
- `OfflineQueueStore.ensureLiveOnly()` purges legacy `demo-*` ids · **cấm** re-seed
- Empty queue → `EmptyChromeView` (`offline-empty`) · **cấm** «Đang dùng dữ liệu mẫu»
- Seed note: **BE empty OK** — queue chỉ có record từ writer enqueue thật (sibling P2)

## Layers

| Presentation | `PatrolOffline/*` · EmptyChrome · AppRouter entries |
| Domain | use cases · **no** demo Copy |
| Data | `OfflineQueueStore` live-only · `POST integration/sync/offline-batch` |

## VERIFY GATE

```bash
xcodegen generate && xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
# ** BUILD SUCCEEDED ** · 2026-09-01
```
