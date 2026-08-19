# Dev — Implement — ops (iOS)

> Status: **done** · `/agent-dev-ios` · task `task_3b00ed47` · DELTA verify PASS

| Feature | `ops` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** |
| xcodegen | **PASS** |
| Kit | `LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` |

## Layers

| Presentation | `Presentation/Features/Ops/*` · AppRouter NavigationStack Me + Home |
| Domain | `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` · `NotificationRepository` |
| Data | `GET notification/inbox` · `POST …/mark-read` · `GET notification/overview` |

## Behavior

- Me `row-ops` + Home notify → push `#sc-ops`
- Appear: GET inbox page=1 pageSize=50 · fail/empty → demo 2 rows SSOT
- Tap unread → POST mark-read · toast «Đã đọc chỉ đạo» · demo id `demo-*` local only
- Tap read → no-op · back pop Me/Home stack
- **Cấm** form create · watermark Gói · invent API · `UIAlert`

## Parity verify (2026-08-19)

| Check | Result |
|-------|--------|
| route_a Me `row-ops` + Home `LinmNotifyButton` | **PASS** |
| Demo rows copy Design §3 | **PASS** |
| Badge Mới/Đã đọc | **PASS** |
| E2E ids `sc-ops` · `nav-back` · `row-ops-*` | **PASS** |
| BFF path `notification/inbox*` | **PASS** |

## E2E ids

`sc-ops` · `nav-back` · `row-ops-*` · `row-ops` (Me)

`/edit-mobile-feature` 2026-08-19: **GAP-MOB-COPY-01** — title/badge chrome `LinmCopy` · inbox `title`/`subtitle` giữ.
