# Xác nhận sync — rmms.vn → hệ thống mới

Ngày: 2026-10-02  
Nguồn cũ: `Linm.RMMS.Data/ref-repo/rmms.vn` (menu `application/views/layouts/main.php`)  
Hệ thống mới: `Linm.RMMS.WebService` + MFE desktop (`Master`, `Asset`, `Field`, `Report`) + `Linm.Web.RMMS.Mobile`

Chưa sửa code theo file này. Trả lời từng dòng cột **Xác nhận**: `sync` · `giữ` · `bỏ`.  
Để trống = làm theo cột **Đề xuất**.

Cấp cũ: `0` quản trị người dùng, `1` danh mục, `5` hiện trường. Hệ thống mới dùng vai (tuần đường, tuần kiểm, nghiệm thu, hạt), không map 1-1 sang level 5.

## Check-in

| Id | Cũ | Việc cũ | Mới | Tình trạng | Đề xuất | Xác nhận |
|----|----|---------|-----|------------|---------|----------|
| CK-01 | QL điểm checkin | Tuyến check-in có điểm đầu/cuối và danh sách điểm (tên, lat, long) | Ca tuần + điểm kế hoạch trên session | Một phần. Điểm kế hoạch gắn ca, không phải danh mục điểm dùng lại | giữ | |
| CK-02 | Phân công checkin | Gán tuyến check-in cho tổ | Đoạn tuyến user (`rmms_user_route_segments`) + người nhận ca | Một phần | giữ | |
| CK-03 | Ghi check-in | App gửi lat, long, tên địa điểm, `station_id`, ảnh. Level 5 mới được ghi | `/tuan-duong/:id/diem-tuan`. Server tự lấy tên đường và km | Đã có. Tên/km không lấy từ Google | giữ | |
| CK-04 | Đúng tuyến được giao | Check-in luôn gắn `checkin_distance_id` của tuyến được giao | Lưu mã tuyến user chọn. Đúng/nhầm so mã ca | Đã chỉnh: match theo `RouteCode` của ca | giữ | |
| CK-05 | QL Giám sát Online | Xem check-in trên bản đồ | `/giam-sat` | Đã có màn | giữ | |
| CK-06 | Lịch sử checkin | Level 5 xem lịch sử của mình. Level 1 xem theo tuyến / địa bàn | `/tuan-duong/lich-su` | Đã có | giữ | |
| CK-07 | QL trạng thái checkin | Danh mục trạng thái tự đặt | `ok` / `wrong` / `unknown` và trạng thái ca | Thiếu danh mục trạng thái tự do | bỏ | |

## Tài sản

| Id | Cũ | Việc cũ | Mới | Tình trạng | Đề xuất | Xác nhận |
|----|----|---------|-----|------------|---------|----------|
| TS-01 | QL tuyến đường | Danh mục quốc lộ, điểm đầu/cuối | Master `mas/tuyen-duong`. Mobile `/tai-san`, `/ban-do` | Đã có | giữ | |
| TS-02 | Quản lý tài sản KCHT | Sổ tài sản theo lý trình, import Excel cọc km | `RoadAssets`, `/tai-san/danh-sach`, `/tai-san/ket-cau` | Đã có sổ. Import Excel cọc km cũ chưa đối chiếu từng cột | sync | |
| TS-03 | Loại tài sản | Danh mục loại | Master loại tài sản | Đã có | giữ | |
| TS-04 | QL địa bàn | Danh mục địa bàn, gắn tuyến | Cơ cấu tổ chức `mas/co-cau-tc` | Một phần. Địa bàn cũ không còn màn riêng | giữ | |
| TS-05 | Quản lý lý trình | Cọc/đoạn: tên, km đầu, km cuối, lat/long, dài, rộng, ảnh, trạng thái | Cọc `KM_POST` + km tự tính khi ghim | Một phần. Không có màn sửa cọc kiểu form cũ | sync | |

## Sự cố

| Id | Cũ | Việc cũ | Mới | Tình trạng | Đề xuất | Xác nhận |
|----|----|---------|-----|------------|---------|----------|
| SC-01 | QL sự cố | Tên, loại, trạng thái, địa bàn, vị trí chữ, chi tiết, giao tổ/người, mở việc từ sự cố | `/van-de`, findings tuần kiểm | Đã có luồng việc. Form cũ không copy nguyên field | giữ | |
| SC-02 | Loại / kiểu / trạng thái sự cố | Ba danh mục admin | Loại sự cố trên form mới, không có ba màn danh mục cũ | Thiếu màn danh mục | bỏ | |
| SC-03 | Catalog phụ | Mức độ, lý do, hư hỏng, loại công trình, đối tượng, trạng thái dự án (API, không có trên menu) | Một phần nằm trong form vấn đề / phát hiện | Không dựng lại từng catalog | bỏ | |
| SC-04 | Bình luận sự cố | Comment trên sự cố | `/van-de/trao-doi` | Đã có trao đổi | giữ | |

## Công việc

| Id | Cũ | Việc cũ | Mới | Tình trạng | Đề xuất | Xác nhận |
|----|----|---------|-----|------------|---------|----------|
| CV-01 | DS công việc | Ba nhóm trạng thái. Level > 1 chỉ thấy việc của mình. Giao người + tổ, loại, địa bàn, tuyến, từ ngày, đến ngày, gắn sự cố | `/cong-viec`, work order | Một phần. Chưa khóa cùng ba nhóm trạng thái và đủ field giao việc cũ | sync | |
| CV-02 | Tiến độ / timeline | Đổi trạng thái, timeline, chi tiết | `/cong-viec/tien-do` | Đã có màn tiến độ | giữ | |
| CV-03 | Bình luận việc | Comment trên việc | `/cong-viec/trao-doi` | Đã có | giữ | |
| CV-04 | Ảnh việc | Ảnh đính kèm | Ảnh trên phiếu / FileService | Đã có cách gắn file mới | giữ | |

## Người dùng

| Id | Cũ | Việc cũ | Mới | Tình trạng | Đề xuất | Xác nhận |
|----|----|---------|-----|------------|---------|----------|
| ND-01 | QL tổ | Tổ người dùng | Đơn vị trong cơ cấu tổ chức | Đã có đơn vị. Không có bảng tổ riêng | giữ | |
| ND-02 | QL người dùng | Tài khoản | App users | Đã có | giữ | |
| ND-03 | QL cấp người dùng | Level 0 / 1 / 5 | Vai + job title | Đã có mô hình khác | giữ | |
| ND-04 | Phân quyền theo tuyến | User được gán tuyến | `OrgRouteScopes` + đoạn tuần đường | Đã có | giữ | |

## Ngoài menu

| Id | Cũ | Việc cũ | Mới | Tình trạng | Đề xuất | Xác nhận |
|----|----|---------|-----|------------|---------|----------|
| EX-01 | Chấm công tháng | Số ngày check-in / tổng ngày trong tháng, nhập tay | `/cham-cong` | Có màn chấm công. Chưa thấy sổ tháng nhập tay | giữ | |
| EX-02 | Báo cáo | Controller `sdb_report`. View đang là bảng lý trình, không phải báo cáo | `Linm.Web.RMMS.Report` | Không port view cũ | bỏ | |
| EX-03 | Thông báo | Lịch sử + loại thông báo | `/thong-bao` | Đã có hộp thư | giữ | |
| EX-04 | Log hệ thống | Log viewer admin | Không đưa lên mobile | Không mang | bỏ | |
| EX-05 | Tên đường từ GPS | Admin gọi Google Geocoding với một tọa độ cố định. Hàm PHP không trả địa chỉ | OSRM `/nearest` ≤ 80 m, km measure ≤ 50 m | Đã có cách mới | bỏ | |

## Việc đề xuất làm sau khi xác nhận

Chỉ các dòng **Đề xuất = sync**, trừ khi cột Xác nhận ghi khác:

1. **TS-02** — đối chiếu file Excel cọc km cũ với import tài sản hiện tại. Thiếu cột thì bổ sung mapping, không tạo bảng `tuyen_duong_*`.
2. **TS-05** — màn sửa cọc lý trình (tên, km, tọa độ, ảnh) trên sổ `KM_POST`, không mở lại form station cũ.
3. **CV-01** — phiếu giao việc đủ người nhận, đơn vị, tuyến, hạn, và danh sách lọc theo người nhận.

Các dòng `giữ` và `bỏ` không đụng code.
