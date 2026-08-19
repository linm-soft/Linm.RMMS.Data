# Review — Findings — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Mobile] Giám sát |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_33077a59` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `task_45c8bd53` · `qa/scenarios.md` · **confirmed** · e2e `ok: true` |
| prior · dev | `task_e29847e6` · `implement/{ios,android}.md` · **confirmed** |
| prior · sa | `task_761211bf` · `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `GET patrol/attendance-logs` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA runtime PASS · Review **không** re-run Maestro |
| updatedAt | `2026-08-19T16:10:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `SuperviseView` · `SuperviseViewModel` · `SuperviseRepositoryImpl` · `FetchSuperviseCheckinsUseCase` · `SuperviseDtoMapper` |
| Android | `SuperviseScreen` · `SuperviseViewModel` · `SuperviseRepositoryImpl` · `SuperviseDtoMapper` · same use case |
| BFF | `MobileApiProxyController` catch-all → `GET patrol/attendance-logs` · **cấm** `SuperviseController` |
| API | `GET patrol/attendance-logs` Bearer · demo fallback SSOT 2 rows |
| skillVersion | agent-review-mobile **2026.08.19.29** |
| live re-audit | 2026-08-19 after QA `task_45c8bd53` · VERIFY GATE recheck `task_33077a59` |

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

## DTO parity (iOS = Android = BFF)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| Attendance list | `SuperviseRepositoryImpl` GET `patrol/attendance-logs` | same Retrofit path | **OK** |
| Org fallback | `SuperviseCopy.orgFallback` khi `Note` empty | same SSOT | **OK** — GAP-MOB-SUP-03 |
| Demo fallback | `SuperviseCopy.demoItems` 2 rows | same SSOT | **OK** — Nguyễn Văn A · Trần Khánh |
| Location bind | `route` + `kmPoint` join | same | **OK** |
| Status map | «Đúng tuyến» → «Đã ghi điểm tuần» | same | **OK** |
| Time format | `yyyy-MM-dd HH:mm:ss` vi_VN | same pattern | **OK** |
| Page params | `page=1` · `pageSize=50` | same | **OK** |

## UI align (QA shots 2 OS)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-supervise` list · segment · cards | `A3-CORE` | `P6-CORE` | **PASS** — cùng zone · Must **0** |
| Title **Giám sát tuần đường** · back **Trang Chủ** | same | same | **PASS** |
| Segment idx 0 **Danh sách check in** · idx 1 toast **Bản đồ** | same | same | **PASS** |
| Rich-card Nguyễn Văn A · Trần Khánh | same zones | same (P6 fold) | **PASS** |
| Org «Tổ tuần đường · VP-IV.1» card 1 | same | same | **PASS** — GAP-MOB-SUP-03 |
| Lọc toast **Lọc tuyến · ngày** | Maestro text **Lọc** | `btn-sup-filter` testTag | **PASS** |
| Tap card toast **Chi tiết check-in** | same | same | **PASS** |
| Tab 5 home context under push | same | same | **PASS** — GAP-QA-SUP-TAB-01 Should |
| Entry Home `tile-supervise` / patrol-home quick | Maestro PASS | Maestro PASS | **PASS** — route_a |
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
| R-03 | DTO | — | Attendance list dual parity · org fallback · demo fallback SSOT | **OK** |
| R-04 | UX | P2 | Sibling CTA (map · check-in detail · filter sheet) toast-only P1 | **Accept** — scope list · QA Must 0 |
| R-05 | Align | — | iOS↔Android zone kit parity · segment · cards · toast | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · cases A11,A10,A9,A3,P6,P6-2 | **OK** |
| R-07 | Store | P2 | thiếu `PrivacyInfo.xcprivacy` + Data safety / landing | **Accept** — chặn chỉ khi `app_submit` |
| R-08 | Scope | — | patrol-map · checkin-detail implement **OUT** P1 | **OK** |
| R-09 | Step 4b | — | T-BE / migration **N/A** · reuse `GET patrol/attendance-logs` | **OK** |
| R-10 | Gap | — | GAP-MOB-SUP-03 org fallback SSOT | **Closed** — shipped dual |
| R-11 | Gap | — | GAP-MOB-ICON-02 outline building/mappin `d=` | **Closed** — shipped dual |
| R-12 | Gap | — | GAP-QA-A11Y-SUP-FILTER-01 iOS `btn-sup-filter` XCUITest | **Defer** — kit follow-up · non-block |
| R-13 | Nav | — | GAP-QA-SUP-TAB-01 tab bar visible on push | **Defer** — Should · non-block |
| R-14 | Scope | — | Sibling `patrol-map` · `checkin-detail` **pending_confirm** · **cấm** auto start | **Defer** — non-block |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-SUPERVISE | PASS (prior Dev + Review re-audit) |
| T-AND-SUPERVISE | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_45c8bd53`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |

## VERIFY GATE (`task_33077a59` recheck)

| Gate | Result |
|------|--------|
| iOS `xcodegen generate` + `xcodebuild` dest **iPhone 17 Pro** | **PASS** · BUILD SUCCEEDED |
| Android `./gradlew :app:assembleDebug` | **PASS** · BUILD SUCCESSFUL |
| BFF `dotnet build` | **PASS** · 0 Warning(s) · 0 Error(s) |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok: true`) — Review không re-run |

## Verdict

List Giám sát dual-native: security token/API scope PASS · GAP-MOB-SUP-03 org fallback **Closed** · GAP-MOB-ICON-02 icon parity **Closed** · UI align 0 Must · QA store live PASS · VERIFY GATE native+BFF PASS. P2 PrivacyInfo/sibling toast-only **Accept** đến `post_review`/`app_submit`. GAP-QA-A11Y-SUP-FILTER-01 · GAP-QA-SUP-TAB-01 **Defer** P1. **Approve** (autopilot). Pipeline **complete**.

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
| generatedAt | 2026-08-19T16:10:00.000Z |
| versionGate | rechecked |
| taskId | `task_33077a59` |
| contentHashPriorQa | `task_45c8bd53` |
| dataAnalySkillVersion | 2026.08.19.27 |
| poSkillVersion | 2026.08.19.23 |
| designSkillVersion | 2026.08.19.24 |
| saSkillVersion | 2026.08.19.22 |
| teamLeadSkillVersion | 2026.08.19.22 |
| devSkillVersion | 2026.08.19.24 |
| qaSkillVersion | 2026.08.19.28 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.29 schemaVersion=1 workflowVersion=2026.08.19.29 rulesVersion=2026.08.19.34 versionGate=rechecked -->
