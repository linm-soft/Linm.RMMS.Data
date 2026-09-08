# Review — Findings — csdl-bieu-06

> Status: **confirmed** · `2026-09-05T07:51:38.660Z` · task `task_3c7fa889` · autoApprove=ON  
> Verdict: **PASS** · `review_confirm=done`

| | |
|--|--|
| Feature | `csdl-bieu-06` |
| Title | CSDL Biểu 06 — Hầm chui DS + hộp KT |
| Role | `review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `underpasses` |
| contentHashPrior | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| prior QA | `confirmed` · S0/S1/QA-20 PASS · `ok=true` |

## review_confirm

**done** (autoApprove ON) — không `fix_gaps`.

## Summary

FE alias `/csdl-bieu-06` + hub `?resource=underpasses` · Kind D Slideout 2col typed 19 · BE shell + `Schema_CsdlBieu6` / `rmms_csdl_bieu6` · API Asset `csdl-records` · **không** ERP.* · QA E2E PASS · hash prior unchanged → gate hash **skip** (không re-hash demo).

## QUERY

| Check | Result | Evidence |
|-------|--------|----------|
| List query `resource=underpasses` | **PASS** | `CsdlBieu06Page` → `csdlService.getList({ resource, search, province, status, underpassKind, roadCode, kmPoint, page, pageSize })` |
| Endpoint Asset-only | **PASS** | `services/csdlSoSach/endpoint.ts` `BASE='/asset/csdl-records'` · **không** `ERP.*` |
| kmPoint Point (no kmTo force) | **PASS** | FE `kmTo: null` on save · BE `kmPoint → KmFrom` equality filter |
| underpassKind filter | **PASS** | FE draft/apply · BE join `CsdlBieu6.UnderpassKind` |
| road-route LKP | **PASS** | `ROAD_ROUTE_LOOKUP_CONFIG` / SearchInput |
| IdCode `HC-` | **PASS** | BE `ResourceMap[underpasses]=("HC",…)` · generate `HC-{day}-{seq}` |

## SEC

| Check | Result | Notes |
|-------|--------|-------|
| No ERP / foreign domain invent | **PASS** | FE+BE Asset path only |
| Perm keys | **PASS** | `rmms-asset:csdl-records:read|write` (wire Auth **DEFER** — known debt) |
| Soft delete / tenant | **PASS** | catalog shell + `share_tenant` per SA |
| Secrets in artifacts | **PASS** | none |

## UI-FN

| Check | Result | Evidence |
|-------|--------|----------|
| Route alias + hub | **PASS** | `index.tsx` `/csdl-bieu-06` · `HUB_PATH` · QA S0/S1 |
| Kind D Slideout 2col | **PASS** | `CsdlBieu06FormSlideout` · `data-form-cols="2"` · `data-testid=rmms-csdl-bieu-06-form-slideout` |
| Typed 19 / **cấm** detail* only | **PASS** | fields: code, province, status, road, kmPoint, manageUnit, notes, underpassKind, apertureM, pipeCount, lengthM, body/portal, designLoad, pavement, lighting, drainage, builtYear + list bootstrap |
| Filters Zone B | **PASS** | search / province / status / underpassKind / roadCode / kmPoint · `LinErpListFilterBar` |
| Leave confirm | **PASS** | `useLeaveConfirm` + `LeaveConfirmModal` |
| Peer Sổ TS deep-link | **PASS** | `PEER_PATH=/so-ts?type=UNDERPASS` · **không** merge form |
| Create deep-link | **PASS** | `?form=create` · QA-20 PASS |
| XLS | **OUT** | stub OK per PO |

## BE-FN

| Check | Result | Evidence |
|-------|--------|----------|
| DOMAIN-MAP | **PASS** | `csdl-bieu-06` → Asset |
| Entity + migration | **PASS** | `CsdlBieu6Entity` · `20260905073931_Schema_CsdlBieu6` · table `rmms_csdl_bieu6` 1:1 CatalogRecordId |
| Typed cols | **PASS** | UnderpassKind, ApertureM, PipeCount?, Body/Portal, LengthM, DesignLoad, PavementInside, Lighting, Drainage, BuiltYear |
| Normalize LOOKUPs | **PASS** | `CsdlBieu6UnderpassKinds` / Structures / DesignLoads / Pavements / YesNo |
| UiSchema catalogKind | **PASS** | `CatalogUiSchemaRegistry.Underpasses` |
| **cấm** parent *Json | **PASS** | typed child table only |
| CRUD FormMode↔API | **PASS** | list/C/E/V/Copy ↔ GET/POST/PUT · soft DELETE |

## QA evidence (reuse — **cấm** re-e2e ở Review)

| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `484f545bf54a542c` |
| S1 | PASS | `12fa392a0d6eb733` |
| QA-20 | PASS | `c3f78b0fd0d0fdc1` |

manifest `ok=true` · yarnTypecheck PASS (QA).

## Debt (accepted · không block)

| ID | Sev | Note |
|----|-----|------|
| Auth wire | P2 DEFER | permissions keys present · runtime Auth DEFER |
| GAP-CSDL-ORG-01 | P2 | manageUnit Text · SearchInput org later |
| GAP-CSDL-XLS-01 | OUT | import/export sheet |
| GAP-QA-E2E-PW-01 | P2 | chrome channel fallback after `yarn e2e-qa` hang |
| DB migrate apply | ops | migration shipped · apply env-dependent |

## Hash gate

contentHashPrior unchanged vs data_analy/po → **skip** re-hash · không mở demo HTML.

## Gaps

- **none** → `review_confirm=done`

## Artifacts

| Kind | Path |
|------|------|
| findings | `specs/csdl-bieu-06/review/findings.md` |
| compact | `specs/csdl-bieu-06/handoff/review-compact.md` |
| STATUS | `specs/csdl-bieu-06/STATUS.md` |
