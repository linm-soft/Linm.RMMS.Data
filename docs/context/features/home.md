# Trang Chủ — Feature Context (mobile hub)

> **Slug:** `home` · **Module:** Mobile shell / launcher · **Phase:** P1  
> **Status:** Native dual · **sourceKind:** prototype `DES-MOB-HOME`  
> **Kind:** **hub** — tab **Trang Chủ** · **cấm** web Kind A–G / Lin* list / ERP.* · **≠** `dashboard.md` (web KPI)  
> **Sources:** `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-home` · scan `specs/_form-type-mobile/ACTION-TREE.md` · Auth `GET auth/profile`  
> **Demo:** `#sc-home` · pack `specs/home/ui/prototype/{ios,android}/index.html`  
> **API host:** `{BffPrefix}=mobile-bff/api/v1` · **cấm ERP.*** · **cấm** invent path

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Hub **Trang Chủ**: chào tên phiên · quick actions · lưới nghiệp vụ · ví tuyến → sibling packs |
| Persona | Tuần đường · Hạt · hiện trường |
| App hiện có | Tab 5 chrome (`shell-tabs`) · Auth login live · **chưa** màn `#sc-home` (placeholder) |
| DoD | Dual SwiftUI + Compose · kit `LinmHeroTools` / `LinmQuickActions` / `LinmHomeGrid` / `LinmWalletCard` · GET `auth/profile` · **không** gộp màn sibling |
| Align | Native only · **cấm** `mfeStdUrl` |
| API | `GET auth/profile` (Auth NuGet) · badge/notify/queue API = sibling `ops` / `patrol-offline` |

## 2. Design / UI (`#sc-home`)

| Zone | Copy VN | Ghi |
|------|---------|-----|
| Hero tools | Hồ sơ · Thông báo (+ badge) | `LinmHeroTools` · `go('me')` · `go('ops')` |
| Role + tín hiệu | Khu QLĐB IV · `data-net-signal` | Role demo mock · tín hiệu `shared_kit` · **cấm** «Có mạng» |
| Who | Tên người dùng | Live `fullName` từ `auth/profile` · demo «Nguyễn Văn A» |
| Quick | Điểm tuần · Ghi sự cố | `LinmQuickActions` → `patrol-home` · `incident-create` |
| Section | Nghiệp vụ thường dùng | `LinmSectionLabel` · không route |
| Grid 6 ô | Giám sát · Tuần đường · Công việc · Vấn đề · Tài sản · Lưu trữ | `LinmHomeGrid` / `LinmHomeTile` |
| Wallet | HỒ SƠ TÀI SẢN · QL.1 · Khu IV | `LinmWalletCard` → `asset-hub` · copy demo **không** invent wallet API |
| Foot | Phiên bản Gói 1… | Watermark / process · **cấm** ship · `demo-to-real-mobile.md` |
| Tab | Trang Chủ | `DES-MOB-TABBAR` chrome · **không** enqueue |

iOS + Android `#sc-home` **parity** (dual copy) — không lệch chrome như `me` settings.

## 3. API (cấm invent)

| Method | `{BffPrefix}` path | Host | Thuộc slug |
|--------|--------------------|------|------------|
| GET | `auth/profile` | Auth NuGet `GetProfile` → `users/me` | **`home`** (display `.who`) |
| GET | `notification/inbox` (+ unread) | proxy → Notification | sibling **`ops`** — badge hero |
| — | `patrol/*` · `incident/*` · `maintenance/*` · `asset/*` | proxy | sibling packs — **không** gọi turn `home` |
| — | wallet / route card / «QL.1 · Khu IV» | **không** controller home | demo copy · ẩn hoặc static placeholder **không** invent |

DTO profile (Auth): `UserProfileResponseDto` — `Id` · `PhoneNumber` · `FullName` · …  
«Khu QLĐB IV» / wallet «QL.1 · Khu IV» trên HTML = **mock demo** — live **không** bịa org/route API trên slug `home`.

## 4. Action tree (1 nút = 1 feature)

Xem `specs/_data-analy/home-action-tree.md`. Hub `home` **không** implement màn sibling.

## 5. Gaps

| ID | Default |
|----|---------|
| GAP-F-HOME-01 Org/role / wallet live | **Không invent** — role + wallet copy demo hoặc ẩn; PO/SA sibling khi có route |
| GAP-F-HOME-02 Notify badge count | Owner `ops` · hub chỉ tap → toast hoặc nav stub theo pack scope |
| GAP-F-HOME-03 Foot watermark | **Cấm** implement «Phiên bản Gói N» |

## 6. Cấm

- ERP.WebService / Domains/Master · fork AuthController  
- WebView HTML demo · `mfeStdUrl` · `yarn start:std`  
- Gộp Giám sát / Tuần đường / Công việc / Vấn đề / Tài sản / Lưu trữ / Ghi sự cố vào slug `home`  
- Watermark «bản Gói N» · «Có mạng» · device label trên title  
- `UIAlert` / `AlertDialog` · gộp với web `dashboard.md`
