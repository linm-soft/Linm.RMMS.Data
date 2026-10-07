# UX — web-rmms-incident · ảnh list / chi tiết

| | |
|--|--|
| feature | `web-rmms-incident` |
| delta | 2026-09-28 · parity thumb giám sát tuần đường |
| peer | `WebRmmsSupervise` `CheckInThumb` / `CheckInPhotoGallery` · **không** pin |

## Zones

| Zone | Copy | Bind |
|------|------|------|
| INC-L `card.thumb` | `incident.photo.none` = Chưa có ảnh | `mediaIds[0]` · badge `+N` · 72×72 phải thẻ · status + actions full width dưới |
| INC-D `detail.photos` | `incident.detail.photos` = Ảnh | Gallery sau thông tin · trước Peer · rỗng cùng placeholder |
| Map tab Chi tiết | `sheet.status` → `sheet.time` → … → ảnh | Dòng key/value · gallery `mediaIds` · không lặp list điểm |
| Map tab Danh sách | `sheet.loading` khi GeoJSON sự cố đang tải | Spinner · **cấm** `sheet.emptyList` / empty lớp trong lúc load |

## GAP

| id | Trước | Sau |
|----|-------|-----|
| GAP-WEB-EDIT-INC-PHOTO-01 | List/detail không hiện `mediaIds` | Thumb + gallery · blob `files/{id}/object` · **cấm** revert về chữ-only |
| GAP-WEB-EDIT-INC-CAPTURE-01 | Form tạo mở trang tọa độ (Nhận diện · Dùng ảnh · Làm mới định vị) | Sheet trên form: pin + thông tin + nhiều ảnh · nút chỉ Hủy/Lưu · Lưu gắn ảnh và đóng về Ghi sự cố · nhận diện để sau |
| GAP-WEB-EDIT-INC-PIN-01 | Chi tiết không hiện pin · header view bị khuất · tuyến mặc định QL.1 | View: thông tin pin trên bản đồ · tuyến chưa chốt để trống trong DB, màn hình hiện `--` |
| GAP-WEB-MOB-EDIT-01 | Bản đồ sự cố hiện empty trước khi API xong | Spinner `sheet.loading` đến khi GeoJSON trả · empty chỉ sau load |
| INC-N Nhân viên | SearchInput chọn người | Readonly · default `caller` · search bỏ `HideFromSearch` · GET detail và login vẫn trả hồ sơ |
| INC-L tab active | Segment Danh sách / Bản đồ sự cố cùng màu xám | Tab đang chọn: chữ + gạch `#0C84C0` |
| INC-L/D người phát hiện | Thẻ không hiện người khi `reporterName` trống | Dòng **Người phát hiện sự cố** + **Số điện thoại** · icon phone `tel:` gọi xác nhận |
| INC-L vị trí | Một dòng `tuyến · lý trình` | Hai dòng: tên tuyến, rồi lý trình (Km) · icon lịch cạnh ngày giờ |
| INC-L bộ lọc | Từ ngày / Đến ngày trống · nút Xóa lọc | Mặc định cả hai ngày = hôm nay ICT · nút Hôm nay ghi `from`/`to` rồi áp dụng |
| INC-D Km | `Km` lặp tên tuyến đã hiện ở `Tuyến` | `chainageKmOnly` · cùng rule list, sheet bản đồ, tài sản, ước lượng, nghiệm thu, phát hiện, kế hoạch tần suất, giám sát |
| INC-D lý trình | `Km` hiện `—` khi `KmStart` là số `137.650` (`isChainage` đòi dấu `+`) | `chainageSpanText(kmStart, kmEnd)` như list: `Km 137 + 650m`, cả hai đầu khi có `KmEnd` |
