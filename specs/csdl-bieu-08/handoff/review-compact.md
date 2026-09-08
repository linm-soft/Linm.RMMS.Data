# handoff-compact — review · csdl-bieu-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `review` |
| feature | `csdl-bieu-08` |
| title | CSDL Biểu 08 — Hệ thống ATGT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| verdict | **PASS** |
| review_confirm | **approve** (autoApprove ON) |
| taskId | `task_fdb010e9` |
| priorQaTaskId | `task_e0d8a853` |
| resource | `traffic-safety` |
| formNo | `08` |
| columns | `45` · **11 nhóm** |
| IdCode | `AT-` |
| peerSoTs | ATGT types (deep-link) |
| formPattern | **Kind D Slideout** 2col · **shared+1 child** |
| Kind | **B** A–D+F · **D** Slideout Z1–Z3 |
| route_confirm | `route_a` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-safety` |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| gates | QUERY·SEC·UI-FN·BE-FN **PASS** |
| contentHashPrior | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprintPrior | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-05T17:39:04.000Z` |

## Decisions

- `review_confirm=approve` · autoApprove ON · **PASS** all 4 gates
- contentHash unchanged → hash skip demo
- Parity PO→…→QA align · typed 45/11 · Schema_CsdlBieu8+11 · alias+hub · soft DELETE · **cấm ERP.***
- P0/P1 open: **none** · P2 debt only (E2E-PW fallback · migrate apply · Auth/org/XLS · form-assert road note)
- open Q: **none**
- Pipeline complete · **cấm** start role khác

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-08/review/findings.md` |
| STATUS | `specs/csdl-bieu-08/STATUS.md` |
| prior QA | `handoff/qa-compact.md` · screens S0/S1/QA-20 |

## Evidence (ids)

| Gate | Result |
|------|--------|
| QUERY | PASS |
| SEC | PASS |
| UI-FN | PASS |
| BE-FN | PASS |
| QA S0/S1/QA-20 | PASS (prior) |

## Debt

- GAP-QA-E2E-PW-01 P2 · migrate apply · Auth DEFER · org/XLS OUT · form-assert hasRoad note

## Next

| Role | Need |
|------|------|
| — | done · deploy migrate ops only |

## UNCLEAR

- none

## Cấm (compact)

ERP.* · invent API · implement @ Review · e2e/build/start:std @ Review · Guid IdCode · merge Sổ TS · wide 45 · start role khác
