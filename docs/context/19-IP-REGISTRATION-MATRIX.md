# RMMS — Ma trận thành phần có thể đăng ký sở hữu trí tuệ (Việt Nam)

> **Mục đích:** Danh sách kiểm tra đăng ký sở hữu trí tuệ theo từng phần hành / phân hệ.  
> **Nguồn:** `features/README.md` · `04-PROGRAMS.md` · `14-P2-AI-VISION-STANDARD.md` · `16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` · `18-ITS-ANPR-OVERLOAD-SPEC.md` · `15-SCREEN-AI-MAP.md`  
> **Ngày:** 2026-08-08  
> **Phạm vi:** Định hướng nội bộ — **chưa** thay thế ý kiến luật sư hoặc quyết định của Cục Bản quyền tác giả / Cục Sở hữu trí tuệ.

## Chú giải cột

| Cột | Ý nghĩa |
|-----|---------|
| **Thành phần (Module)** | Tên phần hành bằng tiếng Việt, kèm tên phân hệ trong ngoặc |
| **Mã kỹ thuật** | Mã slug trong tài liệu kỹ thuật (để đối chiếu code / demo) |
| **Hình thức bảo hộ** | Loại quyền sở hữu trí tuệ có thể áp dụng |
| **Thứ tự nộp hồ sơ** | Khi nào nên nộp (viết đầy đủ, không dùng mã số giai đoạn) |
| **Tài liệu / sản phẩm kèm hồ sơ** | Gợi ý artifact nộp kèm |
| **Giới hạn** | Phần không thuộc quyền của mình hoặc không đăng ký được |

| Mức khả năng | Ý nghĩa |
|--------------|---------|
| Nên đăng ký | Có cơ sở bảo hộ rõ |
| Có thể xem xét | Cần đủ tính mới / giữ bí mật mới đáng nộp |
| Không đăng ký | Quy chuẩn nhà nước, bên thứ ba, hoặc chỉ là ý tưởng chung |

---

## 1. Bảng thành phần có thể đăng ký

| # | Thành phần (Module) | Mã kỹ thuật | Hình thức bảo hộ | Thứ tự nộp hồ sơ | Tài liệu / sản phẩm kèm hồ sơ | Giới hạn |
|---|---------------------|-------------|------------------|------------------|-------------------------------|----------|
| 0 | Tên thương mại và logo sản phẩm RMMS (Nhãn hiệu thương mại) | — | Nhãn hiệu — **nên đăng ký** | Nộp sớm nhất, song song thương mại hóa | Logo (PNG/SVG) · mẫu nhãn · giấy tờ chủ sở hữu | Đăng ký song song với các gói quyền tác giả phần mềm |
| 1 | Quản lý tài sản đường bộ (Quản lý tài sản) | `asset` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Mã nguồn giao diện và dịch vụ · giao diện người dùng · lược đồ cơ sở dữ liệu | Không bảo hộ ý tưởng “quản lý tài sản” nói chung |
| 1b | Cơ sở dữ liệu 12 biểu kết cấu và 8 sổ bảo dưỡng thường xuyên (Quản lý tài sản · Tuần đường · Bảo trì) | `csdl-so-sach` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Mã nguồn hub / danh sách / biểu mẫu · giao diện lập trình ứng dụng nhập-xuất · bố cục nhập liệu | **Không đăng ký** Thông tư / tiêu chuẩn Việt Nam / mẫu sổ của nhà nước — chỉ bảo hộ phần mềm triển khai |
| 1c | Phân loại mặt đường — Biểu 1 (Quản lý tài sản) | `pavement-section` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Biểu mẫu và thực thể dữ liệu Biểu 1 | Quy chuẩn công thuộc nhà nước |
| 2 | Hệ thông tin địa lý và mô hình số hóa không gian ba chiều (Hệ thông tin địa lý) | `gis` | Quyền tác giả phần mềm — **nên đăng ký** · Bí mật kinh doanh cấu hình bản đồ — **có thể xem xét** | Nộp khi đã có mã nguồn / bản dựng ổn định | Ứng dụng bản đồ · cảnh không gian ba chiều · cấu hình lớp bản đồ | **Không** sở hữu thư viện bản đồ bên thứ ba (Leaflet, Cesium, Google Map) |
| 2a | Vẽ tài sản trên bản đồ (Hệ thông tin địa lý · Quản lý tài sản) | `gis-draw-google` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Mã nguồn vẽ điểm / đường / vùng | Bộ công cụ bản đồ bên thứ ba không thuộc quyền của mình |
| 3 | Trí tuệ nhân tạo kiểm định mặt đường — mười nhóm hư hỏng (Trí tuệ nhân tạo kiểm định ảnh) | `ai-vision` | Quyền tác giả phần mềm — **nên đăng ký** · Bí mật kinh doanh (bộ dữ liệu gán nhãn, trọng số mô hình) — **nên đăng ký nội bộ** · Giải pháp hữu ích / sáng chế — **có thể xem xét** | Nộp sớm nhất (cùng nhóm trí tuệ nhân tạo) | Tiến trình suy luận trên máy xử lý đồ họa · tệp danh mục lớp · bộ chuyển tiếp nghiệp vụ · chuẩn `14-P2-AI-VISION-STANDARD.md` | Nền nhận dạng gốc: chọn bản Apache hoặc bản thương mại Ultralytics Enterprise — **không** dùng bản AGPL cho sản phẩm đóng |
| 3b | Trí tuệ nhân tạo phát hiện tài sản / thiết bị mới từ camera tuần đường (Trí tuệ nhân tạo kiểm định ảnh · Quản lý tài sản · Tuần đường) | `ai-asset-detect` | Quyền tác giả phần mềm — **nên đăng ký** · Bí mật kinh doanh — **nên đăng ký nội bộ** | Nộp sớm nhất (cùng nhóm trí tuệ nhân tạo) | Luồng camera → ứng viên → xác nhận tạo tài sản · bảng phân loại đối tượng | Bộ dữ liệu và trọng số mô hình giữ bí mật kinh doanh |
| 3c | Hệ thống giao thông thông minh — phát hiện đối tượng cố định (biển báo · cọc tiêu · thiết bị biên · khử trùng lặp bán kính mười mét · cập nhật mô hình từ xa) (Trí tuệ nhân tạo kiểm định ảnh · Internet vạn vật · Quản lý tài sản · Hệ thông tin địa lý) | `its-traffic-detect` | Quyền tác giả phần mềm — **nên đăng ký** · Bí mật kinh doanh — **nên đăng ký nội bộ** · Giải pháp hữu ích / sáng chế — **có thể xem xét** (ứng viên mạnh nhất) | Nộp sớm nhất (cùng nhóm giao thông thông minh) | Thiết kế `16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` · quy tắc không gian PostGIS · lọc tọa độ · tam giác hóa · cập nhật mô hình từ xa | Chỉ nộp giải pháp hữu ích khi mô tả đủ quy trình kỹ thuật cụ thể, không chỉ “dùng trí tuệ nhân tạo” |
| 3d | Hệ thống giao thông thông minh — nhận dạng biển số · tra cứu đăng kiểm · đề xuất lỗi tốc độ / quá tải · người xác nhận (Trí tuệ nhân tạo kiểm định ảnh · Internet vạn vật · Quản lý sự cố) | `its-anpr-overload` | Quyền tác giả phần mềm — **nên đăng ký** · Bí mật kinh doanh (bộ quy tắc ngưỡng lỗi) — **nên đăng ký nội bộ** | Nộp sớm nhất (cùng nhóm giao thông thông minh) | Đặc tả `18-ITS-ANPR-OVERLOAD-SPEC.md` · máy quy tắc · bước người xác nhận · mã sự kiện | **Không** đăng ký giao diện lập trình của Cục Đăng kiểm — chỉ bảo hộ bộ chuyển tiếp và quy tắc của mình |
| 4 | Tuần đường / tuần kiểm (Tuần đường) | `patrol` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Ứng dụng di động / web check-in · hàng đợi ngoại tuyến | Nghiệp vụ phổ biến — bảo hộ biểu hiện phần mềm |
| 5 | Chấm công và định vị (Tuần đường) | `attendance` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp sau khi phân hệ đã triển khai ổn | Vết định vị · hàng rào địa lý | — |
| 6 | Quản lý sự cố (Quản lý sự cố) | `incident` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Quy trình vấn đề / sự cố · bản đồ | — |
| 7 | Lập lịch sửa chữa / bảo trì (Bảo trì) | `maintenance` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp sau khi phân hệ đã triển khai ổn | Công việc · lịch bảo trì | — |
| 8 | Trí tuệ nhân tạo dự báo bảo trì (Trí tuệ nhân tạo kiểm định ảnh · Học máy) | `predict` | Quyền tác giả phần mềm — **nên đăng ký** · Bí mật kinh doanh — **nên đăng ký nội bộ** · Giải pháp hữu ích / sáng chế — **có thể xem xét** | Nộp khi đã có mã nguồn / bản dựng ổn định | Tập đặc trưng · mô hình dự báo đã huấn luyện | Mô hình tự huấn luyện ưu tiên bảo vệ bằng bí mật kinh doanh |
| 9 | Chỉ đạo điều hành (Thông báo / điều hành) | `ops` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp sau khi phân hệ đã triển khai ổn | Thông báo · bảng điều hành | — |
| 10 | Trí tuệ nhân tạo ước lượng sửa chữa (Học máy) | `estimate` | Quyền tác giả phần mềm — **nên đăng ký** · Bí mật kinh doanh — **nên đăng ký nội bộ** | Nộp khi đã có mã nguồn / bản dựng ổn định | Mô hình hồi quy · bảng đơn giá nội bộ | Đơn giá nội bộ là bí mật kinh doanh |
| 11 | Hợp đồng và ngân sách (Hợp đồng) | `contract` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp sau khi phân hệ đã triển khai ổn | Phân hệ hợp đồng | — |
| 12 | Vật tư và thiết bị (Kho vật tư) | `inventory` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp sau khi phân hệ đã triển khai ổn | Phân hệ vật tư | — |
| 13 | Bay không người lái và thu thập hiện trạng (Bay không người lái) | `drone` | Quyền tác giả phần mềm — **nên đăng ký** · Bí mật kinh doanh quy trình xử lý — **có thể xem xét** | Nộp sau khi phân hệ đã triển khai ổn | Điều phối đường ống xử lý ảnh / đám mây điểm | **Không** sở hữu phần mềm photogrammetry gốc bên thứ ba |
| 14 | Trung tâm điều hành giao thông (Giao thông) | `toc` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn sản phẩm (giai đoạn mở rộng) | Sự kiện ùn tắc · biển báo biến đổi | — |
| 15 | Cổng người dân (Tích hợp / cổng công khai) | `citizen` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp sau khi phân hệ đã triển khai ổn | Cổng web · lớp cổng dịch vụ | — |
| 16 | Trợ lý trí tuệ nhân tạo hỏi đáp ngôn ngữ tự nhiên (Trợ lý trí tuệ nhân tạo) | `copilot` | Quyền tác giả phần mềm — **nên đăng ký** · Bí mật kinh doanh (kho tài liệu, câu lệnh hệ thống, chỉ mục vector) — **nên đăng ký nội bộ** | Nộp khi đã có mã nguồn / bản dựng ổn định | Ngăn kéo hỏi đáp · kho ngữ liệu · câu lệnh · chỉ mục tìm kiếm ngữ nghĩa | **Không** đăng ký mô hình ngôn ngữ nền (GPT / Azure / tương đương) |
| 17 | Bảng điều khiển điều hành (Báo cáo / điều hành) | `dashboard` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Chỉ số · trung tâm thời gian thực | — |
| 17b | Báo cáo trên web — tài sản · sự cố · check-in (Báo cáo) | `reports` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Ba loại báo cáo · xuất Excel | — |
| 18 | Giao diện lập trình mở và tích hợp hệ thống (Tích hợp) | `integration` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Cổng giao diện lập trình · nhập tài sản · đồng bộ ngoại tuyến | Tài liệu hợp đồng giao diện lập trình có thể đăng ký quyền tác giả tài liệu kèm theo |
| — | Góp ý phần mềm (Tích hợp) | `feedback` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp sau khi phân hệ đã triển khai ổn | Biểu mẫu góp ý | Phụ trợ |
| — | Quản lý người dùng và tổ chức (Xác thực / tổ chức) | `users` | Quyền tác giả phần mềm — **nên đăng ký** | Nộp khi đã có mã nguồn / bản dựng ổn định | Tổ chức · phân tuyến · hồ sơ người dùng | Thư viện xác thực nền tảng bên thứ ba không thuộc quyền đăng ký của phân hệ này |

---

## 2. Gói hồ sơ đề xuất (gom thành phần)

| Tên gói đăng ký | Thành phần (Module) gộp trong gói | Hình thức bảo hộ | Thứ tự nộp hồ sơ |
|-----------------|-----------------------------------|------------------|------------------|
| Gói nhãn hiệu thương mại | Tên và logo RMMS / Linm RMMS (Nhãn hiệu thương mại) | Nhãn hiệu | Nộp sớm nhất, song song thương mại hóa |
| Gói nền tảng nghiệp vụ cốt lõi | Quản lý tài sản đường bộ (Quản lý tài sản) · Phân loại mặt đường Biểu 1 (Quản lý tài sản) · Cơ sở dữ liệu 12 biểu và 8 sổ (Quản lý tài sản · Tuần đường · Bảo trì) · Tuần đường (Tuần đường) · Chấm công và định vị (Tuần đường) · Quản lý sự cố (Quản lý sự cố) · Lập lịch bảo trì (Bảo trì) · Chỉ đạo điều hành (Thông báo / điều hành) · Quản lý người dùng và tổ chức (Xác thực / tổ chức) · Bảng điều khiển (Báo cáo / điều hành) · Báo cáo web (Báo cáo) · Tích hợp hệ thống (Tích hợp) | Quyền tác giả phần mềm | Nộp khi đã có mã nguồn / bản dựng ổn định |
| Gói bản đồ và mô hình số hóa không gian | Hệ thông tin địa lý và mô hình số hóa không gian ba chiều (Hệ thông tin địa lý) · Vẽ tài sản trên bản đồ (Hệ thông tin địa lý · Quản lý tài sản) | Quyền tác giả phần mềm | Nộp khi đã có mã nguồn / bản dựng ổn định |
| Gói trí tuệ nhân tạo kiểm định ảnh | Kiểm định mặt đường (Trí tuệ nhân tạo kiểm định ảnh) · Phát hiện tài sản mới (Trí tuệ nhân tạo kiểm định ảnh · Quản lý tài sản · Tuần đường) · máy xử lý đồ họa suy luận · mười nhóm hư hỏng | Quyền tác giả phần mềm + bí mật kinh doanh | Nộp sớm nhất |
| Gói giao thông thông minh | Phát hiện đối tượng cố định biển báo / cọc tiêu (Trí tuệ nhân tạo kiểm định ảnh · Internet vạn vật · Quản lý tài sản · Hệ thông tin địa lý) · Nhận dạng biển số và xác nhận lỗi tải trọng / tốc độ (Trí tuệ nhân tạo kiểm định ảnh · Internet vạn vật · Quản lý sự cố) | Quyền tác giả phần mềm + bí mật kinh doanh (+ giải pháp hữu ích / sáng chế nếu đủ điều kiện) | Nộp sớm nhất |
| Gói trí tuệ nhân tạo hỗ trợ quyết định | Dự báo bảo trì (Trí tuệ nhân tạo kiểm định ảnh · Học máy) · Ước lượng sửa chữa (Học máy) · Trợ lý hỏi đáp (Trợ lý trí tuệ nhân tạo) | Quyền tác giả phần mềm + bí mật kinh doanh | Nộp khi đã có mã nguồn / bản dựng ổn định |
| Gói mở rộng | Hợp đồng và ngân sách (Hợp đồng) · Vật tư và thiết bị (Kho vật tư) · Bay không người lái (Bay không người lái) · Trung tâm điều hành giao thông (Giao thông) · Cổng người dân (Tích hợp / cổng công khai) · Góp ý phần mềm (Tích hợp) | Quyền tác giả phần mềm | Nộp sau khi phân hệ đã triển khai ổn |

---

## 3. Thành phần không đăng ký / loại trừ rõ

| Thành phần | Lý do |
|------------|--------|
| Thông tư 41 · tiêu chuẩn Việt Nam 14182 · mẫu sổ bảo dưỡng thường xuyên của nhà nước | Quy chuẩn / tài liệu công |
| Giao diện lập trình Cục Đăng kiểm · Google Maps · Azure OpenAI | Bên thứ ba |
| Bản nhận dạng Ultralytics YOLO theo giấy phép AGPL · bản nhận dạng mã mở gốc chưa tinh chỉnh riêng | Giấy phép bên thứ ba / chưa phải sáng tạo độc quyền của mình |
| Ý tưởng chung “trí tuệ nhân tạo quản lý đường bộ” | Pháp luật không bảo hộ ý tưởng thuần túy |
| Phần cứng camera / cầu cân động / máy bay không người lái của khách hàng | Không thuộc phần mềm RMMS |

---

## 4. Danh sách kiểm tra trước khi nộp hồ sơ

- [ ] Chốt nền nhận dạng: bản Apache khuyến nghị **hoặc** bản thương mại Ultralytics Enterprise — xem `14-P2-AI-VISION-STANDARD.md`
- [ ] Lập danh sách tác giả / chủ sở hữu / ngày tạo cho từng gói hồ sơ
- [ ] Chuẩn bị bản dựng hoặc mã nguồn đóng gói (mã băm) kèm tài liệu mô tả chức năng tiếng Việt
- [ ] Bộ dữ liệu gán nhãn / trọng số mô hình / bộ quy tắc nhận dạng biển số: đánh dấu **bí mật kinh doanh** — không công bố toàn bộ
- [ ] Nếu nộp giải pháp hữu ích cho nhóm giao thông thông minh: mô tả quy trình kỹ thuật theo `16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md` (không chỉ viết “dùng trí tuệ nhân tạo”)
- [ ] Đăng ký nhãn hiệu thương mại trước hoặc song song với thương mại hóa

---

## Tham chiếu

| Tài liệu | Vai trò |
|----------|---------|
| [`features/README.md`](features/README.md) | Danh mục phần hành |
| [`14-P2-AI-VISION-STANDARD.md`](14-P2-AI-VISION-STANDARD.md) | Chuẩn giấy phép trí tuệ nhân tạo kiểm định ảnh |
| [`16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md`](16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) | Quy trình hệ thống giao thông thông minh (ứng viên giải pháp hữu ích) |
| [`18-ITS-ANPR-OVERLOAD-SPEC.md`](18-ITS-ANPR-OVERLOAD-SPEC.md) | Nhận dạng biển số · quy tắc · người xác nhận |
| [`15-SCREEN-AI-MAP.md`](15-SCREEN-AI-MAP.md) | Ánh xạ màn hình ↔ trí tuệ nhân tạo |
