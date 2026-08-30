# Action tree — patrol-checkin

| | |
|---|---|
| feature | `patrol-checkin` |
| owner | **this pack** `DES-MOB-PAT-CHECKIN-SHEET` · sheet Ghi điểm tuần |
| parent | `patrol-home` (entry) · also map / pin handoff |
| demo | `#sheet-checkin` · `DES-MOB-PAT-CHECKIN-SHEET` · `#sc-checkin-detail` · `DES-MOB-CI-DETAIL` |
| kind | `sheet` |
| taskId | `task_4ef69f42` |

## Tree

```
patrol-home
├── patrol-pin                 ← sibling owner ghim · handoff openSheet('checkin')
├── patrol-map                 ← entry CTA Ghi điểm tuần (reuse)
└── patrol-checkin             ← owner · DES-MOB-PAT-CHECKIN-SHEET · **this turn**
    ├── (submit Lưu / Ghi nhận) ← cùng slug · POST check-ins · **cấm** enqueue
    ├── (camera photo)          ← cùng slug controlHint · **cấm** enqueue
    ├── (leave modal)           ← chrome · DES-MOB-LEAVE
    ├── checkin-detail          ← cùng slug read · DES-MOB-CI-DETAIL · **không** sibling mới
    └── patrol-offline          ← reuse khi queue mất sóng · **không** enqueue mới nếu đã có
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `patrol-checkin` | `patrol-home` | Ghi điểm tuần | `.btn-ghost` / hub CTA `openSheet('checkin')` | sheet | unique | — | `LinmBottomSheet` · `LinmPrimaryButton` `#i-camera` | hub | **this turn** `task_4ef69f42` |
| `patrol-checkin` | `patrol-map` | Ghi điểm tuần | map nav / overlay CTA | sheet | shared_action | owner | same | map | **không** (reuse owner) |
| `patrol-checkin` | `patrol-pin` | sheet sau ghim | `pinHereCheckin()` → `openSheet('checkin')` | sheet | shared_action | owner | — | handoff | **không** |
| `patrol-home` | — | stay hub | after close | hub | reuse | `patrol-home` | — | after save | **không** |
| `patrol-offline` | `patrol-checkin` | sync queue | offline path | hub | reuse | `patrol-offline` | — | GET/POST fail | **không** (đã có pack) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Lưu (nav) · Ghi nhận điểm tuần | submit form · cùng slug + BFF row |
| Hủy · leave modal | chrome / discard |
| Fields readonly + Nội dung TextArea | input · controlHint |
| Photo slot / capture overlay | form media · cùng slug |
| Match banner toggle demo | display / gate |
| Toast success / block | feedback |
| Detail `#sc-checkin-detail` | cùng feature read surface |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** — không CTA route/màn mới ngoài owners đã có (`patrol-home` · `patrol-map` · `patrol-pin` · `patrol-offline`) |
| Submit / camera / leave | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug sheet.  
**GAP-MOB-ACT-02:** không gộp pin form.  
**GAP-MOB-ACT-03:** không thiếu hub CTA enqueue (entry reuse parents đã pipeline).  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** POST check-ins thiếu controller — ghi BFF table · **không** tách sibling API.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T19:52:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:patrol-checkin-action-tree-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
