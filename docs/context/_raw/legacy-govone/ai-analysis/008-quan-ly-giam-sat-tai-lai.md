# AI Vision — QUẢN LÝ GIÁM SÁT › Tải lại

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `008-quan-ly-giam-sat-tai-lai` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/dbv3giamsat.aspx#pnlViTriHienThoi |
| **screenshot** | `screenshots/008-quan-ly-giam-sat-tai-lai.png` |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `008-quan-ly-giam-sat-tai-lai.png`

### Màn hình / mục đích

Màn **QUẢN LÝ GIÁM SÁT** — panel **Vị trí hiện thời** (`dbv3giamsat.aspx#pnlViTriHienThoi`) sau drill action **Tải lại**.  
Capture path: `capture/patrol/tai-lai/view/` · kind left-rail / deep · pageTitle **Tải lại** · inventory id `008` (canonical view path).  
Ảnh: shell split list+map **không modal** — list empty «Không có bản ghi nào» · filter **Tất cả** / **Đoạn đường** · footer **Xuất excel** + **Tải lại** (primary drill) · **Tổng số : 0** · map Nghệ An zoom gần (nhãn `QL.48C` · `QL.48D` · Châu Hồng · Núi Bù Ca) · scale **2 km / 1 mi** (bodySample).  

**Mục đích capture `› Tải lại`:** (1) ghi nhận nút **Tải lại** trên footer list (DOM id `idbadgeGiamSatNhanVien`) · (2) hành vi **reload** list nhân viên + overlay map theo filter hiện tại (Công ty/NV · Đoạn đường) — **không** đổi URL / **không** mở dialog · (3) trạng thái sau reload vẫn empty khi không có bản ghi · badges **Tổng số** / **Chưa checkin** cập nhật · (4) giữ parity shell giám sát (sidebar 4 mục · basemap · zoom · user menu trong DOM).  

Kind: **E (report/monitor) + map pane + reload toolbar** → demo MFE: nút **Tải lại** = `reload` / refetch query (toast «Đã tải lại») theo `/erp-form-context` + `/erp-report-context` + MapPane — **không** map thành navigate route · **không** clone skin ExtJS GOVOne.  
Upstream: root `005` · sibling reload `010` (cùng title, zoom xa hơn) · Downstream: `011-tai-lai › +` (zoom miscapture) · export `007/008/009-xuat-excel` · user `006`.  
Domain: giám sát check-in realtime · bind filter → `GET /api/v1/patrols?routeId=&from=&to=` (hoặc list vị trí hiện thời) → refresh grid + map pins/tracks.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width | Logo **GOVOne** · hamburger · title **Vị trí hiện thời** · bell · avatar + **Ban.TK.Nguyễn Anh Phúc** |
| **Z2 Sidebar nav** | Menu trái xám đậm — module giám sát | **Giám sát nhân viên 2** · **Giám sát tuyến đường 2** · **Lịch sử checkin 2** · **Tổng hợp 2** (icon + chevron) |
| **Z3 Filter / toolbar list** | Hàng lọc trên panel list | Tree/combo giá trị **Tất cả** (`treepickerex-1025` · placeholder DOM **Chọn Công ty/Nhân viên**) · combo placeholder **Đoạn đường** (`doanduong` / `combo-1026`) |
| **Z4 Grid / list content** | Danh sách nhân viên / vị trí — empty | Empty **Không có bản ghi nào** · scrollbar ngang · (DOM) **Danh sách nhân viên** · **Chưa checkin: 0** |
| **Z5 List footer actions** | Thanh hành động dưới list — **focus drill** | **Xuất excel** (icon spreadsheet) · **Tải lại** (icon refresh — primary) · status xanh **Tổng số : 0** |
| **Z6 Splitter** | Thanh dọc list ↔ map | Grip/arrow thu-mở panel list |
| **Z7 Map canvas** | Bản đồ vị trí / mạng tuyến | Polyline đường tím/xanh · nhãn `QL.48C` · `QL.48D` · địa danh Châu Hồng / Núi Bù Ca |
| **Z8 Map chrome** | Điều khiển map | Zoom **+** / **−** · **Bản đồ nền** (mở: **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**) · scale **2 km / 1 mi** |
| **Z9 User menu (DOM)** | Dropdown user — không mở trên ảnh | **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** (có trong DOM actions) |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Công ty / Nhân viên | TreePicker / Lookup | Có (filter) | Ảnh giá trị **Tất cả** · DOM `treepickerex-1025-inputEl` · Z3 |
| Đoạn đường | Combo / Select | — | Ảnh placeholder **Đoạn đường** · DOM `doanduong` / `combo-1026-inputEl` |
| Danh sách nhân viên | Grid / List panel | — | Label DOM · Z4 empty trên ảnh |
| Chưa checkin | Metric / badge count | — | DOM `Chưa checkin: 0` — cập nhật sau Tải lại |
| Tổng số | Count status | — | Ảnh + DOM **Tổng số : 0** — footer Z5 |
| Empty state | EmptyState text | — | **Không có bản ghi nào** (sau reload vẫn empty) |
| Bản đồ nền | Button → basemap menu | — | Z8 · mở 5 lựa chọn nền |
| Vệ tinh | Radio / menu basemap | — | DOM · `basemap=satellite` |
| Google | Radio / menu basemap | — | `basemap=google` |
| Giao thông | Radio / menu basemap | — | `basemap=traffic` |
| Hành chính | Radio / menu basemap | — | `basemap=admin` |
| Không nền | Radio / menu basemap | — | `basemap=none` |

**Grid columns:** trên ảnh **không lộ cột** (empty state · `tableHeaders: []`) — parity demo khi có data: STT · nhân viên · tuyến/đoạn · trạng thái check-in · thời gian · tọa độ/last GPS theo `/erp-form-context` list shell. Không clone ExtJS.

**Reload semantics (parity demo / API):** click **Tải lại** → refetch list + map theo filter `companyStaff` + `doanduong` hiện tại · reset/refresh badges **Tổng số** / **Chưa checkin** · loading overlay ngắn · toast mock «Đã tải lại» — **không** clear filter · **không** navigate away.

### Tính năng / hành động

**Primary — Tải lại `008` (reload drill · canonical view)**
- Upstream: shell Vị trí hiện thời (`005`) · user có thể đã đổi filter Công ty/NV hoặc Đoạn đường
- Click **Tải lại** (footer Z5 · icon refresh · DOM `idbadgeGiamSatNhanVien`) → reload list + map pins/tracks theo filter hiện tại
- Ảnh sau reload: list vẫn empty · **Tổng số : 0** · map giữ mạng tuyến zoom gần · **không** modal / **không** Create
- Remap đúng: **Tải lại** = toolbar **reload/refetch** (không MemoryRouter navigate)
- Downstream: sibling `010` (cùng title) · `011 › +` (zoom) · **Xuất excel** modal
- ≠ Create CRUD · ≠ GIS editor · ≠ dashboard KPI `004`
- Demo parity: button reload + loading + toast · modern `/erp-form-context` — **không** clone GOVOne

**List toolbar / footer (ảnh + DOM)**
- Filter tree/combo Công ty-Nhân viên
- Filter combo Đoạn đường
- **Xuất excel** → mở modal xuất (sibling `007`/`008`/`009`)
- **Tải lại** → refetch (primary)
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

**Map chrome (ảnh + DOM)**
- **+** / **−** zoom (`#zoomIn` / `#zoomOut` — ≠ Create)
- **Bản đồ nền** · **Vệ tinh** · **Google** · **Giao thông** · **Hành chính** · **Không nền**
- Splitter thu/mở list

**Actions bổ sung từ sibling**  
Root `005` · user `006` · Xuất Excel `007`–`009` · Tải lại `010`/`011` · Đổi mật khẩu `009` — giữ trong `patrol-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `008-quan-ly-giam-sat-tai-lai`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (**Tải lại** = reload list+map · filter Công ty-NV + Đoạn đường · list empty/data · Xuất excel · Tổng số/Chưa checkin · sidebar 4 mục · map zoom · Bản đồ nền / basemap 5 lựa chọn · splitter · user menu), modern `/erp-form-context` + `/erp-report-context` + GIS basemap (không clone GOVOne)
- **DOM / bind:** treepicker company/staff · combo đoạn đường · list grid · count badges · **Tải lại** reload · basemap · zoom → TreePicker + Select + DataGrid + ReloadButton + MapPane (Kind E + map)
- **Capture path:** `capture/patrol/tai-lai/view/` (master/page/action) · page id `008` (canonical)
- Sibling: `010-quan-ly-giam-sat-tai-lai` (cùng title) · `011-quan-ly-giam-sat-tai-lai` (`› +`) · root `005` · export `007`–`009`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
