# 23 — Cấu hình camera gửi event về RMMS (HTTP Host Notification)

> **Feature:** `camera-connect` · Model seed **iDS-TCM403-GIR**  
> **Ngày:** 2026-08-09  
> **Mục đích:** Hướng dẫn kỹ thuật ITS cấu hình camera để **đẩy event** (biển · tốc độ · loại xe) về máy chủ RMMS và **đếm số lượng** trên UI.  
> **Liên quan:** `features/camera-connect.md` · `22-CAMERA-TCM403-SDK-RESEARCH.md` · [`31-CAMERA-TCM403-LAB-RADAR.md`](31-CAMERA-TCM403-LAB-RADAR.md) · Cam-HT `08-CAMERA-STANDARD-HIKVISION.md`  
> **Endpoint nhận (SSOT):** `POST /api/v1/camera-events/ingest?host={IP_CAMERA}&apiKey={KEY}`  
> Alias: `POST /api/v1/cameras/ingest/isapi` (cùng auth). **Không JWT**.  
> **Auth Admin:** `/admin/api-keys` — tạo / bật / tắt key. **Secret = Tên** (`apiKey={Tên}` trên camera). **Không xoay.** Lab seed `rmms-cam-ingest-lab` (SeedMode Full).  
> Rate limit **120/min/key** · **60/min/IP** · 10× 401/min/IP · body **2 MB**. Lab fallback env `Camera__Ingest__ApiKey` **chỉ** Development/Docker khi Auth down. Production: Auth bắt buộc.  
> **MFE (2026-09-09):** panel **III. Events** → nút **Info** → slide-out (config trên camera / config trên form). Ô Host notify URL trên form = **copy tay** vào firmware — RMMS **không** ghi ISAPI Listening khi Lưu.  
> **Lab TCM403 radar (2026-09-10):** Vehicle List có km/h **không** đồng nghĩa XML ingest có `<speed>`. Menu Fused / Calibration: [`31-CAMERA-TCM403-LAB-RADAR.md`](31-CAMERA-TCM403-LAB-RADAR.md).  
> **Dedup:** plan [`../plan/camera-connect/PLAN-event-dedup.md`](../plan/camera-connect/PLAN-event-dedup.md) · ops tắt **Enable Multi-Way Upload** nếu chỉ một ISAPI Listening.

---

## 0. Hai khái niệm “host” (không nhầm)

| Chỗ ghi | Nghĩa | Ví dụ |
|---------|--------|--------|
| **Host / IP / Server** trên form camera (HTTP Host Notification) | Máy chủ **nhận** event = backend RMMS | `camera-event-api-rmms.vn` |
| Query `?host=` trên URL ingest | **IP camera** gửi event (để RMMS gắn đúng thiết bị) | `113.179.52.55` |

```
  Camera ITS                    Máy chủ nhận (RMMS API)
  113.179.52.55  ──POST event──►  camera-event-api-rmms.vn
       ▲                                    │
       │                                    ▼
  query ?host=IP-cam              POST …/ingest/isapi
                                  GET  …/events  → đếm trên MFE
```

---

## 1. URL chuẩn (production ví dụ)

**Base backend (ví dụ user):**

```text
http://camera-event-api-rmms.vn
```

**URL đầy đủ ghi vào camera (ISAPI Listening):**

```text
http://camera-event-api-rmms.vn/api/v1/camera-events/ingest?host={IP_CAMERA}&apiKey={CAMERA_INGEST_API_KEY}
```

| Thành phần | Giá trị |
|------------|---------|
| Scheme | `http` (lab) · prod khuyến nghị `https` |
| Host nhận | `camera-event-api-rmms.vn` |
| Port | **80** (HTTP mặc định) · hoặc `:443` HTTPS · lab local `:5101` |
| Path | `/api/v1/camera-events/ingest` |
| Query `host` | IP tĩnh camera (VD `113.179.52.55`) |
| Query `apiKey` | Secret Auth (`rmms-cam-ingest-lab` lab) — Hikvision không hỗ trợ JWT · header SSOT `X-Api-Key` |
| Auth trên form cam | **None** (key nằm URL) hoặc **Base64** với Password = apiKey |

### Ví dụ điền sẵn — cam lab

| Field | Value |
|-------|--------|
| Full URL | `http://camera-event-api-rmms.vn/api/v1/camera-events/ingest?host=113.179.52.55&apiKey=…` |
| Method | **POST** |
| Content-Type cam gửi | TCM403 lab: **`multipart/form-data`** (XML `EventNotificationAlert` + JPEG). JSON/XML thuần cũng parse được. |
| Form Auth | **None** |

### Lab local (dev)

| Field | Value |
|-------|--------|
| Host nhận | IP máy chạy API (LAN), **không** `localhost` từ phía camera |
| Port | `5101` |
| Full URL | `http://{IP_MAY_API}:5101/api/v1/camera-events/ingest?host=113.179.52.55&apiKey=rmms-cam-ingest-lab` |

BFF (nếu expose ingest qua BFF):

```text
http://camera-event-api-rmms.vn/web-bff/api/v1/camera-events/ingest?host={IP_CAMERA}&apiKey={KEY}
```

Ưu tiên **API direct** (`/api/v1/...`) cho cam push — ít hop, dễ firewall.

---

## 2. Điều kiện mạng (checklist trước khi cấu hình)

| # | Hướng | Bắt buộc |
|---|--------|----------|
| 1 | Máy kỹ thuật → cam HTTP **80/443** | Vào web UI / ISAPI config |
| 2 | Cam → `camera-event-api-rmms.vn:80` (hoặc 443) | **Outbound** POST event |
| 3 | DNS | Cam resolve được `camera-event-api-rmms.vn` (hoặc ghi IP server) |
| 4 | NTP trên cam | Giờ đúng (timestamp event) |
| 5 | Firewall server | Allow POST `/api/v1/camera-events/ingest` từ IP cam / dải Chi cục |

**Lab `113.179.52.55`:** từ Internet chỉ mở SDK **8100** · HTTP đóng → cấu hình Host notify **trên LAN/VPN** cạnh cam; server nhận phải reachable từ mạng cam.

---

## 3. Bật ANPR / đếm trên camera (web UI)

Đăng nhập `http://{IP_CAMERA}` · user quản trị (VD `admin`).

### 3.1 Road Traffic / ITS / ANPR

Menu điển hình (tên lệch theo firmware TCM403):

**Configuration → Road Traffic / VCA / ITS → License Plate Recognition / Vehicle Detection**

| Bước | Việc |
|------|------|
| 1 | Enable **ANPR / Vehicle Detection** |
| 2 | Vẽ / chỉnh **lane** · vùng biển · hướng |
| 3 | Bật nhận diện biển · loại xe · màu · hướng (theo gói ITS) |
| 4 | TCM403-GIR: **không** có Trigger Mode “Video & Radar”. Radar tab **Lane + Coordinate Calibration** → Fused. Chi tiết [`31-CAMERA-TCM403-LAB-RADAR.md`](31-CAMERA-TCM403-LAB-RADAR.md) |

### 3.2 Vehicle counting (đếm trên cam — tùy menu)

**Configuration → Road Traffic → Counting / Traffic Statistics** (nếu có)

| Bước | Việc |
|------|------|
| 1 | Enable counting theo làn / chiều |
| 2 | Reset counter theo ca nếu cần ops |

> **Đếm trên RMMS UI** = số event đã `ingest` (`GET /events`), **không** đồng bộ 1:1 với counter nội bộ cam trừ khi map thêm API statistics.

### 3.3 ISAPI / tích hợp

**Configuration → Network → Advanced Settings → Integration Protocol**

- Enable **ISAPI**
- (Tuỳ chọn) ONVIF Profile S

---

## 4. Cấu hình HTTP Host Notification (máy chủ nhận)

Menu điển hình:

**Configuration → Network → Data Connection → ISAPI Listening** (TCM403)

### 4.0 Auth (Hikvision không JWT)

| Cơ chế | Dùng? |
|--------|--------|
| JWT Bearer | **Không** — cam không gửi |
| Digest admin/pass cam | **Không** — RMMS ingest không challenge Digest |
| **API-key + IP camera** | **SSOT** |

- Query `apiKey` (ghi trong Host URL) hoặc header **`X-Api-Key`** (alias `X-Camera-Api-Key`) hoặc form **Base64** (Password = key).
- Query `host` = IP camera.
- Prod: Auth introspect bắt buộc · `RequireSourceIpMatch=true` — TCP source IP phải = `host` hoặc `Camera:Ingest:HostAliases` hoặc `AllowedIpAddresses`.
- Lab: `RequireSourceIpMatch=false` (curl từ máy dev). Auth Full seed key `rmms-cam-ingest-lab` · fallback env `Camera__Ingest__ApiKey` khi Auth down.
- HTTP **401** sai key · **403** IP/host lệch (JSON có `sourceIp` + `host`, **không** `allowedIps` — **không** lấy query `host` làm IP allowlist) · **400** thiếu `host` · **429** vượt 120/min/key hoặc 60/min/IP hoặc 10× 401/min/IP (`Retry-After: 60`).

### 4.1 Bảng điền (SSOT)

| Field trên cam (EN/VN hay gặp) | Giá trị production ví dụ |
|--------------------------------|--------------------------|
| Enable / Kích hoạt | **On** |
| Protocol / Version | **HTTP** (hoặc HTTPS nếu TLS) |
| **Addressing / IP / Host / Server Address** | `camera-event-api-rmms.vn` |
| Port | `80` (HTTP) · `443` (HTTPS) |
| URL / Path / Resource | `/api/v1/camera-events/ingest?host=113.179.52.55&apiKey={KEY}` |
| Method | **POST** |
| HTTP Authentication | **None** (key trong URL) · hoặc **Base64** Password=`{KEY}` |
| Platform Response Verification | **Tắt** |
| ANPR / Vehicle / Traffic event | **Tick** các loại event cần đẩy |

Một số firmware tách:

- **IP Address** = `camera-event-api-rmms.vn` (hoặc IP server)
- **URL** chỉ path: `/api/v1/camera-events/ingest?host=113.179.52.55&apiKey={KEY}`

Không ghi `localhost` / `127.0.0.1` — đó là máy cam, không phải RMMS.  
**Không** điền Host = IP camera (`113.179.52.55`).

### 4.2 ISAPI tương đương (khi HTTP cam mở)

```http
PUT /ISAPI/Event/notification/httpHosts
Content-Type: application/xml
```

Skeleton (chỉnh schema theo firmware TPP — **verify trước prod**):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<HttpHostNotificationList>
  <HttpHostNotification>
    <id>1</id>
    <url>/api/v1/camera-events/ingest?host=113.179.52.55&amp;apiKey=REPLACE</url>
    <protocolType>HTTP</protocolType>
    <parameterFormatType>JSON</parameterFormatType>
    <addressingFormatType>hostname</addressingFormatType>
    <hostName>camera-event-api-rmms.vn</hostName>
    <portNo>80</portNo>
    <httpAuthenticationMethod>none</httpAuthenticationMethod>
  </HttpHostNotification>
</HttpHostNotificationList>
```

Nếu cam chỉ hỗ trợ IP:

```xml
    <addressingFormatType>ipaddress</addressingFormatType>
    <ipAddress>203.0.113.10</ipAddress>
```

(`203.0.113.10` = IP resolve của `camera-event-api-rmms.vn` — thay bằng IP thật.)

---

## 5. Payload cam gửi → RMMS parse

| | |
|--|--|
| Method | `POST` |
| Body | TCM403 lab: multipart XML `EventNotificationAlert` (`ANPR` / `AID`) + JPEG. `vehicleInfo/speed` = tốc độ; `0` → RMMS null. Ảnh **chưa** persist. |
| Query | `host` = IP camera · `apiKey` = ingest key |

RMMS: `CameraConnectService.IngestIsapiAsync` → **EF** `rmms_camera_events` → MFE **Tải events**.

Response thành công (rút gọn):

```json
{
  "id": "…",
  "at": "2026-08-09T16:00:00Z",
  "plate": "30A-12345",
  "speedKmh": 72,
  "cameraHost": "113.179.52.55",
  "source": "ISAPI"
}
```

---

## 6. Kiểm tra nhận & đếm số lượng

### 6.1 Smoke từ máy có HTTP tới server

```bash
curl -s -X POST \
  "http://localhost:5101/api/v1/camera-events/ingest?host=113.179.52.55&apiKey=rmms-cam-ingest-lab" \
  -H "Content-Type: application/json" \
  -d "{\"licensePlate\":\"TEST-001\",\"speed\":60,\"vehicleType\":\"car\"}"
```

```bash
curl -s "http://localhost:5101/api/v1/camera-events?limit=40"
```

Mỗi POST thành công → **+1** event (đếm = `length` danh sách / HUD Events trên `/camera/new`).

### 6.2 Từ camera thật

1. Lưu Host Notification · Save/Reboot nếu firmware yêu cầu  
2. Cho xe qua làn (hoặc **Test** trên UI cam nếu có)  
3. MFE `http://localhost:9316/camera/new` → **Tải events**  
4. Cột Events / bảng tăng số dòng

### 6.3 Troubleshooting

| Triệu chứng | Kiểm tra |
|-------------|----------|
| Events = 0 | Cam → DNS/IP server · port 80/443 · firewall · URL path đúng |
| 401 | Thiếu/sai `apiKey` |
| 403 | Source IP ≠ `host` (bật `RequireSourceIpMatch`) — thêm `HostAliases` LAN |
| 404 | Path thiếu `/api/v1/camera-events/ingest` |
| Timeout | Cam không ra Internet / NAT; dùng IP LAN Edge |
| Có POST nhưng thiếu biển | `licensePlate=unknown` → null. AID / pedestrian không có biển. |
| Tốc độ **—** / `speed=0` | Radar List có số nhưng XML chưa Fused — [`31-CAMERA-TCM403-LAB-RADAR.md`](31-CAMERA-TCM403-LAB-RADAR.md). **Không** hạ Speeding limit. |
| 2 hàng cùng biển/giờ | Cam POST 2 lần (retry / Multi-Way / ANPR+AID). Tắt Multi-Way. Dedup UUID = plan. |
| Log chứa `apiKey=` / XML | **Cấm** — rollback 2026-09-10 (`Program` · `CameraIngestAuthFilter` · `CameraConnectService`) |
| Chỉ SDK 8100 | Host notify **không** chạy qua 8100 — cần HTTP outbound + cấu hình qua LAN |

---

## 7. Bảng copy-paste theo môi trường

### Production (ví dụ)

| | |
|--|--|
| Host nhận | `camera-event-api-rmms.vn` |
| Port | `80` |
| Full URL | `http://camera-event-api-rmms.vn/api/v1/camera-events/ingest?host=113.179.52.55&apiKey=…` |

### Production HTTPS (khuyến nghị)

| | |
|--|--|
| Host nhận | `camera-event-api-rmms.vn` |
| Port | `443` |
| Full URL | `https://camera-event-api-rmms.vn/api/v1/camera-events/ingest?host=113.179.52.55&apiKey=…` |

### Dev local

| | |
|--|--|
| Host nhận | `{IP_LAN_MAY_DEV}` |
| Port | `5101` |
| Full URL | `http://{IP_LAN_MAY_DEV}:5101/api/v1/camera-events/ingest?host=113.179.52.55&apiKey=rmms-cam-ingest-lab` |

---

## 8. Ownership / links

| Artifact | Path |
|----------|------|
| Feature | `docs/context/features/camera-connect.md` |
| SDK research | `docs/context/22-CAMERA-TCM403-SDK-RESEARCH.md` |
| Lab radar / speed XML | `docs/context/31-CAMERA-TCM403-LAB-RADAR.md` |
| Implement | `specs/camera-connect/implement/camera-connect.md` |
| API code | `RMMS.Service.Api` · `POST api/v1/camera-events/ingest` · alias `POST api/v1/cameras/ingest/isapi` |
| MFE | `Linm.Web.RMMS.Camera` · zone Events |

Version meta: guide=`camera-host-notify-config` · exampleHost=`camera-event-api-rmms.vn` · date=`2026-09-10` · labRadar=`31-CAMERA-TCM403-LAB-RADAR.md`
