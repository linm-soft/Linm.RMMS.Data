# TÀI LIỆU TỔNG HỢP KIẾN TRÚC KỸ THUẬT VÀ HÀNH LANG PHÁP LÝ
## ỨNG DỤNG DI CHUYỂN, TUẦN TRA HẠ TẦNG VÀ CHỈ ĐƯỜNG PHỐI HỢP BỘ GTVT
---

### MỤC I: CHIẾN LƯỢC DỮ LIỆU NỀN & CHỦ QUYỀN (OSM + GIS.VN)

#### 1. Kiểm soát Bản đồ nền (Chống đường lưỡi bò)
* **Bản chất OSM:** OpenStreetMap quốc tế không chính thức công nhận đường lưỡi bò nhưng do cơ chế đóng góp mở, dữ liệu thô thường bị tài khoản nước ngoài cài cắm ranh giới phi pháp hoặc sửa tên đảo tiếng Việt.
* **Giải pháp xử lý:** Tuyệt đối không gọi trực tiếp URL Tile Server mặc định (`.openstreetmap.org`). Phải tải file dữ liệu thô quốc gia (`.osm.pbf`) từ các nguồn uy tín như Geofabrik.
* **Công cụ lọc thô:** Sử dụng công cụ `Osmium Tool` để cắt nhỏ tệp dữ liệu theo khung đa giác (`.poly`) nhằm cô lập hoàn toàn tọa độ Việt Nam, chặt đứt các đường đứt đoạn phi pháp từ bên ngoài vào vùng biển đảo.
* **Nguồn ranh giới chuẩn:** Tải tệp dữ liệu thô địa chính cập nhật mới nhất sau sáp nhập `Việt Nam (tỉnh thành) - 34.geojson` từ danh mục góc trái của hệ thống `gis.vn` để làm khung cắt dữ liệu và nạp vào cơ sở dữ liệu.

#### 2. Kỹ thuật Front-end Highlight Việt Nam
* **Hiệu ứng đa giác nghịch đảo (Masking):** Chuẩn bị file GeoJSON ranh giới chuẩn Việt Nam. Tạo một đa giác bao phủ toàn thế giới, sau đó dùng file của `gis.vn` để "đục thủng" một lỗ chính là hình dáng Việt Nam (gồm đất liền, Hoàng Sa, Trường Sa). 
* **Tập trung thị giác:** Thêm lớp phủ này đè lên trên lớp bản đồ nền trên Front-end (Web/Mobile) với độ mờ (`fill-opacity: 0.6`). Vùng ngoài lãnh thổ Việt Nam sẽ bị làm mờ hoàn toàn để che các rủi ro địa chính từ bản đồ nền gốc.
* **Hạn chế góc nhìn (Max Bounds):** Khống chế camera thiết bị di động không cho kéo ra ngoài hệ tọa độ Vĩ độ `8.0` đến `24.0` và Kinh độ `102.0` đến `118.0`. Chặn mức zoom tối thiểu `minZoom: 5` để người dùng không thể nhìn thấy bản đồ ở cấp độ toàn cầu.

---

### MỤC II: KIẾN TRÚC BACKEND .NET & POSTGRESQL (POSTGIS)

#### 1. Mô hình lưu trữ không gian (Spatial DB)
* **Kích hoạt tính năng:** Chạy câu lệnh `CREATE EXTENSION postgis;` trên cơ sở dữ liệu PostgreSQL.
* **Tích hợp .NET Core:** Sử dụng thư viện `NetTopologySuite` để tự động map sang kiểu dữ liệu hình học trắc địa, đồng bộ theo hệ tọa độ vệ tinh toàn cầu **WGS84 (SRID: 4326)**.
* **Cấu trúc bảng cốt lõi:**
  * `VietnamBoundaries`: Lưu trữ đa giác ranh giới quốc gia sạch (`MultiPolygon`).
  * `TrafficSigns`: Lưu trữ vị trí tọa độ các biển báo giao thông (`Point`) do hệ thống thu thập.
* **Spatial Index (Chỉ mục không gian):** Bắt buộc tạo chỉ mục `GIST` trên PostgreSQL để tối ưu hóa hiệu năng, tránh thắt nút cổ chai (bottleneck) khi hàng ngàn xe quét tọa độ và gọi API liên tục:
  ```sql
  CREATE INDEX idx_traffic_signs_location ON "TrafficSigns" USING gist ("Location");
  CREATE INDEX idx_vietnam_boundary_geom ON "VietnamBoundaries" USING gist ("Geom");
  ```

#### 2. Luồng dữ liệu Camera AI (Edge-to-Cloud)
* **Xử lý tại thiết bị (Edge Computing):** Camera AI hoặc điện thoại trên xe tự chạy mô hình AI thu nhỏ (như YOLO-nano) để nhận diện biển báo, ô cắm, ổ gà. 
* **Tối ưu băng thông:** Thiết bị tuyệt đối không gửi video thô về mây nhằm tiết kiệm dung lượng 4G/5G, mà chỉ gửi gói tin JSON siêu nhẹ: `{ Toạ độ GPS, Mã loại biển báo, Ảnh cắt nhỏ (crop) của biển báo để đối chiếu }`.
* **Đồng bộ PostgreSQL:** Máy chủ GPU nhận gói tin, chạy thuật toán hậu xử lý và tự động kích hoạt câu lệnh `INSERT/UPDATE` để làm giàu dữ liệu biển báo vào PostgreSQL theo thời gian thực.

#### 3. Tích hợp Hệ thống Camera Chính phủ (Xử lý lỗi vi phạm)
* **Nguyên tắc bảo mật:** Không tải và lưu trữ tập trung dữ liệu vi phạm của người dân về cơ sở dữ liệu của doanh nghiệp an ninh nhằm giảm thiểu trách nhiệm pháp lý nếu xảy ra sự cố rò rỉ thông tin.
* **Cơ chế Proxy Query:** Backend .NET đóng vai trò là Gateway bảo mật, kết nối trực tiếp với server API của Chính phủ thông qua kênh truyền mã hóa riêng **VPN MPLS**. 
* **Luồng chạy thực tế:** Khi tài xế tra cứu lỗi ➔ .NET gửi lệnh đi sang server Chính phủ ➔ Nhận kết quả và trả thẳng về thiết bị di động ➔ **Xóa bộ nhớ đệm (cache) ngay lập tức**.

---

### MỤC III: CƠ CHẾ DÙNG CHUNG APP & PHÂN QUYỀN IDENTITY TOKEN

Hệ thống sử dụng giải pháp **Identity Token (JWT / OAuth 2.0)** quản lý tài khoản riêng để phân quyền động ngay trên một ứng dụng duy nhất phát hành trên Store công cộng:

*   **Quyền Cán bộ (`Role = Inspector`):** Sau khi đăng nhập, Token kích hoạt các tính năng chạy ngầm (Background GPS), mở camera AI quét biển báo, hiển thị danh mục quản lý tài sản hạ tầng chuyên ngành của Bộ GTVT.
*   **Quyền Người dân (`Role = Citizen`):** Hệ thống ẩn hoàn toàn tất cả các tính năng quét dữ liệu, ẩn bảng tài sản nội bộ của Bộ. Giao diện chuyển thành ứng dụng tiện ích công cộng: Chỉ cho phép xem hướng dẫn an toàn giao thông, tra cứu lỗi vi phạm cá nhân và nhận cảnh báo dẫn đường.
*   **Bảo vệ tầng API bằng thẻ [Authorize]:** Khóa chặt trên Backend .NET Core để người dùng phổ thông không thể dùng công cụ ngoài (như Postman) gọi trộm vào các API số hóa hạ tầng dành riêng cho cán bộ.

---

### MỤC IV: HÀNH LANG PHÁP LÝ BẮT BUỘC TẠI VIỆT NAM (CẬP NHẬT 2026)

Dự án do Công ty An ninh phối hợp với Bộ GTVT thực hiện và phát hành công cộng nên phải tuân thủ nghiêm ngặt 4 bộ luật sau:

1. **Luật Đo đạc và Bản đồ (Bộ TN&MT):** Hành vi di chuyển thu thập tọa độ, gắn nhãn đường bộ là hoạt động đo đạc chuyên ngành. Công ty bạn cần đính kèm **Văn bản giao nhiệm vụ / Phê duyệt đề án công vụ của Bộ GTVT** vào hồ sơ để làm căn cứ pháp lý thay thế giấy phép đo đạc thương mại khi triển khai thực địa. Cam kết hiển thị đúng chủ quyền biên giới quốc gia (Hoàng Sa, Trường Sa).
2. **Nghị định 13/2023/NĐ-CP về Bảo vệ dữ liệu cá nhân (Bộ Công an):** Khuôn mặt người đi đường và biển số xe thu từ camera AI là dữ liệu cá nhân. Doanh nghiệp phải nộp **Hồ sơ đánh giá tác động xử lý dữ liệu cá nhân (DPIA)** lên Cục A05 trong vòng 60 ngày kể từ khi vận hành. Kỹ thuật bắt buộc phải tự động làm mờ (Blur) mặt và biển số xe ngay tại thiết bị Edge trước khi truyền dữ liệu về server mây.
3. **An ninh Quốc phòng (Bộ Quốc phòng):** Nghiêm cấm ghi hình, lấy tọa độ vùng quân sự, biên giới quốc phòng nhạy cảm. Backend .NET phải thiết lập các vùng **Geofencing cấm**. Khi GPS của xe tuần tra đi vào vùng này, hệ thống tự động khóa tính năng quay phim của camera AI.
4. **An toàn hệ thống thông tin (Bộ TT&TT):** Vì hệ thống có kết nối hạ tầng tài sản của Bộ GTVT và cổng API camera Chính phủ, máy chủ .NET và cơ sở dữ liệu PostgreSQL phải được thẩm định, cấp chứng nhận đạt **Tiêu chuẩn an toàn thông tin Cấp độ 3 trở lên** (Nghị định 85/2016/NĐ-CP).

---

### MỤC V: CHIẾN LƯỢC PHÁT HÀNH ỨNG DỤNG LÊN STORE (APPLE & GOOGLE)

1. **Vượt vòng kiểm duyệt nhờ tính năng Công cộng:** Việc cho phép người dân tải về xem hướng dẫn giúp Apple/Google xếp app vào nhóm "Ứng dụng tiện ích công cộng" (Public Utility App), giúp duyệt app dễ dàng hơn so với ứng dụng thuần nội bộ.
2. **Hợp pháp hóa quyền định vị nền (`ACCESS_BACKGROUND_LOCATION`):** Google/Apple sẽ phê duyệt quyền chạy ngầm định vị này khi bạn giải trình bằng văn bản công vụ của Bộ GTVT, chứng minh GPS nền phục vụ tính năng dẫn đường cho người dân và tuần kiểm cho cán bộ.
3. **Cấu hình Kỹ thuật Geo-blocking chống soi xét:** Trên backend .NET, chặn toàn bộ các dải IP quốc tế gọi vào API lấy mảnh bản đồ (`api/map/tiles`). Khi kiểm duyệt viên của Apple/Google ở nước ngoài đăng nhập tài khoản Demo để kiểm tra, bản đồ nội địa sẽ không hiển thị, giúp bảo vệ an toàn các thông tin địa chính nhạy cảm và tránh bị từ chối duyệt app một cách cảm tính.