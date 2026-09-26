# Review — Findings — web-rmms-photo-geo

> Status: **confirmed** · `review_confirm=approve` · autoApprove ON · 2026-09-26T07:18:12.363Z  
> task `task_db972d1e` · contentHash `sha256:2282c3b64ab8701681f5edbc548b5cf1a2221159d9ffb779dfe03d186010f7a4` · **hash skip** (unchanged vs prior roles)

| | |
|--|--|
| Feature | `web-rmms-photo-geo` |
| Title | Overlay chụp ảnh có tọa độ |
| Role | `review` |
| Verdict | **PASS** · no blocking gaps |
| Pack | `list` · Mobile sheet `#sheet-pgc` DES-MOB-PGC |

## Scope checked

- Prior compact: data_analy → po → design → sa → team_lead → dev → qa (all confirmed · same contentHash)
- MFE: `src/pages/WebRmmsPhotoGeo/*` · `src/services/photoGeo/*` · peers INC/VIS/FR `openCapture('photo-geo')`
- DOMAIN-MAP row `web-rmms-photo-geo` · DEC-PGC-BE-01 sidecar · T-BE=N/A
- QA e2e S0/S1/QA-20 + modes PASS (queued runtime already done)

---

## QUERY

| id | result | note |
|----|--------|------|
| Q-01 files purpose | **PASS** | `purpose=photo-geo-capture` · `product=rmms` · entityType=`incident` — `photoGeo/endpoint.ts` |
| Q-02 path invent | **PASS** | Relative `/files` + camPatrol detect · **cấm** `/photo-geo*` client path |
| Q-03 BFF | **PASS** | Mobile.Bff via `apiClient` / `VITE_MOBILE_API_URL` · **cấm** web-bff · **cấm** ERP.* |
| Q-04 detect Lat | **PASS** | `lat/lng=objectGeo` HITL · Acc gate ≤30 · **cấm** photographer GPS as detect Lat |
| Q-05 sessions | **PASS** | Optional `fetchActiveSession` / km via camPatrol · guest no Live sheet |
| Q-06 DOMAIN-MAP | **PASS** | Row cites Incident + File/AiVision/Patrol/Gis · **cấm** PhotoGeoController |

## SEC

| id | result | note |
|----|--------|------|
| S-01 guest | **PASS** | Guest gate blocks Live sheet · CTA login |
| S-02 JWT PUT | **PASS** | PUT object Bearer + X-Company-Id when present · commit via apiClient |
| S-03 no resign URL | **PASS** | `getObject` blob · **cấm** persist resign img src |
| S-04 GPS fake | **PASS** | Deny/poor → block shutter/use/detect · offline toast · **cấm** fake success |
| S-05 sidecar surface | **PASS** | sessionStorage result only · host MediaIds+HasGps · **no** invent Lat column |

## UI-FN

| id | result | note |
|----|--------|------|
| U-01 zones | **PASS** | `#sheet-pgc` · `#capture-preview` · `#btn-shutter` · gim · `#map-confirm` · `#btn-use` |
| U-02 cam primary | **PASS** | `getUserMedia` primary · file input không primary |
| U-03 flow | **PASS** | still→gim1→GPS+object→HITL→files commit→sidecar return |
| U-04 GPS deny UI | **PASS** | DES-MOB-GPS-DENY modal · `?deny=1` |
| U-05 modes | **PASS** | QA: `?deny=1` · `?compass=1` · `?step=map` · `?fail=1` |
| U-06 peers | **PASS** | INC/VIS/FR `openCapture('photo-geo')` · **cấm** hub Field row |
| U-07 DES-GRID | **N/A** | phone overlay · filter bar WAIVE (QA) |

## BE-FN

| id | result | note |
|----|--------|------|
| B-01 DEC-PGC-BE-01 | **PASS** | Sidecar attachmentId+object coords · host MediaIds+HasGps · no Lat column |
| B-02 Step4b | **N/A** | T-BE=N/A · migration none |
| B-03 no PhotoGeoController | **PASS** | Reuse FileService + AiVision + Patrol |
| B-04 ERP.* | **PASS** | RMMS Mobile.Bff only |

---

## Gaps / debt (non-blocking)

| id | severity | note |
|----|----------|------|
| D-QA-PORT | debt | stock `yarn e2e-qa` soft fail port 5101/5201 — custom `_capture_pgc.mjs` PASS |
| D-MAP-CLIP | debt | MapLibre clip polish optional (dev) |
| D-HEADLESS-CAM | debt | headless shutter soft — Live S1 PASS |

**fix_gaps:** none · **review_confirm:** `approve`

## Notes

- Hash unchanged across pipeline → hash skip; spot-check code + DOMAIN-MAP + QA compact sufficient.
- E2E already PASS under `/agent-qa*` · role review **không** re-run e2e/start:std.
- next: chain complete · **cấm** start role khác (GAP-PKT-ROLE-01).
