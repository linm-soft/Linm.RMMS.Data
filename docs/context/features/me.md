# Tôi / Hồ sơ — Feature Context (mobile hub)

> **Slug:** `me` · **Module:** Mobile shell / Auth profile · **Phase:** P1  
> **Status:** Native dual · **sourceKind:** prototype `DES-MOB-ME`  
> **Kind:** **hub** — tab **Tôi** · **cấm** web Kind A–G / Lin* list / ERP.*  
> **Sources:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` · scan `specs/_form-type-mobile/ACTION-TREE.md` · Auth `GET auth/profile`  
> **Demo:** `#sc-me` · pack `specs/me/ui/prototype/{ios,android}/index.html`  
> **API host:** `{BffPrefix}=mobile-bff/api/v1` · **cấm ERP.*** · **cấm** invent path

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Hub **Tôi**: hiện tên phiên · hàng điều hướng sibling · Đăng xuất (reuse `login-logout`) |
| Persona | Tuần đường · Hạt · hiện trường |
| App hiện có | Tab 5 chrome (`shell-tabs`) · Auth login live · **chưa** màn `#sc-me` |
| DoD | Dual SwiftUI + Compose · kit `LinmLargeTitle` + `LinmListRow` · GET `auth/profile` · logout local |
| Align | Native only · **cấm** `mfeStdUrl` |
| API | `GET auth/profile` (Auth NuGet) · logout POST = slug `login-logout` **không** gộp |

## 2. Design / UI (`#sc-me`)

| Zone | Copy VN | Ghi |
|------|---------|-----|
| Large title | Tôi | `LinmLargeTitle` |
| Hàng hồ sơ | Tên + phụ (chức danh · đơn vị) | Display · iOS chevron · **không** `go()` → slug `me-profile` gap **không** enqueue |
| Đồng bộ | Hàng đợi mất sóng · Tín hiệu | Queue → `patrol-offline` · tín hiệu chrome `shared_kit` |
| Cập nhật thông tin | Góp ý · Camera xem · Thông báo · Cài đặt (iOS) · Đăng xuất | Sibling route / reuse logout |
| Tab | Tôi | `DES-MOB-TABBAR` chrome · **không** enqueue |

Android **không** hàng Cài đặt (demo SSOT). iOS Cài đặt = toast · **không** màn → **không** enqueue `me-settings`.

## 3. API (cấm invent)

| Method | `{BffPrefix}` path | Host | Thuộc slug |
|--------|--------------------|------|------------|
| GET | `auth/profile` | Auth NuGet `GetProfile` → `users/me` | **`me`** (display tên) |
| POST | `auth/logout` | Auth NuGet | **`login-logout`** — **cấm** gọi turn `me` |
| GET | `contract-accounts/session-window` | RMMS Contract | `login` (đã có) |
| — | `api/v1/integration/users/{id}` | RMMS admin | pack `users` — **không** current-user |
| — | `ops/*` · `feedback/*` bare | **không** controller | sibling `ops` / `feedback` |

DTO profile (Auth Models): `UserProfileResponseDto` — `Id` · `PhoneNumber` · `FullName` · `CitizenId` · `DateOfBirth?`.  
Phụ đề «Tuần đường · Văn phòng…» trên HTML = **mock demo** — live **không** bịa; thiếu field → ẩn subtitle (slug `me-profile` / `users`).

## 4. Action tree (1 nút = 1 feature)

Xem `specs/_data-analy/me-action-tree.md`. Hub `me` **không** implement màn sibling.

## 5. Gaps

| ID | Default |
|----|---------|
| GAP-F-ME-01 Profile org/role | **Không invent** RMMS `users/me` — subtitle live chỉ khi CTX có field; còn lại ẩn |
| GAP-F-ME-02 Logout POST | Slug `login-logout` · hub dùng `LogoutUseCase` local (parity login Home `btn-logout`) |
| GAP-F-ME-03 Queue / notify count | Badge 0 ẩn · owner `patrol-offline` / `ops` |

## 6. Cấm

- ERP.WebService / Domains/Master · fork AuthController  
- WebView HTML demo · `mfeStdUrl` · `yarn start:std`  
- Gộp Góp ý / Camera / Thông báo / Hàng đợi / Đổi MK vào slug `me`  
- Watermark «bản Gói N» · «Có mạng» · device label trên title  
- `UIAlert` / `AlertDialog`
