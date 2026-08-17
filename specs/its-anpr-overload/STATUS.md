# STATUS — its-anpr-overload

| Field | Value |
|-------|-------|
| feature | `its-anpr-overload` |
| phase | `design` |
| status | `await_confirm` |
| changeScope | `new_page` |
| packKind | `ai` |
| featureClass | `ai` (Kind B list + Kind D HITL · S-LIST / S-DETECT · S-MAP DEFER) |
| runMode | `full_pipeline` · Autopilot ON · autoApprove **OFF** · roleOnly=`design` done → await user Approve |
| demo | `D:/AI-QLBD/Linm.RMMS.Demo/src/demo/ai-vision/its-anpr-overload.html` |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/its-anpr-overload.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.AiVision` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · `api/v1/ai-vision/anpr/events` · **cấm ERP.*** |
| domain | **AiVision** |
| prototype.artifact | `specs/its-anpr-overload/ui/prototype/its-anpr-overload-list-prototype.html` |
| prototype.reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-anpr-overload/ui/prototype/its-anpr-overload-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-anpr-overload/ui/prototype/its-anpr-overload-list-prototype.html` |
| peerStdUrl | `http://localhost:9303/ai-vision/ai-asset-detect` |
| mfeStdRoute | `/its-anpr-overload` |
| mfeStdUrl | `http://localhost:9303/its-anpr-overload` |
| taskId | `task_ca4352e6` |
| contentHash | `sha256:1f4dd23743c5d0f6817c81618c062bb6a82efc9f7a665f73150e101a200b1865` |
| skillVersion | `2026.08.16.02` |
| schemaVersion | `4` |
| workflowVersion | `2026.08.16.02` |
| rulesVersion | `2026.08.16.05` |
| skillVersions | data-analy=`2026.08.15.19` · po=`2026.08.15.17` · design=`2026.08.15.16` · sa=`2026.08.15.15` · team-lead=`2026.08.15.17` · dev=`2026.08.16.01` · qa=`2026.08.16.02` · review=`2026.08.15.17` · orchestrator=`2026.08.16.02` |
| versionGate | `ok` |
| updatedAt | `2026-08-17T09:50:37.560Z` |
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
| design_confirm | **pending** | Design gate · OFF → **await user** · reviewUrl sẵn |
| solution_confirm | **pending** | SA gate · OFF → await user |
| route_confirm | **route_a** | `/its-anpr-overload` |
| review_confirm | **pending** | Review gate · OFF → await user |

## Pipeline

| Step | Agent | Artifact | Status | skillVer | versionGate |
|------|-------|----------|--------|----------|-------------|
| 0 | data-analy | `_data-analy/features/its-anpr-overload-control-hint.md` | **confirmed** | 2026.08.15.19 | ok |
| 1 | po | po/requirement.md | **done** | 2026.08.15.17 | ok |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **await_confirm** | 2026.08.15.16 | ok |
| 2.2 | sa | be/solution-discovery.md | **pending** | 2026.08.15.15 | ok |
| 3 | team-lead | task/its-anpr-overload.md | pending | 2026.08.15.17 | ok |
| 4 | dev | implement/its-anpr-overload.md | pending | 2026.08.16.01 | ok |
| 5 | qa | qa/scenarios.md | pending | 2026.08.16.02 | ok |
| 6 | review | review/findings.md | pending | 2026.08.15.17 | ok |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_7cd54ec8 | its-anpr-overload | full_pipeline | — | **completed** | Prior Autopilot · build PASS |
| task_c7983aa7 | its-anpr-overload | po | data-analy | **completed** | roleOnly=po · requirement.md FULL |
| task_ca4352e6 | its-anpr-overload | design | po | **completed** | roleOnly=design · design.md + prototype · `await_confirm` · autoApprove=OFF |

## Blockers / open questions

- **Board:** Approve `design_confirm` → enqueue `/agent-sa` (autoApprove=OFF · **không auto**)
- Apply migration on DB before live API UAT
- Real Cục Đăng kiểm adapter · Confirm → Incident domain (stub VI-ANPR OK P1)
- S-MAP DEFER
- Board: tick `beRepo` + `uiRepo` trước Dev (**không auto**)

## Links

- mfeStdUrl: `http://localhost:9303/its-anpr-overload`
- mfeStdRoute: `/its-anpr-overload`
- peerStdUrl: `http://localhost:9303/ai-vision/ai-asset-detect`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/its-anpr-overload/ui/prototype/its-anpr-overload-list-prototype.html`
- design: `specs/its-anpr-overload/ui/design.md`
- DOMAIN-MAP: `D:/AI-QLBD/Linm.RMMS.WebService/docs/DOMAIN-MAP.md`
- controlHint: `specs/_data-analy/features/its-anpr-overload-control-hint.md`
