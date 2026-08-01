# Demo control-map (modern MFE) — `asset`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.

## Kind hint

- B (catalog list+modal) — erp-form-context Kind B
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| textfield-1033-inputEl | text | toolbar | Text | TextField · common-field-control |
| textfield-1079-inputEl | text | toolbar | Text | TextField · common-field-control |
| textfield-1080-inputEl | text | toolbar | Text | TextField · common-field-control |
| inputItem | text | toolbar | Text | TextField · common-field-control |


## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| 24 | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Tiện ích | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Xóa điều kiện | destructive | grid | Xóa / Hủy | Button danger · Confirm modal |
| Lấy dữ liệu | nav | grid | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| + | create | grid | Tạo mới / Thêm | Button primary · catalog/voucher toolbar |
| − | action | grid | − | Button · toolbar zone |
| ⇧ | action | grid | ⇧ | Button · toolbar zone |
| Vị trí của tôi | action | grid | Vị trí của tôi | Button · toolbar zone |
| Lớp nền | action | grid | Lớp nền | Button · toolbar zone |
| Lớp chuyên đề | action | modal | Lớp chuyên đề | Button · toolbar zone |


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
- Capture raw: `_raw/legacy-govone/features/asset.md`
