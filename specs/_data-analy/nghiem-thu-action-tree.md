# Action tree — nghiem-thu (mobile list)

| | |
|---|---|
| feature | `nghiem-thu` |
| owner | **this pack** `DES-MOB-NGHIEM-THU` · Công tác nghiệm thu |
| parent | `patrol-home` · `#row-nghiem-thu` |
| demo | `#sc-nghiem-thu` · `DES-MOB-NGHIEM-THU` · hub `#row-nghiem-thu` |
| kind | **`list`** |
| changeScope | `edit_page` |
| taskId | `task_1bd5874a` |
| generatedAt | `2026-09-19T15:29:13.000Z` |

## § Delta Current vs New

| Action | Current | New |
|--------|---------|-----|
| Hub row | demo `#row-nghiem-thu` → list | ship native nav · **this turn** |
| Row tap | demo `toast(NT-*)` | → sibling `nghiem-thu-detail` |
| Nav Tạo | demo `go('nghiem-thu-create')` | sibling create · **không** gộp form |
| GET list | demo static rows | cùng slug API · **cấm** enqueue |

## Tree

```
patrol-home
├── nghiem-thu                    ← kind=list · DES-MOB-NGHIEM-THU · **this turn**
│   ├── patrol-home               ← nav back · reuse parent
│   ├── nghiem-thu-create         ← nav Tạo · enqueue/reuse pending_confirm
│   ├── nghiem-thu-detail         ← row tap · enqueue/reuse pending_confirm
│   ├── (search / filter)         ← chrome · **cấm** enqueue
│   └── (GET list / init-data)    ← cùng slug API · **cấm** enqueue
├── field-reflect / cam-patrol / … ← siblings hub · **không** gộp
nghiem-thu-create                 ← sheet · **không** implement trong slug list
nghiem-thu-detail                 ← sheet · **không** implement trong slug list
```

## Rows

| feature | parent | action | demoRel | kind | share | reuse | mapCite | usedOn | enqueue |
|---------|--------|--------|---------|------|-------|-------|---------|--------|---------|
| `nghiem-thu` | `patrol-home` | Công tác nghiệm thu | `#row-nghiem-thu` · `#sc-nghiem-thu` `DES-MOB-NGHIEM-THU` | list | unique | — | `LinmTopBar` · `LinmSearchField` · `LinmListRow` `#i-check` | hub field | **this turn** `task_1bd5874a` |
| `patrol-home` | — | Back Tuần đường | nav `go('patrol-home')` | hub | shared_action | `patrol-home` | `#i-chevron-left` | entry | **không** |
| `nghiem-thu-create` | `nghiem-thu` | Tạo | nav **Tạo** `#sc-nghiem-thu-create` `DES-MOB-NGHIEM-THU-CREATE` | sheet | unique | — | TextButton trailing | nav | **pending_confirm** (scan · **cấm** start) |
| `nghiem-thu-detail` | `nghiem-thu` | Chi tiết NT | row tap (demo toast → nav) | sheet | unique | — | `LinmListRow` chevron | row | **pending_confirm** (scan · **cấm** start) |

## Chrome / same-slug (không enqueue) — GAP-MOB-ACT-07

| Control | Lý do |
|---------|--------|
| Back chevron | chrome |
| Search field | input |
| Status badge / row sub | display |
| GET `patrol/nghiem-thu` | cùng slug API |
| GET `init-data` | cùng slug API |
| Empty / fail toast | feedback |
| Tab `field` | shell entry |

**GAP-MOB-ACT-01:** ok — list = 1 slug.  
**GAP-MOB-ACT-02:** không gộp create/detail form.  
**GAP-MOB-ACT-03:** siblings create/detail đã queue `pending_confirm`.  
**GAP-MOB-ACT-04:** share/mapCite stamped.  
**GAP-MOB-ACT-06:** **cấm** start sibling trước Approve.  
**GAP-MOB-ACT-07:** không enqueue search/GET.

## Enqueue sibling

| feature | status | note |
|---------|--------|------|
| `nghiem-thu-create` | **pending_confirm** (đã scan) | `#sc-nghiem-thu-create` · **không** start trong task này |
| `nghiem-thu-detail` | **pending_confirm** (đã scan) | row tap · **không** start |
| Confirm / search / GET | **cùng slug** | **cấm** enqueue |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.3 |
| rulesVersion | 2026.09.19.6 |
| generatedAt | 2026-09-19T15:29:13.000Z |
| versionGate | ok |
| contentHash | sha256:nghiem-thu-action-tree-20260919 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.3 rulesVersion=2026.09.19.6 versionGate=ok -->
