# AI Vision — QUẢN LÝ GIÁM SÁT › Xuất excel

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `008-quan-ly-giam-sat-xuat-excel` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi |
| **screenshot** | `screenshots/008-quan-ly-giam-sat-xuat-excel.png` |
| **DOM fields** | 8 → **16** (vision-enriched) |
| **DOM labels** | 8 → **14** (vision-enriched) |
| **DOM buttons** | 14 → **16** (vision-enriched: Đóng modal · Xuất excel confirm) |

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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `008-quan-ly-giam-sat-xuat-excel.png`

### Màn hình / mục đích

Màn **QUẢN LÝ GIÁM SÁT** — panel **Vị trí hiện thời** (`dbv3giamsat.aspx#pnlViTriHienThoi`) với **modal dialog «Xuất dữ liệu Excel»** mở giữa viewport.  
Capture path: `capture/patrol/xuat-excel/view/` · page JSON id `008-quan-ly-giam-sat-xuat-excel` · `via: deep` · trigger toolbar **Xuất excel**.  
Sibling gần trùng DOM: `007-quan-ly-giam-sat-xuat-excel` (cùng path view / cùng labels+fields) · drill form-sample `009-quan-ly-giam-sat-xuat-excel` (`› +`).  

**Mục đích modal:** xuất Excel dữ liệu giám sát/check-in theo (1) khoảng **Từ ngày – Đến ngày** · (2) chọn **cây đơn vị/công ty** (checkbox tree, root **Tất cả**) · (3) tùy chọn **Xuất người không checkin** · (4) confirm **Xuất excel**.  
DOM bổ sung (có thể trong modal / vùng bị che): combo **Loại NV** (`loainhanvien`) · checkbox **Chọn tất cả** (`checkAll`) — trên ảnh tree root **Tất cả** + checkbox từng công ty rõ; **Loại NV** không nổi trên viewport modal (ghi nhận DOM, không bịa UI).  

Nền vẫn là shell giám sát split list+map (empty «Không có bản ghi nào» · map Nghệ An · filter Tất cả / Đoạn đường · footer **Xuất excel** / **Tải lại** · **Tổng số : 0**).  
Kind: **E (report/monitor) + export dialog** → demo MFE: Modal/Slideout export theo `/erp-form-context` + `/erp-report-context` (Date range · TreeCheckbox org · Switch/Checkbox include-non-checkin · primary Xuất Excel) — **không** clone skin ExtJS GOVOne.  
Upstream: `005` root / `006` user menu · Downstream: file download Excel · đóng modal · (sibling) `009` form-sample `+` · reload `008/010/011-tai-lai`.  
Domain: export check-in / giám sát · bind `from`/`to` + orgIds + `includeNonCheckin` → API export (parity reports checkin export hoặc patrol export) · mock demo toast/download.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width (nền, sau modal) | Logo **GOVOne** · hamburger · title **Vị trí hiện thời** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** |
| **Z2 Sidebar nav** | Menu trái xám đậm — module giám sát (nền) | **Giám sát nhân viên 2** · **Giám sát tuyến đường 2** · **Lịch sử checkin 2** · **Tổng hợp 2** |
| **Z3 Filter / list (nền)** | Panel list phía sau modal | Tree/combo **Tất cả** (`treepickerex`) · combo **Đoạn đường** · empty **Không có bản ghi nào** · (DOM) **Danh sách nhân viên** · **Chưa checkin: 0** |
| **Z4 List footer (nền)** | Thanh hành động dưới list | **Xuất excel** (đã mở modal) · **Tải lại** · **Tổng số : 0** |
| **Z5 Map canvas (nền)** | Bản đồ vị trí / mạng tuyến | Polyline đường · nhãn lý trình · zoom **+** / **−** · **Bản đồ nền** · scale |
| **Z6 Modal header** | Dialog «Xuất dữ liệu Excel» | Title **Xuất dữ liệu Excel** · nút **Đóng (X)** góc phải |
| **Z7 Modal filters** | Khoảng thời gian xuất | **Từ ngày:** date `01/08/2026` + icon lịch (`datefield-1052`) · **Đến ngày:** date `31/08/2026` + icon lịch (`datefield-1053`) · (DOM) **Loại NV** `loainhanvien` — không rõ trên ảnh |
| **Z8 Modal org tree** | Cây chọn đơn vị / công ty (scroll) | Root **Tất cả** (folder · checkbox · expand −) · nodes công ty (plus · checkbox · group icon): CTGT 487 · cầu đường Nghệ An · XDGT thuỷ bộ Nghệ An · Vĩnh Thuận (bỏ) · Khánh Hưng · CP 496 · Trung Tín · CPQL và XDĐB 470 · … · (DOM) **Chọn tất cả** / `checkAll` |
| **Z9 Modal footer** | Tùy chọn + confirm xuất | Checkbox **Xuất người không checkin** (`checkbox-1064`/`1065`) · nút primary **Xuất excel** (icon spreadsheet) |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Từ ngày | DatePicker | Có | Ảnh `01/08/2026` · DOM `datefield-1052-inputEl` · modal Z7 · local display · ISO offset khi bind |
| Đến ngày | DatePicker | Có | Ảnh `31/08/2026` · DOM `datefield-1053-inputEl` · modal Z7 |
| Loại NV | Combo / Select | — | DOM `loainhanvien` / `combo-1054-inputEl` · placeholder **Loại NV** · **không thấy rõ trên ảnh** — giữ field trong control-map |
| Tất cả (root tree) | TreeCheckbox root | — | Ảnh Z8 · label DOM **Tất cả** · expand/collapse · check cascade |
| Chọn tất cả | Checkbox | — | DOM label **Chọn tất cả** · `checkAll` / `checkbox-1062` · parity select-all org tree |
| Cây công ty / đơn vị | TreeCheckbox multi | Có (chọn ≥1 hoặc Tất cả) | Nodes công ty trên ảnh · không phải DataGrid cột |
| Xuất người không checkin | Checkbox / Switch | — | Ảnh Z9 footer · DOM label + checkbox-1064/1065 |
| Công ty / Nhân viên (nền) | TreePicker | — | Nền Z3 · `treepickerex-1025-inputEl` · giá trị **Tất cả** |
| Đoạn đường (nền) | Combo / Select | — | Nền Z3 · `doanduong` |
| Danh sách nhân viên | Grid / List (nền) | — | Empty trên ảnh |
| Chưa checkin | Metric / badge | — | DOM nền |
| Tổng số | Count status | — | Ảnh + DOM **Tổng số : 0** |
| Empty state (nền) | EmptyState | — | **Không có bản ghi nào** |
| Tiêu đề modal | DialogTitle | — | **Xuất dữ liệu Excel** |

**Grid columns:** modal **không có DataGrid** — chỉ **checkbox tree** đơn vị. Nền list empty → không lộ cột; demo list khi có data vẫn theo `/erp-form-context` (STT · nhân viên · tuyến/đoạn · check-in · thời gian · GPS). Không clone ExtJS.

**Export payload (parity demo / API):** `from` · `to` · `orgIds[]` (hoặc all) · `employeeType?` (Loại NV) · `includeNonCheckin: boolean` → download Excel/CSV mock.

### Tính năng / hành động

**Primary — Modal Xuất dữ liệu Excel (`008`)**
- Mở từ toolbar list **Xuất excel** trên Vị trí hiện thời
- Chọn **Từ ngày / Đến ngày** (date picker + icon lịch)
- Chọn đơn vị trên **cây checkbox** (root **Tất cả** · expand node · check từng công ty · DOM **Chọn tất cả**)
- (DOM) lọc **Loại NV** nếu control có trong dialog
- Tick/untick **Xuất người không checkin**
- **Xuất excel** (modal footer) → generate/download · toast mock trên demo
- **Đóng (X)** → đóng modal · không xuất
- Upstream: `005`/`006` shell · Downstream: file Excel · sibling `007` (cùng modal) · `009-xuat-excel` (`› +`) · reload variants
- ≠ Create CRUD · ≠ GIS editor · ≠ dashboard KPI `004`
- Demo parity: Modal export modern (`/erp-form-context` leave-confirm · DatePicker · TreeCheckbox · LinCheckbox · export-excel) — **không** clone GOVOne

**Modal (ảnh + DOM)**
- **Đóng (X)**
- Date **Từ ngày** / **Đến ngày** (+ trigger lịch)
- Tree expand/collapse node (**+** / **−** trên tree — ≠ map zoom)
- Check root **Tất cả** / node công ty / **Chọn tất cả**
- **Xuất người không checkin**
- **Xuất excel** (confirm export)

**Nền shell — vẫn trong DOM actions (parity map demo)**
- **Ban.TK.Nguyễn Anh Phúc** · **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất**
- Filter Công ty-NV · Đoạn đường
- Toolbar **Xuất excel** · **Tải lại** · **Tổng số**
- Sidebar 4 mục giám sát
- Map **+** / **−** zoom · **Bản đồ nền** · **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**

**Actions bổ sung từ sibling**  
`007-xuat-excel` (cùng modal) · `009-xuat-excel` (+ drill) · `008/010/011-tai-lai` · `009-oi-mat-khau` — giữ trong `patrol-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `008-quan-ly-giam-sat-xuat-excel`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (mở modal Xuất excel · Từ/Đến ngày · tree org checkbox · Xuất người không checkin · confirm Xuất · Đóng · nền filter/list/map/basemap/user), modern `/erp-form-context` + `/erp-report-context` Modal export (không clone GOVOne)
- **DOM / bind:** `datefield-1052/1053` · `loainhanvien` · `checkAll` · checkbox non-checkin · org tree · toolbar Xuất excel → DatePicker + Select + TreeCheckbox + LinCheckbox + export-excel Modal
- **Capture path:** `capture/patrol/xuat-excel/view/` (master/page/action) · page id `008`
- Sibling: `007-quan-ly-giam-sat-xuat-excel` · `009-quan-ly-giam-sat-xuat-excel` · root `005` · user `006`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
