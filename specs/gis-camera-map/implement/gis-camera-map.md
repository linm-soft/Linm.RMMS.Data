# Implement notes — gis-camera-map (real list + HLS)

**Date:** 2026-09-21  
**MFE:** `Linm.Web.RMMS.Gis` · `/gis/camera`

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
- KPI đếm xe / vượt tốc: **một** `GET /cameras/events` hôm nay (paginate ≤100) · gán theo `cameraDeviceId` rồi `CameraHost` · **cấm** N+1 `?host=` (sai host = 0 xe).
- Auto refresh KPI: poll **15s** (HLS tile không restart — chỉ `cameraId`/`online`). **GAP-CAM-MAP-PUSH-01 DEFER** SignalR/MQTT.
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
