# STATUS — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| phase | `data_analy` |
| status | `in_progress` |
| changeScope | `edit_page` |
| packKind | `ai` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/ai-vision-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ai-vision.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision` (DOMAIN-MAP — **cấm ERP.Master**) |
| taskId | `task_d52ac8ac` |
| skillVersion | `2026.08.09.02` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.09.02` |
| versionGate | `ok` |
| mfeStdRoute | `/ai-vision` |
| mfeStdUrl | `http://localhost:9303/ai-vision` |
| updatedAt | `2026-08-24T15:40:02.687Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD — board / Autopilot)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | `Linm.RMMS.WebService` | HARD — **cấm** ERP.WebService / Domains/Master |
| uiRepo | `MFE-Source` | `Linm.Web.RMMS.AiVision` |
| design_confirm | approve | Autopilot · prototype + reviewUrl |
| solution_confirm | approve | Autopilot · RMMS AiVision domain |
| review_confirm | approve | Autopilot · findings.md |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0b | data-analy | `_data-analy/features/ai-vision-control-hint.md` + `ai-vision-real-data.md` | **paused** |
| 1 | po | po/requirement.md | **done** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **done** |
| 2.2 | sa | be/solution-discovery.md | **done** |
| 3 | team-lead | task/ai-vision.md | **done** |
| 4 | dev | implement/ai-vision.md | **in_progress** |
| 5 | qa | qa/scenarios.md | **pending** |
| 6 | review | review/findings.md | **pending** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-CTX-01 | ai-vision | team_lead | — | done | Context/demo/controlHint |
| T-PERM-01 | ai-vision | team_lead | — | done | useAiVisionPermissions |
| T-UI-LIST | /ai-kd | dev | T-CTX-01 | done | LinCatalogDataGrid + LinCatalogListPagination · LAYOUT-06 |
| T-UI-LIST-02 | /ai-kd | dev | T-CTX-01 | in_progress | sectionId filter · detect stub · status labels · `task_d52ac8ac` |
| T-UI-FORM | /ai-kd/:id | dev | T-UI-LIST | done | C/E/V/Copy + incident |
| T-BE-01 | detections | dev | — | done | Entity+DTO+Service+Controller |
| T-BE-02 | ai-vision | dev | T-BE-01 | done | BFF proxy |
| T-BE-03 | detections | dev | T-BE-01 | done | `rmms_ai_vision_detections` |
| T-QA-01 | ai-vision | qa | T-UI-LIST-02,T-BE-02 | pending | scenarios.md |
| T-RV-01 | ai-vision | review | T-QA-01 | pending | findings.md |

## Blockers / open questions

- Edit delta `task_d52ac8ac`: real-data bind + list parity gaps (section filter · detect stub · status labels).
- Follow-up OUT: Kind F map · real detect runtime (F-02).

## Links
- mfeStdUrl: `http://localhost:9303/ai-vision`
- mfeStdRoute: `/ai-vision`

- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- controlHint: `specs/_data-analy/features/ai-vision-control-hint.md`
- realData: `specs/_data-analy/features/ai-vision-real-data.md`
- implement: `specs/ai-vision/implement/ai-vision.md`

## Retry

- from: `data_analy` · at: `2026-08-08T16:06:10.733Z` · completed: `2026-08-08T16:40:00.000Z` · task `task_046285d4`
- resume: `task_bc9cfb1a` · packKind=ai · SSOT re-audit + verify · completed: `2026-08-09T17:12:30.000Z`
- resume: `task_d52ac8ac` · edit_page · data-analy real-data + list delta · at: `2026-08-23T16:50:00.000Z`

## Verify

| Gate | Result |
|------|--------|
| FE typecheck | pending |
| FE build (`LINM_RUN_DEV_LOCAL_BUNDLE=1`) | pending |
| BE Release build | pending |

---
<!-- Version meta: skillVersion=2026.08.09.02 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.09.02 · versionGate=ok -->
