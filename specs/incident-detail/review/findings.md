# Review — Findings — incident-detail (mobile screen · Chi tiết vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-detail` |
| title | [Mobile] [Vấn đề] -> Chi tiết |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_3774bc97` · autoApprove=ON) |
| packKind | **`screen`** (`DES-MOB-INC-DETAIL` · `#sc-incident-detail`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `edit_page` (cleanup-mock live-only) |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** · `task_f0f56b29` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · cleanup-mock · builds PASS · Step 4b **N/A** · `task_53a77d94` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · GET `{id}` + POST `{id}/close` · Lat/Lng **DEFER** · Step 4b **N/A** |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Incident · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_f0f56b29` post cleanup-mock · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-09-01T04:45:00.000Z` |
| taskId | `task_3774bc97` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `IncidentDetail/*` · `FetchIncidentByIdUseCase` · `CloseIncidentUseCase` · `IncidentDetailCopy` · `IncidentRepositoryImpl.fetchById/close` · `useDemoGps: false` · Keychain |
| Android | `presentation/feature/incidentdetail/*` · same use cases · `IncidentDetailCopy` · `useDemoGps = false` · EncryptedSharedPreferences |
| BFF | `MobileApiProxyController` catch-all → `api/v1/incident/incidents/{id}` · `…/{id}/close` · forward Bearer + `X-Company-Id` |
| API | GET by id · POST close · 404 EmptyChrome · network fail → toast + `empty-load-fail` · **cấm** demo SSOT / SC-2401 fallback · Close **online-only** |
| QA store | `qa/store/incident-detail/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` · live seed VD-20260829-0001 |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed · `qa/bugs` Should only |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:incident-detail-control-hint-20260829` · unchanged |
| realDataHash | `sha256:incident-detail-mobile-real-data-20260829` · unchanged |
| bffContentHash | `sha256:incident-incidents-getbyid-close-proxy` · unchanged |
| reviewHash | `sha256:cb070b814f5c15b1fd0e2152b78bae87fc29be6e4c44746f8d623f6a2419d6c7` |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor` · BFF proxy forward) |
| IDOR `{id}` | **PASS** — GetById/Close path-encoded id · BE `IncidentForbiddenException` → 403 · client 404 → EmptyChrome · tenant via `X-Company-Id` (QA seed note GAP-QA-SEED-COMPANY-01 doc) |
| Location / camera Info.plist · Manifest | **N/A** feature write — detail **không** request GPS/camera · bind `HasGps` + Route/Km · Lat/Lng Signed **DEFER** |
| `PrivacyInfo.xcprivacy` PreciseLocation + PhotosorVideos · AppFunctionality | **PASS** (declared · app-level) |
| `alert` / `UIAlert` / `AlertDialog` trên IncidentDetail | **PASS** — toast only (close / offline / fail / estimate P1) |
| Plaintext token / UserDefaults JWT | **PASS** — Keychain / Encrypted only |
| Forked API / invent `IncidentDetailController` | **PASS** — reuse `incident/incidents/{id}` + `/close` |
| Fake lat/lng live / invent PlaceName | **PASS** — live `HasGps` + loc · `useDemoGps: false` on fetch · demo struct dead code only |
| Watermark / process text / `mfeStdUrl` | **PASS** — không ship |

## DTO parity (iOS = Android = Web/BFF)

| Field | Disposition |
|-------|-------------|
| `id` · `code` · `title` · `incidentType` · `severity` · `status` | **OK** dual `IncidentDto` → badge/type |
| `routeName` · `kmStart` → loc | **OK** |
| `hasGps` → gps line (đã chốt / Chưa có) · **cấm** invent Lat/Lng live | **OK** · Lat/Lng DEFER |
| `detectionId` · `description` · `assetLabel` → source (empty omit) | **OK** · GAP-MOB-INC-DETAIL-SRC-01 |
| Close body optional `note` | **OK** dual `CloseIncidentBody` |
| Live-only load (cleanup-mock) | **OK** — GET OK=detail · 404=EmptyChrome · fail=toast+empty-load-fail · **cấm** demo fallback |
| Tab shell **Vấn đề** · surface `tabs: none` | **OK** · **GAP-TAB-01** none |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-incident-detail` | **PASS** — back «Vấn đề» · title **Chi tiết** · Mã + code live VD-20260829-0001 · badge · rows Loại/Vị trí/Định vị · Nguồn omit · 3 CTA · close faded after closed · tab Vấn đề on |
| P6-CORE / P6-CORE-2 vs demo | **PASS** — title **Chi tiết sự cố** · icon-only back · same hero/rows/CTA · close disabled |
| `.row-icon` / CTA glyph | **PASS** — demo **không** có row icon · text CTAs |
| Dual copy VN · watermark / device label | **PASS** none |
| Form submit | **N/A** — screen detail · Close = POST CTA |
| Must align / demo-parity / COLOR / COMP / bugs OPEN Must | **0** |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 · P6/P6-2 live | **PASS** (`CAPTURE.md` · `manifest.json` `ok:true`) |
| Landing / BffBase store listing HTTPS | **Accept** — Release HTTPS · Debug localhost OK |
| `PrivacyInfo.xcprivacy` · Play Data safety | **Accept** P2 → `/review-app-submit` (app-level) |
| A4-IPAD | **DEFER** Phase 1 · family `1` |

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · GetById/Close IDOR 403/404 | **OK** |
| R-02 | API | — | `incident/incidents/{id}` + `/close` · **cấm ERP.*** · no invent slug · Step 4b N/A | **OK** |
| R-03 | Bind | — | Code/badge/type/loc/HasGps/source omit · live-only cleanup-mock · **cấm** demo SSOT on fail | **OK** |
| R-04 | DTO | — | Dual `IncidentDto` + `CloseIncidentBody` = BE | **OK** |
| R-05 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned · vision Read | **OK** |
| R-06 | GPS | P2 | `GAP-MOB-INC-DETAIL-GPS-01` Lat/Lng Signed **DEFER** · HasGps+Route/Km P1 closed | **Accept** |
| R-07 | A11y | Should | `GAP-MOB-A11Y-INC-DETAIL-01` iOS list `btn-inc-detail-{id}` a11y merge · Maestro point fallback | **Defer** non-block |
| R-08 | Ops | — | `GAP-QA-SEED-COMPANY-01` seed cần `X-Company-Id: LINM` · CLOSED doc | **OK** |
| R-09 | QA | — | e2eQa ON · Maestro · store live post cleanup-mock · prior PASS | **OK** |
| R-10 | Store | P2 | Play Data safety / READY_TO_SUBMIT → `/review-app-submit` | **Accept** |
| R-11 | family | — | `TARGETED_DEVICE_FAMILY=1` · A4-IPAD **DEFER** | **OK** |
| R-12 | BE attr | P2 | `[RequirePermission]` TODO trên IncidentsController · CommonLib stub | **Accept** app-level |
| R-13 | Siblings | — | estimate toast P1 · map nav · create/list/chat out of pack | **OK** |
| R-14 | Cleanup | — | GAP-MOB-INC-DETAIL-CLEANUP-01 · live-only detail · dead demo struct retained · no runtime fallback | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-INC-DETAIL | PASS (prior Dev cleanup-mock `task_53a77d94`) |
| T-AND-INC-DETAIL | PASS (prior Dev cleanup-mock `task_53a77d94`) |
| T-BE | **n/a** · reuse GetById + Close · Step 4b N/A |
| T-BFF-* | **n/a** · catch-all |
| T-QA | PASS (`ok:true` · Must align 0 · `task_f0f56b29`) |
| T-REVIEW-SEC / DTO / ALIGN / CLEANUP | PASS · Must align = **0** |

## VERIFY GATE (`task_3774bc97` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review · N/A reuse |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

Chi tiết vấn đề dual-native post cleanup-mock: security + DTO + UI align Must **0** · live-only detail (cấm demo fallback) · prior QA/Dev VERIFY PASS · GET by id + Close online-only · Should a11y list non-block · GPS Lat/Lng DEFER Accept. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|-------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| Should follow-ups | `GAP-MOB-A11Y-INC-DETAIL-01` · Lat/Lng DEFER · Play Data safety submit · RequirePermission CommonLib |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-01T04:45:00.000Z |
| versionGate | rechecked |
| taskId | `task_3774bc97` |
| contentHash | sha256:incident-detail-control-hint-20260829 |
| realDataHash | sha256:incident-detail-mobile-real-data-20260829 |
| bffContentHash | sha256:incident-incidents-getbyid-close-proxy |
| reviewHash | sha256:cb070b814f5c15b1fd0e2152b78bae87fc29be6e4c44746f8d623f6a2419d6c7 |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked contentHash=sha256:incident-detail-control-hint-20260829 taskId=task_3774bc97 -->
