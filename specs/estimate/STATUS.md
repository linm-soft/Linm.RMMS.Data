# STATUS — estimate

| Field | Value |
|-------|-------|
| feature | `estimate` |
| phase | `done` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | **`sheet`** (PO/Design/SA/TL/Dev/QA/Review prior **giữ** · surface `#sc-estimate` · `DES-MOB-EST`) · ≠ web `list` |
| featureClass | mobile form · web prior `ai` Kind B+D **giữ** |
| runMode | Autopilot ON · autoApprove **ON** · roleOnly=`review` **done** · review_confirm=**approve** · e2eQa **PASS** (prior QA) · taskId=`task_eb9d2de5` |
| mode | `feature_context` · **NEW** edit · GAP-MOB-EDIT-01 labelHeader |
| lane | **mobile** · `/agent-qldb-workflow-mobile` |
| demo | `specs/estimate/ui/prototype/{ios,android}/index.html` `#sc-estimate` · SSOT cite mobile-p1 (demo hash **unchanged**) |
| context | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/docs/context/features/estimate.md` |
| mfe | — (native · **cấm** mfeStdUrl) · prior web MFE **giữ** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` |
| backend | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/estimates` · `api/v1/maintenance/work-orders` · `api/v1/incident/incidents/{id}/assign` · **cấm ERP.*** |
| domain | **AiVision** + **Maintenance** + **Incident** |
| taskId | `task_eb9d2de5` |
| roleOnly | `review` · `/agent-review-mobile` · **done** |
| contentHash | `sha256:estimate-mobile-control-hint-20260901-edit01` |
| realDataHash | `sha256:estimate-mobile-real-data-20260901-edit01` |
| bffContentHash | `sha256:estimate-mobile-bff-20260829` (path hash-skip) |
| actionTreeHash | `sha256:estimate-mobile-action-tree-20260829` (tree hash-skip) |
| ctxContentHash | `sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece` |
| demoContentHash | `sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328` |
| reviewHash | `sha256:est-mob-rev-20260901-taskeb9d2de5` |
| skillVersion | `2026.08.29.1` |
| schemaVersion | `2` |
| workflowVersion | `2026.08.29.1` |
| rulesVersion | `2026.08.29.5` |
| skillVersions | review-mobile=`2026.08.25.01` · qa-mobile=`2026.08.25.01` · dev-ios=`2026.08.29.1` · tl-mobile=`2026.08.29.1` · sa-mobile=`2026.08.20.03` · design-mobile=`2026.08.25.01` · po-mobile=`2026.08.25.01` · data-analy-mobile=`2026.08.25.01` · prior roles **giữ** |
| versionGate | `rechecked` |
| updatedAt | `2026-09-01T15:08:51.524Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD — autoApprove=ON design/sa/review · **cấm** autoApprove `qa_fail_rollback` / `qa_fix_plan`)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | **confirmed** | prior · `Linm.RMMS.WebService` · **cấm ERP.*** |
| uiRepo | **confirmed** Design dual | prior |
| autoApprove | **ON** | design/sa/review only |
| design_confirm | **approve** | dual labelHeader lock · GAP-MOB-EDIT-01 · `task_18e9655b` · prior history **giữ** |
| solution_confirm | **approve** | `task_e5be941e` · paths **unchanged** · GAP-MOB-EDIT-01 UX-only |
| ios_repo_confirm | **confirmed** | reuse |
| android_repo_confirm | **confirmed** | reuse |
| route_confirm | **route_a** | mnt-list + incident CTA → `#sc-estimate` · **giữ** this edit |
| qa_fail_rollback | **approved** | prior |
| qa_fix_plan | **approved** | prior |
| review_confirm | **approve** | `task_eb9d2de5` · GAP-MOB-EDIT-01 · prior `task_0d408356` **giữ** |
| align_confirm | **approve** | Must 0 · QA Aligned · AC-F-13 |
| e2eQa | **PASS** | `yarn e2e-qa-mobile` ok:true · `2026-09-01T15:00:18.091Z` · visual Aligned · AC-F-13 |
| version_mismatch_action | **recheck_new** | applied |
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
| 0b | data-analy-mobile | `_data-analy/estimate-{control-hint,bff,real-data,action-tree}.md` + compact | **done** | 2026.08.25.01 | ok |
| 1 | po-mobile | `po/requirement.md` § Current vs New (GAP-MOB-EDIT-01) · compact | **done** | 2026.08.25.01 | ok |
| 2.1 | design-mobile | ui/design + prototype dual + ux · labelHeader lock | **done** | 2026.08.25.01 | ok |
| 2.2 | sa-mobile | be/solution-discovery · paths skip · GAP-MOB-EDIT-01 | **done** | 2026.08.20.03 | ok |
| 3 | tl-mobile | task/estimate.md · T-IOS/AND-LABEL · compact | **done** | 2026.08.29.1 | ok |
| 4 | dev-ios+android | implement labelHeader dual | **done** | 2026.08.29.1 | ok |
| 4b–4c | — | — | **n/a** this edit (UX) | — | — |
| 5 | qa-mobile | scenarios + e2e · AC-F-13 | **done** | 2026.08.25.01 | ok |
| 6 | review-mobile | findings + compact · approve | **done** | 2026.08.25.01 | ok |

### Prior web pipeline (giữ — **không** xóa)

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b→6 | web | `specs/estimate/{po→requirement-web,…}` · `_data-analy/features/estimate-control-hint.md` | **done** · closed `task_f699faf1` |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_eb9d2de5 | estimate | review | task_0a79076c | **completed** | roleOnly · `/agent-review-mobile` · approve · GAP-MOB-EDIT-01 |
| task_0a79076c | estimate | qa | task_2b81d5ff | **completed** | roleOnly · `/agent-qa-mobile` · e2e PASS · visual Aligned · AC-F-13 |
| task_2b81d5ff | estimate | dev | tl | **completed** | roleOnly · `/agent-dev-ios`+`/agent-dev-android` · **GAP-MOB-EDIT-01** labelHeader dual |
| task_93fd2561 | estimate | tl | sa | **completed** | roleOnly · `/agent-tl-mobile` · edit_page · **GAP-MOB-EDIT-01** · T-IOS/AND-LABEL |
| task_e5be941e | estimate | sa | design | **completed** | roleOnly · `/agent-sa-mobile` · edit_page · **GAP-MOB-EDIT-01** · paths skip |
| task_18e9655b | estimate | design | po | **completed** | roleOnly · `/agent-design-mobile` · edit_page · **GAP-MOB-EDIT-01** labelHeader |
| task_eadacecf | estimate | po | data_analy | **completed** | roleOnly · `/agent-po-mobile` · edit_page · **GAP-MOB-EDIT-01** |
| task_210a31d6 | estimate | data_analy | — | **completed** | roleOnly · `/agent-data-analy-mobile` · edit_page · **GAP-MOB-EDIT-01** |
| task_b0b56370 | estimate | data_analy | — | **completed** | prior mobile sheet · **giữ** |
| task_5338c2be | estimate | po | data_analy | **completed** | prior · **giữ** · re-open chain via new PO task |
| task_c0fb308d | estimate | design | po | **completed** | prior · **giữ** |
| task_9f669577 | estimate | sa | design | **completed** | prior · **giữ** |
| task_cc28db20 | estimate | tl | sa | **completed** | prior · **giữ** |
| task_59d13884 | estimate | dev | tl | **completed** | prior · **giữ** |
| task_a89bc544 | estimate | qa | dev | **failed** | prior · closed via re-QA |
| task_bb0c0524 | estimate | dev | task_a89bc544 | **completed** | qaFix plan · **giữ** |
| task_8ab3d7ec | estimate | dev | task_bb0c0524 | **completed** | qaFix implement · **giữ** |
| task_992add79 | estimate | qa | task_8ab3d7ec | **completed** | prior PASS · **giữ** |
| task_0d408356 | estimate | review | task_992add79 | **completed** | prior approve · **giữ** · superseded confirm by `task_eb9d2de5` |
| task_f699faf1 | estimate | review (web) | — | **completed** | prior web · **giữ** |

## Blockers / open questions

| ID | Issue | Decision / next |
|----|-------|-----------------|
| **GAP-MOB-EDIT-01** | Label header trên mọi input `#sc-estimate` | **Review closed** · AC-F-13 · approve |
| Prior CLOSED | GAP-MOB-EST-* · R-QA-* · Review prior | **giữ closed** · **cấm** reopen |
| DEFER | A4-IPAD · offline draft · staff lookup | Phase 1 / P2 |

## Links

- **Handoff review:** `specs/estimate/handoff/review-compact.md`
- **Handoff qa:** `specs/estimate/handoff/qa-compact.md`
- **Handoff dev:** `specs/estimate/handoff/dev-compact.md`
- **Handoff tl:** `specs/estimate/handoff/team_lead-compact.md`
- **Handoff sa:** `specs/estimate/handoff/sa-compact.md`
- **Handoff design:** `specs/estimate/handoff/design-compact.md`
- **Handoff po:** `specs/estimate/handoff/po-compact.md`
- **Handoff data_analy:** `specs/estimate/handoff/data_analy-compact.md`
- Review: `specs/estimate/review/findings.md` · `REVIEW-META.json`
- QA: `specs/estimate/qa/scenarios.md` · `qa/store/estimate/`
- Implement: `specs/estimate/implement/{ios,android}.md`
- Mobile control hint: `specs/_data-analy/estimate-control-hint.md`
- Mobile BFF: `specs/_data-analy/estimate-bff-endpoints.md`
- Mobile real-data: `specs/_data-analy/estimate-real-data.md`
- Mobile action-tree: `specs/_data-analy/estimate-action-tree.md`
- Solution: `specs/estimate/be/solution-discovery.md`
- Task: `specs/estimate/task/estimate.md`
- Design: `specs/estimate/ui/design.md` · ux · html-to-native-map · demo-parity
- Dual prototype: `specs/estimate/ui/prototype/{ios,android}/index.html`
- Demo SSOT cite: `specs/mobile-p1/ui/prototype/{ios,android}/index.html` `#sc-estimate`
- CTX: `docs/context/features/estimate.md`
- **Next:** — · mobile edit pipeline **closed**
- **Queue:** `task_eb9d2de5` review → **completed**

## Handoff → close (`task_eb9d2de5` review done)

| Field | Value |
|-------|-------|
| feature | `estimate` |
| this role | `review` · **done** |
| next | — · pipeline closed |
| must-read | `handoff/review-compact.md` · `review/findings.md` |
| delta | review_confirm=**approve** · align_confirm=**approve** · GAP-MOB-EDIT-01 closed |
| priorWeb | web artifacts **giữ** |

## Verify (review phase)

| Gate | Result |
|------|--------|
| Role | review-mobile only · **PASS** |
| artifact | `review/findings.md` · `REVIEW-META.json` · `handoff/review-compact.md` · **PASS** |
| review_confirm | **approve** |
| align_confirm | **approve** · Must 0 |
| e2e / yarn build / start:std | **none** (cấm Review) |
| Step 4b / migration | **none** |
| ERP.* | **none** |
| Chain other role | **không** (GAP-PKT-ROLE-01) |

## Resume / closeout

- closeout review (edit): `task_eb9d2de5` · roleOnly=`review` · review_confirm=approve · align_confirm=approve · GAP-MOB-EDIT-01 · at: `2026-09-01T15:10:00.000Z`
- closeout qa (edit): `task_0a79076c` · roleOnly=`qa` · e2e PASS · visual Aligned · AC-F-13 · at: `2026-09-01T15:03:00.000Z`
- closeout dev (edit): `task_2b81d5ff` · roleOnly=`dev` · GAP-MOB-EDIT-01 labelHeader dual · VERIFY PASS · at: `2026-09-01T14:51:45.000Z`
- closeout tl (edit): `task_93fd2561` · roleOnly=`team_lead` · GAP-MOB-EDIT-01 · T-IOS/AND-LABEL · at: `2026-09-01T14:44:00.000Z`
- closeout sa (edit): `task_e5be941e` · roleOnly=`sa` · GAP-MOB-EDIT-01 · paths skip · at: `2026-09-01T14:41:00.000Z`
- closeout design (edit): `task_18e9655b` · roleOnly=`design` · GAP-MOB-EDIT-01 · at: `2026-09-01T14:35:44.000Z`
- closeout po (edit): `task_eadacecf` · roleOnly=`po` · GAP-MOB-EDIT-01 · at: `2026-09-01T14:32:22.000Z`
- closeout data_analy (edit): `task_210a31d6` · roleOnly=`data_analy` · GAP-MOB-EDIT-01 · at: `2026-09-01T14:28:40.000Z`
- closeout Review mobile (prior): `task_0d408356` · review_confirm=approve · at: `2026-09-01T09:26:00.000Z`
- closeout data_analy (prior): `task_b0b56370` · at: `2026-08-29T04:20:00.000Z`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.29.1 |
| rulesVersion | 2026.08.29.5 |
| generatedAt | 2026-09-01T15:10:00.000Z |
| versionGate | rechecked |
| taskId | task_eb9d2de5 |

---
<!-- Version meta: skillVersion=2026.08.25.01 · schemaVersion=2 · workflowVersion=2026.08.29.1 · versionGate=rechecked · skillId=agent-review-mobile · taskId=task_eb9d2de5 -->
