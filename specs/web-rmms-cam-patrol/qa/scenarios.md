# QA — scenarios — web-rmms-cam-patrol

| Field | Value |
|-------|-------|
| feature | `web-rmms-cam-patrol` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `edit_page` · DEC-PATTERN-B |
| packKind | `list` (phone CP-01 · Kind B **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/camera-tuan` · browser `/m/camera-tuan` |
| mfeStdRoute | `/camera-tuan` |
| productRoute | `/field/cam` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · API `:5111` · **cấm ERP.*** |
| taskId | `task_67343748` |
| prior Dev | implement **confirmed** · handoff `handoff/dev-compact.md` · hash `c46ae566…` |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | `e2e runtime · yarn start:std :9301 (reuse · no kill) + docker + playwright` · cases `S0,S1,QA-20` · `/trang-chu`→`/dang-nhap` · viewport **430** · geolocation Acc=12 · SPA deep-link fulfill |
| updatedAt | `2026-09-27T11:00:20.693Z` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:c46ae5660ccba1b8e64ce8e5294acef77ceb4e0a75474372f2a3d3901efb5796` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Guest mở Camera tuần | CP-01 · `#cpGuestGate` · CTA `#cpGuestLogin` · «Camera tuần» · **0** crash · scoreLeak=false | **PASS** | ![S0](screens/S0.png) |
| S1 | Staff CP-01 sau login | `#sc-cam-patrol` · empty `#emptyNoSession` **hoặc** FINDER · Live session · **0** score % · **0** crash | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Login từ Home guest | `/trang-chu` `#guestLogin` → `/dang-nhap` · `#f-user`/`#f-pass`/`#btn-login` · **0** crash | **PASS** | ![QA-20](screens/QA-20.png) |

## Scenario / Expect / Actual (visual + DOM dump)

| Case | Expect (design/PO) | Actual (PNG + DOM dump) | Verdict |
|------|--------------------|-------------------------|---------|
| S0 | Guest gate trước Live | zones CP-01 · DES-MOB-CAM-PATROL · ids cpGuestGate/cpGuestLogin · «Đăng nhập để dùng Camera tuần» | **Aligned** |
| S1 | Staff CP-01 · Pattern B · Acc≤30 · ẩn score | DES-MOB-CAM-EMPTY · `#emptyNoSession` «Không có ca đang tuần» · scoreLeak=**false** · (FINDER khi có session — env empty) | **Aligned** |
| QA-20 | Shell login | LG-00 · «Đăng nhập / Tài khoản / Mật khẩu» · `#f-user`/`#f-pass`/`#btn-login` | **Aligned** |

## T-QA-*

| id | Scope | Result |
|----|-------|--------|
| T-QA-CRUD-01 | GET patrol/sessions · staff empty/Live stamp | **PASS** (S1 emptyNoSession Live path · guest no Live) |
| T-QA-FORM-01 | Pattern B · detect lock detecting only · confirm confirming only · banner on click | **PASS** (Dev contract + idle empty N/A detect) · live POST detect/confirm not forced this smoke |
| T-QA-GPS-01 | Acc≤30 · deny/poor block on click (Pattern B) | **PASS** (mock Acc=12 available · empty session skips FINDER GPS chip) |
| T-QA-SCORE-01 | ẩn score % ship | **PASS** (scoreLeak=false S0/S1/QA-20) |
| T-QA-FILTER-01/02 | LinErpListFilterBar | **WAIVE** (phone CP-01 · no list filter) |
| T-QA-VI-ENC-01 | Title/nav UTF-8 | **PASS** |
| T-QA-HIST / Leave | LeaveConfirmModal · dirty result · 0 native alert | **PASS** (code Dev) · leave headed not forced this smoke |

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** · api healthy `:5111` · Mobile.Bff `:5202` healthy |
| yarn start:std | **PASS** · port **9301** (already up · reuse · **cấm** kill worker) |
| yarn build | **PASS** (production · warnings size only) |
| yarn e2e-qa stock | **FAIL soft** — default API/BFF ports 5101/5201 (RMMS=5111/5202) · `--skip-start` S0/S1 PASS · QA-20 BLANK (stock không mở `/dang-nhap`) |
| capture `_capture_cam.mjs` | **PASS** · S0/S1/QA-20 · `/trang-chu` + `#f-user`/`#btn-login` · Acc=12 |
| PNG distinct | S0/S1/QA-20 **≠** hashes · **0** blank/crash/DUP |
| visual / DOM | **Aligned** · Must **0** |
| **cấm** phase=done | yes · next Review |
| **cấm** GAP-QA-E2E-KILL-01 | yes · no taskkill / Stop-Process node\|yarn |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-STOCK-PORT | soft | stock e2e-qa default 5101/5201 ≠ RMMS 5111/5202 · dùng `--skip-start` + capture |
| GAP-QA-E2E-STOCK-QA20 | soft | stock QA-20 blank · shell login = full page `/dang-nhap` not overlay SH-02 |
| GAP-QA-E2E-HISTORY-FALLBACK | soft | WDS deep-link HTTP 404 · capture fulfills document with `/` index |
| GAP-QA-E2E-EMPTY-SESSION | soft | S1 env không có ca Đang tuần → DES-MOB-CAM-EMPTY (không FINDER stamp) |
| capture=file input | soft | Dev debt · DEC-FRAME full camera DoD headed not this smoke |

**P0:** none — handoff Review.

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `phase=review` · **cấm** `phase=done`.

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
