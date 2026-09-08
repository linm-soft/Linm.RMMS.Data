# handoff-compact — data_analy · csdl-bieu-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-09` |
| title | CSDL Biểu 09 — Mốc lộ giới / GPMB |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b7a89508` |
| resource | `boundary-markers` |
| formNo | `09` (live hub còn **8** · renumber) |
| columns | `17` |
| IdCode | `MK-` |
| peerSoTs | — |
| contentHash | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprint | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T10:50:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-09-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-09-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-09.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=boundary-markers` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-09` · hub `/so-ts/csdl-so-sach?resource=boundary-markers`
- Form: Kind D Slideout typed 17 cột · 2 khối LG/GPMB theo `markerKind` · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 9
- Peer: none · **≠** road-assets · **GAP-CSDL-CUC-11**

## Header (17)

`code|roadCode|roadName|province|kmFrom|kmTo|side|markerKind|markerStructure|markerLengthM|markerWidthM|markerAreaM2|markerQty|completedYear|status|manageUnit|notes`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU09-TYPED-01 | Typed 17 cột thay generic detail* |
| GAP-BIEU09-REN-01 | formNo 8→9 · title mốc LG/GPMB · T-REN-01 |
| GAP-BIEU09-ROUTE-01 | Alias `/csdl-bieu-09` vs hub-only |
| GAP-BIEU09-KIND-01 | markerKind RoadLimit/GPMB LOOKUP |
| GAP-BIEU09-STRUCT-01 | markerStructure LOOKUP Excel seed |
| GAP-BIEU09-DIM-01 | Length/Width/Area/Qty typed |
| GAP-BIEU09-YEAR-01 | completedYear Number |
| GAP-BIEU09-BLOCK-01 | 2 section UX theo kind |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 9 OUT |
| GAP-CSDL-CUC-11 | ≠ Sổ TS · ROW riêng |

## Open Q

Q-ROUTE · Q-PROV · Q-KIND-LABEL · Q-STRUCT · Q-DIM · Q-QTY · Q-LIST-COLS · Q-REN-LABEL

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · 2 section kind · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 17 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu9 · renumber |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · Guid IdCode · yarn build/e2e @ data_analy
