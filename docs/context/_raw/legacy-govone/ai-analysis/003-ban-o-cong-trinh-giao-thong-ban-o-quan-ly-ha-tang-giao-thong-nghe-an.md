# AI Vision — BẢN ĐỒ CÔNG TRÌNH GIAO THÔNG › Bản đồ quản lý hạ tầng giao thông Nghệ An

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `003-ban-o-cong-trinh-giao-thong-ban-o-quan-ly-ha-tang-giao-thong-nghe-an` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384&gtoken=[REDACTED] |
| **screenshot** | `screenshots/003-ban-o-cong-trinh-giao-thong-ban-o-quan-ly-ha-tang-giao-thong-nghe-an.png` |
| **DOM fields** | 46 |
| **DOM labels** | 6 |
| **DOM buttons** | 53 |

## DOM inventory (đã capture)

### Labels
- Tên bản đồ(*):
- Loại bản đồ:
- Mô tả:
- Hệ tọa độ:
- Chọn mẫu bản đồ:
- Màu nền mặc định:

### Buttons / actions
- Lớp bản đồ
- Chú giải
- Thuộc tính
- Kết quả
- Đo diện tích
- Đo chiều dài
- Lấy thông tin vị trí
- Chụp màn hình
- Xuất bản đồ
- In bản đồ
- Chuẩn hóa cột Km
- Xem hướng đoạn đường
- Gộp đoạn đường multiline
- Tạo đoạn đánh giá 100m
- Gán mã đoạn đánh giá cho điểm thu thập
- Tự động đánh giá chất lượng mặt đường
- Danh sách thiết bị
- Sao chép thiết bị
- Sao chép tài sản
- Tổng hợp
- Hủy biên tập
- Lưu kết quả (Ctrl + S)
- Vệ tinh
- Google
- Giao thông
- Hành chính
- Không nền
- Bản đồ nền
- Biểu đồ
- Bản đồ quản lý hạ tầng giao thông Nghệ An
- Bản đồ
- Mở bản đồ
- Công cụ
- Video Tracking
- Phân tích không gian
- Phân tích mạng lưới
- Thiết kế mạng lưới
- Tạo biểu mẫu
- Quản lý biểu mẫu
- Thiết lập hướng

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | button | — |
| input | text | inputDienTich |
| input | text | inputChieuDai |
| input | text | inputChieuDaiKhongGian |
| input | text | inputDienTichKhongGian |
| input | text | — |
| input | text | gMapInputTextSearch |
| select | — | ddlLopDuLieu |
| input | text | tenBanDo |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `003-ban-o-cong-trinh-giao-thong-ban-o-quan-ly-ha-tang-giao-thong-nghe-an.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx?mapid=17384`) — shell **Bản đồ quản lý hạ tầng giao thông Nghệ An** với modal **Thông tin bản đồ** đang mở (tab **Cơ bản** active).  
Đây là capture **màn chính / map metadata** của feature `gis-draw-google`: canvas full + sidebar lớp + toolbar map + form metadata bản đồ (tên · loại · mô tả · màu nền).  
Mục đích: (1) xem/sửa **thông tin bản đồ** (metadata) · (2) giữ shell GIS sẵn sàng basemap Google + overlay **Tuyến đường** · (3) đóng modal → tiếp tục tương tác map (identify / measure / edit / layer toggle).  
Khác sibling `002` (entry menu BẢN ĐỒ CÔNG TRÌNH — chưa chắc modal metadata) · khác `025` (focus radio **Vệ tinh**) · khác tool-focused `010`–`024` (đo / chụp / lưu / hủy…).  
Ảnh capture: basemap **Google** selected · lớp **Tuyến đường** checked · mạng tuyến đỏ/xanh + nhãn QL/ĐT · cụm marker tím SE · modal phủ giữa map · footer modal chỉ **Đóng**.  
Kind shell: **F/custom map (GIS)** + modal Pattern A (metadata) → demo MFE parity `/erp-form-context` (GIS shell + Modal map-info), **không** clone skin GOVOne.  
≠ Google Maps product marketing · ≠ form thuộc tính đối tượng sau vẽ · ≠ báo cáo Web. Domain: GIS map config · bind `tenBanDo` / `moTa` / `color4` / `heToaDo`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Logo + menu app GIS + search đối tượng + user | Logo **govOne** · tiêu đề **Bản đồ quản lý hạ tầng giao thông Nghệ An** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table · layer · refresh) · mũi tên thu/mở |
| **Z2a Lớp nền** | Radio basemap | **Google** (selected) · **Hành chính** · **Giao thông** · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay | Folder **Lớp tài sản** (mở) · **Tuyến đường** (checked) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Tà luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … |
| **Z3 Map nav + toolbar** | Compass/zoom + icon toolbar ngang | Pan pad · zoom +/− · Import/export · Location · Identify (i) · Select / Multi / Lasso / Polygon / Rectangle · Measure · Label (A) · fullscreen / close chrome |
| **Z4 Map canvas** | Bản đồ chính (nền dưới modal) | Google terrain Nghệ An · tuyến đỏ/xanh + nhãn · marker tím · **Bản đồ nền** (góc phải) · scale **20 km** / **10 mi** |
| **Z5 Modal Thông tin bản đồ** | Focus vision `003` — metadata map | Title **Thông tin bản đồ** · tabs **Cơ bản** (active) · **Chi tiết** · **Dịch vụ** · **Công cụ** · **Chia sẻ liên kết** · fields tab Cơ bản · nút **Đóng** · X close |
| **Z6 Filter / Footer grid** | Không grid dữ liệu cố định | Không cột bảng trên screenshot; measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| **Tên bản đồ(*)** | Text (`tenBanDo`) | Có | Modal tab Cơ bản — value «Bản đồ quản lý hạ tầng giao thông Nghệ An» |
| **Loại bản đồ** | Text / Select readonly (`textfield-1059-inputEl`) | — | Value «Bản đồ chuyên đề» trên ảnh |
| **Mô tả** | TextArea (`moTa`) | — | Empty trên ảnh |
| **Màu nền mặc định** | Color + hex (`color4`) | — | `#FFFFFF` + color picker |
| Hệ tọa độ | Text (`heToaDo`) | — | DOM label — tab khác / không hiện rõ Cơ bản trên ảnh |
| Chọn mẫu bản đồ | Text (`txtTemplateMapNam`) | — | DOM label — sibling tab/field |
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header — DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar identify/search/edit |
| Google | Radio basemap (`basemap=google`) | — | Selected trên ảnh (default parity) |
| Hành chính / Giao thông / Vệ tinh / Không nền | Radio basemap | — | Sibling Lớp nền |
| Bản đồ nền | Button shortcut | — | Floating góc map |
| Tuyến đường (+ lớp tài sản) | Checkbox layer | — | Overlay visibility |
| Diện tích / Chiều dài / … không gian | Text readonly | — | Sibling measure tools — DOM shell |

**Grid columns:** không có trên ảnh (map + modal metadata). Parity demo: Modal **Thông tin bản đồ** (tabs Cơ bản… · fields tên/loại/mô tả/màu · Đóng) · sidebar layers · basemap Google · search đối tượng · toolbar GIS. Không cột bảng cố định.

### Tính năng / hành động

**Primary — Thông tin bản đồ / shell map `003`**
- Mở modal **Thông tin bản đồ** (metadata map đang mở trên ảnh)
- Tab **Cơ bản**: xem/sửa **Tên bản đồ(*)** · **Loại bản đồ** · **Mô tả** · **Màu nền mặc định**
- Tabs sibling: **Chi tiết** · **Dịch vụ** · **Công cụ** · **Chia sẻ liên kết**
- **Đóng** / X → đóng modal · giữ map center/zoom/layers
- Upstream: mở map từ menu BẢN ĐỒ CÔNG TRÌNH / Mở bản đồ · Downstream: shell GIS đầy đủ (vẽ · identify · basemap · layer)
- Bind fields: `tenBanDo` · `moTa` · `color4` · `heToaDo` · `txtTemplateMapNam` — control-map SSOT
- ≠ form thuộc tính đối tượng sau vẽ (tab Thuộc tính sidebar) · ≠ Lưu kết quả biên tập geometry

**Header / shell (trên ảnh)**
- Menu **Bản đồ** · **Công cụ** · **Tìm kiếm**
- Search đối tượng · User / more / info / logout
- Title map / nav **Bản đồ quản lý hạ tầng giao thông Nghệ An**

**Sidebar tabs (trên ảnh + DOM)**
- **Lớp bản đồ** (active) · **Chú giải** · **Thuộc tính** · **Kết quả** · **Biểu đồ**
- Sidebar icons: info · table · layer · refresh · collapse

**Basemap / layers (trên ảnh)**
- Radio: Google (selected) · Hành chính · Giao thông · Vệ tinh · Không nền
- Checkbox tree **Lớp tài sản** (Tuyến đường + danh sách)
- Nút **Bản đồ nền**

**Map toolbar / nav (trên ảnh)**
- Pan pad + zoom · Import/export · Location · Identify · Select tools · Measure · Label · Fullscreen

**Modal tabs / footer (trên ảnh + DOM)**
- **Cơ bản** · **Chi tiết** · **Dịch vụ** · **Công cụ** · **Chia sẻ liên kết**
- **Đóng** · (sibling confirm) **Chấp nhận** · **Hủy bỏ** · **Chọn**

**Actions bổ sung từ DOM `003` / sibling shell (map demo đủ parity)**  
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · Danh sách thiết bị · Sao chép thiết bị · Sao chép tài sản · Tổng hợp · Hủy biên tập · Lưu kết quả (Ctrl+S) · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Tạo / Quản lý biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `003-ban-o-cong-trinh-giao-thong-ban-o-quan-ly-ha-tang-giao-thong-nghe-an`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (modal **Thông tin bản đồ** · fields tên/loại/mô tả/màu · tabs · Đóng · sidebar · basemap Google · search · toolbar), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM / bind:** `tenBanDo` · `moTa` · `color4` · `heToaDo` · `txtTemplateMapNam` · `textfield-1059-inputEl` → TextField/TextArea/Color · modal Pattern A
- **Remap note:** action «Bản đồ quản lý hạ tầng giao thông Nghệ An» heuristic `nav` → MemoryRouter (sai nếu hiểu là page jump); đúng: mở/focus map shell hoặc modal map-info — giữ override GIS trong `map-to-demo-mfe.mjs` khi cần
- **≠ route catalog:** đây là GIS Kind F shell + metadata modal, không list Kind B

## Status

- [x] Vision reviewed
- [x] Mapped to step context
