# STATUS — predict

| Field | Value |
|-------|-------|
| feature | `predict` |
| phase | `dev` |
| status | `in_progress` |
| changeScope | `new_page` |
| packKind | `ai` (packet list → Kind B+D) |
| featureClass | `ai` (Kind B list + Kind D slideout) |
| runMode | `full_pipeline` · Autopilot ON · autoApprove **ON** · roleOnly=`team_lead` (task_16a1a724) |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/predict-demo.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/predict.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/predict` · DOMAIN-MAP AiVision — **cấm ERP.*** |
| domain | **AiVision** |
| mfeStdRoute | `/ai-kd/du-bao-bt` |
| mfeStdUrl | `http://localhost:9303/ai-kd/du-bao-bt` |
| peerStdUrl | `http://localhost:9303/ai-kd/uoc-luong-sc` |
| taskId | `task_16a1a724` |
| contentHash | `sha256:predict-ctx-demo-20260817` |
| skillVersion | `2026.08.16.02` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.15.25` |
| skillVersions | data-analy=`2026.08.15.19` · po=`2026.08.15.17` · design=`2026.08.15.16` · sa=`2026.08.15.15` · team-lead=`2026.08.15.17` · dev=`2026.08.16.01` · qa=`2026.08.16.02` · review=`2026.08.15.17` · orchestrator=`2026.08.16.02` |
| versionGate | `ok` · keep_current |
| updatedAt | `2026-08-24T17:30:06.305Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD — board)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | **pending** | Board tick `Linm.RMMS.WebService` · **cấm ERP.*** · **không auto** |
| uiRepo | **pending** | Board tick MFE `Linm.Web.RMMS.AiVision` · **không auto** |
| autoApprove | **ON** | design/sa/review → agent tự confirm · chain role kế |
| design_confirm | **approve** | autoApprove=ON · reviewUrl · task_fe23f841 |
| solution_confirm | **approve** | SA gate · autoApprove=ON · solution-discovery.md |
| route_confirm | **route_a** | `/ai-kd/du-bao-bt` (MFE) · API `api/v1/ai-vision/predict` |
| review_confirm | **pending** | Review gate · tới lượt |

## Pipeline

| Step | Agent | Artifact | Status | skillVer | versionGate |
|------|-------|----------|--------|----------|-------------|
| 0 | data-analy | `_data-analy/features/predict-control-hint.md` | **confirmed** | 2026.08.15.19 | ok |
| 1 | po | po/requirement.md | **done** | 2026.08.15.17 | ok |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** | 2026.08.15.16 | ok |
| 2.2 | sa | be/solution-discovery.md | **done** | 2026.08.15.15 | ok |
| 3 | team-lead | task/predict.md | **done** | 2026.08.15.17 | ok |
| 4 | dev | implement/predict.md | **in_progress** | 2026.08.16.01 | ok |
| 5 | qa | qa/scenarios.md | pending | 2026.08.16.02 | ok |
| 6 | review | review/findings.md | pending | 2026.08.15.17 | ok |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_90d55af6 | predict | full_pipeline | — | completed | Prior Autopilot · VERIFY PASS |
| task_06a5bfcf | predict | po | data-analy | **completed** | roleOnly=po · requirement.md FULL |
| task_e95e3780 | predict | design | po | **completed** | roleOnly=design · prototype + reviewUrl |
| task_fe23f841 | predict | sa | design_confirm | **completed** | roleOnly=sa · solution-discovery FULL |
| task_16a1a724 | predict | team-lead | sa | **completed** | roleOnly=team_lead · task/predict.md FULL · retry.ssot_rereview · autoApprove chain Dev pending beRepo+uiRepo |
| (next) | predict | dev | team-lead + beRepo + uiRepo | **pending** | enqueue `/agent-dev` sau board tick |

## Blockers / open questions

- Local train / auto WO — DEFER P2 (`GAP-F-PRD-01` · `GAP-F-PRD-04`)
- beRepo / uiRepo — chờ board tick trước Dev (**không auto**)
- Must-fix before QA (TL ssot_rereview): `GAP-SA-PRD-JSON-01` · `GAP-SA-PRD-01` · `GAP-SA-PRD-02` · GAP-DES-VIEW-DL · GAP-TL-GRID-BOOTSTRAP-01
- e2eQa=ON — QA khi tới lượt: yarn start:std + docker + yarn e2e-qa + screenshot

## Links

- controlHint: `specs/_data-analy/features/predict-control-hint.md`
- po: `specs/predict/po/requirement.md`
- design: `specs/predict/ui/design.md`
- **reviewUrl**: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/predict/ui/prototype/predict-list-prototype.html`
- sa: `specs/predict/be/solution-discovery.md`
- **task pack**: `specs/predict/task/predict.md`
- mfeStdUrl: `http://localhost:9303/ai-kd/du-bao-bt`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`

## Verify

| Gate | Result |
|------|--------|
| PO artifact | PASS · requirement.md FULL |
| Design artifact | PASS · design.md FULL · prototype · reviewUrl · design_confirm=approve |
| SA artifact | PASS · solution-discovery.md FULL · gates TZ/XCO/SHARE · API-01…09 · solution_confirm=approve |
| TL artifact | PASS · task/predict.md FULL · T-CTX/T-PERM/T-UI-* / T-BE-* · retry.ssot_rereview · FormType pack closed |
| FE/BE build | N/A this role (roleOnly=team_lead · docs only · no MFE/BE code delta) |

---
<!-- Version meta: skillVersion=2026.08.16.02 · schemaVersion=4 · workflowVersion=2026.08.16.02 · versionGate=ok -->


## Retry

- from: `team_lead` · at: `2026-08-24T17:17:16.477Z` · board user Retry step
- completed: `team_lead` · at: `2026-08-24T17:30:00.000Z` · task_16a1a724 · task/predict.md FULL
