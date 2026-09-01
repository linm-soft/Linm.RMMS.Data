# Action tree — asset-adjust

| | |
|---|---|
| feature | `asset-adjust` |
| owner | **this pack** `DES-MOB-ASSET-ADJUST` · Cập nhật / bớt |
| parent | `asset-hub` (`#sc-asset-hub` · hub tile `#i-minus`) |
| demo | `#sc-asset-adjust` · modal `#md-asset-remove` · entry hub tile |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_0fcd1c99` |

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md` · `DEAD-BUTTONS.md`  
Verify: live iOS/Android hub tile → toast `asset.tile.adjust` → this turn fills owner.

## Tree

```
asset-hub                     ← hub DES-MOB-ASSET-HUB
├── asset-adjust              ← owner · DES-MOB-ASSET-ADJUST · **this turn**
│   ├── (search / list GET)   ← cùng slug bind · **cấm** enqueue
│   ├── asset-detail          ← «Sửa» · reuse · **không** start
│   ├── (Bớt modal + DELETE)  ← cùng slug submit · **cấm** enqueue
│   └── asset-hub             ← back · reuse parent
├── asset-collect / asset-ai  ← sibling · **không** gộp
├── asset (list)              ← sibling · **không** gộp
└── gis-map                   ← shared_action · **không** CTA adjust P1
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `asset-adjust` | `asset-hub` | Cập nhật / bớt | hub `#i-minus` · toast → **wire** · `#sc-asset-adjust` | sheet→screen | unique | — | `LinmHubTile` · `LinmSearchField` · `LinmListRow` · DangerButton | hub tile | **this turn** `task_0fcd1c99` |
| `asset-hub` | `home` | stay hub | after back | hub | reuse | `asset-hub` | — | nav back | **không** |
| `asset-detail` | `asset-adjust` | Sửa | row Secondary · `go('asset-detail')` | sheet→screen | unique | `asset-detail` | SecondaryButton | adjust Sửa | **không** (đã `task_f6ca06ad` · **cấm** start) |
| `asset-collect` | `asset-hub` | Thu thập | toast | form | unique | — | HubTile | hub | **không** |
| `asset-ai` | `asset-hub` | Camera AI | toast | form | unique | — | HubTile | hub | **không** |
| `asset` web Edit | — | Edit web | Kind B | web | — | web owner | — | — | **không** (OUT · web) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| SearchField | input · cùng slug bind GET |
| ListRow display | bind Code/Type/Route/Km |
| GET load / refresh | cùng slug |
| Modal open / Giữ lại | chrome confirm |
| Bớt khỏi sổ | submit DELETE · cùng slug + BFF |
| Toast ok / err | feedback |
| Back chevron | chrome nav parent |

## Enqueue sibling

| feature | status |
|---------|--------|
| `asset-detail` | đã `task_f6ca06ad` · **cấm** re-enqueue · **cấm** start (`GAP-MOB-ACT-06`) |
| `asset-collect` / `asset-ai` / `gis-map` | đã DEAD-BUTTONS / hub tree · **cấm** start |
| PUT edit form | **không** có demo surface · **cấm** invent enqueue · GAP EDIT-01 → PO |
| — new unique | **none** |

**GAP-MOB-ACT-01:** không — 1 slug owner.  
**GAP-MOB-ACT-02:** không gộp collect / AI / list / detail form.  
**GAP-MOB-ACT-03:** dead button hub toast → this turn fills · DEAD-BUTTONS `task_0fcd1c99`.  
**GAP-MOB-ACT-04:** share/mapCite stamped · detail = reuse unique.  
**GAP-MOB-BFF-01:** không thiếu — GetList + SoftDelete live proxy.  
**GAP-MOB-ACT-06:** không start detail / collect trong turn data_analy.  
**GAP-MOB-ACT-07:** không enqueue DELETE/PUT submit.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T23:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-adjust-action-tree-20260830 |
| taskId | `task_0fcd1c99` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
