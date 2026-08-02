# AI Vision — QUẢN TRỊ PHÂN QUYỀN › Đổi mật khẩu

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `020-quan-tri-phan-quyen-oi-mat-khau` |
| **slug** | `users` |
| **url** | https://pmdb.govone.vn/gclient/gadmin/doimatkhau.aspx |
| **screenshot** | `screenshots/020-quan-tri-phan-quyen-oi-mat-khau.png` |
| **DOM fields** | 4 |
| **DOM labels** | 3 |
| **DOM buttons** | 2 |

## DOM inventory (đã capture)

### Labels
- MẬT KHẨU CŨ
- MẬT KHẨU MỚI
- XÁC NHẬN MẬT KHẨU MỚI

### Buttons / actions
- Đổi mật khẩu
- VỀ TRANG CHỦ

### Inputs

| tag | type | name/id |
|-----|------|---------|
| input | password | ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$CurrentPassword |
| input | password | ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$NewPassword |
| input | password | ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$ConfirmNewPassword |
| input | submit | ctl00$mainContent$ChangePassword1$ChangePasswordContainerID$ChangePasswordPushButton |

## Analysis (AI điền)

### Màn hình / mục đích

_(TODO AI)_

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| Header | | |
| Filter / toolbar | | |
| Grid / map / content | | |
| Footer / actions | | |

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| | | | |

### Tính năng / hành động

- 

### Map → step context

- Feature: `docs/context/features/users.md`
- Section: `## Legacy GOVOne (auto-capture)`
- Demo: parity UI trong `*-demo.html`

## Status

- [ ] Vision reviewed
- [ ] Mapped to step context
