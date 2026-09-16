# Review — Findings — incident-chat (mobile · Trao đổi sự cố · P1 toast)

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| title | [Mobile] [Vấn đề] -> Trao đổi sự cố |
| this role | `review` · `/agent-review-mobile` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_dc7b1c8d` · autoApprove=ON) |
| align_confirm | **approve** |
| post_review | **skip** |
| packKind | **`sheet`** (meta) · **surface P1 = toast** · sheet/composer **DEFER P2** |
| lane | `mobile` · **cấm** mfeStdUrl / yarn start:std |
| changeScope | `new_page` |
| prior · qa | `qa/scenarios.md` · **confirmed** · e2eQa ON · `ok:true` · align **Aligned** · Must **0** · `task_52378a1c` |
| prior · dev | `implement/{ios,android}.md` · **confirmed** · builds PASS · Step 4b **N/A** · `task_134fe945` |
| prior · sa | `be/solution-discovery.md` · **confirmed** · no HTTP P1 · Step 4b **N/A** · `task_6942d8e5` |
| prior · design | `ui/design.md` · `demo-parity.md` · `align-ux.md` · **confirmed** |
| prior · po | `po/requirement.md` · **confirmed** |
| prior · data_analy | `_data-analy/incident-chat-{control-hint,real-data,bff-endpoints,action-tree}.md` · **confirmed** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · catch-all · **no Write P1** |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · Incident · **cấm ERP.*** |
| autoApprove | **ON** |
| e2eQa | **ON** · prior QA `task_52378a1c` · **cấm** re-run e2e/build ở role review |
| updatedAt | `2026-08-29T11:22:16.000Z` |
| taskId | `task_dc7b1c8d` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| iOS | `IncidentListView` `#i-chat` · `IncidentListViewModel` `.chat` → `LinmToast` · `LinmCopy` `inc.chat.*` · Keychain (app) · **no HTTP** |
| Android | `IncidentListScreen` / `IncidentCard` · `IncidentListViewModel` `Chat` → `LoginToastHub` · `LinmCopy` · EncryptedSharedPreferences (app) · **no HTTP** |
| BFF | catch-all proxy only · **không** invent IncidentChat / comments Write |
| API | **none P1** · GAP-MOB-INC-CHAT-API-01 **DEFER** · **cấm invent** comments |
| QA store | `qa/store/incident-chat/` A11/A9/A3/P6/P6-2 live PNG · `ok:true` · dorGate PASS |
| align | `ui/review/align-ux.md` · Must **0** · `demo-parity.md` Must closed · `qa/bugs` none |
| skillVersion | agent-review-mobile **2026.08.20.01** |
| contentHash | `sha256:incident-chat-mobile-control-hint-20260829` · unchanged |
| realDataHash | `sha256:incident-chat-mobile-real-data-20260829` · unchanged |
| bffContentHash | `sha256:incident-chat-mobile-bff-20260829` · unchanged |
| actionTreeHash | `sha256:incident-chat-mobile-action-tree-20260829` · unchanged |

## Security + permission

| Check | Result |
|-------|--------|
| Token store iOS Keychain · Android EncryptedSharedPreferences | **PASS** (app-level · feature không thêm auth store) |
| Interceptor Bearer + `X-Company-Id` | **N/A P1** — chat **không** gọi API · parent list reuse khi load |
| IDOR `{id}` | **N/A P1** — toast local · id chỉ testTag · **không** path `/comments/{id}` |
| Location / camera Info.plist · Manifest | **N/A** — toast only · không GPS/camera mới |
| `alert` / `UIAlert` / `AlertDialog` | **PASS** — `LinmToast` / toastHub only |
| Invent comments / IncidentChatController / fake «Đã gửi» | **PASS** — không ship |
| Plaintext token / UserDefaults JWT | **PASS** — không thêm token path |
| Sheet / composer / thread P1 | **PASS** — DEFER P2 · không ship |
| Watermark / process text / `mfeStdUrl` / ERP.* | **PASS** — không |

## DTO parity (iOS = Android = Web)

| Field | Disposition |
|-------|-------------|
| Chat DTO / CommentDto | **N/A P1** — no HTTP · **cấm invent** |
| Copy SSOT | **OK** dual `inc.chat.toast` = «Trao đổi sự cố» · `inc.chat.a11y` = «Trao đổi» · alias `inc.list.toast.chat` |
| Type label 13 · toast kit | **OK** · **không** GAP-TYP-01 |
| In-surface tabs | **none** · shell Tab 5 **Vấn đề** · **không** GAP-TAB-01 · **cấm** invent tab 6 |
| Comments API fields | **DEFER** GAP-MOB-INC-CHAT-API-01 |

## UI align (vision · `/review-align-ux-ios-android`)

| Zone | Result |
|------|--------|
| A3-CORE (1320×2868) vs demo `#i-chat` / `toastChat()` | **PASS** — list `#sc-incident-list` · bubble `#i-chat` on card · blue toast **«Trao đổi sự cố»** + X · tab **Vấn đề** · **không** push detail / sheet |
| P6-CORE / P6-CORE-2 (1080×1920) vs demo | **PASS** — same toast copy · chat glyph · stay list · fold OK |
| Dual copy iOS ↔ Android | **PASS** «Trao đổi sự cố» |
| `.row-icon` / `#i-*` invent lệch | **không** GAP-MOB-UX-COMP-03 |
| Watermark / device label | **PASS** — none |
| CLI e2e without vision | **không** GAP-MOB-E2E-VIS-01 — Read CORE done |
| Must align / demo-parity / COLOR / COMP / bugs OPEN | **0** |

AskQuestion (autoApprove=ON): `review_confirm=approve` · `align_confirm=approve` · `post_review=skip`.

## Store gate

| Check | Result |
|-------|--------|
| Store PNG A11/A9/A3 1320×2868 · P6/P6-2 1080×1920 RGB live | **PASS** (`CAPTURE.md` · `manifest.json` verdict PASS) |
| `PrivacyInfo.xcprivacy` (app-level) | **Accept** P2 → `/review-app-submit` (feature không thêm location/camera) |
| Play Data safety / READY_TO_SUBMIT | **Accept** P2 · **cấm** claim ở Review feature |
| A4-IPAD | **DEFER** Phase 1 · family `1` · `GAP-SUBMIT-IMG-08` N/A |
| Landing HTTPS | **Accept** — Release HTTPS · Debug localhost OK |

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-01 | Security | — | No HTTP chat · toast only · Keychain/Encrypted app · no alert | **OK** |
| R-02 | API | — | Step 4b N/A · **cấm invent** comments · **cấm ERP.*** | **OK** |
| R-03 | DTO | — | N/A P1 · dual copy SSOT | **OK** |
| R-04 | IDOR | — | N/A P1 · no `{id}` comments path | **OK** |
| R-05 | Align | — | A3 + P6 + P6-2 Read vs demo · Must **0** · Aligned | **OK** |
| R-06 | Surface | — | Toast P1 · sheet/composer DEFER · GAP-MOB-INC-CHAT-UI-01 CLOSED | **OK** |
| R-07 | API DEFER | — | GAP-MOB-INC-CHAT-API-01 comments · DES sheet P2 | **Defer** · không block |
| R-08 | QA | — | e2eQa ON · Maestro · store live · prior PASS | **OK** |
| R-09 | Store | P2 | PrivacyInfo / Data safety submit | **Accept** |
| R-10 | family | — | A4-IPAD DEFER · **cấm** listing A4 | **OK** |
| R-11 | Siblings | — | list/detail/create/comments · **cấm** auto start (`GAP-MOB-ACT-06`) | **OK** |

## Task gate

| Task | Result |
|------|--------|
| T-IOS-INC-CHAT | PASS (prior Dev) |
| T-AND-INC-CHAT | PASS (prior Dev) |
| T-BE-* | **n/a** · comments DEFER |
| T-BFF-INC-CHAT | **n/a** · catch-all · no Write |
| T-QA-INC-CHAT | PASS (`ok:true` · Must align 0 · `task_52378a1c`) |
| T-REVIEW-SEC / DTO / ALIGN | PASS · Must align = **0** |

## VERIFY GATE (`task_dc7b1c8d` · roleOnly=`review`)

| Gate | Result |
|------|--------|
| Artifact `review/findings.md` + REVIEW-META + STATUS | **PASS** |
| prior QA e2e / Dev builds (evidence only) | **PASS** · **cấm** yarn build/e2e/start:std ở Review |
| Step 4b BE align / migration | **SKIP** · role review · N/A P1 toast |
| Align vision CORE PNG Read | **PASS** · Must **0** |
| Chain other role | **SKIP** · GAP-PKT-ROLE-01 |

## Verdict

incident-chat dual-native P1 toast «Trao đổi sự cố»: security (no HTTP) + DTO N/A + UI align Must **0** · prior QA/Dev VERIFY PASS · sheet/comments DEFER P2. **review_confirm=approve** (autopilot). Pipeline **complete**.

## Handoff

| Field | Value |
|-------|--------|
| phase_to | `done` |
| post_review | **skip** |
| Next | `/edit-mobile-feature` — **cấm** re-run full pipeline |
| P2 cite | GAP-MOB-INC-CHAT-API-01 · DES-MOB-INC-CHAT sheet khi comments Signed |
| Chain this turn | **không** (roleOnly=`review`) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.20.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-08-29T11:22:16.000Z |
| versionGate | rechecked |
| taskId | `task_dc7b1c8d` |
| contentHash | sha256:incident-chat-mobile-control-hint-20260829 |
| realDataHash | sha256:incident-chat-mobile-real-data-20260829 |
| bffContentHash | sha256:incident-chat-mobile-bff-20260829 |
| actionTreeHash | sha256:incident-chat-mobile-action-tree-20260829 |
| ctxContentHash | sha256:incident-chat-ctx-20260829 |
| demoContentHash | sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328 |

---
<!-- Version meta: skillId=agent-review-mobile skillVersion=2026.08.20.01 schemaVersion=1 workflowVersion=2026.08.29.1 rulesVersion=2026.08.29.5 versionGate=rechecked contentHash=sha256:incident-chat-mobile-control-hint-20260829 dorGate=PASS review_confirm=approve -->
