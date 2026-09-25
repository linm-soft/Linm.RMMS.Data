# Giải pháp phần mềm — Hệ thống đếm xe tự động trên Quốc lộ 1

**Phạm vi:** Hà Nội – Cà Mau  
**Kính gửi:** Khu Quản lý đường bộ I  
**Căn cứ:** Mục 9 tờ trình khảo sát (giải pháp phần mềm và kiến trúc dữ liệu); công tác đếm xe theo TCVN 14182:2024 và quy đổi xe con theo TCVN 4054:2005.  
**Phần mềm:** Hệ thống quản lý kết cấu hạ tầng đường bộ RMMS.  
**File Word gửi kèm:** [Giai-phap-phan-mem-dem-xe-tu-dong-QL1.docx](Giai-phap-phan-mem-dem-xe-tu-dong-QL1.docx)

## 1. Mục đích

Thu thập, lưu trữ và khai thác số liệu đếm xe tự động trên các trạm Quốc lộ 1, nối với cơ sở dữ liệu kết cấu hạ tầng đường bộ đang vận hành. Không dựng một hệ thống đếm xe riêng, khép kín.

Trực ban tại trung tâm vừa xem hình camera liên tục, vừa thấy số xe tăng khi xe vào vạch đếm.

## 2. Kiến trúc dữ liệu

Trạm đếm xe → thiết bị tại trạm → phần mềm RMMS → cơ sở dữ liệu đếm xe → giao diện kết nối → cơ sở dữ liệu kết cấu hạ tầng đường bộ.

Mỗi trạm một mã. Camera, làn, tuyến, lý trình và tọa độ gắn với mã đó.

| Đối tượng | Thông tin quản lý |
|-----------|-------------------|
| Trạm đếm | Mã trạm, tuyến, lý trình, tọa độ, khu quản lý |
| Camera | Mã thiết bị, model, làn, trạng thái |
| Lượt xe | Thời điểm, làn, loại xe, biển số, hướng |
| Hình trực tiếp | Cùng mã camera, không tính là một lượt đếm |
| Báo cáo kỳ | Tổng theo trạm, tuyến, khoảng thời gian |

## 3. Hai kênh kết nối

| Kênh | Khi nào chạy | Trung tâm nhận |
|------|----------------|----------------|
| Camera Live | Luôn kết nối (HLS). Không chờ có xe | Tường hình và bản đồ |
| Đếm xe | Chỉ khi xe vào vạch đếm | Một bản ghi: loại xe, biển số, hướng, thời điểm |

Xem hình nhiều trạm cần cáp quang hoặc đường truyền riêng, khoảng 2–4 Mb/giây mỗi camera. Đường 4G/5G đủ gửi lượt đếm, không đủ xem hình hàng loạt.

## 4. Các bước người dùng thấy

1. Camera Live luôn kết nối (HLS).
2. Xe đi vào làn. Chưa có lượt đếm.
3. Xe vào vạch đếm. Camera nhận loại xe và biển số.
4. Camera gửi một lần về phần mềm trung tâm.
5. Số đếm tăng theo đúng loại xe.
6. Camera Live luôn giữ kết nối realtime.

## 5. Phân loại xe

Tiêu chuẩn bảo dưỡng TCVN 14182:2024 có 19 loại. Quy đổi xe con theo TCVN 4054:2005 có 6 nhóm. Trạm thu phí dùng 5 nhóm.

Camera nhận 9 loại theo hình dáng: xe con, van, xe khách, xe tải, xe tải nhẹ, SUV/MPV, bán tải, xe máy, xe ba bánh. Camera không đọc số trục, tải trọng, số chỗ hay loại container.

Số liệu tự động lưu theo 9 loại này. Không gán thẳng sang 19 loại và không sửa sổ đếm đang nhập tay. Xe con quy đổi, nếu cần, là bước tính riêng.

## 6. Camera tham chiếu

iDS-TCM403-BI, biến thể iDS-TCM403-BI(G)/G, hoặc thiết bị tương đương cùng tính năng. Chi tiết: [camera.md](camera.md).

Trang hãng: https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-bi/

## 7. Phần mềm đã đáp ứng

- Danh sách camera theo tuyến, lý trình, tọa độ.
- Nhận lượt xe khi vào vạch: thời điểm, loại xe, biển số, hướng.
- Đếm theo 9 loại trên màn hình và bản đồ.
- Camera Live luôn kết nối (HLS).
- Khóa nhận tin riêng cho camera.
- Chống ghi trùng cùng một lượt xe.

## 8. Đề xuất bổ sung khi thiết kế chi tiết

1. Ghi làn trên camera và trên từng lượt đếm.
2. Gắn camera với mã trạm. Một trạm có thể nhiều camera.
3. Tổng hợp theo giờ và theo ngày.
4. Báo cáo kỳ và xuất bảng tính theo 9 loại.
5. Xe con quy đổi tính riêng, không sửa số liệu gốc.
6. Mất truyền thì lưu tại trạm và gửi bù, có nhật ký kiểm tra.
7. Khu I xem điểm của Khu II, III, IV trên cùng bộ mã.
8. Xem lại video đã ghi: máy ghi tại trạm hoặc trung tâm. Phần mềm hiện xem hình trực tiếp.

## 9. Kiểm tra khi nghiệm thu

- Mỗi xe vào vạch có một lượt. Có sóng trở lại thì lượt không mất.
- Đúng 9 loại camera, không tự điền 19 loại tiêu chuẩn bảo dưỡng.
- Không nhân đôi cùng một xe.
- Xem lại được theo trạm, làn và ngày.
- Camera Live vẫn xem được trong lúc đang nhận lượt đếm.
