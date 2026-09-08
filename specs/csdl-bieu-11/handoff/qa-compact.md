# handoff-compact — qa · csdl-bieu-11

| | |
|--|--|
| schemaVersion | `1` |
| role | `qa` |
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| taskId | `task_77e7482f` |
| priorDevTaskId | `task_049ab5a3` |
| resource | `lighting-systems` |
| formNo | `11` |
| columns | `24` · **2 section** lưới + NLMT |
| IdCode | `LT-` |
| peerSoTs | `so-ts-lighting` (toolbar · ≠ merge) |
| formPattern | **Kind D Slideout** 2col · **2 section** |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 · Z2b NLMT |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-11` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=lighting-systems` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| e2eQa | **ON** · runtime PASS |
| yarnTypecheck | **PASS** |
| docker | api `:5111` · bff `:5201` healthy |
| contentHashPrior | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T12:51:00.000Z` |

## Decisions

- E2E S0/S1/QA-20 **PASS** · PNG + manifest `ok=true` · screenshot sạch
- Hub `lighting-systems` **redirect** `/csdl-bieu-11` (route_a) · S1 assert list-page
- `yarn e2e-qa` hang → chrome channel fallback (**GAP-QA-E2E-PW-01**) · **cấm** kill rộng
- T-QA-CRUD/FORM/FILTER/ROUTE/LED/SOLAR **PASS** (runtime + code)
- gridStatus/side/km live · peer toolbar · LT- form create · 2 section · solar flat · LeaveConfirm
- **cấm** `phase=done` · handoff Review
- open Q: **none**

## Artifacts

| Kind | Path |
|------|------|
| scenarios | `specs/csdl-bieu-11/qa/scenarios.md` |
| screens | `specs/csdl-bieu-11/qa/screens/{S0,S1,QA-20}.png` |
| manifest | `specs/csdl-bieu-11/qa/screens/manifest.json` |
| live-assert | `specs/csdl-bieu-11/qa/screens/live-assert.json` |
| form-assert | `specs/csdl-bieu-11/qa/screens/form-assert.json` |
| STATUS | `specs/csdl-bieu-11/STATUS.md` |

## Evidence (ids)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `4c7adb31b6e963ca` |
| S1 | PASS | `4c7adb31b6e963ca` |
| QA-20 | PASS | `65da20993bf4b641` |

## Screens / zones

- S-LIST · S-FORM-C · S-HUB-ENTRY · S-PEER · S-SKIP-MAP
- testid=`rmms-csdl-bieu-11-list-page` · form=`rmms-csdl-bieu-11-form-slideout`

## Debt

- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · org/XLS OUT/DEFER · DB migrate apply

## Next

| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · phase=done · kill worker rộng · start role khác · merge Sổ TS · detail*-only · Solar child
