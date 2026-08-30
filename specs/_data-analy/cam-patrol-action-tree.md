# Action tree — cam-patrol

| | |
|---|---|
| feature | `cam-patrol` |
| owner | **this pack** `DES-MOB-CAM-PATROL` · Thu thập bằng camera |
| parent | `patrol-home` (entry) · also `#sc-inc-form` secondary CTA |
| demo | `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_21653e83` |

## Tree

```
patrol-home
├── field-reflect              ← sibling · phản ánh tay · **không** gộp
├── cam-patrol                 ← owner · DES-MOB-CAM-PATROL · **this turn**
│   ├── (finder + GPS stamp)   ← cùng slug controlHint · **cấm** enqueue
│   ├── (POST detect)          ← cùng slug · ai-vision/detect · **cấm** enqueue
│   ├── (confirm → incident)   ← cùng slug submit · POST incident · **cấm** enqueue
│   ├── (skip)                 ← chrome dismiss · **cấm** enqueue
│   └── patrol-offline         ← reuse khi queue mất sóng · **không** enqueue mới
├── patrol-map / patrol-checkin / …
inc-form
└── cam-patrol                 ← shared_action · secondary «Thu thập bằng camera»
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `cam-patrol` | `patrol-home` | Thu thập bằng camera | `.row` `#i-video` · `go('cam-patrol')` | sheet→screen | unique | — | `LinmListRow` `#i-video` · CameraFinder | hub quick | **this turn** `task_21653e83` |
| `cam-patrol` | `inc-form` | Thu thập bằng camera | `.btn-secondary` `go('cam-patrol')` | screen | shared_action | owner | same | incident form | **không** (reuse owner) |
| `patrol-home` | — | stay hub | after back | hub | reuse | `patrol-home` | — | nav back | **không** |
| `patrol-offline` | `cam-patrol` | sync queue | offline path | hub | reuse | `patrol-offline` | — | POST fail | **không** (đã có pack) |
| `field-reflect` | `patrol-home` | Ghi nhận hư hỏng | sibling row | screen | unique | owner | — | hub | **không** (đã enqueue / pipeline riêng) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Xác nhận · tạo vấn đề | submit · cùng slug + BFF row POST incident |
| Bỏ qua | chrome dismiss detection |
| Finder / FOV / stamp | display + device · controlHint |
| Detection list rows | display bind detect DTO |
| Toast ok / skip | feedback |
| GPS deny modal | reuse chrome `DES-MOB-GPS-DENY` |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** — không CTA route/màn mới ngoài owners đã có (`patrol-home` · `field-reflect` · `patrol-offline` · incident siblings) |
| Confirm / detect / skip / camera | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp field-reflect / cam-view.  
**GAP-MOB-ACT-03:** entry hub đã có trong scan `_form-type-mobile` · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không thiếu controller cho path đã chốt — detect stub body = GAP-MOB-CAM-DETECT-01 (SA), không tách sibling API.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T21:10:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-action-tree-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
