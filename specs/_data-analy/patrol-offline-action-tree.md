# Action tree — patrol-offline

| | |
|---|---|
| feature | `patrol-offline` |
| owner | **me** (Hàng đợi mất sóng) |
| reuse | **home** (tile Lưu trữ) |
| demo | `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| kind | `list` |
| taskId | `task_6e4103ce` |

## Tree

```
home
└── patrol-offline            ← tile Lưu trữ · go('patrol-offline') · reuse=patrol-offline
me
└── patrol-offline            ← Hàng đợi mất sóng · go('patrol-offline') · owner
```

## Rows

| feature | parent | action | demoRel | kind | share | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|---------|--------|
| `patrol-offline` | `home` | Lưu trữ | `#sc-patrol-offline` | list | shared_action | `LinmHomeTile` `#i-sync` | home tile · patrol nav · me |
| `patrol-offline` | `me` | Hàng đợi mất sóng | `#sc-patrol-offline` | list | shared_action (owner) | `LinmListRow` `#i-sync` | home tile · me |

## Enqueue

| feature | status |
|---------|--------|
| `patrol-offline` | **owner** · implement this pack |
