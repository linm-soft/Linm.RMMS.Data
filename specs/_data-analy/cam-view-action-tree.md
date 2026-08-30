# Action tree — cam-view

| | |
|---|---|
| feature | `cam-view` |
| owner | **this pack** `DES-MOB-CAM-VIEW` · Camera xem |
| parent | `me` (entry) · also ops/home chip «Camera tuyến» |
| demo | `#sc-cam-view` · `DES-MOB-CAM-VIEW` |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_2a5ed594` |

## Tree

```
me
├── feedback                   ← sibling · **không** gộp
├── cam-view                   ← owner · DES-MOB-CAM-VIEW · **this turn**
│   ├── (JPEG preview)         ← cùng slug controlHint · **cấm** enqueue
│   ├── (GET cameras / events) ← cùng slug · **cấm** enqueue
│   ├── (Làm mới → snapshot)   ← cùng slug refresh · **cấm** enqueue
│   └── (event rows display)   ← chrome list · **cấm** enqueue
├── ops / patrol-offline / …
home / ops chips
└── cam-view                   ← shared_action · chip «Camera tuyến»
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `cam-view` | `me` | Camera xem | `.row` `#i-video` · `go('cam-view')` | sheet→screen | unique | — | `LinmListRow` `#i-video` · JPEG card | me hub | **this turn** `task_2a5ed594` |
| `cam-view` | `ops` / home | Camera tuyến | `.chip` `data-jump="cam-view"` | screen | shared_action | owner | same | chip jump | **không** (reuse owner) |
| `me` | — | stay hub | after back | hub | reuse | `me` | — | nav back | **không** |
| `camera-connect` | — | HW form web | — | web | — | web owner | — | — | **không** (OUT · web) |
| `cam-patrol` | `patrol-home` | Thu thập camera | sibling | screen | unique | owner | — | field | **không** (pipeline riêng) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Làm mới | refresh · cùng slug + BFF POST snapshot + GET events |
| JPEG card / caption | display bind snapshot DTO |
| Event list rows | display bind events · **không** detail route P1 |
| Toast refresh / fail | feedback |
| Empty-state | chrome khi không có cam |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** — không CTA route/màn mới ngoài owners đã có (`me` · `feedback` · `ops` · `cam-patrol` web `camera-connect`) |
| Refresh / events / JPEG | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp camera-connect / cam-patrol / vis-capture.  
**GAP-MOB-ACT-03:** entry hub đã có trong scan `_form-type-mobile` · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không thiếu controller — reuse `cameras*` live.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-29T17:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-view-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
