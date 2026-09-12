# 21 — Plan: Camera Live Gateway (RTSP → HLS / WebRTC)

> **Status:** P2-G0/G1 **shipped** · **G2b** multi-viewer lease **shipped** (2026-09-09) · WebRTC WHEP **ẩn MFE** (cloud thiếu :8889)  
> **Feature:** `camera-connect` · MFE `Linm.Web.RMMS.Camera` · Domain **Camera**  
> **Update:** 2026-09-09 — HLS mặc định · N viewer / 1 cam · KPI Đang xem · Events Info slide-out · checklist [`30-CAMERA-LIVE-STREAM-CONFIG.md`](30-CAMERA-LIVE-STREAM-CONFIG.md) · lease [`../plan/camera-live/PLAN-lease-ttl.md`](../plan/camera-live/PLAN-lease-ttl.md)  
> **Upstream (đã có):** SDK Login_V40 · CaptureJPEG poll · ISAPI Digest/ingest · MFE JPEG UI — `api/v1/cameras/*`  
> **Nguồn:** `features/camera-connect.md` · `camera-model.md` · Cam-HT `08-CAMERA-STANDARD-HIKVISION.md` · seed **iDS-TCM403-GIR**  
> **Mục tiêu plan:** Gateway để browser xem **live video** (FPS) — không chỉ snapshot JPEG.  
> **Specs:** `specs/camera-connect/STATUS.md` · `implement/camera-connect.md`

---

## 0. Vấn đề

| Constraint | Hệ quả |
|------------|--------|
| Browser **không** play RTSP native | Cần chuyển mã / protocol sang HLS và/hoặc WebRTC |
| Camera LAN thường **không** expose public | Gateway phải chạy cùng mạng với cam (Edge / site agent) hoặc VPN |
| Lab `113.179.52.55` / `14.239.20.231` | SDK **8100** OK · RTSP **không** mặc định 554 (TCM403 lab **6554**) · HTTP cam **8086** |
| Credentials RTSP (user/pass) | **Cấm** nhúng vào URL frontend; chỉ gateway + vault/BE |
| CORS / mixed content | FE chỉ gọi HTTPS BFF hoặc signed play URL |
| P1.5 hiện tại | **JPEG poll CaptureJPEG** — đủ “thấy ảnh” · **không** đủ live FPS / TOC wall |

**DoD gateway (P2):** User bật Live trên `/camera/:id` → stream ổn định ≥ 10–15 FPS (sub) · latency chấp nhận theo mode · dừng stream giải phóng tài nguyên.

### Next action (ordered)

| # | Step | Gate |
|---|------|------|
| 1 | AskQuestion §12 (engine · mode · deploy · EF) | **REQUIRED** trước code |
| 2 | **P2-G0** Docker MediaMTX + 1 RTSP sub | cam LAN mở `:554` |
| 3 | Browser HLS smoke (WebRTC **defer** — ẩn UI) | đo latency/CPU |
| 4 | **P2-G1** API `live/start\|stop\|status` + MFE HLS · fallback JPEG | **shipped** |
| 5 | **P2-G2b** N viewer / 1 path + sweeper TTL | **shipped** — [`PLAN-lease-ttl.md`](../plan/camera-live/PLAN-lease-ttl.md) |

---

## 1. Quyết định thiết kế (đề xuất)

| # | Quyết định | Giá trị đề xuất | Lý do |
|---|------------|-----------------|-------|
| D1 | **Gateway process** | Process riêng `Rmms.Camera.Gateway` (Docker) — **không** nhét FFmpeg vào `RMMS.Service.Api` request thread | CPU/GPU encode · cấm block HTTP API |
| D2 | **Primary play mode (ops UI)** | **HLS** (fMP4) — **ops 2026-09-09** | Cloud Railway **một** public port **8888**; WHEP cần **8889** + ICE |
| D3 | **Secondary / fallback** | JPEG poll (P1.5) khi RTSP không reach · WebRTC WHEP **ẩn form** | Compatibility · không ship UI cloud |
| D4 | **Engine mặc định** | **[MediaMTX](https://github.com/bluenviron/mediamtx)** (ex rtsp-simple-server) ± FFmpeg path | RTSP in · HLS + WebRTC out · config YAML · mature |
| D5 | **Alt engine** | WHEP/WHIP stack hoặc `go2rtc` nếu cần nhẹ hơn site | DEFER trừ POC site nhỏ |
| D6 | **Stream map** | Sub stream `…/Streaming/Channels/102` = preview UI · Main `101` = LPR/AI worker (không gửi full main lên wall) | Bitrate / CPU |
| D7 | **Session control** | BE Camera cấp **playToken** = grant HMAC (plan [`camera-security`](../plan/camera-security/PLAN.md) S5) → Gateway validate · auto stop idle | Bảo mật · tiết kiệm · **cấm** pass trong URL |
| D8 | **Tenant** | Gateway biết `companyCode` + `cameraId` · cấm cross-tenant play URL | Multi-tenancy |
| D9 | **Deploy** | Site Edge (Chi cục) 1 gateway / LAN · Hub chỉ nhận event/ISAPI | Cam không lên cloud raw RTSP |

```
Hikvision RTSP :554
        │
        ▼
 ┌──────────────────────┐
 │ Rmms.Camera.Gateway  │  MediaMTX (+ optional FFmpeg)
 │  path: cam-{id}/sub  │
 └─────────┬────────────┘
           │ HLS (:8888) · WHEP (:8889 ẩn UI)
           ▼
    BFF / JWT live/start
           │
           ▼
  MFE Camera · hls.js
```

---

## 2. So sánh HLS vs WebRTC (khi nào dùng gì)

| Tiêu chí | HLS | WebRTC |
|----------|-----|--------|
| Latency | 2–12 s (segment) | ~0.3–2 s |
| Browser | Rất tốt (Safari native HLS) | Cần WHEP client / adapter |
| Multi-viewer | Scale CDN dễ | SFU / fan-out phức hơn |
| CPU gateway | Thấp–trung (copy/remux) | Cao hơn (nếu transcode) |
| Use case RMMS | **Default live** · wall · nhiều máy 1 cam | Defer — khi Hub/VPN publish :8889 |
| **Khuyến nghị P2 (ship)** | **Default Live button** | Ẩn MFE đến khi ICE/host public MTX |

**P2.1 (sau):** Bật lại WHEP khi MTX public **8889** + `webrtcAdditionalHosts` ≠ localhost. **Không** implement WebRTC wave này.

---

## 3. Luồng nghiệp vụ (sequence)

### 3.1 Start live (HLS mặc định)

```
User [MFE /camera/:id] → POST BFF /cameras/{id}/live/start { profile: sub|main, mode: hls }
       → API CameraLiveService: load CameraDevice (host, rtspPort, user, passEnc)
       → connectionId = hex Guid **mới** (cấm JWT Token làm lease id)
       → CameraLiveLeaseStore: lease[connectionId] = now + TTL 45s
       → viewer 1: MediaMTX Control add path cam_{guid:N} từ RTSP Sub 102
       → viewer 2+: **reuse** cùng path (không add RTSP mới)
       ← { mode:hls, hlsUrl, connectionId, viewerCount, heartbeatSeconds, expiresAt }
User plays: hls.js · seek liveSyncPosition (live − 3×1s) — §3.3
JPEG: chọn trên form hoặc fallback khi RTSP fail
WebRTC: **không** gửi mode từ UI (option ẩn)
```

### 3.2 Stop / idle

**SSOT dọn lease chết:** job API (`CameraLiveLeaseSweeper`) + TTL — plan [`../plan/camera-live/PLAN-lease-ttl.md`](../plan/camera-live/PLAN-lease-ttl.md).

- User **Tắt live** (JWT `live/stop` + `connectionId`) → nhả ngay; 0 viewer → MTX `path remove`
- Kill tab / mất mạng / unmount **không** dựa `pagehide` — hết heartbeat → TTL → sweeper `DeletePath` nếu last viewer
- Hard limit max N concurrent paths / tenant = **G2** (chưa)

### 3.3 Nhiều máy cùng một cam (G2b)

Không nhầm **wall N cam** (GAP-CAM-WALL-02). Đây là **N browser / N thiết bị** / cùng `CameraDevice`.

| | Chốt |
|--|------|
| Path | Một `cam_{id}` MTX · fan-out HLS |
| Lease | Mỗi Bật live = `connectionId` mới · **cấm** `req.Token` (JWT) = lease key (2 máy / 1 user sẽ đè 1 viewer) |
| Heartbeat | JWT `POST …/live/heartbeat` ~12s = `(TTL − sweep) / 3` |
| KPI **Đang xem** | `live/status` poll **~3s** + ngay sau start/heartbeat · bar dưới cạnh Trạng thái · **không** HUD “N kết nối” |
| Process | In-memory store · **rmms-api Replicas = 1** · Redis/EF lease = OUT |
| Late join | hls.js `liveSyncPosition` · snap drift >1.25s / 4s · `maxLiveSyncPlaybackRate: 1` · RMMS↔RMMS ~1s · **không** khớp plugin Hikvision |

### 3.4 Kết hợp ANPR (đã có)

| Channel | Vai trò |
|---------|---------|
| **ISAPI notify** | Event biển · tốc độ (đã có ingest) |
| **Snapshot** | Fallback khi gateway down |
| **RTSP gateway** | Live video UX |
| **Main RTSP** (optional worker) | AI/YOLO — **không** trộn path preview |

---

## 4. API / contract (draft)

Base: `api/v1/cameras` · BFF `web-bff/api/v1/cameras`

| Method | Path | Mô tả |
|--------|------|-------|
| POST | `/{id}/live/start` | `mode=hls` (UI) · `profile=sub\|main` → `hlsUrl` · `connectionId` · `viewerCount` · `heartbeatSeconds` |
| POST | `/{id}/live/stop` | Body `connectionId` — nhả 1 lease · 0 viewer → xóa path |
| POST | `/{id}/live/heartbeat` | JWT gia hạn lease (G2b) |
| GET | `/{id}/live/status` | publishing · viewers |
| GET | `/gateway/health` | Gateway reachability (ops) · AllowAnonymous |

### Response skeleton `live/start`

```json
{
  "cameraId": "…",
  "mode": "hls",
  "profile": "sub",
  "hlsUrl": "https://gw.example/cam_{id}/index.m3u8",
  "connectionId": "hex-guid",
  "viewerCount": 2,
  "heartbeatSeconds": 12,
  "expiresAt": "2026-09-09T15:00:00Z"
}
```

**Persist (EF — cùng phase hoặc ngay trước):** `CameraDevice` (host, rtspPort, username, passwordEnc, modelCode, roadRoute, km) — hiện connect còn stateless body.

---

## 5. Gateway config (MediaMTX — sketch)

```yaml
# Ví dụ — không commit secret production
paths:
  cam_ql1_12_sub:
    source: rtsp://user:pass@192.168.1.64:554/Streaming/Channels/102
    sourceOnDemand: yes
    sourceOnDemandCloseAfter: 30s
# WebRTC / HLS enabled globally per MediaMTX version docs
```

| Setting | Gợi ý |
|---------|--------|
| `sourceOnDemand` | **yes** — chỉ pull khi có viewer |
| Close after idle | 15–60 s |
| Auth admin API | mTLS hoặc shared secret từ RMMS API |
| TLS | Bắt buộc nếu FE HTTPS |

Secrets: inject từ API lúc `live/start` (dynamic path) — **ưu tiên** hơn static YAML password.

---

## 6. FE (MFE Camera)

| Component | Việc |
|-----------|------|
| Zone Z3 Live | Mặc định **HLS** (`hls.js`) · JPEG tùy chọn · **ẩn WebRTC** |
| KPI | **Đang xem** = `viewerCount` (lease) cạnh Trạng thái |
| Z4 Events | Nút **Info** → Slideout (config camera / config form) · Host notify URL **copy tay** lên firmware |
| Error | Gateway / RTSP fail → fallback JPEG poll (P1.5) |

**Libs:** `hls.js` (ship). WHEP **không** load trên form cloud.

---

## 7. Phases & DoD

### P2-G0 — POC (1 cam lab)

- [x] Docker MediaMTX + 1 RTSP TCM403 (lab)
- [x] Browser play **HLS** · WebRTC smoke = **OUT** cloud (ẩn UI)
- [x] Đo latency HLS (RMMS↔RMMS ~1s OSD; không so plugin Hik)

### P2-G1 — Integrate RMMS

- [x] EF `CameraDevice` + encrypt password (S1)
- [x] `live/start` · `live/stop` · `live/status` · `live/heartbeat` (G2b) · playToken HMAC = **G2 S5 chưa**
- [x] MFE Z3 HLS + JPEG fallback · KPI Đang xem
- [ ] Permission `camera.live.view` (nếu chưa gắn RBAC)

### P2-G2 — Ops harden

- [ ] Max concurrent · idle stop · audit log
- [ ] Multi-site gateway registry (`gatewayBaseUrl` per org-unit)
- [ ] Health dashboard (ops)
- [ ] Chaos: cam offline · wrong pass · H.265-only path

### P3 — Scale

- [ ] Wall 16+ cam HLS grid
- [ ] Optional SFU / CDN HLS
- [ ] Record clip on ANPR event (optional)

---

## 8. Non-goals (cấm lệch scope)

| ❌ | Lý do |
|----|------|
| Flash / ActiveX / Hikvision OCX trong browser | Legacy · không MFE |
| FE gọi thẳng `rtsp://` | Không work |
| Transcode 4K main cho mọi viewer | CPU nổ — dùng sub |
| Đưa password cam xuống localStorage FE | Chỉ BE/gateway |

---

## 9. Gaps / rủi ro

| ID | Rủi ro | Mitigation |
|----|--------|------------|
| GAP-GW-01 | H.265 WebRTC browser kém | Remux/transcode H.264 sub trên gateway |
| GAP-GW-02 | NAT / firewall giữa Hub API ↔ Site Gateway | Site agent reverse tunnel hoặc deploy API edge |
| GAP-GW-03 | License / codec patent (nếu commercial encoder) | Ưu tiên remux không re-encode |
| GAP-GW-04 | Nhiều viewer 1 path | **G2b:** reuse path + lease `connectionId` · KPI Đang xem · Replicas=1 |
| GAP-GW-05 | Token leak playUrl | Short TTL · one-time · HTTPS only |

---

## 10. Effort (ước lượng)

| Work | Dev-days (ước) |
|------|----------------|
| POC MediaMTX lab | 2–3 |
| API live session + token | 2–3 |
| EF CameraDevice | 1–2 |
| MFE player + fallback | 2–3 |
| Harden multi-site | 3–5 |
| **Total P2-G0→G1** | **~8–12** |

---

## 11. Dependencies / links

| Artifact | Path |
|----------|------|
| Feature | [`features/camera-connect.md`](features/camera-connect.md) |
| Model catalog | [`camera-model.md`](camera-model.md) |
| ANPR consumer | [`18-ITS-ANPR-OVERLOAD-SPEC.md`](18-ITS-ANPR-OVERLOAD-SPEC.md) |
| Protocol SSOT (Cam-HT) | `AI-Cam-HT/docs/context/08-CAMERA-STANDARD-HIKVISION.md` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` · Camera |
| Implement note | `specs/camera-connect/implement/camera-connect.md` |
| Engine | MediaMTX docs · WHEP draft |

---

## 12. Confirm gates (trước code gateway)

**LOCKED 2026-09-06** (`/hey-linm` AskQuestion):

1. **Engine:** MediaMTX  
2. **Default Live mode (lock 09-06):** cả hai + toggle (WebRTC + HLS) · JPEG poll giữ fallback  
3. **Deploy:** Hub + VPN  
4. **EF CameraDevice:** reuse S1 AEAD — không Schema mới  

**Ops override 2026-09-09:** form **HLS mặc định** · **ẩn WebRTC** (Railway 1 port 8888) · G2b multi-viewer + TTL 45s. Lock 09-06 **không** xóa — WHEP = P2.1 khi có :8889.

Implement SSOT: [`../plan/camera-live/PLAN.md`](../plan/camera-live/PLAN.md) · lease [`../plan/camera-live/PLAN-lease-ttl.md`](../plan/camera-live/PLAN-lease-ttl.md)

---

Version meta: plan=`camera-hls-webrtc-gateway` · schema=`rmms-context-plan-v1` · relatedFeature=`camera-connect` · date=`2026-08-09`
