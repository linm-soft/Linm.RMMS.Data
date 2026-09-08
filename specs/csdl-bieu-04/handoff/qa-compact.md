# handoff-compact — qa · csdl-bieu-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_4ed5aef9` |
| priorDevTaskId | `task_cd72c67e` |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-` |
| peerSoTs | `so-ts-culvert-x` |
| formPattern | **Kind D Slideout** 2col |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=culverts` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy |
| contentHashPrior | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T06:26:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- `yarn e2e-qa` hang install → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill
- T-QA-CRUD/FORM/FILTER/ROUTE **PASS** (runtime + code)
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-04/qa/scenarios.md` |
| screens | `specs/csdl-bieu-04/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-04/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-04/qa/screens/live-assert.json` |
| STATUS | `specs/csdl-bieu-04/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `d6e9f19589ae80d0` |
| S1 | PASS | `63c4bf383d9c23ad` |
| QA-20 | PASS | `1640ba4607f56a43` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-PEER-SOTS
- testid=`rmms-csdl-bieu-04-list-page` · form=`rmms-csdl-bieu-04-form-slideout`

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
