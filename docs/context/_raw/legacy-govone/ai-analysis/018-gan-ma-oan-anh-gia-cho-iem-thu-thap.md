# AI Vision — Gán mã đoạn đánh giá cho điểm thu thập

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `018-gan-ma-oan-anh-gia-cho-iem-thu-thap` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/018-gan-ma-oan-anh-gia-cho-iem-thu-thap.png` |
| **DOM fields** | 39 |
| **DOM labels** | 0 |
| **DOM buttons** | 8 |

## DOM inventory (đã capture)

### Labels
- _(trống — ưu tiên đọc từ ảnh)_

### Buttons / actions
- Lớp bản đồ
- Chú giải
- Thuộc tính
- Kết quả
- Biểu đồ
- Bản đồ
- Công cụ
- Tìm kiếm

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

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `018-gan-ma-oan-anh-gia-cho-iem-thu-thap.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) — shell **Bản đồ quản lý hạ tầng giao thông Nghệ An** sau khi kích hoạt tiện ích **Gán mã đoạn đánh giá cho điểm thu thập** (`btGanMaDoanDanhGia` · menuText capture «Gán mã đoạn đánh giá cho điểm thu thập»).  
Mục đích: **gán / liên kết mã đoạn đánh giá** (evaluation segment code) vào **điểm thu thập** trên bản đồ — điểm candidate (marker tím) nhận mã đoạn đã có (thường sau khi tạo đoạn 100m / chuẩn hóa lý trình) để phục vụ đánh giá chất lượng mặt đường (PCI / CLMD).  
Khác **Tạo đoạn đánh giá 100m** (`017` · `btTaoDoan100m` = sinh geometry đoạn mới) và **Gộp đoạn multiline** (`016` · `btGopDoanDuong` = merge geometry): tool này = **assign code** (attribute link), không tạo/gộp geometry. Upstream thường: `014` Chuẩn hóa cột Km · `017` Tạo đoạn 100m. Downstream: `019` **Tự động đánh giá chất lượng mặt đường** (`btTinhToanCLMD`). Kết quả biên tập cần **Lưu kết quả (Ctrl+S)** / có thể **Hủy biên tập**.  
Ảnh capture lúc **map đã load đầy đủ**: basemap **Google** · lớp **Tuyến đường** bật (đường đỏ / xanh + nhãn `QL …` · `DT …`) · cụm **marker tím** (SE, gần TP Vinh) — điểm thu thập candidate cần gán mã · sidebar «Lớp bản đồ» có tree lớp nền + lớp chuyên đề.  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern, **không** clone skin GOVOne.  
Sibling shell: `002-ban-o-cong-trinh-giao-thong` / `003-…nghe-an`; sibling tools: `014` · `015` · `016` · `017` · `019`. Liên quan domain: `pavement-section` (đoạn mặt đường / đánh giá).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table/grid · layer · refresh) · mũi tên thu/mở sidebar |
| **Z2a Lớp nền** | Radio basemap trong tab Lớp bản đồ | **Google** (selected) · **Hành chính** · **Giao thông** · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay | Folder **Lớp tài sản** (mở) · checkbox **Tuyến đường** (checked — ngữ cảnh tuyến chứa điểm thu thập) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Ta luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … |
| **Z3 Map nav + toolbar** | Compass/zoom + thanh icon ngang trên canvas | Pan pad (N/S/E/W + center) · zoom +/− · Import/export · Location pin · Identify (i) · Select / Multi-select / Lasso / Polygon / Rectangle select · Measure (ruler) · Search/Label (A) — tool **Gán mã đoạn đánh giá** kích hoạt từ menu **Công cụ** (`btGanMaDoanDanhGia`); chọn điểm thu thập + đoạn đánh giá rồi gán mã |
| **Z4 Map canvas** | Bản đồ chính (đã có nền + lớp) | Google terrain Nghệ An · mạng tuyến đỏ/xanh · nhãn lý trình (vd. `QL 16 (Km278+00 – Km406+00)`, `DT 544 (Km0+00 – Km160+00)`, `QL 7`, `DT 543B`, `QL 48`, `QL 1A`, `DT 534D`) · cụm **marker tím** (SE) — điểm thu thập cần gán mã đoạn · **Bản đồ nền** (góc phải trên) · fullscreen · scale bar **20 km** / **10 mi** |
| **Z5 Assign-code workflow (runtime)** | Flow gán mã đoạn → điểm | (1) bật lớp **Tuyến đường** (và lớp điểm thu thập nếu có) · (2) kích hoạt **Gán mã đoạn đánh giá cho điểm thu thập** · (3) chọn **điểm thu thập** trên map (marker tím) · (4) chọn / nhập **mã đoạn đánh giá** (lookup đoạn đã tạo) · (5) thực hiện gán · (6) **Lưu kết quả** / **Hủy biên tập**; tab **Thuộc tính** / **Kết quả** có thể hiện điểm + mã đoạn vừa gán |
| **Z6 Filter / Footer grid** | Không grid dữ liệu trên ảnh | Không cột bảng · không pager; lớp dữ liệu qua `ddlLopDuLieu` (DOM) khi identify/search; sibling measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi identify/search / trước khi gán mã |
| Lớp nền | Radio / nav | — | Trên ảnh: Google (active) · Hành chính · Giao thông · Vệ tinh · Không nền |
| Tuyến đường | Checkbox layer | Có (ngữ cảnh) | Lớp chuyên đề đang bật — tuyến chứa điểm thu thập / đoạn đánh giá |
| (các lớp tài sản khác) | Checkbox layer | — | Unchecked trên ảnh — không bắt buộc cho tool gán mã |
| Mã đoạn đánh giá | Lookup / Select (runtime) | Có (để gán) | Runtime assign — chọn đoạn đã có (sau `017` / chuẩn hóa Km); không thấy control riêng trên ảnh shell |
| Điểm thu thập | Map select / marker | Có (để gán) | Marker tím trên ảnh — đối tượng nhận mã đoạn |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |

**Grid columns:** không có trên ảnh (map + assign workflow). Parity demo: toolbar tool **Gán mã đoạn đánh giá cho điểm thu thập** · select collection point · lookup/assign evaluation segment code · Lưu / Hủy biên tập · sidebar layers · search đối tượng · basemap switcher. Optional kết quả: id điểm · mã đoạn · Km / tọa độ (tab Kết quả / Thuộc tính).

### Tính năng / hành động

**Primary — Gán mã đoạn đánh giá cho điểm thu thập (focus vision `018`)**
- Kích hoạt **Gán mã đoạn đánh giá cho điểm thu thập** (`btGanMaDoanDanhGia`) từ menu **Công cụ** / toolbar tiện ích
- Đảm bảo lớp **Tuyến đường** (và lớp điểm thu thập nếu có) bật
- Dùng **Select** trên map toolbar để chọn **điểm thu thập** (candidate — marker tím trên ảnh)
- Chọn / lookup **mã đoạn đánh giá** tương ứng (đoạn đã tạo — sibling `017`)
- Thực hiện **gán mã** → liên kết attribute điểm ↔ mã đoạn
- **Lưu kết quả (Ctrl+S)** để commit biên tập · hoặc **Hủy biên tập** để bỏ
- (Tuỳ runtime) xem thuộc tính điểm / kết quả gán ở tab **Thuộc tính** / **Kết quả**
- Phân biệt với **Tạo đoạn đánh giá 100m** (`017` = create segments) · **Gộp đoạn multiline** (`016`) · **Tự động đánh giá CL mặt đường** (`019`) · **Chuẩn hóa cột Km** (`014`)

**Header / shell (trên ảnh)**
- Menu **Bản đồ** · **Công cụ** · **Tìm kiếm**
- Search đối tượng (ô «Nhập thông tin đối tượng…» + filter)
- User / more / info / logout

**Sidebar tabs (trên ảnh + DOM)**
- **Lớp bản đồ** (active)
- **Chú giải**
- **Thuộc tính**
- **Kết quả**
- **Biểu đồ** (DOM button — có thể ẩn/collapsed trên ảnh)
- Sidebar icons: info · table · layer · refresh
- Collapse/expand sidebar

**Basemap / layers (trên ảnh)**
- Radio: Google · Hành chính · Giao thông · Vệ tinh · Không nền
- Checkbox tree **Lớp tài sản** (Tuyến đường + danh sách unchecked)
- Nút **Bản đồ nền** (floating map)

**Map toolbar / nav (trên ảnh)**
- Pan pad + zoom
- Import/export · Location · Identify · Select / Multi-select tools · Measure · Label
- Fullscreen · scale bar
- Close / shell chrome

**Actions bổ sung từ sibling DOM `002`/`003` (cùng shell — map demo đủ parity)**  
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · **Tạo đoạn đánh giá 100m** · **Tự động đánh giá CL mặt đường** · Danh sách / Sao chép thiết bị · Sao chép tài sản · Tổng hợp · **Hủy biên tập** · **Lưu kết quả (Ctrl+S)** · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (assign evaluation segment code to collection point · select point marker · lookup segment code · Lưu/Hủy biên tập · basemap · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM id:** `btGanMaDoanDanhGia` · control-map: «Gán mã đoạn đánh giá cho điểm thu thập» → GIS toolbar · select collection point · assign segment code · save/cancel edit
- **Remap note:** control-map heuristic kind=`nav` map «Gán mã đoạn đánh giá…» → «Điều hướng» (sai); đúng: GIS toolbar tool (`btGanMaDoanDanhGia`) — override trong `map-to-demo-mfe.mjs`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
