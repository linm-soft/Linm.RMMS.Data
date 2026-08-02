# AI Vision — QUẢN LÝ GIÁM SÁT

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `004-quan-ly-giam-sat` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi |
| **screenshot** | `screenshots/004-quan-ly-giam-sat.png` |
| **DOM fields** | 2 → **12** (vision-enriched) |
| **DOM labels** | 3 → **10** (vision-enriched) |
| **DOM buttons** | 11 → **16** (vision-enriched sidebar) |

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

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | treepickerex-1025-inputEl |
| input | text | doanduong |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `004-quan-ly-giam-sat.png`

### Màn hình / mục đích

Màn **QUẢN LÝ GIÁM SÁT** — panel **Vị trí hiện thời** (`dbv3giamsat.aspx#pnlViTriHienThoi`) trên app GOVOne gServer 2.1.  
Mở từ tile **QUẢN LÝ GIÁM SÁT** (app-tile / popup) · capture kind `app-tile` via `popup` (song song deep capture `005` → `capture/patrol/root/view/`).  
Mục đích: (1) lọc **Công ty/Nhân viên** + **Đoạn đường** · (2) xem **danh sách nhân viên** / vị trí realtime (empty khi chưa có bản ghi) · (3) theo dõi KPI nhẹ **Chưa checkin** + **Tổng số** · (4) hiển thị vị trí / mạng tuyến trên **bản đồ** (basemap switcher + zoom) · (5) **Xuất excel** / **Tải lại**.  
Layout chính: **split pane** — list/filter trái + map phải (≠ dashboard KPI `003`/`004-dashboad` · ≠ GIS editor full `geditor` / `025-ve-tinh`).  
Kind shell: **E (report/monitor) + map pane** → demo MFE theo `/erp-form-context` + `/erp-report-context` + GIS basemap chrome modern — **không** clone skin GOVOne.  
Ảnh capture: list **empty** («Không có bản ghi nào») · map đã load mạng đường Nghệ An / Thanh Hóa (nhãn `QL.16` · `DT.543B` · `QL.48` · `DT.531B` · …) · scale **20 km / 10 mi**.  
Sibling cùng URL/slug: `005-quan-ly-giam-sat` (deep capture) · drill user `006` · export modal `007/008/009-xuat-excel` · reload `008/010/011-tai-lai`.  
Domain: giám sát tuần tra / check-in · bind filter company/staff + road segment → list + map pins/tracks · API guide `GET /api/v1/patrols?routeId=&from=&to=` · coverage/KPI.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width: brand · title panel · user | Logo **GOVOne** · hamburger (toggle sidebar) · title **Vị trí hiện thời** · bell thông báo · avatar + **Ban.TK.Nguyễn Anh Phúc** (dropdown user) |
| **Z2 Sidebar nav** | Menu trái xám đậm — module giám sát | **Giám sát nhân viên 2** · **Giám sát tuyến đường 2** · **Lịch sử checkin 2** · **Tổng hợp 2** (mỗi mục có icon + mũi tên submenu) |
| **Z3 Filter / toolbar list** | Hàng lọc trên panel list | Tree/combo **Tất cả** (= `treepickerex` · placeholder DOM **Chọn Công ty/Nhân viên**) · combo **Đoạn đường** (`doanduong` · placeholder **Chọn đoạn đường**) |
| **Z4 Grid / list content** | Danh sách nhân viên / vị trí — empty state | Empty text **Không có bản ghi nào** · scrollbar ngang · (DOM labels) **Danh sách nhân viên** · **Chưa checkin: 0** (có thể ngoài/trên viewport tùy layout ExtJS) |
| **Z5 List footer actions** | Thanh hành động dưới list | **Xuất excel** · **Tải lại** · status **Tổng số : 0** |
| **Z6 Splitter** | Thanh dọc giữa list ↔ map | Grip/arrow thu-mở panel list |
| **Z7 Map canvas** | Bản đồ vị trí / mạng tuyến | Overlay polyline đường (xanh) · nhãn lý trình (`QL.16` · `DT.543B` · `QL.48` · `DT.531B` · …) · vùng Nghệ An / Thanh Hóa |
| **Z8 Map chrome** | Điều khiển map | Zoom **+** / **−** (góc trái trên) · nút **Bản đồ nền** (góc phải trên — mở basemap: **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**) · scale bar **20 km / 10 mi** |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Công ty / Nhân viên | TreePicker / Lookup | Có (filter) | Ảnh hiển thị giá trị **Tất cả** · DOM `treepickerex-1025-inputEl` · placeholder **Chọn Công ty/Nhân viên** · zone filter list |
| Đoạn đường | Combo / Select | — | Ảnh placeholder **Đoạn đường** · DOM `doanduong` / `combo-1026-inputEl` · placeholder **Chọn đoạn đường** |
| Danh sách nhân viên | Grid / List panel | — | Label DOM · vùng Z4 — empty trên ảnh |
| Chưa checkin | Metric / badge count | — | DOM `Chưa checkin: 0` — KPI nhẹ trạng thái check-in |
| Tổng số | Count status | — | Ảnh + DOM **Tổng số : 0** — footer list |
| Empty state | EmptyState text | — | **Không có bản ghi nào** |
| Bản đồ nền | Button → basemap menu | — | Floating map · mở radio/menu: Vệ tinh / Google / Giao thông / Hành chính / Không nền |
| Vệ tinh | Radio / menu item basemap | — | DOM action · `basemap=satellite` |
| Google | Radio / menu item basemap | — | `basemap=google` |
| Giao thông | Radio / menu item basemap | — | `basemap=traffic` |
| Hành chính | Radio / menu item basemap | — | `basemap=admin` |
| Không nền | Radio / menu item basemap | — | `basemap=none` |

**Grid columns:** trên ảnh **không lộ cột** (empty state) — parity demo vẫn cần grid list nhân viên/vị trí khi có data (STT · nhân viên · tuyến/đoạn · trạng thái check-in · thời gian · tọa độ/last GPS) theo `/erp-form-context` list shell. Không clone bảng ExtJS GOVOne.

### Tính năng / hành động

**Primary — Vị trí hiện thời `004` (app-tile / popup)**
- Mở từ tile **QUẢN LÝ GIÁM SÁT** → `#pnlViTriHienThoi`
- Lọc **Công ty/Nhân viên** (Tất cả / tree) + **Đoạn đường** → reload list + map
- Xem list nhân viên / vị trí · empty **Không có bản ghi nào** · **Tổng số** / **Chưa checkin**
- **Tải lại** — refresh list + map theo filter hiện tại
- **Xuất excel** — mở dialog xuất (sibling `007/008/009-xuat-excel`: Từ ngày · Đến ngày · loại NV · Xuất người không checkin…)
- Map: pan/zoom · overlay tuyến · **Bản đồ nền** → chọn Vệ tinh / Google / Giao thông / Hành chính / Không nền
- Splitter thu/mở panel list
- Nav sidebar: **Giám sát nhân viên 2** · **Giám sát tuyến đường 2** · **Lịch sử checkin 2** · **Tổng hợp 2**
- User menu **Ban.TK.…** → Hồ sơ / Đổi mật khẩu / Đăng xuất (sibling `006` / `009-oi-mat-khau`)
- Upstream: login shell GOVOne · Downstream: export modal · user profile · basemap switch
- Bind filter → list + map markers/tracks — control-map `patrol` · API `GET /api/v1/patrols…`
- ≠ form CRUD catalog thuần · ≠ GIS editor biên tập geometry (`geditor`) · ≠ dashboard KPI ngày (`003`/`004-dashboad`)

**Header / shell (ảnh + DOM)**
- Hamburger toggle sidebar
- Title panel **Vị trí hiện thời**
- Bell thông báo
- **Ban.TK.Nguyễn Anh Phúc** (user menu)

**Sidebar (ảnh)**
- **Giám sát nhân viên 2**
- **Giám sát tuyến đường 2**
- **Lịch sử checkin 2**
- **Tổng hợp 2**

**List toolbar / footer (ảnh + DOM)**
- Filter tree/combo Công ty-Nhân viên
- Filter combo Đoạn đường
- **Xuất excel**
- **Tải lại**
- Status **Tổng số : 0** · (DOM) **Chưa checkin: 0**

**Map chrome (ảnh + DOM)**
- **+** / **−** zoom
- **Bản đồ nền**
- **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**

**Actions bổ sung từ sibling (map demo parity)**  
Deep capture `005` · User menu (`006`) · Xuất Excel dialog (`007`–`009`) · Tải lại variants (`008`/`010`/`011`) · Đổi mật khẩu (`009`) · dashboard tuần kiểm/tuần đường cross-ref — giữ trong `patrol-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `004-quan-ly-giam-sat`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (filter Công ty-NV + Đoạn đường · list empty/data · Xuất excel · Tải lại · Tổng số/Chưa checkin · sidebar 4 mục · map zoom · Bản đồ nền / basemap 5 lựa chọn · splitter · user menu), modern `/erp-form-context` + `/erp-report-context` + GIS basemap (không clone GOVOne)
- **DOM / bind:** treepicker company/staff · combo đoạn đường · list grid · count badges · basemap switcher · zoom → TreePicker + Select + DataGrid + MapPane (Kind E + map)
- **Capture path:** app-tile / popup (sibling deep `005` → `capture/patrol/root/view/`)
- Sibling: `005-quan-ly-giam-sat` (cùng slug/URL) · `006`–`011` (user / export / reload drills)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
