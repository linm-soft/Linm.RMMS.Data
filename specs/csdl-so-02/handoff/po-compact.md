# handoff-compact — po · csdl-so-02

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_0da1b0a3` |
| resource | `patrol-logs` |
| formNo | `02` |
| IdCode | `SO-` |
| contentHash | `sha256:70538d9c9588d335aa43fd5a1fe28433d1138960d5954c5a7ef4cff33a5bd1c3` |
| headerFingerprint | `sha256:5da56778e38ecc53807d424082520372c7bbed355257bdacfa0457dba0036e3c` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-05T17:20:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-02/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-so-02-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-02-real-data.md` |
| prior compact | `specs/csdl-so-02/handoff/data_analy-compact.md` |
| CTX | `docs/context/features/csdl-so-02.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=patrol-logs` (+ BFF) · **cấm ERP.***
- Entry: `/csdl-so-02` + hub `?resource=patrol-logs`
- Form: Kind D Slideout · typed T-SO-02 header + entries · FileService sketch/media
- IdCode `SO-yyyyMMdd-nnnn` · formNo `02` · label «Sổ 02 — Nhật ký tuần đường»

## Open Q — resolved

| Q | Decision |
|---|----------|
| Q-FORMNO | Label Sổ 02 P1 · key patrol-logs giữ |
| Q-STATUS | tot\|tb\|kem\|hong LOOKUP_STATIC P1 |
| Q-SKETCH | sketch/media optional · max 10/entry |
| Q-PROV | keep_static 5 tỉnh · master P2 |
| Q-CONTRACTOR | Text P1 · partner-unit P2 |

## GAP P1 / DEFER / OUT

| ID | P1 |
|----|-----|
| GAP-SO02-TYPED-01 · ROUTE-01 · FORMNO-01 · SKETCH-01 | YES |
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
| SA | Schema_CsdlSo02 · typed DTO · file bind |
| TL/Dev | alias page + typed form · reuse BASE |
| QA | Grid+form AC · e2e queued |

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · detail*/col1–3 only · invent map/file API · yarn build/e2e/start:std ở PO · re-scan demo
