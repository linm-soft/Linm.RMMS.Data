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
| `attendance` | `patrol-home` | new | unique | — | `LinmSegment` | patrol segment | high | chấm công | `#sc-patrol-home` `.seg` | sibling `pending_confirm` |
| `patrol-map` | `patrol-home` | new | unique | — | `LinmListRow` `#i-map` | quick | high | bản đồ ca | `#row-map` | sibling `pending_confirm` |
| `field-reflect` | `patrol-home` | new | unique | — | `LinmListRow` `#i-camera` | quick | high | hư hỏng | `#row-reflect` | **analy done** `task_d7dd64c8` · handoff PO |
| `cam-patrol` | `patrol-home` | new | unique | — | `LinmListRow` `#i-video` | quick | high | camera tuần | `#row-cam` | sibling `pending_confirm` |
| `patrol-history` | `patrol-home` | new | unique | — | `LinmListRow` `#i-list` | quick | high | lịch sử | `#row-history` | sibling `pending_confirm` |
| `incident-create` | `home` | new | shared_action | — (owner) | `LinmQuickItem` | home quick · incident FAB | high | `docs/context/features/incident-create.md` | `startIncidentPick()` · `#sc-inc-form` | **analy done** `task_5f9013dd` · handoff PO |
| `supervise` | `home` | new | unique | — | `LinmHomeTile` `#i-list` | home tile | high | patrol Giám sát | `#sc-supervise` · `DES-MOB-SUPERVISE` | analy sibling |
| `mnt-list` | `home` | new | unique | — | `LinmHomeTile` `#i-wrench` | home tile · tab Công việc | high | `docs/context/features/mnt-list.md` | `#sc-mnt-list` | analy confirmed |
| `estimate` | `mnt-list` | new | unique | — | `LinmListRow` `#i-sum` | hub + card sum | high | `docs/context/features/estimate.md` | `#sc-estimate` | pending_confirm |
| `mnt-chat` | `mnt-list` | new | unique | — | `LinmIconButton` `#i-chat` | card action | med | comments DEFER | toast | pending_confirm |
| `mnt-progress` | `mnt-list` | new | unique | — | `LinmIconButton` `#i-sync` | card action | med | progress API | toast | pending_confirm |
| `mnt-log` | `mnt-list` | new | unique | — | `LinmIconButton` `#i-list` | done card | low | `docs/context/features/mnt-log.md` | toast | **analy done** `task_60cc0721` · handoff PO |
| `incident-list` | `home` | new | unique | — | `LinmHomeTile` `#i-warning` | home tile · tab Vấn đề | high | `docs/context/features/incident-list.md` | `#sc-incident-list` | **analy done** `task_246a6ce0` · handoff PO |
| `vis-capture` | `incident-list` | new | unique | — | banner `#i-camera` | list banner | high | ai-vision / pavement | `#sc-vis-capture` | pending_confirm |
| `incident-detail` | `incident-list` | new | unique | — | rich-card · `#i-list` | card | high | `docs/context/features/incident.md` | `#sc-incident-detail` | pending_confirm |
| `incident-chat` | `incident-list` | new | unique | — | `LinmIconButton` `#i-chat` | card action | med | comments DEFER | toast | pending_confirm |
| `gis-map` | `incident-list` | new | shared_action | owner (asset-hub) | `LinmSegment` · `#i-mappin` | seg · card | high | `docs/context/features/gis.md` | `#sc-gis-map` | pending_confirm / reuse |
| `asset-hub` | `home` | new | shared_action | — (owner) | `LinmHomeTile` `#i-cube` · `LinmWalletCard` | home tile · wallet | high | `docs/context/features/asset.md` | `#sc-asset-hub` | analy sibling |
| `patrol-offline` | `home` | skip | shared_action | `patrol-offline` | `LinmHomeTile` `#i-sync` | home · patrol · me | high | patrol Lưu trữ | `#sc-patrol-offline` | **không** enqueue (reuse) |
| `me` | — | new | unique | — | `LinmLargeTitle` | tab + home hero | high | (analy ghi `me.md`) | `mobile-p1` `#sc-me` | đã enqueue (scan trước) |
| `me-profile` | `me` | new | unique | — | `LinmListRow` | me | med | users § Hồ sơ · **cấm** web admin | `#sc-me` `row-profile` · live no-op | sibling `pending_confirm` · GAP-MOB-ACT-03 |
| `patrol-offline` | `me` | new | shared_action | — (owner) | `LinmListRow` `#i-sync` | home · patrol · me | high | patrol Lưu trữ | `#sc-patrol-offline` | analy sibling `pending_confirm` |
| `me-signal` | `me` | skip | shared_kit | — | `LinmStatusCapsule` | me · home | high | — | `data-net-signal` | **không** enqueue |
| `feedback` | `me` | new | unique | — | `LinmListRow` `#i-info` | me | high | `docs/context/features/feedback.md` | `#sc-feedback` | analy sibling `pending_confirm` |
| `cam-view` | `me` | new | unique | — | `LinmListRow` `#i-video` | me | high | camera-connect ≠ HW form | `#sc-cam-view` | analy sibling `pending_confirm` |
| `ops` | `me` | new | shared_action | — (owner) | `LinmNotifyButton` | home · me | high | `docs/context/features/ops.md` | `#sc-ops` | analy sibling `pending_confirm` |
| `me-settings` | `me` | new | unique | — | `LinmListRow` `#i-gear` | me | low | `docs/context/features/me-settings.md` | `#sc-me-settings` · `row-settings` | `task_43c37168` data_analy PASS · handoff PO |
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
