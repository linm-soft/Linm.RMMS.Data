# QA — Scenarios — mnt-progress (mobile)

| Field | Value |
|-------|-------|
| feature | `mnt-progress` |
| title | [Mobile] [Công việc] -> Cập nhật trạng thái |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| changeScope | `new_page` |
| packKind | **`sheet`** (surface full screen `#sc-mnt-progress`) |
| taskId | `task_86089ea4` |
| autoApprove | ON |
| e2eQa | ON · `yarn e2e-qa-mobile` · Maestro ON |
| ios_test_phase | `phase1_iphone` · dest **iPhone 17 Pro Max** · **A4-IPAD DEFER** |
| store_qa | **run_store** |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| visual | `/review-align-ux-ios-android` · **Aligned** · Must **0** |
| e2e result | **ok:true** · `2026-08-29T07:01:22.251Z` |
| updatedAt | `2026-08-29T07:02:00.000Z` |

**Scope:** slug `mnt-progress` · mnt-list `#i-sync` / `btn-mnt-sync-*` → `#sc-mnt-progress` · POST progress (+ complete @100). **Cấm** AC sibling chat/estimate/log. **Cấm** mfeStdUrl / start:std.

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS `xcodegen` + build dest **iPhone 17 Pro Max** | **PASS** (Dev prior · e2e `--skip-build` reuse) |
| Android `./gradlew :app:assembleDebug` | **PASS** (reuse) |
| Mobile.Bff `dotnet build` | **PASS** (0 warning · 0 error) |
| API docker + Mobile.Bff `:5202` | **PASS** (host API `:5111` · `--skip-start`) |
| Maestro iOS + Android | **PASS** · `#sc-mnt-progress` |

## Device AC

| # | Scenario | Expected | Result | Evidence |
|---|----------|----------|--------|----------|
| 1 | Cold start guest home | `#sc-home` · CTA Đăng nhập | **PASS** | A11-LAUNCH |
| 2 | Login Auth seed | `linm-soft` / `Linm@2026` → `#sc-home` | **PASS** | A9-LOGIN |
| 3 | BFF reachable | Mobile.Bff `:5202` healthy | **PASS** | A10-BFF |
| 4 | Entry list → progress | tile-mnt / tab-work → `#sc-mnt-list` → sync → `#sc-mnt-progress` | **PASS** | Maestro · A3 / P6 |
| 5 | TopBar | title **Cập nhật trạng thái** · iOS back **Công việc** · Android icon-only | **PASS** | A3 / P6 |
| 6 | WO header | title · code · status readonly | **PASS** | A3 / P6 |
| 7 | Tiến độ (%) | number + slider · fill `45` | **PASS** | A3 / P6 |
| 8 | Ghi chú | multiline ≥16 · filled E2E text | **PASS** | A3 / P6 |
| 9 | Ảnh + GPS | `#i-camera` · location-row | **PASS** | Maestro assert · P6 fold |
| 10 | Primary | **Cập nhật** · no UIAlert | **PASS** | P6 / P6-2 |
| 11 | Dual OS | iOS 6.9" (1320×2868) + Android Pixel 1080×1920 | **PASS** | A3 + P6 + P6-2 |
| 12 | Watermark / placeholder | none «Gói N» / «gen realapp» | **PASS** | CORE Read |
| 13 | Sibling AC | only `mnt-progress` · no estimate/chat as CORE | **PASS** | CORE = `#sc-mnt-progress` |
| 14 | Form body | fill % + note before CORE shot | **PASS** | flows |

## Store × feature

| AC | Apple | Play | Result | Evidence |
|----|-------|------|--------|----------|
| Core UX | A3 · A11 | P6 · P11 | **PASS** | A3-CORE · P6-CORE |
| Login + BFF | A9 · A10 | P10 · P11 | **PASS** | A9-LOGIN · A10-BFF |
| ≥2 phone core | — | P6 | **PASS** | P6-CORE · P6-CORE-2 |
| Privacy URL | A5 | P8 | ghi thiếu OK · **không** fake | — |
| READY_TO_SUBMIT | — | — | **không** (Review) | — |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype (`/review-align-ux-ios-android`). Demo `#i-camera` / `#i-chevron-left` · WO rows `no-icon` → live dual glyphs + form = **Aligned** (không GAP-MOB-UX-COMP-03).

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |
| A4-IPAD | A4 | **DEFER** Phase 1 · family `1` | DEFER |

## Align UX

| Field | Value |
|-------|-------|
| verdict | **Aligned** |
| Must open | **0** |
| file | `ui/review/align-ux.md` |
| bugs | `qa/bugs/mnt-progress.md` · CLOSED (Should A11Y only) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-08-29T07:02:00.000Z` |
| versionGate | rechecked |
| contentHash | sha256:mnt-progress-mobile-control-hint-20260829 |
| realDataHash | sha256:mnt-progress-mobile-real-data-20260829 |
| bffContentHash | sha256:mnt-progress-mobile-bff-20260829 |
| actionTreeHash | sha256:mnt-progress-mobile-action-tree-20260829 |
| ctxContentHash | sha256:7575cc93a9fc1e4c2ac0bdbdc219fdb28db7c6177f83457b747529646244ccec |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |
| taskId | `task_86089ea4` |

---
<!-- Version meta: skillId=agent-qa-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
