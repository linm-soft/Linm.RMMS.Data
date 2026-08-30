# Action tree — vis-capture

| | |
|---|---|
| feature | `vis-capture` |
| owner | **this pack** `DES-MOB-VIS-CAPTURE` · Nhận diện mặt đường |
| parent | `incident-list` (entry banner) · also AI hub row / chip |
| demo | `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` · `.vn-banner` `go('vis-capture')` |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_086ba802` |

## Tree

```
incident-list
├── vis-capture                ← owner · DES-MOB-VIS-CAPTURE · **this turn**
│   ├── (PhotoRow / camera)    ← cùng slug controlHint · **cấm** enqueue
│   ├── (GPS stamp / gate)     ← cùng slug · device · **cấm** enqueue
│   ├── (POST detect)          ← cùng slug · ai-vision/detect · **cấm** enqueue
│   ├── (Gắn sự cố)            ← cùng slug submit · POST incident · **cấm** enqueue
│   ├── (Bỏ qua)               ← chrome dismiss · **cấm** enqueue
│   └── patrol-offline         ← reuse khi queue mất sóng · **không** enqueue mới
├── incident-create            ← sibling form · **không** gộp
├── incident-detail            ← list cards · **không** gộp
ai / asset hub
├── det-hitl                   ← sibling HITL TS · **không** gộp
└── cam-patrol                 ← sibling finder · **không** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `vis-capture` | `incident-list` | Nhận diện mặt đường | `.vn-banner` `#i-camera` · `go('vis-capture')` · `#sc-vis-capture` | sheet→screen | unique | — (owner) | Banner `#i-camera` · PhotoRow | list banner | **this turn** `task_086ba802` |
| `vis-capture` | AI hub / chip | Nhận diện mặt đường | chip `data-jump` · hub row | screen | shared_action | owner | same | hub | **không** (reuse owner) |
| `incident-list` | — | stay list | after back / Bỏ qua | list | reuse | `incident-list` | — | nav back | **không** |
| `patrol-offline` | `vis-capture` | sync queue | offline path | hub | reuse | `patrol-offline` | — | POST fail | **không** (đã có pack) |
| `cam-patrol` | `patrol-home` | — | sibling | screen | unique | owner | — | — | **không** (OUT) |
| `det-hitl` | `asset-hub` | — | sibling | screen | unique | — | — | — | **không** (OUT) |
| `incident-create` | `home` | — | sibling form | screen | unique | owner | — | — | **không** (OUT) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Gắn sự cố | submit · cùng slug + BFF row POST incident |
| Bỏ qua | chrome dismiss · nav list |
| PhotoRow / camera slot | form media · cùng slug |
| Loc / Acc / Phân loại / Mức rows | display bind detect + GPS |
| Toast ok / GPS block | feedback |
| GPS deny modal | reuse chrome `DES-MOB-GPS-DENY` |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** — CTA route đã có owner (`incident-list` · `cam-patrol` · `det-hitl` · `incident-create` · `patrol-offline`) |
| Attach / detect / camera / skip / GPS | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner `#sc-vis-capture`.  
**GAP-MOB-ACT-02:** không gộp cam-patrol / det-hitl / incident-create.  
**GAP-MOB-ACT-03:** entry banner đã scan `_form-type-mobile` · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không thiếu controller cho path đã chốt — detect stub = GAP-MOB-VIS-DETECT-01 (SA).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T08:28:20.000Z` |
| versionGate | rechecked |
| contentHash | sha256:vis-capture-action-tree-20260829 |
| taskId | `task_086ba802` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
