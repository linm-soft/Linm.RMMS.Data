# 23 — Cấu hình camera gửi event về RMMS (HTTP Host Notification)

> **Feature:** `camera-connect` · Model seed **iDS-TCM403-GIR**  
> **Ngày:** 2026-08-09  
> **Mục đích:** Hướng dẫn kỹ thuật ITS cấu hình camera để **đẩy event** (biển · tốc độ · loại xe) về máy chủ RMMS và **đếm số lượng** trên UI.  
> **Liên quan:** `features/camera-connect.md` · `22-CAMERA-TCM403-SDK-RESEARCH.md` · Cam-HT `08-CAMERA-STANDARD-HIKVISION.md`  
> **Endpoint nhận:** `POST /api/v1/cameras/ingest/isapi`

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

**URL đầy đủ ghi vào camera (Host Notification):**

```text
http://camera-event-api-rmms.vn/api/v1/cameras/ingest/isapi?host={IP_CAMERA}
```

| Thành phần | Giá trị |
|------------|---------|
| Scheme | `http` (lab) · prod khuyến nghị `https` |
| Host nhận | `camera-event-api-rmms.vn` |
| Port | **80** (HTTP mặc định) · hoặc `:443` HTTPS · lab local `:5101` |
| Path | `/api/v1/cameras/ingest/isapi` |
| Query `host` | IP tĩnh camera (VD `113.179.52.55`) |

### Ví dụ điền sẵn — cam lab

| Field | Value |
|-------|--------|
| Full URL | `http://camera-event-api-rmms.vn/api/v1/cameras/ingest/isapi?host=113.179.52.55` |
| Method | **POST** |
| Content-Type cam gửi | `application/json` hoặc `application/xml` (theo firmware) |

### Lab local (dev)

| Field | Value |
|-------|--------|
| Host nhận | IP máy chạy API (LAN), **không** `localhost` từ phía camera |
| Port | `5101` |
| Full URL | `http://{IP_MAY_API}:5101/api/v1/cameras/ingest/isapi?host=113.179.52.55` |

BFF (nếu expose ingest qua BFF):

```text
http://camera-event-api-rmms.vn/web-bff/api/v1/cameras/ingest/isapi?host={IP_CAMERA}
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
| 5 | Firewall server | Allow POST `/api/v1/cameras/ingest/isapi` từ IP cam / dải Chi cục |

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
| 4 | TCM403: bật **radar / speed** nếu có |

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

**Configuration → Event → Destination / Notify Surveillence Center**  
hoặc **Network → Advanced → HTTP Listening Host / HTTP Host Notification / Alarm Server**

### 4.1 Bảng điền (SSOT)

| Field trên cam (EN/VN hay gặp) | Giá trị production ví dụ |
|--------------------------------|--------------------------|
| Enable / Kích hoạt | **On** |
| Protocol | **HTTP** (hoặc HTTPS nếu TLS) |
| **Addressing / IP / Host / Server Address** | `camera-event-api-rmms.vn` |
| Port | `80` (HTTP) · `443` (HTTPS) |
| URL / Path / Resource | `/api/v1/cameras/ingest/isapi?host=113.179.52.55` |
| Method | **POST** |
| HTTP Authentication | None (P1.5) · P2: token/mTLS |
| ANPR / Vehicle / Traffic event | **Tick** các loại event cần đẩy |

Một số firmware tách:

- **IP Address** = `camera-event-api-rmms.vn` (hoặc IP server)
- **URL** chỉ path: `/api/v1/cameras/ingest/isapi?host=113.179.52.55`

Không ghi `localhost` / `127.0.0.1` — đó là máy cam, không phải RMMS.

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
    <url>/api/v1/cameras/ingest/isapi?host=113.179.52.55</url>
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
| Body | JSON hoặc XML ANPR / Traffic (plate · speed · type · color · direction · ảnh) |
| Query | `host` = IP camera |

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
  "http://camera-event-api-rmms.vn/api/v1/cameras/ingest/isapi?host=113.179.52.55" \
  -H "Content-Type: application/json" \
  -d "{\"licensePlate\":\"TEST-001\",\"speed\":60,\"vehicleType\":\"car\"}"
```

```bash
curl -s "http://camera-event-api-rmms.vn/api/v1/cameras/events?limit=40"
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
| 404 | Path thiếu `/api/v1/cameras/ingest/isapi` |
| Timeout | Cam không ra Internet / NAT; dùng IP LAN Edge |
| Có POST nhưng thiếu biển | Firmware format khác — xem raw body log API · mở rộng parser |
| Chỉ SDK 8100 | Host notify **không** chạy qua 8100 — cần HTTP outbound + cấu hình qua LAN |

---

## 7. Bảng copy-paste theo môi trường

### Production (ví dụ)

| | |
|--|--|
| Host nhận | `camera-event-api-rmms.vn` |
| Port | `80` |
| Full URL | `http://camera-event-api-rmms.vn/api/v1/cameras/ingest/isapi?host=113.179.52.55` |

### Production HTTPS (khuyến nghị)

| | |
|--|--|
| Host nhận | `camera-event-api-rmms.vn` |
| Port | `443` |
| Full URL | `https://camera-event-api-rmms.vn/api/v1/cameras/ingest/isapi?host=113.179.52.55` |

### Dev local

| | |
|--|--|
| Host nhận | `{IP_LAN_MAY_DEV}` |
| Port | `5101` |
| Full URL | `http://{IP_LAN_MAY_DEV}:5101/api/v1/cameras/ingest/isapi?host=113.179.52.55` |

---

## 8. Ownership / links

| Artifact | Path |
|----------|------|
| Feature | `docs/context/features/camera-connect.md` |
| SDK research | `docs/context/22-CAMERA-TCM403-SDK-RESEARCH.md` |
| Implement | `specs/camera-connect/implement/camera-connect.md` |
| API code | `RMMS.Service.Api` · `POST api/v1/cameras/ingest/isapi` |
| MFE | `Linm.Web.RMMS.Camera` · zone Events |

Version meta: guide=`camera-host-notify-config` · exampleHost=`camera-event-api-rmms.vn` · date=`2026-08-09`
