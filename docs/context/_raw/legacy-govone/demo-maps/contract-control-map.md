# Demo control-map (modern MFE) — `contract`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: synthetized (module mới P2–P3 · không màn GOVOne) — `_raw/legacy-govone/features/contract.md`.

## Kind hint

- **B** CatalogListShell (`/contract`) + **D** slideout form (`/contract/new` · `/contract/:id`)
- Confirmed by: ai-autocode-autopilot (override plan fallback Kind C — product: Full list + form + KPI)
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory · 2k voucher_default · leave-confirm
- KPI strip nhà thầu / ngân sách · payment lines `pattern_inline_grid` · badge **P2–P3**

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Mã HĐ | text | header | Code | form-code-field · CTR-YYYYMMDD-NNNN |
| Số HĐ | text | header | Text | TextField · required |
| Tên HĐ | text | header | Text | TextField · required |
| Loại HĐ | select | filter+form | Select | Select · bảo trì / nâng cấp / khác |
| Nhà thầu | select | filter+form | Lookup | SearchInput · form-catalog-lookup-input |
| Giá trị HĐ | number | header | Money | LabelMoney · form-field-format |
| Ngân sách năm | number | budget | Money | LabelMoney |
| Đã giải ngân | number | budget | Money readonly | LabelMoney readOnly |
| Ngày ký | date | header | Date | utcToLocalDate · localDateToISO |
| Ngày hiệu lực | date | header | Date | DateField |
| Ngày hết hạn | date | header | Date | DateField |
| Trạng thái | select | filter+grid | Select | nháp / đã ký / đang TH / thanh toán / quyết toán / đóng |
| Điểm KPI nhà thầu | number | kpi | Money/Qty | LabelMoney · INT_IN 0–100 |
| SLA % | number | kpi | Money/Qty | LabelMoney · INT_IN |
| Tháng bảo hành | number | warranty | Money/Qty | INT_IN |
| Ngày hết BH | date | warranty | Date | DateField |
| Đơn vị quản lý | select | content | Select | Select · useFormOptions |
| Tuyến / đoạn | text | content | Text | TextField |
| Năm ngân sách | number | budget | Money/Qty | INT_IN year |
| Liên kết WO | text | content | Lookup text | TextField · WO code |
| Ghi chú | textarea | content | TextArea | TextField multiline |
| Kỳ TT (dòng) | text | lines | Text | pattern_inline_grid |
| Số tiền TT | number | lines | Money | LabelMoney · INT_IN |
| Ngày TT | date | lines | Date | DateField |
| TT dòng | select | lines | Select | chờ / đã chi / hủy |
| Ghi chú dòng | text | lines | Text | inline grid |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Làm mới | action | toolbar | Làm mới | CatalogListShell refresh |
| Làm mới KPI | action | toolbar | Làm mới KPI | Overview KPI mock refresh |
| Tạo hợp đồng | create | toolbar | Tạo hợp đồng | Button primary · mở Kind D |
| Lọc / Tìm | filter | filter | Lọc / Tìm | Filter bar apply |
| Xem chi tiết | view | grid | Xem chi tiết | Open Kind D detail |
| Sửa | action | grid | Sửa | Open Kind D edit |
| Xóa | destructive | grid | Xóa | Confirm mock · remove local |
| Ký hợp đồng | action | grid | Ký hợp đồng | status→đã ký · toast · **cấm** BE |
| Ghi nhận thanh toán | action | grid/footer | Ghi nhận thanh toán | Modal / focus lines |
| Xem KPI nhà thầu | view | grid | Xem KPI nhà thầu | Modal KPI stub |
| Xuất Excel | export | toolbar | Xuất Excel | export-excel stub |
| Xuất báo cáo ngân sách | export | toolbar | Xuất báo cáo ngân sách | Export stub · toast |
| Mở quyết toán | nav | toolbar | Mở quyết toán | Modal P2–P3 stub |
| Gia hạn bảo hành | action | grid | Gia hạn bảo hành | +6 tháng mock |
| Liên kết WorkOrder | nav | toolbar | Liên kết WorkOrder | Nav `/maintenance` demo |
| User menu | nav | header | User menu | Avatar dropdown |
| Lưu | create | footer | Lưu | FormActions Save · toast · **cấm** BE |
| Lưu nháp | action | footer | Lưu nháp | localStorage draft |
| Phê duyệt | action | footer | Phê duyệt | Workflow stub P2 |
| Thêm dòng thanh toán | create | lines | Thêm dòng thanh toán | linesActions · pattern_inline_grid |
| Xóa dòng thanh toán | destructive | lines | Xóa dòng thanh toán | row action |
| Hủy thay đổi | close | footer | Hủy thay đổi | snapshot restore |
| Đóng | close | header | Đóng | leave-confirm |
| Quay lại | nav | header | Quay lại | leave-confirm |

## Demo page rules (bắt buộc)

1. **Layout** — Kind B list (title · toolbar · filter · grid · KPI) + Kind D slideout (Z1/Z2/Z3)
2. **KPI** — 4 ô mock: tổng giá trị HĐ · ngân sách còn · KPI TB nhà thầu · HĐ sắp hết hạn
3. **Form** — validation (số HĐ · tên · nhà thầu · giá trị) · toast · leave-confirm dirty
4. **Lines** — STT · kỳ · số tiền · ngày · TT · ghi chú · row action · không header `TT` cột ảo
5. **Labels** — hardcode VN OK nếu gắn `data-i18n`
6. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal/nav mock)
7. **Cấm** gọi `/api/v1/contracts` · `/api/v1/budgets` · payments
8. Badge **P2–P3** trên hub/list/header

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-list-page-shell.md` · `erp-common-controls-mandatory.md` · leave-confirm
- Capture raw: `_raw/legacy-govone/features/contract.md`
- Data context: `docs/context/features/contract.md`
- MFE ownership: `Linm.Web.RMMS.Contract` · `/contract`
