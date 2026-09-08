# handoff-compact — po · csdl-so-08

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-08` |
| title | CSDL Sổ 08 — Kết quả BDTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_2415c723` |
| resource | `maintenance-work-logs` |
| formNo | `08` |
| IdCode | `SO-` |
| contentHash | `sha256:46cd2b05ce4a396d08fa326183d9a17603afc381fbd00669155c13703a4e3146` |
| headerFingerprint | `sha256:e6fd49c647b1f4435fe5110097964fa15b4eeba116926d885297b81d2e373a02` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-05T18:45:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-08/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-so-08-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-08-real-data.md` |
| prior compact | `specs/csdl-so-08/handoff/data_analy-compact.md` |
| CTX | `docs/context/features/csdl-so-08.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=maintenance-work-logs` (+ BFF) · **cấm ERP.***
- Entry: `/csdl-so-08` + hub `?resource=maintenance-work-logs`
- Form: Kind D Slideout · typed T-SO-08 header + entries 5 cột (việc·Km·giải pháp·KQ chính·ghi chú)
- IdCode `SO-yyyyMMdd-nnnn` · formNo `08` · label «Sổ 08 — Kết quả BDTX»

## Open Q — resolved

| Q | Decision |
|---|----------|
| Q-VP-KHU | Text P1 · org-unit P2 · không enum Khu cố định |
| Q-STATUS | tot\|tb\|kem\|hong LOOKUP_STATIC P1 |
| Q-PROV | keep_static 5 tỉnh · master P2 |
| Q-ORG | Text P1 · partner/org SearchInput P2 |
| Q-ENTRY-KM | cặp kmFrom/kmTo · cấm gộp kmAt |

## GAP P1 / DEFER / OUT

| ID | P1 |
|----|-----|
| GAP-SO08-TYPED-01 · ROUTE-01 · FORMNO-01 | YES |
| GAP-CSDL-ROAD-01 · PROV-01 · CUC-03 | YES |
| GAP-RPT-SRC-CSDL-01 | form READY · report riêng |
| GAP-CSDL-ORG-01 | DEFER P2 |
| GAP-CSDL-XLS-01 | OUT |

## Zones / AC

List A/B/C/D Kind B · Form Kind D Z1–Z3 · entries inline_grid · map none · Grid AC G-01…G-10 · LeaveConfirm dirty · media không bắt buộc

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype typed · reviewUrl · filter-bar HARD |
| SA | Schema_CsdlSo08 · typed DTO · migration |
| TL/Dev | alias page + typed form · reuse BASE |
| QA | Grid+form AC · e2e queued |

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · detail*/col1–3 only · invent map · yarn build/e2e/start:std ở PO · re-scan demo
