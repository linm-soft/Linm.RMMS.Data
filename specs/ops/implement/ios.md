# Dev — Implement — ops (iOS)

> Status: **done** · `/edit-mobile-feature` · task `task_708dcc0b` · cleanup_mock · VERIFY PASS

| Feature | `ops` |
| dest | **iPhone 17 Pro** **BUILD SUCCEEDED** |
| xcodegen | **PASS** |
| Kit | `LinmTopBar` · `LinmListRow` · `LinmBadge` · `LinmToast` · `EmptyChromeView` |

## Layers

| Presentation | `Presentation/Features/Ops/*` · AppRouter NavigationStack Me + Home |
| Domain | `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` · `NotificationRepository` |
| Data | `GET notification/inbox` · `POST …/mark-read` · `GET notification/overview` |

## Behavior (live-only · **cấm** `OpsCopy.demoItems`)

- Me `row-ops` + Home notify → push `#sc-ops`
- Appear: GET inbox page=1 pageSize=50
  - OK + items → bind live
  - OK + empty → `EmptyChromeView` (`ops.empty.*`) · id `ops-empty`
  - fail → empty + toast `ops.toast.loadFail` (**cấm** «Đang dùng dữ liệu mẫu»)
- Tap unread → POST mark-read · toast «Đã đọc chỉ đạo»
- Tap read → no-op · back pop Me/Home stack
- **Cấm** form create · watermark Gói · invent API · `UIAlert` · demo SSOT payload

## Seed / CRUD

- Resource: `POST mobile-bff/api/v1/notification/inbox` (CreateNotificationRequest) · tenant live
- Empty tenant → EmptyChrome **accepted** (không hardcode seed in-app)
- Step 4b / T-BE **N/A** — Notification Signed · endpoints sẵn

## E2E ids

`sc-ops` · `nav-back` · `ops-empty` · `row-ops-*` · `row-ops` (Me)

`/edit-mobile-feature` 2026-09-01: **cleanup_mock** · remove demo fallback · dual EmptyChrome + loadFail toast.
