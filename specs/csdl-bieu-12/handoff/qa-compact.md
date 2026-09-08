# handoff-compact — qa · csdl-bieu-12

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_d2312fac` |
| priorDevTaskId | `task_b5ce8177` |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` · **2 section** khóm + thảm cỏ |
| IdCode | `CX-` |
| peerSoTs | — (**cấm** invent so-ts-green) |
| formPattern | **Kind D Slideout** 2col · **2 section** |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 · Z2b Thảm cỏ |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=green-assets` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy |
| contentHashPrior | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprintPrior | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T13:35:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true` · screenshot sạch
- Hub `green-assets` **redirect** `/csdl-bieu-12` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng
- T-QA-CRUD/FORM/FILTER/ROUTE/CLUMP/GRASS **PASS** (runtime + code)
- side/km live · peer none · CX- form create · 2 section · grass Z2b · LeaveConfirm
- typecheck fix: Slideout `isOpen`+`customFooter` · SearchInput drop `fullWidth`
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-12/qa/scenarios.md` |
| screens | `specs/csdl-bieu-12/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-12/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-12/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-bieu-12/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-bieu-12/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `f8c6e6a7283f45ed` |
| S1 | PASS | `f8c6e6a7283f45ed` |
| QA-20 | PASS | `642f13697329afc7` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- testid=`rmms-csdl-bieu-12-list-page` · form=`rmms-csdl-bieu-12-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · org/XLS OUT/DEFER · DB migrate apply

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · invent so-ts-green · detail*-only
