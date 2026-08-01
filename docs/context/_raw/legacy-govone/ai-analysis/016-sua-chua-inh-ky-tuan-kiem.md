# AI Vision — SỬA CHỮA ĐỊNH KỲ › Tuần kiểm

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `016-sua-chua-inh-ky-tuan-kiem` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/016-sua-chua-inh-ky-tuan-kiem.png` |
| **DOM fields** | 0 → **8** (vision-enriched) |
| **DOM labels** | 0 → **6** (vision-enriched) |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `016-sua-chua-inh-ky-tuan-kiem.png`  
> **Capture note:** PNG byte-identical với `015-sua-chua-inh-ky-tai-nan-giao-thong.png` / `017-sua-chua-inh-ky-tuan-uong.png` (SHA256 trùng) — ảnh pixel hiển thị modal **Tai nạn giao thông** (body trắng). Mục tiêu packet = **Tuần kiểm**; reconstruct UI tuần kiểm từ `pages/016-….json` `bodySample` + sibling `014` (dashboard) + sidebar `009`/`013`.

### Màn hình / mục đích

Màn **Tuần kiểm** trong luồng SỬA CHỮA ĐỊNH KỲ / BDTX — cùng URL dashboard (`/DuongBo/dashboard`) với sibling `014-sua-chua-inh-ky-bang-tong-hop-nhanh`.  
Page title DOM: **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN**.  
Mục đích: xem / drill **công tác tuần kiểm** trong ngày (KPI tím **Tuần kiểm** = `0`) — panel **CÔNG TÁC TUẦN KIỂM** liệt kê tuyến (QL) kèm trạng thái check-in.  
`bodySample` capture: panel tuần kiểm có **QL.48C** · **QL.7** với text **Chưa thực hiện checkin**; KPI ngày = `0`.  
Ảnh PNG (miscapture): modal tiêu đề **Tai nạn giao thông** · body trắng · maximize + × — không phải UI tuần kiểm; dùng cho evidence chrome modal/Đóng trên cùng shell.  
Kind shell: **E (report/dashboard panel + empty/checkin status)** → demo MFE parity `/erp-report-context` + `/erp-form-context` modern (collapsible panel · EmptyState · status check-in), **không** clone skin GOVOne.  
Slug map: **`patrol`** (check-in / tuần kiểm / giám sát).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh / bodySample |
|------|-------|-------------------------------------|
| **Z1 Header / app bar (DOM · sibling `014`)** | Thanh trắng: logo · title dashboard · date · tiện ích | Logo GOVOne · **TỔNG HỢP CÔNG TÁC…** · **Date** `01/08/2026` (**dropdown trigger**) · **Thiết lập cỡ chữ** · **Giao diện sáng/tối** · user avatar menu |
| **Z2 KPI strip (DOM · sibling `014`)** | 6 thẻ metric ngày | **Tuần đường** `9` · **Tuần kiểm** `0` (tím — focus packet) · Tình hình bão lũ · Tai nạn giao thông · Vi phạm xâm phạm · Công việc |
| **Z3 Panel — CÔNG TÁC TUẦN KIỂM (focus · bodySample)** | Cột giữa dashboard: header tím + collapse · list tuyến / trạng thái | Header **CÔNG TÁC TUẦN KIỂM** (`pn_id_2_header`) · thu gọn `−` · **QL.48C** — **Chưa thực hiện checkin** · **QL.7** — **Chưa thực hiện checkin** · (sibling `014` lúc load: overlay **Đang xử lý** / alert **Chưa có dữ liệu được ghi nhận!**) |
| **Z4 Sibling panels (cùng page)** | Cột trái/phải vẫn gắn DOM | **CÔNG TÁC TUẦN ĐƯỜNG** (tree Công ty → QL → Km chips) · **CÔNG VIỆC** (empty alert) |
| **Z5 Modal overlay (pixel ảnh — miscapture TNGT)** | Dialog trắng phủ dashboard | Title **Tai nạn giao thông** · **Maximize / pop-out** · **× / Đóng** · body trống |
| **Z6 Footer / app tiles (DOM)** | Liên kết shell | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · govone.vn · youtube · facebook |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Ngày tổng hợp | DatePicker / dropdown | Có (filter kỳ) | `01/08/2026` — lọc KPI + panels |
| Tuần kiểm | KPI card (metric) | — | Count `0` · tím · click → focus panel Z3 |
| CÔNG TÁC TUẦN KIỂM | Collapsible panel header | — | Button `pn_id_2_header` · minimize `−` |
| Tuyến (QL) — tuần kiểm | Tree / list row | — | bodySample: **QL.48C** · **QL.7** |
| Trạng thái check-in | Status / badge | — | **Chưa thực hiện checkin** (per tuyến) |
| Empty / loading (panel) | EmptyState / Spinner | — | Sibling `014`: **Đang xử lý** · **Chưa có dữ liệu được ghi nhận!** |
| Tiêu đề modal (miscapture) | DialogTitle | — | Ảnh: **Tai nạn giao thông** — không thuộc tuần kiểm |
| Empty state modal (miscapture) | EmptyState | — | Body trắng khi modal TNGT mở nhầm |

**Grid columns:** không bảng cột cố định trên capture — cấu trúc panel **Tuyến (QL) → trạng thái check-in** (parity tree/chips tuần đường khi có dữ liệu).  
Parity demo khi có tuần kiểm: Company → QL → điểm Km / check-in status · modern `/erp-report-context` · row action menu · không header `TT`.

### Tính năng / hành động

**Primary — Tuần kiểm (focus vision `016`)**
- Mở từ sidebar **QUẢN LÝ BDTX › Tuần kiểm** (`009`/`013`) hoặc KPI **Tuần kiểm** trên dashboard (`014`)
- Xem panel **CÔNG TÁC TUẦN KIỂM** — collapse/expand (`−` / header button)
- Xem trạng thái check-in theo tuyến (**Chưa thực hiện checkin**)
- Loading / empty state khi chưa có bản ghi ngày
- (Gợi ý UX) Click tuyến / status → drill chi tiết hoạt động tuần kiểm / nhật ký (reports `020`/`023`)

**Shell dashboard (DOM — cùng page)**
- **dropdown trigger** (date filter) — reload KPI + panels
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

**Actions bổ sung từ sibling sidebar `013` (module bảo trì — map demo parity)**  
Bảng tổng hợp nhanh · Báo cáo tổng hợp · Tổng hợp bảo trì · Dự án bảo trì · **Tuần kiểm** / Hoạt động tuần kiểm · Tuần đường · Số liệu · Tài liệu · Phân quyền — giữ trong `patrol-actions.md` / control-map (+ cross-ref `maintenance-*` khi nav chung).

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (KPI Tuần kiểm · panel CÔNG TÁC TUẦN KIỂM · check-in status theo QL · date filter · collapse · empty/loading), modern `/erp-form-context` + `/erp-report-context` (không clone GOVOne)
- Sibling: `014-sua-chua-inh-ky-bang-tong-hop-nhanh` (dashboard) · `017-sua-chua-inh-ky-tuan-uong` (tuần đường) · reports `020`/`023` (KHAI THÁC BÁO CÁO › Tuần kiểm)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
