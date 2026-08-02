# AI Vision — KHAI THÁC BÁO CÁO

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `021-khai-thac-bao-cao` |
| **slug** | `reports` |
| **url** | https://pmdb.govone.vn/DuongBo/baocaotonghop/nhatkytuanduong |
| **screenshot** | `screenshots/021-khai-thac-bao-cao.png` |
| **DOM fields** | 1 |
| **DOM labels** | 0 |
| **DOM buttons** | 98 |

## DOM inventory (đã capture)

### Labels
- _(trống — ưu tiên đọc từ ảnh)_

### Buttons / actions
- Báo cáo tổng hợp
- Phân quyền
- Bản đồ
- Vấn đề
- Giám sát
- Hồ sơ
- govone.vn
- youtube
- facebook
- Giao diện sáng
- Giao diện tối
- Ban.TK.Nguyễn Anh Phúc nguyenanhphuc.dbna@cloudgis.vn
- Thông tin của tôi
- Đổi mật khẩu
- Đăng xuất
- Bảng tổng hợp nhanh
- QUẢN LÝ BẢO TRÌ
- Tổng hợp bảo trì
- Dự án bảo trì
- QUẢN LÝ BDTX
- Tuần kiểm
- Hoạt động tuần kiểm
- Tuần đường
- Hoạt động tuần đường
- Nhật ký tuần đường
- Nhật ký công việc
- Số liệu
- Thiên tai, bão lũ Số liệu thiệt hạiÙn tắc giao thông
- Số liệu thiệt hại
- Ùn tắc giao thông
- Hạng mục hư hỏng
- Vi phạm HLATĐB
- Tai nạn giao thông
- Đếm xe
- Kiểm tra cầu
- Tài liệu
- Giấy phép thi công
- Công văn đi - đến
- Quản lý tài sản
- QUẢN TRỊ ỨNG DỤNG

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | — | — |

## Analysis (AI điền)

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `021-khai-thac-bao-cao.png`  
> bodySample: `Nhật ký tuần đường · 01/08/2026 - 31/08/2026 · Chọn tuyến đường · Mới nhất · Tổng hợp · Hãy chọn các điều kiện lọc dữ liệu, tổng hợp và tải tệp về máy tính.`  
> Capture: `capture/reports/root/view/` · twin `007` / `018` (cùng URL/slug root)

### Màn hình / mục đích

Màn **KHAI THÁC BÁO CÁO** — shell **Báo cáo tổng hợp** (`/DuongBo/baocaotonghop/nhatkytuanduong`) trên GOVOne PMDB.  
Mở từ tile / menu **KHAI THÁC BÁO CÁO** · capture path `capture/reports/root/view/` (master/page/action) · pageTitle **GOVONE - Báo cáo tổng hợp** · headings **Báo cáo tổng hợp** · **LIÊN KẾT TRUY CẬP NHANH** · **Nhật ký tuần đường**.  
Viewport đang ở báo cáo con **Nhật ký tuần đường** trong nhóm **BẢO DƯỠNG THƯỜNG XUYÊN** (catalog trái).  
Twin capture gần trùng: `007-khai-thac-bao-cao` · `018-khai-thac-bao-cao` (cùng URL · cùng empty-state trước khi tổng hợp).  
Sibling drill catalog: `008` (Báo cáo tổng hợp), `009`/`019`/`022` (Bảng tổng hợp nhanh), `010` (TNGT), `011`/`022`/`025` (BDTX), `020`/`023` (Tuần kiểm), `021-…-tuan-uong`/`024` (Tuần đường dashboard — **khác** packet root này).

**Mục đích:** (1) chọn loại báo cáo từ catalog trái (BDTX / Tài sản đường bộ + cây báo cáo con) · (2) lọc **khoảng ngày** + **tuyến đường** + **thứ tự** · (3) bấm **Tổng hợp** → tổng hợp dữ liệu và **tải tệp** về máy · (4) điều hướng shell sidebar / footer sang module khác · (5) theme sáng/tối + user menu (parity).

Ảnh viewport: layout **sidebar tối + catalog trắng + report filter** · kết quả **chưa có grid** (empty trắng dưới alert vàng) · Kind shell: **E (AnalyticsReportShell / erp-report-context)** — demo MFE theo `/erp-form-context` Kind E — **không** clone skin GOVOne.  
Domain: Report · filter tuyến/thời gian · xuất file · API guide stub `GET /api/v1/reports/*` (feature `reports.md` · demo cấm BE).

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Header / app bar** | Thanh trên: brand · title module · utilities | Logo **GOVOne** · title **Báo cáo tổng hợp** · app-switcher (grid) · theme sáng/tối (sun) · avatar user (placeholder) · (DOM) govone.vn · youtube · facebook · user menu **Ban.TK.…** / Thông tin của tôi / Đổi MK / Đăng xuất |
| **Z2 Sidebar nav** | Menu trái tối — module app · **Báo cáo tổng hợp** active | **Bảng tổng hợp nhanh** · **Báo cáo tổng hợp** (active / highlight) · nhóm **QUẢN LÝ BẢO TRÌ** (Tổng hợp bảo trì · Dự án bảo trì) · **QUẢN LÝ BDTX** (Tuần kiểm · Tuần đường · Số liệu · Tài liệu — chevron) · **QUẢN TRỊ ỨNG DỤNG** → **Phân quyền** |
| **Z3 Report catalog (content left)** | Panel chọn nhóm / loại BC | Header catalog **Báo cáo tổng hợp** · **BẢO DƯỠNG THƯỜNG XUYÊN** (active / expanded — icon wrench) · **TÀI SẢN ĐƯỜNG BỘ** (icon road/asset) · (DOM tree) Nhật ký · Nhật ký tuần đường · Nhật ký tuần kiểm · Nhật ký công việc · Thiên tai… · Hạng mục hư hỏng · Kiểm tra cầu · TNGT · Vi phạm · Đếm xe · Tài liệu · Trực GT · Tổng hợp chung / theo tuyến / hạng mục… |
| **Z4 Report header** | Tiêu đề báo cáo đang mở + back | Mũi tên **←** back · **Nhật ký tuần đường** |
| **Z5 Filter / toolbar** | Hàng lọc trước khi tổng hợp | Date range **01/08/2026 - 31/08/2026** (+ clear × + calendar) · Select placeholder **Chọn tuyến đường** · icon sort ↑↓ · Select **Mới nhất** · kebab ⋮ (more) · primary xanh **Tổng hợp** · (DOM) `dropdown trigger` toolbar + unnamed `input` zone toolbar |
| **Z6 Guidance / empty** | Hướng dẫn khi chưa tổng hợp | Alert vàng + icon !: **Hãy chọn các điều kiện lọc dữ liệu, tổng hợp và tải tệp về máy tính.** · vùng kết quả trắng (chưa grid) |
| **Z7 Result / grid** | Kết quả sau Tổng hợp | **Không lộ cột** trên ảnh 021 — empty trước chạy · parity demo sau mock: STT + cột báo cáo check-in/NKTĐ theo Kind E |
| **Z8 Footer quick nav** | Thanh dưới (DOM) | **Báo cáo tổng hợp** · Phân quyền · Bản đồ · Vấn đề · Giám sát · Hồ sơ |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| Khoảng thời gian | DateRangePicker | Có (theo alert) | Giá trị ảnh `01/08/2026 - 31/08/2026` · clear × · calendar icon · bodySample |
| Chọn tuyến đường | Select / RouteSelect | Có (theo alert) | Placeholder **Chọn tuyến đường** · chưa chọn trên ảnh |
| Thứ tự / sắp xếp | Select + sort toggle | — | Giá trị **Mới nhất** · icon sort cạnh select |
| (unnamed input) | Search / hidden filter | — | DOM `input` zone toolbar — capture không có name/id |
| Nhật ký tuần đường | Report title / breadcrumb | — | Heading content đang active |
| BẢO DƯỠNG THƯỜNG XUYÊN | Catalog group | — | Nhóm trái active / expanded |
| TÀI SẢN ĐƯỜNG BỘ | Catalog group | — | Nhóm trái (chưa chọn trên ảnh) |
| Alert hướng dẫn | Alert / EmptyState | — | Text vàng — trạng thái pre-run |
| Kết quả báo cáo | DataGrid / file download | — | Chưa hiện cột trên ảnh · sau **Tổng hợp** → grid + tải tệp |

**Grid columns (ảnh 021):** không có — empty state.  
**Parity demo (Kind E — sau «Tổng hợp» / «Xem báo cáo» mock):** STT · tuyến · ngày/kỳ · chỉ tiêu NKTĐ/check-in · (tuỳ loại) trạng thái — theo `reports.html` CHECKIN_TYPES `Nhật ký tuần đường` · **không** clone bảng GOVOne.

### Tính năng / hành động

**Primary — KHAI THÁC BÁO CÁO › Nhật ký tuần đường (`021` root)**
- Mở module **Báo cáo tổng hợp** / tile KHAI THÁC BÁO CÁO → `/baocaotonghop/nhatkytuanduong`
- Catalog trái: chọn **BẢO DƯỠNG THƯỜNG XUYÊN** / **TÀI SẢN ĐƯỜNG BỘ** và báo cáo con (**Nhật ký tuần đường** active trên ảnh)
- Back mũi tên ← từ header báo cáo (thoát drill / về catalog)
- Đặt filter: khoảng ngày · **Chọn tuyến đường** · sort **Mới nhất**
- Clear date range (×)
- Kebab ⋮ more actions (toolbar)
- **Tổng hợp** (primary) → tổng hợp theo filter + tải tệp (alert copy)
- Empty guidance khi chưa chạy tổng hợp
- ≠ Bảng tổng hợp nhanh (sibling `009`/`019`/`022`) · ≠ Tuần đường dashboard (`021-…-tuan-uong`/`024`) · ≠ GIS editor · ≠ dashboard KPI thuần
- Twin root tile `007` / `018` — cùng UI shell; packet `021` = root **KHAI THÁC BÁO CÁO**

**Header / shell (ảnh + DOM)**
- Theme **Giao diện sáng** / **Giao diện tối**
- App switcher · notification · avatar / **Ban.TK.Nguyễn Anh Phúc…**
- User: Thông tin của tôi · Đổi mật khẩu · Đăng xuất
- Links: govone.vn · youtube · facebook

**Sidebar (ảnh + bodySample + `_left-rail.json`)**
- Bảng tổng hợp nhanh
- **Báo cáo tổng hợp** (active)
- QUẢN LÝ BẢO TRÌ → Tổng hợp bảo trì · Dự án bảo trì
- QUẢN LÝ BDTX → Tuần kiểm · Tuần đường · Số liệu · Tài liệu (+ DOM submenu Hoạt động / Nhật ký / Số liệu chi tiết…)
- QUẢN TRỊ ỨNG DỤNG → Phân quyền · Phân quyền báo cáo

**Catalog content (DOM full — 172 actions gộp twin pages)**
- BDTX: Nhật ký · NKTĐ · NK tuần kiểm · NK công việc · Thiên tai / thiệt hại / ùn tắc · Hạng mục hư hỏng · Tình trạng mặt đường · Kiểm tra cầu (tổng hợp / kết quả / phiếu) · TNGT (tháng / 6 tháng / nghiêm trọng / so sánh / tổng hợp / thống kê) · Vi phạm hành lang · Đếm xe (B.1 / B.2) · Tài liệu / GP thi công / công văn · Trực GT
- Tài sản: Tổng hợp chung · theo tuyến · theo DN · TS theo tuyến · theo hạng mục (Mặt đường · Nền/lề · Rãnh · Cống · Cầu · Biển báo · Hộ lan · Đấu nối · Cọc/cột · Sơn kẻ · Taluy · Tường chắn · Mốc lộ giới)

**Toolbar báo cáo (ảnh + DOM)**
- Date range · Chọn tuyến đường · Sort · Mới nhất · kebab / dropdown trigger · **Tổng hợp**

**Footer quick nav (DOM)**
- Báo cáo tổng hợp · Phân quyền · Bản đồ · Vấn đề · Giám sát · Hồ sơ

**Actions bổ sung từ sibling (map demo parity)**  
Bảng tổng hợp nhanh popup (`009`/`019`/`022`) · catalog drill khác — giữ trong `reports-actions.md` (172). **Không** bịa button không có trên ảnh/DOM.

### Map → step context

- Feature: `docs/context/features/reports.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `021-khai-thac-bao-cao`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/reports-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/reports-actions.md`
- Demo: parity UI trong `Linm.RMMS.Demo/src/demo/bao-cao/reports.html` · MFE — same actions (catalog BDTX/Tài sản · filter ngày+tuyến+sort · **Tổng hợp**/Xem · empty alert · download mock · 172 toast actions), modern `/erp-form-context` Kind E (không clone GOVOne)
- **DOM / bind:** DateRangePicker · Route Select · Sort Select · Button **Tổng hợp** · Alert empty · catalog nav → LinErpListFilterBar / AnalyticsReportShell controls
- **Capture path:** `capture/reports/root/view/` (master/page/action)
- Sibling: twin root `007`/`018` · `008`–`011` · `019`–`025` (catalog / BDTX / tuần kiểm-đường)

## Status

- [x] Vision reviewed
- [x] Mapped to step context
