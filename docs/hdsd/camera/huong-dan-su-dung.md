# Hướng dẫn sử dụng — Kết nối camera ITS

## Phạm vi

Tài khoản được cấp quyền menu 03c. Kết nối Camera GTVT thao tác Kết nối camera ITS.

Đăng nhập: [Hướng dẫn đăng nhập](../dang-nhap/huong-dan-su-dung.md).

## Kết nối camera ITS

**Mục đích:** mở và tra cứu Kết nối camera ITS.

**Cách thực hiện:**

1. Vào menu **Kết nối camera ITS**.
2. Điền điều kiện lọc nếu cần.
3. Nhấn **Tạo mới** / **Thêm** khi cần lập bản ghi, hoặc kích dòng để xem.

![Hình 1. Kết nối camera ITS](captures/02-camera.png)

Hình 2. View trên mobile device(<= 375px)

![Hình 2. View trên mobile device(<= 375px)](captures/02-camera-375.png)

`*` = bắt buộc khi Lưu / Gửi. Ô trống = không bắt buộc.

| Nhãn trên màn | * | Cách điền |
|---------------|---|-----------|
| Tìm kiếm |  | Được để trống |
| Trạng thái |  | Được để trống |


## Tạo mới

**Mục đích:** lập bản ghi Kết nối camera ITS.

**Cách thực hiện:**

1. Nhấn **Tạo mới** hoặc **Thêm**.
2. Điền các ô `*`.
3. Nhấn **Lưu** / **Gửi** / **Tạo mới** khi hoàn tất.

![Hình 3. Tạo mới](captures/03-camera-tao-moi.png)

Hình 4. View trên mobile device(<= 375px)

![Hình 4. View trên mobile device(<= 375px)](captures/03-camera-tao-moi-375.png)

`*` = bắt buộc khi Lưu / Gửi. Ô trống = không bắt buộc.

| Nhãn trên màn | * | Cách điền |
|---------------|---|-----------|
| Model |  | Được để trống |
| Mã camera |  | Được để trống |
| Tên |  | Được để trống |
| IP / Host |  | Được để trống |
| HTTP / ISAPI port |  | Được để trống |
| Port (SDK) |  | Được để trống |
| RTSP port |  | Trùng cổng RTSP trên camera, không đoán 554 |
| Protocol |  | Được để trống |
| User |  | Được để trống |
| Password |  | Được để trống |
| Tuyến |  | Được để trống |
| Km |  | Được để trống |
| Chuẩn |  | Được để trống |
| HTTPS |  | Được để trống |
| RTSP (port trên form — gateway HLS) |  | Trùng Network → Port → RTSP trên camera (thường 554; TCM403 lab 6554) |
| ONVIF |  | Được để trống |
| ISAPI |  | Được để trống |
| ISAPI Host notify URL |  | Được để trống |


## Xem live HLS

**Mục đích:** kiểm tra cấu hình camera để hiện video (không chỉ ảnh JPEG).

**Cách thực hiện:**

1. Mở bản ghi camera → panel **II. Live**.
2. Mở **Hướng dẫn cấu hình luồng video (HLS)** (tự mở khi đang fallback JPEG).
3. Đối chiếu RTSP port trên form với camera *Network → Port*.
4. Trên camera: *Video Encoding → Sub-Stream* = **H.264**, 720p hoặc thấp hơn.
5. Mặc định **HLS** → **Bật live**. JPEG poll chỉ khi cần ảnh SDK / RTSP fail.

Online + ảnh JPEG = cổng SDK. Video HLS cần RTSP. LIVE HLS + khung đen: Sub còn H.265 — đổi H.264 rồi Tắt / Bật live.

Chi tiết kỹ thuật: [`../../context/30-CAMERA-LIVE-STREAM-CONFIG.md`](../../context/30-CAMERA-LIVE-STREAM-CONFIG.md).

Chế độ HLS **không** hiện Chu kỳ snapshot và Timeout snapshot (chỉ JPEG poll). WebRTC ẩn trên form (cloud không đủ cổng WHEP).

## Events ISAPI (biển · tốc độ)

**Mục đích:** bảng III và KPI Biển / Tốc độ.

**Cách thực hiện:**

1. Panel **III. Events ISAPI** → nút **Info** → slide-out.
2. Trên camera: *Network → Data Connection → ISAPI Listening* — bật POST về API RMMS.
3. Query `host` = IP camera trên form. Không nhầm host = máy chủ RMMS.
4. Nhấn **Tải events**. Chữ Camera 01 trên video là OSD camera, không phải nhận diện RMMS.

Chi tiết: [`../../context/23-CAMERA-HOST-NOTIFY-CONFIG.md`](../../context/23-CAMERA-HOST-NOTIFY-CONFIG.md).

