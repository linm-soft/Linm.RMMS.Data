# handoff-compact — data_analy · csdl-bieu-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_41122f1b` |
| resource | `pavement-sections` |
| formNo | `01` |
| columns | `38` |
| IdCode | `MD-` |
| peerSoTs | `pavement-section` |
| contentHash | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T11:53:25.414Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-01-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-01-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-01.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=pavement-sections` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-bieu-01` · hub `/so-ts/csdl-so-sach?resource=pavement-sections`
- Form: Kind D Slideout typed 38 cột · **cấm** chỉ 3 ô `detail*`
- Import: skip hàng cầu âm (`skip-bridge`) · XLS OUT pack
- Peer Sổ TS deep-link OK · **cấm** merge 1 form

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU01-TYPED-01 | Typed 38 cột thay generic detail* |
| GAP-BIEU01-ROUTE-01 | Alias `/csdl-bieu-01` vs hub-only |
| GAP-BIEU01-WIDTH-01 | 4 bucket B mặt vs 1 width — SA |
| GAP-BIEU01-STRUCT-01 | 4 flag vs 1 structureType enum — SA |
| GAP-BIEU01-SKIP-01 | Import skip cầu length âm |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 1 OUT |
| GAP-BIEU01-PEER-01 | Không merge form pavement-section |

## Open Q

Q-WIDTH · Q-STRUCT · Q-ROUTE · Q-PROV

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 38 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu1 · WIDTH/STRUCT |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge Sổ TS form · yarn build/e2e ở analy
