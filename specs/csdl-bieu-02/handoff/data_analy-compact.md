# handoff-compact — data_analy · csdl-bieu-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_dd8553f8` |
| resource | `bridges` |
| formNo | `02` |
| columns | `48` |
| IdCode | `BR-` |
| peerSoTs | none (—) · link Sổ 6 / passport deep-link only |
| contentHash | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T07:55:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-bieu-02-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-bieu-02-real-data.md` |
| CTX | `docs/context/features/csdl-bieu-02.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=bridges` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** CRUD qua `/bridges/{id}/passport`
- Entry: mfeStd `/csdl-bieu-02` · hub `/so-ts/csdl-so-sach?resource=bridges`
- Form: Kind D Slideout typed 48 cột · GPS 3 điểm · **cấm** chỉ 3 ô `detail*`
- Import: sheet Biểu 2 · legacy 64–69 SA map/drop · XLS OUT pack
- Peer Sổ 6 / passport deep-link OK · **cấm** merge 1 form

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-BIEU02-TYPED-01 | Typed 48 cột thay generic detail* |
| GAP-BIEU02-ROUTE-01 | Alias `/csdl-bieu-02` vs hub-only |
| GAP-BIEU02-GPS-01 | GPS 3 điểm lat/lng×3 |
| GAP-BIEU02-BEAM-01 | Dầm: nhịp · sơ đồ · dài · loại |
| GAP-BIEU02-SUB-01 | Phần dưới mố/trụ |
| GAP-BIEU02-LOAD-01 | Tải TK/TT shape — SA |
| GAP-BIEU02-FURN-01 | Gối · lan can · ống thoát · PQ · đỉnh |
| GAP-BIEU02-LEGACY-01 | Legacy cột 64–69 keep/drop — SA |
| GAP-BIEU02-PEER-01 | Không merge passport/Sổ 6 |
| GAP-BIEU02-DMAP-01 | DOMAIN-MAP thêm `csdl-bieu-02` |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit org-unit P2 |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 2 OUT |

## Open Q

Q-GPS · Q-LOAD · Q-LEGACY · Q-ROUTE · Q-PROV · Q-SECTION

## Zones

List A/B/C/D Kind B · Form Kind D Slideout 2col Z1–Z3 (sections GPS/dầm/phần dưới) · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype 48 cột · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlBieu2 · GPS/LEGACY/LOAD |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô only · invent map · merge passport/Sổ 6 · yarn build/e2e ở analy
