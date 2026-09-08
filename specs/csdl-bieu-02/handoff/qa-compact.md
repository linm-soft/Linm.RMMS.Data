# handoff-compact — qa · csdl-bieu-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_ac771056` |
| priorDevTaskId | `task_f8854c01` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-` |
| peerSoTs | none (—) · Sổ 6 / passport deep-link only |
| formPattern | **Kind D Slideout** 2col sectioned |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridges` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy |
| contentHashPrior | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T08:30:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- `yarn e2e-qa` hang login → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill
- T-QA-CRUD/FORM/FILTER/ROUTE **PASS** (runtime + code)
- Q-GPS six_numbers · Q-LOAD text · Q-LEGACY keep_hidden verified
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-02/qa/scenarios.md` |
| screens | `specs/csdl-bieu-02/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-02/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-02/qa/screens/live-assert.json` |
| STATUS | `specs/csdl-bieu-02/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `2f3ef226e8b4373c` |
| S1 | PASS | `f3d1b7450445adf9` |
| QA-20 | PASS | `18da741efe42ab96` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-PEER-SO6
- testid=`rmms-csdl-bieu-02-list-page` · form=`rmms-csdl-bieu-02-form-slideout`

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
