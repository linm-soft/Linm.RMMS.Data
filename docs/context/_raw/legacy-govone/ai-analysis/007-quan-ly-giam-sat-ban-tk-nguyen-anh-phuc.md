# AI Vision — QUẢN LÝ GIÁM SÁT › Ban.TK.Nguyễn Anh Phúc › +

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `007-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi |
| **screenshot** | `screenshots/007-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc.png` |
| **DOM fields** | 2 → **12** (vision-enriched) |
| **DOM labels** | 3 → **10** (vision-enriched) |
| **DOM buttons** | 14 |

## DOM inventory (đã capture)

### Labels
- Danh sách nhân viên
- Chưa checkin: 0
- Tổng số : 0

### Buttons / actions
- Ban.TK.Nguyễn Anh Phúc
- Xuất excel
- Tải lại
- Vệ tinh
- Google
- Giao thông
- Hành chính
- Không nền
- Bản đồ nền
- +
- −
- Hồ sơ của tôi
- Đổi mật khẩu
- Đăng xuất

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | treepickerex-1025-inputEl |
| input | text | doanduong |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `007-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc.png`

### Màn hình / mục đích

Màn **QUẢN LÝ GIÁM SÁT** — panel **Vị trí hiện thời** (`dbv3giamsat.aspx#pnlViTriHienThoi`) · drill **Ban.TK.Nguyễn Anh Phúc › +**.  
Capture path: `capture/patrol/ban-tk-nguyen-anh-phuc/page/` · kind inventory **`form-sample`** · `via: create` · **trigger `+`**.  
**Quan trọng (miscapture):** nút `+` trên DOM là map **`#zoomIn`** (href `#zoomIn`) — **không** mở Create/Thêm form. Form-sample chỉ lặp lại cùng labels/filters của màn giám sát (Danh sách nhân viên · Chưa checkin · Tổng số · treepicker · đoạn đường) — **không** có field create mới.  
Ảnh: user menu **vẫn mở** (Hồ sơ · Đổi mật khẩu · Đăng xuất) trên nền split list+map — cùng shell với `006`, khác path `page/` vs `view/` và title `› +`.  
Mục đích capture: (1) ghi nhận drill sau click map zoom **+** trong ngữ cảnh user menu Ban.TK · (2) xác nhận **không** sinh form CRUD · (3) giữ parity actions giám sát + user shell + map chrome.  
Layout nền: **split pane** list/filter trái + map phải — Kind **E (report/monitor) + map pane** + **user shell menu**.  
Demo MFE: same actions · UI `/erp-form-context` + shell user menu + **Map zoom (+/−)** — **không** map `+` thành Create catalog · **không** clone GOVOne.  
Ảnh: list empty («Không có bản ghi nào») · map Nghệ An (nhãn `QL 16` · `DT.544c` · `QL.48C` · …) · scale **10 km / 5 mi** · dropdown user nổi góc phải trên.  
Sibling: upstream `006` (user menu / view) · `005` (root, menu đóng) · `009-oi-mat-khau` · export `007/008/009-xuat-excel` (khác id — Xuất excel modal).  
Domain: giám sát tuần tra + account shell · API patrol giữ nguyên · profile/password/logout bind shell auth · zoom bind MapPane.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width: brand · title · user (menu **mở**) | Logo **GOVOne** · hamburger · title **Vị trí hiện thời** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** (trigger mở) |
| **Z1b User dropdown** | Popup menu dưới avatar (giống `006`) | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** |
| **Z2 Sidebar nav** | Menu trái xám đậm — module giám sát | **Giám sát nhân viên 2** · **Giám sát tuyến đường 2** · **Lịch sử checkin 2** · **Tổng hợp 2** (icon + mũi tên submenu) |
| **Z3 Filter / toolbar list** | Hàng lọc trên panel list | Tree/combo **Tất cả** (`treepickerex` · placeholder DOM **Chọn Công ty/Nhân viên**) · combo **Đoạn đường** (`doanduong` · placeholder **Chọn đoạn đường**) |
| **Z4 Grid / list content** | Danh sách nhân viên / vị trí — empty | Empty **Không có bản ghi nào** · (DOM) **Danh sách nhân viên** · **Chưa checkin: 0** |
| **Z5 List footer actions** | Thanh hành động dưới list | **Xuất excel** · **Tải lại** · **Tổng số : 0** |
| **Z6 Splitter** | Thanh dọc list ↔ map | Grip/arrow thu-mở panel list |
| **Z7 Map canvas** | Bản đồ vị trí / mạng tuyến | Polyline đường (xanh) · nhãn lý trình (`QL 16` · `DT.544c` · `QL.48C` · …) · vùng Quỳ Châu / Anh Sơn / Tân Kỳ / Đô Lương |
| **Z8 Map chrome** | Điều khiển map — **điểm trigger capture `› +`** | Zoom **+** (`#zoomIn` · form-sample trigger) / **−** (`#zoomOut`) · **Bản đồ nền** (basemap: **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**) · scale **10 km / 5 mi** |
| **Z9 Form-sample (miscapture)** | Inventory ghi Create/Thêm sau `+` | **Không có dialog/form mới trên ảnh** — cùng Z3–Z5; không thêm field create |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Công ty / Nhân viên | TreePicker / Lookup | Có (filter) | Ảnh **Tất cả** · DOM `treepickerex-1025-inputEl` · placeholder **Chọn Công ty/Nhân viên** |
| Đoạn đường | Combo / Select | — | Ảnh placeholder **Đoạn đường** · DOM `doanduong` / `combo-1026-inputEl` |
| Danh sách nhân viên | Grid / List panel | — | Label DOM · Z4 empty |
| Chưa checkin | Metric / badge count | — | DOM `Chưa checkin: 0` |
| Tổng số | Count status | — | Ảnh + DOM **Tổng số : 0** |
| Empty state | EmptyState text | — | **Không có bản ghi nào** |
| Ban.TK.Nguyễn Anh Phúc | UserMenu trigger | — | Header · mở Z1b |
| Hồ sơ của tôi | MenuItem / Nav | — | User dropdown · → `Secure/UserProfile.aspx` |
| Đổi mật khẩu | MenuItem / Nav | — | User dropdown · → `gclient/gadmin/doimatkhau.aspx` · sibling `009-oi-mat-khau` |
| Đăng xuất | MenuItem / Action | — | User dropdown · → `logoff.aspx` |
| Bản đồ nền | Button → basemap menu | — | Floating map |
| Vệ tinh / Google / Giao thông / Hành chính / Không nền | Radio / basemap items | — | DOM actions basemap |
| Zoom + | Map zoom in | — | `#zoomIn` · **không** Create · trigger form-sample `007` |
| Zoom − | Map zoom out | — | `#zoomOut` |

**Grid columns:** trên ảnh **không lộ cột** (empty state) — parity demo vẫn cần grid list nhân viên/vị trí khi có data (STT · nhân viên · tuyến/đoạn · trạng thái check-in · thời gian · tọa độ/last GPS) theo `/erp-form-context` list shell. Không clone bảng ExtJS GOVOne.

**Form sample:** inventory `form-sample.json` trigger `+` — **không** có field Create riêng trên ảnh; ignore như Create CRUD · remap `+` → MapPane zoomIn trong control-map/demo.

### Tính năng / hành động

**Primary — Ban.TK › + (page / form-sample miscapture `007`)**
- Upstream: `006` mở user menu trên Vị trí hiện thời · capture tiếp click **+** (= map zoomIn)
- Ảnh vẫn: user dropdown mở · list empty · map + filters · **không** modal Create
- Remap đúng: **Zoom +** / **Zoom −** trên MapPane · UserMenu 3 items · filter · Xuất excel · Tải lại · basemap
- Downstream: `009-oi-mat-khau` (Đổi mật khẩu) · export modal `007-xuat-excel` (khác capture id)
- ≠ form CRUD patrol · ≠ GIS editor biên tập · ≠ dashboard KPI (`004-dashboad`)
- Demo parity: Map zoom controls + UserMenu trên shell MFE + giữ actions monitor (erp-form-context / erp-report-context)

**Header / shell (ảnh + DOM)**
- Hamburger toggle sidebar
- Title **Vị trí hiện thời**
- Bell thông báo
- **Ban.TK.Nguyễn Anh Phúc** (user menu trigger — **mở**)

**User dropdown (ảnh + DOM)**
- **Hồ sơ của tôi**
- **Đổi mật khẩu**
- **Đăng xuất**

**Sidebar (ảnh)**
- **Giám sát nhân viên 2**
- **Giám sát tuyến đường 2**
- **Lịch sử checkin 2**
- **Tổng hợp 2**

**List toolbar / footer (ảnh + DOM)**
- Filter tree/combo Công ty-Nhân viên (**Tất cả**)
- Filter combo Đoạn đường
- **Xuất excel**
- **Tải lại**
- Status **Tổng số : 0** · (DOM) **Chưa checkin: 0**

**Map chrome (ảnh + DOM — điểm khác biệt path `› +`)**
- **+** zoomIn (`#zoomIn` · form-sample trigger — **không** Create)
- **−** zoomOut (`#zoomOut`)
- **Bản đồ nền**
- **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**

**Actions bổ sung từ sibling (map demo parity)**  
Root view `005` · user menu `006` · Xuất Excel `007`–`009-xuat-excel` · Tải lại `008`/`010`/`011` · Đổi mật khẩu `009` — giữ trong `patrol-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `007-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (user menu Hồ sơ / Đổi MK / Đăng xuất · filter · list · Xuất excel · Tải lại · **map zoom +/−** · basemap · sidebar), modern `/erp-form-context` + shell auth menu (không clone GOVOne · không Create từ `+`)
- **DOM / bind:** user menu 3 items · treepicker · combo đoạn đường · list · basemap · **zoom `#zoomIn`/`#zoomOut`** → UserMenu + TreePicker + Select + DataGrid + MapPane (zoom)
- **Capture path:** `capture/patrol/ban-tk-nguyen-anh-phuc/page/` (master/page/action) · form-sample trigger `+` = zoomIn misclassified
- Sibling: `005` (menu đóng) · `006` (user menu / view) · `009-oi-mat-khau` · export/reload variants

## Status

- [x] Vision reviewed
- [x] Mapped to step context
