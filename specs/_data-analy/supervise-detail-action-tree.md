# Action tree — supervise-detail

| | |
|---|---|
| feature | `supervise-detail` |
| owner | **this pack** `DES-MOB-SUP-DETAIL` · Chi tiết check-in |
| parent | `supervise` (`#sc-supervise` · list pack) |
| demo | target `#sc-supervise-detail` · entry list rich-card (hiện sai `go('checkin-detail')`) |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_950d67b1` |

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `DEAD-BUTTONS.md`  
Verify: live iOS/Android list card → toast `supervise.toast.detail` → this turn fills owner.

## Tree

```
home
└── supervise                 ← tile Giám sát · DES-MOB-SUPERVISE · list
    └── supervise-detail      ← owner · DES-MOB-SUP-DETAIL · **this turn**
        ├── (GET attendance-logs/{id})  ← cùng slug load · **cấm** enqueue
        └── gis-map           ← CTA Xem trên bản đồ · shared_action · **không** start
patrol-home
└── supervise                 ← quick · reuse (không enqueue)
patrol-checkin
└── #sc-checkin-detail        ← DES-MOB-CI-DETAIL · **≠** slug này · **cấm** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `supervise-detail` | `supervise` | Tap check-in card | `#sc-supervise` rich-card · toast → **wire** · `#sc-supervise-detail` | sheet→screen | unique | — | `LinmRichCheckinCard` · hero UserName · PrimaryButton | supervise list | **this turn** `task_950d67b1` |
| `supervise` | `home` | stay list | after back | list | reuse | `supervise` | — | nav back | **không** |
| `gis-map` | `supervise-detail` | Xem trên bản đồ | `#sc-supervise-detail` Primary · `go('gis-map')` | map | shared_action | `gis-map` | `LinmPrimaryButton` | detail CTA | **không** (đã `task_23d7eba0` · **cấm** start) |
| `patrol-checkin` | — | field Ghi điểm | `#sc-checkin-detail` | sheet | unique | — | CI-DETAIL | field | **không** — **≠** owner |
| `patrol-map` | `supervise` | Segment Bản đồ | list segment | map | sibling | — | Segment | list only | **không** (OUT detail) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| GET load appear | cùng slug bind · **không** sibling |
| Hero UserName · rows Code / Tổ / Tuyến / Time / Status / GPS / InZone | display bind |
| Toast err / empty 404 | feedback |
| Back chevron | chrome nav parent |

## Enqueue sibling

| feature | status |
|---------|--------|
| `gis-map` | đã enqueue `task_23d7eba0` · **cấm** start (`GAP-MOB-ACT-06`) · **cấm** re-enqueue |
| `patrol-checkin` / `#sc-checkin-detail` | **khác slug** · **cấm** gộp / start từ đây |
| `patrol-map` | list segment toast · **không** enqueue từ detail |
| POST / PUT / DELETE attendance | **OUT** slug · **cấm** enqueue (`GAP-MOB-ACT-07`) |
| — new unique | **none** |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp list / CI-DETAIL / attendance CRUD.  
**GAP-MOB-ACT-03:** dead button list card toast → this turn fills · DEAD-BUTTONS `task_950d67b1`.  
**GAP-MOB-ACT-04:** share/mapCite stamped · gis-map = shared_action reuse.  
**GAP-MOB-BFF-01:** không thiếu — GetById live proxy.  
**GAP-MOB-ACT-06:** không start gis-map / patrol-checkin trong turn data_analy.  
**GAP-MOB-ACT-07:** không enqueue submit POST/PUT/DELETE.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | `2026-08-31T01:47:46.000Z` |
| versionGate | rechecked |
| contentHash | sha256:supervise-detail-action-tree-20260831 |
| taskId | `task_950d67b1` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
