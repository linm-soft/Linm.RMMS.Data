# Action tree — nghiem-thu-create (mobile sheet)

| | |
|---|---|
| feature | `nghiem-thu-create` |
| owner | **this pack** `DES-MOB-NGHIEM-THU-CREATE` · Tạo nghiệm thu |
| parent | `nghiem-thu` · nav **Tạo** |
| demo | `#sc-nghiem-thu-create` · `DES-MOB-NGHIEM-THU-CREATE` |
| kind | **`sheet`** (STATUS/scan) · surface = **screen** |
| changeScope | `new_page` |
| taskId | `task_eb0e541f` |
| generatedAt | `2026-09-19T16:50:00.000Z` |

## § Delta Current vs New

| Action | Current | New |
|--------|---------|-----|
| Entry Tạo | list demo `go('nghiem-thu-create')` | ship owner sheet · **this turn** |
| Lưu | toast | cùng slug POST create draft · **cấm** enqueue |
| Hủy | `go('nghiem-thu')` | reuse parent list |
| Attach | toast FileService | cùng slug files + MediaIds · **cấm** enqueue |
| Detail after save | — | optional nav detail · sibling owner · **không** gộp |

## Tree

```
nghiem-thu
├── nghiem-thu-create           ← kind=sheet · DES-MOB-NGHIEM-THU-CREATE · **this turn**
│   ├── nghiem-thu              ← Hủy / back · reuse parent
│   ├── (init-data / mẫu)       ← cùng slug · **cấm** enqueue
│   ├── (GPS / vị trí)          ← cùng slug · **cấm** enqueue
│   ├── (files upload)          ← cùng slug FileService · **cấm** enqueue
│   ├── (Lưu nháp POST)         ← cùng slug submit · **cấm** enqueue
│   └── nghiem-thu-detail       ← optional after create · sibling · **không** start
nghiem-thu                      ← parent list · **không** gộp
nghiem-thu-detail               ← sibling · **không** gộp / **không** start
patrol-home                     ← hub · **không** gộp
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `nghiem-thu-create` | `nghiem-thu` | Tạo nghiệm thu | `#sc-nghiem-thu-create` `DES-MOB-NGHIEM-THU-CREATE` · list nav **Tạo** | sheet | unique | — | `LinmTopBar` · ListRow Mẫu/Vị trí/Đính kèm | nav create | **this turn** `task_eb0e541f` |
| `nghiem-thu` | `patrol-home` | Hủy / back | `go('nghiem-thu')` | list | shared_action | `nghiem-thu` | Hủy / `#i-chevron-left` | entry | **không** |
| `nghiem-thu-detail` | `nghiem-thu` | optional after save | — | sheet | unique | — | — | post-create | **pending_confirm** (đã scan · **cấm** start) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Lưu | submit · cùng slug + BFF POST |
| Mẫu picker | input · LOOKUP_STATIC |
| Vị trí / GPS | input · controlHint |
| Đính kèm / upload | form media · cùng slug files |
| Hủy | chrome back |
| Toast ok / fail | feedback |
| GPS deny modal | reuse chrome |
| Tab `field` | shell entry |

**GAP-MOB-ACT-01:** ok — create = 1 slug.  
**GAP-MOB-ACT-02:** không gộp list/detail.  
**GAP-MOB-ACT-03:** parent list + detail đã scan; this turn = create owner.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-ACT-06:** **cấm** start sibling detail trước Approve.  
**GAP-MOB-ACT-07:** không enqueue Lưu / files / init-data.

## Enqueue sibling

| feature | status | note |
|---------|--------|------|
| `nghiem-thu-detail` | **pending_confirm** (đã scan) | optional post-create · **không** start trong task này |
| `nghiem-thu` | **reuse** | parent list |
| Lưu / files / mẫu / GPS | **cùng slug** | **cấm** enqueue |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.5 |
| rulesVersion | 2026.09.19.7 |
| generatedAt | 2026-09-19T16:50:00.000Z |
| versionGate | ok |
| contentHash | sha256:nghiem-thu-create-action-tree-20260919 |
| taskId | `task_eb0e541f` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.5 rulesVersion=2026.09.19.7 versionGate=ok -->
