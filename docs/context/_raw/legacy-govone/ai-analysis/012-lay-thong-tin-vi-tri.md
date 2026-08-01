# AI Vision — Lấy thông tin vị trí

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `012-lay-thong-tin-vi-tri` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/012-lay-thong-tin-vi-tri.png` |
| **DOM fields** | 7 |
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
| input | text | inputDienTich |
| input | text | inputChieuDai |
| input | text | inputChieuDaiKhongGian |
| input | text | inputDienTichKhongGian |
| input | text | — |
| input | text | gMapInputTextSearch |
| select | — | ddlLopDuLieu |

## Analysis (AI điền)

> Vision reviewed: 2026-08-01 · ai-autocode autopilot · screenshot `012-lay-thong-tin-vi-tri.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) sau khi kích hoạt tiện ích **Lấy thông tin vị trí** (`btTienIchThongTinDiem` · menuText capture «Lấy thông tin vị trí»).  
Mục đích: người dùng click một điểm trên map → hệ thống hiển thị **thông tin tọa độ điểm** (kinh độ / vĩ độ hoặc X/Y theo hệ tọa độ bản đồ · `heToaDo` sibling footer).  
Khác **Identify (i)** (thuộc tính đối tượng lớp): tool này lấy **vị trí điểm click**, không bắt buộc hit feature.  
Ảnh capture lúc **đang mở bản đồ** (banner xanh «Đang mở bản đồ…») — canvas trắng, sidebar «Lớp bản đồ» chưa có tree lớp; tool focus là **Location pin +▾** trên **toolbar map** (icon pin / goto điểm).  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern, **không** clone skin GOVOne.  
Sibling shell đầy đủ actions: `002-ban-o-cong-trinh-giao-thong` / `003-…nghe-an`; sibling measure: `010-o-dien-tich` · `011-o-chieu-dai`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) |
| **Z1b Toast / status** | Banner loading giữa header | «**Đang mở bản đồ…**» (xanh dương) |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon dọc (pin/target · measure/ruler · grid · user · refresh) · body tab trống lúc loading · mũi tên thu/mở sidebar |
| **Z3 Toolbar map** | Thanh icon ngang trên canvas | Exit/back · **Location pin +▾** (tool focus — Lấy thông tin vị trí / goto) · Identify (i) · Select (cursor) · Box-select · Pan (hand) · Expand/fullscreen |
| **Z4 Map canvas** | Vùng bản đồ chính (trắng khi chưa load nền) | Empty white · chờ basemap · nút **×** đóng góc phải trên |
| **Z5 Point readout (DOM/runtime — chưa hiện trên ảnh loading)** | Popup / panel tọa độ sau khi click điểm | Kinh độ · Vĩ độ (hoặc X · Y) · hệ tọa độ (`heToaDo` sibling) · copy/đóng; sibling measure fields `inputDienTich` · `inputChieuDai` · `inputChieuDaiKhongGian` · `inputDienTichKhongGian` vẫn trong DOM shell |
| **Z6 Filter / Footer grid** | Không grid dữ liệu trên ảnh | Không cột bảng · không pager; lớp dữ liệu qua `ddlLopDuLieu` (DOM toolbar) khi map sẵn sàng |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi identify/search (không hiện label trên ảnh loading) |
| Kinh độ / X | Text readonly (point readout) | — | Kết quả click điểm — runtime popup (không trong DOM inventory loading) |
| Vĩ độ / Y | Text readonly (point readout) | — | Kết quả click điểm — runtime popup |
| Hệ tọa độ | Text (`heToaDo`) | — | Sibling footer inventory — ngữ cảnh CRS khi đọc tọa độ |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |
| (Basemap radios — sibling inventory) | Radio / nav | — | Vệ tinh · Google · Giao thông · Hành chính · Không nền — hiện khi lớp nền mở (sibling `002`/`003`) |

**Grid columns:** không có (map + point coordinate readout). Parity demo: toolbar tool **Lấy thông tin vị trí** · click map → hiện tọa độ (lng/lat hoặc X/Y) + optional CRS · sidebar tabs · search đối tượng.

### Tính năng / hành động

**Primary — Lấy thông tin vị trí (focus vision `012`)**
- Kích hoạt **Lấy thông tin vị trí** (`btTienIchThongTinDiem`) từ menu **Công cụ** / toolbar tiện ích hoặc icon **Location pin +▾** trên map toolbar
- Click một điểm trên map → đọc **Kinh độ / Vĩ độ** (hoặc X/Y theo `heToaDo`)
- Copy tọa độ / đóng readout · thoát tool (back/exit trên toolbar · × đóng map)
- Phân biệt với Identify (i): Identify → thuộc tính feature lớp (`Thuộc tính` tab); tool này → tọa độ vị trí click

**Header / shell (trên ảnh)**
- Menu **Bản đồ** · **Công cụ** · **Tìm kiếm**
- Search đối tượng (ô «Nhập thông tin đối tượng…» + filter)
- User / more / info

**Sidebar tabs (trên ảnh + DOM)**
- **Lớp bản đồ** (active)
- **Chú giải**
- **Thuộc tính**
- **Kết quả**
- **Biểu đồ** (DOM button — có thể ẩn/collapsed trên ảnh)
- Sidebar icons: pin/target · ruler/measure · attribute grid · user · refresh
- Collapse/expand sidebar (mũi tên cạnh panel)

**Map toolbar (trên ảnh)**
- Exit / back
- **Location pin +▾** (Lấy thông tin vị trí / goto — tool focus)
- Identify (i)
- Select
- Box select
- Pan
- Expand / fullscreen
- Close map (×)

**Actions bổ sung từ sibling DOM `002`/`003` (cùng shell — map demo đủ parity)**  
Đo diện tích · Đo chiều dài · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · Danh sách / Sao chép thiết bị · Sao chép tài sản · Tổng hợp · Hủy biên tập · Lưu kết quả (Ctrl+S) · Basemap (Vệ tinh · Google · Giao thông · Hành chính · Không nền) · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (get point location · click → lng/lat readout · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **Remap note:** control-map hiện map «Lấy thông tin vị trí» → «Xuất Excel» (sai — heuristic kind=`export`); đúng: GIS toolbar tool identify-point / get-coordinates (`btTienIchThongTinDiem`)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
