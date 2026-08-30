# STATUS — vis-capture

| Field | Value |
|-------|-------|
| feature | `vis-capture` |
| phase | `done` |
| status | `done` |
| packKind | **`screen`** (PO chốt · đóng GAP-MOB-VIS-PACK-01 · demo `#sc-vis-capture` full) |
| changeScope | `new_page` |
| demo | /Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/{ios,android}/index.html |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/vis-capture.md` |
| mfe | — (native · **cấm** mfeStdUrl) |
| mfeStdRoute | — |
| mfeStdUrl | — |
| ios | `Linm.RMMS.Mobile.iOS` · e2e-qa-mobile sim 6.9" |
| android | `Linm.RMMS.Mobile.Android` · e2e-qa-mobile emulator |
| bff | `Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP AiVision + Incident + Patrol — **cấm ERP.*** |
| lastRole | `review` · `/agent-review-mobile` · **confirmed** · task `task_3be26d66` · `review_confirm=done` |
| autoApprove | `ON` |
| e2eQa | ON · prior QA `ok:true` · CORE PNG Read **Aligned** · Must **0** · review **cấm** re-run e2e/start:std |
| contentHash | `sha256:vis-capture-control-hint-20260829` |
| realDataHash | `sha256:vis-capture-real-data-20260829` |
| bffContentHash | `sha256:vis-capture-mobile-bff-20260829` |
| actionTreeHash | `sha256:vis-capture-action-tree-20260829` |
| skillVersion | `2026.08.20.01` (agent-review-mobile) |
| schemaVersion | `1` |
| workflowVersion | `2026.08.29.1` |
| rulesVersion | `2026.08.29.5` |
| versionGate | `rechecked` |
| verifyGate | review findings **PASS** · SEC/DTO/ALIGN Must **0** · prior QA/Dev evidence only · roleOnly=`review` · **cấm** e2e/build/Step4b |
| updatedAt | `2026-08-29T10:33:13.225Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | **released** (review done) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/vis-capture-control-hint.md · vis-capture-bff-endpoints.md · vis-capture-real-data.md · vis-capture-action-tree.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md · ui/ux-analy.md · ui/html-to-native-map.md · ui/review/demo-parity.md · prototype/ios/index.html · prototype/android/index.html | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/vis-capture.md | **confirmed** |
| 4 | dev | implement/ios.md · implement/android.md | **confirmed** |
| 5 | qa | qa/scenarios.md · qa/store/vis-capture/CAPTURE.md · qa/store/vis-capture/manifest.json · ui/review/align-ux.md | **confirmed** |
| 6 | review | review/findings.md · review/REVIEW-META.json | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_086ba802 | vis-capture | data_analy | — | **completed** | changeScope=new_page · packKind sheet→PO screen · DoR PASS |
| task_8735d614 | vis-capture | po | data_analy | **completed** | changeScope=new_page · packKind=screen · DoR PASS · autoApprove ON |
| task_27b1bf39 | vis-capture | design | po | **completed** | changeScope=new_page · dual parity · design_confirm approve · hash skip · DoR PASS |
| task_5dc1deb6 | vis-capture | sa | design | **completed** | `/agent-sa-mobile` · solution_confirm approve · GAP-MOB-VIS-DETECT-01 → T-BE · handoff TL · **cấm** e2e / Step 4b |
| task_47d8e017 | vis-capture | team_lead | sa | **completed** | `/agent-tl-mobile` · route_a · T-IOS/T-AND/T-BE-ENGINE · DoR PASS · **cấm** e2e / Step 4b / yarn build |
| task_23892797 | vis-capture | dev | team_lead | **completed** | `/agent-dev-ios`+`/agent-dev-android` · T-IOS/T-AND/T-BE-ENGINE · build gates PASS · **cấm** e2e |
| task_752e74c9 | vis-capture | qa | dev | **completed** | `/agent-qa-mobile` · e2eQa=ON · ok:true · align Aligned · Must 0 · handoff Review |
| task_3be26d66 | vis-capture | review | qa | **completed** | `/agent-review-mobile` · review_confirm=done · SEC/DTO/ALIGN PASS · pipeline complete |

### Dev split (from task/vis-capture.md)

| id | layer | status | notes |
|----|-------|--------|-------|
| T-IOS-VIS-CAP | ios | **done** | screen + PhotoRow + GPS gate + detect/attach + entry |
| T-AND-VIS-CAP | android | **done** | dual parity · section + Bỏ qua |
| T-BE-VIS-DETECT-ENGINE | be | **done** | Signed harden `POST ai-vision/detect` · SourceKind=`detect-signed` |
| T-BE-VIS-DETECT-MIG | be | **n/a** | AccuracyM request-only |
| T-BFF-VIS-CAP | bff | **n/a** | proxy catch-all |
| T-KIT-VIS-CAP | kit | **n/a** | kit_missing none |
| T-QA-VIS-CAP | qa | **done** | e2e-qa-mobile slug only · store PNG · align Aligned |
| T-REVIEW-VIS-CAP | review | **done** | findings · SEC/DTO/ALIGN Must 0 · review_confirm=done |

## Blockers / open questions

- GAP-MOB-VIS-DUAL-01 — **CLOSED** Design · Android section «Ảnh hiện trường» + CTA «Bỏ qua»
- GAP-MOB-VIS-PACK-01 — **CLOSED** PO · packKind=`screen` · surface `#sc-vis-capture`
- GAP-MOB-VIS-DETECT-01 — **CLOSED** Dev · Signed engine trên `POST ai-vision/detect` · HTTP AiService + local fallback · SourceKind=`detect-signed`
- GAP-MOB-VIS-GPS-01 — **CLOSED** SA · client gate AccuracyM ≤ 30 m trước detect
- GAP-MOB-A11Y-VIS-01 — **OPEN Should** · Maestro text «±»/«đã chốt» NFC·NFD · không block · Review Defer

## Links

- data-analy → po → ui → be → task → implement → qa → review → **done**
- native: e2eQa ON → prior `yarn e2e-qa-mobile` **PASS** — review **cấm** re-run / mfeStdUrl
- review: `specs/vis-capture/review/findings.md` · `review_confirm=done` · autoApprove ON
- reviewUrl iOS: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/ios/index.html`
- reviewUrl Android: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/vis-capture/ui/prototype/android/index.html`
- align: `specs/vis-capture/ui/review/align-ux.md` · Must **0**
- post_review: **skip** · next `/edit-mobile-feature` only nếu cần delta
