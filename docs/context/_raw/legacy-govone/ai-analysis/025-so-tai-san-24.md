# AI Vision — SỔ TÀI SẢN › 24 › +

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `025-so-tai-san-24` |
| **slug** | `asset` |
| **url** | https://pmdb.govone.vn/ketcauhatang.aspx#pnltaisan |
| **screenshot** | `screenshots/025-so-tai-san-24.png` |
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

### Form sample (Create/Thêm) — capture metadata

- **trigger:** `+`
- Lý trình từ:
- Lý trình đến:

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `025-so-tai-san-24.png`

### Màn hình / mục đích

Drill **Sổ tài sản › 24 › +** — cùng shell GOVOne `ketcauhatang.aspx#pnltaisan` (title «Kết cấu hạ tầng»), capture theo path action **Create/Thêm** (trigger DOM `+`) sau drill thông báo badge **24**.  
Ảnh: **không** mở modal/form Create riêng — vẫn full màn **Sổ tài sản KCHT** (GIS map + list): sidebar tree «Công ty Cổ phần 495» → `QL.48C` · `QL.7` (icon mắt); filter **Lý trình từ / đến** trống (`vd: km1+100` / `vd: km5+100`); map VN/ĐNA; lưới dưới **trống** (pager `0 / 0`).  
Capture gắn **Form sample** fields = Lý trình từ/đến (cùng label filter trên shell) — nghi **miscapture form-sample** giống pattern GIS `› +` (vision 007/009/011): filter fields bị gắn làm create sample; **không** đủ để suy modal Create chỉ có 2 field lý trình.  
Kind: **F/custom map + list (GIS asset)** + **create entry** → demo MFE parity `/erp-form-context`: map+list shell · **Create/Thêm** mở form mock hiện đại (field TS đầy đủ) · map `+`/`−` = zoom — **không** clone skin GOVOne.  
Parent: `024-so-tai-san-24` (thông báo) · root: `012`/`023-so-tai-san`.  
**Remap:** filter/sidebar `+` = **Create/Thêm** (focus `025`); map `+`/`−` = zoom GIS; badge/`24` = thông báo (nav) — không business field.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh xanh app KCHT | Logo tròn · hamburger · title **Kết cấu hạ tầng** · globe · font «A» · app-grid · **chuông badge 24** · avatar + **Ban.TK.Nguyễn Anh Phúc** ▾ |
| **Z2 Nav rail** | Cột icon hẹp trái | Home/monitor · **Map** (active, xanh) · History · Settings |
| **Z3 Sidebar filter** | Panel tuyến / lớp dữ liệu | Tabs **Tuyến đường** (active) · **Lớp dữ liệu** · search placeholder **Nhập và Enter để lọc dữ liệu** (`textfield-1033`) · tree: **Công ty Cổ phần 495** (−) · **QL.48C** · **QL.7** (mỗi node icon mắt hiện/ẩn) |
| **Z4 Filter toolbar** | Thanh lọc lý trình trên map — **focus Create `+`** | **`+`** (góc trái filter — trigger capture Create) · **Lý trình từ:** (`textfield-1079`, `vd: km1+100`) · **Lý trình đến:** (`textfield-1080`, `vd: km5+100`) · nút xanh **Lấy dữ liệu** (kính lúp) · DOM: **Xóa điều kiện** · **Tiện ích** (có thể ẩn/menu) |
| **Z5 Map canvas** | Bản đồ trung tâm | Basemap VN / ĐNA · góc phải trên: call · layer-stack · basemap · góc phải dưới: **+** (zoom) · **−** · fullscreen / geolocate · DOM: **Vị trí của tôi** · **Lớp nền** · **Lớp chuyên đề** · **⇧** |
| **Z6 Result grid** | Panel dưới map — kết quả tài sản | Bar xám (summary/header trống) · toolbar: kính lúp · edit · **delete** (đỏ) · Excel export · refresh · pager `<<` `<` `0` `/ 0` `>` `>>` · body trống · `inputItem` = ô trang |
| **Z7 Create (capture)** | Form sample gắn trigger `+` — **không** thấy modal trên ảnh | Capture fields: Lý trình từ / đến · demo: Create → form mock `/erp-form-context` (không clone GOVOne dialog) |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| (Thông báo) | Badge / Bell nav (`24`) | — | Header — parent drill `024`; không map field nghiệp vụ |
| Nhập và Enter để lọc dữ liệu | Search / Text (`textfield-1033`) | — | Sidebar — lọc tree tuyến; Enter để lọc |
| Tuyến đường / Lớp dữ liệu | Tabs | — | Sidebar — chuyển nguồn lọc |
| (Tree tuyến) Công ty / QL.* | Tree + visibility (eye) | — | Chọn đơn vị / tuyến; mắt bật/tắt lớp |
| Lý trình từ | Text (`textfield-1079`) | Khi lấy theo đoạn / * trên form sample capture | Placeholder `vd: km1+100` · filter shell + form-sample Create |
| Lý trình đến | Text (`textfield-1080`) | Khi lấy theo đoạn / * trên form sample capture | Placeholder `vd: km5+100` · filter shell + form-sample Create |
| (Trang hiện tại) | Number (`inputItem`) | — | Pager — giá trị `0` trên ảnh |

**Grid columns:** không đọc được trên ảnh (empty state · chưa **Lấy dữ liệu**). Parity demo: sau load mock — STT · mã/tên TS · loại · tuyến · lý trình · tọa độ/GPS · trạng thái; row action menu · không header `TT`.

**Create form (parity demo — không clone GOVOne):** Form sample capture chỉ 2 field lý trình (miscapture khả dĩ). Demo Create mock: mã/tên TS · loại · tuyến · lý trình từ–đến · GPS/tọa độ · trạng thái · validation banner · toast — theo `asset.md` + `/erp-form-context`.

### Tính năng / hành động

**Primary — Create/Thêm › + (focus vision `025`)**
- Click **`+`** trên filter/sidebar → capture path Create (Form sample Lý trình từ/đến)
- Ảnh: modal Create **chưa** hiện — parity MFE: nút **Tạo mới / Thêm** mở form/slideout mock hiện đại
- Phân biệt: filter/sidebar `+` = **Create**; map chrome `+` = **zoom in** (không phải Create catalog)

**Sổ tài sản (cùng shell — parity parent `012`/`023`/`024`)**
- Chọn tuyến tree (QL.48C / QL.7) · hiện/ẩn lớp (eye)
- Nhập **Lý trình từ / đến** → **Lấy dữ liệu** (map pins + grid)
- **Xóa điều kiện** (DOM) — clear filter lý trình
- Tab **Tuyến đường** ↔ **Lớp dữ liệu** · search tree (Enter)

**Header / shell**
- Hamburger · utilities (globe · font · app switcher)
- Thông báo badge **24** → parent `024-so-tai-san-24`
- User **Ban.TK.Nguyễn Anh Phúc** ▾
- **Tiện ích** (DOM)

**Map controls (ảnh + DOM)**
- Zoom **+** / **−** · fullscreen · geolocate
- **Vị trí của tôi** · **Lớp nền** · **Lớp chuyên đề** · **⇧**
- Layer / basemap / call icons góc map

**Grid / result toolbar**
- Tìm/lọc · Sửa · Xóa · Xuất Excel · Làm mới
- Pager: đầu · trước · trang · sau · cuối

**Action list đầy đủ (DOM 11 + toolbar ảnh)**

| # | Label / control | Kind | Zone | Ghi chú vision |
|---|-----------------|------|------|----------------|
| 1 | 24 | nav | header | Badge thông báo — parent `024` |
| 2 | Ban.TK.Nguyễn Anh Phúc | nav | header | User menu |
| 3 | Tiện ích | nav | header | Utility menu (DOM) |
| 4 | Xóa điều kiện | destructive | filter | Clear lý trình / điều kiện |
| 5 | Lấy dữ liệu | primary | filter | Load map + grid theo filter |
| 6 | **+** | **create** / zoomIn | **filter** hoặc map | **Focus `025`:** filter/sidebar = Create/Thêm; map = zoom in |
| 7 | − | zoomOut | map | Zoom out |
| 8 | ⇧ | action | map | Pan/tilt / elevate (DOM) |
| 9 | Vị trí của tôi | action | map | Geolocate |
| 10 | Lớp nền | action | map | Basemap |
| 11 | Lớp chuyên đề | action | map/modal | Thematic layers |
| — | Tab Tuyến đường / Lớp dữ liệu | nav | sidebar | Ảnh |
| — | Search tree (Enter) | filter | sidebar | Ảnh |
| — | Eye (hiện/ẩn lớp) | action | sidebar tree | Ảnh |
| — | Grid: search · edit · delete · Excel · refresh | toolbar | grid | Ảnh |
| — | Pager << < n > >> | nav | grid | Ảnh · `inputItem` |

**Demo MFE parity (modern `/erp-form-context`)**  
Same actions · LinPageLayout map+list · **Create/Thêm** → form mock (không clone GOVOne) · header notification entry (badge) · `LinErpListFilterBar` (lý trình + Lấy dữ liệu + Xóa điều kiện) · tree/lookup tuyến · map zone (zoom ≠ Create) · grid STT + toolbar.

### Map → step context

- Feature: `docs/context/features/asset.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/asset-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/asset-actions.md`
- Demo: parity UI trong `asset-demo.html` · MFE — same actions (Create/Thêm · thông báo nav · filter lý trình · Lấy dữ liệu · tree tuyến · map layers · grid CRUD/export), modern `/erp-form-context` (không clone GOVOne)
- **Remap note:** filter/sidebar `+` = Create (focus `025`); map `+`/`−` = zoom; form-sample Lý trình từ/đến = khả dĩ miscapture filter; badge `24` = thông báo (nav), không business field

## Status

- [x] Vision reviewed
- [x] Mapped to step context
