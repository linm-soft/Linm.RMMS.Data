# QA fix plan — asset-detail

> Status: **await_confirm** · **cấm** Write iOS/Android/BFF/BE trước board Approve `qa_fix_plan`  
> Nguồn: `qa/scenarios.md` · `qa/bugs/asset-detail.md` · `ui/review/align-ux.md` · STATUS blockers  
> Phase: `qaFixPhase=plan` · taskId=`task_24109163` · qaFailFrom=`task_cbda6a54`  
> lane: **mobile** · packKind: **`screen`** · `#sc-asset-detail` · **cấm** mfeStdUrl / yarn start:std / e2e ở phase plan

## Gaps (từ QA `task_cbda6a54`)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-REAL-01** | **P0 / Must** | CORE không bind live GET by id · Android list demo `TS-20260810-*` · iOS EmptyChrome sau live row · BFF seed OK với `X-Company-Id: LINM` | dual `#sc-asset-detail` / list entry |
| **GAP-QA-STORE-01** | **P0** | Maestro iOS FAIL · `label-code` / EmptyChrome **Không tìm thấy tài sản** sau tap `row-asset-0` (list live `KM-QL1-NA-461` OK) | iOS Maestro |
| **GAP-QA-STORE-03** | **P0** | Maestro Android FAIL · không thấy live `KM-QL1-NA-461` · stuck demo / mock | Android Maestro |
| **GAP-MOB-ASSET-DET-NAV-02** | **P0** | List live OK → push detail EmptyChrome · nghi `assetDetailId` stale trên `navigationDestination(isPresented:)` / `appear("")` · hoặc GET by id thiếu tenant → 404 | iOS `AppRouter` + `AssetDetailView` |
| **GAP-MOB-E2E-VIS-01** | Should · QA note | CLI case PASS ≠ visual Aligned · harvest A3/P6 sau fail không phải detail live | store / align-ux · re-QA |
| **R-QA-01** | **P0** gate | QA verdict **fail** · queue `failed` · board `qa_fail_rollback` → Dev plan | Workflow |

**Không reopen (đã CLOSED prior):** GAP-MOB-ASSET-DET-PACK-01 · TITLE/GPS/TYPE (PO) · Step 4b invent · ERP.* · PUT/DELETE · sibling gis-map CTA ship (toast P1 OK).

## Disk audit (plan turn · 2026-09-01) — verify only · **không** Write code

| Check | Result | Note |
|-------|--------|------|
| iOS `#sc-asset-detail` | **PRESENT** | `Presentation/Features/AssetDetail/` · EmptyChrome `empty-not-found` |
| Android `#sc-asset-detail` | **PRESENT** | `presentation/feature/assetdetail/` · OfflineDemo fallback còn |
| iOS nav push | **WIRED** · **RISK** | `AppRouter` · `navigationDestination(isPresented: $showAssetDetail)` + `assetId: assetDetailId` · load chỉ `.onAppear` · **không** `onChange(of: assetId)` |
| Shared VM | **CONFIRMED** | `@StateObject assetDetailViewModel` · list + adjust cùng destination |
| Empty id → notFound | **CONFIRMED** | `FetchRoadAssetByIdUseCase` `guard !key.isEmpty else { return .notFound }` · **không** GET |
| iOS `X-Company-Id` | **PRESENT** | `ApiClient` + `CompanyContextStore` · login `applyCompanyId` |
| Android `X-Company-Id` | **PRESENT** | `AuthInterceptor` · `CompanyContextStore` · `LoginUseCase.applyCompanyId` |
| Android list | **LIVE-ONLY** (current) | `AssetListViewModel` LoadFailed → empty + toast · **không** inject `demoRows` · `demoRows` vẫn trong `AssetListModels` |
| Android GetById OfflineDemo | **CONFIRMED** | `FetchRoadAssetByIdUseCase` → `TS-20260810-014` on throw |
| BFF GetById | **REUSE live** | `asset/road-assets/{id}` · seed `c33e0001-…0001` / `KM-QL1-NA-461` · **cấm** invent |
| Step 4b / BE | **N/A Signed** | SA+TL · GetById reuse · **cấm** ERP.* |

**Root-cause hypothesis (implement verify):**

1. **iOS EmptyChrome (NAV-02 / STORE-01):** `navigationDestination(isPresented:)` + `appear(assetId)` one-shot → có thể `appear("")` (notFound, no GET) **hoặc** GET 404 khi tenant header miss. Shared VM không reload khi `assetDetailId` đổi sau appear. Fix ưu tiên: `navigationDestination(item:)` **hoặc** `onChange(of: assetId)` → reload GET; đảm bảo mọi GET by id gửi `X-Company-Id: LINM`.
2. **Android demo / no live row (STORE-03 / REAL-01):** QA harvest thấy demo list; disk hiện list live-only — verify emulator: login → company persist → GET list 200 `KM-QL1-*` trước Maestro assert; nếu LoadFailed/empty vì thiếu company hoặc bff.base → fix session/header/base URL. Detail OfflineDemo `TS-20260810-*` **cấm** CORE PASS.
3. **Visual (E2E-VIS-01):** sau fix nav+tenant, re-QA harvest A3/P6 phải show live code — không fake PNG.

## Plan (sau board Approve `qa_fix_plan` · `qaFixPhase=implement`)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Fix iOS detail nav race — `navigationDestination(item: Binding<String?>)` **hoặc** keep isPresented + `onChange(of: assetId)` → `.appear(id)` reload; **cấm** `appear("")` → EmptyChrome | iOS | `App/AppRouter.swift` · `AssetDetailView.swift` · optional VM | Tap live `row-asset-*` → GET by id → hero `value-code` = live · **đóng** GAP-MOB-ASSET-DET-NAV-02 · GAP-QA-STORE-01 |
| 2 | Dual: verify login → `applyCompanyId` → mọi GET `asset/road-assets*` có `X-Company-Id: LINM` (list + by id) | iOS · Android | `ApiClient` / `AuthInterceptor` · login persist | BFF by-id 200 với seed `c33e…0001` từ app path |
| 3 | Android list: diagnose emulator GET list throw/empty trước Maestro · fix header/session/`bff.base` nếu cần · **cấm** re-introduce demoRows trên CORE | Android | `AssetListViewModel` · `FetchAssetListUseCase` · `AssetRepositoryImpl` · Auth | P6 list live `KM-QL1-NA-*` · **đóng** GAP-QA-STORE-03 |
| 4 | Dual detail: GET live bind · OfflineDemo chỉ khi thật offline/HTTP fail — **cấm** AC PASS mock `TS-20260810-*` trên CORE | iOS · Android | `FetchRoadAssetByIdUseCase` · Detail VM/Screen | A3/P6 CORE live code · **đóng** GAP-QA-REAL-01 |
| 5 | VERIFY GATE builds | iOS · Android · BFF | — | `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · `./gradlew :app:assembleDebug` · `dotnet build` Mobile.Bff **PASS** |
| 6 | Sync STATUS + implement notes | Data | `STATUS.md` · `implement/ios.md` · `android.md` · `handoff/dev-compact.md` | blockers closed hoặc còn open rõ · pipeline Dev done · QA pending |
| 7 | Re-QA (role `/agent-qa-mobile` · **không** chạy ở Dev) | QA | `qa/scenarios.md` · store · screens · align-ux | e2eQa ON · `yarn e2e-qa-mobile` · A3+P6 live · **cấm** EmptyChrome / demo CORE · đóng E2E-VIS-01 |

## Peer reference

| Piece | Peer |
|-------|------|
| Tenant header | AuthInterceptor / ApiClient · JWT `company_id=LINM` |
| GetById | BFF catch-all · SA solution-discovery · Step 4b N/A |
| List entry | `setOnOpenDetail` · T-IOS-AL/AD · T-AND-AL/AD prior ship |
| Nav pattern | prefer `item:` over stale `isPresented`+empty string |
| Sibling | asset-adjust QA plan · cùng family company header |

## Out of scope / Cấm

- Write iOS/Android/BFF/BE **trong** `qaFixPhase=plan` (task này)
- `autoApprove` bỏ `qa_fix_plan` / `qa_fail_rollback`
- `mfeStdUrl` · `yarn start:std` · web e2e · GenerateImage / fake CORE PNG
- Invent GetById path · ERP.* · Step 4b migration · PUT/DELETE
- Ship gis-map sibling (CTA toast P1 OK)
- Re-run PO→Design→SA→TL · change controlHint không AskQuestion
- Chain `/agent-qa*` / review trong task plan này

## Evidence

- Prior FAIL: `qa/scenarios.md` · `qa/bugs/asset-detail.md` · `ui/review/align-ux.md` · A3-CORE-EMPTY / P6-LIST-DEMO · task `task_cbda6a54`
- iOS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS`
- Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android`
- BFF: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff`
- BE: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Product: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data`

## Handoff

| Field | Value |
|-------|-------|
| this role | `dev` · `qaFixPhase=plan` · **done** |
| next gate | board **`qa_fix_plan`** Approve |
| after Approve | enqueue Dev `qaFixPhase=implement` · Plan §1–6 · **cấm** e2e ở Dev |
| after implement PASS | `/agent-qa-mobile` · e2eQa ON · Plan §7 |
| STATUS | Dev plan **await_confirm** · QA vẫn **blocked** (prior fail) · **cấm** review |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios + agent-dev-android |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-01T09:52:57.000Z` |
| versionGate | ok |
| qaFixPhase | plan |
| taskId | task_24109163 |
| dorGate | PASS (plan-only) |
| contentHash | sha256:asset-detail-qa-fix-plan-20260901 |

---
<!-- Version meta: skillId=agent-dev-ios+android dorGate=PASS qaFixPhase=plan -->
