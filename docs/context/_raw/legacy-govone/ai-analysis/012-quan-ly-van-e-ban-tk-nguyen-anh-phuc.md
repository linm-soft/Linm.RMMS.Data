# AI Vision — QUẢN LÝ VẤN ĐỀ › Ban.TK.Nguyễn Anh Phúc

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `012-quan-ly-van-e-ban-tk-nguyen-anh-phuc` |
| **slug** | `incident` |
| **url** | https://pmdb.govone.vn/dbv3baotri.aspx#panelVanDe |
| **screenshot** | `screenshots/012-quan-ly-van-e-ban-tk-nguyen-anh-phuc.png` |
| **DOM fields** | 20 → **24** (vision-enriched: empty state · status badges · pager · Định vị) |
| **DOM labels** | 15 → **22** (vision-enriched: sidebar 7 · empty · Trang/của) |
| **DOM buttons** | 24 → **33** (vision-enriched: hamburger · bell · refresh · sidebar 7 · pager · status chips · overflow icon) |

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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `012-quan-ly-van-e-ban-tk-nguyen-anh-phuc.png`

### Màn hình / mục đích

Màn **QUẢN LÝ VẤN ĐỀ › Ban.TK.Nguyễn Anh Phúc** — panel **Vấn đề** (`dbv3baotri.aspx#panelVanDe`) trên app GOVOne gServer 2.1.  
Capture path: `capture/incident/ban-tk-nguyen-anh-phuc/view/` (master/page/action) · kind inventory **left-rail** · `via: deep` · pageTitle **Ban.TK.Nguyễn Anh Phúc**.  
Điểm khác root `005`/`010`/`012-quan-ly-van-e`: drill **user shell** — DOM có **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** (+ trigger **Ban.TK.Nguyễn Anh Phúc**); ảnh viewport: user menu **đóng** (chỉ thấy avatar + label header).  
**Mục đích:** (1) cùng shell rail-left list+map quản lý **vấn đề / sự cố** · (2) ghi nhận context **user Ban.TK** trên panel Vấn đề · (3) filter đa tiêu chí (DOM) · (4) CRUD / giao việc (**Thêm** · **Thêm CV** · **Xem CV** · **Xem** · **Xóa** · **Phản hồi**) · (5) **Xuất dữ liệu** · **BC sở** · (6) map đối chiếu vị trí · (7) shell auth menu (parity).  

Ảnh: shell **list trái + map phải** · list **empty** («Không có bản ghi nào») · footer **Trang 0 của 0** + 3 ô đếm màu (xanh / nâu / đỏ = `0`) · toolbar **Thêm · Thêm CV · Xem CV · Xem · Xuất dữ liệu** (+ icon refresh · icon overflow/tools mũi tên xuống) · map Nghệ An–Thanh Hóa (nhãn `QL.217` · `QL.48` · `ĐT.544C` · Quan Sơn · Quan Hóa · Ngọc Lặc · …) · scale **20 km / 10 mi**.  
Filter strip DOM (**Tìm mới** / **Tìm kiếm** + combo/treepicker) **không bung** trên viewport — latent trong search panel (**Hủy** / **Áp dụng**).  
**Thêm CV / Xem CV / Xem / Phản hồi / BC sở / Áp dụng** = disabled khi chưa chọn bản ghi (inventory · ảnh: Thêm CV / Xem CV / Xem xám).  

Kind shell: **F/custom map — erp-custom-manage + GIS** + **user shell menu** → demo MFE theo `/erp-form-context` + MapPane + UserMenu — **không** clone skin ExtJS GOVOne.  
Sibling: root `005`/`010`/`012` · Ban.TK view twin `013` · create `011`/`013-them`/`014`/`016`/`017` · Thêm CV `014`/`015` · user drills password sibling.  
Domain: Incident 1:1 Vấn đề · assign/giao CV · map pin · shell auth · API `GET/POST /api/v1/incidents…`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width | Logo **GOVOne** · hamburger · title **Vấn đề** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** (trigger — menu **đóng** trên ảnh) |
| **Z1b User dropdown (DOM)** | Menu user — không mở trên ảnh | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** (DOM actions; twin `013`) |
| **Z2 Sidebar nav** | Menu trái xám đậm — module Bảo trì / Vấn đề | **Vấn đề** (active · indicator xanh) · **Công việc** · **Công tác nghiệm thu** · **Kiểm tra** · **Lịch sử bảo trì** · **Tổng hợp vấn đề** (chevron submenu) · **Gửi thông báo** |
| **Z3 Toolbar list** | Hàng action trên panel list | Icon **refresh** (tải lại list+map) · **Thêm** (primary · enabled) · **Thêm CV** (disabled) · **Xem CV** (disabled) · **Xem** (disabled) · **Xuất dữ liệu** (dropdown) · icon overflow/tools (→ **Xóa** / **Phản hồi** / **BC sở**) |
| **Z4 Filter / search (DOM — collapsed)** | Panel tìm — không bung trên ảnh | **Tìm mới** · **Tìm kiếm** · filters DOM (Đoạn đường · Loại vấn đề · Người ghi VĐ · Công ty · Tuần đường · Trạng thái · Trạng thái đọc · Tuần kiểm · Đơn vị BĐTX · Mức độ · Hướng xử lý · Tài sản · TT báo cáo · Định vị · Mô tả) · **Hủy** · **Áp dụng** |
| **Z5 Grid / list content** | Danh sách vấn đề — empty | Empty **Không có bản ghi nào** · không lộ cột (`tableHeaders: []`) |
| **Z6 List footer** | Status chips + pager | 3 ô đếm màu **0** (xanh / nâu / đỏ — filter nhanh theo nhóm trạng thái/mức độ) · pager `<<` `<` **Trang 0 của 0** `>` `>>` · `inputItem` = trang hiện tại · text **Không có bản ghi nào** |
| **Z7 Splitter** | Thanh dọc list ↔ map | Grip thu/mở panel list |
| **Z8 Map canvas** | Bản đồ mạng tuyến / vị trí VĐ | Polyline đường · nhãn `QL.217` · `QL.48` · `ĐT.544C` · địa danh Quan Sơn / Quan Hóa / Ngọc Lặc · vùng Nghệ An–Thanh Hóa |
| **Z9 Map chrome** | Điều khiển map | Zoom **+** (`#zoomIn` · kind DOM `create` **misclassified**) / **−** (`#zoomOut`) · **Bản đồ nền** → **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền** · scale **20 km / 10 mi** |

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
| Zoom + | Map zoom in | — | `#zoomIn` · **≠ Create** |
| Zoom − | Map zoom out | — | `#zoomOut` |

**Grid columns:** trên ảnh **không lộ cột** (empty + `tableHeaders: []`) — parity demo khi có data theo `/erp-form-context` list shell: STT · mã/loại vấn đề · đoạn đường · mức độ · trạng thái xử lý · trạng thái đọc · người ghi · ngày · vị trí/GPS · row actions (Xem · Thêm CV · Xóa…). Không clone ExtJS.

**Filter semantics:** **Tìm kiếm** + **Áp dụng** → refetch list+map · **Tìm mới** → clear filter · **Hủy** đóng panel · checkbox **Định vị** lọc theo có tọa độ.

### Tính năng / hành động

**Primary — Ban.TK view `012` (user shell trên QUẢN LÝ VẤN ĐỀ)**
- Upstream: tile **QUẢN LÝ VẤN ĐỀ** → `#panelVanDe` · deep vào user **Ban.TK.…**
- Toolbar: **refresh** · **Thêm** (→ create sibling `011`/`013-them`/`016`/`017`) · **Thêm CV** / **Xem CV** (→ assign/WO · sibling `014`/`015` · disabled empty) · **Xem** (disabled) · **Xuất dữ liệu** · overflow → **Xóa** · **Phản hồi** · **BC sở**
- Filter panel (DOM): **Tìm mới** · **Tìm kiếm** · multi-combo + **Định vị** · **Hủy** / **Áp dụng**
- List empty + status chips 0/0/0 + pager **Trang 0 của 0**
- Map: pan/zoom · overlay tuyến · **Bản đồ nền** 5 lựa chọn · select row ↔ highlight pin (parity)
- User shell (DOM): **Ban.TK.…** → **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** (ảnh: menu đóng)
- Sidebar module: Vấn đề (active) · Công việc · Công tác nghiệm thu · Kiểm tra · Lịch sử bảo trì · Tổng hợp vấn đề · Gửi thông báo
- Downstream: create **Thêm** · Thêm CV · export menu · đổi MK
- ≠ GIS editor geometry (`geditor`) · ≠ dashboard KPI · ≠ patrol-only monitor
- Demo parity: same actions · UI modern `/erp-form-context` + MapPane + UserMenu — **không** clone GOVOne · **+** = zoomIn ≠ Create

**Toolbar (ảnh + DOM)**
- Refresh (icon — tải lại list+map)
- **Thêm** → create vấn đề
- **Thêm CV** → tạo công việc gắn VĐ (disabled empty)
- **Xem CV** → xem CV liên quan (disabled)
- **Xem** → xem chi tiết VĐ (disabled)
- **Xuất dữ liệu** → menu export
- Overflow/tools icon → **Xóa** · **Phản hồi** · **BC sở** (DOM; Phản hồi/BC sở disabled empty)
- (DOM filter zone) **Tìm mới** · **Tìm kiếm**

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

**Map chrome (ảnh + DOM)**
- **+** zoomIn (`#zoomIn` — **không** Create)
- **−** zoomOut (`#zoomOut`)
- **Bản đồ nền** · **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**
- Scale **20 km / 10 mi**
- Splitter list↔map

**Actions bổ sung từ sibling**  
Twin Ban.TK `013` · root `005`/`010`/`012` · Create/Thêm `011`/`013-them`/`014`/`016`/`017` · Thêm CV `014`/`015` · export menu trong `incident-actions.md` — giữ parity demo.

### Map → step context

- Feature: `docs/context/features/incident.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `012-quan-ly-van-e-ban-tk-nguyen-anh-phuc`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/incident-actions.md`
- Demo: parity UI trong `incident-demo.html` / MFE — same actions (**Thêm** · **Thêm CV** · **Xem CV** · **Xem** · **Xóa** · **Phản hồi** · **Xuất dữ liệu** · **BC sở** · **Tìm mới**/**Tìm kiếm**/filter multi-combo · **Định vị** · refresh · status chips · pager · sidebar 7 mục · map zoom +/− · **Bản đồ nền**/basemap 5 · splitter · **UserMenu** Hồ sơ / Đổi MK / Đăng xuất), modern `/erp-form-context` + MapPane + UserMenu (không clone GOVOne · **+** = zoomIn ≠ Create)
- **DOM / bind:** UserMenu 3 items · treepicker + multi Select filters · checkbox Định vị · DataGrid + status chips + pager · toolbar CRUD/CV/export · MapPane basemap/zoom → LinErpListFilterBar + DataGrid + MapPane + UserMenu (Kind F/custom map + shell auth)
- **Capture path:** `capture/incident/ban-tk-nguyen-anh-phuc/view/` (master/page/action)
- Sibling: `013` (twin Ban.TK view) · root `005`/`010`/`012` · `013-them` create · `014`/`015` Thêm CV · password drills

## Status

- [x] Vision reviewed
- [x] Mapped to step context
