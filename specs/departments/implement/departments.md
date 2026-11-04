# Implement — departments

| Field | Value |
|-------|-------|
| feature | `departments` |
| status | edit · row menu + delete |
| mfe | `Linm.Web.RMMS.Integration` · `DepartmentsListPage` |
| api | `DELETE api/v1/integration/departments/{id}` |
| bff | `DELETE web-bff/api/v1/integration/departments/{id}` |

## Notes

- Menu dòng dùng `LinCatalogRowActionMenu`. Mục: Xem, Sửa, Xóa.
- Toolbar Xóa hiện cùng lúc với Sửa (dòng đang chọn + quyền ghi).
- `DepartmentService.DeleteAsync` xóa cứng. Chặn 409 khi có `AppUser.DepartmentId` hoặc nhân sự đang dùng có `SourceUnit` trùng tên (tránh list tự tạo lại phòng ban).
- Không đổi schema DB.

## Verify

- MFE `yarn typecheck` — **PASS** (2026-10-31).
- API `dotnet build` RMMS.Service.Api — **PASS** (0 errors).
- BFF `dotnet build` Integration.Bff — **PASS** (0 errors).
- Browser: Integration dev server không chạy trong session này — chưa bấm menu/xóa trên màn live.
