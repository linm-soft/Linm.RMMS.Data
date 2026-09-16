# Action tree — field-reflect

| | |
|---|---|
| feature | `field-reflect` |
| owner | **this pack** `DES-MOB-FIELD-REFLECT` |
| parent | `patrol-home` |
| changeScope | `edit_page` · gap=`field_reflect_sessions_live_only` |
| packKind | **screen** |
| taskId | `task_d6e72d87` |

## Tree

```
patrol-home
├── field-reflect              ← owner · edit: live-only sessions bind
│   ├── (kind / camera / detect / checklist)  ← cùng slug · cấm enqueue
│   ├── (Tạo vấn đề)           ← POST incident · cấm enqueue
│   ├── (Lưu nháp mất sóng)    ← reuse patrol-offline · cấm enqueue
│   └── patrol-offline         ← reuse · không enqueue mới
├── cam-patrol                 ← sibling · không gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `field-reflect` | `patrol-home` | Ghi nhận hư hỏng | `#row-reflect` · `#i-camera` | screen | unique | — | `LinmListRow` `#i-camera` | hub | **this turn** edit `task_d6e72d87` |
| `patrol-home` | — | back hub | | hub | reuse | `patrol-home` | — | nav | **không** |
| `patrol-offline` | `field-reflect` | draft sync | offline CTA | hub | reuse | `patrol-offline` | — | draft | **không** |
| `cam-patrol` | `patrol-home` | finder AI | sibling | screen | unique | owner | — | hub | **không** |

## Chrome / same-slug — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Tạo vấn đề / Draft / Kind / Photo / Detect / Checklist / GPS deny | cùng slug · **cấm** enqueue |
| toastSessionsFail | feedback GET sessions · cùng slug |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** — edit chỉ sessions live-only · **không** CTA màn mới |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01…05:** OK · **GAP-MOB-BFF-01:** không · **GAP-MOB-FIELD-SESS-01:** open → Dev.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-12T10:33:53.000Z |
| versionGate | rechecked |
| contentHash | sha256:43744be6c3dc+field-reflect-tree-sess-20260912 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.09.05.03 schemaVersion=2 workflowVersion=2026.09.05.03 rulesVersion=2026.09.05.8 versionGate=rechecked -->
