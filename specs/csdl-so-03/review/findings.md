# Review — Findings — csdl-so-03

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_24fa8ad7`  
> Role: `/agent-review` · packKind=`list` · changeScope=`new_page`  
> contentHashPrior unchanged → design hash **skip** · full review vs Dev+QA evidence

| | |
|--|--|
| Feature | `csdl-so-03` |
| Title | CSDL Sổ 03 — Trực BĐGT + chốt + SC |
| Role | `review` |
| Verdict | **PASS** |
| resource | `duty-incident-logs` |
| retireKeys | `duty-logs` · `checkpoint-duties` |
| formNo | `03` · IdCode `SO-` |
| route_confirm | `route_a` · `/csdl-so-03` + hub |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| qa_verdict | **PASS** · S0/S1/QA-20 |
| yarnBuild / yarnTypecheck / dotnetBuild | **PASS** (prior Dev/QA) |
| contentHash | `sha256:1e8b4b6d6149c1ff2f27010cbf0d6649af9408b05738f416cd58d8c7361fdd9d` |
| headerFingerprint | `sha256:b5b6baa32c1a5ebbf3d8eb2ecaad922d90a291958347aa22ec8fa27096d93997` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T03:08:49.885Z` |

## Gates

| Gate | Result | Notes |
|------|--------|-------|
| QUERY | **PASS** | List filter resource+search+province+status+road+period via `CsdlSo03` join · `EnsureUtc` · SoftDelete · migrate resource SQL |
| SEC | **PASS** | FE `csdlListPermissions` · BE SoftDelete · company context · **cấm ERP.*** · Auth wire **DEFER** (known) |
| UI-FN | **PASS** | Kind B list FULL UiSchema · Kind D Slideout 2col · entries typed · **cấm** dutyKind · LeaveConfirm · hub merge redirect · empty VN |
| BE-FN | **PASS** | `CsdlSo03Entity` + `Schema_CsdlSo03` · widen entries · ResourceMap `SO` · DOMAIN-MAP · validate header/entries |
| Merge/retire | **PASS** | Hub 1 card · ResourceMap drop 2 keys · legacy QS → `/csdl-so-03` · SQL UPDATE resource |
| QA evidence | **PASS** | S0/S1/QA-20 PNG + manifest `ok=true` |
| Hash | **skip** | contentHash/headerFingerprint unchanged vs prior roles |

## Findings

| ID | Sev | Area | Finding | Disposition |
|----|-----|------|---------|-------------|
| F-01 | — | — | No P1 blockers | — |
| N-01 | P2 | SEC | Auth permission bag wire DEFER (local mode always-true) | Accept · prior debt |
| N-02 | P2 | UI | org-unit SearchInput contractor DEFER P2 · Text P1 | Accept |
| N-03 | P3 | QA | GAP-QA-E2E-PW-01 chrome channel · GAP-QA-ROAD-TESTID | Accept · non-blocking |
| N-04 | P3 | BE | Migration apply @ deploy / Step 4b | Ops · not Review scope |
| N-05 | P3 | BE | Migration `Down` collapses all `duty-incident-logs` → `duty-logs` (lossy) | Note only |

## Cross-check (compact priors)

| Prior | Align |
|-------|-------|
| PO | merge+typed · status draft\|active\|closed · **cấm** dutyKind · API asset |
| Design | Kind B+D · filter HARD · 1 hub card · Slideout 2col |
| SA | Schema_CsdlSo03 · tz_list_and_form · xco_get_only · share_tenant |
| TL | route_a · T-* matrix · merge retire |
| Dev | FE `CsdlSo03Page/` · BE entity+service · builds PASS |
| QA | e2e S0/S1/QA-20 PASS · typecheck PASS |

## Code spot-check (paths)

| Layer | Path | Check |
|-------|------|-------|
| FE list | `MFE…/src/pages/CsdlSo03Page/CsdlSo03Page.tsx` | RESOURCE · filters · grid · soft delete · History |
| FE form | `…/CsdlSo03FormSlideout.tsx` | typed header+entries · validate · LeaveConfirm · **no** dutyKind |
| Hub | `…/CsdlSoSachPage.tsx` TYPED_RESOURCE_ROUTES | duty-incident-logs + legacy → `/csdl-so-03` |
| Hub meta | `…/demo/csdlSoSachStore.ts` SO_RESOURCES | **1** card formNo 3 · retire keys absent |
| BE | `CsdlCatalogService` · `CsdlSo03Entity` · migration `20260906030000_Schema_CsdlSo03` | typed CRUD · ResourceMap · SQL migrate |
| DOMAIN-MAP | `docs/DOMAIN-MAP.md` | `csdl-so-03` → Asset |

## review_confirm

**done** (autoApprove ON) · **cấm** fix_gaps · open Q: **none**

## Next

| Role | Need |
|------|------|
| Pipeline | feature review **confirmed** · e2e already PASS @ QA · **không** re-run e2e/start:std ở Review |

## Cấm

ERP.* · invent API · implement · e2e/start:std/build @ Review · Step 4b/migration · start role khác · dutyKind · merge Sổ TS
