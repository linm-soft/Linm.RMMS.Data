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
home                          ← kind=hub · tab Trang Chủ · DES-MOB-HOME · PILOT · **không required login**
├── login                     ← btn-home-login Đăng nhập / Dành cho cán bộ · overlay · reuse=login
├── home-faq                  ← guest btn-home-faq · overlay #sc-faq · static catalog · **cấm** invent API
├── home-privacy              ← guest btn-home-privacy · overlay #sc-privacy · static copy
├── me                        ← .hero-ico Hồ sơ · guest → login · staff go('me') · reuse=me
├── ops                       ← .hero-ico Thông báo · go('ops') · reuse=ops
├── me-signal                 ← .role + data-net-signal · chrome kit · skip
├── patrol-home               ← quick Điểm tuần + tile Tuần đường · guest needLogin
├── incident-create           ← quick Ghi sự cố · guest needLogin
├── supervise                 ← tile Giám sát · guest needLogin
├── mnt-list                  ← tile Công việc · guest needLogin
├── incident-list             ← tile Vấn đề · guest needLogin
├── asset-hub                 ← tile Tài sản + wallet · guest needLogin
└── patrol-offline            ← tile Lưu trữ · guest needLogin
```

## Tree — mnt-list / Công việc (list · analy `task_659bf5c2`)

```
mnt-list                      ← kind=list · DES-MOB-MNT-LIST · home tile + tab work
├── home                      ← back · reuse
├── estimate                  ← Giao việc xử lý · go('estimate') · DES-MOB-EST
├── mnt-chat                  ← Trao đổi · toast #i-chat
├── mnt-progress              ← Cập nhật trạng thái · toast #i-sync
└── mnt-log                   ← Nhật ký xử lý · toast #i-list
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
login                         ← kind=shell · overlay từ Home · **không** cổng launch
├── home                      ← btn-login-back Về Trang Chủ · reuse=home
├── login-forgot              ← link Quên mật khẩu?
└── login-logout              ← hàng Đăng xuất trên Tôi · về Home guest
```

## Tree — patrol-home / Tuần đường (hub field)

```
patrol-home                   ← kind=hub · tab Tuần đường · DES-MOB-PAT-HOME · done
├── attendance                ← segment Chấm công · màn mới
├── patrol-map                ← hero Tiếp tục bản đồ · row Bản đồ ca
├── field-reflect             ← row Ghi nhận hư hỏng
├── cam-patrol                ← row Thu thập camera
├── patrol-history            ← row Lịch sử phiên
├── patrol-pin                ← CTA Ghim vị trí hiện tại · hub job (P1 toast ≠ skip)
├── patrol-checkin            ← hero Ghi điểm tuần
├── supervise                 ← row Giám sát · reuse=supervise (home owner · không enqueue)
└── patrol-offline            ← row Lưu trữ · reuse=patrol-offline · không enqueue
```

**Không** enqueue: Tab 5 · segment cùng slug · today row tap (open existing ca · không CTA mới).  
Title: `[Mobile] [Tuần đường] -> {nhãn nút}`. **Cấm** GAP-MOB-ACT-07 cho pin / ghi điểm.

## Rows — hub `patrol-home`

| feature | parent | action | demoRel | kind | prior | share | reuse | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|-------|-------|---------|--------|
| `attendance` | `patrol-home` | Chấm công | `#sc-patrol-home` `.seg` | list | new | unique | — | `LinmSegment` idx 1 | patrol segment |
| `patrol-map` | `patrol-home` | Tiếp tục bản đồ | `#sc-patrol-home` `#row-map` · hero | map | new | unique | — | `LinmListRow` `#i-map` | quick · hero |
| `field-reflect` | `patrol-home` | Ghi nhận hư hỏng | `#row-reflect` | sheet | new | unique | — | `LinmListRow` `#i-camera` | quick |
| `cam-patrol` | `patrol-home` | Thu thập camera | `#row-cam` | sheet | new | unique | — | `LinmListRow` `#i-video` | quick |
| `patrol-history` | `patrol-home` | Lịch sử phiên | `#row-history` | list | new | unique | — | `LinmListRow` `#i-list` | quick |
| `patrol-pin` | `patrol-home` | Ghim vị trí hiện tại | `.btn-primary.pin-here` | sheet | new | unique | — | `LinmPrimaryButton` `#i-mappin` | hub CTA |
| `patrol-checkin` | `patrol-home` | Ghi điểm tuần | hero `.btn` | sheet | new | unique | — | `LinmPrimaryButton` | hero CTA |
| `supervise` | `patrol-home` | Giám sát | `#row-supervise` | list | skip | shared_action | `supervise` | `LinmListRow` `#i-list` | home tile · quick |
| `patrol-offline` | `patrol-home` | Lưu trữ | `#row-offline` | list | skip | shared_action | `patrol-offline` | `LinmListRow` `#i-sync` | home · me · quick |

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
| `estimate` | `mnt-list` | Giao việc xử lý | `#sc-estimate` · `DES-MOB-EST` · hub + `#i-sum` | sheet | new | unique | — | `LinmListRow` `#i-sum` | mnt-list hub · card |
| `mnt-chat` | `mnt-list` | Trao đổi công việc | toast `#i-chat` | sheet | new | unique | — | `LinmIconButton` `#i-chat` | mnt-list card |
| `mnt-progress` | `mnt-list` | Cập nhật trạng thái | toast `#i-sync` | sheet | new | unique | — | `LinmIconButton` `#i-sync` | mnt-list card |
| `mnt-log` | `mnt-list` | Nhật ký xử lý | toast `#i-list` | sheet | new | unique | — | `LinmIconButton` `#i-list` | mnt-list done card |
| `incident-list` | `home` | Vấn đề | `#sc-incident-list` · `DES-MOB-INC-LIST` | list | new | unique | — | `.home-tile` · `LinmHomeTile` `#i-warning` | home tile · tab Vấn đề |
| `vis-capture` | `incident-list` | Nhận diện mặt đường | `.vn-banner` `go('vis-capture')` · `DES-MOB-VIS-CAPTURE` | screen | new | unique | — | banner `#i-camera` | incident-list banner |
| `incident-detail` | `incident-list` | Chi tiết vấn đề | `#sc-incident-detail` · `DES-MOB-INC-DETAIL` | screen | new | unique | — | rich-card · `#i-list` | incident-list card |
| `incident-chat` | `incident-list` | Trao đổi sự cố | toast `#i-chat` | sheet | new | unique | — | `LinmIconButton` `#i-chat` | incident-list card |
| `gis-map` | `incident-list` | Bản đồ | seg + `#i-mappin` `#sc-gis-map` · `DES-MOB-GIS` | map | new | shared_action | owner (asset-hub) | `LinmSegment` · `#i-mappin` | incident-list seg · card |
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
