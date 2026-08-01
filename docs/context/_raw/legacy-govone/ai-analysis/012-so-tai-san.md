# AI Vision — SỔ TÀI SẢN

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `012-so-tai-san` |
| **slug** | `asset` |
| **url** | https://pmdb.govone.vn/ketcauhatang.aspx#pnltaisan |
| **screenshot** | `screenshots/012-so-tai-san.png` |
| **DOM fields** | 4 |
| **DOM labels** | 2 |
| **DOM buttons** | 11 |

## DOM inventory (đã capture)

### Labels
- Lý trình từ:
- Lý trình đến:

### Buttons / actions
- 24
- Ban.TK.Nguyễn Anh Phúc
- Tiện ích
- Xóa điều kiện
- Lấy dữ liệu
- +
- −
- ⇧
- Vị trí của tôi
- Lớp nền
- Lớp chuyên đề

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | textfield-1033-inputEl |
| input | text | textfield-1079-inputEl |
| input | text | textfield-1080-inputEl |
| input | text | inputItem |

## Analysis (AI điền)

> Vision reviewed: 2026-08-01 · ai-autocode autopilot · screenshot `012-so-tai-san.png`

### Màn hình / mục đích

Màn **Sổ tài sản KCHT** trên shell GOVOne `ketcauhatang.aspx#pnltaisan` (title «Kết cấu hạ tầng»).  
Mục đích: chọn **tuyến đường** (cây tổ chức / tuyến) → lọc theo **lý trình từ–đến** → **Lấy dữ liệu** để xem tài sản trên **bản đồ** + **lưới kết quả** phía dưới; hỗ trợ lớp nền / lớp chuyên đề / vị trí của tôi.  
Ảnh capture lúc đã load map Việt Nam, tree có «Công ty Cổ phần 495» → `QL.48C` · `QL.7`, lưới dưới **trống** (chưa có bản ghi / page `0/0`).  
Kind shell: **F/custom map + list (GIS asset)** → demo MFE parity theo `/erp-form-context` (map zone + list filter + grid toolbar), **không** clone skin GOVOne.  
Sibling cùng shell: `008-so-tai-san` · `023-so-tai-san` · drill `024`/`025` (thông báo / tiện ích).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh xanh app KCHT | Logo tròn · hamburger menu · title **Kết cấu hạ tầng** · globe · font «A» · app-grid · bell badge **24** · avatar + **Ban.TK.Nguyễn Anh Phúc** ▾ |
| **Z2 Nav rail** | Cột icon hẹp bên trái | Home/monitor · **Map** (active) · History · Settings |
| **Z3 Sidebar filter** | Panel tuyến / lớp dữ liệu | **+** (thêm) · tabs **Tuyến đường** (active) · **Lớp dữ liệu** · search placeholder **Nhập và Enter để lọc dữ liệu** (`textfield-1033`) · tree: **Công ty Cổ phần 495** · **QL.48C** · **QL.7** (mỗi node có icon mắt hiện/ẩn lớp) |
| **Z4 Filter toolbar** | Thanh lọc lý trình trên map | **Lý trình từ:** (`textfield-1079`, placeholder `vd: km1+100`) · **Lý trình đến:** (`textfield-1080`, `vd: km5+100`) · nút xanh **Lấy dữ liệu** (kính lúp) · DOM thêm **Xóa điều kiện** · **Tiện ích** (có thể menu/ẩn trên ảnh) |
| **Z5 Map canvas** | Bản đồ trung tâm | Basemap VN / ĐNA · controls góc phải trên: call · layer-stack · basemap thumb · controls góc phải dưới: **+** · **−** · fullscreen · measure · DOM: **Vị trí của tôi** · **Lớp nền** · **Lớp chuyên đề** · **⇧** |
| **Z6 Result grid** | Panel dưới map — kết quả tài sản | Toolbar phải: search/filter · edit · **delete** (đỏ) · Excel export · refresh · pager `<<` `<` `0` `/0` `>` `>>` · header bar xám · body trống (chưa cột label trên ảnh) · `inputItem` = ô page hiện tại |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập và Enter để lọc dữ liệu | Search / Text (`textfield-1033`) | — | Sidebar — lọc tree tuyến; Enter để lọc |
| Tuyến đường / Lớp dữ liệu | Tabs | — | Sidebar — chuyển nguồn lọc |
| (Tree tuyến) Công ty / QL.* | Tree + visibility (eye) | — | Chọn đơn vị / tuyến; mắt bật/tắt hiển thị lớp |
| Lý trình từ | Text (`textfield-1079`) | Khi lấy theo đoạn | Placeholder `vd: km1+100` |
| Lý trình đến | Text (`textfield-1080`) | Khi lấy theo đoạn | Placeholder `vd: km5+100` |
| (Trang hiện tại) | Number (`inputItem`) | — | Pager — giá trị `0` trên ảnh |

**Grid columns:** không đọc được trên ảnh (empty state · chưa **Lấy dữ liệu**). Parity demo: sau load mock — STT · mã/tên TS · loại · tuyến · lý trình · tọa độ/GPS · trạng thái; row action menu · không header `TT`.

### Tính năng / hành động

**Primary — Sổ tài sản (focus vision `012`)**
- Chọn tuyến trên tree (vd. QL.48C / QL.7) · hiện/ẩn lớp (eye)
- Nhập **Lý trình từ / đến** → **Lấy dữ liệu** (load map pins + grid)
- **Xóa điều kiện** (DOM) — clear filter lý trình / điều kiện
- Tab **Tuyến đường** ↔ **Lớp dữ liệu** · search tree (Enter)
- **+** sidebar — thêm mục (tuyến/lớp — theo ngữ cảnh tab)

**Header / shell**
- Hamburger menu · utilities (globe · font · app switcher)
- Thông báo badge **24** → sibling `024-so-tai-san-24`
- User **Ban.TK.Nguyễn Anh Phúc** ▾ (hồ sơ / đăng xuất)
- **Tiện ích** (DOM)

**Map controls (ảnh + DOM)**
- Zoom **+** / **−** · fullscreen · measure
- **Vị trí của tôi** · **Lớp nền** · **Lớp chuyên đề** · **⇧** (pan/tilt hoặc elevate control capture)
- Layer / basemap / call icons góc map

**Grid / result toolbar (trên ảnh — bổ sung DOM)**
- Tìm/lọc trên lưới · Sửa · Xóa bản ghi · Xuất Excel · Làm mới
- Pager: đầu · trước · trang · sau · cuối

**Demo MFE parity (modern `/erp-form-context`)**  
Same actions · LinPageLayout map+list · `LinErpListFilterBar` (lý trình + Lấy dữ liệu + Xóa điều kiện) · tree/lookup tuyến · map zone · grid STT + toolbar — **không** clone GOVOne.

### Map → step context

- Feature: `docs/context/features/asset.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/asset-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/asset-actions.md`
- Demo: parity UI trong `asset-demo.html` · MFE — same actions (filter lý trình · Lấy dữ liệu · tree tuyến · map layers · grid CRUD/export), modern `/erp-form-context` (không clone GOVOne)
- **Remap note:** control-map hiện map `+`/`−` → create/zoom lẫn; đúng theo zone: sidebar `+` = thêm · map `+`/`−` = zoom; badge `24` = thông báo (nav), không phải business field

## Status

- [x] Vision reviewed
- [x] Mapped to step context
