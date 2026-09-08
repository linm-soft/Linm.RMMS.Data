# handoff-compact — data_analy · csdl-bieu-12

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-12` |
| title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_94fca237` |
| resource | `green-assets` |
| formNo | `12` |
| columns | `15` |
| IdCode | `CX-` |
| peerSoTs | — (không peer · cấm invent so-ts-green) |
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T12:56:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-12-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-12-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-12.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=green-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-12` · hub `/so-ts/csdl-so-sach?resource=green-assets`
- Form: Kind D Slideout typed 15 cột · section khóm + thảm cỏ · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 12
- Peer: none · **cấm** invent/merge so-ts-green

## Header (15)

`code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU12-TYPED-01 | Typed 15 cột thay generic detail* |
| GAP-BIEU12-ROUTE-01 | Alias `/csdl-bieu-12` vs hub-only |
| GAP-BIEU12-CLUMP-01 | Khóm trúc đào/ngâu/cọ/khác Number |
| GAP-BIEU12-GRASS-01 | grassAreaM2 tách khỏi khóm |
| GAP-BIEU12-SIDE-01 | side LOOKUP vs free «taluy» |
| GAP-BIEU12-DMAP-01 | DOMAIN-MAP thiếu slug csdl-bieu-12 |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 12 OUT |
| GAP-CSDL-CUC-11 | ≠ Sổ TS · ROW riêng · cấm invent peer |

## Open Q

Q-ROUTE · Q-PROV · Q-OTHER-CLUMP · Q-GRASS-REQ · Q-TALUY · Q-LIST-COLS · Q-TITLE · Q-DMAP

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · 2 section · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 15 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu12 · DOMAIN-MAP slug |

## Cấm (compact)

ERP.* · invent `infra` · demo SSOT · form 3 ô detail* · invent so-ts-green · Guid IdCode · yarn build/e2e @ data_analy
