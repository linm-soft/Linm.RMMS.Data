# AI Vision — Gộp đoạn đường multiline

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `016-gop-oan-uong-multiline` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/016-gop-oan-uong-multiline.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `016-gop-oan-uong-multiline.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) — shell **Bản đồ quản lý hạ tầng giao thông Nghệ An** sau khi kích hoạt tiện ích **Gộp đoạn đường multiline** (`btGopDoanDuong` · menuText capture «Gộp đoạn đường multiline»).  
Mục đích: **chọn ≥2 đoạn/tuyến đường liền kề** (polyline / MultiLineString trên lớp **Tuyến đường**) rồi **gộp geometry** thành một đoạn liên tục (merge vertices · nối đầu–đuôi tại điểm tiếp xúc) — phục vụ chuẩn hóa mạng tuyến sau khi số hóa/tách đoạn.  
Khác **Xem hướng** (`015` · `btXemHuongDoanDuong` = view-only overlay) và **Thiết lập hướng** (set hướng số hóa): tool này = **edit geometry merge** (biên tập); kết quả cần **Lưu kết quả (Ctrl+S)** / có thể **Hủy biên tập**.  
Ảnh capture lúc **map đã load đầy đủ**: basemap **Google** · lớp **Tuyến đường** bật (đường đỏ / xanh + nhãn `QL … (Km… – Km…)` · `DT …`) · cụm **marker tím** (SE) — điểm nút / đoạn đang chọn hoặc candidate merge · sidebar «Lớp bản đồ» có tree lớp nền + lớp chuyên đề.  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern, **không** clone skin GOVOne.  
Sibling shell: `002-ban-o-cong-trinh-giao-thong` / `003-…nghe-an`; sibling tools: `014-chuan-hoa-cot-km` · `015-xem-huong-oan-uong` · menu **Thiết lập hướng** · `017-tao-oan-anh-gia-100m`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table/grid · layer · refresh) · mũi tên thu/mở sidebar |
| **Z2a Lớp nền** | Radio basemap trong tab Lớp bản đồ | **Google** (selected) · **Hành chính** · **Giao thông** · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay | Folder **Lớp tài sản** (mở) · checkbox **Tuyến đường** (checked — đối tượng merge) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Ta luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … |
| **Z3 Map nav + toolbar** | Compass/zoom + thanh icon ngang trên canvas | Pan pad (N/S/E/W + center) · zoom +/− · Import/export · Location pin · Identify (i) · Select / Multi-select / Lasso / Polygon / Rectangle select · Measure (ruler) · Text/Label (A) — tool **Gộp đoạn multiline** kích hoạt từ menu **Công cụ** (`btGopDoanDuong`); dùng select tools để chọn nhiều đoạn trước khi gộp |
| **Z4 Map canvas** | Bản đồ chính (đã có nền + lớp) | Google terrain Nghệ An · mạng tuyến đỏ/xanh · nhãn lý trình (vd. `QL 16 (Km278+00 – Km406+00)`, `DT 544 (Km0+00 – Km160+00)`, `QL 7`, `DT 543B`, `QL 48`) · cụm marker tím (SE) — đoạn/nút đang chọn hoặc candidate merge · **Bản đồ nền** (góc phải trên) · fullscreen · scale bar **20 km** / **10 mi** |
| **Z5 Merge workflow (runtime)** | Flow gộp multiline | (1) bật lớp **Tuyến đường** · (2) kích hoạt **Gộp đoạn đường multiline** · (3) multi-select ≥2 đoạn liền kề · (4) xác nhận gộp → geometry mới · (5) **Lưu kết quả** / **Hủy biên tập**; tab **Thuộc tính** / **Kết quả** có thể hiện thuộc tính đoạn sau merge |
| **Z6 Filter / Footer grid** | Không grid dữ liệu trên ảnh | Không cột bảng · không pager; lớp dữ liệu qua `ddlLopDuLieu` (DOM) khi identify/search; sibling measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi identify/search / trước merge |
| Lớp nền | Radio / nav | — | Trên ảnh: Google (active) · Hành chính · Giao thông · Vệ tinh · Không nền |
| Tuyến đường | Checkbox layer | Có (để merge) | Lớp chuyên đề đang bật — đối tượng chính để gộp đoạn multiline |
| (các lớp tài sản khác) | Checkbox layer | — | Unchecked trên ảnh — không bắt buộc cho tool gộp |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS; sau merge chiều dài đoạn gộp có thể cập nhật |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |

**Grid columns:** không có (map + merge selection). Parity demo: toolbar tool **Gộp đoạn đường multiline** · multi-select ≥2 polyline trên lớp Tuyến đường · merge geometry · Lưu / Hủy biên tập · sidebar layers · search đối tượng · basemap switcher.

### Tính năng / hành động

**Primary — Gộp đoạn đường multiline (focus vision `016`)**
- Kích hoạt **Gộp đoạn đường multiline** (`btGopDoanDuong`) từ menu **Công cụ** / toolbar tiện ích
- Đảm bảo lớp **Tuyến đường** bật
- Dùng **Select / Multi-select / Lasso / Polygon** trên map toolbar để chọn **≥2 đoạn** liền kề (candidate — marker tím trên ảnh)
- Thực hiện **gộp** → một geometry liên tục (MultiLineString → LineString hoặc LineString nối)
- **Lưu kết quả (Ctrl+S)** để commit biên tập · hoặc **Hủy biên tập** để bỏ
- (Tuỳ runtime) xem thuộc tính đoạn sau merge ở tab **Thuộc tính** / **Kết quả**
- Phân biệt với **Xem hướng** (`015` · view-only) · **Chuẩn hóa cột Km** (`014`) · **Thiết lập hướng** · **Tạo đoạn đánh giá 100m** (`017`)

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
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · Danh sách / Sao chép thiết bị · Sao chép tài sản · Tổng hợp · **Hủy biên tập** · **Lưu kết quả (Ctrl+S)** · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (merge multiline road segments · multi-select ≥2 polylines · layer Tuyến đường · Lưu/Hủy biên tập · basemap · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM id:** `btGopDoanDuong` · control-map: «Gộp đoạn đường multiline» → GIS toolbar · multi-select route segments · merge geometry · save/cancel edit

## Status

- [x] Vision reviewed
- [x] Mapped to step context
