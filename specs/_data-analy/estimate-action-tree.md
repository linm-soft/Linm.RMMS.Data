# Action tree — estimate

| | |
|---|---|
| feature | `estimate` |
| owner | **this pack** `DES-MOB-EST` · Giao việc xử lý |
| parent | `mnt-list` (primary) · also CTA `incident-create` / `incident-detail` |
| demo | `#sc-estimate` · `DES-MOB-EST` · mnt-list hub + `#i-sum` · `go('estimate')` |
| kind | `sheet` (scan / packet) · surface = **screen** |
| taskId | `task_b0b56370` |

## Tree

```
mnt-list
├── estimate                   ← owner · DES-MOB-EST · **this turn**
│   ├── (header SC / asset)    ← cùng slug display · **cấm** enqueue
│   ├── (assignee / qty / giá) ← cùng slug controlHint · **cấm** enqueue
│   ├── (Lưu nháp)             ← cùng slug submit draft · **cấm** enqueue
│   └── (Giao việc)            ← cùng slug submit WO · **cấm** enqueue
├── mnt-chat / mnt-progress / mnt-log  ← siblings · **không** gộp
incident-create / incident-detail
└── estimate                   ← shared CTA entry · reuse owner · **không** enqueue mới
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `estimate` | `mnt-list` | Giao việc xử lý | hub + `#i-sum` · `#sc-estimate` | sheet→screen | unique | — (owner) | `LinmListRow` `#i-sum` | mnt-list · inc CTA | **this turn** `task_b0b56370` |
| `mnt-list` | `home` | stay list | after back | list | reuse | `mnt-list` | — | nav back | **không** |
| `incident-create` | `home` | secondary CTA | `.btn-secondary` `go('estimate')` | sheet | shared_action | owner estimate | — | form secondary | **không** (reuse owner) |
| `incident-detail` | `incident-list` | Giao việc xử lý | primary CTA | screen | shared_action | owner estimate | — | detail | **không** (reuse owner) |
| `mnt-chat` | `mnt-list` | Trao đổi | toast `#i-chat` | sheet | unique | — | `#i-chat` | card | **không** (đã `pending_confirm`) |
| `mnt-progress` | `mnt-list` | Cập nhật TT | toast `#i-sync` | sheet | unique | — | `#i-sync` | card | **không** |
| `mnt-log` | `mnt-list` | Nhật ký | toast `#i-list` | sheet | unique | — | `#i-list` | done card | **không** |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Giao việc | submit · cùng slug + BFF POST work-orders |
| Lưu nháp | submit draft · cùng slug + BFF draft |
| Giao cho / Khối lượng / Đơn giá | input · controlHint |
| Thành tiền / SLA / Hạn | derived display |
| Header Từ sự cố / Loại TS | display bind |
| Toast ok / err | feedback UI |
| Back «Công việc» | chrome nav `mnt-list` |

## Enqueue sibling

| feature | status |
|---------|--------|
| — | **none mới** — owner `estimate` filled this turn (scan `pending_confirm` → done analy) |
| mnt-chat / mnt-progress / mnt-log | **giữ** `pending_confirm` (mnt-list tree) — **cấm** start |
| Giao việc / Lưu nháp / fields | **cùng slug** — **cấm** enqueue (`GAP-MOB-ACT-07`) |
| Start sibling không Approve | **cấm** (`GAP-MOB-ACT-06`) |

**GAP-MOB-ACT-01:** không — 1 slug owner `#sc-estimate`.  
**GAP-MOB-ACT-02:** không gộp mnt-* siblings / web Kind B list.  
**GAP-MOB-ACT-03:** entry mnt-list + incident CTA đã scan · this turn fills owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-BFF-01:** không — live estimates + work-orders + assign cite.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T04:20:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:estimate-mobile-action-tree-20260829 |
| taskId | `task_b0b56370` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
