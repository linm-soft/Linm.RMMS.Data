# qa-compact — camera-connect S1

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `camera-connect` |
| role | `qa` |
| wave | **S1** · T-QA-SEC-S1 |
| status | `failed` |
| taskId | `task_f921abce` |
| mfeStdUrl | `http://localhost:9316/camera` |
| updatedAt | `2026-09-06T15:06:48.507Z` |
| full | `D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/qa/scenarios.md` |

## DoD

| Check | Result |
|-------|--------|
| GET/{id} no `password` · `passwordSet` | **FAIL** · Docker live plaintext |
| Snapshot JPEG after save | **FAIL** · JSON ok:false · SDK/lab |
| E2E yarn e2e-qa + screens | **FAIL** · install hung · fallback PNG only |
| FE typecheck+build | **PASS** |
| ERP.* | **none** |

## Evidence

- API/BFF `GET …/cameras/{id}` → `"password":"SecretLab1"` · no `passwordSet`
- `POST …/snapshot` → JSON connection refused (not `image/jpeg`)
- `qa/screens/{S0,S1,QA-20}.png` · fallback headless
- `docker compose build` TLS timeout · image stale (up 6h)

## Chain

next=`qa_fail_rollback` · Dev redeploy S1 container · Pages :9100 · re-queue QA · **cấm** `phase=done`
