# handoff-compact — qa · csdl-so-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_e2d2ecee` |
| priorDevTaskId | `task_55ae2864` |
| resource | `its-ops-logs` |
| formNo | `09` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · entries `inline_grid` **9 cột** |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · its-ops-logs 200 (rebuild) |
| contentHashPrior | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprintPrior | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T00:16:30.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `its-ops-logs` **redirect** `/csdl-so-09` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · Stop-Job wrapper only
- T-QA-CRUD/FORM/FILTER/TYP/TAB/ROUTE/LINK14 **PASS** (runtime + code)
- Filter search/province/status/road/dateRange live · entries **9 cột** inline_grid · 2col · Lưu · LeaveConfirm · linkBieu14 · media N/A
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-so-09/qa/scenarios.md` |
| screens | `specs/csdl-so-09/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-so-09/qa/screens/manifest.json` |
| live-assert | `specs/csdl-so-09/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-so-09/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-so-09/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `9adf80696ce5d2ec` |
| S1 | PASS | `9adf80696ce5d2ec` |
| QA-20 | PASS | `8c2a8a53d1ba7c39` |

## Screens / zones

- S-LIST · S-FORM-C · S-ENTRIES · S-LINK14 · S-HUB-ENTRY · S-SKIP-MAP
- testid=`rmms-csdl-so-09-list-page` · form=`rmms-csdl-so-09-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · org/XLS/e-sign OUT/DEFER · UiSchema seed DEFER · migration apply runtime

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS/Biểu 14 · detail*-only · ≠ Biểu 9
