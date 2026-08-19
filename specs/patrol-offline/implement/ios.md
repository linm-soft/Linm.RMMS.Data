# Dev — Implement — patrol-offline (iOS)

| Feature | `patrol-offline` |
| Kit | `LinmTopBar` text slots · `LinmSegment` · `LinmBanner` |

## Layers

| Presentation | `Presentation/Features/PatrolOffline/*` · AppRouter |
| Domain | `PatrolOfflineUseCases` · `OfflineQueueRepository` |
| Data | `OfflineQueueStore` · `IntegrationRepository.syncOfflineBatch` |

## Behavior

- Home tile + Me row → push `#sc-patrol-offline`
- Nav: `LinmTopBar` leading «Trang Chủ» · trailing «Đồng bộ»
- First launch: seed SSOT 2 cards once (`linm.offline.queue.initialized`) · **cấm** runtime demo fallback · **cấm** re-seed after sync
- Appear: load local pending only
- Sync OK: POST offline-batch · toast N · clear pending · reload
- Sync fail: toast error · **giữ** queue
- Segment filter checkIn / incident · status pill «Chờ gửi» ngắn

## Build

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS && xcodegen generate
xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```
