# Implement notes — gis-camera-map (real list + HLS)

**Date:** 2026-09-21  
**MFE:** `Linm.Web.RMMS.Gis` · `/gis/camera`

## Notes (`/edit-web-feature` 2026-09-26)

- KPI / pool / popup đếm xe: **một** `GET /api/v1/cameras/events/totals` (BFF cùng path) — group theo `cameraDeviceId`, host chỉ khi event chưa gắn device.
- **Cấm** walk mọi trang `GET /cameras/events` trên poll 15s. Poll gộp một effect, bỏ qua tick nếu request trước chưa xong.
- Tab Tốc độ: **một** `GET /cameras/events?host=&minSpeedKmh=60&pageSize=100` khi mở tab — không poll danh sách event.
- Lần tải đầu: skeleton KPI + pool + wall. Refresh 15s giữ số đã có, không skeleton lại.

## Notes (`/edit-web-feature` 2026-09-21)

- Live wall + fullscreen + offline: **khung 16:9** `.videoFrame` trong stage `.liveVideo` / `.live` (container query `cqw`/`cqh`).
- `<video>` `object-fit: contain` — **cấm** `cover` (ô 1 cam cao bị crop portrait).
- Demo `camera-ops-dashboard-demo.html`: `.live-frame` + `.livebox` 16:9.
- **Không** đổi `live/start` · inspect **không** thêm HLS.

## Behavior

- Pool + wall + KPI đọc **toàn bộ** `CameraDevice` (`GET /cameras`, pageSize 200).
- Event hôm nay theo `host` → đếm xe / loại / vượt tốc (`speedKmh` > 60).
- Ô wall online: auto HLS (`mode=hls`, `profile=sub`) + heartbeat + stop khi gỡ.
- Pin map: **ưu tiên** `CameraDevice.Latitude/Longitude` · không có thì mã GIS `cameras` hoặc nội suy Km corridor. Camera không tọa độ vẫn ở pool/wall, **không** pin giả.
- Popup / pool **Tên** = `{Tuyến} · Km {km}` (không tên ngã tư).
- KPI đếm xe / vượt tốc: **một** `GET /cameras/events/totals` hôm nay · gán `cameraDeviceId` (host chỉ khi chưa có device id) · **cấm** paginate toàn bộ `/cameras/events`.
- Tab Tốc độ mới gọi `GET /cameras/events` lọc `minSpeedKmh` cho **một** camera.
- Auto refresh KPI: poll **15s** totals + list camera, skip nếu inflight (HLS tile không restart). **GAP-CAM-MAP-PUSH-01 DEFER** SignalR/MQTT.
- Skeleton KPI / pool / wall khi `camerasLoading` lần đầu.
- Layout localStorage: slot = Guid; slot `CAM-VINH-*` bị bỏ.
- **GAP-CAM-MAP-ASPECT-16-9:** mọi view có hình = 16:9 contain.

## Files

- `src/services/camera/cameraMapClient.ts`
- `src/pages/GisCameraMapPage/loadRealMapCameras.ts`
- `src/pages/GisCameraMapPage/gisCameraCoords.ts`
- `src/pages/GisCameraMapPage/CameraHlsTile.tsx`
- `src/pages/GisCameraMapPage/GisCameraMapPage.module.css`
- `src/pages/GisCameraMapPage/GisCameraMapPage.tsx`
- `src/pages/GisCameraMapPage/cameraLocationName.ts`

## Cấm

- `object-fit: cover` trên wall/fullscreen
- Mock CAM-VINH tick 3s
- Invent `api/v1/gis-camera-map`
- Pin giả khi chưa có GPS device / GIS seed / Km
