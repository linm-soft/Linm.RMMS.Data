# QA — Scenarios — mnt-log (mobile sheet→screen · Nhật ký xử lý)

| Field | Value |
|-------|-------|
| feature | `mnt-log` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| packKind | **`sheet`** → surface **screen** `#sc-mnt-log` |
| taskId | `task_83b15fda` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | Maestro iOS+Android **PASS** · dest **iPhone 17 Pro Max** 1320×2868 RGB · AVD Pixel_2 **1080×1920** · `--skip-start` (API `:5101`/`:5111` · BFF `:5202`) · bundle `com.drvn.rmms.store` |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | dual proto `#sc-mnt-log` · live A3 ↔ P6 · **Aligned** · Must **0** |
| updatedAt | `2026-09-19T15:15:46.000Z` |

**Scope:** slug `mnt-log` screen `#sc-mnt-log` only. Entry mnt-list `#btn-mnt-log-{uuid}` (LIVE BFF · GAP-QA-REAL-01). **Cấm** AC sibling.

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS xcodegen + build (prior Dev) | **PASS** |
| Android assembleW3Debug | **PASS** |
| Mobile.Bff listen `:5202` | **PASS** (A10-BFF) |
| Maestro iOS | **PASS** · guest → login → tab-work → log → `#sc-mnt-log` |
| Maestro Android | **PASS** · tab-work → `btn-mnt-log-f9d4817e-…` → `#sc-mnt-log` |
| yarn e2e-qa-mobile | **ok:true** · A11 · A10 · A9 · A3 · P6 · P6-2 |
| store px | iPhone 6.9" **1320×2868** · Pixel **1080×1920** |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| QA-01 | Login → tab work → mnt-list → log → `#sc-mnt-log` | **PASS** |
| QA-02 | Title **Nhật ký xử lý** · wo-header · section **Nhật ký** · timeline | **PASS** (A3/P6 Read) |
| QA-03 | LIVE GetById · **cấm** invent timeline / demoItems | **PASS** (WO-DEMO seed DB) |
| QA-04 | Empty chrome khi không có log | **PASS** (code path · happy path có timeline) |
| QA-05 | Back → mnt-list · iOS leading **Công việc** · Android chevron | **PASS** |
| QA-06 | **Cấm** composer / Primary write CTA | **PASS** |
| AC-D-14 | Cấm watermark / process text | **PASS** |
| AC-F-icon | Timeline dots · không thiếu tile Must | **PASS** (no GAP-MOB-UX-COMP-03) |

## Store Must

| Case | Store | Evidence | Result |
|------|-------|----------|--------|
| A11-LAUNCH | A11 | ![A11-LAUNCH](screens/A11-LAUNCH.png) | **PASS** |
| A10-BFF | A10 · P11 | — | **PASS** |
| A9-LOGIN | A9 · P10 | ![A9-LOGIN](screens/A9-LOGIN.png) | **PASS** |
| A3-CORE | A3 · A11 | ![A3-CORE](screens/A3-CORE.png) | **PASS** |
| P6-CORE | P6 · P11 | ![P6-CORE](screens/P6-CORE.png) | **PASS** |
| P6-CORE-2 | P6 | ![P6-CORE-2](screens/P6-CORE-2.png) | **PASS** |
| A4-IPAD | A4 | **DEFER** Phase 1 | DEFER |

## Maestro

| Flow | Path | Result |
|------|------|--------|
| iOS | `qa/e2e/ios.yaml` | **PASS** · live uuid · assert `wo-header` |
| Android | `qa/e2e/android.yaml` | **PASS** · `hideKeyboard` + `tab-work` + live `btn-mnt-log-*` |

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| GAP-MOB-A11Y-ROW-01 | iOS `LinmListRow` không expose `wo-title`/`wo-code` id · Maestro assert `wo-header` | **no** (Should) |
| GAP-MOB-MNT-LOG-HIST-01 | History API DEFER · P1 derive GetById | **no** (CLOSED P1) |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype → **Aligned**.

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |
