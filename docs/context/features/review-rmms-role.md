# Review vai phone web RMMS

> **Slug:** `review-rmms-role` · **Module:** Integration · **Phase:** dev  
> **Status:** Đang gắn permission, menu, API  
> **Command:** `/review-rmms-role`  
> **MFE:** `Linm.Web.RMMS.Mobile`  
> **BE:** `Linm.RMMS.WebService` `RoleCapsResolver` · `RmmsMobileRoleCatalog` · `IRmmsMobileActionGate`  
> **Menu:** `Linm.Platform.Authentication/data/navigation/sets/rmms-mobile` · `appId=rmms-mobile`  
> **Peer:** `quan-ly-context` · `web-rmms-role-gate`

## 1. Mục tiêu

Rà mọi màn điện thoại và hiện đúng nút theo một vai: Tuần đường, Tuần kiểm, Quản lý.

Quản lý gồm hạt trưởng, hạt phó và mọi chức danh `titleGroup` `LEAD`. Nghiệm thu và giao việc là việc của vai này.

## 2. Ba lớp

| Lớp | Chỗ | Việc |
|-----|-----|------|
| Permission | `permissions.csv` và `roleCaps.permissions` | Mã `rmms-mobile:{resource}:{action}` |
| Menu | `menu_items.csv` · `package_menu_items.csv` | `GET api/v1/navigation/menu?appId=rmms-mobile` |
| API | `users/me` và lệnh ghi | Hồ sơ trả vai. Thiếu mã thì 403 |

Set desktop `rmms` không dùng cho điện thoại.

## 3. Cách ra vai

1. `titleGroup` `LEAD` thì `quan-ly`.
2. Không thì view `tuan-duong`, `tuan-kiem`, `quan-ly`. Mã cũ `nghiem-thu`, `ql-hat`, `hat` đọc thành `quan-ly`.
3. Không thì gói `RMMS-TUAN-DUONG`, `RMMS-TUAN-KIEM`, `QL_HAT`.
4. Gói `MANAGER-RMMS` mà chức danh trống: vai rỗng. Điện thoại chọn một trong ba cho phiên. API không chặn phiên đó.

## 4. Nút ghi

| Mã | Tuần đường | Tuần kiểm | Quản lý |
|----|------------|-----------|---------|
| `patrol:open` `patrol:check-in` `journal:write` | Ghi | Không | Không |
| `incident:create` `reflect:write` `work:complete` | Ghi | Không | Không |
| `finding:write` `finding:confirm` `petition:write` | Không | Ghi | Không |
| `incident:assign` `acceptance:write` `book:sign` | Không | Không | Ghi |

`work:complete` chỉ đơn vị được giao. Quản lý theo dõi, không bấm hộ.

## 5. Màn

Cùng bảng `common/skill/review-rmms-role/example/screen-actions.md`.

Tab quản lý: Trang chủ, Nghiệm thu, Vấn đề, Công việc, Tôi. Ô trang chủ thêm Giám sát và Giao việc. Không có hub mở ca và không có hub tuần kiểm.

Tab tuần đường giữ Tuần đường. Tab tuần kiểm giữ Tuần kiểm. Tài sản chỉ tuần đường.

## 6. API ghi

Cổng `IRmmsMobileActionGate`. Cờ `RmmsMobile:EnablePermissionCheck` (env `RmmsMobile__EnablePermissionCheck`). Mặc định tắt. Bật thì thiếu mã trả 403.

| Lệnh | Mã |
|------|-----|
| `POST incident/incidents` | `incident:create` |
| `POST incident/incidents/{id}/assign` | `incident:assign` |
| `POST` và `PUT patrol/nghiem-thu` | `acceptance:write` |
| `POST` và `PUT patrol/findings` | `finding:write` |
| `POST patrol/findings/{id}/recheck` và `feedback` | `finding:confirm` |
| `POST patrol/findings/{id}/assign-work-order` | `incident:assign` |

## 7. Gói Auth

File quyền: `data/navigation/sets/rmms-mobile/package_permissions.csv` (importVersion 3). File app: `data/packages/linm-rmms/app_registries.csv` và `package_app_access.csv`.

| Gói | Trên điện thoại | Không gán |
|-----|-----------------|-----------|
| `RMMS-TUAN-DUONG` | Chỉ tuần đường, 16 mã | Tuần kiểm ghi, quản lý ghi |
| `RMMS-TUAN-KIEM` | Chỉ tuần kiểm, 10 mã | Mở ca, tạo sự cố, quản lý ghi |
| `RMMS-TDTK` | Gói master Tuần đường / tuần kiểm, 22 mã (cả hai vai hiện trường) | `incident:assign`, `acceptance:write`, `book:sign`, `acceptance:read`, `supervise:read` |
| `MANAGER-RMMS` | Quản lý, 10 mã | Mở ca, tạo sự cố, xác nhận đạt |
| `ADMIN-RMMS` | Đủ 27 mã và 32 lá | |
| `ADMIN` | Đủ 27 mã | Điện thoại vẫn một vai mỗi phiên |

App `rmms-mobile` gán cho `RMMS-TDTK`, `MANAGER-RMMS`, `ADMIN-RMMS`, `ADMIN`.

Import quyền menu cần `NavigationMenu:ReImportSeed=true`. Import app cần `PackageSeed:ReImportSeed=true` và `PackageSeed:SkipReimportMasterPackage=true` để không ghi lại tên gói master.

## 8. Còn lại

Điện thoại lấy lá từ `roleCaps.menus` và tab local, chưa gọi `navigation/menu?appId=rmms-mobile`. CSV gói master có hiệu lực sau deploy Auth.
