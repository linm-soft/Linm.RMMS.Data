# Action tree — asset-ai

| | |
|---|---|
| feature | `asset-ai` |
| owner | **this pack** `DES-MOB-ASSET-AI` · Camera AI |
| parent | `asset-hub` tile Camera AI `#i-camera` |
| demo | `#sc-asset-ai` · `DES-MOB-ASSET-AI` · hub `go('asset-ai')` |
| kind | `sheet` (STATUS/scan) · surface = **screen** |
| taskId | `task_fcd587c7` |

Scan SSOT: hub ACTION-TREE · DEAD-BUTTONS · demo iOS + Android `#sc-asset-ai`  
Verify demo — **không** bịa nút.

## Tree

```
asset-hub
├── asset-ai                   ← owner · DES-MOB-ASSET-AI · **this turn**
│   ├── (camera / PhotoRow)    ← cùng slug · **cấm** enqueue
│   ├── (GPS / vị trí chốt)    ← cùng slug · **cấm** enqueue
│   ├── (upload + detect)      ← cùng slug submit · POST detect-assets · **cấm** enqueue
│   ├── (Hủy / back)           ← nav hub · reuse parent · **không** enqueue
│   └── det-hitl               ← sau Gửi nhận diện · sibling HITL · **enqueue**
├── asset-collect              ← sibling hub · **không** gộp / **không** start
├── asset-adjust               ← sibling hub · **không** gộp
├── asset-list / asset-detail  ← sibling · **không** gộp
└── gis-map                    ← sibling · **không** CTA trên AI P1
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `asset-ai` | `asset-hub` | Camera AI | hub tile `#i-camera` · `#sc-asset-ai` | form/sheet | unique | — (owner) | `LinmHubTile` `#i-camera` | hub Thu thập | **this turn** `task_fcd587c7` |
| `asset-hub` | `home` | Back Tài sản | nav `go('asset-hub')` | hub | reuse | `asset-hub` | `LinmTopBar` | back / Hủy | **không** (parent reuse) |
| `det-hitl` | `asset-ai` / hub | Phát hiện TS / xác nhận | CTA `go('det-hitl')` · `#sc-det-hitl` | form | unique | — | PrimaryButton | after detect | **yes** (HITL-01) |
| `asset-collect` | `asset-hub` | Thủ công | sibling tile | form | unique | — | HubTile `#i-plus` | hub | **không** |
| `asset-adjust` | `asset-hub` | Cập nhật/bớt | sibling | list | unique | — | HubTile | hub | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Gửi nhận diện (detect call) | submit · cùng slug + BFF row POST detect |
| Photo / camera slot | form media · cùng slug · MEDIA |
| GPS / vị trí row | input/bind · controlHint |
| Toast ok / err | feedback |
| GPS deny modal | reuse chrome `DES-MOB-GPS-DENY` |
| Back / Hủy | chrome · parent hub |

## Enqueue sibling

| feature | status |
|---------|--------|
| `det-hitl` | **enqueue** — demo CTA `go('det-hitl')` sau Gửi nhận diện · confirm/dismiss **không** ship trên `asset-ai` |
| Create road-assets / collect | **không** — sibling `asset-collect` |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) trừ handoff HITL đã stamp |

**GAP-MOB-ACT-01:** không — 1 slug owner `#sc-asset-ai`.  
**GAP-MOB-ACT-02:** không gộp collect / adjust / list / confirm UI.  
**GAP-MOB-ACT-03:** entry hub DEAD-BUTTONS · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không thiếu controller detect/uploads — media wire = field GAP (uploads live).

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T17:00:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:asset-ai-action-tree-20260901 |
| taskId | `task_fcd587c7` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked -->
