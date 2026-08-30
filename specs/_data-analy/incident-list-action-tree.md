# Action tree — incident-list (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · demo iOS + Android `#sc-incident-list`  
Verify demo — **không** bịa nút.

| | |
|---|---|
| feature | `incident-list` |
| owner | **this pack** `DES-MOB-INC-LIST` · Quản lý vấn đề |
| parent | `home` (tile + tab `incident`) |
| demo | `#sc-incident-list` · `DES-MOB-INC-LIST` |
| kind | `list` |
| taskId | `task_246a6ce0` |

## Tree

```
home
├── incident-list                 ← kind=list · DES-MOB-INC-LIST · **this turn**
│   ├── home                      ← nav back · go('home') · parent (reuse)
│   ├── vis-capture               ← banner Nhận diện mặt đường · go('vis-capture') · enqueue
│   ├── gis-map                   ← seg Bản đồ + card #i-mappin · go('gis-map') · enqueue/reuse
│   ├── incident-detail           ← card tap + #i-list · go('incident-detail') · enqueue
│   ├── mnt-list                  ← #i-briefcase Giao việc · go('mnt-list') · reuse
│   ├── incident-chat             ← #i-chat toast «Trao đổi sự cố» · enqueue
│   └── incident-create           ← FAB #i-plus · startIncidentPick() · reuse owner
├── (filter / search)             ← chrome / input · **cấm** enqueue
└── (GET list)                    ← cùng slug API · **cấm** enqueue
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `incident-list` | `home` | Vấn đề list | `#sc-incident-list` `DES-MOB-INC-LIST` | list | unique | — | `LinmTopBar` · `LinmSearchField` · `LinmSegment` · rich-card · `LinmFAB` | home tile · tab incident | **this turn** `task_246a6ce0` |
| `home` | — | Back Trang Chủ | nav `go('home')` | hub | shared_action | `home` | `LinmTopBar` | entry | **không** (parent reuse) |
| `vis-capture` | `incident-list` | Nhận diện mặt đường | `.vn-banner` `go('vis-capture')` `DES-MOB-VIS-CAPTURE` | screen | unique | — | banner `#i-camera` | list banner | **pending_confirm** |
| `gis-map` | `incident-list` | Bản đồ | seg + `#i-mappin` `#sc-gis-map` `DES-MOB-GIS` | map | shared_action | owner (asset-hub pending) | `LinmSegment` · `#i-mappin` | seg · card | **không** nếu đã `pending_confirm`/`done` · else **pending_confirm** |
| `incident-detail` | `incident-list` | Chi tiết vấn đề | `#sc-incident-detail` `DES-MOB-INC-DETAIL` · card/`#i-list` | screen | unique | — | rich-card · `#i-list` | card | **pending_confirm** |
| `mnt-list` | `incident-list` | Giao việc | `#i-briefcase` `go('mnt-list')` | list | shared_action | `mnt-list` | `#i-briefcase` | card action | **không** (đã có pack) |
| `incident-chat` | `incident-list` | Trao đổi sự cố | toast `#i-chat` | sheet | unique | — | `LinmIconButton` `#i-chat` | card action | **pending_confirm** |
| `incident-create` | `incident-list` | Ghi sự cố | FAB `startIncidentPick()` | sheet→screen | shared_action | `incident-create` | `LinmFAB` `#i-plus` | FAB | **không** (reuse owner) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Back chevron | chrome |
| Search field | input |
| Lọc / filter | toast P1 chrome · không màn mới P1 |
| Segment Danh sách (on) | stay surface |
| Status bar text · thumb | display |
| Tab 5 `incident` | `shell-tabs` entry |
| GET `incident/incidents` | cùng slug API · **cấm** enqueue submit/API |
| Toast feedback | feedback |

**GAP-MOB-ACT-01:** không — List = 1 slug `incident-list`.  
**GAP-MOB-ACT-02:** không gộp create form / detail / `#sheet-incident`.  
**GAP-MOB-ACT-03:** siblings route/CTA enqueue dưới đây.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-ACT-07:** không enqueue search/filter · không enqueue list GET.

## Enqueue sibling (pending_confirm · cấm auto start)

| feature | title board | status | note |
|---------|-------------|--------|------|
| `vis-capture` | [Mobile] [Vấn đề] -> Nhận diện mặt đường | pending_confirm · `task_086ba802` | `#sc-vis-capture` · `DES-MOB-VIS-CAPTURE` |
| `incident-detail` | [Mobile] [Vấn đề] -> Chi tiết | pending_confirm · `task_42bb4141` | `#sc-incident-detail` · `DES-MOB-INC-DETAIL` |
| `incident-chat` | [Mobile] [Vấn đề] -> Trao đổi sự cố | pending_confirm · `task_9e8d18c5` | toast P1 · comments API **DEFER** |
| `gis-map` | [Mobile] [Vấn đề] -> Bản đồ | skip / reuse | asset-hub shared_action owner |

**Không** enqueue: `mnt-list` · `incident-create` · `home` · filter/search · GET list.  
**Cấm** start sibling không Approve (`GAP-MOB-ACT-06`).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-action-tree-20260829 |
| taskId | `task_246a6ce0` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
