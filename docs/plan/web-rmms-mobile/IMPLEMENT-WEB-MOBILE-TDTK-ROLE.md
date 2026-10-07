# /implement-web-mobile-tdtk-role

Ngày: 2026-10-01  
App: `Linm.Web.RMMS.Mobile`  
Peer: `PLAN-3-VAI.md` · `RoleCapsResolver.cs` · `RoleGatePage.tsx` · `HomePage.tsx` · `WebRmmsShellLayout.tsx`

Admin và quản lý chọn một vai. Sau khi chọn, tab dưới và ô Trang chủ là menu chuẩn của vai đó. Màn Hồ sơ vai trò không còn là bản demo thay menu.

Đã áp dụng trên app ngày 2026-10-01: chọn vai trên phiên, tab dưới và ô Trang chủ theo vai. Nhân viên có chức danh giữ menu từ hồ sơ. Mục 6 còn để đối chiếu khi cập nhật tiếp từng form.

## 1. Hiện trạng

Tài khoản Quản trị RMMS trên tab Tôi: chức danh và gói quyền trống (`—`). Nút **Vai trò** mở `/web-rmms-role-gate`.

`RoleCapsResolver.Derive` chỉ bật cờ khi:

| Nguồn | Cờ |
|-------|----|
| `jobTitleCode` `TUAN-DUONG`, `TUAN-DIEN`, `NHAN-VIEN` | Tuần đường |
| `TUAN-KIEM` | Tuần kiểm |
| `NGHIEM-THU` | Nghiệm thu |
| `packageCode` `QL_HAT` | QL_HAT, và kèm tuần đường + tuần kiểm |
| `HAT-TRUONG`, `HAT-PHO` | Tuần đường + tuần kiểm. QL_HAT chỉ khi gói đúng `QL_HAT` |

Admin và `MANAGER-RMMS` không nằm trong bảng. Bốn cờ đều tắt. Trang chủ vì thế không có ô Tuần đường, Tuần kiểm, Nghiệm thu, Giám sát, Giao việc. Tab dưới vẫn luôn năm mục: Trang Chủ, Tuần đường, Vấn đề, Công việc, Tôi.

Màn Hồ sơ vai trò đang làm hai việc không phải đổi view:

- Chip **Năng lực vai** chỉ đọc, không chọn.
- **Lưu packageHint** ghi catalog chức danh Hạt. Không đổi menu của phiên đăng nhập.
- Dải Hồ sơ / Trang chủ / Hub / Sự cố / Phát hiện là tab trong trang demo. Bấm sang không thay tab dưới của app.

## 2. Ai được chọn vai

| Tài khoản | Chọn vai |
|-----------|----------|
| Admin, hoặc gói quản lý `MANAGER-RMMS`, và không có chức danh tuần đường / tuần kiểm / nghiệm thu / hạt | Có. Bắt buộc chọn một vai trước khi vào nghiệp vụ |
| Nhân viên đã có chức danh đúng bốn vai | Không. Menu lấy từ `roleCaps` server |
| `HAT-TRUONG`, `HAT-PHO` gói `QL_HAT` | Không chọn hộ. Menu QL_HAT từ hồ sơ |

Chọn vai chỉ lưu trên phiên (bộ nhớ trình duyệt của phiên đăng nhập). Không gọi `PUT /integration/job-titles/{id}`. Không đổi `packageHint` seed.

## 3. Sau khi chọn

1. Ghi `viewRole` = một trong `tuan-duong` | `tuan-kiem` | `nghiem-thu` | `ql-hat`.
2. Cờ hiệu lực của phiên = đúng một vai. Không bật cả bốn.
3. Rời Hồ sơ vai trò, mở `/trang-chu`.
4. `HomePage` và `WebRmmsShellLayout` đọc cờ hiệu lực. Form camera đã có (`camCheckInAccess`, `camJournalAccess`, `camIncidentAccess`, `camFindingAccess`, `camNghiemThuAccess`, giao việc `qlHat`) đọc cùng cờ.
5. Tab Tôi vẫn hiện vai đang xem và nút đổi vai. Đổi vai thì về Trang chủ, menu vẽ lại.

Nhân viên không có `viewRole`. Form của họ giữ `roleCaps` từ `GET /auth/profile`.

## 4. Menu chuẩn

Tab dưới là điều hướng chính. Bỏ dùng dải demo trong Hồ sơ vai trò làm menu.

| Vai | Tab dưới | Ô Trang chủ | Không hiện |
|-----|----------|-------------|------------|
| Tuần đường | Trang Chủ, Tuần đường (`/tuan-duong`), Vấn đề, Công việc, Tôi | Tuần đường, Công việc, Vấn đề, Tài sản, Lưu trữ | Tuần kiểm, Công tác nghiệm thu, Giao việc, Giám sát |
| Tuần kiểm | Trang Chủ, Tuần kiểm (`/tuan-kiem`), Vấn đề, Công việc, Tôi | Tuần kiểm, Vấn đề, Công việc | Ô Tuần đường, Mở ca, Giao việc, Công tác nghiệm thu |
| Nghiệm thu | Trang Chủ, Công tác nghiệm thu (`/nghiem-thu`), Vấn đề, Tôi | Công tác nghiệm thu, Vấn đề | Tuần đường, Tuần kiểm, Giao việc, Công việc giao |
| QL_HAT | Trang Chủ, Vấn đề, Công việc, Tôi | Giám sát, Giao việc, Vấn đề, báo cáo ca | Mở ca, Tạo sự cố, Xác nhận đạt, lập phiếu nghiệm thu |

Tab Tuần đường của vai tuần kiểm đổi nhãn thành Tuần kiểm và trỏ `/tuan-kiem`. Vai nghiệm thu và QL_HAT không còn tab Tuần đường.

## 5. Việc của từng vai trên form (đã có cổng, gắn với cờ hiệu lực)

| Vai | Được | Không |
|-----|------|-------|
| Tuần đường | Check-in, chụp, lưu điểm, nhật ký, tạo sự cố | Giao việc xử lý, Xác nhận đạt, lập phiếu nghiệm thu |
| Tuần kiểm | Phiếu phát hiện, chụp, Xác nhận đạt, Ghi chưa đạt, Trong hạn hoặc Quá hạn | Mở ca, Giao việc xử lý |
| Nghiệm thu | Phiếu, chụp, Lưu, Lưu nháp, Huỷ | Giao việc, xác nhận hoàn thành sự cố |
| QL_HAT | Mọi sự cố và báo cáo ca, chi tiết chỉ đọc, Giao việc xử lý, hạn theo Phụ lục IV | Mở ca, tạo sự cố, đóng sự cố, xác nhận đạt |

`MANAGER-RMMS` khi chưa chọn vai không được suy ra Giao việc.

## 6. Phần sẽ cập nhật sau

Mỗi lần gọi slash, nêu số phần. Không làm cả tám trong một lượt nếu chưa chỉ định.

| # | Phần | File | Xong khi |
|---|------|------|----------|
| 1 | Chọn vai trên Tôi, chỉ admin và quản lý | `MeTabPage.tsx`, `RoleGatePage.tsx` | Bốn lựa chọn. Bỏ dải tab demo. Bỏ **Lưu packageHint** khỏi luồng đổi view |
| 2 | `viewRole` phiên | `useRoleGateProfile` | Admin đã chọn thì form và menu dùng cờ hiệu lực. Nhân viên không bị ghi đè |
| 3 | Tab dưới | `WebRmmsShellLayout.tsx` | Đúng bảng mục 4 |
| 4 | Ô Trang chủ | `HomePage.tsx` | Đúng bảng mục 4. Vào Trang chủ ngay sau khi chọn |
| 5 | Hub tuần đường | `PatrolHubPage.tsx` | Chỉ vai tuần đường. Không ô Công tác nghiệm thu |
| 6 | Sự cố và giao việc | `IncidentListPage`, `IncidentDetailPage`, `AssignFormPage` | QL_HAT xem mọi dòng và nút Giao việc xử lý. Tuần đường tạo. Tuần kiểm và nghiệm thu không giao |
| 7 | Check-in, nhật ký, phiếu, nghiệm thu | các `cam*Access.ts` | Cùng cờ hiệu lực với menu |
| 8 | Hồ sơ server | `RoleCapsResolver.cs` | Admin không nhận đủ bốn cờ. `QL_HAT` không suy từ `MANAGER-RMMS` |

## 7. Không làm

- Sửa catalog chức danh từ điện thoại để giả lập vai.
- Giữ màn demo Hồ sơ / Hub / Sự cố / Phát hiện như menu chính.
- Bật đồng thời tuần đường, tuần kiểm, nghiệm thu và QL_HAT cho một lần chọn.
- Công thức tiền Mục IV.
- Đổi route public đã ship.
