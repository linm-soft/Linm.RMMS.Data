# Action tree — asset-detail

| | |
|---|---|
| feature | `asset-detail` |
| owner | **this pack** `DES-MOB-ASSET-DETAIL` · Chi tiết tài sản |
| parent | `asset` (`#sc-asset-list` · list pack) |
| demo | `#sc-asset-detail` · entry list row · adjust «Sửa» |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_f6ca06ad` |

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `DEAD-BUTTONS.md`  
Verify: live iOS/Android list row → toast `asset.list.toast.detail` → this turn fills owner.

## Tree

```
asset-hub                     ← hub DES-MOB-ASSET-HUB
├── asset (list)              ← `#sc-asset-list` DES-MOB-ASSET-LIST · parent entry
│   └── asset-detail          ← owner · DES-MOB-ASSET-DETAIL · **this turn**
│       ├── (GET road-assets/{id})  ← cùng slug load · **cấm** enqueue
│       └── gis-map           ← CTA Ghim trên bản đồ · reuse · **không** start
├── asset-adjust              ← «Sửa» → same `asset-detail` · PUT/DELETE OUT đây
├── asset-collect / asset-ai  ← sibling toast · **không** gộp
└── gis-map                   ← shared_action · task riêng
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `asset-detail` | `asset` | Row list / Chi tiết TS | `#sc-asset-list` `row-asset-*` · toast → **wire** · `#sc-asset-detail` | sheet→screen | unique | — | `LinmListRow` · hero Code · PrimaryButton | asset list · adjust Sửa | **this turn** `task_f6ca06ad` |
| `asset` | `asset-hub` | stay list | after back | list | reuse | `asset` | — | nav back | **không** |
| `gis-map` | `asset-detail` | Ghim trên bản đồ | `#sc-asset-detail` Primary · `go('gis-map')` | map | shared_action | `gis-map` | `LinmPrimaryButton` | detail CTA | **không** (đã `task_23d7eba0` · **cấm** start) |
| `asset-adjust` | `asset-hub` | Sửa / Bớt | adjust «Sửa» → detail | list | unique | — | Secondary/Danger | hub | **không** (pipeline `task_0fcd1c99`) |
| `asset-collect` | `asset-hub` | Thu thập | toast | form | unique | — | HubTile | hub | **không** |
| `asset` web form | — | View/Edit web | Kind B | web | — | web owner | — | — | **không** (OUT · web) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| GET load appear | cùng slug bind · **không** sibling |
| Hero Mã TS · rows Loại / Tuyến / Tọa độ | display bind |
| Toast err / empty 404 | feedback |
| Back chevron | chrome nav parent |

## Enqueue sibling

| feature | status |
|---------|--------|
| `gis-map` | đã enqueue `task_23d7eba0` `pending_confirm` · **cấm** start (`GAP-MOB-ACT-06`) · **cấm** re-enqueue |
| `asset-adjust` / `asset-collect` / `asset-ai` | đã có task DEAD-BUTTONS · **cấm** start |
| PUT / DELETE | **cùng domain** nhưng **OUT** slug — owner adjust · **cấm** enqueue từ detail (`GAP-MOB-ACT-07`) |
| — new unique | **none** |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp list / adjust / collect / AI.  
**GAP-MOB-ACT-03:** dead button list row toast → this turn fills · DEAD-BUTTONS `task_f6ca06ad`.  
**GAP-MOB-ACT-04:** share/mapCite stamped · gis-map = shared_action reuse.  
**GAP-MOB-BFF-01:** không thiếu — GetById live proxy.  
**GAP-MOB-ACT-06:** không start gis-map / adjust trong turn data_analy.  
**GAP-MOB-ACT-07:** không enqueue submit PUT/DELETE.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T21:15:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-action-tree-20260830 |
| taskId | `task_f6ca06ad` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
