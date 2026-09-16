# Action tree — patrol-offline

| | |
|---|---|
| feature | `patrol-offline` |
| owner | **me** (Hàng đợi mất sóng) |
| reuse | **home** (tile Lưu trữ) · patrol-home nav Đồng bộ |
| demo | `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| kind | `list` |
| changeScope | `edit_page` |
| gap | `offline_sync_apply_checkins` |
| taskId | `task_82f104b5` |

## Tree

```
home
└── patrol-offline            ← tile Lưu trữ · go('patrol-offline') · reuse
me
└── patrol-offline            ← Hàng đợi mất sóng · owner
patrol-home (nav)
└── patrol-offline            ← Đồng bộ · reuse route (stub OK P1)
patrol-check-in (sibling)
└── enqueue → patrol-offline  ← writer · must persist sessionId+body (delta)
```

## Rows

| feature | parent | action | demoRel | kind | share | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|---------|--------|
| `patrol-offline` | `home` | Lưu trữ | `#sc-patrol-offline` | list | shared_action | `LinmHomeTile` | home · me · patrol nav |
| `patrol-offline` | `me` | Hàng đợi mất sóng | `#sc-patrol-offline` | list | shared_action (owner) | `LinmListRow` | me |
| `patrol-offline` | check-in writer | enqueue offline | local store | — | producer | `SubmitPatrolCheckIn` | payload full **NEW** |

## Sync actions (delta)

| action | API | note |
|--------|-----|------|
| replay checkIn | `POST patrol/sessions/{id}/check-ins` | primary DoD |
| receipt | `POST integration/sync/offline-batch` | optional after OK |
| list / badge | local | **cấm** GET |

## Enqueue

| feature | status |
|---------|--------|
| `patrol-offline` | **owner** · edit_page apply-checkins · keep PO/Design |
