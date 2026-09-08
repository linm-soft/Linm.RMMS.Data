# dev-compact — camera-connect S1 vault

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `camera-connect` |
| role | `dev` |
| wave | **S1** · T-BE-SEC-S1 · T-UI-SEC-S1 · T-BFF-SEC-S1 |
| status | `pass` |
| taskId | `task_24969c1a` |
| mfeStdUrl | `http://localhost:9316/camera` |
| updatedAt | `2026-09-06T14:42:00.000Z` |

## DoD

| Check | Result |
|-------|--------|
| PasswordEnc `enc:v1:{kid}:…` AES-256-GCM | **pass** · `CameraCredentialProtector` |
| GET/{id} no `password` · `passwordSet` only | **pass** |
| Empty pass update = keep blob | **pass** |
| POST `/{id}/snapshot` server decrypt | **pass** |
| FE boot/save → `snapshotById` JPEG | **pass** · stay on form |
| localStorage no password | **pass** |
| BFF proxy snapshot-by-id · no body pass | **pass** |
| LeaveConfirmModal | **keep** |

## APIs

- `GET/POST/PUT /api/v1/cameras` · DTO `passwordSet` (no password)
- `POST /api/v1/cameras/{id}/snapshot` · decrypt in-process
- BFF `web-bff/api/v1/cameras/{id}/snapshot` · forward null body
- Env: `Camera:Credential` · Dev lab kid `lab-2026-09` · **cấm** commit prod keys

## Verify

| Gate | Result |
|------|--------|
| BE `dotnet build` Api Release | **PASS** 0 err |
| BE Camera.Bff Release | **PASS** |
| FE `yarn typecheck` | **PASS** |
| FE `yarn build` (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | **PASS** webpack 5.109.2 · size warn |

## Debt / next

- S2 grants/resign — blocked deps S1
- S3 host `Linm.RMMS.Camera` — pending_confirm
- Backfill plain→AEAD lazy on connect + `BackfillPlaintextAsync`
- EF column length **unchanged** 512 — no Schema_CameraPasswordAead migration

## Chain

next=`qa` · T-QA-SEC-S1 · roleOnly=`qa`
