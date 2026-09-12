# 30 — Checklist cấu hình camera để xem live HLS

> **Đối tượng:** ITS ops · Dev · form MFE `II. Live`  
> **Feature:** `camera-connect` · model **iDS-TCM403-GIR**  
> **Ngày:** 2026-09-09 · **G2b** N viewer / 1 cam · form mặc định **HLS** · WebRTC **ẩn**  
> **Parent:** [`21-CAMERA-HLS-WEBRTC-GATEWAY.md`](21-CAMERA-HLS-WEBRTC-GATEWAY.md) · lease [`../plan/camera-live/PLAN-lease-ttl.md`](../plan/camera-live/PLAN-lease-ttl.md)  
> **UI:** panel **II. Live** → *Hướng dẫn cấu hình luồng video* · HDSD [`../hdsd/camera/huong-dan-su-dung.md`](../hdsd/camera/huong-dan-su-dung.md)

JPEG poll (SDK) **khác** HLS (RTSP → MediaMTX). KPI **Online** không chứng minh video stream. KPI **Đang xem** = số lease in-memory (1 process API).

---

## I. Hai lớp kết nối

| Lớp | Cổng typic | Dấu hiệu trên RMMS |
|-----|------------|-------------------|
| SDK / JPEG | **8000** (WAN map **8100**) | Ảnh live, **Online** |
| HTTP / ISAPI | 80 hoặc **8086** | Test ISAPI · Host notify |
| **RTSP / HLS** | **554** hoặc firmware **6554** | `<video>` HLS, không fallback JPEG |

Lab TCM403: WAN chỉ mở **8100** thì JPEG OK, HLS fallback. RTSP public phải **cùng số** trên form RMMS và NAT router (lab: **6554** OPEN, **554** đóng).

---

## II. Form RMMS (trước Bật live HLS)

1. **IP / Host** = IP **WAN** khi API trên cloud (không `192.168.x.x`).
2. **RTSP port** = đúng **Configuration → Network → Port → RTSP** trên camera — **không** mặc định 554 nếu cam đổi (TCM403 lab = **6554**).
3. **SDK port** = cổng JPEG (lab **8100**). Không dùng làm RTSP.
4. Lưu bản ghi (có mật khẩu). Form mặc định **HLS** (không hiện WebRTC). **Bật live**. JPEG poll chỉ khi chọn JPEG hoặc RTSP fail.

Camera LAN `192.168.1.66` + gateway `192.168.1.1` = đúng NIC. **Cấm** ghi WAN vào IPv4 Address trên cam.

---

## III. Web camera (LAN) — Video Encoding

RMMS preview = **Sub-Stream** (channel **102**), không phải Main (101).

**Configuration → Video → Video Encoding → Sub-Stream Parameters**

| Ô | Giá trị HLS / Chrome |
|---|----------------------|
| Video Encoding | **H.264** (không H.265 / HEVC) |
| Resolution | **1280×720** hoặc thấp hơn |
| Stream Type | **Video Stream** (tránh audio G.711) |
| Bitrate | 512–2048 kbps |

Main được H.265. Đổi Main **không** sửa HLS nếu Sub vẫn H.265 + 1080p.

**Network → Port:** bật RTSP, ghi số port, **Save**. Không đụng NIC nếu JPEG đã chạy.

**Router** `192.168.1.1`: NAT **TCP** `WAN:{rtspPort} → {LAN}:{rtspPort}`.

---

## IV. Đọc lỗi trên UI

| Hiện tượng | Nguyên nhân | Việc |
|------------|-------------|------|
| **Online** + JPEG + banner fallback HLS | TCP RTSP từ API/MTX không tới Host:rtspPort | NAT + port form = cam |
| `gateway/health` `ok: true` | API ↔ MTX `:9997` | Không đủ cho video |
| `live/start` `ok: true` + `index.m3u8` **pending** | MTX on-demand kéo RTSP (UDP RTP / auth) | RTSP/TCP · log MTX |
| **LIVE · HLS** + khung **đen** | Playlist `CODECS=hvc1` (H.265) hoặc LL-HLS | Sub **H.264** · MTX `hlsVariant: fmp4` |
| Playlist `avc1` + 720p | Codec đúng | Tắt live / Bật lại; Chrome + `hls.js` |

Kiểm tra playlist (khi MTX public): `GET {PublicHlsBase}/{pathName}/index.m3u8` — cần `avc1`, không `hvc1`.

---

## V. Infra (ops)

- Control API: **private** `http://{RAILWAY_PRIVATE_DOMAIN}:9997` — **cấm** public `:9997`.
- HLS browser: **public** domain target **8888**.
- `ops/mediamtx.yml`: `hlsVariant: fmp4` (không LL-HLS blocking trên proxy).
- Path add: `rtspTransport: tcp` (NAT cloud).
- `GET …/cameras/gateway/health` AllowAnonymous.
- Viewer chết (đóng tab): **không** cần Stop trên UI — API TTL **45s** + sweeper **8s** dọn path ([`PLAN-lease-ttl.md`](../plan/camera-live/PLAN-lease-ttl.md)).
- Railway **`rmms-api` Replicas = 1**. N replica → mỗi máy thấy `viewerCount` local (Redis/EF lease = OUT).

WebRTC **ẩn trên MFE** (cloud một public port 8888 không đủ WHEP `:8889`). Form mặc định **HLS**.

---

## VI. HLS vs WebRTC — có cần WebRTC?

| | HLS (nên dùng) | WebRTC (WHEP) |
|--|----------------|---------------|
| Port MTX | **8888** (đã public Railway) | **8889** + ICE UDP |
| Latency | 2–8 s | ~0.3–2 s |
| Chrome | `hls.js` + fmp4 | `RTCPeerConnection` |
| Railway | Một HTTP domain → 8888 | Thiếu 8889 · NAT ICE · `webrtcAdditionalHosts` đang `127.0.0.1` |

**Không bắt buộc · không ship UI.** Cùng RTSP Sub H.264. Thêm WebRTC chỉ khi Hub/VPN publish **8889**, ICE host = hostname public MTX (`webrtcAdditionalHosts` **không** `127.0.0.1`). Cloud hiện tại: **HLS đủ**. Form ẩn chu kỳ/timeout snapshot khi HLS (chỉ hiện khi JPEG hoặc fallback JPEG).

---

## VII. Nhận diện (biển · tốc độ) ≠ live video

OSD trên khung hình (Camera 01) = overlay firmware. KPI **Biển / Tốc độ** và **III. Events ISAPI** = HTTP Host notify (doc [`23-CAMERA-HOST-NOTIFY-CONFIG.md`](23-CAMERA-HOST-NOTIFY-CONFIG.md)).

| Cần | Việc |
|-----|------|
| Menu cam | Network → Data Connection → **ISAPI Listening** |
| URL | `POST /api/v1/camera-events/ingest?host={IP_CAMERA}&apiKey=` |
| Query `host` | IP trên form RMMS (WAN `14.239.20.231`) |
| Outbound | Camera gọi được API public |
| UI | Panel **III. Events** → nút **Info** → slide-out (1 config trên camera · 2 config trên form) · **Tải events** · poll 10 s khi đang HLS |
| Form Host notify URL | **Copy-paste** lên firmware ISAPI Listening — RMMS **không** đẩy URL khi Lưu form |

HLS không OCR biển từ video. 0 sự kiện = cam chưa POST ingest (không phải lỗi player).

---

## VIII. Nhiều máy xem cùng một cam (G2b)

Khác **wall nhiều cam**. Đây là 2+ browser / điện thoại mở **cùng** `/camera/:id`.

| | |
|--|--|
| MTX | Một path `cam_{id}` — máy 2 **không** add RTSP mới |
| Lease | Mỗi **Bật live** = `connectionId` mới · **cấm** JWT làm lease id |
| Heartbeat | ~12s JWT · TTL 45s · sweep 8s |
| KPI **Đang xem** | Thanh dưới cạnh **Trạng thái** · poll status ~3s |
| Máy vào sau | Player seek live − 3s (không nhảy live edge) · drift >1.25s / 4s snap · **không** khớp plugin Hikvision |
| Stop | Chỉ nút **Tắt live** nhả lease ngay; đóng tab → hết TTL |

Verify: 2 Chrome cùng cam → Đang xem = 2 · Tắt 1 → còn 1 stream.

