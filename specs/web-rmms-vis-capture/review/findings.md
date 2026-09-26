# Review — Findings — web-rmms-vis-capture

| Field | Value |
|-------|-------|
| feature | `web-rmms-vis-capture` |
| this role | `review` · `/agent-review` |
| status | **done** |
| review_confirm | **approve** |
| changeScope | `new_page` |
| packKind | `list` (phone VIS full · DES-GRID **N/A**) |
| contentHash | `sha256:96ffc2878a4c6ad0367088c699203864c2e711b055ca68da8a59d696c8d4de97` |
| hashGate | **skip** · unchanged vs data_analy→qa |
| autoApprove | ON |
| e2eQa | ON · prior QA S0/S1/QA-20 **PASS** (queued runtime · **cấm** re-run e2e here) |
| mfeStdUrl | `http://localhost:9301/web-rmms-vis-capture` |
| taskId | `task_8a5cc868` |
| skillVersion | `2026.09.05.03` |
| updatedAt | `2026-09-26T04:50:31.318Z` |

## Scope

Cross-check prior compact (data_analy→qa) + spot FE `WebRmmsVisCapture/*` + `services/visCapture/*` + camPatrol Detect/CreateIncident DTOs · **cấm** implement · **cấm** yarn build/e2e/start:std.

## QUERY

| ID | Severity | Finding | Verdict |
|----|----------|---------|---------|
| Q-01 | — | Detect: `engine=P1` · `imageFileId\|imageUrl` · `lat*`/`lng*`/`accuracyM*` → POST `/ai-vision/detect` via Mobile.Bff | **PASS** |
| Q-02 | — | Attach: `detectionId` · `hasGps=true` · Title/RouteName/IncidentType* · `requestedAt` · **0** Lat/Lng on CreateIncidentRequest | **PASS** |
| Q-03 | — | Optional GET `patrol/sessions` · empty → GPS-only toast · **cấm** itemsOrDemo | **PASS** |
| Q-04 | soft | Lat persist on Incident | **DEFER** · PGC-BE-01 · HasGps only · no MIG |

## SEC

| ID | Severity | Finding | Verdict |
|----|----------|---------|---------|
| S-01 | — | Guest → guestGate «Đăng nhập để dùng Nhận diện sự cố.» · CTA `#visGuestLogin` · **0** Live until auth (QA S0) | **PASS** |
| S-02 | — | Client **cấm** ERP.* · **cấm** web-bff · **cấm** invent `/web-rmms-vis-capture*` API / VisCaptureController (endpoint comment + reuse camPatrol/fieldReflect) | **PASS** |
| S-03 | — | GPS deny / Acc>30 (`GPS_ACC_MAX_M=30`) → block Detect+Attach · `#modalGps` · **0** fake coords | **PASS** |
| S-04 | — | DOMAIN-MAP-VIS · DETECT-HOST Vision via BFF · **cấm** on-device / MFE `:5311` | **PASS** (SA closed · Dev cite) |

## UI-FN

| ID | Severity | Finding | Verdict |
|----|----------|---------|---------|
| U-01 | — | `#sc-vis-capture` · photos/rowLoc/rowAcc/detect/rowClass/rowSev/btnAttach/btnSkip · phone ≤430 | **PASS** |
| U-02 | — | TITLE-01 «Nhận diện sự cố» · DUAL-01 section «Ảnh hiện trường» + Skip dismiss | **PASS** |
| U-03 | — | Routes `/web-rmms-vis-capture` + alias `/incident/vis` · useFormOptions · INC-L banner peer | **PASS** |
| U-04 | — | Modes `?gps=deny` · `?acc=45` · `?nophoto=1` · `?nosession=1` · `?error=1` | **PASS** (QA MODE) |
| U-05 | — | DES-GRID / LinErpListFilterBar | **WAIVE** · phone VIS full |
| U-06 | soft | QA soft: stock e2e port · WDS deep-link · playwright junction · showDevNav chrome | **ACCEPT** · not P0 |

## BE-FN

| ID | Severity | Finding | Verdict |
|----|----------|---------|---------|
| B-01 | — | FormMode↔API: uploads* · detect · detections/{id} · sessions · incidents | **PASS** |
| B-02 | — | `CreateIncidentRequest` · `HasGps` · `DetectionId` · **0** Lat props on DTO | **PASS** |
| B-03 | — | Step 4b / T-BE / MIG | **N/A** · cite Live AiVision+Incident(+Patrol) |
| B-04 | — | Engine=P1 on detect · DEC-DETECT-HOST via BFF | **PASS** |

## Gate summary

| Gate | Result |
|------|--------|
| Prior roles confirmed | data_analy→qa **confirmed** |
| P0 findings | **none** |
| review_confirm | **approve** |
| Hash rescan | **skip** (unchanged) |
| yarn build / e2e / start:std | **not run** (roleOnly=review) |

## Debt (non-blocking)

| ID | Note |
|----|------|
| GAP-QA-E2E-STOCK-PORT | soft · stock e2e expects :5101/:5201 |
| GAP-PGC-BE-01 Lat | deferred MIG · HasGps only |
| GAP-QA-E2E-HISTORY-FALLBACK | soft · WDS deep-link fulfill |
| GAP-QA-E2E-PLAYWRIGHT-RESOLVE | soft · junction playwright |

## Handoff

- compact: `specs/web-rmms-vis-capture/handoff/review-compact.md`
- pipeline review = **confirmed** · feature DoR PASS · **cấm** start other roles in this task (GAP-PKT-ROLE-01)
- next chain: queue task **completed** (e2eQa already PASS at QA)

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-review | 2026.09.05.03 | 1 |
