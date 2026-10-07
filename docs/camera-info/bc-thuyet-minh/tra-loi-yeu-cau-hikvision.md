# QL.5 — trả lời yêu cầu làm rõ, theo model Hikvision

> Ngày: 2026-10-07  
> Hồ sơ: `Thuyet minh BCKTKT - A4 - 18.9.docx`  
> Góp ý: thư mục `yeu-cau/`  
> SSOT model: `[../../context/camera-model.md](../../context/camera-model.md)` · map loại xe `[../../context/features/camera-vehicle-type.md](../../context/features/camera-vehicle-type.md)` · kết nối `[../../context/features/camera-connect.md](../../context/features/camera-connect.md)`

Phần mềm trung tâm là RMMS (lập trình và đặt máy chủ tại Việt Nam). Camera là hàng ITS Hikvision, xử lý tại biên, gửi sự kiện về RMMS. Máy tính nhúng trong tủ chỉ lưu video biên và đẩy luồng khi trung tâm yêu cầu xem — không chạy thêm một model AI hư hỏng hay lấn chiếm.

## Model áp cho thuyết minh

Thông số mục **2) Camera 4 MP** trong thuyết minh (1/1.8" CMOS, 2688×1520, WDR 140 dB, đèn kép IR 850 nm tới 50 m, bắt biển ≥ 99%, đọc biển ≥ 98%, tối đa 2–3 làn, IP67 / IK10, PoE+) khớp họ **iDS-TCM403**. Mục này không ghi radar 77 GHz.


| Vai trò                            | Model                | Radar                      | RMMS                                                           |
| ---------------------------------- | -------------------- | -------------------------- | -------------------------------------------------------------- |
| Trích thuyết minh QL.5 và trạm đếm | `iDS-TCM403-BI(G)/G` | Không                      | Catalog kết nối, SDK-first, cổng SDK 8000 / HTTP 80 / RTSP 554 |
| Lab ingest đang chạy               | `iDS-TCM403-GIR`     | 77 GHz, tham chiếu ±2 km/h | Cùng 9 loại xe, cùng sự kiện ANPR                              |


Số hãng được trích khi lắp và chiếu sáng đúng khuyến nghị, biển vùng Asia-Pacific (Việt Nam thuộc vùng này): bắt xe **> 99%**, đọc biển **> 98%**, bắt nhầm **< 2%**, dải bắt **5–120 km/h**, phủ tối đa **3 làn**.

Mục **Event** trên trang SKU chỉ có Basic Event: HDD Error, Network Disconnected, IP Address Conflicted, Vehicle Detector Exception, Traffic Light Detector Exception. Event xe gửi về RMMS là **ANPR**. Không có event hướng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp, ùn, dừng.

Hãng **không** công bố % phân loại loại xe. Không dùng các số trong mục phần mềm thuyết minh: phân loại 98%, sai số đếm ±2%, sai số tốc độ trung bình ±5%, phát hiện sự cố cao tốc 90%.

## 1. Năm mục cho từng vị trí lối mở

14 nút trong thuyết minh (Km16+350 … Km91+850) cùng một kiểu: lối mở dải phân cách, xe quay đầu / sang đường, không phải camera rải dọc làn cao tốc.


| #                  | Nội dung ghi vào thuyết minh                                                                                                                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| (i) Nhu cầu        | Xe ô tô, xe máy, xe thô sơ quay đầu hoặc sang đường tại lối mở đã có biển cấm một phần; giờ cao điểm dễ xung đột và ùn cục bộ. Ví dụ đã nêu: Km17+700, Km32+800, Km75+350, Km78+900.                               |
| (ii) Yêu cầu xử lý | Ghi nhận và cảnh báo trên phần mềm trung tâm. Ca trực xem ảnh, xem live khi cần, điều phối tuần đường. Camera không ra hiện trường, không lập biên bản, không điều đèn.                                            |
| (iii) Dữ liệu      | Mỗi lần bắt xe (event ANPR): thời điểm, loại xe (9 loại), biển (kể cả không biển), màu ban ngày, ảnh toàn cảnh JPEG, ảnh cắt biển. Không có event hướng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp, ùn, dừng. |
| (iv) Giải pháp     | Camera TCM403 tại biên + đèn trợ sáng liên tục 16–25 m + tủ 4G. Sự kiện ISAPI về `POST /api/v1/camera-events/ingest`. Video lưu ổ 4 TB tại tủ; trung tâm xem HLS khi bật.                                          |
| (v) Đầu ra         | Danh sách sự kiện, đếm theo loại xe và theo chiều, điểm camera trên bản đồ (lý trình, tọa độ). Phục vụ theo dõi lưu lượng lối mở và bằng chứng xe vào vùng quay đầu.                                               |


## 2. Việc AI làm và việc người làm


| Việc                                                                                  | AI trên `iDS-TCM403-BI(G)/G`                                                                                                                                                                                                 | Người vận hành                                                                                          |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Đọc biển ô tô / xe máy, xe không biển                                                 | Có                                                                                                                                                                                                                           | Trực ban đối chiếu biển trên ảnh sự kiện khi biển mờ, bẩn, che                                          |
| Đếm xe trong vùng làn camera (tối đa 3 làn)                                           | Có, theo từng lần bắt                                                                                                                                                                                                        | Trực ban đối chiếu lưu lượng khi xe dính đuôi, mưa, ngược sáng                                          |
| Phân loại 9 loại: xe con, van, khách, tải, tải nhẹ, SUV/MPV, bán tải, xe máy, ba bánh | Có danh mục, không có % hãng                                                                                                                                                                                                 | Số gốc giữ 9 loại camera. Quy đổi 19 hạng TCVN 14182 thuộc bảo dưỡng thường xuyên                       |
| Hướng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp, ùn, dừng                          | Không có event trên model này                                                                                                                                                                                                | Trực ban xem hình live hoặc ảnh sự kiện, điều phối tuần đường                                           |
| Màu xe, hãng xe (khoảng 212 hãng)                                                     | Màu ban ngày; hãng có trên trang SKU                                                                                                                                                                                         | Trực ban xem màu xe trên ảnh sự kiện ban ngày khi đối soát phương tiện                                  |
| Mũ bảo hiểm                                                                           | Không có event. Trang HK của SKU ghi Smart Function «Helmet Detection, Manned Non-Motor»: mũ trên xe thô sơ có người, không thuộc 9 loại đếm, không có %. Mã `iDS-TCM403-BI-UHK` mới ghi «Without Helmet Detection Supported» — không phải `BI(G)/G` | Tuần đường, tuần kiểm xem ảnh sự kiện và kiểm tra an toàn giao thông tại hiện trường                    |
| Hư hỏng mặt đường, kết cấu, biển báo, lề                                              | Không có trên model này                                                                                                                                                                                                      | Tuần đường, tuần kiểm lập sự cố mặt đường, kết cấu, biển báo, lề                                        |
| Lấn chiếm, sử dụng trái phép đất, hành lang ATGT                                      | Không có trên model này                                                                                                                                                                                                      | Tuần kiểm hành lang an toàn đường bộ, kiểm tra hiện trường                                              |
| Vật rơi, dừng đỗ sai quy định dạng lớp nhận diện riêng                                | Không có trên model này                                                                                                                                                                                                      | Trực ban xem hình, điều phối tuần đường xử lý vật rơi và dừng đỗ                                        |
| Xử phạt nguội                                                                         | Không                                                                                                                                                                                                                        | Cán bộ quản lý đường bộ xem hình, xác định kèm hình ảnh để xử phạt                                      |


## 3. Xe quay đầu

Họ TCM403 không có lớp tên «xe quay đầu», và `iDS-TCM403-BI(G)/G` không có event hướng, đổi làn hay ngược chiều. Dòng checkpoint (TCV…-HI / HER) có sự kiện U-Turn nhưng chỉ ở chế độ E-Police, và chưa chốt cho lối mở QL.5 — hồ sơ `[camera-quay-dau-hikvision.md](camera-quay-dau-hikvision.md)`. Camera lối mở trên model này chỉ gửi event ANPR (biển, loại xe, ảnh).


|                     |                                                                                                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hệ thống làm        | Ghi sự kiện + ảnh, hiện trên danh sách và trên điểm bản đồ, để ca trực mở live                                                                                                                                 |
| Hệ thống không làm  | Tự xử lý ùn, tự cấm quay đầu, tự gọi lực lượng                                                                                                                                                                 |
| Khi quay đầu gây ùn | Model không gửi event ùn. Ca trực xem ảnh ANPR hoặc live rồi điều phối tuần đường. Kịch bản xử lý hiện trường nằm ở quy trình vận hành VIDIFI, không nằm trong firmware |


Đếm xe quay đầu = số sự kiện của **camera lối mở** (C2, C4). Đếm này tách khỏi đếm mặt cắt làn chính (C1, C3).

## 4. Phát hiện hư hỏng

Model TCM403 không nhận ổ gà, nứt, hằn lún, biển đổ, hư hộ lan. Không có khoảng cách phát hiện, bộ huấn luyện, hay % chính xác cho hạng mục này trên datasheet.

Thuyết minh giữ mục tiêu «phát hiện kịp thời hư hỏng» ở **quy trình người**: ca trực và tuần đường dùng hình camera (ảnh sự kiện hoặc live) làm ngữ cảnh hiện trường. Phiếu hư hỏng vẫn là nghiệp vụ tuần kiểm RMMS, không phải sự kiện ISAPI.

## 5. Xâm phạm, lấn chiếm, hành lang an toàn đường bộ

Model không nhận xe ben đổ đất, lều quán, vật liệu lấn mặt đường, công trình trong hành lang. Không mô tả các hành vi này là AI tự động.

Sau khi đưa vào sử dụng, VIDIFI nhận được: ảnh và sự kiện giao thông tại lối mở, vị trí lý trình trên bản đồ, thời điểm. Kiểm tra lấn chiếm vẫn do người xem hình hoặc ra hiện trường.

## 6. Đo đếm — đối tượng, độ chính xác, phạm vi

Đếm là **mọi phương tiện đi qua vùng làn của từng camera**, tối đa 3 làn, không phải chỉ xe quay đầu.


| Nhóm                                          | Trong đếm camera                                                    | Ngoài đếm camera                                         |
| --------------------------------------------- | ------------------------------------------------------------------- | -------------------------------------------------------- |
| 9 loại TCM403                                 | Xe con, van, khách, tải, tải nhẹ, SUV/MPV, bán tải, xe máy, ba bánh | —                                                        |
| Thêm trên ảnh / AID                           | Người đi bộ, xe thô sơ khi firmware gửi                             | Không cộng vào «tổng ô tô»                               |
| TCVN 14182:2024 (19 hạng trục, tải, chỗ ngồi) | Không suy ra từ camera                                              | Đếm bảo dưỡng thường xuyên và trạm thu phí là nguồn khác |
| Thu phí                                       | Không thay số liệu trạm                                             | Giữ số trạm khi cần đối soát                             |


Độ tin cậy được phép ghi cho event ANPR: bắt xe > 99%, bắt nhầm < 2%, đọc biển > 98%, trong điều kiện lắp đặt hãng (ban ngày, đủ sáng, không mưa, không sương, biển không bẩn mờ cong che). Phân loại loại xe: có danh mục, không có % để ghi thành chỉ tiêu nghiệm thu. Không ghi chỉ tiêu cho hướng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp, ùn, dừng.

Số liệu camera phục vụ theo dõi lưu lượng lối mở và bằng chứng quay đầu. Số liệu này không thay hệ đếm trục theo TCVN 14182 và không thay sản lượng trạm thu phí.

## 7. Bốn camera mỗi nút

Mục cột 6,2 m (vươn 6 m / 7 m / 8 m) ghi trên **mỗi tay vươn**: 01 camera biển số và phương tiện, 01 camera biển số và quay đầu, 02 đèn trợ sáng. Đèn không phải camera.

Khi nút có **hai tay vươn** (hai chiều), đủ **04 camera**:


| Mã  | Nhìn                | Chức năng trên model                              |
| --- | ------------------- | ------------------------------------------------- |
| C1  | Chiều đi, làn chính | Đếm lưu lượng mặt cắt chiều đi, biển, loại xe |
| C2  | Chiều đi, lối mở    | Ảnh ANPR xe trong vùng lối mở. Không có event quay đầu |
| C3  | Chiều về, làn chính | Như C1                                            |
| C4  | Chiều về, lối mở    | Như C2                                            |


Bản vẽ thi công cần khóa số cột mỗi nút. Nút một cột thì còn 02 camera; câu «04 camera» chỉ đúng khi có hai chiều.

## 8. Truyền theo sự kiện — sự kiện nào

Đường 4G mang các gói sau, không mang video liên tục:


| Sự kiện                                               | Nội dung gói                                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| ANPR                                                  | Một xe qua vạch: loại, biển, màu, thời điểm, JPEG toàn cảnh và cắt biển |
| Xem live                                              | Chỉ khi ca trực bật. Tủ không IP tĩnh: máy nhúng đẩy RTSP, trung tâm phát HLS  |


Không có gói AI «hư hỏng mặt đường» hay «lấn chiếm hành lang».

## 9. Lưu trữ, máy chủ, UPS, máy chủ thu phí

Hồ sơ đang ghi ổ **4 TB tại tủ** (một chỗ ghi 8 TB). Chưa có bài tính ngày lưu, bitrate, số camera, cấu hình máy chủ trung tâm, bộ lưu điện, và chưa mô tả máy chủ thu phí hiện có. Các hạng này sửa trong thuyết minh thiết kế khi có bản vẽ khối lượng. RMMS không bịa thông số tủ rack từ đoạn góp ý.

Cách tính khi đủ đầu vào: số camera × bitrate × giờ ghi × số ngày, tách ổ tủ (video biên) và máy chủ trung tâm (sự kiện + ảnh JPEG + live theo yêu cầu). Ảnh sự kiện nhỏ hơn nhiều so với ghi hình liên tục.

## 10. Xuất xứ, hãng, Carboncor, xử phạt, kiểm định, an toàn thông tin


| Ý góp ý                                       | Cách xử lý                                                                                                                                                                                                                                                        |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Có cần ghi xuất xứ, hãng trong hồ sơ thiết kế | Hồ sơ chào thầu ghi thông số yêu cầu (mục 2 camera 4 MP). RMMS triển khai theo model `iDS-TCM403-BI(G)/G` vì ISAPI/SDK và 9 loại xe đã có trong phần mềm. Tương đương chỉ được chấp nhận khi cùng các mục ở bảng mục 2 của file này.                              |
| Bỏ Carboncor                                  | Hạng mục hoàn trả mặt đường, ngoài phần mềm camera. Bỏ khỏi thuyết minh khi chủ đầu tư chốt vật liệu hoàn trả.                                                                                                                                                    |
| Rà xử phạt                                    | Bỏ mọi câu xử phạt, phạt nguội, tích hợp xử phạt. Đầu ra là cảnh báo và bằng chứng cho vận hành.                                                                                                                                                                  |
| Mô tả phần mềm điều khiển trung tâm           | Xem mục 11. Phần đèn tín hiệu Anco là hệ khác, không gộp vào camera.                                                                                                                                                                                              |
| Kiểm định camera                              | Camera ITS không tự thành thiết bị đo tốc độ pháp lý khi bản đã chọn không có radar. Không ghi kiểm định tốc độ cho `BI(G)/G`.                                                                                                                                    |
| An toàn thông tin                             | Máy chủ và phần mềm tại Việt Nam. Camera không ra Internet công cộng: LAN tủ → máy nhúng → 4G. Sự kiện vào RMMS bằng API key + IP/DDNS, mật khẩu camera mã hóa tại server. Chi tiết `[../../context/28-CAMERA-SECURITY.md](../../context/28-CAMERA-SECURITY.md)`. |


## 11. Phần mềm trung tâm RMMS đang có


| Thuyết minh mục camera                               | RMMS                                                   |
| ---------------------------------------------------- | ------------------------------------------------------ |
| Lưới nhiều camera, phóng to, bố cục                  | Trang giám sát / tường hình                            |
| Bản đồ điểm camera, lý trình, đếm, sự kiện           | Trang bản đồ camera                                    |
| Đếm theo loại xe, biển                               | Sự kiện ANPR, thống kê theo 9 loại                     |
| Live khi cần                                         | HLS; ảnh JPEG khi không có luồng                       |
| Phân quyền theo đơn vị                               | Tài khoản RMMS                                         |
| Quản lý bằng chứng ảnh                               | Ảnh JPEG sự kiện (file ảnh đầy đủ còn hạn chế lưu trữ) |
| Đèn tín hiệu, báo cáo ắc quy, nút đèn                | Hệ Anco, không nằm trong model camera                  |


## Việc sửa trong thuyết minh

1. Mục AI và mục phần mềm: thay bảng mục 2 của file này cho các câu «phát hiện hư hỏng / lấn chiếm / vật rơi / phân loại 98% / sự cố 90%».
2. Ghi rõ đếm mặt cắt và đếm lối mở là hai camera khác nhau.
3. Sự kiện truyền 4G của model này là ANPR từng xe. Không ghi event hướng, đổi làn, ngược chiều, vượt tốc, tốc độ thấp, ùn, dừng.
4. Khóa 02 hay 04 camera theo số tay vươn trên bản vẽ.
5. Bỏ Carboncor và mọi câu xử phạt khi chủ đầu tư xác nhận.

