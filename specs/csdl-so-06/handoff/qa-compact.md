# handoff-compact — qa · csdl-so-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_81900df5` |
| priorDevTaskId | `task_e9296e25` |
| resource | `bridge-inspections` |
| formNo | `06` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` **fixed-20** |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-06` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=bridge-inspections` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · bridge-inspections 200 |
| contentHashPrior | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprintPrior | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T04:00:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `bridge-inspections` **redirect** `/csdl-so-06` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · Stop-Process wrapper only
- T-QA-CRUD/FORM/FILTER/FIXED20/MEDIA/TYP/TAB/ROUTE **PASS** (runtime + code)
- Filter search/province/status/road/bridge/dateRange live · fixed-20 · priority* nếu damage · photoIds max5 · 2col · Lưu · LeaveConfirm · **0** add/remove
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-so-06/qa/scenarios.md` |
| screens | `specs/csdl-so-06/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-so-06/qa/screens/manifest.json` |
| live-assert | `specs/csdl-so-06/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-so-06/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-so-06/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `bd06b17fe835b37b` |
| S1 | PASS | `bd06b17fe835b37b` |
| QA-20 | PASS | `858eb97d3763a616` |

## Screens / zones

- S-LIST · S-FORM-C · S-ENTRIES fixed-20 · S-HUB-ENTRY · S-SKIP-MAP
- testid=`rmms-csdl-so-06-list-page` · form=`rmms-csdl-so-06-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · FileMulti/bridges SearchInput DEFER · Auth/org/XLS/hub-rename DEFER|OUT · UiSchema/migrate DEFER

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Biểu 2 · detail*-only · add/remove >20 · đổi partCode · runtime bridge-inspections path
