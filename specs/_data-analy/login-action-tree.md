# Action tree — login (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `ENQUEUE.md`  
Verify demo iOS + Android `#sc-login` · `#sc-me` — **không** bịa nút.  
Recheck `2026.08.19.01`: child-form tree (`GAP-MOB-ACT-02`).

```
login                         ← kind=shell · màn Đăng nhập · PILOT · **this turn**
├── login-forgot              ← link Quên mật khẩu? · pending_confirm
└── login-logout              ← hàng Đăng xuất trên Tôi · backlog
```

| feature | parent | action | demo | kind | enqueue |
|---------|--------|--------|------|------|---------|
| `login` | — | Đăng nhập | `#sc-login` `button.btn-primary` `loginOk()` · `DES-MOB-LOGIN` | shell | **this turn** `pilot_one` · `task_3b190d5a` |
| `login-forgot` | `login` | Quên mật khẩu? | `#sc-login` `.login-meta a` (iOS + Android) | shell | **pending_confirm** · sibling_assign · hyperlink ≠ submit |
| `login-logout` | `login` | Đăng xuất | `#sc-me` row `logout()` · iOS nhóm «Cập nhật thông tin» · Android cùng nhóm (không hàng Cài đặt) | shell | backlog · `POST auth/logout` |

## Chrome (không enqueue — khớp scan)

| Control | Demo | Lý do |
|---------|------|--------|
| Hiện/ẩn mật khẩu | `#f-pass` + `togglePass()` / `btnEye` | Field chrome · **không** child form |
| Tín hiệu · bản Gói 1 | `.login-meta` · `data-net-signal` | Meta · **cấm** «Có mạng» |
| Tagline OS | `Hiện trường · iPhone` / `Android` | Chrome OS |
| Tab 5 | `DES-MOB-TABBAR` | Nav chrome · `shell-tabs` skip |
| `#sc-me` Góp ý / Camera / Thông báo / Cài đặt / Hàng đợi | row khác | slug khác — **cấm** gộp vào `login` |

Logo: `DES-MOB-LOGIN-BRAND` = `assets/app-logo.png` ← `logo/mobile` AppIcon 1024. **Cấm** `rmms.png`.

**GAP-MOB-ACT-01:** không. 1 nút primary = 1 slug `login`.

**GAP-MOB-ACT-02:** không. `#sc-login` **không** có child form / sheet / FAB action. Nút trên form trừ Lưu/Hủy = link `login-forgot` (đã có slug). Eye toggle = chrome. `login-logout` nằm `#sc-me` (màn khác) — đã slug, backlog.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.01 |
| rulesVersion | 2026.08.19.01 |
| generatedAt | 2026-08-18T17:35:15.000Z |
| versionGate | rechecked |
| contentHash | sha256:2b627cdf80eca92c1f91cc999b6b516ca09d534ad0ffff887800699c4a02c3ef |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.01 schemaVersion=1 workflowVersion=2026.08.19.01 rulesVersion=2026.08.19.01 versionGate=rechecked -->
