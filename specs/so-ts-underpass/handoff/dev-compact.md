# handoff-compact — dev · qa-fix plan

| | |
|--|--|
| schemaVersion | `1` |
| role | `dev` |
| feature | `so-ts-underpass` |
| title | Sổ TS — Hầm chui dân sinh |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_9c2ed21d` |
| qaFixPhase | **plan** |
| qaFailFrom | `task_bdd72a01` |
| typeCode | `UNDERPASS` |
| dump | `tbl_underpass_box` |
| prefix | `CC-` |
| formPattern | Full page · CatalogFormShell 5 cols · S-LOC-POINT |
| Kind | **B** |
| mfeStdRoute | `/so-ts?type=UNDERPASS` |
| mfeStdUrl | `http://localhost:9301/so-ts?type=UNDERPASS` |
| alias | `/so-ts-underpass` board-only |
| API | `api/v1/asset/road-assets` |
| domain | **Asset** |
| migration | **none** P1 |
| e2eQa | **ON** (queued `/agent-qa*` only) |
| contentHashPrior | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| skillVersion | `2026.08.19.04` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T13:25:00.000Z` |

## Artifact

- plan: `specs/so-ts-underpass/implement/so-ts-underpass-qa-fix-plan.md`
- prior implement: `specs/so-ts-underpass/implement/so-ts-underpass.md` (`task_5069938c`)

## Gaps (plan)

| ID | Sev | Note |
|----|-----|------|
| GAP-QA-WORKER-01 | P0 | QA worker `already has active run` |
| GAP-QA-E2E-01 | P0 | scenarios draft · 0 qa-compact |
| GAP-QA-E2E-PW/DOCKER | info | chrome contract · API `:5111` |
| R-QA-01 | P0 | qa_fail_rollback → plan |

## Live note

S0/S1/QA-20 PNG + live-assert **PASS** · LOOKUP init OK · **0** product P0 observed · expected implement = verify/build + SSOT unless re-QA finds gap.

## Cấm

Write MFE/BE trước Approve `qa_fix_plan` · Dev e2e/start:std · ERP.* · flatten P1 · đổi controlHint

## Next

| Role | Need |
|------|------|
| board | Approve `qa_fix_plan` |
| **dev** | `qaFixPhase=implement` (new task) |
| QA | re-run `/agent-qa*` · fill scenarios + qa-compact |
