# Review — Findings — mnt-list (mobile list · Công việc)

| Field | Value |
|-------|-------|
| feature | `mnt-list` |
| title | [Mobile] [Trang Chủ] → Công việc |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_fdf1f59c` · autoApprove=ON) |
| packKind | **`list`** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** · `task_c9ac27ea` post cleanup_mock |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · live-only · `task_53934dab` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · Step 4b **N/A** |
| prior · design | `ui/design.md` · `demo-parity.md` · **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy GET `maintenance/work-orders` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Maintenance · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA PASS · **cấm** re-run e2e ở role review |
| updatedAt | `2026-09-01T05:30:00.000Z` |
| taskId | `task_fdf1f59c` |
| re-run context | post cleanup_mock · live-only · GAP-MOB-EDIT-STATUS/ACT closed |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `MntListView` · `MntListViewModel` · `FetchWorkOrdersUseCase` live-only · `MntListCopy` (no demoItems) · Keychain |
| Android | `MntListScreen` · `MntListViewModel` · `FetchWorkOrdersUseCase` live-only · `MntListCopy` (no demoItems) · EncryptedSharedPreferences |
| BFF | `MobileApiProxyController` catch-all → `api/v1/maintenance/work-orders` · forward Bearer + `X-Company-Id` |
| API | GET list `page=1` · `pageSize=50` · empty=[] · fail=toast · **cấm** demo SSOT · **cấm** AssignerName |
| QA store | `qa/store/mnt-list/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` · `2026-09-01T04:59:30.073Z` |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:mnt-list-mobile-list-20260828` · unchanged |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor` · BFF proxy forward headers) |
| IDOR `{id}` | **N/A** — list GET only · no detail-by-id on this slug |
| Location / camera Info.plist · Manifest | **N/A** feature — list không gọi GPS/camera |
| `alert` / `UIAlert` / `AlertDialog` trên MntList | **PASS** — toast only (Lọc · hub · sibling CTAs) |
| Plaintext token / UserDefaults JWT | **PASS** — Keychain / Encrypted only |
| Forked API / invent `mnt-list` controller | **PASS** — reuse `maintenance/work-orders` |
| Watermark / process text / `mfeStdUrl` | **PASS** — không ship |

## DTO parity (iOS = Android = Web/BFF)

| Field | Disposition |
|-------|-------------|
| `id` · `code` · `title` · `routeName` · `workType` · `status` | **OK** dual |
| `teamName` · `assigneeName` → assignLine | **OK** · **cấm** AssignerName (`GAP-F-MNT-MOB-01` closed by bind rule) |
| `createdAt` · `dueAt` → rangeLine | **OK** |
| `incidentId` · `routeName` → metaLine | **OK** |
| Live-only empty/fail handling | **OK** dual · **GAP-MOB-REAL-02 closed** · **cấm** `MntListCopy.demoItems` |
| Tab / label scale · in-screen tabs | **OK** · shell tab `work` · **GAP-TAB-01** none |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-mnt-list` | **PASS** — title · Lọc · hub · 2 cards live DB · status text bar · actions · tab Công việc on |
| P6-CORE / P6-CORE-2 vs demo | **PASS** — same copy dual · filter icon Material OK · fold status **Đã hoàn thành** |
| Hub `.row-icon` green leading | **PASS** — green + glyph · **cấm** reopen COMP-03 |
| Card actions chat · sync/list · plus | **PASS** dual · GAP-MOB-EDIT-ACT-01 closed |
| Status text bar `Tình trạng xử lý: {label}` | **PASS** · GAP-MOB-EDIT-STATUS-01 closed |
| Form submit | **N/A** — list |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 · P6/P6-2 live | **PASS** (`CAPTURE.md` · `manifest.json` `ok:true`) |
| Landing / BffBase store listing HTTPS | **Accept** — Release xcconfig HTTPS · Debug localhost OK |
| `PrivacyInfo.xcprivacy` · Play Data safety | **Accept** P2 → `/review-app-submit` (app-level · not feature block) |
| A4-IPAD | **DEFER** Phase 1 · family `1` · `GAP-SUBMIT-IMG-08` N/A |
| Signup / delete account | **N/A** — list feature |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` | **OK** |
| R-02 | API | — | Chỉ GET `maintenance/work-orders` · Step 4b N/A · **cấm ERP.*** | **OK** |
| R-03 | DTO | — | Dual parity · no AssignerName · live-only | **OK** |
| R-04 | Real data | — | `FetchWorkOrdersUseCase` live-only · **cấm** demoItems · GAP-MOB-REAL-02 **closed** | **OK** |
| R-05 | UX | P2 | Sibling CTA / Lọc toast-only P1 | **Accept** |
| R-06 | Align | — | A3 + P6 vs demo · Must **0** · Aligned post cleanup_mock | **OK** |
| R-07 | Copy | Should | Kit search **Tìm** vs demo **Tìm kiếm công việc…** (`GAP-MOB-COPY-SEARCH-01`) | **Defer** non-block |
| R-08 | QA | — | e2eQa ON · Maestro · store live · `task_c9ac27ea` PASS | **OK** |
| R-09 | Store | P2 | PrivacyInfo / Data safety | **Accept** |
| R-10 | Scope | — | sibling `estimate` · `mnt-chat` · `mnt-progress` · `mnt-log` | **Defer** pending_confirm |
| R-11 | Step 4b | — | T-BE **N/A** | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-MNT-LIST | PASS (prior Dev · cleanup_mock) |
| T-AND-MNT-LIST | PASS (prior Dev · cleanup_mock) |
| T-BE-* | **n/a** |
| T-QA | PASS (`ok:true` · Must align 0 · `task_c9ac27ea`) |
| T-REVIEW-SEC / DTO / ALIGN / REAL | PASS · Must align = **0** |

## VERIFY GATE (`task_fdf1f59c` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align | **N/A** — reuse GET |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

List Công việc dual-native post cleanup_mock: security + DTO + live-only + UI align Must **0** · prior QA/Dev VERIFY PASS · Step 4b N/A · Should search copy non-block · sibling pending_confirm. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Sibling | `estimate` · `mnt-chat` · `mnt-progress` · `mnt-log` · **pending_confirm** (**cấm** auto start) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-01T05:30:00.000Z |
| versionGate | rechecked |
| taskId | `task_fdf1f59c` |
| contentHash | sha256:mnt-list-mobile-list-20260828 |
| bffContentHash | sha256:mnt-list-mobile-bff-20260828 |

<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked contentHash=sha256:mnt-list-mobile-list-20260828 -->
