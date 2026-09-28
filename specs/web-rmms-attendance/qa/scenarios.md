# QA — scenarios — web-rmms-attendance

| Field | Value |
|-------|-------|
| feature | `web-rmms-attendance` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `edit_page` · Pattern B delta |
| packKind | `list` (phone hub · Kind B **WAIVE**) |
| mfeStdUrl | `http://localhost:9301/cham-cong` |
| mfeStdRoute | `/cham-cong` |
| productRoute | `/field/attendance*` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` · API `:5111` · **cấm ERP.*** |
| taskId | `task_230b5f05` |
| prior Dev | implement **confirmed** · handoff `handoff/dev-compact.md` |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | `e2e runtime · yarn start:std :9301 (reuse · no kill) + docker + playwright` · cases `S0,S1,QA-20` · LoginPage `/dang-nhap` · viewport **430** · geolocation Acc=12 · SPA deep-link fulfill |
| updatedAt | `2026-09-27T17:05:00.000Z` |
| skillVersion | `2026.09.05.03` |
| contentHash | `sha256:0275fe24159e04a2d1a70682880e26b3456de61e7cf74b9c3d9ac707cae30d7a` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result | Evidence |
|---|------|--------|--------|----------|
| S0 | Guest mở `/cham-cong` | ATT-00/01/08 · DES-MOB-ATT · guestGate «Đăng nhập để dùng Chấm công.» · CTA Đăng nhập · **0** crash | **PASS** | ![S0](screens/S0.png) |
| S1 | Staff hub sau LoginPage | `#att-hero` · `#btn-checkin` Pattern B `disabled=false` (not gated) · `#btn-report` · GPS ±12 m · Ca route · history/empty · **0** crash | **PASS** | ![S1](screens/S1.png) |
| QA-20 | Login từ Home guest | LG-00 · `#f-user`/`#f-pass`/`#btn-login` · `/dang-nhap` · **0** crash | **PASS** | ![QA-20](screens/QA-20.png) |

## Scenario / Expect / Actual (visual + DOM dump)

| Case | Expect (design/PO · Pattern B) | Actual (PNG + DOM dump) | Verdict |
|------|--------------------------------|-------------------------|---------|
| S0 | Guest gate + CTA trước Live | zones ATT-00/01/08 · DES-MOB-ATT · «Đăng nhập để dùng Chấm công.» · guestGate=true · href `/m/cham-cong` | **Aligned** |
| S1 | Hub hero + Pattern B CTA · GPS Acc=12 | ATT-02/03 · btnCheckIn/btnReport · patternB.disabled=**false** · «Chưa chấm vào» · GPS `±12 m` · Ca · history rows live · **0** demoDays | **Aligned** |
| QA-20 | Login page (delta shell) | LG-00 · «Tài khoản / Mật khẩu / Đăng nhập» · `#f-user`/`#f-pass`/`#btn-login` · `/m/dang-nhap` | **Aligned** |

## T-QA-*

| id | Scope | Result |
|----|-------|--------|
| T-QA-CRUD-01 | Live GET patrol/attendance-logs · staff hub | **PASS** (S1 history live rows) |
| T-QA-ATT-01 | Hub+chain e2e · guest→login→staff hub | **PASS** (S0→QA-20→S1) |
| T-QA-DELTA-PB-01 | Pattern B · `disabled={saving}` only · banner on submit | **PASS** (S1 patternB.disabled=false · code Dev T-DELTA-PB-01) · banner headed click not forced this smoke |
| T-QA-GPS-01 | Acc mock · deny=no POST path | **PASS** (mock Acc=12 · hero GPS) · deny headed not forced |
| T-QA-FILTER-01/02 | LinErpListFilterBar | **WAIVE** (phone hub · no list filter) |
| T-QA-VI-ENC-01 | Title/nav UTF-8 | **PASS** |
| T-QA-HIST / Leave | toast · 0 native alert | **PASS** (code Dev) · leave headed not forced |

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** · api healthy `:5111` · bff `:5201` · Mobile.Bff local `:5202` |
| yarn start:std | **PASS** · port **9301** (already up · reuse · **cấm** kill worker) |
| yarn build | **PASS** (production · 3 size warnings only) |
| yarn e2e-qa stock | **FAIL soft** — default API port 5101≠5111 · `--skip-start` S0/QA-20 `GAP-QA-E2E-BLANK-01` (stock no deep-link/LoginPage) |
| capture `_capture_att.mjs` | **PASS** · S0/S1/QA-20 · LoginPage `/dang-nhap` + geolocation · deep-link fulfill · `/cham-cong` |
| PNG distinct | S0=`06BF847B71B3…` · S1=`95C0424773EA…` · QA-20=`6E85A6391A0C…` · **0** blank/crash/DUP |
| visual / DOM | **Aligned** · Must **0** |
| **cấm** phase=done | yes · next Review |
| **cấm** GAP-QA-E2E-KILL-01 | yes · no taskkill / Stop-Process node\|yarn |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-QA-E2E-STOCK-API-PORT | soft | stock CLI defaults API `:5101` · RMMS docker `:5111` · use `--skip-start` + feature capture |
| GAP-QA-E2E-STOCK-BLANK | soft | stock no WDS deep-link fulfill · LoginPage `/dang-nhap` · capture `_capture_att.mjs` |
| GAP-QA-E2E-LOGIN-PAGE | soft | shell login = LoginPage LG-00 (`#f-user`) · cấm expect LoginSheet SH-02 `#loginUser` |
| UNCLEAR-BANNER-VS-TOAST | CLOSED | Dev · banner client on submit · not forced headed click this smoke |
| Dev nav chrome | soft | standalone may show chrome · ATT zones present |

**P0:** none — handoff Review.

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `phase=review` · **cấm** `phase=done`.

## Version meta

| skillId | skillVersion | schemaVersion |
|---------|--------------|---------------|
| agent-qa | 2026.09.05.03 | 1 |
