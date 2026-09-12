# Team-lead — camera ingest `X-Api-Key` (Auth SSOT) + rate limit

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| pack | **camera-ingest-apikey** · `edit_page` · `fix_gaps` |
| this role | `team_lead` · handoff **Dev** |
| status | `confirmed` |
| prior | Local ingest key `Camera:Ingest:ApiKey` (lab) · **không** Auth scheme `X-Api-Key` · BFF **không** validate key |
| plan | `docs/context/06-SECURITY-RATELIMIT.md` · `docs/context/23-CAMERA-HOST-NOTIFY-CONFIG.md` · `docs/context/28-CAMERA-SECURITY.md` |
| autoApprove | **ON** |
| taskId | `task_c8a1e4b2` |
| updatedAt | `2026-09-06T16:30:00.000Z` |
| **devSlash** | **`/agent-dev-camera-connect`** + Auth repo `Linm.Platform.Authentication` |

**KHÔNG** full_pipeline PO→Design. Chốt dưới = HOW.  
**Cấm** ERP.* · **cấm** JWT cho cam · **cấm** secret commit · **cấm** BFF làm SSOT key.

---

## Why

Hikvision ISAPI Listening **không gửi JWT**. Lab đang so key **local** (`Camera__Ingest__ApiKey` + `X-Camera-Api-Key`).  
Expect: key **do Auth cấp / revoke / IP-bind**, RMMS chỉ **introspect + bind thiết bị**, ingest **rate-limit** chống spam/hack.

Gap hiện tại:

| Lớp | Hiện trạng | Gap |
|-----|------------|-----|
| Auth | JWT + OAuth `client_id`/`client_secret` → token. **0** inbound `X-Api-Key` | `GAP-CAM-INGEST-AUTH-01` |
| RMMS API | Filter local shared key · query `apiKey` | `GAP-CAM-INGEST-AUTH-02` |
| BFF | Anonymous proxy · **không** so key | Không dùng BFF cho cam push |
| Rate limit | Copilot in-memory only · ingest **0** limiter | `GAP-CAM-INGEST-RL-01` |

---

## Platform SSOT

| Layer | Consume |
|-------|---------|
| **Auth** | `D:/API-CORE/Linm.Platform.Authentication` — hash at rest · introspect · `AllowedIpAddresses` (reuse ServiceClient IP pattern) |
| **BE** | `D:/AI-QLBD/Linm.RMMS.WebService` — `POST /api/v1/camera-events/ingest` (+ alias `/cameras/ingest/isapi`) |
| **BFF** | **Cam → API direct** · BFF ingest chỉ proxy lab · **cấm** business auth trong BFF |
| **Policy** | `06-SECURITY-RATELIMIT.md` §2 API Key · §3 ingest row · §5 header `X-Api-Key` |
| **Ops cam** | `23-CAMERA-HOST-NOTIFY-CONFIG.md` |
| **CommonLib** | Rate limiter ASP.NET 8 `AddRateLimiter` — **cấm** package lạ nếu built-in đủ |

### Header (HARD)

| Nguồn | Field | Ghi chú |
|-------|--------|---------|
| SSOT HTTP | **`X-Api-Key`** | `06` §5 Partner / device |
| Alias (Hikvision URL) | Query **`apiKey`** | Firmware TCM403 **không set custom header** ổn định — Auth introspect **cùng secret** |
| Alias cũ lab | `X-Camera-Api-Key` | Map → `X-Api-Key` 1 release rồi deprecate |
| **Cấm** | Digest admin/pass cam · JWT Bearer từ cam | Cam không hỗ trợ |

---

## Implement HOW (chốt)

```
Camera ITS
  POST /api/v1/camera-events/ingest?host={camIp}&apiKey={key}
  (hoặc header X-Api-Key)
        │
        ├─ 1. Rate limit (IP rồi key) → 429 Retry-After
        ├─ 2. Body size cap
        ├─ 3. RMMS → Auth introspect (service JWT)
        │      hash lookup · active · scope camera:ingest · AllowedIpAddresses
        ├─ 4. System bind: query host ∈ allowedHosts / CameraDevice.Host
        └─ 5. Persist CameraEvent
```

**Lab fallback:** chỉ `Development`/`Docker` + Auth down → `Camera:Ingest:ApiKey` local.  
**Production:** Auth bắt buộc · key trống / Auth 5xx → **503** fail-closed · **cấm** fallback shared key.

### Auth (T-AUTH-*)

| Quyết định | Chi tiết |
|------------|----------|
| Store | Bảng **ApiKeys** (hoặc ServiceClient `KeyKind=api_key`) · **hash** secret (cùng kiểu `ClientSecretHash`) · **cấm** plaintext |
| Admin | Create / enable / disable · TTL mặc định **365 ngày** (`06` §2) · audit · **cấm rotate** · secret **= Name** |
| Scope | `camera:ingest` |
| IP | Reuse `AllowedIpAddresses` (public + LAN alias, comma) |
| Introspect | `POST /api/v1/apikeys/introspect` — **chỉ service JWT** (RMMS ServiceClient), body `{ apiKey, sourceIp }` · response `{ active, companyCode, clientId, allowedIps[], scopes[], sourceIp, message }` · **cấm** log raw key |
| Ingest 403 | JSON `{ ok, code, message, sourceIp, host }` — `sourceIp` = TCP/CF client (không phải query `host`). **Cấm** `allowedIps` trên response camera. Đổi tên key **không** đổi allowlist. |
| Seed lab | 1 key `rmms-cam-ingest-lab` **chỉ** Dev/Docker seed · **cấm** Production seed |

### RMMS system (T-BE-INGEST-*)

| Quyết định | Chi tiết |
|------------|----------|
| Replace | `CameraIngestAuthenticator` **gọi Auth introspect** — không so env key ở Production |
| Bind | Query `host` bắt buộc · khớp `AllowedIpAddresses` **hoặc** `CameraDevice.Host` (+ `HostAliases`) |
| Tenant | `companyCode` từ introspect → `ICompanyContext` ingest (không JWT user) |
| Cache | Memory cache introspect **≤ 30s** · revoke ≤ 30s mới cấm |
| Cam URL | `/api/v1/camera-events/ingest?host={IP}&apiKey={KEY}` |

### Rate limit (T-BE-RL-*) — chốt `06` §3

| Partition | Limit | Window | 429 |
|-----------|-------|--------|-----|
| Per **API-key** (sau extract) | **120** | 1 min | ANPR ~3 làn |
| Per **source IP** | **60** | 1 min | Flood trước/không key |
| Failed auth (401) per IP | **10** | 1 min | Brute key |
| Body | **2 MB** | /request | Binary ảnh |

Response: HTTP **429** + `Retry-After` · **cấm** stack trace.  
Prod bật limiter **luôn**. Lab có thể nới qua config, default **bật**.

.NET 8 `PartitionedRateLimiter` (fixed window hoặc sliding). Key partition = hash key (không log). IP = `RemoteIp` / `X-Forwarded-For` khi `TrustForwardedFor`.

---

## Wave order (HARD)

| Wave | IN this Dev task? |
|------|-------------------|
| **I0** Auth ApiKey store + introspect + admin enable/disable (secret = Name) | **YES** |
| **I1** RMMS ingest → Auth + bind host/IP · deprecate local prod key | **YES** (deps I0) |
| **I2** Rate limit + body cap + 401 lockout | **YES** (cùng PR với I1 hoặc ngay sau) |
| **I3** Docs ops + Railway env · QA abuse | **YES** |

S3 host `Linm.RMMS.Camera` **OUT** pack này.

---

## Tasks

### I0 — Auth

| id | role | status | DoD |
|----|------|--------|-----|
| **T-AUTH-KEY-01** | Dev | **pass** | Entity ApiKey · EF pair `20260909074428_Schema_ApiKeys` |
| **T-AUTH-KEY-02** | Dev | **pass** | Admin create/enable/disable · secret = Name · rotate **410** · **0** plaintext GET |
| **T-AUTH-INT-01** | Dev | **pass** | `POST /api/v1/apikeys/introspect` service JWT · IP · `camera:ingest` |
| **T-AUTH-SEED-01** | Dev | **pass** | Lab seed Full + non-Production only |

### I1 — RMMS bind

| id | role | status | DoD |
|----|------|--------|-----|
| **T-BE-INGEST-01** | Dev | **pass** | Ingest: `X-Api-Key` / query `apiKey` / alias `X-Camera-Api-Key` → Auth introspect |
| **T-BE-INGEST-02** | Dev | **pass** | Bind `host` + source IP + `CameraDevice.Host` / aliases · company từ introspect |
| **T-BE-INGEST-03** | Dev | **pass** | Prod: Auth bắt buộc · local key **chỉ** Dev/Docker fallback |
| **T-BFF-INGEST-01** | Dev | **pass** | BFF không so key · forward `X-Api-Key` · cam → API direct |

### I2 — Rate limit

| id | role | status | DoD |
|----|------|--------|-----|
| **T-BE-RL-01** | Dev | **pass** | `AddRateLimiter` ingest + alias — 120 key / 60 IP |
| **T-BE-RL-02** | Dev | **pass** | 401 lockout 10/min/IP · body 2 MB · 429 + `Retry-After` |
| **T-DOC-RL-01** | Dev | **pass** | `06` §3 · ops `23` URL + 429/401 |

### I3 — QA

| id | role | status | DoD |
|----|------|--------|-----|
| **T-QA-INGEST-01** | QA | pending | Sai key → 401 · IP lệch → 403 · thiếu host → 400 |
| **T-QA-INGEST-02** | QA | pending | Burst >120/min/key → 429 · 11× 401 cùng IP → lockout |
| **T-QA-INGEST-03** | QA | pending | Cam URL query `apiKey` smoke 200 · GET events JWT vẫn JWT |

**EF Auth:** `/database-migration` trên **Authentication** project — pair Designer. RMMS **không** cột secret mới nếu chỉ introspect (skip Schema RMMS trừ khi persist `IngestApiKeyId`).

---

## Cấm (Dev)

| ❌ | ✅ |
|----|-----|
| Shared env key Production | Auth hash + introspect |
| JWT từ camera | `X-Api-Key` / query `apiKey` |
| So key trong BFF | API + Auth |
| Log raw key / full URL query | Hash / redacted |
| Tắt rate limit Production | Limiter always-on |
| Package rate-limit lạ khi built-in đủ | `Microsoft.AspNetCore.RateLimiting` |
| Seed lab key lên Production | Seed Dev/Docker only |
| Rewrite Kind B list / vault S1 | Chỉ ingest auth + RL |

## Verify (fail closed)

- Auth: `rg "X-Api-Key"` introspect + hash compare · **0** plaintext column GET
- RMMS Production: `rg "Camera:Ingest:ApiKey"` **không** accept khi `ASPNETCORE_ENVIRONMENT=Production`
- `POST` ingest sai key → 401 · flood → 429
- `dotnet build` Authentication + RMMS.Service.Api PASS
- Curl lab: `?host=&apiKey=` 200 một lần · lặp > limit → 429
