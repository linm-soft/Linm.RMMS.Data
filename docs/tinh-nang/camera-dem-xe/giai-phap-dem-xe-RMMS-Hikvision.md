# Giải pháp phần mềm — Hệ thống đếm xe tự động trên Quốc lộ 1

**Phạm vi:** Hà Nội – Cà Mau, quy mô dự kiến 58 trạm  
**Kính gửi:** Khu Quản lý đường bộ I  
**Căn cứ:** Mục 9 tờ trình khảo sát (giải pháp phần mềm và kiến trúc dữ liệu); TCVN 14182:2024 (bảo dưỡng thường xuyên đường bộ); TCVN 4054:2005 (xe con quy đổi); phụ lục bảng quy đổi trong tài liệu đếm xe của Cục Đường bộ Việt Nam.  
**Phần mềm:** Hệ thống quản lý kết cấu hạ tầng đường bộ RMMS, nguồn đếm tự động từ camera giao thông Hikvision.  
**File Word:** [Giai-phap-dem-xe-RMMS-Hikvision.docx](Giai-phap-dem-xe-RMMS-Hikvision.docx)

## 1. Mục đích

Thu thập, lưu trữ và khai thác lưu lượng xe trên các trạm Quốc lộ 1, gắn với cơ sở dữ liệu kết cấu hạ tầng đường bộ đang vận hành. Số liệu đếm nằm trong cùng hệ thống với tuần đường, tuần kiểm và bảo dưỡng thường xuyên.

Trạm vận hành **24/7**. Mỗi xe qua vạch đếm tạo một lượt. Trực ban vừa xem hình camera, vừa thấy lưu lượng tăng theo đúng loại xe.

Đếm thủ công theo TCVN 14182:2024 thực hiện mỗi tháng một lần, một lần ba ngày (hai ngày 16 giờ và một ngày 24 giờ). Đếm camera bổ sung chuỗi lưu lượng 24/7, không thay sổ nhập tay.

## 2. Điểm đặc biệt khi dùng camera Hikvision trên RMMS

Camera làm nhận dạng tại hiện trường. RMMS không học lại loại xe. Model tham chiếu trạm QL1 là **iDS-TCM403-BI(G)/G** (hoặc thiết bị tương đương cùng tính năng).

| Điểm đặc biệt | Nội dung |
|---------------|----------|
| Nhận dạng tại vạch | Camera phân loại theo hình dáng đúng lúc xe vào vạch đếm, rồi gửi một lượt về trung tâm |
| Chín loại xe của hãng | Xe con, van, xe khách, xe tải, xe tải nhẹ, SUV/MPV, bán tải, xe máy, xe ba bánh. Kèm biển số, hướng, màu xe ban ngày |
| Biển số tự động (ANPR) | Đọc biển ô tô, biển xe máy và trường hợp không có biển. Việt Nam thuộc vùng biển Asia-Pacific của hãng |
| Hai kênh độc lập | Hình trực tiếp luôn nối. Lượt đếm chỉ phát sinh khi xe vào vạch |
| Gắn với tài sản đường | Mỗi lượt gắn mã camera, tuyến, lý trình, tọa độ trong cơ sở dữ liệu đường bộ |
| Một xe một lượt | Hai tin của cùng một xe được gộp. Người đi bộ và xe thô sơ không cộng vào tổng ô tô |
| Quy đổi khi cần | Số gốc giữ 9 loại. Xe con quy đổi là bước tính sau, qua 19 loại TCVN 14182:2024, dùng bảng đối chiếu và số liệu Cục Đường bộ |
| Phục vụ hiện trường | Báo cáo lưu lượng thời gian thực dùng cho tuần đường, tuần kiểm và bảo dưỡng thường xuyên |

Chỉ số hãng, khi lắp đặt và chiếu sáng đúng khuyến nghị: nhận diện xe trên 99%, đọc biển trên 98%, nhận hướng trên 98,5%, nhận diện nhầm dưới 2%. Dải tốc độ nhận diện 5–120 km/h. Tốc độ chỉ lưu khi sự kiện có trường tốc độ. Một camera phủ tối đa 3 làn.

## 3. Kết nối và đồng bộ thời gian thực

### 3.1. Kiến trúc

Trạm đếm xe → camera tại trạm → phần mềm RMMS → cơ sở dữ liệu đếm xe → báo cáo và bản đồ → cơ sở dữ liệu kết cấu hạ tầng đường bộ.

Mỗi trạm một mã. Camera, làn, tuyến, lý trình và tọa độ dùng chung mã đó với các phân hệ tuần đường, tuần kiểm và bảo dưỡng.

| Đối tượng | Thông tin quản lý |
|-----------|-------------------|
| Trạm đếm | Mã trạm, tuyến, lý trình, tọa độ, khu quản lý, địa hình đoạn (đồng bằng và đồi, hoặc miền núi) |
| Camera | Mã thiết bị, model, làn, trạng thái đường truyền |
| Lượt xe | Thời điểm, làn, loại xe theo camera, biển số, hướng |
| Hình trực tiếp | Cùng mã camera. Xem hình không tạo lượt đếm |
| Lớp quy đổi | Cơ cấu 19 loại và xe con quy đổi, tính riêng, không sửa lượt gốc |
| Báo cáo | Lưu lượng theo trạm, tuyến, làn và khoảng thời gian |

### 3.2. Hai kênh

| Kênh | Cách nối | Trung tâm nhận được |
|------|----------|---------------------|
| Camera Live | Luôn kết nối (HLS), 24/7, không chờ có xe | Tường hình và bản đồ |
| Đếm xe | Camera gửi một lần khi xe vào vạch đếm | Một bản ghi: thời điểm, loại xe, biển số, hướng |

Đồng bộ lượt đếm: sự kiện ghi vào cơ sở dữ liệu ngay khi đường truyền thông. Màn hình bản đồ và báo cáo làm mới theo chu kỳ ngắn, khoảng 15 giây, trong suốt ca trực. Mất liên lạc thì sự kiện lưu tại trạm và gửi bù khi có sóng trở lại; nhật ký ghi nhận khoảng thời gian mất đồng bộ.

Trạm có cáp quang hoặc VPN: máy chủ kéo luồng RTSP. Trạm chỉ có 4G/5G, không có địa chỉ IP tĩnh: thiết bị tại trạm đẩy luồng RTSP vào cổng nhận của máy chủ. Đường 4G/5G đủ cho lượt đếm. Xem hình nhiều trạm cùng lúc cần khoảng 2–4 Mb/giây mỗi camera trên cáp quang hoặc đường truyền riêng.

### 3.3. Các bước người dùng thấy

1. Camera Live luôn kết nối (HLS), 24/7.
2. Xe đi vào làn. Chưa có lượt đếm.
3. Xe vào vạch đếm. Camera nhận loại xe và biển số.
4. Camera gửi một lần về phần mềm trung tâm.
5. Số đếm tăng theo đúng loại xe. Báo cáo và bản đồ cập nhật trong chu kỳ làm mới.
6. Camera Live luôn giữ kết nối thời gian thực.

## 4. Số liệu gốc: 9 loại camera

Số tự động lưu theo 9 loại Hikvision. Đây là số gốc để đối soát và để tính các lớp sau.

| STT | Loại camera | Nhãn trên RMMS |
|-----|-------------|----------------|
| 1 | Car | Xe con |
| 2 | Van | Xe van |
| 3 | Bus | Xe khách |
| 4 | Truck | Xe tải |
| 5 | Light Truck | Xe tải nhẹ |
| 6 | SUV (MPV) | SUV/MPV |
| 7 | Pickup | Xe bán tải |
| 8 | Motorcycle | Xe máy |
| 9 | Tricycle | Xe ba bánh |

Camera phân loại bằng hình dáng. Số chỗ ngồi, số trục, tải trọng và container 20 feet hay 40 feet không đọc từ ảnh. Những thông tin đó lấy từ số liệu Cục Đường bộ ở bước quy đổi.

## 5. Bước tính riêng: 19 loại và xe con quy đổi

Khi cần lưu lượng xe con quy đổi (PCU) theo TCVN 4054:2005, hệ thống chạy một bước tính riêng. Số gốc 9 loại và sổ đếm nhập tay giữ nguyên.

Ba nguồn đi cùng nhau:

1. Sản lượng 24/7 theo 9 loại, lấy từ camera.
2. Cơ cấu đội xe theo 19 loại TCVN 14182:2024, lấy từ số liệu Cục Đường bộ Việt Nam (sổ đếm, điều tra lưu lượng, số liệu đoạn tuyến).
3. Bảng quy đổi trong tài liệu đếm xe: 19 loại sang 6 nhóm xe của TCVN 4054:2005, với hệ số đồng bằng và đồi, hoặc hệ số miền núi.

Cách phân bổ từ 9 loại camera sang 19 loại:

| Nhóm camera | Đưa vào loại TCVN 14182:2024 | Cách chia |
|-------------|------------------------------|-----------|
| Xe con, van, SUV/MPV, bán tải | Loại 1 | Gộp vào loại 1. Camera không tách Jeep và không đếm số chỗ dưới 12 |
| Xe khách | Loại 2, 3, 4, 5, 6 | Chia theo tỷ lệ chỗ ngồi trong số liệu Cục Đường bộ trên cùng đoạn |
| Xe tải, xe tải nhẹ | Loại 7 đến 14 | Chia theo tỷ lệ số trục và tải trọng trong số liệu Cục Đường bộ |
| Xe máy | Loại 18 | Khớp trực tiếp |
| Xe ba bánh | Không có dòng riêng trong 19 loại | Giữ ở số gốc. Chỉ đưa vào quy đổi khi Cục có quy ước cho loại này |
| Container 20 feet, 40 feet, máy kéo | Loại 15, 16, 17 | Camera này không tách container. Các loại này chỉ vào bước quy đổi khi Cục có số liệu đầu kéo hoặc trạm thu phí |

Hệ số áp theo địa hình đoạn đường trong cơ sở dữ liệu đường bộ:

- Đồng bằng và đồi: độ dốc ngang phổ biến không quá 30%.
- Miền núi: độ dốc ngang phổ biến trên 30%.

Đoạn có làn riêng cho xe thô sơ thì không quy đổi xe đạp, theo ghi chú TCVN 4054:2005.

TCVN 14182:2024 và TCVN 4054:2005 không ban hành bảng đối chiếu trực tiếp. Bảng dưới đây là bảng quy đổi kỹ thuật trong tài liệu đếm xe, dựa trên tính chất từng nhóm phương tiện.

### Bảng quy đổi phương tiện từ TCVN 14182:2024 sang xe con quy đổi theo TCVN 4054:2005

| STT | Phân loại TCVN 14182:2024 | Nhóm xe TCVN 4054:2005 | Hệ số đồng bằng, đồi | Hệ số miền núi |
|-----|---------------------------|------------------------|----------------------|----------------|
| 1 | Xe con, xe Jeep, xe bán tải, xe dưới 12 chỗ | Xe con | 1,0 | 1,0 |
| 2 | Xe khách từ 12 đến dưới 25 chỗ | Xe buýt dưới 25 chỗ | 2,0 | 2,5 |
| 3 | Xe khách từ 25 đến dưới 30 chỗ | Xe buýt lớn | 2,5 | 3,0 |
| 4 | Xe khách từ 30 chỗ trở lên | Xe buýt lớn | 2,5 | 3,0 |
| 5 | Xe buýt dưới 25 chỗ | Xe buýt dưới 25 chỗ | 2,0 | 2,5 |
| 6 | Xe buýt từ 25 chỗ trở lên | Xe buýt lớn | 2,5 | 3,0 |
| 7 | Xe tải 2 trục 4 bánh dưới 2 tấn | Xe tải 2 trục | 2,0 | 2,5 |
| 8 | Xe tải 2 trục 4 bánh từ 2 đến dưới 4 tấn | Xe tải 2 trục | 2,0 | 2,5 |
| 9 | Xe tải 2 trục 6 bánh từ 2 đến dưới 4 tấn | Xe tải 2 trục | 2,0 | 2,5 |
| 10 | Xe tải 2 trục 6 bánh từ 4 đến dưới 10 tấn | Xe tải 2 trục | 2,0 | 2,5 |
| 11 | Xe tải 2 trục 6 bánh từ 10 tấn trở lên | Xe tải 2 trục | 2,0 | 2,5 |
| 12 | Xe tải 3 trục từ 4 đến dưới 10 tấn | Xe tải từ 3 trục trở lên | 2,5 | 3,0 |
| 13 | Xe tải 3 trục từ 10 đến dưới 18 tấn | Xe tải từ 3 trục trở lên | 2,5 | 3,0 |
| 14 | Xe tải từ 3 trục trở lên từ 18 tấn | Xe tải từ 3 trục trở lên | 2,5 | 3,0 |
| 15 | Xe đầu kéo + sơ mi rơ moóc (container 20 feet) | Xe kéo moóc | 4,0 | 5,0 |
| 16 | Xe đầu kéo + sơ mi rơ moóc (container 40 feet) | Xe kéo moóc | 4,0 | 5,0 |
| 17 | Máy kéo, xe chuyên dùng | Xe kéo moóc (để quy đổi lưu lượng) | 4,0 | 5,0 |
| 18 | Xe mô tô, xe máy | Xe máy | 0,3 | 0,3 |
| 19 | Xe đạp, xe đạp điện, xe thô sơ | Xe đạp | 0,2 | 0,2 |

Hệ số lấy theo Bảng 2 của TCVN 4054:2005. Hệ số 0,2 của xe đạp có điều kiện làn riêng nêu ở trên.

Kết quả bước này gồm hai lớp, cùng kỳ và cùng trạm: sản lượng theo 19 loại, và tổng xe con quy đổi. Lớp này phục vụ đánh giá năng lực khai thác và khảo sát thiết kế. Lớp số gốc 9 loại phục vụ đối soát camera.

## 6. Báo cáo thời gian thực cho tuần đường, tuần kiểm và bảo dưỡng thường xuyên

Hệ thống cho phép xem dữ liệu báo cáo đếm xe theo thời gian thực. Người dùng lọc theo tuyến, trạm đếm và khoảng thời gian, thấy lưu lượng đang tăng trong ca, không chờ khóa sổ cuối ngày.

| Công tác | Số liệu đếm hỗ trợ |
|----------|-------------------|
| Tuần đường | Lưu lượng theo đoạn và theo giờ trên đúng lý trình đang tuần. Ca trực thấy đoạn đông xe để bố trí người, chọn thời điểm tuần và đối chiếu với hiện trường |
| Tuần kiểm | Lưu lượng cùng vị trí kiểm tra mặt đường, công trình và an toàn giao thông. Đoạn lưu lượng cao được ưu tiên khi lập lịch kiểm tra |
| Bảo dưỡng thường xuyên | Chuỗi đếm 24/7 theo TCVN 14182:2024, thay cho cửa sổ đếm vài ngày trong tháng. Khi cần xe con quy đổi, dùng bước tính riêng để phục vụ đánh giá đoạn và lập kế hoạch bảo dưỡng |

Báo cáo đọc cùng mã tuyến và lý trình với nhật ký tuần đường, biên bản tuần kiểm và kế hoạch bảo dưỡng. Xuất bảng tính theo kỳ: sản lượng 9 loại, và khi đã chạy bước quy đổi thì thêm 19 loại cùng xe con quy đổi.

## 7. Camera tham chiếu

iDS-TCM403-BI, biến thể iDS-TCM403-BI(G)/G. Bản có LTE và định vị vệ tinh, phù hợp trạm không kéo cáp quang. Chi tiết ngắn: [camera.md](camera.md).

| Hạng mục | Thông số |
|----------|----------|
| Công dụng | Nhận biển số và đếm xe tại trạm |
| Độ phân giải | 4 MP (2688 × 1520), cảm biến 1/1.8 inch |
| Chống ngược sáng | 140 dB |
| Đèn hồng ngoại | 850 nm, tới 50 m |
| Nhận diện được xe | Trên 99% |
| Đọc biển số | Trên 98% |
| Nhận hướng | Trên 98,5% |
| Nhận diện nhầm | Dưới 2% |
| Số làn | Tối đa 3 làn |
| Tốc độ xe khi nhận diện | 5–120 km/h |
| Loại xe | 9 loại nêu tại mục 4 |
| Biển số | Ô tô, xe máy, xe không biển |
| Màu xe | Ban ngày |
| Thẻ nhớ tại trạm | Tới 512 GB |
| Nguồn | 12–24 V hoặc PoE+, tối đa 15 W |
| Kích thước, khối lượng | 428,5 × 120 × 132,8 mm; khoảng 2,98 kg |
| Vỏ, môi trường | IP67, IK10; −30 °C đến 70 °C; độ ẩm đến 95% |

Trang hãng: https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/

## 8. Máy chủ dự kiến cho 58 trạm

Tách máy hình và máy số liệu. Luồng hình không được làm chậm ghi lượt đếm.

**Máy phần mềm RMMS và cơ sở dữ liệu đếm:** 8 nhân, 32 GB RAM, SSD 2 TB. Nhận lượt đếm qua HTTPS. Không phát video.

**Máy cổng hình:** 16 nhân, 32 GB RAM, SSD 500 GB, card mạng 1 Gb/giây. Phát HLS. Trạm 4G/5G đẩy hình vào cổng TCP riêng. Card 1 Gb/giây đủ cho 58 luồng phụ (khoảng 120–230 Mb/giây) và khoảng 20 người xem tường hình. Nhiều người xem cùng lúc gần hết 58 camera thì dùng card 10 Gb/giây.

Chỉ nhận lượt đếm của 58 trạm: dưới 5 Mb/giây. Xem lại video nhiều ngày để ở thẻ nhớ camera hoặc đầu ghi tại trạm. Phần mềm trung tâm xem hình trực tiếp.

## 9. Kiểm tra khi nghiệm thu

- Hệ thống đếm 24/7. Mỗi xe vào vạch có một lượt. Có sóng trở lại thì lượt đã lưu tại trạm được gửi bù.
- Số gốc đúng 9 loại camera. Bước 19 loại và xe con quy đổi chỉ chạy khi có cơ cấu số liệu Cục Đường bộ, và không sửa số gốc.
- Không nhân đôi cùng một xe. Người đi bộ và xe thô sơ không vào tổng ô tô.
- Trong ca trực, báo cáo và bản đồ thấy lượt mới trong chu kỳ làm mới. Camera Live vẫn xem được trong lúc đang nhận lượt đếm.
- Báo cáo lọc được theo tuyến, trạm, lý trình và thời gian, dùng cùng mã với tuần đường, tuần kiểm và bảo dưỡng thường xuyên.
