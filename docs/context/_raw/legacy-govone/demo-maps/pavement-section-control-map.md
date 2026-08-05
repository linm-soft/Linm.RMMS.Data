# Demo control-map (modern MFE) — `pavement-section`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: **synthetic** (Biểu 1 CSDL · hồ sơ sổ sách · product docs) — `_raw/legacy-govone/features/pavement-section.md`.  
> **sourceKind:** synthetic · task_12c100cf · **≠** GOVOne `ketcauhatang` (`asset`) — sổ tài sản map+list riêng.

## Kind hint

- **B** CatalogListShell (list `/asset/pavement-sections`) + **Full page form** (≥10 field — không Modal / không Slideout)
- Confirmed by: ai-autocode-autopilot (docs hồ sơ Biểu 1 · context Kind B)
- Step 2a-K · 2d readonly · 2e IdCode `MD-*` · 2g control-map · 2g common controls · 2h list shell · 2t catalog toolbar

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Tìm Mã/đường | text | filter | Search | SearchTextInput · LinErpListFilterBar |
| Tỉnh / TP | select | filter+form | Select | Select · useFormOptions |
| Tên đường | text | filter+form | Text / Lookup | TextField · Lookup P2 |
| Từ Km / Đến Km | number | filter+form | Number | NumberField · lý trình |
| Tình trạng | select | filter+form+grid | Select | Select · Tốt / Đang TC / Theo dõi / Hư hỏng |
| Mã (IdCode) | text | form header | Code RO | form-code-field · MD-YYYYMMDD-NNNN |
| Chiều dài Km | number | form | Number | NumberField · computed optional |
| B nền / B mặt | number | form | Number | NumberField |
| Loại kết cấu | select | form+grid | Select | Select · BTN/BTXM/Cấp phối/Khác |
| Dày mặt cm | number | form | Number | NumberField |
| Cấp đường | select | form+grid | Select | Select · I–IV |
| Số năm khai thác | text | form | Text | TextField |
| Bàn giao BT / XDCB | checkbox | form | Checkbox | Checkbox |
| Năm đại tu / SC | number | form | Number year | NumberField |
| ĐV thi công / QL / Chủ | text | form | Text | TextField · manageUnit required |
| Ghi chú | textarea | form | TextArea | TextField multiline |
| Ngày / Người cập nhật | text | form audit | Readonly | TextField readOnly · ISO local display |
| pageSize | select | pager | Select | Pagination · 20/50 |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Tạo mới | create | toolbar | + Tạo mới | CatalogListShell primary |
| Import | import | toolbar | Import | Import Excel stub · toast |
| Export | export | toolbar | Export | Export JSON/Excel stub |
| Làm mới | action | toolbar | Làm mới | CatalogListShell refresh |
| Cấu hình cột | action | toolbar | Cấu hình cột | Column picker modal mock |
| Tìm | filter | filter | Tìm | Filter bar apply |
| Xóa điều kiện | filter | filter | Xóa điều kiện | LinErpListFilterBar clear |
| Xem | view | grid | Xem | Open full page View |
| Sửa | edit | grid | Sửa | Open full page Edit |
| Xóa | destructive | grid | Xóa | Confirm · localStorage |
| Vẽ trên bản đồ live | nav | header | Vẽ trên bản đồ live | Navigate gis-draw-live |
| Trợ giúp | nav | header | Trợ giúp | Help modal stub |
| Thông báo | nav | header | Thông báo | Notification badge · dropdown |
| User menu | nav | header | User menu | Avatar dropdown |
| Trang trước / sau | nav | pager | ← → | Pagination |
| ← Danh sách | nav | form | ← Danh sách | Back · leave-confirm dirty |
| Lưu | save | form | Lưu | FormActions · toast · **cấm** BE |
| Huỷ | close | form | Huỷ | Cancel · leave-confirm |
| Xóa | destructive | form | Xóa | Confirm delete (edit) |
| Sửa | edit | form | Sửa | View → Edit |
| Đóng | close | form | Đóng | View close → list |
| Mở bản đồ live | nav | form | Mở bản đồ live | Navigate gis-draw-live |

## Demo page rules (bắt buộc)

1. **Layout** — Kind B list shell (title · toolbar · filter · grid · pager) + **full page form** (sections · không Modal)
2. **Filter** — `LinErpListFilterBar` pattern · Tìm trên filter · Làm mới toolbar riêng
3. **Grid** — STT · sort visual · row actions · không header `TT`
4. **Form** — validation banner · View không disabled xám · toast mock · leave-confirm dirty
5. **IdCode** — mock `MD-YYYYMMDD-NNNN` on create
6. **Labels** — hardcode VN OK trong demo HTML nếu gắn `data-i18n`
7. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal/nav mock)
8. **Cấm** gọi `/api/v1/infra/pavement-sections/*` thật
9. Map link → `gis-draw-live` · **không** nhúng CRUD map

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-list-page-shell.md` · `erp-common-controls-mandatory.md` · leave-confirm · catalog-list-toolbar
- Capture raw: `_raw/legacy-govone/features/pavement-section.md`
- Data context: `docs/context/features/pavement-section.md`
- MFE ownership: `Linm.Web.RMMS.Asset` · `/asset`
