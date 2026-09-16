# QA — Scenarios — mnt-list (mobile list · Công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| packKind | **`list`** |
| taskId | `task_c9ac27ea` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | **ok:true** · `2026-09-01T04:59:30.073Z` · dest **iPhone 17 Pro Max** 1320×2868 RGB · AVD **1080×1920** |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | dual proto `#sc-mnt-list` · live A3 ↔ P6 · **Aligned** · Must **0** |
| re-run context | post `/edit-mobile-feature` `task_53934dab` · cleanup_mock live-only · status bar text |
| updatedAt | `2026-09-01T05:00:00.000Z` |

**Scope:** slug `mnt-list` list `#sc-mnt-list` only. **Cấm** AC sibling (`estimate` · `mnt-chat` · `mnt-progress` · `mnt-log`).

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS `xcodegen` | **PASS** |
| Android `./gradlew :app:assembleDebug` | **PASS** |
| Mobile.Bff `dotnet build` | **PASS** |
| Maestro iOS + Android | **PASS** · guest home → login → `tile-mnt`/`tab-work` → `#sc-mnt-list` · live DB 2 rows |
| API docker + BFF :5202 | **PASS** (healthy · host API :5111 · `--skip-start`) |
| `yarn e2e-qa-mobile` | **PASS** · `ok:true` |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| QA-01 | Login → Home tile **Công việc** / tab `work` → `#sc-mnt-list` | **PASS** (Maestro iOS+Android) |
| QA-02 | Appear ≥2 cards live DB · status `Tình trạng xử lý: Chờ xử lý` · `…Đã hoàn thành` | **PASS** (A3/P6/P6-2) |
| QA-03 | Search field + client filter | **PASS** (`mnt-search` present) |
| QA-04 | Trailing **Lọc** / filter icon → toast P1 | **PASS** (`btn-mnt-filter` · code) |
| QA-05 | Hub / card CTAs → toast only · **cấm** sibling push | **PASS** (code · shots list only) |
| QA-06 | Back → Home | **PASS** (`btn-mnt-back`) |
| AC-D-14 | Cấm watermark / process text | **PASS** |
| AC-F-hub | Hub `.row-icon` green `#i-sum` | **PASS** (A3/P6 leading glyph) |
| AC-F-actions | Card `#i-chat` · `#i-sync`/`#i-list` · `#i-sum` | **PASS** (glyphs visible dual) |
| AC-F-live | Live-only · **cấm** in-app mock · BFF rows LINM tenant | **PASS** (GAP-QA-REAL-01 closed) |

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
| iOS | `qa/e2e/ios.yaml` | **PASS** · status assert `Tình trạng xử lý: Chờ xử lý` |
| Android | `qa/e2e/android.yaml` | **PASS** · P6 + scroll fold → P6-2 status done |

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| GAP-MOB-COPY-SEARCH-01 | Kit `LinmSearchField` hardcode **Tìm** · demo **Tìm kiếm công việc…** · Should / kit API | **no** (Should) |

## E2E screenshots

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype (`/review-align-ux-ios-android`).

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS** | ![P6-CORE](screens/P6-CORE.png) |
| P6-CORE-2 | P6 | **PASS** | ![P6-CORE-2](screens/P6-CORE-2.png) |

## Align

| Check | Result |
|-------|--------|
| align | `ui/review/align-ux.md` · Must **0** · **Aligned** |
| bugs | `qa/bugs/mnt-list.md` · CLOSED (Should only) |
| Next | `/agent-review-mobile` · phase=`review` |

## Handoff

- closeout QA: `task_c9ac27ea` · `/agent-qa-mobile` · e2eQa=ON · VERIFY GATE PASS · store PNG live · at: `2026-09-01T05:00:00.000Z`

---
<!-- Version meta: skillId=agent-qa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked contentHash=sha256:mnt-list-mobile-list-20260828 -->
