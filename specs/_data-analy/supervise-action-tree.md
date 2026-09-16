# Action tree — supervise

| | |
|---|---|
| feature | `supervise` |
| owner | **push from home** · `#sc-supervise` |
| reuse | **home** tile Giám sát · **patrol-home** quick row Giám sát |
| demo | `#sc-supervise` · `DES-MOB-SUPERVISE` |
| kind | `list` |
| changeScope | `edit_page` |
| taskId | `task_82b70c41` |

## § Delta Current vs New

| Edge | Current | New |
|------|---------|-----|
| Filter | toast dead-end | sheet live · stay on `supervise` |
| `patrol-map` | toast · pending_confirm only | **navigate** sibling (native screen exists) |
| `checkin-detail` / supervise-detail | push wired | **giữ** |

## Tree

```
home
└── supervise              ← tile Giám sát · DES-MOB-SUPERVISE · push
patrol-home
└── supervise              ← row Giám sát · push
supervise
├── [filter sheet]         ← Lọc · route query + date client · **cấm** toast
├── supervise-detail       ← tap card · push (wired)
└── patrol-map             ← segment Bản đồ · **push sibling** (cấm toast)
```

## Rows

| feature | parent | action | demoRel | kind | share | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|---------|--------|
| `supervise` | `home` | Tile Giám sát | `#sc-supervise` | list | shared_action | `LinmHomeTile` | home grid |
| `supervise` | `patrol-home` | Quick Giám sát | `#sc-supervise` | list | shared_action | `LinmListRow` | patrol quick |
| `(filter)` | `supervise` | Sheet Lọc | `#sc-supervise` sheet | sheet | owner | filterRoute/Date | Apply reload |
| `patrol-map` | `supervise` | Segment Bản đồ | `#sc-patrol-map` | map | sibling | `LinmSegment` idx 1 | **push** |
| `supervise-detail` | `supervise` | Tap card | `#sc-supervise-detail` | detail | sibling | `LinmRichCard` | push wired |

## Enqueue sibling

| feature | status | note |
|---------|--------|------|
| `patrol-map` | exists native · STATUS may blocked QA | **wire nav from supervise** this edit · **cấm** auto start full pipeline |
| `supervise-detail` / `checkin-detail` | wired / pending_confirm | **giữ** · không đổi scope |
