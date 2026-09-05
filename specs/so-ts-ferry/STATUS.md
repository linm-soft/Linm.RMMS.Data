# STATUS — so-ts-ferry

| Field | Value |
|-------|-------|
| feature | `so-ts-ferry` |
| phase | `done` |
| status | `done` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-ferry.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-ferry` |
| mfeStdUrl | `http://localhost:9301/so-ts-ferry` |
| aliasBoard | `/so-ts-ferry` (optional redirect → live) |
| liveList | `/so-ts?type=FERRY` |
| route_confirm | `route_a` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T00:44:45.703Z` |
| contentHash | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| dataAnalyCompact | `specs/so-ts-ferry/handoff/data_analy-compact.md` |
| poCompact | `specs/so-ts-ferry/handoff/po-compact.md` |
| designCompact | `specs/so-ts-ferry/handoff/design-compact.md` |
| saCompact | `specs/so-ts-ferry/handoff/sa-compact.md` |
| teamLeadCompact | `specs/so-ts-ferry/handoff/team_lead-compact.md` |
| devCompact | `specs/so-ts-ferry/handoff/dev-compact.md` |
| qaCompact | `specs/so-ts-ferry/handoff/qa-compact.md` |
| reviewCompact | `specs/so-ts-ferry/handoff/review-compact.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|----|
| — | — | — | unlocked · pipeline complete |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-ferry-control-hint.md · so-ts-ferry-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | **confirmed** |
| 3 | team-lead | task/so-ts-ferry.md | **confirmed** |
| 4 | dev | implement/so-ts-ferry.md | **confirmed** |
| 5 | qa | qa/scenarios.md | **confirmed** |
| 6 | review | review/findings.md | **done** |
## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_137dda50 | so-ts-ferry | data_analy | — | **done** | control-hint + real-data + compact · handoff PO |
| task_46865749 | so-ts-ferry | po | data_analy | **done** | requirement + po-compact · handoff Design · autoApprove open Q |
| task_c1864fe6 | so-ts-ferry | design | po | **done** | design.md + prototype + reviewUrl + design-compact · handoff SA · autoApprove |
| task_d49f2c9c | so-ts-ferry | sa | design | **done** | solution-discovery + sa-compact · solution_confirm=approve · handoff TL |
| task_2c8240a7 | so-ts-ferry | team_lead | sa | **done** | task pack + filter-bar + team_lead-compact · route_a · handoff Dev |
| task_0fc14e44 | so-ts-ferry | dev | team_lead | **done** | implement + FE/BE FERRY profile · build PASS · handoff QA |
| task_532d8083 | so-ts-ferry | qa | dev | **done** | scenarios + e2e S0/S1/QA-20 + qa-compact · verdict PASS · handoff Review |
| task_75eb9674 | so-ts-ferry | review | qa | **done** | findings PASS · review-compact · review_confirm=done |

## Blockers / open questions

- none (Review PASS · pipeline done)
- Debt P2: GAP-FY-FLAT-01 · GAP-FY-AUTH-01 · GAP-QA-E2E-PW-01(info)

## Links

- data-analy → po → ui → be → task → implement → qa → review ✅
- mfeStdUrl: `http://localhost:9301/so-ts-ferry` (live)
- mfeStdRoute: `/so-ts-ferry`
- alias board: `/so-ts-ferry` (optional)
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html`
- implement: `specs/so-ts-ferry/implement/so-ts-ferry.md`
- qa: `specs/so-ts-ferry/qa/scenarios.md`
- review: `specs/so-ts-ferry/review/findings.md`
- reviewCompact: `specs/so-ts-ferry/handoff/review-compact.md`
- screens: `specs/so-ts-ferry/qa/screens/`
- filterBar: `docs/context/features/so-ts-ferry-filter-bar.md`
- sa: `specs/so-ts-ferry/be/solution-discovery.md`
