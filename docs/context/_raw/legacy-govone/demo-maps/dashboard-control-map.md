# Demo control-map (modern MFE) — `dashboard`

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
| Trạng thái check-in | text | panel-tuan-kiem | Status / badge | StatusBadge · check-in pending/done · erp-report-context · patrol |
| Empty state | text | content | Status / empty | Loading overlay · EmptyState alert · erp-report-context |


## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| dropdown trigger | action | header | Date filter | DatePicker · report period · reload KPI + panels |
| Báo cáo tổng hợp | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Phân quyền | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Bản đồ | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Vấn đề | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Giám sát | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Hồ sơ | nav | footer | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| govone.vn | nav | header | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| youtube | nav | header | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| facebook | nav | header | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Thiết lập cỡ chữ | nav | header | Cỡ chữ | App shell · font-size preference |
| Giao diện sáng | action | header | Giao diện sáng | Button · toolbar zone |
| Giao diện tối | action | header | Giao diện tối | Button · toolbar zone |
| Ban.TK.Nguyễn Anh Phúc nguyenanhphuc.dbna@cloudgis.vn | action | header | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Thông tin của tôi | export | header | Xuất Excel | export-excel · toolbar |
| Đổi mật khẩu | action | header | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Đổi mật khẩu | nav | header | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Đăng xuất | export | header | Đăng xuất | Auth logout · mfe-run-modes |
| CÔNG TÁC TUẦN ĐƯỜNG | action | header | Panel Tuần đường | Collapsible panel · tree Company→QL→Km chips · erp-report-context |
| CÔNG TÁC TUẦN KIỂM | action | header | Panel Tuần kiểm | Collapsible panel · route list · check-in status · erp-report-context |
| CÔNG VIỆC | action | header | Panel Công việc | Collapsible panel · WO summary empty/list · erp-report-context |


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
- Capture raw: `_raw/legacy-govone/features/dashboard.md`
