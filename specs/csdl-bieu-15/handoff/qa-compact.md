# handoff-compact — qa · csdl-bieu-15

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-15` |
| title | CSDL Biểu 15 — TMC / thu phí / hạt / kho |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_cb969365` |
| priorDevTaskId | `task_e6ad9bf7` |
| resource | `ops-facilities` |
| formNo | `15` |
| columns | `20` · Z2 công trình · Z3 TB+QL |
| IdCode | `OF-` |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` · **cấm** merge · none_p1 |
| formPattern | **Kind D Slideout** 2col · Z2 công trình · Z3 TB+QL |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-15` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=ops-facilities` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · API rebuild |
| contentHashPrior | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprintPrior | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:56:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `ops-facilities` **redirect** `/csdl-bieu-15` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng · dừng riêng e2e tree
- Pre-rebuild API 422 ops-facilities → `docker compose --build` API → 200
- T-QA-CRUD/FORM/FILTER/ROUTE/FAC/AREA/EQ **PASS** (runtime + code)
- facilityKind/km live · peer none · OF- form create · Z2 facility · Z3 TB+QL · LeaveConfirm
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-15/qa/scenarios.md` |
| screens | `specs/csdl-bieu-15/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-15/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-15/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-bieu-15/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-bieu-15/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `bb3b71a3587cc57e` |
| S1 | PASS | `bb3b71a3587cc57e` |
| QA-20 | PASS | `1dd3e77a73d1388f` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- testid=`rmms-csdl-bieu-15-list-page` · form=`rmms-csdl-bieu-15-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · org/XLS OUT/DEFER

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge so-ts-toll/rest/station · detail*-only
