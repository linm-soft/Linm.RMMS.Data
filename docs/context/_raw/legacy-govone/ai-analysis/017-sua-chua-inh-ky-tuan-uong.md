# AI Vision — SỬA CHỮA ĐỊNH KỲ › Tuần đường

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `017-sua-chua-inh-ky-tuan-uong` |
| **slug** | `patrol` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/017-sua-chua-inh-ky-tuan-uong.png` |
| **DOM fields** | 0 → **10** (vision-enriched) |
| **DOM labels** | 0 → **7** (vision-enriched) |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `017-sua-chua-inh-ky-tuan-uong.png`  
> **Capture note:** PNG byte-identical với `015-sua-chua-inh-ky-tai-nan-giao-thong.png` / `016-sua-chua-inh-ky-tuan-kiem.png` (SHA256 `6D564AE3…`) — ảnh pixel hiển thị modal **Tai nạn giao thông** (body trắng). Mục tiêu packet = **Tuần đường**; reconstruct UI tuần đường từ `pages/017-….json` `bodySample` + sibling `014` (dashboard) + sidebar `009`/`013`.

### Màn hình / mục đích

Màn **Tuần đường** trong luồng SỬA CHỮA ĐỊNH KỲ / BDTX — cùng URL dashboard (`/DuongBo/dashboard`) với sibling `014-sua-chua-inh-ky-bang-tong-hop-nhanh`.  
Page title DOM: **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN**.  
Mục đích: xem / drill **công tác tuần đường** trong ngày (KPI xanh **Tuần đường** = `9`) — panel **CÔNG TÁC TUẦN ĐƯỜNG** liệt kê đơn vị → tuyến (QL) → điểm Km (chips).  
`bodySample` capture: panel tuần đường có **Công ty Cổ phần 495** · **QL.48C** badge `8` · chips `Km 122 + 393` … `Km 114 + 000` · **QL.7** badge `21` · chips `Km 83 + 980` … `Km 206 + 873`.  
Ảnh PNG (miscapture): modal tiêu đề **Tai nạn giao thông** · body trắng · maximize + × — không phải UI tuần đường; dùng cho evidence chrome modal/Đóng trên cùng shell.  
Kind shell: **E (report/dashboard panel + tree/chips)** → demo MFE parity `/erp-report-context` + `/erp-form-context` modern (collapsible panel · Company→QL→Km chips · EmptyState sibling), **không** clone skin GOVOne.  
Slug map: **`patrol`** (tuần đường / check-in / giám sát).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh / bodySample |
|------|-------|-------------------------------------|
| **Z1 Header / app bar (DOM · sibling `014`)** | Thanh trắng: logo · title dashboard · date · tiện ích | Logo GOVOne · **TỔNG HỢP CÔNG TÁC…** · **Date** `01/08/2026` (**dropdown trigger**) · **Thiết lập cỡ chữ** · **Giao diện sáng/tối** · user avatar menu |
| **Z2 KPI strip (DOM · sibling `014`)** | 6 thẻ metric ngày | **Tuần đường** `9` (xanh dương — focus packet) · **Tuần kiểm** `0` · Tình hình bão lũ · Tai nạn giao thông · Vi phạm xâm phạm · Công việc |
| **Z3 Panel — CÔNG TÁC TUẦN ĐƯỜNG (focus · bodySample)** | Cột trái dashboard: header xanh + collapse · tree đơn vị/tuyến · chip Km | Header **CÔNG TÁC TUẦN ĐƯỜNG** (`pn_id_1_header`) · thu gọn `−` · **Công ty Cổ phần 495** (expand) · **QL.48C** badge `8` · chips Km · **QL.7** badge `21` · chips Km |
| **Z4 Sibling panels (cùng page)** | Cột giữa/phải vẫn gắn DOM | **CÔNG TÁC TUẦN KIỂM** (QL + **Chưa thực hiện checkin**) · **CÔNG VIỆC** (empty alert **Chưa có dữ liệu được ghi nhận!**) |
| **Z5 Modal overlay (pixel ảnh — miscapture TNGT)** | Dialog trắng phủ dashboard | Title **Tai nạn giao thông** · **Maximize / pop-out** · **× / Đóng** · body trống |
| **Z6 Footer / app tiles (DOM)** | Liên kết shell | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · govone.vn · youtube · facebook |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Ngày tổng hợp | DatePicker / dropdown | Có (filter kỳ) | `01/08/2026` — lọc KPI + panels |
| Tuần đường | KPI card (metric) | — | Count `9` · xanh dương · click → focus panel Z3 |
| CÔNG TÁC TUẦN ĐƯỜNG | Collapsible panel header | — | Button `pn_id_1_header` · minimize `−` |
| Đơn vị / công ty | Tree parent node | — | bodySample: **Công ty Cổ phần 495** (expand/collapse) |
| Tuyến (QL) — tuần đường | Tree group + badge | — | **QL.48C** · **QL.7** |
| Badge count (QL) | Badge / count | — | QL.48C → `8` · QL.7 → `21` |
| Điểm Km / lý trình | Chip / tag | — | Format `Km N + MMM` — VD `Km 122 + 393` … `Km 206 + 873` · click → chi tiết điểm |
| Tiêu đề modal (miscapture) | DialogTitle | — | Ảnh: **Tai nạn giao thông** — không thuộc tuần đường |
| Empty state modal (miscapture) | EmptyState | — | Body trắng khi modal TNGT mở nhầm |
| Empty / loading (sibling panel) | EmptyState / Spinner | — | Panel **CÔNG VIỆC** / tuần kiểm sibling: **Chưa có dữ liệu…** |

**Grid columns:** không bảng cột cố định trên capture — cấu trúc panel **Company → Route (QL) + badge → Km chips**.  
Parity demo: tree/chips · modern `/erp-report-context` · row/chip action menu · không header `TT`.

### Tính năng / hành động

**Primary — Tuần đường (focus vision `017`)**
- Mở từ sidebar **QUẢN LÝ BDTX › Tuần đường** (`009`/`013`) hoặc KPI **Tuần đường** trên dashboard (`014`)
- Xem panel **CÔNG TÁC TUẦN ĐƯỜNG** — collapse/expand (`−` / header button `pn_id_1_header`)
- Expand **Công ty Cổ phần 495** → xem nhóm tuyến QL + badge count
- Click chip **Km N + MMM** → drill chi tiết điểm tuần đường / nhật ký (reports `021`/`024`)
- Xem KPI **Tuần đường** = `9` đồng bộ với tổng điểm trong panel

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
Bảng tổng hợp nhanh · Báo cáo tổng hợp · Tổng hợp bảo trì · Dự án bảo trì · Tuần kiểm · **Tuần đường** / Hoạt động tuần đường · Số liệu · Tài liệu · Phân quyền — giữ trong `patrol-actions.md` / control-map (+ cross-ref `maintenance-*` khi nav chung).

### Map → step context

- Feature: `docs/context/features/patrol.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/patrol-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/patrol-actions.md`
- Demo: parity UI trong `patrol-demo.html` / `patrol.html` · MFE — same actions (KPI Tuần đường · panel CÔNG TÁC TUẦN ĐƯỜNG · tree Company→QL→Km chips · date filter · collapse · chip drill), modern `/erp-form-context` + `/erp-report-context` (không clone GOVOne)
- Sibling: `014-sua-chua-inh-ky-bang-tong-hop-nhanh` (dashboard) · `016-sua-chua-inh-ky-tuan-kiem` (tuần kiểm) · reports `021`/`024` (KHAI THÁC BÁO CÁO › Tuần đường)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
