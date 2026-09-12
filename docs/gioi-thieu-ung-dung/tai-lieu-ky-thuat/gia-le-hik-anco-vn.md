# DANH MỤC THIẾT BỊ ITS HIKVISION — GIÁ LẺ ANCO

> **Đối tượng:** Chi cục / Ban QLDA / thẩm định giá / thuyết minh kỹ thuật gửi Cục ĐBVN  
> **Nguồn gốc:** `GIa lẻ Hik Anco.xlsx` (sheet ITS, Anco · Hikvision)  
> **Ngày dịch:** 2026-09-08  
> **Nguyên tắc dịch:** thuật ngữ **ngành đường bộ / ITS**, thống nhất với thuyết minh phần mềm RMMS — không giữ tiếng Anh datasheet trong cột mô tả; **mã hiệu** giữ nguyên.

---

## 1. Bảng tổng hợp

Đơn giá là **giá lẻ** trên báo giá gốc. Thành tiền = số lượng × đơn giá, **chưa VAT**. VAT **8%**. Cột HCHQ: **hàng chính hãng / có hồ sơ chứng từ**.

| STT | Tên hạng mục (chuẩn ngành đường bộ) | Mã hiệu | ĐVT | SL | Đơn giá (đ) | Thành tiền (đ) | VAT | HCHQ |
|-----|-------------------------------------|---------|-----|----|-------------|----------------|-----|------|
| 1 | Camera giao thông ITS nhận diện biển số, đo tốc độ đến 120 km/h, phát hiện lấn làn | iDS-TCM403-GIR/POE/2812 | cái | 1 | 66.500.000 | 66.500.000 | 8% | Có |
| 2 | Camera giao thông ITS nhận diện biển số, phát hiện lấn làn, phân loại phương tiện | iDS-TCM403-BI | cái | 1 | 45.900.000 | 45.900.000 | 8% | Có |
| 3 | Đèn trợ sáng cho camera giao thông | DS-TL2000CI/S | cái | 1 | 8.650.000 | 8.650.000 | 8% | — |
| 4 | Camera AI dạng thân nhận diện biển số | iDS-2CD7A46G2/LM-IZHS (2,8–12 mm) | cái | 1 | 32.800.000 | 32.800.000 | 8% | Có |
| 5 | Màn hình ghép 55 inch, viền 1,7 mm (tường hình trung tâm) | DS-D2055EL-0A | cái | 9 | 79.500.000 | 715.500.000 | 8% | — |
| 6 | Khung treo tường cho màn hình ghép | DP-D2X4655-1X1-Q1-NW-Q0.8-ZF | bộ | 9 | 3.000.000 | 27.000.000 | 8% | — |
| 7 | Bộ điều khiển màn hình ghép (tường hình) | DS-C66S-S6 | bộ | 1 | 55.000.000 | 55.000.000 | 8% | — |
| 8 | Card HDMI 4 cổng vào cho bộ điều khiển tường hình | DS-C66S-04HI | cái | 1 | 32.500.000 | 32.500.000 | 8% | — |
| 9 | Card HDMI 4 cổng ra cho bộ điều khiển tường hình | DS-C66S-04HO | cái | 3 | 32.500.000 | 97.500.000 | 8% | — |
| | **Cộng** | | | | | **1.081.350.000** | | |
| | **VAT 8%** | | | | | **86.508.000** | | |
| | **Tổng cộng (đã VAT)** | | | | | **1.167.858.000** | | |

---

## 2. Thuật ngữ gốc → chuẩn ngành đường bộ

| Trên báo giá gốc (lỗi / tiếng Anh) | Dùng trong tài liệu này |
|------------------------------------|-------------------------|
| nhận diện **bảng số** | nhận diện **biển số** |
| bắt tốc độ &lt;120KM/2 | **đo tốc độ đến 120 km/h** |
| Lấn lanes / lấn lens lấn làn | **phát hiện lấn làn, đè vạch** |
| License plate recognition / ANPR | nhận diện biển số phương tiện |
| Vehicle type classification | phân loại loại phương tiện |
| color identification | nhận dạng màu phương tiện |
| no-plate vehicle capture | bắt ảnh phương tiện **không biển số** |
| driving / moving direction | xác định **hướng di chuyển** |
| speed measurement / speeding | **đo tốc độ** / phát hiện **vượt tốc độ** |
| traffic flow | **đo đếm lưu lượng** giao thông |
| stopped vehicle | phát hiện phương tiện **dừng, đỗ** |
| congestion | phát hiện **ùn tắc** |
| motorbike capture | bắt ảnh **xe máy** |
| Video wall | **tường hình / màn hình ghép** tại trung tâm điều hành |
| Darkfighter Ultra-low light | công nghệ **siêu nhạy sáng** (ánh sáng yếu) |
| Motorized zoom lens | ống kính **zoom cơ điện** (thay đổi tiêu cự) |
| IR 850 mm LED *(lỗi gốc)* | đèn hồng ngoại **850 nm** |
| 3 lane(s) | phủ **3 làn đường** |
| HCHQ | hàng chính hãng / có hồ sơ chứng từ |

Mã hiệu, đơn vị đo SI (Lux, dB, km/h, mm) và tên giao thức (H.265, HDMI, ONVIF, RS-485, PoE) **giữ nguyên**.

---

## 3. Chi tiết kinh tế — kỹ thuật từng hạng mục

### 3.1. Camera giao thông ITS nhận diện biển số, đo tốc độ đến 120 km/h, phát hiện lấn làn

- **Mã hiệu:** iDS-TCM403-GIR/POE/2812  
- **ĐVT / SL:** cái / 01  
- **Đơn giá:** 66.500.000 đ · **HCHQ:** Có  

**Đặc điểm kỹ thuật:**

- Công nghệ siêu nhạy sáng DarkFighter; cảm biến CMOS quét lần 1/1,8".
- Độ nhạy sáng màu: 0,001 Lux @ (F1.2, AGC bật).
- Độ phân giải 2.688 × 1.520; 25/30 hình/giây; nén H.265 / H.264 / MJPEG; WDR 140 dB.
- Ống kính zoom cơ điện; đèn trắng hoặc đèn hồng ngoại 850 nm tích hợp.
- Cổng báo động 1 vào; RS-485; cấp bảo vệ IP67; phiên bản chống ăn mòn (-Y).
- Chức năng nghiệp vụ đường bộ: nhận diện biển số; phân loại loại phương tiện; nhận dạng màu phương tiện; bắt ảnh phương tiện không biển số; xác định hướng di chuyển; đo tốc độ (radar, đến khoảng 120 km/h); hỗ trợ phát hiện lấn làn.

Phù hợp điểm camera trên **quốc lộ / đô thị**, gắn với tường hình và sự kiện biển số — tốc độ trên RMMS.

---

### 3.2. Camera giao thông ITS nhận diện biển số, phát hiện lấn làn, phân loại phương tiện

- **Mã hiệu:** iDS-TCM403-BI  
- **ĐVT / SL:** cái / 01  
- **Đơn giá:** 45.900.000 đ · **HCHQ:** Có  

**Đặc điểm kỹ thuật:**

- Công nghệ siêu nhạy sáng DarkFighter; cảm biến CMOS quét lần 1/1,8".
- Độ nhạy sáng màu: 0,001 Lux @ (F1.2, AGC bật).
- Độ phân giải 2.688 × 1.520; 25/30 hình/giây; nén H.265 / H.264 / MJPEG; WDR 140 dB.
- Ống kính zoom cơ điện; đèn trắng hoặc đèn hồng ngoại 850 nm tích hợp.
- Âm thanh 1 vào / 1 ra; báo động 1 vào / 1 ra; 2 rơ-le; Wiegand; RS-485; IP67; chống va đập IK10.
- Chức năng nghiệp vụ: nhận diện biển số; bắt ảnh xe máy; phân loại loại phương tiện; nhận dạng màu; xác định hướng di chuyển; đo đếm lưu lượng; phát hiện phương tiện dừng, đỗ; phát hiện ùn tắc; phát hiện vượt tốc độ; phát hiện chạy tốc độ thấp; hỗ trợ phát hiện lấn làn.

---

### 3.3. Đèn trợ sáng cho camera giao thông

- **Mã hiệu:** DS-TL2000CI/S  
- **ĐVT / SL:** cái / 01  
- **Đơn giá:** 8.650.000 đ  

**Đặc điểm kỹ thuật:**

- Nguồn AC 220 V; 16 bóng LED; nhiệt độ màu 5.000–7.000 K.
- Cự ly hiệu dụng 16–25 m; góc chiếu khoảng 30°; phủ đến **3 làn đường**.
- Phiên bản -CI: LED hồng ngoại 850 nm; phiên bản -C: đèn trắng.
- Chế độ chiếu liên tục, hồng ngoại hoặc ánh sáng trắng.
- Thân hợp kim nhôm, tản nhiệt dạng cánh, kính cường lực xuyên sáng cao.
- Chip LED hồng ngoại tuổi thọ cao, ổn định, hiệu suất quang tốt.
- Thiết kế quang học chuyên dụng, ánh sáng đều, điểm chiếu rõ.
- Tự động bật khi ánh sáng môi trường thấp.
- Chống nước, chống bụi IP66.

Dùng bổ trợ camera nhận diện biển số ban đêm, giảm lóa và thiếu sáng trên mặt đường.

---

### 3.4. Camera AI dạng thân nhận diện biển số

- **Mã hiệu:** iDS-2CD7A46G2/LM-IZHS (ống kính 2,8–12 mm)  
- **ĐVT / SL:** cái / 01  
- **Đơn giá:** 32.800.000 đ · **HCHQ:** Có  

**Đặc điểm kỹ thuật:**

- Công nghệ siêu nhạy sáng DarkFighter; màu 0,0005 Lux/F1.2; đen trắng 0,0001 Lux/F1.2; CMOS 1/1,8".
- Độ phân giải 4 MP; 25/30 hình/giây; nén H.265+ / H.265 / H.264+ / H.264 / MJPEG; WDR 150 dB; 3 luồng hình.
- Âm thanh 1 ra / 1 vào; báo động 2 vào / 2 ra; RS-485; ra nguồn 12 V DC; ra CVBS.
- Cảm biến gia tốc: phát hiện rung, va đập.
- IP67 / IK10 / NEMA 4X (phiên bản -Y); nhiệt độ −40 °C đến 60 °C.
- Sưởi kính trước chống đọng sương; PVC Free; TPM 2.0 (FIPS 140-2 cấp 2, CC EAL4+).
- AI đa nhiệm (mô hình Guanlan): nhận diện biển số (ANPR), bảo vệ chu vi, AIOP, OVD; siêu dữ liệu chu vi và biển số.

Phù hợp đoạn tuyến cần nhận diện biển số kèm giám sát hành lang / chu vi tại điểm lắp.

---

### 3.5. Màn hình ghép 55 inch, viền 1,7 mm (tường hình trung tâm điều hành)

- **Mã hiệu:** DS-D2055EL-0A  
- **ĐVT / SL:** cái / 09  
- **Đơn giá:** 79.500.000 đ · **Thành tiền:** 715.500.000 đ  

**Đặc điểm kỹ thuật:**

- Kích thước 55 inch; độ sáng 500 nit; viền siêu mỏng 1,7 mm.
- Nhận tín hiệu 4K; nối vòng HDMI đến 30 màn hình.
- Ba chế độ hình: giám sát, họp, phim.
- Hiệu chỉnh màu và độ sáng đồng đều từ nhà máy; đèn nền LED chiếu trực tiếp, sáng đều.
- Độ phân giải 1.920 × 1.080; góc nhìn 178°.
- Chống lóa, độ nét cao, dải màu rộng; vỏ kim loại chống nhiễu điện từ.
- Làm việc liên tục 24/24 tại phòng trực; lắp tường hoặc giá modular.

Dùng ghép **tường hình** theo dõi camera trên tuyến tại trung tâm.

---

### 3.6. Khung treo tường cho màn hình ghép

- **Mã hiệu:** DP-D2X4655-1X1-Q1-NW-Q0.8-ZF  
- **ĐVT / SL:** bộ / 09  
- **Đơn giá:** 3.000.000 đ · **Thành tiền:** 27.000.000 đ  

**Đặc điểm kỹ thuật:**

- Kết cấu thép chắc, hạn chế võng, xoắn màn hình.
- Tôn thép cán nguội (SPCC).
- Lắp đặt nhanh, phù hợp ghép tường hình 55 inch.

---

### 3.7. Bộ điều khiển màn hình ghép (tường hình)

- **Mã hiệu:** DS-C66S-S6  
- **ĐVT / SL:** bộ / 01  
- **Đơn giá:** 55.000.000 đ  

**Đặc điểm kỹ thuật:**

**Kết cấu**

- Vỏ chuẩn rack 2U, 6 khe cắm, lắp lẫn card vào / ra.
- 1 quạt tản nhiệt luồng gió trái–phải.
- Nút bấm: 2 nút chuyển cảnh tùy chỉnh, 2 nút chuyển cảnh.
- Thiết kế module cắm nóng, mở rộng và bảo trì tại chỗ.
- Màn hình cảm ứng IPS 4,5 inch theo dõi trạng thái khung và card.
- Âm thanh 2 vào / 2 ra giắc 3,5 mm.

**Đầu vào hình**

- Nhận tín hiệu máy tính, thiết bị họp, máy chủ siêu độ phân giải; tương thích DVI, HDMI, HDMI 4K, DP 4K, SDI; cho phép độ phân giải tùy chỉnh.
- Âm thanh ghép hoặc độc lập; lấy mẫu 16 bit, 32/48 kHz, 2 kênh.
- Thu và phát RGB888 (không mất chất lượng), hỗ trợ đến RGB101010.
- Ghép siêu độ phân giải, đến 16 nguồn vào 4K.
- Chồng chữ OSD trên nguồn vào; cắt viền đen.

**Đầu ra hình**

- Ra DVI, HDMI, HDMI 4K và ra qua cổng mạng.
- Card 2K: 4 ra 1080P60; card 4K: 2 ra 4K; tương thích LCD và LED; độ phân giải ra tùy chỉnh.
- Board chính: âm thanh độc lập; card HDMI: âm thanh ghép.
- Đồng bộ khung hình giữa các cổng ra: không giật, mất khung, xé hình, hở mạch ghép.
- Card điều khiển LED: chế độ tải nhỏ (0,65 MP/cổng mạng) và tải chuẩn (2,925 MP/cổng mạng).

**Tường hình**

- Xem trước tường hình và nguồn ghép (kèm card xem trước tùy chọn).
- Khung 6 khe, cấu hình đủ card: ghép đến 20 màn hình.
- Cửa sổ, trôi cửa sổ, nhiều lớp trên một giao diện.
- 3 ảnh nền; 1 nền / tường, 1.920 × 1.080.
- Đến 8 tường hình; đến 128 cảnh preset (bố cục tường hình theo ca trực).
- 24 nhóm nguồn tự chuyển (một cửa sổ, một phần, toàn màn); lưu trong cảnh; hẹn vị trí, cảnh, thời điểm.
- Nhấp đúp phóng to / thu cửa sổ con.

**Vận hành — bảo trì**

- Xuất nhật ký ra USB mặt trước.
- Điều khiển bằng phần mềm máy tính và Web (Chrome 45 trở lên); ứng dụng Android / iOS.
- Lấy, cấu hình, xuất / nhập tham số từ xa.
- Giám sát trạng thái, nhật ký; khởi động lại, khôi phục mặc định, nâng cấp từ xa.
- Cảnh báo sự cố: card mất liên lạc, đứt mạng, trùng IP, truy cập trái phép, quá nhiệt, quạt lỗi.
- Phân quyền người dùng trên nền tảng HCP theo tường hình được giao.
- Đồng bộ giờ thủ công hoặc NTP (bắt buộc khi clip dùng làm chứng từ).

**Giải mã và kết nối thiết bị**

- Card giải mã nguồn mạng: camera IP, đầu ghi NVR.
- Kết nối nguồn mạng theo chuẩn ONVIF.
- Điều khiển bằng bàn phím mạng, bàn phím cổng nối tiếp hoặc máy tính bảng: chia cửa sổ, chuyển cảnh.

**Tính năng mở rộng**

- Điều khiển LCD bằng phần mềm: bật/tắt, chuyển nguồn, sáng, tương phản, màu, nét, chỉnh vị trí ngang/dọc.
- HDR10, HLG, HDCP; 8 bit / 10 bit; khung hình nguồn 24–120 Hz, tự thích ứng.
- Điều khiển ngược bàn phím / chuột máy chủ siêu độ phân giải qua USB board chính.
- Cổng đồng bộ Genlock.

---

### 3.8. Card HDMI 4 cổng vào

- **Mã hiệu:** DS-C66S-04HI  
- **ĐVT / SL:** cái / 01  
- **Đơn giá:** 32.500.000 đ  

**Đặc điểm kỹ thuật:**

- Card 4 kênh tín hiệu HDMI 2K vào.
- Nhận âm thanh ghép HDMI.
- Hỗ trợ HDCP.

---

### 3.9. Card HDMI 4 cổng ra

- **Mã hiệu:** DS-C66S-04HO  
- **ĐVT / SL:** cái / 03  
- **Đơn giá:** 32.500.000 đ · **Thành tiền:** 97.500.000 đ  

**Đặc điểm kỹ thuật:**

- Card 4 cổng HDMI ra.
- Phát âm thanh ghép HDMI.

Ba card ra × 4 cổng = đến 12 cổng HDMI, phù hợp ghép **9 màn hình 55 inch** (mục 3.5) và dự phòng cổng.

---

## 4. Ghi chú gửi thẩm định / Chi cục

1. Đây là **giá lẻ** nhà cung cấp (Anco / Hikvision), chưa phải giá gói thầu hay dự toán công trình.
2. Camera mục 1–2–4 là thiết bị **ITS trên tuyến**; mục 5–9 là **tường hình tại trung tâm điều hành** — cùng hệ thống giám sát camera RMMS.
3. Số đo datasheet (Lux, WDR, % nhận diện nếu có ở tài liệu hãng) **không** dùng làm SLA phạt nguội / xử lý vi phạm khi chưa hiệu chuẩn hiện trường và UAT trên tuyến.
4. Cáp quang / VPN về trung tâm là điều kiện xem live; 4G chỉ dự phòng sự kiện, ảnh — xem thuyết minh lắp đặt camera AI trên tuyến.
