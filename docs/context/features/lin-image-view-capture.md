# LinImageView và capture ảnh — Feature Context

> **Slug:** `lin-image-view-capture` · **Module:** Incident · Patrol  
> **Phase:** P1 phone web  
> **Status:** Context · ghi 2026-10-09 từ đối chiếu tạo sự cố camera  
> **MFE:** `Linm.Web.RMMS.Mobile` · viewer `FieldImageView` → `LinImageView`  
> **Package:** `@linm-soft-org/linm-web-common-components` · app đang dùng `1.60.0`  
> **BE:** `Linm.RMMS.WebService` · `rmms_image_marks` · `rmms_incident_pins`  
> **Peer:** [`web-rmms-cam-patrol.md`](web-rmms-cam-patrol.md) · [`web-rmms-incident.md`](web-rmms-incident.md) · [`gps-route-capture.md`](gps-route-capture.md) · [`web-rmms-photo-geo.md`](web-rmms-photo-geo.md)

Load file này khi sửa capture ảnh hoặc xem ảnh bằng `LinImageView`. Không copy component sang MFE.

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Ảnh hiện trường lưu đủ lớp để xem lại: file gốc, tọa độ máy, ghim trên ảnh, khung nhận diện |
| Persona | Tuần đường ghi sự cố từ camera hoặc từ sheet chụp |
| App hiện có | `RouteCaptureControl` · `FieldImageView` · `IncidentCreatePage` · `CamPatrolPage` |
| DoD ngắn | Submit gửi cùng bộ field mà viewer đọc. Viewer chỉ gọi `LinImageView` đã publish |

## 2. Bộ field viewer cần

`RouteCaptureControl` (check-in và sheet chụp trên form sự cố) là mẫu đã đủ. `FieldImageView` mở `LinImageView` với tool `pin` · `geo` · `map`.

| Lớp | Field gửi khi lưu | Viewer đọc |
|----|-------------------|------------|
| File | `mediaId` / `photoId` | `src` — ảnh gốc, không đóng khung vào JPEG |
| Tọa độ máy | `lat` · `lng` · `accuracyM` | `geo` / `map` khi không có tọa độ vật thể |
| Ghim | `tapNx` · `tapNy` (0–1) · `objectLat` · `objectLng` | `pin` tại tỉ lệ trên ảnh · map theo tọa độ vật thể |
| Khung nhận diện | `boxX` · `boxY` · `boxW` · `boxH` · `label` · `confidence` | `boxes` trên `LinImageView` — chỉ sau bản registry có prop này |

Một ảnh: một dòng Geo, một dòng Pin, N dòng Detect.

## 3. API đang có

Client gọi relative `VITE_MOBILE_API_URL` (`…/mobile-bff/api/v1`). Không thêm path mới trong file này.

| Method | Path | Việc |
|--------|------|------|
| POST | `incident/incidents` | Phiếu sự cố. `pins[]` chỉ khi ảnh có `objectLat` và `objectLng` và `lat` và `lng`. `mediaIds` là id file |
| POST | `incident/image-marks` | Thay marks của một `photoId`. `replaceKind=Pin` chỉ thay dòng Pin |
| POST | `incident/image-marks/link` | Gắn `incidentId` sau khi tạo phiếu |
| GET | `incident/image-marks?photoId=` | Chi tiết sự cố gọi khi tải ảnh. Vẽ khung `Detect` lên bản hiển thị. File lưu vẫn là ảnh gốc |

Bảng `rmms_image_marks`. Migration `Schema_ImageMarks` có pair trong repo. Chưa apply vào database API đang chạy.

`rmms_incident_pins` vẫn là bảng ghim của phiếu. Image marks tồn tại trước khi có id sự cố.

## 4. Tạo sự cố từ camera tuần — đã gửi và còn thiếu

`CamPatrolPage.openIncidentSheet` upload JPEG gốc, rồi ghi marks trước khi mở form.

| Đã gửi | Chưa gửi trên phiếu |
|--------|---------------------|
| File gốc (`plainUrl`) | `pins[]` — prefill không có `objectLat` / `tapNx` nên filter bỏ |
| Geo: GPS lúc chụp + `accuracyM` | Dòng Pin trên `rmms_image_marks` |
| Detect: từng hit `x,y,w,h` + nhãn đã kèm `%` + confidence | Vị trí phiếu lấy GPS lúc bấm lưu, không lấy GPS lúc chụp |
| Sau tạo: `link` gắn `incidentId` vào marks đã có | Có `lat` phiếu thì viewer đặt ghim giữa ảnh (tap 0.5) tại GPS phiếu |

Ảnh thêm bằng sheet chụp trên form (`IncidentCaptureSheet` → `RouteCaptureControl`) thì gửi đủ ghim và `pins[]`.

## 5. Màn khác dùng `FieldImageView`

| Màn | Lưu khi submit | Viewer |
|-----|----------------|--------|
| Sheet chụp / check-in | Ghim + tọa độ máy + tọa độ vật thể | `pin` · `geo` · `map` |
| Camera tuần, list card | Ảnh đã vẽ khung trong `imageUrl` · ảnh gốc `plainUrl` | `mark` đổi hai URL. Chưa vẽ `boxes` |
| Phản ánh hiện trường · thu thập tài sản · tiến độ · nhận diện sự cố | Không ghim, không khung | `geo` · `map` từ GPS đang đứng |
| Chi tiết sự cố | `pins` nếu có, không thì GPS phiếu | Tải ảnh gốc, GET marks, vẽ khung lên ảnh xem. Nhãn đã có `%` thì không gắn confidence lần hai |

## 6. Common

| Việc | Cách |
|------|------|
| Xem ảnh | `LinImageView` trong `@linm-soft-org/linm-web-common-components` |
| Bản app đang chạy `1.60.0` | Có `mark` · `pin` · `geo` · `map`. Không có `boxes` |
| Source common | Đã có prop `boxes`. Bật trên app sau khi user báo số bản registry |
| Cấm | `file:` · `npm link` · copy CSS/TS viewer sang MFE · tự bump version |
| Nút bản đồ | Căn vào `lat`/`lng` của ảnh, zoom 13, không mở cả nước. Sau `flyTo` phải `resize` lớp MapLibre. Nếu không, nền chỉ còn màu đất, không có đường |

## 7. Gaps

| ID | Việc còn |
|----|----------|
| GAP-IMG-CAP-01 | Camera confirm chưa đưa GPS lúc chụp và ghim vào `pins` của phiếu |
| GAP-IMG-CAP-02 | Chi tiết đã vẽ `Detect` từ GET. `pins` của phiếu camera vẫn trống |
| GAP-IMG-CAP-03 | `boxes` chờ bản common mới. Trước đó khung là JPEG hiển thị, nút mark đổi về ảnh gốc |
| GAP-IMG-CAP-04 | `Schema_ImageMarks` chưa apply DB — POST/GET marks lỗi đến khi update |
| GAP-IMG-CAP-05 | Map viewer: `flyTo` trước khi lớp vector load → nền không có chi tiết đường. Căn camera sau `load`, rồi `resize` |
