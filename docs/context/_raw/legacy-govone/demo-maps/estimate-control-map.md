# Demo control-map (modern MFE) — `estimate`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: synthetized (không màn GOVOne) — `_raw/legacy-govone/features/estimate.md`.

## Kind hint

- **D** (catalog/form slideout) — erp-form-context Kind D · panel trên host Công việc / Sự cố
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory · 2k voucher_default · leave-confirm

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Mã ước lượng | text | header | Code | form-code-field · EST-YYYYMMDD-NNNN |
| Sự cố / Vấn đề | select | header | Lookup | SearchInput · form-catalog-lookup-input |
| Nguồn (detection / sự cố) | select | header | Select | Select · useFormOptions |
| Detection IDs | text | header | Text | TextField · common-field-control |
| Tuyến / đoạn | text | header | Text | TextField · common-field-control |
| Loại hư hỏng | select | header | Select | Select · useFormOptions |
| Diện tích (m²) | number | header | Money/Qty | LabelMoney · INT_IN / form-field-format |
| Mức độ | select | header | Select | Select · useFormOptions |
| Model AI | text | header | Text readonly | TextField readOnly · badge P1 online |
| Giờ nhân công | number | meta | Money/Qty | LabelMoney · INT_IN |
| Thiết bị | text | meta | Text | TextField · common-field-control |
| Thời gian thi công (ngày) | number | meta | Money/Qty | LabelMoney · INT_IN |
| Tổng chi phí (VND) | number | footer | Money | LabelMoney · form-field-format |
| Trạng thái | select | header | Select | Select · useFormOptions (draft/confirmed) |
| Hạng mục (dòng) | text | lines | Text | inline grid TextField |
| Khối lượng | number | lines | Money/Qty | INT_IN · pattern_inline_grid |
| Đơn vị | text | lines | Text | inline grid |
| Đơn giá | number | lines | Money | LabelMoney · INT_IN |
| Thành tiền | number | lines | Money readonly | LabelMoney readOnly |
| Ghi chú dòng | text | lines | Text | TextField |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| AI ước lượng từ sự cố | create | toolbar | AI ước lượng từ sự cố | Button primary · mock POST from-incident |
| AI ước lượng từ detections | create | toolbar | AI ước lượng từ detections | Button · mock POST from-defects |
| Chạy lại ước lượng | action | toolbar | Chạy lại ước lượng | Button · toolbar zone |
| Thêm dòng | create | lines | Thêm dòng | linesActions · pattern_inline_grid |
| Xóa dòng | destructive | lines | Xóa dòng | row action · leave-confirm nếu dirty |
| Sửa dòng | action | lines | Sửa dòng | inline edit · pattern_inline_grid |
| Xác nhận số liệu | action | footer | Xác nhận số liệu | FormActions · confirm modal |
| Lưu nháp | action | footer | Lưu nháp | FormActions Save draft |
| Gắn Công việc | nav | footer | Gắn Công việc | stub P1 · toast · không auto WO |
| Xuất Excel | export | toolbar | Xuất Excel | export-excel · toolbar stub |
| Đóng | close | header | Đóng | Modal/Slideout close · leave-confirm |
| Quay lại | nav | header | Quay lại | Back · leave-confirm |
| Hủy thay đổi | close | footer | Hủy thay đổi | FormActions Cancel · snapshot restore |

## Demo page rules (bắt buộc)

1. **Layout** — Kind D slideout: Z1 toolbar+title+hint · Z2 header+lines · Z3 footer tổng tiền
2. **Host** — mock list Công việc / Sự cố → mở slideout (không clone GOVOne)
3. **Grid dòng** — STT · sort · row action · `pattern_inline_grid` · không header `TT`
4. **Form** — validation banner · không disabled xám View · toast mock · leave-confirm dirty
5. **Labels** — hardcode VN OK trong demo HTML nếu gắn `data-i18n`
6. **Datetime** — hiển thị local · lưu ISO offset (mock)
7. Badge **P1 online** (GPT-4o JSON) · stub P2 regression + catalog đơn giá
8. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal mock)
9. **Cấm** auto tạo WorkOrder · **cấm** gọi BE

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-common-controls-mandatory.md` · voucher slideout · leave-confirm
- Capture raw: `_raw/legacy-govone/features/estimate.md`
- Data context: `docs/context/features/estimate.md`
