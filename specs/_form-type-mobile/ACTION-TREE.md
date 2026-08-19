# Action tree — QLBD mobile (kind `hub` + `shell`)

| | |
|---|---|
| skill | `scan-qlbd-form-type-mobile` |
| product | `Linm.RMMS.Data` |
| kind | `hub` (scan 2026-08-19 home · me) · `shell` (scan 2026-08-18) |
| run_mode | `pilot_one` |
| queue | `qlbd-mobile` |
| demo | `specs/mobile-p1/ui/prototype/{ios,android}/index.html` |
| generated | 2026-08-19T01:55:00.000Z |

## Tree — home / Trang Chủ (pilot hub)

```
home                          ← kind=hub · tab Trang Chủ · DES-MOB-HOME · PILOT
├── me                        ← .hero-ico Hồ sơ · go('me') · reuse=me
├── ops                       ← .hero-ico Thông báo · go('ops') · reuse=ops
├── me-signal                 ← .role + data-net-signal · chrome kit · skip
├── patrol-home               ← quick Điểm tuần + tile Tuần đường · go('patrol-home')
├── incident-create           ← quick Ghi sự cố · startIncidentPick() → inc-form
├── supervise                 ← tile Giám sát · go('supervise')
├── mnt-list                  ← tile Công việc · go('mnt-list')
├── incident-list             ← tile Vấn đề · go('incident-list')
├── asset-hub                 ← tile Tài sản + wallet · go('asset-hub')
└── patrol-offline            ← tile Lưu trữ · go('patrol-offline') · reuse=patrol-offline
```

Tab 5 (`DES-MOB-TABBAR`) = chrome shell → **không** enqueue.  
Cùng `go()` trên 2 chỗ (quick + tile / tile + wallet) = **một** slug.

## Tree — me / Tôi (giữ)

```
me                            ← kind=hub · tab Tôi · DES-MOB-ME
├── me-profile                ← hàng Hồ sơ · iOS chevron · **không** go() · gap
├── patrol-offline            ← Hàng đợi mất sóng · go('patrol-offline')
├── me-signal                 ← Tín hiệu · chrome kit · skip
├── feedback                  ← Góp ý · go('feedback')
├── cam-view                  ← Camera xem · go('cam-view')
├── ops                       ← Thông báo · go('ops')
├── me-settings               ← Cài đặt · iOS toast · Android thiếu · gap
└── login-logout              ← Đăng xuất · reuse=login-logout
```

## Tree — login (shell · đã scan)

```
login                         ← kind=shell · màn Đăng nhập
├── login-forgot              ← link Quên mật khẩu?
└── login-logout              ← hàng Đăng xuất trên Tôi
```

## Rows — hub `home`

| feature | parent | action | demoRel | kind | prior | share | reuse | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|-------|-------|---------|--------|
| `home` | — | Tab Trang Chủ | `#sc-home` · `DES-MOB-HOME` | hub | **new** · **PILOT** | unique | — | `.vn-hero` · `.home-grid` · `LinmHomeGrid` · `LinmQuickActions` | tabbar `home` |
| `me` | `home` | Hồ sơ | `#sc-home` `.hero-ico` `go('me')` | hub | skip | shared_action | `me` | `.hero-ico` · `LinmProfileButton` | home hero · tab Tôi |
| `ops` | `home` | Thông báo | `#sc-home` `.hero-ico` `go('ops')` | list | skip | shared_action | `ops` | `.hero-ico` + badge · `LinmNotifyButton` | home `.vn-hero-tools` · me |
| `me-signal` | `home` | Tín hiệu | `#sc-home` `data-net-signal` | — | skip | shared_kit | — | `.role` + `data-net-signal` · `LinmStatusCapsule` | home hero · me |
| `patrol-home` | `home` | Điểm tuần / Tuần đường | `#sc-patrol-home` · `DES-MOB-PAT-HOME` | hub | new | shared_action | — (owner) | `.vn-quick` · `.home-tile` · `LinmQuickItem` · `LinmHomeTile` `#i-mappin` | home quick · home tile |
| `incident-create` | `home` | Ghi sự cố | `startIncidentPick()` → `#sc-asset-types` → `#sc-inc-form` · `DES-MOB-INC-FORM` | sheet | new | shared_action | — (owner) | `.vn-quick` · `LinmQuickItem` | home quick · incident-list FAB |
| `supervise` | `home` | Giám sát | `#sc-supervise` · `DES-MOB-SUPERVISE` | list | new | unique | — | `.home-tile` · `LinmHomeTile` `#i-list` | home tile |
| `mnt-list` | `home` | Công việc | `#sc-mnt-list` · `DES-MOB-MNT-LIST` | list | new | unique | — | `.home-tile` · `LinmHomeTile` `#i-wrench` | home tile |
| `incident-list` | `home` | Vấn đề | `#sc-incident-list` · `DES-MOB-INC-LIST` | list | new | unique | — | `.home-tile` · `LinmHomeTile` `#i-warning` | home tile · tab Vấn đề |
| `asset-hub` | `home` | Tài sản / ví | `#sc-asset-hub` · `DES-MOB-ASSET-HUB` · wallet `DES-MOB-HOME-WALLET` | hub | new | shared_action | — (owner) | `.home-tile` · `.wallet-card` · `LinmHomeTile` `#i-cube` · `LinmWalletCard` | home tile · home wallet |
| `patrol-offline` | `home` | Lưu trữ | `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` | list | skip | shared_action | `patrol-offline` | `.home-tile` · `LinmHomeTile` `#i-sync` | home tile · patrol nav · me |

## Rows — hub `me` (giữ)

| feature | parent | action | demoRel | kind | prior | share | reuse | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|-------|-------|---------|--------|
| `me` | — | Tab Tôi / Hồ sơ | `#sc-me` · `DES-MOB-ME` | hub | new | unique | — | `.large-title` · `LinmLargeTitle` | tabbar `me` · home `.hero-ico` |
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
| `shell-tabs` | — | Tab 5 | `DES-MOB-TABBAR` | shell | skip | shared_kit | — | `.tabbar` · `LinmTabBar` | app |

## Chrome (không enqueue)

| Control | Lý do |
|---------|--------|
| Tab 5 · nút Trang Chủ / Tôi | `shell-tabs` · `shared_kit` `.tabbar` · `LinmTabBar` |
| Home profile circle | `LinmProfileButton` · nav `me` |
| Home notify + badge | `LinmNotifyButton` · `LinmNotifyCountBadge` · nav `ops` |
| Tín hiệu / cột sóng | `LinmStatusCapsule` · `LinmNetSignalMark` · **cấm** wifi glyph · **cấm** «Có mạng» |
| `.section-label` Nghiệp vụ thường dùng | `LinmSectionLabel` · không route |
| `.home-foot` «Phiên bản Gói 1» | Watermark / process · **cấm** implement · không clickable |
| Back / Close / chevron Up | Chrome |
| Submit trên `#sc-inc-form` | Thuộc slug `incident-create` |

<!-- Version meta: skillId=scan-qlbd-form-type-mobile schemaVersion=1 -->
