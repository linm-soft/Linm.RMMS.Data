# Kết nối camera ITS (Hikvision ANPR) — Feature Context

> **Slug:** `camera-connect` · **HĐ alias:** `camera-gtvt` (PL01 mã **03c** · gói **C**) · **Module:** `Camera` · **Phase:** P1.5 connect **DONE** · **CRUD list pack DONE** (task_6baf42c3) · next **P2 live gateway**  
> **Status:** Kind B list + CameraDevice CRUD + connect Test/JPEG · continuous live = plan 21  
> **Sources:** [Hikvision iDS-TCM403-GIR](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/) · `camera-model.md` · `22-CAMERA-TCM403-SDK-RESEARCH.md` · `21-CAMERA-HLS-WEBRTC-GATEWAY.md` · HĐ [`../../../../Linm.RMMS.Contract/out/camera-gtvt-dinh-nghia.md`](../../../../Linm.RMMS.Contract/out/camera-gtvt-dinh-nghia.md)  
> **Demo HTML:** `Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html` · **pilot wall+map:** [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html)  
> **MFE:** `Linm.Web.RMMS.Camera` · route `/camera` · **wall** `/camera/wall` · ports **9216** / **9316** (`yarn start:std` → `http://localhost:9316/camera`)  
> **BE:** `api/v1/cameras` · CRUD `CameraDevice` · SDK-first TCM403 · CaptureJPEG · ISAPI Digest · ingest · `Linm.RMMS.WebService`  
> **Specs:** `specs/camera-connect/STATUS.md` · `task/camera-connect.md` · `implement/camera-connect.md`  
> **Host notify guide:** [`../23-CAMERA-HOST-NOTIFY-CONFIG.md`](../23-CAMERA-HOST-NOTIFY-CONFIG.md) · ví dụ `http://camera-event-api-rmms.vn`  
> **Skill gate:** `/agent-dev-camera-connect` · `/camera-connect`

**Alias HĐ:** mọi chỗ catalogue ghi `camera-gtvt` → **cùng feature** `camera-connect` (không tạo page/slug thứ hai).

## 1. Tổng quan

| | |
|--|--|
| Mục tiêu | User **nhập cấu hình kết nối** camera ITS (model · IP · PORT · User · Pass · chuẩn RTSP/ONVIF/ISAPI), **xem live** (mock/preview), và **nhận event** từ camera (tốc độ radar · biển số · loại/màu/hướng xe) |
| Persona | Vận hành Chi cục · kỹ thuật ITS · admin RMMS |
| Model seed | **iDS-TCM403-GIR** — 4 MP Radar-Assisted ANPR Bullet |
| App hiện có | **Mới** — MFE `RMMS.Camera` |
| DoD P1 (demo) | Form config đủ field · chọn chuẩn kết nối · live mock · feed event tốc độ/detect · localStorage |
| DoD P1.5 (real) | **DONE** — model catalog · Login_V40 · CaptureJPEG snapshot · ingest · MFE defaults + JPEG UI |
| DoD P2 | EF CRUD + RTSP→HLS/WebRTC gateway — SSOT [`../21-CAMERA-HLS-WEBRTC-GATEWAY.md`](../21-CAMERA-HLS-WEBRTC-GATEWAY.md) · **next = P2-G0 MediaMTX POC** |

## 2. Design / UI

| Screen | Pattern | Zones | Ghi chú |
|--------|---------|-------|---------|
| List `/camera` | Full page Kind B | Filter · Grid · Pager · **schema editor `camera-devices`** | Mã cam · model · IP · trạng thái Online · tuyến/Km |
| Connect `/camera/new` · `/camera/:id` | Full page Kind C | Z1 Config · Z2 Protocols · Z3 Live · Z4 Events | ≥10 inputs → full page |
| **Wall `/camera/wall`** (pilot P1.6) | Full Kind F | Palette · lưới kéo-thả · preset 1 / 2×2 / 3×2 · tile live | Xem **nhiều cam cùng lúc** · sắp xếp · fullscreen tile · **cấm** `alert` |

### Zones form kết nối

| Zone | Nội dung |
|------|----------|
| **Z1 Config** | Model · mã cam · tên · IP · HTTP port · RTSP port · SDK port · User · Pass · tuyến · Km · vị trí |
| **Z2 Protocols** | Bật RTSP live · ONVIF discover · ISAPI HTTP Host notify (URL listener) · Digest auth |
| **Z3 Live** | **P1.5:** poll JPEG SDK CaptureJPEG · **P2:** WebRTC/HLS player (plan 21) |
| **Z4 Events** | Feed realtime mock: plate · speed · vehicleType · color · direction · timestamp · ảnh crop |

**UI pattern:** Full page (workflow live + events). Wall = Kind F (kéo-thả · không form ≥10 field).  
**Mock:** 1 camera seed TCM403-GIR trên QL.1 · Km 12+350.  
**Pilot wall:** 6 cam QL.1 II.1 · layout localStorage `tn-demo:camera-wall:layout` · slideout live+tín hiệu+event (cùng GIS).

### Wall — kéo thả (P1.6)

| Hành vi | Rule |
|---------|------|
| Palette | List cam Online · kéo vào ô trống / thay tile |
| **Mode thêm tự do** | Pool trái · kéo cam vào wall · **+ Ô trống** · Gỡ / kéo về pool |
| Sắp xếp | HTML5 drag-drop trên lưới · persist thứ tự |
| Preset | Mode lưới: 1 · 2×2 · 3×2 — đổi lưới không mất cam đã gán |
| Tile | Mã TS · Online/Offline · JPEG mock · nút **Toàn màn hình** · **Gỡ** |
| Fullscreen | Overlay stacked (không `window.alert`) · Esc / Đóng |
| Map peer | GIS: 1-click cam → đếm xe + event · **Xem live** → slideout · **Ẩn / thu nhỏ / vừa / phóng to** + kéo splitter |

## 3. API (P1.5 — live)

Base: `api/v1/cameras` · BFF `web-bff/api/v1/cameras` · domain **Camera** · **cấm ERP.***

| Method | Path | Mô tả | Status |
|--------|------|-------|--------|
| GET | `/cameras` | List/search page | **DONE** |
| GET | `/cameras/{id}` | GetById | **DONE** |
| POST | `/cameras` | Create device | **DONE** |
| PUT | `/cameras/{id}` | Update device | **DONE** |
| DELETE | `/cameras/{id}` | Soft delete | **DONE** |
| GET | `/cameras/health` | Health + `sdkDllLoaded` | **DONE** |
| GET | `/cameras/models` | Model profiles (ports · preferred protocol) | **DONE** |
| POST | `/cameras/connect/test` | Model-aware: TCM403 **SDK-first** (`sdkPort`) · else ISAPI Digest | **DONE** |
| POST | `/cameras/connect/snapshot` | JPEG **SDK CaptureJPEG** (ưu tiên) · fallback ISAPI nếu HTTP mở | **DONE** |
| POST | `/cameras/{id}/live/start` | RTSP→gateway play URL | **P2** plan 21 |
| POST | `/cameras/ingest/isapi` | Webhook Host notify → **persist** `CameraEvent` | **DONE** |
| GET | `/cameras/events` | Event feed from DB (`?host=` optional) | **DONE** |
| GET | `/cameras/wall/layout` | Layout wall (user × tenant) | **P1.6 demo** · BE P2 |
| PUT | `/cameras/wall/layout` | Lưu thứ tự + preset | **P1.6 demo** · BE P2 |
| GET | `/cameras/{id}/signal` | Heartbeat · bitrate · lastSeen | **P1.6 mock** |
| GET | `/cameras/{id}/counts?from=&to=` | Đếm xe theo cam (support ANPR/count) | **P1.6 mock** · report `rpt-dem-xe` |

### Connect request (real)

```json
{
  "host": "113.179.52.55",
  "httpPort": 80,
  "sdkPort": 8100,
  "rtspPort": 554,
  "username": "admin",
  "password": "***",
  "modelCode": "iDS-TCM403-GIR",
  "protocolMode": "auto",
  "timeoutSeconds": 10
}
```

| `protocolMode` | Hành vi |
|----------------|---------|
| `auto` | Theo `CameraModelCatalog` — TCM403 → **sdk** |
| `sdk` | TCP `sdkPort` · `HCNetSDK` → `Login_V40` · snapshot `CaptureJPEGPicture_NEW` |
| `isapi` | Digest `GET /ISAPI/System/deviceInfo` trên `httpPort` |

**Normalize:** nếu client gửi `httpPort` = 8000/8100/8200 với model SDK-first → remap sang `sdkPort`.

Native DLL path (full): `D:\AI-QLBD\Linm.RMMS.WebService\api\src\RMMS.Service.Api\native\hikvision`  
Config: `Camera:HikvisionSdk:NativePath` = `native/hikvision` (HiTools — không commit binary · cấm share CDN zip 403).

### Config DTO (skeleton persist)

```json
{
  "code": "CAM-QL1-12",
  "modelCode": "iDS-TCM403-GIR",
  "host": "192.168.1.64",
  "httpPort": 80,
  "rtspPort": 554,
  "sdkPort": 8000,
  "username": "admin",
  "password": "***",
  "protocols": { "rtsp": true, "onvif": true, "isapiNotify": true },
  "isapiNotifyUrl": "https://edge.rmms.local/api/v1/cameras/ingest/isapi",
  "roadRouteCode": "QL.1",
  "kmMark": "12+350"
}
```
## 4. Database (DONE — CameraDevice)

| Entity | Key columns | Notes |
|--------|-------------|-------|
| `CameraDevice` | Id, Code, Name, ModelCode, Host, HttpPort, RtspPort, SdkPort, Username, PasswordEnc, protocol flags, RoadRouteCode, KmMark, Online, IsActive | Tenant · table `rmms_camera_devices` · soft delete |
| `CameraEvent` | EventCode, CameraDeviceId?, CameraHost, Plate, SpeedKmh, … | **DONE** table `rmms_camera_events` · migration `20260812160439_Schema_RmmsCameraEvents` |

## 5. Events / tích hợp

| Event | Publisher | Consumer |
|-------|-----------|----------|
| `camera.anpr.detected` | Camera ISAPI / Edge | `its-anpr-overload` · Incident |
| `camera.speed.measured` | Radar 77 GHz (TCM403) | Rule SPEED · HITL |
| `camera.online` / `offline` | Health ping | Ops / TOC |

### Chuẩn kết nối (SSOT)

| Lớp | Protocol | Port typic | Dùng |
|-----|----------|------------|------|
| Control (TCM403) | **Device Network SDK** | **8000** (public map **8100**) | Login · ITS plate callback — **preferred** khi chỉ mở SDK port |
| Analytics | **ISAPI** HTTP Digests + Host notify | **80 / 443** | deviceInfo · snapshot · plate notify — khi HTTP mở |
| Media | **RTSP** | 554 | Live → gateway HLS/WebRTC (plan 21) |
| Discover | **ONVIF** Profile S (+T) | 80 | Capability |

Site lab: `113.179.52.55:8100` = SDK TCP · không phải ISAPI.

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-CAM-01 | BE CRUD + listener | **CRUD DONE** (task_6baf42c3) · SDK ITS listen still DEFER |
| GAP-CAM-02 | Live video FPS (browser không play RTSP) | **P1.5:** JPEG poll SDK · **Next P2-G0:** MediaMTX HLS/WebRTC |
| GAP-CAM-03 | Lưu password | Encrypt at rest P2 · demo localStorage masked |
| GAP-CAM-04 | Multi-model catalog | `GET /cameras/models` + `CameraModelCatalog` |
| GAP-CAM-05 | HCNetSDK binary | Copy HiTools Win64 → `D:\AI-QLBD\Linm.RMMS.WebService\api\src\RMMS.Service.Api\native\hikvision` · không DLL vẫn `sdk_tcp` |
| GAP-CAM-SDK-OS | Docker Linux vs Win64 DLL | **Chốt:** Linux image **không** fail build vì thiếu `libhcnetsdk.so` (DEFERRED). `sdkDllLoaded=false` trên Docker. CaptureJPEG = Win64 API `:5101` + BFF `RMMS_API_BASE=http://host.docker.internal:5101`. `REQUIRE_HIKVISION_SDK=true` chỉ khi có Linux `.so`. |
| GAP-CAM-WALL-01 | Persist layout BE | Demo localStorage · BE `wall/layout` P2 |
| GAP-CAM-WALL-02 | Live N cam cùng lúc | Demo JPEG mock · P2 gateway N session (plan 21) |

## 7. Demo checklist (chốt khách)

- [x] Form đủ IP · PORT · User · Pass · model
- [x] Chọn chuẩn RTSP / ONVIF / ISAPI
- [x] Live preview mock
- [x] Event feed: tốc độ + detect (biển · loại · hướng)
- [x] Seed model iDS-TCM403-GIR
- [x] Wall kéo-thả · preset lưới · fullscreen tile (pilot)
- [x] Slideout live + tín hiệu + event (cùng GIS)
- [ ] Signed khách

## 8. Ownership

| Layer | Path |
|-------|------|
| Context | `docs/context/features/camera-connect.md` |
| Demo | `Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html` · **pilot** `camera-ops-dashboard-demo.html` |
| MFE | `MFE-Source/Linm.Web.RMMS.Camera` |
| Specs | `Linm.RMMS.Data/specs/camera-connect/` |
| BE | `Linm.RMMS.WebService` · `Domains/Camera` · Models `LINM.RMMS.Camera.Models` |
