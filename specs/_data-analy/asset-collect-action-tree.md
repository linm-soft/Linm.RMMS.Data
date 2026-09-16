# Action tree — asset-collect

| | |
|---|---|
| feature | `asset-collect` |
| owner | **this pack** `DES-MOB-ASSET-COLLECT` · Thu thập thủ công |
| parent | `asset-hub` tile Thủ công `#i-plus` |
| demo | `#sc-asset-collect` · `DES-MOB-ASSET-COLLECT` · hub `go('asset-collect')` |
| kind | `sheet` (STATUS/scan) · surface = **screen** form |
| taskId | `task_e9f0235f` |

Scan SSOT: `specs/_form-type-mobile/DEAD-BUTTONS.md` · hub ACTION-TREE · demo iOS + Android `#sc-asset-collect`  
Verify demo — **không** bịa nút.

## Tree

```
asset-hub
├── asset-collect              ← owner · DES-MOB-ASSET-COLLECT · **this turn**
│   ├── (type select)          ← cùng slug controlHint · **cấm** enqueue
│   ├── (name / routeKm / gps / status) ← input · **cấm** enqueue
│   ├── (camera / PhotoRow)    ← cùng slug · **cấm** enqueue
│   ├── (Thêm tài sản)         ← cùng slug submit · POST road-assets · **cấm** enqueue
│   └── asset-hub              ← nav back · reuse parent · **không** enqueue
├── asset-ai                   ← sibling hub · **không** gộp / **không** start
├── asset-adjust               ← sibling hub · **không** gộp
├── asset-list / asset-detail  ← sibling · **không** gộp
└── gis-map                    ← sibling · **không** CTA trên collect P1
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `asset-collect` | `asset-hub` | Thu thập thủ công | hub tile `#i-plus` · `#sc-asset-collect` | form/sheet | unique | — (owner) | `LinmHubTile` `#i-plus` | hub Thu thập | **this turn** `task_e9f0235f` |
| `asset-hub` | `home` | Back Tài sản | nav `go('asset-hub')` | hub | reuse | `asset-hub` | `LinmTopBar` | back | **không** (parent reuse) |
| `asset-ai` | `asset-hub` | Camera AI | sibling tile | form | unique | — | HubTile `#i-camera` | hub | **không** (đã DEAD-BUTTONS / pending) |
| `asset-adjust` | `asset-hub` | Cập nhật/bớt | sibling | list | unique | — | HubTile | hub | **không** |
| `asset` / `asset-detail` | hub / list | tra cứu | sibling | list/sheet | unique | — | — | — | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Thêm tài sản | submit · cùng slug + BFF row POST create |
| Loại / Tên / Tuyến / GPS / Tình trạng | input · controlHint |
| Photo / camera slot | form media · cùng slug · MEDIA GAP |
| Toast ok / err | feedback |
| GPS deny modal | reuse chrome `DES-MOB-GPS-DENY` |
| Back chevron | chrome · parent hub |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none mới** — form **không** secondary route CTA; siblings đã có DEAD-BUTTONS / hub tree |
| Create / camera / inputs | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner `#sc-asset-collect`.  
**GAP-MOB-ACT-02:** không gộp `asset-ai` / adjust / list / detail.  
**GAP-MOB-ACT-03:** entry hub đã scan DEAD-BUTTONS · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không thiếu controller Create — media = GAP field (SA).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-30T22:25:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-collect-action-tree-20260830 |
| taskId | `task_e9f0235f` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
