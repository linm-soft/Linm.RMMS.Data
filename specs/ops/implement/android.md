# Dev — Implement — ops (Android)

> Status: **done** · `/edit-mobile-feature` · task `task_708dcc0b` · cleanup_mock · VERIFY PASS

| Feature | `ops` |
| build | `assembleDebug` **PASS** 2026-09-16 empty chrome parity |
| Kit | `LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` · `EmptyChrome` |

## Layers

| Presentation | `presentation/feature/ops/*` · `ProfileStack` + `HomeStack` nav |
| Domain | `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` · `NotificationRepository` |
| Data | Retrofit `notification/inbox` · mark-read · overview |

## Behavior (live-only · **cấm** `OpsCopy.demoItems`)

Parity iOS · GET OK empty = `EmptyChrome` dashed rect + `ops.empty.title` + `ops.empty.hint` (cùng `ContentUnavailableView`) · GET fail = empty + `ops.toast.loadFail` · Me + Home entry · guest GET **AllowAnonymous** · mark-read staff only · **cấm** form create / ERP / watermark / `AlertDialog` / demo SSOT · **cấm** Text-only empty.

`/edit-mobile-feature` 2026-09-16: **empty chrome parity** · Android `EmptyChrome` = iOS dashed + title + hint (`GAP-MOB-EDIT-EMPTY-01` CLOSED).

## Seed / CRUD

- `POST notification/inbox` via Mobile BFF · EmptyChrome OK khi tenant rỗng · **cấm** seed hardcode app

## E2E ids

`sc-ops` · `nav-back` · `ops-empty` · `row-ops-*` · `row-ops`

`/edit-mobile-feature` 2026-09-01: **cleanup_mock** · remove demo fallback · dual EmptyChrome + loadFail toast.
