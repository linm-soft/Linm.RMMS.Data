# Action tree — attendance-report

| | |
|---|---|
| feature | `attendance-report` |
| owner | **this pack** `DES-MOB-ATT-RPT` · Báo cáo công |
| parent | `attendance` (`#sc-attendance` · hub) |
| demo | entry `#sc-attendance` hero **Báo cáo** (toast) · target `#sc-attendance-report` (chưa có HTML) |
| kind | `sheet` (STATUS/scan) · surface = **screen** report |
| taskId | `task_cc8d9202` |

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `DEAD-BUTTONS.md`  
Verify: live iOS/Android Báo cáo → toast `attendance.toast.report` → this turn fills owner.

## Tree

```
patrol-home
└── attendance                 ← segment Chấm công · DES-MOB-ATT
    ├── (submit) check-in      ← Chấm vào · cùng slug attendance · **cấm** enqueue
    ├── attendance-day         ← tap day row · sibling done · reuse push
    └── attendance-report      ← Báo cáo · **this turn** · DES-MOB-ATT-RPT
        └── (GET list + period aggregate)  ← cùng slug load · **cấm** enqueue
            └── attendance-day ← tap day trên report · reuse · **cấm** re-enqueue
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `attendance-report` | `attendance` | Báo cáo | toast → **wire** · `#sc-attendance-report` | sheet→screen | unique | — | `LinmHeroAction` ghost | hub hero | **this turn** `task_cc8d9202` |
| `attendance` | `patrol-home` | stay hub | after back | hub | reuse | `attendance` | — | nav back | **không** |
| `attendance-day` | `attendance` / report | Tap day | push + `dayKey` | sheet | reuse | `attendance-day` | `LinmListRow` | report day list | **không** (đã owner · **cấm** re-enqueue) |
| `rpt-bao-cao-cong` | web reports | Kind E | web only | report | sibling web | — | — | web | **không** — ≠ mobile |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| GET list + period appear | cùng slug bind · **không** sibling |
| periodSeg Tuần/Tháng | filter cùng slug |
| KPI chips · day rows | display bind |
| Toast err / empty | feedback |
| Back chevron | chrome nav parent |
| Excel / map | **OUT** P1 · **cấm** enqueue web feature |

## Enqueue sibling

| feature | status |
|---------|--------|
| `attendance-day` | đã owner · **reuse** từ day row trên report · **cấm** re-enqueue (`GAP-MOB-ACT-06`) |
| POST check-in | **OUT** · owner `attendance` · **cấm** enqueue |
| web `rpt-bao-cao-cong` | **khác surface** · **cấm** enqueue mobile queue |
| — new unique | **none** |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp hub POST / day detail / web Kind E.  
**GAP-MOB-ACT-03:** dead button Báo cáo toast → this turn fills · DEAD-BUTTONS `task_cc8d9202`.  
**GAP-MOB-ACT-04:** share/mapCite stamped · unique owner.  
**GAP-MOB-BFF-01:** không thiếu — GetList live proxy + client aggregate (report API MISSING documented).  
**GAP-MOB-ACT-06:** không start attendance-day / web report trong turn.  
**GAP-MOB-ACT-07:** không enqueue submit POST.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | `2026-09-01T00:48:12.000Z` |
| versionGate | ok · autopilot keep_current |
| contentHash | sha256:3f9c045045e58aa32dbf36fb0c5a9a55dcb159b8e1c052efa69c1cad33e4c3e9 |
| taskId | `task_cc8d9202` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.09.01.1 versionGate=ok -->
