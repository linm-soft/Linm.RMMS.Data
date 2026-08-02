# AI Vision — Lưu kết quả (Ctrl + S)

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `024-luu-ket-qua-ctrl-s` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/024-luu-ket-qua-ctrl-s.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `024-luu-ket-qua-ctrl-s.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) — shell **Bản đồ quản lý hạ tầng giao thông Nghệ An** sau khi kích hoạt tiện ích **Lưu kết quả (Ctrl + S)** (`saveEditing` · menuText capture «Lưu kết quả (Ctrl + S)»).  
Mục đích: **commit / persist phiên biên tập GIS đang mở** — ghi mọi thay đổi geometry/attribute chưa lưu (sau các tool biên tập như Gộp multiline · Tạo đoạn 100m · Gán mã · CLMD · Sao chép thiết bị/tài sản · draw Point/Line/Polygon…), thoát dirty state, giữ map ở trạng thái đã lưu mới. Phím tắt **Ctrl+S** = cùng action.  
Khác **Hủy biên tập** (`023` · `resetEditing` = discard): tool này = **save / commit** (submit). Khác **Lưu** form generic (catalog/voucher FormActions) — đây là **commit edit session toàn map** (GIS drawings → PostGIS / layer), không chỉ lưu field form modal. Downstream thường: validate dirty → POST/PUT drawings · toast success/error · hết dirty · toolbar edit idle · refresh lớp.  
Ảnh capture lúc **map đã load đầy đủ**: basemap **Google** · lớp **Tuyến đường** bật (đường đỏ / xanh + nhãn `QL …` · `DT …`) · cụm **marker tím** (SE, gần TP Vinh) · sidebar «Lớp bản đồ» có tree lớp nền + lớp chuyên đề — shell sẵn sàng biên tập; action Lưu nằm menu **Công cụ** / toolbar tiện ích cạnh **Hủy biên tập** (icon floppy / save trên thanh icon map).  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern (Button primary · toast · form-api-error-handling), **không** clone skin GOVOne.  
≠ form Save generic catalog · ≠ export/print map. Sibling: `023` Hủy biên tập · các tool biên tập `016`–`022`. Liên quan domain: Asset / route geometry dirty → committed state · API `POST/PUT /api/v1/gis/drawings`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table/grid · layer · refresh) · mũi tên thu/mở sidebar |
| **Z2a Lớp nền** | Radio basemap trong tab Lớp bản đồ | **Google** (selected) · **Hành chính** · **Giao thông** · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay (ngữ cảnh biên tập) | Folder **Lớp tài sản** (mở) · checkbox **Tuyến đường** (checked) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Tà luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … |
| **Z3 Map nav + toolbar** | Compass/zoom + thanh icon ngang trên canvas | Pan pad (N/S/E/W + center) · zoom +/− · Import/export · Location pin · Identify (i) · Select / Multi-select / Lasso / Polygon / Rectangle select · Measure (ruler) · Search/Label (A) — **Lưu kết quả** (`saveEditing` · Ctrl+S) + **Hủy biên tập** (`resetEditing`) từ menu **Công cụ** / toolbar tiện ích (icon floppy) |
| **Z4 Map canvas** | Bản đồ chính (đã có nền + lớp) | Google terrain Nghệ An · mạng tuyến đỏ/xanh · nhãn lý trình (vd. `QL.7 (Km278+00-Km406+00)`, `DT.543C`, `QL.48`, …) · cụm **marker tím** (SE) · **Bản đồ nền** (góc phải trên) · fullscreen · scale bar **20 km** / **10 mi** |
| **Z5 Save-edit workflow (runtime)** | Flow lưu kết quả biên tập | (1) đang có dirty edits (sau draw / merge / copy / gán mã / CLMD…) · (2) kích hoạt **Lưu kết quả** / **Ctrl+S** (`saveEditing`) · (3) validate geometry/attribute pending · (4) commit API (drawings) · (5) toast success/error · hết dirty · thoát edit session · (tuỳ chọn) refresh lớp / tab **Kết quả** |
| **Z6 Filter / Footer grid** | Không grid dữ liệu cố định trên ảnh shell | Không cột bảng cố định trên screenshot; toast / error banner runtime; sibling measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi identify / search / edit |
| Lớp nền | Radio / nav | — | Trên ảnh: Google (active) · Hành chính · Giao thông · Vệ tinh · Không nền |
| Tuyến đường | Checkbox layer | Có (ngữ cảnh) | Lớp chuyên đề đang bật — thường là lớp đang biên tập / commit |
| (các lớp tài sản) | Checkbox layer | — | Cột km · Cầu · Biển báo · … — dirty nếu vừa edit → được commit khi Lưu |
| Dirty edit payload | GeoJSON + props (runtime) | Có (khi lưu) | Geometry + layerCode + properties — bind API drawings (không hiện form cố định trên ảnh) |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |

**Grid columns:** không có trên ảnh (map + save-edit workflow). Parity demo: toolbar **Lưu kết quả (Ctrl+S)** (primary) · toast · API error handling · pair **Hủy biên tập** · basemap · sidebar layers · search đối tượng. Không cột bảng cố định.

### Tính năng / hành động

**Primary — Lưu kết quả / Ctrl+S (focus vision `024`)**
- Kích hoạt **Lưu kết quả (Ctrl + S)** (`saveEditing`) từ menu **Công cụ** / toolbar tiện ích / phím tắt **Ctrl+S**
- Chỉ meaningful khi có **dirty edit session** (sau draw / merge / copy / gán mã / CLMD / …)
- Validate → commit geometry + attribute pending → toast success / form-api-error-handling
- Hết dirty · thoát edit mode · map giữ state vừa lưu · optional refresh lớp / tab **Kết quả**
- Phân biệt với **Hủy biên tập** (`023` · `resetEditing` = discard) · **Lưu** form generic catalog · Xuất/In bản đồ
- Upstream: bất kỳ tool biên tập (`016`–`022`, draw) · Downstream: idle map / tiếp tục tool khác · event `gis.drawing.saved`

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
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · Danh sách thiết bị · Sao chép thiết bị · Sao chép tài sản · Tổng hợp · **Hủy biên tập** · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.  
Confirm siblings: **Chấp nhận** · **Đóng** · **Hủy bỏ** · **Chọn**.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (save-edit toolbar · Ctrl+S · toast · pair Hủy biên tập · basemap · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM id:** `saveEditing` · control-map: «Lưu kết quả (Ctrl + S)» → GIS toolbar · commit unsaved edit session · toast · form-api-error-handling · pair `resetEditing`
- **Remap note:** control-map heuristic kind=`submit` map «Lưu kết quả (Ctrl + S)» → generic «Lưu» FormActions (thiếu DOM/context); đúng: GIS toolbar save-edit (`saveEditing` · Ctrl+S) — override trong `map-to-demo-mfe.mjs`
- **≠ Lưu form catalog:** không map sang FormActions Save voucher/list modal
- **≠ export/print:** commit edit session, không xuất ảnh/PDF

## Status

- [x] Vision reviewed
- [x] Mapped to step context
