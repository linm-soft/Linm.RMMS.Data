# Team lead — tasks — gis-camera-map

| Field | Value |
|-------|-------|
| feature | `gis-camera-map` |
| status | `confirmed` |
| changeScope | `edit_page` |
| packKind | `map` |
| mfeStdRoute | `/gis/camera` |
| mfeStdUrl | `http://localhost:9302/gis/camera` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Gis` |
| updatedAt | `2026-09-26T10:10:00.000Z` |

## UI notes Dev (`/edit-web-feature` 2026-09-26)

1. Đếm xe/vượt tốc: `GET /api/v1/cameras/events/totals` — **cấm** lặp `GET /cameras/events?page=`.
2. Poll 15s một lần, skip nếu inflight. Tab Tốc độ mới gọi events `minSpeedKmh` cho camera đang chọn.
3. Skeleton `.skelVal` / `.skelCard` / `.skelTile` khi tải lần đầu. Refresh không skeleton lại.

## UI notes Dev (`/edit-web-feature` 2026-09-21)

1. Wall HLS + fullscreen + offline: khung **16:9** (`.videoFrame`) nằm trong stage `.liveVideo` / `.live`.
2. `object-fit: contain` — **cấm** `cover`.
3. Mọi bố cục wall (p1 / p22 / p32 / free) **cùng** rule — **cấm** 1-cam stretch cột.
4. Demo HTML `camera-ops-dashboard-demo.html` parity `.live-frame` 16:9.
5. **Không** đổi API live/start · **không** thêm HLS trên inspect.

## Files

- `src/pages/GisCameraMapPage/CameraHlsTile.tsx`
- `src/pages/GisCameraMapPage/GisCameraMapPage.module.css`
- `src/pages/GisCameraMapPage/GisCameraMapPage.tsx`
