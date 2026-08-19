# Dev — Implement — patrol-offline (Android)

| Feature | `patrol-offline` |
| Kit | `LinmTopBar` text slots · `LinmSegment` · `LinmBanner` |

## Layers

| Presentation | `presentation/feature/patroloffline/*` · MainTabScreen |
| Domain | use cases · `OfflineQueueRepository` |
| Data | `OfflineQueueStore` · Retrofit sync |

## Behavior

- Parity iOS · route `patrol-offline` in HomeStack + ProfileStack
- Nav: kit `LinmTopBar` leading «Trang Chủ» · trailing «Đồng bộ»
- First launch: seed SSOT 2 cards once (`initialized` flag) · **cấm** runtime demo fallback · **cấm** re-seed after sync
- Sync fail: toast error · **giữ** queue · status pill «Chờ gửi» ngắn

## Build

```bash
cd /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android && ./gradlew :app:assembleDebug
```
