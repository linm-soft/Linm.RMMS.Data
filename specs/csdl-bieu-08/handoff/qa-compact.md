# handoff-compact — qa · csdl-bieu-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_e0d8a853` |
| priorDevTaskId | `task_96940f90` |
| resource | `traffic-safety` |
| formNo | `08` |
| columns | `45` · **11 nhóm** |
| IdCode | `AT-` |
| peerSoTs | ATGT types (deep-link) |
| formPattern | **Kind D Slideout** 2col · **shared+1 child** |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy |
| contentHashPrior | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T10:40:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true` · screenshot sạch
- Hub `traffic-safety` **redirect** `/csdl-bieu-08` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng
- T-QA-CRUD/FORM/FILTER/ROUTE/TYPE **PASS** (runtime + code)
- assetType/side/km live · peer-sots live · AT- form create · shared+1 child
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-08/qa/scenarios.md` |
| screens | `specs/csdl-bieu-08/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-08/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-08/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-bieu-08/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-bieu-08/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `4d575d82ee778423` |
| S1 | PASS | `4d575d82ee778423` |
| QA-20 | PASS | `18b9ab5e467f63c4` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-PEER-SOTS
- testid=`rmms-csdl-bieu-08-list-page` · form=`rmms-csdl-bieu-08-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · Auth DEFER · org/XLS OUT/DEFER · road testid create note

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · wide 45 entity
