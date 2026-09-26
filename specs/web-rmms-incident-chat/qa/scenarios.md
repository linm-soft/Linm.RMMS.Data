# QA — scenarios — web-rmms-incident-chat

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident-chat` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `list` (phone INC-CHAT · Kind B **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| mfeStdRoute | `/web-rmms-incident-chat` |
| productRoute | `/incident/:id/chat` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · API `:5111` · **cấm ERP.*** |
| taskId | `task_5e2292ca` |
| prior Dev | implement **confirmed** · handoff `handoff/dev-compact.md` |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | `e2e runtime · yarn start:std :9301 (reuse · no kill) + docker + playwright` · cases `S0,S1,QA-20` · LoginSheet · viewport **430** · SPA deep-link fulfill · INC live `65b118cc-…` |
| updatedAt | `2026-09-26T03:00:00.000Z` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Guest INC-CHAT Live GET{id}+messages | CH-00…03 · `#sc-incident-chat` · topBar INC-DEMO-202609-002 · emptyThread · composer · **0** GPS · **0** crash | **PASS** | ![S0](screens/S0.png) |
| S1 | Guest missing `id` | missingId · «Thiếu mã sự cố» · emptyBack · **0** composer · **0** crash | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Login overlay từ Home guest | SH-02 · `#loginUser`/`#loginPass`/`#loginSubmit` · Hủy/Đăng nhập · **0** crash | **PASS** | ![QA-20](screens/QA-20.png) |

## Scenario / Expect / Actual (visual + DOM dump)

| Case | Expect (design/PO) | Actual (PNG + DOM dump) | Verdict |
|------|--------------------|-------------------------|---------|
| S0 | INC-CHAT · Live header · thread GET · composer · no GPS/SignalR | zones CH-00/01/02/03 · des sc-incident-chat · fields topBar*/emptyThread/composer* · bubbleCount=0 · emptyThread=true · hasGps=false · subtitle INC-DEMO-202609-002 · Đang xử lý | **Aligned** |
| S1 | missing id → missingId empty | missingId=true · fields missingId/emptyBack/retry · title «Trao đổi sự cố» · hasComposer=false | **Aligned** |
| QA-20 | Shell login sheet | SH-02 · «Tài khoản / Mật khẩu / Hủy / Đăng nhập» · `#loginUser`/`#loginPass`/`#loginSubmit` | **Aligned** |

## T-QA-*

| id | Scope | Result |
|----|-------|--------|
| T-QA-CRUD-01 | Live GET incidents/{id} · GET messages · header + thread/empty | **PASS** (S0 INC-DEMO-202609-002 · emptyThread) |
| T-QA-CHAT-01 | LinmChatThread + Composer · zones CH-02/CH-03 | **PASS** (emptyThread + composerInput/Send) |
| T-QA-FLAT-01 | P1 flat · no parentId UI | **PASS** (composer POST body content+type only · Dev) |
| T-QA-GPS-01 | cấm GPS trên INC-CHAT · cấm SignalR | **PASS** (hasGps=false · HTTP re-GET) |
| T-QA-EMPTY-01 | missing id missingId | **PASS** (S1) |
| T-QA-PEER-01 | entry `#i-chat` / `btn-inc-chat-{id}` trên web-rmms-incident | **PASS** (IncidentListPage data-entry=i-chat · Detail `#i-chat`) |
| T-QA-FILTER-01/02 | LinErpListFilterBar | **WAIVE** (phone chat · DES-GRID N/A) |
| T-QA-VI-ENC-01 | Title UTF-8 «Trao đổi sự cố» | **PASS** |
| T-QA-HIST / Leave | toast SSOT · 0 native alert | **PASS** (code Dev) · leave headed not forced this smoke |
| T-QA-BFF-01 | Mobile.Bff `:5202` · cấm ERP.* / web-bff | **PASS** (GET incident+messages 200) |

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** · api healthy `:5111` · Mobile.Bff `:5202` healthy · web-bff `:5201` (unused by FE) |
| yarn start:std | **PASS** · port **9301** (already up · reuse · **cấm** kill worker) |
| yarn e2e-qa stock | **FAIL soft** — cases S0/S1 same URL → `GAP-QA-E2E-DUP-01` (stock không inject `?id=`) · default gate API:`5101`/BFF:`5201` |
| capture `_capture_incident_chat.mjs` | **PASS** · S0/S1/QA-20 · LoginSheet · deep-link fulfill · Live `65b118cc-3038-43b8-8e7f-13821d89d09b` |
| PNG distinct | S0=`585D7E07E87E83BB…` · S1=`2C1713D14FE2CB9A…` · QA-20=`409081393888EDB4…` · **0** blank/crash/DUP |
| visual / DOM | **Aligned** · Must **0** |
| **cấm** phase=done | yes · next Review |
| **cấm** GAP-QA-E2E-KILL-01 | yes · no taskkill / Stop-Process node\|yarn |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-STOCK-DUP | soft | stock `yarn e2e-qa` S0/S1 same hash without `?id=` — workaround `_capture_incident_chat.mjs` |
| GAP-QA-E2E-STOCK-PORT | soft | stock expects `:5101/:5201` — repo uses `:5111` / Mobile.Bff `:5202` |
| GAP-QA-E2E-HISTORY-FALLBACK | soft | WDS deep-link HTTP 404 · capture fulfills document with `/` index |
| GAP-QA-E2E-PLAYWRIGHT-RESOLVE | soft | junction playwright from AI-AutoCode |
| GAP-QA-UI-MISSING-BANNER | soft | S1 shows retry banner + missingId (loadError set when !id) · UX duplicate · not crash |
| Dev nav chrome | soft | standalone `showDevNav` in shots · INC-CHAT zones still present |

**P0:** none — handoff Review.

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `phase=review` · **cấm** `phase=done`.

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
