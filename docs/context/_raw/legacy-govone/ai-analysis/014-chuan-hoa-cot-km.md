# AI Vision — Chuẩn hóa cột Km

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `014-chuan-hoa-cot-km` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/014-chuan-hoa-cot-km.png` |
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

### Màn hình / mục đích

GIS editor «**Bản đồ quản lý hạ tầng giao thông Nghệ An**» sau khi kích hoạt tool toolbar **Chuẩn hóa cột Km** (`btChuanHoaCotKm`).  
Mục đích: chuẩn hóa lớp tài sản **Cột km** dọc tuyến (nhãn lý trình `KmN+OO`, vị trí Point, thuộc tính cột) trên nền bản đồ — không mở form catalog CRUD tách page.  
Shell = full-map + left-rail lớp; pair biên tập với **Lưu kết quả / Hủy biên tập** (đồng toolbar GIS).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / secondary bar** | Tiêu đề màn GIS (không inventory chrome GOVOne top-blue logo/hamburger/chuông/user) | «Bản đồ quản lý hạ tầng giao thông Nghệ An» · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô «Nhập thông tin đối tượng…» + icon search/target |
| **Z2 Left-rail** | Sidebar quản lý lớp / tab kết quả | Tabs: **Lớp bản đồ** (active) · **Chú giải** · **Thuộc tính** · **Kết quả** · icon toolbar phụ sidebar (edit / measure / refresh / …) |
| **Z2a Lớp nền** | Radio basemap | **Hành chính** · **Giao thông** · **Google** (selected) · **Vệ tinh** · **Không nền** |
| **Z2b Lớp chuyên đề / tài sản** | Tree checkbox overlay | Folder **Lớp tài sản** · **Tuyến đường** ✓ · **Cột km** ☐ (lớp target chuẩn hóa) · **Cột H** · **Điểm đấu nối** · Ta luy · Cầu · Hộ lan · Biển báo · Cống · … |
| **Z3 Map chrome / toolbar** | Công cụ bản đồ nổi | Pan compass · zoom slider · floating tools (panel · locate · info · select · pan · draw/polygon · text A) · góc map: **Bản đồ nền** · expand · close |
| **Z4 Map content** | Viewport mạng đường đỏ/xanh · label KM range | VD label: `QL.16 (Km278+00-Km406+00)` · `QL.48 (Km0+00-Km160+00)` · `DT.544` · scale bar 20 km / 10 mi |
| **Z5 Measure (DOM, ẩn/ít thấy trên crop)** | Ô đo ẩn nhưng capture | `inputDienTich` · `inputChieuDai` · `inputChieuDaiKhongGian` · `inputDienTichKhongGian` · `ddlLopDuLieu` · `gMapInputTextSearch` |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup | không | Header search object · `gMapInputTextSearch` |
| Lớp nền (Hành chính / Giao thông / Google / Vệ tinh / Không nền) | Radio group | có (chọn 1) | Google = selected trên ảnh |
| Tuyến đường | Layer checkbox | không | Overlay bật — cột km bám tuyến |
| Cột km | Layer checkbox | **có khi chạy tool** | Target chuẩn hóa · Point · `layerCode=cot-km` |
| Cột H · Điểm đấu nối · … | Layer checkbox | không | Cùng cây Lớp tài sản |
| Diện tích / Chiều dài (và không gian) | Text readonly measure | không | DOM hidden panel đo (tool khác) |
| Lý trình cột (`KmN+OO`) | Text/label trên Point | sau chuẩn hóa | Format chuẩn từ label map: **`Km[số]+[2 chữ số]`** (vd. `Km278+00`) |
| ddlLopDuLieu | Select lớp dữ liệu | tùy flow | Catalog layer filter |

### Tính năng / hành động

**Page-specific (tool + shell liên quan — skip chrome GOVOne):**

| # | Action | Kind | Zone | Ghi chú parity demo |
|---|--------|------|------|---------------------|
| 1 | **Chuẩn hóa cột Km** | nav/tool | toolbar GIS | `btChuanHoaCotKm` · chạy chuẩn hóa lớp `cot-km` (lyTrinh · nhãn · snap thuộc tính) · **không** navigate SPA rỗng |
| 2 | Bật/tắt lớp **Cột km** | toggle | left-rail tree | Overlay markers cột km |
| 3 | Bật **Tuyến đường** | toggle | left-rail | Cơ sở tuyến để chuẩn hóa |
| 4 | Chọn basemap Google / Vệ tinh / … | basemap | Z2a | Giữ parity nền Google |
| 5 | Tab **Lớp bản đồ / Chú giải / Thuộc tính / Kết quả** | tab | left-rail | Sau tool: xem thuộc tính/kết quả cột |
| 6 | **Công cụ** (menu) | menu | secondary bar | Chứa cụm tool GIS (đo, chụp, chuẩn hóa KM, …) |
| 7 | **Tìm kiếm** / Nhập thông tin đối tượng | filter | header | Tìm ĐT / đoạn |
| 8 | **Bản đồ** / Mở bản đồ | nav | secondary | Map chrome |
| 9 | Pan / Zoom / Select / Info / Draw | map tools | map | Interaction map |
| 10 | **Bản đồ nền** (góc map) | basemap shortcut | map corner | = radio Lớp nền |
| 11 | **Lưu kết quả (Ctrl+S)** | submit | toolbar | Commit phiên biên tập sau chuẩn hóa |
| 12 | **Hủy biên tập** | destructive | toolbar | Discard pending chuẩn hóa |
| 13 | Đo diện tích / Đo chiều dài / Lấy TT vị trí / Chụp MH / Xuất·In BD | tools | toolbar | Cùng GIS shell (inventory root) |

**Không có** form Create/Edit catalog riêng trên screenshot — tool map + layer; pair save/discard = Lưu/Hủy biên tập (không GAP form-CRUD).

**Capture gap (optional):** không leaf `form-sample` dialog confirm/preview chuẩn hóa — action work demo bằng seed `cot-km` + nút tool; recapture dialog nếu GOVOne có modal riêng (ghi RECAPTURE nếu cần depth).

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Demo: `Linm.RMMS.Demo/public/demo/gis/gis-draw-live.html` · action `btChuanHoaCotKm` / data-action `normalize-cot-km`
- Data sample: `js/data/cot-km-ql22-seed.js` · format nhãn `KmN+OO`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
