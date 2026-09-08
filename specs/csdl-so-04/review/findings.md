# Review — Findings — csdl-so-04

| | |
|--|--|
| Feature | `csdl-so-04` |
| Title | CSDL Sổ 04 — Tổng hợp đếm xe |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `traffic-counts` |
| formNo | `04` |
| IdCode | `SO-` |
| status | **confirmed** |
| review_confirm | **approve** (autoApprove ON) |
| verdict | **PASS** |
| taskId | `task_691a1abc` |
| priorQaTaskId | `task_45c3d541` |
| qa_verdict | `PASS` |
| yarnBuild | `PASS` (dev) |
| yarnTypecheck | `PASS` (qa) |
| dotnetBuild | `PASS` (dev) |
| contentHash | `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` |
| headerFingerprint | `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` |
| hashGate | **skip** — unchanged vs data_analy → qa |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| reviewedAt | `2026-09-06T05:45:00.000Z` |
| mfeStdUrl | `http://localhost:9301/csdl-so-04` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=traffic-counts` |
| domain | **Asset** · `api/v1/asset/csdl-records` (+ BFF) |

## Scope

Typed Kind B list + Kind D Slideout Sổ 04 (`traffic-counts`): alias `/csdl-so-04` + hub redirect; 16-class matrix + `totalCars` derived; BE `Schema_CsdlSo04` + unique station+year+quarter → 422; **cấm** TNGT / journal / detail*-only / ERP.* / invent `/api/v1/traffic-counts`.

## Hash gate

| Check | Result |
|-------|--------|
| contentHash vs prior compact (analy→qa) | **match** → skip re-analy |
| headerFingerprint | **match** |
| design_confirm / solution_confirm | `approve` / `approve` (prior) |

## QUERY

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| Q-01 | — | Live bind `…/asset/csdl-records?resource=traffic-counts` · BFF `/asset/csdl-records` · **không** ERP.* · **không** `/api/v1/traffic-counts` | **PASS** |
| Q-02 | — | Filter station/year/quarter/countMethod join `CsdlSo04` · list Map typed fields | **PASS** |
| Q-03 | INFO | Unique app-layer (`EnsureUniqueTrafficCountAsync` + company + IsActive) → `ArgumentException` → 422; DB index `IX_…StationCode_Year_Quarter` **non-unique** (race window ops) | **PASS** · debt P3 |

## SEC

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| S-01 | — | Tenant/`CompanyCode` trên unique + catalog shell · soft delete `IsActive` | **PASS** |
| S-02 | — | BFF proxy only · no invent domain controller | **PASS** |
| S-03 | DEFER | Auth permission wire (dev/qa debt) · không block P1 | **PASS** · DEFER |
| S-04 | — | **cấm** ERP.* — FE/BE spot-check clean | **PASS** |

## UI-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| U-01 | — | Route `csdl-so-04` + hub `TYPED_RESOURCE_ROUTES['traffic-counts']` · title «Sổ 04 — Tổng hợp đếm xe» · **không** TNGT | **PASS** |
| U-02 | — | Kind B filter-bar 1 hàng · SearchText+lookups · **không** nút Tìm · province/status/road/station/year/quarter/countMethod | **PASS** |
| U-03 | — | Kind D Slideout 2col · Z2 header · count matrix class01…16 · totalCars RO derived · LeaveConfirm · testid list/form | **PASS** |
| U-04 | — | QA E2E S0/S1/QA-20 PNG + manifest `ok=true` | **PASS** |
| U-05 | P2 | FE toast unique-422 generic path (dev debt) | **PASS** · debt |
| U-06 | P2 | GAP-QA-E2E-PW-01 chrome fallback | **PASS** · debt |
| U-07 | — | Class Excel overlay pending cite · interim «Hạng xe {nn}» · keys ổn định | **PASS** · pending cite |

## BE-FN

| ID | Sev | Finding | Verdict |
|----|-----|---------|---------|
| B-01 | — | `CsdlSo04Entity` + `rmms_csdl_so04` · `Schema_CsdlSo04` · 1:1 CatalogRecordId | **PASS** |
| B-02 | — | `ApplySo04Classes` → `TotalCars = sum(class*)` server-side · ignore client override intent | **PASS** |
| B-03 | — | Create/Update unique → 422 UnprocessableEntity | **PASS** |
| B-04 | — | DOMAIN-MAP `csdl-so-04` → Asset | **PASS** |
| B-05 | — | **cấm** journal entries / parent *Json / detail*-only path cho traffic-counts | **PASS** |
| B-06 | OPS | Migration apply on target DB (ops) | **PASS** · ops debt |

## Cross-role consistency

| Role | Status | Compact / note |
|------|--------|----------------|
| data_analy → po → design → sa → dev → qa | confirmed | compact exists · hash align |
| team_lead | confirmed (STATUS) | `handoff/team_lead-compact.md` **missing** · `task/csdl-so-04.md` stub — process debt P3 · không block (dev/sa tasks đủ) |

## Blocking

**none**

## Debt (non-blocking)

| ID | Sev | Note |
|----|-----|------|
| REV-DEBT-01 | P3 | DB unique index optional (company+station+year+quarter+IsActive) |
| REV-DEBT-02 | P2 | FE dedicated 422 toast |
| REV-DEBT-03 | P2 | GAP-QA-E2E-PW-01 |
| REV-DEBT-04 | P3 | team_lead compact + task body stub |
| REV-DEBT-05 | — | Class Excel overlay · UiSchema seed · Auth · org P2 · XLS OUT · legacy backfill |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **approve** |
| autoApprove | ON |
| fix_gaps | **none** |
| next | pipeline **done** · **cấm** start role khác trong task này |

## Evidence paths

- implement: `specs/csdl-so-04/implement/csdl-so-04.md`
- qa: `specs/csdl-so-04/qa/scenarios.md` · `qa/screens/manifest.json`
- FE: `Linm.Web.RMMS.Asset/src/pages/CsdlSo04Page/`
- BE: `CsdlSo04Entity` · `Schema_CsdlSo04` · `CsdlCatalogService` · DOMAIN-MAP
- priors: `handoff/{data_analy,po,design,sa,dev,qa}-compact.md`

## Cấm (review)

Implement · e2e/start:std/yarn build · Step 4b/migration · start role khác · dump STATUS full vào chat · ERP.*
