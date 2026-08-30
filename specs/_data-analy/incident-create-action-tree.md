# Action tree — incident-create

| | |
|---|---|
| feature | `incident-create` |
| owner | **this pack** `DES-MOB-INC-FORM` · Ghi sự cố |
| parent | `home` (entry) · also FAB `incident-list` · CTA asset-type |
| demo | `#sc-inc-form` · `DES-MOB-INC-FORM` · `DES-MOB-INC-KIND` · `startIncidentPick()` · home quick |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_5f9013dd` |

## Tree

```
home
├── incident-create            ← owner · DES-MOB-INC-FORM · **this turn**
│   ├── (pick asset-types)     ← cùng flow entry · reuse asset catalog · **cấm** enqueue
│   ├── (kind pills)           ← cùng slug controlHint · **cấm** enqueue
│   ├── (checklist)            ← cùng slug · **cấm** enqueue
│   ├── (camera / PhotoRow)    ← cùng slug · **cấm** enqueue
│   ├── (POST detect)          ← cùng slug · ai-vision/detect · **cấm** enqueue
│   ├── (Tạo vấn đề)           ← cùng slug submit · POST incident · **cấm** enqueue
│   ├── (Lưu nháp mất sóng)    ← offline draft · reuse patrol-offline · **cấm** enqueue
│   ├── cam-patrol             ← secondary CTA · shared_action · **không** enqueue
│   ├── estimate               ← secondary CTA · sibling đã scan · **không** enqueue mới
│   └── patrol-offline         ← reuse khi queue · **không** enqueue mới
├── incident-list              ← FAB entry sibling · **không** gộp
├── field-reflect              ← sibling form · **không** gộp
└── #sheet-incident            ← OUT · DES-MOB-INC-CREATE-SHEET · **không** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `incident-create` | `home` | Ghi sự cố | home quick · `startIncidentPick()` · `#sc-inc-form` | sheet→screen | shared_action | — (owner) | `LinmQuickItem` | home · FAB · asset CTA | **this turn** `task_5f9013dd` |
| `home` | — | stay hub | after cancel pick | hub | reuse | `home` | — | entry | **không** |
| `incident-list` | `home` | FAB Ghi sự cố | `#sc-incident-list` `.fab` · `startIncidentPick()` | list | shared_action | owner | FAB | tab Vấn đề | **không** (reuse owner) |
| `cam-patrol` | `incident-create` | Thu thập bằng camera | `.btn-secondary` `go('cam-patrol')` | screen | shared_action | owner | — | form secondary | **không** (reuse owner) |
| `estimate` | `incident-create` | Giao việc xử lý | `.btn-secondary` `go('estimate')` | screen | unique | owner | — | form secondary | **không** (đã scan `pending_confirm`) |
| `patrol-offline` | `incident-create` | sync / Lưu trữ | «Lưu nháp mất sóng» | hub | reuse | `patrol-offline` | — | draft | **không** (đã có pack) |
| `field-reflect` | `patrol-home` | — | sibling | screen | unique | — | — | — | **không** (OUT) |
| `#sheet-incident` | — | Tạo sự cố sheet | `DES-MOB-INC-CREATE-SHEET` | sheet | — | — | — | — | **không** (OUT pack) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Tạo vấn đề | submit · cùng slug + BFF row POST incident |
| Lưu nháp mất sóng | offline draft · không màn mới |
| Kind pills Hư/Mất/Hỏng | input · controlHint |
| Checklist / severity / mô tả | input · controlHint |
| Photo / camera slot | form media · cùng slug |
| AI / loc rows | display bind |
| Asset pick grid | entry gate cùng flow |
| Toast ok / draft / pick | feedback |
| GPS deny modal | reuse chrome `DES-MOB-GPS-DENY` |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** — CTA route đã có owner (`cam-patrol` · `estimate` · `patrol-offline` · `incident-list`) |
| Create / detect / camera / kind / checklist / draft / pick | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner `#sc-inc-form`.  
**GAP-MOB-ACT-02:** không gộp `field-reflect` / `#sheet-incident`.  
**GAP-MOB-ACT-03:** entry home/FAB đã scan `_form-type-mobile` · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không thiếu controller cho path đã chốt — media/checklist = GAP field (SA).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T00:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-create-action-tree-20260829 |
| taskId | `task_5f9013dd` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
