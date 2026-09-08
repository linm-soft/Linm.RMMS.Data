# handoff-compact — data_analy · csdl-bieu-10

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-10` |
| title | CSDL Biểu 10 — Kè, tường chắn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_6b4b8a1b` |
| resource | `retaining-walls` |
| formNo | `10` (live hub còn **9** · renumber) |
| columns | `21` |
| IdCode | `KE-` |
| peerSoTs | `so-ts-retaining` (deep-link · ≠ merge) |
| contentHash | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprint | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T11:25:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-10-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-10-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-10.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=retaining-walls` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-10` · hub `/so-ts/csdl-so-sach?resource=retaining-walls`
- Form: Kind D Slideout typed 21 cột · section tường + rãnh đỉnh · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 10
- Peer `so-ts-retaining` deep-link OK · **cấm** merge 1 form · **≠** road-assets

## Header (21)

`code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU10-TYPED-01 | Typed 21 cột thay generic detail* |
| GAP-BIEU10-REN-01 | formNo 9→10 · title Kè/tường chắn · T-REN-01 |
| GAP-BIEU10-ROUTE-01 | Alias `/csdl-bieu-10` vs hub-only |
| GAP-BIEU10-KIND-01 | wallKind LOOKUP trọng lực/rọ/BTCT/tường chắn |
| GAP-BIEU10-STRUCT-01 | structure LOOKUP Excel seed |
| GAP-BIEU10-MAT-01 | material LOOKUP |
| GAP-BIEU10-DIM-01 | lengthM/heightM/areaM2 typed |
| GAP-BIEU10-CREST-01 | rãnh đỉnh 4 field |
| GAP-BIEU10-YEAR-01 | inServiceYear Number |
| GAP-BIEU10-BLOCK-01 | 2 section tường + rãnh đỉnh |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 10 OUT |
| GAP-CSDL-CUC-11 | ≠ Sổ TS · ROW riêng |

## Open Q

Q-ROUTE · Q-PROV · Q-KIND · Q-STRUCT · Q-MAT · Q-HEIGHT · Q-CREST · Q-AREA · Q-LIST-COLS · Q-REN-LABEL · Q-PEER

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · 2 section · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 21 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu10 · renumber |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · merge so-ts-retaining · Guid IdCode · yarn build/e2e @ data_analy
