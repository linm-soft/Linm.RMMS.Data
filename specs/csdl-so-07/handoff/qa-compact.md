# handoff-compact — qa · csdl-so-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_e82f781d` |
| priorDevTaskId | `task_24b3bbfd` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-` |
| formPattern | **Kind D Slideout** 2col · Tab A/B `inline_grid` **add/remove** |
| Kind | **B** A–D+F+H · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-so-07` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=row-violations` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| yarnBuild | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · row-violations 200 |
| contentHashPrior | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprintPrior | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T05:00:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `row-violations` **redirect** `/csdl-so-07` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · Stop-Job wrapper only
- QA compile fix: Slideout `customFooter`/`isOpen` (TS2559) · typecheck+build PASS
- T-QA-CRUD/FORM/FILTER/TABS/PROJECT/TYP/TAB/ROUTE **PASS** (runtime + code)
- Filter search/province/status/road/dateRange live · 2-tab VP/GP add/remove · 2col · Lưu · LeaveConfirm · projectMgmtUnit optional · permitDays Integer
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-so-07/qa/scenarios.md` |
| screens | `specs/csdl-so-07/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-so-07/qa/screens/manifest.json` |
| live-assert | `specs/csdl-so-07/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-so-07/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-so-07/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `094a3bc30cdfd574` |
| S1 | PASS | `094a3bc30cdfd574` |
| QA-20 | PASS | `e9fd16ebfaee89c3` |

## Screens / zones

- S-LIST · S-FORM-C · S-TAB-A · S-TAB-B · S-HUB-ENTRY · S-SKIP-MAP
- testid=`rmms-csdl-so-07-list-page` · form=`rmms-csdl-so-07-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth/org/XLS/hub-rename DEFER|OUT · UiSchema/migrate DEFER

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · flatten tabs · detail*/col1–3 only · runtime row-violations path · merge report
