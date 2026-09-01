# Hồ sơ — Feature Context (mobile sheet)

> **Slug:** `me-profile` · **Module:** Auth profile · **Phase:** P1  
> **Status:** Draft → data_analy · **sourceKind:** entry `#sc-me` row-profile + Auth BFF · Design sẽ tạo `#sc-me-profile`  
> **Kind:** **sheet** (STATUS / `_form-type-mobile`) · surface = full screen `#sc-me-profile` · **cấm** web Kind A–G / Lin* list / ERP.*  
> **Sources:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` row person · peer `me.md` · `users.md` § Hồ sơ · Auth NuGet `GetProfile` / `UpdateProfile` / `ChangePassword` · Mobile.Bff OpenAPI overlay  
> **Demo entry:** `#sc-me` `row-profile` · pack prototype `specs/me-profile/ui/prototype/{ios,android}/index.html` (Design)  
> **API host:** `{BffPrefix}=mobile-bff/api/v1` · Auth package rewrite · **cấm ERP.*** · **cấm** invent `api/v1/me-profile` / `users/me` RMMS

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Hồ sơ**: xem / sửa tên · SĐT · email phiên · đổi mật khẩu Auth — **không** admin users |
| Persona | Tuần đường · Hạt · hiện trường (tab Tôi) |
| App hiện có | Hub `me` live · hàng `row-profile` **no-op** (iOS `break` · Android `Unit`) · **chưa** `#sc-me-profile` |
| DoD | Dual SwiftUI + Compose · GET+PUT `auth/profile` · POST `auth/change-password` · back `me` · wire entry thay no-op |
| Align | Native only · **cấm** `mfeStdUrl` · **cấm** gộp `me-settings` / `login-logout` / web `users` admin |
| API | Auth NuGet qua Mobile.Bff rewrite · DTO overlay `MobileAuthUser` / `MobileAuthProfileUpdateRequest` / `MobileAuthChangePasswordRequest` |

## 2. Design / UI (`#sc-me-profile` · `DES-MOB-ME-PROFILE`)

Greenfield — **chưa** có HTML `#sc-me-profile` trên mobile-p1. ControlHint khóa từ Auth live + entry hub + legacy «Hồ sơ của tôi». Design **bắt buộc** dual prototype trước Approve.

| Zone | Copy VN (đề xuất · Design chốt) | Ghi |
|------|----------------------------------|-----|
| Nav back | Tôi | `go('me')` · iOS label · Android icon-btn |
| Title | Hồ sơ | fixed |
| Avatar / leading | person circle | display · `#i-person` · **không** upload P1 |
| fullName | Họ và tên | TextField · required · bind GET/PUT |
| phoneNumber | Số điện thoại | TextField phone · bind GET/PUT |
| email | Email | TextField · bind PUT · GET thiếu → empty + GAP |
| userName / id | Tên đăng nhập / Id | Text display readonly · **không** PUT |
| citizenId | CCCD/CMND | Text display **chỉ nếu** GET trả · **không** PUT (không field UpdateRequest) |
| btnSave | Lưu | Primary · PUT `auth/profile` · toast «Đã cập nhật hồ sơ» |
| sectionPwd | Đổi mật khẩu | SectionLabel |
| currentPassword | Mật khẩu hiện tại | SecureField |
| newPassword | Mật khẩu mới | SecureField |
| confirmPassword | Xác nhận mật khẩu mới | SecureField · **local only** · Auth body không có |
| btnChangePwd | Đổi mật khẩu | Secondary/Primary · POST `auth/change-password` · toast «Đã đổi mật khẩu» |

**Entry parent (`#sc-me`):** hàng tên + phụ · iOS chevron · Android **không** chevron · `#i-person` · `go('me-profile')` (thay no-op).

**Cấm:** watermark Gói · invent org/role subtitle API · admin CRUD · `UIAlert` / `AlertDialog`.

## 3. API (cấm invent)

Base app: `{BffBase}/mobile-bff/api/v1` → Auth package rewrite (`AuthPrefixRewriteMiddleware`) → Auth service `users/me` / profile / change-password.

| Method | `{BffPrefix}` path | Host | Mobile P1 |
|--------|--------------------|------|-----------|
| GET | `auth/profile` | Auth NuGet `GetProfile` · Authorize | **yes** — load form |
| PUT | `auth/profile` | Auth NuGet `UpdateProfile` | **yes** — Lưu |
| POST | `auth/change-password` | Auth NuGet `ChangePassword` | **yes** — Đổi MK |
| POST | `auth/logout` | Auth | **OUT** — `login-logout` / hub `me` |
| GET/PUT/POST | `integration/users*` | RMMS admin | **OUT** — web `users` |

### DTO (Mobile.Bff OpenAPI overlay + app decode)

**GET / response user:** `Id` · `FullName?` · `UserName?` · `PhoneNumber?` · (app decode thêm `CitizenId?` nếu Auth trả — **không** invent field UI khi null).

**PUT body `MobileAuthProfileUpdateRequest`:** `FullName?` · `PhoneNumber?` · `Email?`.

**POST change-password `MobileAuthChangePasswordRequest`:** `CurrentPassword` · `NewPassword` (**không** Confirm trên wire).

## 4. Database (reuse Auth — không migration)

| Entity | Notes |
|--------|-------|
| Auth `ApplicationUser` / profile | Identity + profile fields trên Auth service |
| RMMS `AppUser` | Org/contract — **không** bind subtitle org trên P1 nếu không có field live |

**Step 4b / migration:** **cấm** ở `data_analy` — Auth schema **DONE**.

## 5. Action tree

1 nút = 1 feature. Owner `me-profile` = `#sc-me-profile`. Entry từ `me` `row-profile`.  
**Không** enqueue Lưu / Đổi mật khẩu (cùng slug · `GAP-MOB-ACT-07`).  
**Không** gộp `me-settings` · `login-logout` · web `users` admin.

## 6. Gaps

| ID | Question | Default |
|----|----------|---------|
| GAP-MOB-MEPROF-DEMO-01 | Chưa có `#sc-me-profile` dual HTML | Design tạo dual prototype + reviewUrl trước Approve |
| GAP-MOB-MEPROF-EMAIL-01 | GET overlay `MobileAuthUser` **không** list Email · PUT có | Load empty email nếu GET thiếu · vẫn cho sửa PUT |
| GAP-MOB-MEPROF-ORG-01 | Subtitle «Tuần đường · Văn phòng…» demo hub | **Không invent** org/role API · ẩn phụ nếu không field live (peer GAP-F-ME-01) |
| GAP-MOB-MEPROF-CITIZEN-01 | `CitizenId` / `DateOfBirth` trên Auth Models · **không** trong UpdateRequest | Display-only nếu GET có · **cấm** PUT invent |
| GAP-MOB-MEPROF-CONFIRM-01 | Legacy 3 field đổi MK · Auth 2 field | Confirm = validate local · body chỉ `current`+`new` |

## 7. Cấm

- ERP.WebService / Domains/Master · invent `api/v1/me-profile` · `api/v1/users/me` RMMS  
- `mfeStdUrl` · `yarn start:std` · WebView HTML demo  
- Gộp Cài đặt / Đăng xuất / admin users vào slug này  
- Fake toast success khi PUT/POST fail · hardcode «Nguyễn Văn A» production  
- `UIAlert` / `AlertDialog`

## 8. Version meta

| Field | Value |
|-------|-------|
| feature | `me-profile` |
| packKind | `sheet` |
| generatedAt | `2026-08-30T18:03:00.000Z` |
| taskId | `task_c7b0196a` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-30T20:09:00.179Z` |
