# Tài liệu hãng Hikvision — đối chiếu thuyết minh camera RMMS

File nội bộ. Dùng khi kiểm tra lại chỉ số trong `../phan-mem-cam-ai-tren-rmms.md`. Không gửi khách thay thuyết minh.

Ngày tra: 2026-09-08. Chỉ lấy trang sản phẩm và PDF trên `hikvision.com`. Không lấy số đại lý nếu khác tài liệu hãng.

## Mục lục link tài liệu tham khảo

1. [Trang sản phẩm iDS-TCM403-GIR](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/)
2. [PDF iDS-TCM403-GIR (2024-08-01)](https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000177/S000000188/S000000209/OFR000286/M000073503/Data_Sheet/iDS-TCM403-GIR_Datasheet_20240801.pdf)
3. [Trang sản phẩm iDS-TCM403-BI](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/)
4. [PDF iDS-TCM403-BI (2025-04-24)](https://www.hikvision.com/content/dam/hikvision/pt-br/iDS-TCM403-BI_Datasheet_20250424.pdf)
5. [Trang sản phẩm iDS-2CD7A46G2/LM-IZHS](https://www.hikvision.com/en/products/IP-Products/Network-Cameras/DeepinView-Series/ids-2cd7a46g2-lm-izhs-y-/)
6. [PDF đối chiếu iDS-2CD7A46G2/LM-IZHS](https://www.maxalarm.sk/buxus/docs/datasheety/iDS-2CD7A46G2_LM-IZHSY_en_Datasheet.pdf)
7. [Trang sản phẩm iDS-2CD7A46G2/P-IZHS (đối chiếu, không phải model gửi khách)](https://www.hikvision.com/en/products/IP-Products/Network-Cameras/DeepinView-Series/ids-2cd7a46g2-p-izhs-y---5g-/)
8. [PDF đối chiếu iDS-2CD7A46G2/P-IZHS (2025-04-25)](https://download.discomp.cz/hikvision/datasheets/iDS-2CD7A46G2-P-IZHSY-5G_Datasheet_20250425.pdf)

---

Chỉ số trên tài liệu hãng áp dụng khi lắp đặt và chiếu sáng theo khuyến nghị. Thực tế trên tuyến có thể khác. Không dùng làm căn xử lý vi phạm khi chưa hiệu chuẩn và nghiệm thu trên tuyến.

---

## 1. Model trong thuyết minh

| Model trên thuyết minh | Trang sản phẩm (Hikvision Global) | PDF tài liệu kỹ thuật | Ngày trên PDF |
|------------------------|----------------------------------|------------------------|---------------|
| iDS-TCM403-GIR (kể cả /POE/2812) | [ids-tcm403-gir](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/) | [iDS-TCM403-GIR_Datasheet_20240801.pdf](https://www.hikvision.com/content/dam/hikvision/products/S000000001/S000000177/S000000188/S000000209/OFR000286/M000073503/Data_Sheet/iDS-TCM403-GIR_Datasheet_20240801.pdf) | 2024-08-01 |
| iDS-TCM403-BI | [ids-tcm403-bi](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/) | [iDS-TCM403-BI_Datasheet_20250424.pdf](https://www.hikvision.com/content/dam/hikvision/pt-br/iDS-TCM403-BI_Datasheet_20250424.pdf) | 2025-04-24 |
| iDS-2CD7A46G2/LM-IZHS | [ids-2cd7a46g2-lm-izhs-y-](https://www.hikvision.com/en/products/IP-Products/Network-Cameras/DeepinView-Series/ids-2cd7a46g2-lm-izhs-y-/) | PDF Data Sheet trên trang sản phẩm (mục Technical documents). Bản đối chiếu công khai: [iDS-2CD7A46G2_LM-IZHSY_en_Datasheet.pdf](https://www.maxalarm.sk/buxus/docs/datasheety/iDS-2CD7A46G2_LM-IZHSY_en_Datasheet.pdf) | Trang Global không gắn ngày trên URL; đối chiếu thêm PDF 2025-09-29 nếu hãng phát hành lại |

Ghi chú PDF TCM403-BI: file nằm nhánh `pt-br` trên `hikvision.com` (cùng mã hiệu, tiếng Anh). Khi hãng đăng bản Global mới, ưu tiên PDF trên trang [ids-tcm403-bi](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/) mục Data Sheet.

---

## 2. Chỉ số đã đưa vào thuyết minh — chỗ đối chiếu

### iDS-TCM403-GIR

Nguồn: PDF 20240801 và trang sản phẩm Global.

| Chỉ tiêu trên thuyết minh | Chỗ đối chiếu trên tài liệu hãng |
|---------------------------|-----------------------------------|
| Bắt xe trên 99% | Capture rate (recommended installation and lighting) |
| Đọc biển trên 98% | License plate recognition / LPR |
| Hướng trên 98,5% | Driving direction |
| Bắt nhầm dưới 2% | Mistaken capture |
| Radar 77 GHz, FMCW, đến 120 km/h, cộng trừ 2 km/h, đến 3 làn, cự ly đến 50 m | Mục Radar: Working Frequency, Modulation Waveform, Speed Measuring Range, Speed Measuring Accuracy, Coverage Lanes, Detection Distance |
| Phân loại loại xe (ô tô con, van, buýt, tải, …) | Vehicle type; hãng không công bố phần trăm đếm và phân loại |
| Vùng nhận diện biển châu Á - Thái Bình Dương | LPR countries/regions: Asia-Pacific |

### iDS-TCM403-BI

Nguồn: PDF 20250424 và trang sản phẩm Global.

| Chỉ tiêu trên thuyết minh | Chỗ đối chiếu trên tài liệu hãng |
|---------------------------|-----------------------------------|
| Bắt xe / đọc biển / hướng tại 120 km/h và 200 km/h | Accuracy theo tốc độ bắt (120 km/h và 200 km/h) |
| Bắt nhầm dưới 2% | Mistaken capture (bản vùng châu Âu trên PDF đã tra) |
| Ùn tắc, dừng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp | Incident / smart function: congestion, stopped vehicle, lane change, wrong-way, speeding, low-speed. Hãng không công bố phần trăm |
| Không radar tích hợp như GIR | Không có mục Radar 77 GHz như GIR |

### iDS-2CD7A46G2/LM-IZHS

Nguồn: trang sản phẩm Global DeepinViewX.

| Chỉ tiêu trên thuyết minh | Chỗ đối chiếu trên tài liệu hãng |
|---------------------------|-----------------------------------|
| Bắt xe trên 98%, hướng trên 96% | Capture / driving direction trên tài liệu bản LM (không lấy bộ số của bản P) |
| Bản LM không ghi đọc biển từ 98% trở lên | So với bản P dưới đây. Không gán LPR từ 98% cho mã /LM trên thuyết minh |

### Bản P (chỉ để đối chiếu, không phải model trên danh mục gửi khách)

| Model | Trang sản phẩm | PDF |
|-------|----------------|-----|
| iDS-2CD7A46G2/P-IZHS | [ids-2cd7a46g2-p-izhs-y---5g-](https://www.hikvision.com/en/products/IP-Products/Network-Cameras/DeepinView-Series/ids-2cd7a46g2-p-izhs-y---5g-/) | Data Sheet trên trang sản phẩm. Bản PDF đối chiếu: [iDS-2CD7A46G2-P-IZHSY-5G_Datasheet_20250425.pdf](https://download.discomp.cz/hikvision/datasheets/iDS-2CD7A46G2-P-IZHSY-5G_Datasheet_20250425.pdf) |

Trên tài liệu bản P: đọc biển từ 98%, bắt xe từ 99%, hướng từ 98%, lắp phía trước đến 120 km/h, lắp bên đến 80 km/h. Thuyết minh chỉ dùng các số này khi nói rõ là bản P, không gán cho bản LM.

---

## 3. Hạng mục không có trên tài liệu camera hãng

Mục 7, 8, 9 trên thuyết minh (biển báo, cọc tiêu, hư mặt đường, tài sản mới từ xe tuần): thị giác AI (ảnh gửi lên cloud). Tài liệu TCM403 và DeepinView không công bố nhận diện các hạng mục này. Không lấy phần trăm đọc biển số của camera cố định cho các mục đó.

---

## 4. Cách tra lại khi hãng cập nhật

1. Mở trang sản phẩm Global (cột 2 bảng mục 1).
2. Tải Data Sheet mới nhất ở mục Technical documents.
3. So ngày PDF với bảng mục 1. Nếu khác, ghi ngày mới vào file này rồi sửa chỉ số trên thuyết minh nếu hãng đổi số.
4. Không dùng số trên báo giá đại lý khi khác PDF hãng.
