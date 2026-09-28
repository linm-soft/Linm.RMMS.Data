# Review — Findings — web-rmms-asset-ai

> Status: **done** · writtenAt `2026-09-27T17:30:00.000Z` · task `task_0a0af34d`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> contentHash: `sha256:e223304b3658e8067766aed729e36988d54f1df8ad38ca953b2e176e63c9594c` (chain khớp · **hash skip** analy rescan)  
> review_confirm: **approve** · nextSlash: *(pipeline complete · e2e QA already confirmed)*

| | |
|--|--|
| Feature | `web-rmms-asset-ai` |
| Title | Camera AI + HITL — Pattern B + SearchInput |
| Role | `review` · `/agent-review` |
| changeScope | `edit_page` |
| mfeStdRoute | `/tai-san/ai` · HITL `/tai-san/ai/hitl/:id` · alias `/asset/ai` |
| mfeStdUrl | `http://localhost:9301/m/tai-san/ai` |
| Prior | data_analy→po→design→sa→team_lead→dev→qa **confirmed** |

## Verdict

**PASS** · `review_confirm=approve` · **không** `fix_gaps` · P0/Must = 0

## Gates (QUERY / SEC / UI-FN / BE-FN)

| Gate | Result | Evidence |
|------|--------|----------|
| **QUERY** | **PASS** | Live BFF only: `ai-vision/uploads|detect-assets|asset-candidates/**` · `integration/road-routes/search` · `patrol/sessions` · FormMode Detect→Draft→HITL Confirm\|Dismiss · **cấm** ERP.* / invent AssetAiController · DOMAIN-MAP AiVision · Step 4b **N/A** |
| **SEC** | **PASS** | `hasAccessToken` Detect+HITL · GPS Acc≤30 gate **on submit** (Pattern B) · reject deny/poor on submit · reject `mock://` imageUrl · **no** auto-confirm · confirm/dismiss explicit · pin local note-only |
| **UI-FN** | **PASS** | Route `/tai-san/ai` · Pattern B `disabled={detecting}` only · `validationAttempted` banner photo+route+GPS · SearchInput `ROAD_ROUTE_LOOKUP_CONFIG` · no seed · miss=`--` · DES-LEAVE `LeaveConfirmModal` · score SHOW RO % · DES-GRID N/A phone · QA S0/S1/QA-20 Aligned · Must 0 |
| **BE-FN** | **PASS** (N/A new) | Step 4b skip · reuse Mobile.Bff AiVision Live · no migration / no new controller · T-BE N/A · Dev verify build PASS |

## Findings detail

### QUERY
- Endpoint SSOT khớp SA/dev/qa compact: uploads init+PUT+complete · detect-assets · nearby · get/{id} · confirm · dismiss · road-routes/search · sessions.
- Detect nav HITL chỉ khi Draft `created[0].id` — không confirm ngầm.
- Lookup soft-fail (empty routes/trips) không fake seed.

### SEC
- Pattern B: GPS deny/poor **không** khóa CTA trước; Acc>30 / deny → banner+inline sau `validationAttempted`.
- Upload rejects invalid/`mock://` trước detect.
- Confirm/dismiss đi BFF có auth client · busy-only disable.

### UI-FN
- Detect: photo* · SearchInput route* · trip opt · nearby warn · Cancel→Hub · Detect always-on except detecting.
- HITL: bind Draft · score % RO · pin drag local · confirm/dismiss → Hub.
- Leave dirty: in-app modal (DES-LEAVE) — không `window.confirm`.
- QA capture_aai S0/S1/QA-20 PASS · `searchInput=true` · Acc 12.

### BE-FN
- Không diff API mới so với real-data §A+§B · DOMAIN-MAP cite OK · **cấm** ERP.*.

## Non-blocking debt (carry)

| id | note |
|----|------|
| DEBT-PIN | pin lat/lng local → note string only · no PUT candidate GPS (Dev/Design) |
| DEBT-SCORE | score SHOW không gate CTA (Design SCORE-01) |
| GAP-QA-E2E-STOCK-PORT | stock yarn e2e-qa expects `:5101` · Live `:5111` · capture_aai PASS |
| GAP-HITL-SMOKE | HITL/confirm/dismiss WAIVE smoke (needs Draft id) |

## Hash / scope

- `contentHash` khớp chain compact priors → **hash skip** re-scan control-hint/real-data.
- Prior review (`task_5065b058` · `new_page` · hash `6f74282b…`) **superseded** by this `edit_page` delta review.
- changeScope=`edit_page` · packKind=`list` · demo N/A.
- **Cấm** e2e/build ở role này (VERIFY roleOnly=review).

## review_confirm

`approve` · autoApprove=ON · STATUS step 6 → **confirmed** · pipeline complete (QA e2e already done).
