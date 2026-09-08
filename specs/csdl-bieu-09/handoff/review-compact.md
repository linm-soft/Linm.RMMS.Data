# handoff-compact — review · csdl-bieu-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `review` |
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| review_confirm | **approve** (autoApprove ON) |
| taskId | `task_a5fbb485` |
| priorQaTaskId | `task_54b4d1b6` |
| resource | `boundary-markers` |
| formNo | `09` |
| columns | `17` · **2 section kind** |
| IdCode | `MK-` |
| peerSoTs | — (none) |
| formPattern | Kind D Slideout 2col · 2 section kind |
| Kind | B A–D+F · D Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=boundary-markers` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| entity | shell + `CsdlBieu9Entity` · `Schema_CsdlBieu9` |
| contentHashPrior | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| hashSkip | `unchanged` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T11:25:00.000Z` |

## Decisions

- QUERY/SEC/UI-FN/BE-FN **PASS** · open P0/P1 **none** · review_confirm **approve**
- Hash unchanged → skip re-analy · prior QA e2e S0/S1/QA-20 PASS accepted
- API keep `asset/csdl-records` · typed Schema_CsdlBieu9 · route_a + hub · peer **none**
- phase **done** · chain closed · **cấm** ERP.* / invent API / merge Sổ TS
- Debt carry: DB migrate · Auth DEFER · GAP-QA-E2E-PW-01 · GAP-QA-ROAD-TESTID · org/XLS

## Gates (slim)

| Gate | Result |
|------|--------|
| QUERY | PASS |
| SEC | PASS (+ Auth DEFER P2) |
| UI-FN | PASS |
| BE-FN | PASS |
| fix_gaps | none |

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-09/review/findings.md` |
| STATUS | `specs/csdl-bieu-09/STATUS.md` |
| prior qa | `handoff/qa-compact.md` |
| prior dev | `handoff/dev-compact.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `c29f1b4070c71b98` |
| S1 | PASS | `c29f1b4070c71b98` |
| QA-20 | PASS | `aff91b0ac11e1e28` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-SKIP-MAP · peer none
- testid=`rmms-csdl-bieu-09-list-page` · form=`rmms-csdl-bieu-09-form-slideout`

## Debt

- DB migrate apply P2 · Auth DEFER P2 · GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · org/XLS OUT/DEFER · migration id note P3

## Next

| Role | Need |
|------|------|
| — | chain closed · ops: migrate apply / Auth / debt backlog |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · detail* only · Guid IdCode · merge Sổ TS · e2e/start:std @ Review · implement @ Review · Step 4b/migration @ Review · start role khác
