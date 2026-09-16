# Action tree — mnt-chat (verify scan)

Scan SSOT: demo iOS + Android `#sc-mnt-chat` · entry `mnt-list` `#i-chat`  
Verify demo — **không** bịa nút · **cấm** toast-only entry.

| | |
|---|---|
| feature | `mnt-chat` |
| owner | **this pack** · Trao đổi công việc |
| parent | `mnt-list` (card `#i-chat` / `btn-mnt-chat-{id}`) |
| demo | full screen `#sc-mnt-chat` · kit thread + composer |
| kind | `sheet` → **screen** chat |
| taskId | `task_e0e94a4c` |
| status | **confirmed** |

## Tree

```
mnt-list
├── mnt-chat                     ← kind=screen · #i-chat · **this pack**
│   ├── appear → GET messages
│   ├── send → POST message
│   └── back → pop list
├── mnt-estimate                 ← sibling · **không** gộp
├── mnt-progress                 ← sibling · **không** gộp
├── mnt-log                      ← sibling · **không** gộp
└── incident-chat                ← parallel Incident · **không** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `mnt-chat` | `mnt-list` | Trao đổi công việc | `#sc-mnt-chat` · `#i-chat` | sheet→screen | unique | `LinmChatThread`/`Composer` | `#i-chat` · `btn-mnt-chat-{id}` | WO card | **this turn** `task_e0e94a4c` |
| `mnt-list` | `home` | Parent list | `#sc-mnt-list` | list | shared_action | `mnt-list` | rich-card | entry | **không** |
| `mnt-estimate` | `mnt-list` | Dự toán | sibling | screen | unique | owner | — | card | **không** |
| `mnt-progress` | `mnt-list` | Tiến độ | sibling | screen | unique | owner | — | card | **không** |
| `mnt-log` | `mnt-list` | Nhật ký | sibling | screen | unique | owner | — | card | **không** |
| `incident-chat` | `incident-list` | Trao đổi sự cố | parallel | screen | unique | same kit | — | — | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| `#i-chat` tap | **thisAction** · navigate chat |
| GET/POST messages | cùng slug · **cấm** enqueue submit as new feature |
| Filter toast on list | parent chrome · **không** chat |
| Card layout / flex actions | parent `mnt-list` · **cấm** re-own |

**GAP-MOB-ACT-01:** không — Chat = 1 slug `mnt-chat`.  
**GAP-MOB-ACT-02:** không gộp estimate/progress/log/incident-chat.  
**GAP-MOB-EDIT-01:** **cấm** revert toast-only.

## Enqueue sibling

| feature | status | note |
|---------|--------|------|
| — | **none mới** | siblings đã pack · re-QA only after VERIFY |

**Không** enqueue: `mnt-list` · siblings · SignalR hub.  
**Cấm** start sibling không Approve (`GAP-MOB-ACT-06`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-01T09:35:00.000Z` |
| versionGate | ok |
| contentHash | sha256:mnt-chat-mobile-action-tree-20260901 |
| taskId | `task_e0e94a4c` |

---
<!-- Version meta: skillId=agent-data-analy-mobile · qaFix author GAP-SA-BFF-MISS-01 -->
