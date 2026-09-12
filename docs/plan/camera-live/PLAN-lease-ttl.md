# Camera Live — G2b Lease job + TTL (nguồn sạch chính)

> **Status:** Implement 2026-09-09 · G2b T1–T7 **shipped**  
> **Feature:** `camera-connect` · live HLS multi-viewer  
> **Parent:** [`PLAN.md`](PLAN.md) · [`../../context/21-CAMERA-HLS-WEBRTC-GATEWAY.md`](../../context/21-CAMERA-HLS-WEBRTC-GATEWAY.md)  
> **Ops stream:** [`../../context/30-CAMERA-LIVE-STREAM-CONFIG.md`](../../context/30-CAMERA-LIVE-STREAM-CONFIG.md)  
> **Không:** Hangfire · Redis · EF Schema · playToken HMAC (G2 S5) · N replica API

---

## 0. Chốt

| Hỏi | Chốt |
|-----|------|
| Ai dọn lease chết (kill app / mất mạng / đóng tab)? | **Job + TTL** — `CameraLiveLeaseSweeper` + `expiresAt` |
| UI `pagehide` / `beforeunload` / keepalive? | **Bỏ** — không JWT đáng tin, không phải nguồn sạch |
| Nút **Tắt live**? | **Giữ** — ý đồ user, JWT axios, nhả ngay |
| Unmount form (đổi route)? | **Không gọi stop** — job dọn sau TTL (cùng quy tắc với kill tab) |
| Hangfire / Quartz? | **Không** — `BackgroundService` đủ (lease in-memory, 1 replica API) |
| Persist / multi-replica API? | **OUT** · Railway **`rmms-api` Replicas = 1** |
| Auth heartbeat / stop / start? | **JWT** (FallbackPolicy) — `gateway/health` vẫn anonymous |
| `live/start` lease id? | **`connectionId` = hex Guid mới** · **cấm** `req.Token` (JWT) — 2 máy / 1 user collapse 1 viewer |
| KPI **Đang xem**? | `GET live/status` poll **~3s** + ngay sau start/heartbeat · cạnh Trạng thái |
| Play UI? | Form mặc định **HLS** · WebRTC **ẩn** |

Công thức (bắt buộc cùng config):

```
TTL >= HeartbeatInterval × 3 + SweepInterval
```

Giá trị mặc định:

| Key | Giá trị | Lý do |
|-----|---------|--------|
| `SessionTtlSeconds` | **45** | 12×3 + 8 = 44 |
| `SweepIntervalSeconds` | **8** | Job tick |
| Heartbeat MFE | **12s** | < TTL/3 — miss 1 nhịp không chết |

`appsettings` **đã** `SessionTtlSeconds: 45` (lab + Railway). Dashboard wall 24/7 = heartbeat đều, không cần TTL dài.

**Đồng bộ OSD giữa thiết bị:** cùng `pathName` MTX (viewer 2+ **không** add path mới). Máy join sau **seek `liveSyncPosition`** (live edge − 3 segment ≈ 3s), không start fragment mới nhất — nếu start live edge thì OSD đi trước máy đang xem. Drift >1.25s mỗi 4s snap lại. `maxLiveSyncPlaybackRate: 1` (cấm tua nhanh bắt live). Khớp RMMS↔RMMS ~1s. **Không** khớp plugin Hikvision (native luôn sớm hơn HLS). Frame-lock PDT/leader = OUT.

---

## 1. Hiện trạng (gap)

Đã có skeleton: hub `Dictionary<connectionId, expires>` · `POST live/heartbeat` · `CameraLiveLeaseSweeper` 8s · `SweepExpiredAsync`.

| # | Gap | Ảnh hưởng |
|---|-----|-----------|
| G1 | Start clamp TTL **min 60**, heartbeat clamp **min 20**, C# default **40**, json **300** | TTL thực tế không đọc được; plan “40s” không chạy |
| G2 | Sweep interval **hardcode 8s** | Không config / không log drop path |
| G3 | MFE `pagehide` + `liveStopKeepalive` + unmount `liveStop` | UI pretends SSOT; JWT keepalive dễ 401 |
| G4 | `ICameraLiveService` **Scoped** + `static Hubs` | Chạy nhờ static; khó test / dễ lệch nếu bỏ static |
| G5 | MTX `sourceOnDemandCloseAfter: 60s` ≠ lease TTL | MTX tự ngắt RTSP khi 0 reader HLS — **đúng**, không đụng; API vẫn phải `DeletePath` khi 0 lease |

---

## 2. Mô hình

```
live/start  → lease[connectionId] = now + TTL · EnsurePath nếu viewer 1
heartbeat   → gia hạn lease (JWT) · 12s
live/stop   → chỉ khi user bấm Tắt · xóa 1 lease · 0 lease → DeletePath
sweeper     → mỗi SweepInterval: PurgeExpired · 0 lease → DeletePath   ← SSOT chết client
```

**Cấm:** `live/stop` không `connectionId` xóa path khi còn viewer khác (giữ hành vi hiện tại: thiếu id + đúng 1 lease thì drop lease đó — MFE cũ).

Một replica API. Restart API = mất hub in-memory → MTX path orphan đến khi `sourceOnDemand` hết reader hoặc ops xóa tay. **Không** fix Redis wave này. Log warning nếu sweep DeletePath fail.

---

## 3. Tasks

| ID | Việc | File | DoD |
|----|------|------|-----|
| **T1** | Config thống nhất | `CameraGatewayOptions` · `appsettings.json` · `appsettings.Docker.json` · compose / `railway-deploy.md` | `SessionTtlSeconds` + `SweepIntervalSeconds`. Clamp **cùng** `20…3600` cho start **và** heartbeat. Default C# = **45** / **8**. Json **45**. |
| **T2** | `CameraLiveLeaseStore` Singleton | New `CameraLiveLeaseStore.cs` · `CameraDomainRegistration` | Dictionary hub **không** static trên scoped service. Start/Stop/Heartbeat/Sweep/Status dùng store. |
| **T3** | Sweeper đọc config + log | `CameraLiveLeaseSweeper.cs` · `SweepExpiredAsync` | Delay = `SweepIntervalSeconds`. Log `Information` khi purge N lease / `DeletePath` cameraId. Gateway tắt → sweep no-op path. |
| **T4** | `live/start` trả nhịp | DTO `CameraLiveStartResponse` · BFF forward | `heartbeatSeconds` = `(TTL − sweep) / 3` (45−8)/3 = **12**. MFE dùng field này, không magic `12_000`. |
| **T5** | MFE bỏ UI-clean | `CameraFormPage.tsx` · `cameraService.ts` | Xóa `pagehide` / `beforeunload` / `liveStopKeepalive`. Unmount **không** `liveStop`. Nút Tắt vẫn `liveStop` + JWT. Heartbeat JWT khi **HLS**. |
| **T6** | Type FE `liveStop` | `cameraService.ts` | `yarn typecheck` thấy `liveStop` (hiện thiếu method → TS2339). Không gắn typecheck vào webpack CI wave này. |
| **T7** | Docs | `PLAN.md` G2b · `21` §3.2 · `30` 1 dòng · railway env | SSOT = job. Không mô tả keepalive. |

**EF:** không. **AllowAnonymous:** không thêm.

---

## 4. Config (không secret)

```
Camera__Gateway__Enabled=true
Camera__Gateway__SessionTtlSeconds=45
Camera__Gateway__SweepIntervalSeconds=8
```

Heartbeat không cần env BE nếu T4 trả `heartbeatSeconds` từ `(SessionTtlSeconds − SweepIntervalSeconds) / 3`.

---

## 5. Verify

| # | Cách | Pass |
|---|------|------|
| V1 | 2 browser cùng cam HLS | `viewerCount=2` · tắt 1 nút Stop → còn 1 stream |
| V2 | Browser A **kill tab** (không Stop) | Browser B **vẫn** HLS trong TTL |
| V3 | Sau TTL + 1 sweep (~53s) | A hết lease · nếu A là last → MTX path xóa · B nếu còn heartbeat thì path **không** xóa |
| V4 | Mất mạng A ~60s | A hết lease; reconnect phải `live/start` lại |
| V5 | JWT hết hạn | heartbeat 401 → không gia hạn → job dọn (đúng) |
| V6 | `yarn typecheck` Camera | Không `liveTransportRef` / `liveStop` missing |

Không e2e Playwright wave này (manual V1–V4 trên lab cam).

---

## 6. Non-goals

- Hangfire / SQL job / cron K8s  
- Redis / sticky session / N replica API  
- Schema `CameraLiveSession`  
- PlayToken HMAC S5 · max concurrent path / tenant  
- Bật lại ForkTsChecker webpack (OOM Windows CI)  
- WebRTC production Railway  

---

## 7. Thứ tự implement

1. T1 + T2 + T3 (BE) → deploy API  
2. T4 DTO (BFF cùng PR)  
3. T5 + T6 (MFE)  
4. T7 docs  
5. V1–V5 lab  

Rollback: revert PR. Path MTX orphan → Control `paths/delete` hoặc restart MTX.
