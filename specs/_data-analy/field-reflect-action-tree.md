# Action tree — field-reflect

| | |
|---|---|
| feature | `field-reflect` |
| owner | **this pack** `DES-MOB-FIELD-REFLECT` · Ghi nhận hư hỏng |
| parent | `patrol-home` (entry) |
| demo | `#sc-field-reflect` · `DES-MOB-FIELD-REFLECT` · `DES-MOB-FIELD-KIND` · `#row-reflect` |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_d7dd64c8` |

## Tree

```
patrol-home
├── field-reflect              ← owner · DES-MOB-FIELD-REFLECT · **this turn**
│   ├── (kind pills)           ← cùng slug controlHint · **cấm** enqueue
│   ├── (camera / PhotoRow)    ← cùng slug · **cấm** enqueue
│   ├── (POST detect)          ← cùng slug · ai-vision/detect · **cấm** enqueue
│   ├── (checklist)            ← cùng slug · **cấm** enqueue
│   ├── (Tạo vấn đề)           ← cùng slug submit · POST incident · **cấm** enqueue
│   ├── (Lưu nháp mất sóng)    ← offline draft · reuse patrol-offline · **cấm** enqueue
│   └── patrol-offline         ← reuse khi queue · **không** enqueue mới
├── cam-patrol                 ← sibling · finder AI · **không** gộp
├── patrol-map / patrol-checkin / …
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `field-reflect` | `patrol-home` | Ghi nhận hư hỏng | `#row-reflect` · `#i-camera` · `go('field-reflect')` | sheet→screen | unique | — | `LinmListRow` `#i-camera` | hub quick | **this turn** `task_d7dd64c8` |
| `patrol-home` | — | stay hub | after back | hub | reuse | `patrol-home` | — | nav back | **không** |
| `patrol-offline` | `field-reflect` | sync / Lưu trữ | offline · «Lưu nháp mất sóng» | hub | reuse | `patrol-offline` | — | draft / POST fail | **không** (đã có pack) |
| `cam-patrol` | `patrol-home` | Thu thập bằng camera | sibling row | screen | unique | owner | — | hub | **không** (pipeline riêng) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Tạo vấn đề | submit · cùng slug + BFF row POST incident |
| Lưu nháp mất sóng | offline draft · không màn mới |
| Kind pills Hư/Mất/Hỏng | input · controlHint |
| Photo / camera slot | form media · cùng slug |
| Detect / Mức / Vị trí rows | display bind |
| Checklist checkboxes | input · controlHint |
| Toast ok / draft | feedback |
| GPS deny modal | reuse chrome `DES-MOB-GPS-DENY` |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** — không CTA route/màn mới ngoài owners đã có (`patrol-home` · `cam-patrol` · `patrol-offline`) |
| Create / detect / camera / kind / checklist / draft | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp cam-patrol / inc-form.  
**GAP-MOB-ACT-03:** entry hub đã có trong scan `_form-type-mobile` · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không thiếu controller cho path đã chốt — media/checklist = GAP field (SA), không tách sibling API.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T05:12:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:field-reflect-action-tree-20260829 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
