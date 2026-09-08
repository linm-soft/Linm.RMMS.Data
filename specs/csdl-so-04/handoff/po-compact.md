# handoff-compact — po · csdl-so-04

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-04` |
| title | CSDL Sổ 04 — Tổng hợp đếm xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_8789a3fb` |
| resource | `traffic-counts` |
| formNo | `04` |
| IdCode | `SO-` |
| contentHash | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprint | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-06T05:12:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-04/po/requirement.md` |
| prior compact | `specs/csdl-so-04/handoff/data_analy-compact.md` |
| control-hint | `specs/_data-analy/features/csdl-so-04-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-04-real-data.md` |
| CTX | `docs/context/features/csdl-so-04.md` |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` (zone ref only) |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=traffic-counts` (+ BFF) · **cấm ERP.*** · **cấm** `/api/v1/traffic-counts`
- Entry: mfeStd `/csdl-so-04` · hub `/so-ts/csdl-so-sach?resource=traffic-counts`
- Form: Kind D Slideout · typed T-SO-04 · 1 row/trạm/quý · 16 class + totalCars derived · **cấm** detail*/col1–3 · **cấm** TNGT
- Peer: LOOKUP `COUNT_STATION` · `road-route` · `rpt-dem-xe` RO · **cấm** merge Sổ TS

## PO decisions (autoApprove)

| Q | Decision |
|---|----------|
| Q-CLASS-LABEL | keys `class01`…`16` · interim «Hạng xe {nn}» · Design overlay Excel cite |
| Q-TOTAL | `totalCars` readonly derived = sum(class*) |
| Q-SPLIT | P1 drop TNGT title/fields · so-05 độc lập |
| Q-STATION | SearchInput count-station P1 required |
| Q-UNIQUE | hard 422 station+year+quarter |
| Q-PROV | keep_static 5 tỉnh P1 |
| Q-ORG | Text P1 · org-unit SearchInput P2 |
| Q-STATUS | `draft\|active\|closed` LOOKUP_STATIC |

## GAP P1 / DEFER / OUT

- **P1:** TYPED-01 · SPLIT-01 · ROUTE-01 · FORMNO-01 · STATION-01 · METHOD-01 · ROW-01 · ROAD-01 · PROV-01(static) · CUC-03 · CUC-07(so-04) · CUC-11 · RPT-SRC (form READY)
- **DEFER P2:** ORG-01 SearchInput
- **OUT:** XLS-01

## Zones

List A/B/C/D Kind B · Form Kind D Slideout Z1–Z3 · count matrix 16 class · map: none · filter 1-row HARD

## AC summary

Grid G-01…G-13 · Form F-01…F-15 · Leave dirty modal · empty VN «Chưa có dữ liệu tổng hợp đếm xe»

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype typed · hub title không TNGT · reviewUrl · filter-bar HARD · class label overlay |
| SA | Schema_CsdlSo04 · unique station+year+quarter · totalCars derived · widen DTO |
| QA | e2e queued — **không** chạy ở PO |

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · Col1–3 only · gộp TNGT · invent map · yarn build/e2e/start:std ở PO · re-scan demo · CRUD rpt-dem-xe
