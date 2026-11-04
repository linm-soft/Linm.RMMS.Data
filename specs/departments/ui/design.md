# Design — departments (Danh mục phòng ban)

| Field | Value |
|-------|-------|
| feature | `departments` |
| Feature Kind | **B** — catalog list + modal |
| status | `confirmed` |
| changeScope | `edit` · row menu + delete |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` · `/integration/departments` |
| backend | `api/v1/integration/departments` · BFF `web-bff/api/v1/integration/departments` |
| updatedAt | `2026-10-31` |

## Zones

| Zone | UI | DoD |
|------|-----|-----|
| DES-GRID-A | Header «Danh mục phòng ban» | icon `fas fa-sitemap` |
| DES-GRID-B | Toolbar | Làm mới · Xem · Sửa · **Xóa** (khi chọn dòng + quyền ghi) · Tạo mới |
| DES-GRID-C | Grid | STT · checkbox · Mã · Tên · View · Thứ tự · Trạng thái |
| DES-GRID-C3 | Row menu | **Xem · Sửa · Xóa** — đúp / Ctrl+chuột phải / nhấn giữ |
| DES-DEL | Confirm modal | Mã — tên · không hoàn tác · Hủy / Xóa |

## Delete

Xóa cứng khi không còn nhân sự gắn phòng ban (`DepartmentId` hoặc `SourceUnit` trùng tên). Có nhân sự → API 409, dòng giữ nguyên.
