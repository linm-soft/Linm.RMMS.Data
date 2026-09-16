# Action tree — patrol-checkin (`edit_page`)

| | |
|---|---|
| feature | `patrol-checkin` |
| owner | **this pack** `DES-MOB-PAT-CHECKIN-SHEET` |
| parent | `patrol-home` · map / pin handoff |
| demo | `#sheet-checkin` · `#sc-checkin-detail` |
| kind | `sheet` |
| changeScope | `edit_page` |
| taskId | `task_7e0ff15b` |

## Tree

```
patrol-home
├── patrol-pin                 ← handoff openSheet('checkin')
├── patrol-map                 ← entry CTA
└── patrol-checkin             ← owner · **this turn edit**
    ├── (submit)               ← POST check-ins + attachmentIds · cùng slug
    ├── (camera → file upload) ← files/* · cùng slug · **cấm** enqueue sibling mới
    ├── (leave modal)          ← DES-MOB-LEAVE
    ├── checkin-detail         ← cùng slug read
    ├── mobile-bff-file        ← reuse platform file pack · **không** enqueue mới nếu đã có
    └── patrol-offline         ← reuse queue
```

## Rows

| feature | parent | action | kind | share | reuse | enqueue |
|---------|--------|--------|------|-------|-------|---------|
| `patrol-checkin` | `patrol-home` | Ghi điểm tuần | sheet | unique | — | **this turn** `task_7e0ff15b` edit |
| `patrol-checkin` | `patrol-map` / `patrol-pin` | open sheet | sheet | shared_action | owner | **không** |
| `mobile-bff-file` | platform | files lifecycle | hub | reuse | `mobile-bff-file` | **không** (đã CTX) |
| `patrol-offline` | `patrol-checkin` | sync queue | hub | reuse | `patrol-offline` | **không** |

## Chrome / same-slug — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Lưu / Ghi nhận | submit + file commit · cùng slug |
| Camera / PhotoRow | media · cùng slug + files/* |
| Hủy / leave / toast / banner | chrome / feedback |
| Detail | cùng feature read |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** mới — file = reuse `mobile-bff-file` · offline = reuse |
| Submit / camera / leave | **cùng slug** — **cấm** GAP-MOB-ACT-07 |
| Start sibling không Approve | **cấm** GAP-MOB-ACT-06 |

**GAP-MOB-CI-PHOTO-UP-01** / **GAP-MOB-CI-PLAN-BE-01** — ghi BFF/real-data · **không** tách slug.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T12:38:16.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-action-tree-20260912-edit |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
