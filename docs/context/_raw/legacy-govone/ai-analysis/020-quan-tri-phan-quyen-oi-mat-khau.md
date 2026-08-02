# AI Vision — QUẢN TRỊ PHÂN QUYỀN › Đổi mật khẩu

> Autogen. Agent **phải** mở ảnh + điền mục Analysis. Không chứa password.

| | |
|---|---|
| **id** | `020-quan-tri-phan-quyen-oi-mat-khau` |
| **slug** | `users` |
| **url** | https://pmdb.govone.vn/gclient/gadmin/doimatkhau.aspx |
| **screenshot** | `screenshots/020-quan-tri-phan-quyen-oi-mat-khau.png` |
| **DOM fields** | 4 → **4** (3 password + 1 submit; vision confirms) |
| **DOM labels** | 3 → **4** (vision-enriched: + policy hint) |
| **DOM buttons** | 2 → **2** (Đổi mật khẩu · VỀ TRANG CHỦ) |

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

> Vision reviewed: 2026-08-02 · ai-autocode autopilot · screenshot `020-quan-tri-phan-quyen-oi-mat-khau.png`

### Màn hình / mục đích

Màn **Đổi mật khẩu** — page ASP.NET Membership riêng (`gclient/gadmin/doimatkhau.aspx`), drill từ user menu **QUẢN TRỊ PHÂN QUYỀN › Ban.TK.… › Đổi mật khẩu**.  
Capture path: `capture/users/oi-mat-khau/view/` · kind page/action · pageTitle **Đổi mật khẩu - gServer Phiên bản 2.1** · inventory id `020`.  

Ảnh: **form card trắng căn giữa** trên nền promo GOVOne (laptop map + phone list — **không** phải shell quản trị ExtJS). Không header app-bar · không sidebar · không map chrome · không grid.  

**Mục đích capture `› Đổi mật khẩu`:** (1) ghi nhận form đổi MK 3 field password + policy hint · (2) submit **Đổi mật khẩu** (`ChangePasswordPushButton`) · (3) nav **VỀ TRANG CHỦ** · (4) giữ parity action user-menu từ shell quản trị (`017`/`019`) sang form account.  

Kind: **A (form/auth account) — ChangePassword** → demo MFE: modal/page **Đổi mật khẩu** = 3 PasswordField + submit + cancel/home theo `/erp-form-context` (User menu → ChangePassword) — **không** clone skin GOVOne · **không** embed map/list nền promo.  
Upstream: user menu `017`/`019-ban-tk…` (nav **Đổi mật khẩu**). Sibling domain: `009-quan-ly-giam-sat-oi-mat-khau` (cùng URL/form, slug `patrol`). Downstream: sau submit thành công → toast/success · **VỀ TRANG CHỦ** → home/dashboard.  
Domain: account security · bind `CurrentPassword` / `NewPassword` / `ConfirmNewPassword` → API đổi MK (demo mock · không lưu plaintext) · policy ≥8 ký tự · ≥1 chữ · ≥1 số.

### Vùng UI (layout zones)

| Zone | Mô tả | Controls thấy trên ảnh |
|------|-------|------------------------|
| **Z1 Background (promo)** | Nền full-bleed ảnh thiết bị GOVOne — **không** interactive shell | Laptop map (markers xanh/cam/đỏ · Mỹ Lộc / Nam Định) · phone tab **Bản đồ** / **Danh sách (48)** · bottom nav mobile — chỉ decor, **không** map sang control quản trị |
| **Z2 Form header** | Tiêu đề card giữa | **Đổi mật khẩu** (heading centered) |
| **Z3 Form fields** | 3 hàng label trái + password input phải | **MẬT KHẨU CŨ** · **MẬT KHẨU MỚI** · **XÁC NHẬN MẬT KHẨU MỚI** — input type=password (masked) · DOM `CurrentPassword` / `NewPassword` / `ConfirmNewPassword` |
| **Z4 Policy hint** | Text chú ý dưới fields | **Chú ý: Mật khẩu yêu cầu tối thiểu 8 ký tự, ít nhất 1 chữ và 1 số** |
| **Z5 Footer actions** | 2 nút đen cạnh nhau dưới form | **ĐỔI MẬT KHẨU** (submit primary · DOM `ChangePasswordPushButton`) · **VỀ TRANG CHỦ** (nav/link) |

**Không có trên ảnh:** app header · sidebar quản trị · filter · grid · map chrome · splitter · user avatar dropdown · Thêm tag / Phân quyền.

### Field list (từ ảnh — bổ sung DOM)

| Nhãn VN | Control gợi ý | Bắt buộc? | Ghi chú |
|---------|---------------|-----------|---------|
| MẬT KHẨU CŨ | PasswordField | Có | DOM `…$CurrentPassword` · autocomplete current-password · Z3 |
| MẬT KHẨU MỚI | PasswordField | Có | DOM `…$NewPassword` · policy Z4 · autocomplete new-password |
| XÁC NHẬN MẬT KHẨU MỚI | PasswordField | Có | DOM `…$ConfirmNewPassword` · phải khớp MK mới |
| Policy hint | HelperText / FormHint | — | Ảnh: tối thiểu 8 ký tự · ≥1 chữ · ≥1 số — validate client + server |
| Đổi mật khẩu | SubmitButton | — | DOM submit `ChangePasswordPushButton` · Z5 primary |
| VỀ TRANG CHỦ | NavLink / Button secondary | — | DOM action nav footer · rời form về home |

**Grid columns:** **không có** (form account · `tableHeaders: []`). Không map cột quản trị đoạn đường.

**Validation / submit semantics (parity demo / API):**
- Client: required 3 field · `newPassword.length ≥ 8` · có chữ + số · `confirmPassword === newPassword`
- Submit **Đổi mật khẩu** → POST change-password (demo: toast mock «Đổi mật khẩu (mock) — không gọi BE» · clear fields · **không** lưu plaintext)
- Sai MK cũ / policy fail → banner/error trên form (demo `#pwdBanner`)
- **VỀ TRANG CHỦ** → navigate home; nếu dirty → leave-confirm (demo `leaveModal`) theo `/erp-form-context` dirty guard
- **Không** clone ASP.NET Membership control IDs trên UI MFE — chỉ parity action/field

### Tính năng / hành động

**Primary — Đổi mật khẩu `020` (account form drill từ QUẢN TRỊ PHÂN QUYỀN)**
- Upstream: shell quản trị user menu → **Đổi mật khẩu** (`017`/`019`) → navigate `doimatkhau.aspx`
- Ảnh: form 3 password + policy + 2 footer actions · nền promo (ignore cho MFE)
- Click **ĐỔI MẬT KHẨU** → validate → submit change password
- Click **VỀ TRANG CHỦ** → nav home / đóng flow
- Remap đúng: **Đổi mật khẩu** (submit) = form submit · **VỀ TRANG CHỦ** = navigate home / close modal — **không** map thành Create CRUD · **không** map nền promo thành MapPane
- Downstream / sibling: `009-patrol` cùng form · users feature SSOT · demo `pwdModal` trong `users.html` / integration demo
- Demo parity: UserMenu → open ChangePassword modal/page · 3 PasswordField · policy hint · submit + close/home · modern `/erp-form-context` — **không** clone GOVOne

**Form fields / actions (ảnh + DOM) — đầy đủ**
- Nhập **MẬT KHẨU CŨ**
- Nhập **MẬT KHẨU MỚI**
- Nhập **XÁC NHẬN MẬT KHẨU MỚI**
- Đọc policy hint (≥8 · chữ · số)
- **Đổi mật khẩu** (submit)
- **VỀ TRANG CHỦ** (nav)

**Actions bổ sung từ sibling (không trên ảnh form — giữ control-map)**  
User menu open (`017`/`019`): **Hồ sơ của tôi** · **Đổi mật khẩu** (nav vào form này) · **Đăng xuất** · shell quản trị root `006`/`016`/`018` · Thêm tag — giữ trong `users-actions.md` / control-map.  
Cross-slug: cùng page capture dưới `patrol` id `009`.

### Map → step context

- Feature: `docs/context/features/users.md`
- Section: `## Legacy GOVOne (auto-capture)` → capture id `020-quan-tri-phan-quyen-oi-mat-khau`
- Control-map: `docs/context/_raw/legacy-govone/demo-maps/users-control-map.md`
- Actions: `docs/context/_raw/legacy-govone/demo-maps/users-actions.md`
- Demo: parity UI trong `users.html` / integration demo · MFE — same actions (**Đổi mật khẩu** submit · 3 password fields · policy ≥8+chữ+số · **VỀ TRANG CHỦ**/Đóng · dirty leave), modern `/erp-form-context` User menu ChangePassword (không clone GOVOne · không promo background)
- **DOM / bind:** `CurrentPassword` · `NewPassword` · `ConfirmNewPassword` · `ChangePasswordPushButton` · VỀ TRANG CHỦ → PasswordField×3 + SubmitButton + NavButton (Kind A account; shell feature Kind B)
- **Capture path:** `capture/users/oi-mat-khau/view/` (master/page/action) · page id `020`
- Sibling: `017`/`019` (user menu) · `009-quan-ly-giam-sat-oi-mat-khau` (patrol slug, cùng URL) · root quản trị `006`/`016`/`018`

## Status

- [x] Vision reviewed
- [x] Mapped to step context
