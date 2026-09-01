# Review — Findings — asset-hub

| Field | Value |
|-------|-------|
| feature | `asset-hub` |
| title | [Mobile] Tài sản |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_042eeb65` · autoApprove=ON) |
| packKind | **`hub`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `task_4e062d1e` · recheck post cleanup_mock · e2e `ok: true` |
| prior · dev | `task_9c9293d2` · cleanup_mock live-only · **confirmed** |
| prior · sa | `task_d250d60c` · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-09-01T04:15:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `AssetHubView` · `AssetHubViewModel` · live wallet · toast loadFail |
| Android | `AssetHubScreen` · `AssetHubViewModel` · live wallet · toast loadFail |
| BFF | `MobileApiProxyController` catch-all · **không** `AssetHubController` |
| API | `GET integration/asset-types` · optional `GET integration/road-routes/search` · `GET ai-vision/asset-candidates?status=Draft` |
| skillVersion | agent-review-mobile **2026.08.19.22** |
| live re-audit | 2026-09-01 after QA `task_4e062d1e` · cleanup_mock `task_9c9293d2` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` + `X-Timezone` | **PASS** |
| IDOR `{id}` trên hub | **N/A** — không GET/{id} catalog |
| Location / camera Info.plist + Manifest trên slug `asset-hub` | **N/A** — hub không GPS/camera |
| `alert` / `UIAlert` / `AlertDialog` trên AssetHub | **PASS** — toast only |
| Plaintext token / fork API / POST confirm | **PASS** — 3 GET reuse · toast **Xác nhận AI** |
| Role / wallet invent org | **PASS** — optional route search · fail → empty + toast |

## Real data (cleanup_mock recheck)

| Check | Result |
|-------|--------|
| **GAP-MOB-REAL-02** demoItems / hardcode wallet | **PASS** — **cấm** demoTitle/demoCount/patrolLine · live GET only |
| Wallet fail path | **PASS** — empty title/subtitle + `asset.hub.toast.loadFail` |
| AI pending empty | **PASS** — section ẩn (`if let candidate` / `firstOrNull`) |
| **GAP-QA-REAL-01** QA chứng BFF/DB | **PASS** — A10-BFF · A3 live wallet «QL.1 · 46 loại KCHT» |

## DTO parity (iOS = Android = Integration/AiVision)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| `totalCount` · envelope `data` | `AssetTypePagedDto` | `AssetTypePagedDto` | **OK** |
| `code` · `name` route search | `RoadRouteSearchItemDto` | same | **OK** |
| `code` · `assetClass` · `score` · `routeLabel` · `status` | `AssetCandidateItemDto` | same | **OK** |
| Domain + 3 use cases | reuse | reuse | **OK** |

## UI align (QA shots 2 OS · post cleanup)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| Nav **Tài sản** · wallet live · hub-grid ×3 | `A3-CORE` | `P6-CORE` | **PASS** — Must align = 0 |
| `#row-map` · tab Trang Chủ selected | `A3-CORE` | `P6-CORE-2` | **PASS** |
| Patrol line removed post-cleanup | iOS omit | Android omit | **PASS** |
| Tile phụ 32 loại / map subtitle | proto dual | proto dual | **PASS** — Design §5 |
| AI section empty live | hidden | hidden | **PASS** — GAP-F-AHUB-03 |
| Kit chrome `LinmTabBar` dual | QA dual align | QA dual align | **PASS** |
| Must align mở | — | — | **0** |

Evidence: `qa/store/asset-hub/{A3-CORE,P6-CORE,P6-CORE-2}.png` · CAPTURE.md · manifest `ok: true`.

## Store gate (Review note — **không** `READY_TO_SUBMIT` ở role này)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **thiếu** file app iOS | **Accept** P2 → `post_review` |
| Play Data safety form | deferred | **Accept** P2 |
| Landing HTTPS live | deferred | **Accept** P2 |
| family `1` → **cấm** listing A4 | A4-IPAD **DEFER** | **OK** |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · headers | **OK** |
| R-02 | API | — | 3 GET live proxy · không fork / POST confirm | **OK** |
| R-03 | DTO | — | asset-types + road-routes + candidates dual parity | **OK** |
| R-04 | UX gap | — | GAP-F-AHUB-01/02/03 verified · không block hub | **OK** |
| R-05 | Align | — | iOS↔Android zone kit parity · Must = 0 | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · `task_4e062d1e` recheck | **OK** |
| R-07 | Store | P2 | PrivacyInfo + Data safety / landing | **Accept** |
| R-08 | Scope | — | Sibling 8 × `pending_confirm` · **cấm** auto start | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** | **OK** |
| R-10 | Real data | — | cleanup_mock live-only wallet · **GAP-MOB-REAL-02 Closed** | **OK** |
| R-11 | Cleanup | — | GAP-MOB-AHUB-CLEANUP-01 wallet/toast/patrolLine | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-ASSET-HUB | PASS |
| T-AND-ASSET-HUB | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_4e062d1e`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |
| T-REVIEW-CLEANUP | PASS |

## VERIFY GATE (`task_042eeb65` recheck)

| Gate | Result |
|------|--------|
| iOS `xcodegen` + `xcodebuild` iPhone 17 Pro | prior Dev **PASS** — Review không re-run |
| Android `assembleDebug` | prior Dev **PASS** |
| BFF `dotnet build` | prior Dev **PASS** |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok: true`) — Review không re-run |

## Verdict

Hub Tài sản dual-native post cleanup_mock: security · DTO · API · live-only wallet PASS · UI align Must = 0 · QA store live PASS. P2 PrivacyInfo **Accept** đến `post_review`. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** (autoApprove) |
| Next | sibling `pending_confirm` chờ board Approve |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.19.22 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.23 |
| rulesVersion | 2026.08.19.28 |
| generatedAt | 2026-09-01T04:15:00.000Z |
| versionGate | rechecked |
| taskId | `task_042eeb65` |
| contentHashPriorQa | `task_4e062d1e` |
| contentHashPriorDev | `task_9c9293d2` |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.22 schemaVersion=1 workflowVersion=2026.08.19.23 rulesVersion=2026.08.19.28 versionGate=rechecked -->
