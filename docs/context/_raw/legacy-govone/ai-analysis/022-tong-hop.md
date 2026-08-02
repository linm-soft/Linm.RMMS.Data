# AI Vision — Tổng hợp

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `022-tong-hop` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/022-tong-hop.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `022-tong-hop.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) — shell **Bản đồ quản lý hạ tầng giao thông Nghệ An** sau khi kích hoạt tiện ích **Tổng hợp** (`toolTongHopThietBi` · menuText capture «Tổng hợp»).  
Mục đích: **tổng hợp / aggregate thiết bị GIS** theo lớp chuyên đề đã bật, tuyến, hoặc phạm vi chọn trên map — đếm / nhóm theo loại tài sản (Cột km · Cầu · Biển báo · Hộ lan · …) → bảng / panel kết quả (tab **Kết quả** hoặc **Biểu đồ**), không copy geometry và không chỉ browse list từng dòng.  
Khác **Danh sách thiết bị** (`020` · `toolThietBi` = list/browse) và **Sao chép thiết bị** (`021` · `toolSaoChepThietBi` = copy): tool này = **aggregate / summary**. Khác báo cáo Web «Bảng tổng hợp nhanh» / «Báo cáo tổng hợp» (slug `reports` / `maintenance`) — đây là **tool trên GIS shell**. Downstream thường: xem tab **Kết quả** / **Biểu đồ** · click nhóm → highlight map · Identify / Thuộc tính · optional xuất.  
Ảnh capture lúc **map đã load đầy đủ**: basemap **Google** · lớp **Tuyến đường** bật (đường đỏ / xanh + nhãn `QL …` · `DT …`) · cụm **marker tím** (SE, gần TP Vinh) — điểm/thiết bị trong phạm vi tổng hợp · sidebar «Lớp bản đồ» có tree lớp nền + lớp chuyên đề (nhiều lớp tài sản = loại thiết bị).  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern, **không** clone skin GOVOne.  
≠ `inventory` (Vật tư và thiết bị kho) · ≠ report «Tổng hợp» Web. Sibling shell: `002` / `003`; sibling tools: `020` Danh sách TB · `021` Sao chép TB · Identify / search đối tượng. Liên quan domain: Asset (điểm thiết bị trên tuyến).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table/grid · layer · refresh) · mũi tên thu/mở sidebar |
| **Z2a Lớp nền** | Radio basemap trong tab Lớp bản đồ | **Google** (selected) · **Hành chính** · **Giao thông** · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay (= loại thiết bị GIS — nguồn aggregate) | Folder **Lớp tài sản** (mở) · checkbox **Tuyến đường** (checked) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Tà luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … (bodySample còn: Nền, lề đường · Kết cấu mặt đường · Rãnh dọc · Đoạn đường · Lớp bảo trì · Gói bảo trì…) |
| **Z3 Map nav + toolbar** | Compass/zoom + thanh icon ngang trên canvas | Pan pad (N/S/E/W + center) · zoom +/− · Import/export · Location pin · Identify (i) · Select / Multi-select / Lasso / Polygon / Rectangle select · Measure (ruler) · Search/Label (A) — tool **Tổng hợp** kích hoạt từ menu **Công cụ** (`toolTongHopThietBi`); aggregate thiết bị theo lớp/phạm vi |
| **Z4 Map canvas** | Bản đồ chính (đã có nền + lớp) | Google terrain Nghệ An · mạng tuyến đỏ/xanh · nhãn lý trình (vd. `QL.7 (Km278+00-Km406+00)`, `DT.543C`, `QL.48`, …) · cụm **marker tím** (SE) — điểm/thiết bị trong phạm vi · **Bản đồ nền** (góc phải trên) · fullscreen · scale bar **20 km** / **10 mi** |
| **Z5 Aggregate workflow (runtime)** | Flow tổng hợp thiết bị | (1) bật lớp **Tuyến đường** và/hoặc lớp tài sản (= loại TB) cần tổng hợp · (2) (tuỳ chọn) chọn phạm vi bằng select box / polygon / rectangle trên map · (3) kích hoạt **Tổng hợp** · (4) chọn **Lớp dữ liệu** (`ddlLopDuLieu`) nếu cần · (5) xem bảng / nhóm aggregate ở tab **Kết quả** hoặc **Biểu đồ** · (6) click nhóm / dòng → highlight map + **Thuộc tính** / drill-down list |
| **Z6 Filter / Footer grid** | Không grid dữ liệu cố định trên ảnh shell | Không cột bảng cố định trên screenshot; runtime aggregate (tab Kết quả / Biểu đồ) · lớp dữ liệu qua `ddlLopDuLieu` (DOM); sibling measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi aggregate / identify / search |
| Lớp nền | Radio / nav | — | Trên ảnh: Google (active) · Hành chính · Giao thông · Vệ tinh · Không nền |
| Tuyến đường | Checkbox layer | Có (ngữ cảnh) | Lớp chuyên đề đang bật — ngữ cảnh tuyến chứa thiết bị |
| (các lớp tài sản / loại TB) | Checkbox layer | Có (để aggregate đúng loại) | Cột km · Cầu · Biển báo · Hộ lan · … — nguồn đếm/nhóm; unchecked trên ảnh |
| Phạm vi không gian | Map select (box / polygon / lasso) | — | Runtime filter phạm vi trước/trong Tổng hợp |
| Kết quả tổng hợp (rows / groups) | Grid / chart (tab Kết quả · Biểu đồ) | — | Runtime output sau `toolTongHopThietBi` — không thấy cột cố định trên ảnh shell |
| Thuộc tính / drill-down | Readonly / Thuộc tính | — | Click nhóm/dòng → highlight map + tab **Thuộc tính** / list chi tiết |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |

**Grid columns:** không có trên ảnh (map + aggregate workflow). Parity demo: toolbar tool **Tổng hợp** · chọn lớp tài sản / phạm vi · chạy aggregate → tab **Kết quả** / **Biểu đồ** · nhóm→map highlight + Thuộc tính · basemap · sidebar layers · search đối tượng. Optional cột aggregate (demo): Loại thiết bị · Tuyến · Số lượng · Km từ–đến · Đơn vị quản lý.

### Tính năng / hành động

**Primary — Tổng hợp (focus vision `022`)**
- Kích hoạt **Tổng hợp** (`toolTongHopThietBi`) từ menu **Công cụ** / toolbar tiện ích
- Bật lớp **Tuyến đường** và/hoặc lớp tài sản (= loại thiết bị) cần tổng hợp
- (Tuỳ chọn) chọn **phạm vi** trên map (box / polygon / lasso) hoặc **Lớp dữ liệu** (`ddlLopDuLieu`)
- Chạy **aggregate** → bảng / nhóm ở tab **Kết quả** · tuỳ chọn **Biểu đồ**
- Click nhóm / dòng → **highlight** trên map + xem **Thuộc tính** / drill-down list thiết bị
- Phân biệt với **Danh sách thiết bị** (`020` = list) · **Sao chép thiết bị** (`021` = copy) · **Sao chép tài sản** · module kho **`inventory`** · báo cáo Web «Tổng hợp» (`reports` / `maintenance`)
- Downstream: Identify · search đối tượng · Danh sách thiết bị (drill-down)

**Header / shell (trên ảnh)**
- Menu **Bản đồ** · **Công cụ** · **Tìm kiếm**
- Search đối tượng (ô «Nhập thông tin đối tượng…» + filter)
- User / more / info / logout

**Sidebar tabs (trên ảnh + DOM)**
- **Lớp bản đồ** (active)
- **Chú giải**
- **Thuộc tính**
- **Kết quả** (output aggregate)
- **Biểu đồ** (DOM button — chart view kết quả tổng hợp; có thể ẩn/collapsed trên ảnh)
- Sidebar icons: info · table · layer · refresh
- Collapse/expand sidebar

**Basemap / layers (trên ảnh)**
- Radio: Google · Hành chính · Giao thông · Vệ tinh · Không nền
- Checkbox tree **Lớp tài sản** (Tuyến đường + danh sách unchecked = các loại thiết bị nguồn aggregate)
- Nút **Bản đồ nền** (floating map)

**Map toolbar / nav (trên ảnh)**
- Pan pad + zoom
- Import/export · Location · Identify · Select / Multi-select tools · Measure · Label
- Fullscreen · scale bar
- Close / shell chrome

**Actions bổ sung từ sibling DOM `002`/`003` (cùng shell — map demo đủ parity)**  
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · **Danh sách thiết bị** · **Sao chép thiết bị** · Sao chép tài sản · **Hủy biên tập** · **Lưu kết quả (Ctrl+S)** · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (aggregate toolbar · chọn lớp tài sản / phạm vi · Kết quả / Biểu đồ · nhóm→map highlight + Thuộc tính · basemap · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM id:** `toolTongHopThietBi` · control-map: «Tổng hợp» → GIS toolbar · aggregate devices by layer/scope · Kết quả / Biểu đồ · drill-down map
- **Remap note:** control-map heuristic kind=`nav` map «Tổng hợp» → «Điều hướng» (sai); đúng: GIS toolbar tool (`toolTongHopThietBi`) — override trong `map-to-demo-mfe.mjs`
- **≠ inventory:** không map sang module kho VT
- **≠ reports/maintenance «Tổng hợp» Web:** tool GIS shell, không phải màn báo cáo HTML

## Status

- [x] Vision reviewed
- [x] Mapped to step context
