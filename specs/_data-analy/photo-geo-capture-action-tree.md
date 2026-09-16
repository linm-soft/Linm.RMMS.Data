# Action tree — photo-geo-capture

| | |
|---|---|
| feature | `photo-geo-capture` |
| owner | **this pack** · sheet capture + gim + object geo + HITL map |
| parent | host PhotoRow · consumers `field-reflect` · `vis-capture` · `incident-create` |
| demo | host `#sc-field-reflect` / `#sc-vis-capture` / `#sc-inc-form` · Design dual proto pending |
| kind | **`sheet`** (STATUS · CTX) |
| changeScope | `new_page` |
| taskId | `task_fc7c8ad5` |
| generatedAt | `2026-09-12T17:20:00.000Z` |

## § Delta Current vs New

| Action | Current | New |
|--------|---------|-----|
| openCapture host | GPS chỗ đứng / detect only | → sheet photo-geo · object lat/lng + attachmentId |
| File upload | peer mobile-bff-file | purpose=`photo-geo-capture` · cùng files/* · **cấm** invent |
| Map | patrol-pin = chỗ đứng | HITL object pin · reuse map · **khác** patrol-pin |
| Detect Lat/Lng | photographer / stub | object HITL optional |

**Enqueue sibling:** none — consumers đã có pack · shared_action openCapture only.

## Tree

```
patrol-home / incident-list
├── field-reflect              ← consumer · PhotoRow openCapture
├── vis-capture                ← consumer · openCapture('vision') → may chain photo-geo
├── incident-create            ← consumer · `#sc-inc-form` photos
└── photo-geo-capture          ← owner · sheet · **this turn**
    ├── (capture + EXIF + IMU) ← cùng slug · on-device
    ├── (gim 1 pin)            ← cùng slug
    ├── (distance + object geo)← cùng slug · pinhole
    ├── (map HITL)             ← reuse patrol-map / gis-map · **không** enqueue
    ├── mobile-bff-file        ← files/* · shared_action · **không** enqueue
    └── (optional detect)      ← ai-vision/detect · peer · **không** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `photo-geo-capture` | host PhotoRow | Chụp + tọa độ vật thể | sheet capture | sheet | unique | — | DES-MOB-PGC · `#i-camera` | openCapture | **this turn** `task_fc7c8ad5` |
| `mobile-bff-file` | platform | files init/PUT/commit | PhotoRow | sheet | shared_action | owner file | files/* | upload | **không** |
| `field-reflect` | patrol-home | form + ảnh | `#sc-field-reflect` | screen | shared_action | owner pgc | PhotoRow | consumer | **không** |
| `vis-capture` | incident | detect + ảnh | `#sc-vis-capture` | sheet | shared_action | owner pgc | PhotoRow | consumer | **không** |
| `incident-create` | home | form + MediaIds | `#sc-inc-form` | sheet | shared_action | owner pgc | photos | consumer | **không** |
| `patrol-pin` | patrol-home | GPS **chỗ đứng** | pin-here | sheet | peer | — | — | **khác** object | **không** |
| `patrol-map` / `gis-map` | map | HITL drag | map overlay | — | shared_action | map | pin | HITL | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| shutter / preview / gim | cùng slug |
| distance / object coord rows | derived on-device |
| map confirm / banners | HITL chrome cùng slug |
| gpsDeny / toastFail / toastOk | cùng slug |
| files lifecycle | reuse mobile-bff-file paths |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** |
| field-reflect / vis-capture / incident-create | **không** enqueue — chỉ bind openCapture + return payload |
| mobile-bff-file | **peer done** · reuse |
| patrol-pin | **peer** · chỗ đứng · **không** gộp |

**GAP-MOB-ACT-01…04:** ok · **GAP-MOB-BFF-01:** files live · object geo = device · BE object cols = SA.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T17:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:photo-geo-capture-action-tree-20260912 |
| ctxHash | sha256:96c48bab551b693f |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 -->
