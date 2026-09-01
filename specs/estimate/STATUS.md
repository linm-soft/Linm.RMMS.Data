# STATUS — estimate

| Field | Value |
|-------|-------|
| feature | `estimate` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO **confirmed** · Design **confirmed** · SA **confirmed** · TL **confirmed** · Dev **done** · QA **done** · Review **approve** · surface screen `#sc-estimate` · `DES-MOB-EST`) · ≠ prior web `list` Kind B+D |
| featureClass | mobile form · web prior `ai` Kind B+D **giữ** |
| runMode | Autopilot ON · autoApprove **ON** (design/sa/review only) · roleOnly=`review` · e2eQa **ON** · taskId=`task_0d408356` · ios_test_phase=`phase1_iphone` |
| mode | `feature_context` · native `#sc-estimate` shipped dual · **QA PASS** · **Review APPROVE** |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| demo | `specs/estimate/ui/prototype/{ios,android}/index.html` `#sc-estimate` · `DES-MOB-EST` · SSOT cite mobile-p1 (hash skip) |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/estimate.md` |
| mfe | — (native this cycle · **cấm** mfeStdUrl) · prior web MFE **giữ** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/estimates` · `api/v1/maintenance/work-orders` · `api/v1/incident/incidents/{id}/assign` · **cấm ERP.*** |
| domain | **AiVision** + **Maintenance** + **Incident** |
| taskId | `task_0d408356` |
| roleOnly | `review` · `/agent-review-mobile` · **done** · review_confirm=**approve** |
| contentHash | `sha256:estimate-mobile-control-hint-20260829` |
| realDataHash | `sha256:estimate-mobile-real-data-20260829` |
| bffContentHash | `sha256:estimate-mobile-bff-20260829` |
| actionTreeHash | `sha256:estimate-mobile-action-tree-20260829` |
| ctxContentHash | `sha256:58cb5c3279c3df7360e1f3f29adccc79fada11ce219853dfce035217e25b7f3d` |
| demoContentHash | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.29.1` |
| rulesVersion | `2026.08.29.5` |
| skillVersions | review-mobile=`2026.08.25.01` · qa-mobile=`2026.08.25.01` · dev-ios=`2026.08.29.1` · dev-android=`2026.08.29.1` · tl-mobile=`2026.08.29.1` · sa-mobile=`2026.08.20.03` · design-mobile=`2026.08.25.01` · po-mobile=`2026.08.25.01` · data-analy-mobile=`2026.08.25.01` · prior web pipeline **giữ** |
| versionGate | `rechecked` |
| updatedAt | `2026-09-01T09:27:55.680Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD — autoApprove=ON design/sa/review · **cấm** autoApprove `qa_fail_rollback` / `qa_fix_plan`)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | **confirmed** | prior · `Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | **confirmed** Design dual | prior web MFE confirmed · this cycle native |
| autoApprove | **ON** | design/sa/review only · **không** skip qa gates |
| design_confirm | **approve** | mobile Design · dual + ux-analy + demo-parity PASS · autoApprove |
| solution_confirm | **approve** | mobile SA · `be/solution-discovery.md` · autoApprove |
| ios_repo_confirm | **confirmed** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` · reuse · TL autoApprove |
| android_repo_confirm | **confirmed** | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` · reuse · TL autoApprove |
| route_confirm | **route_a** | mnt-list hub/card + incident CTA → push `#sc-estimate` · tabs none · work active |
| qa_fail_rollback | **approved** | prior FAIL `task_a89bc544` → closed by re-QA PASS |
| qa_fix_plan | **approved** | implement `task_8ab3d7ec` done |
| review_confirm | **approve** | mobile Review · autoApprove · `task_0d408356` · P0=0 · Must=0 |
| align_confirm | **approve** | QA Aligned · demo-parity OK |
| e2eQa | **ON** | QA **PASS** · ok:true · Review cite only (**cấm** re-e2e) |
| version_mismatch_action | **recheck_new** | applied · workflow `2026.08.29.1` |
| sa_tz_gate | **tz_required** | DueAt UTC wire · display VN |
| sa_xco_gate | **xco_na** | |
| sa_shared_table | **share_tenant** | reuse Estimate/Line/WO/Incident |

### Prior web confirms (giữ — closed `task_f699faf1`)

| Gate | Decision |
|------|----------|
| design_confirm (web) | approve |
| solution_confirm (web) | approve |
| review_confirm (web) | approve |
| route_confirm (web) | `/ai-kd/uoc-luong-sc` |

## Pipeline

| Step | Agent | Artifact | Status | skillVer | versionGate |
|------|-------|----------|--------|----------|-------------|
| 0b | data-analy-mobile | `_data-analy/estimate-{control-hint,bff-endpoints,real-data,action-tree}.md` | **done** | 2026.08.25.01 | ok |
| 1 | po-mobile | `po/requirement.md` § Current vs New (mobile) · prior web → `po/requirement-web.md` | **done** | 2026.08.25.01 | ok |
| 2.1 | design-mobile | ui/design.md + prototype dual + ux-analy + demo-parity · prior web → `ui/design-web.md` | **done** | 2026.08.25.01 | ok |
| 2.2 | sa-mobile | be/solution-discovery.md (mobile) · prior web → `be/solution-discovery-web.md` | **done** | 2026.08.20.03 | rechecked |
| 3 | tl-mobile | task/estimate.md (mobile) · prior web → `task/estimate-web.md` | **done** | 2026.08.29.1 | rechecked |
| 4 | dev-ios+android | implement native `#sc-estimate` · T-IOS-EST · T-AND-EST | **done** | 2026.08.29.1 | rechecked |
| 4b | dev qa-fix plan | `implement/estimate-qa-fix-plan.md` | **done** | 2026.08.29.1 | rechecked |
| 4c | dev qa-fix implement | plan §1–5 · yaml harden · VERIFY GATE | **done** | 2026.08.29.1 | rechecked |
| 5 | qa-mobile | qa/scenarios + e2e · store · compact | **done** | 2026.08.25.01 | rechecked |
| 6 | review-mobile | review/findings · compact · prior web → `findings-web.md` | **done** | 2026.08.25.01 | rechecked |

### Prior web pipeline (giữ — **không** xóa)

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b→6 | web | `specs/estimate/{po→requirement-web,ui→design-web,be→solution-discovery-web,task→estimate-web,implement,qa,review}` · `_data-analy/features/estimate-control-hint.md` | **done** · closed `task_f699faf1` |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_b0b56370 | estimate | data_analy | — | **completed** | roleOnly · `/agent-data-analy-mobile` · mobile sheet · edit_page |
| task_5338c2be | estimate | po | data_analy | **completed** | `/agent-po-mobile` · roleOnly · autoApprove=ON · packKind `sheet` · VERIFY GATE PASS · hash skip · **cấm** re-scan |
| task_c0fb308d | estimate | design | po | **completed** | `/agent-design-mobile` · dual `#sc-estimate` + ux-analy + demo-parity · design_confirm=approve · hash skip |
| task_9f669577 | estimate | sa | design | **completed** | `/agent-sa-mobile` · `be/solution-discovery.md` · solution_confirm=approve · WorkType=`repair` · Step 4b N/A · prior web → `solution-discovery-web.md` |
| task_cc28db20 | estimate | tl | sa | **completed** | `/agent-tl-mobile` · `task/estimate.md` · T-IOS-EST · T-AND-EST · route_a · T-BE n/a · prior → `estimate-web.md` |
| task_59d13884 | estimate | dev | tl | **completed** | `/agent-dev-ios` + `/agent-dev-android` · `implement/{ios,android}.md` · VERIFY GATE PASS · GAP-MOB-EST-NAV-01 closed |
| task_a89bc544 | estimate | qa | dev | **failed** | `/agent-qa-mobile` · e2eQa=ON · **MAESTRO-AND FAIL** · GAP-QA-STORE-03 · `qa_fail_rollback` Approved → Dev plan |
| task_bb0c0524 | estimate | dev | task_a89bc544 | **completed** | qaFailFix=1 · qaFixPhase=**plan** · `implement/estimate-qa-fix-plan.md` · board **`qa_fix_plan`** |
| task_8ab3d7ec | estimate | dev | task_bb0c0524 | **completed** | qaFailFix=1 · qaFixPhase=**implement** · plan §1–5 · VERIFY GATE PASS · handoff `dev-compact.md` |
| task_992add79 | estimate | qa | task_8ab3d7ec | **completed** | `/agent-qa-mobile` · e2e ok:true · MAESTRO-AND PASS · visual Aligned · handoff `qa-compact.md` |
| task_0d408356 | estimate | review | task_992add79 | **completed** | `/agent-review-mobile` · review_confirm=**approve** · findings + review-compact · P0=0 · Must=0 |
| task_f699faf1 | estimate | review (web) | — | **completed** | prior web closed · **giữ** · `findings-web.md` |

## Blockers / open questions

| ID | Issue | Decision / next |
|----|-------|-----------------|
| **R-QA-01** | QA verdict | **closed** · PASS `task_992add79` |
| **GAP-QA-E2E-AND-01** | Android Maestro | **closed** · scroll `btn-assign` + login harden |
| **GAP-QA-STORE-03** | store pack | **closed** · `manifest.ok=true` |
| **GAP-QA-P6-DUP-01** | P6 MD5 dup | **closed** · CORE ≠ CORE-2 |
| **GAP-MOB-UX-COMP-03** | Visual CORE vs demo | **closed** · Aligned · Must 0 · demo `row no-icon` |
| **review_confirm** | mobile Review | **approve** · `task_0d408356` |
| VERIFY GATE | iOS · Android · BFF | **PASS** (prior implement) |
| Prior CLOSED | GAP-MOB-EST-NAV/SIMP/ASSIGNEE/WO/SLA/PACK | **giữ closed** · **cấm** reopen |
| DEFER | A4-IPAD · offline draft · staff lookup | Phase 1 / P2 · **không** block Review |

## Links

- **Review (mobile):** `specs/estimate/review/findings.md` · `REVIEW-META.json` · `handoff/review-compact.md`
- **Review (web giữ):** `specs/estimate/review/findings-web.md` · `REVIEW-META-web.json`
- **QA (mobile):** `specs/estimate/qa/scenarios.md` · `qa/store/estimate/` · `handoff/qa-compact.md`
- **QA fix plan (mobile):** `specs/estimate/implement/estimate-qa-fix-plan.md`
- Prior web QA-fix (giữ): `specs/estimate/implement/estimate-qa-fix-plan-web.md`
- Mobile implement: `specs/estimate/implement/ios.md` · `implement/android.md`
- Handoff compact: `specs/estimate/handoff/{dev,qa,review}-compact.md`
- Mobile TL: `specs/estimate/task/estimate.md`
- Prior web TL (giữ): `specs/estimate/task/estimate-web.md`
- Mobile SA: `specs/estimate/be/solution-discovery.md`
- Prior web SA (giữ): `specs/estimate/be/solution-discovery-web.md`
- Mobile Design: `specs/estimate/ui/design.md` · `ux-analy.md` · `html-to-native-map.md` · `review/demo-parity.md`
- Dual prototype: `specs/estimate/ui/prototype/{ios,android}/index.html`
- Prior web Design (giữ): `specs/estimate/ui/design-web.md`
- Mobile PO: `specs/estimate/po/requirement.md`
- Prior web PO (giữ): `specs/estimate/po/requirement-web.md`
- Mobile control hint: `specs/_data-analy/estimate-control-hint.md`
- Mobile BFF: `specs/_data-analy/estimate-bff-endpoints.md`
- Mobile real-data: `specs/_data-analy/estimate-real-data.md`
- Mobile action-tree: `specs/_data-analy/estimate-action-tree.md`
- Web control hint (giữ): `specs/_data-analy/features/estimate-control-hint.md`
- Demo SSOT cite: `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-estimate`
- CTX: `docs/context/features/estimate.md`
- DOMAIN-MAP: `Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- **Next:** — · mobile pipeline **closed** at Review
- **Queue:** `task_0d408356` Review **completed**

## Handoff → close (`task_0d408356` Review done)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| this role | `review` · **done** · review_confirm=**approve** |
| next | — (no further mobile role) |
| must-read | `handoff/review-compact.md` · `review/findings.md` |
| Native | iOS + Android `#sc-estimate` · QA PASS · Review APPROVE |
| priorWeb | web artifacts **giữ** |

## Verify (Review phase)

| Gate | Result |
|------|--------|
| Role | review only · **PASS** |
| artifact | findings · REVIEW-META · review-compact · **PASS** |
| review_confirm | **approve** |
| align_confirm | **approve** · Must 0 |
| yarn e2e / build / start:std / mfeStdUrl | **skipped** (cấm) |
| Step 4b / migration | **skipped** (cấm · N/A) |
| ERP.* | **none** |
| Chain other role | **không** (GAP-PKT-ROLE-01) · queue → completed |

## Resume / closeout

- closeout data_analy: `task_b0b56370` · roleOnly=`data_analy` · artifacts confirmed · at: `2026-08-29T04:20:00.000Z`
- closeout PO mobile: `task_5338c2be` · roleOnly=`po` · `/agent-po-mobile` · `po/requirement.md` · prior web → `requirement-web.md` · GAP-MOB-EST-* chốt · Design **pending** chain · autoApprove **ON** · at: `2026-08-29T04:25:00.000Z`
- closeout Design mobile: `task_c0fb308d` · roleOnly=`design` · `/agent-design-mobile` · dual `#sc-estimate` · ux-analy · demo-parity PASS · design_confirm=approve · prior web → `design-web.md` · SA **pending** · at: `2026-08-29T04:26:00.000Z`
- closeout SA mobile: `task_9f669577` · roleOnly=`sa` · `/agent-sa-mobile` · `be/solution-discovery.md` · solution_confirm=approve · WorkType=`repair` · prior web → `solution-discovery-web.md` · TL **pending** · at: `2026-08-29T04:36:00.000Z`
- closeout TL mobile: `task_cc28db20` · roleOnly=`team_lead` · `/agent-tl-mobile` · `task/estimate.md` · T-IOS-EST · T-AND-EST · route_a · prior web → `estimate-web.md` · Dev **pending** · at: `2026-08-29T04:42:00.000Z`
- closeout Dev mobile: `task_59d13884` · roleOnly=`dev` · `/agent-dev-ios` + `/agent-dev-android` · `implement/{ios,android}.md` · VERIFY GATE PASS · QA **pending** · at: `2026-08-29T04:55:00.000Z`
- closeout QA mobile (fail): `task_a89bc544` · roleOnly=`qa` · MAESTRO-AND FAIL · GAP-QA-STORE-03 · `qa_fail_rollback` → Dev plan · at: `2026-08-29T05:32:35.701Z`
- closeout Dev QA-fix plan: `task_bb0c0524` · roleOnly=`dev` · qaFixPhase=**plan** · `implement/estimate-qa-fix-plan.md` · **cấm** code · board **`qa_fix_plan`** · at: `2026-08-29T18:31:49.000Z`
- closeout Dev QA-fix implement: `task_8ab3d7ec` · roleOnly=`dev` · qaFixPhase=**implement** · yaml harden · VERIFY GATE PASS · QA **pending** · at: `2026-09-01T08:58:07.000Z`
- closeout QA mobile (re-QA PASS): `task_992add79` · roleOnly=`qa` · e2e ok:true · MAESTRO-AND PASS · visual Aligned · Review **pending** · at: `2026-09-01T09:22:00.000Z`
- closeout Review mobile: `task_0d408356` · roleOnly=`review` · `/agent-review-mobile` · review_confirm=**approve** · findings + review-compact · pipeline **closed** · at: `2026-09-01T09:26:00.000Z`
- closeout epic cleanup_mock: `task_a33dfede` · remove `demoFromIncident` dual · seedFail toast · at: `2026-09-01T10:10:00.000Z`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T09:26:00.000Z |
| versionGate | rechecked |
| taskId | task_0d408356 |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=2 · workflowVersion=2026.08.29.1 · versionGate=rechecked · skillId=agent-review-mobile · taskId=task_0d408356 -->
