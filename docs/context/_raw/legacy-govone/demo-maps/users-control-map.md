# Demo control-map (modern MFE) — `users`

> **Rule:** cùng field/action legacy · UI theo **`/erp-form-context`** (Linm.Development.Rules).
> Demo HTML mock `Lin*` look · **cấm** copy skin GOVOne cũ · **cấm** BE.

## Kind hint

- B (catalog list+modal) — erp-form-context Kind B
- Step 2a-K · 2d readonly · 2g control-map · 2g common controls mandatory

## Fields (legacy → Linm)

| Legacy | type | zone | Control | Linm SSOT |
|--------|------|------|---------|-----------|
| textfield-1031-inputEl | text | toolbar | Text | TextField · common-field-control |
| ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$CurrentPassword | password | footer | Text | TextField · common-field-control |
| ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$NewPassword | password | footer | Text | TextField · common-field-control |
| ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$ConfirmNewPassword | password | footer | Text | TextField · common-field-control |
| ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$ChangePasswordPushButton | submit | footer | Text | TextField · common-field-control |


## Actions / buttons (legacy → toolbar MFE)

| Legacy label | kind | zone | Demo button | Linm SSOT |
|--------------|------|------|-------------|-----------|
| Ban.TK.Nguyễn Anh Phúc | nav | toolbar | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Thêm tag | create | grid | Tạo mới / Thêm | Button primary · catalog/voucher toolbar |
| Hồ sơ của tôi | nav | grid | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Đổi mật khẩu | nav | grid | Điều hướng | MemoryRouter / navigate · mfe-run-modes |
| Đăng xuất | export | grid | Xuất Excel | export-excel · toolbar |
| Đổi mật khẩu | submit | footer | Lưu | Button primary · form-api-error-handling toast |
| VỀ TRANG CHỦ | nav | footer | Điều hướng | MemoryRouter / navigate · mfe-run-modes |


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
- Capture raw: `_raw/legacy-govone/features/users.md`
