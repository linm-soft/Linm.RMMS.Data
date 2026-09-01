# QA — Scenarios — asset

> Status: **FAIL** · `/agent-qa-mobile` · e2eQa=ON · task `task_4ec34586`  
> method: `yarn e2e-qa-mobile` · Maestro · sim **iPhone 17 Pro Max** + emulator **Pixel 2** · **cấm** `yarn e2e-qa` / `start:std` / GenerateImage  
> prior Dev: `task_dc98ed58` · cleanup_mock live-only · handoff `handoff/dev-compact.md`

| | |
|--|--|
| Feature | `asset` |
| Title | [Mobile] List danh mục tài sản · live-only re-QA |
| Role | `qa` |
| packKind | `list` · `#sc-asset-list` · `DES-MOB-ASSET-LIST` |
| iosPhase | `phase1_iphone` · **A4-IPAD DEFER** |
| demo | `linm-soft` / Auth docker seed |
| API / BFF | WebService docker **:5111** · Mobile.Bff **:5202** · `--skip-start` |

## Device AC (slug `asset` only)

| AC | Expect | Result | Evidence |
|----|--------|--------|----------|
| Launch | Cold start guest · 0 crash | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| BFF | Mobile.Bff listen `:5202` | **PASS** | A10-BFF |
| Login demo | seed Auth → home | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| List `#sc-asset-list` iOS | Nav **Danh sách** · search · live rows · **cấm** demo watermark | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| List `#sc-asset-list` Android | Cùng zone · live rows khi BFF có data | **FAIL** | ![P6-CORE](screens/P6-CORE.png) · EmptyChrome |
| List fold 2 Android | Row 2 visible | **FAIL** | ![P6-CORE-2](screens/P6-CORE-2.png) · empty |
| Entry path | Home → hub → `#tile-list` → list | **PASS** | Maestro assert `#sc-asset-list` |
| API / live-only | GET `asset/road-assets` · empty→EmptyChrome · **cấm** demoRows | **FAIL** And | BFF có ≥50 items · And **0** request `road-assets` từ `10.0.2.2` |
| GAP-DEV-MOB-PLACEHOLDER-01 | **Cấm** watermark «Phiên bản Gói» | **PASS** | A3 / P6 |
| Dual align | iOS↔Android cùng zone + data | **FAIL** Must | iOS rows · Android empty |

## Store Must × feature

| Case | Store | Result | Evidence |
|------|-------|--------|----------|
| A10-BFF | A10 · P11 | **PASS** | — |
| A11-LAUNCH | A11 | **PASS** | ![A11-LAUNCH](screens/A11-LAUNCH.png) |
| A9-LOGIN | A9 · P10 | **PASS** | ![A9-LOGIN](screens/A9-LOGIN.png) |
| A3-CORE | A3 · A11 | **PASS** | ![A3-CORE](screens/A3-CORE.png) |
| P6-CORE | P6 · P11 | **PASS*** | ![P6-CORE](screens/P6-CORE.png) · *CLI px only · visual empty |
| P6-CORE-2 | P6 | **PASS*** | ![P6-CORE-2](screens/P6-CORE-2.png) |
| MAESTRO-AND | P6 | **FAIL** | `row-asset-0` missing · **GAP-QA-STORE-03** |

\* CLI PASS ≠ visual Aligned.

## Live vs demo (`/review-align-ux-ios-android`)

| Check | Result | Notes |
|-------|--------|-------|
| A3-CORE vs `#sc-asset-list` demo | **Aligned** chrome | Nav Danh sách · search · cube rows · **cấm** watermark |
| P6-CORE vs demo / A3 | **Not aligned** Must | EmptyChrome «Chưa có tài sản» vs iOS live rows |
| Live-only | iOS OK · Android GAP | Dev cleanup_mock: fail/empty→EmptyChrome · And không gọi API → false empty |

## GAP

| Id | Sev | Note |
|----|-----|------|
| GAP-QA-STORE-03 | **Must** | MAESTRO-AND assert `row-asset-0` FAIL |
| GAP-MOB-ASSET-AND-FETCH-01 | **Must** | Android list không emit GET `mobile-bff/.../asset/road-assets` (BFF log 0 từ emulator) trong khi iOS/localhost 200 + items · nghi `LaunchedEffect(onBack,onOpenDetail)` cancel trước `Appear` |
| GAP-MOB-UX-DUAL-01 | **Must** | Dual iOS rows ↔ Android empty |

## Verdict

**FAIL** · e2e `ok:false` · **cấm** completed · `qa_fail_rollback` → Dev Android fetch/Appear.

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-qa-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T03:51:00.000Z |
| taskId | task_4ec34586 |
| contentHash | sha256:asset-mobile-edit-list-20260823 |
