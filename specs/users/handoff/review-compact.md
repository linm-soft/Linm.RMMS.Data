# handoff-compact — review → done

| Field | Value |
|-------|-------|
| schemaVersion | `1` |
| feature | `users` |
| packKind | `list` |
| changeScope | `edit_page` |
| role | `review` |
| status | `PASS` |
| taskId | `task_e4c84ce6` |
| title | Users — chức vụ lookup (job-title) |
| kind | `B` |
| autoApprove | `ON` |
| e2eQa | `ON` · prior QA **PASS** (không re-run) |
| review_confirm | `approve` |
| mfeStdUrl | `http://localhost:9314/integration/users` |
| mfeStdRoute | `/integration/users` |
| skillVersion | `2026.08.08.21` |
| workflowVersion | `2026.08.09.02` |
| rulesVersion | `2026.08.09.3` |
| contentHashAnaly | `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| handoffTo | `done` |
| full | `specs/users/review/findings.md` |

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/users/review/findings.md` |
| qa | `specs/users/qa/scenarios.md` · screens S0/S1/QA-20 |
| mfe | `/integration/users` · **cấm** ERP.* |
| be | Integration · users + LKP job-titles |

## Audit

| Area | Result |
|------|--------|
| QUERY | **PASS** `?jobTitleCode=` + LKP |
| SEC | **PASS** soft · Accept Auth P2 |
| UI-FN | **PASS** Zone B/C/Form SearchInput · AC-G-09 |
| BE-FN | **PASS** JobTitleCode · denorm · stub LKP |

## Decisions

- KEEP A–D + CRUD · delta T-*-JOB **PASS**
- GAP-F-USR-05 staff path **CLOSED**
- Accept GAP-JOB-05/06 · GAP-F-USR-01 · History stub
- **cấm** build/e2e/start:std this role

## GAP (open · non-block)

| ID | Note |
|----|------|
| GAP-JOB-05 | soft stub OK |
| GAP-JOB-06 | Profile out P1 |
| GAP-F-USR-01 | P2 |

## UNCLEAR

— none

## DoR

findings=yes · review_confirm=approve · compact=yes · P0=none · pipeline=complete
