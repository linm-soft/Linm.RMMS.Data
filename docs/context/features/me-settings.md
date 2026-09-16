# Cài đặt — Feature Context (mobile sheet)

> **Slug:** `me-settings` · **Module:** Mobile shell / Me · **Phase:** P1  
> **Status:** sa **confirmed** → team-lead · **sourceKind:** entry `#sc-me` `row-settings` toast + OS permission copy · Design dual `#sc-me-settings` · SA local/OS only  
> **Kind:** **sheet** (STATUS / `_form-type-mobile`) · surface = full screen `#sc-me-settings` · **cấm** web Kind A–G / Lin* list / ERP.*  
> **Sources:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-me` row gear · peer `me.md` · `me-profile.md` · deny copy GPS/Camera · Home privacy static  
> **Demo entry:** `#sc-me` `toast('Cài đặt')` · pack prototype `specs/me-settings/ui/prototype/{ios,android}/index.html` (Design)  
> **API host:** **không** BFF settings path · **cấm invent** `api/v1/me-settings` / preferences · **cấm ERP.***

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Màn **Cài đặt**: mở quyền hệ thống (Vị trí · Camera · Thông báo) · phiên bản app · chính sách · shortcut hàng đợi offline — **không** hồ sơ / đổi MK / đăng xuất / inbox thông báo |
| Persona | Tuần đường · Hạt · hiện trường (tab Tôi) |
| App hiện có | Hub `me` live · hàng `row-settings` = toast `me.row.settings` cả 2 OS · **chưa** `#sc-me-settings` |
| DoD | Dual SwiftUI + Compose · push từ `row-settings` · OS openAppSettings · version Bundle · privacy reuse home · back `me` |
| Align | Native only · **cấm** `mfeStdUrl` · **cấm** gộp `me-profile` / `login-logout` / `ops` / web `users` |
| API | **P1 = local / OS / Bundle** — **không** Auth/RMMS settings controller |

## 2. Design / UI (`#sc-me-settings` · `DES-MOB-ME-SETTINGS`)

Greenfield — **chưa** có HTML `#sc-me-settings` trên mobile-p1. ControlHint khóa từ entry hub + deny-modal copy + Home privacy. Design **bắt buộc** dual prototype trước Approve.

| Zone | Copy VN (đề xuất · Design chốt) | Ghi |
|------|----------------------------------|-----|
| Nav back | Tôi | `go('me')` · iOS label · Android icon-btn |
| Title | Cài đặt | fixed · `#i-gear` motif entry |
| sectionPerm | Quyền ứng dụng | SectionLabel |
| rowLocation | Vị trí | ListRow · status phụ từ OS · tap → openAppSettings |
| rowCamera | Camera | ListRow · status phụ từ OS · tap → openAppSettings |
| rowNotifyOs | Thông báo hệ thống | ListRow · tap → openAppSettings · **≠** inbox `ops` |
| btnOpenOs | Mở Cài đặt hệ thống | Secondary/Primary · cùng deep-link OS |
| sectionSync | Đồng bộ | SectionLabel |
| rowOffline | Hàng đợi mất sóng | ListRow nav · `reuse=patrol-offline` · **cấm** enqueue |
| sectionAbout | Thông tin | SectionLabel |
| appVersion | Phiên bản | Text display · Bundle/versionName · **không** API |
| rowPrivacy | Chính sách quyền riêng tư | ListRow · reuse copy `home.privacy.*` · **cấm** invent landing URL |

**Entry parent (`#sc-me`):** hàng **Cài đặt** · `#i-gear` · iOS chevron · Android **không** chevron (peer GAP-MOB-UX-04b) · `go('me-settings')` (thay toast).

**Cấm:** watermark Gói · invent preference API · gộp Hồ sơ / Đăng xuất / Góp ý / Camera xem / inbox Thông báo · `UIAlert` / `AlertDialog`.

## 3. API (cấm invent)

Base app: `{BffBase}/mobile-bff/api/v1` — **slug này không gọi** settings resource.

| Method | `{BffPrefix}` path | Host | Mobile P1 |
|--------|--------------------|------|-----------|
| — | — | OS Settings URL / App details | **yes** — openAppSettings |
| — | — | Bundle `CFBundleShortVersionString` / `versionName` | **yes** — display |
| — | — | `LinmCopy` `home.privacy.*` | **yes** — reuse static |
| GET | `auth/profile` | Auth | **OUT** — owner `me` / `me-profile` |
| GET | `ops/*` / messages | — | **OUT** — owner `ops` |
| POST | `auth/logout` | Auth | **OUT** — `login-logout` |
| * | `api/v1/me-settings` · `preferences` · `device-settings` | — | **cấm invent** |

## 4. Database

**Không** entity settings P1. **Step 4b / migration:** **cấm** ở `data_analy`.

## 5. Action tree

1 nút = 1 feature. Owner `me-settings` = `#sc-me-settings`. Entry từ `me` `row-settings`.  
**Không** enqueue openAppSettings / version / privacy (cùng slug · local).  
**Không** enqueue `patrol-offline` (`reuse`).  
**Không** gộp `me-profile` · `ops` · `login-logout` · `feedback` · `cam-view`.

## 6. Gaps

| ID | Question | Default |
|----|----------|---------|
| GAP-MOB-MESET-DEMO-01 | Chưa có `#sc-me-settings` dual HTML | Design tạo dual prototype + reviewUrl trước Approve |
| GAP-MOB-MESET-OS-01 | Deep-link OS khác iOS/Android | iOS `UIApplication.openSettingsURLString` · Android `ACTION_APPLICATION_DETAILS_SETTINGS` · **cấm** fake success |
| GAP-MOB-MESET-STATUS-01 | Đọc trạng thái quyền OS | Display phụ «Đã cấp / Chưa cấp / Không xác định» từ OS API · **không** BFF |
| GAP-MOB-MESET-PRIVACY-01 | Privacy URL Store | Reuse static `home.privacy.body` · URL HTTPS khi khách giao — **không** invent |
| GAP-MOB-MESET-API-01 | Preference sync server | **P1 skip** · **cấm invent** path |

## 7. Cấm

- ERP.WebService / Domains/Master · invent `api/v1/me-settings` / `preferences` / push-token register trên slug này  
- `mfeStdUrl` · `yarn start:std` · WebView HTML demo  
- Gộp Hồ sơ / Đổi MK / Đăng xuất / inbox Thông báo / Góp ý vào slug này  
- Fake toast «Đã lưu cài đặt» khi không có write API  
- `UIAlert` / `AlertDialog`

## 8. Version meta

| Field | Value |
|-------|-------|
| feature | `me-settings` |
| packKind | `sheet` |
| generatedAt | `2026-08-30T20:11:00.000Z` |
| taskId | `task_43c37168` |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-08-30T21:06:53.274Z` |
