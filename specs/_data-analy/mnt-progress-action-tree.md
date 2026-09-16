# Action tree — mnt-progress

| | |
|---|---|
| feature | `mnt-progress` |
| owner | **this pack** · Cập nhật trạng thái · ảnh + định vị |
| parent | `mnt-list` |
| demo | toast `#i-sync` trên `#sc-mnt-list` · target `#sc-mnt-progress` · `DES-MOB-MNT-PROGRESS` |
| kind | `sheet` (scan / packet) · surface = **screen** (Design) |
| taskId | `task_1867f892` |

## Tree

```
mnt-list
├── mnt-progress               ← owner · toast #i-sync → #sc-mnt-progress · **this turn**
│   ├── (header WO)            ← cùng slug display · **cấm** enqueue
│   ├── (tiến độ % / ghi chú)  ← cùng slug controlHint · **cấm** enqueue
│   ├── (ảnh / GPS)            ← cùng slug device · **cấm** enqueue
│   └── (Cập nhật / complete)  ← cùng slug submit API · **cấm** enqueue
├── estimate / mnt-chat / mnt-log  ← siblings · **không** gộp
home
└── mnt-list                   ← parent reuse · **không** enqueue
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `mnt-progress` | `mnt-list` | Cập nhật trạng thái | toast `#i-sync` · `#sc-mnt-progress` | sheet→screen | unique | — (owner) | `LinmIconButton` `#i-sync` | mnt-list card | **this turn** `task_1867f892` |
| `mnt-list` | `home` | stay list | after back | list | reuse | `mnt-list` | — | nav back | **không** |
| `estimate` | `mnt-list` | Giao việc | `#sc-estimate` | sheet | unique | — | `#i-sum` | hub/card | **không** (sibling · đã/đang pipeline) |
| `mnt-chat` | `mnt-list` | Trao đổi | toast `#i-chat` | sheet | unique | — | `#i-chat` | card | **giữ** pending / pipeline riêng · **cấm** start |
| `mnt-log` | `mnt-list` | Nhật ký | toast `#i-list` | sheet | unique | — | `#i-list` | done card | **giữ** `pending_confirm` · **cấm** start |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Cập nhật | submit · cùng slug + BFF POST progress |
| Complete path | submit · cùng slug + BFF POST complete |
| Tiến độ % / Ghi chú | input · controlHint |
| PhotoRow / camera | device · cùng slug · **không** feature mới |
| GPS location row | device · cùng slug |
| Header WO | display bind |
| Toast ok / err | feedback UI |
| Back «Công việc» | chrome nav `mnt-list` |
| GPS deny modal | reuse chrome |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none mới** — owner `mnt-progress` filled this turn (scan `pending_confirm` → done analy) |
| mnt-chat / mnt-log / estimate | **không** start · **không** re-enqueue từ slug này |
| Cập nhật / fields / camera / GPS | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner progress.  
**GAP-MOB-ACT-02:** không gộp chat / log / estimate / list.  
**GAP-MOB-ACT-03:** entry `#i-sync` đã scan · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không — live `…/progress` (+ complete) cite.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:00:18.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-action-tree-20260829 |
| taskId | `task_1867f892` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
