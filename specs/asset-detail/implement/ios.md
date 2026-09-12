# Dev — Implement — asset-detail (iOS)

| Field | Value |
|-------|-------|
| feature | `asset-detail` |
| role | `dev` · `/agent-dev-ios` · `/dev-ios-swiftui` · `/dev-ui-review` |
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
| T-IOS-AL-01 | **done** | list `rowTap` → `setOnOpenDetail(id)` · live-only |
| T-IOS-AD-01 | **done** | GET by id · hero+rows+CTA · live-only EmptyChrome |
| QA-FIX §1 | **done** | `navigationDestination(item: $assetDetailId)` · `onChange(of: assetId)` reload · loadGeneration race guard |
| QA-FIX §2 | **done** | `ApiClient` + `CompanyContextStore` · JWT fallback `X-Company-Id` |
| QA-FIX §4 | **done** | **cấm** OfflineDemo CORE · fail → EmptyChrome + toast |
| T-BE / T-BFF | **n/a · reuse** | GetById live · **không** Write BFF/BE |
| Step 4b | **N/A** | SA chốt |

## QA gaps closed (this turn)

| ID | Fix |
|----|-----|
| GAP-MOB-ASSET-DET-NAV-02 | `item:` Optional id · **cấm** `isPresented`+`appear("")` |
| GAP-QA-STORE-01 | same nav · live GET after tap row |
| GAP-QA-REAL-01 | live bind · EmptyChrome only notFound/loadFailed |

## Ship summary

- **Screen** `#sc-asset-detail` · push
- **Entry:** list/adjust → `assetDetailId = key` (non-empty)
- **API:** `GET asset/road-assets/{id}` · Bearer + `X-Company-Id`
- **404** → EmptyChrome `empty-not-found` · **fail** → `empty-load-failed` + toast

## VERIFY GATE

| Check | Result |
|-------|--------|
| `xcodegen generate` | **PASS** |
| `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` | **PASS** |
| BFF `dotnet build` | **PASS** |
| e2e / start:std / mfeStdUrl | **SKIP** (cấm role Dev) |

## Files (qa-fix)

| Path | Change |
|------|--------|
| `App/AppRouter.swift` | `assetDetailId: String?` + `navigationDestination(item:)` |
| `Presentation/Features/AssetDetail/AssetDetailView.swift` | `onChange(of: assetId)` reload |
| `Presentation/Features/AssetDetail/AssetDetailViewModel.swift` | loadGeneration · empty → notFound |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| versionGate | rechecked |
| contentHash | sha256:asset-detail-control-hint-20260830 |
| designContentHash | sha256:asset-detail-design-20260830 |
| saContentHash | sha256:asset-detail-solution-20260830 |
| tlContentHash | sha256:asset-detail-tl-task-20260830 |
| iosContentHash | sha256:asset-detail-implement-ios-20260901-qafix |
| qaFixPlanContentHash | sha256:asset-detail-qa-fix-plan-20260901 |
| taskId | `task_714bba2c` |

---
<!-- Version meta: skillId=agent-dev-ios dorGate=PASS qaFixPhase=implement -->
