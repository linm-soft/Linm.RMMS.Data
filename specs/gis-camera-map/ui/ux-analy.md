# UX analy — gis-camera-map

| Field | Value |
|-------|-------|
| feature | `gis-camera-map` |
| route | `/gis/camera` |
| updatedAt | `2026-09-21T10:48:00.000Z` |

## Zones

| Zone | Copy / hành vi |
|------|----------------|
| Toolbar | KPI online · đếm xe · vượt tốc · mất tín hiệu · Select bố cục · Select bản đồ |
| Status | `{n} camera ITS · {pin} pin · HLS · refresh 15s · kéo pool vào wall` |
| Pool | Kéo vào wall / click thêm · drop-zone «Kéo tile wall về đây để gỡ» |
| Wall | Ô live = **khung 16:9** giữa HUD và footer · letterbox đen nếu ô cao hơn 16:9 |
| 1 cam lớn | Video **không** portrait-crop full cột — 16:9 giữa ô |
| Fullscreen | 16:9 contain viewport · Esc đóng |
| Inspect | 3 tab Thông tin / Đếm / Tốc độ — **không** thêm live thứ hai |
| Map | Clip · Tiêu chuẩn \| Vệ tinh · Vị trí của tôi · **cấm** Fit · **cấm** `setView` click pin |

## GAP

| ID | Note |
|----|------|
| GAP-CAM-MAP-ASPECT-16-9 | Live wall + fullscreen + offline + demo livebox = **16:9 contain** · **cấm** `object-fit: cover` fill cột |
| GAP-WEB-EDIT-01 | Context lock 2026-09-21 — **cấm** worker revert cover / bỏ `.videoFrame` |
| GAP-CAM-MAP-WALL-01 | Pool/wall HLS — **closed** |
| GAP-MAP-CLICK-ZOOM | Click pin = popup only |

## Copy

Không đổi nhãn Select / KPI. Chỉ size khung hình.
