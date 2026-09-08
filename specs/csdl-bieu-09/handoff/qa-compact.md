# handoff-compact — qa · csdl-bieu-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_54b4d1b6` |
| priorDevTaskId | `task_b449f5f6` |
| resource | `boundary-markers` |
| formNo | `09` |
| columns | `17` · **2 section kind** |
| IdCode | `MK-` |
| peerSoTs | — (none) |
| formPattern | **Kind D Slideout** 2col · **2 section kind** |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=boundary-markers` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy |
| contentHashPrior | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T11:20:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true` · screenshot sạch
- Hub `boundary-markers` **redirect** `/csdl-bieu-09` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng
- T-QA-CRUD/FORM/FILTER/ROUTE/KIND **PASS** (runtime + code)
- markerKind/side/km live · peer **none** · MK- form create · 2 section kind · LeaveConfirm
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-09/qa/scenarios.md` |
| screens | `specs/csdl-bieu-09/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-09/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-09/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-bieu-09/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-bieu-09/STATUS.md` |

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

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · org/XLS OUT/DEFER · DB migrate apply

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · detail*-only
