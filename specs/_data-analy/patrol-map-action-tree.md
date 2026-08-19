# Action tree — patrol-map

| | |
|---|---|
| feature | `patrol-map` |
| owner | **this pack** `#sc-patrol-map` |
| parent | `patrol-home` |
| demo | `#sc-patrol-map` · `DES-MOB-PAT-MAP` |
| kind | `map` |
| taskId | `task_eae07681` |

## Tree

```
patrol-home
└── patrol-map                 ← owner · DES-MOB-PAT-MAP · push from hero/row
    ├── patrol-home            ← back · reuse
    └── check-in sheet         ← Ghi điểm tuần · pending_confirm · **cấm** implement trên pack này
```

## Rows

| feature | parent | action | demoRel | kind | share | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|---------|--------|
| `patrol-map` | `patrol-home` | Bản đồ ca / Tiếp tục bản đồ | `#sc-patrol-map` | map | unique | MapKit/OSM · `LinmTopBar` | hero · quick |
| `patrol-home` | `patrol-map` | Back Tuần đường | nav | hub | reuse | `LinmTopBar` leading | pop |
| check-in | `patrol-map` | Ghi điểm tuần | `openSheet('checkin')` | sheet | unique | **không** ship P1 | toast |

## Enqueue sibling

| feature | status |
|---------|--------|
| check-in sheet | **đã** pending từ hub (Ghi điểm tuần) · **cấm** enqueue thêm (`GAP-MOB-ACT-07` toast CTA) · **cấm** start (`GAP-MOB-ACT-06`) |
| `attendance` · `field-reflect` · `cam-patrol` · `patrol-history` | **không** từ map · giữ backlog hub |

Basemap / legend / Toàn tuyến / pin = **cùng slug** (filter + toast) — **không** enqueue (`GAP-MOB-ACT-07`).
