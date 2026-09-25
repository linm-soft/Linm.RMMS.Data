# Action tree — mnt-log

| | |
|---|---|
| feature | `mnt-log` |
| owner | **this pack** · Nhật ký xử lý · readonly timeline |
| parent | `mnt-list` |
| demo | `#sc-mnt-log` · `DES-MOB-MNT-LOG` · entry `#i-list` |
| kind | `sheet` (PO confirmed) · surface = **screen** |
| taskId | `task_6e7aa15d` |
| generatedAt | `2026-09-19T13:38:11.000Z` |

## Tree

```
mnt-list
├── mnt-log                    ← owner · #i-list → #sc-mnt-log · **this turn refresh**
│   ├── (header WO)            ← cùng slug display · **cấm** enqueue
│   └── (timeline rows)        ← cùng slug derive · **cấm** enqueue
├── estimate / mnt-chat / mnt-progress  ← siblings · **không** gộp
home
└── mnt-list                   ← parent reuse · **không** enqueue
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `mnt-log` | `mnt-list` | Nhật ký xử lý | `#i-list` · `#sc-mnt-log` | sheet→screen | unique | — (owner) | `LinmIconButton` `#i-list` | mnt-list done card | **this turn** refresh `task_6e7aa15d` |
| `mnt-list` | `home` | stay list | after back | list | reuse | `mnt-list` | — | nav back | **không** |
| `estimate` | `mnt-list` | Giao việc | `#sc-estimate` | sheet | unique | — | `#i-sum` | hub/card | **không** |
| `mnt-chat` | `mnt-list` | Trao đổi | `#i-chat` | sheet | unique | — | `#i-chat` | card | **không** start |
| `mnt-progress` | `mnt-list` | Cập nhật trạng thái | `#i-sync` | sheet | unique | — | `#i-sync` | card | **không** start |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Timeline rows | display · derived |
| Header WO | display bind |
| Empty / banner | feedback UI |
| Back «Công việc» | chrome nav `mnt-list` |
| Toast err | feedback UI |
| (no submit) | **readonly** |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none mới** — owner filled · Must **0** · **cấm** start sibling (GAP-PKT-ROLE-01) |
| mnt-chat / mnt-progress / estimate | **không** re-enqueue từ slug này |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01..05:** pass · owner unique · no invent BFF.  
**GAP-MOB-BFF-01:** primary = live GetById.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.2 |
| rulesVersion | 2026.09.19.5 |
| generatedAt | 2026-09-19T13:38:11.000Z |
| versionGate | recheck_new |
| contentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| taskId | `task_6e7aa15d` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.2 rulesVersion=2026.09.19.5 versionGate=recheck_new -->
