# Action tree — attendance

| | |
|---|---|
| feature | `attendance` |
| owner | **push from patrol-home** · `#sc-attendance` |
| reuse | **patrol-home** segment Chấm công |
| demo | `#sc-attendance` · `DES-MOB-ATT` |
| kind | hub (packet list) |
| taskId | `task_9035ee40` |

## Tree

```
patrol-home
└── attendance             ← segment Chấm công · DES-MOB-ATT · push
attendance
├── (submit) check-in      ← Chấm vào · cùng slug · POST API · **cấm** sibling enqueue
├── attendance-report      ← Báo cáo · toast P1 · pending_confirm
└── attendance-day-detail  ← tap day row · toast P1 · pending_confirm
```

## Rows

| feature | parent | action | demoRel | kind | share | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|---------|--------|
| `attendance` | `patrol-home` | Segment Chấm công | `#sc-attendance` | hub | unique | `LinmSegment` idx 1 | patrol hub |
| `attendance-report` | `attendance` | Báo cáo | toast | report | sibling | `LinmHeroAction` ghost | toast P1 |
| `attendance-day-detail` | `attendance` | Tap day | toast | detail | sibling | `LinmListRow` | toast P1 |

## Enqueue sibling (pending_confirm · cấm auto start)

| feature | status | note |
|---------|--------|------|
| `attendance-report` | pending_confirm | API report MISSING |
| `attendance-day-detail` | pending_confirm | P1 toast |

## Cấm enqueue

| Control | Why |
|---------|-----|
| Chấm vào | submit/API · **GAP-MOB-ACT-07** · cùng slug |
| Segment Tuần đường | pop parent · không task mới |
