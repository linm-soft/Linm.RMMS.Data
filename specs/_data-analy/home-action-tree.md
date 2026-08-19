# Action tree — home (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md`  
Verify demo iOS + Android `#sc-home` — **không** bịa nút.

```
home                          ← kind=hub · tab Trang Chủ · DES-MOB-HOME · **this turn**
├── me                        ← .hero-ico Hồ sơ · go('me') · reuse=me
├── ops                       ← .hero-ico Thông báo · go('ops') · reuse=ops
├── me-signal                 ← .role + data-net-signal · shared_kit · skip
├── patrol-home               ← quick Điểm tuần + tile Tuần đường · go('patrol-home') · enqueue
├── incident-create           ← quick Ghi sự cố · startIncidentPick() · enqueue
├── supervise                 ← tile Giám sát · go('supervise') · enqueue
├── mnt-list                  ← tile Công việc · go('mnt-list') · enqueue
├── incident-list             ← tile Vấn đề · go('incident-list') · enqueue
├── asset-hub                 ← tile Tài sản + wallet · go('asset-hub') · enqueue
└── patrol-offline            ← tile Lưu trữ · go('patrol-offline') · reuse=patrol-offline
```

Tab 5 = `shell-tabs` `shared_kit` — **không** enqueue.  
Cùng `go()` trên 2 chỗ (quick + tile / tile + wallet) = **một** slug.

| feature | parent | action | demo | kind | share | reuse | mapCite | enqueue |
|---------|--------|--------|------|------|-------|-------|---------|---------|
| `home` | — | Tab Trang Chủ / hub | `#sc-home` `DES-MOB-HOME` | hub | unique | — | `.vn-hero` · `LinmHomeGrid` · `LinmQuickActions` | **this turn** `task_46fb294c` |
| `me` | `home` | Hồ sơ | `.hero-ico` `go('me')` | hub | shared_action | `me` | `LinmProfileButton` | **không** (reuse) |
| `ops` | `home` | Thông báo | `.hero-ico` `go('ops')` | list | shared_action | `ops` | `LinmNotifyButton` | **không** (reuse · đã `pending_confirm`) |
| `me-signal` | `home` | Tín hiệu | `data-net-signal` | — | shared_kit | — | `LinmStatusCapsule` | **không** |
| `patrol-home` | `home` | Điểm tuần / Tuần đường | `go('patrol-home')` | hub | shared_action owner | — | `LinmQuickItem` · `LinmHomeTile` `#i-mappin` | **pending_confirm** |
| `incident-create` | `home` | Ghi sự cố | `startIncidentPick()` | sheet | shared_action owner | — | `LinmQuickItem` | **pending_confirm** |
| `supervise` | `home` | Giám sát | `go('supervise')` | list | unique | — | `LinmHomeTile` `#i-list` | **pending_confirm** |
| `mnt-list` | `home` | Công việc | `go('mnt-list')` | list | unique | — | `LinmHomeTile` `#i-wrench` | **pending_confirm** |
| `incident-list` | `home` | Vấn đề | `go('incident-list')` | list | unique | — | `LinmHomeTile` `#i-warning` | **pending_confirm** |
| `asset-hub` | `home` | Tài sản / ví | `go('asset-hub')` | hub | shared_action owner | — | `LinmHomeTile` `#i-cube` · `LinmWalletCard` | **pending_confirm** |
| `patrol-offline` | `home` | Lưu trữ | `go('patrol-offline')` | list | shared_action | `patrol-offline` | `LinmHomeTile` `#i-sync` | **không** (reuse · đã `pending_confirm`) |

## Chrome (không enqueue)

| Control | Lý do |
|---------|--------|
| Tab 5 · nút Trang Chủ | `shell-tabs` |
| `.section-label` Nghiệp vụ thường dùng | `LinmSectionLabel` · không route |
| `.home-foot` «Phiên bản Gói 1» | Watermark · **cấm** ship |
| Tín hiệu / cột sóng | `shared_kit` |
| Badge 0 | `LinmNotifyCountBadge` ẩn |
| Back / Close | chrome |

**GAP-MOB-ACT-01:** không. Hub = 1 slug `home`.  
**GAP-MOB-ACT-02:** không. `#sc-home` **không** child form. Action có route = sibling.  
**GAP-MOB-ACT-03:** sibling route → enqueue `pending_confirm` (không start).  
**GAP-MOB-ACT-07:** không enqueue submit (không có).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.20 |
| rulesVersion | 2026.08.19.23 |
| generatedAt | 2026-08-19T05:22:12.000Z |
| versionGate | rechecked |
| contentHash | sha256:9f38399aa040cb3e106e719f47c76f67dd252503ca69eaed1d806bad164012ed |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.20 rulesVersion=2026.08.19.23 versionGate=rechecked -->
