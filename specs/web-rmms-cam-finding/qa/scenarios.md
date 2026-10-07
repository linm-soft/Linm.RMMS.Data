# QA — Scenarios — web-rmms-cam-finding

> Status: **PASS** · e2eQa=ON · task `task_ab322d01` · 2026-10-01T00:53:06.068Z  
> Role: `qa` · packKind=`list` · changeScope=`edit_page`  
> runtimeUrl product=`/m/phat-hien/:sessionId*` · mfeStdUrl alias `/web-rmms-cam-finding` → Navigate product  
> Screens: `specs/web-rmms-cam-finding/qa/screens/{S0,S1,QA-20}.png` · `manifest.json` ok=true · method=`_capture_cam_finding.mjs`

| | |
|--|--|
| Feature | `web-rmms-cam-finding` |
| Title | Camera phiếu tuần kiểm và SLA |
| Role | `qa` |
| Runtime | docker compose (WebService) + Mobile `yarn start:std` :9301 · Playwright phone 430 |

## Environment

| Item | Value |
|------|-------|
| Docker | `D:/AI-QLBD/Linm.RMMS.WebService` · api · Mobile.Bff healthy · **cấm** kill worker |
| MFE | reuse node webpack `:9301` · `--skip-start` · **cấm** GAP-QA-E2E-KILL-01 |
| Creds | `e2e.local.json` · principal Admin (view · không tuanKiem) |
| Stock CLI | `yarn e2e-qa --url=…/web-rmms-cam-finding --skip-start` → **FAIL soft** S0 `GAP-QA-E2E-BLANK-01` |
| Custom | `_capture_cam_finding.mjs` · SPA fulfill · bootstrap `/m/tuan-kiem/mo-dot` · product `/m/phat-hien/:id` |

## Cases

| id | Zone | Route | Assert (AC / T-QA-*) | Result | PNG sha12 |
|----|------|-------|----------------------|--------|-----------|
| S0 | FIND-L | `/m/phat-hien/{sessionId}` | List Live · `roleGateBanner` view · **không** `fabCreate` · **không** `assignCta` · feature=`web-rmms-cam-finding` | **PASS** | `6a0e45749156` |
| S1 | FIND-F | `/m/phat-hien/{sessionId}/moi` | Form · `dueAt` · hint TT41 · GPS Pattern B coords · banner RO · **không** assignCta | **PASS** | `84f84ecf6708` |
| QA-20 | FIND-F (empty list) | `/m/phat-hien/{sessionId}/moi` + hangMuc/due scroll | Empty list → no FIND-D · assert **không** assignCta · dueAt/TT41 · PNG ≠ S0/S1 | **PASS** | `be49bc8afe18` |

## Observations

- Principal Admin → `camFindingAccess=view` · roleGateBanner «chỉ tuần kiểm…» · FAB ẩn — AC role PASS.
- `assignCta` **REMOVED** trên FIND-L/F (hasAssign=false) — T-QA-FIND-ASSIGN PASS.
- dueAt + «Gợi ý TT41 theo hạng mục — có thể sửa» trên FIND-F — T-QA-FIND-DUE PASS (view form vẫn render field).
- GPS Pattern B: `[21.028500, 105.854200]` · không fake blank.
- Soft: FIND-D / slaBadge runtime cần ≥1 finding card — list empty sau bootstrap → QA-20 soft on FIND-F surface (code cite `deriveSlaBadge` · DetailPage).
- Soft write/recheck/leaveConfirm dirty: cần principal `TUAN-DUONG` / tuanKiem.
- Stock alias S0 BLANK → custom product deep-link **PASS** · SHA distinct · không DUP/BLANK/CRASH.
- DES-GRID / filter Kind B: **WAIVE** phone.

## T-QA-* checklist

| id | Status | Notes |
|----|--------|-------|
| T-QA-FIND-01 | **PASS** | S0 FIND-L + roleGate · no FAB |
| T-QA-FIND-DUE | **PASS** | S1 dueAt + TT41 hint |
| T-QA-FIND-SLA | **SOFT** | client derive cite · empty list no FIND-D runtime |
| T-QA-FIND-ASSIGN | **PASS** | assignCta absent S0/S1/QA-20 |
| T-QA-FIND-GPS | **PASS** | Pattern B coords on FIND-F |
| T-QA-FIND-WRITE | **SOFT** | cần user tuần kiểm |
| T-QA-LEAVE | **SOFT** | code-cite LeaveConfirm · dirty path needs write principal |
| T-QA-FILTER-* | **WAIVE** | Kind B phone · DES-GRID N/A |

## Cấm / gates

- **cấm** `phase=done` · ERP.* · static-only PASS · taskkill node/yarn rộng
- stock alias BLANK documented soft · custom PASS
- next: `/agent-review` · roleOnly stop (GAP-PKT-ROLE-01)

## Artifacts

- `qa/screens/S0.png` · `S1.png` · `QA-20.png`
- `qa/screens/manifest.json` · `_capture_cam_finding.mjs`
- handoff: `handoff/qa-compact.md`

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
