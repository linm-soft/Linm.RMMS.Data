# Review — Findings — supervise-detail (mobile · Chi tiết check-in)

| Field | Value |
|-------|-------|
| feature | `supervise-detail` |
| title | [Mobile] [Giám sát] -> Chi tiết check-in |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_da5594c4` · autoApprove=ON) |
| changeScope | `new_page` |
| packKind | **`screen`** (PO chốt · GAP-MOB-SUP-DET-PACK-01 **closed**) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std / e2e/build ở role này |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** · `task_63f14363` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · `task_1c63dead` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · reuse GetById · Step 4b N/A · `task_01a1a301` |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| prior · tl | `task/supervise-detail.md` · **confirmed** · T-IOS-SUP-DETAIL · T-AND-SUP-DETAIL · `task_9f876bd7` |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · proxy `GET patrol/attendance-logs/{id}` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Patrol · **cấm ERP.*** · Step 4b N/A |
| domain | **Patrol** · readonly GET by id |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA done · **cấm** re-run e2e/build/start:std ở role review |
| updatedAt | `2026-08-31T02:52:00.000Z` |
| taskId | `task_da5594c4` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `Presentation/Features/SuperviseDetail/*` · `FetchAttendanceLogByIdUseCase` · `SuperviseRepositoryImpl.fetchById` · `SuperviseDtoMapper.detail` · list push wire `AppRouter` |
| Android | `presentation/feature/supervisedetail/*` · `FetchAttendanceLogByIdUseCase` · Retrofit `@GET patrol/attendance-logs/{id}` · Home+Patrol NavHosts |
| BFF | proxy catch-all · **cấm invent** SuperviseDetailController |
| API | reuse `GET patrol/attendance-logs/{id}` · XCO · Step 4b N/A |
| QA store | `qa/store/supervise-detail/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must **closed** |
| skillVersion | agent-review-mobile **2026.08.29.1** |
| contentHash | `sha256:supervise-detail-control-hint-20260831` · unchanged |
| realDataHash | `sha256:supervise-detail-real-data-20260831` · unchanged |
| bffContentHash | `sha256:patrol-attendance-logs-getbyid-passthrough` · unchanged |
| reviewHash | `sha256:supervise-detail-review-20260831` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** — slug dùng `ApiClient` / Retrofit interceptor giữ Bearer |
| Interceptor Bearer + `X-Company-Id` | **PASS** — mọi GET qua BFF prefix `mobile-bff/api/v1` |
| IDOR `{id}` | **Accept** — attendance log id từ list tap · BE `AllowedCompanyIds` / 403 toast+back · không client bypass |
| Location Info.plist / Manifest | **PASS** — **readonly** display Lat/Lng · **cấm** request location (`AC-D-02`) |
| Camera | **N/A** — thumb P2 · no capture on detail |
| Deny / leave · **cấm** `UIAlertController` / system `AlertDialog` | **PASS** — LinmToast only · EmptyChrome 404 |
| Invent `api/v1/supervise-detail` / SuperviseDetailController | **PASS** — none · path `patrol/attendance-logs/{id}` |
| Fake GET 200 on fail | **PASS** — offline demo + toast · screen vẫn mở · **cấm** fake 200 |
| Plaintext JWT / hardcode prod when GET OK | **PASS** — demo SSOT chỉ fail/404 demo-card path |
| Watermark / device label / `mfeStdUrl` | **PASS** — không ship |
| ERP.* | **PASS** — Patrol domain only |

## DTO parity (iOS = Android = wire)

| Field | Disposition |
|-------|-------------|
| `AttendanceLogItemDto` | **OK** dual — `id` · `code` · `userName` · `route` · `checkInAt` · `kmPoint` · `lat` · `lng` · `inZone` · `status` · `note` |
| Status VN map | **OK** — `checked_in`/`ok`/empty+InZone → «Đã ghi điểm tuần» · `out_zone`/`warn`/InZone=false → «Ngoài vùng · cần kiểm» |
| Org `Note` fallback | **OK** — empty → «Tổ tuần đường · VP-IV.1» (`GAP-MOB-SUP-DET-ORG-01` closed) |
| Location join | **OK** — route + kmPoint · địa danh |
| GPS text | **OK** — `lat,lng` formatted |
| Parent JSON | **none** — envelope `data` only |
| Tab invent / GAP-TAB-01 | **OK** — pack `tabs: none` · shell Tab 5 Trang Chủ selected |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE (1320×2868) vs demo `#sc-supervise-detail` | **PASS** — title **Chi tiết check-in** · back **Giám sát**+chevron · hero **Nguyễn Văn A** 28 · Mã **CC-20260810-001** · 6 rows SSOT · CTA **Xem trên bản đồ** · tab Trang Chủ · no watermark |
| P6-CORE (1080×1920) vs demo | **PASS** — same zones · Android icon-only back (platform-OK) · hero 24 · LinmListRow text-only rows |
| P6-CORE-2 scroll fold | **PASS** — CTA `btn-sup-detail-map` visible |
| Must align / demo-parity / bugs OPEN | **0** |
| GAP-MOB-E2E-VIS-01 | **none** — CORE PNG prior QA Read · align-ux **Aligned** |

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
| Evidence | prior QA Maestro `#sc-supervise-detail` · `tile-supervise` → `sup-card-demo-1` · back/map tags |
| action-tree | `_data-analy/supervise-detail-action-tree.md` · GET same-slug · CTA gis-map shared_action |
| GAP-MOB-ACT-03 | **none** — back/list · GET load · CTA map = same-slug or shared sibling **done** (`gis-map`) |
| Sibling enqueue | **none** · list/checkin/CRUD **OUT** (`GAP-MOB-ACT-06`) |

## Real data (Step 5e)

| Check | Result |
|-------|--------|
| `SuperviseDetailCopy.demo` / demo card fallback | **OK** — SSOT CC-20260810-001 · chỉ fail/404 demo-id path |
| Fake toast ok | **none** — loadFail/forbidden/missingId only |
| GAP-MOB-REAL-02 | **closed** |
| GAP-QA-REAL-01 | **closed** — BFF empty DB · demo card 404 → offline SSOT aligned dual |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Bearer + XCO · URL-encoded id · 403 toast+back · no invent API · no ERP | **OK** |
| R-02 | API | — | reuse `GET patrol/attendance-logs/{id}` · Step 4b N/A · no BFF write | **OK** |
| R-03 | DTO | — | dual mapper parity · Status VN · org Note fallback · no parent JSON | **OK** |
| R-04 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned · prior QA vision | **OK** |
| R-05 | Scope | — | screen `#sc-supervise-detail` only · list push wired · **cấm** CI-DETAIL reuse | **OK** |
| R-06 | QA | — | e2eQa ON · Maestro iOS+Android · store live · prior PASS | **OK** |
| R-07 | Nav | Should | Android Patrol stack CTA map → toast (stack chưa gis-map) · Home → gis-map | **Accept** (PO route_a · dev documented) |
| R-08 | Demo | Should | BFF empty · card `demo-1` GET 404 → offline SSOT + toast | **Accept** (`GAP-QA-SUP-DET-DEMO-404-01` non-block) |
| R-09 | Crawl | — | e2e `--crawl` SKIP role review · ACT-03 none | **OK** |
| R-10 | Step 4b | — | N/A · review **skip** re-run | **OK** |
| R-11 | Pack | — | packKind **screen** push · supersede toast-only list | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-SUP-DETAIL | PASS (prior Dev) |
| T-AND-SUP-DETAIL | PASS (prior Dev) |
| T-BE-API · T-BE-MIG | n/a |
| T-BFF-01 | no-op · proxy reuse · prior QA BFF build PASS |
| T-QA-SUP-DETAIL | PASS (`ok:true` · Must align 0) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_da5594c4` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Mobile screen `#sc-supervise-detail` dual-native: security + DTO + UI align Must **0** · prior QA/Dev VERIFY PASS · reuse Patrol GetById · no open P0 / REAL / ACT-03. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Should follow-ups | Android Patrol stack wire gis-map khi stack có route · seed BFF attendance nếu cần live pin (non-block) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.29.1 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-08-31T02:52:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| taskId | `task_da5594c4` |
| contentHash | sha256:supervise-detail-control-hint-20260831 |
| realDataHash | sha256:supervise-detail-real-data-20260831 |
| bffContentHash | sha256:patrol-attendance-logs-getbyid-passthrough |
| reviewHash | sha256:supervise-detail-review-20260831 |
| priorQaTaskId | `task_63f14363` |
| priorDevTaskId | `task_1c63dead` |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.29.1 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked reviewHash=sha256:supervise-detail-review-20260831 -->
