# Demo control-map (modern MFE) — `integration`

> **Rule:** cùng field/action synthetic docs · UI theo **`/erp-form-context`** (Linm.Development.Rules).  
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.  
> sourceKind=**synthetic** (không màn GOVOne) — product docs → `_raw/legacy-govone/features/integration.md`.  
> Sibling: `feedback` (Kind D) — **không** gộp slug.

## Kind hint

- **G** (system layout) — hub Open API · tabs Endpoints / Import / Sync / Partners  
- Import wizard: panel Kind **D** slideout trên host hub  
- Sync jobs: CatalogListShell (2h) · filter bar  
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls · leave-confirm trên import dirty

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| Method | text | endpoints | Text readonly | TextField readOnly · badge GET/POST |
| Path | text | endpoints | Text | TextField · code font |
| Mô tả endpoint | text | endpoints | Text | TextField |
| Phase | select | endpoints | Select | Select · P1/P2/P3 |
| Auth | select | endpoints | Select | Select · JWT / API Key / OAuth2 |
| Trạng thái endpoint | select | endpoints | Select | Select · published/draft |
| OpenAPI URL | text | endpoints | Text | TextField · /swagger… |
| Health tổng | text | endpoints | Badge | status badge |
| Lọc path / mô tả | search | filter | Search | SearchInput · catalog filter |
| Phase filter | select | filter | Select | Select · useFormOptions |
| Mã job | text | import | Code | form-code-field · SYNC-YYYYMMDD-NNNN |
| Loại tài sản | select | import | Select | Select · useFormOptions |
| Địa bàn | select | import | Lookup | SearchInput · form-catalog-lookup-input |
| Tuyến đường | select | import | Lookup | SearchInput · form-catalog-lookup-input |
| Đoạn đường | text | import | Text | TextField · common-field-control |
| File nguồn | file | import | File | file picker stub |
| Ghi chú | text | import | Text | TextField textarea |
| Trạng thái job | select | import | Select | Select · draft/running/done/failed |
| Loại sync | select | sync | Select | Select · import/offline-batch/webhook |
| Partner | text | sync | Text | TextField |
| Số bản ghi | number | sync | Money/Qty | LabelMoney · INT_IN |
| Bắt đầu | datetime | sync | DateTime | local display · ISO offset |
| Kết thúc | datetime | sync | DateTime | local display · ISO offset |
| Lỗi | text | sync | Text | TextField · error tone |
| Loại hệ thống | select | partners | Select | Select · ERP/CMMS/… |
| Auth partner | select | partners | Select | Select · API Key / OAuth2 |
| Health partner | text | partners | Badge | ok/warn/bad |
| Phase adapter | select | partners | Select | Select · P1–P3 |

## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Mở Swagger | nav | toolbar | Mở Swagger | Button · mock Swagger panel |
| Copy OpenAPI URL | action | toolbar | Copy OpenAPI URL | Button · clipboard toast |
| Làm mới health | action | toolbar | Làm mới health | Button · mock refresh |
| Xuất catalog endpoint | export | toolbar | Xuất catalog endpoint | export-excel stub |
| Làm mới danh sách | action | toolbar | Làm mới danh sách | catalog toolbar refresh |
| Lọc / Tìm | action | filter | Lọc / Tìm | filter bar apply |
| Xem offline-batch contract | nav | toolbar | Xem offline-batch contract | Modal mock contract |
| Đăng ký webhook | create | toolbar | Đăng ký webhook | Button · P2 stub toast |
| Quay lại | nav | header | Quay lại | Back · hub |
| Import tài sản | create | host | Import tài sản | open Kind D slideout |
| Chọn file | action | form | Chọn file | file input trigger |
| Tải mẫu Excel | export | form | Tải mẫu Excel | download stub toast |
| Chạy import | create | footer | Chạy import | FormActions primary · mock job |
| Hủy import | close | footer | Hủy import | close slideout · leave-confirm |
| Hủy thay đổi | close | footer | Hủy thay đổi | snapshot restore |
| Đóng | close | header | Đóng | Slideout close · leave-confirm |
| Xem log sync | action | row | Xem log sync | row action · modal log |
| Retry job | action | row | Retry job | row action · toast mock |
| Bật/Tắt adapter | action | row | Bật/Tắt adapter | row toggle · toast |

## Demo page rules (bắt buộc)

1. **Layout** — Kind G hub: topnav · tabs Endpoints / Import guide / Sync jobs / Partners  
2. **Import** — Kind D slideout: Z1 toolbar+title · Z2 fields · Z3 footer (Chạy import / Hủy)  
3. **List** — CatalogListShell cho sync jobs + partners · filter · row actions  
4. **Swagger** — stub panel (fake paths) · **không** iframe BE thật  
5. **Form** — validation banner import (loại TS + địa bàn + tuyến bắt buộc) · leave-confirm dirty  
6. **Labels** — hardcode VN OK · `data-i18n` optional  
7. **Datetime** — hiển thị local · lưu ISO offset (mock)  
8. Badge **P1 baseline** · webhook **P2 stub**  
9. Mọi **button** trong bảng Actions phải có trên demo (click → toast/modal mock)  
10. **Cấm** gọi BE · **cấm** clone skin GOVOne · link sibling `feedback.html`

## Refs

- `web-app/skill/erp-form-context/erp-form-context.md`
- `erp-common-controls-mandatory.md` · list shell · leave-confirm
- Capture raw: `_raw/legacy-govone/features/integration.md`
- Data context: `docs/context/features/integration.md`
- Product: `07` §18 · `09` Integration · guide Import tài sản
