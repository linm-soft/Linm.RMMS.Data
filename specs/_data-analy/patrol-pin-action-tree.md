# Action tree — patrol-pin

| | |
|---|---|
| feature | `patrol-pin` |
| owner | **this pack** `DES-MOB-CI-PIN-HERE` · hub CTA + map reuse |
| parent | `patrol-home` |
| demo | `DES-MOB-CI-PIN-HERE` · `pinHereCheckin()` · `#sc-patrol-home` / `#sc-patrol-map` |
| kind | `sheet` |
| changeScope | `edit_page` |
| taskId | `task_48f136ed` |
| generatedAt | `2026-09-12T11:55:00.000Z` |

## § Delta Current vs New

| Edge | Current | New |
|------|---------|-----|
| pin → checkin | stub toast only | **real** handoff + `LocationFix` + `sessionId` · sibling persists POST |
| pin → home/map | stay after toast | **giữ** (sau toast; sheet sibling overlay) |

## Tree

```
patrol-home
└── patrol-pin                 ← owner · DES-MOB-CI-PIN-HERE · Ghim vị trí hiện tại
    ├── patrol-home            ← stay hub sau toast (reuse)
    ├── patrol-map             ← reuse pin behavior khi đứng map
    └── patrol-checkin         ← **real** openSheet · prefill GPS+session · POST check-ins · **cấm** form trên pin
```

## Rows

| feature | parent | action | demoRel | kind | share | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|---------|--------|
| `patrol-pin` | `patrol-home` | Ghim vị trí hiện tại | `.btn-primary.pin-here` · `DES-MOB-CI-PIN-HERE` | sheet | unique | `LinmPrimaryButton` `#i-mappin` | hub CTA |
| `patrol-pin` | `patrol-map` | Ghim vị trí hiện tại | `.map-pin-here` | sheet | shared_action | reuse owner | map overlay |
| `patrol-checkin` | `patrol-pin` | Ghi điểm tuần + persist | `openSheet('checkin')` | sheet | unique | **không** ship form trên pack pin | handoff+POST |
| `patrol-home` | `patrol-pin` | stay | nav | hub | reuse | — | after toast |

## Enqueue sibling

| feature | status |
|---------|--------|
| `patrol-checkin` | **đã** tồn tại · **cấm** enqueue thêm · **cấm** start trong task này (`GAP-MOB-ACT-06`) · handoff only · persist owner |
| GPS deny / timeout / toast | **cùng slug** — **không** enqueue (`GAP-MOB-ACT-07`) |

## Version meta

generatedAt `2026-09-12T11:55:00.000Z` · gapId `GAP-MOB-PIN-PERSIST-01`
