# STATUS — web-rmms-incident-chat

| Field | Value |
|-------|-------|
| feature | `web-rmms-incident-chat` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | **N/A** |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/web-rmms-incident-chat.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-incident-chat` |
| mfeStdUrl | `http://localhost:9301/web-rmms-incident-chat` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| updatedAt | `2026-09-26T03:03:30.410Z` |
| review_confirm | `approve` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| — | — | — | unlocked · Review done |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/web-rmms-incident-chat-control-hint.md · web-rmms-incident-chat-real-data.md · handoff/data_analy-compact.md | **confirmed** |
| 1 | po | po/requirement.md · handoff/po-compact.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl · handoff/design-compact.md | **confirmed** |
| 2.2 | sa | be/solution-discovery.md · handoff/sa-compact.md | **confirmed** |
| 3 | team-lead | task/web-rmms-incident-chat.md · handoff/team_lead-compact.md | **confirmed** |
| 4 | dev | implement/web-rmms-incident-chat.md · handoff/dev-compact.md | **confirmed** |
| 5 | qa | qa/scenarios.md · handoff/qa-compact.md | **confirmed** |
| 6 | review | review/findings.md · handoff/review-compact.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| T-01 | Route+shell CH-00 | FE | — | **PASS** | `/web-rmms-incident-chat` · `/incident/:id/chat` |
| T-02 | TopBar CH-01 | FE | T-01 | **PASS** | GET{id} · back `/web-rmms-incident` |
| T-03 | Thread CH-02/03 | FE | T-01 | **PASS** | GET messages · bubbles · empty |
| T-04 | Composer CH-04 | FE | T-03 | **PASS** | POST + re-GET · no parentId |
| T-05 | Peer `#i-chat` | FE | T-01 | **PASS** | entry từ web-rmms-incident |
| T-06 | BFF+labels+parity | FE | T-01…T-05 | **PASS** | Mobile.Bff · useFormOptions · Android 1-1 |
| T-BE | — | — | — | **N/A** | no new API/migration |
| T-QA | e2e | QA | T-01…T-06 | **PASS** | S0/S1/QA-20 · capture runtime · PNG distinct |
| — | — | — | — | — | changeScope=`new_page` · review_confirm=approve · QUERY/SEC/UI-FN/BE-FN PASS · P0=0 |

## Blockers / open questions

- UNCLEAR-DOMAIN-MAP-CHAT → **CLOSED** (SA)
- UNCLEAR-PARENT-ID → **resolved** P1 flat
- UNCLEAR-POLLING → **resolved** re-GET after POST
- soft: GAP-QA-UI-MISSING-BANNER · e2e stock-port / WDS / playwright (non-block)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/web-rmms-incident-chat`
- mfeStdRoute: `/web-rmms-incident-chat`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-incident-chat/ui/prototype/index.html`
- compact: `specs/web-rmms-incident-chat/handoff/review-compact.md`
- findings: `specs/web-rmms-incident-chat/review/findings.md`
