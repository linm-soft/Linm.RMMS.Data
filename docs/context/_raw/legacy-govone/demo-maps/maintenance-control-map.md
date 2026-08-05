# Demo control-map (modern MFE) — `maintenance`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.

## Kind hint

- E (report) — erp-report-context
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Ngày tổng hợp | date | header | Date | utcToLocalInputValue · localInputToISOWithOffset (form-datetime-local-utc) · report period filter |
| Tuần đường | metric | kpi | KPI metric card | erp-report-context · KPI strip · click → focus panel / filter |
| Tuần kiểm | metric | kpi | KPI metric card | erp-report-context · KPI strip · click → focus panel / filter |
| Tình hình bão lũ | metric | kpi | KPI metric card | erp-report-context · KPI strip · click → focus panel / filter |
| Tai nạn giao thông | metric | kpi | KPI metric card | erp-report-context · KPI strip · click → focus panel / filter |
| Vi phạm xâm phạm | metric | kpi | KPI metric card | erp-report-context · KPI strip · click → focus panel / filter |
| Công việc | metric | kpi | KPI metric card | erp-report-context · KPI strip · click → focus panel / filter |
| Đơn vị / công ty | text | panel-tuan-duong | Tree node | Collapsible tree · report panel · expand/collapse |
| Tuyến (QL) | text | panel-tuan-duong | Tree node | Collapsible tree · report panel · expand/collapse |
| Điểm Km / lý trình | text | panel-tuan-duong | Chip / tag (Km) | Chip list · Company→Route→Km · drill chi tiết |
| Trạng thái tải | text | panel-tuan-kiem | Status / empty | Loading overlay · EmptyState alert · erp-report-context |
| Empty state | text | content | Status / empty | Loading overlay · EmptyState alert · erp-report-context |
| Tiêu đề modal | text | modal-header | DialogTitle | Modal title miscapture · Chấm công (vision 020/023) · TNGT (016) · erp-report-context · leave-confirm |
| Empty state (TNGT) | text | modal-body | Status / empty | Loading overlay · EmptyState alert · erp-report-context |


## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Báo cáo tổng hợp | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Phân quyền | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Bản đồ | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Vấn đề | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Giám sát | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Hồ sơ | nav | footer | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| govone.vn | nav | header | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| youtube | nav | header | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| facebook | nav | header | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Giao diện sáng | action | header | Giao diện sáng | Button · toolbar zone |
| Giao diện tối | action | header | Giao diện tối | Button · toolbar zone |
| Ban.TK.Nguyễn Anh Phúc nguyenanhphuc.dbna@cloudgis.vn | action | header | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Thông tin của tôi | export | header | Xuất Excel | export-excel · toolbar |
| Đổi mật khẩu | action | header | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Đổi mật khẩu | nav | header | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Đăng xuất | export | header | Đăng xuất | Auth logout · mfe-run-modes |
| Bảng tổng hợp nhanh | action | sidebar | Bảng tổng hợp nhanh | Button · toolbar zone |
| Bảng tổng hợp nhanh | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Báo cáo tổng hợp | action | sidebar | Báo cáo tổng hợp | Button · toolbar zone |
| Báo cáo tổng hợp | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| QUẢN LÝ BẢO TRÌ | action | sidebar | QUẢN LÝ BẢO TRÌ | Button · toolbar zone |
| Tổng hợp bảo trì | action | sidebar | Tổng hợp bảo trì | Button · toolbar zone |
| Tổng hợp bảo trì | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Dự án bảo trì | action | sidebar | Dự án bảo trì | Button · toolbar zone |
| Dự án bảo trì | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| QUẢN LÝ BDTX | action | sidebar | QUẢN LÝ BDTX | Button · toolbar zone |
| Tuần kiểm | action | sidebar | Tuần kiểm | Button · toolbar zone |
| Hoạt động tuần kiểm | action | sidebar | Hoạt động tuần kiểm | Button · toolbar zone |
| Hoạt động tuần kiểm | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Tuần đường | action | sidebar | Tuần đường | Button · toolbar zone |
| Hoạt động tuần đường | action | sidebar | Hoạt động tuần đường | Button · toolbar zone |
| Hoạt động tuần đường | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Nhật ký tuần đường | action | sidebar | Nhật ký tuần đường | Button · toolbar zone |
| Nhật ký tuần đường | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Nhật ký công việc | action | sidebar | Nhật ký công việc | Button · toolbar zone |
| Nhật ký công việc | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Số liệu | action | sidebar | Số liệu | Button · toolbar zone |
| Thiên tai, bão lũ Số liệu thiệt hạiÙn tắc giao thông | action | sidebar | Thiên tai, bão lũ Số liệu thiệt hạiÙn tắc giao thông | Button · toolbar zone |
| Số liệu thiệt hại | action | sidebar | Số liệu thiệt hại | Button · toolbar zone |
| Số liệu thiệt hại | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Ùn tắc giao thông | action | sidebar | Ùn tắc giao thông | Button · toolbar zone |
| Ùn tắc giao thông | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Hạng mục hư hỏng | action | sidebar | Hạng mục hư hỏng | Button · toolbar zone |
| Hạng mục hư hỏng | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Vi phạm HLATĐB | action | sidebar | Vi phạm HLATĐB | Button · toolbar zone |
| Vi phạm HLATĐB | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Tai nạn giao thông | action | sidebar | Tai nạn giao thông | Button · toolbar zone |
| Tai nạn giao thông | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Đếm xe | action | sidebar | Đếm xe | Button · toolbar zone |
| Đếm xe | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Kiểm tra cầu | action | sidebar | Kiểm tra cầu | Button · toolbar zone |
| Kiểm tra cầu | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Tài liệu | action | sidebar | Tài liệu | Button · toolbar zone |
| Giấy phép thi công | action | sidebar | Giấy phép thi công | Button · toolbar zone |
| Giấy phép thi công | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Công văn đi - đến | action | sidebar | Công văn đi - đến | Button · toolbar zone |
| Công văn đi - đến | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Quản lý tài sản | action | sidebar | Quản lý tài sản | Button · toolbar zone |
| QUẢN TRỊ ỨNG DỤNG | action | sidebar | QUẢN TRỊ ỨNG DỤNG | Button · toolbar zone |
| Phân quyền | action | sidebar | Phân quyền | Button · toolbar zone |
| Phân quyền báo cáo | action | sidebar | Phân quyền báo cáo | Button · toolbar zone |
| Phân quyền báo cáo | nav | sidebar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| dropdown trigger | action | header | Date filter | DatePicker · report period · reload KPI + panels |
| Thiết lập cỡ chữ | nav | header | Cỡ chữ | App shell · font-size preference |
| CÔNG TÁC TUẦN ĐƯỜNG | action | header | Panel Tuần đường | Collapsible panel · tree Company→QL→Km chips · erp-report-context |
| CÔNG TÁC TUẦN KIỂM | action | header | Panel Tuần kiểm | Collapsible panel · route list · check-in status · erp-report-context |
| CÔNG VIỆC | action | header | Panel Công việc | Collapsible panel · WO summary empty/list · erp-report-context |
| Maximize | action | modal-header | Maximize | Modal maximize / pop-out · erp-report-context |
| Đóng | close | modal-header | Đóng | Modal/Slideout close · leave-confirm |


## Demo page rules (bắt buộc)

1. **Layout** — list: LinPageLayout zones A–F · form: Pattern A/B/C theo Kind
2. **Filter** — `LinErpListFilterBar` · Tìm trên filter · Làm mới toolbar
3. **Grid** — STT · sort/filter · row action menu · không header `TT`
4. **Form** — validation banner · không disabled xám View · toast mock
5. **Labels** — `useFormOptions` pattern (hardcode VN chỉ trong demo HTML OK nếu gắn data-i18n key)
6. **Datetime** — hiển thị local · lưu ISO offset (mock)
7. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal mock)

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-common-controls-mandatory.md` · `erp-list-page-shell.md`
- Capture raw: `_raw/legacy-govone/features/maintenance.md`
