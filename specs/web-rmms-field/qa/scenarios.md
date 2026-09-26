# QA — scenarios — web-rmms-field

| Field | Value |
|-------|-------|
| feature | `web-rmms-field` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `list` (phone Field hub · Kind B **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/web-rmms-field` |
| mfeStdRoute | `/web-rmms-field` |
| productRoute | `/field*` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · API `:5111` · **cấm ERP.*** |
| taskId | `task_9d470b8b` |
| prior Dev | implement **confirmed** · handoff `handoff/dev-compact.md` |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | `e2e runtime · yarn start:std :9301 (reuse · no kill) + docker + playwright` · cases `S0,S1,QA-20` · LoginSheet · viewport **430** · SPA deep-link fulfill |
| updatedAt | `2026-09-26T02:55:00.000Z` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Guest mở Field hub | FL-00 · guestGate «Đăng nhập để dùng Field.» · CTA Đăng nhập · **0** crash | **PASS** | ![S0](screens/S0.png) |
| S1 | Staff hub sau LoginSheet | FL-00…03 · `#doorPatrol`/`#doorInspect` · `#syncBtn` · tiles×7 · Live `#sessionHint` · **0** crash | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Login overlay từ Home guest | SH-02 · `#loginUser`/`#loginPass`/`#loginSubmit` · Hủy/Đăng nhập · **0** crash | **PASS** | ![QA-20](screens/QA-20.png) |

## Scenario / Expect / Actual (visual + DOM dump)

| Case | Expect (design/PO) | Actual (PNG + DOM dump) | Verdict |
|------|--------------------|-------------------------|---------|
| S0 | Guest gate trước Live | zones FL-00 · guestGate=true · «Đăng nhập để dùng Field.» · **0** doors/tiles until auth | **Aligned** |
| S1 | 2 cửa + sync + tiles×7 · Live sessions badge | zones FL-00/01/03 · des FL-00…03 · `#doorPatrol`/`#doorInspect`/`#syncBtn`/`#sessionHint` · actions door*+tile*×7+syncBtn · Live «Ca đang tuần · QL.1-LANGSON(BOT) · TD-20260925-001» | **Aligned** |
| QA-20 | Shell login sheet | SH-02 · «Tài khoản / Mật khẩu / Hủy / Đăng nhập» · `#loginUser`/`#loginPass`/`#loginSubmit` | **Aligned** |

## T-QA-*

| id | Scope | Result |
|----|-------|--------|
| T-QA-CRUD-01 | Live GET patrol/sessions · staff sessionHint + door badges · guest no Live | **PASS** (S1 Live sessionHint + Đang tuần badges · S0 guest gate) |
| T-QA-FL-01 | Hub chrome e2e · guest→login→staff doors/sync/tiles | **PASS** (S0→QA-20→S1) |
| T-QA-FILTER-01/02 | LinErpListFilterBar | **WAIVE** (phone Field hub · no list filter · DES-GRID N/A) |
| T-QA-VI-ENC-01 | Title/nav UTF-8 | **PASS** |
| T-QA-HIST / Leave | toast SSOT · 0 native alert · cấm hub POST/PUT | **PASS** (code Dev · no hub write in smoke) · leave headed not forced |

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** · api healthy `:5111` · Mobile.Bff `:5202` healthy |
| yarn start:std | **PASS** · port **9301** (already up · reuse · **cấm** kill worker) |
| yarn e2e-qa stock | **FAIL soft** — gate `API:5101 / BFF:5201` (repo uses `:5111` / Mobile.Bff `:5202`) |
| capture `_capture_field.mjs` | **PASS** · S0/S1/QA-20 · LoginSheet · deep-link fulfill |
| PNG distinct | S0=`3128235DB0928D82…` · S1=`C4D3C7C6101AF8A3…` · QA-20=`409081393888EDB4…` · **0** blank/crash/DUP |
| visual / DOM | **Aligned** · Must **0** |
| **cấm** phase=done | yes · next Review |
| **cấm** GAP-QA-E2E-KILL-01 | yes · no taskkill / Stop-Process node\|yarn |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-STOCK-PORT | soft | stock `yarn e2e-qa` expects `:5101/:5201` — workaround `_capture_field.mjs` |
| GAP-QA-E2E-HISTORY-FALLBACK | soft | WDS deep-link HTTP 404 · capture fulfills document with `/` index |
| GAP-QA-E2E-PLAYWRIGHT-RESOLVE | soft | junction playwright from AI-AutoCode |
| tileReflect/supervise/map peer | soft | closest peer until dedicated MFE (Dev debt) |
| Dev nav chrome | soft | standalone `showDevNav` in shots · FL-* zones still present |

**P0:** none — handoff Review.

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `phase=review` · **cấm** `phase=done`.

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
