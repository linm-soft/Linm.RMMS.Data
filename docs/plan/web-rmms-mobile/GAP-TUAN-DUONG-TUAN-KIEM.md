# Gap — Tuần đường và Tuần kiểm

> **Ngày:** 2026-09-24  
> **Nguồn:** `docs/tinh-nang/tuan-duong-tuan-kiem/`  
> **Đối chiếu:** `PatrolSession` · check-in · app Field · báo cáo `rpt-tuan-*` · [`SCREENS.md`](SCREENS.md)

## Nguồn đã đọc

| File | Nội dung dùng để đối chiếu |
|------|----------------------------|
| `Tuan duong - tuan -kiem 2024 Thông tư 41-BGTVT.pdf` | Điều 19 tuần đường · Điều 20 tuần kiểm · Phụ lục VIII nhật ký, tần suất, trang bị |
| `2025 Thông tư 72-BXD .pdf` | Điều 16 sửa điểm b khoản 1 Điều 19 · Điều 17 sửa khoản 2 Điều 20 · đổi cụm “điểm đen” |
| `Chuc_nang_nhiem_vu_tuan_duong_duong_cao_toc.docx` | Việc hiện trường cao tốc + quy trình khép kín + nhật ký tối thiểu |
| `Bao_cao_nhiem_vu_cong_tac_tuan_duong_Khu_QLDB_I.docx` | Nhật ký 12 mục · số hóa · gắn nghiệm thu BDTX · phân định tuần kiểm |
| `Bao_cao_chuc_nang_nhiem_vu_cong_tac_tuan_kiem.docx` | 4 chức năng · 9 nhiệm vụ · bộ hồ sơ · mã tồn tại · đối chiếu nhật ký với hiện trường |

Context `patrol.md` vẫn neo Thông tư 04/2019. Bộ tài liệu này là **41/2024 + 72/2025**.

## Hai việc khác nhau

| | Tuần đường | Tuần kiểm |
|--|------------|-----------|
| Ai | Nhà thầu / đơn vị BDTX | Người quản lý, sử dụng đường bộ (Khu, VP) |
| Việc | Phát hiện, cảnh báo, xử lý ban đầu, ghi nhật ký | Kiểm tra nhà thầu **và** việc tuần đường; yêu cầu khắc phục; biên bản theo thẩm quyền |
| Tần suất PL VIII | Cao tốc ≥ 1 lần/ngày/chiều · cấp I–III ≥ 1 lần/ngày · cấp IV–VI mùa mưa 1 lần/ngày, mùa khô 2 ngày/lần | ≥ 1 lần/tuần trên tuyến được giao · tăng khi hư hỏng, sạt, ngập, cầu yếu |
| Sổ | Nhật ký tuần đường: giờ, lý trình, thời tiết, diễn biến, đã xử lý tại chỗ, ý kiến người nhận, ký | Nhật ký tuần kiểm: từ km–đến km, vị trí, mô tả, khối lượng ước tính, yêu cầu + hạn, kết quả KL/CL/thời gian, ảnh sau xử lý, ký lãnh đạo cuối tuần |

TT 72 đổi tuần đường: không tự lập biên bản vi phạm; **đề nghị** người có thẩm quyền lập biên bản VPHC. Tuần kiểm vẫn lập biên bản theo thẩm quyền hoặc đề nghị người có thẩm quyền.

Nghiệm thu BDTX (`nghiem-thu`) là việc thứ ba: dùng nhật ký làm căn cứ, không thay tuần kiểm.

## Hệ thống đang có

| Đã có | Giới hạn so với tài liệu |
|-------|--------------------------|
| `rmms_patrol_sessions` · `PatrolType` = `Tuần đường` \| `Tuần kiểm` | Cùng một form ca. Không sổ hai mẫu Phụ lục VIII |
| Mở ca / kết ca `POST|PUT patrol/sessions` | Thiếu thời tiết, chiều đường, km đầu–cuối, lý do tạm dừng (Điều 19.6), bàn giao ca |
| `rmms_patrol_check_ins`: điểm, tuyến, lat/lng, accuracy, nội dung, ảnh | Một dòng GPS. Không cột trái/phải sổ: diễn biến theo loại, xử lý tại chỗ, người nhận, ký |
| Offline replay check-in | Đủ cho mất sóng. Không đủ dòng nhật ký nhiều mục |
| Sự cố `incident/incidents` + giao việc + tiến độ | Có vòng phát hiện → việc. Chưa gắn loại việc cao tốc (ùn tắc, xe hỏng, chướng ngại, cháy, thời tiết) và chưa khóa “kiểm tra lại” |
| Giám sát = list `attendance-logs` | Chấm công GPS, không phải sổ tuần kiểm |
| Báo cáo `rpt-tuan-duong` / `rpt-tuan-kiem` đọc session theo `PatrolType` | Read-model. Không phải nhật ký 2 trang, không ảnh sau khắc phục |
| Sổ 07 vi phạm CSDL | Tách khỏi ca tuần. Chưa nối “đề nghị lập biên bản” (TT 72) |
| App Field: hub, check-in, lịch sử, map, camera | Một luồng. Không màn tuần kiểm riêng |

## Gap cần làm

### 1. Tách hai luồng trên cùng Mobile.Bff

Không thêm host BFF. Thêm loại việc và mẫu ghi, vẫn `patrol/sessions` + bảng con.

| ID | Việc | Vì sao |
|----|------|--------|
| GAP-TD-01 | Hub Field có hai lối: **Tuần đường** và **Tuần kiểm**. `PatrolType` bắt buộc đúng lối, không để user gõ tự do | Điều 19 ≠ Điều 20 |
| GAP-TD-02 | Tuần kiểm không dùng sheet check-in của tuần đường | Sổ khác cột |

### 2. Dòng nhật ký tuần đường (thay cho chỉ check-in)

Bảng con của session (không nhét JSON vào `Note`).

| Cột | Nguồn |
|-----|--------|
| Giờ | PL VIII trang trái |
| Lý trình / vị trí / chiều | PL VIII + doc cao tốc |
| Thời tiết | PL VIII · GAP-TD-WEATHER-01 đang mở |
| Loại | KCHT · hành lang · TNGT · ùn tắc · xe hỏng · chướng ngại · cháy · thời tiết · ATGT |
| Diễn biến + ảnh | PL VIII |
| Đã xử lý tại chỗ + kết quả | PL VIII trang phải |
| Đã báo cáo ai / lúc nào | Doc cao tốc mục 10 |
| Ý kiến người nhận + ký | PL VIII · lãnh đạo BDTX cuối ngày |
| Trạng thái khép kín | phát hiện → xử lý/kiến nghị → theo dõi → kiểm tra lại → xong |

GPS: mỗi dòng có lat/lng khi đang ở hiện trường. Lý trình km+m vẫn là gap LRS (`GAP-TD-LRS-01`) — nhập km tay đến khi có snap.

Check-in GPS hiện tại giữ làm **điểm có mặt trên tuyến**. Dòng nhật ký là **việc phát hiện**. Hai thứ không gộp một DTO.

### 3. Dòng nhật ký tuần kiểm

| Cột | Nguồn |
|-----|--------|
| Ngày, người | PL VIII mục II |
| Từ km, đến km, vị trí (trái / phải / tim / hành lang) | Mẫu trang trái |
| Hạng mục / ý kiến đơn vị BDTX | Mẫu |
| Mô tả + khối lượng ước tính | Mẫu |
| Yêu cầu xử lý hoặc báo cáo cấp trên + hạn | Trang phải |
| Kết quả: khối lượng, chất lượng, thời gian thực tế, ảnh/video sau | Trang phải · nghiệm thu tháng |
| Nhận xét lãnh đạo + ký (cuối tuần) | PL VIII mục I.4 tuần kiểm |
| Liên kết | Session tuần đường hoặc incident đang được kiểm |
| Mã tồn tại | Báo cáo tuần kiểm Khu I mục IX.5 · một mã xuyên suốt hạn và trạng thái |
| Nguồn phát hiện | Nhà thầu · tuần đường · Trung tâm điều hành · người dân · kiểm tra tại chỗ |

Tần suất: kế hoạch ≥ 1 lần/tuần/tuyến; thêm lịch đột xuất khi sự cố, TNGT, phản ánh. Chưa có bảng kế hoạch lượt.

Báo cáo tuần kiểm Khu I (mục VII) yêu cầu cả bộ hồ sơ, không chỉ sổ:

| Hồ sơ | Hệ thống hiện có |
|-------|------------------|
| Kế hoạch tuần kiểm | Chưa có |
| Nhật ký tuần kiểm | Chưa có · session `Tuần kiểm` chỉ là ca |
| Phiếu / biên bản kiểm tra | Chưa có · sổ 07 là vi phạm, không phải phiếu kiểm tra BDTX |
| Ảnh hiện trường | Ảnh check-in / sự cố, chưa gắn phiếu |
| Danh mục tồn tại | Chưa có mã tồn tại |
| Văn bản yêu cầu xử lý + hạn | Work order từ estimate, không sinh từ phiếu tuần kiểm |
| Hồ sơ phản hồi đơn vị BDTX | Chưa có |
| Biên bản kiểm tra lại | Chưa có |
| Xác nhận hoàn thành | Chưa có |
| Báo cáo định kỳ / đột xuất | `rpt-tuan-kiem` đọc session, không đọc phiếu |

Nhiệm vụ báo cáo có mà form ca hiện tại không có:

| Nhiệm vụ | Gap |
|----------|-----|
| Đối chiếu nhật ký tuần đường ↔ ảnh ↔ GPS ↔ hồ sơ xử lý ↔ kết quả | GAP-TK-01 · màn tuần kiểm mở dòng tuần đường, ghi khớp / lệch |
| Phân loại hư hỏng thuộc BDTX hay vượt phạm vi, giao trách nhiệm và hạn | GAP-TK-02 |
| Kiểm tra thi công trên đường đang khai thác (biển, rào, phân luồng) | GAP-TK-03 · chưa có loại phiếu |
| Kiến nghị từ nhà thầu, tuần đường, Trung tâm, người dân → phân loại → theo đến khi xong | GAP-TK-04 · `ops` inbox không phải sổ kiến nghị |
| Đánh giá nhà thầu từ kết quả tuần kiểm | GAP-TK-05 · không gộp vào `nghiem-thu` |

Chu trình báo cáo: Kiểm tra → phát hiện → yêu cầu xử lý → theo dõi → kiểm tra lại → xác nhận hoàn thành. Ba vai: tuần đường ở hiện trường, Trung tâm điều hành thông tin, tuần kiểm giám sát và xác nhận.

### 4. Quy trình khép kín

Doc Khu I và doc cao tốc cấm dừng ở “ghi rồi báo cáo”.

| Bước | Đã có | Cần thêm |
|------|--------|----------|
| Phát hiện + GPS + ảnh | Check-in, incident-create, photo-geo | Gắn vào dòng nhật ký |
| Cảnh báo / xử lý tại chỗ | `Content` tự do | Cột kết quả tại chỗ + loại việc |
| Báo cáo Trung tâm / tuần kiểm | `ops` inbox riêng | Trên dòng nhật ký: người nhận, thời điểm |
| Giao BDTX | Work order từ estimate | Từ dòng nhật ký thuộc phạm vi BDTX → work order |
| Vượt BDTX | — | Cờ kiến nghị Khu, không tạo việc vá |
| Kiểm tra lại | — | Tuần kiểm hoặc lần tuần sau xác nhận + ảnh sau |
| Bàn giao ca | — | Gói dòng chưa xong sang ca sau |
| Tạm dừng tuần (mất an toàn, cứu nạn) | — | Điều 19 khoản 6: lý do, không tính thiếu lượt |

### 5. Vi phạm hành lang

| TT 41 Điều 19.1.b | TT 72 Điều 16 |
|-------------------|---------------|
| Tuần đường phối hợp tuần kiểm lập biên bản | Tuần đường **đề nghị** người có thẩm quyền lập biên bản VPHC |

Cần cờ trên dòng vi phạm: `de-nghi-bien-ban` (tuần đường) và `lap-bien-ban` (tuần kiểm, theo thẩm quyền). Sổ 07 giữ hồ sơ vi phạm; ca tuần chỉ tạo đề nghị và dẫn sang sổ, không nhân bản form CSDL.

### 6. Tần suất và phạm vi

Chưa có so sánh kế hoạch lượt với ca thực tế.

| Quy tắc | Làm ở đâu |
|---------|-----------|
| Cao tốc ≥ 1 lần/ngày/chiều; tổ 2 người, ≤ 50 km/ca ô tô | Kế hoạch theo hợp đồng tuyến, không hard-code một số cho mọi QL |
| Cấp I–III ≥ 1/ngày; cấp IV–VI theo mùa | Master cấp đường của `road-route` |
| Tuần kiểm ≥ 1/tuần | Đếm session `Tuần kiểm` theo tuyến + tuần |
| Tăng lượt khi thiên tai, sự cố, TNGT | Lệnh tăng từ tuần kiểm / ops, không tự bịa |

### 7. Ngoài phạm vi đợt MFE phone

Trang bị xe, áo, cờ, còi. Báo cáo tháng đủ 4 nhóm PL VIII (BDTX, kỹ thuật từng hạng mục, TNGT 3 chỉ số, vi phạm đã/chưa xử lý). Track GPS liên tục và coverage PostGIS (context patrol đã để P2). Phần mềm “TUẦN KIỂM ĐƯỜNG BỘ” dán trên xe.

## Thứ tự implement

| Đợt | Làm | Không làm |
|-----|-----|-----------|
| **A** | GAP-TD-01/02: hai lối trên Field. Ca vẫn `patrol/sessions` | Sửa tab Cá nhân |
| **B** | Bảng dòng nhật ký tuần đường + form phone (loại, km, thời tiết, ảnh, xử lý tại chỗ, trạng thái) | Thay check-in GPS |
| **C** | Phiếu tuần kiểm: mã tồn tại, đối chiếu nhật ký tuần đường, hạn, ảnh sau, xác nhận hoàn thành (GAP-TK-01/02) | Gộp vào nghiệm thu |
| **D** | Khép kín: giao work order hoặc kiến nghị; bàn giao ca; lý do tạm dừng | Track liên tục |
| **E** | Kế hoạch tần suất theo cấp đường + báo cáo tháng đọc từ dòng nhật ký | Hard-code 3–9 lượt TCCS cho mọi tuyến |

API mới nằm domain Patrol, proxy sẵn qua Mobile.Bff `patrol/*`. Thiếu cột là migration `Schema_*` riêng, không trộn seed.
