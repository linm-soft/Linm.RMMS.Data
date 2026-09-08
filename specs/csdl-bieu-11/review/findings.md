# Review — Findings — csdl-bieu-11

| | |
|--|--|
| Feature | `csdl-bieu-11` |
| Title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| Role | `review` · `/agent-review` |
| TaskId | `task_20e43f26` |
| Status | **confirmed** |
| Verdict | **PASS** |
| review_confirm | **done** (autoApprove ON) |
| packKind | `list` |
| changeScope | `new_page` |
| contentHash | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` · **unchanged** · hash-skip OK |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-05T13:00:00.000Z` |

## Scope reviewed

| Layer | Evidence |
|-------|----------|
| Prior | data_analy→po→design→sa→TL→dev→qa **confirmed** · compact OK · UNCLEAR none |
| FE | `CsdlBieu11Page/*` · route `/csdl-bieu-11` · hub redirect · peer toolbar `/so-ts-lighting` |
| BE | `CsdlBieu11Entity` · `Schema_CsdlBieu11` · `CsdlCatalogService` gridStatus filter · DOMAIN-MAP Asset |
| QA | S0/S1/QA-20 PASS · PNG + manifest `ok=true` · typecheck PASS |
| Build | yarnBuild PASS · yarnTypecheck PASS · dotnetBuild PASS (prior Dev) |

## Gate summary

| Gate | Result |
|------|--------|
| QUERY | **PASS** |
| SEC | **PASS** (Auth DEFER — debt) |
| UI-FN | **PASS** |
| BE-FN | **PASS** |
| Hash | **skip** (unchanged) |
| ERP.* | **PASS** — domain Asset only |
| review_confirm | **done** |

## QUERY

| Check | Result | Note |
|-------|--------|------|
| resource=`lighting-systems` | PASS | FE + BE + hub + UiSchema |
| API `asset/csdl-records` | PASS | **cấm** invent / ERP.* |
| BFF proxy only | PASS | typed fields ride JSON |
| gridStatus filter | PASS | list query + BE join |
| road-route LKP | PASS | SearchInput P1 |
| formNo=11 · IdCode LT- | PASS | create placeholder + BE pattern |
| LED qty allow_zero | PASS | default 0 · parseNonNegInt |

## SEC

| Check | Result | Note |
|-------|--------|------|
| Domain Asset | PASS | DOMAIN-MAP `csdl-bieu-11`→Asset |
| **cấm** ERP.* | PASS | no ERP namespace |
| Auth/perm | DEFER | T-PERM debt · not blocker |
| Soft DELETE | PASS | catalog pattern |
| share_tenant / tz_na / xco_get_only | PASS | SA gates |

## UI-FN

| Check | Result | Note |
|-------|--------|------|
| Alias `/csdl-bieu-11` | PASS | `index.tsx` + hub map |
| Kind B list | PASS | filter-bar · gridStatus/side/road/km |
| Kind D Slideout 2col | PASS | `data-form-cols=2` · LeaveConfirm |
| Typed 24 · 2 section lưới+NLMT | PASS | Z1 shell + Z2 lưới + Z2b solar flat |
| LED 600/240/150/125 | PASS | list subset + form |
| cabinet split | PASS | `cabinetCount` ≠ `solarCabinetCount` |
| solar optional_flat | PASS | section NLMT · **cấm** Solar child |
| Peer toolbar ≠ merge | PASS | `/so-ts-lighting` |
| Empty / title keep_demo | PASS | QA S0 · StandaloneMockTopbar |
| QA e2e S0/S1/QA-20 | PASS | screens + manifest |

## BE-FN

| Check | Result | Note |
|-------|--------|------|
| Schema_CsdlBieu11 1:1 | PASS | `rmms_csdl_bieu11` · migration `20260905124000` |
| shell + typed entity | PASS | **cấm** 2 entity / parent *Json |
| GridLed* / Solar* / Cabinet split | PASS | entity + DTO + Upsert |
| GridStatus normalize | PASS | tot/tb/kem/hong allowlist |
| UiSchema seed | PASS | catalogKind lighting-systems |
| Migration apply env | DEBT | apply DB still open |

## Findings

| ID | Sev | Area | Summary | Disposition |
|----|-----|------|---------|-------------|
| — | — | — | **No P0/P1 blockers** | — |
| GAP-QA-E2E-PW-01 | P2 | QA | `yarn e2e-qa` hang → chrome channel fallback | Carry debt |
| GAP-QA-ROAD-TESTID | P3 | QA | road SearchInput testid gap (peer pattern) | Carry debt |
| DEBT-MIGRATE | P2 | BE | DB migrate apply (env) | Carry · not Review block |
| DEBT-AUTH | P2 | SEC | Auth wire DEFER | Carry |
| DEBT-ORG/XLS | P2/OUT | Scope | org SearchInput P2 · XLS OUT | OUT/DEFER |

## review_confirm

- **done** (autoApprove ON · `task_20e43f26`)
- No fix_gaps — no P0/P1
- Pipeline Review **complete** · qldb chain end for this feature

## Next

| Role | Need |
|------|------|
| — | **end** · no further role in qldb chain |

## Cấm respected

ERP.* · implement · e2e/build/start:std/Step4b @ Review · invent API · Solar child · merge Sổ TS · dump điểm→qty · fix_gaps without P0/P1
