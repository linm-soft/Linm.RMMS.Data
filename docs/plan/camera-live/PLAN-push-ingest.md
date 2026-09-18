# Camera Live — G3 push ingest (RTSP publish · 5G)

> **Status:** Chốt 2026-09-18 · **G0 code** — MTX publish + BE reuse path  
> **AskQuestion:** engine **MediaMTX** · ingest **RTSP publish :8554** · codec **H.264 on edge** (không transcode) · wave **MTX + BE live/start**  
> **Playback (không đổi):** **HLS fMP4** · WebRTC ẩn  
> **Parent:** [`PLAN.md`](PLAN.md) (pull RTSP) · [`../../context/21-CAMERA-HLS-WEBRTC-GATEWAY.md`](../../context/21-CAMERA-HLS-WEBRTC-GATEWAY.md)  
> **Ops khách:** [`../../context/32-CAMERA-RTSP-PUBLISH-INGEST.md`](../../context/32-CAMERA-RTSP-PUBLISH-INGEST.md)  
> **Skill:** `/agent-dev-camera-connect`

---

## 0. Vì sao

Tủ ITS **không IP tĩnh** (máy nhúng + **5G/CGNAT**) → Hub **không pull RTSP** được. Khách **đẩy** luồng về server IP tĩnh. Phân phối web = việc RMMS (HLS) — đã có.

| | Pull (P2-G1, Hik WAN) | Push (G3, tủ 5G) |
|--|----------------------|------------------|
| Hướng | MTX **kéo** `rtsp://cam` | Máy nhúng **ANNOUNCE** vào MTX |
| IP | Cam/WAN reach Hub | **Server** IP tĩnh; tủ không cần |
| Path MTX | API `paths/add` source=rtsp | Publisher tạo `cam_{id}` |
| Codec web | Sub **H.264** | Edge **H.264** (G0 **cấm** H.265/HEVC) |
| Stop viewer | Xóa path pull | **Giữ** path publisher |

Không thêm ONVIF/ISAPI/SDK cho case này. Không RTMP/SRT ở G0.

---

## 1. Luồng

```
Máy nhúng 5G
  ffmpeg/NVR  --RTSP/TCP publish-->  MediaMTX :8554  path cam_{guid:N}
                                           │
                                    HLS fMP4 :8888
                                           │
MFE Bật live ── POST live/start ── nếu path ready → HLS (source=publisher)
                                 else pull RTSP cam (P2) / JPEG fallback
```

**Cấm:** `rtsp://user:pass@` trên FE · public Control API `:9997` · xóa path khi source=`rtspSession`.

---

## 2. DoD G0

| Check | Pass |
|-------|------|
| `ops/mediamtx.yml` | `rtsp: yes` · TCP · publish user · path `~^cam_` |
| Compose | host **8554** |
| `live/start` | Path ready publisher → `source=publisher` · không probe RTSP tủ |
| `live/stop` / sweep | Không `DeletePath` publisher |
| Lab | ffmpeg H.264 publish → `GET …/index.m3u8` + MFE HLS |
| Prod Railway | HLS `:8888` HTTP domain **khác** TCP ingest `:8554` (TCP proxy / VM) |

**OUT G0:** EF `ingestMode` · form MFE copy URL · FFmpeg transcode HEVC · RTMP · playToken S5.

---

## 3. Config

```
Camera__Gateway__Enabled=true
Camera__Gateway__ControlUrl=http://linm-rmms-mediamtx:9997
Camera__Gateway__PublicHlsBase=http://localhost:8888
Camera__Gateway__PublicRtspBase=rtsp://localhost:8554
```

Lab publish user (yaml): `rmms-edge` / `rmmsEdgePublishLab` — **đổi trước khi public :8554**.

---

## 4. Non-goals

ISUP · ONVIF · SDK plate listen · H.265 Chrome · N replica MTX auth Redis.
