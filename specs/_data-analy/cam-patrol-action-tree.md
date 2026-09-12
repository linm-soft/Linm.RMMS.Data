# Action tree — cam-patrol

| | |
|---|---|
| feature | `cam-patrol` |
| owner | **this pack** `DES-MOB-CAM-PATROL` · Thu thập bằng camera |
| parent | `patrol-home` (entry) · also `#sc-inc-form` secondary CTA |
| demo | `#sc-cam-patrol` · `DES-MOB-CAM-PATROL` · `DES-MOB-CAM-FINDER` |
| kind | **`screen`** (STATUS · GAP-MOB-CAM-PACK-01 closed) |
| changeScope | `edit_page` |
| taskId | `task_9ab16ef2` |
| generatedAt | `2026-09-12T11:16:49.000Z` |

## § Delta Current vs New

| Action | Current | New |
|--------|---------|-----|
| (POST detect) | cùng slug · body thiếu frame | cùng slug · **capture frame → base64** rồi POST · fail toast · **cấm** enqueue sibling |
| Chrome | unchanged | toastDetectFail đã có · siết **cấm** fake class |

**Enqueue sibling:** none.

## Tree

```
patrol-home
├── field-reflect              ← sibling · **không** gộp
├── cam-patrol                 ← owner · DES-MOB-CAM-PATROL · **this turn edit**
│   ├── (finder + GPS stamp)   ← cùng slug · **cấm** enqueue
│   ├── (capture frame)        ← cùng slug · device · **cấm** enqueue
│   ├── (POST detect + ImageBase64) ← cùng slug · **cấm** enqueue
│   ├── (confirm → incident)   ← cùng slug · **cấm** enqueue
│   ├── (skip)                 ← chrome · **cấm** enqueue
│   └── patrol-offline         ← reuse offline · **không** enqueue mới
├── patrol-map / patrol-checkin / …
inc-form
└── cam-patrol                 ← shared_action · secondary
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `cam-patrol` | `patrol-home` | Thu thập bằng camera | `.row` `#i-video` · `go('cam-patrol')` | screen | unique | — | `LinmListRow` `#i-video` · CameraFinder | hub | **this turn** `task_9ab16ef2` edit |
| `cam-patrol` | `inc-form` | Thu thập bằng camera | `.btn-secondary` `go('cam-patrol')` | screen | shared_action | owner | same | incident form | **không** |
| `patrol-home` | — | stay hub | after back | hub | reuse | `patrol-home` | — | nav back | **không** |
| `patrol-offline` | `cam-patrol` | sync queue | offline | hub | reuse | `patrol-offline` | — | POST fail | **không** |
| `field-reflect` | `patrol-home` | Ghi nhận hư hỏng | sibling | screen | unique | owner | — | hub | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Capture frame | device · cùng slug trước detect |
| Xác nhận · tạo vấn đề | submit · POST incident |
| Bỏ qua | dismiss detection |
| Finder / FOV / stamp | display + device |
| Detection rows | bind detect DTO (real frame only) |
| Toast ok / skip / detectFail | feedback |
| GPS deny modal | reuse `DES-MOB-GPS-DENY` |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** |
| Confirm / detect / skip / camera / frame | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |

**GAP-MOB-ACT-01…04:** ok · **GAP-MOB-BFF-01:** không · path giữ · client frame = GAP-MOB-CAM-FRAME-01.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T11:16:49.000Z |
| versionGate | rechecked |
| contentHash | sha256:cam-patrol-action-tree-20260912-frame |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
