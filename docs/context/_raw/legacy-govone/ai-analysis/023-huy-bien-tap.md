# AI Vision — Hủy biên tập

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `023-huy-bien-tap` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/023-huy-bien-tap.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `023-huy-bien-tap.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) — shell **Bản đồ quản lý hạ tầng giao thông Nghệ An** sau khi kích hoạt tiện ích **Hủy biên tập** (`resetEditing` · menuText capture «Hủy biên tập»).  
Mục đích: **hủy / discard phiên biên tập GIS đang mở** — bỏ mọi thay đổi geometry/attribute chưa commit (sau các tool biên tập như Gộp multiline · Tạo đoạn 100m · Gán mã · CLMD · Sao chép thiết bị/tài sản · draw Point/Line/Polygon…), thoát edit session, trả map về trạng thái đã lưu trước đó.  
Khác **Lưu kết quả (Ctrl+S)** (`024` · `saveEditing` = commit): tool này = **cancel / reset** (destructive). Khác **Hủy bỏ** (sidebar/dialog cancel form) và **Đóng** (close chrome) — đây là **reset edit session toàn map**, không chỉ đóng modal. Downstream thường: confirm modal → discard → hết dirty state · toolbar edit idle · optional reload lớp.  
Ảnh capture lúc **map đã load đầy đủ**: basemap **Google** · lớp **Tuyến đường** bật (đường đỏ / xanh + nhãn `QL …` · `DT …`) · cụm **marker tím** (SE, gần TP Vinh) · sidebar «Lớp bản đồ» có tree lớp nền + lớp chuyên đề — shell sẵn sàng biên tập; action Hủy nằm menu **Công cụ** / toolbar cạnh **Lưu kết quả**.  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern (Button danger · Confirm modal), **không** clone skin GOVOne.  
≠ form cancel «Hủy bỏ» generic · ≠ delete object. Sibling: `024` Lưu kết quả · các tool biên tập `016`–`021`. Liên quan domain: Asset / route geometry dirty state.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table/grid · layer · refresh) · mũi tên thu/mở sidebar |
| **Z2a Lớp nền** | Radio basemap trong tab Lớp bản đồ | **Google** (selected) · **Hành chính** · **Giao thông** · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay (ngữ cảnh biên tập) | Folder **Lớp tài sản** (mở) · checkbox **Tuyến đường** (checked) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Tà luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … |
| **Z3 Map nav + toolbar** | Compass/zoom + thanh icon ngang trên canvas | Pan pad (N/S/E/W + center) · zoom +/− · Import/export · Location pin · Identify (i) · Select / Multi-select / Lasso / Polygon / Rectangle select · Measure (ruler) · Search/Label (A) — **Hủy biên tập** (`resetEditing`) + **Lưu kết quả** (`saveEditing`) từ menu **Công cụ** / toolbar tiện ích |
| **Z4 Map canvas** | Bản đồ chính (đã có nền + lớp) | Google terrain Nghệ An · mạng tuyến đỏ/xanh · nhãn lý trình (vd. `QL.7 (Km278+00-Km406+00)`, `DT.543C`, `QL.48`, …) · cụm **marker tím** (SE) · **Bản đồ nền** (góc phải trên) · fullscreen · scale bar **20 km** / **10 mi** |
| **Z5 Cancel-edit workflow (runtime)** | Flow hủy biên tập | (1) đang có dirty edits (sau draw / merge / copy / gán mã / CLMD…) · (2) kích hoạt **Hủy biên tập** (`resetEditing`) · (3) **Confirm modal** (xác nhận bỏ thay đổi) · (4) discard geometry/attribute chưa lưu · (5) thoát edit session · map về state đã lưu · (tuỳ chọn) refresh lớp |
| **Z6 Filter / Footer grid** | Không grid dữ liệu cố định trên ảnh shell | Không cột bảng cố định trên screenshot; confirm modal runtime; sibling measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi identify / search / edit |
| Lớp nền | Radio / nav | — | Trên ảnh: Google (active) · Hành chính · Giao thông · Vệ tinh · Không nền |
| Tuyến đường | Checkbox layer | Có (ngữ cảnh) | Lớp chuyên đề đang bật — thường là lớp đang biên tập |
| (các lớp tài sản) | Checkbox layer | — | Cột km · Cầu · Biển báo · … — có thể dirty nếu vừa edit |
| Xác nhận hủy biên tập | Confirm modal | Có (khi có dirty) | Runtime sau `resetEditing` — Chấp nhận / Đóng / Hủy bỏ (sibling DOM) |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |

**Grid columns:** không có trên ảnh (map + cancel-edit workflow). Parity demo: toolbar **Hủy biên tập** (danger) · Confirm modal · discard dirty · pair **Lưu kết quả (Ctrl+S)** · basemap · sidebar layers · search đối tượng. Không cột bảng cố định.

### Tính năng / hành động

**Primary — Hủy biên tập (focus vision `023`)**
- Kích hoạt **Hủy biên tập** (`resetEditing`) từ menu **Công cụ** / toolbar tiện ích
- Chỉ meaningful khi có **dirty edit session** (sau draw / merge / copy / gán mã / CLMD / …)
- **Confirm modal** → xác nhận discard thay đổi chưa lưu
- Discard geometry + attribute pending · thoát edit mode · map về state đã lưu
- Phân biệt với **Lưu kết quả (Ctrl+S)** (`024` · `saveEditing` = commit) · **Hủy bỏ** (cancel dialog/form) · **Đóng** (close chrome) · xóa đối tượng
- Upstream: bất kỳ tool biên tập (`016`–`021`, draw) · Downstream: idle map / tiếp tục tool khác

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
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · Danh sách thiết bị · Sao chép thiết bị · Sao chép tài sản · Tổng hợp · **Lưu kết quả (Ctrl+S)** · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.  
Confirm siblings: **Chấp nhận** · **Đóng** · **Hủy bỏ** · **Chọn**.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (cancel-edit toolbar · Confirm modal · discard dirty session · pair Lưu kết quả · basemap · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM id:** `resetEditing` · control-map: «Hủy biên tập» → GIS toolbar · discard unsaved edits · Confirm modal · pair `saveEditing`
- **Remap note:** control-map heuristic kind=`destructive` map «Hủy biên tập» → generic «Xóa / Hủy» (thiếu DOM/context); đúng: GIS toolbar cancel-edit (`resetEditing`) — override trong `map-to-demo-mfe.mjs`
- **≠ Hủy bỏ dialog:** không map sang cancel form generic sidebar
- **≠ delete object:** discard session, không xóa feature đã lưu

## Status

- [x] Vision reviewed
- [x] Mapped to step context
