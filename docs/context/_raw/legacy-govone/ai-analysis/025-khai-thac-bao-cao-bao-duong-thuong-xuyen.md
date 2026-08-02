# AI Vision — KHAI THÁC BÁO CÁO › BẢO DƯỠNG THƯỜNG XUYÊN

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `025-khai-thac-bao-cao-bao-duong-thuong-xuyen` |
| **slug** | `reports` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/025-khai-thac-bao-cao-bao-duong-thuong-xuyen.png` |
| **DOM fields** | 0 → **12** (vision-enriched · bodySample) |
| **DOM labels** | 0 → **10** (vision-enriched · bodySample) |
| **DOM buttons** | 21 → **24** (capture inventory · features/reports.md) |

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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `025-khai-thac-bao-cao-bao-duong-thuong-xuyen.png`  
> **Capture note:** PNG SHA256 `72798A43FA92042B…` **byte-identical** twin `022` · cùng blank hash với `020`/`023`/`024` (header + divider + body trắng). OCR/vision: modal/shell tiêu đề **Chấm công** · maximize + ×. Sibling `011` (SHA256 `6D564AE3…`) miscapture modal **Tai nạn giao thông** (body trắng). Mục tiêu packet = **KHAI THÁC BÁO CÁO › BẢO DƯỠNG THƯỜNG XUYÊN**; reconstruct UI từ `capture/reports/bao-duong-thuong-xuyen/view/inventory.json` `bodySample` + sibling dashboard `019`/`014`/`022` + control-map `reports`. Inventory primary id = **`025`**.

### Màn hình / mục đích

Màn **KHAI THÁC BÁO CÁO › BẢO DƯỠNG THƯỜNG XUYÊN** trên app GOVOne Đường bộ (`/DuongBo/dashboard`).  
Page title: **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN**.  
Capture path: `capture/reports/bao-duong-thuong-xuyen/view/` (master/page/action) · pageTitle **BẢO DƯỠNG THƯỜNG XUYÊN** · inventory id **`025`** · pages JSON `011`/`022`/`025` cùng path.  
Mở từ left-rail / tile **BẢO DƯỠNG THƯỜNG XUYÊN** trong module khai thác báo cáo (khác catalog **Báo cáo tổng hợp** `018`/`021` nơi BDTX là **nhóm catalog**; khác focus drill **Tuần kiểm** `020`/`023` · **Tuần đường** `021`/`024` — nhưng **cùng shell dashboard** với **Bảng tổng hợp nhanh** `019`/`009`/`022`).

**Mục đích:** tổng hợp nhanh hoạt động **BDTX theo ngày** — 6 KPI metric + 3 panel chi tiết (tuần đường / tuần kiểm / công việc) làm landing BẢO DƯỠNG THƯỜNG XUYÊN.  
`bodySample` (SSOT khi PNG blank):
- Date `01/08/2026` · KPI **Tuần đường `9`** · **Tuần kiểm `0`** · bão lũ / TNGT / vi phạm / công việc = `0`
- Panel **CÔNG TÁC TUẦN ĐƯỜNG**: **Công ty Cổ phần 495** → **QL.48C** (badge `8`) + chips Km `122+393` · `35+999` · … · `114+000` · **QL.721** + chips Km…
- Panel **CÔNG TÁC TUẦN KIỂM**: **QL.48C** · **QL.7** — **Chưa thực hiện checkin**
- Panel **CÔNG VIỆC**: **Chưa có dữ liệu được ghi nhận!**
- Text phụ cuối sample: **Chấm công** (chrome miscapture trên PNG)

Ảnh PNG (`022`/`025`): modal/shell tiêu đề **Chấm công** · body trắng (2 pane divider) · maximize + × / **Đóng** — không lộ KPI/panels; dùng evidence modal chrome.  
Kind shell: **E (report/dashboard + KPI strip + Company→QL→Km panels)** → demo MFE `/erp-report-context` + `/erp-form-context` modern — **không** clone skin GOVOne.  
Slug map: **`reports`**.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh / bodySample |
|------|-------|-------------------------------------|
| **Z1 Header / app bar (bodySample · sibling `019`)** | Thanh trắng: logo · title dashboard · date · tiện ích | Logo GOVOne · **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN** · **Date** `01/08/2026` (**dropdown trigger**) · **Thiết lập cỡ chữ** · **Giao diện sáng/tối** · user avatar menu (**Ban.TK.…** · Thông tin của tôi · Đổi MK · Đăng xuất) |
| **Z2 KPI strip (bodySample)** | 6 thẻ metric ngày — landing BDTX | **Tuần đường** `9` · **Tuần kiểm** `0` · Tình hình bão lũ `0` · Tai nạn giao thông `0` · Vi phạm xâm phạm `0` · Công việc `0` |
| **Z3 Panel — CÔNG TÁC TUẦN ĐƯỜNG** | Cột trái: header xanh + collapse · tree đơn vị / tuyến / Km | Header button **CÔNG TÁC TUẦN ĐƯỜNG** · thu gọn `−` · **Công ty Cổ phần 495** · **QL.48C** badge `8` · chips Km… · **QL.721** · chips Km… |
| **Z4 Panel — CÔNG TÁC TUẦN KIỂM** | Cột giữa: header tím + collapse · list tuyến / trạng thái | Header button **CÔNG TÁC TUẦN KIỂM** · thu gọn `−` · **QL.48C** / **QL.7** — **Chưa thực hiện checkin** |
| **Z5 Panel — CÔNG VIỆC** | Cột phải: header xanh lá + collapse · empty | Header button **CÔNG VIỆC** · alert **Chưa có dữ liệu được ghi nhận!** |
| **Z6 Modal overlay (pixel ảnh — miscapture)** | Dialog trắng phủ dashboard | Title **Chấm công** · **Maximize / pop-out** · **× / Đóng** · body trống (2 pane divider) |
| **Z7 Footer / app tiles (DOM)** | Liên kết shell | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · govone.vn · youtube · facebook |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Ngày tổng hợp | DatePicker / dropdown | Có (filter kỳ) | `01/08/2026` — lọc KPI + panels · DOM **dropdown trigger** |
| Tuần đường | KPI card (metric) | — | Count `9` · xanh · gắn panel Z3 |
| Tuần kiểm | KPI card (metric) | — | Count `0` · tím · panel Z4 |
| Tình hình bão lũ | KPI card (metric) | — | Count `0` · vàng |
| Tai nạn giao thông | KPI card (metric) | — | Count `0` · đỏ · sibling catalog TNGT |
| Vi phạm xâm phạm | KPI card (metric) | — | Count `0` · xanh đậm |
| Công việc | KPI card (metric) | — | Count `0` · xanh lá · panel Z5 |
| CÔNG TÁC TUẦN ĐƯỜNG | Collapsible panel header | — | Button panel · minimize `−` |
| Đơn vị / công ty | Tree node | — | bodySample: **Công ty Cổ phần 495** |
| Tuyến (QL) — tuần đường | Tree node | — | **QL.48C** · **QL.721** |
| Badge count (QL) | Badge / count | — | QL.48C badge `8` |
| Điểm Km / lý trình | Chip / tag | — | Nhiều chip `Km N + MMM` |
| Trạng thái check-in | Status / badge | — | **Chưa thực hiện checkin** (Z4) |
| Empty / loading | EmptyState / Spinner | — | **Chưa có dữ liệu được ghi nhận!** · sibling `019`: **Đang xử lý** |
| Tiêu đề modal (miscapture) | DialogTitle | — | Ảnh: **Chấm công** — không thuộc BDTX dashboard |
| Maximize | Icon button | — | Pop-out modal (pixel ảnh) |

**Grid columns:** không bảng cột cố định — cấu trúc panel **Company → Tuyến (QL) → chips Km** (+ check-in status panel).  
Parity demo: KPI strip + 3 collapsible panels · tree/badge/Km chips · empty/loading · modern `/erp-report-context` Kind E · không header `TT`.

### Tính năng / hành động

**Primary — KHAI THÁC BÁO CÁO › BẢO DƯỠNG THƯỜNG XUYÊN (`025` / twin `011`/`022`)**
- Mở từ menu **KHAI THÁC BÁO CÁO › BẢO DƯỠNG THƯỜNG XUYÊN** → `/DuongBo/dashboard` (title tổng hợp BDTX)
- Chọn **ngày tổng hợp** (date dropdown) — reload KPI + panels
- Xem 6 KPI metric ngày; (gợi ý UX) click thẻ → focus panel / lọc loại
- Panel **CÔNG TÁC TUẦN ĐƯỜNG** — collapse/expand · expand đơn vị → QL (badge) → click chip Km
- Panel **CÔNG TÁC TUẦN KIỂM** — collapse · xem trạng thái check-in theo tuyến
- Panel **CÔNG VIỆC** — collapse · empty state khi chưa có bản ghi
- Loading / empty khi panel đang tải hoặc không có data ngày
- ≠ catalog group BDTX trong **Báo cáo tổng hợp** `018`/`021` · ≠ focus-only **Tuần kiểm** `020`/`023` · ≠ focus-only **Tuần đường** `021`/`024` · ≠ GIS giám sát · ≠ CRUD form

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
Sibling catalog sidebar `018`/`021` (BẢO DƯỠNG THƯỜNG XUYÊN group · Nhật ký…) · `019`/`009`/`022` (Bảng THN cùng shell) · twin `011`/`022` — giữ trong `reports-actions.md` / control-map. **Không** bịa button không có trên ảnh/DOM.

### Map → step context

- Feature: `docs/context/features/reports.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `025-khai-thac-bao-cao-bao-duong-thuong-xuyen`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/reports-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/reports-actions.md`
- Demo: parity UI trong `Linm.RMMS.Demo/src/demo/bao-cao/reports.html` · MFE — same actions (date filter · 6 KPI · panels tuần đường/tuần kiểm/công việc · Company→QL→Km · check-in status · empty/loading · Đóng modal), modern `/erp-form-context` + `/erp-report-context` Kind E (không clone GOVOne)
- **DOM / bind:** DatePicker · KPI metric cards · CollapsiblePanel ×3 · Tree Company/QL · BadgeCount · KmChip · StatusBadge check-in · EmptyState/Loading · Modal Maximize/Đóng → AnalyticsReportShell / dashboard tiles
- **Capture path:** `capture/reports/bao-duong-thuong-xuyen/view/` (master/page/action) · inventory id `025`
- Sibling: twin `011`/`022` · `019`/`009` (Bảng THN cùng dashboard) · `018`/`007`/`021` (catalog Báo cáo tổng hợp) · `020`/`023` (Tuần kiểm) · `021`/`024` (Tuần đường — patrol slug)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
