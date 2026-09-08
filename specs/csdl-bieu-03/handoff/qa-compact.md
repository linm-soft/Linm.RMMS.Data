# handoff-compact — qa · csdl-bieu-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-03` |
| title | CSDL Biểu 03 — Hầm đường bộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_677b9487` |
| priorDevTaskId | `task_8650b573` |
| resource | `road-tunnels` |
| formNo | `03` |
| columns | `42` |
| IdCode | `TN-` |
| peerSoTs | none (—) · Sổ QL cầu/hầm deep-link only |
| formPattern | **Kind D Slideout** 2col sectioned |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=road-tunnels` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy |
| contentHashPrior | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T09:10:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- `yarn e2e-qa` hang login → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill :9301
- T-QA-CRUD/FORM/FILTER/ROUTE/TUBE **PASS** (runtime + code)
- Q-GPS six_numbers · Q-TUBE two_rows · Q-VENT text verified
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-03/qa/scenarios.md` |
| screens | `specs/csdl-bieu-03/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-03/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-03/qa/screens/live-assert.json` |
| STATUS | `specs/csdl-bieu-03/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `45d1ef17df8e67ef` |
| S1 | PASS | `d3e7c32e7f3ec999` |
| QA-20 | PASS | `7bef2502656791dc` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-PEER-SO6
- testid=`rmms-csdl-bieu-03-list-page` · form=`rmms-csdl-bieu-03-form-slideout`

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
