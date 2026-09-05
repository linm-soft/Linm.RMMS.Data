# Tasks — gis-patrol-map

| Field | Value |
|-------|-------|
| feature | `gis-patrol-map` |
| status | `confirmed` |
| mfeStdRoute | `/gis/tuan-duong` |
| updatedAt | `2026-09-01T21:30:00.000Z` |

## Source

| Layer | Source |
|-------|--------|
| UI | `MFE-Source/Linm.Web.RMMS.Gis` · `GisPatrolMapPage` |
| BE | `api/v1/patrol/sessions` + `/{id}/check-ins` |
| Seed | `local-script/seed-nghe-an-mock.sql` |

## UI notes Dev (2026-09-01 `/edit-web-feature`)

Menu GIS = 2 item (`/gis/tai-san` + `/gis/tuan-duong`). **Cấm** re-add Bản đồ giám sát 2D / Vẽ Google / Tạo mới. Map tuần **cấm** tree Loại tài sản. Chi tiết = Họ tên + tuyến + lịch sử GPS (mobile `#sc-patrol-detail`). Paint: `routeDrivingTrack` (`/gis-tai-san-snap`) · pin teardrop + badge xanh/đỏ (`HH:mm` / «Chưa») ghim `projectToPath` · click `{MapPopup}` · animate **arc-length**. **Cấm** `/match` 100m · **cấm** polyline chord = xong.
