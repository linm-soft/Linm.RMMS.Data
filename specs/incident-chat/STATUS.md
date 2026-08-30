# STATUS — incident-chat

| Field | Value |
|-------|-------|
| feature | `incident-chat` |
| phase | `dev` |
| status | `implemented` · chat style + messages API · `/edit-mobile-feature` |
| packKind | `screen` (chat) · **cấm** revert toast |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/incident-chat/ui/prototype/{ios,android}/index.html `#sc-incident-list` `#i-chat` |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident-chat.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| lastRole | `dev` · `/edit-mobile-feature` · DES-MOB-INC-CHAT |
| autoApprove | `ON` |
| e2eQa | ON — QA **done** · e2e ok:true · store PNG · Review cite · **cấm** mfeStdUrl |
| contentHash | `sha256:incident-chat-mobile-control-hint-20260829` |
| realDataHash | `sha256:incident-chat-mobile-real-data-20260829` |
| bffContentHash | `sha256:incident-chat-mobile-bff-20260829` |
| actionTreeHash | `sha256:incident-chat-mobile-action-tree-20260829` |
| skillVersion | `2026.08.20.01` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.29.1` |
| rulesVersion | `2026.08.29.5` |
| versionGate | `rechecked` |
| verifyGate | Review **PASS** · artifact findings · Must align 0 · cite prior Dev/QA builds+e2e · Step 4b N/A · **cấm** yarn build/e2e/start:std ở Review |
| updatedAt | `2026-08-29T17:40:00.000Z` |
| dataAnalyAt | `2026-08-29T10:34:45.000Z` |
| dataAnalyTask | `task_9e8d18c5` |
| poAt | `2026-08-29T10:39:15.000Z` |
| poTask | `task_747c0740` |
| designAt | `2026-08-29T10:43:22.000Z` |
| designTask | `task_e8acde41` |
| saAt | `2026-08-29T10:48:57.000Z` |
| saTask | `task_6942d8e5` |
| tlAt | `2026-08-29T10:55:00.000Z` |
| tlTask | `task_3c448351` |
| devAt | `2026-08-29T11:00:00.000Z` |
| devTask | `task_134fe945` |
| qaAt | `2026-08-29T11:14:51.000Z` |
| qaTask | `task_52378a1c` |
| reviewAt | `2026-08-29T11:22:16.000Z` |
| reviewTask | `task_dc7b1c8d` |
| changeScope | `new_page` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (review done · pipeline complete) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/incident-chat-control-hint.md · incident-chat-bff-endpoints.md · incident-chat-real-data.md · incident-chat-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · prototype/ios/index.html · prototype/android/index.html · ui/review/demo-parity.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/incident-chat.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **done** · `/edit-mobile-feature` chat |
| 5 | qa | qa/scenarios.md · qa/store/incident-chat/CAPTURE.md · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_9e8d18c5 | incident-chat | data_analy | — | **done** | control-hint + BFF + real-data + action-tree · CTX created · P1 toast · comments DEFER |
| task_747c0740 | incident-chat | po | data_analy | **done** | requirement · P1 toast · đóng GAP-UI-01 · API/DES DEFER · Dor PASS |
| task_e8acde41 | incident-chat | design | po | **done** | dual toast proto · ux-analy §1–§9 · demo-parity Must · design_confirm approve · hash skip |
| task_6942d8e5 | incident-chat | sa | design | **done** | solution P1 toast · no HTTP · comments DEFER · solution_confirm approve · Step 4b N/A |
| task_3c448351 | incident-chat | team_lead | sa | **done** | `/agent-tl-mobile` · route_a · T-IOS-INC-CHAT · T-AND-INC-CHAT · T-BE n/a · DoR PASS · **cấm** e2e / Step 4b / yarn build |
| task_134fe945 | incident-chat | dev | team_lead | **done** | dual toast ownership + a11y · copy `inc.chat.*` · build PASS · Step 4b N/A · **cấm** e2e |
| task_52378a1c | incident-chat | qa | dev | **done** | e2e-qa-mobile PASS · store PNG · align Aligned · dorGate PASS |
| task_dc7b1c8d | incident-chat | review | qa | **done** | findings · review_confirm approve · Must 0 · VERIFY artifact PASS · **cấm** e2e/build |

### Dev split (from task/incident-chat.md)

| id | layer | status | notes |
|----|-------|--------|-------|
| T-IOS-INC-CHAT | ios | **done** | `#sc-incident-chat` · **cấm** toast · GET/POST messages |
| T-AND-INC-CHAT | android | **done** | `#sc-incident-chat` · route `incident-chat/{id}` |
| T-BE-API | be | **done** | GET/POST `api/v1/incident/incidents/{id}/messages` |
| T-BE-MIG | be | **done** | Schema_IncidentMessages pair |
| T-BFF-INC-CHAT | bff | **done** | Web forward · Mobile catch-all |
| T-KIT-INC-CHAT | kit | **n/a** | kit_missing N/A |
| T-QA-INC-CHAT | qa | **done** | e2e ok:true · store PNG · align Aligned · Must 0 |
| T-QA-TAB-01 | qa cite | **done** | shell Tab 5 Vấn đề · tabs none on toast · cite PASS |
| T-REVIEW-SEC | review | **done** | no HTTP · Keychain/Encrypted app · no alert · IDOR N/A P1 |
| T-REVIEW-DTO | review | **done** | DTO N/A P1 · dual copy SSOT |
| T-REVIEW-ALIGN | review | **done** | A3+P6 Read · Must 0 · align_confirm approve |

## Blockers / open questions

- GAP-MOB-EDIT-01: lock chat screen — **cấm** worker revert `#i-chat` về toast
- GAP-MOB-INC-CHAT-API-01: **CLOSED** — live `GET|POST …/messages` (không invent `…/comments`)
- GAP-MOB-INC-CHAT-DES-01: **CLOSED** — `#sc-incident-chat` · DES-MOB-INC-CHAT

## Links

- data-analy → po → ui → be → task → implement → qa → review **complete**
- native: e2eQa ON → `yarn e2e-qa-mobile` (sim + emulator + Maestro) — **cấm** mfeStdUrl
- artifacts: [`incident-chat-control-hint.md`](../_data-analy/incident-chat-control-hint.md) · [`incident-chat-bff-endpoints.md`](../_data-analy/incident-chat-bff-endpoints.md) · [`incident-chat-real-data.md`](../_data-analy/incident-chat-real-data.md) · [`incident-chat-action-tree.md`](../_data-analy/incident-chat-action-tree.md) · [`po/requirement.md`](po/requirement.md) · [`ui/design.md`](ui/design.md) · [`ui/ux-analy.md`](ui/ux-analy.md) · [`ui/html-to-native-map.md`](ui/html-to-native-map.md) · [`ui/review/demo-parity.md`](ui/review/demo-parity.md) · [`prototype/ios`](ui/prototype/ios/index.html) · [`prototype/android`](ui/prototype/android/index.html) · [`be/solution-discovery.md`](be/solution-discovery.md) · [`task/incident-chat.md`](task/incident-chat.md) · [`implement/ios.md`](implement/ios.md) · [`implement/android.md`](implement/android.md) · [`qa/scenarios.md`](qa/scenarios.md) · [`qa/store`](qa/store/incident-chat/) · [`align-ux.md`](ui/review/align-ux.md) · [`review/findings.md`](review/findings.md)
