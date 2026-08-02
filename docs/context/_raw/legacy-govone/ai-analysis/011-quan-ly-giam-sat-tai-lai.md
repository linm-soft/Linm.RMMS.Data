# AI Vision — QUẢN LÝ GIÁM SÁT › Tải lại › +

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `011-quan-ly-giam-sat-tai-lai` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi |
| **screenshot** | `screenshots/011-quan-ly-giam-sat-tai-lai.png` |
| **DOM fields** | 2 → **12** (vision-enriched) |
| **DOM labels** | 3 → **10** (vision-enriched) |
| **DOM buttons** | 14 → **18** (vision-enriched: hamburger · bell · sidebar 4 · splitter) |

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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `011-quan-ly-giam-sat-tai-lai.png`

### Màn hình / mục đích

Màn **QUẢN LÝ GIÁM SÁT** — panel **Vị trí hiện thời** (`dbv3giamsat.aspx#pnlViTriHienThoi`) sau drill **Tải lại › +**.  
Capture path: `capture/patrol/tai-lai/page/` · kind inventory **`form-sample`** · `via: create` · **trigger `+`** · pageTitle **Tải lại**.  
**Quan trọng (miscapture):** nút `+` trên DOM là map **`#zoomIn`** (href `#zoomIn`, kind DOM `create`) — **không** mở Create/Thêm form CRUD. Form-sample chỉ lặp lại cùng labels/filters của màn giám sát (Danh sách nhân viên · Chưa checkin · Tổng số · treepicker · đoạn đường) — **không** có field create mới.  

Ảnh: shell split list+map **không modal** — list empty «Không có bản ghi nào» · filter **Tất cả** / **Đoạn đường** · footer **Xuất excel** + **Tải lại** · **Tổng số : 0** · map Nghệ An zoom gần hơn (nhãn `QL.48C` · `ĐT.541` · `QL.48D` · Quỳ Châu · Anh Sơn · Tân Kỳ) · scale **5 km / 2 mi** (bodySample inventory) — so với sibling `010` scale **10 km / 5 mi** xác nhận đã **zoom in**.  

**Mục đích capture `› +`:** (1) ghi nhận drill sau click map zoom **+** trong ngữ cảnh đã **Tải lại** (reload list+map) · (2) xác nhận **không** sinh form CRUD · (3) giữ parity shell giám sát (sidebar 4 mục · basemap · zoom · reload toolbar · user menu trong DOM) · (4) phân biệt `+` zoomIn vs Create catalog.  

Kind: **E (report/monitor) + map pane + reload toolbar + zoom chrome** → demo MFE: **Tải lại** = reload/refetch · **+** / **−** = MapPane zoomIn/zoomOut · UI `/erp-form-context` + `/erp-report-context` + MapPane — **không** map `+` thành Create · **không** clone skin ExtJS GOVOne.  
Upstream: reload `008`/`010` (Tải lại view) · root `005` · Downstream: export `007`–`009-xuat-excel` · user `006`/`007-ban-tk › +` (cùng pattern zoom miscapture).  
Domain: giám sát check-in realtime · filter → list+map · reload refetch · zoom bind MapPane.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width | Logo **GOVOne** · hamburger · title **Vị trí hiện thời** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** |
| **Z2 Sidebar nav** | Menu trái xám đậm — module giám sát | **Giám sát nhân viên 2** · **Giám sát tuyến đường 2** · **Lịch sử checkin 2** · **Tổng hợp 2** (icon + chevron) |
| **Z3 Filter / toolbar list** | Hàng lọc trên panel list | Tree/combo giá trị **Tất cả** (`treepickerex-1025` · placeholder DOM **Chọn Công ty/Nhân viên**) · combo placeholder **Đoạn đường** (`doanduong` / `combo-1026`) |
| **Z4 Grid / list content** | Danh sách nhân viên / vị trí — empty | Empty **Không có bản ghi nào** · scrollbar ngang · (DOM) **Danh sách nhân viên** · **Chưa checkin: 0** |
| **Z5 List footer actions** | Thanh hành động dưới list | **Xuất excel** (icon spreadsheet) · **Tải lại** (icon refresh · upstream drill) · status xanh **Tổng số : 0** |
| **Z6 Splitter** | Thanh dọc list ↔ map | Grip/arrow thu-mở panel list |
| **Z7 Map canvas** | Bản đồ vị trí / mạng tuyến (zoom gần hơn `010`) | Polyline đường xanh · nhãn `QL.48C` · `ĐT.541` · `QL.48D` · địa danh Quỳ Châu / Anh Sơn / Tân Kỳ |
| **Z8 Map chrome** | Điều khiển map — **điểm trigger capture `› +`** | Zoom **+** (`#zoomIn` · form-sample trigger) / **−** (`#zoomOut`) · **Bản đồ nền** (mở: **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**) · scale **5 km / 2 mi** |
| **Z9 User menu (DOM)** | Dropdown user — không mở trên ảnh | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** (có trong DOM actions) |
| **Z10 Form-sample (miscapture)** | Inventory ghi Create/Thêm sau `+` | **Không có dialog/form Create mới trên ảnh** — cùng Z3–Z5; trigger `+` = map `#zoomIn` |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Công ty / Nhân viên | TreePicker / Lookup | Có (filter) | Ảnh giá trị **Tất cả** · DOM `treepickerex-1025-inputEl` · Z3 |
| Đoạn đường | Combo / Select | — | Ảnh placeholder **Đoạn đường** · DOM `doanduong` / `combo-1026-inputEl` |
| Danh sách nhân viên | Grid / List panel | — | Label DOM · Z4 empty trên ảnh |
| Chưa checkin | Metric / badge count | — | DOM `Chưa checkin: 0` — cập nhật sau Tải lại |
| Tổng số | Count status | — | Ảnh + DOM **Tổng số : 0** — footer Z5 |
| Empty state | EmptyState text | — | **Không có bản ghi nào** |
| Bản đồ nền | Button → basemap menu | — | Z8 · mở 5 lựa chọn nền |
| Vệ tinh | Radio / menu basemap | — | DOM · `basemap=satellite` |
| Google | Radio / menu basemap | — | `basemap=google` |
| Giao thông | Radio / menu basemap | — | `basemap=traffic` |
| Hành chính | Radio / menu basemap | — | `basemap=admin` |
| Không nền | Radio / menu basemap | — | `basemap=none` |
| Zoom + | Map zoom in | — | `#zoomIn` · **không** Create · form-sample trigger `011` |
| Zoom − | Map zoom out | — | `#zoomOut` |

**Grid columns:** trên ảnh **không lộ cột** (empty state) — parity demo khi có data: STT · nhân viên · tuyến/đoạn · trạng thái check-in · thời gian · tọa độ/last GPS theo `/erp-form-context` list shell. Không clone ExtJS.

**Form sample:** inventory `form-sample.json` trigger `+` — **không** có field Create riêng trên ảnh; ignore như Create CRUD · remap `+` → MapPane zoomIn trong control-map/demo (giống `007-ban-tk › +` · `009-xuat-excel › +`).

**Reload + zoom semantics (parity demo / API):** upstream **Tải lại** → refetch list + map theo filter · rồi **+** → MapPane `zoomIn` (scale 10 km → 5 km trên ảnh) · **không** clear filter · **không** navigate · **không** mở Create.

### Tính năng / hành động

**Primary — Tải lại › + (page / form-sample miscapture `011`)**
- Upstream: shell Vị trí hiện thời sau **Tải lại** (`008`/`010`) · filter Công ty/NV + Đoạn đường giữ nguyên
- Capture tiếp click **+** (= map `#zoomIn`, kind DOM `create` misclassified)
- Ảnh: **không** modal Create · list vẫn empty · **Tổng số : 0** · map zoom gần hơn (scale **5 km / 2 mi**) · footer **Xuất excel** + **Tải lại** vẫn hiện
- Remap đúng: **Zoom +** / **Zoom −** trên MapPane · **Tải lại** = toolbar reload/refetch · filter · Xuất excel · basemap · user menu
- Downstream: export modal `007`–`009` · user `006` · sibling zoom pattern `007-ban-tk › +` · `009-xuat-excel › +`
- ≠ Create CRUD · ≠ GIS editor · ≠ dashboard KPI `004`
- Demo parity: MapPane zoom + ReloadButton + list/map shell · modern `/erp-form-context` — **không** clone GOVOne · **không** Create từ `+`

**List toolbar / footer (ảnh + DOM)**
- Filter tree/combo Công ty-Nhân viên
- Filter combo Đoạn đường
- **Xuất excel** → mở modal xuất (sibling `007`/`008`/`009`)
- **Tải lại** → refetch list+map (upstream primary)
- Status **Tổng số : 0** · (DOM) **Chưa checkin: 0**

**Header / shell (ảnh + DOM)**
- Hamburger toggle sidebar
- Title **Vị trí hiện thời**
- Bell thông báo
- **Ban.TK.Nguyễn Anh Phúc** → (DOM) **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất**

**Sidebar (ảnh)**
- **Giám sát nhân viên 2**
- **Giám sát tuyến đường 2**
- **Lịch sử checkin 2**
- **Tổng hợp 2**

**Map chrome (ảnh + DOM — điểm khác biệt path `› +`)**
- **+** zoomIn (`#zoomIn` · form-sample trigger — **không** Create)
- **−** zoomOut (`#zoomOut`)
- **Bản đồ nền** · **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**
- Splitter thu/mở list
- Scale **5 km / 2 mi** (sau zoom in)

**Actions bổ sung từ sibling**  
Root `005` · user `006` · Xuất Excel `007`–`009` · Tải lại `008`/`010` · zoom miscapture `007-ban-tk › +` · `009-xuat-excel › +` · Đổi mật khẩu `009` — giữ trong `patrol-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `011-quan-ly-giam-sat-tai-lai`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (**map zoom +/−** · **Tải lại** = reload list+map · filter Công ty-NV + Đoạn đường · list empty/data · Xuất excel · Tổng số/Chưa checkin · sidebar 4 mục · Bản đồ nền / basemap 5 lựa chọn · splitter · user menu), modern `/erp-form-context` + `/erp-report-context` + GIS basemap (không clone GOVOne · không Create từ `+`)
- **DOM / bind:** treepicker company/staff · combo đoạn đường · list grid · count badges · **Tải lại** reload · basemap · **zoom `#zoomIn`/`#zoomOut`** → TreePicker + Select + DataGrid + ReloadButton + MapPane (Kind E + map · zoom ≠ Create)
- **Capture path:** `capture/patrol/tai-lai/page/` (master/page/action) · form-sample trigger `+` = zoomIn misclassified · page id `011`
- Sibling: `008`/`010-quan-ly-giam-sat-tai-lai` (Tải lại view) · root `005` · export `007`–`009` · zoom pattern `007-ban-tk › +` · `009-xuat-excel › +`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
