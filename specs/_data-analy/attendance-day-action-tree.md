# Action tree — attendance-day

| | |
|---|---|
| feature | `attendance-day` |
| owner | **this pack** `DES-MOB-ATT-DAY` · Chi tiết ngày công |
| parent | `attendance` (`#sc-attendance` · hub list pack) |
| demo | target `#sc-attendance-day` · entry `#sc-attendance` day row (hiện chưa wire) |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_3fdb1cea` |

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `DEAD-BUTTONS.md`  
Verify: live iOS/Android day row → toast `attendance.toast.dayDetail` → this turn fills owner.

## Tree

```
patrol-home
└── attendance                 ← segment Chấm công · DES-MOB-ATT · push hub
    └── attendance-day         ← owner · DES-MOB-ATT-DAY · **this turn**
        └── (GET list filter)  ← cùng slug load · **cấm** enqueue
attendance
├── (submit) check-in          ← Chấm vào · cùng slug attendance · **cấm** enqueue sibling
├── attendance-report          ← Báo cáo · toast · sibling · **cấm** start
└── attendance-day             ← tap day row · **this turn** (was `attendance-day-detail` pending_confirm)
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `attendance-day` | `attendance` | Tap day row | `#sc-attendance` row · toast → **wire** · `#sc-attendance-day` | sheet→screen | unique | — | `LinmListRow` · badge | hub 7d list | **this turn** `task_3fdb1cea` |
| `attendance` | `patrol-home` | stay hub | after back | hub | reuse | `attendance` | — | nav back | **không** |
| `attendance-report` | `attendance` | Báo cáo | toast | report | sibling unique | — | `LinmHeroAction` ghost | toast P1 | **không** (`task_eb560c57` · **cấm** start) |
| `supervise-detail` | `supervise` | Tap check-in card | GetById 1 log | sheet | unique | — | rich-card | supervise | **không** — **≠** owner |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| GET list filter appear | cùng slug bind · **không** sibling |
| dayHero · summary rows · log rows | display bind |
| Toast err / empty day | feedback |
| Back chevron | chrome nav parent |
| Tap log row toast | P1 stub · **cấm** enqueue supervise-detail |

## Enqueue sibling

| feature | status |
|---------|--------|
| `attendance-report` | đã enqueue `task_eb560c57` · **cấm** start (`GAP-MOB-ACT-06`) |
| `supervise-detail` | **khác slug** · GetById 1 log · **cấm** gộp |
| POST check-in | **OUT** · owner `attendance` · **cấm** enqueue |
| — new unique | **none** |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp hub hero/report/supervise-detail.  
**GAP-MOB-ACT-03:** dead button day row toast → this turn fills · DEAD-BUTTONS `task_3fdb1cea`.  
**GAP-MOB-ACT-04:** share/mapCite stamped · unique owner.  
**GAP-MOB-BFF-01:** không thiếu — GetList live proxy + client filter.  
**GAP-MOB-ACT-06:** không start attendance-report trong turn data_analy.  
**GAP-MOB-ACT-07:** không enqueue submit POST/GET-by-id drill.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T02:55:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:attendance-day-action-tree-20260831 |
| taskId | `task_3fdb1cea` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
