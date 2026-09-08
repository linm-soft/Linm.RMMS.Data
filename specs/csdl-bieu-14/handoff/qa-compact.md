# handoff-compact — qa · csdl-bieu-14

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_e13a402d` |
| priorDevTaskId | `task_936065ca` |
| resource | `its-systems` |
| formNo | `14` |
| columns | `21` · Z2 TB · Z3 HT |
| IdCode | `IT-` |
| peerSoTs | `so-ts-its-camera` · **cấm** merge · none_p1 |
| formPattern | **Kind D Slideout** 2col · Z2 TB · Z3 HT |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=its-systems` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy · API rebuild |
| contentHashPrior | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T15:12:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true`
- Hub `its-systems` **redirect** `/csdl-bieu-14` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng
- Pre-rebuild API 422 its-systems → `docker compose --build` API → 200
- Mid-QA typecheck: wire `deviceTypeDraft`/`DEVICE_TYPE_OPTIONS`/`applyFilters` 8-arg → **PASS**
- T-QA-CRUD/FORM/FILTER/ROUTE/DEV/INFRA/GPS **PASS** (runtime + code)
- deviceType/side/km live · peer none · IT- form create · Z2 TB · Z3 HT · LeaveConfirm
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-14/qa/scenarios.md` |
| screens | `specs/csdl-bieu-14/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-14/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-14/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-bieu-14/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-bieu-14/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `8981b3b87e67954c` |
| S1 | PASS | `8981b3b87e67954c` |
| QA-20 | PASS | `9706e3be1f4cae67` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-SKIP-PEER · S-SKIP-MAP
- testid=`rmms-csdl-bieu-14-list-page` · form=`rmms-csdl-bieu-14-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · org/XLS OUT/DEFER

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge so-ts-its-camera · detail*-only
