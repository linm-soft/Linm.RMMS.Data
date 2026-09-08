# 21 — Plan: Camera Live Gateway (RTSP → HLS / WebRTC)

> **Status:** Context Plan · **NEXT** sau P1.5 (JPEG SDK đã live trên UI)  
> **Feature:** `camera-connect` · MFE `Linm.Web.RMMS.Camera` · Domain **Camera**  
> **Ngày:** 2026-08-09 · **Update:** 2026-08-09 (P1.5 done → G0 pending confirm)  
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
| Lab `113.179.52.55` | SDK **8100** OK · HTTP/RTSP **554** probe closed từ ngoài → POC cần LAN/VPN |
| Credentials RTSP (user/pass) | **Cấm** nhúng vào URL frontend; chỉ gateway + vault/BE |
| CORS / mixed content | FE chỉ gọi HTTPS BFF hoặc signed play URL |
| P1.5 hiện tại | **JPEG poll CaptureJPEG** — đủ “thấy ảnh” · **không** đủ live FPS / TOC wall |

**DoD gateway (P2):** User bật Live trên `/camera/:id` → stream ổn định ≥ 10–15 FPS (sub) · latency chấp nhận theo mode · dừng stream giải phóng tài nguyên.

### Next action (ordered)

| # | Step | Gate |
|---|------|------|
| 1 | AskQuestion §12 (engine · mode · deploy · EF) | **REQUIRED** trước code |
| 2 | **P2-G0** Docker MediaMTX + 1 RTSP sub | cam LAN mở `:554` |
| 3 | Browser HLS + WebRTC smoke | đo latency/CPU |
| 4 | **P2-G1** API `live/start|stop` + MFE player · fallback JPEG | |

---

## 1. Quyết định thiết kế (đề xuất)

| # | Quyết định | Giá trị đề xuất | Lý do |
|---|------------|-----------------|-------|
| D1 | **Gateway process** | Process riêng `Rmms.Camera.Gateway` (Docker) — **không** nhét FFmpeg vào `RMMS.Service.Api` request thread | CPU/GPU encode · cấm block HTTP API |
| D2 | **Primary play mode (ops UI)** | **WebRTC** (low latency) cho 1–4 cam đang focus | TOC / giám sát realtime |
| D3 | **Secondary / fallback** | **HLS** (fMP4 hoặc MPEG-TS) cho wall nhiều cam / mạng kém / Safari đơn giản | Compatibility |
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
           │ WHEP / HLS
           ▼
    BFF / signed URL
           │
           ▼
  MFE Camera · video.js / hls.js / WHEP client
```

---

## 2. So sánh HLS vs WebRTC (khi nào dùng gì)

| Tiêu chí | HLS | WebRTC |
|----------|-----|--------|
| Latency | 2–12 s (segment) | ~0.3–2 s |
| Browser | Rất tốt (Safari native HLS) | Cần WHEP client / adapter |
| Multi-viewer | Scale CDN dễ | SFU / fan-out phức hơn |
| CPU gateway | Thấp–trung (copy/remux) | Cao hơn (nếu transcode) |
| Use case RMMS | Wall 8–16 cam · lưu chứng từ clip | Focus 1 cam · xác minh lỗi ANPR |
| **Khuyến nghị P2** | Fallback + wall | **Default Live button** |

**P2.1 (sau):** Adaptive — WebRTC khi ≤4 active; auto HLS khi wall / bandwidth thấp.

---

## 3. Luồng nghiệp vụ (sequence)

### 3.1 Start live

```
User [MFE /camera/:id] → POST BFF /cameras/{id}/live/start { profile: sub|main, mode: webrtc|hls }
       → API CameraService: load CameraDevice (host, ports, user, passEnc)
       → Issue playToken (TTL 60–300s) + register session
       → Call Gateway Admin API: ensure path cam-{id} published from RTSP
       ← { mode, playUrl, expiresAt }
User plays:
  · WebRTC: WHEP POST playUrl
  · HLS: hls.js / native <video src=m3u8>
```

### 3.2 Stop / idle

- User tắt Live · navigate away · TTL hết → Gateway `path remove` / publisher stop  
- Hard limit: max N concurrent paths / tenant (config)

### 3.3 Kết hợp ANPR (đã có)

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
| POST | `/{id}/live/start` | Body: `mode=webrtc\|hls`, `profile=sub\|main` → play URL + token |
| POST | `/{id}/live/stop` | Hủy session |
| GET | `/{id}/live/status` | publishing · viewers · bitrate · lastError |
| GET | `/gateway/health` | Gateway reachability (ops) |

### Response skeleton `live/start`

```json
{
  "cameraId": "…",
  "mode": "webrtc",
  "profile": "sub",
  "playUrl": "https://gw.site.local/whep/cam-ql1-12/sub",
  "hlsUrl": "https://gw.site.local/hls/cam-ql1-12/sub/index.m3u8",
  "expiresAt": "2026-08-09T15:00:00Z",
  "token": "…"
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
| Zone Z3 Live | Thay snapshot-only: player WebRTC (WHEP) + fallback HLS |
| Mode toggle | `WebRTC (thấp trễ)` · `HLS (ổn định)` |
| HUD | bitrate · latency badge · reconnect |
| Error | Gateway unreachable → fallback snapshot poll (P1.5) |

**Libs gợi ý:** `hls.js` · WHEP client nhẹ (hoặc `@eyevinn/webrtc-player`) — chốt lúc Design Confirm.

---

## 7. Phases & DoD

### P2-G0 — POC (1 cam lab)

- [ ] Docker MediaMTX + 1 RTSP TCM403 (hoặc cam lab)
- [ ] Browser play HLS **và** WebRTC
- [ ] Đo latency / CPU

### P2-G1 — Integrate RMMS

- [ ] EF `CameraDevice` + encrypt password
- [ ] `live/start` · `live/stop` · playToken
- [ ] MFE Z3 wire player
- [ ] Permission `camera.live.view`

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
| GAP-GW-04 | Nhiều viewer 1 path | MediaMTX fan-out; monitor |
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
2. **Default Live mode:** cả hai + toggle (WebRTC + HLS) · JPEG poll giữ fallback  
3. **Deploy:** Hub + VPN  
4. **EF CameraDevice:** reuse S1 AEAD — không Schema mới  

Implement SSOT: [`../plan/camera-live/PLAN.md`](../plan/camera-live/PLAN.md)

---

Version meta: plan=`camera-hls-webrtc-gateway` · schema=`rmms-context-plan-v1` · relatedFeature=`camera-connect` · date=`2026-08-09`
