# Review — Findings — web-rmms-photo-geo

> Status: **confirmed** · `review_confirm=approve` · autoApprove ON · 2026-09-27T13:28:00.000Z  
> task `task_2a8988f8` · contentHash `sha256:525b8f61bbe397050bb1049e38683d6c333c7283165859967e927c1dc285b9ba` · changeScope=`edit_page` · **hash skip** (unchanged vs prior roles this cycle)

| | |
|--|--|
| Feature | `web-rmms-photo-geo` |
| Title | Overlay chụp ảnh có tọa độ · Pattern B CTA Delta |
| Role | `review` |
| Verdict | **PASS** · no blocking gaps |
| Pack | `list` · Mobile sheet `#sheet-pgc` DES-MOB-PGC |

## Scope checked

- Prior compact: data_analy → po → design → sa → team_lead → dev → qa (all confirmed · same contentHash `525b8f61`)
- Delta: Pattern B CTA on `PhotoGeoPage.tsx` · route SSOT `/anh-vi-tri`
- MFE: `src/pages/WebRmmsPhotoGeo/PhotoGeoPage.tsx` · `src/services/photoGeo/*`
- DOMAIN-MAP row `web-rmms-photo-geo` · DEC-PGC-BE-01 sidecar · T-BE=N/A · Step4b N/A
- QA e2e S0/S1/QA-20 + Pattern B PASS (`_capture_pgc.mjs` corePass) — **cấm** re-run e2e/start:std ở review

---

## QUERY

| id | result | note |
|----|--------|------|
| Q-01 files purpose | **PASS** | `purpose=photo-geo-capture` · product=rmms · entityType=`incident` — `photoGeo/endpoint.ts` |
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
| S-04 GPS fake | **PASS** | Deny/poor → on-click `#modal-gps` · offline toast · **cấm** fake success |
| S-05 sidecar surface | **PASS** | sessionStorage result only · host MediaIds+HasGps · **no** invent Lat column |

## UI-FN

| id | result | note |
|----|--------|------|
| U-01 zones | **PASS** | `#sheet-pgc` · `#capture-preview` · `#btn-shutter` · gim · `#map-confirm` · `#btn-detect` · `#btn-use` · `#validation-banner` · `#modal-gps` |
| U-02 cam primary | **PASS** | `getUserMedia` primary · file input không primary |
| U-03 flow | **PASS** | still→gim1→GPS+object→HITL→files commit→sidecar return |
| U-04 Pattern B CTA | **PASS** | `#btn-shutter` no `disabled` · detect `disabled={detecting}` · use/confirm `disabled={uploading}` · **cấm** `disabled={!can*}` |
| U-05 validation | **PASS** | `validationAttempted` + `#validation-banner` string[] after click |
| U-06 GPS deny UI | **PASS** | DES-MOB-GPS-DENY `#modal-gps` on-click |
| U-07 modes | **PASS** | QA: `?deny=1` · `?compass=1` · `?step=map` · `?fail=1` + S1-PATTERN-B |
| U-08 peers | **PASS** | INC/VIS/FR `openCapture('photo-geo')` · **cấm** hub Field row |
| U-09 DES-GRID | **N/A** | phone overlay · filter bar WAIVE (QA) |
| U-10 route | **PASS** | mfeStdRoute `/anh-vi-tri` · **cấm** `/web-rmms-photo-geo` product route |

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
| D-QA-PORT | debt | stock `yarn e2e-qa` soft fail port — authoritative `_capture_pgc.mjs` PASS |
| D-MAP-CLIP | debt | MapLibre clip polish optional |
| D-HEADLESS-CAM | debt | headless shutter soft — Live S1 PASS |
| D-DOMAIN-ROUTE | debt | DOMAIN-MAP cite still mentions `/web-rmms-photo-geo` path string · product SSOT `/anh-vi-tri` (SA keep) |

**fix_gaps:** none · **review_confirm:** `approve`

## Notes

- Cycle hash `525b8f61` shared · prior new_page findings hash `2282c3b6` superseded by edit_page Pattern B delta.
- Spot-check code + compact + QA sufficient · **không** yarn build/e2e/start:std.
- next: pipeline complete · roleOnly stop (GAP-PKT-ROLE-01) · mark `task_2a8988f8` completed.
