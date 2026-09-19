# handoff-compact — qa → review

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| role | `qa` |
| status | `PASS` |
| taskId | `task_9d0370d3` |
| title | Users — chức vụ lookup (job-title) |
| kind | `B` |
| autoApprove | `ON` |
| e2eQa | `ON` · runtime **PASS** |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| mfeStdRoute | `/integration/users` |
| skillVersion | `2026.08.08.21` |
| workflowVersion | `2026.08.09.02` |
| rulesVersion | `2026.08.09.3` |
| contentHashAnaly | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| handoffTo | `review` |
| full | `specs/users/qa/scenarios.md` |
| **cấm** phase=done | yes |

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/users/qa/scenarios.md` |
| screens | `specs/users/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/users/qa/screens/manifest.json` |
| mfe | `/integration/users` · **cấm** ERP.* |
| be | Integration · users + LKP job-titles |

## Decisions

- KEEP A–D + QA-CRUD · delta T-QA-JOB / QA-JOB-CRUD
- FE route hotfix `/admin/user` → `/integration/users` (+ `/new`)
- DB hotfix ADD JobTitle* + PackageCode/UnitKind/SourceUnit (migration chưa apply)
- E2E S0/S1/QA-20 **PASS** · list empty seed OK · form Chức vụ SearchInput live

## Evidence

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `7b8f8ed3940ce834` |
| S1 | PASS | `5bda8ef5caa557d1` |
| QA-20 | PASS | `e39fd670e37a10a1` |

## Tasks

| id | status |
|----|--------|
| T-QA-JOB-01 | **done** |
| QA-JOB-CRUD | **done** |
| T-QA-01 / QA-CRUD | KEEP done |

## GAP

| ID | Note |
|----|------|
| GAP-JOB-05 | soft stub OK |
| GAP-JOB-06 | Profile out P1 |
| GAP-F-USR-01 | P2 |

## UNCLEAR

— none

## DoR

scenarios=yes · e2e=PASS · PNG=yes · compact=yes · cấm phase=done=yes · KEEP+delta=yes
