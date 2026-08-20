# Action tree — patrol-history

| | |
|---|---|
| feature | `patrol-history` |
| parent | `patrol-home` |
| demo | `#sc-patrol-history` · `DES-MOB-PAT-LIST` |
| kind | `list` |
| taskId | `task_73b95722` |

## Tree

```
patrol-home
└── patrol-history          ← owner · DES-MOB-PAT-LIST · row Lịch sử phiên
    └── patrol-detail       ← P2 · tap row toast P1
```

## Rows

| feature | parent | action | demoRel | kind | share |
|---------|--------|--------|---------|------|-------|
| `patrol-history` | `patrol-home` | Lịch sử phiên | `#sc-patrol-history` | list | new |

## Sibling enqueue

| feature | status |
|---------|--------|
| `patrol-detail` | **pending_confirm** · P2 detail push |
