# Admin seed dữ liệu mẫu (web + mobile review)

**Slash:** `/add-dummy-endpoint`  
**API:** `POST api/v1/patrol/demo-seed` · BFF `POST web-bff/api/v1/patrol/demo-seed`  
**Page:** Demo standalone `http://localhost:9315/admin/report-seed` (Admin MFE chưa có trong workspace QLBD mobile)

## Channel

| `channel` | Seed |
|-----------|------|
| `web` | PL17 families (tuần / sự cố / tài sản / chấm công / mặt đường / WO) |
| `mobile` | Cùng list + inbox `NOTI-DEMO` + chat WO/sự cố (App Review) |
| `both` | Cả hai (API default nếu omit) |

Admin page mặc định **mobile**.

## Mobile = task?

Công việc trên app = `WorkOrder` (`#sc-mnt-list`). Không invent Platform TaskService.

## Auth

`admin.report-seed.write` hoặc role `admin`. Docker DevAuth `DefaultRole=admin` → không cần JWT.

Demo login app: `linm-soft` / `Linm@2026`.
