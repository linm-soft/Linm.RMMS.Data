# Tài liệu hãng Hikvision — đối chiếu thuyết minh camera RMMS

File nội bộ. Dùng khi kiểm tra lại chỉ số trong `../phan-mem-cam-ai-tren-rmms.md`. Không gửi khách thay thuyết minh.

Ngày tra: 2026-09-08 · bổ sung `iDS-TCM403-BI(G)/G` 2026-09-23. Chỉ lấy trang sản phẩm và PDF trên `hikvision.com`. Không lấy số đại lý nếu khác tài liệu hãng.

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
| iDS-TCM403-BI(G)/G (đã chọn QL1) | [ids-tcm403-bi · BI(G)/G](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/?subName=iDS-TCM403-BI%28G%29%2FG) | [iDS-TCM403-BI_Datasheet_20250424.pdf](https://www.hikvision.com/content/dam/hikvision/pt-br/iDS-TCM403-BI_Datasheet_20250424.pdf) | 2025-04-24 |
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

### iDS-TCM403-BI(G)/G — model lựa chọn QL1 (2026-09-23)

Nguồn spec đã đọc: trang [Hikvision HK](https://www.hikvision.com/hk/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/) liệt kê SKU `iDS-TCM403-BI(G)/G`. Trang Global user chọn: [ids-tcm403-bi · subName BI(G)/G](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/?subName=iDS-TCM403-BI%28G%29%2FG). PDF: [iDS-TCM403-BI_Datasheet_20250424.pdf](https://www.hikvision.com/content/dam/hikvision/pt-br/iDS-TCM403-BI_Datasheet_20250424.pdf). Map nhãn: `docs/context/features/camera-vehicle-type.md` §1b.

| Chỉ tiêu | Chỗ đối chiếu trên tài liệu hãng |
|----------|-----------------------------------|
| 9 loại xe: Car, Van, Bus, Truck, Light Truck, SUV(MPV), Pickup, Motorcycle, Tricycle | Vehicle Type — không có % phân loại |
| Màu 11 sắc, chỉ ban ngày | Vehicle Color |
| 212 hãng xe (có VinFast) | Vehicle Manufacturer |
| Bắt xe > 99%, đọc biển > 98%, hướng > 98,5%, bắt nhầm < 2% | Accuracy, recommended installation and lighting |
| Dải bắt 5–120 km/h, tới 3 làn | Capture Speed Range · Coverage |
| Xe không biển, biển xe máy | No License Plate Detection · Motorcycle LPR |
| Việt Nam | LPR Countries/Regions · Asia-Pacific |
| Ùn, dừng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp; lưu lượng, tốc độ trung bình, hàng đợi | Smart Function / Incident — không có % |
| Không radar 77 GHz như GIR | Không có mục Radar trên SKU BI |
| PDF pt-br 20250424 còn bảng 120 km/h và 200 km/h | Không lấy bảng 200 km/h khi trích SKU `BI(G)/G` (trang SKU ghi 5–120 km/h) |

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
