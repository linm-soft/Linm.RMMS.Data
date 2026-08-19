# Action tree — ops (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · demo iOS + Android `#sc-ops`  
Verify demo — **không** bịa nút.

```
ops                           ← kind=list · DES-MOB-OPS · entry me + home bell · **this turn**
├── me                        ← nav back · go('me') · parent (reuse)
├── home                      ← entry bell go('ops') · parent entry (reuse) · **không** enqueue
└── (mark-read)               ← row tap unread · POST mark-read · **không** enqueue (submit-like · GAP-MOB-ACT-07)
```

| feature | parent | action | demo | kind | share | reuse | mapCite | enqueue |
|---------|--------|--------|------|------|-------|-------|---------|---------|
| `ops` | `me` | Thông báo list | `#sc-ops` `DES-MOB-OPS` | list | shared_action owner | — | `LinmListRow` · `LinmTopBar` · `LinmBadge` | **this turn** `task_f2c9a5de` |
| `me` | — | Back Tôi | nav `go('me')` | hub | shared_action | `me` | `LinmTopBar` | **không** (parent reuse) |
| `home` | — | Bell entry | `go('ops')` hero/notify | hub | shared_action | `home` | `LinmNotifyButton` | **không** (reuse entry) |

## Chrome (không enqueue)

| Control | Lý do |
|---------|--------|
| Back chevron | chrome |
| Badge Mới / Đã đọc | `LinmBadge` display |
| Toast Đã đọc chỉ đạo | feedback · không route |
| Tab 5 | `shell-tabs` |

**GAP-MOB-ACT-01:** không. List = 1 slug `ops`.  
**GAP-MOB-ACT-02:** không. `#sc-ops` **không** child form.  
**GAP-MOB-ACT-03:** không sibling route mới trên screen.  
**GAP-MOB-ACT-07:** không enqueue mark-read (action trên cùng list · không màn mới).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T11:50:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:ops-mobile-action-tree-20260819 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
