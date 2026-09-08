# handoff-compact — review · csdl-so-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `review` |
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| review_confirm | **done** (autoApprove ON) |
| taskId | `task_c8e7adf8` |
| priorQaTaskId | `task_e82f781d` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · Tab A/B `inline_grid` **add/remove** |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-07` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=row-violations` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **PASS** (prior QA · S0/S1/QA-20) |
| contentHashPrior | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprintPrior | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T05:01:20.000Z` |

## Decisions

- Gates QUERY/SEC/UI-FN/BE-FN **PASS** · hash skip (unchanged)
- Typed So07 + nested VP/GP · API `asset/csdl-records` · **cấm ERP.*** · **cấm** runtime `/row-violations`
- route_a + hub redirect · 2-tab add/remove · SoftDelete · Schema_CsdlSo07
- QA evidence accepted · blocking findings **none**
- Debt DEFER/OUT only (UiSchema seed · migrate apply · auth/org · T-REN-01 · GAP-QA-E2E-PW-01)
- `review_confirm=done` · phase=`done` · open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-so-07/review/findings.md` |
| prior QA | `specs/csdl-so-07/qa/scenarios.md` · screens manifest |
| STATUS | `specs/csdl-so-07/STATUS.md` |

## Screens / zones (ids only)

- S-LIST · S-FORM-C · S-TAB-A · S-TAB-B · S-HUB-ENTRY · S-SKIP-MAP
- Evidence: `qa/screens/{S0,S1,QA-20}.png` · manifest ok

## Debt

- UiSchema seed / migrate apply / auth wire / org SearchInput / T-REN-01 DEFER
- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · XLS OUT

## Next

| Role | Need |
|------|------|
| — | pipeline complete · no further role this task |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · implement @ Review · e2e/build/start:std @ Review · Step 4b · start role khác · flatten · runtime row-violations path · merge report
