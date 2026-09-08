# handoff-compact — po · csdl-so-07

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `csdl-so-07` |
| title | CSDL Sổ 07 — HL + GPTC + Dự án |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_672392f6` |
| resource | `row-violations` |
| formNo | `07` |
| IdCode | `SO-` |
| contentHash | `sha256:b928feb3e0d7900398812630e25afa43bfcbf4971633a9c1184c55ea2912ef69` |
| headerFingerprint | `sha256:a923102afa38664e58effeb2b0dccfae12b942d4a3a6fb3c1cb8355df00aa531` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| updatedAt | `2026-09-05T21:15:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*`) |

## Artifacts

| Kind | Path |
|------|------|
| requirement | `specs/csdl-so-07/po/requirement.md` |
| control-hint | `specs/_data-analy/features/csdl-so-07-control-hint.md` |
| real-data | `specs/_data-analy/features/csdl-so-07-real-data.md` |
| prior compact | `specs/csdl-so-07/handoff/data_analy-compact.md` |
| CTX | `docs/context/features/csdl-so-07.md` |

## Live bind (1-liner)

- API: `api/v1/asset/csdl-records?resource=row-violations` (+ BFF) · **cấm ERP.*** · **cấm** runtime `/row-violations` · `/construction-permits`
- Entry: `/csdl-so-07` + hub `?resource=row-violations`
- Form: Kind D Slideout · typed header + **2 tab** A `violations[]` / B `permits[]`+QLDA · **cấm** flatten / detail*/col1–3
- Peer: drill `rpt-vi-pham-hlatdb` sau typed READY · **cấm** merge form
- IdCode `SO-yyyyMMdd-nnnn` · formNo `07` · title «Sổ 07 — HL + GPTC + Dự án»

## Open Q — resolved

| Q | Decision |
|---|----------|
| Q-FORMNO | Title Sổ 07 · hub «HL ATĐB + GP TC» formNo 6 đến T-REN-01 · key giữ |
| Q-STATUS | sổ draft\|active\|closed · VP open\|processing\|resolved\|dismissed · **cấm** tot/tb/kem/hong |
| Q-TABS | 1 slideout · 2 nested tabs · 1 resource · cấm flatten |
| Q-PROJECT | projectMgmtUnit Text optional P1 · khuyến nghị khi có GP · org P2 |
| Q-PERMITDAYS | lưu Integer riêng · UI derive OK |
| Q-PROV | keep_static 5 tỉnh · master P2 |
| Q-ORG | Text P1 · org-unit P2 |
| Q-DMAP | YES — SA row wave này |
| Q-RPT | drill sau typed READY · không block list DoD |

## GAP P1 / DEFER / OUT

| ID | P1 |
|----|-----|
| GAP-SO07-TYPED-01 · PROJECT-01 · ROUTE-01 · TABS-01 · APILEGACY-01 · DMAP-01 | YES |
| GAP-SO07-FORMNO-01 | title YES · hub rename DEFER T-REN-01 |
| GAP-CSDL-ROAD-01 · PROV-01 · CUC-03 | YES |
| GAP-RPT-SRC-CSDL-01 | form READY · report/drill riêng |
| GAP-CSDL-ORG-01 | DEFER P2 |
| GAP-CSDL-XLS-01 | OUT |

## Zones / AC

List A/B/C/D Kind B · Form Kind D Z1–Z3 · Tab A VP · Tab B GPTC+QLDA · map none · Grid AC G-01…G-10 · Form AC F-01…F-10 · LeaveConfirm dirty

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype 2-tab typed · reviewUrl · filter-bar HARD |
| SA | Schema_CsdlSo07 · typed DTO · nested arrays · DOMAIN-MAP |
| TL/Dev | alias page + typed form · reuse BASE |
| QA | Grid+form AC · e2e queued |

## Cấm (compact)

Demo/LS SSOT · ERP.* · Guid IdCode · detail*/col1–3 only · flatten tabs · invent map · runtime row-violations/construction-permits path · yarn build/e2e/start:std ở PO · re-scan demo
