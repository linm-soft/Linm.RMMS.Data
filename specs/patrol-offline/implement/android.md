# Dev — Implement — patrol-offline (Android)

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
- `OfflineQueueStore.ensureLiveOnly()` purges legacy `demo-*` · **cấm** re-seed
- Empty → `EmptyChrome` (`offline-empty`) · **cấm** «Đang dùng dữ liệu mẫu»
- Seed: **BE empty OK** — real enqueue only

## Layers

| Presentation | `patroloffline/*` · MainTabScreen |
| Domain | use cases · no demo |
| Data | `OfflineQueueStore` live-only · Retrofit sync |

## VERIFY GATE

```bash
./gradlew :app:assembleDebug
# BUILD SUCCESSFUL · 2026-09-01
```
