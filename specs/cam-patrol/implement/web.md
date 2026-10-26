# Notes — cam-patrol web confirm (2026-10-09)

Xác nhận một card trong list mở sheet form Ghi sự cố trên cùng màn. Không rời `/camera-tuan`.

- Tài sản mặc định `PAVEMENT`, ảnh đã upload gắn sẵn.
- Tạo thành công: đóng sheet, card đó `created` — chữ «Đã tạo sự cố», nút Xác nhận/Bỏ qua không render.
- Các card khác giữ nguyên để tạo tiếp.
- Verify: `yarn typecheck` trong `Linm.Web.RMMS.Mobile`.
- Nạp mô hình lỗi: `initAgent` tự thử 3 lần (WebGL rồi WASM mỗi lần). Hết 3 lần, stamp hiện «Tải lại» và gọi lại `initAgent(..., true)`.
- Bytes mô hình nằm trong bộ nhớ và Cache API `rmms-cam-onnx-v1`. Lần mở sau, đổi tab quay lại, và Tải lại tạo session từ bản đã lưu. Lỗi tải file mới thử lại mạng; lỗi tạo session không tải lại file.
- Ảnh lưu file gốc. Tọa độ `Geo`, ghim `Pin`, khung `Detect` vào `rmms_image_marks` (`Schema_ImageMarks`). Xem bằng `LinImageView`. Khung vẽ từ số (`boxes`) nằm ở common, bật sau bản registry mới.
