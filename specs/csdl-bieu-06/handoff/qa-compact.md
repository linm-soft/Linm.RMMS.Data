# handoff-compact — qa · csdl-bieu-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-06` |
| title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_eb952548` |
| priorDevTaskId | `task_f79fea88` |
| resource | `underpasses` |
| formNo | `06` |
| columns | `19` |
| IdCode | `HC-` |
| peerSoTs | `so-ts-underpass` |
| formPattern | **Kind D Slideout** 2col |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-06` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=underpasses` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy |
| contentHashPrior | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T07:50:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true` · screenshot sạch (0 overlay)
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng
- T-QA-CRUD/FORM/FILTER/ROUTE **PASS** (runtime + code)
- underpassKind · kmPoint filter live · peer-sots live · HC- form create
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-06/qa/scenarios.md` |
| screens | `specs/csdl-bieu-06/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-06/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-06/qa/screens/live-assert.json` |
| STATUS | `specs/csdl-bieu-06/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `484f545bf54a542c` |
| S1 | PASS | `12fa392a0d6eb733` |
| QA-20 | PASS | `c3f78b0fd0d0fdc1` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-PEER-SOTS
- testid=`rmms-csdl-bieu-06-list-page` · form=`rmms-csdl-bieu-06-form-slideout`

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
