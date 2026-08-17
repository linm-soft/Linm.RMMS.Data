# STATUS — its-traffic-detect

| Field | Value |
|-------|-------|
| feature | `its-traffic-detect` |
| phase | `design` |
| status | `await_confirm` |
| changeScope | `edit_page` |
| packKind | `ai` (PO confirm · packet list → ai Kind B+D+F) |
| featureClass | `ai` (Kind B list + Kind D HITL + Kind F map) |
| runMode | `full_pipeline` · Autopilot ON · autoApprove **OFF** · roleOnly=`design` done → await user Approve |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/ai-vision/its-traffic-detect.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/its-traffic-detect.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/its` · DOMAIN-MAP AiVision — **cấm ERP.*** |
| domain | **AiVision** |
| prototype.artifact | `specs/its-traffic-detect/ui/prototype/its-traffic-detect-list-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-traffic-detect/ui/prototype/its-traffic-detect-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-traffic-detect/ui/prototype/its-traffic-detect-list-prototype.html` |
| mfeStdRoute | `/its-traffic-detect` |
| mfeStdUrl | `http://localhost:9303/its-traffic-detect` |
| peerStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| taskId | `task_e74a8045` |
| contentHash | `sha256:E91426CE28303135A824CCDD5012AE64466FE2DB50A6C05FBC5F2A0E8F458526` |
| skillVersion | `2026.08.16.02` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| skillVersions | data-analy=`2026.08.15.19` · po=`2026.08.15.17` · design=`2026.08.15.16` · sa=`2026.08.15.15` · team-lead=`2026.08.15.17` · dev=`2026.08.16.01` · qa=`2026.08.16.02` · review=`2026.08.15.17` · orchestrator=`2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T10:25:35.200Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | — |

## Confirms (packet HARD — board · autoApprove=OFF)

| Key | Value | Notes |
|-----|-------|-------|
| beRepo | **approved** | `D:/AI-QLBD/Linm.RMMS.WebService` · via=packet Autopilot · `2026-08-17T10:18:00.000Z` · **cấm ERP.*** |
| uiRepo | **approved** | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` · via=packet Autopilot · `2026-08-17T10:18:00.000Z` |
| autoApprove | **OFF** | design/sa/review → `await_confirm` · user Approve board |
| design_confirm | **pending** | Design gate · OFF → **await user** · reviewUrl sẵn |
| solution_confirm | **pending** | SA gate · OFF → await user |
| route_confirm | **route_a** | `/its-traffic-detect` · alias `/ai-vision/its-traffic-detect` |
| review_confirm | **pending** | Review gate · OFF → await user |

## Pipeline

| Step | Agent | Artifact | Status | skillVer | versionGate |
|------|-------|----------|--------|----------|-------------|
| 0 | data-analy | `_data-analy/features/its-traffic-detect-control-hint.md` | **confirmed** | 2026.08.15.19 | ok |
| 1 | po | po/requirement.md | **done** | 2026.08.15.17 | ok |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **await_confirm** | 2026.08.15.16 | ok |
| 2.2 | sa | be/solution-discovery.md | **pending** | 2026.08.15.15 | ok |
| 3 | team-lead | task/its-traffic-detect.md | pending | 2026.08.15.17 | ok |
| 4 | dev | implement/its-traffic-detect.md | pending | 2026.08.16.01 | ok |
| 5 | qa | qa/scenarios.md | pending | 2026.08.16.02 | ok |
| 6 | review | review/findings.md | pending | 2026.08.15.17 | ok |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_00805b6c | its-traffic-detect | full_pipeline | — | completed | Prior Autopilot · build PASS |
| task_4b473f28 | its-traffic-detect | po | data-analy | **completed** | roleOnly=po · requirement.md FULL · autoApprove=OFF |
| task_e74a8045 | its-traffic-detect | design | po | **completed** | roleOnly=design · design.md + prototype · `await_confirm` · autoApprove=OFF |

## Blockers / open questions

- **Board:** Approve `design_confirm` → enqueue `/agent-sa` (autoApprove=OFF · **không auto**)
- Real YOLO/GPU · SignalR · live CCTV — DEFER P2
- e2eQa=OFF — QA static + typecheck/build only
- Board: tick `beRepo` + `uiRepo` trước Dev nếu board reset

## Links

- data-analy → po → ui → be → task → implement → qa → review
- controlHint: `specs/_data-analy/features/its-traffic-detect-control-hint.md`
- po: `specs/its-traffic-detect/po/requirement.md`
- design: `specs/its-traffic-detect/ui/design.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-traffic-detect/ui/prototype/its-traffic-detect-list-prototype.html`
- mfeStdUrl: `http://localhost:9303/its-traffic-detect`
- mfeStdRoute: `/its-traffic-detect`
- peerStdUrl: `http://localhost:9303/ai-vision/ai-asset-detect`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
