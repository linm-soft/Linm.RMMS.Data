# Action tree — QLBD mobile (kind `hub` + `shell`)

| | |
|---|---|
| skill | `scan-qlbd-form-type-mobile` |
| product | `Linm.RMMS.Data` |
| kind | `hub` (scan 2026-08-19) · `shell` (scan 2026-08-18) |
| run_mode | `pilot_one` |
| queue | `qlbd-mobile` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| generated | 2026-08-19T01:35:00.000Z |

## Tree — me / Tôi (pilot hub)

```
me                            ← kind=hub · tab Tôi · DES-MOB-ME · PILOT
├── me-profile                ← hàng Hồ sơ · iOS chevron · **không** go() · gap
├── patrol-offline            ← Hàng đợi mất sóng · go('patrol-offline')
├── me-signal                 ← Tín hiệu · chrome kit · skip
├── feedback                  ← Góp ý · go('feedback')
├── cam-view                  ← Camera xem · go('cam-view')
├── ops                       ← Thông báo · go('ops')
├── me-settings               ← Cài đặt · iOS toast · Android thiếu · gap
└── login-logout              ← Đăng xuất · reuse=login-logout
```

Tab 5 (`DES-MOB-TABBAR`) = chrome shell → **không** enqueue.  
Home `.hero-ico` Hồ sơ `go('me')` = nav vào hub này (`LinmProfileButton`) — **không** slug mới.

## Tree — login (shell · đã scan)

```
login                         ← kind=shell · màn Đăng nhập
├── login-forgot              ← link Quên mật khẩu?
└── login-logout              ← hàng Đăng xuất trên Tôi
```

## Rows — hub `me`

| feature | parent | action | demoRel | kind | prior | share | reuse | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|-------|-------|---------|--------|
| `me` | — | Tab Tôi / Hồ sơ | `#sc-me` · `DES-MOB-ME` | hub | **new** · **PILOT** | unique | — | `.large-title` · `LinmLargeTitle` | tabbar `me` · home `.hero-ico` |
| `me-profile` | `me` | Hàng tên / Hồ sơ | `#sc-me` row person · iOS `.chev` | sheet | gap | unique | — | `.list` / `.row` · `LinmListRow` | me |
| `patrol-offline` | `me` | Hàng đợi mất sóng | `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` | list | new | shared_action | — (owner) | `.list` · `LinmListRow` · `#i-sync` | home tile Lưu trữ · patrol nav · me |
| `me-signal` | `me` | Tín hiệu | `#sc-me` `data-net-signal` | — | skip | shared_kit | — | `.role` + `data-net-signal` · `LinmStatusCapsule` | me · home hero |
| `feedback` | `me` | Góp ý | `#sc-feedback` · `DES-MOB-FEEDBACK` | sheet | new | unique | — | `.list` · `LinmListRow` · `#i-info` | me |
| `cam-view` | `me` | Camera xem | `#sc-cam-view` · `DES-MOB-CAM-VIEW` | sheet | new | unique | — | `.list` · `LinmListRow` · `#i-video` | me |
| `ops` | `me` | Thông báo | `#sc-ops` · `DES-MOB-OPS` | list | new | shared_action | — (owner) | `.hero-ico` + badge · `LinmNotifyButton` · `#i-bell` | home `.vn-hero-tools` · me |
| `me-settings` | `me` | Cài đặt | iOS toast only · Android **thiếu** row | sheet | gap | unique | — | `.list` · `LinmListRow` · `#i-gear` | me (iOS) |
| `login-logout` | `me` | Đăng xuất | `#sc-me` `logout()` | shell | skip | shared_action | `login-logout` | `.btn-skip` · `LinmSecondaryButton` | me · login |

## Rows — shell (giữ)

| feature | parent | action | demoRel | kind | prior | share | reuse | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|-------|-------|---------|--------|
| `login` | — | Đăng nhập | `#sc-login` · `DES-MOB-LOGIN` | shell | done | unique | — | `.btn-ok` · `LinmPrimaryButton` | auth |
| `login-forgot` | `login` | Quên mật khẩu? | `#sc-login` `.login-meta a` | shell | done | unique | — | hyperlink | login |
| `login-logout` | `login` | Đăng xuất | `#sc-me` row Đăng xuất | shell | new | shared_action | — (owner) | `.btn-skip` · `LinmSecondaryButton` | me |
| `shell-tabs` | — | Tab 5 | `DES-MOB-TABBAR` | shell | skip | shared_kit | — | `.tabbar` · `TabView` / `NavigationBar` | app |

## Chrome (không enqueue)

| Control | Lý do |
|---------|--------|
| Tab 5 · nút Tôi | `shell-tabs` · `shared_kit` `.tabbar` |
| Home profile circle | `LinmProfileButton` · nav `me` |
| Tín hiệu / wifi bars | `LinmStatusCapsule` · **cấm** «Có mạng» |
| Badge số thông báo | `LinmNotifyCountBadge` |
| Back / Close / chevron Up | Chrome |
| Submit Gửi trên `#sc-feedback` | Thuộc slug `feedback` |

<!-- Version meta: skillId=scan-qlbd-form-type-mobile schemaVersion=1 -->
