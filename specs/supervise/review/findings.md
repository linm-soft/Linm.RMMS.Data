# Review — Findings — supervise (mobile list · Giám sát)

| Field | Value |
|-------|-------|
| feature | `supervise` |
| title | [Mobile] Giám sát tuần đường |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_a995a011` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `edit_page` · gap=`filter_live_map_sibling` |
| prior · qa | `task_cf8f4bfe` · **confirmed** · e2e `ok:true` · filter sheet + map · Aligned |
| prior · dev | `task_a7ad9582` · **confirmed** · dual filter+map build PASS |
| prior · sa | `task_2ac8625f` · **confirmed** · API-01 ±route · Step 4b **N/A** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `GET patrol/attendance-logs` ±`route` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA PASS · Review **không** re-run Maestro / crawl |
| updatedAt | `2026-09-12T10:29:46.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `SuperviseView` · `SuperviseViewModel` · LinmSheet filter · `onOpenMap` · `SuperviseRepositoryImpl` ±`route` |
| Android | `SuperviseScreen` · `SuperviseViewModel` · LinmSheet · same API-01 |
| BFF | catch-all → `GET patrol/attendance-logs` · **cấm** `SuperviseController` |
| API | Bearer · live-only · client day `CheckInAt` · fromDate **P2** |
| skillVersion | agent-review-mobile **2026.08.19.26** |
| contentHash | `sha256:supervise-mobile-filter-live-20260912` |
| live re-audit | 2026-09-12 after QA `task_cf8f4bfe` · Dev `task_a7ad9582` · Review `task_a995a011` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain (`KeychainTokenStore`) · **cấm** UserDefaults JWT | **PASS** |
| Token store Android `EncryptedSharedPreferences` | **PASS** |
| Interceptor Bearer + `X-Company-Id` (ApiClient / AuthInterceptor) | **PASS** |
| IDOR / invent permission | **N/A** — read-only attendance list · detail GET `{id}` keep |
| Location / camera Info.plist + Manifest | **N/A** — list · no live GPS this scope |
| `alert` / `UIAlert` / `AlertDialog` trên Supervise | **PASS** — `LinmToast` loadFail only |
| Plaintext token / invent `GET supervise` / `SuperviseController` | **PASS** — proxy `patrol/attendance-logs` only |
| Foot «Phiên bản Gói» / watermark / device label | **PASS** — không ship |
| Mock banner / `demoItems` | **PASS** — live-only EmptyChrome |

## DTO parity (iOS = Android = BFF)

| Field | iOS | Android | Disposition |
|-------|-----|---------|-------------|
| Attendance list | GET `patrol/attendance-logs` ±`route` | same Retrofit | **OK** |
| Date filter | client `CheckInAt` day | same | **OK** — GAP-MOB-SUP-04 P2 |
| Empty / fail | EmptyChrome · loadFail toast | same | **OK** |
| Location bind | `route` + `kmPoint` | same | **OK** |
| Page params | `page=1` · `pageSize=50` | same | **OK** |
| Filter sheet | Tuyến · Ngày · Áp dụng · Xóa lọc | same ids | **OK** |
| Map seg | idx 1 → `onOpenMap` · reset 0 | same | **OK** |

## UI align (QA shots 2 OS · filter_live)

| Zone | iOS | Android | Result |
|------|-----|---------|--------|
| `#sc-supervise` TopBar · segment · EmptyChrome | `A3-CORE` | `P6-CORE` | **PASS** — Aligned · Must **0** |
| Title **Giám sát tuần đường** · Lọc · back Trang Chủ | same | same | **PASS** |
| Empty **Chưa có check-in** | icon+subtitle | thinner chrome | **PASS** Must · GAP-QA-SUP-EMPTY-AND-01 **Defer** Should |
| Filter sheet `#filter-sheet` Tuyến·Ngày·Áp dụng·Xóa lọc | — | `P6-CORE-2` | **PASS** |
| Map seg → push `#sc-patrol-map` · **cấm** toast | Dev+QA | Dev+QA | **PASS** |
| Tab 5 home context under push | same | same | **PASS** — GAP-QA-SUP-TAB-01 Should |
| Must align mở | — | — | **0** → `align_confirm` **approve** |

Evidence: `qa/store/supervise/{A3-CORE,P6-CORE,P6-CORE-2,A11-LAUNCH,A9-LOGIN}.png` · 1320×2868 / 1080×1920 · CAPTURE.md · manifest `ok: true` · visual Read CORE vs design zones.

## E2E crawl / clickables (5d)

| Check | Result |
|-------|--------|
| `/run-mobile-e2e --crawl` | **SKIP** — VERIFY GATE roleOnly=`review` · **cấm** yarn e2e |
| Prior QA e2e | **PASS** · filter Apply/Clear · map push · A11/A10/A9/A3/P6/P6-2 |
| Action tree | filter sheet · map push · detail push — **wired** · no toast dead-end Must |
| `GAP-MOB-ACT-03` | **none open** — siblings `patrol-map` exists · `supervise-detail` keep · **cấm** auto-start |
| CLICKABLES.md | **N/A** this turn (no crawl) · covered by QA scenarios |

## Real data (5e)

| Check | Result |
|-------|--------|
| `GAP-MOB-REAL-02` demoItems/hardcode source | **PASS** — none on Supervise* dual |
| `GAP-QA-REAL-01` BFF/DB proof | **PASS** — A10-BFF :5202 · API :5101/:5111 |

## Store gate (Review note — **không** `READY_TO_SUBMIT`)

| Check | Result | Disposition |
|-------|--------|-------------|
| `PrivacyInfo.xcprivacy` | **present** at iOS root | **OK** for list Review · full store → `/review-app-submit` |
| Play Data safety / landing HTTPS | deferred store submit | **Accept** P2 |
| family `1` → **cấm** listing A4 | A4-IPAD **DEFER** | **OK** |
| Store PNG live (QA) | A11/A9/A3/P6 **PASS** | **OK** for Review |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / EncryptedPrefs · Bearer · X-Company-Id | **OK** |
| R-02 | API | — | Chỉ `GET patrol/attendance-logs` ±`route` · **cấm** invent supervise | **OK** |
| R-03 | DTO | — | Dual parity · client date · live-only | **OK** |
| R-04 | UX | — | Filter sheet live + map push (closed prior toast-only) | **OK** — GAP-MOB-SUP-01/02 Closed |
| R-05 | Align | — | A3↔P6↔P6-2 vs `#sc-supervise` / `#filter-sheet` · Must 0 | **OK** |
| R-06 | QA | — | e2e-qa-mobile PASS · `task_cf8f4bfe` | **OK** |
| R-07 | Store | P2 | Data safety / landing / A4 listing | **Accept** — app_submit only |
| R-08 | BE | P2 | GAP-MOB-SUP-04 fromDate | **Accept** P2 |
| R-09 | Step 4b | — | T-BE / migration **N/A** | **OK** |
| R-10 | Empty AND | Should | GAP-QA-SUP-EMPTY-AND-01 thinner empty | **Defer** — non-block |
| R-11 | Nav | Should | GAP-QA-SUP-TAB-01 tab bar on push | **Defer** — non-block |
| R-12 | Sibling | — | `patrol-map` STATUS may blocked QA · nav OK | **OK** · **cấm** auto start |
| R-13 | Crawl | — | 5d crawl SKIP roleOnly · no GAP-MOB-ACT-03 open | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-SUP-FILTER · T-IOS-SUP-MAP-NAV | PASS |
| T-AND-SUP-FILTER · T-AND-SUP-MAP-NAV | PASS |
| T-BE-* | **n/a** |
| T-QA (e2e store) | PASS (`task_cf8f4bfe`) |
| T-REVIEW-SEC | PASS |
| T-REVIEW-DTO | PASS |
| T-REVIEW-ALIGN | PASS · Must align = 0 |
| T-REVIEW-REAL | PASS · no demoItems · A10-BFF |

## VERIFY GATE (`task_a995a011` · **cấm** re-run build/e2e ở role review)

| Gate | Result |
|------|--------|
| iOS / Android / BFF build | prior Dev **PASS** (`task_a7ad9582`) |
| Step 4b BE align | **N/A** |
| `yarn e2e-qa-mobile` | prior QA **PASS** (`ok:true` · `2026-09-12T10:24:06.642Z`) |
| Visual A3↔P6↔demo | **Aligned** · Must **0** |
| Code spot-check | filter sheet + map push + live-only dual |
| yarn e2e / start:std / mfeStdUrl | **SKIP** (**cấm**) |

## Verdict

List Giám sát dual-native post-`filter_live_map_sibling`: security PASS · DTO/API-01 ±route PASS · filter sheet + map push PASS · real-data live-only PASS · UI align Must **0** · QA store PASS · crawl SKIP (roleOnly) với không GAP-MOB-ACT-03 mở. P2 fromDate / empty-AND / tab Should **Accept/Defer**. **Approve** (autopilot). Pipeline **complete**.

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
| generatedAt | 2026-09-12T10:29:46.000Z |
| versionGate | rechecked |
| taskId | `task_a995a011` |
| contentHashPriorQa | `task_cf8f4bfe` |
| contentHash | `sha256:supervise-mobile-filter-live-20260912` |
| dataAnalySkillVersion | 2026.08.19.26 |
| poSkillVersion | 2026.08.19.26 |
| designSkillVersion | 2026.08.19.26 |
| saSkillVersion | 2026.08.19.26 |
| teamLeadSkillVersion | 2026.08.19.26 |
| devSkillVersion | 2026.08.19.26 |
| qaSkillVersion | 2026.08.19.26 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.19.26 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked taskId=task_a995a011 -->
