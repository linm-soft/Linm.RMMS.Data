# Action tree — QLBD mobile (kind `shell`)

| | |
|---|---|
| skill | `scan-qlbd-form-type-mobile` |
| product | `Linm.RMMS.Data` |
| kind | `shell` |
| run_mode | `pilot_one` |
| queue | `qlbd-mobile` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| generated | 2026-08-18T16:48:00.000Z |

## Tree — login (pilot)

```
login                         ← kind=shell · màn Đăng nhập · PILOT
├── login-forgot              ← link Quên mật khẩu?
└── login-logout              ← hàng Đăng xuất trên Tôi
```

Tab 5 (`DES-MOB-TABBAR`) = chrome shell → **không** enqueue (nav sang hub/list đã có slug).  
Home 6 ô = kind `hub` → ngoài scan `shell`.

## Rows

| feature | parent | action | demoRel | kind | prior | notes |
|---------|--------|--------|---------|------|-------|-------|
| `login` | — | Đăng nhập | `ios`/`android` `#sc-login` · `DES-MOB-LOGIN` | shell | **new** · **PILOT** | Brand = app logo `assets/app-logo.png` ← `logo/mobile` AppIcon 1024 · **cấm** `rmms.png` |
| `login-forgot` | `login` | Quên mật khẩu? | `#sc-login` `.login-meta a` | shell | **pending_confirm** | Hyperlink · route/màn mới · **không** submit · sibling_assign |
| `login-logout` | `login` | Đăng xuất | `#sc-me` row Đăng xuất | shell | new | `POST …/auth/logout` |
| `shell-tabs` | — | Tab 5 | `DES-MOB-TABBAR` | shell | skip | Nav chrome · child = home / patrol / incident / maintenance / me |

## Chrome (không enqueue)

| Control | Lý do |
|---------|--------|
| Hiện/ẩn mật khẩu | Field chrome |
| Back / Close | Chrome |
| Tín hiệu · bản Gói 1 | Meta · **cấm** «Có mạng» |

<!-- Version meta: skillId=scan-qlbd-form-type-mobile schemaVersion=1 -->
