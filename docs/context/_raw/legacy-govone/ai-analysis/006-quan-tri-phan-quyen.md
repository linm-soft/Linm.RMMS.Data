# AI Vision — QUẢN TRỊ PHÂN QUYỀN

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `006-quan-tri-phan-quyen` |
| **slug** | `users` |
| **url** | https://pmdb.govone.vn/dbv3quantri.aspx#quanTriDanhMucTuyen |
| **screenshot** | `screenshots/006-quan-tri-phan-quyen.png` |
| **DOM fields** | 1 |
| **DOM labels** | 1 |
| **DOM buttons** | 2 |

## DOM inventory (đã capture)

### Labels
- Đoạn đường (73)

### Buttons / actions
- Ban.TK.Nguyễn Anh Phúc
- Thêm tag

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | text | textfield-1031-inputEl |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `006-quan-tri-phan-quyen.png`

### Màn hình / mục đích

Màn **QUẢN TRỊ PHÂN QUYỀN** — panel mặc định **Danh mục đoạn đường** (`dbv3quantri.aspx#quanTriDanhMucTuyen`) trên app GOVOne gServer 2.1.  
Mở từ tile **QUẢN TRỊ PHÂN QUYỀN** (app-tile / popup) · pageTitle **Quản trị - gServer Phiên bản 2.1** · headings **Danh mục đoạn đường**.  
Twin capture gần trùng: `016-quan-tri-phan-quyen` · `018-quan-tri-phan-quyen` (cùng URL/slug · user menu đóng · 2 actions DOM).  
Drill tiếp: `017`/`019` (user menu mở → Hồ sơ · Đổi MK · Đăng xuất) · `020-quan-tri-phan-quyen-oi-mat-khau` (form đổi mật khẩu).  

**Mục đích:** (1) quản trị **phân quyền / gán biểu mẫu theo đoạn đường** trong module admin · (2) chọn **đoạn đường** từ master list (73 bản ghi) · (3) xem **Danh sách biểu mẫu** gắn đoạn (detail phải — empty khi chưa chọn / chưa có tag) · (4) **Thêm tag** (DOM disabled khi chưa đủ context chọn) · (5) điều hướng sidebar sang **Phân quyền dữ liệu** / **Quản lý người dùng** · (6) shell auth user menu (parity).  

Ảnh viewport: shell **master-detail** (list đoạn đường trái + panel biểu mẫu phải) · **không** map · sidebar 3 mục · master có data zebra-stripe · detail empty **Không có bản ghi nào** · user menu **đóng**.  
Kind shell: **B (CatalogListShell / master-detail)** — demo MFE theo `/erp-form-context` Kind B (list + detail/modal) — **không** clone skin ExtJS GOVOne.  
Domain: Auth / Admin users · bind đoạn đường → form tags / phân quyền · API guide `GET/POST /api/v1/users/{id}/assign-routes` · orgs/users/roles (feature `users.md`).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh xanh full-width: brand · title panel · user | Logo **GOVOne** · hamburger (toggle sidebar) · title **Danh mục đoạn đường** · bell thông báo · avatar + **Ban.TK.Nguyễn Anh Phúc** (dropdown user — đóng trên ảnh) |
| **Z2 Sidebar nav** | Menu trái xám đậm — 3 module quản trị | **Danh mục đoạn đường** (active, highlight) · **Phân quyền dữ liệu** · **Quản lý người dùng** (mỗi mục icon + label) |
| **Z3 Master panel header / filter** | Tiêu đề list + ô tìm trên panel trái | Label **Đoạn đường (73)** · text search placeholder **Nhập đoạn đường** (`textfield-1031-inputEl`) |
| **Z4 Master grid / list** | Danh sách đoạn đường — có data | Cột **#** (STT) · cột **Đoạn đường** · zebra rows · scrollbar dọc · mẫu: `ĐT.531` · `ĐT.531B` · `ĐT.531C` · `ĐT.532` · … · `QL.7C` (bodySample đủ 73 dòng) |
| **Z5 Detail panel** | Panel phải gắn biểu mẫu theo đoạn chọn | Header **Danh sách biểu mẫu** · empty **Không có bản ghi nào** · cột header **#** (trống body) |
| **Z6 Grid / detail actions** | Action gắn tag (DOM) | **Thêm tag** (`button-1047` · zone grid · **disabled** trên inventory — chưa chọn / chưa đủ điều kiện) |
| **Z7 Splitter** | Ranh giới master ↔ detail | Split dọc giữa list đoạn đường và danh sách biểu mẫu |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Nhập đoạn đường | Text / SearchField | — | Filter master · DOM `textfield-1031-inputEl` · placeholder **Nhập đoạn đường** · zone toolbar |
| Đoạn đường (73) | List panel title + count | — | Label DOM · count **73** = tổng master |
| # (STT master) | Grid column | — | Cột số thứ tự 1…73 trên ảnh |
| Đoạn đường | Grid column (text) | — | Tên/mã đoạn · ví dụ `ĐT.531` · `ĐT.538 (Km0+00-Km44+00)` · `QL.15 (Km208+350 - Km310+500)` · … |
| Danh sách biểu mẫu | Detail grid / list | — | Panel phải · empty trên ảnh |
| # (STT detail) | Grid column | — | Header cột detail — body empty |
| Empty state (detail) | EmptyState text | — | **Không có bản ghi nào** khi chưa chọn đoạn hoặc đoạn chưa có biểu mẫu/tag |
| Thêm tag | Button (create) | — | DOM disabled · gán/tag biểu mẫu vào đoạn đã chọn |

**Grid columns (master — ảnh + bodySample):** `#` · `Đoạn đường` — parity demo: STT · mã/tên đoạn · (tuỳ chọn) km range · row select → load detail.  
**Grid columns (detail):** trên ảnh chỉ lộ header `#` + empty — parity demo khi có data: STT · tên biểu mẫu / form code · tag · row actions theo `/erp-form-context` list shell. Không clone bảng ExtJS GOVOne.

### Tính năng / hành động

**Primary — Danh mục đoạn đường `006` (root view)**
- Mở từ tile **QUẢN TRỊ PHÂN QUYỀN** → `#quanTriDanhMucTuyen`
- Xem master **Đoạn đường (73)** · filter **Nhập đoạn đường**
- Chọn 1 dòng đoạn đường → load **Danh sách biểu mẫu** (detail) — trên ảnh chưa chọn / detail empty
- **Thêm tag** — gắn biểu mẫu/tag vào đoạn (disabled khi chưa đủ context)
- Nav sidebar: **Danh mục đoạn đường** (active) · **Phân quyền dữ liệu** · **Quản lý người dùng**
- User menu **Ban.TK.…** → Hồ sơ / Đổi mật khẩu / Đăng xuất (sibling `017`/`019` / `020`)
- Upstream: login shell GOVOne · Downstream: phân quyền dữ liệu · QL người dùng · đổi MK
- Bind đoạn đường → form tags — control-map `users` · API assign-routes / users/roles
- ≠ map monitor (patrol) · ≠ GIS editor · ≠ dashboard KPI

**Header / shell (ảnh + DOM)**
- Hamburger toggle sidebar
- Title panel **Danh mục đoạn đường**
- Bell thông báo
- **Ban.TK.Nguyễn Anh Phúc** (user menu trigger — đóng trên `006`)

**Sidebar (ảnh + bodySample)**
- **Danh mục đoạn đường** (active)
- **Phân quyền dữ liệu**
- **Quản lý người dùng**

**Master / detail (ảnh + DOM)**
- Search **Nhập đoạn đường**
- Select row đoạn đường
- Empty detail **Không có bản ghi nào**
- **Thêm tag** (disabled)

**Actions bổ sung từ sibling (map demo parity)**  
User menu mở (`017`/`019`: Hồ sơ của tôi · Đổi mật khẩu · Đăng xuất) · Đổi mật khẩu form (`020`: MK cũ · MK mới · Xác nhận · submit · VỀ TRANG CHỦ) · twin root `016`/`018` — giữ trong `users-actions.md` / control-map. **Không** bịa thêm button không có trên ảnh/DOM.

### Map → step context

- Feature: `docs/context/features/users.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `006-quan-tri-phan-quyen`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/users-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/users-actions.md`
- Demo: parity UI trong `users.html` / integration demo · MFE — same actions (sidebar 3 mục · search đoạn đường · master list 73 · detail biểu mẫu empty/data · Thêm tag · user menu), modern `/erp-form-context` Kind B (không clone GOVOne)
- **DOM / bind:** textfield đoạn đường · master grid · detail grid · Thêm tag → SearchField + DataGrid master-detail + Button create (Kind B)
- Twin: `016`/`018` (cùng slug/URL root) · sibling `017`/`019` (user menu) · `020` (đổi mật khẩu)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
