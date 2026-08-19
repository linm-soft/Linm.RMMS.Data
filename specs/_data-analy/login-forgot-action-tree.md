# Action tree — login-forgot

Parent tree: `login-action-tree.md`. Verify demo `#sc-login` `.login-meta a` Quên mật khẩu?

```
login
└── login-forgot              ← **this turn** · hyperlink · màn `#sc-forgot`
    ├── (step) request OTP    ← cùng slug · không enqueue
    └── (step) reset password ← cùng slug · không enqueue
```

| feature | parent | action | demo | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|------|------|-------|-------|---------|--------|---------|
| `login-forgot` | `login` | Quên mật khẩu? | `#sc-login` `.login-meta a` | shell | `unique` | — | — | login meta | **this turn** `task_20426736` (board run packet) |

## Chrome (không enqueue)

| Control | Lý do |
|---------|--------|
| Eye trên MK mới / xác nhận | Field chrome `LinmSecureTextField` |
| Back / Quay lại đăng nhập | Nav chrome |
| Signal trên login parent | Thuộc `login` |

**GAP-MOB-ACT-01/02:** không — 1 hyperlink = 1 slug · steps OTP/reset = cùng flow (không child form slug).  
**GAP-MOB-ACT-03–07:** không sibling mới từ màn forgot.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.01 |
| schemaVersion | 1 |
| generatedAt | 2026-08-19T03:58:00.000Z |
| versionGate | rechecked |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.01 -->
