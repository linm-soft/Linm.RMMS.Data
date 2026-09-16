# Action tree — feedback

| | |
|---|---|
| feature | `feedback` |
| owner | **this pack** `DES-MOB-FEEDBACK` · Góp ý |
| parent | `me` (entry) |
| demo | `#sc-feedback` · `DES-MOB-FEEDBACK` · Me row `go('feedback')` · `#i-info` |
| kind | `sheet` (packet / me-action-tree) · surface = **screen** |
| taskId | `task_be769223` |

## Tree

```
me
├── feedback                   ← owner · DES-MOB-FEEDBACK · **this turn**
│   ├── (body textarea)        ← cùng slug controlHint · **cấm** enqueue
│   ├── (Gửi góp ý)            ← cùng slug submit · POST integration/feedbacks · **cấm** enqueue
│   └── (toast Đã gửi)         ← feedback UI · **cấm** enqueue
├── patrol-offline / cam-view / ops / …
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `feedback` | `me` | Góp ý | Me row · `#i-info` · `go('feedback')` · `#sc-feedback` | sheet→screen | unique | — | `LinmListRow` `#i-info` | Me «Cập nhật thông tin» | **this turn** `task_be769223` |
| `me` | — | stay hub | after back | hub | reuse | `me` | — | nav back | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Gửi góp ý | submit · cùng slug + BFF row POST |
| Body textarea | input · controlHint |
| Toast ok / err | feedback UI |
| Back «Tôi» | chrome nav `me` |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** — không CTA route/màn mới ngoài owner `me` đã có |
| Gửi / body / toast | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |
| Prior me-tree `pending_confirm` | **filled this turn** — owner `feedback` |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp `citizen` / web list.  
**GAP-MOB-ACT-03:** entry Me đã scan · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không — live `AppFeedbacksController` cite.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T06:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:feedback-mobile-action-tree-20260829 |
| taskId | `task_be769223` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
