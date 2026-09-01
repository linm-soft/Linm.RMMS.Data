# Dev — Implement — patrol-offline (Android)

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
- Patrol-home quick Lưu trữ: count>0 → `offlineSubFmt` · count=0 → empty copy
- Me row: count>0 → `me.row.offlineSub` · count=0 → `offline.empty.title`
- EmptyChrome `#sc-patrol-offline` giữ · **cấm** seed
- SSOT: `docs/mobile-strings.json` synced

## ACTION WORK

| Action | Pair | Status |
|--------|------|--------|
| Sync | POST offline-batch | **work** · list Sync-only |

## Layers

| Presentation | `PatrolHomeScreen` quickSubtitle · `MeScreen` · `patroloffline` EmptyChrome |
| Domain | `pendingCount()` live |
| Data | `OfflineQueueStore` live-only |

## VERIFY GATE

```bash
./gradlew :app:assembleDebug
# BUILD SUCCESSFUL · 2026-09-01
```
