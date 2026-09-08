# handoff-compact — po · csdl-so-01

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-01` |
| title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_c379e304` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-` |
| contentHash | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprint | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-05T18:00:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-01/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-so-01-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-01-real-data.md` |
| prior compact | `specs/csdl-so-01/handoff/data_analy-compact.md` |
| CTX | `docs/context/features/csdl-so-01.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=inspection-logs` (+ BFF) · **cấm ERP.***
- Entry: `/csdl-so-01` + hub `?resource=inspection-logs`
- Form: Kind D Slideout · typed T-SO-01 header + entries · FileService media sau SC
- IdCode `SO-yyyyMMdd-nnnn` · formNo `01` · label «Sổ 01 — Nhật ký tuần kiểm»

## Open Q — resolved

| Q | Decision |
|---|----------|
| Q-FORMNO | Label Sổ 01 P1 · key inspection-logs giữ |
| Q-STATUS | tot\|tb\|kem\|hong LOOKUP_STATIC P1 |
| Q-MEDIA | optional; ≥1 nếu repairRequest ≠ empty · max 10/entry |
| Q-PROV | keep_static 5 tỉnh · master P2 |
| Q-ORG | Text P1 · org-unit P2 |

## GAP P1 / DEFER / OUT

| ID | P1 |
|----|-----|
| GAP-SO01-TYPED-01 · ROUTE-01 · FORMNO-01 · MEDIA-01 | YES |
| GAP-CSDL-ROAD-01 · PROV-01 · CUC-03 | YES |
| GAP-RPT-SRC-CSDL-01 | form READY · report riêng |
| GAP-CSDL-ORG-01 | DEFER P2 |
| GAP-CSDL-XLS-01 | OUT |

## Zones / AC

List A/B/C/D Kind B · Form Kind D Z1–Z3 · entries inline_grid · map none · Grid AC G-01…G-10 · LeaveConfirm dirty

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype typed · reviewUrl · filter-bar HARD |
| SA | Schema_CsdlSo01 · typed DTO · file bind |
| TL/Dev | alias page + typed form · reuse BASE |
| QA | Grid+form AC · e2e queued |

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · detail*/col1–3 only · invent map/file API · yarn build/e2e/start:std ở PO · re-scan demo
