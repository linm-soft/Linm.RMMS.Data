# Team-lead — camera-connect security (vault · resign · service)

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| pack | **camera-security** · `edit_page` · `fix_gaps` |
| this role | `team_lead` · handoff **Dev** |
| status | `s1_done` · handoff Dev→QA |
| plan | `docs/plan/camera-security/PLAN.md` · pointer `docs/context/28-CAMERA-SECURITY.md` |
| prior | CRUD pack **done** `task/camera-connect.md` · **cấm** rewrite list/schema |
| autoApprove | **ON** |
| updatedAt | `2026-09-06T14:30:00.000Z` |

**KHÔNG** full_pipeline PO→Design→SA. Plan S0 **đã chốt**.  
Peer ingest Auth: `task/camera-ingest-apikey.md` (`task_c8a1e4b2`) — **không** gộp S1 vault.  
**Cấm** ERP.* · **cấm** trả `password` JSON · **cấm** hash pass cam.

## Platform SSOT

| Layer | Consume |
|-------|---------|
| **Skill** | **`/agent-dev-camera-connect`** (S1–S2 · S4) · S3 **`/new-service`** + `/review-service-setup` · S5 plan 21 |
| **BE** | `D:/AI-QLBD/Linm.RMMS.WebService` domain **Camera** (S1–S2) · S3 host `Linm.RMMS.Camera` |
| **BFF** | `web-bff/api/v1/cameras/**` path **không đổi** |
| **UI** | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Camera` · GIS wall peer |
| **Env** | `Camera__Credential__*` · `Camera__Media__HmacKey` — **cấm** commit secret |

### ssot.reuse

Reuse `CameraDeviceService` · `CamerasController` · `POST /{id}/snapshot` · BFF proxy. **Cấm** clone FileService repo. Resign **pattern** FileService (grantId persist · **cấm** lưu URL).

### implement.wire

```
MFE CameraFormPage
  → cameraService (không gửi password khi đã có id)
  → BFF /cameras/{id}/snapshot | /grants | /media/…
  → API Camera (decrypt AEAD chỉ in-process)
```

### implement.state

- GetById: `passwordSet: boolean` — **0** field `password`
- Form: ô pass trống = keep blob cũ
- Save/load: `POST /{id}/snapshot` → JPEG (`GAP-CAM-SEC-07`)
- Wall: `grantType=dashboard` + resign loop — **không** persist playUrl

---

## Wave order (HARD)

| Wave | Queue | IN this Dev task? |
|------|-------|-------------------|
| **S1** | **NOW** `pending` | **YES — implement hết S1 rồi mới completed** |
| **S2** | enqueue sau S1 PASS | NO — deps S1 |
| **S3** | `pending_confirm` (repo mới) | NO |
| **S4** | sau S2 | NO — deps S2 |
| **S5** | sau plan 21 `live_gateway_confirm` | NO |

---

## Tasks

### S1 — IN (Dev `/agent-dev-camera-connect`)

| id | role | status | DoD |
|----|------|--------|-----|
| **T-BE-SEC-S1** | Dev | **pass** | AES-256-GCM `enc:v1:{kid}:…` vào `PasswordEnc` · key ring env · Create/Update encrypt · GetById/list/create-response **`passwordSet` only** · `POST /{id}/snapshot` decrypt server-side · **cấm** body password khi có id · backfill job plain→AEAD · `GAP-CAM-SEC-01` `02` `03` |
| **T-UI-SEC-S1** | Dev | **pass** | Form không bind `dto.password` · mask + empty keep · **sau Lưu và boot edit**: `snapshotById` hiện JPEG · Update **ở lại form** (cấm `navigate('/camera')` trước snapshot) · localStorage demo **không ghi pass** khi API 200 · `GAP-CAM-SEC-06` `07` |
| **T-BFF-SEC-S1** | Dev | **pass** | Proxy snapshot-by-id · **cấm** log password / full URL |
| **T-QA-SEC-S1** | QA | pending | GET `{id}` JSON **không** có `password` · DB `PasswordEnc` prefix `enc:v1:` · save → JPEG · typecheck+build PASS |

**devSlash:** `/agent-dev-camera-connect`  
**EF:** nếu cột length/`PasswordEnc` đổi → `/database-migration` `Schema_CameraPasswordAead` pair. Không đổi shape → skip CLI.

### S2 — NEXT (sau S1)

| id | role | status | DoD |
|----|------|--------|-----|
| **T-BE-SEC-S2** | Dev | blocked | Entity `CameraMediaGrant` · `POST /{id}/grants` `session` · `POST /grants/{id}/resign` · `GET /media/{cameraId}/snapshot?grant&exp&sig` HMAC · TTL 60–300s · **cấm** persist URL · `GAP-CAM-SEC-03` |
| **T-UI-SEC-S2** | Dev | blocked | Live JPEG = `<img src=resign>` · poll resign · **0** pass trong `connect/snapshot` body khi có `recordId` |
| **T-QA-SEC-S2** | QA | blocked | Sig hết hạn → 403 · resign lần 2 ≠ URL lần 1 |

### S3 — tách service (`pending_confirm`)

| id | role | status | DoD |
|----|------|--------|-----|
| **T-BE-SEC-S3** | Dev | blocked | `/new-service` `Linm.RMMS.Camera` `:5316` · migrate vault+SDK · BFF retarget private · WebService **0** `PasswordEnc` · `/review-service-setup` · `GAP-CAM-SEC-04` |

**Cấm** worker auto-start S3 — cần confirm host/repo.

### S4 — dashboard grant (sau S2)

| id | role | status | DoD |
|----|------|--------|-----|
| **T-BE-SEC-S4** | Dev | blocked | `grantType=dashboard` `expiresAt=null` · bind `displayId` · revoke · `AllowPersistentUrl` default **false** · `GAP-CAM-SEC-05` |
| **T-UI-SEC-S4** | Dev | blocked | Wall/GIS tile resign loop 24/7 · revoke → 403 |

### S5 — live token (plan 21)

| id | role | status | DoD |
|----|------|--------|-----|
| **T-BE-SEC-S5** | Dev | blocked | `live/start` playToken = cùng HMAC grant · **cấm** RTSP user:pass trên FE · cần `live_gateway_confirm` |

---

## Cấm (Dev)

| ❌ | ✅ |
|----|-----|
| Rewrite Kind B list / ui-schema | Chỉ form connect + API vault/media |
| `includePassword: true` GetById | `passwordSet` |
| Hash / bcrypt pass cam | AEAD 2 chiều |
| Commit `Camera__Credential__Keys` | `.env` Rules / Railway |
| `window.alert` | `LeaveConfirmModal` keep |
| S3/S4/S5 trong cùng turn S1 | Wave order HARD |

## Verify S1 (fail closed)

- `rg "includePassword: true"` CameraDeviceService → **0** (hoặc chỉ internal decrypt, không Map DTO)
- `GET /cameras/{id}` no `password`
- Save create/update → JPEG zone có ảnh (lab) hoặc error **rõ** (không màn đen im)
- `dotnet build` WebService Release PASS
- MFE Camera `yarn typecheck` PASS
