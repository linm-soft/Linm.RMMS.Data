# AI Vision — BẢN ĐỒ CÔNG TRÌNH GIAO THÔNG

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `002-ban-o-cong-trinh-giao-thong` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384&gtoken=[REDACTED] |
| **screenshot** | `screenshots/002-ban-o-cong-trinh-giao-thong.png` |
| **DOM fields** | 39 |
| **DOM labels** | 0 |
| **DOM buttons** | 44 |

## DOM inventory (đã capture)

### Labels
- _(trống — ưu tiên đọc từ ảnh)_

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

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `002-ban-o-cong-trinh-giao-thong.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx?mapid=17384`) — **entry shell** menu **BẢN ĐỒ CÔNG TRÌNH GIAO THÔNG** / title **Bản đồ quản lý hạ tầng giao thông Nghệ An**.  
Đây là capture **màn chính GIS** của feature `gis-draw-google`: canvas full + sidebar lớp + toolbar map + basemap Google — **không** mở modal metadata (khác sibling `003`).  
Mục đích: (1) xem mạng tuyến / tài sản trên bản đồ · (2) bật/tắt lớp nền & lớp chuyên đề · (3) pan/zoom/identify/measure/search · (4) upstream vào các tool biên tập / xuất / phân tích (DOM menu **Công cụ** · **Bản đồ**).  
Ảnh capture: basemap **Google** selected · lớp **Tuyến đường** checked · mạng tuyến đỏ/xanh + nhãn QL/ĐT · cụm marker tím SE (gần TP Vinh) · sidebar tab **Lớp bản đồ** active · search header sẵn.  
Kind shell: **F/custom map (GIS)** → demo MFE parity `/erp-form-context` + GIS shell modern, **không** clone skin GOVOne.  
≠ Google Maps product marketing · ≠ modal Thông tin bản đồ (`003`) · ≠ form thuộc tính đối tượng sau vẽ · ≠ báo cáo Web. Domain: GIS map shell · bind basemap / layers / search / measure fields.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Logo + menu app GIS + search đối tượng + user | Logo **govOne** · tiêu đề **Bản đồ quản lý hạ tầng giao thông Nghệ An** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (info · table · layer · refresh) · mũi tên thu/mở |
| **Z2a Lớp nền** | Radio basemap | **Google** (selected) · **Hành chính** · **Giao thông** · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề** | Tree lớp tài sản / overlay | Folder **Lớp tài sản** (mở) · **Tuyến đường** (checked) · unchecked: Cột km · Cột H · Điểm đấu nối · Đinh phản quang · Tà luy · Vạch kẻ đường · Gờ, gối giảm tốc · Tường chắn · Cọc thủy chí · Cầu · Hộ lan · Biển báo · Đoạn cọc tiêu · Cống · Mốc lộ giới · Rãnh đỉnh · … |
| **Z3 Map nav + toolbar** | Compass/zoom + icon toolbar ngang | Pan pad · zoom +/− · Import/export · Location · Identify (i) · Select / Multi / Lasso / Polygon / Rectangle · Measure · Label (A) · fullscreen / close chrome |
| **Z4 Map canvas** | Bản đồ chính (focus vision `002`) | Google terrain Nghệ An · tuyến đỏ/xanh + nhãn (vd. `QL.7` · `QL.48` · `DT.533` · `QL.1A`) · marker tím · **Bản đồ nền** (góc phải) · scale **20 km** / **10 mi** |
| **Z5 Filter / Footer grid** | Không grid dữ liệu cố định | Không cột bảng trên screenshot; measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header — DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar identify/search/edit |
| Google | Radio basemap (`basemap=google`) | — | Selected trên ảnh (default parity) |
| Hành chính | Radio basemap (`basemap=admin`) | — | Sibling Lớp nền |
| Giao thông | Radio basemap (`basemap=traffic`) | — | Sibling Lớp nền |
| Vệ tinh | Radio basemap (`basemap=satellite`) | — | Sibling — focus packet `025` |
| Không nền | Radio basemap (`basemap=none`) | — | Sibling Lớp nền |
| Bản đồ nền | Button shortcut | — | Floating góc map |
| Tuyến đường | Checkbox layer | — | Overlay visibility — checked trên ảnh |
| (các lớp tài sản) | Checkbox layer | — | Cột km · Cầu · Biển báo · Cống · … — unchecked trên ảnh |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling measure — DOM shell |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling measure — DOM shell |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | DOM shell |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | DOM shell |

**Grid columns:** không có trên ảnh (map shell). Parity demo: GIS shell · sidebar layers · basemap Google · search đối tượng · toolbar map · tabs Lớp/Chú giải/Thuộc tính/Kết quả. Không cột bảng cố định.

### Tính năng / hành động

**Primary — Shell map entry `002` (BẢN ĐỒ CÔNG TRÌNH GIAO THÔNG)**
- Mở / focus GIS shell mapid=17384 — canvas + sidebar + toolbar sẵn
- Xem overlay **Tuyến đường** trên basemap **Google** · pan / zoom / scale
- Toggle radio **Lớp nền** · checkbox **Lớp tài sản**
- Search đối tượng (header) · Identify / Select / Measure trên toolbar
- Upstream: menu BẢN ĐỒ CÔNG TRÌNH / **Mở bản đồ** · Downstream: tool-focused siblings `010`–`025` · modal metadata `003` · basemap satellite `025`
- ≠ modal **Thông tin bản đồ** (`003`) · ≠ Lưu kết quả biên tập geometry (focus `024`) · ≠ báo cáo list Kind B

**Header / shell (trên ảnh)**
- Menu **Bản đồ** · **Công cụ** · **Tìm kiếm**
- Search đối tượng · User / more / info / logout
- Title map **Bản đồ quản lý hạ tầng giao thông Nghệ An**

**Sidebar tabs (trên ảnh + DOM)**
- **Lớp bản đồ** (active) · **Chú giải** · **Thuộc tính** · **Kết quả** · **Biểu đồ**
- Sidebar icons: info · table · layer · refresh · collapse

**Basemap / layers (trên ảnh)**
- Radio: Google (selected) · Hành chính · Giao thông · Vệ tinh · Không nền
- Checkbox tree **Lớp tài sản** (Tuyến đường + danh sách)
- Nút **Bản đồ nền**

**Map toolbar / nav (trên ảnh)**
- Pan pad + zoom · Import/export · Location · Identify · Select tools · Measure · Label · Fullscreen

**Actions bổ sung từ DOM `002` / sibling shell (map demo đủ parity)**  
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · Danh sách thiết bị · Sao chép thiết bị · Sao chép tài sản · Tổng hợp · Hủy biên tập · Lưu kết quả (Ctrl+S) · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Tạo / Quản lý biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.  
Confirm siblings: **Chấp nhận** · **Đóng** · **Hủy bỏ** · **Chọn**.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `002-ban-o-cong-trinh-giao-thong`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (GIS shell · sidebar layers · basemap Google · search · toolbar · tabs), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM / bind:** `gMapInputTextSearch` · `ddlLopDuLieu` · `inputDienTich` / `inputChieuDai` / … · radio basemap · checkbox layers — control-map SSOT
- **Remap note:** action «Bản đồ quản lý hạ tầng giao thông Nghệ An» heuristic `nav` → MemoryRouter (sai nếu hiểu là page jump); đúng: mở/focus map shell — giữ override GIS trong `map-to-demo-mfe.mjs` khi cần
- **≠ route catalog:** đây là GIS Kind F shell entry, không list Kind B · modal metadata là sibling `003`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
