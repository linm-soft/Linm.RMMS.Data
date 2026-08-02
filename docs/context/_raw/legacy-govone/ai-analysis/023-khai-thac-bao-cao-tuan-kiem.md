# AI Vision — KHAI THÁC BÁO CÁO › Tuần kiểm

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `023-khai-thac-bao-cao-tuan-kiem` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/023-khai-thac-bao-cao-tuan-kiem.png` |
| **DOM fields** | 0 → **10** (vision-enriched · bodySample) |
| **DOM labels** | 0 → **8** (vision-enriched · bodySample) |
| **DOM buttons** | 21 → **24** (capture inventory · features/patrol.md) |

## DOM inventory (đã capture)

### Labels
- _(trống — ưu tiên đọc từ ảnh / bodySample)_

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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `023-khai-thac-bao-cao-tuan-kiem.png`  
> **Capture note:** PNG byte-identical với twin `020-khai-thac-bao-cao-tuan-kiem.png` (SHA256 `72798A43FA92042B…`) — ảnh pixel gần trắng (header + divider + body trống); OCR/vision thấy tiêu đề modal **Chấm công** (cũng xuất hiện cuối `bodySample`). Inventory primary id = `023` · path `capture/reports/tuan-kiem/view/`. Mục tiêu packet = **KHAI THÁC BÁO CÁO › Tuần kiểm**; reconstruct UI từ `inventory.json` `bodySample` + sibling dashboard `019`/`022`/`016` + control-map `patrol`.

### Màn hình / mục đích

Màn **KHAI THÁC BÁO CÁO › Tuần kiểm** trên app GOVOne Đường bộ (`/DuongBo/dashboard`).  
Page title: **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN**.  
Capture path: `capture/reports/tuan-kiem/view/` (master/page/action) · pageTitle **Tuần kiểm** · inventory id **`023`** · twin screenshot `020`.  
Mở từ sidebar / tile **Tuần kiểm** trong module khai thác báo cáo (khác catalog **Báo cáo tổng hợp** `018` · khác Bảng tổng hợp nhanh root `019`/`022` nhưng **cùng shell dashboard**).

**Mục đích:** drill / focus **công tác tuần kiểm** trong ngày — KPI tím **Tuần kiểm** + panel **CÔNG TÁC TUẦN KIỂM** liệt kê tuyến (QL) kèm trạng thái check-in.  
`bodySample` (SSOT khi PNG blank):
- Date `01/08/2026` · KPI **Tuần đường `9`** · **Tuần kiểm `0`** · bão lũ / TNGT / vi phạm / công việc = `0`
- Panel **CÔNG TÁC TUẦN ĐƯỜNG**: Công ty Cổ phần 495 → **QL.48C** / **QL.721** + chips Km…
- Panel **CÔNG TÁC TUẦN KIỂM** (focus): **QL.48C** · **QL.7** — **Chưa thực hiện checkin**
- Panel **CÔNG VIỆC**: **Chưa có dữ liệu được ghi nhận!**
- Text phụ cuối sample: **Chấm công** (chrome miscapture trên PNG)

Ảnh PNG (miscapture): modal/shell tiêu đề **Chấm công** · body trắng · maximize + × / **Đóng** — không lộ KPI/panels; dùng evidence modal chrome.  
Kind shell: **E (report/dashboard panel + check-in status)** → demo MFE `/erp-report-context` + `/erp-form-context` modern — **không** clone skin GOVOne.  
Slug map: **`patrol`** (check-in / tuần kiểm / giám sát).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh / bodySample |
|------|-------|-------------------------------------|
| **Z1 Header / app bar (bodySample · sibling `019`/`022`)** | Thanh trắng: logo · title dashboard · date · tiện ích | Logo GOVOne · **TỔNG HỢP CÔNG TÁC…** · **Date** `01/08/2026` (**dropdown trigger**) · **Thiết lập cỡ chữ** · **Giao diện sáng/tối** · user avatar menu (**Ban.TK.…** · Thông tin của tôi · Đổi MK · Đăng xuất) |
| **Z2 KPI strip (bodySample)** | 6 thẻ metric ngày | **Tuần đường** `9` · **Tuần kiểm** `0` (tím — focus packet) · Tình hình bão lũ `0` · Tai nạn giao thông `0` · Vi phạm xâm phạm `0` · Công việc `0` |
| **Z3 Panel — CÔNG TÁC TUẦN KIỂM (focus)** | Cột giữa: header tím + collapse · list tuyến / trạng thái | Header button **CÔNG TÁC TUẦN KIỂM** · thu gọn `−` · **QL.48C** — **Chưa thực hiện checkin** · **QL.7** — **Chưa thực hiện checkin** · (sibling `019`: overlay **Đang xử lý** / alert empty) |
| **Z4 Sibling panels (cùng page)** | Cột trái/phải | **CÔNG TÁC TUẦN ĐƯỜNG** (Công ty → QL → Km chips) · **CÔNG VIỆC** (alert **Chưa có dữ liệu được ghi nhận!**) |
| **Z5 Modal overlay (pixel ảnh — miscapture)** | Dialog trắng phủ dashboard | Title **Chấm công** · **Maximize / pop-out** · **× / Đóng** · body trống (2 pane divider) |
| **Z6 Footer / app tiles (DOM)** | Liên kết shell | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · govone.vn · youtube · facebook |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Ngày tổng hợp | DatePicker / dropdown | Có (filter kỳ) | `01/08/2026` — lọc KPI + panels · DOM **dropdown trigger** |
| Tuần kiểm | KPI card (metric) | — | Count `0` · tím · click → focus panel Z3 |
| CÔNG TÁC TUẦN KIỂM | Collapsible panel header | — | Button panel header · minimize `−` |
| Tuyến (QL) — tuần kiểm | Tree / list row | — | bodySample: **QL.48C** · **QL.7** |
| Trạng thái check-in | Status / badge | — | **Chưa thực hiện checkin** (per tuyến) |
| Empty / loading (panel) | EmptyState / Spinner | — | Sibling `019`: **Đang xử lý** · **Chưa có dữ liệu được ghi nhận!** |
| Tiêu đề modal (miscapture) | DialogTitle | — | Ảnh: **Chấm công** — không thuộc tuần kiểm |
| Empty state modal (miscapture) | EmptyState | — | Body trắng khi modal Chấm công mở nhầm |
| Tuần đường (sibling KPI) | KPI card | — | Count `9` · panel Z4 tree Km |
| Công việc (sibling KPI) | KPI card | — | Count `0` · panel empty |

**Grid columns:** không bảng cột cố định — cấu trúc panel **Tuyến (QL) → trạng thái check-in**.  
Parity demo: Company → QL → điểm Km / check-in status · modern `/erp-report-context` · row action menu · không header `TT`.

### Tính năng / hành động

**Primary — KHAI THÁC BÁO CÁO › Tuần kiểm (`023` / twin `020`)**
- Mở từ menu **KHAI THÁC BÁO CÁO › Tuần kiểm** hoặc KPI **Tuần kiểm** trên `/DuongBo/dashboard`
- Chọn **ngày tổng hợp** (date dropdown) — reload KPI + panels
- Xem / focus panel **CÔNG TÁC TUẦN KIỂM** — collapse/expand (`−` / header)
- Xem trạng thái check-in theo tuyến (**Chưa thực hiện checkin**)
- Loading / empty state khi panel chưa có bản ghi ngày
- (Gợi ý UX) Click tuyến / status → drill hoạt động tuần kiểm / nhật ký (catalog reports)
- ≠ catalog **Báo cáo tổng hợp** `018` · ≠ GIS giám sát map `004`–`011` · ≠ CRUD form

**Shell dashboard (DOM — cùng page)**
- **dropdown trigger** (date filter)
- **CÔNG TÁC TUẦN ĐƯỜNG** · **CÔNG TÁC TUẦN KIỂM** · **CÔNG VIỆC** — collapse/focus panels
- **Thiết lập cỡ chữ** · **Giao diện sáng** · **Giao diện tối**
- User menu: **Ban.TK.…** · **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất**
- Liên kết ngoài: **govone.vn** · **youtube** · **facebook**

**Modal chrome (pixel ảnh miscapture + DOM Đóng)**
- **Maximize / pop-out**
- **Đóng** / **×** — đóng overlay, quay dashboard

**Footer / app tiles (DOM)**
- **Báo cáo tổng hợp**
- **Phân quyền**
- **Bản đồ**
- **Vấn đề**
- **Giám sát**
- **Hồ sơ**

**Actions đầy đủ (DOM inventory ≈ 21–24 — bắt buộc parity demo)**  
`dropdown trigger` · footer tiles · theme · user menu · **CÔNG TÁC TUẦN ĐƯỜNG** · **CÔNG TÁC TUẦN KIỂM** · **CÔNG VIỆC** · **Đóng** (+ Maximize từ pixel).  
Sibling `016` (SỬA CHỮA ĐỊNH KỲ › Tuần kiểm) · `019`/`022` (Bảng THN) · twin `020` — giữ trong `patrol-actions.md` / control-map. **Không** bịa button không có trên ảnh/DOM.

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `023-khai-thac-bao-cao-tuan-kiem`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (KPI Tuần kiểm · panel CÔNG TÁC TUẦN KIỂM · check-in status theo QL · date filter · collapse · empty/loading · Đóng modal), modern `/erp-form-context` + `/erp-report-context` Kind E (không clone GOVOne)
- **DOM / bind:** DatePicker · KPI metric · CollapsiblePanel Tuần kiểm · StatusBadge check-in · EmptyState/Loading · Modal Maximize/Đóng → AnalyticsReportShell / dashboard tiles
- **Capture path:** `capture/reports/tuan-kiem/view/` (master/page/action) · inventory id `023`
- Sibling: twin `020` · `016` (SỬA CHỮA › Tuần kiểm) · `019`/`009`/`022` (Bảng THN) · `021`/`024` (Tuần đường)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
