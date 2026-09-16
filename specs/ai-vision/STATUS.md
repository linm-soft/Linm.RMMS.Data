# STATUS — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| phase | `qa` (web) · `done` (mobile lane) |
| status | `await_confirm` (web QA) · `in_progress` (mobile) |
| changeScope | `edit_page` |
| packKind | `ai` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/ai-vision-demo.html` → `ai-vision/ai-vision.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ai-vision.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision` (DOMAIN-MAP — **cấm ERP.Master**) |
| taskId | `task_b07e3518` |
| contentHash | `sha256:506a7c7045dab6bd32038fe1dd6984ce12e7d01feea4b9bddcc3be35c0d66236` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| mfeStdRoute | `/ai-vision` |
| mfeStdUrl | `http://localhost:9301/ai-vision` |
| updatedAt | `2026-09-12T08:54:29.222Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD — board / Autopilot)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | `Linm.RMMS.WebService` | HARD — **cấm** ERP.WebService / Domains/Master |
| uiRepo | `MFE-Source` | `Linm.Web.RMMS.AiVision` |
| design_confirm | approve | Autopilot · prototype + reviewUrl · task_83da313e |
| solution_confirm | approve | Autopilot · RMMS AiVision domain |
| review_confirm | approve | Autopilot · findings.md |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | `_data-analy/features/ai-vision-control-hint.md` + `ai-vision-real-data.md` + `handoff/data_analy-compact.md` | **confirmed** |
| 1 | po | po/requirement.md + `handoff/po-compact.md` | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl + `handoff/design-compact.md` | **confirmed** |
| 2.2 | sa | be/solution-discovery.md + `handoff/sa-compact.md` | **confirmed** |
| 3 | team-lead | task/ai-vision.md + `handoff/team_lead-compact.md` | **confirmed** |
| 4 | dev | implement/ai-vision.md + `handoff/dev-compact.md` | **confirmed** |
| 5 | qa | qa/scenarios.md + `handoff/qa-compact.md` | **blocked** (web GAP-QA-STD-01) |
| 6 | review | review/findings.md | **pending** (web) · mobile prior **confirmed** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | ai-vision | team_lead | — | done | Context/demo/controlHint |
| T-PERM-01 | ai-vision | team_lead | — | done | useAiVisionPermissions |
| T-UI-LIST | /ai-kd | dev | T-CTX-01 | done | LinCatalogDataGrid + LinCatalogListPagination · LAYOUT-06 |
| T-UI-LIST-02 | /ai-kd | dev | T-CTX-01 | done | sectionId filter · status labels · prior `task_d52ac8ac` |
| T-UI-UPLOAD | /ai-kd | dev | T-UI-LIST-02 | **done** | GAP-UPLOAD-FILE · GAP-TOOLBAR-DETECT · GAP-DETECT-BODY · GAP-TAXONOMY-SEP · `task_f56eb5df` |
| T-UI-FORM | /ai-kd/:id | dev | T-UI-LIST | done | C/E/V/Copy + incident + FileUpload |
| T-BE-01 | detections | dev | — | done | Entity+DTO+Service+Controller |
| T-BE-02 | ai-vision | dev | T-BE-01 | done | BFF proxy |
| T-BE-03 | detections | dev | T-BE-01 | done | `rmms_ai_vision_detections` |
| T-BE-04 | detections | dev | T-BE-01 | **done** | `ImageFileId` · detect `imageFileId` · mig `20260912120000` |
| T-QA-01 | ai-vision | qa | T-UI-UPLOAD,T-BE-02 | **failed** | S0/S1/QA-20 FAIL mfeStdUrl `/ai-vision` · GAP-QA-STD-01 · `task_b07e3518` |
| T-RV-01 | ai-vision | review | T-QA-01 | pending | findings.md |
| T-UD-BUG-01 | /ai-kd/tao-moi | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-08/09 · capture=08-ai-kd-tao-moi.png |
| T-UD-BUG-02 | /ai-kd/tao-moi | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-09 · capture=08-ai-kd-tao-moi.png |
| T-UD-BUG-03 | /ai-kd/tao-moi | docs | — | **done** | confirmed `/run-user-doc` · HDSD-P0-08 · capture=08-ai-kd-tao-moi.png |
| T-UD-BUG-04 | /ai-kd/tao-moi | docs | — | **done** | confirmed `/run-user-doc` · GAP-P2-BTN-SSOT-01 · capture=08-ai-kd-tao-moi.png |
| T-UD-BUG-05 | /ai-kd | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-09 · capture=02-ai-kd.png |
| T-UD-BUG-06 | /ai-kd | docs | — | **done** | confirmed `/run-user-doc` · PLAT-TB-04 · capture=02-ai-kd.png |
| T-UD-BUG-07 | /ai-kd/du-bao-bt | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-09 · capture=05-ai-kd-du-bao-bt.png |
| T-UD-BUG-08 | /ai-kd/du-bao-bt | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-09 · capture=05-ai-kd-du-bao-bt.png |
| T-UD-BUG-09 | /ai-its/bb-ct | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-09 · capture=06-ai-its-bb-ct.png |
| T-UD-BUG-10 | /ai-its/bb-ct | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-09 · capture=14-bb-ct-form-create.png |
| T-UD-BUG-11 | /its-anpr-overload | docs | — | **done** | confirmed `/run-user-doc` · GAP-P2-BTN-SSOT-01 · capture=07-its-anpr-overload.png |
| T-UD-BUG-12 | /its-anpr-overload | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-09 · capture=07-its-anpr-overload.png |
| T-UD-BUG-13 | /its-anpr-overload | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-11 · capture=16-anpr-form-create.png |
| T-UD-BUG-14 | /ai-kd/uoc-luong-sc | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-09 · capture=04-ai-kd-uoc-luong-sc.png |
| T-UD-BUG-15 | /ai-kd · /ai-kd/phat-hien-ts | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-21 · capture=02-ai-kd.png · 03-ai-kd-phat-hien-ts.png |
| T-UD-BUG-16 | /ai-kd · /ai-kd/phat-hien-ts | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-22 · capture=02-ai-kd.png · 03-ai-kd-phat-hien-ts.png |
| T-UD-BUG-17 | /ai-kd | docs | — | **done** | confirmed `/run-user-doc` · UD-P0-09 · capture=02-ai-kd.png |
| T-UD-BUG-18 | /ai-kd/du-bao-bt | docs | — | **done** | confirmed `/run-user-doc` · GAP-FILTER-BAR-01 · capture=05-ai-kd-du-bao-bt.png |

## Blockers / open questions

- **OPEN P0 GAP-QA-STD-01:** `mfeStdUrl` `http://localhost:9301/ai-vision` — no Route · S0/S1/QA-20 FAIL · live `/ai-kd` PASS (list+Zone A). Fix: alias `ai-vision`→list **or** retarget STATUS to `/ai-kd` → re-QA.
- **GAP-QA-E2E-PW-01** P2: `yarn e2e-qa` playwright ERR_MODULE_NOT_FOUND · chrome fallback used · **cấm** kill worker.
- CLOSED Dev `task_f56eb5df`: GAP-UPLOAD-FILE · GAP-TOOLBAR-DETECT · GAP-DETECT-BODY · GAP-TAXONOMY-SEP · T-UI-UPLOAD · T-BE-04.
- CLOSED prior: GAP-FILTER-SECTION · GAP-STATUS-LABEL.
- **F-02 / GAP-F-AIV-04:** Vision host OUT this pack.
- QA DoR **FAIL** · `qa_fail_rollback` · queue **failed** · **cấm** completed / phase=done.

## Links
- mfeStdUrl: `http://localhost:9301/ai-vision`
- mfeStdRoute: `/ai-vision`
- handoff compact: `specs/ai-vision/handoff/qa-compact.md` · prior `dev-compact.md` · `team_lead-compact.md` · `sa-compact.md` · `design-compact.md` · `po-compact.md` · `data_analy-compact.md`
- qa scenarios: `specs/ai-vision/qa/scenarios.md` · screens `qa/screens/`
- task: `specs/ai-vision/task/ai-vision.md`
- solution: `specs/ai-vision/be/solution-discovery.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- controlHint: `specs/_data-analy/features/ai-vision-control-hint.md`
- realData: `specs/_data-analy/features/ai-vision-real-data.md`
- design: `specs/ai-vision/ui/design.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/ai-vision/ui/prototype/ai-vision-list-prototype.html`
- implement: `specs/ai-vision/implement/ai-vision.md`
- plan V1: `D:/AI-QLBD/Linm.RMMS.Data/docs/plan/ai-vision-service/README.md` · host **`Linm.RMMS.Vision`** `:5311` · **cấm** `:5301`

## Retry

- from: `data_analy` · at: `2026-08-08T16:06:10.733Z` · completed: `2026-08-08T16:40:00.000Z` · task `task_046285d4`
- resume: `task_bc9cfb1a` · packKind=ai · SSOT re-audit + verify · completed: `2026-08-09T17:12:30.000Z`
- resume: `task_d52ac8ac` · edit_page · data-analy real-data + list delta · at: `2026-08-23T16:50:00.000Z`
- resume: `task_cc211171` · edit_page · ảnh hiện trạng + FileService Upload HARD · completed: `2026-09-12T08:20:36.268Z`
- resume: `task_2dfc095f` · roleOnly=po · requirement + po-compact · completed: `2026-09-12T08:25:00.000Z`
- resume: `task_83da313e` · roleOnly=design · design.md + prototype + design-compact · completed: `2026-09-12T08:26:00.000Z`
- resume: `task_086859a2` · roleOnly=sa · solution-discovery + sa-compact · completed: `2026-09-12T08:30:00.000Z`
- resume: `task_9a41139f` · roleOnly=team_lead · task + team_lead-compact · completed: `2026-09-12T08:35:00.000Z`
- resume: `task_f56eb5df` · roleOnly=dev · Upload+detect + ImageFileId · completed: `2026-09-12T08:55:00.000Z`
- resume: `task_b07e3518` · roleOnly=qa · e2e S0/S1/QA-20 FAIL GAP-QA-STD-01 · **failed**: `2026-09-12T08:55:00.000Z`

## Verify

| Gate | Result |
|------|--------|
| Role data_analy DoR | **PASS** · control-hint + real-data + compact |
| Role po DoR | **PASS** · requirement.md + po-compact.md · Grid/Leave AC · hash skip |
| Role design DoR | **PASS** · design.md + prototype + reviewUrl + design-compact · DES-RPT · design_confirm=approve · hash skip · no AI chrome |
| Role sa DoR | **PASS** · solution-discovery.md + sa-compact.md · FormMode↔API · solution_confirm=approve · hash skip · no Step 4b |
| Role team_lead DoR | **PASS** · task/ai-vision.md + team_lead-compact.md · T-* · route_confirm=existing · hash skip · no e2e |
| Role dev DoR | **PASS** · implement/ai-vision.md + dev-compact.md · T-UI-UPLOAD · T-BE-04 · no e2e |
| Role qa DoR | **FAIL** · scenarios + qa-compact · S0/S1/QA-20 FAIL · GAP-QA-STD-01 · qa_fail_rollback |
| docker compose | **PASS** · api/bff healthy |
| yarn start:std :9301 | **PASS** · reuse |
| yarn e2e-qa | **FAIL** · playwright ERR_MODULE_NOT_FOUND · chrome fallback ran |
| FE build | **PASS** · prior Dev |
| BE Release build | **PASS** · prior Dev |

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
