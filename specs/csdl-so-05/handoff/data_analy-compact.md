# handoff-compact — data_analy · csdl-so-05

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-so-05` |
| title | CSDL Sổ 05 — TNGT + điểm đen |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_6deceabd` |
| resource | `accident-summaries` |
| formNo | `05` |
| IdCode | `SO-` |
| contentHash | `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` |
| headerFingerprint | `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T22:43:57.821Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-so-05-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-05-real-data.md` |
| CTX | `docs/context/features/csdl-so-05.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-05 · GAP-CSDL-CUC-07 |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=accident-summaries` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra` · **cấm** runtime `/api/v1/accident-summaries`
- Entry: mfeStd `/csdl-so-05` · hub `/so-ts/csdl-so-sach?resource=accident-summaries`
- Form: Kind D Slideout · typed header + **3 grid** C.1 / C.2 / điểm đen · **cấm** detail*/col1–3 · **cấm** 16 hạng xe
- Peer: LOOKUP `road-route` · report `rpt-tngt` read-only · peer so-04 `traffic-counts` ROW riêng · **cấm** merge Sổ TS
- formNo Cục `05` · **NEW** resource · drop TNGT khỏi title so-04 khi split PASS

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SO05-RES-01 | NEW catalog card + resource `accident-summaries` |
| GAP-SO05-SPLIT-01 | Tách khỏi live Sổ 4 «(+ TNGT)» (GAP-CSDL-CUC-07) |
| GAP-SO05-TYPED-01 | Typed T-SO-05 thay generic detail*/col1–3 |
| GAP-SO05-C1-01 | Grid C.1 tháng typed |
| GAP-SO05-C2-01 | Grid C.2 6 tháng/năm |
| GAP-SO05-BS-01 | Grid điểm đen / tiềm ẩn 12 tháng |
| GAP-SO05-ROUTE-01 | Alias `/csdl-so-05` vs hub-only |
| GAP-SO05-FORMNO-01 | formNo=`05` · không reuse 4 |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | contractor SearchInput P2 |
| GAP-CSDL-CUC-03 | Đóng gap cột khi typed PASS |
| GAP-CSDL-CUC-07 | Đóng khi so-04+so-05 split PASS |
| GAP-CSDL-CUC-11 | LOOKUP chung · ROW riêng ≠ Sổ TS / so-04 |
| GAP-RPT-SRC-CSDL-01 | Typed = report source `rpt-tngt` READY |
| GAP-CSDL-XLS-01 | Import/export sheet OUT |

## Open Q

Q-PERIOD · Q-CAUSE · Q-DAMAGE · Q-BS-ASSESS · Q-GRID-MODEL · Q-SPLIT · Q-PROV · Q-ORG · Q-STATUS · Q-RPT

## Zones

List A/B/C/D Kind B · Form Kind D Slideout Z1–Z3 · tabs 3 grid C.1/C.2/BS · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + period/cause/BS enums + split timing |
| Design | control-map · prototype 3 grid · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlSo05 · 3 entry collections |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô / col1–3 only · gộp đếm xe · invent map · yarn build/e2e ở analy · CRUD trên rpt-tngt
