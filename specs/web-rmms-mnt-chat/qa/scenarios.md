# QA — scenarios — web-rmms-mnt-chat

| Field | Value |
|-------|-------|
| feature | `web-rmms-mnt-chat` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `list` (phone WORK-C · Kind B **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mnt-chat` |
| mfeStdRoute | `/web-rmms-mnt-chat` |
| productRoute | `/work/chat?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · API `:5111` · **cấm ERP.*** |
| taskId | `task_2811745d` |
| prior Dev | implement **confirmed** · handoff `handoff/dev-compact.md` |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | `e2e runtime · yarn start:std :9301 (reuse · no kill) + docker + playwright` · cases `S0,S1,QA-20` · LoginSheet · viewport **430** · SPA deep-link fulfill · WO live `2a0b6ead-…` |
| updatedAt | `2026-09-25T23:42:00.000Z` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Guest WORK-C Live GET{id}+messages | CH-00…03 · `#sc-mnt-chat` · topBar WO-DEMO-202609-004 · thread 1× bubbleTheirs · composer · **0** GPS · **0** crash | **PASS** | ![S0](screens/S0.png) |
| S1 | Guest missing `id` | missingId · «Thiếu mã công việc» · emptyBack · **0** composer · **0** crash | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Login overlay từ Home guest | SH-02 · `#loginUser`/`#loginPass`/`#loginSubmit` · Hủy/Đăng nhập · **0** crash | **PASS** | ![QA-20](screens/QA-20.png) |

## Scenario / Expect / Actual (visual + DOM dump)

| Case | Expect (design/PO) | Actual (PNG + DOM dump) | Verdict |
|------|--------------------|-------------------------|---------|
| S0 | WORK-C · Live header · thread GET · composer · no GPS/SignalR | zones CH-00/01/02/03 · des sc-mnt-chat · fields topBar*/threadItems/bubbleTheirs/composer* · bubbleCount=1 · hasGps=false · subtitle WO-DEMO-202609-004 · Đang thực hiện | **Aligned** |
| S1 | missing id → missingId empty | missingId=true · fields missingId/emptyBack/retry · title «Trao đổi công việc» · hasComposer=false | **Aligned** |
| QA-20 | Shell login sheet | SH-02 · «Tài khoản / Mật khẩu / Hủy / Đăng nhập» · `#loginUser`/`#loginPass`/`#loginSubmit` | **Aligned** |

## T-QA-*

| id | Scope | Result |
|----|-------|--------|
| T-QA-CRUD-01 | Live GET work-orders/{id} · GET messages · header + thread | **PASS** (S0 WO-DEMO-202609-004 · 1 bubble) |
| T-QA-CHAT-01 | LinmChatThread + Composer · zones CH-02/CH-03 | **PASS** (threadItems + composerInput/Send) |
| T-QA-FLAT-01 | P1 flat · no parentId UI | **PASS** (composer POST body content+type only · Dev) |
| T-QA-GPS-01 | cấm GPS trên WORK-C · cấm SignalR | **PASS** (hasGps=false · HTTP re-GET) |
| T-QA-EMPTY-01 | missing id missingId | **PASS** (S1) |
| T-QA-PEER-01 | entry `#i-chat` / `action.chat` trên web-rmms-work | **PASS** (WorkListPage data-des-id=i-chat) |
| T-QA-FILTER-01/02 | LinErpListFilterBar | **WAIVE** (phone chat · DES-GRID N/A) |
| T-QA-VI-ENC-01 | Title UTF-8 «Trao đổi công việc» | **PASS** |
| T-QA-HIST / Leave | toast SSOT · 0 native alert | **PASS** (code Dev) · leave headed not forced this smoke |
| T-QA-BFF-01 | Mobile.Bff `:5202` · cấm ERP.* / web-bff | **PASS** (messages GET 200) |

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** · api healthy `:5111` · Mobile.Bff `:5202` healthy · web-bff `:5201` (unused by FE) |
| yarn start:std | **PASS** · port **9301** (already up · reuse · **cấm** kill worker) |
| yarn e2e-qa stock | **FAIL soft** — gate `API:5101 / BFF:5201` (repo uses `:5111` / Mobile.Bff `:5202`) |
| capture `_capture_mnt_chat.mjs` | **PASS** · S0/S1/QA-20 · LoginSheet · deep-link fulfill |
| PNG distinct | S0=`28AD3C1C495B9556…` · S1=`DA60DBDEFD807139…` · QA-20=`409081393888EDB4…` · **0** blank/crash/DUP |
| visual / DOM | **Aligned** · Must **0** |
| **cấm** phase=done | yes · next Review |
| **cấm** GAP-QA-E2E-KILL-01 | yes · no taskkill / Stop-Process node\|yarn |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-STOCK-PORT | soft | stock `yarn e2e-qa` expects `:5101/:5201` — workaround `_capture_mnt_chat.mjs` |
| GAP-QA-E2E-HISTORY-FALLBACK | soft | WDS deep-link HTTP 404 · capture fulfills document with `/` index |
| GAP-QA-E2E-PLAYWRIGHT-RESOLVE | soft | junction playwright from AI-AutoCode |
| GAP-QA-UI-MISSING-BANNER | soft | S1 shows retry banner + missingId (loadError set when !id) · UX duplicate · not crash |
| Dev nav chrome | soft | standalone `showDevNav` in shots · WORK-C zones still present |

**P0:** none — handoff Review.

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `phase=review` · **cấm** `phase=done`.

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
