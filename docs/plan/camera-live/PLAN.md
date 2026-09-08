# Camera Live — P2-G0 + G1 (MediaMTX · Hub+VPN)

> **Status:** Confirmed 2026-09-06 · **G0/G1 code shipped** · runtime = MTX up + RTSP :554 reach Hub  
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
| Play UI | **Cả hai + toggle** WebRTC (WHEP) · HLS |
| Deploy | **Hub + VPN** — gateway cạnh API (compose), pull RTSP qua VPN/host |
| EF | **Reuse `CameraDevice` + AEAD S1** — không cột mới · không regen Schema |

JPEG poll (chu kỳ + timeout 120s BFF) **giữ** khi RTSP `:554` không reach (lab public 554 historically closed).

---

## 1. Luồng

```
MFE Z3 ──► POST /cameras/{id}/live/start { mode, profile }
              │ decrypt PasswordEnc (S1)
              │ MediaMTX Control API add path (RTSP sub/main)
              ▼
         { playUrl, hlsUrl, token, expiresAt }
MFE ◄── video HLS / WHEP ── MediaMTX :8888 / :8889
              │ fail RTSP
              ▼ fallback JPEG poll (P1.5)
```

**Cấm:** `rtsp://user:pass@` trên FE · password trong playUrl · nhét FFmpeg vào request thread API.

---

## 2. API (không invent ngoài plan 21)

| Method | Path | Body / note |
|--------|------|-------------|
| POST | `/api/v1/cameras/{id}/live/start` | `mode=webrtc\|hls` · `profile=sub\|main` |
| POST | `/api/v1/cameras/{id}/live/stop` | Hủy path + session |
| GET | `/api/v1/cameras/{id}/live/status` | publishing · lastError |
| GET | `/api/v1/cameras/gateway/health` | Control API ping |

BFF: `web-bff/api/v1/cameras/...` cùng path · timeout live = 120s.

Hikvision RTSP: `rtsp://{user}:{pass}@{host}:{rtspPort}/Streaming/Channels/{101\|102}` — chỉ trong process API → MTX. Sub = **102** (preview).

---

## 3. Waves

| Wave | Việc | DoD |
|------|------|-----|
| **G0** | `ops/mediamtx.yml` + compose `linm-rmms-mediamtx` :8888/:8889/:9997 · extra_hosts host.docker.internal | `GET gateway/health` ok khi container up |
| **G1** | `CameraLiveService` · start/stop/status · MFE toggle JPEG/HLS/WebRTC | Bật live HLS/WebRTC **hoặc** fallback JPEG + message RTSP |
| **G2** | S5 playToken HMAC · idle stop · max concurrent · multi-gateway | OUT this PR |

---

## 4. Config (không commit secret)

```
Camera__Gateway__Enabled=true
Camera__Gateway__ControlUrl=http://127.0.0.1:9997
Camera__Gateway__PublicHlsBase=http://localhost:8888
Camera__Gateway__PublicWebrtcBase=http://localhost:8889
```

Hub Docker: ControlUrl `http://linm-rmms-mediamtx:9997`. Camera RTSP phải **TCP open từ Hub** (VPN). 554 closed → `ok:false` `fallback:jpeg`.

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
MFE Z3: Lưu camera → chế độ HLS/WebRTC → Bật live. MTX down hoặc RTSP `:554` closed → JPEG poll.  
**Không** claim live FPS cho đến khi MTX up **và** RTSP reach Hub.
