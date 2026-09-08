# Review — Findings — csdl-so-01

| | |
|--|--|
| Feature | `csdl-so-01` |
| Title | CSDL Sổ 01 — Nhật ký tuần kiểm |
| Role | `review` · `/agent-review` |
| Status | **done** |
| Verdict | **PASS** |
| review_confirm | **approve** (autoApprove ON) |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `inspection-logs` |
| formNo | `01` |
| IdCode | `SO-` |
| taskId | `task_ae279652` |
| contentHash | `sha256:9b7c5f11adaed6b64404b77225fbdc0a6a4021b39d7a00dc1922c643aff822d3` |
| headerFingerprint | `sha256:4e2c2ee770e209ccf28234cb47c2d32098a6b6f9efb8cc5817b9c8964e64a4da` |
| hashGate | **skip** — unchanged vs data_analy→QA chain |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T01:35:00.000Z` |
| priorQa | **PASS** · S0/S1/QA-20 · manifest `ok=true` |

## Scope

Typed Sổ 01 list+Slideout · API `asset/csdl-records?resource=inspection-logs` · DOMAIN-MAP Asset · **cấm ERP.*** · peer So02.

Evidence: compact priors (data_analy→qa) · implement · FE `CsdlSo01Page/*` · BE `CsdlSo01Entity` + `CsdlCatalogService` · QA screens/manifest · **cấm** yarn build/e2e/start:std ở Review.

## QUERY

| Check | Result | Note |
|-------|--------|------|
| API path | PASS | FE `endpoint.ts` BASE=`/asset/csdl-records` · không ERP.* |
| resource | PASS | `inspection-logs` list/get/create/update/delete |
| BFF | PASS | proxy existing · không invent route |
| Filter bind | PASS | search/province/status/roadCode/fromDate/toDate → getList |
| Period TZ | PASS | BE join `CsdlSo01.PeriodStart/End` · `tz_list_and_form` |
| IdCode | PASS | prefix `SO` + `yyyyMMdd` via `NextCodeAsync` |
| Typed persist | PASS | `rmms_csdl_so01` 1:1 · entries widen · **cấm** parent *Json |
| Lookup | PASS | road-route SearchInput · FileService ids |

**Findings:** none blocking.

## SEC

| Check | Result | Note |
|-------|--------|------|
| Domain | PASS | DOMAIN-MAP `csdl-so-01`→Asset |
| Perm keys | PASS | `rmms-asset:csdl-records:read|write` reuse |
| Soft delete | PASS | confirm + `csdlService.delete` |
| Auth wire | DEFER | stub reuse So02 — accepted debt |
| Tenant | PASS | `share_tenant` · company-scoped codes |
| Input | PASS | BE RequireInspectionLogsHeader · entry req · media max 10 · cond ≥1 nếu repairRequest |

**Findings:** none blocking · Auth DEFER tracked.

## UI-FN

| Check | Result | Note |
|-------|--------|------|
| Route alias | PASS | `/csdl-so-01` · hub redirect `inspection-logs` (QA S1) |
| Kind B list | PASS | A–D+F+H · `buildDynamicGridColumns` + `LinCatalogUiSchemaEditorModal` |
| Filter-bar | PASS | `LinErpListFilterBar` live · SearchText+🔍 · **cấm** nút Tìm riêng |
| Kind D Slideout | PASS | 2col · Z1–Z3 · entries `inline_grid` typed |
| controlHint | PASS | Text/Number/Date/Textarea/SearchInput/Dropdown · media text CSV |
| LeaveConfirm | PASS | `useLeaveConfirm` + modal dirty |
| Actions | PASS | C/E/V/Copy/Del · History reuse |
| QA e2e | PASS | S0/S1/QA-20 PNG · sha16 `e7484d8a51bd8533` / `f28a33f45c2699a5` |

**Findings:** none blocking · FileMulti polish = debt P1 (So02 parity).

## BE-FN

| Check | Result | Note |
|-------|--------|------|
| Entity | PASS | `CsdlSo01Entity` Inspector/Period* |
| Schema | PASS | Migration `20260906010000_Schema_CsdlSo01` artifact |
| DTO/service | PASS | typed header + entries · Create/Update/Get/List |
| Validation | PASS | inspectDate/itemProposal/kmFrom/description · media rules |
| UiSchema | PASS | registry seed `inspection-logs` |
| xco | PASS | `xco_get_only` |
| Migration apply | DEBT | runtime/deploy · **cấm** Step 4b ở Review |

**Findings:** none blocking.

## Debt (accepted · non-blocking)

| ID | Sev | Note |
|----|-----|------|
| FileRef text CSV | P1 | postRepairMediaIds Text · FileMulti polish later |
| Auth wire | DEFER | perms stub |
| GAP-QA-E2E-PW-01 | P2 | chrome channel fallback |
| GAP-QA-ROAD-TESTID | P3 | road testid |
| migration apply | ops | deploy/4b |
| GAP-CSDL-ORG-01 | P2 | org SearchInput |
| GAP-CSDL-XLS-01 | OUT | XLS |

## Gates

| Gate | Result |
|------|--------|
| QUERY | **PASS** |
| SEC | **PASS** |
| UI-FN | **PASS** |
| BE-FN | **PASS** |
| QA prior | **PASS** |
| ERP.* ban | **PASS** |
| hash | skip (unchanged) |

## review_confirm

**approve** · autoApprove ON · **done** · không fix_gaps.

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-so-01/review/findings.md` |
| compact | `specs/csdl-so-01/handoff/review-compact.md` |
| STATUS | `specs/csdl-so-01/STATUS.md` |
| QA evidence | `specs/csdl-so-01/qa/screens/*` |

## Next

Feature pipeline **complete** · debt theo backlog · **cấm** start role khác trong task này.
