# AI Vision — Đo chiều dài

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `011-o-chieu-dai` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/011-o-chieu-dai.png` |
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

> Vision reviewed: 2026-08-01 · ai-autocode autopilot · screenshot `011-o-chieu-dai.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) sau khi kích hoạt tiện ích **Đo chiều dài** (menuText capture «Đo chiều dài» · toolbar measure-length / polyline).  
Mục đích: người dùng vẽ polyline trên map → hệ thống tính **chiều dài phẳng** (`inputChieuDai` · đơn vị km / m) và **chiều dài không gian** (`inputChieuDaiKhongGian`).  
Ảnh capture lúc **đang mở bản đồ** (banner xanh «Đang mở bản đồ…») — canvas trắng, sidebar «Lớp bản đồ» chưa có tree lớp; tool measure-length nằm trên **toolbar map** (icon đường/thước đo).  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern, **không** clone skin GOVOne.  
Sibling shell đầy đủ actions: `002-ban-o-cong-trinh-giao-thong` / `003-…nghe-an`; sibling đo vùng: `010-o-dien-tich`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) |
| **Z1b Toast / status** | Banner loading giữa header | «**Đang mở bản đồ…**» (xanh dương) |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon dọc (settings/gear · add layer · grid · user · refresh) · body tab trống lúc loading |
| **Z3 Toolbar map** | Thanh icon ngang trên canvas | Exit/back · Location (pin +▾) · Identify (i) · Select (cursor) · Box-select · Pan (hand) · **Đo chiều dài** (đường/thước — tool focus của vision) · Expand/fullscreen (nếu hiện) |
| **Z4 Map canvas** | Vùng bản đồ chính (trắng khi chưa load nền) | Empty white · chờ basemap · nút **×** đóng góc phải trên · splitter thu/mở sidebar |
| **Z5 Measure readout (DOM — chưa hiện trên ảnh loading)** | Panel/kết quả đo sau khi vẽ polyline | Headings capture: **Chiều dài** · **km** · **Chiều dài:** · **m** · fields `inputChieuDai` · `inputChieuDaiKhongGian` (+ sibling area: `inputDienTich` · `inputDienTichKhongGian`) |
| **Z6 Filter / Footer grid** | Không grid dữ liệu trên ảnh | Không cột bảng · không pager; lớp dữ liệu qua `ddlLopDuLieu` (DOM toolbar) khi map sẵn sàng |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi identify/search (không hiện label trên ảnh loading) |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Kết quả đo chiều dài phẳng · đơn vị **km** / **m** (headings capture) |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Kết quả đo chiều dài không gian (3D/ellipsoid) |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |
| (Basemap radios — sibling inventory) | Radio / nav | — | Vệ tinh · Google · Giao thông · Hành chính · Không nền — hiện khi lớp nền mở (sibling `002`/`003`) |

**Grid columns:** không có (map + measure readout). Parity demo: toolbar tool **Đo chiều dài** · polyline draw · hiển thị chiều dài (m/km) + optional chiều dài không gian.

### Tính năng / hành động

**Primary — Đo chiều dài (focus vision `011`)**
- Kích hoạt **Đo chiều dài** từ menu **Công cụ** / toolbar tiện ích hoặc icon measure-length trên map toolbar
- Vẽ polyline trên map (click đỉnh → double-click / Enter kết thúc đoạn)
- Đọc kết quả **Chiều dài** (`inputChieuDai`) · đơn vị km / m
- Đọc **Chiều dài không gian** (`inputChieuDaiKhongGian`)
- Hủy / xóa đo tạm · thoát tool (back/exit trên toolbar · × đóng map)

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
- Sidebar icons: settings · add layer · attribute grid · user · refresh

**Map toolbar (trên ảnh)**
- Exit / back
- Location (goto / GPS dropdown)
- Identify (i)
- Select
- Box select
- Pan
- **Đo chiều dài** (length measure — icon đường/thước)
- Expand / fullscreen (nếu hiện trên strip)
- Close map (×)

**Actions bổ sung từ sibling DOM `002`/`003` (cùng shell — map demo đủ parity)**  
Đo diện tích · Lấy thông tin vị trí · Chụp màn hình · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · Danh sách / Sao chép thiết bị · Sao chép tài sản · Tổng hợp · Hủy biên tập · Lưu kết quả (Ctrl+S) · Basemap (Vệ tinh · Google · Giao thông · Hành chính · Không nền) · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (measure length · polyline · readout m/km · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
