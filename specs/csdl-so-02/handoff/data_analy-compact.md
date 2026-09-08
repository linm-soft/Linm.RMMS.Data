# handoff-compact — data_analy · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_1c1e0895` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| contentHash | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| headerFingerprint | `sha256:5da56778e38ecc53807d424082520372c7bbed355257bdacfa0457dba0036e3c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T17:10:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-so-02-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-02-real-data.md` |
| CTX | `docs/context/features/csdl-so-02.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-02 |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=patrol-logs` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-so-02` · hub `/so-ts/csdl-so-sach?resource=patrol-logs`
- Form: Kind D Slideout · typed book header + entries · **cấm** chỉ detail*/col1–3
- Sketch/media: FileService · T-FILE-01
- formNo Cục `02` · live label Sổ 1 đến T-REN-01 · **giữ** resource key

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SO02-TYPED-01 | Typed T-SO-02 thay generic detail*/col1–3 |
| GAP-SO02-ROUTE-01 | Alias `/csdl-so-02` vs hub-only |
| GAP-SO02-FORMNO-01 | Label Sổ 1 → Sổ 02 · key patrol-logs giữ |
| GAP-SO02-SKETCH-01 | sketchRef + mediaIds FileService |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit/contractor SearchInput P2 |
| GAP-CSDL-CUC-03 | Đóng gap cột khi typed PASS |
| GAP-RPT-SRC-CSDL-01 | Typed entries = report source |
| GAP-CSDL-XLS-01 | Import/export sheet OUT |

## Open Q

Q-FORMNO · Q-STATUS · Q-SKETCH · Q-PROV · Q-CONTRACTOR

## Zones

List A/B/C/D Kind B · Form Kind D Slideout Z1–Z3 · entries inline grid · map: none · sketch=file

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype typed · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlSo02 · file bind |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô / col1–3 only · invent map · invent file API · yarn build/e2e ở analy
