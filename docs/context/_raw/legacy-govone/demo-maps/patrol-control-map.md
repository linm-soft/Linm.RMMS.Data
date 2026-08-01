# Demo control-map (modern MFE) — `patrol`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.

## Kind hint

- E (report) — erp-report-context
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| treepickerex-1025-inputEl | text | sidebar | Tree node | Collapsible tree · report panel · expand/collapse |
| doanduong | text | content | Text | TextField · common-field-control |
| datefield-1052-inputEl | text | content | Date | utcToLocalInputValue · localInputToISOWithOffset (form-datetime-local-utc) · report period filter |
| datefield-1053-inputEl | text | content | Date | utcToLocalInputValue · localInputToISOWithOffset (form-datetime-local-utc) · report period filter |
| loainhanvien | text | content | Text | TextField · common-field-control |
| checkAll | checkbox | toolbar | Checkbox / Switch | LinCheckbox · form field |
| checkbox-1064 | checkbox | toolbar | Checkbox / Switch | LinCheckbox · form field |
| checkbox-1065 | checkbox | toolbar | Checkbox / Switch | LinCheckbox · form field |
| ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$CurrentPassword | password | footer | Text | TextField · common-field-control |
| ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$NewPassword | password | footer | Text | TextField · common-field-control |
| ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$ConfirmNewPassword | password | footer | Text | TextField · common-field-control |
| ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$ChangePasswordPushButton | submit | footer | Text | TextField · common-field-control |
| Ngày tổng hợp | date | header | Date | utcToLocalInputValue · localInputToISOWithOffset (form-datetime-local-utc) · report period filter |
| Tuần kiểm | metric | kpi | KPI metric card | erp-report-context · KPI strip · click → focus panel / filter |
| CÔNG TÁC TUẦN KIỂM | text | panel-tuan-kiem | Collapsible panel header | Collapsible panel · loading/empty · erp-report-context |
| Tuyến (QL) — tuần kiểm | text | panel-tuan-kiem | Tree node | Collapsible tree · report panel · expand/collapse |
| Trạng thái check-in | text | panel-tuan-kiem | Status / badge | StatusBadge · check-in pending/done · erp-report-context · patrol |
| Empty / loading (panel) | text | panel-tuan-kiem | Status / empty | Loading overlay · EmptyState alert · erp-report-context |
| Tiêu đề modal (miscapture) | text | modal-header | DialogTitle | Modal/Slideout title · erp-report-context · leave-confirm |
| Empty state modal (miscapture) | text | modal-body | Status / empty | EmptyState · Modal body · erp-report-context |
| Tuần đường | metric | kpi | KPI metric card | erp-report-context · KPI strip · click → focus panel / filter |
| CÔNG TÁC TUẦN ĐƯỜNG | text | panel-tuan-duong | Collapsible panel header | Collapsible panel · tree Company→QL→Km chips · erp-report-context |
| Đơn vị / công ty | text | panel-tuan-duong | Tree node | Collapsible tree · report panel · expand/collapse |
| Tuyến (QL) — tuần đường | text | panel-tuan-duong | Tree node | Collapsible tree · report panel · expand/collapse |
| Badge count (QL) | text | panel-tuan-duong | Badge / count | Count badge trên node QL · erp-report-context · patrol |
| Điểm Km / lý trình | text | panel-tuan-duong | Chip / tag (Km) | Chip list · Company→Route→Km · drill chi tiết |
| Empty / loading (sibling panel) | text | panel-sibling | Status / empty | Loading overlay · EmptyState alert · erp-report-context |


## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Xuất excel | export | toolbar | Xuất Excel | export-excel · toolbar |
| Tải lại | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Vệ tinh | nav | content | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Google | nav | content | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Giao thông | nav | content | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Hành chính | nav | content | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Không nền | nav | content | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Bản đồ nền | nav | content | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| + | create | content | Tạo mới / Thêm | Button primary · catalog/voucher toolbar |
| − | nav | content | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Hồ sơ của tôi | nav | grid | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Đổi mật khẩu | nav | grid | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| Đăng xuất | export | grid | Đăng xuất | Auth logout · mfe-run-modes |
| Đổi mật khẩu | submit | footer | User menu | Avatar dropdown · profile / logout · mfe-run-modes |
| VỀ TRANG CHỦ | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
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
| CÔNG TÁC TUẦN KIỂM | action | header | Panel Tuần kiểm | Collapsible panel · loading/empty · erp-report-context |
| CÔNG VIỆC | action | header | Panel Công việc | Collapsible panel · WO summary empty/list · erp-report-context |
| Maximize | action | header | Maximize | Modal maximize / pop-out · erp-report-context |
| Đóng | close | header | Đóng | Modal/Slideout close · leave-confirm |


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
- Capture raw: `_raw/legacy-govone/features/patrol.md`
