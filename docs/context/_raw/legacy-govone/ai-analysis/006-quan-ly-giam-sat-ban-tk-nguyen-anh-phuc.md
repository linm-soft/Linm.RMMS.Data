# AI Vision — QUẢN LÝ GIÁM SÁT › Ban.TK.Nguyễn Anh Phúc

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `006-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi |
| **screenshot** | `screenshots/006-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `006-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc.png`

### Màn hình / mục đích

Màn **QUẢN LÝ GIÁM SÁT** — panel **Vị trí hiện thời** (`dbv3giamsat.aspx#pnlViTriHienThoi`) với **user menu mở** (drill capture `Ban.TK.Nguyễn Anh Phúc`).  
Capture path: `capture/patrol/ban-tk-nguyen-anh-phuc/view/`.  
Mục đích capture: (1) ghi nhận dropdown user trên shell giám sát · (2) 3 action profile: **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** · (3) vẫn giữ context màn giám sát nền (filter · list empty · map · basemap · Xuất excel / Tải lại).  
Khác `005-quan-ly-giam-sat` (cùng URL/slug, user menu **đóng** · 11 actions): ảnh `006` mở menu → **14** DOM buttons (+3 user-menu items). Sibling tiếp: `007-…-ban-tk…` (drill sâu hơn) · `009-…-oi-mat-khau` (form đổi mật khẩu).  
Layout nền: **split pane** list/filter trái + map phải — Kind **E (report/monitor) + map pane** + **user shell menu**.  
Demo MFE: same actions · UI `/erp-form-context` + shell user menu modern — **không** clone GOVOne.  
Ảnh: list empty («Không có bản ghi nào») · map Nghệ An (nhãn `QL 16` · `DT.544c` · `QL.48C` · `DT.532` · …) · scale **10 km / 5 mi** · dropdown user nổi góc phải trên.  
Domain: giám sát tuần tra + account shell · API patrol giữ nguyên · profile/password/logout bind shell auth (không phải CRUD patrol).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width: brand · title · user (menu **mở**) | Logo **GOVOne** · hamburger · title **Vị trí hiện thời** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** (trigger mở) |
| **Z1b User dropdown** | Popup menu dưới avatar (điểm khác biệt capture `006`) | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** |
| **Z2 Sidebar nav** | Menu trái xám đậm — module giám sát | **Giám sát nhân viên 2** · **Giám sát tuyến đường 2** · **Lịch sử checkin 2** · **Tổng hợp 2** (icon + mũi tên submenu) |
| **Z3 Filter / toolbar list** | Hàng lọc trên panel list | Tree/combo **Tất cả** (`treepickerex` · placeholder DOM **Chọn Công ty/Nhân viên**) · combo **Đoạn đường** (`doanduong` · placeholder **Chọn đoạn đường**) |
| **Z4 Grid / list content** | Danh sách nhân viên / vị trí — empty | Empty **Không có bản ghi nào** · (DOM) **Danh sách nhân viên** · **Chưa checkin: 0** |
| **Z5 List footer actions** | Thanh hành động dưới list | **Xuất excel** · **Tải lại** · **Tổng số : 0** |
| **Z6 Splitter** | Thanh dọc list ↔ map | Grip/arrow thu-mở panel list |
| **Z7 Map canvas** | Bản đồ vị trí / mạng tuyến | Polyline đường (xanh) · nhãn lý trình (`QL 16` · `DT.544c` · `QL.48C` · `DT.532` · …) · vùng Quỳ Châu / Quỳ Hợp / Anh Sơn / Tân Kỳ / Đô Lương |
| **Z8 Map chrome** | Điều khiển map | Zoom **+** / **−** · **Bản đồ nền** (basemap: **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**) · scale **10 km / 5 mi** |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Công ty / Nhân viên | TreePicker / Lookup | Có (filter) | Ảnh **Tất cả** · DOM `treepickerex-1025-inputEl` · placeholder **Chọn Công ty/Nhân viên** |
| Đoạn đường | Combo / Select | — | Ảnh placeholder **Đoạn đường** · DOM `doanduong` |
| Danh sách nhân viên | Grid / List panel | — | Label DOM · Z4 empty |
| Chưa checkin | Metric / badge count | — | DOM `Chưa checkin: 0` |
| Tổng số | Count status | — | Ảnh + DOM **Tổng số : 0** |
| Empty state | EmptyState text | — | **Không có bản ghi nào** |
| Ban.TK.Nguyễn Anh Phúc | UserMenu trigger | — | Header · mở Z1b |
| Hồ sơ của tôi | MenuItem / Nav | — | User dropdown · → profile |
| Đổi mật khẩu | MenuItem / Nav | — | User dropdown · sibling `009-oi-mat-khau` |
| Đăng xuất | MenuItem / Action | — | User dropdown · logout shell |
| Bản đồ nền | Button → basemap menu | — | Floating map |
| Vệ tinh / Google / Giao thông / Hành chính / Không nền | Radio / basemap items | — | DOM actions basemap |

**Grid columns:** trên ảnh **không lộ cột** (empty state) — parity demo vẫn cần grid list nhân viên/vị trí khi có data (STT · nhân viên · tuyến/đoạn · trạng thái check-in · thời gian · tọa độ/last GPS) theo `/erp-form-context` list shell. Không clone bảng ExtJS GOVOne.

### Tính năng / hành động

**Primary — User menu drill trên Vị trí hiện thời `006`**
- Mở dropdown **Ban.TK.Nguyễn Anh Phúc** từ header (state khác `005`)
- **Hồ sơ của tôi** — điều hướng / mở hồ sơ user
- **Đổi mật khẩu** — mở form đổi MK (sibling `009-quan-ly-giam-sat-oi-mat-khau`)
- **Đăng xuất** — logout · về login shell
- Nền màn giám sát vẫn active: filter Công ty/NV + Đoạn đường · list empty · **Xuất excel** · **Tải lại** · map zoom/basemap · sidebar 4 mục
- Upstream: `005` root view (menu đóng) · Downstream: `007` drill tiếp · `009` đổi MK · export `007/008/009-xuat-excel`
- ≠ form CRUD patrol · ≠ GIS editor · ≠ dashboard KPI (`004-dashboad`)
- Demo parity: UserMenu (Avatar · Profile · ChangePassword · Logout) trên shell MFE + giữ actions monitor

**Header / shell (ảnh + DOM)**
- Hamburger toggle sidebar
- Title **Vị trí hiện thời**
- Bell thông báo
- **Ban.TK.Nguyễn Anh Phúc** (user menu trigger — **mở**)

**User dropdown (ảnh + DOM — điểm khác `005`)**
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

**Map chrome (ảnh + DOM)**
- **+** / **−** zoom
- **Bản đồ nền**
- **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**

**Actions bổ sung từ sibling (map demo parity)**  
Root view `005` · drill `007` · Xuất Excel `007`–`009` · Tải lại `008`/`010`/`011` · Đổi mật khẩu `009` — giữ trong `patrol-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `006-quan-ly-giam-sat-ban-tk-nguyen-anh-phuc`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (user menu Hồ sơ / Đổi MK / Đăng xuất · filter · list · Xuất excel · Tải lại · map/basemap · sidebar), modern `/erp-form-context` + shell auth menu (không clone GOVOne)
- **DOM / bind:** user menu 3 items · treepicker · combo đoạn đường · list · basemap · zoom → UserMenu + TreePicker + Select + DataGrid + MapPane
- **Capture path:** `capture/patrol/ban-tk-nguyen-anh-phuc/view/` (master/page/action)
- Sibling: `005` (menu đóng) · `007` (drill +) · `009-oi-mat-khau` · export/reload variants

## Status

- [x] Vision reviewed
- [x] Mapped to step context
