# PO — gis-camera-map (delta 16:9)

| Field | Value |
|-------|-------|
| feature | `gis-camera-map` |
| changeScope | `edit_page` |
| packKind | `map` |
| Feature Kind | **F** |
| status | `confirmed` |
| mfeStdRoute | `/gis/camera` |
| updatedAt | `2026-09-21T10:48:00.000Z` |

## Goal

Giữ màn **Bản đồ camera**. Delta: **mọi view có hình live** dùng **chuẩn 16:9**.

## AC

| ID | AC |
|----|-----|
| AC-16-9-WALL | Ô wall (1 cam · 2×2 · 3×2 · free) hiển thị live **16:9** — không crop dọc full cột |
| AC-16-9-FS | Toàn màn hình live **16:9** contain trong viewport |
| AC-16-9-OFF | Offline cùng khung 16:9 |
| AC-16-9-KEEP | Pool / map / KPI / inspect tabs **không** đổi nghiệp vụ |

## Out

HLS trên inspect · đổi `object-fit: cover` · mock CAM-VINH.
