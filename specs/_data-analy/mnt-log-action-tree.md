# Action tree — mnt-log

| | |
|---|---|
| feature | `mnt-log` |
| owner | **this pack** · Nhật ký xử lý · readonly timeline |
| parent | `mnt-list` |
| demo | toast `#i-list` trên `#sc-mnt-list` done card · target `#sc-mnt-log` · `DES-MOB-MNT-LOG` |
| kind | `sheet` (scan / packet) · surface = **screen** (Design) |
| taskId | `task_60cc0721` |

## Tree

```
mnt-list
├── mnt-log                    ← owner · toast #i-list → #sc-mnt-log · **this turn**
│   ├── (header WO)            ← cùng slug display · **cấm** enqueue
│   └── (timeline rows)        ← cùng slug derive · **cấm** enqueue
├── estimate / mnt-chat / mnt-progress  ← siblings · **không** gộp
home
└── mnt-list                   ← parent reuse · **không** enqueue
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `mnt-log` | `mnt-list` | Nhật ký xử lý | toast `#i-list` · `#sc-mnt-log` | sheet→screen | unique | — (owner) | `LinmIconButton` `#i-list` | mnt-list done card | **this turn** `task_60cc0721` |
| `mnt-list` | `home` | stay list | after back | list | reuse | `mnt-list` | — | nav back | **không** |
| `estimate` | `mnt-list` | Giao việc | `#sc-estimate` | sheet | unique | — | `#i-sum` | hub/card | **không** (sibling) |
| `mnt-chat` | `mnt-list` | Trao đổi | toast `#i-chat` | sheet | unique | — | `#i-chat` | card | **giữ** pending / pipeline riêng · **cấm** start |
| `mnt-progress` | `mnt-list` | Cập nhật trạng thái | toast `#i-sync` | sheet | unique | — | `#i-sync` | card | **không** start từ slug này |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Timeline rows | display · cùng slug · derived |
| Header WO | display bind |
| Empty chrome | feedback UI |
| Back «Công việc» | chrome nav `mnt-list` |
| Toast err | feedback UI |
| (no submit) | **readonly** — không CTA write trên slug |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none mới** — owner `mnt-log` filled this turn (scan `pending_confirm` → done analy) |
| mnt-chat / mnt-progress / estimate | **không** start · **không** re-enqueue từ slug này |
| Timeline / header / back | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner nhật ký.  
**GAP-MOB-ACT-02:** không gộp chat / progress / estimate / list.  
**GAP-MOB-ACT-03:** entry `#i-list` đã scan · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không invent path — primary = live GetById · history = GAP HIST (cite · không invent).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T07:13:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-log-mobile-action-tree-20260829 |
| taskId | `task_60cc0721` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
