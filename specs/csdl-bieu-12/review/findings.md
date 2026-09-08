# Review — Findings — csdl-bieu-12

| | |
|--|--|
| Feature | `csdl-bieu-12` |
| Title | CSDL Biểu 12 — Cây xanh, thảm cỏ |
| Role | `review` · `/agent-review` |
| TaskId | `task_9d0c01b9` |
| Status | **confirmed** |
| Verdict | **PASS** |
| review_confirm | **done** (autoApprove ON) |
| packKind | `list` |
| changeScope | `new_page` |
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` · **unchanged** · hash-skip OK |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-05T13:40:00.000Z` |

## Scope reviewed

| Layer | Evidence |
|-------|----------|
| Prior | data_analy→po→design→sa→TL→dev→qa **confirmed** · compact OK · UNCLEAR none |
| FE | `CsdlBieu12Page/*` · route `/csdl-bieu-12` · hub redirect · **no peer** |
| BE | `CsdlBieu12Entity` · `Schema_CsdlBieu12` · `RequireGreenAssetsAllowEither` · DOMAIN-MAP Asset |
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
| resource=`green-assets` | PASS | FE + BE + hub + UiSchema |
| API `asset/csdl-records` | PASS | **cấm** invent / ERP.* |
| BFF proxy only | PASS | typed fields ride JSON |
| 4 khóm + grassAreaM2 | PASS | list subset + form + DTO |
| road-route LKP | PASS | SearchInput P1 |
| formNo=12 · IdCode CX- | PASS | create placeholder + BE `("CX", …)` |
| allow_either | PASS | FE validate + BE `RequireGreenAssetsAllowEither` |
| side_only | PASS | L/R/C/Both · BE normalize |

## SEC

| Check | Result | Note |
|-------|--------|------|
| Domain Asset | PASS | DOMAIN-MAP `csdl-bieu-12`→Asset |
| **cấm** ERP.* | PASS | no ERP namespace |
| Auth/perm | DEFER | T-PERM debt · not blocker |
| Soft DELETE | PASS | catalog pattern |
| share_tenant / tz_na / xco_get_only | PASS | SA gates |
| **cấm** invent so-ts-green | PASS | peer none |

## UI-FN

| Check | Result | Note |
|-------|--------|------|
| Alias `/csdl-bieu-12` | PASS | `index.tsx` + hub map |
| Kind B list | PASS | filter-bar · side/road/km/province/status |
| Kind D Slideout 2col | PASS | LeaveConfirm · footer_actions_only |
| Typed 15 · 2 section khóm+thảm cỏ | PASS | Z2 clumps + Z2b grass |
| keep_other 4× ≥0 | PASS | oleander/ngau/palm/other |
| allow_either grass | PASS | sum khóm>0 OR grass>0 |
| Peer none | PASS | **cấm** invent so-ts-green |
| Empty / title keep_demo | PASS | QA S0 |
| QA e2e S0/S1/QA-20 | PASS | screens + manifest |

## BE-FN

| Check | Result | Note |
|-------|--------|------|
| Schema_CsdlBieu12 1:1 | PASS | `rmms_csdl_bieu12` · migration `20260905134500` |
| shell + typed entity | PASS | **cấm** 2 entity / parent *Json |
| Oleander*/Ngau*/Palm*/Other*/GrassAreaM2 | PASS | entity + DTO + Upsert |
| AllowEither + non-neg | PASS | create/update gates |
| UiSchema seed | PASS | catalogKind green-assets |
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

- **done** (autoApprove ON · `task_9d0c01b9`)
- No fix_gaps — no P0/P1
- Pipeline Review **complete** · qldb chain end for this feature

## Next

| Role | Need |
|------|------|
| — | **end** · no further role in qldb chain |

## Cấm respected

ERP.* · implement · e2e/build/start:std/Step4b @ Review · invent API · invent so-ts-green · detail*-only · fix_gaps without P0/P1
