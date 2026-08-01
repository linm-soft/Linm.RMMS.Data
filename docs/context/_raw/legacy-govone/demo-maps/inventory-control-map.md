# Demo control-map (modern MFE) — `inventory`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: synthetized (module mới P3 · không màn GOVOne) — `_raw/legacy-govone/features/inventory.md`.

## Kind hint

- **B** CatalogListShell (`/contract/inventory`) + **D** slideout form (`/contract/inventory/new` · `/:id`)
- Confirmed by: ai-autocode-autopilot
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory · 2k voucher_default · leave-confirm
- KPI strip tồn kho / bảo dưỡng / GPS · stock lines `pattern_inline_grid` · badge **P3**

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Mã VT/TB | text | header | Code | form-code-field · INV-YYYYMMDD-NNNN |
| Tên | text | header | Text | TextField · required |
| Loại | select | filter+form | Select | vật tư / máy móc / xe / nhiên liệu / thiết bị |
| Nhóm | select | filter+form | Select | Select · useFormOptions |
| ĐVT | select | header | Select | tấn / kg / lít / cái / bộ |
| Tồn | number | header | Money/Qty | LabelMoney · required |
| Tồn min | number | header | Money/Qty | LabelMoney |
| Đơn giá | number | header | Money | LabelMoney · form-field-format |
| Giá trị tồn | number | header | Money readonly | LabelMoney readOnly · qty×price |
| Kho | select | filter+form | Select | Select · kho hạt |
| Đơn vị QL | select | content | Select | Select · useFormOptions |
| Nhà cung cấp | text | content | Text | TextField |
| Serial / biển số | text | content | Text | TextField |
| Model | text | content | Text | TextField |
| Trạng thái | select | filter+grid | Select | sẵn sàng / đang dùng / bảo dưỡng / hỏng / hết |
| GPS lat | number | gps | Money/Qty | NumberField |
| GPS lng | number | gps | Money/Qty | NumberField |
| GPS lúc | datetime | gps | Date | DateField · readonly mock |
| Liên kết WO | text | content | Lookup text | TextField · WO code |
| Liên kết HĐ | text | content | Lookup text | TextField · CTR code |
| Ngày nhập | date | header | Date | utcToLocalDate · localDateToISO |
| BD gần nhất | date | maint | Date | DateField |
| BD kế tiếp | date | maint | Date | DateField |
| Nhiên liệu (L) | number | content | Money/Qty | LabelMoney · xe/máy |
| Ghi chú | textarea | content | TextArea | TextField multiline |
| Loại phiếu (dòng) | select | lines | Select | nhập / xuất / điều chỉnh |
| SL phiếu | number | lines | Money/Qty | LabelMoney · INT_IN |
| Ngày phiếu | date | lines | Date | DateField |
| WO phiếu | text | lines | Text | pattern_inline_grid |
| Ghi chú phiếu | text | lines | Text | inline grid |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Làm mới | action | toolbar | Làm mới | CatalogListShell refresh |
| Làm mới KPI | action | toolbar | Làm mới KPI | Overview KPI mock refresh |
| Thêm vật tư / TB | create | toolbar | Thêm vật tư / TB | Button primary · mở Kind D |
| Lọc / Tìm | filter | filter | Lọc / Tìm | Filter bar apply |
| Xem chi tiết | view | grid | Xem chi tiết | Open Kind D detail |
| Sửa | action | grid | Sửa | Open Kind D edit |
| Xóa | destructive | grid | Xóa | Confirm mock · remove local |
| Xuất kho nhanh | action | grid | Xuất kho nhanh | Modal / focus lines · kind xuất |
| Lên lịch bảo dưỡng | action | grid | Lên lịch bảo dưỡng | +30 ngày mock |
| Theo dõi GPS | view | grid | Theo dõi GPS | Modal GPS stub |
| Xuất Excel | export | toolbar | Xuất Excel | export-excel stub |
| Xuất báo cáo tồn | export | toolbar | Xuất báo cáo tồn | Export stub · toast |
| Bản đồ GPS | nav | toolbar | Bản đồ GPS | Modal map stub P3 |
| Gán WorkOrder | nav | toolbar | Gán WorkOrder | Nav `/maintenance` demo |
| Nhập kho | create | toolbar | Nhập kho | Open form + dòng nhập |
| Xuất kho | action | toolbar | Xuất kho | Open form + dòng xuất |
| User menu | nav | header | User menu | Avatar dropdown |
| Lưu | create | footer | Lưu | FormActions Save · toast · **cấm** BE |
| Lưu nháp | action | footer | Lưu nháp | localStorage draft |
| Duyệt phiếu | action | footer | Duyệt phiếu | Workflow stub P3 |
| Thêm dòng phiếu | create | lines | Thêm dòng phiếu | linesActions · pattern_inline_grid |
| Xóa dòng phiếu | destructive | lines | Xóa dòng phiếu | row action |
| Hủy thay đổi | close | footer | Hủy thay đổi | snapshot restore |
| Đóng | close | header | Đóng | leave-confirm |
| Quay lại | nav | header | Quay lại | leave-confirm |

## Demo page rules (bắt buộc)

1. **Layout** — Kind B list (title · toolbar · filter · grid · KPI) + Kind D slideout (Z1/Z2/Z3)
2. **KPI** — 4 ô mock: giá trị tồn · dưới min · đang bảo dưỡng · GPS online
3. **Form** — validation (tên · loại · ĐVT · tồn) · toast · leave-confirm dirty
4. **Lines** — STT · loại phiếu · SL · ngày · WO · ghi chú · row action · không header `TT` cột ảo
5. **Labels** — hardcode VN OK nếu gắn `data-i18n`
6. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal/nav mock)
7. **Cấm** gọi `/api/v1/inventory/*`
8. Badge **P3** trên hub/list/header

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-list-page-shell.md` · `erp-common-controls-mandatory.md` · leave-confirm
- Capture raw: `_raw/legacy-govone/features/inventory.md`
- Data context: `docs/context/features/inventory.md`
- MFE ownership: `Linm.Web.RMMS.Contract` · `/contract/inventory`
