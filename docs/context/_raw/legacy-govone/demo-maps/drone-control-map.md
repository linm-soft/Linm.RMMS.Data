# Demo control-map (modern MFE) — `drone`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: synthetized (module mới P2–P3 · không màn GOVOne) — `_raw/legacy-govone/features/drone.md`.

## Kind hint

- **B** CatalogListShell (`/drone`) + **D** slideout form (`/drone/new` · `/drone/:id`) + **viewer stub** modal
- Confirmed by: ai-autocode-autopilot
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory · 2k voucher_default · leave-confirm
- KPI strip scan jobs · artifact lines `pattern_inline_grid` · badge **P2–P3**
- DoD P2: upload job + viewer stub · process queue mock · event `drone.scan.completed` DEFER

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Mã scan | text | header | Code | form-code-field · SCN-YYYYMMDD-NNNN |
| Tên nhiệm vụ | text | header | Text | TextField · required |
| Loại bay | select | filter+form | Select | cầu / taluy / sạt lở / mapping / orthophoto |
| Mục đích | text | header | Text | TextField |
| Tuyến / đoạn | text | filter+form | Text | TextField · required |
| Công trình | text | header | Text | TextField · cầu/taluy |
| Đơn vị thực hiện | select | filter+form | Select | Select · useFormOptions |
| Thiết bị / drone | select | form | Select | Select |
| Phi công | text | form | Text | TextField |
| Ngày bay | date | filter+form | Date | utcToLocalDate · localDateToISO |
| Giờ bắt đầu | text | form | Text | TextField · HH:mm |
| Giờ kết thúc | text | form | Text | TextField · HH:mm |
| Diện tích km² | number | form | Money/Qty | LabelMoney · DECIMAL |
| Số ảnh | number | form | Money/Qty | INT_IN |
| Trạng thái | select | filter+grid | Select | nháp / đã upload / đang xử lý / hoàn thành / lỗi |
| Point cloud key | text | content | Text readonly | TextField readOnly · MinIO key |
| Orthophoto key | text | content | Text readonly | TextField readOnly |
| 3D Tiles | select | content | Select | chưa / đang gen / sẵn sàng / lỗi |
| GIS ref | text | content | Lookup text | TextField · twin layer id |
| Incident ref | text | content | Lookup text | TextField · INC code |
| AiVision job | text | content | Lookup text | TextField · job id |
| Ghi chú | textarea | content | TextArea | TextField multiline |
| Loại artifact (dòng) | select | lines | Select | pattern_inline_grid · raw/las/ortho/tiles |
| Tên file | text | lines | Text | inline grid |
| Size MB | number | lines | Money/Qty | DECIMAL |
| Storage key | text | lines | Text | MinIO key |
| TT artifact | select | lines | Select | chờ / đã upload / lỗi |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Làm mới | action | toolbar | Làm mới | CatalogListShell refresh |
| Làm mới KPI | action | toolbar | Làm mới KPI | Overview KPI mock refresh |
| Tạo scan / Upload | create | toolbar | Tạo scan / Upload | Button primary · mở Kind D |
| Lọc / Tìm | filter | filter | Lọc / Tìm | Filter bar apply |
| Xem chi tiết | view | grid | Xem chi tiết | Open Kind D detail |
| Sửa | action | grid | Sửa | Open Kind D edit |
| Xóa | destructive | grid | Xóa | Confirm mock · remove local |
| Upload files | action | grid/footer | Upload files | Mock file pick · status→đã upload · **cấm** BE |
| Xử lý (process) | action | grid/footer | Xử lý (process) | Job queue mock · status→đang xử lý/hoàn thành |
| Xem artifacts | view | grid | Xem artifacts | Focus lines / modal list |
| Mở viewer stub | view | toolbar | Mở viewer stub | Modal Cesium/3D stub P2 |
| Mở GIS Twin | nav | toolbar | Mở GIS Twin | Nav `/gis` demo |
| Xuất Excel | export | toolbar | Xuất Excel | export-excel stub |
| Gửi sự cố | action | grid | Gửi sự cố | Create INC stub · toast |
| Liên kết AiVision | nav | toolbar | Liên kết AiVision | Nav `/ai-vision` demo |
| User menu | nav | header | User menu | Avatar dropdown |
| Lưu | create | footer | Lưu | FormActions Save · toast · **cấm** BE |
| Lưu nháp | action | footer | Lưu nháp | localStorage draft |
| Hủy job | destructive | footer | Hủy job | status→lỗi / nháp |
| Thêm artifact | create | lines | Thêm artifact | linesActions · pattern_inline_grid |
| Xóa artifact | destructive | lines | Xóa artifact | row action |
| Hủy thay đổi | close | footer | Hủy thay đổi | snapshot restore |
| Đóng | close | header | Đóng | leave-confirm |
| Quay lại | nav | header | Quay lại | leave-confirm |

## Demo page rules (bắt buộc)

1. **Layout** — Kind B list (title · toolbar · filter · grid · KPI) + Kind D slideout (Z1/Z2/Z3) + viewer stub modal
2. **KPI** — 4 ô mock: tổng scan · đang xử lý · hoàn thành · tổng diện tích km²
3. **Form** — validation (tên · loại bay · tuyến) · toast · leave-confirm dirty
4. **Lines** — STT · loại · tên file · size · key · TT · row action · không header `TT` cột ảo
5. **Labels** — hardcode VN OK nếu gắn `data-i18n`
6. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal/nav mock)
7. **Cấm** gọi `/api/v1/drone/scans` · process · artifacts
8. Badge **P2–P3** trên hub/list/header

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-list-page-shell.md` · `erp-common-controls-mandatory.md` · leave-confirm
- Capture raw: `_raw/legacy-govone/features/drone.md`
- Data context: `docs/context/features/drone.md`
- MFE ownership: `Linm.Web.RMMS.Drone` · `/drone`
