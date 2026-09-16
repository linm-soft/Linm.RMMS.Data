# Dead buttons — live app (GAP-MOB-ACT-03)

| | |
|---|---|
| skill | `/run-mobile-e2e` · `analy-auto-assign-share.md` |
| scanned | 2026-08-31 · iOS `MeViewModel` / `AssetHubViewModel` + Android parity |
| rule | Hub CTA / row có chữ mà tap = no-op hoặc toast P1 → **1 slug** · `pending_confirm` |

P1 toast **không** = skip enqueue. Chrome (tín hiệu) **không** enqueue.

## Enqueue sibling (`unique` / owner)

| feature | parent | Nhãn live | Evidence | task | share |
|---------|--------|-----------|----------|------|-------|
| `me-profile` | `me` | hàng tên / Hồ sơ `row-profile` | iOS `.profile` `break` · Android `Unit` | `task_c7b0196a` | unique |
| `me-settings` | `me` | Cài đặt `row-settings` | toast → wire `#sc-me-settings` (analy PASS · Dev pending) | `task_43c37168` | unique |
| `asset-detail` | `asset` | row list | toast `asset.list.toast.detail` | `task_f6ca06ad` | unique |
| `asset-collect` | `asset-hub` | Thủ công | toast `asset.tile.collect` | `task_e9f0235f` | unique |
| `asset-adjust` | `asset-hub` | Cập nhật / bớt | toast `asset.tile.adjust` | `task_0fcd1c99` | unique |
| `gis-map` | `asset-hub` | Xem trên bản đồ + Bản đồ tài sản | toast `asset.tile.map` / `asset.row.map` | `task_23d7eba0` | shared_action owner |
| `asset-ai` | `asset-hub` | Camera AI + Xác nhận | toast `asset.tile.ai` / `asset.toast.ai` · **≠** MAIN3 `ai-vision` | `task_fcd587c7` | unique |
| `supervise-detail` | `supervise` | tap check-in | toast `supervise.toast.detail` | `task_950d67b1` | unique |
| `attendance-report` | `attendance` | Báo cáo công | toast `attendance.toast.report` | `task_cc8d9202` · data_analy **done** | unique |
| `attendance-day` | `attendance` | tap ngày | toast `attendance.toast.dayDetail` | `task_3fdb1cea` | unique |
| `patrol-history-detail` | `patrol-history` | tap ca | toast `patrol.toast.detail` | `task_b2fb1a98` | unique |

`asset-hub` tile **32 loại tài sản** → slug đã có `asset-kcht-32` (design `await_confirm`) · **cấm** enqueue trùng.

## Wire trên slug đã có (không sibling)

| Parent | Nhãn | Đúng action | Hiện |
|--------|------|-------------|------|
| `home` | hero Thông báo | `go('ops')` reuse | toast `home.toast.notify` |
| `patrol-home` | notify | `go('ops')` reuse | toast `patrol.toast.notify` |
| `supervise` | segment Bản đồ | `go('gis-map')` reuse | toast `supervise.toast.map` |

## Không enqueue

| Control | Lý do |
|---------|--------|
| Tín hiệu `me-signal` / home signal | `shared_kit` chrome |
| Today row tuần đường | ACTION-TREE: open existing ca · không CTA mới |
| Filter toast (supervise / patrol-history) | controlHint slug hiện tại · chưa phải màn mới |
| Submit / Lưu / Đăng nhập | `GAP-MOB-ACT-07` |
| Tile Danh sách `asset` | đã ship |

**Cấm** start sibling trước Approve board (`GAP-MOB-ACT-06`).
