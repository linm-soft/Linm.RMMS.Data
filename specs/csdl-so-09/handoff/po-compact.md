# handoff-compact — po · csdl-so-09

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-09` |
| title | CSDL Sổ 09 — QL vận hành ITS/ETC/KSTTX |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fedb10cb` |
| resource | `its-ops-logs` |
| formNo | `09` |
| IdCode | `SO-` |
| contentHash | `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` |
| headerFingerprint | `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-05T23:50:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-09/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-so-09-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-09-real-data.md` |
| prior compact | `specs/csdl-so-09/handoff/data_analy-compact.md` |
| CTX | `docs/context/features/csdl-so-09.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=its-ops-logs` (+ BFF) · **cấm ERP.***
- Entry: `/csdl-so-09` + hub `?resource=its-ops-logs`
- Form: Kind D Slideout · typed T-SO-09 header + entries 9 cột ca trực · link Biểu 14 optional
- IdCode `SO-yyyyMMdd-nnnn` · formNo `09` · **≠** Biểu 9 `boundary-markers`

## Open Q — resolved

| Q | Decision |
|---|----------|
| Q-SHIFT | Dropdown `ca1\|ca2\|ca3` LOOKUP_STATIC |
| Q-SYS-STATUS | Dropdown `tot\|tb\|kem\|hong` LOOKUP_STATIC |
| Q-LINK14 | optional · 1:1 SearchInput its-systems · cấm embed |
| Q-PROV | keep_static 5 tỉnh · master P2 |
| Q-ORG | Text P1 · partner/org SearchInput P2 |
| Q-SIGN | Text tên P1 · e-sign DEFER |

## GAP P1 / DEFER / OUT

| ID | P1 |
|----|-----|
| GAP-SO09-RES-01 · TYPED-01 · ROUTE-01 · LINK14-01 · FORMNO-01 | YES |
| GAP-CSDL-ROAD-01 · PROV-01 · CUC-03 · CUC-05 | YES |
| GAP-RPT-SRC-CSDL-01 | form READY · report riêng |
| GAP-CSDL-ORG-01 | DEFER P2 |
| GAP-CSDL-XLS-01 | OUT |

## Zones / AC

List A/B/C/D Kind B · Form Kind D Z1–Z3 · entries inline_grid 9 cột · map none · Grid AC G-01…G-10 · LeaveConfirm dirty · media không bắt buộc

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype typed · reviewUrl · filter-bar HARD · link14 chrome |
| SA | Schema_CsdlSo09 · typed DTO · seed catalog · migration |
| TL/Dev | alias page + typed form · reuse BASE · seed `its-ops-logs` |
| QA | Grid+form AC · e2e queued |

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · detail*/col1–3 only · invent map · merge Biểu 14 · yarn build/e2e/start:std ở PO · re-scan demo
