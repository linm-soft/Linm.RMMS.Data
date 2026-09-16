# Chụp ảnh kèm tọa độ vật thể — Feature Context

> **Slug:** `photo-geo-capture` · **Module:** `Patrol` + `Incident` + `File` (+ IMU/AR on-device) · **Phase:** P1 native  
> **Status:** Context · **packKind:** `sheet` · pipeline `data_analy` / `draft`  
> **Entry:** camera slot `field-reflect` · `vis-capture` · `incident-create` (`openCapture`) — **không** thêm row hub tuần đường  
> **BE:** `Linm.RMMS.WebService` · FileService `api/v1/files/*` · detect `api/v1/ai-vision/detect` (Lat/Lng đã có) · domain **cấm ERP.***  
> **BFF:** `Linm.RMMS.Mobile.Bff` · `mobile-bff/api/v1/files/*` · **cấm** invent `api/v1/photo-geo`  
> **Skills:** `/integrate-file-upload-mobile` · `/init-bff-file` · `/agent-qldb-workflow-mobile` · peer `/map-checkin-pin`  
> **Peers:** `field-reflect.md` · `vis-capture.md` · `patrol-pin.md` · `mobile-bff-file.md` · `its-traffic-detect.md` · [`16-ITS`](../16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) §5.2 · [`24-TUAN`](../24-TUAN-DUONG-DUONG-BO.md) §1b  
> **Queue:** `qlbd-mobile` · **cấm** `yarn run-implement` MAIN3

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | Chụp ảnh hiện trường → **một key FileService** (`attachmentId` + `objectKey` BE gen) → metadata gồm **GPS người đứng** · user **gim/chọn vật thể trong ảnh** → máy tính **khoảng cách + lat/lng vật thể** → user **xác nhận trên bản đồ** trước khi gắn sự cố/ca |
| Persona | Tuần đường hiện trường |
| Khác GPS chốt hiện có | `field-reflect` / `vis-capture` / `patrol-pin` = tọa độ **người cầm máy**. Pack này = tọa độ **vật thể** (biển, ổ gà, cọc) lệch khỏi chỗ đứng |
| DoD P1 | Dual iOS+Android · capture + EXIF GPS/time · FileService init→PUT→commit · gim 1 điểm trên ảnh · tính distanceM + object lat/lng on-device · overlay sai số · HITL kéo pin bản đồ · **cấm** fake lat/lng · **cấm** persist presign URL · **cấm** mfeStdUrl · **cấm** gộp slug `field-reflect` |
| Design rule | Nhãn kit `useFormOptions()` · UI «Vị trí đã chốt» / «Khoảng cách ước lượng» / sai số — **không** tên thuật toán (ARKit/LiDAR) trên chrome |

## 2. Design / UI

| Zone | Pattern | Notes |
|------|---------|--------|
| Capture | Camera still (kit PhotoRow) | **Live in-app** `#capture-preview` + HUD look-down gravity + overlay `#pgc-fullscreen` **cùng** `#btn-shutter` · **ẩn tab footer** full-height · freeze still · **cấm** UIImagePicker / Camera.app / Dialog máy ảnh hệ thống · **cấm** kẹp 37 m |
| Gim | Tap 1 điểm trên ảnh | 1 pin · kéo lại được · **cấm** multi-pin P1 |
| Meta row | List rows | Key rút gọn · GPS người đứng ±N m · **Từ ống kính** (`lensRangeM`) · khoảng cách mặt đường · tọa độ vật thể |
| Review | Sheet `#sheet-pgc-review` | Tap still sau HITL / tap thumb host · ảnh + gim pin + rows · **không** re-upload |
| Map confirm | Sheet / overlay map | Pin đề xuất + kéo HITL · **reuse `GisClipMapView`** (cùng Bản đồ tài sản) · **cấm** MapKit world · **cấm** invent map API · GAP-MOB-IOS-MAP-HOST-01 **closed** |
| Deny GPS | Modal | Reuse `DES-MOB-GPS-DENY` · không chụp geo nếu deny |
| Confidence | Toast / banner | Sai số ước lượng > ngưỡng (SA, mặc định **30 m** peer vis-capture) → vẫn lưu ảnh+key, **không** auto gắn tọa độ vật thể |

**Không** gộp: `field-reflect` (form phản ánh) · `vis-capture` (detect mặt đường) · `cam-patrol` (finder liên tục) · `patrol-pin` (ghim chỗ đứng) · web `its-traffic-detect` (ray xe, ≥2 frame).

## 3. API (cấm invent path riêng)

Tính tọa độ **trên máy**. BFF chỉ file + payload đã Signed.

| Method | `{BffPrefix}` path | Downstream | Dùng cho |
|--------|-------------------|------------|----------|
| POST | `files/init` | FileService | Key `uploadId` · `objectKey` BE gen |
| PUT | `files/{id}/object` | FileService | Bytes JPEG (đã EXIF) |
| POST | `files/commit` | FileService | `attachmentId` — domain lưu guid này |
| GET | `files/{id}/object` | FileService | Preview JWT · **cấm** img src = resign URL |
| POST | `ai-vision/detect` | `DetectAiVisionRequest` **Lat · Lng** đã có | Optional sau confirm — Lat/Lng = **vật thể đã HITL** · BE P1 **hard-default 200** (skip AiService HTTP) |
| POST | `incident/incidents` | `MediaIds` CSV guid · `HasGps` | Gắn ảnh; **chưa** có cột object lat trên `rmms_incidents` → GAP-PGC-BE-01 |
| GET | `patrol/sessions` | Patrol | Tuyến / Km toast · **cấm** fake |

App base: `{BffBase}/mobile-bff/api/v1`. **Cấm** app `:5101` · invent `api/v1/photo-geo*` · client tự đặt `objectKey` (FILE-ATT-08).

Object key SSOT:

```
{tmp|data}/{appId}/{yyyy}/{companyId}/{featureId}/{uploadId}.{ext}
```

`purpose` init = `photo-geo-capture`. Domain persist: `attachmentId` (+ `objectKey` nếu form đã có) — **không** URL.

## 4. Research — từ chỗ đứng → tọa độ vật thể

GPS EXIF chỉ là vị trí **máy ảnh**. Chọn pixel trong ảnh **không** cho lat/lng nếu thiếu hướng + độ sâu / mặt đất.

### P1 — tia camera ∩ mặt đường (mọi máy)

Input bắt buộc lúc chụp (lưu sidecar cùng ảnh, không invent API):

| Field | Nguồn |
|-------|--------|
| `photographerLat/Lng` + `accuracyM` | CLLocation / Fused Location · EXIF GPS |
| `headingDeg` | Magnetometer / true heading (0 = Bắc, tăng theo kim đồng hồ) |
| `pitchDeg` · `rollDeg` | IMU (máy nghiêng) |
| `hfovDeg` / intrinsics | Camera kit (pinhole) |
| `tapNx, tapNy` | Pixel chuẩn hoá 0–1 |
| `cameraHeightM` | Mặc định **1.5** (cán bộ đứng) — SA cấu hình |

Công thức P1 (3D pinhole, mặt phẳng local ENU · **cấm** tên thuật toán trên chrome):

1. Look-down = `asin(-ĝ.z)` · roll = `atan2(gx, −gy)` · HFOV mặc định 62° · VFOV từ aspect  
2. Pixel gim `(tapNx, tapNy)` → tia camera (right/down/forward + roll)  
3. Cắt mặt đường `U=0` tại chiều cao ống kính `h` (mặc định 1.5 m)  
4. `distanceM` = khoảng cách **ngang** mặt đất (geodesic / pin bản đồ)  
5. `lensRangeM` = khoảng cách **từ ống kính** `|hit − camera|` (vật thể chắn phía trước **nằm trên mặt đường**)  
6. Điểm đích = geodesic từ GPS người đứng theo bearing của hit (WGS84)

Sau HITL kéo pin: `distanceM` = haversine(photographer, pin) · `lensRangeM` ≈ `hypot(ground, h)`.

**Sai số điển hình:** GPS phone 3–10 m; la bàn 5–15° (xấu hơn gần xe kim loại / hộ lan). 10° lệch ở 30 m ≈ **5 m** ngang. Ngưỡng vis-capture 30 m vẫn HARD: không gửi detect nếu confidence xấu.

**Giới hạn P1 (GAP-PGC-PLANE-01):** vật thể đứng (biển, người, rào) **không** xác định được độ sâu từ 1 ảnh. Chạm mặt vật thể (không phải chân trên mặt đường) → hit mặt đường **xa hơn** vật thật. P2 = depth ARKit/ARCore — **không** hiện tên thuật toán trên UI.

**Cấm** coi EXIF GPS = tọa độ ổ gà / biển báo.

### P1 HITL (bắt buộc)

Sau tính toán: hiện pin trên map · user kéo đúng vật thể · distance + lat/lng lấy **điểm đã xác nhận**. Khớp pattern ITS «user gim đúng điểm».

### P2 — độ sâu máy (không block P1)

| Nền | API | Ghi chú |
|-----|-----|---------|
| iOS LiDAR | ARKit `sceneDepth` / raycast | Distance mét tại pixel · **không** dùng `ARGeoTracking` / `getGeoLocation` làm SSOT VN (coverage không phải VN) |
| Android | ARCore `hitTest` / Depth API | Cùng mô hình: hit local → cộng GPS+heading |
| ITS sẵn có | [`16`](../16-ITS-TRAFFIC-OBJECT-DETECTION-DESIGN.md) §5.2 triangulation ≥2 tia, 2–80 m | Xe tuần / video — **không** thay tap 1 ảnh P1 |

OpenAthena / DEM ray-cast = P3 (cần DSM) — **DEFER**.

## 5. Sibling (không gộp slug)

| Slug | Quan hệ |
|------|---------|
| `field-reflect` | Consumer — PhotoRow gọi pack này rồi trả `attachmentId` + object lat |
| `vis-capture` | Consumer — detect Lat/Lng sau HITL vật thể |
| `incident-create` | Consumer — `MediaIds` |
| `patrol-pin` | GPS **chỗ đứng** — khác vật thể |
| `patrol-map` / `gis-map` | HITL kéo pin |
| `mobile-bff-file` | Upload SSOT · **done** |
| `its-traffic-detect` | Peer thuật toán tia · không gộp UX |

## 6. Gaps

| ID | Nội dung | Default |
|----|----------|---------|
| **GAP-PGC-BE-01** | `IncidentEntity` chỉ `HasGps` + `MediaIds` — **không** cột photographer/object lat/lng | P1: EXIF + sidecar on-device + HITL; persist object coord = **SA** · nếu thêm cột → `/database-migration` `Schema_*` pair · **cấm** invent API pack này |
| **GAP-PGC-DETECT-01** | `DetectAiVisionRequest.Lat/Lng` = 1 cặp | P1 sau HITL gửi **object** lat/lng vào field đã có · **cấm** thêm ObjectLat cho đến SA Signed |
| **GAP-PGC-COMPASS-01** | La bàn lệch gần xe tuần | Banner «Đứng lệch xe · kéo pin trên bản đồ» · HITL bắt buộc |
| **GAP-PGC-PLANE-01** | Giả định vật thể trên mặt đường | Biển/người/rào chắn đứng → chạm mặt vật thể làm hit mặt đường xa hơn chân; user kéo pin · P2 depth |
| **GAP-PGC-GEO-VN-01** | Apple geotracking không phải SSOT VN | GPS + heading + HITL |
| FILE-ATT-08/09 | Client `objectKey` / img src resign | **cấm** |

## 7. Demo checklist

- [ ] Dual proto iOS 390×844 · Android 412×915 — capture → gim → khoảng cách → map confirm  
- [ ] FileService commit trả `attachmentId` · preview `GET /object` JWT  
- [ ] EXIF GPS+UTC trên JPEG  
- [ ] Deny GPS = không gắn tọa độ vật thể  
- [ ] HITL kéo pin đổi lat/lng hiển thị  
- [ ] Consumer `field-reflect` / `vis-capture` nhận key — **không** regress GPS chốt chỗ đứng  

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | — | — | — |
| mobile | `done` | `done` | `2026-09-13T03:20:00.000Z` |
