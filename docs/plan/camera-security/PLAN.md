# Camera Security — vault · service tách · resign URL

> **Status:** S1 **implemented** (WebService AEAD + snapshot-by-id) · S2+ pending  
> **Ngày:** 2026-09-06  
> **Feature:** `camera-connect` · wall TOC / dashboard  
> **Peers:** [`features/camera-connect.md`](../../context/features/camera-connect.md) · [`21-CAMERA-HLS-WEBRTC-GATEWAY.md`](../../context/21-CAMERA-HLS-WEBRTC-GATEWAY.md) · [`06-SECURITY-RATELIMIT.md`](../../context/06-SECURITY-RATELIMIT.md) · FileService resign `{RulesRoot}/common/rule/file-attach-service.md` · ATTT cấp 1–2 `/review-data-security-l1-l2` (II 1.4.1 bảo mật dữ liệu ≠ P1/P2 live)  
> **Entry implement:** S1–S2 `/agent-dev-camera-connect` · S3 `/new-service` host Camera · live FPS vẫn plan 21  
> **Pointer:** [`../../context/28-CAMERA-SECURITY.md`](../../context/28-CAMERA-SECURITY.md)

**Mục tiêu:** Password + IP cam **không** ra browser / BFF / localStorage. Client chỉ nhận **capability** (resign URL hoặc grant). Tường hình 24/7 dùng grant `dashboard` (không hạn *grant*, URL media vẫn quay vòng).

---

## 0. Câu trả lời chốt

| Hỏi | Chốt |
|-----|------|
| Lưu password **dạng token Hikvision**? | **Không thay được.** Login SDK/ISAPI vẫn cần mật khẩu thiết bị. Session `userID` / ISAPI `sessionLogin` **hết hạn**, không persist. Camera Service **được** cache session in-memory sau Login — không thay cột DB. |
| **Key giải mã 2 chiều**? | **Có — bắt buộc at rest.** AES-256-GCM (AEAD) + key ring `kid`. Cột `PasswordEnc` = blob `enc:v1:{kid}:{nonce+ct+tag}` — **không** hash (cần decrypt để Login). |
| Token với **client**? | **Có — khác password.** HMAC/JWT **media grant** (snapshot · live · jpeg-poll). FE không bao giờ thấy pass cam. |
| Tách **Camera service**? | **Có — S3.** Pattern Vision/FileService. Host riêng giữ vault + SDK native. WebService/BFF/MFE **0** decrypt. |
| **Resign URL** + exp / unlimit? | **Có.** Giống FileService `GET /url`: ký mới mỗi lần xem. `session` = TTL ngắn. `dashboard` = grant không hạn (thu hồi được) cho tường hình. **Cấm** persist full URL trên entity. |

```
Admin ghi pass ──► Camera Service encrypt ──► DB PasswordEnc (AEAD)
                         │
                         ▼ decrypt chỉ trong process Camera
              Login SDK / RTSP / ISAPI
                         │
MFE / wall ──► BFF JWT ──► POST …/grants ──► resign URL (HMAC, không pass)
                         │
              <img> / HLS / WHEP ──► GET /media/…?sig&exp
```

---

## 1. Hiện trạng (fail)

| Lớp | Việc đang làm | Gap |
|-----|----------------|-----|
| DB | `PasswordEnc` = **plain** (`SD-PWD` / GAP-CAM-03) | **GAP-CAM-SEC-01** |
| API | `GET /cameras/{id}` + Create/Update **trả password** | **GAP-CAM-SEC-02** |
| Test/snapshot | Body client gửi user/pass mỗi lần | **GAP-CAM-SEC-03** |
| Demo fallback | `localStorage` `rmms.camera-devices.local.v1` có field password | **GAP-CAM-SEC-06** |
| Save form | Không tự `POST /{id}/snapshot` — màn đen sau Lưu | **GAP-CAM-SEC-07** (UX, cùng wave S1) |
| Host | Domain Camera + HCNetSDK **trong** `RMMS.Service.Api` | **GAP-CAM-SEC-04** |
| Wall | Chưa grant dashboard / resign | **GAP-CAM-SEC-05** |

IP/`Host` = **config vận hành** (hiện form OK). Không mã hóa IP. Ingest inbound **không JWT** (cam Hikvision không gửi Bearer) — **API-key + IP nguồn** trên `POST /api/v1/camera-events/ingest`. CRUD camera vẫn JWT. Tách host `Linm.RMMS.Camera` = S3.

---

## 2. Password — AEAD + token client (không thay nhau)

### 2.1 At rest (2 chiều)

| | |
|--|--|
| Alg | AES-256-GCM |
| Envelope | `enc:v1:{kid}:{base64url(nonce‖ciphertext‖tag)}` trong `PasswordEnc` |
| Key | Env `Camera__Credential__Keys__{n}__Kid` + `__Value` (32 byte). **Cấm** commit. Prod: KMS / Railway secret. |
| Rotate | Encrypt bằng **active kid**. Decrypt thử mọi kid còn trong ring. |
| Write | Create/Update: plaintext **chỉ** lúc POST (TLS) → encrypt trước `SaveChanges`. Ô FE trống = **giữ** blob cũ. |
| Read API | `passwordSet: true/false` — **cấm** field `password` trên GetById / list / create-response. |
| Decrypt | Chỉ `ICameraCredentialProtector` trong Camera Service khi Login / snapshot / live/start. |

**Cấm:** SHA/bcrypt pass cam · `IDataProtector` không version kid · log plaintext · trả blob `enc:v1…` ra MFE (vẫn là secret).

### 2.2 Token Hikvision (in-process, không DB)

Sau `Login_V40` giữ `userID` trong pool process (TTL idle ~30–60s). Snapshot/live tái sử dụng — **không** ghi session handle vào Postgres. Mất process → Login lại từ AEAD.

### 2.3 Token cấp cho UI (capability)

Không phải password. Payload HMAC (hoặc JWT đối xứng, key khác credential key):

```
sub = cameraId | wallId
purpose = snapshot | jpeg-poll | live-hls | live-webrtc
grantId
companyCode
exp = unix | 0 (chỉ khi grantType=dashboard và flag AllowPersistentUrl)
```

Ký: `Camera__Media__HmacKey`. Rotate kid riêng (`mkid`).

---

## 3. Resign URL — exp vs unlimit (dashboard)

Pattern FileService: **cấm** lưu URL đã ký trên row nghiệp vụ. Persist `grantId` (+ `cameraId`). Mỗi lần tile/player cần media → **resign**.

### 3.1 Hai loại grant

| `grantType` | `expiresAt` (grant) | URL media `exp` | Dùng khi |
|-------------|---------------------|-----------------|----------|
| **`session`** | now + 5–15 phút (refresh khi user còn tab) | **60–300 s** | Form `/camera/:id` · GIS slideout · operator |
| **`dashboard`** | **`null`** (không hạn grant) | Mặc định **60–120 s** + auto resign | Tường hình TOC · màn hình 24/7 |

**Unlimit = grant không hết hạn**, không phải một URL mang password sống mãi.

Grant `dashboard`:

- Bind `displayId` (màn/wall) + `companyCode` + danh sách `cameraIds`
- Permission `camera.dashboard.view` lúc **tạo** grant (admin). Player kiosk chỉ cầm `grantId` + HMAC URL.
- `revokedAt` → mọi sig cũ fail ngay (deny list / version bump).
- Optional: IP allowlist / mTLS site VPN (plan 27 quang/VPN).

### 3.2 Optional URL persistent (`exp=0`)

Chỉ khi **cả ba**: `grantType=dashboard` · env `Camera__Dashboard__AllowPersistentUrl=true` · nguồn từ mạng nội bộ TOC.

Rủi ro: lộ URL = xem cam đến lúc revoke. **Không** mặc định. Wall HTML nên dùng TTL ngắn + worker resign (ẩn với user).

### 3.3 API (draft — prefix giữ `api/v1/cameras`)

| Method | Path | Ai gọi | Ghi chú |
|--------|------|--------|---------|
| POST | `/{id}/grants` | BFF + JWT user | Body `{ grantType, displayId?, ttlSeconds? }` → `{ grantId, playUrl, expiresAt }` |
| POST | `/grants/{grantId}/resign` | BFF JWT **hoặc** grant HMAC (kiosk) | URL mới, cùng grant |
| GET | `/media/{cameraId}/snapshot` | `<img src>` | Query `grant` `exp` `sig` `mkid` — **không** JWT bắt buộc (kiosk) |
| GET | `/media/{cameraId}/live/{hls\|whep}` | player | Cùng sig; P2 plan 21 |
| POST | `/grants/{grantId}/revoke` | JWT admin | `dashboard` + `session` |
| POST | `/{id}/snapshot` | JWT (đã có) | S1: server decrypt · **cấm** body password |

Sau Lưu / mở form: MFE gọi `POST /{id}/snapshot` hoặc `POST /{id}/grants` `session` rồi `<img src=resign>`. **Cấm** `connect/snapshot` kèm password từ browser khi đã có `id`.

`POST /cameras/connect/test` (body host+user+pass) **chỉ** lúc **chưa lưu** (tạo mới, test trước khi persist).

---

## 4. Tách Camera Service

Pattern `Linm.RMMS.Vision` — **không** nhét FFmpeg/SDK vào request thread BFF.

| Thành phần | Repo / host | Việc |
|------------|-------------|------|
| **Camera Service** | `Linm.RMMS.Camera` (sibling WebService) | Vault AEAD · SDK native · snapshot · ingest ISAPI · grants/resign · (P2) gọi Gateway |
| **Gateway** | `Rmms.Camera.Gateway` (plan 21) | RTSP→HLS/WebRTC — **không** đọc DB pass; nhận RTSP URL nội bộ từ Camera Service lúc start |
| **WebService** | sau cutover | Catalog list/filter (code, name, host **display**, tuyến/Km, online) — **0** `PasswordEnc` |
| **BFF** | `web-bff/api/v1/cameras/**` giữ path | JWT user forward · **cấm** lộ port Camera · **cấm** decrypt |
| **MFE** | `Linm.Web.RMMS.Camera` + GIS wall | Form không nhận/gửi pass sau S1 · live = resign URL |

```
MFE ──HTTPS──► BFF (JWT) ──private──► Camera Service :53xx
                                      │
                                      ├─ PG camera (credentials + grants)
                                      ├─ HCNetSDK
                                      └─ Gateway admin (mTLS / shared secret)
```

Lab port đề xuất: API Camera `http://localhost:5316` (tránh đụng Vision `:5311`, Map `:5021`). Health `GET /health`. PG `linm_rmms_camera` — **không** ghi vault vào PG RMMS sau cutover.

JWT: cùng Auth issuer/audience như Vision — **cấm** lớp login mới. Ingest ISAPI: allowlist IP cam + optional shared secret query; **không** JWT từ firmware.

---

## 5. Phases

| Wave | Việc | Slash / host | DoD |
|------|------|----------------|-----|
| **S0** | Plan này | — | SSOT gap + contract |
| **S1** | AEAD in **WebService** (chưa tách) · GetById `passwordSet` · snapshot-by-id sau Lưu/load · tắt ghi pass localStorage khi API sống | `/agent-dev-camera-connect` | DB không plain · FE mask + ô trống = keep · JPEG hiện sau save |
| **S2** | Grant `session` + resign snapshot URL · media GET sig | cùng skill · path `api/v1/cameras` | Form/live poll **không** gửi pass · TTL 60–300s |
| **S3** | Scaffold `Linm.RMMS.Camera` · migrate vault+SDK · BFF retarget · WebService 0 persist pass | `/new-service` + `/review-service-setup` · cutover như Vision | Native chỉ Camera host · BFF path **không** đổi |
| **S4** | Grant `dashboard` unlimit · wall/kiosk resign loop · revoke | MFE wall + GIS | Tường hình 24/7 không re-login operator |
| **S5** | live/start playToken = cùng grant HMAC · MediaMTX | plan 21 P2-G1 | Một cơ chế token JPEG + HLS/WebRTC |

S1 **không** chờ S3. S4 **không** chờ video FPS (JPEG tile đủ TOC tạm). S5 mới cần RTSP.

---

## 6. Env (không commit)

```
Camera__Credential__ActiveKid=2026-09
Camera__Credential__Keys__0__Kid=2026-09
Camera__Credential__Keys__0__Value=   # 32-byte base64
Camera__Media__HmacKey=
Camera__Media__SessionTtlSeconds=120
Camera__Dashboard__AllowPersistentUrl=false
```

Key **khác** JWT signing. Log: cấm full resign URL (parity FILE-ATT). Audit: tạo/revoke grant · decrypt fail · snapshot by id.

---

## 7. Non-goals

| ❌ | Lý do |
|----|--------|
| Hash password cam | Không Login SDK được |
| Presign URL lưu trên `CameraDevice` | FILE-ATT-02 cùng lớp lỗ |
| FE gọi `rtsp://user:pass@host` | plan 21 · lộ secret |
| Hikvision OCX / password trong webpack DefinePlugin | Bundle = lộ |
| Public bucket JPEG | Media GET + sig |
| Gộp Camera Service vào Vision | Infer ≠ vault SDK |

---

## 8. Verify (fail closed)

- Postgres: `PasswordEnc` bắt đầu `enc:v1:` · **0** row plain sau job migrate S1.  
- `GET /cameras/{id}` JSON **không** có `password`.  
- Save → JPEG hiện (`GAP-CAM-SEC-07`).  
- Wall: `grantType=dashboard` · revoke → tile 403.  
- `rg password` MFE camera: không `localStorage` pass khi BFF 200.  
- `dotnet build` host Camera (S3) + WebService + BFF.  
- Health Camera: `sdkDllLoaded` đúng OS (`/docker-camera-sdk-context`).

---

## 9. Gaps index

`GAP-CAM-SEC-01` plaintext at rest · `02` API leak password · `03` client gửi pass khi đã có id · `04` SDK+vault trong WebService · `05` thiếu dashboard grant · `06` localStorage pass · `07` save không load snapshot.

Cũ: `GAP-CAM-03` / `SD-PWD` → **supersede** bởi SEC-01 + plan này.
