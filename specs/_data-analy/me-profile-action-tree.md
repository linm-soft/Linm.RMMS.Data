# Action tree — me-profile

| | |
|---|---|
| feature | `me-profile` |
| owner | **this pack** `DES-MOB-ME-PROFILE` · Hồ sơ |
| parent | `me` (entry `row-profile`) |
| demo | Entry `#sc-me` row person · screen `#sc-me-profile` (Design) |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_c7b0196a` |

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `DEAD-BUTTONS.md`  
Verify: live iOS/Android `row-profile` no-op → this turn fills owner.

## Tree

```
me                            ← hub DES-MOB-ME
├── me-profile                ← owner · DES-MOB-ME-PROFILE · **this turn**
│   ├── (GET auth/profile)    ← cùng slug load · **cấm** enqueue
│   ├── (Lưu → PUT profile)   ← cùng slug submit · **cấm** enqueue
│   ├── (Đổi MK → POST)       ← cùng slug submit · **cấm** enqueue
│   └── (confirm pwd local)   ← chrome validation · **cấm** enqueue
├── me-settings               ← sibling toast · **không** gộp · enqueue riêng
├── feedback / cam-view / ops / patrol-offline
└── login-logout              ← reuse · **không** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `me-profile` | `me` | Hàng tên / Hồ sơ | `#sc-me` `.row` person · `row-profile` · **live no-op → wire** | sheet→screen | unique | — | `LinmListRow` `#i-person` · form fields | me hub | **this turn** `task_c7b0196a` |
| `me` | — | stay hub | after back | hub | reuse | `me` | — | nav back | **không** |
| `me-settings` | `me` | Cài đặt | toast | sheet | unique | — | `LinmListRow` `#i-gear` | me | **không** (pipeline riêng `task_43c37168`) |
| `login-logout` | `me` | Đăng xuất | `logout()` | shell | shared_action | `login-logout` | danger row | me | **không** |
| `users` | — | admin web | Kind B | web | — | web owner | — | — | **không** (OUT · web) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Lưu | submit · cùng slug + BFF PUT `auth/profile` |
| Đổi mật khẩu | submit · cùng slug + BFF POST `auth/change-password` |
| Confirm password | local validation only |
| Avatar / readonly id · userName · citizenId | display bind |
| Toast ok / fail | feedback |
| Leave dirty | Design optional confirm — **không** sibling |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** mới từ màn này — không CTA route/màn mới ngoài owners đã có |
| `me-settings` | đã có task riêng · **cấm** start trong turn này (`GAP-MOB-ACT-06`) |
| Lưu / Đổi MK | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp settings / logout / admin users.  
**GAP-MOB-ACT-03:** dead button `row-profile` → this turn fills · DEAD-BUTTONS `task_c7b0196a`.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không thiếu — Auth GetProfile/UpdateProfile/ChangePassword live.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T18:03:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-profile-action-tree-20260830 |
| taskId | `task_c7b0196a` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
