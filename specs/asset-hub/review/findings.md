# Review — Findings — asset-hub

| Field | Value |
|-------|-------|
| feature | `asset-hub` |
| title | [Mobile] Tài sản |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_0cf68cc3` · autoApprove=ON) |
| packKind | **`hub`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `task_3e29163a` · `qa/scenarios.md` · **confirmed** · e2e `ok: true` |
| prior · dev | `task_746238de` · `implement/{ios,android}.md` · **confirmed** |
| prior · sa | `task_d250d60c` · `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `integration/*` · `ai-vision/*` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-08-19T10:09:09.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `AssetHubView` · `AssetHubViewModel` · Integration + AiVision repos · Keychain |
| Android | `AssetHubScreen` · `AssetHubViewModel` · EncryptedSharedPreferences |
| BFF | `MobileApiProxyController` catch-all · **không** `AssetHubController` |
| API | `GET integration/asset-types` · optional `GET integration/road-routes/search` · `GET ai-vision/asset-candidates?status=Draft` |
| skillVersion | agent-review-mobile **2026.08.19.22** |
| live re-audit | 2026-08-19 after QA `task_3e29163a` · VERIFY GATE recheck |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` + `X-Timezone` (ApiClient / AuthInterceptor) | **PASS** |
| IDOR `{id}` trên hub | **N/A** — không GET/{id} catalog · không gọi `asset-types/{id}` |
| Location / camera Info.plist + Manifest copy trên slug `asset-hub` | **N/A** — hub không GPS/camera (sibling) · Info.plist không NSLocation/NSCamera · Manifest INTERNET / NETWORK_STATE / POST_NOTIFICATIONS |
| `alert` / `UIAlert` / `AlertDialog` trên AssetHub | **PASS** — `LinmToast` / `LinmToastHost` only |
| Plaintext token / fork API `api/v1/asset-hub` / POST confirm | **PASS** — 3 GET reuse · toast **Xác nhận AI** · **cấm** POST HITL |
| Role / wallet invent org | **PASS** — optional route search · fail → demo (`GAP-F-AHUB-01`) |
| Foot «Phiên bản Gói» / WebView | **PASS** — không ship |

## DTO parity (iOS = Android = Integration/AiVision)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| `totalCount` · envelope `data` | `AssetTypePagedDto` | `AssetTypePagedDto` | **OK** |
| `code` · `name` route search | `RoadRouteSearchItemDto` | same | **OK** |
| `code` · `assetClass` · `score` · `routeLabel` · `status` | `AssetCandidateItemDto` | same | **OK** |
| Domain `RoadRouteSummary` + `AssetCandidate` + 3 use cases | reuse | reuse | **OK** — **cấm** fork hub aggregate DTO |

## UI align (QA shots 2 OS)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| Nav **Tài sản** · wallet · hub-grid ×3 | `A3-CORE` | `P6-CORE` | **PASS** — cùng zone · **không** GAP-MOB-ALIGN-* Must |
| `#row-map` · tab Trang Chủ selected | `A3-CORE` | `P6-CORE-2` | **PASS** |
| Patrol line iOS · Android omit | `A3-CORE` | `P6-CORE` | **PASS** — Design §5 |
| Tile phụ 32 loại / map subtitle rút gọn Android | proto dual | proto dual | **PASS** — Design §5 · **không** GAP-MOB-DEMO-COPY Must |
| AI sub «Độ tin cậy» iOS vs `%` Android | code dual | code dual | **PASS** — Design §5 · section ẩn live (0 Draft) |
| Indigo / warn hex HIG vs M3 | `#5856D6` / `#FF9500` | `#6750A4` / `#E8A317` | **PASS** — Design §4 |
| Kit chrome `LinmTabBar` dual | QA dual align | QA dual align | **PASS** — **cấm** TabView/M3 fork |
| Tab index in-screen | `tabs: none` | `tabs: none` | **PASS** — **không** GAP-TAB-01 · shell 5-tab IA giữ |
| Must align mở | — | — | **0** → `align_confirm` **N/A** |

Evidence: `qa/store/asset-hub/{A3-CORE,P6-CORE,P6-CORE-2}.png` · CAPTURE.md · manifest `ok: true`.

## Store gate (Review note — **không** `READY_TO_SUBMIT` ở role này)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **thiếu** file app iOS | **Accept** P2 → `post_review` / `/review-app-submit` — **không** chặn hub `done` |
| Play Data safety form | deferred store submit | **Accept** P2 |
| Landing HTTPS live | deferred | **Accept** P2 · **cấm** localhost listing (`GAP-SA-STORE-01`) |
| Signup → xóa TK | **N/A** hub · no account create | **OK** |
| family `1` → **cấm** listing A4 | `TARGETED_DEVICE_FAMILY=1` · A4-IPAD **DEFER** | **OK** (`GAP-SUBMIT-IMG-08`) |
| Store PNG live (QA) | A11/A9/A3/P6 **PASS** · px 1320×2868 / 1080×1920 | **OK** for Review · listing official → `/store-image-capture` |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip` (Recommended — chưa store submit).

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · X-Company-Id · X-Timezone | **OK** |
| R-02 | API | — | 3 GET live proxy · không fork / `AssetHubController` / POST confirm | **OK** |
| R-03 | DTO | — | asset-types + road-routes + candidates dual parity | **OK** |
| R-04 | UX gap | — | GAP-F-AHUB-01/02/03 verified live shot (iOS live · Android demo fallback) | **OK** |
| R-05 | Align | — | iOS↔Android zone kit parity · 0 GAP-MOB-ALIGN / GAP-MOB-DEMO Must | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · cases A11,A10,A9,A3,P6,P6-2 | **OK** |
| R-07 | Store | P2 | thiếu `PrivacyInfo.xcprivacy` + Data safety / landing | **Accept** — chặn chỉ khi `app_submit` |
| R-08 | Scope | — | Sibling 8 × `pending_confirm` · **cấm** auto start (`GAP-MOB-ACT-06`) | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** · reuse Integration + AiVision | **OK** |
| R-10 | Placeholder | — | **cấm** watermark Gói · **cấm** WebView HTML | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-ASSET-HUB | PASS (prior Dev + Review re-audit) |
| T-AND-ASSET-HUB | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_3e29163a`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |

## VERIFY GATE (`task_0cf68cc3` recheck)

| Gate | Result |
|------|--------|
| iOS `xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** | **PASS** · BUILD SUCCEEDED |
| Android `./gradlew :app:assembleDebug` | **PASS** · BUILD SUCCESSFUL |
| BFF `dotnet build` | **PASS** · 0 Warning(s) · 0 Error(s) |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok: true`) — Review không re-run |

## Verdict

Hub Tài sản dual-native: security token/DTO/API scope PASS · UI align 0 Must · QA store live PASS · VERIFY GATE native+BFF PASS. P2 PrivacyInfo/Data safety **Accept** đến `post_review`/`app_submit`. **Approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** (autoApprove) |
| Next | sibling `pending_confirm` chờ board Approve — **cấm** chain implement |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.19.22 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.23 |
| rulesVersion | 2026.08.19.28 |
| generatedAt | 2026-08-19T10:09:09.000Z |
| versionGate | rechecked |
| taskId | `task_0cf68cc3` |
| contentHashPriorQa | `task_3e29163a` |
| dataAnalySkillVersion | 2026.08.19.17 |
| poSkillVersion | 2026.08.19.22 |
| designSkillVersion | 2026.08.19.07 |
| saSkillVersion | 2026.08.19.21 |
| teamLeadSkillVersion | 2026.08.19.21 |
| devSkillVersion | 2026.08.19.22 |
| qaSkillVersion | 2026.08.19.22 |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.22 schemaVersion=1 workflowVersion=2026.08.19.23 rulesVersion=2026.08.19.28 versionGate=rechecked -->
