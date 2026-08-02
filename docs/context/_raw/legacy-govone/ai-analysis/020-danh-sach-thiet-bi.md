# AI Vision — Danh sách thiết bị

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `020-danh-sach-thiet-bi` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/020-danh-sach-thiet-bi.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `020-danh-sach-thiet-bi.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) — shell **Bản đồ quản lý hạ tầng giao thông Nghệ An** sau khi kích hoạt tiện ích **Danh sách thiết bị** (`toolThietBi` · menuText capture «Danh sách thiết bị»).  
Mục đích: **mở / xem danh sách thiết bị (asset point/line trên bản đồ)** theo lớp chuyên đề đã bật hoặc phạm vi đang chọn — bảng kết quả / panel list + highlight marker trên map (không phải module kho VT `inventory`).  
Khác **Sao chép thiết bị** (`021` · `toolSaoChepThietBi` = copy geometry/thuộc tính thiết bị) và **Tổng hợp** (`022` · `toolTongHopThietBi` = aggregate): tool này = **list / browse** thiết bị GIS. Downstream thường: chọn dòng → Identify / Thuộc tính · Sao chép thiết bị · Sao chép tài sản.  
Ảnh capture lúc **map đã load đầy đủ**: basemap **Google** · lớp **Tuyến đường** bật (đường đỏ / xanh + nhãn `QL …` · `DT …`) · cụm **marker tím** (SE, gần TP Vinh) — candidate thiết bị / điểm trên map · sidebar «Lớp bản đồ» có tree lớp nền + lớp chuyên đề (nhiều lớp tài sản = loại thiết bị: Cột km · Cầu · Biển báo · Hộ lan · …).  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern, **không** clone skin GOVOne.  
≠ `inventory` (Vật tư và thiết bị kho) — ghi chú SSOT inventory.md. Sibling shell: `002` / `003`; sibling tools: `021` Sao chép TB · `022` Tổng hợp · Identify / search đối tượng. Liên quan domain: Asset (điểm thiết bị trên tuyến).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table/grid · layer · refresh) · mũi tên thu/mở sidebar |
| **Z2a Lớp nền** | Radio basemap trong tab Lớp bản đồ | **Google** (selected) · **Hành chính** · **Giao thông** · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay (= loại thiết bị GIS) | Folder **Lớp tài sản** (mở) · checkbox **Tuyến đường** (checked) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Ta luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … |
| **Z3 Map nav + toolbar** | Compass/zoom + thanh icon ngang trên canvas | Pan pad (N/S/E/W + center) · zoom +/− · Import/export · Location pin · Identify (i) · Select / Multi-select / Lasso / Polygon / Rectangle select · Measure (ruler) · Search/Label (A) — tool **Danh sách thiết bị** kích hoạt từ menu **Công cụ** (`toolThietBi`); mở list thiết bị theo lớp/phạm vi |
| **Z4 Map canvas** | Bản đồ chính (đã có nền + lớp) | Google terrain Nghệ An · mạng tuyến đỏ/xanh · nhãn lý trình (vd. `QL 16 (Km278+00 – Km406+00)`, `DT 544 (Km0+00 – Km160+00)`, `QL 7`, `DT 543B`, `QL 48`, `QL 1A`, `DT 534D`) · cụm **marker tím** (SE) — điểm/thiết bị trên map · **Bản đồ nền** (góc phải trên) · fullscreen · scale bar **20 km** / **10 mi** |
| **Z5 Device-list workflow (runtime)** | Flow danh sách thiết bị | (1) bật lớp tài sản / loại thiết bị cần xem (và/hoặc **Tuyến đường**) · (2) kích hoạt **Danh sách thiết bị** · (3) chọn lớp dữ liệu (`ddlLopDuLieu` nếu cần) / phạm vi · (4) xem bảng list ở tab **Kết quả** hoặc panel list · (5) click dòng → highlight map + tab **Thuộc tính** · (6) optional: **Sao chép thiết bị** / Identify / search |
| **Z6 Filter / Footer grid** | Không grid dữ liệu cố định trên ảnh shell | Không cột bảng cố định trên screenshot; runtime list thiết bị (tab Kết quả) · lớp dữ liệu qua `ddlLopDuLieu` (DOM); sibling measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi list / identify / search thiết bị |
| Lớp nền | Radio / nav | — | Trên ảnh: Google (active) · Hành chính · Giao thông · Vệ tinh · Không nền |
| Tuyến đường | Checkbox layer | Có (ngữ cảnh) | Lớp chuyên đề đang bật — ngữ cảnh tuyến chứa thiết bị |
| (các lớp tài sản / loại TB) | Checkbox layer | Có (để list đúng loại) | Cột km · Cầu · Biển báo · Hộ lan · … — nguồn dữ liệu list; unchecked trên ảnh |
| Danh sách thiết bị (rows) | Grid / list (tab Kết quả) | — | Runtime output sau `toolThietBi` — không thấy cột cố định trên ảnh shell |
| Thuộc tính thiết bị | Readonly / Thuộc tính | — | Click row / Identify → tab **Thuộc tính** |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |

**Grid columns:** không có trên ảnh (map + device-list workflow). Parity demo: toolbar tool **Danh sách thiết bị** · chọn lớp tài sản / phạm vi · mở list (tab Kết quả) · row → highlight map + Thuộc tính · basemap · sidebar layers · search đối tượng. Optional cột list (demo): Mã / Loại thiết bị · Tuyến · Km · Tọa độ · Trạng thái.

### Tính năng / hành động

**Primary — Danh sách thiết bị (focus vision `020`)**
- Kích hoạt **Danh sách thiết bị** (`toolThietBi`) từ menu **Công cụ** / toolbar tiện ích
- Bật lớp **Tuyến đường** và/hoặc lớp tài sản (= loại thiết bị) cần liệt kê
- (Tuỳ chọn) chọn **Lớp dữ liệu** (`ddlLopDuLieu`) hoặc phạm vi select trên map
- Mở **danh sách thiết bị** (tab **Kết quả** / panel list) — browse / filter trong list
- Click dòng → **highlight** trên map + xem **Thuộc tính**
- Phân biệt với **Sao chép thiết bị** (`021` = copy) · **Tổng hợp** (`022` = aggregate) · **Sao chép tài sản** · module kho **`inventory`** (≠ tool GIS này)
- Downstream: Identify · search đối tượng · Sao chép thiết bị

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
- Checkbox tree **Lớp tài sản** (Tuyến đường + danh sách unchecked = các loại thiết bị)
- Nút **Bản đồ nền** (floating map)

**Map toolbar / nav (trên ảnh)**
- Pan pad + zoom
- Import/export · Location · Identify · Select / Multi-select tools · Measure · Label
- Fullscreen · scale bar
- Close / shell chrome

**Actions bổ sung từ sibling DOM `002`/`003` (cùng shell — map demo đủ parity)**  
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · **Sao chép thiết bị** · Sao chép tài sản · **Tổng hợp** · Hủy biên tập · Lưu kết quả (Ctrl+S) · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (device list toolbar · chọn lớp tài sản · list tab Kết quả · row→map highlight + Thuộc tính · basemap · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM id:** `toolThietBi` · control-map: «Danh sách thiết bị» → GIS toolbar · open device/asset list by layer/scope · row select → map highlight
- **Remap note:** control-map heuristic kind=`nav` map «Danh sách thiết bị» → «Điều hướng» (sai); đúng: GIS toolbar tool (`toolThietBi`) — override trong `map-to-demo-mfe.mjs`
- **≠ inventory:** không map sang module kho VT

## Status

- [x] Vision reviewed
- [x] Mapped to step context
