# AI Vision — Chụp màn hình

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `013-chup-man-hinh` |
| **slug** | `gis-draw-google` |
| **url** | https://pmdb.govone.vn/geditor.aspx?mapid=17384[REDACTED]# |
| **screenshot** | `screenshots/013-chup-man-hinh.png` |
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

> Vision reviewed: 2026-08-01 · ai-autocode autopilot · screenshot `013-chup-man-hinh.png`

### Màn hình / mục đích

Màn **GIS editor GOVOne** (`geditor.aspx`) sau khi kích hoạt tiện ích **Chụp màn hình** (`btnScreenMap` · menuText capture «Chụp màn hình»).  
Mục đích: người dùng chụp **viewport bản đồ hiện tại** (basemap + lớp overlay đang bật) → xuất / tải ảnh (PNG hoặc tương đương) — không vẽ geometry, không mở form thuộc tính.  
Khác **Xuất bản đồ** / **In bản đồ** (export/print layout đầy đủ): tool này = **screenshot nhanh viewport** map canvas.  
Ảnh capture lúc **đang mở bản đồ** (banner xanh «Đang mở bản đồ…») — canvas trắng, sidebar «Lớp bản đồ» chưa có tree lớp; tool focus là icon **monitor / màn hình** trên **toolbar map** (cuối nhóm icon trái).  
Kind shell: **F/custom map (GIS)** → demo MFE parity theo `/erp-form-context` + GIS toolbar modern, **không** clone skin GOVOne.  
Sibling shell đầy đủ actions: `002-ban-o-cong-trinh-giao-thong` / `003-…nghe-an`; sibling tools: `010-o-dien-tich` · `011-o-chieu-dai` · `012-lay-thong-tin-vi-tri`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh trắng logo + menu app GIS + search đối tượng + user | Logo **govOne** · menu **Bản đồ** · **Công cụ** · **Tìm kiếm** · ô search placeholder **Nhập thông tin đối tượng…** (+ icon kính + filter) · more (⋮) · avatar · info (i) · power/logout |
| **Z1b Toast / status** | Banner loading giữa header | «**Đang mở bản đồ…**» (xanh dương) |
| **Z2 Sidebar trái** | Panel lớp / chú giải / thuộc tính / kết quả | Tabs: **Lớp bản đồ** (active, gạch xanh) · **Chú giải** · **Thuộc tính** · **Kết quả** · strip icon (compass/nav · pin · grid · list · users · refresh) · body tab trống lúc loading · mũi tên thu/mở sidebar |
| **Z3 Toolbar map** | Thanh icon ngang trên canvas | Exit/back · Location pin +▾ · Identify (i) · Select (cursor) · Box-select · Pan (hand) · **Chụp màn hình** (monitor/desktop — tool focus) |
| **Z4 Map canvas** | Vùng bản đồ chính (trắng khi chưa load nền) | Empty white · chờ basemap · nút **×** đóng góc phải trên · mũi tên thu/mở cạnh phải |
| **Z5 Screenshot result (runtime — chưa hiện trên ảnh loading)** | Dialog / download sau khi chụp | Preview ảnh viewport · tải PNG · hủy/đóng; không field form riêng trong DOM inventory loading |
| **Z6 Filter / Footer grid** | Không grid dữ liệu trên ảnh | Không cột bảng · không pager; lớp dữ liệu qua `ddlLopDuLieu` (DOM toolbar) khi map sẵn sàng; sibling measure fields vẫn trong DOM shell |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập thông tin đối tượng… | Search / Lookup ĐT | — | Header search — thấy trên ảnh + DOM `gMapInputTextSearch` |
| Lớp dữ liệu | Select (`ddlLopDuLieu`) | — | DOM toolbar — chọn lớp khi identify/search (không hiện label trên ảnh loading) |
| Diện tích | Text readonly (`inputDienTich`) | — | Sibling tool đo diện tích — cùng shell GIS |
| Chiều dài | Text readonly (`inputChieuDai`) | — | Sibling tool đo dài — cùng shell GIS |
| Chiều dài không gian | Text readonly (`inputChieuDaiKhongGian`) | — | Sibling đo dài không gian |
| Diện tích không gian | Text readonly (`inputDienTichKhongGian`) | — | Sibling đo diện tích không gian |
| (Basemap radios — sibling inventory) | Radio / nav | — | Vệ tinh · Google · Giao thông · Hành chính · Không nền — hiện khi lớp nền mở (sibling `002`/`003`) |

**Grid columns:** không có (map + screenshot download). Parity demo: toolbar tool **Chụp màn hình** · capture map viewport → download PNG · sidebar tabs · search đối tượng.

### Tính năng / hành động

**Primary — Chụp màn hình (focus vision `013`)**
- Kích hoạt **Chụp màn hình** (`btnScreenMap`) từ menu **Công cụ** / toolbar tiện ích hoặc icon **monitor** trên map toolbar
- Chụp viewport map hiện tại (basemap + lớp đang bật)
- Tải / lưu ảnh PNG (hoặc mở preview rồi download)
- Phân biệt với **Xuất bản đồ** / **In bản đồ**: export/print layout đầy đủ vs screenshot nhanh viewport
- Hủy / đóng preview · thoát tool (back/exit trên toolbar · × đóng map)

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
- Sidebar icons: compass/nav · pin · grid · list · users · refresh
- Collapse/expand sidebar (mũi tên cạnh panel)

**Map toolbar (trên ảnh)**
- Exit / back
- Location (goto / GPS dropdown)
- Identify (i)
- Select
- Box select
- Pan
- **Chụp màn hình** (monitor — tool focus)
- Close map (×)

**Actions bổ sung từ sibling DOM `002`/`003` (cùng shell — map demo đủ parity)**  
Đo diện tích · Đo chiều dài · Lấy thông tin vị trí · Xuất / In bản đồ · Chuẩn hóa cột Km · Xem hướng đoạn đường · Gộp đoạn multiline · Tạo đoạn đánh giá 100m · Gán mã đoạn đánh giá · Tự động đánh giá CL mặt đường · Danh sách / Sao chép thiết bị · Sao chép tài sản · Tổng hợp · Hủy biên tập · Lưu kết quả (Ctrl+S) · Basemap (Vệ tinh · Google · Giao thông · Hành chính · Không nền) · Mở bản đồ · Video Tracking · Phân tích không gian / mạng lưới · Thiết kế mạng lưới · Công cụ biểu mẫu · Thiết lập hướng · Về trang chủ · Hồ sơ · Đăng xuất — giữ trong `gis-draw-google-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/gis-draw-google.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/gis-draw-google-actions.md`
- Demo: parity UI trong `gis-draw-google.html` / `gis-draw-live.html` · MFE — same actions (screenshot map viewport · download PNG · sidebar tabs · search đối tượng), modern `/erp-form-context` + GIS shell (không clone GOVOne)
- **DOM id:** `btnScreenMap` · control-map: «Chụp màn hình» → GIS toolbar · map screenshot · download/png

## Status

- [x] Vision reviewed
- [x] Mapped to step context
