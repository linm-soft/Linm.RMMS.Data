# Action tree — me (verify scan)

Scan SSOT: `specs/_form-type-mobile/ACTION-TREE.md` · `BY-ACTION.md`  
Verify demo iOS + Android `#sc-me` — **không** bịa nút.

```
me                            ← kind=hub · tab Tôi · DES-MOB-ME · **this turn**
├── me-profile                ← hàng tên · iOS chevron · **không** go() · gap · **không** enqueue
├── patrol-offline            ← Hàng đợi mất sóng · go('patrol-offline') · enqueue sibling
├── me-signal                 ← Tín hiệu · shared_kit · skip
├── feedback                  ← Góp ý · go('feedback') · enqueue sibling
├── cam-view                  ← Camera xem · go('cam-view') · enqueue sibling
├── ops                       ← Thông báo · go('ops') · enqueue sibling
├── me-settings               ← Cài đặt · go('me-settings') · owner task_43c37168 · **không** gộp
└── login-logout              ← Đăng xuất · reuse=login-logout · **không** enqueue
```

Tab 5 = `shell-tabs` `shared_kit` — **không** enqueue.  
Home `.hero-ico` Hồ sơ `go('me')` = nav vào hub này — **không** slug mới.

| feature | parent | action | demo | kind | share | reuse | mapCite | enqueue |
|---------|--------|--------|------|------|-------|-------|---------|---------|
| `me` | — | Tab Tôi / hub | `#sc-me` `DES-MOB-ME` | hub | unique | — | `.large-title` · `LinmLargeTitle` | **this turn** `task_84e8e0e2` |
| `me-profile` | `me` | Hàng tên | row person · **không** `go()` | sheet | unique | — | `LinmListRow` | **không** (thiếu route) |
| `patrol-offline` | `me` | Hàng đợi mất sóng | `go('patrol-offline')` | list | shared_action owner | — | `LinmListRow` | **pending_confirm** |
| `me-signal` | `me` | Tín hiệu | `data-net-signal` | — | shared_kit | — | `LinmNetSignalMark` | **không** |
| `feedback` | `me` | Góp ý | `go('feedback')` | sheet | unique | — | `LinmListRow` `#i-info` | **pending_confirm** |
| `cam-view` | `me` | Camera xem | `go('cam-view')` | sheet | unique | — | `LinmListRow` `#i-video` | **pending_confirm** |
| `ops` | `me` | Thông báo | `go('ops')` | list | shared_action owner | — | `LinmListRow` `#i-bell` | **pending_confirm** |
| `me-settings` | `me` | Cài đặt | `#sc-me-settings` · `row-settings` | sheet | unique | — | `LinmListRow` `#i-gear` | **task_43c37168** (pipeline riêng) |
| `login-logout` | `me` | Đăng xuất | `logout()` | shell | shared_action | `login-logout` | `LinmListRow` danger | **không** (reuse) |

## Chrome (không enqueue)

| Control | Lý do |
|---------|--------|
| Tab 5 · nút Tôi | `shell-tabs` |
| Home profile circle | `LinmProfileButton` nav `me` |
| Tín hiệu / cột sóng | `shared_kit` |
| Badge 0 | `LinmBadge` ẩn |
| Chevron / Back | chrome |
| Home `btn-logout` | login e2e chrome — **không** slug `me` |

**GAP-MOB-ACT-01:** không. Hub = 1 slug `me`.  
**GAP-MOB-ACT-02:** không. `#sc-me` **không** child form. Action có route = sibling.  
**GAP-MOB-ACT-07:** không enqueue submit (không có).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.19.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.19 |
| rulesVersion | 2026.08.19.22 |
| generatedAt | 2026-08-19T02:05:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:2a7c7514a4afb35d7ea136a00a5e06a7e3f5c3d2edf8f92daf875959efb9e0d5 |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.19.17 schemaVersion=1 workflowVersion=2026.08.19.19 rulesVersion=2026.08.19.22 versionGate=rechecked -->
