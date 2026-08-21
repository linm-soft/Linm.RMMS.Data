# Action tree — patrol-pin

| | |
|---|---|
| feature | `patrol-pin` |
| owner | **this pack** `DES-MOB-CI-PIN-HERE` · hub CTA + map reuse |
| parent | `patrol-home` |
| demo | `DES-MOB-CI-PIN-HERE` · `pinHereCheckin()` · `#sc-patrol-home` / `#sc-patrol-map` |
| kind | `sheet` |
| taskId | `task_5b298c0a` |

## Tree

```
patrol-home
└── patrol-pin                 ← owner · DES-MOB-CI-PIN-HERE · Ghim vị trí hiện tại
    ├── patrol-home            ← stay hub sau toast (reuse)
    ├── patrol-map             ← reuse pin behavior khi đứng map
    └── patrol-checkin         ← handoff openSheet('checkin') · pending_confirm · **cấm** implement form
```

## Rows

| feature | parent | action | demoRel | kind | share | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|---------|--------|
| `patrol-pin` | `patrol-home` | Ghim vị trí hiện tại | `.btn-primary.pin-here` · `DES-MOB-CI-PIN-HERE` | sheet | unique | `LinmPrimaryButton` `#i-mappin` | hub CTA |
| `patrol-pin` | `patrol-map` | Ghim vị trí hiện tại | `.map-pin-here` | sheet | shared_action | reuse owner | map overlay |
| `patrol-checkin` | `patrol-pin` | Ghi điểm tuần sheet | `openSheet('checkin')` | sheet | unique | **không** ship trên pack này | handoff |
| `patrol-home` | `patrol-pin` | stay | nav | hub | reuse | — | after toast |

## Enqueue sibling

| feature | status |
|---------|--------|
| `patrol-checkin` | **đã** pending_confirm từ hub · **cấm** enqueue thêm · **cấm** start (`GAP-MOB-ACT-06`) · handoff only |
| GPS deny / timeout / toast | **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`) |

## Version meta

generatedAt `2026-08-21T02:50:22.000Z`
