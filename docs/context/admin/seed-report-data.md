# Admin seed dữ liệu mẫu (web + mobile review)

**Slash:** `/add-dummy-endpoint`  
**API:** `POST api/v1/patrol/demo-seed` · BFF `POST web-bff/api/v1/patrol/demo-seed`  
**Page:** `Linm.Web.Admin` `/admin/report-seed` (`yarn start:std` → :8603)

## Channel

| `channel` | Seed |
|-----------|------|
| `web` | PL17 families (tuần / sự cố / tài sản / chấm công / mặt đường / WO) |
| `mobile` | Cùng list + inbox `NOTI-DEMO` + chat WO/sự cố (App Review) |
| `both` | Cả hai (API default nếu omit) |

Admin page mặc định **mobile**. Result list bind `items[].label` từ BE (`title` / `summary` / `periodLabel`) — **cấm** hardcode tên family trên page.

## Mobile = task?

Công việc trên app = `WorkOrder` (`#sc-mnt-list`). Không invent Platform TaskService.

## Auth

`admin.report-seed.write` hoặc role `admin`. Docker DevAuth `DefaultRole=admin` → không cần JWT.

Demo login app: `linm-soft` / `Linm@2026`.
