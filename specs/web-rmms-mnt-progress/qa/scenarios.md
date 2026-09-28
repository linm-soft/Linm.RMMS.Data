# QA — scenarios — web-rmms-mnt-progress

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-progress` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `edit_page` · Pattern B (SUBMIT-VALIDATE) |
| packKind | `list` (phone WORK-P · Kind B **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/m/cong-viec/tien-do` |
| mfeStdRoute | `/cong-viec/tien-do` · **cấm** `/web-rmms-mnt-progress` as std |
| productRoute | `/work/progress?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · API `:5111` · **cấm ERP.*** |
| taskId | `task_32c507a0` |
| prior Dev | implement **confirmed** · handoff `handoff/dev-compact.md` |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | `e2e runtime · yarn start:std :9301 (reuse · no kill) + docker + playwright` · cases `S0,S1,QA-20` · LG-00 login · viewport **430** · SPA deep-link fulfill · WO live `2a0b6ead-…` · BFF proxy cloud→`:5202` |
| updatedAt | `2026-09-27T14:08:01.258Z` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:544d007b5b40b3f3b71bb94aa78e804b2342af0c6eb7ec1edcea4b76b1b28080` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Staff WORK-P Live GET{id} + GPS | WORK-P · `#sc-mnt-progress` · woHeader WO-DEMO-202609-004 · GPS OK · CTAs **enabled** (`disabled=saving` only) · `capture=environment` · **0** crash | **PASS** | ![S0](screens/S0.png) |
| S1 | Staff WORK-P + `deny=1` · click CTA | Pattern B · CTAs **enabled** · `#validationBanner` on click · keys `mnt.progress.gps.*` · **0** fake coords · **0** crash | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Login từ Home guest CTA | LG-00 · `/m/dang-nhap` · form Đăng nhập · **0** crash | **PASS** | ![QA-20](screens/QA-20.png) |

## Scenario / Expect / Actual (visual + DOM dump)

| Case | Expect (design/PO Pattern B) | Actual (PNG + DOM dump) | Verdict |
|------|------------------------------|-------------------------|---------|
| S0 | WORK-P shell · Live header · GPS OK · CTAs on · capture=environment | zones WORK-P/WORK-P-GPS · des sc-mnt-progress · fields wo*/progressPercent/note/gps/photoLocalIds/submit* · ctaDisabled=false · captureAttr=environment | **Aligned** |
| S1 | GPS deny · CTAs stay on · banner after click | validationBanner visible · deny copy · ctaProgressDisabled=false · ctaCompleteDisabled=false | **Aligned** |
| QA-20 | Shell login | LG-00 · «Đăng nhập / Tài khoản / Mật khẩu» | **Aligned** |

## T-QA-*

| id | Scope | Result |
|----|-------|--------|
| T-QA-CRUD-01 | Live GET work-orders/{id} · header + % | **PASS** (S0 WO-DEMO-202609-004 · 60%) |
| T-QA-GPS-01 | Pattern B · deny → banner on click · CTAs enabled · cấm fake | **PASS** (S0 enabled · S1 banner + CTAs on) |
| T-QA-EDIT-01 | CTA `disabled={saving}` only | **PASS** (S0/S1 ctaDisabled=false) |
| T-QA-EDIT-02 | validationBanner on click · `mnt.progress.gps.*` | **PASS** (S1 bannerVisible) |
| T-QA-EDIT-03 | `capture="environment"` | **PASS** (S0/S1 captureAttr=environment) |
| T-QA-MEDIA-01 | photoLocalIds local · no MediaUrl body | **PASS** (field present · P1 hint) |
| T-QA-LABEL-01 | status list chrome via useFormOptions | **PASS** («Đang thực hiện») |
| T-QA-FILTER-01/02 | LinErpListFilterBar | **WAIVE** (phone form · DES-GRID N/A) |
| T-QA-VI-ENC-01 | Title UTF-8 «Cập nhật trạng thái» | **PASS** |
| T-QA-HIST / Leave | toast SSOT · 0 native alert | **PASS** (code Dev) · leave headed not forced this smoke |

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** · api healthy `:5111` · Mobile.Bff `:5202` healthy |
| yarn start:std | **PASS** · port **9301** (already up · reuse · **cấm** kill worker) |
| yarn e2e-qa stock | **FAIL soft** — gate `API:5101 / BFF:5201` (repo uses `:5111` / Mobile.Bff `:5202`) |
| capture `_capture_mnt_progress.mjs` | **PASS** · S0/S1/QA-20 · LG-00 · `/m/cong-viec/tien-do` · Pattern B · BFF proxy cloud→`:5202` |
| PNG distinct | S0/S1/QA-20 · **0** blank/crash/DUP |
| visual / DOM | **Aligned** · Must **0** |
| **cấm** phase=done | yes · next Review |
| **cấm** GAP-QA-E2E-KILL-01 | yes · no taskkill / Stop-Process node\|yarn |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-STOCK-PORT | soft | stock `yarn e2e-qa` expects `:5101/:5201` — workaround `_capture_mnt_progress.mjs` |
| GAP-QA-E2E-CLOUD-BFF | soft | baked build hits `rmms-mobile-bff.linm-soft.com` · capture proxies → `:5202` |
| GAP-QA-E2E-HISTORY-FALLBACK | soft | WDS deep-link HTTP 404 · capture fulfills document with `/` index |
| GAP-MEDIA Signed | carry | defer P2 · local preview only |

**P0:** none — handoff Review.

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `phase=review` · **cấm** `phase=done`.

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
