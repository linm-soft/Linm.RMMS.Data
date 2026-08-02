# AI Vision — KHAI THÁC BÁO CÁO › Tuần đường

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `021-khai-thac-bao-cao-tuan-uong` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/021-khai-thac-bao-cao-tuan-uong.png` |
| **DOM fields** | 0 → **12** (vision-enriched · bodySample) |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `021-khai-thac-bao-cao-tuan-uong.png`  
> **Capture note:** PNG (SHA256 `69B4A847…`) **khác** twin `024` (SHA256 `72798A43…` — blank/Chấm công giống `020`/`023`). Viewport `021` = modal/shell tiêu đề **Chấm công** + overlay xám + badge tím **Đang xử lý** (spinner) · maximize + ×. Mục tiêu packet = **KHAI THÁC BÁO CÁO › Tuần đường**; reconstruct UI từ `capture/reports/tuan-uong/view/inventory.json` `bodySample` + sibling dashboard `019`/`020` + control-map `patrol`.

### Màn hình / mục đích

Màn **KHAI THÁC BÁO CÁO › Tuần đường** trên app GOVOne Đường bộ (`/DuongBo/dashboard`).  
Page title: **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN**.  
Capture path: `capture/reports/tuan-uong/view/` (master/page/action) · pageTitle **Tuần đường** · twin `024` · pages JSON `021`/`024` cùng path.  
Mở từ sidebar / tile **Tuần đường** trong module khai thác báo cáo (khác catalog **Báo cáo tổng hợp** `018` · khác Bảng tổng hợp nhanh root `019` nhưng **cùng shell dashboard** · khác focus **Tuần kiểm** `020`/`023`).

**Mục đích:** drill / focus **công tác tuần đường** trong ngày — KPI xanh **Tuần đường** + panel **CÔNG TÁC TUẦN ĐƯỜNG** liệt kê đơn vị → tuyến (QL) → điểm Km (chips).  
`bodySample` (SSOT khi PNG đang load / miscapture):
- Date `01/08/2026` · KPI **Tuần đường `9`** · **Tuần kiểm `0`** · bão lũ / TNGT / vi phạm / công việc = `0`
- Panel **CÔNG TÁC TUẦN ĐƯỜNG** (focus): **Công ty Cổ phần 495** → **QL.48C** (badge `8`) + chips Km `122+393` · `35+999` · `21+998` · … · `114+000` · **QL.721** + chips Km `83+980` · `9+113` · … · `206+873`
- Panel **CÔNG TÁC TUẦN KIỂM** (sibling): **QL.48C** · **QL.7** — **Chưa thực hiện checkin**
- Panel **CÔNG VIỆC**: **Chưa có dữ liệu được ghi nhận!**
- Text phụ cuối sample: **Chấm công** (chrome miscapture trên PNG)

Ảnh PNG (`021`): modal/shell tiêu đề **Chấm công** · body phủ xám · center purple badge spinner **Đang xử lý** · maximize + × / **Đóng** — không lộ KPI/panels; dùng evidence loading chrome. Twin `024` pixel blank (header + divider).  
Kind shell: **E (report/dashboard panel + Company→QL→Km tree)** → demo MFE `/erp-report-context` + `/erp-form-context` modern — **không** clone skin GOVOne.  
Slug map: **`patrol`** (tuần đường / check-in / giám sát).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh / bodySample |
|------|-------|-------------------------------------|
| **Z1 Header / app bar (bodySample · sibling `019`)** | Thanh trắng: logo · title dashboard · date · tiện ích | Logo GOVOne · **TỔNG HỢP CÔNG TÁC…** · **Date** `01/08/2026` (**dropdown trigger**) · **Thiết lập cỡ chữ** · **Giao diện sáng/tối** · user avatar menu (**Ban.TK.…** · Thông tin của tôi · Đổi MK · Đăng xuất) |
| **Z2 KPI strip (bodySample)** | 6 thẻ metric ngày | **Tuần đường** `9` (xanh — focus packet) · **Tuần kiểm** `0` · Tình hình bão lũ `0` · Tai nạn giao thông `0` · Vi phạm xâm phạm `0` · Công việc `0` |
| **Z3 Panel — CÔNG TÁC TUẦN ĐƯỜNG (focus)** | Cột trái: header xanh + collapse · tree đơn vị / tuyến / Km | Header button **CÔNG TÁC TUẦN ĐƯỜNG** · thu gọn `−` · **Công ty Cổ phần 495** · **QL.48C** badge `8` · chips Km… · **QL.721** · chips Km… |
| **Z4 Sibling panels (cùng page)** | Cột giữa/phải | **CÔNG TÁC TUẦN KIỂM** (QL + **Chưa thực hiện checkin**) · **CÔNG VIỆC** (alert **Chưa có dữ liệu được ghi nhận!**) |
| **Z5 Modal overlay (pixel ảnh — loading / miscapture)** | Dialog phủ dashboard khi capture | Title **Chấm công** · **Maximize / pop-out** · **× / Đóng** · overlay xám · purple badge **Đang xử lý** (spinner) |
| **Z6 Footer / app tiles (DOM)** | Liên kết shell | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · govone.vn · youtube · facebook |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Ngày tổng hợp | DatePicker / dropdown | Có (filter kỳ) | `01/08/2026` — lọc KPI + panels · DOM **dropdown trigger** |
| Tuần đường | KPI card (metric) | — | Count `9` · xanh · click → focus panel Z3 |
| CÔNG TÁC TUẦN ĐƯỜNG | Collapsible panel header | — | Button panel header · minimize `−` |
| Đơn vị / công ty | Tree node | — | bodySample: **Công ty Cổ phần 495** |
| Tuyến (QL) — tuần đường | Tree node | — | **QL.48C** · **QL.721** |
| Badge count (QL) | Badge / count | — | QL.48C badge `8` |
| Điểm Km / lý trình | Chip / tag | — | Nhiều chip `Km N + MMM` dưới mỗi QL |
| Empty / loading (panel / modal) | EmptyState / Spinner | — | Ảnh: **Đang xử lý** · sibling: **Chưa có dữ liệu được ghi nhận!** |
| Tiêu đề modal (miscapture) | DialogTitle | — | Ảnh: **Chấm công** — không thuộc tuần đường |
| Tuần kiểm (sibling KPI) | KPI card | — | Count `0` · panel Z4 check-in status |
| Công việc (sibling KPI) | KPI card | — | Count `0` · panel empty |
| Maximize | Icon button | — | Pop-out modal (pixel ảnh) |

**Grid columns:** không bảng cột cố định — cấu trúc panel **Company → Tuyến (QL) → chips Km**.  
Parity demo: tree + badge count + Km chips · modern `/erp-report-context` · row/chip action · không header `TT`.

### Tính năng / hành động

**Primary — KHAI THÁC BÁO CÁO › Tuần đường (`021` / twin `024`)**
- Mở từ menu **KHAI THÁC BÁO CÁO › Tuần đường** hoặc KPI **Tuần đường** trên `/DuongBo/dashboard`
- Chọn **ngày tổng hợp** (date dropdown) — reload KPI + panels
- Xem / focus panel **CÔNG TÁC TUẦN ĐƯỜNG** — collapse/expand (`−` / header)
- Expand **đơn vị / công ty** → tuyến QL (badge count) → click chip **Km** (drill chi tiết — gợi ý UX)
- Loading state khi panel/modal đang tải (**Đang xử lý** trên ảnh `021`)
- Empty state sibling panels khi chưa có bản ghi ngày
- ≠ catalog **Báo cáo tổng hợp** `018` · ≠ focus **Tuần kiểm** `020`/`023` · ≠ GIS giám sát map `004`–`011` · ≠ CRUD form

**Shell dashboard (DOM — cùng page)**
- **dropdown trigger** (date filter)
- **CÔNG TÁC TUẦN ĐƯỜNG** · **CÔNG TÁC TUẦN KIỂM** · **CÔNG VIỆC** — collapse/focus panels
- **Thiết lập cỡ chữ** · **Giao diện sáng** · **Giao diện tối**
- User menu: **Ban.TK.…** · **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất**
- Liên kết ngoài: **govone.vn** · **youtube** · **facebook**

**Modal chrome (pixel ảnh loading/miscapture + DOM Đóng)**
- **Maximize / pop-out**
- **Đóng** / **×** — đóng overlay, quay dashboard
- Loading badge **Đang xử lý** (trạng thái capture `021`)

**Footer / app tiles (DOM)**
- **Báo cáo tổng hợp**
- **Phân quyền**
- **Bản đồ**
- **Vấn đề**
- **Giám sát**
- **Hồ sơ**

**Actions đầy đủ (DOM inventory ≈ 21–24 — bắt buộc parity demo)**  
`dropdown trigger` · footer tiles · theme · user menu · **CÔNG TÁC TUẦN ĐƯỜNG** · **CÔNG TÁC TUẦN KIỂM** · **CÔNG VIỆC** · **Đóng** (+ Maximize · loading **Đang xử lý** từ pixel).  
Sibling `017` (SỬA CHỮA ĐỊNH KỲ › Tuần đường) · `019` (Bảng THN) · twin `024` · `020`/`023` (Tuần kiểm) — giữ trong `patrol-actions.md` / control-map. **Không** bịa button không có trên ảnh/DOM.

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `021-khai-thac-bao-cao-tuan-uong`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (KPI Tuần đường · panel CÔNG TÁC TUẦN ĐƯỜNG · Company→QL→Km chips · date filter · collapse · empty/loading · Đóng modal), modern `/erp-form-context` + `/erp-report-context` Kind E (không clone GOVOne)
- **DOM / bind:** DatePicker · KPI metric · CollapsiblePanel Tuần đường · Tree Company/QL · BadgeCount · KmChip · EmptyState/Loading · Modal Maximize/Đóng → AnalyticsReportShell / dashboard tiles
- **Capture path:** `capture/reports/tuan-uong/view/` (master/page/action)
- Sibling: twin `024` · `017` (SỬA CHỮA › Tuần đường) · `019`/`009`/`022` (Bảng THN) · `020`/`023` (Tuần kiểm)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
