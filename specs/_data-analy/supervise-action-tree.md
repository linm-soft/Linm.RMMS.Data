# Action tree — supervise

| | |
|---|---|
| feature | `supervise` |
| owner | **push from home** · `#sc-supervise` |
| reuse | **home** tile Giám sát · **patrol-home** quick row Giám sát |
| demo | `#sc-supervise` · `DES-MOB-SUPERVISE` |
| kind | `list` |
| taskId | `task_e8ad42d2` |

## Tree

```
home
└── supervise              ← tile Giám sát · DES-MOB-SUPERVISE · push
patrol-home
└── supervise              ← row Giám sát · push (was pending_confirm)
supervise
├── checkin-detail         ← tap card · toast P1 · pending_confirm
└── patrol-map             ← segment Bản đồ · toast P1 · pending_confirm
```

## Rows

| feature | parent | action | demoRel | kind | share | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|---------|--------|
| `supervise` | `home` | Tile Giám sát | `#sc-supervise` | list | shared_action | `LinmHomeTile` | home grid |
| `supervise` | `patrol-home` | Quick Giám sát | `#sc-supervise` | list | shared_action | `LinmListRow` | patrol quick |
| `patrol-map` | `supervise` | Segment Bản đồ | `#sc-patrol-map` | map | sibling | `LinmSegment` idx 1 | toast P1 |
| `checkin-detail` | `supervise` | Tap card | `#sc-checkin-detail` | detail | sibling | `LinmRichCard` | toast P1 |

## Enqueue sibling (pending_confirm · cấm auto start)

| feature | status |
|---------|--------|
| `checkin-detail` | pending_confirm |
| `patrol-map` | pending_confirm |
