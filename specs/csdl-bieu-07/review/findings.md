# Review — Findings — csdl-bieu-07

> Status: **confirmed** · `2026-09-05T09:56:30.000Z` · task `task_0af14e10` · autoApprove=ON  
> Verdict: **PASS** · `review_confirm=done`

| | |
|--|--|
| Feature | `csdl-bieu-07` |
| Title | CSDL Biểu 07 — Lề / taluy / hàng rào |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `shoulders-fences` |
| contentHashPrior | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| prior QA | `confirmed` · S0/S1/QA-20 PASS · `ok=true` |

## review_confirm

**done** (autoApprove ON) — không `fix_gaps`.

## Summary

FE alias `/csdl-bieu-07` + hub `?resource=shoulders-fences` · Kind D Slideout 2col typed **20** · 3 section (chung / lề / taluy+HR) · BE shell + `Schema_CsdlBieu7` / `rmms_csdl_bieu7` · FenceLengthKm↔FenceLengthM×1000 · SlopeLengthM↔SlopeClearingM · API Asset `csdl-records` · **không** ERP.* · QA E2E PASS · hash prior unchanged → gate hash **skip**.

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| List query `resource=shoulders-fences` | **PASS** | `CsdlBieu07Page` → getList `{ resource, search, province, status, side, fenceKind, roadCode, kmFrom, kmTo, … }` |
| Endpoint Asset-only | **PASS** | `BASE='/asset/csdl-records'` · **không** `ERP.*` |
| side / fenceKind filters | **PASS** | FE draft/apply · BE join `CsdlBieu7` normalize |
| kmFrom/kmTo Line | **PASS** | shell Line filters live (QA live-assert) |
| road-route LKP | **PASS** | SearchInput road field · `ROAD_ROUTE` LKP |
| IdCode `LE-` | **PASS** | BE `ResourceMap[shoulders-fences]=("LE",…)` |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| No ERP / foreign domain invent | **PASS** | FE+BE Asset path only |
| Perm keys | **PASS** | `rmms-asset:csdl-records:read|write` (Auth wire **DEFER**) |
| Soft delete / tenant | **PASS** | `SoftDeleteAsync` · `share_tenant` per SA |
| Secrets in artifacts | **PASS** | none |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Route alias + hub | **PASS** | `index.tsx` `/csdl-bieu-07` · `HUB_PATH` · QA S0/S1 |
| Kind D Slideout 2col | **PASS** | `CsdlBieu07FormSlideout` · `data-form-cols="2"` · form testid |
| Typed 20 / **cấm** detail* only | **PASS** | shoulder/slope/fence typed · **không** detail* |
| Filters Zone B | **PASS** | search/province/status/side/fenceKind/roadCode/km · `LinErpListFilterBar` |
| Leave confirm | **PASS** | `useLeaveConfirm` + `LeaveConfirmModal` |
| Peer Sổ TS deep-link | **PASS** | `PEER_PATH=/so-ts?type=SHOULDER` · **không** merge |
| Create deep-link | **PASS** | `?form=create` · QA-20 PASS |
| FencePanelCount | **omit_p1** | OUT P1 per PO/SA |
| XLS | **OUT** | stub OK per PO |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| DOMAIN-MAP | **PASS** | `csdl-bieu-07` → Asset |
| Entity + migration | **PASS** | `CsdlBieu7Entity` · `20260905094346_Schema_CsdlBieu7` · `rmms_csdl_bieu7` |
| Unit map | **PASS** | `CsdlBieu7FenceLength` km↔m · SlopeLengthM↔SlopeClearingM |
| Normalize LOOKUPs | **PASS** | Sides / ShoulderStructures / FenceKinds |
| UiSchema catalogKind | **PASS** | `CatalogUiSchemaRegistry.ShouldersFences` |
| **cấm** parent *Json | **PASS** | typed child table only |
| CRUD FormMode↔API | **PASS** | list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE |

## QA evidence (reuse — **cấm** re-e2e ở Review)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `3b06ff495fb91dd2` |
| S1 | PASS | `b17a0ea8025752e6` |
| QA-20 | PASS | `54be00e03632f0c6` |

manifest `ok=true` · yarnTypecheck PASS (QA).

## Debt (accepted · không block)

| ID | Sev | Note |
|----|-----|------|
| Auth wire | P2 DEFER | permissions keys · runtime Auth DEFER |
| GAP-CSDL-ORG-01 | P2 | manageUnit Text · SearchInput org later |
| GAP-CSDL-XLS-01 | OUT | import/export sheet |
| GAP-BIEU07-PANEL-01 | P2 | FencePanelCount omit P1 |
| GAP-QA-E2E-PW-01 | P2 | chrome channel fallback after `yarn e2e-qa` hang |
| form-assert hasRoad | P3 OBS | assert `hasRoad=false` · field `csdl-bieu-07-field-road` có trong FE · QA-20 PASS |
| Section grouping | P3 OBS | Taluy+HR gộp 1 section (chung/lề/taluy+HR) · đủ typed fields |
| DB migrate apply | ops | migration shipped · apply env-dependent |

## Hash gate

contentHashPrior unchanged vs data_analy/po → **skip** re-hash · không mở demo HTML.

## Gaps

- **none** → `review_confirm=done`

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-07/review/findings.md` |
| compact | `specs/csdl-bieu-07/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-07/STATUS.md` |
