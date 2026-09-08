# handoff-compact — qa · csdl-so-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-04` |
| title | CSDL Sổ 04 — Tổng hợp đếm xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_45c3d541` |
| priorDevTaskId | `task_b4b31215` |
| resource | `traffic-counts` |
| formNo | `04` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · count matrix 16 · **cấm** journal |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-counts` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · traffic-counts 200 |
| contentHashPrior | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprintPrior | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T05:40:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `traffic-counts` **redirect** `/csdl-so-04` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · Stop-Job wrapper only
- T-QA-CRUD/FORM/FILTER/ROUTE/UNIQUE/TYP/TAB **PASS** (runtime + code)
- Filter search/province/status/road/station/year/quarter/countMethod live · matrix 16 + totalCars · 2col · Lưu · LeaveConfirm · **cấm** TNGT/journal
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-so-04/qa/scenarios.md` |
| screens | `specs/csdl-so-04/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-so-04/qa/screens/manifest.json` |
| live-assert | `specs/csdl-so-04/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-so-04/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-so-04/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `9652cf7eb59d781b` |
| S1 | PASS | `9652cf7eb59d781b` |
| QA-20 | PASS | `68447c2ae0f26349` |

## Screens / zones

- S-LIST · S-FORM-C · S-COUNT-MATRIX · S-HUB-ENTRY · S-SKIP-MAP
- testid=`rmms-csdl-so-04-list-page` · form=`rmms-csdl-so-04-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-STATION-ROAD-TESTID P3 · Auth DEFER · org/XLS OUT/DEFER · UiSchema seed DEFER · class Excel overlay pending

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · detail*-only · TNGT · journal
