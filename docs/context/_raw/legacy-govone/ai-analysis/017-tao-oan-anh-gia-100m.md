# AI Vision — Tạo đoạn đánh giá 100m

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `017-tao-oan-anh-gia-100m` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/017-tao-oan-anh-gia-100m.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `017-tao-oan-anh-gia-100m.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) — shell **Bản đồ quản lý hạ tầng giao thông Nghệ An** sau khi kích hoạt tiện ích **Tạo đoạn đánh giá 100m** (`btTaoDoan100m` · menuText capture «Tạo đoạn đánh giá 100m»).  
Mục đích: trên lớp **Tuyến đường**, **chia / sinh các đoạn đánh giá dài 100 m** dọc theo geometry tuyến (chainage-based segmentation) — phục vụ thu thập / đánh giá chất lượng mặt đường theo đoạn chuẩn (PCI / CLMD).  
Khác **Gộp đoạn multiline** (`016` · `btGopDoanDuong` = merge geometry) và **Gán mã đoạn đánh giá** (`018` · `btGanMaDoanDanhGia` = gán mã cho điểm thu thập): tool này = **create** các đoạn 100m mới (biên tập); kết quả cần **Lưu kết quả (Ctrl+S)** / có thể **Hủy biên tập**. Downstream: `019` **Tự động đánh giá chất lượng mặt đường** (`btTinhToanCLMD`).  
Ảnh capture lúc **map đã load đầy đủ**: basemap **Google** · lớp **Tuyến đường** bật (đường đỏ / xanh + nhãn `QL …` · `DT …`) · cụm **marker tím** (SE) — điểm/đoạn candidate hoặc đoạn đánh giá vừa tạo · sidebar «Lớp bản đồ» có tree lớp nền + lớp chuyên đề.  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern, **không** clone skin GOVOne.  
Sibling shell: `002-ban-o-cong-trinh-giao-thong` / `003-…nghe-an`; sibling tools: `014` · `015` · `016` · `018` · `019`. Liên quan domain: `pavement-section` (đoạn mặt đường / đánh giá).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table/grid · layer · refresh) · mũi tên thu/mở sidebar |
| **Z2a Lớp nền** | Radio basemap trong tab Lớp bản đồ | **Google** (selected) · **Hành chính** · **Giao thông** · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay | Folder **Lớp tài sản** (mở) · checkbox **Tuyến đường** (checked — tuyến nguồn để chia đoạn 100m) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Ta luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … |
| **Z3 Map nav + toolbar** | Compass/zoom + thanh icon ngang trên canvas | Pan pad (N/S/E/W + center) · zoom +/− · Import/export · Location pin · Identify (i) · Select / Multi-select / Lasso / Polygon / Rectangle select · Measure (ruler) · Search/Label (A) — tool **Tạo đoạn đánh giá 100m** kích hoạt từ menu **Công cụ** (`btTaoDoan100m`); chọn tuyến / đoạn nguồn rồi sinh các đoạn 100m |
| **Z4 Map canvas** | Bản đồ chính (đã có nền + lớp) | Google terrain Nghệ An · mạng tuyến đỏ/xanh · nhãn lý trình (vd. `QL 16 (Km278+00 – Km406+00)`, `DT 544 (Km0+00 – Km160+00)`, `QL 7`, `DT 543B`, `QL 48`) · cụm marker tím (SE) — điểm/đoạn đánh giá candidate · **Bản đồ nền** (góc phải trên) · fullscreen · scale bar **20 km** / **10 mi** |
| **Z5 Create-100m workflow (runtime)** | Flow tạo đoạn đánh giá | (1) bật lớp **Tuyến đường** · (2) kích hoạt **Tạo đoạn đánh giá 100m** · (3) chọn tuyến/đoạn nguồn trên map · (4) hệ thống sinh các đoạn **100 m** theo chainage · (5) **Lưu kết quả** / **Hủy biên tập**; tab **Thuộc tính** / **Kết quả** có thể liệt kê đoạn vừa tạo (mã đoạn · Km từ–đến · chiều dài) |
| **Z6 Filter / Footer grid** | Không grid dữ liệu trên ảnh | Không cột bảng · không pager; lớp dữ liệu qua `ddlLopDuLieu` (DOM) khi identify/search; sibling measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi identify/search / trước khi tạo đoạn |
| Lớp nền | Radio / nav | — | Trên ảnh: Google (active) · Hành chính · Giao thông · Vệ tinh · Không nền |
| Tuyến đường | Checkbox layer | Có (để tạo đoạn) | Lớp chuyên đề đang bật — tuyến nguồn chia đoạn đánh giá 100m |
| (các lớp tài sản khác) | Checkbox layer | — | Unchecked trên ảnh — không bắt buộc cho tool tạo đoạn 100m |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS; sau tạo đoạn có thể đọc chiều dài đoạn (~100 m) |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |

**Grid columns:** không có trên ảnh (map + create workflow). Parity demo: toolbar tool **Tạo đoạn đánh giá 100m** · select route polyline · generate 100m segments · Lưu / Hủy biên tập · sidebar layers · search đối tượng · basemap switcher. Optional kết quả: mã đoạn · Km từ–đến · chiều dài (tab Kết quả / Thuộc tính).

### Tính năng / hành động

**Primary — Tạo đoạn đánh giá 100m (focus vision `017`)**
- Kích hoạt **Tạo đoạn đánh giá 100m** (`btTaoDoan100m`) từ menu **Công cụ** / toolbar tiện ích
- Đảm bảo lớp **Tuyến đường** bật
- Dùng **Select** trên map toolbar để chọn **tuyến / đoạn nguồn** (candidate — marker tím trên ảnh)
- Thực hiện **tạo** → sinh các đoạn đánh giá **100 m** dọc chainage
- **Lưu kết quả (Ctrl+S)** để commit biên tập · hoặc **Hủy biên tập** để bỏ
- (Tuỳ runtime) xem danh sách / thuộc tính đoạn ở tab **Thuộc tính** / **Kết quả**
- Phân biệt với **Gộp đoạn multiline** (`016`) · **Gán mã đoạn đánh giá** (`018`) · **Tự động đánh giá CL mặt đường** (`019`) · **Chuẩn hóa cột Km** (`014`)

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
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · **Gán mã đoạn đánh giá** · **Tự động đánh giá CL mặt đường** · Danh sách / Sao chép thiết bị · Sao chép tài sản · Tổng hợp · **Hủy biên tập** · **Lưu kết quả (Ctrl+S)** · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (create 100m evaluation segments along route · select route polyline · generate segments · Lưu/Hủy biên tập · basemap · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM id:** `btTaoDoan100m` · control-map: «Tạo đoạn đánh giá 100m» → GIS toolbar · select route · generate 100m segments · save/cancel edit
- **Remap note:** control-map heuristic kind=`create` map «Tạo đoạn đánh giá 100m» → «Tạo mới / Thêm» (sai); đúng: GIS toolbar tool (`btTaoDoan100m`) — override trong `map-to-demo-mfe.mjs`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
