# handoff-compact — data_analy · csdl-so-03

| | |
|--|--|
| schemaVersion | `1` |
| role | `data_analy` |
| feature | `csdl-so-03` |
| title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_bbeb376c` |
| resource | `duty-incident-logs` |
| formNo | `03` |
| IdCode | `SO-` |
| contentHash | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprint | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| analyzedAt | `2026-09-05T19:23:00.000Z` |

## Artifacts

| Kind | Path |
|------|------|
| control-hint | `specs/_data-analy/features/csdl-so-03-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-03-real-data.md` |
| CTX | `docs/context/features/csdl-so-03.md` |
| cluster | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-03 · Q-SO3 |
| demo | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=duty-incident-logs` (+ BFF) · **cấm ERP.*** · **cấm** invent `infra`
- Entry: mfeStd `/csdl-so-03` · hub `/so-ts/csdl-so-sach?resource=duty-incident-logs`
- Form: Kind D Slideout · typed book header + entries · **cấm** chỉ detail*/col1–3
- Merge: **xoá** live `duty-logs` + `checkpoint-duties` → 1 resource (GAP-CSDL-CUC-06 · Q-SO3)
- formNo Cục `03` · live 2 card Sổ 2+3 đến T-REN-01/merge

## GAP (PO must see)

| ID | One-liner |
|----|-----------|
| GAP-SO03-MERGE-01 | Merge 2 resource → `duty-incident-logs` · retire keys cũ |
| GAP-SO03-TYPED-01 | Typed T-SO-03 thay generic detail*/col1–3 |
| GAP-SO03-ROUTE-01 | Alias `/csdl-so-03` vs hub-only |
| GAP-SO03-FORMNO-01 | 2 card Sổ 2+3 → 1 card Sổ 03 |
| GAP-CSDL-ROAD-01 | SearchInput road-route |
| GAP-CSDL-PROV-01 | Province static vs master |
| GAP-CSDL-ORG-01 | contractor SearchInput P2 |
| GAP-CSDL-CUC-03 | Đóng gap cột khi typed PASS |
| GAP-CSDL-CUC-06 | Đóng khi merge PASS |
| GAP-RPT-SRC-CSDL-01 | Typed entries = report source |
| GAP-CSDL-XLS-01 | Import/export sheet OUT |

## Open Q

Q-MERGE · Q-DUTYKIND · Q-FORMNO · Q-STATUS · Q-PROV · Q-ORG · Q-SHIFT

## Zones

List A/B/C/D Kind B · Form Kind D Slideout Z1–Z3 · entries inline grid · map: none

## Next

| Role | Need |
|------|------|
| **PO** | requirement từ Delta + merge open Q |
| Design | control-map · prototype typed · reviewUrl |
| SA | typed DTO/UiSchema · Schema_CsdlSo03 · retire 2 resource |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · Guid IdCode · form 3 ô / col1–3 only · giữ 2 resource song song P1 · invent map · yarn build/e2e ở analy
