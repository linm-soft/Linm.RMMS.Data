# DANH SÁCH THIẾT BỊ CAMERA ĐẾM XE & GIÁM SÁT GIAO THÔNG HIKVISION

Tất cả các thiết bị trong danh sách này đều hỗ trợ **Edge AI (Xử lý tại biên)**. Camera tự động nhận diện, phân loại phương tiện và nhận diện biển số mà không cần máy tính (CPU/GPU) đi kèm để xử lý hình ảnh. Dữ liệu đầu ra được đóng gói dạng XML/JSON truyền thẳng về ứng dụng C#.

---

## 1. Danh sách Model theo Tuyến đường

### 🚗 Tuyến đường Quốc lộ (Vận tốc cao >80 km/h)
* **Model Đề xuất:** `iDS-2CD7A46G0/Hz-IZHSY`
* **Loại thiết bị:** Camera Thân (Bullet) dòng DeepinView Cao cấp.
* **Thông số lõi:** Độ phân giải 4MP, Ống kính thay đổi tiêu cự (Varifocal), Chuẩn chống va đập IK10, Chống ăn mòn NEMA 4X.
* **Tính năng chuyên dụng:**
  * Hỗ trợ bắt biển số và đếm xe chính xác ở vận tốc lên đến 120 km/h.
  * Phân loại chi tiết 4 nhóm phương tiện: Xe con, xe tải, xe khách, xe container.
  * Hỗ trợ tích hợp thêm radar đo tốc độ (tùy chọn phiên bản).

### 🛣️ Tuyến đường Liên tỉnh (Vận tốc trung bình 50 - 80 km/h)
* **Model Đề xuất:** `iDS-2CD7A26G0/P-IZHS`
* **Loại thiết bị:** Camera Thân chuyên dụng ANPR (Nhận diện biển số).
* **Thông số lõi:** Độ phân giải 2MP (tối ưu cho ANPR ban đêm), Công nghệ siêu nhạy sáng DarkFighter.
* **Tính năng chuyên dụng:**
  * Giám sát và đếm lưu lượng xe độc lập trên 1 đến 2 làn đường.
  * Nhận diện biển số xe, nhận diện màu sắc và thương hiệu/logo xe.
  * Tối ưu hóa chống ngược sáng (WDR 140dB) giúp đèn pha ô tô ban đêm không làm lóa biển số.

### 🏡 Tuyến đường Khu dân cư / Đô thị hỗn hợp (Vận tốc <50 km/h)
* **Model Đề xuất:** `iDS-2CD7146G0-IZS` (Dạng Dome/Bán cầu) hoặc `iDS-2CD7A46G0-IZHS` (Dạng Thân).
* **Loại thiết bị:** Camera thông minh tích hợp Mô hình AI lớn (Guanlan Large Model).
* **Thông số lõi:** Độ phân giải 4MP, Ống kính góc rộng zoom quang học.
* **Tính năng chuyên dụng:**
  * Kích hoạt chế độ **Mixed-Traffic Detection** (Giao thông hỗn hợp).
  * Đếm riêng biệt và chính xác đồng thời: Xe máy, xe đạp, ô tô và người đi bộ sang đường.
  * Thuật toán Guanlan giúp lọc bỏ hoàn toàn báo động giả do bóng cây, chó mèo hoặc thời tiết (mưa, tuyết).

---

## 2. Thông số Kỹ thuật chung phục vụ Tích hợp C#

### Giao thức truyền dữ liệu về Server
* **Hikvision SDK (C++ Wrapper cho C#):** Sử dụng hàm lắng nghe sự kiện thời gian thực `NET_DVR_StartListen_V30`. Dữ liệu trả về cấu trúc Struct `NET_ITS_PLATE_RESULT`.
* **ISAPI (HTTP Listening):** Camera tự động gửi gói `HTTP POST` chứa dữ liệu định dạng **JSON** hoặc **XML** về webhook/API endpoint của C#.

### Cấu trúc Dữ liệu Đầu ra (Data Payload)
Mỗi khi có phương tiện đi qua vạch ảo, camera sẽ gửi về một gói tin bao gồm:
1. **Traffic Data (Văn bản):**
   * Số thứ tự xe (Sequence Number).
   * Loại phương tiện (Vehicle Type: Car, Truck, Bus, Motorbike).
   * Biển số xe (License Plate Text - nếu có).
   * Màu sắc xe (Vehicle Color).
   * Hướng di chuyển (Direction: Approach - Lại gần, Leave - Đi ra xa).
   * Thời gian chính xác (Timestamp).
2. **Image Data (Hình ảnh):**
   * Ảnh chụp toàn cảnh phương tiện (được mã hóa dạng Base64 hoặc truyền link binarized).
   * Ảnh cắt riêng vùng biển số (License Plate Crop Image).

---

## 3. Kiến trúc Hệ thống Gợi ý

