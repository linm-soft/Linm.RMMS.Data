# Notes — cam-patrol web confirm (2026-10-09)

Xác nhận một card trong list mở sheet form Ghi sự cố trên cùng màn. Không rời `/camera-tuan`.

- Tài sản mặc định `PAVEMENT`, ảnh đã upload gắn sẵn.
- Tạo thành công: đóng sheet, card đó `created` — chữ «Đã tạo sự cố», nút Xác nhận/Bỏ qua không render.
- Các card khác giữ nguyên để tạo tiếp.
- Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.
- Ảnh lưu file gốc. Tọa độ `Geo`, ghim `Pin`, khung `Detect` vào `rmms_image_marks` (`Schema_ImageMarks`). Xem bằng `LinImageView`. Khung vẽ từ số (`boxes`) nằm ở common, bật sau bản registry mới.
