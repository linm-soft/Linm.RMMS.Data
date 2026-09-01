# Review — Findings — attendance-day (mobile · Chi tiết ngày công)

| Field | Value |
|-------|-------|
| feature | `attendance-day` |
| title | [Mobile] [Chấm công] -> Chi tiết ngày công |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_58514c12` · autoApprove=ON) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · GAP-MOB-ATT-DAY-PACK-01 **closed**) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / e2e/build ở role này |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** · `task_a8beae6d` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · `task_94e812e1` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · reuse GetList + client filter · Step 4b N/A · `task_cbc3f3ce` |
| prior · design | `ui/design.md` · `demo-parity.md` · **confirmed** · `task_db7380c8` |
| prior · tl | `task/attendance-day.md` · **confirmed** · T-IOS-ATT-DAY · T-AND-ATT-DAY · `task_f515c7f2` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `GET patrol/attendance-logs` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** · Step 4b N/A |
| domain | **Patrol** · readonly GET list + client filter `dayKey` |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA done · **cấm** re-run e2e/build/start:std ở role review |
| updatedAt | `2026-08-31T03:18:00.000Z` |
| taskId | `task_58514c12` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `Presentation/Features/AttendanceDay/*` · `FetchAttendanceDayUseCase` · `AttendanceDayDtoMapper` · hub wire `AppRouter.showAttendanceDay` · `AttendanceViewModel.setOnOpenDay` |
| Android | `presentation/feature/attendanceday/*` · `FetchAttendanceDayUseCase` · `AttendanceDayDtoMapper` · `MainTabScreen` route `attendance-day/{dayKey}/{dayTitle}` |
| BFF | proxy catch-all · **cấm invent** `AttendanceDayController` |
| API | reuse `GET patrol/attendance-logs` · XCO · client filter `dayKey` · Step 4b N/A |
| QA store | `qa/store/attendance-day/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| align | `ui/review/demo-parity.md` · Must **0** · prior QA vision **Aligned** |
| skillVersion | agent-review-mobile **2026.08.29.1** |
| contentHash | `sha256:attendance-day-control-hint-20260831` · unchanged |
| realDataHash | `sha256:attendance-day-real-data-20260831` · unchanged |
| bffContentHash | `sha256:patrol-attendance-logs-list-day-filter` · unchanged |
| reviewHash | `sha256:attendance-day-review-20260831` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** — slug dùng `ApiClient` / Retrofit interceptor giữ Bearer |
| Interceptor Bearer + `X-Company-Id` | **PASS** — mọi GET qua BFF prefix `mobile-bff/api/v1` |
| IDOR `{id}` | **N/A** — readonly day aggregate · client filter post-GET · không GetById drill |
| Location Info.plist / Manifest | **PASS** — **readonly** Lat/Lng trên log sub nếu bind · **cấm** request location (`AC-D-02`) |
| Camera | **N/A** — no capture on detail |
| Deny / leave · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** — LinmToast / LinmBanner only · EmptyChrome empty day |
| Invent `api/v1/attendance-day` / `AttendanceDayController` | **PASS** — none · path `patrol/attendance-logs` |
| Fake GET 200 on fail | **PASS** — offline demo + toast · screen vẫn mở · **cấm** fake 200 |
| Plaintext JWT / hardcode prod when GET OK | **PASS** — demo SSOT chỉ fail/empty path |
| Watermark / device label / `mfeStdUrl` | **PASS** — không ship |
| ERP.* | **PASS** — Patrol domain only |
| 403 XCO | **PASS** — toast forbidden + back hub |

## DTO parity (iOS = Android = wire)

| Field | Disposition |
|-------|-------------|
| `AttendanceLogItemDto` filter | **OK** dual — `CheckInAt` → start-of-day local match `dayKey` |
| Badge aggregate | **OK** — 0→Nghỉ · 1→Đã chấm · ≥2→Đủ công · any `InZone=false`→warn |
| Range label | **OK** — 0→«—» · 1→`HH:mm` · ≥2→`{min} – {max}` |
| Route/shift | **OK** — first log `Route` · demo shift «Ca sáng» offline |
| Count | **OK** — `{n} lần chấm` |
| Log row | **OK** — sort asc · sub=`{Route} · {Status} · {InZone VN}` · badge Trong/Ngoài vùng |
| Demo fallback | **OK** — T7 09/08 full · CN 10/08 empty · dual `AttendanceDayCopy` |
| Tab invent / GAP-TAB-01 | **OK** — pack `tabs: none` · shell Tab 5 Tuần đường selected |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE (1320×2868) vs demo `#sc-attendance-day` | **PASS** — title **Chi tiết ngày công** · back **Chấm công**+chevron · hero **T7 09/08** 28 · badge **Đủ công** · 3 summary rows · section **Các lần chấm** · 2 log rows · tab Tuần đường · no watermark |
| P6-CORE (1080×1920) vs demo | **PASS** — same zones · Android icon-only back (platform-OK) · hero 24 · LinmListRow rows |
| P6-CORE-2 scroll fold | **PASS** — log rows visible scroll |
| Must align / demo-parity / bugs OPEN | **0** |
| GAP-MOB-E2E-VIS-01 | **none** — CORE PNG prior QA · align **Aligned** |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 1320×2868 · P6/P6-2 1080×1920 | **PASS** (`CAPTURE.md` · `manifest.json` `ok:true`) |
| BFF :5202 · API :5111 docker | **PASS** (prior QA A10-BFF) |
| A4-IPAD | **DEFER** Phase 1 · family `1` |
| READY_TO_SUBMIT | **không** (Review) |

## Clickables / crawl (Step 5d)

| Check | Result |
|-------|--------|
| `/run-mobile-e2e --crawl` | **SKIP** — roleOnly=`review` VERIFY GATE · **cấm** yarn e2e |
| Evidence | prior QA Maestro `#sc-attendance-day` · hub day row → detail · back `btn-att-day-back` |
| action-tree | `_data-analy/attendance-day-action-tree.md` · GET same-slug · tap log toast same-slug |
| GAP-MOB-ACT-03 | **none** — back hub · appear GET · tap log toast · **cấm** enqueue sibling |
| Sibling enqueue | **none** · report/supervise GetById **OUT** (`GAP-MOB-ACT-06`) |

## Real data (Step 5e)

| Check | Result |
|-------|--------|
| `AttendanceDayCopy.demoFullDay` / `demoEmptyDay` fallback | **OK** — SSOT T7/CN · chỉ fail/empty path |
| Fake toast ok | **none** — loadFail/forbidden/missingDayKey only |
| GAP-MOB-REAL-02 | **closed** |
| GAP-QA-REAL-01 | **closed** — BFF empty DB → offline demo SSOT aligned dual |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Bearer + XCO · 403 toast+back · no invent API · no ERP | **OK** |
| R-02 | API | — | reuse `GET patrol/attendance-logs` + client filter · Step 4b N/A | **OK** |
| R-03 | DTO | — | dual mapper parity · badge/range/count/logs · demo SSOT T7/CN | **OK** |
| R-04 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned · prior QA vision | **OK** |
| R-05 | Scope | — | screen `#sc-attendance-day` only · hub push wired · **cấm** supervise-detail GetById | **OK** |
| R-06 | QA | — | e2eQa ON · Maestro iOS+Android · store live · prior PASS | **OK** |
| R-07 | Nav | — | Hub day row → push + dayKey/dayTitle · supersede toast-only | **OK** |
| R-08 | Demo | Should | Empty day CN 10/08 · BFF empty → offline SSOT T7 | **Accept** (code review · AC-F-04 N/A e2e) |
| R-09 | Crawl | — | e2e `--crawl` SKIP role review · ACT-03 none | **OK** |
| R-10 | Step 4b | — | N/A · review **skip** re-run | **OK** |
| R-11 | Pack | — | packKind **screen** push · route_a · kit reuse map | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-ATT-DAY | PASS (prior Dev) |
| T-AND-ATT-DAY | PASS (prior Dev) |
| T-BE-API · T-BE-MIG | n/a |
| T-QA-ATT-DAY | PASS (`ok:true` · Must align 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_58514c12` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Mobile screen `#sc-attendance-day` dual-native: security + DTO + UI align Must **0** · prior QA/Dev VERIFY PASS · reuse Patrol GetList + client filter · no open P0 / REAL / ACT-03. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Sibling | `attendance-report` · **pending_confirm** · tap log **cấm** supervise-detail push |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T03:18:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| taskId | `task_58514c12` |
| contentHash | sha256:attendance-day-control-hint-20260831 |
| realDataHash | sha256:attendance-day-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-list-day-filter |
| reviewHash | sha256:attendance-day-review-20260831 |
| priorQaTaskId | `task_a8beae6d` |
| priorDevTaskId | `task_94e812e1` |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked reviewHash=sha256:attendance-day-review-20260831 -->
