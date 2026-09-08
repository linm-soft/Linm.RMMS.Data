# handoff-compact — data_analy · csdl-so-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-so-04` |
| title | CSDL Sổ 04 — Tổng hợp đếm xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_85934368` |
| resource | `traffic-counts` |
| formNo | `04` |
| IdCode | `SO-` |
| contentHash | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprint | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T22:06:16.761Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-so-04-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-04-real-data.md` |
| CTX | `docs/context/features/csdl-so-04.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-04 · GAP-CSDL-CUC-07 |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=traffic-counts` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** runtime `/api/v1/traffic-counts`
- Entry: mfeStd `/csdl-so-04` · hub `/so-ts/csdl-so-sach?resource=traffic-counts`
- Form: Kind D Slideout · typed header + **1 row/trạm/quý** · 16 class TCVN + `totalCars` · **cấm** detail*/col1–3 · **cấm** TNGT
- Peer: LOOKUP `COUNT_STATION` · report `rpt-dem-xe` read-only · **cấm** merge Sổ TS
- formNo Cục `04` · live title «(+ TNGT)» → drop khi split so-05 · **giữ** resource key

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SO04-TYPED-01 | Typed T-SO-04 thay generic detail*/col1–3 |
| GAP-SO04-SPLIT-01 | Tách TNGT/điểm đen → `csdl-so-05` (GAP-CSDL-CUC-07) |
| GAP-SO04-ROUTE-01 | Alias `/csdl-so-04` vs hub-only |
| GAP-SO04-FORMNO-01 | Title VN không TNGT · key traffic-counts giữ |
| GAP-SO04-STATION-01 | SearchInput count-station |
| GAP-SO04-METHOD-01 | countMethod thủ công/tự động |
| GAP-SO04-ROW-01 | 1 row / trạm / quý · matrix 16 class |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | contractor SearchInput P2 |
| GAP-CSDL-CUC-03 | Đóng gap cột khi typed PASS |
| GAP-CSDL-CUC-07 | Đóng khi split PASS |
| GAP-CSDL-CUC-11 | LOOKUP chung · ROW riêng ≠ Sổ TS |
| GAP-RPT-SRC-CSDL-01 | Typed = report source READY |
| GAP-CSDL-XLS-01 | Import/export sheet OUT |

## Open Q

Q-CLASS-LABEL · Q-TOTAL · Q-SPLIT · Q-STATION · Q-UNIQUE · Q-PROV · Q-ORG · Q-STATUS

## Zones

List A/B/C/D Kind B · Form Kind D Slideout Z1–Z3 · count matrix 16 class (không journal) · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + class labels + split so-05 |
| Design | control-map · prototype typed · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlSo04 · unique station+year+quarter |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô / col1–3 only · gộp TNGT · invent map · yarn build/e2e ở analy · CRUD trên rpt-dem-xe
