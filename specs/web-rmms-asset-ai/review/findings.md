# Review — Findings — web-rmms-asset-ai

> Status: **done** · writtenAt `2026-09-25T16:25:00.000Z` · task `task_5065b058`  
> skillVersion: `2026.09.05.03` · packKind: `list` · autoApprove: ON  
> contentHash: `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` (unchanged · hash skip analy)  
> review_confirm: **approve** · nextSlash: *(pipeline complete · e2e already QA)*

| | |
|--|--|
| Feature | `web-rmms-asset-ai` |
| Title | Camera AI và HITL |
| Role | `review` · `/agent-review` |
| changeScope | `new_page` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| Prior | data_analy→po→design→sa→team_lead→dev→qa **confirmed** |

## Verdict

**PASS** · `review_confirm=approve` · **không** `fix_gaps` · P0/Must = 0

## Gates (QUERY / SEC / UI-FN / BE-FN)

| Gate | Result | Evidence |
|------|--------|----------|
| **QUERY** | **PASS** | BFF paths Live only: `ai-vision/uploads|detect-assets|asset-candidates/**` · `integration/road-routes/search` · `patrol/sessions` · FormMode Detect→Draft→HITL Confirm\|Dismiss · **cấm** ERP.* / invent AssetAiController · DOMAIN-MAP row `web-rmms-asset-ai` → AiVision |
| **SEC** | **PASS** | `hasAccessToken` gate Detect+HITL · GPS geolocation Acc≤30 · reject deny/poor · reject `mock://` imageUrl · **no** auto-confirm after detect · confirm/dismiss explicit HITL · pin local note-only (no silent GPS PUT) |
| **UI-FN** | **PASS** | Route `/web-rmms-asset-ai` + HITL `/hitl/:id` · alias `/asset/ai` · zones AA-00…14 · `useFormOptions('web-rmms-asset-ai')` · DES-LEAVE `useFormLeaveGuard`+`LeaveConfirmModal` · score SHOW RO % · DES-GRID N/A phone · QA S0/S1/QA-20 Must 0 |
| **BE-FN** | **PASS** (N/A new) | Step 4b skip · reuse Mobile.Bff AiVision Live · no migration / no new controller · T-BE N/A |

## Findings detail

### QUERY
- Endpoint SSOT khớp SA/dev/qa compact: init+PUT+complete · detect-assets · nearby · get/{id} · confirm · dismiss.
- Detect nav HITL chỉ khi `created[0].id` Draft — không confirm ngầm.
- Lookup soft-fail (empty routes/trips) không fake data.

### SEC
- Không type-in GPS; Acc>30 → `poor` blocks `canDetect`.
- Upload rejects invalid/mock URL trước detect.
- Confirm requires `assetTypeCode` từ Draft; dismiss/confirm đi BFF có auth client.

### UI-FN
- Detect: photo* · RouteId* · trip opt · nearby warn · Cancel→Hub · Detect→HITL replace.
- HITL: bind Draft · score % RO · pin drag local · confirm/dismiss → Hub.
- Leave dirty: in-app modal (DES-LEAVE) — không `window.confirm`.

### BE-FN
- Không diff API mới so với real-data §A+§B · DOMAIN-MAP cite OK.

## Non-blocking debt (carry)

| id | note |
|----|------|
| DEBT-PIN | pin lat/lng local → note string only · no PUT candidate GPS (Dev/Design) |
| DEBT-SCORE | score SHOW không gate CTA (Design SCORE-01) |
| DEBT-QA-STOCK | stock yarn e2e-qa DUP soft · capture_aai PASS (QA) |
| DEBT-LOOKUP | LOOKUP_HINT_KEYS / HITL smoke optional |

## Hash / scope

- `contentHash` khớp chain compact priors → **hash skip** re-scan control-hint/real-data.
- changeScope=`new_page` · packKind=`list` · demo N/A.
- **Cấm** e2e/build ở role này (VERIFY roleOnly=review).

## review_confirm

`approve` · autoApprove=ON · STATUS step 6 → **confirmed** · pipeline complete (QA e2e already done).
