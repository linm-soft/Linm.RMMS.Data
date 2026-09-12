# Camera Live — P2-G0 + G1 (MediaMTX · Hub+VPN)

> **Status:** Confirmed 2026-09-06 · **G0/G1 shipped** · **G2b shipped** 2026-09-09 · HLS mặc định · WebRTC **ẩn MFE** · RTSP port thiết bị (lab **6554**) · Sub **H.264** · MTX `hlsVariant: fmp4`  
> **G2b lease:** [`PLAN-lease-ttl.md`](PLAN-lease-ttl.md) — job + TTL = nguồn sạch · `connectionId` ≠ JWT · **cấm** `pagehide` · **Replicas = 1**  
> **Ops checklist:** [`../../context/30-CAMERA-LIVE-STREAM-CONFIG.md`](../../context/30-CAMERA-LIVE-STREAM-CONFIG.md)  

> **Feature:** `camera-connect` · MFE `Linm.Web.RMMS.Camera` Z3  
> **Parent SSOT:** [`../../context/21-CAMERA-HLS-WEBRTC-GATEWAY.md`](../../context/21-CAMERA-HLS-WEBRTC-GATEWAY.md)  
> **Security:** [`camera-security/PLAN.md`](../camera-security/PLAN.md) S1 reuse · playToken HMAC đầy đủ = **S5** (G2)  
> **Skill:** `/agent-dev-camera-connect` Step 0c **PASS**

---

## 0. Chốt AskQuestion (2026-09-06)

| Gate | Chốt |
|------|------|
| Wave | **P2-G0 + G1** — POC MediaMTX + `live/start\|stop\|status` + MFE player · fallback JPEG P1.5 |
| Engine | **MediaMTX** |
| Play UI | Lock 09-06: cả hai + toggle · **ops 09-09:** **HLS mặc định** · WebRTC **ẩn** (thiếu :8889) |
| Deploy | **Hub + VPN** — gateway cạnh API (compose), pull RTSP qua VPN/host |
| EF | **Reuse `CameraDevice` + AEAD S1** — không cột mới · không regen Schema |

JPEG poll (chu kỳ + timeout 120s BFF) **giữ** khi RTSP `{rtspPort}` không reach từ API/MTX (lab: **554 đóng**, **6554** mở sau NAT).

---

## 1. Luồng

```
MFE Z3 ──► POST /cameras/{id}/live/start { mode, profile }
              │ decrypt PasswordEnc (S1)
              │ MediaMTX Control API add path (RTSP sub/main)
              ▼
         { hlsUrl, connectionId, viewerCount, heartbeatSeconds, expiresAt }
MFE ◄── video HLS ── MediaMTX :8888
              │ (WHEP :8889 ẩn UI)
              │ fail RTSP
              ▼ fallback JPEG poll (P1.5)
```

**Cấm:** `rtsp://user:pass@` trên FE · password trong playUrl · nhét FFmpeg vào request thread API.

---

## 2. API (không invent ngoài plan 21)

| Method | Path | Body / note |
|--------|------|-------------|
| POST | `/api/v1/cameras/{id}/live/start` | `mode=hls` (UI) · `profile=sub\|main` → `connectionId` · `heartbeatSeconds` |
| POST | `/api/v1/cameras/{id}/live/stop` | Nhả 1 lease (`connectionId`) |
| POST | `/api/v1/cameras/{id}/live/heartbeat` | JWT gia hạn (G2b) |
| GET | `/api/v1/cameras/{id}/live/status` | publishing · viewers |
| GET | `/api/v1/cameras/gateway/health` | Control API ping · AllowAnonymous |

BFF: `web-bff/api/v1/cameras/...` cùng path · timeout live = 120s.

Hikvision RTSP: `rtsp://{user}:{pass}@{host}:{rtspPort}/Streaming/Channels/{101\|102}` — chỉ trong process API → MTX. Sub = **102** (preview).

---

## 3. Waves

| Wave | Việc | DoD |
|------|------|-----|
| **G0** | `ops/mediamtx.yml` + compose `linm-rmms-mediamtx` :8888/:8889/:9997 · extra_hosts host.docker.internal | `GET gateway/health` ok khi container up |
| **G1** | `CameraLiveService` · start/stop/status · MFE HLS + JPEG | Bật live HLS **hoặc** fallback JPEG + message RTSP · WebRTC ẩn |
| **G2** | S5 playToken HMAC · idle stop · max concurrent · multi-gateway | HMAC OUT · max path / tenant — **sau G2b** |
| **G2b** | Job + TTL · N viewer / 1 path | [`PLAN-lease-ttl.md`](PLAN-lease-ttl.md) · TTL **45s** · sweep **8s** · heartbeat **12s** · KPI Đang xem · `connectionId` ≠ Token |

---

## 4. Config (không commit secret)

```
Camera__Gateway__Enabled=true
Camera__Gateway__ControlUrl=http://127.0.0.1:9997
Camera__Gateway__PublicHlsBase=http://localhost:8888
Camera__Gateway__PublicWebrtcBase=http://localhost:8889
Camera__Gateway__SessionTtlSeconds=45
Camera__Gateway__SweepIntervalSeconds=8
```

Hub Docker: ControlUrl `http://linm-rmms-mediamtx:9997`. Camera RTSP phải **TCP open từ Hub** (VPN) đúng `CameraDevice.RtspPort`. Port đóng → `ok:false` `fallback:jpeg`. Cloud/NAT: `rtspTransport: tcp`. Chrome: Sub-Stream **H.264** (không `hvc1`) · MTX **fmp4** (không LL-HLS blocking).

---

## 5. Non-goals

OCX · FE RTSP · transcode 4K main lên wall · persist signed URL · S3 tách host Camera · Schema EF mới.

---

## 6. Chạy G0 (lab)

```bash
cd Linm.RMMS.WebService
docker compose up -d linm-rmms-mediamtx
```

Win64 API `:5101` — `Camera:Gateway:Enabled=true` · ControlUrl `http://127.0.0.1:9997`.  
MFE Z3: Lưu camera → **HLS** (mặc định) → Bật live. MTX down hoặc RTSP `{rtspPort}` closed → JPEG poll. Sub-Stream **H.264**. WebRTC ẩn.  
**Không** claim live FPS cho đến khi MTX up **và** RTSP reach Hub.

---

## 7. Checklist xem video (SSOT ops)

Xem [`30-CAMERA-LIVE-STREAM-CONFIG.md`](../../context/30-CAMERA-LIVE-STREAM-CONFIG.md). MFE: **II. Live** → Hướng dẫn cấu hình luồng video.
