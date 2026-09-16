# Action tree — patrol-home

| | |
|---|---|
| feature | `patrol-home` |
| changeScope | `edit_page` |
| owner | **field tab** (Tuần đường) |
| reuse | **home** (quick Điểm tuần + tile Tuần đường) |
| demo | `#sc-patrol-home` · `DES-MOB-PAT-HOME` |
| kind | `hub` |
| taskId | `task_62615c08` |

## Tree

```
shell-tabs (field tab)
└── patrol-home              ← owner · DES-MOB-PAT-HOME · tab Tuần đường
    ├── open-session         ← NEW · POST patrol/sessions · empty hero CTA
    └── (via today row)
        └── patrol-history-detail
            └── end-session  ← EDIT · PUT patrol/sessions/{id} · was toast
home
├── patrol-home              ← quick Điểm tuần · tile Tuần đường
└── patrol-offline           ← tile Lưu trữ · reuse
patrol-home
├── patrol-offline           ← nav sync · row Lưu trữ
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
| `patrol-home` | `patrol-home` | **Mở ca** | `#sc-patrol-home` · `btn-open-session` | hub | owner | `LinmPrimaryButton` | empty active · POST |
| `patrol-history-detail` | `patrol-home` | **Kết ca** | detail CTA | detail | reuse wire | PUT sessions/{id} | was toast → live |
| `patrol-offline` | `patrol-home` | Đồng bộ / Lưu trữ | `#sc-patrol-offline` | list | reuse | nav sync · row | wire |

## Enqueue sibling (pending_confirm · cấm auto start)

| feature | status |
|---------|--------|
| `attendance` | pending_confirm |
| `patrol-map` | pending_confirm |
| `field-reflect` | pending_confirm |
| `cam-patrol` | pending_confirm |
| `patrol-history` | pending_confirm |
| `patrol-pin` | pending_confirm |
| `patrol-checkin` | pending_confirm |
| `supervise` | skip · reuse |
| `patrol-offline` | skip · reuse |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| generatedAt | 2026-09-12T14:53:44.000Z |
| contentHash | sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a |
| taskId | `task_62615c08` |
