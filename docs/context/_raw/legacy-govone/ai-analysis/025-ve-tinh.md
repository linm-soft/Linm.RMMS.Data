# AI Vision — Vệ tinh

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `025-ve-tinh` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/025-ve-tinh.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `025-ve-tinh.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) — shell **Bản đồ quản lý hạ tầng giao thông Nghệ An** với focus action **Vệ tinh** (basemap satellite · radio trong nhóm **Lớp nền** / tab **Lớp bản đồ**).  
Mục đích: **đổi nền bản đồ sang ảnh vệ tinh** — thay tile/style nền (Google terrain / Hành chính / Giao thông / Không nền → **satellite**), giữ overlay lớp chuyên đề (vd. Tuyến đường) + marker + zoom/center hiện tại. Không biên tập geometry; không mở form; không commit dirty.  
Khác sibling radio cùng nhóm: **Google** (default parity) · **Hành chính** · **Giao thông** · **Không nền**. Khác nút floating **Bản đồ nền** (shortcut góc map — cùng mục đích đổi base, UI khác radio sidebar). ≠ lớp chuyên đề checkbox (Tuyến đường… = overlay data, không phải basemap).  
Ảnh capture lúc **map đã load đầy đủ**: basemap đang **Google** (radio selected) · lớp **Tuyến đường** bật (đường đỏ / xanh + nhãn `QL …` · `DT …`) · cụm **marker tím** (SE, gần TP Vinh) · sidebar «Lớp bản đồ» hiện đủ radio **Vệ tinh** (chưa selected trên ảnh) — shell sẵn sàng kích hoạt đổi nền. Downstream: radio **Vệ tinh** selected · canvas chuyển imagery vệ tinh · scale/nav giữ · overlays vẫn theo checkbox.  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS basemap switcher modern (`basemap: satellite` · API `GET /api/v1/gis/basemap-config`), **không** clone skin GOVOne.  
≠ Google Maps JS product marketing · ≠ export/print · ≠ identify/select tools. Sibling: Google · Hành chính · Giao thông · Không nền · Bản đồ nền. Liên quan domain: GIS basemap config · bind `basemap` = `satellite`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table/grid · layer · refresh) · mũi tên thu/mở sidebar |
| **Z2a Lớp nền** | Radio basemap trong tab Lớp bản đồ — **focus vision** | **Google** (selected trên ảnh) · **Hành chính** · **Giao thông** · **Vệ tinh** (primary action `025`) · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay (giữ khi đổi nền) | Folder **Lớp tài sản** (mở) · checkbox **Tuyến đường** (checked) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Tà luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … |
| **Z3 Map nav + toolbar** | Compass/zoom + thanh icon ngang trên canvas | Pan pad (N/S/E/W + center) · zoom +/− · Import/export · Location pin · Identify (i) · Select / Multi-select / Lasso / Polygon / Rectangle select · Measure (ruler) · Search/Label (A) |
| **Z4 Map canvas** | Bản đồ chính (đã có nền + lớp) | Google terrain Nghệ An (state capture trước khi chọn Vệ tinh) · mạng tuyến đỏ/xanh · nhãn lý trình (vd. `QL.7 (Km278+00-Km406+00)`, `DT.543C`, `QL.48`, …) · cụm **marker tím** (SE) · **Bản đồ nền** (góc phải trên — shortcut đổi base) · fullscreen · scale bar **20 km** / **10 mi** |
| **Z5 Basemap switch workflow (runtime)** | Flow chọn nền Vệ tinh | (1) mở tab **Lớp bản đồ** · (2) trong **Lớp nền** chọn radio **Vệ tinh** (hoặc shortcut **Bản đồ nền** → satellite) · (3) load tiles vệ tinh · (4) radio selected = Vệ tinh · overlays lớp chuyên đề giữ theo checkbox · center/zoom giữ |
| **Z6 Filter / Footer grid** | Không grid dữ liệu cố định trên ảnh shell | Không cột bảng cố định trên screenshot; sibling measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi identify / search / edit |
| **Vệ tinh** | Radio basemap (`basemap=satellite`) | Có (khi chọn nền này) | Primary vision `025` — nhóm Lớp nền · mutual exclusive với Google / Hành chính / Giao thông / Không nền |
| Google | Radio basemap (`basemap=google`) | — | Selected trên ảnh capture (trước khi switch) |
| Hành chính | Radio basemap (`basemap=admin`) | — | Sibling lớp nền |
| Giao thông | Radio basemap (`basemap=traffic`) | — | Sibling lớp nền |
| Không nền | Radio basemap (`basemap=none`) | — | Sibling lớp nền |
| Bản đồ nền | Button / nav shortcut | — | Floating góc map — cùng mục đích đổi base |
| Tuyến đường | Checkbox layer | — | Overlay giữ khi đổi nền vệ tinh |
| (các lớp tài sản) | Checkbox layer | — | Cột km · Cầu · Biển báo · … — visibility độc lập basemap |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |

**Grid columns:** không có trên ảnh (map + basemap switch). Parity demo: radio/switcher **Vệ tinh** (`basemap: satellite`) · siblings Google / Hành chính / Giao thông / Không nền · nút **Bản đồ nền** · sidebar layers · search đối tượng. Không cột bảng cố định.

### Tính năng / hành động

**Primary — Vệ tinh (focus vision `025`)**
- Chọn radio **Vệ tinh** trong nhóm **Lớp nền** (tab **Lớp bản đồ**) → `basemap = satellite`
- Hoặc dùng shortcut floating **Bản đồ nền** chọn satellite (cùng kết quả)
- Load imagery vệ tinh · bỏ selected các radio nền khác (mutual exclusive)
- Giữ center / zoom / overlay lớp chuyên đề (checkbox) · không đụng dirty edit session
- Bind config từ `GET /api/v1/gis/basemap-config` (tile/style satellite · key nếu cần)
- Phân biệt với **Google** (default parity) · **Hành chính** · **Giao thông** · **Không nền** · lớp chuyên đề checkbox · Xuất/In bản đồ
- Upstream: mở GIS shell / tab Lớp bản đồ · Downstream: canvas satellite · tiếp tục vẽ/identify/search trên nền mới · event optional `gis.basemap.changed`

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
- Radio: **Vệ tinh** (primary) · Google (selected capture) · Hành chính · Giao thông · Không nền
- Checkbox tree **Lớp tài sản** (Tuyến đường + danh sách unchecked)
- Nút **Bản đồ nền** (floating map)

**Map toolbar / nav (trên ảnh)**
- Pan pad + zoom
- Import/export · Location · Identify · Select / Multi-select tools · Measure · Label
- Fullscreen · scale bar
- Close / shell chrome

**Actions bổ sung từ sibling DOM `002`/`003` (cùng shell — map demo đủ parity)**  
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · Danh sách thiết bị · Sao chép thiết bị · Sao chép tài sản · Tổng hợp · Hủy biên tập · Lưu kết quả (Ctrl+S) · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.  
Confirm siblings: **Chấp nhận** · **Đóng** · **Hủy bỏ** · **Chọn**.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (basemap radio **Vệ tinh** · `basemap: satellite` · siblings Google/Hành chính/Giao thông/Không nền · shortcut **Bản đồ nền** · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM / bind:** radio Lớp nền «Vệ tinh» → `basemap=satellite` · control-map SSOT `gis-draw-google-control-map.md` (Sidebar · Lớp nền)
- **Remap note:** control-map heuristic kind=`nav` map «Vệ tinh» / «Google» / «Hành chính» / «Giao thông» / «Không nền» / «Bản đồ nền» → generic «Điều hướng» MemoryRouter (sai); đúng: Map basemap switcher (`satellite` / `google` / `admin` / `traffic` / `none`) — override trong `map-to-demo-mfe.mjs`
- **≠ route navigate:** không MemoryRouter page jump — chỉ đổi tile/style nền map
- **≠ lớp chuyên đề:** checkbox Tuyến đường… = overlay data visibility, không phải basemap

## Status

- [x] Vision reviewed
- [x] Mapped to step context
