# Mobile form-type by action

| | |
|---|---|
| skill | `scan-qlbd-form-type-mobile` |
| kind | `hub` (pilot home) · `hub` me (giữ) · `shell` (giữ) |
| generated | 2026-08-19T01:55:00.000Z |

## hub

Pilot: `home` (new · high) — tab Trang Chủ trên `DES-MOB-TABBAR`.  
**Không** gộp web `dashboard` (KPI điều hành).

| feature | parent | prior | share | reuse | mapCite | usedOn | conf | ctx | demo | downstream |
|---------|--------|-------|-------|-------|---------|--------|------|-----|------|------------|
| `home` | — | **new** · **PILOT** | unique | — | `LinmHomeGrid` · `LinmQuickActions` | tab Trang Chủ | high | (analy ghi `home.md`) · ≠ `dashboard.md` | `mobile-p1` `#sc-home` | `/agent-qldb-workflow-mobile` `roleOnly=data_analy` · `pending_confirm` |
| `me` | `home` | skip | shared_action | `me` | `LinmProfileButton` | home hero · tab Tôi | high | `docs/context/features/me.md` | `#sc-me` | **không** enqueue (reuse) |
| `ops` | `home` | skip | shared_action | `ops` | `LinmNotifyButton` | home · me | high | `docs/context/features/ops.md` | `#sc-ops` | **không** enqueue (reuse) |
| `me-signal` | `home` | skip | shared_kit | — | `LinmStatusCapsule` | home · me | high | — | `data-net-signal` | **không** enqueue |
| `patrol-home` | `home` | new | shared_action | — (owner) | `LinmQuickItem` · `LinmHomeTile` `#i-mappin` | home quick · tile | high | `docs/context/features/patrol.md` | `#sc-patrol-home` · `DES-MOB-PAT-HOME` | analy sibling · skip scan `pilot_one` |
| `incident-create` | `home` | new | shared_action | — (owner) | `LinmQuickItem` | home quick · incident FAB | high | `docs/context/features/incident.md` | `startIncidentPick()` · `#sc-inc-form` | analy sibling |
| `supervise` | `home` | new | unique | — | `LinmHomeTile` `#i-list` | home tile | high | patrol Giám sát | `#sc-supervise` · `DES-MOB-SUPERVISE` | analy sibling |
| `mnt-list` | `home` | new | unique | — | `LinmHomeTile` `#i-wrench` | home tile · tab Công việc | high | `docs/context/features/maintenance.md` | `#sc-mnt-list` | analy sibling |
| `incident-list` | `home` | new | unique | — | `LinmHomeTile` `#i-warning` | home tile · tab Vấn đề | high | `docs/context/features/incident.md` | `#sc-incident-list` | analy sibling |
| `asset-hub` | `home` | new | shared_action | — (owner) | `LinmHomeTile` `#i-cube` · `LinmWalletCard` | home tile · wallet | high | `docs/context/features/asset.md` | `#sc-asset-hub` | analy sibling |
| `patrol-offline` | `home` | skip | shared_action | `patrol-offline` | `LinmHomeTile` `#i-sync` | home · patrol · me | high | patrol Lưu trữ | `#sc-patrol-offline` | **không** enqueue (reuse) |
| `me` | — | new | unique | — | `LinmLargeTitle` | tab + home hero | high | (analy ghi `me.md`) | `mobile-p1` `#sc-me` | đã enqueue (scan trước) |
| `me-profile` | `me` | gap | unique | — | `LinmListRow` | me | med | users § Hồ sơ · **cấm** web admin | `#sc-me` row · **không** `go()` | **không** enqueue (thiếu route) |
| `patrol-offline` | `me` | new | shared_action | — (owner) | `LinmListRow` `#i-sync` | home · patrol · me | high | patrol Lưu trữ | `#sc-patrol-offline` | analy sibling `pending_confirm` |
| `me-signal` | `me` | skip | shared_kit | — | `LinmStatusCapsule` | me · home | high | — | `data-net-signal` | **không** enqueue |
| `feedback` | `me` | new | unique | — | `LinmListRow` `#i-info` | me | high | `docs/context/features/feedback.md` | `#sc-feedback` | analy sibling `pending_confirm` |
| `cam-view` | `me` | new | unique | — | `LinmListRow` `#i-video` | me | high | camera-connect ≠ HW form | `#sc-cam-view` | analy sibling `pending_confirm` |
| `ops` | `me` | new | shared_action | — (owner) | `LinmNotifyButton` | home · me | high | `docs/context/features/ops.md` | `#sc-ops` | analy sibling `pending_confirm` |
| `me-settings` | `me` | gap | unique | — | `LinmListRow` `#i-gear` | me (iOS) | low | — | toast / Android thiếu | **không** enqueue (thiếu màn) |
| `login-logout` | `me` | skip | shared_action | `login-logout` | `LinmSecondaryButton` | me | high | `POST …/auth/logout` | `#sc-me` Đăng xuất | **không** enqueue |

## shell

Pilot: `login` (done)

| feature | parent | prior | share | reuse | mapCite | usedOn | conf | ctx | demo | downstream |
|---------|--------|-------|-------|-------|---------|--------|------|-----|------|------------|
| `login` | — | done | unique | — | `LinmPrimaryButton` | auth | high | `docs/context/features/login.md` | `#sc-login` | — |
| `login-forgot` | `login` | done | unique | — | hyperlink | login | high | login-forgot | `.login-meta a` | — |
| `login-logout` | `login` | new | shared_action | — (owner) | `LinmSecondaryButton` | me | high | `POST …/auth/logout` | `#sc-me` | sau `me` |
| `shell-tabs` | — | skip | shared_kit | — | `.tabbar` · `LinmTabBar` | app | high | IA tab 5 | `DES-MOB-TABBAR` | không enqueue |

<!-- Version meta: skillId=scan-qlbd-form-type-mobile schemaVersion=1 -->
