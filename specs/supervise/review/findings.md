# Review — Findings — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Mobile] Giám sát |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_ae0b11d0` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `edit_page` · gap=`cleanup_mock` |
| prior · qa | `task_16b5d063` · `qa/scenarios.md` · **confirmed** · e2e `ok:true` · EmptyChrome Aligned |
| prior · dev | `task_65931a17` · `implement/{ios,android}.md` · **confirmed** · live-only |
| prior · sa | `task_761211bf` · `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `GET patrol/attendance-logs` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-09-01T03:00:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `SuperviseView` · `SuperviseViewModel` · `SuperviseRepositoryImpl` · `FetchSuperviseCheckinsUseCase` · `SuperviseDtoMapper` |
| Android | `SuperviseScreen` · `SuperviseViewModel` · `SuperviseRepositoryImpl` · `SuperviseDtoMapper` · same use case |
| BFF | `MobileApiProxyController` catch-all → `GET patrol/attendance-logs` · **cấm** `SuperviseController` |
| API | `GET patrol/attendance-logs` Bearer · **live-only** · EmptyChrome khi tenant rỗng |
| skillVersion | agent-review-mobile **2026.08.19.26** |
| live re-audit | 2026-09-01 after QA `task_16b5d063` · cleanup_mock `task_65931a17` · `task_ae0b11d0` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` (AuthInterceptor) | **PASS** |
| Interceptor Bearer + company/timezone headers (ApiClient / AuthInterceptor) | **PASS** |
| IDOR / invent permission | **N/A** — read-only attendance list · no per-record mutation |
| Location / camera Info.plist + Manifest | **N/A** — list P1 thumb placeholder · no live GPS |
| `alert` / `UIAlert` / `AlertDialog` trên Supervise | **PASS** — `LinmToast` / session toast only |
| Plaintext token / invent `GET supervise` / `SuperviseController` | **PASS** — proxy `patrol/attendance-logs` only |
| Foot «Phiên bản Gói» / WebView | **PASS** — không ship |
| Watermark / device label | **PASS** — không ship |
| Mock banner «Đang dùng dữ liệu mẫu» / `demoItems` | **PASS** — removed dual (cleanup_mock) |

## DTO parity (iOS = Android = BFF)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| Attendance list | `SuperviseRepositoryImpl` GET `patrol/attendance-logs` | same Retrofit path | **OK** |
| Org fallback | `SuperviseCopy.orgFallback` khi `Note` empty | same SSOT | **OK** — GAP-MOB-SUP-03 |
| Demo fallback | **removed** · no `demoItems` | **removed** | **OK** — cleanup_mock |
| Empty / fail | EmptyChrome `sup-empty` · loadFail toast | same | **OK** |
| Location bind | `route` + `kmPoint` join | same | **OK** |
| Status map | «Đúng tuyến» → «Đã ghi điểm tuần» | same | **OK** |
| Time format | `yyyy-MM-dd HH:mm:ss` vi_VN | same pattern | **OK** |
| Page params | `page=1` · `pageSize=50` | same | **OK** |

## UI align (QA shots 2 OS · post cleanup_mock)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-supervise` TopBar · segment · EmptyChrome | `A3-CORE` | `P6-CORE` | **PASS** — Aligned · Must **0** |
| Title **Giám sát tuần đường** · back **Trang Chủ** | same | same | **PASS** |
| Empty **Chưa có check-in** `sup-empty` | same | same | **PASS** — live empty tenant |
| Segment idx 0 list · idx 1 toast Bản đồ | same | same | **PASS** |
| Lọc toast **Lọc tuyến · ngày** | A3 context | `P6-CORE-2` | **PASS** |
| Cấm mock banner | no «Đang dùng dữ liệu mẫu» | same | **PASS** |
| Tab 5 home context under push | same | same | **PASS** — GAP-QA-SUP-TAB-01 Should |
| Entry Home `tile-supervise` | Maestro PASS | Maestro PASS | **PASS** — route_a |
| Must align mở | — | — | **0** → `align_confirm` **approve** |

Evidence: `qa/store/supervise/{A3-CORE,P6-CORE,P6-CORE-2,A11-LAUNCH,A9-LOGIN}.png` · CAPTURE.md · manifest `ok: true`.

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
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · read-only list only | **OK** |
| R-02 | API | — | Chỉ `GET patrol/attendance-logs` proxy · **cấm** `SuperviseController` / invent endpoint | **OK** |
| R-03 | DTO | — | Attendance list dual parity · org fallback · **live-only** (no demoItems) | **OK** |
| R-04 | UX | P2 | Sibling CTA (map · check-in detail · filter sheet) toast-only P1 | **Accept** — scope list · QA Must 0 |
| R-05 | Align | — | iOS↔Android EmptyChrome chrome parity · segment · toast | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · cases A11,A10,A9,A3,P6,P6-2 · `task_16b5d063` | **OK** |
| R-07 | Store | P2 | thiếu `PrivacyInfo.xcprivacy` + Data safety / landing | **Accept** — chặn chỉ khi `app_submit` |
| R-08 | Scope | — | patrol-map · checkin-detail implement **OUT** P1 | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** · reuse `GET patrol/attendance-logs` | **OK** |
| R-10 | Gap | — | GAP-MOB-SUP-03 org fallback SSOT | **Closed** — shipped dual |
| R-11 | Gap | — | GAP-MOB-ICON-02 outline building/mappin `d=` | **Closed** — shipped dual |
| R-12 | Gap | — | GAP-QA-A11Y-SUP-FILTER-01 iOS `btn-sup-filter` XCUITest | **Defer** — kit follow-up · non-block |
| R-13 | Nav | — | GAP-QA-SUP-TAB-01 tab bar visible on push | **Defer** — Should · non-block |
| R-14 | Scope | — | Sibling `patrol-map` · `checkin-detail` **pending_confirm** · **cấm** auto start | **Defer** — non-block |
| R-15 | Cleanup | — | `cleanup_mock` removed `demoItems` · EmptyChrome live-only | **Closed** — `task_65931a17` + QA verify |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-SUPERVISE | PASS (Dev cleanup_mock + prior Review) |
| T-AND-SUPERVISE | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_16b5d063`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |
| T-REVIEW-CLEANUP | PASS · no `demoItems` / mock banner |

## VERIFY GATE (`task_ae0b11d0` recheck · **cấm** re-run build/e2e ở role review)

| Gate | Result |
|------|--------|
| iOS `xcodegen` + `xcodebuild` | prior Dev **PASS** (`task_65931a17`) |
| Android `./gradlew :app:assembleDebug` | prior Dev **PASS** |
| BFF `dotnet build` | prior Dev **PASS** |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok:true`) — Review không re-run |
| Visual A3↔P6↔demo | **Aligned** · Must **0** |
| Code spot-check | no `demoItems` / «Đang dùng dữ liệu mẫu» on Supervise* dual |

## Verdict

List Giám sát dual-native post-`cleanup_mock`: security token/API scope PASS · live-only EmptyChrome · GAP-MOB-SUP-03/ICON-02 **Closed** · UI align Must **0** · QA store live PASS · VERIFY GATE prior native+BFF+e2e PASS. P2 PrivacyInfo/sibling toast-only **Accept**. GAP-QA-A11Y-SUP-FILTER-01 · GAP-QA-SUP-TAB-01 **Defer** P1. **Approve** (autopilot). Pipeline **complete**.

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
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-01T03:00:00.000Z |
| versionGate | rechecked |
| taskId | `task_ae0b11d0` |
| contentHashPriorQa | `task_16b5d063` |
| contentHash | `sha256:supervise-mobile-cleanup-mock-20260901` |
| dataAnalySkillVersion | 2026.08.19.26 |
| poSkillVersion | 2026.08.19.26 |
| designSkillVersion | 2026.08.19.26 |
| saSkillVersion | 2026.08.19.26 |
| teamLeadSkillVersion | 2026.08.19.26 |
| devSkillVersion | 2026.08.19.26 |
| qaSkillVersion | 2026.08.19.26 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_ae0b11d0 -->
