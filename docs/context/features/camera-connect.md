# Kết nối camera ITS (Hikvision ANPR) — Feature Context

> **Slug:** `camera-connect` · **HĐ alias:** `camera-gtvt` (PL01 mã **03c** · gói **C**) · **Module:** `Camera` · **Phase:** P1.5 connect **DONE** · **CRUD list pack DONE** (task_6baf42c3) · **P2-G1+G2b HLS live DONE** · next G2 S5 playToken / wall N cam  
> **Status:** Kind B list + CameraDevice CRUD + connect Test/JPEG · **P2 live G1+G2b:** MediaMTX HLS multi-viewer (lease+TTL) · WebRTC **ẩn MFE**  
> **Live ops:** [`../21-CAMERA-HLS-WEBRTC-GATEWAY.md`](../21-CAMERA-HLS-WEBRTC-GATEWAY.md) · [`../30-CAMERA-LIVE-STREAM-CONFIG.md`](../30-CAMERA-LIVE-STREAM-CONFIG.md) · lease [`../../plan/camera-live/PLAN-lease-ttl.md`](../../plan/camera-live/PLAN-lease-ttl.md)  
> **Sources:** [Hikvision iDS-TCM403-GIR](https://www.hikvision.com/en/products/ITS-Products/traffic-cameras/urban-road-anpr-cameras/ids-tcm403-gir/) · `camera-model.md` · `22-CAMERA-TCM403-SDK-RESEARCH.md` · [`31-CAMERA-TCM403-LAB-RADAR.md`](../31-CAMERA-TCM403-LAB-RADAR.md) · `21-CAMERA-HLS-WEBRTC-GATEWAY.md` · [`28-CAMERA-SECURITY.md`](../28-CAMERA-SECURITY.md) · HĐ [`../../../../Linm.RMMS.Contract/out/camera-gtvt-dinh-nghia.md`](../../../../Linm.RMMS.Contract/out/camera-gtvt-dinh-nghia.md)  
> **Demo HTML:** `Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html` · **pilot wall+map:** [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html)  
> **MFE:** `Linm.Web.RMMS.Camera` · route `/camera` · ports **9216** / **9316** (`yarn start:std` → `http://localhost:9316/camera`)  
> **GIS wall+map:** `Linm.Web.RMMS.Gis` · **`/gis/camera`** (`gis-camera-map`) — Kind F · clip stack · **không** `/camera/wall` MFE Camera  
> **Pilot HTML:** [`camera-ops-dashboard-demo.html`](../../../Linm.RMMS.Demo/src/demo/features/camera-ops-dashboard-demo.html)  
> **BE:** `api/v1/cameras` · CRUD `CameraDevice` · SDK-first TCM403 · CaptureJPEG · ISAPI Digest · ingest · `Linm.RMMS.WebService`  
> **Specs:** `specs/camera-connect/STATUS.md` · `task/camera-connect.md` · `implement/camera-connect.md`  
> **Host notify guide:** [`../23-CAMERA-HOST-NOTIFY-CONFIG.md`](../23-CAMERA-HOST-NOTIFY-CONFIG.md) · ví dụ `http://camera-event-api-rmms.vn`  
> **API key ingest:** Auth `ApiKeys` · Admin `/admin/api-keys` · **secret = Tên** · bật/tắt · **cấm rotate** — [`../06-SECURITY-RATELIMIT.md`](../06-SECURITY-RATELIMIT.md) §2 · task [`../../specs/camera-connect/task/camera-ingest-apikey.md`](../../specs/camera-connect/task/camera-ingest-apikey.md)  
> **Skill gate:** `/agent-dev-camera-connect` · `/camera-connect` · **SDK OS:** `/docker-camera-sdk-context`

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
| DoD P2 | RTSP→**HLS** gateway MediaMTX (Railway :8888) · JPEG fallback · **G2b** multi-viewer lease — SSOT [`../21-CAMERA-HLS-WEBRTC-GATEWAY.md`](../21-CAMERA-HLS-WEBRTC-GATEWAY.md) · WebRTC WHEP **không** ship UI cloud |

## 2. Design / UI

| Screen | Pattern | Zones | Ghi chú |
|--------|---------|-------|---------|
| List `/camera` | Full page Kind B | Filter · Grid · Pager · **schema editor `camera-devices`** | Mã cam · model · IP · trạng thái Online · tuyến/Km |
| Connect `/camera/tao-moi` · `/camera/:id` | Full page Kind C | Z1 Config · Z2 Protocols · Z3 Live · Z4 Events | ≥10 inputs → full page |
| **Wall `/camera/wall`** (pilot P1.6) | Full Kind F | Palette · lưới kéo-thả · preset 1 / 2×2 / 3×2 · tile live | Xem **nhiều cam cùng lúc** · sắp xếp · fullscreen tile · **cấm** `alert` |

### Zones form kết nối

| Zone | Nội dung |
|------|----------|
| **Z1 Config** | Model · mã cam · tên · IP · HTTP port · RTSP port · SDK port · User · Pass · tuyến · Km · vị trí |
| **Z2 Protocols** | Bật RTSP live · ONVIF discover · ISAPI HTTP Host notify (URL listener) · Digest auth |
| **Z3 Live** | Mặc định **HLS** · JPEG poll tùy chọn · **ẩn WebRTC** · chu kỳ/timeout JPEG chỉ khi JPEG/fallback · guide luồng panel II · RTSP fail → fallback JPEG · KPI **Đang xem** = số lease |
| **Z4 Events** | Feed DB ingest **phân trang server-side** (default **Hôm nay** VN) · filter khoảng ngày · stats loại xe tiếng Việt theo model (TCM403: Xe máy / SUV/MPV / Xe con …) · plate · speed · hướng · nút **Info** → slide-out (config camera / config form) · ô Host notify URL = **copy tay** lên cam (RMMS **không** đẩy ISAPI Listening) · TCM403: XML `<speed>` chỉ khi radar **Fused** — [`../31-CAMERA-TCM403-LAB-RADAR.md`](../31-CAMERA-TCM403-LAB-RADAR.md) · dedup UUID — [`../../plan/camera-connect/PLAN-event-dedup.md`](../../plan/camera-connect/PLAN-event-dedup.md) |

**UI pattern:** Full page (workflow live + events). Wall = Kind F (kéo-thả · không form ≥10 field).  
**Mock:** 1 camera seed TCM403-GIR trên QL.1 · Km 12+350.  
**Pilot wall:** 6 cam QL.1 II.1 · layout localStorage `tn-demo:camera-wall:layout` · slideout live+tín hiệu+event (cùng GIS).

### P2 live — nhiều máy cùng **một** cam (G2b · 2026-09-09)

Không nhầm **wall nhiều cam** (GAP-CAM-WALL-02). Đây là **N browser / N thiết bị** xem **cùng** `CameraDevice`:

| | Chốt |
|--|------|
| Path MTX | Một `cam_{id}` · viewer 2+ **reuse** (không add RTSP mới) |
| Lease | Mỗi **Bật live** = `connectionId` mới · **cấm** lấy JWT `token` làm lease id |
| Dọn chết | `CameraLiveLeaseSweeper` + TTL **45s** · heartbeat **12s** · sweep **8s** · **cấm** `pagehide` keepalive |
| Stop | Nút **Tắt live** JWT `live/stop` + `connectionId` · 0 lease → `DeletePath` |
| OSD đồng bộ | hls.js seek `liveSyncPosition` (live − 3s) · RMMS↔RMMS ~1s · **không** khớp plugin Hikvision |
| Count **Đang xem** | In-memory 1 process API · **rmms-api Replicas = 1** · poll status 3s · KPI cạnh Trạng thái |
| UI mode | Form mặc định HLS · WebRTC ẩn · JPEG khi chọn hoặc fallback |
| Host notify URL | Ghi nhớ path ingest (`/ingest?host={IP}&apiKey={Tên}`) — **apiKey = tên** trên Auth Admin; camera POST event; **không** ghi xuống firmware khi Lưu form |

API thêm: `POST /cameras/{id}/live/heartbeat` (JWT). PlayToken HMAC = G2 S5 **chưa**.

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
| POST | `/cameras/{id}/live/start` | RTSP→MTX HLS URL · `connectionId` · `viewerCount` · `heartbeatSeconds` · fallback JPEG | **P2-G1+G2b** |
| POST | `/cameras/{id}/live/stop` | Nhả 1 lease · 0 viewer → xóa path | **P2-G1+G2b** |
| POST | `/cameras/{id}/live/heartbeat` | Gia hạn lease (JWT) | **P2-G2b** |
| GET | `/cameras/{id}/live/status` | publishing · viewers | **P2-G1+G2b** |
| GET | `/cameras/gateway/health` | MediaMTX control ping | **P2-G0** (AllowAnonymous) |
| POST | `/camera-events/ingest` | Dedicated inbound (`X-Api-Key` / query `apiKey` = **tên key** + IP) → persist `CameraEvent` | **DONE** |
| POST | `/cameras/ingest/isapi` | Alias cùng auth ingest | **DONE** |
| GET | `/camera-events` · `/cameras/events` | Paged feed JWT · `page` · `pageSize` (default 20) · `host` · `fromDate`/`toDate` `yyyy-MM-dd` (mặc định **hôm nay** UTC+7) · `vehicleType` · `modelCode` · `items` + `totalCount` · `vehicleStats` | **DONE** |
| GET | `/cameras/wall/layout` | Layout wall (user × tenant) | **P1.6 demo** · BE P2 |
| PUT | `/cameras/wall/layout` | Lưu thứ tự + preset | **P1.6 demo** · BE P2 |
| GET | `/cameras/{id}/signal` | Heartbeat · bitrate · lastSeen | **P1.6 mock** |
| GET | `/cameras/{id}/counts?from=&to=` | Đếm xe theo cam (support ANPR/count) | **P1.6 mock** · report `rpt-dem-xe` |

### API key ingest (Auth SSOT — 2026-09-09)

Hikvision Host notify **không JWT**. Secret trên camera **= Tên** dòng Auth (ops kiểm soát được). Hash SHA-256 lưu Auth; GET list **không** trả secret rời.

| | Chốt |
|--|------|
| Store | Auth `ApiKeys` · `KeyHash = SHA256(Name)` · scope `camera:ingest` |
| Admin UI | `Linm.Web.Admin` `/admin/api-keys` — tạo / **bật** / **tắt** · sửa IP · hạn · trạng thái. Bảng = field DB (Tên, Đơn vị, Scope, IP, Trạng thái, Hết hạn, Dùng lần cuối) |
| Tên | Bắt buộc · unique · **không đổi sau tạo**. Lab seed `rmms-cam-ingest-lab` |
| Camera URL | `POST /api/v1/camera-events/ingest?host={IP_CAMERA}&apiKey={Tên}` · header `X-Api-Key` cùng giá trị |
| Rotate | **Cấm.** `POST …/apikeys/{id}/rotate` → **410**. Tắt key = 401 trên cam; bật lại cùng tên |
| Introspect | Auth `POST /api/v1/apikeys/introspect` (RMMS service JWT) · body `{ apiKey, sourceIp }` · cache ≤ 30s |
| IP | `AllowedIpAddresses` CSV (public + LAN). 403 **không** lộ allowlist về cam |
| Rate | 120/min/key · 60/min/IP · 10× 401/min/IP · body 2 MB — [`../06-SECURITY-RATELIMIT.md`](../06-SECURITY-RATELIMIT.md) §3 |
| Prod | Auth bắt buộc. Env `Camera:Ingest:ApiKey` **chỉ** Dev/Docker khi Auth down |
| Docker Auth | Image cũ + `SkipMigrationOnExistingDb` có thể **chưa** bảng `ApiKeys` — cần `Schema_ApiKeys` + rebuild rồi seed sync hash theo tên |

Ops: [`../23-CAMERA-HOST-NOTIFY-CONFIG.md`](../23-CAMERA-HOST-NOTIFY-CONFIG.md) · lab radar/speed [`../31-CAMERA-TCM403-LAB-RADAR.md`](../31-CAMERA-TCM403-LAB-RADAR.md). Implement: `/agent-dev-camera-connect`.

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
  "timeoutSeconds": 45
}
```

| `protocolMode` | Hành vi |
|----------------|---------|
| `auto` | Theo `CameraModelCatalog` — TCM403 → **sdk** |
| `sdk` | TCP `sdkPort` · `HCNetSDK` → `Login_V40` · snapshot `CaptureJPEGPicture_NEW` |
| `isapi` | Digest `GET /ISAPI/System/deviceInfo` trên `httpPort` |

**Normalize:** nếu client gửi `httpPort` = 8000/8100/8200 với model SDK-first → remap sang `sdkPort`.

Native path:

| OS | Folder | File |
|----|--------|------|
| Windows lab | `{BeRoot}/api/src/RMMS.Service.Api/native/hikvision` | `HCNetSDK.dll` + `HCNetSDKCom/` |
| Linux / Railway | `{BeRoot}/api/src/RMMS.Service.Api/native/hikvision_linux/lib` | `libhcnetsdk.so` + `HCNetSDKCom/` |

`Camera:HikvisionSdk:NativePath` = `native/hikvision` (relative BaseDirectory). Linux image **COPY** `hikvision_linux/lib` → `/app/native/hikvision` (`.so` **root** folder — không thêm tầng `lib/`). TPP **Download Integration Resources** → **Device Network SDK Download Info** → Linux64 / Win64. Cấm CDN zip 403. Runtime dll/so **được** commit; gitignore demo / `.lib` / `.exe`.

**BFF `GET /web-bff/api/v1/cameras/health` cần JWT** (401 nếu curl không token). GIS `/gis/health` anonymous.

### Prod Railway (verified 2026-09-05 — đã kết nối)

API image = Linux. **Cấm** copy Win64 `HCNetSDK.dll` vào NativePath (fail: `libhcnetsdk.so` missing · `GAP-CAM-SDK-OS`).

| Layer | Config |
|-------|--------|
| `api/Dockerfile` | `COPY api/src/RMMS.Service.Api/native/hikvision_linux/lib ./native/hikvision` |
| API env | `Camera__HikvisionSdk__Enabled=true` · `Camera__HikvisionSdk__NativePath=native/hikvision` · `LD_LIBRARY_PATH=/app/native/hikvision:/app/native/hikvision/HCNetSDKCom` |
| BFF env | `ApiBase=http://${{linm-rmms-api.RAILWAY_PRIVATE_DOMAIN}}:8080` — **cấm** `localhost:5101` |
| MFE | `VITE_API_URL` = BFF public `…/web-bff/api/v1` — FTP Pages **không** ship SDK |
| Health pass | `sdkDllLoaded=true` · `sdkOs=linux` · `sdkExpectedLib=libhcnetsdk.so` |
| Connect | TCM403 `sdkPort` **8100** phải **TCP open từ Railway** (public map). `8100 closed/unreachable` ≠ thiếu `.so` |

Cấm sidecar Docker Linux để load DLL. Lab local Linux: `local-script/start-linux-camera-sdk-lab.ps1`. Skill: `/docker-camera-sdk-context`. Deploy vars: `{BeRoot}/docs/railway-deploy.md`.

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
| Media | **RTSP** | **554** hoặc firmware **6554** (điền đúng form) | Live → **HLS** MediaMTX · checklist [`../30-CAMERA-LIVE-STREAM-CONFIG.md`](../30-CAMERA-LIVE-STREAM-CONFIG.md) · WebRTC ẩn UI |
| Discover | **ONVIF** Profile S (+T) | 80 | Capability |

Site lab: `113.179.52.55:8100` = SDK TCP · không phải ISAPI.

## 6. Gaps / quyết định

| ID | Question | Default |
|----|----------|---------|
| GAP-CAM-01 | BE CRUD + listener | **CRUD DONE** (task_6baf42c3) · SDK ITS listen still DEFER |
| GAP-CAM-02 | Live video FPS (browser không play RTSP) | **P2-G1+G2b:** MediaMTX **HLS** · JPEG fallback · multi-viewer lease · **ops** [`30`](../30-CAMERA-LIVE-STREAM-CONFIG.md) · Sub **H.264** · MTX fmp4 · WebRTC **ẩn** (thiếu :8889) |
| GAP-CAM-03 | Lưu password | **Supersede** [`../plan/camera-security/PLAN.md`](../../plan/camera-security/PLAN.md) · `GAP-CAM-SEC-01…07` · AEAD 2 chiều + resign URL · **cấm** plain `PasswordEnc` |
| GAP-CAM-04 | Multi-model catalog | `GET /cameras/models` + `CameraModelCatalog` |
| GAP-CAM-05 | HCNetSDK binary | Win64 → `native/hikvision` · Linux64 → `native/hikvision_linux/lib` (Railway COPY vào NativePath). Thiếu `.so` → `sdk_tcp` only |
| GAP-CAM-SDK-OS | Docker/Railway Linux vs Win64 DLL | **Chốt 2026-09-05 (prod kết nối OK):** Linux image COPY `hikvision_linux/lib` → `/app/native/hikvision` + `LD_LIBRARY_PATH` + un-defer cdecl `hcnetsdk`. Health `sdkDllLoaded=true` `sdkOs=linux`. Win64 DLL **không** load. BFF `ApiBase` = private API `:8080`. `REQUIRE_HIKVISION_SDK` default false lúc build; `.so` **phải** có trong image prod. Cấm leftover `localhost:5101`. |
| GAP-CAM-WALL-01 | Persist layout BE | Demo localStorage · BE `wall/layout` P2 |
| GAP-CAM-WALL-02 | Live N **cam** cùng lúc (wall) | Demo JPEG mock · P2 N path MTX — **khác** N viewer **một** cam (G2b đã ship) |
| GAP-CAM-SEC-* | Vault · tách service · resign exp/unlimit | Pointer [`../28-CAMERA-SECURITY.md`](../28-CAMERA-SECURITY.md) |
| GAP-CAM-INGEST-KEY | Auto-gen + rotate secret → cam URL lệch tên | **Closed 2026-09-09:** secret = **Tên** · Admin bật/tắt · rotate **410** · [`23`](../23-CAMERA-HOST-NOTIFY-CONFIG.md) |

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
| BE | `Linm.RMMS.WebService` · `Domains/Camera` · Models `LINM.RMMS.Camera.Models` · **S3:** host `Linm.RMMS.Camera` (plan security) |
| Auth API key | `Linm.Platform.Authentication` · `ApiKeys` · Admin `Linm.Web.Admin` `/admin/api-keys` |
| Security plan | [`../plan/camera-security/PLAN.md`](../../plan/camera-security/PLAN.md) |

## Implement tracking

| lane | phase | status | updatedAt |
|------|-------|--------|-----------|
| web | `qa` | `await_confirm` | `2026-09-06T15:08:43.792Z` |
| mobile | — | — | — |
