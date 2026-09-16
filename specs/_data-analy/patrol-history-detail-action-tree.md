# Action tree — patrol-history-detail

| | |
|---|---|
| feature | `patrol-history-detail` |
| owner | **this pack** `DES-MOB-PAT-DETAIL` |
| parent | `patrol-history` |
| changeScope | `edit_page` · timeline live |
| kind | `sheet` · surface screen |
| taskId | `task_dc906824` |

## Tree

```
patrol-home
└── patrol-history
    └── patrol-history-detail     ← owner · edit_page this turn
        ├── GET sessions/{id}           ← bind hero/info
        ├── GET sessions/{id}/check-ins ← timeline live · empty OK
        ├── patrol-map                  ← CTA map · reuse · cấm start
        └── patrol-checkin              ← timeline tap done · ≠ slug
```

## Rows

| feature | parent | action | kind | share | reuse | enqueue |
|---------|--------|--------|------|-------|-------|---------|
| `patrol-history-detail` | `patrol-history` | open detail + load session+check-ins | sheet→screen | unique | — | **this** `task_dc906824` |
| `patrol-map` | detail | Mở bản đồ ca | map | shared_action | `patrol-map` | **không** start |
| `patrol-checkin` | detail | tap timeline done | sheet | unique | CI-DETAIL | **không** start / gộp |
| `patrol-history` | home | back | list | reuse | — | **không** |

## Chrome / same-slug (GAP-MOB-ACT-07)

| Control | Lý do |
|---------|--------|
| GET session + GET check-ins | cùng slug load · **không** enqueue sibling |
| Hero / info / empty TL | display |
| Toast share / end | feedback P1 |
| Back | chrome |

## Enqueue sibling

| feature | status |
|---------|--------|
| `patrol-map` | reuse · **cấm** start (`GAP-MOB-ACT-06`) |
| `patrol-checkin` | khác slug · tap nav only · **cấm** gộp |
| GET check-ins | **Live** · **không** enqueue BE task |
| POST CI / PUT end | **OUT** · **cấm** enqueue |

**GAP-MOB-ACT-01/02/06/07:** pass · không gộp · không start sibling · không enqueue write.  
**GAP-MOB-BFF-01:** GetById + GetCheckIns **DONE** — Dev wire only.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-09-12T13:26:27.000Z` |
| versionGate | rechecked |
| contentHash | sha256:patrol-history-detail-action-tree-20260912-timeline-live |
| taskId | `task_dc906824` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
