# Action tree — login (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `ENQUEUE.md`  
Verify demo iOS + Android `#sc-login` · `#sc-me` — **không** bịa nút.

```
login                         ← kind=shell · màn Đăng nhập · PILOT · **this turn**
├── login-forgot              ← link Quên mật khẩu? · backlog
└── login-logout              ← hàng Đăng xuất trên Tôi · backlog
```

| feature | parent | action | demo | kind | enqueue |
|---------|--------|--------|------|------|---------|
| `login` | — | Đăng nhập | `#sc-login` `button.btn-primary` `loginOk()` · `DES-MOB-LOGIN` | shell | **this turn** `pilot_one` · `task_bf9355f7` |
| `login-forgot` | `login` | Quên mật khẩu? | `#sc-login` `.login-meta a` (iOS + Android) | shell | backlog · `GAP-MOB-BFF-01` |
| `login-logout` | `login` | Đăng xuất | `#sc-me` row `logout()` · iOS «Cập nhật thông tin» · Android cùng nhóm | shell | backlog · `POST auth/logout` |

## Chrome (không enqueue — khớp scan)

| Control | Demo | Lý do |
|---------|------|--------|
| Hiện/ẩn mật khẩu | `#f-pass` + `togglePass()` / `btnEye` | Field chrome |
| Tín hiệu · bản Gói 1 | `.login-meta` · `data-net-signal` | Meta · **cấm** «Có mạng» |
| Tagline OS | `Hiện trường · iPhone` / `Android` | Chrome OS |
| Tab 5 | `DES-MOB-TABBAR` | Nav chrome · `shell-tabs` skip |
| `#sc-me` Góp ý / Camera / Thông báo / Cài đặt / Hàng đợi | row khác | slug khác — **cấm** gộp vào `login` |

Logo: `DES-MOB-LOGIN-BRAND` = `assets/app-logo.png` ← `logo/mobile` AppIcon 1024. **Cấm** `rmms.png`.

**GAP-MOB-ACT-01:** không. 1 nút primary = 1 slug `login`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.18.10 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.18.11 |
| rulesVersion | 2026.08.18.26 |
| generatedAt | 2026-08-18T17:24:22.000Z |
| versionGate | ok |
| contentHash | sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.18.10 schemaVersion=1 workflowVersion=2026.08.18.11 rulesVersion=2026.08.18.26 versionGate=ok -->
