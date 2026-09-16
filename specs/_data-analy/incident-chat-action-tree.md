# Action tree — incident-chat (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · demo iOS + Android `#sc-incident-list` `#i-chat`  
Verify demo — **không** bịa nút / sheet.

| | |
|---|---|
| feature | `incident-chat` |
| owner | **this pack** · Trao đổi sự cố |
| parent | `incident-list` (card `#i-chat`) |
| demo | toast `#i-chat` «Trao đổi sự cố» · **không** `#sc-incident-chat` / `#sheet-incident-chat` P1 |
| kind | `sheet` (STATUS/scan packKind) · surface P1 = **toast** |
| taskId | `task_9e8d18c5` |

## Tree

```
incident-list
├── incident-chat                ← kind=sheet/toast · #i-chat · **this turn**
│   ├── (toast Trao đổi sự cố)   ← local · **cấm** enqueue
│   └── (comments P2 DEFER)      ← POST/GET …/comments · **cấm** invent · **cấm** enqueue P1
├── incident-detail              ← sibling · **không** gộp
├── incident-create              ← sibling · **không** gộp
└── mnt-chat                     ← parallel WO toast · **không** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `incident-chat` | `incident-list` | Trao đổi sự cố | toast `#i-chat` | sheet→toast | unique | — | `LinmIconButton` `#i-chat` · `LinmToast` | list card action | **this turn** `task_9e8d18c5` |
| `incident-list` | `home` | Parent list | `#sc-incident-list` | list | shared_action | `incident-list` | rich-card | entry | **không** (parent reuse) |
| `incident-detail` | `incident-list` | Chi tiết | `#sc-incident-detail` | screen | unique | owner | — | card / `#i-list` | **không** (đã pack) |
| `incident-create` | `incident-list` | Ghi sự cố | FAB / `#sheet-incident` | sheet→screen | shared_action | owner | — | FAB | **không** |
| `mnt-chat` | `mnt-list` | Trao đổi công việc | toast `#i-chat` | sheet→toast | unique | — | `#i-chat` | WO card | **không** start · parallel |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| `#i-chat` tap | **thisAction** · cùng slug · toast |
| Toast «Trao đổi sự cố» | feedback · **cấm** enqueue |
| Comments POST/GET (P2) | cùng slug khi Signed · **cấm** enqueue submit |
| Card layout / flex actions | parent `incident-list` chrome · **cấm** re-own |
| Tab 5 `incident` | shell |

**GAP-MOB-ACT-01:** không — Chat = 1 slug `incident-chat`.  
**GAP-MOB-ACT-02:** không gộp list / detail / create / `mnt-chat`.  
**GAP-MOB-ACT-03:** không CTA route mới trên toast P1.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-ACT-07:** không enqueue toast · không enqueue DEFER comments.

## Enqueue sibling (pending_confirm · cấm auto start)

| feature | title board | status | note |
|---------|-------------|--------|------|
| — | — | **none mới** | parent/siblings đã có pack · `mnt-chat` pipeline riêng |

**Không** enqueue: `incident-list` · `incident-detail` · `incident-create` · `mnt-chat` · toast · comments.  
**Cấm** start sibling không Approve (`GAP-MOB-ACT-06`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T10:34:45.000Z` |
| versionGate | rechecked |
| contentHash | sha256:incident-chat-mobile-action-tree-20260829 |
| taskId | `task_9e8d18c5` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
