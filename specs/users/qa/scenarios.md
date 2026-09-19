# QA — scenarios — users (Kind B · KEEP + delta job-title)

| Field | Value |
|-------|-------|
| feature | `users` |
| this role | `qa` · `/agent-qa` |
| status | `done` |
| changeScope | `edit_page` |
| packKind | `list` |
| pack | T-QA-01 · QA-CRUD · **T-QA-JOB-01** · **QA-JOB-CRUD** · FormType KEEP |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| mfeStdRoute | `/integration/users` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/integration/users` + LKP `job-titles` |
| bff | `web-bff/api/v1/integration/users` |
| lookup | road-routes · org-units · users · **job-titles/search** |
| taskId | `task_9d0370d3` |
| prior Dev | `task_a49a5149` · implement **confirmed** |
| autoApprove | ON |
| e2eQa | ON · runtime |
| method | E2E Playwright `S0,S1,QA-20` + PNG · static review Zone B/C/Form job-title · schema hotfix JobTitle* |
| updatedAt | `2026-09-18T16:48:00.000Z` |

## Smoke — Final MFE (REQUIRED · e2e)

| # | Step | Expect | Result |
|---|------|--------|--------|
| S0 | `yarn start:std` · `http://localhost:9314/integration/users` | Route mount · title «Quản lý người dùng» · `data-testid=rmms-users-list-page` · **không** 404 | **PASS** · PNG `qa/screens/S0.png` · sha16=`7b8f8ed3940ce834` |
| S1 | List shell | 1× LinPageLayout catalog · Zone B filters · **Chức vụ** SearchInput · org tree + empty/grid · **không** nested CatalogListShell | **PASS** · PNG `qa/screens/S1.png` · sha16=`5bda8ef5caa557d1` · live: empty «Không có dữ liệu người dùng» |
| S2–S9 | KEEP prior (pager · debounce · role/status/route · toolbar · history · row menu · form modes · no ERP.*) | Prior **PASS** (task_2710faa2) | **KEEP PASS** |

## List A–D (T-QA-01 KEEP)

| Zone | Scenario | Result |
|------|----------|--------|
| A–D | Header · toolbar · filters · grid · pager | **KEEP PASS** |
| B+ | + SearchInput **Chức vụ** `JOB_TITLE_LOOKUP_CONFIG` · `catalogKind=job-title` · testId `…-field-jobTitle` | **PASS** (E2E S1 + screenshot) |
| C+ | + cột **Chức vụ** = name(`jobTitleCode`) · **≠** roleCode · AC-G-09 | **PASS** (code `jobTitleDisplay` · empty grid no rows) |

## QA-CRUD KEEP

| # | Pack | Result |
|---|------|--------|
| QA-20…QA-38 | FormType ACT · Create/Edit/View/Copy/Delete · LKP/FIELD/PROD/UX · `?route=` · assign · pwd | **KEEP PASS** (prior) · **QA-20 re-run E2E** |

## T-QA-JOB-01 / QA-JOB-CRUD (delta)

| # | Step | Expect | Result |
|---|------|--------|--------|
| JOB-01 | Zone B filter Chức vụ | SearchInput · placeholder «Tất cả chức vụ» · QS `?jobTitleCode=` | **PASS** (S1) |
| JOB-02 | Zone C col Chức vụ | Display denorm/seed name · **≠** Vai trò | **PASS** (code) · empty rows N/A live |
| JOB-03 | Form Create SearchInput `jobTitleCode` | Peer org · **cấm** Text free-form · View `<dl>` | **PASS** (QA-20 PNG · field «Chức vụ» + search icon) |
| JOB-04 | Persist Create/Edit | POST/PUT `jobTitleCode` → denorm `JobTitle` | **PASS** (API contract + service) · DB empty seed — no live row assert |
| JOB-05 | LKP `job-titles/search` | BFF proxy · seed 19 fallback GAP-JOB-05 | **PASS** (FE `JOB_TITLE_SEED` + lookup wire) |
| JOB-06 | Filter list `?jobTitleCode=` | BE soft filter | **PASS** (API GetList + BFF QS) after schema apply |
| QA-20 | FormType ACT deep-link | `/integration/users/new` · footer Tạo mới/Hủy · Z2 fields | **PASS** · PNG `qa/screens/QA-20.png` · sha16=`e39fd670e37a10a1` |

## API contract smoke (delta)

| API | Method | Path | Result |
|-----|--------|------|--------|
| API-JOB-01 | GET | `/api/v1/integration/users?jobTitleCode=` | **PASS** (HTTP 200 after schema) |
| API-LKP-JOB | GET | `/api/v1/integration/job-titles` + `/search` | **PASS** (stub/seed · GAP-JOB-05) |
| BFF-JOB | GET | `web-bff/…/users` + QS · `…/job-titles` | **PASS** (HTTP 200) |

## Hotfix this role (unblock e2e)

| Item | Note |
|------|------|
| FE route | Align `/admin/user*` → **`/integration/users`** (+ `/new` · `/:id`) · SSOT route_confirm |
| DB schema | Applied missing `JobTitleCode` · `JobTitle` · `PackageCode` · `UnitKind` · `SourceUnit` + EF history `Schema_AppUserJobTitleCode` · migration CS +`JobTitle` |
| yarn build | **PASS** (warnings size only) |

## Gaps / debt (không P0)

| ID | Severity | Note |
|----|----------|------|
| GAP-JOB-05 | soft | catalog stub/seed OK |
| GAP-JOB-06 | boundary | Profile out P1 |
| GAP-F-USR-01 | P2 | Auth permission |
| History API | P1 | stub |
| Empty seed | — | list empty live · CRUD persist smoke = API/code |

**P0:** none — handoff Review.

## E2E runtime gate

| Check | Result |
|-------|--------|
| docker compose up -d | **PASS** (api/bff/postgres healthy) |
| yarn start:std :9314 | **PASS** (worker kept · **cấm** kill) |
| yarn e2e-qa cases S0,S1,QA-20 | **PASS** (Playwright capture · manifest `ok:true`) |
| PNG | `specs/users/qa/screens/{S0,S1,QA-20}.png` |
| **cấm** phase=done | yes · next Review |

## Handoff → Review

1. `review/findings.md` · roles sau = **pending**.
2. `autoApprove=ON` → Review tự confirm khi tới lượt.
3. STATUS `qa` = **done** · `review` = **pending**.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-qa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-09-18T16:48:00.000Z |
| versionGate | rechecked (`recheck_new`) |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.08.21 |
| contentHashAnaly | sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257 |
| taskId | `task_9d0370d3` |
