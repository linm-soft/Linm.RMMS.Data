# QA — Scenarios — incident-list (mobile list · Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| this role | `qa` · `/agent-qa-mobile` |
| status | **confirmed** |
| packKind | **`list`** |
| taskId | `task_3004011c` |
| e2eQa | **ON** · `yarn e2e-qa-mobile` · `ios_test_phase=phase1_iphone` · **A4-IPAD DEFER** |
| store_qa | **run_store** (autoApprove=ON) |
| e2e result | **ok:true** · dest **iPhone 17 Pro Max** 1320×2868 · AVD **Pixel_2** 1080×1920 |
| method | e2e runtime · yarn e2e-qa-mobile · Maestro + simctl/adb · **cấm** GenerateImage · **cấm** yarn start:std / mfeStdUrl |
| align | dual proto `#sc-incident-list` · live A3 ↔ P6 · **Aligned** · Must **0** |
| updatedAt | `2026-08-29T02:25:00.000Z` |

**Scope:** slug `incident-list` list `#sc-incident-list` only. **Cấm** AC sibling (`vis-capture` · `incident-detail` · `incident-chat` · `gis-map` implement).

## VERIFY GATE

| Gate | Result |
|------|--------|
| iOS `xcodegen` + `xcodebuild` | **PASS** (prior Dev · e2e `--skip-build` reuse) |
| Android `assembleDebug` | **PASS** (prior Dev · e2e reuse APK) |
| Mobile.Bff `dotnet build` | **PASS** (prior · docker healthy :5202) |
| Maestro iOS + Android | **PASS** · guest home → login → `tile-incident`/`tab-incident` → `#sc-incident-list` |
| API docker + BFF :5202 | **PASS** (healthy · host API :5111) |
| `yarn e2e-qa-mobile` | **PASS** · `ok:true` |

## Device AC

| ID | Expect | Result |
|----|--------|--------|
| QA-01 | Login → Home tile **Vấn đề** / tab `incident` → `#sc-incident-list` | **PASS** (Maestro iOS+Android) |
| QA-02 | Title **Quản lý vấn đề** · segment Danh sách/Bản đồ · search · banner | **PASS** (A3/P6) |
| QA-03 | Appear ≥2 cards SSOT · Nứt mặt đường · Cống tắc · status warn/ok | **PASS** (A3/P6/P6-2) |
| QA-04 | Banner **Nhận diện mặt đường** + camera glyph | **PASS** |
| QA-05 | Card actions chat · briefcase · list · mappin glyphs | **PASS** |
| QA-06 | FAB + create entry | **PASS** (visual · a11y id optional kit) |
| QA-07 | Tab 5 **Vấn đề** selected · **cấm** invent tab 6 | **PASS** |
| AC-D-14 | Cấm watermark / process text | **PASS** |

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
| iOS | `qa/e2e/ios.yaml` | **PASS** · guest `#sc-home` → login seed → `#sc-incident-list` · assert 2 cards |
| Android | `qa/e2e/android.yaml` | **PASS** · P6 + scroll → P6-2 card 2 |

## Gaps

| ID | Note | Block complete? |
|----|------|-----------------|
| GAP-MOB-COPY-SEARCH-01 | Kit `LinmSearchField` hardcode **Tìm** · demo **Tìm kiếm vấn đề…** · Should / kit | **no** (Should) |
| GAP-MOB-A11Y-FAB-01 | `LinmFab` Button không inherit `fab-inc-create` wrapper id · visual FAB OK · Maestro optional | **no** (Should · kit) |

## E2E screenshots

Viewer: `/api/qldb/artifact?id=&rel=qa/scenarios.md` rewrite `screens/{caseId}.png`.

CLI **PASS** = Maestro + PNG + store px only — **not** visual vs demo. QA **Read** A3-CORE + P6-CORE vs prototype (`/review-align-ux-ios-android`). Demo banner `#i-camera` + card `#i-chat`/`#i-briefcase`/`#i-list`/`#i-mappin` + FAB `#i-plus` → live glyphs both OS = **Aligned** (không GAP-MOB-UX-COMP-03).

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
| bugs | `qa/bugs/incident-list.md` · CLOSED (Should only) |
| Next | `/agent-review-mobile` · phase=`review` |

## Handoff

- closeout QA: `task_3004011c` · `/agent-qa-mobile` · e2eQa=ON · VERIFY GATE PASS · store PNG live · at: `2026-08-29T02:25:00.000Z`

---
<!-- Version meta: skillId=agent-qa-mobile skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked contentHash=sha256:incident-list-mobile-list-20260829 -->
