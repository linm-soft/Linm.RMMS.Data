# handoff-compact — po · csdl-so-06

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-06` |
| title | CSDL Sổ 06 — QL cầu / phiếu KT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_bc56fa9c` |
| resource | `bridge-inspections` |
| formNo | `06` |
| IdCode | `SO-` |
| contentHash | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprint | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-06T03:20:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-06/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-so-06-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-06-real-data.md` |
| prior compact | `specs/csdl-so-06/handoff/data_analy-compact.md` |
| CTX | `docs/context/features/csdl-so-06.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=bridge-inspections` (+ BFF) · **cấm ERP.*** · **cấm** runtime `/api/v1/bridge-inspections`
- Entry: `/csdl-so-06` + hub `?resource=bridge-inspections`
- Form: Kind D Slideout · typed T-SO-06 header + **20 fixed** entries · photoIds FileService / dòng
- Peer: SearchInput/deep-link Biểu 2 · **cấm** merge form
- IdCode `SO-yyyyMMdd-nnnn` · formNo `06` · title «Sổ 06 — QL cầu / phiếu KT»

## Open Q — resolved

| Q | Decision |
|---|----------|
| Q-FORMNO | Title Sổ 06 · hub «Phiếu KT cầu» đến T-REN-01 · key giữ |
| Q-STATUS | draft\|done\|cancelled · **cấm** tot/tb/kem/hong |
| Q-PRIORITY | required khi damageDesc ≠ empty |
| Q-MEDIA | optional / dòng · max 5 · FileService |
| Q-BRIDGE | SearchInput bridges P1 · Text fallback nếu UNREADY |
| Q-PROV | keep_static 5 tỉnh · master P2 |
| Q-ORG | Text P1 · org-unit P2 |
| Q-DMAP | YES — SA row wave này |

## GAP P1 / DEFER / OUT

| ID | P1 |
|----|-----|
| GAP-SO06-TYPED-01 · ROUTE-01 · FIXED20-01 · PEER-01 · MEDIA-01 · APILEGACY-01 · DMAP-01 | YES |
| GAP-SO06-FORMNO-01 | title YES · hub rename DEFER T-REN-01 |
| GAP-CSDL-ROAD-01 · PROV-01 · CUC-03 | YES |
| GAP-RPT-SRC-CSDL-01 | form READY · report riêng |
| GAP-CSDL-ORG-01 | DEFER P2 |
| GAP-CSDL-XLS-01 | OUT |

## Zones / AC

List A/B/C/D Kind B · Form Kind D Z1–Z3 · entries fixed-20 · map none · media file/dòng · Grid AC G-01…G-10 · Form AC F-01…F-10 · LeaveConfirm dirty

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype typed 20 lines · reviewUrl · filter-bar HARD |
| SA | Schema_CsdlSo06 · typed DTO · DOMAIN-MAP · file bind · seed 20 |
| TL/Dev | alias page + typed form · reuse BASE |
| QA | Grid+form AC · e2e queued |

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · detail*/col1–3 only · add/remove >20 · invent map/file API · runtime bridge-inspections path · yarn build/e2e/start:std ở PO · re-scan demo
