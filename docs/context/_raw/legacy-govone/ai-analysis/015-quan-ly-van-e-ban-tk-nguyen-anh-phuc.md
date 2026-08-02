# AI Vision — QUẢN LÝ VẤN ĐỀ › Ban.TK.Nguyễn Anh Phúc › +

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `015-quan-ly-van-e-ban-tk-nguyen-anh-phuc` |
| **slug** | `incident` |
| **url** | https://pmdb.govone.vn/dbv3baotri.aspx#panelVanDe |
| **screenshot** | `screenshots/015-quan-ly-van-e-ban-tk-nguyen-anh-phuc.png` |
| **DOM fields** | 20 → **24** (vision-enriched: empty state · status badges · pager · Định vị) |
| **DOM labels** | 15 → **22** (vision-enriched: sidebar 7 · empty · Trang/của) |
| **DOM buttons** | 34 → **42** (vision-enriched: hamburger · bell · refresh · sidebar 7 · pager · status chips · overflow · export submenu 9) |

## DOM inventory (đã capture)

### Labels
- Đoạn đường:
- Đoạn đường:
- Loại vấn đề:
- Người ghi VĐ:
- Công ty:
- Tuần đường:
- Trạng thái:
- Trạng thái đọc:
- Tuần kiểm:
- Đơn vị BĐTX:
- Mức độ:
- Hướng xử lý:
- Tài sản:
- TT báo cáo:
- Định vị

### Buttons / actions
- Ban.TK.Nguyễn Anh Phúc
- Tìm mới
- Tìm kiếm
- Thêm
- Thêm CV
- Xem CV
- Xem
- Xóa
- Phản hồi
- Xuất dữ liệu
- BC sở
- Vệ tinh
- Google
- Giao thông
- Hành chính
- Không nền
- Bản đồ nền
- +
- −
- Hủy
- Áp dụng
- Hồ sơ của tôi
- Đổi mật khẩu
- Đăng xuất
- Xuất NKTĐ Tổng hợp
- Xuất NKTĐ Tổng hợp 2
- Xuất NKTĐ Tổng Hợp (ĐTHP)
- Xuất sổ NKTĐ theo vấn đề
- Xuất sổ NK tuần đường
- Xuất NK tuần kiểm
- Xuất tất cả NK Tuần kiểm
- Xuất nhật ký tuần đèn
- Xuất nhật ký tuần đường đô thị
- Xuất bảng tổng hợp

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | treepickerex-1026-inputEl |
| input | text | doanduong |
| input | text | loaivande |
| input | text | treepickerex-1030-inputEl |
| input | text | congty |
| input | text | tuanduong |
| input | text | trangthaixuly |
| input | text | trangthaidoc |
| input | text | tuankiemchidao |
| input | text | hattruongchidao |
| input | text | mucdonghiemtrong |
| input | text | mota |
| input | text | huongxuly |
| input | text | loaiTaiSan |
| input | text | trangthaibaocao |
| input | text | textfield-1087-inputEl |
| input | text | textfield-1088-inputEl |
| input | text | textfield-1089-inputEl |
| input | checkbox | ckDinhVi |
| input | text | inputItem |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `015-quan-ly-van-e-ban-tk-nguyen-anh-phuc.png`

### Màn hình / mục đích

Màn **QUẢN LÝ VẤN ĐỀ › Ban.TK.Nguyễn Anh Phúc › +** — panel **Vấn đề** (`dbv3baotri.aspx#panelVanDe`) trên app GOVOne gServer 2.1.  
Capture path: `capture/incident/ban-tk-nguyen-anh-phuc/page/` (master/page/action) · inventory `kind: form-sample` · `via: create` · `formSample.trigger: "+"` · pageTitle **Ban.TK.Nguyễn Anh Phúc**.  

**CRITICAL — misclassification:** menuText `› +` và `kind=form-sample` / `via=create` / `trigger=+` là **false Create**. Ảnh **không** mở form Thêm; viewport = cùng shell Ban.TK **list trái + map phải** (empty) sau khi bấm map zoom **+** (`#zoomIn`). **`+` = zoomIn ≠ Create / ≠ Thêm.** Sibling create thật: `011`/`013-them`/`014`/`016`/`017`.  

Điểm khác root `005`/`010`/`012-quan-ly-van-e`: drill **user shell** Ban.TK — DOM có **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất**.  
Điểm khác twin Ban.TK view `012`/`013`: (1) capture path `…/page/` + trigger `+` (zoom) · (2) map **zoom gần hơn** — scale **10 km / 5 mi** · nhãn **Quỳ Châu** · **Anh Sơn** · **Đô Lương** · `QL.48` · `QL.16` · `ĐT.532` · `ĐT.534` · (3) DOM lộ đủ **submenu Xuất dữ liệu** (9 mục NKTĐ / NK tuần…).  

**Mục đích:** (1) cùng shell rail-left list+map quản lý **vấn đề / sự cố** · (2) ghi nhận context **user Ban.TK** · (3) filter đa tiêu chí (DOM) · (4) CRUD / giao việc (**Thêm** · **Thêm CV** · **Xem CV** · **Xem** · **Xóa** · **Phản hồi**) · (5) **Xuất dữ liệu** + submenu NKTĐ/NK · **BC sở** · (6) map zoom +/− · basemap · (7) shell auth menu · (8) **sửa sai** capture: `+` không phải Create.  

Ảnh: shell **list trái + map phải** · list **empty** («Không có bản ghi nào») · footer **Trang 0 của 0** + 3 ô đếm màu (xanh / nâu / đỏ = `0`) · toolbar **Thêm · Thêm CV · Xem CV · Xem · Xuất dữ liệu** (+ icon refresh · icon overflow/tools) · map Nghệ An (Quỳ Châu / Anh Sơn / Đô Lương · polyline xanh) · scale **10 km / 5 mi**.  
Filter strip DOM (**Tìm mới** / **Tìm kiếm** + combo/treepicker) **không bung** trên viewport — latent (**Hủy** / **Áp dụng**).  
**Thêm CV / Xem CV / Xem / Phản hồi / BC sở / Áp dụng** = disabled khi chưa chọn bản ghi (ảnh: Thêm CV / Xem CV / Xem xám).  

Kind shell: **F/custom map — erp-custom-manage + GIS** + **user shell menu** → demo MFE theo `/erp-form-context` + MapPane + UserMenu — **không** clone skin ExtJS GOVOne.  
Sibling: Ban.TK view `012`/`013` · root `005`/`010`/`012` · create `011`/`013-them`/`014`/`016`/`017` · Thêm CV `014`/`015-them-cv` · export menu `incident-actions.md`.  
Domain: Incident 1:1 Vấn đề · assign/giao CV · map pin/zoom · shell auth · export NKTĐ · API `GET/POST /api/v1/incidents…`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width | Logo **GOVOne** · hamburger · title **Vấn đề** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** (trigger — menu **đóng** trên ảnh) |
| **Z1b User dropdown (DOM)** | Menu user — không mở trên ảnh | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** |
| **Z2 Sidebar nav** | Menu trái xám đậm — module Bảo trì / Vấn đề | **Vấn đề** (active · indicator xanh) · **Công việc** · **Công tác nghiệm thu** · **Kiểm tra** · **Lịch sử bảo trì** · **Tổng hợp vấn đề** (chevron submenu) · **Gửi thông báo** |
| **Z3 Toolbar list** | Hàng action trên panel list | Icon **refresh** · **Thêm** (primary · enabled) · **Thêm CV** (disabled) · **Xem CV** (disabled) · **Xem** (disabled) · **Xuất dữ liệu** (dropdown — submenu DOM) · icon overflow/tools (→ **Xóa** / **Phản hồi** / **BC sở**) |
| **Z3b Export submenu (DOM)** | Menu dưới **Xuất dữ liệu** — không bung rõ trên ảnh | **Xuất NKTĐ Tổng hợp** · **Xuất NKTĐ Tổng hợp 2** · **Xuất NKTĐ Tổng Hợp (ĐTHP)** · **Xuất sổ NKTĐ theo vấn đề** · **Xuất sổ NK tuần đường** · **Xuất NK tuần kiểm** · **Xuất tất cả NK Tuần kiểm** · **Xuất nhật ký tuần đèn** · **Xuất nhật ký tuần đường đô thị** · **Xuất bảng tổng hợp** |
| **Z4 Filter / search (DOM — collapsed)** | Panel tìm — không bung trên ảnh | **Tìm mới** · **Tìm kiếm** · filters DOM (Đoạn đường · Loại vấn đề · Người ghi VĐ · Công ty · Tuần đường · Trạng thái · Trạng thái đọc · Tuần kiểm · Đơn vị BĐTX · Mức độ · Hướng xử lý · Tài sản · TT báo cáo · Định vị · Mô tả) · **Hủy** · **Áp dụng** |
| **Z5 Grid / list content** | Danh sách vấn đề — empty | Empty **Không có bản ghi nào** · không lộ cột (`tableHeaders: []`) |
| **Z6 List footer** | Status chips + pager | 3 ô đếm màu **0** (xanh / nâu / đỏ) · pager `<<` `<` **Trang 0 của 0** `>` `>>` · `inputItem` · text **Không có bản ghi nào** |
| **Z7 Splitter** | Thanh dọc list ↔ map | Grip thu/mở panel list |
| **Z8 Map canvas** | Bản đồ mạng tuyến / vị trí VĐ — **đã zoom in** | Polyline xanh · nhãn **Quỳ Châu** · **Anh Sơn** · **Đô Lương** · `QL.48` · `QL.16` · `ĐT.532` · `ĐT.534` · vùng Nghệ An |
| **Z9 Map chrome** | Điều khiển map — **trigger capture `+`** | Zoom **+** (`#zoomIn` · inventory kind `create` **MISCLASSIFIED**) / **−** (`#zoomOut`) · **Bản đồ nền** → **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền** · scale **10 km / 5 mi** |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Đoạn đường | Combo / Select | — (filter) | DOM `doanduong` · placeholder **Chọn đoạn đường** · Z4 collapsed trên ảnh |
| Loại vấn đề | Combo / Select | — (filter) | DOM `loaivande` · placeholder **Loại vấn đề** |
| Người ghi VĐ / Công ty-Người ghi | TreePicker / Lookup | — (filter) | DOM `treepickerex-1030` · placeholder **Chọn Công ty/Người ghi vấn đề** · `treepickerex-1026` |
| Công ty | Combo / Select | — (filter) | DOM `congty` · placeholder **Chọn công ty** |
| Tuần đường | Combo / Select | — (filter) | DOM `tuanduong` · placeholder **Chọn tuần đường** |
| Trạng thái (xử lý) | Combo / Select | — (filter) | DOM `trangthaixuly` · placeholder **Trạng thái xử lý** |
| Trạng thái đọc | Combo / Select | — (filter) | DOM `trangthaidoc` · placeholder **Trạng thái đọc** |
| Tuần kiểm | Combo / Select | — (filter) | DOM `tuankiemchidao` |
| Đơn vị BĐTX | Combo / Select | — (filter) | DOM `hattruongchidao` |
| Mức độ | Combo / Select | — (filter) | DOM `mucdonghiemtrong` · placeholder **Mức độ nghiêm trọng** |
| Mô tả | Text / Search | — (filter) | DOM `mota` · placeholder **Mô tả** |
| Hướng xử lý | Combo / Select | — (filter) | DOM `huongxuly` · placeholder **Chọn hướng xử lý** |
| Tài sản | Combo / Select | — (filter) | DOM `loaiTaiSan` |
| TT báo cáo | Combo / Select | — (filter) | DOM `trangthaibaocao` · placeholder **Trạng thái báo cáo** |
| Định vị | Checkbox / Switch | — (filter) | DOM `ckDinhVi` · label **Định vị** |
| textfield-1087…1089 | Text (toolbar/aux) | — | DOM toolbar zone — phụ filter/search |
| Trang (pager) | Number | — | DOM `inputItem` · ảnh **Trang 0 của 0** |
| Status chips 0/0/0 | Metric / filter chips | — | Footer Z6 — 3 màu xanh/nâu/đỏ |
| Empty state | EmptyState text | — | **Không có bản ghi nào** |
| Ban.TK.Nguyễn Anh Phúc | UserMenu trigger | — | Header Z1 · menu đóng trên ảnh |
| Hồ sơ của tôi | MenuItem / Nav | — | Z1b DOM · → profile shell |
| Đổi mật khẩu | MenuItem / Nav | — | Z1b DOM · → đổi MK sibling |
| Đăng xuất | MenuItem / Action | — | Z1b DOM · → logoff |
| Bản đồ nền | Button → basemap menu | — | Z9 |
| Vệ tinh | Radio / menu basemap | — | `basemap=satellite` |
| Google | Radio / menu basemap | — | `basemap=google` |
| Giao thông | Radio / menu basemap | — | `basemap=traffic` |
| Hành chính | Radio / menu basemap | — | `basemap=admin` |
| Không nền | Radio / menu basemap | — | `basemap=none` |
| Zoom + | Map zoom in | — | `#zoomIn` · **≠ Create** · đây là trigger capture `› +` |
| Zoom − | Map zoom out | — | `#zoomOut` |
| Xuất NKTĐ Tổng hợp | MenuItem / Export | — | Z3b DOM · under **Xuất dữ liệu** |
| Xuất NKTĐ Tổng hợp 2 | MenuItem / Export | — | Z3b DOM |
| Xuất NKTĐ Tổng Hợp (ĐTHP) | MenuItem / Export | — | Z3b DOM |
| Xuất sổ NKTĐ theo vấn đề | MenuItem / Export | — | Z3b DOM |
| Xuất sổ NK tuần đường | MenuItem / Export | — | Z3b DOM |
| Xuất NK tuần kiểm | MenuItem / Export | — | Z3b DOM |
| Xuất tất cả NK Tuần kiểm | MenuItem / Export | — | Z3b DOM |
| Xuất nhật ký tuần đèn | MenuItem / Export | — | Z3b DOM |
| Xuất nhật ký tuần đường đô thị | MenuItem / Export | — | Z3b DOM |
| Xuất bảng tổng hợp | MenuItem / Export | — | Z3b DOM |

**Grid columns:** trên ảnh **không lộ cột** (empty + `tableHeaders: []`) — parity demo khi có data theo `/erp-form-context` list shell: STT · mã/loại vấn đề · đoạn đường · mức độ · trạng thái xử lý · trạng thái đọc · người ghi · ngày · vị trí/GPS · row actions (Xem · Thêm CV · Xóa…). Không clone ExtJS.

**Filter semantics:** **Tìm kiếm** + **Áp dụng** → refetch list+map · **Tìm mới** → clear filter · **Hủy** đóng panel · checkbox **Định vị** lọc theo có tọa độ.

### Tính năng / hành động

**Primary — Ban.TK `015` (user shell + map zoom `+` mislabeled Create)**
- Upstream: tile **QUẢN LÝ VẤN ĐỀ** → `#panelVanDe` · deep user **Ban.TK.…** · deep-click map **+** (capture ghi `› +`)
- **Không** phải form Create — ảnh = list+map empty sau zoomIn
- Toolbar: **refresh** · **Thêm** (→ create sibling thật) · **Thêm CV** / **Xem CV** (→ `014`/`015-them-cv` · disabled empty) · **Xem** (disabled) · **Xuất dữ liệu** → submenu NKTĐ/NK 9+ mục · overflow → **Xóa** · **Phản hồi** · **BC sở**
- Filter panel (DOM): **Tìm mới** · **Tìm kiếm** · multi-combo + **Định vị** · **Hủy** / **Áp dụng**
- List empty + status chips 0/0/0 + pager **Trang 0 của 0**
- Map: pan/zoom (**+**/**−**) · overlay tuyến · **Bản đồ nền** 5 lựa chọn · scale 10 km · select row ↔ highlight pin (parity)
- User shell (DOM): **Ban.TK.…** → **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** (ảnh: menu đóng)
- Sidebar module: Vấn đề (active) · Công việc · Công tác nghiệm thu · Kiểm tra · Lịch sử bảo trì · Tổng hợp vấn đề · Gửi thông báo
- Downstream: create **Thêm** · Thêm CV · export NKTĐ · đổi MK
- ≠ GIS editor geometry (`geditor`) · ≠ dashboard KPI · ≠ true Create modal
- Demo parity: same actions · UI modern `/erp-form-context` + MapPane + UserMenu — **không** clone GOVOne · **+** = zoomIn ≠ Create

**Toolbar (ảnh + DOM)**
- Refresh (icon — tải lại list+map)
- **Thêm** → create vấn đề (sibling create)
- **Thêm CV** → tạo công việc gắn VĐ (disabled empty)
- **Xem CV** → xem CV liên quan (disabled)
- **Xem** → xem chi tiết VĐ (disabled)
- **Xuất dữ liệu** → menu export (mở submenu Z3b)
- Overflow/tools icon → **Xóa** · **Phản hồi** · **BC sở** (DOM; Phản hồi/BC sở disabled empty)
- (DOM filter zone) **Tìm mới** · **Tìm kiếm**

**Export submenu (DOM — latent / scraped)**
- **Xuất NKTĐ Tổng hợp** (disabled inventory)
- **Xuất NKTĐ Tổng hợp 2** (disabled inventory)
- **Xuất NKTĐ Tổng Hợp (ĐTHP)**
- **Xuất sổ NKTĐ theo vấn đề**
- **Xuất sổ NK tuần đường**
- **Xuất NK tuần kiểm** (disabled inventory)
- **Xuất tất cả NK Tuần kiểm**
- **Xuất nhật ký tuần đèn**
- **Xuất nhật ký tuần đường đô thị**
- **Xuất bảng tổng hợp**

**Header / shell (ảnh)**
- Hamburger toggle sidebar
- Title **Vấn đề**
- Bell thông báo
- **Ban.TK.Nguyễn Anh Phúc** (user menu trigger — **đóng** trên ảnh)

**User dropdown (DOM — latent)**
- **Hồ sơ của tôi**
- **Đổi mật khẩu**
- **Đăng xuất**

**Sidebar (ảnh)**
- **Vấn đề** (active)
- **Công việc**
- **Công tác nghiệm thu**
- **Kiểm tra**
- **Lịch sử bảo trì**
- **Tổng hợp vấn đề**
- **Gửi thông báo**

**Map chrome (ảnh + DOM) — đây là ý nghĩa `› +`**
- **+** zoomIn (`#zoomIn` — **không** Create · inventory misclassified)
- **−** zoomOut (`#zoomOut`)
- **Bản đồ nền** · **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**
- Scale **10 km / 5 mi** (zoomed vs twin `012`/`013` = 20 km)
- Splitter list↔map

**Actions bổ sung từ sibling**  
Twin Ban.TK view `012`/`013` · root `005`/`010`/`012` · Create/Thêm `011`/`013-them`/`014`/`016`/`017` · Thêm CV `014`/`015-them-cv` · export menu trong `incident-actions.md` — giữ parity demo.

### Map → step context

- Feature: `docs/context/features/incident.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `015-quan-ly-van-e-ban-tk-nguyen-anh-phuc`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/incident-actions.md`
- Demo: parity UI trong `incident-demo.html` / MFE — same actions (**Thêm** · **Thêm CV** · **Xem CV** · **Xem** · **Xóa** · **Phản hồi** · **Xuất dữ liệu** + submenu NKTĐ/NK · **BC sở** · **Tìm mới**/**Tìm kiếm**/filter multi-combo · **Định vị** · refresh · status chips · pager · sidebar 7 mục · map zoom +/− · **Bản đồ nền**/basemap 5 · splitter · **UserMenu** Hồ sơ / Đổi MK / Đăng xuất), modern `/erp-form-context` + MapPane + UserMenu (không clone GOVOne · **+** = zoomIn ≠ Create)
- **DOM / bind:** UserMenu 3 items · treepicker + multi Select filters · checkbox Định vị · DataGrid + status chips + pager · toolbar CRUD/CV/export · ExportMenu NKTĐ · MapPane basemap/zoom → LinErpListFilterBar + DataGrid + MapPane + UserMenu (Kind F/custom map + shell auth)
- **Capture path:** `capture/incident/ban-tk-nguyen-anh-phuc/page/` (master/page/action) · **note:** `formSample.trigger=+` = zoomIn misclassified
- Sibling: `012`/`013` (Ban.TK view) · root `005`/`010`/`012` · create `011`/`013-them`/`014`/`016`/`017` · Thêm CV `014`/`015-them-cv` · password drills

## Status

- [x] Vision reviewed
- [x] Mapped to step context
