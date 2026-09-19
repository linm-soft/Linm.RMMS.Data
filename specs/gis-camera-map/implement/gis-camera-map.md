# Implement notes — gis-camera-map (real list + HLS)

**Date:** 2026-09-18  
**MFE:** `Linm.Web.RMMS.Gis` · `/gis/camera`

## Behavior

- Pool + wall + KPI đọc **toàn bộ** `CameraDevice` (`GET /cameras`, pageSize 200).
- Event hôm nay theo `host` → đếm xe / loại / vượt tốc (`speedKmh` > 60).
- Ô wall online: auto HLS (`mode=hls`, `profile=sub`) + heartbeat + stop khi gỡ.
- Pin map: mã khớp lớp GIS `cameras` hoặc nội suy Km corridor QL.1 seed. Camera không tọa độ vẫn ở pool/wall, **không** pin giả.
- Layout localStorage: slot = Guid; slot `CAM-VINH-*` bị bỏ.

## Files

- `src/services/camera/cameraMapClient.ts`
- `src/pages/GisCameraMapPage/loadRealMapCameras.ts`
- `src/pages/GisCameraMapPage/gisCameraCoords.ts`
- `src/pages/GisCameraMapPage/CameraHlsTile.tsx`
- `src/pages/GisCameraMapPage/playHls.ts`
- `src/pages/GisCameraMapPage/GisCameraMapPage.tsx`

## Cấm

- Mock CAM-VINH tick 3s
- Invent `api/v1/gis-camera-map`
- Schema GPS turn này
