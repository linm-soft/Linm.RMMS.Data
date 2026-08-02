# AI Vision — QUẢN LÝ GIÁM SÁT › Xuất excel › +

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `009-quan-ly-giam-sat-xuat-excel` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi |
| **screenshot** | `screenshots/009-quan-ly-giam-sat-xuat-excel.png` |
| **DOM fields** | 8 → **16** (vision-enriched) |
| **DOM labels** | 8 → **14** (vision-enriched) |
| **DOM buttons** | 14 → **17** (vision-enriched: Đóng modal · Xuất excel confirm · tree expand +) |

## DOM inventory (đã capture)

### Labels
- Danh sách nhân viên
- Chưa checkin: 0
- Tổng số : 0
- Từ ngày:
- Đến ngày:
- Chọn tất cả
- Xuất người không checkin
- Tất cả

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
| input | text | datefield-1052-inputEl |
| input | text | datefield-1053-inputEl |
| input | text | loainhanvien |
| input | checkbox | checkAll |
| input | checkbox | checkbox-1064 |
| input | checkbox | checkbox-1065 |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `009-quan-ly-giam-sat-xuat-excel.png`

### Màn hình / mục đích

Màn **QUẢN LÝ GIÁM SÁT** — panel **Vị trí hiện thời** (`dbv3giamsat.aspx#pnlViTriHienThoi`) với **modal dialog «Xuất dữ liệu Excel»** mở giữa viewport · drill title **Xuất excel › +**.  
Capture path: `capture/patrol/xuat-excel/page/` · kind inventory **`form-sample`** · `via: create` · **trigger `+`**.  
**Quan trọng (miscapture):** nút `+` trong form-sample là map **`#zoomIn`** (href `#zoomIn`, kind DOM `create`) — **không** mở Create/Thêm form CRUD. Form-sample chỉ lặp lại cùng labels/fields của modal xuất Excel + shell giám sát — **không** có field create mới.  
Ảnh: modal xuất Excel **đang mở** (Từ ngày · Đến ngày · cây checkbox đơn vị · Xuất người không checkin · Xuất excel) trên nền split list+map — cùng UI với sibling `007`/`008` (path `view/`), khác path `page/` + title `› +`.  

**Mục đích modal (nội dung ảnh):** xuất Excel dữ liệu giám sát/check-in theo (1) khoảng **Từ ngày – Đến ngày** · (2) chọn **cây đơn vị/công ty** (checkbox tree, root **Tất cả**) · (3) tùy chọn **Xuất người không checkin** · (4) confirm **Xuất excel**.  
**Mục đích capture `› +`:** (1) ghi nhận drill sau click map zoom **+** trong ngữ cảnh modal Xuất excel đã mở · (2) xác nhận **không** sinh form CRUD · (3) giữ parity actions export modal + map chrome (zoom ≠ Create).  

DOM bổ sung (có thể trong modal / vùng bị che): combo **Loại NV** (`loainhanvien`) · checkbox **Chọn tất cả** (`checkAll`) — trên ảnh tree root **Tất cả** + checkbox từng công ty rõ; **Loại NV** không nổi trên viewport modal (ghi nhận DOM, không bịa UI).  
Trên cây: icon **+** expand node công ty (collapsed) — **khác** map zoom `#zoomIn` (cùng glyph `+` nhưng khác control).  

Nền vẫn là shell giám sát split list+map (empty «Không có bản ghi nào» · map Nghệ An · filter Tất cả / Đoạn đường · footer **Xuất excel** / **Tải lại** · **Tổng số : 0**).  
Kind: **E (report/monitor) + export dialog** → demo MFE: Modal/Slideout export theo `/erp-form-context` + `/erp-report-context` (Date range · TreeCheckbox org · Switch/Checkbox include-non-checkin · primary Xuất Excel) + **MapPane zoom (+/−)** — **không** map `+` thành Create catalog · **không** clone skin ExtJS GOVOne.  
Upstream: `007`/`008` modal Xuất excel (view) · `005` root · Downstream: file download Excel · đóng modal · reload `008/010/011-tai-lai`.  
Domain: export check-in / giám sát · bind `from`/`to` + orgIds + `includeNonCheckin` → API export · mock demo toast/download · zoom bind MapPane.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width (nền, sau modal) | Logo **GOVOne** · hamburger · title **Vị trí hiện thời** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** |
| **Z2 Sidebar nav** | Menu trái xám đậm — module giám sát (nền) | **Giám sát nhân viên 2** · **Giám sát tuyến đường 2** · **Lịch sử checkin 2** · **Tổng hợp 2** |
| **Z3 Filter / list (nền)** | Panel list phía sau modal | Tree/combo **Tất cả** (`treepickerex`) · combo **Đoạn đường** · empty **Không có bản ghi nào** · (DOM) **Danh sách nhân viên** · **Chưa checkin: 0** |
| **Z4 List footer (nền)** | Thanh hành động dưới list | **Xuất excel** (đã mở modal) · **Tải lại** · **Tổng số : 0** |
| **Z5 Map canvas (nền)** | Bản đồ vị trí / mạng tuyến | Polyline đường · nhãn lý trình · zoom **+** (`#zoomIn` · form-sample trigger) / **−** · **Bản đồ nền** · scale |
| **Z6 Modal header** | Dialog «Xuất dữ liệu Excel» | Title **Xuất dữ liệu Excel** · nút **Đóng (X)** góc phải |
| **Z7 Modal filters** | Khoảng thời gian xuất | **Từ ngày:** date `01/08/2026` + icon lịch (`datefield-1052`) · **Đến ngày:** date `31/08/2026` + icon lịch (`datefield-1053`) · (DOM) **Loại NV** `loainhanvien` — không rõ trên ảnh |
| **Z8 Modal org tree** | Cây chọn đơn vị / công ty (scroll) | Root **Tất cả** (folder · checkbox · expand −) · nodes công ty (plus expand · checkbox · group icon): CTGT 487 · cầu đường Nghệ An · XDGT thuỷ bộ Nghệ An · Vĩnh Thuận (bỏ) · Khánh Hưng · CP 496 · Trung Tín · CPQL và XDĐB 470 · … · (DOM) **Chọn tất cả** / `checkAll` |
| **Z9 Modal footer** | Tùy chọn + confirm xuất | Checkbox **Xuất người không checkin** (`checkbox-1064`/`1065`) · nút primary **Xuất excel** (icon spreadsheet) |
| **Z10 Form-sample (miscapture)** | Inventory ghi Create/Thêm sau `+` | **Không có dialog/form Create mới trên ảnh** — modal xuất Excel + shell giữ nguyên; trigger `+` = map `#zoomIn` |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Từ ngày | DatePicker | Có | Ảnh `01/08/2026` · DOM `datefield-1052-inputEl` · modal Z7 · local display · ISO offset khi bind |
| Đến ngày | DatePicker | Có | Ảnh `31/08/2026` · DOM `datefield-1053-inputEl` · modal Z7 |
| Loại NV | Combo / Select | — | DOM `loainhanvien` / `combo-1054-inputEl` · placeholder **Loại NV** · **không thấy rõ trên ảnh** — giữ field trong control-map |
| Tất cả (root tree) | TreeCheckbox root | — | Ảnh Z8 · label DOM **Tất cả** · expand/collapse · check cascade |
| Chọn tất cả | Checkbox | — | DOM label **Chọn tất cả** · `checkAll` / `checkbox-1062` · parity select-all org tree |
| Cây công ty / đơn vị | TreeCheckbox multi | Có (chọn ≥1 hoặc Tất cả) | Nodes công ty trên ảnh · không phải DataGrid cột · node expand **+** ≠ map zoom |
| Xuất người không checkin | Checkbox / Switch | — | Ảnh Z9 footer · DOM label + checkbox-1064/1065 |
| Công ty / Nhân viên (nền) | TreePicker | — | Nền Z3 · `treepickerex-1025-inputEl` · giá trị **Tất cả** |
| Đoạn đường (nền) | Combo / Select | — | Nền Z3 · `doanduong` |
| Danh sách nhân viên | Grid / List (nền) | — | Empty trên ảnh |
| Chưa checkin | Metric / badge | — | DOM nền |
| Tổng số | Count status | — | Ảnh + DOM **Tổng số : 0** |
| Empty state (nền) | EmptyState | — | **Không có bản ghi nào** |
| Tiêu đề modal | DialogTitle | — | **Xuất dữ liệu Excel** |
| Zoom + | Map zoom in | — | `#zoomIn` · **không** Create · form-sample trigger `009` |
| Zoom − | Map zoom out | — | `#zoomOut` |

**Grid columns:** modal **không có DataGrid** — chỉ **checkbox tree** đơn vị. Nền list empty → không lộ cột; demo list khi có data vẫn theo `/erp-form-context` (STT · nhân viên · tuyến/đoạn · check-in · thời gian · GPS). Không clone ExtJS.

**Form sample:** inventory `form-sample.json` trigger `+` — **không** có field Create riêng trên ảnh; ignore như Create CRUD · remap `+` → MapPane zoomIn trong control-map/demo (giống `007-ban-tk › +`).

**Export payload (parity demo / API):** `from` · `to` · `orgIds[]` (hoặc all) · `employeeType?` (Loại NV) · `includeNonCheckin: boolean` → download Excel/CSV mock.

### Tính năng / hành động

**Primary — Modal Xuất dữ liệu Excel + form-sample `› +` (`009`)**
- Upstream: `007`/`008` mở modal Xuất excel trên Vị trí hiện thời · capture tiếp click **+** (= map zoomIn) với modal vẫn mở
- Ảnh vẫn: modal export đầy đủ · list empty · map + filters · **không** modal Create
- Chọn **Từ ngày / Đến ngày** (date picker + icon lịch)
- Chọn đơn vị trên **cây checkbox** (root **Tất cả** · expand node **+**/− · check từng công ty · DOM **Chọn tất cả**)
- (DOM) lọc **Loại NV** nếu control có trong dialog
- Tick/untick **Xuất người không checkin**
- **Xuất excel** (modal footer) → generate/download · toast mock trên demo
- **Đóng (X)** → đóng modal · không xuất
- Remap đúng: **Zoom +** / **Zoom −** trên MapPane · Modal export fields/actions · filter · Xuất excel toolbar · Tải lại · basemap
- Downstream: file Excel · reload variants · sibling `007`/`008` (cùng modal, path view)
- ≠ Create CRUD · ≠ GIS editor · ≠ dashboard KPI `004`
- Demo parity: Modal export modern (`/erp-form-context` leave-confirm · DatePicker · TreeCheckbox · LinCheckbox · export-excel) + Map zoom — **không** clone GOVOne · **không** Create từ `+`

**Modal (ảnh + DOM)**
- **Đóng (X)**
- Date **Từ ngày** / **Đến ngày** (+ trigger lịch)
- Tree expand/collapse node (**+** / **−** trên tree — ≠ map zoom `#zoomIn`/`#zoomOut`)
- Check root **Tất cả** / node công ty / **Chọn tất cả**
- **Xuất người không checkin**
- **Xuất excel** (confirm export)

**Map chrome (ảnh + DOM — điểm khác biệt path `› +`)**
- **+** zoomIn (`#zoomIn` · form-sample trigger — **không** Create)
- **−** zoomOut (`#zoomOut`)
- **Bản đồ nền** · **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**

**Nền shell — vẫn trong DOM actions (parity map demo)**
- **Ban.TK.Nguyễn Anh Phúc** · **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất**
- Filter Công ty-NV · Đoạn đường
- Toolbar **Xuất excel** · **Tải lại** · **Tổng số**
- Sidebar 4 mục giám sát

**Actions bổ sung từ sibling**  
`007`/`008-xuat-excel` (cùng modal, view) · `008/010/011-tai-lai` · `007-ban-tk › +` (cùng pattern zoom miscapture) · `009-oi-mat-khau` — giữ trong `patrol-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `009-quan-ly-giam-sat-xuat-excel`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (mở modal Xuất excel · Từ/Đến ngày · tree org checkbox · Xuất người không checkin · confirm Xuất · Đóng · **map zoom +/−** · nền filter/list/map/basemap/user), modern `/erp-form-context` + `/erp-report-context` Modal export (không clone GOVOne · không Create từ `+`)
- **DOM / bind:** `datefield-1052/1053` · `loainhanvien` · `checkAll` · checkbox non-checkin · org tree · toolbar Xuất excel · **zoom `#zoomIn`/`#zoomOut`** → DatePicker + Select + TreeCheckbox + LinCheckbox + export-excel Modal + MapPane (zoom)
- **Capture path:** `capture/patrol/xuat-excel/page/` (master/page/action) · form-sample trigger `+` = zoomIn misclassified · page id `009`
- Sibling: `007-quan-ly-giam-sat-xuat-excel` · `008-quan-ly-giam-sat-xuat-excel` · root `005` · user `006` · form-sample pattern `007-ban-tk › +`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
