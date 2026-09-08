# handoff-compact — qa · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_50462aa5` |
| priorDevTaskId | `task_d4e4f9fe` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · patrol-logs 200 |
| contentHashPrior | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| headerFingerprintPrior | `sha256:5da56778e38ecc53807d424082520372c7bbed355257bdacfa0457dba0036e3c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T17:45:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `patrol-logs` **redirect** `/csdl-so-02` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · dừng riêng e2e tree
- T-QA-CRUD/FORM/FILTER/FILE/TYP/TAB/ROUTE **PASS** (runtime + code)
- Filter search/province/status/road/dateRange live · entries inline_grid · 2col · Lưu · LeaveConfirm
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-so-02/qa/scenarios.md` |
| screens | `specs/csdl-so-02/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-so-02/qa/screens/manifest.json` |
| live-assert | `specs/csdl-so-02/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-so-02/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-so-02/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `9f44ea2753bd21c4` |
| S1 | PASS | `9f44ea2753bd21c4` |
| QA-20 | PASS | `591d838db676d7e8` |

## Screens / zones

- S-LIST · S-FORM-C · S-ENTRIES · S-HUB-ENTRY · S-SKIP-MAP
- testid=`rmms-csdl-so-02-list-page` · form=`rmms-csdl-so-02-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · FileRef text ids P1 · Auth DEFER · org/XLS OUT/DEFER

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · detail*-only · flatten-only
