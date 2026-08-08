# STATUS — ai-vision

| Field | Value |
|-------|-------|
| feature | `ai-vision` |
| phase | `po` |
| status | `blocked` |
| changeScope | `edit_page` |
| packKind | `ai` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/ai-vision-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/ai-vision.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision` (DOMAIN-MAP — **cấm ERP.Master**) |
| taskId | `task_a78276fa` |
| skillVersion | `qldb-workflow@local` (SSOT file missing in workspace — keep_current) |
| updatedAt | `2026-08-08T12:52:14.425Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| autocode | feature | task_a78276fa | 2026-08-08T12:20:00.000Z |

## Confirms (packet HARD restart — Autopilot)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | `Linm.RMMS.WebService` | HARD gate packet — **cấm** ERP.WebService / Domains/Master |
| uiRepo | `MFE-Source` | `Linm.Web.RMMS.AiVision` |
| design_confirm | approve | prototype + reviewUrl shipped (autopilot) |
| solution_confirm | approve | SA re-targeted RMMS WebService (discard ERP) |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 1 | po | po/requirement.md | **blocked** (paused) |
| 2.1 | design | ui/design.md + prototype + reviewUrl | done |
| 2.2 | sa | be/solution-discovery.md | done (RMMS BE root) |
| 3 | team-lead | task/ai-vision.md | done |
| 4 | dev | implement/ai-vision.md | in_progress |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-BE-01 | detections | dev | — | in_progress | Entity+DTO+Service+Controller · RMMS only |
| T-BE-02 | ai-vision | dev | T-BE-01 | pending | BFF proxy detections/detect/pci-history |
| T-BE-03 | detections | dev | T-BE-01 | pending | Schema_RmmsAiVisionDetections |
| T-FE-01 | /ai-vision | dev | — | done | LinPageLayout catalog exists |
| T-FE-02 | /ai-vision/:id | dev | T-FE-01 | done | C/E/V/Copy + incident |
| T-FE-03 | client | dev | T-BE-01 | done | `/ai-vision/detections` + localStorage fallback |
| T-QA-01 | ai-vision | qa | T-FE-02,T-BE-02 | pending | scenarios.md |
| T-RV-01 | ai-vision | review | T-QA-01 | pending | findings.md |

## Blockers / open questions

- **RESTART applied:** discard ERP.Master path. Implement only `Linm.RMMS.WebService` domain `AiVision`.
- Skill file `.cursor/skills/agent-qldb-workflow/SKILL.md` + `qldb-workflow-skill-version.json` **not present** in workspace — proceed with packet + DOMAIN-MAP SSOT (`keep_current`).

## Links

- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
