# Action tree — mobile-bff-file

| | |
|---|---|
| feature | `mobile-bff-file` |
| owner | **this pack** · File BFF + upload kit (sheet) |
| parent | platform · consumed by `patrol-checkin` · `incident-create` · `field-reflect` |
| demo | kit `LinmImageUpload` · host `#sheet-checkin` / `#sc-inc-form` PhotoRow |
| kind | **`sheet`** (STATUS · upload) |
| changeScope | `edit_page` |
| taskId | `task_32aa90dd` |
| generatedAt | `2026-09-12T15:33:17.000Z` |

## § Delta Current vs New

| Action | Current | New |
|--------|---------|-----|
| BFF files route | mounted | verify-only · **cấm** enqueue BFF rebuild |
| Upload lifecycle | check-in ad-hoc repo | cùng slug kit + purpose · **cấm** enqueue sibling path |
| Preview object | local only | `GET /object` JWT · cùng slug |
| Host form bind | check-in only | + **1** P1 form · shared_action · **không** enqueue full incident/field packs |

**Enqueue sibling:** none (kit/chrome same-slug · host forms = shared_action reuse).

## Tree

```
platform
├── mobile-bff-file              ← owner · sheet · **this turn**
│   ├── (BFF files/* wire)      ← CLOSED · verify · **cấm** enqueue
│   ├── (init→PUT→commit)       ← cùng slug · **cấm** enqueue
│   ├── (GET /object preview)   ← cùng slug · FILE-ATT-09
│   └── LinmImageUpload kit     ← Ask mobile_img_kit · dual · **cấm** enqueue OS-split
├── patrol-checkin              ← consumer · PhotoRow **shipped** · shared_action
├── incident-create             ← consumer P1 default · PhotoRow → attachmentId
├── field-reflect               ← alt consumer · **không** cả hai cùng turn nếu TL chốt 1
└── ai-vision                   ← peer uploads* · **không** gộp / **không** thay
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `mobile-bff-file` | platform | File BFF + kit | PhotoRow / upload | sheet | unique | — | `LinmImageUpload` · files/* | platform | **this turn** `task_32aa90dd` |
| `patrol-checkin` | patrol | Ghi điểm + ảnh | `#sheet-checkin` | sheet | shared_action | owner file | PhotoRow | check-in | **không** |
| `incident-create` | home | Ghi sự cố + ảnh | `#sc-inc-form` photos | sheet | shared_action | owner file | `#i-camera` | form P1 | **không** (bind only) |
| `field-reflect` | patrol-home | Ghi nhận + ảnh | `#sc-field-reflect` | screen | shared_action | owner file | PhotoRow | alt form | **không** trừ TL chọn thay incident |
| `ai-vision` | field | uploads* | peer | — | peer | — | — | detect | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Init / PUT / commit | lifecycle cùng slug |
| GET object preview | FILE-ATT-09 · cùng slug |
| progress / toastFail / remove | kit chrome |
| purpose meta | VM param |
| BFF rewrite / NuGet | host infra · verify |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none** |
| incident-create / field-reflect full packs | **không** enqueue — chỉ bind attachment trên form đã có |
| ai-vision | **peer** · giữ uploads* |

**GAP-MOB-ACT-01…04:** ok · **GAP-MOB-BFF-01:** File path live · client preview/kit/form = GAP-MOB-FILE-*.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-12T15:33:17.000Z |
| versionGate | rechecked |
| contentHash | sha256:mobile-bff-file-action-tree-20260912 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
