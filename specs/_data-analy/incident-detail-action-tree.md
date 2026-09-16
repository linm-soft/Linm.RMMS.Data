# Action tree — incident-detail (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · demo iOS + Android `#sc-incident-detail`  
Verify demo — **không** bịa nút.

| | |
|---|---|
| feature | `incident-detail` |
| owner | **this pack** `DES-MOB-INC-DETAIL` · Chi tiết vấn đề |
| parent | `incident-list` (card / `#i-list`) · also after `incident-create` |
| demo | `#sc-incident-detail` · `DES-MOB-INC-DETAIL` |
| kind | `sheet` (STATUS/scan packKind) · surface = **screen** |
| taskId | `task_42bb4141` |

## Tree

```
incident-list
├── incident-detail              ← kind=screen · DES-MOB-INC-DETAIL · **this turn**
│   ├── incident-list            ← nav back · go('incident-list') · parent (reuse)
│   ├── estimate                 ← primary «Giao việc xử lý» · go('estimate') · reuse
│   ├── gis-map                  ← secondary «Xem trên bản đồ» · go('gis-map') · shared_action
│   └── (Đóng sự cố)             ← POST close · cùng slug · **cấm** enqueue
├── (GET by id)                  ← cùng slug API · **cấm** enqueue
└── incident-create              ← entry sau Create · **không** gộp form
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `incident-detail` | `incident-list` | Chi tiết vấn đề | `#sc-incident-detail` `DES-MOB-INC-DETAIL` | sheet→screen | unique | — | `LinmTopBar` · `LinmListRow` · `LinmBadge` · CTA | list card · create nav | **this turn** `task_42bb4141` |
| `incident-list` | `home` | Back Vấn đề | nav `go('incident-list')` | list | shared_action | `incident-list` | `LinmTopBar` | parent | **không** (parent reuse) |
| `estimate` | `incident-detail` | Giao việc xử lý | `.btn-primary` `go('estimate')` | screen | unique | owner | `LinmPrimaryButton` | CTA | **không** (đã scan / pack) |
| `gis-map` | `incident-detail` | Xem trên bản đồ | `.btn-secondary` `go('gis-map')` `#sc-gis-map` | map | shared_action | owner (asset-hub) | `LinmSecondaryButton` | CTA | **không** nếu đã `pending_confirm`/`done` · else skip re-enqueue |
| `incident-create` | — | entry after Create | `go('incident-detail')` | sheet→screen | shared_action | owner | — | post-create | **không** (reuse create owner) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Back chevron / «Vấn đề» | chrome |
| Hero mã · badge · rows | display bind |
| Đóng sự cố | submit · cùng slug + BFF POST close |
| GET `incident/incidents/{id}` | cùng slug API · **cấm** enqueue |
| Toast «Đã đóng sự cố» | feedback |
| Tab 5 `incident` | shell entry (không surface tab) |

**GAP-MOB-ACT-01:** không — Detail = 1 slug `incident-detail`.  
**GAP-MOB-ACT-02:** không gộp list / create / `#sheet-incident` / chat.  
**GAP-MOB-ACT-03:** CTA route đã có owner (`estimate` · `gis-map` · `incident-list`).  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-ACT-07:** không enqueue Close / GET · không enqueue chrome.

## Enqueue sibling (pending_confirm · cấm auto start)

| feature | title board | status | note |
|---------|-------------|--------|------|
| — | — | **none mới** | estimate · gis-map · incident-list đã có pack / pending_confirm từ list tree |

**Không** enqueue: `estimate` · `gis-map` · `incident-list` · `incident-create` · Close / GET.  
**Cấm** start sibling không Approve (`GAP-MOB-ACT-06`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T02:38:26.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-mobile-action-tree-20260829 |
| taskId | `task_42bb4141` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
