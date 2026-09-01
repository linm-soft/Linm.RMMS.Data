# Dev — Implement — patrol-offline (iOS)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| taskId | `task_4fae30f8` |
| slash | `/edit-mobile-feature` · cleanup_mock_offline_storage |
| status | **confirmed** |
| changeScope | `edit_page` · live-only local queue |
| updatedAt | `2026-09-01T11:29:32.000Z` |

## Cleanup mock residual (this turn)

- **Removed** hardcode `patrol.quick.offlineSub` «3 bản ghi chờ đồng bộ» → empty copy «Chưa có bản ghi chờ gửi»
- Patrol-home quick Lưu trữ: count>0 → `offlineSubFmt` `%d` live · count=0 → empty copy
- Me row: count>0 → `me.row.offlineSub` · count=0 → `offline.empty.title` · badge ẩn khi 0
- `#sc-patrol-offline` EmptyChrome giữ (prior `task_93163b23`) · **cấm** seed demo queue
- SSOT: `docs/mobile-strings.json` synced

## ACTION WORK

| Action | Pair | Status |
|--------|------|--------|
| Sync (`btn-sync`) | POST `integration/sync/offline-batch` | **work** · list-only · no search/CRUD |

## Layers

| Presentation | `PatrolHome` offline subtitle · `Me` subtitleQueue · `PatrolOffline` EmptyChrome |
| Domain | `pendingCount()` live |
| Data | `OfflineQueueStore` live-only · no demo seed |

## VERIFY GATE

```bash
xcodegen generate && xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
# ** BUILD SUCCEEDED ** · 2026-09-01
```
