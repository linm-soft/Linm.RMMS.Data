# Action tree — me-settings

| | |
|---|---|
| feature | `me-settings` |
| owner | **this pack** `DES-MOB-ME-SETTINGS` · Cài đặt |
| parent | `me` (entry `row-settings`) |
| demo | Entry `#sc-me` row gear · screen `#sc-me-settings` (Design) |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_43c37168` |

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `DEAD-BUTTONS.md`  
Verify: live iOS/Android `row-settings` toast → this turn fills owner.

## Tree

```
me                            ← hub DES-MOB-ME
├── me-profile                ← sibling · **không** gộp
├── me-settings               ← owner · DES-MOB-ME-SETTINGS · **this turn**
│   ├── (openAppSettings)     ← cùng slug OS · **cấm** enqueue
│   ├── (version Bundle)      ← display · **cấm** enqueue
│   ├── (privacy copy)        ← reuse home.privacy · **cấm** enqueue
│   └── (row offline)         ← reuse=patrol-offline · **cấm** enqueue
├── feedback / cam-view / ops / patrol-offline
└── login-logout              ← reuse · **không** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `me-settings` | `me` | Cài đặt | `#sc-me` `.row` gear · `row-settings` · **live toast → wire** | sheet→screen | unique | — | `LinmListRow` `#i-gear` · perm/about rows | me hub | **this turn** `task_43c37168` |
| `me` | — | stay hub | after back | hub | reuse | `me` | — | nav back | **không** |
| `patrol-offline` | `me-settings` | Hàng đợi mất sóng | row sync | list | shared_action | `patrol-offline` | `LinmListRow` `#i-sync` | me · me-settings | **không** (reuse) |
| `me-profile` | `me` | Hồ sơ | row person | sheet | unique | — | `#i-person` | me | **không** (pipeline riêng) |
| `ops` | `me` | Thông báo inbox | row bell | list | shared_action | — | `#i-bell` | me · home | **không** (≠ Thông báo hệ thống) |
| `login-logout` | `me` | Đăng xuất | `logout()` | shell | shared_action | `login-logout` | danger row | me | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Mở Cài đặt hệ thống / row Vị trí · Camera · Thông báo hệ thống | local OS deep-link · cùng slug |
| Phiên bản | display Bundle |
| Chính sách quyền riêng tư | reuse home copy · **không** slug mới |
| Toast OS fail | feedback |
| Back Tôi | chrome |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** mới từ màn này — không CTA route/màn mới ngoài owners đã có |
| `patrol-offline` | `reuse` — **cấm** enqueue |
| openAppSettings / privacy | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| `me-profile` / `ops` / `login-logout` | owners riêng · **cấm** start (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp profile / logout / ops inbox / feedback.  
**GAP-MOB-ACT-03:** dead button `row-settings` → this turn fills · DEAD-BUTTONS `task_43c37168`.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không thiếu controller bắt buộc — P1 local/OS · **cấm invent**.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-30T20:11:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:me-settings-action-tree-20260830 |
| taskId | `task_43c37168` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
