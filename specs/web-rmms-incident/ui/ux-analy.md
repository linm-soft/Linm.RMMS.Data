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

## GAP

| id | Trước | Sau |
|----|-------|-----|
| GAP-WEB-EDIT-INC-PHOTO-01 | List/detail không hiện `mediaIds` | Thumb + gallery · blob `files/{id}/object` · **cấm** revert về chữ-only |
| GAP-WEB-EDIT-INC-CAPTURE-01 | Form tạo mở trang tọa độ (Nhận diện · Dùng ảnh · Làm mới định vị) | Sheet trên form: pin + thông tin + nhiều ảnh · nút chỉ Hủy/Lưu · Lưu gắn ảnh và đóng về Ghi sự cố · nhận diện để sau |
| GAP-WEB-EDIT-INC-PIN-01 | Chi tiết không hiện pin · header view bị khuất · tuyến mặc định QL.1 | View: thông tin pin trên bản đồ · tuyến chưa chốt để trống trong DB, màn hình hiện `--` |
