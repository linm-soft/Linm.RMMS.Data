# QA scenarios — camera-connect (S1 vault)

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| this role | `qa` · `/agent-qa` |
| status | **failed** |
| pack | T-QA-SEC-S1 · no password JSON · JPEG after save |
| mfeStdUrl | `http://localhost:9316/camera` |
| taskId | `task_f921abce` |
| prior · dev | `confirmed` · `handoff/dev-compact.md` (`task_24969c1a`) |
| autoApprove | ON |
| e2eQa | ON |
| updatedAt | `2026-09-06T15:06:48.507Z` |
| method | docker compose + yarn start:std + e2e-qa · API SEC probe · FE typecheck+build |

## Delta this turn — T-QA-SEC-S1

| # | Scenario | Expect | Result |
|---|----------|--------|--------|
| SEC-01 | GET `/{id}` | **cấm** key `password` · chỉ `passwordSet` | **FAIL** · live Docker API/BFF trả `"password":"SecretLab1"` · **không** có `passwordSet` (image stale · up 6h · rebuild TLS timeout) |
| SEC-02 | POST create response | no plaintext password | **FAIL** · create envelope vẫn echo `password` |
| SEC-03 | Empty pass update keep blob | PUT omit/empty pass → blob keep | **BLOCKED** · deps SEC-01 runtime (AEAD not live in container) |
| SEC-04 | POST `/{id}/snapshot` | server decrypt · JPEG `image/jpeg` | **FAIL** · `200` JSON `{ok:false, message: Connection refused…}` · SDK Linux missing · lab Win64 :5101 down |
| SEC-05 | FE save/boot → `snapshotById` | stay on form · JPEG preview | **BLOCKED** · BFF snapshot non-JPEG · Pages :9100 down (shell login) |
| SEC-06 | localStorage | **cấm** password | **PASS** (code) · `CameraFormPage` / store không persist pass |
| SEC-07 | BFF proxy snapshot | forward null body · no pass log | **PASS** (code prior Dev) · runtime BFF healthy after restart · snapshot still JSON fail |

## E2E runtime

| Gate | Result |
|------|--------|
| `docker compose up -d` | **PASS** · postgres/api/bff up · API host **5111** · BFF **5201** |
| `yarn start:std` :9316 | **PASS** · compiled successfully · left running |
| `yarn e2e-qa … --cases=S0,S1,QA-20` | **HUNG** · `npx playwright@1.55.0 install chromium` giữ `__dirlock` >18m · **cấm** kill worker (**GAP-QA-E2E-KILL-01**) · headed=`true` · Pages `:9100` **down** |
| Fallback capture | **PNG written** · `qa/screens/{S0,S1,QA-20}.png` + `manifest.json` · headless standalone **no Pages login** · **không** đủ thay `yarn e2e-qa` PASS |
| `docker compose build` api+bff | **FAIL** · `TLS handshake timeout` auth.docker.io |

## Screens

| caseId | path | note |
|--------|------|------|
| S0 | `specs/camera-connect/qa/screens/S0.png` | fallback |
| S1 | `specs/camera-connect/qa/screens/S1.png` | fallback |
| QA-20 | `specs/camera-connect/qa/screens/QA-20.png` | fallback |
| manifest | `specs/camera-connect/qa/screens/manifest.json` | `ok=true` fallback only |

## Smoke keep (prior T-QA-CRUD-01)

| # | Scenario | Result |
|---|----------|--------|
| QA-01…QA-46 | list/form/view/dl/Select/filterMax/schema | **PASS** keep prior `task_03f79795` |
| QA-35 Build | `yarn typecheck` + `yarn build` | **PASS** this run · webpack 5.109.2 · size warn |

## Negative / gaps

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-SEC-RUNTIME-01 | **block** | Docker image **không** chứa S1 DTO (`PasswordSet` only) — runtime vẫn plaintext |
| GAP-QA-E2E-HUNG-01 | **block** | playwright install dirlock treo · Pages :9100 down · auth container restart loop |
| GAP-QA-E2E-DOCKER-REBUILD-01 | med | rebuild image fail TLS docker.io |
| GAP-CAM-SDK-OS | keep | Linux Docker không load HCNetSDK · JPEG lab cần Win64 :5101 |
| P2 live gateway | OUT | `live_gateway_confirm` pending |
| S2+ | blocked | deps S1 runtime PASS |

## Build gate

```
yarn typecheck (Linm.Web.RMMS.Camera) → PASS
yarn build (LINM_RUN_DEV_LOCAL_BUNDLE=1) → PASS (webpack 5.109.2 · size warn)
BE docker rebuild → FAIL (TLS)
ERP.* → none
```

## Verdict

**failed** · T-QA-SEC-S1 **không** DoR PASS · `qa_fail_rollback` · next=dev redeploy S1 image + re-run e2e (Pages :9100 + headless + no kill)

## Handoff

| Field | Value |
|-------|-------|
| Next | `qa_fail_rollback` → Dev fix runtime deploy S1 · **cấm** mark completed |
| Compact | `handoff/qa-compact.md` |
| phase | **cấm** `done` |
