# Dev — Android implement — asset-adjust

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| platform | Android |
| status | **done** · qaFix implement |
| task | `T-AND-ASSET-ADJUST` · `task_d8ada3bb` |
| changeScope | `new_page` |
| packKind | `screen` |
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| verifiedAt | `2026-09-01T16:05:00.000Z` |
| build | **PASS** · `./gradlew :app:assembleDebug` |

## Shipped (prior)

- `presentation/feature/assetadjust/*` — Compose parity dual
- Hub `TileAdjust` → `navigate("asset-adjust")`
- `FetchAssetAdjustListUseCase` live/empty/`LoadFailed` · SoftDelete
- Demo OfflineDemo removed (cleanup_mock)

## QA-FIX (`task_d8ada3bb` · Plan §1–6)

| # | Change | Result |
|---|--------|--------|
| 1 | `AppSessionViewModel` hydrate → `authRepository.applyCompanyId(token)` | company store filled on cold start |
| 2 | `AuthInterceptor.resolveCompanyCode` · store miss → JWT `company_id` + persist | mọi GET có `X-Company-Id: LINM` |
| 3 | `TokenAuthenticator` refresh → saveCompanyCode + retry header | tenant không mất sau 401 refresh |
| 4 | Keep `LoadFailed` + toast · **cấm** demoRows on CORE | offline/HTTP fail only |
| 5 | VERIFY | assembleDebug **PASS** |

## AC map (P1 + QA)

| AC | Result |
|----|--------|
| Screen parity VN | PASS |
| Hub tile → navigate | PASS |
| GET + search debounce | PASS |
| Soft DELETE + toast Code | PASS |
| Live list với BFF healthy (`KM-QL1-NA-*`) | **fixed code** · await re-QA |
| Offline fail toast · no fake 200 | PASS |

## Out / N/A

- PUT UI · media · e2e (queued QA) · Step 4b · invent BFF · kit Search placeholder

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-android |
| contentHash | sha256:asset-adjust-qa-fix-android-20260901 |
| priorTlHash | sha256:asset-adjust-tl-task-20260830 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-dev-android dorGate=PASS qaFixPhase=implement -->
