# STATUS — predict

| Field | Value |
|-------|-------|
| feature | `predict` |
| phase | `design` |
| status | `await_confirm` |
| changeScope | `new_page` |
| packKind | `ai` (packet list → Kind B+D) |
| featureClass | `ai` (Kind B list + Kind D slideout) |
| runMode | `full_pipeline` · Autopilot ON · autoApprove **OFF** · roleOnly=`design` → `await_confirm` |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/predict-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/predict.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/predict` · DOMAIN-MAP AiVision — **cấm ERP.*** |
| domain | **AiVision** |
| mfeStdRoute | `/ai-vision/predict` |
| mfeStdUrl | `http://localhost:9303/ai-vision/predict` |
| peerStdUrl | `http://localhost:9303/ai-vision/estimate` |
| taskId | `task_e95e3780` |
| contentHash | `sha256:predict-ctx-demo-20260817` |
| skillVersion | `2026.08.16.02` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| skillVersions | data-analy=`2026.08.15.19` · po=`2026.08.15.17` · design=`2026.08.15.16` · sa=`2026.08.15.15` · team-lead=`2026.08.15.17` · dev=`2026.08.16.01` · qa=`2026.08.16.02` · review=`2026.08.15.17` · orchestrator=`2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T10:50:29.983Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD — board · autoApprove=OFF)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | **pending** | Board tick `Linm.RMMS.WebService` · **cấm ERP.*** · **không auto** |
| uiRepo | **pending** | Board tick MFE `Linm.Web.RMMS.AiVision` · **không auto** |
| autoApprove | **OFF** | design/sa/review → `await_confirm` · user Approve board |
| design_confirm | **pending** | Design gate · OFF → **await user** · prototype + reviewUrl sẵn |
| solution_confirm | **pending** | SA gate · OFF → await user |
| route_confirm | **route_a** | `/ai-vision/predict` |
| review_confirm | **pending** | Review gate · OFF → await user |

## Pipeline

| Step | Agent | Artifact | Status | skillVer | versionGate |
|------|-------|----------|--------|----------|-------------|
| 0 | data-analy | `_data-analy/features/predict-control-hint.md` | **confirmed** | 2026.08.15.19 | ok |
| 1 | po | po/requirement.md | **done** | 2026.08.15.17 | ok |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **await_confirm** | 2026.08.15.16 | ok |
| 2.2 | sa | be/solution-discovery.md | pending | 2026.08.15.15 | ok |
| 3 | team-lead | task/predict.md | pending | 2026.08.15.17 | ok |
| 4 | dev | implement/predict.md | pending | 2026.08.16.01 | ok |
| 5 | qa | qa/scenarios.md | pending | 2026.08.16.02 | ok |
| 6 | review | review/findings.md | pending | 2026.08.15.17 | ok |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_90d55af6 | predict | full_pipeline | — | completed | Prior Autopilot · VERIFY PASS |
| task_06a5bfcf | predict | po | data-analy | **completed** | roleOnly=po · requirement.md FULL · Config FULL + Leave §6b · autoApprove=OFF |
| task_e95e3780 | predict | design | po | **completed** | roleOnly=design · design.md + prototype + reviewUrl · STATUS `await_confirm` · **cấm** autoApprove |
| (next) | predict | sa | design_confirm | **pending** | enqueue `/agent-sa` **sau** user Approve board `design_confirm` |

## Blockers / open questions

- Local train / auto WO — DEFER P2 (`GAP-F-PRD-01` · `GAP-F-PRD-04`)
- beRepo / uiRepo — chờ board tick trước Dev (**không auto**)
- Design: **await_confirm** — mở reviewUrl → Approve `design_confirm` trên board (`autoApprove=OFF`)
- e2eQa=OFF — QA static + typecheck/build only

## Links

- controlHint: `specs/_data-analy/features/predict-control-hint.md`
- po: `specs/predict/po/requirement.md`
- design: `specs/predict/ui/design.md`
- **reviewUrl**: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/predict/ui/prototype/predict-list-prototype.html`
- mfeStdUrl: `http://localhost:9303/ai-vision/predict`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`

## Verify

| Gate | Result |
|------|--------|
| PO artifact | PASS · requirement.md FULL (peer estimate) |
| Design artifact | PASS · design.md FULL · prototype content-only A–D+KPI+F+H+Z · reviewUrl |
| FE/BE build | N/A this role (roleOnly=design · docs/prototype only · no MFE/BE code delta) |

---
<!-- Version meta: skillVersion=2026.08.16.02 · schemaVersion=4 · workflowVersion=2026.08.16.02 · versionGate=ok -->
