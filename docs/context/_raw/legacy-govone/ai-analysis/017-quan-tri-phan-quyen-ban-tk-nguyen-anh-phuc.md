# AI Vision — QUẢN TRỊ PHÂN QUYỀN › Ban.TK.Nguyễn Anh Phúc

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `017-quan-tri-phan-quyen-ban-tk-nguyen-anh-phuc` |
| **slug** | `users` |
| **url** | https://pmdb.govone.vn/dbv3quantri.aspx#quanTriDanhMucTuyen |
| **screenshot** | `screenshots/017-quan-tri-phan-quyen-ban-tk-nguyen-anh-phuc.png` |
| **DOM fields** | 1 |
| **DOM labels** | 1 |
| **DOM buttons** | 5 |

## DOM inventory (đã capture)

### Labels
- Đoạn đường (73)

### Buttons / actions
- Ban.TK.Nguyễn Anh Phúc
- Thêm tag
- Hồ sơ của tôi
- Đổi mật khẩu
- Đăng xuất

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | textfield-1031-inputEl |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `017-quan-tri-phan-quyen-ban-tk-nguyen-anh-phuc.png`

### Màn hình / mục đích

Màn **QUẢN TRỊ PHÂN QUYỀN** — cùng panel **Danh mục đoạn đường** (`dbv3quantri.aspx#quanTriDanhMucTuyen`) trên app GOVOne gServer 2.1, **với user menu mở**.  
Capture path `capture/users/ban-tk-nguyen-anh-phuc/view/` (master/page/action) · drill từ root user trigger **Ban.TK.Nguyễn Anh Phúc**.  
Twin gần trùng: `019-quan-tri-phan-quyen-ban-tk-nguyen-anh-phuc` (cùng slug/URL · menu mở · 5 actions).  
Sibling root (menu đóng): `006`/`016`/`018` · Downstream form: `020-quan-tri-phan-quyen-oi-mat-khau` (Đổi mật khẩu).  

**Mục đích:** (1) giữ context master-detail **đoạn đường ↔ biểu mẫu/tag** như root · (2) mở **user account menu** từ avatar/label **Ban.TK.Nguyễn Anh Phúc** · (3) điều hướng shell auth: **Hồ sơ của tôi** · **Đổi mật khẩu** · **Đăng xuất** · (4) vẫn có thể filter/chọn đoạn đường · **Thêm tag** (disabled khi chưa đủ context) · sidebar 3 mục quản trị.  

Ảnh viewport: shell **master-detail** (list đoạn đường trái + panel biểu mẫu phải) · **không** map · sidebar 3 mục · master có data zebra · detail empty **Không có bản ghi nào** · **user dropdown mở** (3 mục + icon).  
Kind shell: **B (CatalogListShell / master-detail)** + shell auth menu — demo MFE theo `/erp-form-context` Kind B + header user menu — **không** clone skin ExtJS GOVOne.  
Domain: Auth / Admin users · user menu parity · bind đoạn đường → form tags · API guide assign-routes / orgs/users/roles / change-password (feature `users.md`).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width: brand · title · user | Logo **GOVOne** · hamburger (toggle sidebar) · title **Danh mục đoạn đường** · bell thông báo · avatar + **Ban.TK.Nguyễn Anh Phúc** (dropdown **mở**) |
| **Z1b User menu (open)** | Overlay dropdown dưới user trigger | **Hồ sơ của tôi** (person icon) · **Đổi mật khẩu** (key icon) · **Đăng xuất** (power icon) |
| **Z2 Sidebar nav** | Menu trái xám đậm — 3 module quản trị | **Danh mục đoạn đường** (active) · **Phân quyền dữ liệu** · **Quản lý người dùng** |
| **Z3 Master panel header / filter** | Tiêu đề list + ô tìm panel trái | Label **Đoạn đường (73)** · text search placeholder **Nhập đoạn đường** (`textfield-1031-inputEl`) |
| **Z4 Master grid / list** | Danh sách đoạn đường — có data | Cột **#** (STT) · cột **Đoạn đường** · zebra · scrollbar · mẫu: `ĐT.531` · `ĐT.531B` · `ĐT.531C` · `ĐT.532` · … |
| **Z5 Detail panel** | Panel phải gắn biểu mẫu theo đoạn | Header **Danh sách biểu mẫu** · empty **Không có bản ghi nào** · cột header **#** (trống body) |
| **Z6 Grid / detail actions** | Action gắn tag (DOM) | **Thêm tag** (`button` · zone grid · **disabled** — chưa chọn / chưa đủ điều kiện) |
| **Z7 Splitter** | Ranh giới master ↔ detail | Split dọc giữa list đoạn đường và danh sách biểu mẫu |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập đoạn đường | Text / SearchField | — | Filter master · DOM `textfield-1031-inputEl` · placeholder **Nhập đoạn đường** · zone toolbar |
| Đoạn đường (73) | List panel title + count | — | Label DOM · count **73** = tổng master |
| # (STT master) | Grid column | — | Cột số thứ tự trên ảnh |
| Đoạn đường | Grid column (text) | — | Mã/tên đoạn · ví dụ `ĐT.531` · `ĐT.531B` · `ĐT.532` · … |
| Danh sách biểu mẫu | Detail grid / list | — | Panel phải · empty trên ảnh |
| # (STT detail) | Grid column | — | Header cột detail — body empty |
| Empty state (detail) | EmptyState text | — | **Không có bản ghi nào** khi chưa chọn đoạn hoặc đoạn chưa có biểu mẫu/tag |
| Thêm tag | Button (create) | — | DOM disabled · gán/tag biểu mẫu vào đoạn đã chọn |
| Ban.TK.Nguyễn Anh Phúc | UserMenu trigger | — | Header · mở dropdown (đang mở trên ảnh) |
| Hồ sơ của tôi | MenuItem (nav) | — | User menu · xem/sửa hồ sơ |
| Đổi mật khẩu | MenuItem (nav) | — | User menu → form đổi MK (sibling `020`) |
| Đăng xuất | MenuItem (export/logout) | — | User menu · kết thúc phiên |

**Grid columns (master — ảnh):** `#` · `Đoạn đường` — parity demo: STT · mã/tên đoạn · (tuỳ chọn) km range · row select → load detail.  
**Grid columns (detail):** trên ảnh chỉ lộ header `#` + empty — parity demo khi có data: STT · tên biểu mẫu / form code · tag · row actions theo `/erp-form-context` list shell. Không clone bảng ExtJS GOVOne.

### Tính năng / hành động

**Primary — User menu mở trên Danh mục đoạn đường `017`**
- Cùng shell root `#quanTriDanhMucTuyen` như `016`/`018`
- Click **Ban.TK.Nguyễn Anh Phúc** → mở dropdown (capture này)
- **Hồ sơ của tôi** — điều hướng hồ sơ user (nav)
- **Đổi mật khẩu** — mở form đổi MK (downstream `020`)
- **Đăng xuất** — logout / kết thúc phiên
- Master **Đoạn đường (73)** · filter **Nhập đoạn đường** · chọn dòng → detail biểu mẫu
- **Thêm tag** — disabled khi chưa đủ context
- Nav sidebar: **Danh mục đoạn đường** (active) · **Phân quyền dữ liệu** · **Quản lý người dùng**
- Twin: `019` · Upstream root: `006`/`016`/`018` · Downstream: `020`
- ≠ map monitor · ≠ GIS editor · ≠ dashboard KPI

**Header / shell (ảnh + DOM)**
- Hamburger toggle sidebar
- Title panel **Danh mục đoạn đường**
- Bell thông báo
- **Ban.TK.Nguyễn Anh Phúc** (user menu trigger — **mở** trên `017`)

**User menu (ảnh + DOM — 3 actions)**
- **Hồ sơ của tôi**
- **Đổi mật khẩu**
- **Đăng xuất**

**Sidebar (ảnh)**
- **Danh mục đoạn đường** (active)
- **Phân quyền dữ liệu**
- **Quản lý người dùng**

**Master / detail (ảnh + DOM)**
- Search **Nhập đoạn đường**
- Select row đoạn đường
- Empty detail **Không có bản ghi nào**
- **Thêm tag** (disabled)

**Actions đầy đủ (DOM inventory = 5 — bắt buộc parity demo)**  
`Ban.TK.Nguyễn Anh Phúc` · `Thêm tag` · `Hồ sơ của tôi` · `Đổi mật khẩu` · `Đăng xuất`.  
Sibling root 2-actions (`006`/`016`/`018`) · form đổi MK (`020`) — giữ trong `users-actions.md` / control-map. **Không** bịa thêm button không có trên ảnh/DOM.

### Map → step context

- Feature: `docs/context/features/users.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `017-quan-tri-phan-quyen-ban-tk-nguyen-anh-phuc`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/users-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/users-actions.md`
- Demo: parity UI trong `users.html` / integration demo · MFE — same actions (sidebar 3 mục · search đoạn đường · master list 73 · detail biểu mẫu · Thêm tag · **user menu 3 mục**), modern `/erp-form-context` Kind B + header UserMenu (không clone GOVOne)
- **DOM / bind:** textfield đoạn đường · master grid · detail grid · Thêm tag · UserMenu items → SearchField + DataGrid master-detail + Button create + UserMenu (Kind B / shell)
- **Capture path:** `capture/users/ban-tk-nguyen-anh-phuc/view/` (master/page/action)
- Sibling: `006`/`016`/`018` (root menu đóng) · `019` (twin menu mở) · `020` (đổi mật khẩu)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
