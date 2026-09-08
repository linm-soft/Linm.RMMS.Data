# handoff-compact — qa · csdl-bieu-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_6983c8c2` |
| priorDevTaskId | `task_83252c99` |
| resource | `ditches` |
| formNo | `05` |
| columns | `18` |
| IdCode | `RN-` |
| peerSoTs | `so-ts-ditch` |
| formPattern | **Kind D Slideout** 2col |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-05` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ditches` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy |
| contentHashPrior | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T07:08:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng
- T-QA-CRUD/FORM/FILTER/ROUTE **PASS** (runtime + code)
- ditchKind · kmFrom/kmTo filter live · peer-sots live
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-05/qa/scenarios.md` |
| screens | `specs/csdl-bieu-05/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-05/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-05/qa/screens/live-assert.json` |
| STATUS | `specs/csdl-bieu-05/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `a23703a704e66bd1` |
| S1 | PASS | `ea9bebf5a586b1e3` |
| QA-20 | PASS | `b8607424dc589ce0` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-PEER-SOTS
- testid=`rmms-csdl-bieu-05-list-page` · form=`rmms-csdl-bieu-05-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · Auth DEFER · org/XLS OUT/DEFER

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done ở QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · phase=done · kill worker · invent API · merge Sổ TS · start role khác
