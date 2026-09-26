# QA — scenarios — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `list` (phone hub · Kind B **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/web-rmms-attendance` |
| mfeStdRoute | `/web-rmms-attendance` |
| productRoute | `/field/attendance*` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · API `:5111` · **cấm ERP.*** |
| taskId | `task_5eed79c4` |
| prior Dev | implement **confirmed** · handoff `handoff/dev-compact.md` |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | `e2e runtime · yarn start:std :9301 (reuse · no kill) + docker + playwright` · cases `S0,S1,QA-20` · LoginSheet · viewport **430** · geolocation Acc=12 · SPA deep-link fulfill |
| updatedAt | `2026-09-26T02:00:00.000Z` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Guest mở Chấm công | ATT-00/01/08 · DES-MOB-ATT · guestGate «Đăng nhập để dùng Chấm công.» · CTA Đăng nhập · **0** crash | **PASS** | ![S0](screens/S0.png) |
| S1 | Staff hub sau LoginSheet | `#att-hero` · `#btn-checkin`/`#btn-report` · GPS ±12 m · Ca route · empty 7d «Chưa có lịch sử» · **0** crash | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Login overlay từ Home guest | SH-02 · `#loginUser`/`#loginPass`/`#loginSubmit` · Hủy/Đăng nhập · **0** crash | **PASS** | ![QA-20](screens/QA-20.png) |

## Scenario / Expect / Actual (visual + DOM dump)

| Case | Expect (design/PO) | Actual (PNG + DOM dump) | Verdict |
|------|--------------------|-------------------------|---------|
| S0 | Guest gate trước Live | zones ATT-00/01/08 · DES-MOB-ATT · «Đăng nhập để dùng Chấm công.» · guestGate=true | **Aligned** |
| S1 | Hub hero + GPS + check-in · empty/[] | ATT-02/03 · btnCheckIn/btnReport · «Chưa chấm vào» · GPS `±12 m` · Ca `QL.1-LANGSON(BOT)` · empty «Chưa có lịch sử chấm công» · **0** demoDays | **Aligned** |
| QA-20 | Shell login sheet | SH-02 · «Tài khoản / Mật khẩu / Hủy / Đăng nhập» · `#loginUser`/`#loginPass`/`#loginSubmit` | **Aligned** |

## T-QA-*

| id | Scope | Result |
|----|-------|--------|
| T-QA-CRUD-01 | Live GET patrol/attendance-logs · staff hub empty/[] | **PASS** (S1 empty history live · guest no Live) |
| T-QA-ATT-01 | Hub+chain e2e · guest→login→staff hub | **PASS** (S0→QA-20→S1) |
| T-QA-GPS-01 | Acc mock · deny=no POST path | **PASS** (mock Acc=12 · hero GPS chip · canCheckIn path) · deny headed not forced this smoke |
| T-QA-FILTER-01/02 | LinErpListFilterBar | **WAIVE** (phone hub · no list filter) |
| T-QA-VI-ENC-01 | Title/nav UTF-8 | **PASS** |
| T-QA-HIST / Leave | toast · 0 native alert | **PASS** (code Dev) · leave headed not forced this smoke |

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** · api healthy `:5111` · Mobile.Bff `:5202` healthy |
| yarn start:std | **PASS** · port **9301** (already up · reuse · **cấm** kill worker) |
| yarn build | **PASS** (production · 3 size warnings only) |
| yarn e2e-qa stock | **FAIL soft** — playwright missing in screens cwd · stock `_capture.mjs` resolve |
| capture `_capture_att.mjs` | **PASS** · S0/S1/QA-20 · LoginSheet + geolocation · deep-link fulfill |
| PNG distinct | S0=`4DEA25CAFDD6…` · S1=`318A986F6AF0…` · QA-20=`409081393888…` · **0** blank/crash/DUP |
| visual / DOM | **Aligned** · Must **0** |
| **cấm** phase=done | yes · next Review |
| **cấm** GAP-QA-E2E-KILL-01 | yes · no taskkill / Stop-Process node\|yarn |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-STOCK-PLAYWRIGHT | soft | stock CLI needs junction `node_modules/playwright` → AI-AutoCode · used `_capture_att.mjs` |
| GAP-QA-E2E-HISTORY-FALLBACK | soft | WDS deep-link HTTP 404 · capture fulfills document with `/` index |
| GAP-QA-E2E-STOCK-DUP | soft | stock same URL guest for S0/S1 without login — capture distinguishes via LoginSheet |
| UNCLEAR-EMPTY-COPY | soft | live empty copy OK in S1 · cấm demoDays held |
| Dev nav chrome | soft | standalone `showDevNav` in shots · ATT zones still present |

**P0:** none — handoff Review.

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `phase=review` · **cấm** `phase=done`.

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
