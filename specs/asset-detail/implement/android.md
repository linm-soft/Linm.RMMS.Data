# Dev — Implement — asset-detail (Android)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| role | `dev` · `/agent-dev-android` · `/dev-android-compose` · `/dev-ui-review` |
| status | **PASS** |
| packKind | `screen` |
| changeScope | `new_page` |
| route_confirm | `route_a` |
| taskId | `task_714bba2c` |
| qaFailFix | `1` · `qaFixPhase=implement` |
| qaFailFrom | `task_cbda6a54` · plan `task_24109163` |
| updatedAt | `2026-09-01T16:30:00.000Z` |

## Tasks

| id | status | notes |
|----|--------|-------|
| T-AND-AL-01 | **done** | `RowTap` → `asset-detail/{id}` · live-only list |
| T-AND-AD-01 | **done** | Compose detail · GET by id · live-only |
| QA-FIX §2 | **done** | `AuthInterceptor` · cold-start `applyCompanyId` · JWT fallback |
| QA-FIX §3 | **done** | list LoadFailed → empty + toast · **cấm** demoRows CORE |
| QA-FIX §4 | **done** | FetchById live-only · EmptyChrome · **cấm** OfflineDemo CORE |
| T-BE / T-BFF | **n/a · reuse** | GetById live |
| Step 4b | **N/A** | SA chốt |

## QA gaps closed (this turn)

| ID | Fix |
|----|-----|
| GAP-QA-STORE-03 | live list path · company header · trim id navigate |
| GAP-QA-REAL-01 | live GET by id · no `TS-20260810-*` CORE |

## Ship summary

- **Screen** `#sc-asset-detail` · push `asset-detail/{id}`
- **API:** Retrofit GET by id · Bearer + `X-Company-Id: LINM`
- **404** → EmptyChrome · **fail** → EmptyChrome + toast
- **CTA** pin map → gis-map/{id}

## VERIFY GATE

| Check | Result |
|-------|--------|
| `./gradlew :app:assembleDebug` | **PASS** |
| BFF `dotnet build` | **PASS** |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files (qa-fix)

| Path | Change |
|------|--------|
| `presentation/navigation/MainTabScreen.kt` | trim non-empty id before navigate detail |
| (verified) `FetchRoadAssetByIdUseCase` · `AssetListViewModel` · `AuthInterceptor` | live-only + tenant (prior cleanup) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-control-hint-20260830 |
| designContentHash | sha256:asset-detail-design-20260830 |
| saContentHash | sha256:asset-detail-solution-20260830 |
| tlContentHash | sha256:asset-detail-tl-task-20260830 |
| androidContentHash | sha256:asset-detail-implement-android-20260901-qafix |
| qaFixPlanContentHash | sha256:asset-detail-qa-fix-plan-20260901 |
| taskId | `task_714bba2c` |

---
<!-- Version meta: skillId=agent-dev-android dorGate=PASS qaFixPhase=implement -->
