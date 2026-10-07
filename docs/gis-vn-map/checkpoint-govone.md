# 🚀 LRS SYSTEM REBUILD CHECKPOINT (POSTGIS)

File này chứa danh sách các điểm kiểm tra và cấu trúc mã nguồn chi tiết giúp bạn tích hợp, theo dõi tiến độ và làm việc trực tiếp với AI Assistant (như Cursor) nhằm xây dựng hệ thống Định vị lý trình (LRS) thay thế GovOne.

---

## 📌 Phase 1: Database & Data Setup (Điều kiện bắt buộc)

- [ ] **1.1. Xác định Hệ tọa độ phẳng quốc gia (SRID VN-2000)**
  - *Mục tiêu:* Chọn đúng mã SRID phù hợp với khu vực quản lý để tính khoảng cách theo đơn vị mét (Ví dụ: Hệ toàn quốc múi 6 độ là `4756`, hoặc dùng hệ tọa độ phẳng của tỉnh cụ thể như Hà Nội múi 3 độ là `3405`).
- [ ] **1.2. Khởi tạo cấu trúc các Bảng dữ liệu trong PostgreSQL**
  - *Mục tiêu:* Tạo các bảng dữ liệu gốc và dữ liệu đích dạng `LineStringM`.
  - *Script khởi tạo mẫu:*
    ```sql
    -- 1. Bảng Tuyến đường thô (Import từ OSM)
    CREATE TABLE tuyen_duong_tho (
        id SERIAL PRIMARY KEY,
        ten_tuyen VARCHAR(255),
        geom_2d geometry(LineString, 3405) -- Sử dụng SRID VN-2000 phù hợp
    );

    -- 2. Bảng Cọc tiêu thực tế (Dữ liệu bạn đang có)
    CREATE TABLE coc_tieu_thuc_te (
        id SERIAL PRIMARY KEY,
        tuyen_id INT REFERENCES tuyen_duong_tho(id),
        ten_coc VARCHAR(50), -- Ví dụ: "Km 10", "Km 11+500"
        ly_trinh_met DOUBLE PRECISION, -- Bắt buộc quy đổi ra MÉT (Ví dụ: 10000, 11500)
        geom_point geometry(Point, 3405) -- Tọa độ thực tế của cọc tiêu (Hệ VN-2000)
    );

    -- 3. Bảng Tuyến đường LRS chuẩn (Đầu ra của hệ thống)
    CREATE TABLE tuyen_duong_lrs (
        id INT PRIMARY KEY REFERENCES tuyen_duong_tho(id),
        ten_tuyen VARCHAR(255),
        geom_lrs geometry(LineStringM, 3405) -- Chứa thuộc tính đo đạc M
    );
    ```
- [ ] **1.3. Cài đặt Chỉ mục không gian (Spatial Index)**
  - *Mục tiêu:* Đảm bảo tốc độ truy vấn dưới 50ms khi xử lý hàng nghìn tọa độ.
  - *Script khởi tạo mẫu:*
    ```sql
    CREATE INDEX idx_tuyen_tho_geom ON tuyen_duong_tho USING GIST(geom_2d);
    CREATE INDEX idx_coc_tieu_geom ON coc_tieu_thuc_te USING GIST(geom_point);
    CREATE INDEX idx_tuyen_lrs_geom ON tuyen_duong_lrs USING GIST(geom_lrs);
    ```

---

## 📌 Phase 2: Calibration Pipeline (Quy trình nắn dữ liệu)

- [ ] **2.1. Thiết lập View chuẩn hóa vị trí cọc tiêu**
  - *Mục tiêu:* Hút các điểm cọc tiêu thực tế về vị trí vuông góc trên sợi dây tim đường của dữ liệu thô (OSM).
  - *Script khởi tạo mẫu:*
    ```sql
    CREATE OR REPLACE VIEW v_coc_tieu_chuan_hoa AS
    SELECT 
        c.tuyen_id,
        c.ly_trinh_met,
        ST_ClosestPoint(t.geom_2d, c.geom_point) AS geom_projected
    FROM coc_tieu_thuc_te c
    JOIN tuyen_duong_tho t ON c.tuyen_id = t.id
    ORDER BY c.tuyen_id, c.ly_trinh_met;
    ```
- [ ] **2.2. Gom nhóm cọc tiêu thành đối tượng MultiPointM**
  - *Mục tiêu:* Tạo cấu trúc dữ liệu không gian chứa đồng thời ba thông tin `(X, Y, M)` tại mỗi vị trí mốc cọc tiêu.
  - *Script khởi tạo mẫu:*
    ```sql
    CREATE OR REPLACE VIEW v_tuyen_multi_points AS
    SELECT 
        tuyen_id,
        ST_SetSRID(
            ST_Collect(
                ST_MakePoint(ST_X(geom_projected), ST_Y(geom_projected), ly_trinh_met)
            ), 
            3405
        ) AS points_m
    FROM v_coc_tieu_chuan_hoa
    GROUP BY tuyen_id;
    ```
- [ ] **2.3. Chạy thuật toán Nắn tuyến `ST_CalibrateLinearReference`**
  - *Mục tiêu:* Đồng bộ hóa và sinh ra dữ liệu hình học hoàn chỉnh cho bảng `tuyen_duong_lrs`.
  - *Script khởi tạo mẫu:*
    ```sql
    INSERT INTO tuyen_duong_lrs (id, ten_tuyen, geom_lrs)
    SELECT 
        t.id,
        t.ten_tuyen,
        ST_CalibrateLinearReference(t.geom_2d, p.points_m, 50) AS geom_lrs -- Bán kính hút điểm 50m
    FROM tuyen_duong_tho t
    JOIN v_tuyen_multi_points p ON t.id = p.tuyen_id;
    ```

---

## 📌 Phase 3: Core API Services (Viết logic quy đổi cho Backend)

- [ ] **3.1. Nghiệp vụ 1: Tọa độ GPS (WGS84) ➔ Tuyến & Lý trình (Km+m)**
  - *Đầu vào:* `latitude`, `longitude` (Ví dụ nhận từ Mobile App).
  - *Hàm SQL mẫu:*
    ```sql
    WITH point_input AS (
        -- Đổi tọa độ GPS (4326) sang hệ phẳng VN-2000 (3405) để tính toán chính xác bằng Mét
        SELECT ST_Transform(ST_SetSRID(ST_Point(105.8524, 21.0285), 4326), 3405) AS geom
    ),
    find_nearest_line AS (
        -- Tìm tuyến đường gần điểm GPS nhất trong phạm vi 50m bằng toán tử KNN <->
        SELECT id, ten_tuyen, geom_lrs,
               ST_LineLocatePoint(geom_lrs, (SELECT geom FROM point_input)) AS ratio
        FROM tuyen_duong_lrs
        WHERE ST_DWithin(geom_lrs, (SELECT geom FROM point_input), 50)
        ORDER BY geom_lrs <-> (SELECT geom FROM point_input)
        LIMIT 1
    )
    SELECT 
        id, 
        ten_tuyen,
        -- Dựa vào tỷ lệ vị trí chiếu (ratio), nội suy ra giá trị M (lý trình mét)
        FLOOR(ST_InterpolatePoint(geom_lrs, ratio)) AS tong_so_met,
        FLOOR(ST_InterpolatePoint(geom_lrs, ratio) / 1000) AS km,
        MOD(FLOOR(ST_InterpolatePoint(geom_lrs, ratio))::numeric, 1000) AS met_le
    FROM find_nearest_line;
    ```
- [ ] **3.2. Nghiệp vụ 2: Tên Tuyến & Số mét ➔ Tọa độ bản đồ (WGS84)**
  - *Đầu vào:* `tuyen_id`, `ly_trinh_met` (Ví dụ tìm kiếm: "Xem vị trí Km 45+200 trên tuyến").
  - *Hàm SQL mẫu:*
    ```sql
    WITH target_point AS (
        -- Dùng hàm ST_LocateAlong để tìm vị trí có thuộc tính M tương ứng
        SELECT ST_GeometryN(ST_LocateAlong(geom_lrs, 45200), 1) AS geom_vn2000
        FROM tuyen_duong_lrs
        WHERE id = 1
    )
    -- Chuyển tọa độ VN-2000 ngược lại thành WGS84 để hiển thị lên Mapbox/OSM
    SELECT ST_AsGeoJSON(ST_Transform(geom_vn2000, 4326)) AS geojson_output
    FROM target_point;
    ```

---

## 📌 Phase 4: Unit Test & Verification (Kiểm thử hệ thống)

- [ ] **4.1. Kiểm tra độ chính xác tại các điểm mốc (Mốc Cọc Tiêu)**
  - *Thử nghiệm:* Gửi tọa độ thực tế của một cọc Km (Ví dụ: Cọc Km 20) vào API Quy đổi. Kết quả trả về bắt buộc phải đúng `Km: 20` và `met_le: 0` (cho phép sai số hình học không đáng kể < 1 mét).
- [ ] **4.2. Kiểm tra hiệu năng xử lý (Performance & Indexing)**
  - *Thử nghiệm:* Chạy câu lệnh quy đổi với `EXPLAIN ANALYZE` để kiểm tra Database có thực sự sử dụng `Index Scan` trên chỉ mục không gian `GIST` hay không, đảm bảo không xảy ra hiện tượng `Seq Scan` làm chậm hệ thống.

---

## Áp dụng trong ứng dụng (đã kiểm)

SQL mẫu ở Phase 1–3 **không được** `CREATE TABLE` vào RMMS hay MapService. Ý tưởng LRS giữ lại. Chỗ chứa dữ liệu và hàm PostGIS phải theo bảng dưới.

### Sai so với hệ đang chạy

| Checkpoint | Thực tế |
|------------|---------|
| SRID `4756` = mét, múi 6° toàn quốc | `4756` là VN-2000 **độ** (geographic). `ST_DWithin(..., 50)` trên SRID này là 50 độ, không phải 50 m |
| SRID `3405` = Hà Nội múi 3° | `3405` là VN-2000 / UTM 48N, kinh tuyến trục 105°, chỉ phía tây 108°Đ. QL.1 và cao tốc phía đông 108°Đ nằm ngoài múi |
| Bảng `tuyen_duong_tho` | Tim đã bake: `rmms_gis_route_geoms.CoordinatesJson` (lng/lat WGS84), status `Ok`. Không có cột `geometry` trên RMMS. `LineM` nằm MapService `route_centerlines` |
| Bảng `coc_tieu_thuc_te` | Cột km: `rmms_road_assets` `Type = KM_POST`, `KmFrom`, `Lat`/`Lng`. Không tách bảng cọc mới |
| Bảng `tuyen_duong_lrs` | Không tạo trong RMMS. Đo M là cột MapService trên `linm_maps`. Không copy sổ tài sản sang map |
| `ST_CalibrateLinearReference` | Không có trong PostGIS. Ticket nắn M từ PointM chưa được làm. `ST_AddMeasure` chỉ gán M đều từ đầu đến cuối — không dùng cho cột km lệch tỉ lệ |
| `ST_InterpolatePoint(geom_lrs, ratio)` | Đối số 2 là **điểm**, không phải tỉ lệ 0–1. Đúng: `ST_InterpolatePoint(lineM, gps_point)` trả về M |
| `ST_LineLocatePoint` rồi nhân ra km | Tỉ lệ đó là phần dài hình học. Lý trình cột km không đều theo mét bản đồ |
| RMMS PostGIS | RMMS **không** bật PostGIS. `Lat`/`Lng` là `decimal`. `ST_*`, GIST, `LineM` nằm ở MapService `route_centerlines` (`linm_maps`, geometry `4326`, cùng image PostGIS, không DB mới). RMMS API gọi Map bằng `Gis__MapServiceBaseUrl`. BFF `ServiceEndpoints__MapService` chỉ tile và tên đường. Ghim lưu số km / tên / match trên check-in |
| Tên đường | LRS trả **mã tuyến** gần nhất. Tên đường tại chỗ đứng vẫn là OSRM `/nearest` (≤ 80 m). Ca đang mở chỉ là tuyến kế hoạch |
| Ngưỡng 50 m trong SQL mẫu | 50 m = bán kính hút cọc khi nắn. Đúng/nhầm tuyến kế hoạch vẫn 80 m. Hai ngưỡng không gộp |

### Map phase → việc trong app

| Phase | Làm trong app |
|-------|----------------|
| 1.1 | Lưu và truy vấn `geography(LineString,4326)`. Mét = `ST_Distance` trên geography. Không lưu geometry `3405` hay `4756` |
| 1.2 | RMMS giữ `rmms_road_assets` (`KM_POST`, `KmFrom`, lat/lng decimal) và check-in. Cột measure (GeometryM 4326, M = mét) + GIST nằm ở MapService DB `linm_maps`. **Cấm** bật PostGIS trên Postgres RMMS. **Cấm** copy sổ tài sản sang `linm_maps`. `ly_trinh_met = KmFrom * 1000` |
| 1.3 | GIST trên cột geography đó. Không tạo index cho ba bảng mẫu |
| 2.1 | Hút `KM_POST` vuông góc lên nét bake của **đúng** `Route`. Cọc lệch tim > 50 m bỏ qua, không kéo vào tuyến khác |
| 2.2–2.3 | Cắt nét giữa hai cọc liên tiếp, `ST_AddMeasure` từng đoạn từ M cọc này sang M cọc kia, rồi nối. Lỗ > 2 km: không nội suy, để trống M |
| 3.1 | GPS → tuyến LRS gần nhất trong 50 m → `ST_InterpolatePoint` ra mét. Không thấy tuyến → km null, `routeMatch = unknown` |
| 3.2 | `ST_LocateAlong(lineM, ly_trinh_met)` ra điểm 4326. Nền bản đồ là clip OSM, không đổi SRID để vẽ |
| 4.1 | Gửi lat/lng một `KM_POST` đã hút. Kết quả khớp `KmFrom` của cọc đó, lệch hình học < 1 m |
| 4.2 | `EXPLAIN ANALYZE` phải `Index Scan` GIST. Cột km lỗ > 2 km không được trả số bịa |

Skill thực hiện: `/implement-real-detect-gps` step 2 (bake + nắn M) và step 3 (API ghim). Chi tiết hàm: `common/skill/implement-real-detect-gps/example/lrs-app.md`.