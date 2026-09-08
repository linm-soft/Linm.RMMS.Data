# handoff-compact — qa · csdl-so-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_bb8c09cc` |
| priorDevTaskId | `task_63d978f8` |
| resource | `accident-summaries` |
| formNo | `05` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · **3 tabs** C.1/C.2/BS · **cấm** 16 hạng |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-05` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=accident-summaries` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · accident-summaries 200 (rebuild) |
| contentHashPrior | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprintPrior | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T06:31:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `accident-summaries` **redirect** `/csdl-so-05` (route_a) · S1 assert list-page
- Docker API rebuild required (stale 422) · then resource 200
- `yarn e2e-qa` hang/stub → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · concurrent e2e so-06 giữ
- T-QA-CRUD/FORM/FILTER/TABS/ROUTE/SPLIT/TYP/TAB **PASS** (runtime + code)
- Filter year/periodType/tableKind/road/province/status/search · 3 tabs add-row · 2col · Lưu · LeaveConfirm · **cấm** 16 hạng
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-so-05/qa/scenarios.md` |
| screens | `specs/csdl-so-05/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-so-05/qa/screens/manifest.json` |
| live-assert | `specs/csdl-so-05/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-so-05/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-so-05/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `7e92179713197a10` |
| S1 | PASS | `7e92179713197a10` |
| QA-20 | PASS | `e2a038e5aa09121f` |

## Screens / zones

- S-LIST · S-FORM-C · S-TAB-C1 · S-TAB-C2 · S-TAB-BS · S-HUB-ENTRY · S-SKIP-MAP
- testid=`rmms-csdl-so-05-list-page` · form=`rmms-csdl-so-05-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Soft unique advisory · Auth DEFER · org/XLS OUT/DEFER · UiSchema seed DEFER

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · detail*-only · 16 hạng
