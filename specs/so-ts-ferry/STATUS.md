# STATUS — so-ts-ferry

| Field | Value |
|-------|-------|
| feature | `so-ts-ferry` |
| phase | `sa` |
| status | `pending` |
| packKind | `list` |
| demo | D:/AI-QLBD/Linm.RMMS.Demo/src/demo/features/asset-demo.html |
| context | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-ferry.md` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/so-ts-ferry` |
| mfeStdUrl | `http://localhost:9301/so-ts-ferry` |
| liveList | `/so-ts?type=FERRY` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP — **cấm ERP.*** |
| updatedAt | `2026-09-01T00:15:00.000Z` |
| contentHash | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| dataAnalyCompact | `specs/so-ts-ferry/handoff/data_analy-compact.md` |
| poCompact | `specs/so-ts-ferry/handoff/po-compact.md` |
| designCompact | `specs/so-ts-ferry/handoff/design-compact.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html` |

## Lock

| agent | scope | id | at |
|-------|-------|-----|-----|
| design | feature | task_c1864fe6 | 2026-09-01T00:15:00.000Z |

## Pipeline

| Step | Agent | Artifact | Status |
|------|-------|----------|--------|
| 0 | data-analy | _data-analy/features/so-ts-ferry-control-hint.md · so-ts-ferry-real-data.md | **confirmed** |
| 1 | po | po/requirement.md | **confirmed** |
| 2.1 | design | ui/design.md + prototype + reviewUrl | **confirmed** |
| 2.2 | sa | be/solution-discovery.md | pending |
| 3 | team-lead | task/so-ts-ferry.md | pending |
| 4 | dev | implement/so-ts-ferry.md | pending |
| 5 | qa | qa/scenarios.md | pending |
| 6 | review | review/findings.md | pending |

## Tasks

| id | page | role | deps | status | notes |
|----|------|------|------|--------|-------|
| task_137dda50 | so-ts-ferry | data_analy | — | **done** | control-hint + real-data + compact · handoff PO |
| task_46865749 | so-ts-ferry | po | data_analy | **done** | requirement + po-compact · handoff Design · autoApprove open Q |
| task_c1864fe6 | so-ts-ferry | design | po | **done** | design.md + prototype + reviewUrl + design-compact · handoff SA · autoApprove |

## Blockers / open questions

- none (Design autopilot chốt LOOKUP_STATIC · alias board-only optional · hide-low-fill OFF default)

## Links

- data-analy → po → ui → be → task → implement → qa → review
- mfeStdUrl: `http://localhost:9301/so-ts-ferry` (alias board)
- mfeStdRoute: `/so-ts-ferry`
- live filter: `/so-ts?type=FERRY`
- reviewUrl: `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html`
