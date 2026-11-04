# Gap — yêu cầu tài liệu khách ↔ RMMS đang có

> Ngày: 2026-11-01  
> Nguồn đọc: `docs/**/*.{doc,docx,pdf}` (59 file). Bản trùng (cùng kích thước) đọc một lần. Bản trích: `local-script/scan-20261101/`. Cache sẵn: thuyết minh BCKTKT 27-10, báo cáo tuần kiểm, nhật ký tuần đường PDF, TCVN 14182 §4.1, Anco, KCHT giải ngân.  
> Hệ thống đối chiếu: `docs/context/features/README.md` · `FEATURE-TRACKING.md` · `csdl-cuc-2026.md` · plan `web-rmms-mobile`.

## Phạm vi đã đọc

| Nhóm | File | Cách dùng |
|------|------|-----------|
| Sản phẩm | Giải pháp 18 phân hệ · HDSD (mục lục màn) · thuyết minh camera AI | Catalog tính năng |
| Tuần đường / tuần kiểm | Đề cương Web-App · TT 41 · TT 72 · báo cáo Khu I · cao tốc · tuần kiểm | Việc hiện trường |
| Sổ sách | Phiếu trình · mẫu sổ 8 · báo cáo P.BT · PDF Khu I–IV | Mẫu ghi chép 2026 |
| Đếm xe / camera | Tờ trình QL1 · giải pháp phần mềm đếm xe · Hikvision · yêu cầu 58 tủ · BCKTKT QL.5 | Trạm + trung tâm |
| Bản đồ | Đề nghị tọa độ và hình thiết kế đoạn tuyến (11–12/10/2026) | Dữ liệu tim tuyến |
| Ngoài phần mềm | ĐKKD · datasheet PTZ · dự toán NAS/SAN · công văn xin ảnh train | Không đưa vào gap tính năng |

`.doc` cũ `Cung cấp thông tin phần mềm.doc` giữ theo extract đã có (`kcht-cong-trinh`). TCVN 72 MB không đọc lại toàn văn.

## 1. App hiện trường (HDSD + đề cương Web-App + 3 vai)

HDSD mô tả điện thoại: Check-in (kể cả mất sóng), Lưu trữ, Giám sát, Vấn đề, Tài sản, Công việc, Góp ý, hồ sơ. Website: giám sát hoạt động / tài sản / sự cố, sự cố, tài sản KCHT (tuyến, đoạn, lý trình, địa bàn, loại), công việc, người dùng, báo cáo tài sản / sự cố / check-in.

RMMS đã có slug tương ứng: `patrol`, `attendance`, `incident`, `asset`, `maintenance`, `feedback`, `users`, `reports`, và cụm `web-rmms-*` trên `Linm.Web.RMMS.Mobile`.

| ID | Yêu cầu tài liệu | Đang có | Loại |
|----|------------------|---------|------|
| GAP-APP-01 | Đề cương: nhật ký tuần đường đủ cột Phụ lục VIII (thời tiết, lý trình, diễn biến, xử lý tại chỗ, người nhận, ký), xuất Word/PDF/Excel đúng mẫu | `csdl-so-02` + CR nhật ký PDF. Ca tuần vẫn một form `PatrolType`. Xuất mẫu nằm ở `csdl-export-print` (Draft) | Align |
| GAP-APP-02 | Workspace riêng cho cán bộ tuần kiểm: đối chiếu nhật ký với hiện trường, duyệt ca, kiến nghị | `tuan-kiem-context` đang implement. `quan-ly-context` gộp nghiệm thu + giao việc vào vai Quản lý. Plan 30/09 vẫn tách vai Nghiệm thu | Align — chốt một bản vai |
| GAP-APP-03 | Cao tốc: ùn tắc, xe dừng, ngược chiều, xe hỏng, cháy, chướng ngại, thời tiết, bàn giao ca, báo Trung tâm | `incident` một loại sự cố. GAP-TD đã ghi thiếu loại việc cao tốc | Align loại sự cố, hoặc cụm màn mới |
| GAP-APP-04 | Tần suất theo cấp đường / lưu lượng (TT 41, TCCS 16: 3–9 lượt/ngày) và cảnh báo bỏ sót tuyến, tốc độ tuần | `patrol` có ca + GPS. Chưa khóa tần suất và KPI bỏ sót | Align `patrol` |
| GAP-APP-05 | Web-App mất sóng: nhập tại chỗ, đồng bộ sau, tìm lại ca trong vài phút khi sự cố máy chủ | `web-rmms-offline` có hàng đợi check-in. Chưa phủ cả dòng nhật ký nhiều mục | Align offline |

## 2. Sổ và CSDL (mẫu 2026)

Mẫu sổ tháng 7/2026 có 8 sổ. RMMS đang có 10 sổ (`csdl-so-01`…`10`).

| Mẫu 2026 | RMMS | Nhận xét |
|----------|------|----------|
| 1 Nhật ký tuần đường | `csdl-so-02` (live #1) | Có form. Cột và file in còn gap xuất mẫu |
| 2 Sổ trực BĐGT, bão lũ, hotline | `csdl-so-03` gộp trực + chốt + sự cố | Tài liệu tách sổ 2 và sổ 3 |
| 3 Sổ trực chốt | cùng `csdl-so-03` | Cùng dòng trên |
| 4 Tổng hợp đếm xe (Phụ lục C TCVN 14182, 19 loại) | `csdl-so-04` `traffic-counts` + báo cáo `rpt-dem-xe` | Sổ thủ công có. Đếm tự động là việc khác (mục 3) |
| 5 Quản lý cầu, hầm, phòng hộ | `csdl-so-06` phiếu kiểm tra cầu | Lý lịch hầm nằm ở biểu, chưa phải sổ riêng |
| 6 Hành lang an toàn đường bộ | `csdl-so-07` HL + giấy phép thi công + dự án | Tài liệu là một sổ HL |
| 7 Kết quả BDTX | `csdl-so-08` | Có |
| 8 Nhật ký tuần kiểm | `csdl-so-01` (live #8) | Có. Chuỗi phiếu / ký cuối tuần nằm ở `tuan-kiem-context` |
| Không có trong 8 mẫu | `csdl-so-05` TNGT · `csdl-so-09` ITS/ETC · `csdl-so-10` bình đồ | TT 41 vẫn yêu cầu bình đồ, lý lịch cầu/hầm, số liệu đếm xe. Ba sổ này là phần RMMS rộng hơn mẫu 8 |

Khu I báo cáo 28 mẫu, Khu II 51, Khu IV 17. P.BT kiến nghị chuẩn hóa về bộ Điều 16 TT 41. Gap chính là **khớp cột và tách/gộp sổ**, không phải thiếu cả phân hệ sổ.

| ID | Việc | Loại |
|----|------|------|
| GAP-SO-01 | Tách sổ trực BĐGT và sổ trực chốt, hoặc giữ gộp `csdl-so-03` và chỉ chỉnh cột | Cần chốt |
| GAP-SO-02 | In/xuất đúng mẫu 8 sổ 2026 | Align `csdl-export-print` |
| GAP-SO-03 | 16 biểu CSDL (mặt đường, cầu, cống, ATGT…) | Đã có `csdl-bieu-01`…`16`. Biểu 06 còn `pending`. Việc còn là dữ liệu và xuất mẫu |

## 3. Đếm xe và camera

Tờ trình QL1 (Hà Nội–Cà Mau) và giải pháp phần mềm: không làm kho đếm xe riêng. Trạm → thiết bị → RMMS → API → CSDL KCHT. Camera xử lý tại trạm. Trung tâm lưu sự kiện và phát HLS. Lưu **9 loại** camera. Quy đổi **19 loại** TCVN 14182 → 6 nhóm TCVN 4054 là bước tính riêng, không sửa số gốc.

RMMS: `camera-connect` (HLS, nhận sự kiện, API key), `camera-vehicle-type` (9 loại, cấm map 1:1 sang 16 class sổ), `rpt-dem-xe` (báo cáo Kind E, chưa phải sổ trạm 24/7), `its-anpr-overload` (P2, xác nhận người), `its-anco-signal` (xem đèn + đếm, cấm phân luồng).

| ID | Yêu cầu | Đang có | Loại |
|----|---------|---------|------|
| GAP-DX-01 | Danh mục trạm: mã, tuyến, lý trình, tọa độ, khu, nhiều camera, làn | Camera gắn tuyến/lý trình. Chưa có thực thể trạm đếm | Mới hoặc align `camera-connect` |
| GAP-DX-02 | Mỗi lượt: thời điểm, làn, 9 loại, biển số, hướng. Chống trùng | Nhận sự kiện camera đã có hướng này | Align |
| GAP-DX-03 | Báo cáo giờ/ngày theo trạm và tuyến. Xuất 9 loại. Quy đổi 19 loại thành báo cáo riêng | `rpt-dem-xe` là báo cáo kỳ, chưa khóa 9 loại gốc và bảng quy đổi | Align báo cáo |
| GAP-DX-04 | Mất mạng: lưu tại trạm, gửi bù, nhật ký đủ/đúng/toàn vẹn | Chưa thấy hàng đợi thiết bị | Mới |
| GAP-DX-05 | Xem lại video theo thời gian | Live HLS có. Kho xem lại chưa có | Mới |
| GAP-DX-06 | Khu I xem trạm Khu II–IV trên cùng bộ mã | Phân quyền theo khu có `org-route-scope`. Chưa gắn mã trạm liên khu | Align quyền |
| GAP-DX-07 | QL.5: quay đầu, lấn chiếm hành lang, xe quay đầu, tường hình, nhận biển số | BCKTKT 14 nút + phòng điều hành. `camera-connect` có live và sự kiện. Chưa có sự kiện quay đầu / lấn chiếm thành sổ | Align sự kiện, hoặc tính năng mới |
| GAP-DX-08 | Đối chiếu đăng kiểm, người xác nhận rồi mới lập sự cố tốc độ / quá tải | `its-anpr-overload` đúng hướng này, phase P2 | Align, chưa làm sâu |
| GAP-DX-09 | Đèn Anco: phân luồng, điều khiển tín hiệu | `its-anco-signal` chỉ xem danh sách, camera, đếm. Phân luồng đang để sau | Cần chốt có làm điều khiển hay không |
| GAP-DX-10 | 58 tủ camera: phần cứng, NAS, SAN, máy chủ AI | Hồ sơ BCKTKT / BOM. RMMS là phần mềm nhận sự kiện, không phải hạng mục tủ | Ngoài gap phần mềm |

## 4. Bản đồ đoạn tuyến

Công văn 11–12/10/2026: bản đồ đã có tim tuyến và chọn một điểm. Thiếu thông số thiết kế đoạn (cấp, nền, làn, kết cấu, tốc độ, mốc lộ giới), dãy tọa độ WGS84 dọc tim (không chỉ hai đầu), hình mặt cắt và bình đồ/trắc dọc mở đúng lý trình.

| ID | Việc | Loại |
|----|------|------|
| GAP-GIS-01 | Gắn thông số + hình vào đoạn tuyến đang có (`road-route` / bản đồ tài sản) | Align, chờ Cục gửi bảng và file hình |
| GAP-GIS-02 | Tim tuyến chỉ hai điểm đầu-cuối thành đường thẳng | Align dữ liệu `road-route`, không phải màn mới |

## 5. Mười tám phân hệ trong giải pháp — so với app đang chạy

Giải pháp là tầm nhìn nền tảng. HDSD và sổ 2026 là việc đang phải làm. Các dòng dưới là phần giải pháp **chưa** có sản phẩm tương ứng trong RMMS đang vận hành (demo hoặc context mỏng không tính là đã có).

| Phân hệ giải pháp | RMMS | Loại |
|-------------------|------|------|
| 1 Tài sản, 2 GIS, 5 chấm công, 6 sự cố, 17 dashboard, 18 API | Có sản phẩm / context | Giữ |
| 3 AI mặt đường, 10 ước lượng, 8 dự báo, 16 copilot | Context + demo. P1 online, chưa phải vận hành Cục | Giữ phase, không mở rộng từ đợt này |
| 4 Tuần đường đủ KPI bỏ sót, ghi hình cả ca | Có ca, check-in, GPS. Thiếu KPI và camera hành trình | Align GAP-APP-04 |
| 7 Lệnh sửa chữa + nghiệm thu | `maintenance`, `nghiem-thu`, `platform-task` | Align, không phân hệ mới |
| 9 Chỉ đạo điều hành | `ops` | Align |
| 11 Hợp đồng, ngân sách, KPI nhà thầu | `contract` mỏng. `kcht-cong-trinh` là QLDA Khu IV, khác hợp đồng BDTX | Align khi có mẫu thanh toán |
| 12 Kho vật tư, xe, nhiên liệu | `inventory` demo P3 | Mới khi có yêu cầu kho |
| 13 Drone, LiDAR, point cloud | `drone` demo | Mới, chưa có hồ sơ thi công |
| 14 Trung tâm điều hành: ùn tắc, tai nạn, VMS, tốc độ động | Một phần camera. VMS và tốc độ động chưa có | Mới |
| 15 Cổng người dân | `citizen` demo. HDSD chỉ có Góp ý nội bộ | Giữ tách. Góp ý = `feedback` |

## Đã chốt (2026-11-01)

| ID | Quyết định |
|----|------------|
| GAP-SO-01 | **Tính năng mới.** Tách sổ trực BĐGT/bão lũ/hotline và sổ trực chốt. Không giữ gộp trong `csdl-so-03`. |
| GAP-APP-03 | **Align.** Thêm loại việc cao tốc (ùn tắc, xe hỏng, cháy, chướng ngại, thời tiết, bàn giao ca) vào sự cố và ca tuần đang có. |
| GAP-DX-01…06 | **Tính năng mới.** Trạm đếm xe riêng (mã trạm, làn, 9 loại gốc, quy đổi 19 loại, gửi bù, xem lại video). Không chỉ gắn thêm vào `camera-connect` và `rpt-dem-xe`. |
| GAP-DX-07 | **Nhóm tính năng mới** cho camera QL.5: quay đầu, lấn chiếm hành lang, tường hình, biển số. |
| GAP-DX-09 | **Tính năng mới.** Làm điều khiển phân luồng đèn Anco, ngoài mức xem danh sách và đếm. |

Bản đồ đoạn tuyến (GAP-GIS-01) chờ file tọa độ và hình từ Cục. Chưa chốt làm màn.
