# AI Vision — KHAI THÁC BÁO CÁO › Bảng tổng hợp nhanh

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `022-khai-thac-bao-cao-bang-tong-hop-nhanh` |
| **slug** | `reports` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/022-khai-thac-bao-cao-bang-tong-hop-nhanh.png` |
| **DOM fields** | 0 → **12** (vision-enriched) |
| **DOM labels** | 0 → **11** (vision-enriched) |
| **DOM buttons** | 20 → **23** (capture inventory) |

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

### Inputs

| tag | type | name/id |
|-----|------|---------|
| — | — | — |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `022-khai-thac-bao-cao-bang-tong-hop-nhanh.png`  
> bodySample: `TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN · 01/08/2026 · Tuần đường 9 · Tuần kiểm 0 · Tình hình bão lũ 0 · Tai nạn giao thông 0 · Vi phạm xâm phạm 0 · Công việc 0 · CÔNG TÁC TUẦN ĐƯỜNG · Công ty Cổ phần 495 · QL.48C · QL.7 · Km … · CÔNG TÁC TUẦN KIỂM · Chưa thực hiện checkin · CÔNG VIỆC · Chưa có dữ liệu được ghi nhận!`  
> Capture: `capture/reports/bang-tong-hop-nhanh/view/` · twin `009` / `019` · sibling shell `003`/`004` (dashboard cùng URL) · `014` (maintenance Bảng THN) · catalog parent `007`/`008`/`018`/`021`

### Màn hình / mục đích

Màn **KHAI THÁC BÁO CÁO › Bảng tổng hợp nhanh** trên app GOVOne Đường bộ (`/DuongBo/dashboard`).  
Tiêu đề trang: **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN**.  
Mở từ sidebar / tile **Bảng tổng hợp nhanh** trong module khai thác báo cáo (khác màn catalog **Báo cáo tổng hợp** `008`/`018`/`021`).  
Mục đích: tổng hợp nhanh số liệu hoạt động **theo ngày** — hàng KPI thẻ màu + panel chi tiết theo nhóm công tác (tuần đường / tuần kiểm / công việc…).  
Không form CRUD / grid cột chuẩn — Kind shell: **E (report/dashboard + tile panels)** → demo MFE theo `/erp-report-context` + `/erp-form-context` modern, **không** clone skin GOVOne.  
Capture DOM = 0 field (SPA); actions từ ảnh + inventory `features/reports.md` (actionCount 23) + sibling catalog sidebar.

**Trạng thái viewport 022 (đã load data):** KPI Tuần đường `9`, còn lại `0` · panel **Tuần đường** lộ tree **Công ty Cổ phần 495** → **QL.48C** badge `8` + chip Km · **QL.7** badge `21` + chip Km · panel **Tuần kiểm** list tuyến + status đỏ **Chưa thực hiện checkin** · panel **Công việc** empty alert. Twin `019` cùng URL nhưng panel đang load/empty; twin `003`/`004` cùng shell dashboard (slug `dashboard`).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh trắng full-width: logo · tiêu đề dashboard · tiện ích phải | Logo **GOVOne** · title **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN** · **Date picker** `01/08/2026` (**dropdown trigger**) · app-launcher / layout grid icon · **Thiết lập cỡ chữ** (A) · theme sun (**Giao diện sáng** / **Giao diện tối**) · user avatar (menu: **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất** · **Ban.TK.…**) |
| **Z2 KPI strip** | Hàng 6 thẻ metric màu — tổng theo loại công tác trong ngày | **Tuần đường** `9` (xanh dương) · **Tuần kiểm** `0` (tím) · **Tình hình bão lũ** `0` (vàng) · **Tai nạn giao thông** `0` (đỏ) · **Vi phạm xâm phạm** `0` (xanh đậm) · **Công việc** `0` (xanh lá) |
| **Z3 Panel — CÔNG TÁC TUẦN ĐƯỜNG** | Cột trái: header xanh + minimize · tree đơn vị/tuyến · chip Km | Header button **CÔNG TÁC TUẦN ĐƯỜNG** · nút thu gọn `−` · node **Công ty Cổ phần 495** (expand) · nhóm **QL.48C** badge `8` · chips `Km 122 + 393` · `Km 35 + 999` · `Km 47 + 880` · `Km 70 + 000` · `Km 88 + 900` · `Km 91 + 750` · `Km 97 + 250` · `Km 114 + 000` · nhóm **QL.7** badge `21` · chips `Km 83 + 980` · `Km 9 + 113` · `Km 138 + 264` · `Km 182 + 791` · … (thêm chip Km trên ảnh) |
| **Z4 Panel — CÔNG TÁC TUẦN KIỂM** | Cột giữa: header tím + minimize · list tuyến / trạng thái check-in | Header button **CÔNG TÁC TUẦN KIỂM** · nút `−` · **QL.48C** — pill đỏ **Chưa thực hiện checkin** · **QL.7** — pill đỏ **Chưa thực hiện checkin** |
| **Z5 Panel — CÔNG VIỆC** | Cột phải: header xanh lá + minimize · empty | Header button **CÔNG VIỆC** · nút `−` · alert info **ⓘ Chưa có dữ liệu được ghi nhận!** |
| **Z6 Footer / shell tiles** | App tiles / liên kết ngoài (DOM, có thể ngoài viewport ảnh) | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · govone.vn · youtube · facebook |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Ngày tổng hợp | DatePicker / dropdown | Có (filter kỳ) | Ảnh: `01/08/2026` — lọc KPI + panels theo ngày · DOM **dropdown trigger** |
| Tuần đường | KPI card (metric) | — | Count `9` · màu xanh · gắn panel Z3 |
| Tuần kiểm | KPI card (metric) | — | Count `0` · tím · panel Z4 (check-in chưa xong vẫn count 0) |
| Tình hình bão lũ | KPI card (metric) | — | Count `0` · vàng |
| Tai nạn giao thông | KPI card (metric) | — | Count `0` · đỏ · sibling drill catalog TNGT |
| Vi phạm xâm phạm | KPI card (metric) | — | Count `0` · xanh đậm |
| Công việc | KPI card (metric) | — | Count `0` · xanh lá · panel Z5 |
| Đơn vị / công ty | Tree parent node | — | **Công ty Cổ phần 495** (expand/collapse) |
| Tuyến (QL) | Tree group + badge count | — | **QL.48C** (`8`) · **QL.7** (`21`) — panel Tuần đường |
| Điểm Km / lý trình | Chip / tag | — | Format `Km N + MMM` — click → chi tiết điểm tuần đường |
| Trạng thái check-in | Status / badge / button | — | **Chưa thực hiện checkin** (đỏ) per tuyến — panel Tuần kiểm |
| Empty state | Info alert | — | **Chưa có dữ liệu được ghi nhận!** (panel Công việc) |

**Grid columns:** không có bảng cột cố định — cấu trúc dữ liệu **Company → Route (QL) → Km chips** (+ list tuyến/status cho tuần kiểm). Parity demo: KPI strip + collapsible panels + chip list + check-in status · modern `/erp-report-context` Kind E — **không** clone bảng GOVOne.

### Tính năng / hành động

**Primary — Bảng tổng hợp nhanh (`022`)**
- Mở **Bảng tổng hợp nhanh** → `/DuongBo/dashboard` (title tổng hợp BDTX)
- Chọn **ngày tổng hợp** (date dropdown `01/08/2026`) — reload KPI + panels theo ngày
- Xem 6 KPI metric ngày; (gợi ý UX) click thẻ → focus panel / lọc loại
- Panel **CÔNG TÁC TUẦN ĐƯỜNG** — collapse (`−`) · expand **Công ty Cổ phần 495** · badge tuyến · click chip Km
- Panel **CÔNG TÁC TUẦN KIỂM** — collapse · xem / drill status **Chưa thực hiện checkin** theo **QL.48C** / **QL.7**
- Panel **CÔNG VIỆC** — collapse · empty state (list WO khi có dữ liệu)
- ≠ catalog **Báo cáo tổng hợp** / Nhật ký tuần đường (`007`/`008`/`018`/`021`) · ≠ GIS editor · ≠ CRUD form
- Twin `009`/`019` (cùng menu path) · sibling dashboard `003`/`004` · maintenance `014`

**Header / shell (ảnh + DOM)**
- **dropdown trigger** (date)
- App layout / grid icon (app launcher)
- **Thiết lập cỡ chữ**
- **Giao diện sáng** / **Giao diện tối**
- User menu: **Ban.TK.…** · **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất**
- Liên kết ngoài: **govone.vn** · **youtube** · **facebook**

**KPI strip (ảnh)**
- Click / focus: **Tuần đường** · **Tuần kiểm** · **Tình hình bão lũ** · **Tai nạn giao thông** · **Vi phạm xâm phạm** · **Công việc**

**Panels nội dung (ảnh)**
- **CÔNG TÁC TUẦN ĐƯỜNG** — expand/collapse (`−`) · expand đơn vị · badge count theo tuyến · click chip Km (drill)
- **CÔNG TÁC TUẦN KIỂM** — collapse · status **Chưa thực hiện checkin** trên **QL.48C** / **QL.7**
- **CÔNG VIỆC** — collapse · empty alert

**Footer / app tiles (DOM)**
- **Báo cáo tổng hợp**
- **Phân quyền**
- **Bản đồ**
- **Vấn đề**
- **Giám sát**
- **Hồ sơ**

**Actions bổ sung từ sibling catalog sidebar `018`/`007`/`021` (map demo parity — reports)**  
Bảng tổng hợp nhanh · Báo cáo tổng hợp · QUẢN LÝ BẢO TRÌ · QUẢN LÝ BDTX · catalog BDTX/Tài sản · Phân quyền báo cáo — giữ trong `reports-actions.md` / control-map (172). **Không** bịa button không có trên ảnh/DOM.

### Map → step context

- Feature: `docs/context/features/reports.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `022-khai-thac-bao-cao-bang-tong-hop-nhanh`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/reports-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/reports-actions.md`
- Demo: parity UI trong `Linm.RMMS.Demo/src/demo/bao-cao/reports.html` · MFE — same actions (date filter · 6 KPI · panels tuần đường/tuần kiểm/công việc · Company→QL→Km chips · check-in status · empty · collapse), modern `/erp-form-context` + `/erp-report-context` Kind E (không clone GOVOne)
- **DOM / bind:** DatePicker · KPI metric cards · CollapsiblePanel ×3 · Tree Company/QL/Km chips · Check-in status · EmptyAlert → AnalyticsReportShell / dashboard tiles
- **Capture path:** `capture/reports/bang-tong-hop-nhanh/view/` (master/page/action)
- Sibling: `009`/`019` (twin Bảng THN) · `003`/`004` (dashboard cùng URL) · `014` (maintenance) · `007`/`008`/`018`/`021` (catalog Báo cáo tổng hợp)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
