# STATUS — web-rmms-asset-ai

| Field | Value |
|-------|-------|
| feature | `web-rmms-asset-ai` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-asset-ai.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-asset-ai` |
| mfeStdUrl | `http://localhost:9301/web-rmms-asset-ai` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP AiVision (+cite Asset/Integration/Patrol) — **cấm ERP.*** · Step 4b **skip** |
| updatedAt | `2026-09-25T16:16:37.956Z` |
## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| review | feature | task_5065b058 | 2026-09-25T16:25:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-asset-ai-control-hint.md · web-rmms-asset-ai-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/web-rmms-asset-ai.md | **confirmed** |
| 4 | dev | implement/web-rmms-asset-ai.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-01 | route+AA-00 | FE | — | **done** | `/web-rmms-asset-ai` · navBack Hub · alias `/asset/ai` |
| T-02 | detect fields | FE | T-01 | **done** | photo GPS RouteId Acc≤30 |
| T-03 | nearby+detect | FE | T-02 | **done** | POST detect → HITL · no auto-confirm |
| T-04 | HITL | FE | T-03 | **done** | pin local · score SHOW · confirm/dismiss |
| T-05 | BFF+parity | FE | T-01 | **done** | DES-LEAVE · Android 1-1 · useFormOptions · build PASS |
| T-BE | — | — | — | N/A | no new API/migration · Mobile.Bff Live |
| T-QA | e2e S0/S1/QA-20 | QA | T-01…T-05 | **done** | capture_aai PASS · stock DUP soft · Must 0 |
| T-REV | QUERY/SEC/UI-FN/BE-FN | review | T-QA | **done** | review_confirm approve · P0 0 |

## Blockers / open questions

- (none blocking) · debt: DEBT-PIN · DEBT-SCORE · DEBT-QA-STOCK · DEBT-LOOKUP

## Links

- data-analy → po → ui → be → task → implement → qa → review
- handoff: `specs/web-rmms-asset-ai/handoff/data_analy-compact.md` · `po-compact.md` · `design-compact.md` · `sa-compact.md` · `team_lead-compact.md` · `dev-compact.md` · `qa-compact.md` · `review-compact.md`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-asset-ai/ui/prototype/index.html`
- mfeStdUrl: `http://localhost:9301/web-rmms-asset-ai`
- mfeStdRoute: `/web-rmms-asset-ai`
- DOMAIN-MAP: `web-rmms-asset-ai` → AiVision / `ai-vision`
