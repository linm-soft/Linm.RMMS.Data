# AI Vision — SỬA CHỮA ĐỊNH KỲ › Tai nạn giao thông

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `015-sua-chua-inh-ky-tai-nan-giao-thong` |
| **slug** | `maintenance` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/015-sua-chua-inh-ky-tai-nan-giao-thong.png` |
| **DOM fields** | 0 → **4** (vision-enriched) |
| **DOM labels** | 0 → **2** (vision-enriched) |
| **DOM buttons** | 21 |

## DOM inventory (đã capture)

### Labels
- _(trống — ưu tiên đọc từ ảnh)_

### Buttons / actions
- dropdown trigger
- Báo cáo tổng hợp
- Phân quyền
- Bản đồ
- Vấn đề
- Giám sát
- Hồ sơ
- govone.vn
- youtube
- facebook
- Thiết lập cỡ chữ
- Giao diện sáng
- Giao diện tối
- Ban.TK.Nguyễn Anh Phúc nguyenanhphuc.dbna@cloudgis.vn
- Thông tin của tôi
- Đổi mật khẩu
- Đăng xuất
- CÔNG TÁC TUẦN ĐƯỜNG
- CÔNG TÁC TUẦN KIỂM
- CÔNG VIỆC
- Đóng

### Inputs

| tag | type | name/id |
|-----|------|---------|
| — | — | — |

## Analysis (AI điền)

> Vision reviewed: 2026-08-01 · ai-autocode autopilot · screenshot `015-sua-chua-inh-ky-tai-nan-giao-thong.png`

### Màn hình / mục đích

Màn **drill-down Tai nạn giao thông (TNGT)** từ dashboard BDTX GOVOne (`/DuongBo/dashboard`) — cùng URL sibling `014-sua-chua-inh-ky-bang-tong-hop-nhanh`.  
Ảnh capture: **modal / dialog** tiêu đề **Tai nạn giao thông** (góc trái header) sau khi kích hoạt KPI đỏ **Tai nạn giao thông** trên bảng tổng hợp nhanh (count ngày = `0`).  
Body modal **trắng hoàn toàn** — không form field, không toolbar nội dung, không grid/list, không empty-state text (khác panel sibling có alert «Chưa có dữ liệu được ghi nhận!»).  
Chrome modal: icon **maximize / pop-out** + **× đóng** (góc phải). DOM còn nút **Đóng** + shell dashboard phía dưới (KPI panels · footer tiles).  
Mục đích nghiệp vụ: xem chi tiết sự cố TNGT trong ngày (theo kỳ date filter dashboard); khi count = 0 → modal mở nhưng **không có bản ghi**.  
Kind shell: **E (report/dashboard drill modal)** → demo MFE parity theo `/erp-report-context` + `/erp-form-context` modern (slideout/modal + EmptyState), **không** clone skin GOVOne.  
Capture DOM = 0 field (SPA); bổ sung vision từ ảnh + liên kết sibling `014` (KPI strip) · `009`/`013` (sidebar Số liệu › Tai nạn giao thông).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Modal chrome / header** | Thanh header dialog trắng, tiêu đề trái · controls phải | Title **Tai nạn giao thông** · **Maximize / pop-out** (ô vuông + mũi tên chéo) · **Đóng ×** |
| **Z2 Modal body (content)** | Vùng nội dung chính — empty | Nền trắng đồng nhất · **không** field · **không** grid · **không** toolbar · **không** text empty-state |
| **Z3 Shell dashboard (DOM — dưới modal / cùng page)** | App Bảng tổng hợp nhanh vẫn gắn DOM | **dropdown trigger** (date) · panels **CÔNG TÁC TUẦN ĐƯỜNG** · **CÔNG TÁC TUẦN KIỂM** · **CÔNG VIỆC** · shell user/theme |
| **Z4 Footer / app tiles (DOM)** | Liên kết ngoài viewport modal | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · govone.vn · youtube · facebook |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Tiêu đề modal | Text / DialogTitle | — | Ảnh: **Tai nạn giao thông** |
| Empty state (TNGT) | EmptyState / Status | — | Body trắng khi KPI = `0` — parity demo: alert «Chưa có dữ liệu được ghi nhận!» (đồng bộ sibling `014`) |
| Ngày tổng hợp (shell) | DatePicker | Có (filter kỳ) | Sibling `014` — lọc dữ liệu ngày trước khi drill KPI |
| KPI Tai nạn giao thông | KPI card (metric) | — | Sibling `014` count `0` · đỏ · click → mở modal này |

**Grid columns:** không thấy trên ảnh (modal empty).  
Parity demo khi có dữ liệu (gợi ý theo pattern panel tuần đường sibling + domain TNGT): tree/list **Đơn vị → Tuyến (QL) → điểm Km / sự cố** hoặc grid STT · Ngày giờ · Tuyến · Lý trình · Mô tả · Mức độ · Trạng thái — modern `/erp-report-context` · row action menu · không header `TT`.

### Tính năng / hành động

**Primary — Modal TNGT (focus vision `015`)**
- Mở drill-down từ KPI **Tai nạn giao thông** (sibling `014`) hoặc menu sidebar **Số liệu › Tai nạn giao thông** (`013`)
- Xem tiêu đề **Tai nạn giao thông**
- **Maximize / pop-out** — phóng / tách cửa sổ modal
- **Đóng** / **×** — đóng modal, quay dashboard
- Empty state khi không có bản ghi ngày (ảnh: body trắng)

**Shell dashboard (DOM — cùng page)**
- **dropdown trigger** (date filter)
- **CÔNG TÁC TUẦN ĐƯỜNG** · **CÔNG TÁC TUẦN KIỂM** · **CÔNG VIỆC** — collapse/focus panels
- **Thiết lập cỡ chữ** · **Giao diện sáng** · **Giao diện tối**
- User menu: **Ban.TK.…** · **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất**
- Liên kết ngoài: **govone.vn** · **youtube** · **facebook**

**Footer / app tiles (DOM)**
- **Báo cáo tổng hợp**
- **Phân quyền**
- **Bản đồ**
- **Vấn đề**
- **Giám sát**
- **Hồ sơ**

**Actions bổ sung từ sibling sidebar `013` (module bảo trì — map demo parity)**  
Bảng tổng hợp nhanh · Báo cáo tổng hợp · Tổng hợp bảo trì · Dự án bảo trì · Tuần kiểm / Tuần đường · Số liệu (thiệt hại · ùn tắc · hạng mục · **Tai nạn giao thông** · …) · Tài liệu · Phân quyền — giữ trong `maintenance-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/maintenance.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/maintenance-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/maintenance-actions.md`
- Demo: parity UI trong `maintenance-demo.html` / `maintenance.html` · MFE — same actions (KPI TNGT → modal/slideout drill · EmptyState · maximize/đóng · date filter shell), modern `/erp-form-context` + `/erp-report-context` (không clone GOVOne)
- Sibling: `014-sua-chua-inh-ky-bang-tong-hop-nhanh` (dashboard KPI) · reports `010-khai-thac-bao-cao-tai-nan-giao-thong` (báo cáo TNGT — packet riêng)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
