# Demo control-map (modern MFE) — `toc`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: synthetized (module mới P3 · không màn GOVOne) — `_raw/legacy-govone/features/toc.md`.

## Kind hint

- **B** CatalogListShell (`/toc`) + **D** slideout form (`/toc/new` · `/toc/:id`) + **camera wall stub** modal
- Confirmed by: ai-autocode-autopilot
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory · 2k voucher_default · leave-confirm
- KPI strip sự kiện GT / VMS / camera · VMS command lines `pattern_inline_grid` · badge **P3** · AI support (YOLOv8)
- DoD P3: ITS camera connector · detection → Incident · VMS control Open API · event DEFER

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Mã sự kiện | text | header | Code | form-code-field · TOC-YYYYMMDD-NNNN |
| Loại phát hiện | select | filter+form | Select | ùn tắc / tai nạn / xe dừng / vật cản |
| Mức độ | select | filter+form | Select | thấp / trung bình / cao / khẩn |
| Camera nguồn | select | filter+form | Select | Select · useFormOptions |
| Tuyến / đoạn | text | filter+form | Text | TextField · required |
| Km / marker | text | form | Text | TextField |
| Lat | number | form | Money/Qty | DECIMAL |
| Lng | number | form | Money/Qty | DECIMAL |
| Thời điểm phát hiện | datetime | form | DateTime | utcToLocal · localToISO |
| Độ tin cậy AI (%) | number | form | Money/Qty | INT_IN 0–100 |
| Trạng thái | select | filter+grid | Select | mới / đã xác nhận / đang XL / đã đóng / false positive |
| Biển số | text | form | Text | TextField |
| Hướng làn | select | form | Select | Bắc→Nam / Nam→Bắc / hai chiều |
| Tốc độ TB (km/h) | number | form | Money/Qty | DECIMAL |
| VMS đích | select | form | Select | Select board |
| Thông điệp VMS | text | form | Text | TextField |
| Tốc độ giới hạn động | number | form | Money/Qty | INT_IN |
| Incident ref | text | content | Lookup text | TextField · INC code |
| Operator | text | form | Text | TextField |
| Ghi chú | textarea | content | TextArea | TextField multiline |
| Stream URL | text | content | Text readonly | TextField readOnly · stub |
| Frame key | text | content | Text readonly | TextField readOnly · MinIO key |
| Thời gian đóng | datetime | content | DateTime | when closed |
| VMS board (dòng) | select | lines | Select | pattern_inline_grid |
| Nội dung VMS (dòng) | text | lines | Text | inline grid |
| TT lệnh VMS (dòng) | select | lines | Select | chờ / đã gửi / lỗi / hết hạn |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Làm mới | action | toolbar | Làm mới | CatalogListShell refresh |
| Làm mới KPI | action | toolbar | Làm mới KPI | Overview KPI mock refresh |
| Tạo sự kiện thủ công | create | toolbar | Tạo sự kiện thủ công | Button primary · mở Kind D |
| Lọc / Tìm | filter | filter | Lọc / Tìm | Filter bar apply |
| Xem chi tiết | view | grid | Xem chi tiết | Open Kind D detail |
| Sửa | action | grid | Sửa | Open Kind D edit |
| Xóa | destructive | grid | Xóa | Confirm mock · remove local |
| Xác nhận AI | action | grid | Xác nhận AI | status→đã xác nhận · toast |
| False positive | action | grid | False positive | status→false positive |
| Gửi sự cố | action | grid | Gửi sự cố | Create INC stub · toast |
| Gửi lệnh VMS | action | grid/footer | Gửi lệnh VMS | Mock VMS command · **cấm** BE |
| Đặt tốc độ động | action | grid/footer | Đặt tốc độ động | Mock dynamic speed · toast |
| Mở camera wall | view | toolbar | Mở camera wall | Modal stream stub P3 |
| Mở GIS | nav | toolbar | Mở GIS | Nav `/gis` demo |
| Mở Sự cố | nav | toolbar | Mở Sự cố | Nav incident demo |
| Xuất Excel | export | toolbar | Xuất Excel | export-excel stub |
| User menu | nav | header | User menu | Avatar dropdown |
| Lưu | create | footer | Lưu | FormActions Save · toast · **cấm** BE |
| Lưu nháp | action | footer | Lưu nháp | localStorage draft |
| Đóng sự kiện | action | footer | Đóng sự kiện | status→đã đóng · closedAt |
| Thêm lệnh VMS | create | lines | Thêm lệnh VMS | linesActions · pattern_inline_grid |
| Xóa lệnh VMS | destructive | lines | Xóa lệnh VMS | row action |
| Hủy thay đổi | close | footer | Hủy thay đổi | snapshot restore |
| Đóng | close | header | Đóng | leave-confirm |
| Quay lại | nav | header | Quay lại | leave-confirm |

## Demo page rules (bắt buộc)

1. **Layout** — Kind B list (title · toolbar · filter · grid · KPI) + Kind D slideout (Z1/Z2/Z3) + camera wall stub modal
2. **KPI** — 4 ô mock: sự kiện mở · ùn tắc · VMS online · camera online
3. **Form** — validation (loại · tuyến · camera) · toast · leave-confirm dirty
4. **Lines** — STT · board · nội dung · TT lệnh · row action · không header `TT` cột ảo
5. **Labels** — hardcode VN OK nếu gắn `data-i18n`
6. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal/nav mock)
7. **Cấm** gọi `/api/v1/toc/*` · VMS · stream
8. Badge **P3** + **AI support** (YOLOv8 P3 / online stub P1 N/A)

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-list-page-shell.md` · `erp-common-controls-mandatory.md` · leave-confirm
- Capture raw: `_raw/legacy-govone/features/toc.md`
- Data context: `docs/context/features/toc.md`
- MFE ownership: Traffic (trong AiVision/Gis) · `/toc` · align `Linm.Web.RMMS.AiVision`
