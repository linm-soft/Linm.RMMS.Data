# Review — Findings — csdl-so-06

> Status: **confirmed** · `review_confirm=done` · autoApprove ON · task `task_d3c248b6`  
> Role: `/agent-review` · packKind=`list` · changeScope=`new_page`  
> contentHashPrior unchanged → design hash **skip** · full review vs Dev+QA evidence

| | |
|--|--|
| Feature | `csdl-so-06` |
| Title | CSDL Sổ 06 — QL cầu / phiếu KT |
| Role | `review` |
| Verdict | **PASS** |
| resource | `bridge-inspections` |
| formNo | `06` · IdCode `SO-` |
| route_confirm | `route_a` · `/csdl-so-06` + hub |
| domain | **Asset** · `api/v1/asset/csdl-records` |
| qa_verdict | **PASS** · S0/S1/QA-20 |
| yarnBuild / yarnTypecheck / dotnetBuild | **PASS** (prior Dev/QA) |
| contentHash | `sha256:efbccc4800d45e5dfe2b30b8b35773d127554eb6912be14729c0da066e214d8a` |
| headerFingerprint | `sha256:f87218b875c86a0a438994d8dd3abf30f59757fe4f85ddc4e9af0893efb9422f` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-06T04:05:00.000Z` |

## Gates

| Gate | Result | Notes |
|------|--------|-------|
| QUERY | **PASS** | List filter resource+search+province+status+road+bridgeId+period via `CsdlSo06` join · InspectedAt UTC · SoftDelete · **cấm** runtime `/api/v1/bridge-inspections` catalog |
| SEC | **PASS** | FE `csdlListPermissions` · BE SoftDelete · company/share_tenant · **cấm ERP.*** · Auth wire **DEFER** (known) |
| UI-FN | **PASS** | Kind B list FULL UiSchema · Kind D Slideout 2col · fixed-20 seed · priority* nếu damage · photoIds max5 · LeaveConfirm · hub redirect · 0 add/remove |
| BE-FN | **PASS** | `CsdlSo06Entity` + `Schema_CsdlSo06` · widen entries · ResourceMap `SO` · DOMAIN-MAP · `RequireBridgeInspectionsHeader` + priority/photo validate |
| QA evidence | **PASS** | S0/S1/QA-20 PNG + manifest `ok=true` · hub redirect assert |
| Hash | **skip** | contentHash/headerFingerprint unchanged vs prior roles |

## Findings

| ID | Sev | Area | Finding | Disposition |
|----|-----|------|---------|-------------|
| F-01 | — | — | No P1 blockers | — |
| N-01 | P2 | SEC | Auth permission bag wire DEFER (local mode always-true) | Accept · prior debt |
| N-02 | P2 | UI | bridges SearchInput → Text P1 · FileMulti UI DEFER (CSV photoIds) | Accept |
| N-03 | P2 | UI | org-unit SearchInput manageUnit DEFER P2 · Text P1 | Accept |
| N-04 | P3 | QA | GAP-QA-E2E-PW-01 chrome channel · GAP-QA-ROAD-TESTID | Accept · non-blocking |
| N-05 | P3 | BE | Migration apply @ deploy / Step 4b · UiSchema seed DEFER | Ops · not Review scope |
| N-06 | P3 | UI | Hub rename T-REN-01 «Phiếu KT cầu» → Sổ 06 DEFER · XLS OUT | Accept |

## Cross-check (compact priors)

| Prior | Align |
|-------|-------|
| PO | typed T-SO-06 · fixed-20 · status draft\|done\|cancelled · API asset · **cấm** detail*/col1–3 |
| Design | Kind B+D · filter HARD · Slideout 2col · entries fixed-20 |
| SA | Schema_CsdlSo06 · tz_list_and_form · xco_get_only · share_tenant |
| TL | route_a · T-* matrix · FileService photoIds |
| Dev | FE `CsdlSo06Page/` · BE entity+service · builds PASS |
| QA | e2e S0/S1/QA-20 PASS · typecheck PASS |

## Code spot-check (paths)

| Layer | Path | Check |
|-------|------|-------|
| FE list | `MFE…/src/pages/CsdlSo06Page/CsdlSo06Page.tsx` | RESOURCE · filters · grid · soft delete · History |
| FE form | `…/CsdlSo06FormSlideout.tsx` | SO06_PART_SEED×20 · validate priority/photo · LeaveConfirm · **no** add/remove |
| FE API | `…/services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` · **cấm ERP.*** |
| Hub | `…/CsdlSoSachPage.tsx` TYPED_RESOURCE_ROUTES | `bridge-inspections` → `/csdl-so-06` |
| BE | `CsdlCatalogService` · `CsdlSo06Entity` · migration `20260906063000_Schema_CsdlSo06` | typed CRUD · ResourceMap · validate |
| DOMAIN-MAP | `docs/DOMAIN-MAP.md` | `csdl-so-06` → Asset |

## review_confirm

**done** (autoApprove ON) · **cấm** fix_gaps · open Q: **none**

## Next

| Role | Need |
|------|------|
| Pipeline | feature review **confirmed** · e2e already PASS @ QA · **không** re-run e2e/start:std ở Review |

## Cấm

ERP.* · invent API · implement · e2e/start:std/build @ Review · Step 4b/migration · start role khác · detail*-only · add/remove >20 · runtime bridge-inspections path
