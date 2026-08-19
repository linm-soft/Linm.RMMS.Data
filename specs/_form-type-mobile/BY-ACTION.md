# Mobile form-type by action

| | |
|---|---|
| skill | `scan-qlbd-form-type-mobile` |
| kind | `hub` (pilot) · `shell` (giữ) |
| generated | 2026-08-19T01:35:00.000Z |

## hub

Pilot: `me` (new · high) — tab Tôi / profile trên `DES-MOB-TABBAR`.

| feature | parent | prior | share | reuse | mapCite | usedOn | conf | ctx | demo | downstream |
|---------|--------|-------|-------|-------|---------|--------|------|-----|------|------------|
| `me` | — | **new** · **PILOT** | unique | — | `LinmLargeTitle` | tab + home hero | high | (analy ghi `me.md`) | `mobile-p1` `#sc-me` | `/agent-qldb-workflow-mobile` `roleOnly=data_analy` · `pending_confirm` |
| `me-profile` | `me` | gap | unique | — | `LinmListRow` | me | med | users § Hồ sơ · **cấm** web admin | `#sc-me` row · **không** `go()` | **không** enqueue (thiếu route) |
| `patrol-offline` | `me` | new | shared_action | — (owner) | `LinmListRow` `#i-sync` | home · patrol · me | high | patrol Lưu trữ | `#sc-patrol-offline` | analy sibling · skip scan `pilot_one` |
| `me-signal` | `me` | skip | shared_kit | — | `LinmStatusCapsule` | me · home | high | — | `data-net-signal` | **không** enqueue |
| `feedback` | `me` | new | unique | — | `LinmListRow` `#i-info` | me | high | `docs/context/features/feedback.md` | `#sc-feedback` | analy sibling |
| `cam-view` | `me` | new | unique | — | `LinmListRow` `#i-video` | me | high | camera-connect ≠ HW form | `#sc-cam-view` | analy sibling |
| `ops` | `me` | new | shared_action | — (owner) | `LinmNotifyButton` | home · me | high | `docs/context/features/ops.md` | `#sc-ops` | analy sibling |
| `me-settings` | `me` | gap | unique | — | `LinmListRow` `#i-gear` | me (iOS) | low | — | toast / Android thiếu | **không** enqueue (thiếu màn) |
| `login-logout` | `me` | skip | shared_action | `login-logout` | `LinmSecondaryButton` | me | high | `POST …/auth/logout` | `#sc-me` Đăng xuất | **không** enqueue |

## shell

Pilot: `login` (done)

| feature | parent | prior | share | reuse | mapCite | usedOn | conf | ctx | demo | downstream |
|---------|--------|-------|-------|-------|---------|--------|------|-----|------|------------|
| `login` | — | done | unique | — | `LinmPrimaryButton` | auth | high | `docs/context/features/login.md` | `#sc-login` | — |
| `login-forgot` | `login` | done | unique | — | hyperlink | login | high | login-forgot | `.login-meta a` | — |
| `login-logout` | `login` | new | shared_action | — (owner) | `LinmSecondaryButton` | me | high | `POST …/auth/logout` | `#sc-me` | sau `me` |
| `shell-tabs` | — | skip | shared_kit | — | `.tabbar` | app | high | IA tab 5 | `DES-MOB-TABBAR` | không enqueue |

<!-- Version meta: skillId=scan-qlbd-form-type-mobile schemaVersion=1 -->
