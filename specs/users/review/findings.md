# Review — users (KEEP + delta job-title)

| Field | Value |
|-------|-------|
| feature | `users` |
| this role | `review` · `/agent-review` |
| status | **done** |
| review_confirm | **approve** (autopilot · `task_e4c84ce6` · autoApprove=ON) |
| changeScope | `edit_page` |
| packKind | `list` |
| prior QA | `task_9d0370d3` · `qa/scenarios.md` · **confirmed** · e2e S0/S1/QA-20 **PASS** |
| prior Dev | `task_a49a5149` · implement **confirmed** |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/users` + LKP `job-titles` |
| bff | `web-bff/api/v1/integration/users` · `…/job-titles` |
| cite | `job-title.md` §5b · GAP-F-USR-05 |
| contentHashAnaly | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| autoApprove | ON |
| updatedAt | `2026-09-18T16:55:00.000Z` |

## REVIEW-META

| Hash input | Notes |
|------------|-------|
| MFE | `UsersListPage` + `UsersFormPage` + `JOB_TITLE_LOOKUP_CONFIG` · `/integration/users` |
| BE | `JobTitleCode` col · `?jobTitleCode=` · soft denorm · LKP stub |
| skillVersion | 2026.08.08.21 |
| gap | Kind B KEEP + delta chức vụ · AC-G-09 |

## Audit matrix (QUERY / SEC / UI-FN / BE-FN)

| Area | Check | Result |
|------|-------|--------|
| QUERY | List `GET …/users?jobTitleCode=` · BFF QS passthrough | **PASS** (`AppUsersController` + `AppUserService` filter · BFF `Request.QueryString`) |
| QUERY | LKP `GET …/job-titles` + `/search` · **cấm** ERP.* / `api/v1/rmms/*` | **PASS** (Integration route · FE seed fallback GAP-JOB-05) |
| SEC | Soft validate unknown code · no invent master CRUD | **PASS** |
| SEC | `[RequirePermission]` / Auth host tách | **Accept** GAP-F-USR-01 P2 |
| UI-FN | Zone B SearchInput Chức vụ · `catalogKind=job-title` · **cấm** nút Tìm | **PASS** (`…-field-jobTitle` · QA S1) |
| UI-FN | Zone C cột **Chức vụ** = `jobTitleDisplay(code, denorm)` · **≠** roleCode · AC-G-09 | **PASS** |
| UI-FN | Form SearchInput `jobTitleCode` peer org · View `<dl>` · **cấm** Text free-form | **PASS** (QA-20) |
| UI-FN | 1× LinPageLayout catalog · resize grid · LinCatalogListPagination · **cấm** ERP.* | **PASS** (KEEP prior) |
| BE-FN | Migration `JobTitleCode` + denorm `JobTitle` · DTO expose · soft resolve | **PASS** (`Schema_AppUserJobTitleCode`) |
| BE-FN | FormMode↔API Create/Edit/View + code · **cấm** rewrite A–D | **PASS** |
| BE-FN | ProfileTab catalog (GAP-JOB-06) | **out P1** — boundary Accept |

## Findings

| ID | Area | Sev | Finding | Disposition |
|----|------|-----|---------|-------------|
| R-USR-01 | Auth | P2 | Permission stub / Auth tách | **Accept** (GAP-F-USR-01) |
| R-USR-02 | LKP | soft | Catalog API stub + FE seed 19 | **Accept** (GAP-JOB-05) |
| R-USR-03 | Profile | P1 | ProfileTab job-title out staff P1 | **Accept** (GAP-JOB-06 boundary) |
| R-USR-04 | History | P1 | document-history stub | **Accept** |
| R-USR-05 | Data | — | Empty seed live · CRUD persist = API/code (QA) | **Accept** — không P0 |
| R-USR-06 | UI-FN | — | Zone B/C/Form job-title SearchInput + AC-G-09 | **OK** |
| R-USR-07 | BE-FN | — | `job_title_code` · filter · denorm · LKP Integration | **OK** |
| R-USR-08 | QUERY | — | `?jobTitleCode=` + BFF forward | **OK** |
| R-USR-09 | QA | — | T-QA-JOB-01 · QA-JOB-CRUD · S0/S1/QA-20 **PASS** | **OK** |
| R-USR-10 | KEEP | — | Prior A–D / CRUD / `?route=` / MultiSearchCsv | **OK** |

## Task gate (delta + KEEP)

| Task | Result |
|------|--------|
| T-*-JOB (BE/BFF/UI/LKP) | **PASS** |
| T-QA-JOB-01 / QA-JOB-CRUD | **PASS** |
| Prior T-* (route/CRUD/list/form) | **KEEP PASS** |
| GAP-F-USR-05 | **CLOSED** (staff path) |

## Verify gate (roleOnly=review)

| Check | Result |
|-------|--------|
| artifact findings + compact | **PASS** |
| yarn build / e2e / start:std | **cấm** this role — inherit Dev/QA **PASS** |
| Step 4b / migration | **cấm** this role |

## Verdict

KEEP Kind B + delta chức vụ khớp PO/Design/SA/TL/Dev/QA. **P0: none**. Open P1/P2/soft không block. **`review_confirm=approve`** (autoApprove=ON).

## Handoff

Pipeline **complete** · không role sau Review · STATUS `completed`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-09-18T16:55:00.000Z |
| versionGate | rechecked (`recheck_new`) |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.08.21 |
| taskId | `task_e4c84ce6` |
| contentHashAnaly | sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257 |
| priorQaTaskId | `task_9d0370d3` |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.08.30 |
| designSkillVersion | 2026.08.08.31 |
| saSkillVersion | 2026.08.08.21 |
| teamLeadSkillVersion | 2026.08.09.02 |
| devSkillVersion | 2026.08.09.02 |
| qaSkillVersion | 2026.08.08.21 |
