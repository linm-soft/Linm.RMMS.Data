# Demo control-map (modern MFE) — `feedback`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> Legacy: synthetized (Mobile Góp ý guide) — `_raw/legacy-govone/features/feedback.md`.  
> **≠** `citizen` (báo sự cố người dân).

## Kind hint

- **D** (catalog/form slideout · modal) — erp-form-context Kind D · form gửi góp ý
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory · 2k voucher_default · leave-confirm

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Mã góp ý | text | header | Code | form-code-field · FB-YYYYMMDD-NNNN |
| Người gửi | text | header | Text readonly | TextField readOnly · common-field-control |
| Vai trò | select | header | Select | Select · useFormOptions (tuần đường / quản lý / tuần kiểm) |
| Thời gian | datetime | header | DateTime | utcToLocalInputValue · localInputToISOWithOffset |
| Loại góp ý | select | header | Select | Select · useFormOptions (lỗi / đề xuất / UX / khác) |
| Nội dung cần góp ý | textarea | content | TextArea | TextField multiline · required |
| Trạng thái | select | header | Select readonly | Select readOnly (draft / sent) |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Mở góp ý | create | host | Mở góp ý | Button primary · mở Kind D slideout |
| Gửi góp ý của bạn | create | footer | Gửi góp ý của bạn | FormActions primary · toast mock · **cấm** BE |
| Lưu nháp | action | footer | Lưu nháp | FormActions Save draft · localStorage |
| Xóa nội dung | destructive | footer | Xóa nội dung | clear body · dirty |
| Đóng | close | header | Đóng | Modal/Slideout close · leave-confirm |
| Quay lại | nav | header | Quay lại | Back · leave-confirm |
| Hủy thay đổi | close | footer | Hủy thay đổi | FormActions Cancel · snapshot restore |

## Demo page rules (bắt buộc)

1. **Layout** — Kind D slideout/modal: Z1 toolbar+title+hint · Z2 fields · Z3 footer actions
2. **Host** — stub Integration «Góp ý» → mở slideout (không clone GOVOne / không nhầm citizen)
3. **Form** — validation banner (body required) · toast mock · leave-confirm dirty
4. **Labels** — hardcode VN OK trong demo HTML nếu gắn `data-i18n`
5. **Datetime** — hiển thị local · lưu ISO offset (mock)
6. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal mock)
7. **Cấm** gọi `/api/v1/feedback` · **cấm** admin inbox UI nếu DEFER (GAP-F-FB-01)
8. Badge phân biệt **≠ Cổng người dân**

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-common-controls-mandatory.md` · leave-confirm
- Capture raw: `_raw/legacy-govone/features/feedback.md`
- Data context: `docs/context/features/feedback.md`
