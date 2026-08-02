# AI Vision — QUẢN LÝ VẤN ĐỀ

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `010-quan-ly-van-e` |
| **slug** | `incident` |
| **url** | https://pmdb.govone.vn/dbv3baotri.aspx#panelVanDe |
| **screenshot** | `screenshots/010-quan-ly-van-e.png` |
| **DOM fields** | 20 → **24** (vision-enriched: empty state · status badges · pager · Định vị) |
| **DOM labels** | 15 → **22** (vision-enriched: sidebar 7 · empty · Trang/của) |
| **DOM buttons** | 21 → **30** (vision-enriched: hamburger · bell · refresh · sidebar 7 · pager · status chips · overflow icon) |

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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `010-quan-ly-van-e.png`

### Màn hình / mục đích

Màn **QUẢN LÝ VẤN ĐỀ** — panel **Vấn đề** (`dbv3baotri.aspx#panelVanDe`) trên app GOVOne gServer 2.1.  
Mở từ tile **QUẢN LÝ VẤN ĐỀ** (app-tile / popup) · capture path `capture/incident/root/view/` (master/page/action · inventory id song song `005`/`012`).  
**Mục đích:** (1) quản lý danh sách **vấn đề / sự cố** trên tuyến · (2) filter đa tiêu chí (DOM: đoạn đường · loại VĐ · người ghi · công ty · tuần đường · trạng thái xử lý/đọc · tuần kiểm · đơn vị BĐTX · mức độ · hướng xử lý · tài sản · TT báo cáo · định vị · mô tả) · (3) CRUD / giao việc (**Thêm** · **Thêm CV** · **Xem CV** · **Xem** · **Xóa** · **Phản hồi**) · (4) **Xuất dữ liệu** · **BC sở** · (5) đối chiếu vị trí trên **bản đồ** (list↔map split).  

Ảnh capture: shell **list trái + map phải** · list **empty** («Không có bản ghi») · footer **Trang 0 của 0** + 3 ô đếm màu (xanh / nâu / đỏ = `0`) · toolbar **Thêm · Thêm CV · Xem CV · Xem · Xuất dữ liệu** (+ icon refresh · icon overflow/download) · map vùng Nghệ An trung (nhãn **Con Cuông** · **Anh Sơn** · **Đô Lương** · mạng polyline xanh) · scale **20 km / 10 mi**.  
Filter strip DOM (**Tìm mới** / **Tìm kiếm** + combo/treepicker) **không bung** trên viewport ảnh — latent trong search panel (Hủy / Áp dụng).  
**Thêm CV / Xem CV / Xem / Phản hồi / BC sở / Áp dụng** = disabled khi chưa chọn bản ghi (inventory).  

Kind shell: **F/custom map — erp-custom-manage + GIS** (list shell + MapPane) → demo MFE theo `/erp-form-context` + MapPane basemap — **không** clone skin ExtJS GOVOne.  
Sibling cùng URL/slug: app-tile root `005` · deep root `012` · user `012-ban-tk`/`013` · create `011-root-them`/`013–017-them*` · Thêm CV drills `014`/`015`.  
Domain: Incident 1:1 Vấn đề · multi-source → assign/giao CV · map pin · API `GET/POST /api/v1/incidents…`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width | Logo **GOVOne** · hamburger · title **Vấn đề** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** (dropdown) |
| **Z2 Sidebar nav** | Menu trái xám đậm — module Bảo trì / Vấn đề | **Vấn đề** (active · indicator xanh) · **Công việc** · **Công tác nghiệm thu** · **Kiểm tra** · **Lịch sử bảo trì** · **Tổng hợp vấn đề** (chevron submenu) · **Gửi thông báo** |
| **Z3 Toolbar list** | Hàng action trên panel list | Icon **refresh** (tải lại list+map) · **Thêm** (primary) · **Thêm CV** · **Xem CV** · **Xem** · **Xuất dữ liệu** (dropdown) · icon overflow/tools (vòng tròn mũi tên xuống — lộ thêm Xóa/Phản hồi/BC sở hoặc panel phụ) |
| **Z4 Filter / search (DOM — collapsed)** | Panel tìm — không bung trên ảnh | **Tìm mới** · **Tìm kiếm** · filters DOM (Đoạn đường · Loại vấn đề · Người ghi VĐ · Công ty · Tuần đường · Trạng thái · Trạng thái đọc · Tuần kiểm · Đơn vị BĐTX · Mức độ · Hướng xử lý · Tài sản · TT báo cáo · Định vị · Mô tả) · **Hủy** · **Áp dụng** |
| **Z5 Grid / list content** | Danh sách vấn đề — empty | Empty **Không có bản ghi** · không lộ cột (inventory `tableHeaders: []`) |
| **Z6 List footer** | Status chips + pager | 3 ô đếm màu **0** (xanh / nâu / đỏ — filter nhanh theo nhóm trạng thái/mức độ) · pager `<<` `<` **Trang 0 của 0** `>` `>>` · `inputItem` = trang hiện tại · text **Không có bản ghi** |
| **Z7 Splitter** | Thanh dọc list ↔ map | Grip thu/mở panel list |
| **Z8 Map canvas** | Bản đồ mạng tuyến / vị trí VĐ | Polyline đường · nhãn địa danh **Con Cuông** · **Anh Sơn** · **Đô Lương** · vùng Nghệ An trung |
| **Z9 Map chrome** | Điều khiển map | Zoom **+** (`#zoomIn` · kind DOM `create` **misclassified**) / **−** (`#zoomOut`) · **Bản đồ nền** → **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền** · scale **20 km / 10 mi** |
| **Z10 User menu (DOM sibling)** | Dropdown user — không mở trên ảnh | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** (sibling user drills) |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Đoạn đường | Combo / Select | — (filter) | DOM `doanduong` · placeholder **Chọn đoạn đường** · Z4 collapsed trên ảnh |
| Loại vấn đề | Combo / Select | — (filter) | DOM `loaivande` |
| Người ghi VĐ / Công ty-Người ghi | TreePicker / Lookup | — (filter) | DOM `treepickerex-1030` · placeholder **Chọn Công ty/Người ghi vấn đề** · `treepickerex-1026` |
| Công ty | Combo / Select | — (filter) | DOM `congty` · placeholder **Chọn công ty** |
| Tuần đường | Combo / Select | — (filter) | DOM `tuanduong` · placeholder **Chọn tuần đường** |
| Trạng thái (xử lý) | Combo / Select | — (filter) | DOM `trangthaixuly` · placeholder **Trạng thái xử lý** |
| Trạng thái đọc | Combo / Select | — (filter) | DOM `trangthaidoc` |
| Tuần kiểm | Combo / Select | — (filter) | DOM `tuankiemchidao` |
| Đơn vị BĐTX | Combo / Select | — (filter) | DOM `hattruongchidao` |
| Mức độ | Combo / Select | — (filter) | DOM `mucdonghiemtrong` · placeholder **Mức độ nghiêm trọng** |
| Mô tả | Text / Search | — (filter) | DOM `mota` |
| Hướng xử lý | Combo / Select | — (filter) | DOM `huongxuly` · placeholder **Chọn hướng xử lý** |
| Tài sản | Combo / Select | — (filter) | DOM `loaiTaiSan` |
| TT báo cáo | Combo / Select | — (filter) | DOM `trangthaibaocao` · placeholder **Trạng thái báo cáo** |
| Định vị | Checkbox / Switch | — (filter) | DOM `ckDinhVi` · label **Định vị** |
| textfield-1087…1089 | Text (toolbar/aux) | — | DOM toolbar zone — phụ filter/search |
| Trang (pager) | Number | — | DOM `inputItem` · ảnh **Trang 0 của 0** |
| Status chips 0/0/0 | Metric / filter chips | — | Footer Z6 — 3 màu xanh/nâu/đỏ |
| Empty state | EmptyState text | — | **Không có bản ghi** |
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

**Primary — QUẢN LÝ VẤN ĐỀ root view `010` (deep capture)**
- Mở từ tile **QUẢN LÝ VẤN ĐỀ** → `#panelVanDe`
- Toolbar: **refresh** · **Thêm** (→ create sibling `011`/`016`/`017`) · **Thêm CV** / **Xem CV** (→ assign/WO · sibling `014`/`015` · disabled khi chưa chọn) · **Xem** (chi tiết · disabled) · **Xuất dữ liệu** (dropdown export) · overflow → **Xóa** · **Phản hồi** · **BC sở**
- Filter panel (DOM): **Tìm mới** · **Tìm kiếm** · multi-combo + **Định vị** · **Hủy** / **Áp dụng**
- List empty + status chips 0/0/0 + pager **Trang 0 của 0**
- Map: pan/zoom · overlay tuyến · **Bản đồ nền** 5 lựa chọn · select row ↔ highlight pin (parity)
- Sidebar module: Vấn đề (active) · Công việc · Công tác nghiệm thu · Kiểm tra · Lịch sử bảo trì · Tổng hợp vấn đề · Gửi thông báo
- User **Ban.TK.…** → menu (sibling user drills)
- Upstream: login shell GOVOne · Downstream: create form · Thêm CV · user menu · export menu
- ≠ GIS editor geometry (`geditor`) · ≠ dashboard KPI · ≠ patrol-only monitor
- Demo parity: same actions · UI modern `/erp-form-context` + MapPane — **không** clone GOVOne

**Toolbar (ảnh + DOM)**
- Refresh (icon — tải lại list+map)
- **Thêm** → create vấn đề
- **Thêm CV** → tạo công việc gắn VĐ (disabled empty)
- **Xem CV** → xem CV liên quan (disabled)
- **Xem** → xem chi tiết VĐ (disabled)
- **Xuất dữ liệu** → menu export
- Overflow/tools icon → **Xóa** · **Phản hồi** · **BC sở** (DOM toolbar; Phản hồi/BC sở disabled empty)
- (DOM filter zone) **Tìm mới** · **Tìm kiếm**

**Header / shell (ảnh)**
- Hamburger toggle sidebar
- Title **Vấn đề**
- Bell thông báo
- **Ban.TK.Nguyễn Anh Phúc**

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
App-tile root `005` · deep root `012` · User `012-ban-tk`/`013` · Create/Thêm `011`/`013`/`014`/`016`/`017` · Thêm CV `014`/`015` · export menu variants trong `incident-actions.md` — giữ parity demo.

### Map → step context

- Feature: `docs/context/features/incident.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `010-quan-ly-van-e`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/incident-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/incident-actions.md`
- Demo: parity UI trong `incident-demo.html` / MFE — same actions (**Thêm** · **Thêm CV** · **Xem CV** · **Xem** · **Xóa** · **Phản hồi** · **Xuất dữ liệu** · **BC sở** · **Tìm mới**/**Tìm kiếm**/filter multi-combo · **Định vị** · refresh · status chips · pager · sidebar 7 mục · map zoom +/− · **Bản đồ nền**/basemap 5 · splitter · user menu), modern `/erp-form-context` + MapPane (không clone GOVOne · **+** = zoomIn ≠ Create)
- **DOM / bind:** treepicker + multi Select filters · checkbox Định vị · DataGrid + status chips + pager · toolbar CRUD/CV/export · MapPane basemap/zoom → LinErpListFilterBar + DataGrid + MapPane (Kind F/custom map)
- **Capture path:** `capture/incident/root/view/` (master/page/action)
- Sibling: `005`/`012` (cùng root) · `011-root-them` · `012-ban-tk` · `013`–`017` create/Thêm CV/tab

## Status

- [x] Vision reviewed
- [x] Mapped to step context
