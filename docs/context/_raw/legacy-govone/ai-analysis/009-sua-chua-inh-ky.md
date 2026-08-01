# AI Vision — SỬA CHỮA ĐỊNH KỲ

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `009-sua-chua-inh-ky` |
| **slug** | `maintenance` |
| **url** | https://pmdb.govone.vn/DuongBo/baotri |
| **screenshot** | `screenshots/009-sua-chua-inh-ky.png` |
| **DOM fields** | 0 |
| **DOM labels** | 0 |
| **DOM buttons** | 0 |

## DOM inventory (đã capture)

### Labels
- _(trống — ưu tiên đọc từ ảnh)_

### Buttons / actions
- _(trống)_

### Inputs

| tag | type | name/id |
|-----|------|---------|
| — | — | — |

## Analysis (AI điền)

> Vision reviewed: 2026-08-01 · ai-autocode autopilot · screenshot `009-sua-chua-inh-ky.png`

### Màn hình / mục đích

Màn **landing SỬA CHỮA ĐỊNH KỲ / Tổng hợp bảo trì** trên app GOVOne Đường bộ (`/DuongBo/baotri` → UI «Tổng hợp bảo trì»).  
Mục đích: dashboard tổng hợp trạng thái dự án bảo trì (KPI thẻ màu) + biểu đồ số dự án theo năm — điểm vào module **QUẢN LÝ BẢO TRÌ** (sidebar active: **Tổng hợp bảo trì**).  
Không có form nhập / grid dữ liệu trên ảnh — Kind shell: **E (report/dashboard)** → demo MFE theo `/erp-report-context` + `/erp-form-context` modern, **không** clone skin GOVOne.  
Capture DOM root = 0 field/button (SPA render muộn); action đầy đủ bổ sung từ ảnh + sibling `013-sua-chua-inh-ky` (`/baotri/tonghop`).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header** | Thanh mỏng trắng: toggle sidebar · breadcrumb · tiện ích phải | `>` / hamburger · breadcrumb **Tổng hợp bảo trì** · app-switcher (grid) · theme (sun) · user avatar |
| **Z2 Left rail (nav)** | Sidebar tối logo **govOne** + menu module | **Bảng tổng hợp nhanh** · **Báo cáo tổng hợp** · nhóm **QUẢN LÝ BẢO TRÌ** (**Tổng hợp bảo trì** active · **Dự án bảo trì**) · nhóm **QUẢN LÝ BDTX** (**Tuần kiểm** · **Tuần đường** · **Số liệu** · **Tài liệu**) · nhóm **QUẢN TRỊ ỨNG DỤNG** (**Phân quyền**) |
| **Z3 KPI cards — Tổng hợp bảo trì** | Khối 6 thẻ màu 3×2 dưới heading **Tổng hợp bảo trì** | Thẻ: **Đang thi công** (xanh dương) · **Đang bảo hành** (xanh lá) · **Quá hạn bảo hành** (đỏ/hồng) · **Hết hạn bảo hành trong năm** (cam) · **Hết hạn bảo hành trong tháng** (vàng) · **Hết hạn bảo hành trong tháng sau** (vàng đậm) — mỗi thẻ: số lớn + nhãn |
| **Z4 Chart — Biểu đồ bảo trì** | Panel dưới KPI: title + chart area | Title **Biểu đồ bảo trì** · trục Y (0…1.0) · overlay loading tím **Đang xử lý** · nhãn trục X lỗi binding legacy `[object Object]` (bug capture lúc load) |
| **Z5 Filter / toolbar form** | Không có trên ảnh | Không search / date filter / toolbar CRUD |
| **Z6 Grid / Footer** | Không grid / pager | Không cột bảng · không footer action riêng (nav nằm sidebar + header) |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Tổng hợp bảo trì | Section heading | — | Tiêu đề khối KPI |
| Đang thi công | KPI card (metric) | — | Click-through gợi ý → list dự án đang thi công (parity demo: navigate/filter status) |
| Đang bảo hành | KPI card (metric) | — | Status bảo hành |
| Quá hạn bảo hành | KPI card (metric) | — | Status quá hạn BH |
| Hết hạn bảo hành trong năm | KPI card (metric) | — | Cửa sổ hết hạn theo năm |
| Hết hạn bảo hành trong tháng | KPI card (metric) | — | Cửa sổ hết hạn tháng hiện tại |
| Hết hạn bảo hành trong tháng sau | KPI card (metric) | — | Cửa sổ hết hạn tháng sau |
| Biểu đồ bảo trì | Chart panel title | — | Bar/series chart dự án theo kỳ |
| (trục X chart) | Chart category | — | Legacy lỗi `[object Object]` khi đang load — sibling `013` render năm (vd. 2024 · 2026) + legend **Dự án** |
| (trục Y chart) | Chart value scale | — | Scale số (ảnh 009: 0–1.0 khi empty/loading) |

**Grid columns:** không có (dashboard KPI + chart). Parity demo report: KPI strip + chart mock; drill-down status → list/voucher ở màn **Dự án bảo trì** (sibling nav).

### Tính năng / hành động

**Sidebar — điều hướng module (đầy đủ trên ảnh)**
- **Bảng tổng hợp nhanh** — mở dashboard tổng hợp BDTX (`/DuongBo/dashboard` · sibling `014`)
- **Báo cáo tổng hợp** — mở báo cáo tổng hợp
- **QUẢN LÝ BẢO TRÌ** (section header)
  - **Tổng hợp bảo trì** (active — màn hiện tại · `/DuongBo/baotri` / `…/tonghop`)
  - **Dự án bảo trì** — danh sách/chi tiết dự án bảo trì
- **QUẢN LÝ BDTX** (section header)
  - **Tuần kiểm** (expand) — hoạt động tuần kiểm (sibling `016`)
  - **Tuần đường** (expand) — hoạt động tuần đường (sibling `017`)
  - **Số liệu** (expand) — số liệu BDTX (thiệt hại · ùn tắc · hạng mục · TNGT · … — capture sâu `013`)
  - **Tài liệu** (expand) — giấy phép thi công · công văn · QL tài sản
- **QUẢN TRỊ ỨNG DỤNG** (section header)
  - **Phân quyền** (expand) — phân quyền báo cáo / admin

**Header / shell**
- Toggle sidebar (hamburger / `>`)
- Breadcrumb **Tổng hợp bảo trì**
- App switcher (grid icon)
- Theme toggle (sun — sáng/tối; DOM sibling: Giao diện sáng / Giao diện tối)
- User menu (avatar — DOM sibling: Thông tin của tôi · Đổi mật khẩu · Đăng xuất)

**Content**
- Xem KPI 6 trạng thái bảo trì / bảo hành (số đếm trên thẻ)
- (Gợi ý UX) Click thẻ KPI → lọc/drill-down danh sách dự án theo status
- Xem **Biểu đồ bảo trì** — loading «Đang xử lý» trên ảnh 009; khi xong hiển thị series theo năm (xem `013`)
- Không CRUD / export / filter bar trên capture này

**Actions bổ sung từ sibling DOM `013` (cùng module — map demo đủ parity)**  
Footer/app tiles & menu sâu: Báo cáo tổng hợp · Bản đồ · Vấn đề · Giám sát · Hồ sơ · Hoạt động tuần kiểm/tuần đường · Nhật ký · Số liệu thiệt hại · Ùn tắc · Hạng mục hư hỏng · Vi phạm HLATĐB · Tai nạn giao thông · Đếm xe · Kiểm tra cầu · Giấy phép thi công · Công văn đi - đến · Quản lý tài sản · Phân quyền báo cáo — giữ trong `maintenance-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/maintenance.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/maintenance-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/maintenance-actions.md`
- Demo: parity UI trong `maintenance-demo.html` · MFE — same actions (KPI status · chart · nav Tổng hợp / Dự án / BDTX), modern `/erp-form-context` + `/erp-report-context` (không clone GOVOne)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
