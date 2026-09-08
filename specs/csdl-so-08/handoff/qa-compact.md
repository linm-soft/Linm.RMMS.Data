# handoff-compact — qa · csdl-so-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-08` |
| title | CSDL Sổ 08 — Kết quả BDTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_1deb9037` |
| priorDevTaskId | `task_85207485` |
| resource | `maintenance-work-logs` |
| formNo | `08` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-08` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=maintenance-work-logs` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · maintenance-work-logs 200 |
| contentHashPrior | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| headerFingerprintPrior | `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T02:17:30.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `maintenance-work-logs` **redirect** `/csdl-so-08` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · Stop-Job wrapper only
- T-QA-CRUD/FORM/FILTER/TYP/TAB/ROUTE **PASS** (runtime + code)
- Filter search/province/status/road/dateRange live · entries 5 cột inline_grid · 2col · Lưu · LeaveConfirm · media N/A
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-so-08/qa/scenarios.md` |
| screens | `specs/csdl-so-08/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-so-08/qa/screens/manifest.json` |
| live-assert | `specs/csdl-so-08/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-so-08/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-so-08/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `b28a37d433523394` |
| S1 | PASS | `b28a37d433523394` |
| QA-20 | PASS | `68dc6cccc57cc008` |

## Screens / zones

- S-LIST · S-FORM-C · S-ENTRIES · S-HUB-ENTRY · S-SKIP-MAP
- testid=`rmms-csdl-so-08-list-page` · form=`rmms-csdl-so-08-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · org/XLS OUT/DEFER · UiSchema seed DEFER · migration apply runtime

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · detail*-only · kmAt · flatten-only
