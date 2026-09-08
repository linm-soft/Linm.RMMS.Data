# handoff-compact — qa · csdl-so-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_ba9b75c1` |
| priorDevTaskId | `task_2b9f40d3` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-01` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=inspection-logs` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · inspection-logs 200 |
| contentHashPrior | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprintPrior | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T01:30:30.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `inspection-logs` **redirect** `/csdl-so-01` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · dừng riêng e2e tree
- T-QA-CRUD/FORM/FILTER/FILE/TYP/TAB/ROUTE **PASS** (runtime + code)
- Filter search/province/status/road/dateRange live · entries inline_grid · 2col · Lưu · LeaveConfirm
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-so-01/qa/scenarios.md` |
| screens | `specs/csdl-so-01/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-so-01/qa/screens/manifest.json` |
| live-assert | `specs/csdl-so-01/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-so-01/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-so-01/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `e7484d8a51bd8533` |
| S1 | PASS | `e7484d8a51bd8533` |
| QA-20 | PASS | `f28a33f45c2699a5` |

## Screens / zones

- S-LIST · S-FORM-C · S-ENTRIES · S-HUB-ENTRY · S-SKIP-MAP
- testid=`rmms-csdl-so-01-list-page` · form=`rmms-csdl-so-01-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · FileRef text ids P1 · Auth DEFER · org/XLS OUT/DEFER · migration apply runtime

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · detail*-only · flatten-only
