# Plan — cây phân quyền trên Danh sách nhân sự

Màn: `http://localhost:9314/integration/users` · tiêu đề **Danh sách nhân sự**.  
Case đối chiếu: `data-import/cuc-01/REVIEW-NHAN-SU.md`.  
Không ghi đè `app_users.csv`. Không thêm cột. Không tự gán Cán bộ QL từ chức danh.

## Việc cần thấy

Cột trái là cây phân quyền của người đang đăng nhập. Chọn một nút thì lưới bên phải là đúng những người thuộc quyền nút đó, có phân trang.

## Hiện trạng

| Chỗ | Đang chạy |
|-----|-----------|
| Cột trái | «Cây tổ chức». Bấm nút gửi `?orgCode=` **đúng mã**. `DRVN` và `REG-I` ra **0** dòng vì 188 người cuc-01 nằm ở `VP-I.1`…`VP-I.4`. |
| LEAD | `ApplyLeadDepartmentScopeAsync` chỉ giữ cùng `source_unit`. Trưởng VP-I.3 thấy 14, không thấy 78. |
| Cán bộ QL | Cột «Quản lý» mở modal `ManagedStaffPanel`. Danh sách phẳng theo `depth`. Seed không có `managedUserIdsCsv` nên cây trống đến khi gán trên form. |
| API sẵn | `GET /api/v1/integration/users` · `GET …/{id}/managed-tree` · `PUT …/{id}/managed-users` · cây org `parent_code`. |

## Luật thuộc quyền

Ba loại nút. Lưới là giao của nút đang chọn với phạm vi người gọi. Lọc trên API, không lọc 188 dòng ở trình duyệt.

| Nút | Lưới |
|-----|------|
| Tổ chức (Cục, Khu, VP) | `org_code` của nút **hoặc** org con theo `parent_code`. `DRVN` và `REG-I` với tài khoản không bị thu hẹp = **188**. `VP-I.3` = **78**. |
| Phòng ban | Cùng `org_code` của VP cha và cùng `source_unit`. Đây là tập LEAD đang thấy: V-01 = 10, V-03 = 14, V-04 = 22, V-05 = 9, V-06 = 12. |
| Cán bộ quản lý | Đúng tập `ExpandManaged` của người đó (trực tiếp và cấp dưới, tối đa depth 8, cắt vòng). Chưa gán thì không có con và lưới trống. |

Phạm vi người gọi:

- Admin, hoặc không phải nhóm LEAD: thấy cả cây cuc-01 trong công ty.
- LEAD: gốc cây là phòng ban của họ. Không hiện VP khác, không hiện phòng ban anh em, không lộ số người của nhánh đó.

Bấm «Tất cả» = phạm vi người gọi, không chọn nút.

## API

Giữ `?orgCode=` đúng mã cho chỗ đang gọi. Cây mới dùng tham số riêng.

| Việc | Route |
|------|--------|
| Cây | `GET /api/v1/integration/users/permission-tree` |
| Lưới theo nút | `GET /api/v1/integration/users?scopeOrg=&sourceUnit=&managerId=` |

`permission-tree` trả nút `{ id, kind, code, label, parentId, count }`. `kind` = `org` | `unit` | `manager`. `count` = số người thuộc quyền nút đó sau khi cắt theo người gọi.

`scopeOrg` = mã org và mọi con. `sourceUnit` đi cùng org của VP. `managerId` = id người quản lý, tập bằng `GetManagedTreeAsync`. Ba tham số không gửi cùng lúc: UI chỉ gửi đúng một theo `kind`.

BFF `AppUsersBffController` chuyển tiếp hai route. Không migration.

## UI

File: `UsersListPage.tsx`. Giữ layout tách cây | lưới.

1. Tiêu đề cột trái: **Phân quyền**.
2. Mỗi nút: tên + số `count`. Thụt theo cấp org → phòng ban → cán bộ quản lý.
3. Chọn nút: `page = 1`, gọi list với một tham số scope. Bỏ chọn về «Tất cả».
4. Lưới giữ cột hiện có. Ô «Quản lý» vẫn mở modal để **gán** Cán bộ QL. Sau khi lưu, tải lại cây và lưới.
5. Nút tổ chức hoặc phòng ban không có người: «Không có nhân sự thuộc quyền này.»
6. Nút quản lý chưa gán: cùng câu đó. Không suy danh sách từ chức danh.

## Thứ tự làm

| # | Việc | Xong khi |
|---|------|----------|
| 1 | `permission-tree` + `scopeOrg` / `sourceUnit` / `managerId` trên `AppUserService` và controller | Admin: `DRVN` count 188, `VP-I.3` count 78. LEAD `tranhoang1310` chỉ thấy phòng ban I VĂN PHÒNG QLĐBI.1, count 10. |
| 2 | BFF forward | Cùng URL qua BFF integration. |
| 3 | Cột trái gọi `permission-tree`, lưới gọi list theo `kind` | Bấm Cục ra người của bốn VP. Bấm phòng ban ra đúng case V-01…V-06. |
| 4 | Gán Q-03 trên modal, tải lại | Cây dưới Trần Hoàng có `RMMS-VPI1-005`. Bấm nút Trần Hoàng, lưới một dòng Mai Thị Hồng Nga. |
| 5 | `?orgCode=` cũ vẫn đúng mã | Chỗ không dùng cây mới không đổi. |

## Ngoài plan

Không sửa file nhân sự cuc-01. Không thêm mã chức danh. Không đổi role gate hay màn cấu hình chức vụ. Không gom LEAD lên cả văn phòng.
