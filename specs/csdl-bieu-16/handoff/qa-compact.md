# handoff-compact — qa · csdl-bieu-16

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-16` |
| title | CSDL Biểu 16 — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_944da438` |
| priorDevTaskId | `task_71eac21e` |
| resource | `interchanges` |
| formNo | `16` |
| columns | `39` · header + child branches[] + ATGT |
| IdCode | `IX-` |
| peerSoTs | `so-ts-interchange` · **cấm** merge · none_p1 |
| child | `branches[]` embed · min_1 · replace-all |
| formPattern | **Kind D Slideout** 2col · 5 section + BRANCH |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 + BRANCH |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-16` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=interchanges` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · API rebuild |
| contentHashPrior | `sha256:56e2fb16e9bcde21f17d7e9639b72660666778f5393b1270cecc49d123beba4b` |
| headerFingerprintPrior | `sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T16:58:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `interchanges` **redirect** `/csdl-bieu-16` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · dừng riêng e2e tree
- Pre-rebuild API 422 interchanges → `docker compose --build` API → 200
- T-QA-CRUD/FORM/FILTER/BRANCH/MAIN/ATGT/ROUTE **PASS** (runtime + code)
- interchangeType/kmMain live · peer none · IX- form create · BRANCH min_1 · ATGT qty · LeaveConfirm
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-16/qa/scenarios.md` |
| screens | `specs/csdl-bieu-16/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-16/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-16/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-bieu-16/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-bieu-16/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `df8d6375dd104010` |
| S1 | PASS | `df8d6375dd104010` |
| QA-20 | PASS | `750db6e448c043ba` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP · DES-FORM-BRANCH
- testid=`rmms-csdl-bieu-16-list-page` · form=`rmms-csdl-bieu-16-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · org/XLS OUT/DEFER

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge so-ts-interchange · detail*-only · flatten-only
