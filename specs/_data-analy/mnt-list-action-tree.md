# Action tree — mnt-list (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · demo iOS + Android `#sc-mnt-list`  
Verify demo — **không** bịa nút.

```
mnt-list                      ← kind=list · DES-MOB-MNT-LIST · entry home + tab work · **this turn**
├── home                      ← nav back · go('home') · parent (reuse)
├── estimate                  ← hub row + card #i-sum · go('estimate') · DES-MOB-EST · enqueue
├── mnt-chat                  ← #i-chat · toast «Trao đổi công việc» · enqueue
├── mnt-progress              ← #i-sync · toast «Cập nhật trạng thái · ảnh + định vị» · enqueue
└── mnt-log                   ← #i-list (done card) · toast «Nhật ký xử lý» · enqueue
```

| feature | parent | action | demo | kind | share | reuse | mapCite | enqueue |
|---------|--------|--------|------|------|-------|-------|---------|---------|
| `mnt-list` | `home` | Công việc list | `#sc-mnt-list` `DES-MOB-MNT-LIST` | list | shared_action owner | — | `LinmTopBar` · `LinmSearchField` · `LinmListRow` · rich-card | **this turn** `task_659bf5c2` |
| `home` | — | Back Trang Chủ | nav `go('home')` | hub | shared_action | `home` | `LinmTopBar` | **không** (parent reuse) |
| `estimate` | `mnt-list` | Giao việc xử lý | `#sc-estimate` `DES-MOB-EST` · hub + `#i-sum` | sheet | unique | — | `LinmListRow` `#i-sum` | **pending_confirm** |
| `mnt-chat` | `mnt-list` | Trao đổi công việc | toast `#i-chat` | sheet | unique | — | `LinmIconButton` `#i-chat` | **pending_confirm** |
| `mnt-progress` | `mnt-list` | Cập nhật trạng thái | toast `#i-sync` | sheet | unique | — | `LinmIconButton` `#i-sync` | **pending_confirm** |
| `mnt-log` | `mnt-list` | Nhật ký xử lý | toast `#i-list` | sheet | unique | — | `LinmIconButton` `#i-list` | **pending_confirm** |

## Chrome (không enqueue)

| Control | Lý do |
|---------|--------|
| Back chevron | chrome |
| Search field | input · **GAP-MOB-ACT-07** domain |
| Lọc / filter | toast P1 chrome · không màn mới P1 |
| Status bar text | display |
| Tab 5 `work` | `shell-tabs` entry |
| Toast feedback | feedback · không route riêng ngoài sibling đã xếp |

**GAP-MOB-ACT-01:** không. List = 1 slug `mnt-list`.  
**GAP-MOB-ACT-02:** không gộp estimate form vào slug này.  
**GAP-MOB-ACT-03:** siblings route/CTA enqueue dưới đây.  
**GAP-MOB-ACT-07:** không enqueue search/filter input · không enqueue list GET.

## Enqueue sibling (pending_confirm · cấm auto start)

| feature | title board | status | note |
|---------|-------------|--------|------|
| `estimate` | [Mobile] [Công việc] -> Giao việc xử lý | pending_confirm | `#sc-estimate` · web estimate done ≠ mobile |
| `mnt-chat` | [Mobile] [Công việc] -> Trao đổi công việc | pending_confirm | comments API **DEFER** |
| `mnt-progress` | [Mobile] [Công việc] -> Cập nhật trạng thái | pending_confirm | POST progress + camera/GPS |
| `mnt-log` | [Mobile] [Công việc] -> Nhật ký xử lý | pending_confirm | toast P1 · Android parity gap |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T18:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-action-tree-20260828 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
