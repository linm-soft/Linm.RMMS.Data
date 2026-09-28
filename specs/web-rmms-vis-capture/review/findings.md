# Review — Findings — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| this role | `review` · `/agent-review` |
| status | **done** |
| review_confirm | **approve** |
| changeScope | `edit_page` |
| packKind | `list` (phone VIS full · DES-GRID **N/A**) |
| contentHash | `sha256:f749bc65f84b7bde51beeebaa85e5db22dacc8e8a040a53de30af834fa55c8cd` |
| hashGate | **skip** · unchanged vs data_analy→qa |
| autoApprove | ON |
| e2eQa | ON · prior QA S0/S1/QA-20 + MODE-* **PASS** (**cấm** re-run e2e here) |
| mfeStdRoute | `/chup-hien-truong` |
| mfeStdUrl | `http://localhost:9301/chup-hien-truong` |
| taskId | `task_e73eaeff` |
| skillVersion | `2026.09.05.03` |
| updatedAt | `2026-09-27T11:40:00.000Z` |

## Scope

Cross-check prior compact (data_analy→qa) + spot FE `VisCapturePage` Pattern B + `services/visCapture/*` · **cấm** implement · **cấm** yarn build/e2e/start:std.

## QUERY

| ID | Severity | Finding | Verdict |
|----|----------|---------|---------|
| Q-01 | — | Detect: `engine=P1` · `imageFileId\|imageUrl` · `lat`/`lng`/`accuracyM` → POST `/ai-vision/detect` via Mobile.Bff (`visCaptureEndpoint`→camPatrol) | **PASS** |
| Q-02 | — | Attach: `detectionId` · `hasGps=true` · Title/RouteName/IncidentType* · `requestedAt` · **0** Lat/Lng on create body | **PASS** |
| Q-03 | — | Optional GET `patrol/sessions` · empty → GPS-only «chưa có ca» · **cấm** itemsOrDemo | **PASS** |
| Q-04 | soft | Lat persist on Incident | **DEFER** · PGC-BE-01 · HasGps only · no MIG |

## SEC

| ID | Severity | Finding | Verdict |
|----|----------|---------|---------|
| S-01 | — | Guest → `#visGuestGate` · CTA `#visGuestLogin` · **0** Live until auth (QA S0) | **PASS** |
| S-02 | — | Client **cấm** ERP.* · **cấm** web-bff · **cấm** invent `/web-rmms-vis-capture*` API / VisCaptureController | **PASS** |
| S-03 | — | GPS deny / Acc>30 (`GPS_ACC_MAX_M=30`) → handler block Detect+Attach · `#modalGps` · **0** fake coords | **PASS** |
| S-04 | — | DOMAIN-MAP-VIS · DETECT-HOST Vision via BFF · **cấm** on-device / MFE `:5311` | **PASS** |

## UI-FN

| ID | Severity | Finding | Verdict |
|----|----------|---------|---------|
| U-01 | — | `#sc-vis-capture` · photos/rowLoc/rowAcc/detect/rowClass/rowSev/btnAttach/btnSkip · phone ≤430 | **PASS** |
| U-02 | — | TITLE-01 «Nhận diện sự cố» · DUAL-01 section ảnh + Skip dismiss | **PASS** |
| U-03 | — | ROUTE-01 `/chup-hien-truong` · alias `/incident/vis` · **cấm** `/web-rmms-vis-capture` path · useFormOptions | **PASS** |
| U-04 | — | Pattern B: Detect/Attach idle-on · `disabled={detecting\|attaching}` only · `#validationBanner` string[] on click · Acc>30 no POST | **PASS** |
| U-05 | — | Modes `?gps=deny` · `?acc=45` · `?nophoto=1` · `?nosession=1` · `?error=1` · `?banner=1` | **PASS** (QA MODE) |
| U-06 | — | DES-GRID / LinErpListFilterBar | **WAIVE** · phone VIS full |
| U-07 | soft | QA soft: stock e2e port · WDS deep-link · LG-00 vs SH-02 | **ACCEPT** · not P0 |

## BE-FN

| ID | Severity | Finding | Verdict |
|----|----------|---------|---------|
| B-01 | — | FormMode↔API: uploads* · detect · detections/{id} · sessions · incidents | **PASS** |
| B-02 | — | `CreateIncidentRequest` · `HasGps` · `DetectionId` · **0** Lat props on attach payload | **PASS** |
| B-03 | — | Step 4b / T-BE / MIG | **N/A** · cite Live AiVision+Incident(+Patrol) |
| B-04 | — | Engine=P1 on detect · DEC-DETECT-HOST via BFF | **PASS** |

## Gate summary

| Gate | Result |
|------|--------|
| Prior roles confirmed | data_analy→qa **confirmed** |
| P0 findings | **none** |
| review_confirm | **approve** |
| Hash rescan | **skip** (contentHash unchanged) |
| yarn build / e2e / start:std | **not run** (roleOnly=review) |

## Debt (non-blocking)

| ID | Note |
|----|------|
| GAP-QA-E2E-STOCK-PORT | soft · stock e2e expects :5101/:5201 |
| GAP-PGC-BE-01 Lat | deferred MIG · HasGps only |
| GAP-QA-E2E-HISTORY-FALLBACK | soft · WDS deep-link fulfill |
| GAP-QA-LG-00 | soft · LG-00 vs SH-02 sheet |

## Handoff

- compact: `specs/web-rmms-vis-capture/handoff/review-compact.md`
- pipeline review = **confirmed** · edit_page DoR PASS · **cấm** start other roles in this task (GAP-PKT-ROLE-01)
- next: queue `task_e73eaeff` **completed** · **cấm** phase=done beyond review

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-review | 2026.09.05.03 | 1 |
