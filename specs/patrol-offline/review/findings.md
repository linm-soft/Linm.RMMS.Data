# Review — Findings — patrol-offline (mobile list · Hàng đợi mất sóng)

| Field | Value |
|-------|-------|
| feature | `patrol-offline` |
| title | [Mobile] Hàng đợi mất sóng |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_94592434` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `task_694706b6` · `qa/scenarios.md` · **confirmed** · e2e `ok: true` |
| prior · dev | `task_b2425570` · `implement/{ios,android}.md` · **confirmed** |
| prior · sa | `task_06ebc4bc` · `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `integration/sync/offline-batch` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-08-19T14:15:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `PatrolOfflineView` · `PatrolOfflineViewModel` · `OfflineQueueStore` · `IntegrationRepository.syncOfflineBatch` · Keychain |
| Android | `PatrolOfflineScreen` · `PatrolOfflineViewModel` · `OfflineQueueStore` · EncryptedSharedPreferences token |
| BFF | `MobileApiProxyController` catch-all → `integration/sync/offline-batch` · **không** `PatrolOfflineController` |
| API | `POST integration/sync/offline-batch` · **cấm** GET queue |
| skillVersion | agent-review-mobile **2026.08.19.29** |
| live re-audit | 2026-08-19 after QA `task_694706b6` · VERIFY GATE recheck |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` + `X-Timezone` (ApiClient / AuthInterceptor) | **PASS** |
| Local queue UserDefaults iOS / SharedPreferences Android · **cấm** server GET queue | **PASS** |
| IDOR / invent permission | **N/A** — batch sync Integration signed · no per-record GET |
| Location / camera Info.plist + Manifest copy trên slug `patrol-offline` | **N/A** — list không GPS/camera |
| `alert` / `UIAlert` / `AlertDialog` trên PatrolOffline | **PASS** — `LinmToast` / session toast only |
| Plaintext token / fork API `patrol-offline/queue` / invent BFF controller | **PASS** — proxy `integration/*` only |
| Foot «Phiên bản Gói» / WebView | **PASS** — không ship |

## DTO parity (iOS = Android = local queue)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| `id` · `kind` · `title` · `location` · `content` · `timestamp` · `isPending` | `OfflineQueueItem` Codable JSON | pipe-delimited SharedPrefs | **OK** — cùng domain shape |
| `statusLabel` «Chờ gửi» | `LinmCopy.t("offline.status.pending")` | same | **OK** |
| Demo seed 2 card SSOT | `PatrolOfflineCopy.demoItems` | `PatrolOfflineCopy.demoItems` | **OK** — Km 1556+000 · Km 1561+134 |
| Sync request | `OfflineBatchRequestDto` Partner/DeviceId/BatchId/RecordCount/Note | same Retrofit body | **OK** |
| Use cases | `FetchOfflineQueueUseCase` · `SyncOfflineQueueUseCase` · `FetchOfflineQueueCountUseCase` | same | **OK** |
| GAP-F-OFFLINE-01 seed-once | `ensureInitialized()` + `initializedKey` · `clearPending()` no re-seed | same | **OK** |

## UI align (QA shots 2 OS)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-patrol-offline` list · 2 card · segment | `A3-CORE` | `P6-CORE` | **PASS** — cùng zone · Must **0** |
| Card 1 «Điểm tuần · Km 1556+000» + nội dung | same | same | **PASS** |
| Card 2 «Điểm tuần · Km 1561+134» | same | same | **PASS** |
| Nav `LinmTopBar` text «Trang Chủ» + «Đồng bộ» | kit text slots | kit text slots | **PASS** — implement_kit |
| Banner weak khi pending | `offline-banner` | `offline-banner` | **PASS** |
| Entry Me `row-offline` + Home `tile-offline` | Maestro PASS | Maestro PASS | **PASS** — route_a |
| Tab index in-screen | `tabs: none` | `tabs: none` | **PASS** |
| Must align mở | — | — | **0** → `align_confirm` **approve** |

Evidence: `qa/store/patrol-offline/{A3-CORE,P6-CORE,P6-CORE-2}.png` · CAPTURE.md · manifest `ok: true`.

## Store gate (Review note — **không** `READY_TO_SUBMIT` ở role này)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **thiếu** file app iOS | **Accept** P2 → `post_review` / `/review-app-submit` — **không** chặn list `done` |
| Play Data safety form | deferred store submit | **Accept** P2 |
| Landing HTTPS live | deferred | **Accept** P2 |
| family `1` → **cấm** listing A4 | `TARGETED_DEVICE_FAMILY=1` · A4-IPAD **DEFER** | **OK** |
| Store PNG live (QA) | A11/A9/A3/P6 **PASS** · px 1320×2868 / 1080×1920 | **OK** for Review · listing official → `/store-image-capture` |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip` (Recommended — chưa store submit).

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · local queue only | **OK** |
| R-02 | API | — | Chỉ `POST integration/sync/offline-batch` proxy · **cấm** GET queue / PatrolOfflineController | **OK** |
| R-03 | DTO | — | OfflineQueueItem dual parity · demoItems SSOT · sync body PascalCase | **OK** |
| R-04 | UX gap | P2 | Android card thiếu `#i-mappin` icon (iOS có `mappin`) | **Accept** — visual minor · QA Must 0 |
| R-05 | Align | — | iOS↔Android zone kit parity · segment · banner · 2 card | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · cases A11,A10,A9,A3,P6,P6-2 | **OK** |
| R-07 | Store | P2 | thiếu `PrivacyInfo.xcprivacy` + Data safety / landing | **Accept** — chặn chỉ khi `app_submit` |
| R-08 | Scope | — | check-in live · incident form · conflict UI · sibling enqueue **OUT** P1 | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** · reuse Integration offline-batch | **OK** |
| R-10 | Gap | — | GAP-MOB-ACT-PAT-OFFLINE-01 patrol-home nav «Đồng bộ» wire sibling | **Defer** — stub OK P1 · non-block |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-PAT-OFFLINE | PASS (prior Dev + Review re-audit) |
| T-AND-PAT-OFFLINE | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_694706b6`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |

## VERIFY GATE (`task_94592434` recheck)

| Gate | Result |
|------|--------|
| iOS `xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** | **PASS** · BUILD SUCCEEDED |
| Android `./gradlew :app:assembleDebug` | **PASS** · BUILD SUCCESSFUL |
| BFF `dotnet build` | **PASS** · 0 Warning(s) · 0 Error(s) |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok: true`) — Review không re-run |

## Verdict

List Hàng đợi mất sóng dual-native: security token/local-store/API scope PASS · GAP-F-OFFLINE-01 seed-once PASS · UI align 0 Must · QA store live PASS · VERIFY GATE native+BFF PASS. P2 PrivacyInfo/mappin icon **Accept** đến `post_review`/`app_submit`. GAP-MOB-ACT-PAT-OFFLINE-01 patrol-home nav **Defer** P1. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** (autoApprove) |
| Next | visual sau done → `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.19.29 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.29 |
| rulesVersion | 2026.08.19.34 |
| generatedAt | 2026-08-19T14:15:00.000Z |
| versionGate | rechecked |
| taskId | `task_94592434` |
| contentHashPriorQa | `task_694706b6` |
| dataAnalySkillVersion | 2026.08.19.27 |
| poSkillVersion | 2026.08.19.23 |
| designSkillVersion | 2026.08.19.24 |
| saSkillVersion | 2026.08.19.22 |
| teamLeadSkillVersion | 2026.08.19.22 |
| devSkillVersion | 2026.08.19.24 |
| qaSkillVersion | 2026.08.19.28 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
