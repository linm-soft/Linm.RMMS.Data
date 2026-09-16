# Dev — iOS implement — asset-adjust

| Field | Value |
|-------|-------|
| feature | `asset-adjust` |
| platform | iOS |
| status | **done** · qaFix implement |
| task | `T-IOS-ASSET-ADJUST` · `task_d8ada3bb` |
| changeScope | `new_page` |
| packKind | `screen` |
| repo | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| verifiedAt | `2026-09-01T16:05:00.000Z` |
| build | **PASS** · `xcodegen generate` + `xcodebuild -scheme LinmRmms -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` |

## Shipped (prior)

- `Presentation/Features/AssetAdjust/*` — `#sc-asset-adjust` list+search+Sửa/Bớt + `#md-asset-remove`
- Hub wire · SoftDelete · `FetchAssetAdjustListUseCase` live/empty/`loadFailed`
- OfflineDemo removed (cleanup_mock)

## QA-FIX (`task_d8ada3bb` · Plan §1–6 parity)

| # | Change | Result |
|---|--------|--------|
| 1 | `AppContainer` init → `applyCompanyId` khi token tồn tại | cold start tenant |
| 2 | `ApiClient.resolveCompanyCode` · store miss → JWT + persist | header `X-Company-Id: LINM` |
| 3 | `refreshAccessToken` → saveCompanyCode từ JWT mới | parity Android authenticator |
| 4 | Keep `.loadFailed` · **cấm** demoRows CORE | offline/HTTP fail only |
| 5 | VERIFY | xcodegen + iPhone 17 Pro **PASS** |

## AC map (P1 + QA)

| AC | Result |
|----|--------|
| Screen DES-MOB-ASSET-ADJUST | PASS |
| Hub tile → push | PASS |
| GET list(+search) debounce 350ms | PASS |
| Empty / loadFailed toast | PASS |
| Sửa → detail + Id | PASS |
| Bớt modal + soft DELETE | PASS |
| Live `KM-QL1-NA-*` (prior A3) | PASS · harden keep |

## Out / N/A

- PUT edit UI · media · Step 4b · e2e (queued QA)
- BE new endpoint · invent path

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios |
| contentHash | sha256:asset-adjust-qa-fix-ios-20260901 |
| priorTlHash | sha256:asset-adjust-tl-task-20260830 |
| dorGate | PASS |

---
<!-- Version meta: skillId=agent-dev-ios dorGate=PASS qaFixPhase=implement -->
