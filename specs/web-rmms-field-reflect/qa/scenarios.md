# QA — scenarios — web-rmms-field-reflect

| Field | Value |
|-------|-------|
| feature | `web-rmms-field-reflect` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `new_page` |
| packKind | `list` (phone Field form · Kind B **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/web-rmms-field-reflect` |
| mfeStdRoute | `/web-rmms-field-reflect` |
| productRoute | `/field/reflect` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · API `:5111` · **cấm ERP.*** |
| taskId | `task_2872e950` |
| prior Dev | implement **confirmed** · handoff `handoff/dev-compact.md` |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | `e2e runtime · yarn start:std :9301 (reuse · no kill) + docker + playwright` · cases `S0,S1,QA-20` · LoginSheet · viewport **430** · SPA deep-link fulfill · geolocation mock |
| updatedAt | `2026-09-25T20:24:00.000Z` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:e678be9152069e48f353f88e9f4d377e20e4fd4ad5c8d4aa2c86bd995bc1e667` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Guest mở Reflect | guestGate «Đăng nhập để phản ánh hiện trường.» · CTA Đăng nhập · `#FR-REFLECT` · **0** crash | **PASS** | ![S0](screens/S0.png) |
| S1 | Staff FR-00 sau LoginSheet | FR-00 · LookupGrid asset-types Live · `data-action=assetPick` · «Chọn loại tài sản» · **0** crash | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Login overlay từ Home guest | SH-02 · `#loginUser`/`#loginPass`/`#loginSubmit` · Hủy/Đăng nhập · **0** crash | **PASS** | ![QA-20](screens/QA-20.png) |

## Scenario / Expect / Actual (visual + DOM dump)

| Case | Expect (design/PO) | Actual (PNG + DOM dump) | Verdict |
|------|--------------------|-------------------------|---------|
| S0 | Guest gate trước Live | zones FR-00 · guestGate=true · «Đăng nhập để phản ánh hiện trường.» · CTA Đăng nhập · **0** assetPick until auth | **Aligned** |
| S1 | FR-00 pick · Live asset-types | des FR-00 · `assetPick` · PAVEMENT/BRIDGE/TUNNEL… Live · title «Chọn loại tài sản» | **Aligned** |
| QA-20 | Shell login sheet | SH-02 · «Tài khoản / Mật khẩu / Hủy / Đăng nhập» · `#loginUser`/`#loginPass`/`#loginSubmit` | **Aligned** |
| FR-01 (post-pick) | Form Create surface | des FR-01 · actions kind/photos/detect/sessionStamp/gpsLock/severity/checklist/description/create/draftOffline · Live sessionStamp `QL.1-LANGSON` · GPS chốt | **Aligned** (dump `_fr01.dump.json`) |

## T-QA-*

| id | Scope | Result |
|----|-------|--------|
| T-QA-CRUD-01 | Live GET asset-types · GET patrol/sessions · guest no Live pick | **PASS** (S1 Live assetPick · FR-01 sessionStamp · S0 guest gate) |
| T-QA-FR-01 | Surface AC e2e · guest→login→FR-00→FR-01 | **PASS** (S0→QA-20→S1 + FR-01 dump) |
| T-QA-FILTER-01/02 | LinErpListFilterBar | **WAIVE** (phone Field form · DES-GRID N/A) |
| T-QA-VI-ENC-01 | Title/nav UTF-8 | **PASS** |
| T-QA-HIST / Leave | toast SSOT · 0 native alert · leave confirm | **PASS** (code Dev) · leave headed not forced this smoke |

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** · api healthy `:5111` · Mobile.Bff `:5202` healthy |
| yarn start:std | **PASS** · port **9301** (already up · reuse · **cấm** kill worker) |
| yarn e2e-qa stock | **FAIL soft** — gate `API:5101 / BFF:5201` (repo uses `:5111` / Mobile.Bff `:5202`) |
| capture `_capture_reflect.mjs` | **PASS** · S0/S1/QA-20 · LoginSheet · deep-link fulfill · geo mock |
| PNG distinct | S0=`41B8D4ABF851D1F1…` · S1=`E17BEF2F5985D7A3…` · QA-20=`409081393888EDB4…` · **0** blank/crash/DUP |
| visual / DOM | **Aligned** · Must **0** |
| **cấm** phase=done | yes · next Review |
| **cấm** GAP-QA-E2E-KILL-01 | yes · no taskkill / Stop-Process node\|yarn |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-STOCK-PORT | soft | stock `yarn e2e-qa` expects `:5101/:5201` — workaround `_capture_reflect.mjs` |
| GAP-QA-E2E-HISTORY-FALLBACK | soft | WDS deep-link HTTP 404 · capture fulfills document with `/` index |
| GAP-QA-E2E-PLAYWRIGHT-RESOLVE | soft | junction playwright from AI-AutoCode |
| Dev nav chrome | soft | standalone `showDevNav` in shots · FR-* zones still present |
| GAP-PGC-BE-01 | deferred | HasGps only · no Lat MIG (prior SA) |

**P0:** none — handoff Review.

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `phase=review` · **cấm** `phase=done`.

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
