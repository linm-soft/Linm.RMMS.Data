# AI Vision — KHAI THÁC BÁO CÁO › Bảng tổng hợp nhanh

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `019-khai-thac-bao-cao-bang-tong-hop-nhanh` |
| **slug** | `reports` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/019-khai-thac-bao-cao-bang-tong-hop-nhanh.png` |
| **DOM fields** | 0 → **10** (vision-enriched) |
| **DOM labels** | 0 → **9** (vision-enriched) |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `019-khai-thac-bao-cao-bang-tong-hop-nhanh.png`  
> Capture: `capture/reports/bang-tong-hop-nhanh/view/` · twin `009` / `022` · sibling shell `014` (maintenance cùng URL dashboard) · catalog parent `018`/`007`/`021`

### Màn hình / mục đích

Màn **KHAI THÁC BÁO CÁO › Bảng tổng hợp nhanh** trên app GOVOne Đường bộ (`/DuongBo/dashboard`).  
Tiêu đề trang: **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN**.  
Mở từ sidebar / tile **Bảng tổng hợp nhanh** trong module khai thác báo cáo (khác màn catalog **Báo cáo tổng hợp** `018`).  
Mục đích: tổng hợp nhanh số liệu hoạt động **theo ngày** — hàng KPI thẻ màu + panel chi tiết theo nhóm công tác (tuần đường / tuần kiểm / công việc…).  
Không form CRUD / grid cột chuẩn — Kind shell: **E (report/dashboard + tile panels)** → demo MFE theo `/erp-report-context` + `/erp-form-context` modern, **không** clone skin GOVOne.  
Capture DOM = 0 field (SPA); actions từ ảnh + inventory `features/reports.md` (actionCount 23) + sibling catalog sidebar (`018`).

**Trạng thái viewport 019:** KPI đã có số (Tuần đường `9`, còn lại `0`) · panel nội dung **đang load / empty** (overlay **Đang xử lý** trên Tuần kiểm · alert **Chưa có dữ liệu được ghi nhận!** trên Tuần kiểm + Công việc · panel Tuần đường body trống trên ảnh — tree Km chưa lộ). Twin `014`/`009` khi có data: Company → Route (QL) → Km chips.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh trắng full-width: logo · tiêu đề dashboard · tiện ích phải | Logo **GOVOne** · title **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN** · **Date picker** `01/08/2026` (**dropdown trigger**) · app-launcher / layout grid icon · **Thiết lập cỡ chữ** (A) · theme sun (**Giao diện sáng** / **Giao diện tối**) · user avatar (menu: **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất** · **Ban.TK.…**) |
| **Z2 KPI strip** | Hàng 6 thẻ metric màu — tổng theo loại công tác trong ngày | **Tuần đường** `9` (xanh dương) · **Tuần kiểm** `0` (tím) · **Tình hình bão lũ** `0` (vàng) · **Tai nạn giao thông** `0` (đỏ) · **Vi phạm xâm phạm** `0` (xanh đậm) · **Công việc** `0` (xanh lá) |
| **Z3 Panel — CÔNG TÁC TUẦN ĐƯỜNG** | Cột trái: header xanh + minimize · body (ảnh 019 trống) | Header button **CÔNG TÁC TUẦN ĐƯỜNG** · nút thu gọn `−` · body trống (chưa lộ tree đơn vị/tuyến/Km trên viewport này) |
| **Z4 Panel — CÔNG TÁC TUẦN KIỂM** | Cột giữa: header tím + minimize · loading + empty | Header button **CÔNG TÁC TUẦN KIỂM** · nút `−` · overlay **Đang xử lý** (spinner) · alert **ⓘ Chưa có dữ liệu được ghi nhận!** |
| **Z5 Panel — CÔNG VIỆC** | Cột phải: header xanh lá + minimize · empty | Header button **CÔNG VIỆC** · nút `−` · alert **ⓘ Chưa có dữ liệu được ghi nhận!** |
| **Z6 Footer / shell tiles** | App tiles / liên kết ngoài (DOM, có thể ngoài viewport ảnh) | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · govone.vn · youtube · facebook |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Ngày tổng hợp | DatePicker / dropdown | Có (filter kỳ) | Ảnh: `01/08/2026` — lọc KPI + panels theo ngày · DOM **dropdown trigger** |
| Tuần đường | KPI card (metric) | — | Count `9` · màu xanh · gắn panel Z3 |
| Tuần kiểm | KPI card (metric) | — | Count `0` · tím · panel Z4 |
| Tình hình bão lũ | KPI card (metric) | — | Count `0` · vàng |
| Tai nạn giao thông | KPI card (metric) | — | Count `0` · đỏ · sibling drill catalog TNGT |
| Vi phạm xâm phạm | KPI card (metric) | — | Count `0` · xanh đậm |
| Công việc | KPI card (metric) | — | Count `0` · xanh lá · panel Z5 |
| Trạng thái tải | Loading overlay | — | Text **Đang xử lý** (panel tuần kiểm) |
| Empty state | Info alert | — | **Chưa có dữ liệu được ghi nhận!** (Z4 + Z5) |
| (Parity khi có data) Đơn vị / tuyến / Km | Tree + chip | — | Không lộ trên ảnh 019 · sibling `014`: Company → QL.xx badge → chips `Km N + MMM` |

**Grid columns:** không có bảng cột cố định — cấu trúc dữ liệu parity **Company → Route (QL) → Km chips** (khi load xong). Parity demo: KPI strip + collapsible panels + chip list / empty+loading states; modern `/erp-report-context` Kind E.

### Tính năng / hành động

**Primary — Bảng tổng hợp nhanh (`019`)**
- Mở **Bảng tổng hợp nhanh** → `/DuongBo/dashboard` (title tổng hợp BDTX)
- Chọn **ngày tổng hợp** (date dropdown `01/08/2026`) — reload KPI + panels theo ngày
- Xem 6 KPI metric ngày; (gợi ý UX) click thẻ → focus panel / lọc loại
- Panel **CÔNG TÁC TUẦN ĐƯỜNG** — collapse (`−`) · (parity) expand đơn vị · badge tuyến · click chip Km
- Panel **CÔNG TÁC TUẦN KIỂM** — collapse · chờ **Đang xử lý** · empty state
- Panel **CÔNG VIỆC** — collapse · empty state
- ≠ catalog **Báo cáo tổng hợp** / Nhật ký tuần đường (`018`) · ≠ GIS editor · ≠ CRUD form

**Header / shell (ảnh + DOM)**
- **dropdown trigger** (date)
- App layout / grid icon (app launcher)
- **Thiết lập cỡ chữ**
- **Giao diện sáng** / **Giao diện tối**
- User menu: **Ban.TK.…** · **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất**
- Liên kết ngoài: **govone.vn** · **youtube** · **facebook**

**Footer / app tiles (DOM)**
- **Báo cáo tổng hợp**
- **Phân quyền**
- **Bản đồ**
- **Vấn đề**
- **Giám sát**
- **Hồ sơ**

**Actions bổ sung từ sibling catalog sidebar `018` (map demo parity — reports)**  
Bảng tổng hợp nhanh · Báo cáo tổng hợp · QUẢN LÝ BẢO TRÌ · QUẢN LÝ BDTX · catalog BDTX/Tài sản · Phân quyền báo cáo — giữ trong `reports-actions.md` / control-map (172). **Không** bịa button không có trên ảnh/DOM.

### Map → step context

- Feature: `docs/context/features/reports.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `019-khai-thac-bao-cao-bang-tong-hop-nhanh`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/reports-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/reports-actions.md`
- Demo: parity UI trong `Linm.RMMS.Demo/src/demo/bao-cao/reports.html` · MFE — same actions (date filter · 6 KPI · panels tuần đường/tuần kiểm/công việc · loading/empty · collapse), modern `/erp-form-context` + `/erp-report-context` Kind E (không clone GOVOne)
- **DOM / bind:** DatePicker · KPI metric cards · CollapsiblePanel ×3 · LoadingOverlay · EmptyAlert → AnalyticsReportShell / dashboard tiles
- **Capture path:** `capture/reports/bang-tong-hop-nhanh/view/` (master/page/action)
- Sibling: `009`/`022` (twin Bảng THN) · `014` (maintenance cùng dashboard URL) · `018`/`007`/`021` (catalog Báo cáo tổng hợp)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
