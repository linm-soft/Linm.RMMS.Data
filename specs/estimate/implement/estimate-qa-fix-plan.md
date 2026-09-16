# QA fix plan — estimate (mobile)

> Status: **approved** · board enqueue `task_8ab3d7ec` = Approve `qa_fix_plan` · implement in progress  
> Nguồn: `qa/scenarios.md` · `qa/store/estimate/CAPTURE.md` · `qa/store/estimate/manifest.json` · STATUS blockers  
> Phase: `qaFixPhase=implement` · taskId=`task_8ab3d7ec` · planFrom=`task_bb0c0524` · qaFailFrom=`task_a89bc544`  
> lane: **mobile** · packKind: **`sheet`** → screen `#sc-estimate` · **cấm** mfeStdUrl / yarn start:std / e2e ở Dev  
> Prior web plan (Config FULL) → `implement/estimate-qa-fix-plan-web.md` · **giữ** · **không** reopen web

## Gaps (từ QA `task_a89bc544`)

| ID | Severity | Repro | Surface |
|----|----------|-------|---------|
| **GAP-QA-E2E-AND-01** | **P0** | Maestro Android `qa/e2e/android.yaml` FAIL trên Pixel_2 sau login (`Press Enter` …) · error truncated 500 chars · `manifest.ok=false` | `qa/e2e/android.yaml` · Login → home |
| **GAP-QA-STORE-03** | **P0** (CLI tag) | Step `MAESTRO-AND` FAIL → gap `GAP-QA-STORE-03` · store pack Android không harvest sạch | `qa/store/estimate/manifest.json` · CAPTURE |
| **GAP-QA-P6-DUP-01** | **P1** | `P6-CORE.png` ≡ `P6-CORE-2.png` (same MD5) dù marked PASS — không chứng minh scroll/CTA 2 shot | `qa/screens/P6-CORE*.png` |
| **GAP-MOB-UX-COMP-03** | **P2** (pending visual) | scenarios nhắc Read A3/P6 vs demo `.row-icon`/`#i-*` · **chưa** `qa/bugs/estimate.md` | QA `/review-align-ux-ios-android` sau Maestro PASS |
| **R-QA-01** | **P0** gate | QA verdict **FAIL** · queue `failed` · `qa_fail_rollback` Approved → Dev plan | Workflow |

**Không reopen (đã CLOSED Dev `task_59d13884`):** GAP-MOB-EST-NAV-01 · SIMP-01 · ASSIGNEE-01 · WO-01 · SLA-01 · PACK-01.

## Disk audit (plan turn · 2026-08-29) — verify only · **không** Write code

| Check | Result | Note |
|-------|--------|------|
| iOS `#sc-estimate` `EstimateView` | **PRESENT** | `Presentation/Features/Estimate/` · a11y `sc-estimate` · fields/CTA tags |
| Android `#sc-estimate` `EstimateScreen` | **PRESENT** | `presentation/feature/estimate/` · testTag `sc-estimate` |
| Entry mnt-list hub/card → estimate | **WIRED** | Android `WorkStack` navigate `estimate/{id}` · iOS `MntListViewModel` + `AppRouter` |
| Entry incident CTA → estimate | **WIRED** | Home/Incident stacks có `estimate/{incidentId}` composable · iOS incident create/detail |
| iOS Maestro A11/A9/A3 | **PASS** | live PNG · iPhone 17 Pro Max |
| Android Maestro MAESTRO-AND | **FAIL** | login mid-flow · `_maestro_android/` empty |
| P6 store PNG | **PRESENT nhưng DUP** | 1080×1920 · CORE ≡ CORE-2 |
| control-hint / real-data | **confirmed** | `_data-analy/estimate-*.md` · **không** stub |
| Step 4b / BE Estimate | **N/A Signed** | SA+TL · catch-all BFF · **cấm** invent ERP.* |
| Prior web Config gaps | **CLOSED** | `estimate-qa-fix-plan-web.md` · **OUT** mobile |

**Root-cause hypothesis (implement verify):** Android yaml chờ text `"Trang Chủ"` sau `pressKey: Enter` trong khi keyboard/IME hoặc login latency trên Pixel_2 làm timeout; peer iOS chờ `id: sc-home` ổn định hơn. Cũng có thể `btn-login` optional không kịp tap. **Không** evidence thiếu screen `#sc-estimate` (iOS CORE PASS + dual code present).

## Plan (sau board Approve `qa_fix_plan` · `qaFixPhase=implement`)

| # | Việc | Repo | Files | DoD |
|---|------|------|-------|-----|
| 1 | Harden Android Maestro login → home (align peer PASS flows) | Data | `specs/estimate/qa/e2e/android.yaml` | Sau password: tap `btn-login` / «Đăng nhập» trước hoặc song song Enter · `extendedWaitUntil` **`id: sc-home`** (primary) · `"Trang Chủ"` optional · timeout đủ · **cấm** `hideKeyboard` |
| 2 | Verify dual entry + screen tags (no toast regress) | iOS + Android | `Estimate*` · `MntList*` · `MainTabScreen` / `AppRouter` | Tap hub/card / incident CTA → `#sc-estimate` · tags `input-*` · `btn-assign` · `btn-draft` |
| 3 | Chỉ sửa native **nếu** step 1 vẫn fail do app (login/nav/tag) — **cấm** invent API | iOS / Android | Login / Home / Estimate nav | Reproduce on Pixel emulator · fix minimal |
| 4 | VERIFY GATE builds | iOS · Android · BFF | — | `xcodegen` + `xcodebuild` dest **iPhone 17 Pro** · `./gradlew :app:assembleDebug` · `dotnet build` Mobile.Bff **PASS** |
| 5 | Sync STATUS + implement notes | Data | `STATUS.md` · `implement/ios.md` · `android.md` | blockers MAESTRO closed hoặc còn open rõ · pipeline Dev done · QA pending |
| 6 | Re-QA (role `/agent-qa-mobile` · **không** chạy ở Dev) | QA | `qa/scenarios.md` · store · screens | e2eQa ON · `yarn e2e-qa-mobile` · **MAESTRO-AND PASS** · P6-CORE ≠ P6-CORE-2 · `ok:true` · đóng GAP-QA-E2E-AND-01 / STORE-03 / P6-DUP |
| 7 | Visual Read CORE vs demo (QA) | QA | A3-CORE · P6-CORE · dual proto · optional `qa/bugs/estimate.md` | `/review-align-ux-ios-android` · GAP-MOB-UX-COMP-03 Must nếu lệch icon/token |

## Peer reference

| Piece | Peer |
|-------|------|
| Android login Maestro | `mnt-list` / `home` yaml · tap title + Enter · **cấm** hideKeyboard |
| Screen + tags | `implement/ios.md` · `android.md` · Design `#sc-estimate` |
| Prior web QA-fix (archive) | `implement/estimate-qa-fix-plan-web.md` |

## Out of scope / Cấm

- Write iOS/Android/BFF/BE **trong** `qaFixPhase=plan` (task này)
- `autoApprove` bỏ `qa_fix_plan` / `qa_fail_rollback`
- `mfeStdUrl` · `yarn start:std` · web e2e · GenerateImage / fake CORE PNG
- Reopen web Kind B+D / Config / ui-schema
- Invent `api/v1/estimate` · ERP.* · Step 4b migration (Signed N/A)
- Re-run full PO→Design→SA→TL · change controlHint không AskQuestion
- Gộp `mnt-chat` / `mnt-progress` / `mnt-log`

## Evidence

- Prior FAIL: `qa/scenarios.md` · CAPTURE · `qa/store/estimate/manifest.json` · task `task_a89bc544`
- iOS: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS`
- Android: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android`
- BFF: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff`
- BE: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.***
- Product: `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data`

## Handoff

| Field | Value |
|-------|-------|
| this role | `dev` · `qaFixPhase=implement` · **done** · VERIFY GATE **PASS** |
| plan §1 | `qa/e2e/android.yaml` hardened · sc-home PRIMARY |
| plan §2–3 | native tags/nav PRESENT · **no** app code change |
| next | `/agent-qa-mobile` · e2eQa ON · Plan §6–7 |
| STATUS | Dev implement **done** · QA **pending** |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-dev-ios + agent-dev-android |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | `2026-09-01T08:58:07.000Z` |
| versionGate | rechecked |
| qaFixPhase | implement |
| taskId | task_8ab3d7ec |
| dorGate | PASS (VERIFY GATE builds) |
| contentHash | sha256:estimate-mobile-control-hint-20260829 |

---
<!-- Version meta: skillVersion=2026.08.29.1 · schemaVersion=2 · workflowVersion=2026.08.29.1 · versionGate=rechecked · skillId=agent-dev-ios · qaFixPhase=implement · taskId=task_8ab3d7ec -->
