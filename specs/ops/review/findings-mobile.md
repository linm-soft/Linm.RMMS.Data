# Review — Findings — ops (mobile list · Thông báo)

| Field | Value |
|-------|-------|
| feature | `ops` |
| title | [Mobile] Thông báo |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_a85d01a0` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `task_6be285ee` · `qa/scenarios.md` · **confirmed** · e2e `ok: true` |
| prior · dev | `task_3b00ed47` · `implement/{ios,android}.md` · **confirmed** |
| prior · sa | `task_47a20229` · `be/solution-discovery-mobile.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `notification/inbox*` · `notification/overview` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-08-19T13:09:24.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `OpsView` · `OpsViewModel` · `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` · Keychain |
| Android | `OpsScreen` · `OpsViewModel` · EncryptedSharedPreferences |
| BFF | `MobileApiProxyController` catch-all → `notification/inbox*` · **không** `OpsController` |
| API | `GET notification/inbox` · `POST notification/inbox/{id}/mark-read` · optional `GET notification/overview` P2 |
| skillVersion | agent-review-mobile **2026.08.19.26** |
| live re-audit | 2026-08-19 after QA `task_6be285ee` · VERIFY GATE recheck |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` + `X-Timezone` (ApiClient / AuthInterceptor) | **PASS** |
| IDOR `{id}` mark-read | **PASS** — POST scoped user inbox · demo id `demo-*` local only |
| Location / camera Info.plist + Manifest copy trên slug `ops` | **N/A** — list không GPS/camera |
| `alert` / `UIAlert` / `AlertDialog` trên Ops | **PASS** — `LinmToast` / toast kit only |
| Plaintext token / fork API `api/v1/ops` / invent BFF controller | **PASS** — proxy `notification/*` only |
| Role / wallet invent org | **PASS** — demo rows SSOT khi fail/empty |
| Foot «Phiên bản Gói» / WebView | **PASS** — không ship |

## DTO parity (iOS = Android = Notification)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| `id` · `title` · `sender` · `sentAt` · `isUnread` | `NotificationItemDto` → `OpsDtoMapper` | same mapper pattern | **OK** |
| Domain `OpsInboxItem` + badge `Mới`/`Đã đọc` | reuse | reuse | **OK** — **cấm** fork mobile-only DTO |
| Demo fallback 2 rows | `OpsCopy.demoItems` | `OpsCopy.demoItems` | **OK** — Design §3 copy VN |
| Use cases | `FetchOpsInboxUseCase` · `MarkOpsReadUseCase` | same | **OK** |

## UI align (QA shots 2 OS)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-ops` list · 2 rows · badge | `A3-CORE` | `P6-CORE` | **PASS** — cùng zone · Must **0** |
| Row 1 «Ưu tiên SC-2401» · Mới | same | same | **PASS** — demo-parity §Must |
| Row 2 «Ca PAT-…0014» · Đã đọc | same | same | **PASS** |
| Nav entry Me `row-ops` + Home bell | Maestro PASS | Maestro PASS | **PASS** — route_a |
| Kit chrome `LinmTopBar` · `LinmListRow` · `LinmBadge` | QA dual align | QA dual align | **PASS** |
| Tab index in-screen | `tabs: none` | `tabs: none` | **PASS** — shell 5-tab IA giữ |
| Must align mở | — | — | **0** → `align_confirm` **approve** |

Evidence: `qa/store/ops/{A3-CORE,P6-CORE,P6-CORE-2}.png` · CAPTURE.md · manifest `ok: true`.

## Store gate (Review note — **không** `READY_TO_SUBMIT` ở role này)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **thiếu** file app iOS | **Accept** P2 → `post_review` / `/review-app-submit` — **không** chặn list `done` |
| Play Data safety form | deferred store submit | **Accept** P2 |
| Landing HTTPS live | deferred | **Accept** P2 · **cấm** localhost listing (`GAP-SA-STORE-01`) |
| Signup → xóa TK | **N/A** list · no account create | **OK** |
| family `1` → **cấm** listing A4 | `TARGETED_DEVICE_FAMILY=1` · A4-IPAD **DEFER** | **OK** |
| Store PNG live (QA) | A11/A9/A3/P6 **PASS** · px 1320×2868 / 1080×1920 | **OK** for Review · listing official → `/store-image-capture` |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip` (Recommended — chưa store submit).

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · X-Company-Id | **OK** |
| R-02 | API | — | Chỉ `notification/inbox*` proxy · **cấm** fork `api/v1/ops` | **OK** |
| R-03 | DTO | — | OpsInboxItem dual parity · NotificationDto mapper | **OK** |
| R-04 | UX gap | — | GAP-MOB-UX-COMP-OPS-01 Android TopBar trailing default · Should DEFER | **OK** — non-block |
| R-05 | Align | — | iOS↔Android zone kit parity · 0 GAP-MOB-ALIGN Must | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · cases A11,A10,A9,A3,P6,P6-2 | **OK** |
| R-07 | Store | P2 | thiếu `PrivacyInfo.xcprivacy` + Data safety / landing | **Accept** — chặn chỉ khi `app_submit` |
| R-08 | Scope | — | Form create / Kind B / SignalR / Command **OUT** mobile P1 | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** · reuse Notification Signed | **OK** |
| R-10 | Nice | P2 | Me badge unread live via `notification/overview` | **Defer** optional P2 |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-OPS | PASS (prior Dev + Review re-audit) |
| T-AND-OPS | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_6be285ee`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |

## VERIFY GATE (`task_a85d01a0` recheck)

| Gate | Result |
|------|--------|
| iOS `xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** | **PASS** · BUILD SUCCEEDED |
| Android `./gradlew :app:assembleDebug` | **PASS** · BUILD SUCCESSFUL |
| BFF `dotnet build` | **PASS** · 0 Warning(s) · 0 Error(s) |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok: true`) — Review không re-run |

## Verdict

List Thông báo dual-native: security token/DTO/API scope PASS · UI align 0 Must · QA store live PASS · VERIFY GATE native+BFF PASS. P2 PrivacyInfo/Data safety **Accept** đến `post_review`/`app_submit`. **Approve** (autopilot). Pipeline **complete**.

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
| skillVersion | 2026.08.19.26 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.19.27 |
| rulesVersion | 2026.08.19.32 |
| generatedAt | 2026-08-19T13:09:24.000Z |
| versionGate | rechecked |
| taskId | `task_a85d01a0` |
| contentHashPriorQa | `task_6be285ee` |
| dataAnalySkillVersion | 2026.08.19.27 |
| poSkillVersion | 2026.08.19.23 |
| designSkillVersion | 2026.08.19.24 |
| saSkillVersion | 2026.08.19.22 |
| teamLeadSkillVersion | 2026.08.19.22 |
| devSkillVersion | 2026.08.19.24 |
| qaSkillVersion | 2026.08.19.28 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.19.27 rulesVersion=2026.08.19.32 versionGate=rechecked -->
