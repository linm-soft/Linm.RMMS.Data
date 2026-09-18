# handoff-compact — qa · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường (CR PDF Wave A) |
| packKind | `list` |
| changeScope | `edit_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_2472bc94` |
| priorDevTaskId | `task_00facaea` |
| cr | `nktd-pdf-20260917` · Wave A |
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
| docker | api `:5111` · bff `:5201` healthy · patrol-logs 200 |
| contentHashPrior | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprintPrior | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.17.2` |
| writtenAt | `2026-09-18T04:06:10.676Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Wave A: `locationText` Text live · weather Textarea rows=3 max=2000 · formCols=2 · OR code
- Hub `patrol-logs` **redirect** `/csdl-so-02` (route_a)
- Empty list → grid headers hidden · col «Vị trí» in DEFAULT_COLUMNS (+ QA-20 field)
- `yarn e2e-qa` playwright resolve fail → chrome createRequire (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng
- T-QA-CRUD/FORM/FILTER/ROUTE/FILE/LIST-COL **PASS** · **cấm** phase=done · handoff Review
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
| S0 | PASS | `c12b2a18392a66a7` |
| S1 | PASS | `c12b2a18392a66a7` |
| QA-20 | PASS | `928baf1b8f3aed7f` |

## Screens / zones

- S-LIST · S-FORM · S-ENTRIES · S-HUB · S-SKIP-MAP · S-SKIP-RPT
- testid=`rmms-csdl-so-02-list-page` · form=`rmms-csdl-so-02-form-slideout`
- entry=`csdl-so-02-entry-0-locationText` · weather=`…-weatherEvent` textarea

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-SO02-FILE-01 P1 · GAP-NKTD-RPT-PARK OUT · Auth DEFER

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA · Wave B park |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · Wave B report e2e · reuse `Location`
