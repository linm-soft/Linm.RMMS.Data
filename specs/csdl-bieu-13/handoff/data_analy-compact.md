# handoff-compact — data_analy · csdl-bieu-13

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-13` |
| title | CSDL Biểu 13 — Tường chống ồn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_3cec1103` |
| resource | `noise-barriers` |
| formNo | `13` |
| columns | `13` |
| IdCode | `TC-` |
| peerSoTs | `so-ts-noise-barrier` · **cấm** merge |
| contentHash | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T13:50:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-13-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-13-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-13.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=noise-barriers` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** bind peer `road-assets`
- Entry: mfeStd `/csdl-bieu-13` · hub `/so-ts/csdl-so-sach?resource=noise-barriers` (**NEW card**)
- Form: Kind D Slideout typed 13 cột · dài/cao/DT · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 13
- Peer: `so-ts-noise-barrier` · **cấm** merge

## Header (13)

`code|roadCode|roadName|province|kmFrom|kmTo|side|lengthM|heightM|areaM2|status|manageUnit|notes`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU13-HUB-01 | NEW hub card · resource noise-barriers |
| GAP-BIEU13-TYPED-01 | Typed 13 cột thay generic detail* |
| GAP-BIEU13-ROUTE-01 | Alias `/csdl-bieu-13` vs hub-only |
| GAP-BIEU13-DIM-01 | lengthM · heightM · areaM2 Number |
| GAP-BIEU13-SIDE-01 | side LOOKUP L/R/C/Both |
| GAP-BIEU13-DB-01 | DB SSOT thiếu § Biểu 13 · Schema_CsdlBieu13 |
| GAP-BIEU13-DMAP-01 | DOMAIN-MAP thiếu slug csdl-bieu-13 |
| GAP-CSDL-CUC-05 | Biểu 13 resource MISSING → đóng khi hub+API PASS |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 13 OUT |
| GAP-CSDL-CUC-11 | ≠ Sổ TS · cấm merge so-ts-noise-barrier |

## Open Q

Q-ROUTE · Q-PROV · Q-BARRIER-TYPE · Q-AREA-DERIVE · Q-PREFIX · Q-LIST-COLS · Q-TITLE · Q-DMAP · Q-PEER-LINK

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · section kích thước · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 13 cột · hub card · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu13 · register resource · DOMAIN-MAP slug |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · merge so-ts-noise-barrier/road-assets · Guid IdCode · yarn build/e2e @ data_analy
