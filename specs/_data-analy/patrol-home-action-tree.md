# Action tree — patrol-home

| | |
|---|---|
| feature | `patrol-home` |
| owner | **field tab** (Tuần đường) |
| reuse | **home** (quick Điểm tuần + tile Tuần đường) |
| demo | `#sc-patrol-home` · `DES-MOB-PAT-HOME` |
| kind | `hub` |
| taskId | `task_26954659` |

## Tree

```
shell-tabs (field tab)
└── patrol-home              ← owner · DES-MOB-PAT-HOME · tab Tuần đường
home
├── patrol-home              ← quick Điểm tuần · tile Tuần đường · go('patrol-home')
└── patrol-offline           ← tile Lưu trữ · reuse (entry khác)
patrol-home
├── patrol-offline           ← nav sync · row Lưu trữ · reuse=patrol-offline
├── attendance               ← segment Chấm công
├── patrol-map               ← hero Tiếp tục bản đồ
├── field-reflect            ← row Ghi nhận hư hỏng
├── cam-patrol               ← row Thu thập camera
├── patrol-history           ← row Lịch sử phiên
├── patrol-pin               ← CTA Ghim vị trí hiện tại
├── patrol-checkin           ← hero Ghi điểm tuần
└── supervise                ← row Giám sát · reuse
```

## Rows

| feature | parent | action | demoRel | kind | share | mapCite | usedOn |
|---------|--------|--------|---------|------|-------|---------|--------|
| `patrol-home` | `home` | Điểm tuần / Tuần đường | `#sc-patrol-home` | hub | shared_action | `LinmQuickItem` · `LinmHomeTile` | home quick · tile · tab field |
| `patrol-home` | `shell-tabs` | Tab Tuần đường | `#sc-patrol-home` | hub | owner | `LinmTabBar` mapPin | field tab |
| `patrol-offline` | `patrol-home` | Đồng bộ / Lưu trữ | `#sc-patrol-offline` | list | reuse | nav sync · row | GAP-MOB-ACT-PAT-OFFLINE-01 **wire** |

## Enqueue sibling (pending_confirm · cấm auto start)

| feature | status |
|---------|--------|
| `attendance` | `[Mobile] [Tuần đường] -> Chấm công` |
| `patrol-map` | `[Mobile] [Tuần đường] -> Tiếp tục bản đồ` |
| `field-reflect` | `[Mobile] [Tuần đường] -> Ghi nhận hư hỏng` |
| `cam-patrol` | `[Mobile] [Tuần đường] -> Thu thập camera` |
| `patrol-history` | `[Mobile] [Tuần đường] -> Lịch sử phiên` |
| `patrol-pin` | pending_confirm · `[Mobile] [Tuần đường] -> Ghim vị trí hiện tại` |
| `patrol-checkin` | pending_confirm · `[Mobile] [Tuần đường] -> Ghi điểm tuần` |
| `supervise` | skip · reuse home owner |
| `patrol-offline` | skip · reuse |
