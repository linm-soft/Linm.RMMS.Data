# AI Vision — SỬA CHỮA ĐỊNH KỲ › Bảng tổng hợp nhanh

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `014-sua-chua-inh-ky-bang-tong-hop-nhanh` |
| **slug** | `maintenance` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/014-sua-chua-inh-ky-bang-tong-hop-nhanh.png` |
| **DOM fields** | 0 → **12** (vision-enriched) |
| **DOM labels** | 0 → **10** (vision-enriched) |
| **DOM buttons** | 20 |

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

> Vision reviewed: 2026-08-01 · ai-autocode autopilot · screenshot `014-sua-chua-inh-ky-bang-tong-hop-nhanh.png`

### Màn hình / mục đích

Màn **Bảng tổng hợp nhanh** (dashboard BDTX) trên app GOVOne Đường bộ (`/DuongBo/dashboard`).  
Tiêu đề trang: **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN**.  
Mục đích: tổng hợp nhanh số liệu hoạt động ngày (KPI thẻ màu) + chi tiết theo nhóm công tác (tuần đường / tuần kiểm / công việc…) — drill-down theo đơn vị → tuyến → điểm Km.  
Không form CRUD / grid cột chuẩn — Kind shell: **E (report/dashboard + tile panels)** → demo MFE theo `/erp-report-context` + `/erp-form-context` modern, **không** clone skin GOVOne.  
Capture DOM = 0 field (SPA); actions bổ sung từ ảnh + sibling `009`/`013` (sidebar bảo trì) + `015` (cùng URL dashboard · TNGT).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh trắng full-width: logo · tiêu đề dashboard · tiện ích phải | Logo **GOVOne** · title **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN** · **Date picker** `01/08/2026` (dropdown) · layout/grid icon · **Thiết lập cỡ chữ** (A) · theme sun (**Giao diện sáng/tối**) · user avatar (menu: Thông tin của tôi · Đổi mật khẩu · Đăng xuất) |
| **Z2 KPI strip** | Hàng 6 thẻ metric màu — tổng theo loại công tác trong ngày | **Tuần đường** `9` (xanh dương) · **Tuần kiểm** `0` (tím) · **Tình hình bão lũ** `0` (vàng) · **Tai nạn giao thông** `0` (đỏ) · **Vi phạm xâm phạm** `0` (xanh đậm) · **Công việc** `0` (xanh lá) |
| **Z3 Panel — CÔNG TÁC TUẦN ĐƯỜNG** | Cột trái: header xanh + minimize · tree đơn vị/tuyến · chip Km | Header **CÔNG TÁC TUẦN ĐƯỜNG** · nút thu gọn `−` · node **Công ty Cổ phần 495** (expand) · nhóm **QL.48C** badge `8` · chips `Km 122 + 393` … `Km 114 + 000` · nhóm **QL.7** badge `21` · chips `Km 83 + 980` … `Km 206 + 873` |
| **Z4 Panel — CÔNG TÁC TUẦN KIỂM** | Cột giữa: header tím + minimize · loading / empty | Header **CÔNG TÁC TUẦN KIỂM** · nút `−` · overlay **Đang xử lý** (spinner) · alert **Chưa có dữ liệu được ghi nhận!** |
| **Z5 Panel — CÔNG VIỆC** | Cột phải: header xanh lá + minimize · empty | Header **CÔNG VIỆC** · nút `−` · alert **Chưa có dữ liệu được ghi nhận!** |
| **Z6 Footer / shell tiles** | App tiles / liên kết ngoài (DOM, có thể ngoài viewport ảnh) | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · govone.vn · youtube · facebook |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Ngày tổng hợp | DatePicker / dropdown | Có (filter kỳ) | Ảnh: `01/08/2026` — lọc dữ liệu theo ngày |
| Tuần đường | KPI card (metric) | — | Count `9` · màu xanh · gắn panel Z3 |
| Tuần kiểm | KPI card (metric) | — | Count `0` · tím · panel Z4 |
| Tình hình bão lũ | KPI card (metric) | — | Count `0` · vàng |
| Tai nạn giao thông | KPI card (metric) | — | Count `0` · đỏ · sibling drill `015` |
| Vi phạm xâm phạm | KPI card (metric) | — | Count `0` · xanh đậm |
| Công việc | KPI card (metric) | — | Count `0` · xanh lá · panel Z5 |
| Đơn vị / công ty | Tree parent node | — | VD: **Công ty Cổ phần 495** (expand/collapse) |
| Tuyến (QL) | Tree group + badge count | — | VD: **QL.48C** (`8`) · **QL.7** (`21`) |
| Điểm Km / lý trình | Chip / tag | — | Format `Km N + MMM` — click → chi tiết điểm tuần đường |
| Trạng thái tải | Loading overlay | — | Text **Đang xử lý** (panel tuần kiểm) |
| Empty state | Info alert | — | **Chưa có dữ liệu được ghi nhận!** |

**Grid columns:** không có bảng cột cố định — cấu trúc dữ liệu **Company → Route (QL) → Km chips**. Parity demo: KPI strip + collapsible panels + chip list; modern `/erp-report-context`.

### Tính năng / hành động

**Header / shell (ảnh + DOM)**
- Chọn **ngày tổng hợp** (date dropdown `01/08/2026`) — reload KPI + panels theo ngày
- **dropdown trigger** (date)
- App layout / grid icon
- **Thiết lập cỡ chữ**
- **Giao diện sáng** / **Giao diện tối**
- User menu: **Ban.TK.…** · **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất**
- Liên kết ngoài: **govone.vn** · **youtube** · **facebook**

**KPI strip**
- Xem 6 metric ngày (Tuần đường · Tuần kiểm · Tình hình bão lũ · Tai nạn giao thông · Vi phạm xâm phạm · Công việc)
- (Gợi ý UX) Click thẻ KPI → scroll/focus panel tương ứng hoặc lọc loại công tác

**Panels nội dung**
- **CÔNG TÁC TUẦN ĐƯỜNG** — expand/collapse panel (`−`) · expand đơn vị · xem badge count theo tuyến · click chip Km (drill chi tiết)
- **CÔNG TÁC TUẦN KIỂM** — collapse panel · chờ load (**Đang xử lý**) · empty state
- **CÔNG VIỆC** — collapse panel · empty state

**Footer / app tiles (DOM)**
- **Báo cáo tổng hợp**
- **Phân quyền**
- **Bản đồ**
- **Vấn đề**
- **Giám sát**
- **Hồ sơ**

**Actions bổ sung từ sibling sidebar `013` (module bảo trì — map demo parity)**  
Bảng tổng hợp nhanh · Báo cáo tổng hợp · Tổng hợp bảo trì · Dự án bảo trì · Tuần kiểm / Tuần đường · Số liệu (thiệt hại · ùn tắc · hạng mục · TNGT · …) · Tài liệu · Phân quyền — giữ trong `maintenance-actions.md` / control-map.

### Map → step context

- Feature: `docs/context/features/maintenance.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/maintenance-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/maintenance-actions.md`
- Demo: parity UI trong `maintenance-demo.html` / `maintenance.html` · MFE — same actions (KPI ngày · panels tuần đường/tuần kiểm/công việc · Km chips · date filter), modern `/erp-form-context` + `/erp-report-context` (không clone GOVOne)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
