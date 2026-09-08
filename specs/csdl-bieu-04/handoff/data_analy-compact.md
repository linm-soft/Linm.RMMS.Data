# handoff-compact — data_analy · csdl-bieu-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_ea0d8d57` |
| resource | `culverts` |
| formNo | `04` |
| columns | `17` |
| IdCode | `CG-` |
| peerSoTs | `so-ts-culvert-x` |
| contentHash | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprint | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T05:52:43.665Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-04-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-04-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-04.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=culverts` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-04` · hub `/so-ts/csdl-so-sach?resource=culverts`
- Form: Kind D Slideout typed 17 cột · **cấm** chỉ 3 ô `detail*`
- Import: XLS OUT pack Biểu 4
- Peer Sổ TS `so-ts-culvert-x` deep-link OK · **cấm** merge 1 form

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU04-TYPED-01 | Typed 17 cột thay generic detail* |
| GAP-BIEU04-ROUTE-01 | Alias `/csdl-bieu-04` vs hub-only |
| GAP-BIEU04-GPS-01 | 4 X/Y tim cống×đường vs 2 latlng — SA |
| GAP-BIEU04-SHAPE-01 | Hình hộp/tròn LOOKUP + thân/đầu TL/HL |
| GAP-BIEU04-PEER-01 | Không merge form so-ts-culvert-x |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 4 OUT |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục |

## Open Q

Q-GPS · Q-ROUTE · Q-PROV · Q-LOAD

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 17 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu4 · GPS |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS form · yarn build/e2e ở analy
