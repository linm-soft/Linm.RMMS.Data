# Review — Findings — incident-list (mobile list · Vấn đề)

| Field | Value |
|-------|-------|
| feature | `incident-list` |
| title | [Mobile] Vấn đề |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **done** (autopilot · `task_8fd8993f` · autoApprove=ON) |
| packKind | **`list`** (`DES-MOB-INC-LIST` · `#sc-incident-list`) |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** Must **0** · `task_f70a425c` · re-QA post edit-mobile-feature |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · edit-mobile-feature `task_3a718e5d` · Step 4b **N/A** |
| prior · sa | `be/solution-discovery.md` · **confirmed** · GET `incident/incidents` only · Step 4b **N/A** |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all proxy |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Incident · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_f70a425c` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-09-01T04:30:00.000Z` |
| taskId | `task_8fd8993f` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `IncidentList/*` · `FetchIncidentsUseCase` · `IncidentListDto` · `IncidentRepositoryImpl.fetchList` · Keychain |
| Android | `presentation/feature/incidentlist/*` · same use case · `IncidentListDto` / mapper · EncryptedSharedPreferences |
| BFF | `MobileApiProxyController` catch-all → `api/v1/incident/incidents` · forward Bearer + `X-Company-Id` |
| API | GET list `page=1` · `pageSize=50` · empty/fail → demo **2** SSOT · **cấm** invent `incident-list` path · **cấm** GET `{id}` trên slug |
| QA store | `qa/store/incident-list/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` · post edit-mobile-feature |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed · `qa/bugs` CLOSED |
| edit-mobile-feature | GAP-MOB-EDIT-STATUS-01 · GAP-MOB-EDIT-ACT-01 **closed** (`task_3a718e5d`) |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:incident-list-mobile-list-20260829` · unchanged |
| realDataHash | `sha256:incident-list-mobile-real-data-20260829` · unchanged |
| bffContentHash | `sha256:incident-incidents-proxy-passthrough` · unchanged |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** |
| Interceptor Bearer + `X-Company-Id` | **PASS** (`ApiClient` / `AuthInterceptor` · BFF proxy forward) |
| IDOR `{id}` | **N/A** — list GET only · no detail-by-id trên slug · sibling CTAs = toast / tab |
| Location / camera Info.plist · Manifest | **N/A** feature — list không gọi GPS/camera · banner/vis = toast P1 · app-level plist/Manifest + PrivacyInfo declared for peer screens |
| `PrivacyInfo.xcprivacy` PreciseLocation + PhotosorVideos · AppFunctionality | **PASS** (declared · app-level) |
| `alert` / `UIAlert` / `AlertDialog` trên IncidentList | **PASS** — toast only (Lọc · banner · chat · detail) |
| Plaintext token / UserDefaults JWT | **PASS** — Keychain / Encrypted only |
| Forked API / invent `IncidentListController` | **PASS** — reuse `incident/incidents` |
| PlaceName / OrgName invent trên live bind | **PASS** — `loc` = RouteName+KmStart · AssetLabel/Description fallback · **cấm** invent PlaceName |
| Watermark / process text / `mfeStdUrl` | **PASS** — không ship |

## DTO parity (iOS = Android = Web/BFF)

| Field | Disposition |
|-------|-------------|
| `id` · `code` · `title` · `routeName` · `incidentType` · `status` | **OK** dual = `IncidentListItemDto` |
| `reporterName` · `assigneeName` → person | **OK** |
| `assetLabel` · `kmStart` · `description` → loc fallback | **OK** · **cấm** PlaceName/OrgName |
| `requestedAt` → time | **OK** dual format |
| Demo fallback 2 cards SSOT (Nứt mặt đường · Cống tắc) | **OK** dual |
| Tab / segment · shell tab **Vấn đề** · segment-2 | **OK** · **GAP-TAB-01** none · **cấm** invent tab 6 |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE vs demo `#sc-incident-list` | **PASS** — title **Quản lý vấn đề** · text **Lọc** · segment Danh sách/Bản đồ · search · banner `#i-camera` · 2 cards SSOT · status text bar warn/ok · actions chat/briefcase/list/mappin flex:1 · FAB + · tab Vấn đề on |
| P6-CORE / P6-CORE-2 vs demo | **PASS** — filter icon Material OK · card 1 + fold card 2 **Cống tắc** · same glyphs dual · action row weight(1f) |
| Banner `.row-icon` / `#i-camera` | **PASS** · **không** GAP-MOB-UX-COMP-03 |
| Dual copy VN · watermark / device label | **PASS** none |
| Form submit | **N/A** — list |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |
| edit-mobile-feature | **PASS** — status `Trạng thái: {label}` full width text bar · **cấm** duplicate `LinmBadge` · 4 actions tap 44 evenly distributed |

AskQuestion (autoApprove=ON): `review_confirm=done` · `align_confirm=approve` · `post_review=skip`.

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 · P6/P6-2 live | **PASS** (`CAPTURE.md` · `manifest.json` `ok:true`) |
| Landing / BffBase store listing HTTPS | **Accept** — Release HTTPS · Debug localhost OK · **cấm** LAN IP in store |
| `PrivacyInfo.xcprivacy` · Play Data safety | **Accept** P2 → `/review-app-submit` (app-level · not feature block) |
| A4-IPAD | **DEFER** Phase 1 · family `1` · `GAP-SUBMIT-IMG-08` N/A |

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | Keychain / Encrypted · Bearer · `X-Company-Id` · list GET only | **OK** |
| R-02 | API | — | `incident/incidents` live · **cấm ERP.*** · no invent slug · Step 4b N/A | **OK** |
| R-03 | Bind | — | RouteName+KmStart · Reporter/Assignee · **cấm** PlaceName/OrgName · thumb DEFER | **OK** |
| R-04 | DTO | — | Dual `IncidentListItemDto` = BE Incident list fields | **OK** |
| R-05 | Align | — | A3 + P6(+2) vs demo · Must **0** · Aligned · camera banner glyph | **OK** |
| R-06 | Edit | — | GAP-MOB-EDIT-STATUS-01 status text bar · GAP-MOB-EDIT-ACT-01 action row flex:1 · dual parity | **OK** · closed |
| R-07 | Copy | Should | `GAP-MOB-COPY-SEARCH-01` kit `LinmSearchField` hardcode **Tìm** vs demo **Tìm kiếm vấn đề…** | **Defer** non-block · kit |
| R-08 | A11y | Should | `GAP-MOB-A11Y-FAB-01` wrapper `fab-inc-create` không inherit vào `LinmFab` Button · visual OK | **Defer** non-block · kit |
| R-09 | Thumb | P2 | `GAP-MOB-INC-LIST-THUMB-01` placeholder DEFER | **Accept** |
| R-10 | QA | — | e2eQa ON · Maestro · store live · prior PASS post edit | **OK** |
| R-11 | Store | P2 | Play Data safety / READY_TO_SUBMIT → `/review-app-submit` | **Accept** |
| R-12 | family | — | `TARGETED_DEVICE_FAMILY=1` · A4-IPAD **DEFER** · **cấm** listing A4 | **OK** |
| R-13 | Siblings | — | `vis-capture` · `incident-detail` · `incident-chat` · `pending_confirm` · **cấm** auto start | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-INC-LIST | PASS (Dev + edit-mobile-feature) |
| T-AND-INC-LIST | PASS (Dev + edit-mobile-feature) |
| T-BE | **n/a** · reuse GET list · Step 4b N/A |
| T-BFF-* | **n/a** · catch-all |
| T-QA | PASS (`ok:true` · Must align 0 · post edit) |
| T-REVIEW-SEC / DTO / ALIGN / EDIT | PASS · Must align = **0** |

## VERIFY GATE (`task_8fd8993f` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| review/findings.md · REVIEW-META | **PASS** · done |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** re-run yarn build/e2e/start:std |
| Step 4b BE align / migration | **SKIP** · role review · N/A reuse |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

List Quản lý vấn đề dual-native post edit-mobile-feature: security + DTO + UI align Must **0** · edit gaps closed · prior QA/Dev VERIFY PASS · GET list + demo fallback + toast siblings · Should search/FAB a11y non-block. **review_confirm=done** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | siblings `pending_confirm` **cấm** auto start |
| Should follow-ups | `GAP-MOB-COPY-SEARCH-01` · `GAP-MOB-A11Y-FAB-01` · thumb DEFER · Play Data safety submit |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-09-01T04:30:00.000Z |
| versionGate | rechecked |
| taskId | `task_8fd8993f` |
| contentHash | sha256:incident-list-mobile-list-20260829 |
| realDataHash | sha256:incident-list-mobile-real-data-20260829 |
| bffContentHash | sha256:incident-incidents-proxy-passthrough |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked contentHash=sha256:incident-list-mobile-list-20260829 -->
