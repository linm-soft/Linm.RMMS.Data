# DANH SÁCH THIẾT BỊ CAMERA ĐẾM XE & GIÁM SÁT GIAO THÔNG HIKVISION

Tất cả các thiết bị trong danh sách này đều hỗ trợ **Edge AI (Xử lý tại biên)**. Camera tự động nhận diện, phân loại phương tiện và nhận diện biển số mà không cần máy tính (CPU/GPU) đi kèm để xử lý hình ảnh. Dữ liệu đầu ra được đóng gói dạng XML/JSON truyền thẳng về ứng dụng C#.

---

## 1. Danh sách Model theo Tuyến đường

### 📡 Urban road / Radar-Assisted ANPR (ưu tiên ITS tốc độ + biển số)
* **Model Đề xuất:** `iDS-TCM403-GIR`
* **Loại thiết bị:** Bullet ANPR + radar mmWave 77 GHz (ITS Urban Road).
* **Thông số lõi:** 4 MP (2688×1520) · 1/1.8" CMOS · ống kính motorized 8–32 mm · WDR 140 dB · IR ~50 m · IP67 / IK10 · PoE+.
* **Tính năng chuyên dụng:**
  * Radar đo tốc độ tới ~120 km/h (±2 km/h) · phủ tới 3 làn · khoảng cách ~50 m.
  * Edge ANPR: biển số · loại/màu/hướng xe · xe không biển.
  * Tích hợp RMMS: **ISAPI HTTP notify** + RTSP live + ONVIF — page kết nối `camera-connect` · MFE `Linm.Web.RMMS.Camera`.
* **Product:** https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/

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

## 1b. Độ chính xác Edge AI (theo datasheet Hikvision)

> **Nguồn:** trang sản phẩm / datasheet chính thức · số đo **dưới điều kiện lắp đặt & ánh sáng khuyến nghị**.  
> Thực địa VN (mưa, ngược sáng, biển bẩn, góc lệch) có thể thấp hơn — cần UAT tuyến.  
> **Ngày tra:** 2026-08-12.

| Model (catalog RMMS) | Bắt xe (capture) | Đọc biển (LPR) | Hướng xe | Tốc độ | Đếm / phân loại | Ghi chú |
|----------------------|------------------|----------------|----------|--------|-----------------|---------|
| **iDS-TCM403-GIR** | **> 99%** | **> 98%** | **> 98.5%** | Radar 77 GHz · tới **~120 km/h** · sai số tham chiếu dự án **±2 km/h** · phủ tới 3 làn | Traffic flow / đếm trên cam; loại xe: Car, Van, Bus, Truck, Light Truck, SUV, Pickup, Motorcycle, Tricycle · màu (ban ngày) | Mistaken capture **< 2%** · VN nằm vùng Asia-Pacific LPR · [product](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/) |
| **iDS-2CD7A46G0/…** (QL tốc độ cao) | **≥ 99%** | **≥ 98%** | **≥ 98%** | Capture tới **120 km/h** (lắp trước) / **80 km/h** (lắp bên) — **không** radar tích hợp mặc định | Đếm xe + non-vehicle; loại/màu/hãng/hướng | Checkpoint scenario · DeepinView ANPR |
| **iDS-2CD7A26G0/…** (liên tỉnh) | **≥ 99%** | **≥ 98%** | **≥ 98%** | Tới **120 / 80 km/h** (trước / bên) — như trên | Đếm xe + non-vehicle; loại/màu/hãng | 2 MP DarkFighter · tối ưu đêm |
| **iDS-2CD7146G0-IZS** / **2CD7A46G0-IZHS** (đô thị hỗn hợp) | *Không công bố % LPR giống dòng ANPR checkpoint* | *Không công bố cùng bộ số ≥98%* | — | Không radar ANPR | Mixed-traffic / people+vehicle counting (Guanlan) — **không có % đếm công bố rõ trên datasheet** | Ưu tiên lọc false alarm (bóng cây, thú, thời tiết) hơn ANPR tốc độ cao |

**Tóm tắt cho khách / BA:**

| Chỉ tiêu | Band datasheet (cam Edge ANPR chính) |
|----------|--------------------------------------|
| Đọc biển số | **≥ / > 98%** |
| Bắt được xe qua vạch (capture / gắn với đếm sự kiện) | **≥ / > 99%** |
| Nhận hướng di chuyển | **≥ 98%** (TCM403: **> 98.5%**) |
| Tốc độ (chỉ TCM403 có radar sẵn) | Tới **120 km/h** · sai số tham chiếu **±2 km/h** (docs RMMS) |
| Phân loại loại xe | Có danh mục class — **Hikvision không công bố % riêng** trên datasheet các model trên |
| Đếm xe đô thị hỗn hợp (7146) | Có chức năng — **chưa có % chính thức** trong tài liệu public đã tra |

**Không** dùng các % trên làm SLA pháp lý tốc độ/phạt nguội nếu chưa hiệu chuẩn radar + UAT hiện trường.

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

