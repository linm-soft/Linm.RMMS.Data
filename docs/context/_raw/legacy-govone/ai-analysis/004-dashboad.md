# AI Vision — DASHBOAD

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `004-dashboad` |
| **slug** | `dashboard` |
| **url** | https://pmdb.govone.vn/DuongBo/dashboard |
| **screenshot** | `screenshots/004-dashboad.png` |
| **DOM fields** | 0 → **13** (vision-enriched) |
| **DOM labels** | 0 → **11** (vision-enriched) |
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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `004-dashboad.png`

### Màn hình / mục đích

Màn **DASHBOAD** (home tổng hợp BDTX) trên app GOVOne Đường bộ (`/DuongBo/dashboard`) — entry tile app-tile / popup → cùng URL dashboard.  
Tiêu đề trang: **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN**.  
Mục đích: (1) xem KPI ngày theo loại công tác · (2) drill chi tiết **Tuần đường** (đơn vị → QL → chip Km) · (3) theo dõi trạng thái **Tuần kiểm** (check-in theo tuyến) · (4) xem tóm tắt **Công việc** (empty khi chưa ghi nhận).  
Không form CRUD / grid cột chuẩn — Kind shell: **E (report/dashboard + tile panels)** → demo MFE theo `/erp-report-context` + `/erp-form-context` modern, **không** clone skin GOVOne.  
Khác sibling `003-dashboad` (cùng URL/slug — capture song song) · khác `014` (cùng layout nhưng panel Tuần kiểm lúc load = spinner/empty; **004** đã có list QL + **Chưa thực hiện checkin**) · khác `016`/`017` (focus một KPI/panel).  
Capture DOM = 0 field (SPA); field/actions bổ sung từ ảnh + inventory `capture/dashboard/root/view`.  
Domain: dashboard điều hành ngày · bind kỳ `from/to` (date) → KPI + panels · API guide `/api/v1/dashboard/kpis`.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh trắng full-width: logo · tiêu đề dashboard · tiện ích phải | Logo **GOVOne** · title **TỔNG HỢP CÔNG TÁC QUẢN LÝ VÀ BẢO DƯỠNG THƯỜNG XUYÊN** · **Date picker** `01/08/2026` (+ calendar · clear `X` — **dropdown trigger**) · layout/grid icon · **Thiết lập cỡ chữ** (A) · theme sun (**Giao diện sáng** / tối) · user avatar (menu: **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất**) |
| **Z2 KPI strip** | Hàng 6 thẻ metric màu — tổng theo loại công tác trong ngày | **Tuần đường** `9` (xanh dương) · **Tuần kiểm** `0` (tím) · **Tình hình bão lũ** `0` (vàng) · **Tai nạn giao thông** `0` (đỏ) · **Vi phạm xâm phạm** `0` (xanh đậm) · **Công việc** `0` (xanh lá) |
| **Z3 Panel — CÔNG TÁC TUẦN ĐƯỜNG** | Cột trái: header xanh + minimize · tree đơn vị/tuyến · chip Km | Header **CÔNG TÁC TUẦN ĐƯỜNG** · nút thu gọn `−` · node **Công ty Cổ phần 495** (expand) · nhóm **QL.48C** badge `8` · chips `Km 122 + 393` · `Km 35 + 999` · `Km 47 + 880` · `Km 70 + 000` · `Km 88 + 900` · `Km 91 + 750` · `Km 97 + 250` · `Km 114 + 000` · nhóm **QL.7** badge `21` · chips `Km 83 + 980` · `Km 9 + 113` · `Km 138 + 264` · … `Km 206 + 873` |
| **Z4 Panel — CÔNG TÁC TUẦN KIỂM** | Cột giữa: header tím + minimize · list tuyến / trạng thái check-in | Header **CÔNG TÁC TUẦN KIỂM** · nút `−` · **QL.48C** — nút đỏ **Chưa thực hiện checkin** · **QL.7** — nút đỏ **Chưa thực hiện checkin** |
| **Z5 Panel — CÔNG VIỆC** | Cột phải: header xanh lá + minimize · empty | Header **CÔNG VIỆC** · nút `−` · alert info **Chưa có dữ liệu được ghi nhận!** |
| **Z6 Footer / shell tiles** | App tiles / liên kết ngoài (DOM — có thể ngoài viewport ảnh) | **Báo cáo tổng hợp** · **Phân quyền** · **Bản đồ** · **Vấn đề** · **Giám sát** · **Hồ sơ** · **govone.vn** · **youtube** · **facebook** · heading DOM **LIÊN KẾT TRUY CẬP NHANH** · **THIẾT LẬP CỠ CHỮ** |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Ngày tổng hợp | DatePicker / dropdown | Có (filter kỳ) | Ảnh: `01/08/2026` — clear `X` · lọc KPI + panels |
| Tuần đường | KPI card (metric) | — | Count `9` · xanh dương · gắn panel Z3 |
| Tuần kiểm | KPI card (metric) | — | Count `0` · tím · panel Z4 (check-in chưa xong vẫn count 0) |
| Tình hình bão lũ | KPI card (metric) | — | Count `0` · vàng |
| Tai nạn giao thông | KPI card (metric) | — | Count `0` · đỏ · sibling drill `015` |
| Vi phạm xâm phạm | KPI card (metric) | — | Count `0` · xanh đậm |
| Công việc | KPI card (metric) | — | Count `0` · xanh lá · panel Z5 |
| Đơn vị / công ty | Tree parent node | — | VD: **Công ty Cổ phần 495** (expand/collapse) |
| Tuyến (QL) | Tree group + badge count | — | **QL.48C** (`8`) · **QL.7** (`21`) — panel Tuần đường |
| Điểm Km / lý trình | Chip / tag | — | Format `Km N + MMM` — click → chi tiết điểm tuần đường |
| Trạng thái check-in | Status / badge / button | — | **Chưa thực hiện checkin** (đỏ) per tuyến — panel Tuần kiểm |
| Empty state | Info alert | — | **Chưa có dữ liệu được ghi nhận!** (panel Công việc) |

**Grid columns:** không có bảng cột cố định — cấu trúc dữ liệu **Company → Route (QL) → Km chips** (+ list tuyến/status cho tuần kiểm). Parity demo: KPI strip + collapsible panels + chip list + check-in status · modern `/erp-report-context`.

### Tính năng / hành động

**Primary — Dashboard home `004`**
- Mở từ tile **DASHBOAD** (app-tile / popup) → `/DuongBo/dashboard`
- Chọn **ngày tổng hợp** (`01/08/2026`) → reload KPI + 3 panels
- Xem 6 KPI ngày · drill panel tương ứng
- Tree **Tuần đường**: expand đơn vị · badge QL · click chip Km
- List **Tuần kiểm**: xem / drill trạng thái check-in theo tuyến
- Panel **Công việc**: empty / list WO khi có dữ liệu
- Upstream: login shell GOVOne · Downstream: footer tiles (Báo cáo · Bản đồ · Giám sát…) · KPI drill siblings `015`–`017`
- Bind kỳ ngày → aggregation KPI — control-map `dashboard` · API guide `GET /api/v1/dashboard/kpis`
- ≠ form CRUD catalog · ≠ GIS editor · ≠ báo cáo Excel Web riêng

**Header / shell (ảnh + DOM)**
- **dropdown trigger** (date)
- Clear date (`X`) · calendar icon
- App layout / grid icon
- **Thiết lập cỡ chữ**
- **Giao diện sáng** / **Giao diện tối**
- User menu: **Ban.TK.…** · **Thông tin của tôi** · **Đổi mật khẩu** · **Đăng xuất**
- Liên kết ngoài: **govone.vn** · **youtube** · **facebook**

**KPI strip (ảnh)**
- Click / focus: **Tuần đường** · **Tuần kiểm** · **Tình hình bão lũ** · **Tai nạn giao thông** · **Vi phạm xâm phạm** · **Công việc**
- (Gợi ý UX) Click thẻ → scroll/focus panel hoặc lọc loại công tác

**Panels nội dung (ảnh)**
- **CÔNG TÁC TUẦN ĐƯỜNG** — expand/collapse (`−`) · expand **Công ty Cổ phần 495** · badge count theo tuyến · click chip Km (drill)
- **CÔNG TÁC TUẦN KIỂM** — collapse · status **Chưa thực hiện checkin** trên **QL.48C** / **QL.7**
- **CÔNG VIỆC** — collapse · empty alert

**Footer / app tiles (DOM)**
- **Báo cáo tổng hợp** (`/DuongBo/baocaotonghop/nhatkytuanduong`)
- **Phân quyền** (`/dbv3quantri.aspx`)
- **Bản đồ** (`/geditor.aspx`)
- **Vấn đề** (`/dbv3baotri.aspx`)
- **Giám sát** (`/dbv3giamsat.aspx`)
- **Hồ sơ** (`/quanlyhosocongtrinh.aspx`)

**Actions bổ sung từ sibling (map demo parity)**  
Bảng tổng hợp nhanh (`014`) · Tuần kiểm (`016`) · Tuần đường (`017`) · TNGT (`015`) · sidebar bảo trì/báo cáo — giữ trong `dashboard-actions.md` / control-map (+ cross-ref `patrol-*` · `maintenance-*` khi nav chung).

### Map → step context

- Feature: `docs/context/features/dashboard.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `004-dashboad`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/dashboard-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/dashboard-actions.md`
- Demo: parity UI trong `dashboard-demo.html` / `dashboard.html` · MFE — same actions (KPI ngày · panels tuần đường/tuần kiểm/công việc · Km chips · date filter · check-in status · collapse), modern `/erp-form-context` + `/erp-report-context` (không clone GOVOne)
- **DOM / bind:** ngày tổng hợp · 6 KPI metrics · tree Company/QL/Km · check-in status · empty alert → DatePicker + KPI strip + CollapsiblePanel (Kind E)
- **Capture path:** `capture/dashboard/root/view/` (master/page/action)
- Sibling: `003-dashboad` (cùng slug) · `014` (Bảng tổng hợp nhanh) · `016`/`017` (focus panel)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
