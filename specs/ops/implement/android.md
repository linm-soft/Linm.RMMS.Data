# Dev — Implement — ops (Android)

> Status: **done** · `/agent-dev-android` · task `task_3b00ed47` · DELTA verify PASS

| Feature | `ops` |
| build | `assembleDebug` **PASS** |
| Kit | `LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` |

## Layers

| Presentation | `presentation/feature/ops/*` · `ProfileStack` + `HomeStack` nav |
| Domain | `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` · `NotificationRepository` |
| Data | Retrofit `notification/inbox` · mark-read · overview |

## Behavior

Parity iOS · demo fallback · Me + Home entry · **cấm** form create / ERP / watermark / `AlertDialog`.

## Parity verify (2026-08-19)

| Check | Result |
|-------|--------|
| route_a Me `row-ops` + Home notify | **PASS** |
| Demo rows copy Design §3 | **PASS** |
| Badge Mới/Đã đọc | **PASS** |
| E2E ids `sc-ops` · `nav-back` · `row-ops-*` | **PASS** |
| BFF path `notification/inbox*` | **PASS** |

## E2E ids

`sc-ops` · `nav-back` · `row-ops-*` · `row-ops`
