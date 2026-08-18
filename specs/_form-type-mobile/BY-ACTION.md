# Mobile form-type by action

| | |
|---|---|
| skill | `scan-qlbd-form-type-mobile` |
| kind | `shell` |
| generated | 2026-08-18T16:48:00.000Z |

## shell

Pilot: `login` (new · high)

| feature | parent | prior | conf | ctx | demo | logo | downstream |
|---------|--------|-------|------|-----|------|------|------------|
| `login` | — | **new** · **PILOT** | high | `docs/context/features/login.md` | `mobile-p1` `#sc-login` | AppIcon `app-logo.png` | `/agent-qldb-workflow-mobile` `roleOnly=data_analy` |
| `login-forgot` | `login` | new | med | login §2 quên MK platform | `.login-meta a` | — | sau pilot |
| `login-logout` | `login` | new | high | `POST …/auth/logout` | `#sc-me` Đăng xuất | — | sau pilot |
| `shell-tabs` | — | skip | high | IA tab 5 | `DES-MOB-TABBAR` | — | không enqueue |

<!-- Version meta: skillId=scan-qlbd-form-type-mobile schemaVersion=1 -->
