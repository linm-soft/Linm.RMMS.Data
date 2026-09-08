# handoff-compact — qa · csdl-so-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-03` |
| title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_f2841a21` |
| priorDevTaskId | `task_dd89680a` |
| resource | `duty-incident-logs` |
| retireKeys | `duty-logs` · `checkpoint-duties` |
| formNo | `03` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-03` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=duty-incident-logs` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · duty-incident-logs 200 |
| contentHashPrior | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprintPrior | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T03:10:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `duty-incident-logs` **redirect** `/csdl-so-03` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · Stop-Job wrapper only
- T-QA-CRUD/FORM/FILTER/MERGE/TYP/TAB/ROUTE **PASS** (runtime + code)
- Filter search/province/status/road/dateRange live · entries dutyDate/personName/content · 2col · Lưu · LeaveConfirm · **cấm** dutyKind
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-so-03/qa/scenarios.md` |
| screens | `specs/csdl-so-03/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-so-03/qa/screens/manifest.json` |
| live-assert | `specs/csdl-so-03/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-so-03/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-so-03/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `9cf5f1c30e5dec63` |
| S1 | PASS | `9cf5f1c30e5dec63` |
| QA-20 | PASS | `4fee2ee566f7834d` |

## Screens / zones

- S-LIST · S-FORM-C · S-ENTRIES · S-HUB-ENTRY · S-SKIP-MAP
- testid=`rmms-csdl-so-03-list-page` · form=`rmms-csdl-so-03-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · org/XLS OUT/DEFER · UiSchema seed DEFER · migration apply deploy

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · detail*-only · dutyKind · flatten-only
