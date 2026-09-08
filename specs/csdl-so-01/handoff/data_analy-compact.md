# handoff-compact — data_analy · csdl-so-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_3931d587` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-` |
| contentHash | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprint | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T17:50:31.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-so-01-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-01-real-data.md` |
| CTX | `docs/context/features/csdl-so-01.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-01 |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=inspection-logs` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-so-01` · hub `/so-ts/csdl-so-sach?resource=inspection-logs`
- Form: Kind D Slideout · typed book header + entries · **cấm** chỉ detail*/col1–3
- Media sau SC: FileService · T-FILE-01
- formNo Cục `01` · live label Sổ 8 đến T-REN-01 · **giữ** resource key

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SO01-TYPED-01 | Typed T-SO-01 thay generic detail*/col1–3 |
| GAP-SO01-ROUTE-01 | Alias `/csdl-so-01` vs hub-only |
| GAP-SO01-FORMNO-01 | Label Sổ 8 → Sổ 01 · key inspection-logs giữ |
| GAP-SO01-MEDIA-01 | postRepairMediaIds FileService sau SC |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | manageUnit SearchInput P2 |
| GAP-CSDL-CUC-03 | Đóng gap cột khi typed PASS |
| GAP-RPT-SRC-CSDL-01 | Typed entries = report source |
| GAP-CSDL-XLS-01 | Import/export sheet OUT |

## Open Q

Q-FORMNO · Q-STATUS · Q-MEDIA · Q-PROV · Q-ORG

## Zones

List A/B/C/D Kind B · Form Kind D Slideout Z1–Z3 · entries inline grid · map: none · media=file sau SC

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + open Q |
| Design | control-map · prototype typed · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlSo01 · file bind |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô / col1–3 only · invent map · invent file API · yarn build/e2e ở analy
