# Review — Findings — csdl-bieu-03

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON) · task `task_50bbebc7`  
> Prior QA `task_677b9487` **PASS** · Dev `task_8650b573` **done** · contentHash `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` (unchanged — hash skip re-analy)

| | |
|--|--|
| Feature | `csdl-bieu-03` |
| Title | CSDL Biểu 03 — Hầm đường bộ |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `new_page` |
| resource | `road-tunnels` · formNo `03` · columns `42` · IdCode `TN-` |
| verdict | **PASS** |
| review_confirm | **approve** |
| writtenAt | `2026-09-05T09:15:00.000Z` |

## Gate summary

| Gate | Verdict | Notes |
|------|---------|-------|
| QUERY | **PASS** | `api/v1/asset/csdl-records` · BFF proxy · **cấm ERP.*** · filters `tunnelClass`/`tubeCount` join `CsdlBieu3` · search `TunnelName` |
| SEC | **PASS** | soft DELETE `IsActive` · `CompanyCode` + claim check · Auth wire `asset.csdl-records.*` **DEFER** (known) · share_tenant |
| UI-FN | **PASS** | Kind B list + Kind D Slideout 2col sectioned · GPS×6 · tube two_rows Copy · `buildDynamicGridColumns` · LeaveConfirm · peer deep-link only |
| BE-FN | **PASS** | shell + `CsdlBieu3Entity` / `Schema_CsdlBieu3` · `RequireTunnelMeasures` · prefix `TN` · DOMAIN-MAP `csdl-bieu-03`→Asset · stop `detail*` write |

## QUERY

| ID | Check | Result |
|----|-------|--------|
| R-Q-01 | Domain Asset · path `…/asset/csdl-records?resource=road-tunnels` | **PASS** |
| R-Q-02 | **0** `ERP.*` FE/BE for feature | **PASS** |
| R-Q-03 | List filters: province/status/road/km/tunnelClass/tubeCount/search | **PASS** (service + FE filter-bar) |
| R-Q-04 | BFF proxy-only (no invent infra) | **PASS** (dev/sa compact) |
| R-Q-05 | Typed join list map GPS/tube/tunnel fields | **PASS** (`Map` + `CsdlBieu3`) |

## SEC

| ID | Check | Result |
|----|-------|--------|
| R-S-01 | Soft delete (no hard purge) | **PASS** |
| R-S-02 | Tenant/`CompanyCode` on create + list scope | **PASS** |
| R-S-03 | Cross-company Get guarded | **PASS** (`IsCompanyAllowed`) |
| R-S-04 | Auth permission wire full | **DEFER** (documented debt · not blocker) |
| R-S-05 | IdCode `TN-yyyyMMdd-nnnn` · **cấm** Guid as code | **PASS** (`ResourceMap` Prefix=`TN`) |

## UI-FN

| ID | Check | Result |
|----|-------|--------|
| R-U-01 | Route `/csdl-bieu-03` + hub `?resource=road-tunnels` | **PASS** (`index.tsx` · QA S0/S1) |
| R-U-02 | List `LinErpListFilterBar` · dynamic grid · **cấm** `const columns`/`configHint` | **PASS** |
| R-U-03 | Form Slideout sectioned GPS/kết cấu/thoát+PCCC/thiết bị · footer_actions_only | **PASS** (QA-20) |
| R-U-04 | Q-GPS six_numbers · Q-VENT text · Q-TUBE two_rows Copy | **PASS** (`copyTubeFields`) |
| R-U-05 | LeaveConfirm dirty · soft delete alert · peer Sổ 6 deep-link **cấm** merge | **PASS** |
| R-U-06 | E2E evidence S0/S1/QA-20 | **PASS** (manifest `ok=true`) |

## BE-FN

| ID | Check | Result |
|----|-------|--------|
| R-B-01 | `CsdlBieu3Entity` 1:1 · table `rmms_csdl_bieu3` | **PASS** |
| R-B-02 | Create/Update Upsert typed · clear shell `detail*` when typed | **PASS** |
| R-B-03 | `tubeCount>1` ⇒ `tubeIndex` required + range | **PASS** (`RequireTunnelMeasures`) |
| R-B-04 | Migration `20260905085812_Schema_CsdlBieu3` present | **PASS** |
| R-B-05 | DOMAIN-MAP slug `csdl-bieu-03` → Asset | **PASS** (T-DM-01) |

## Align vs prior compact

| Prior | Align |
|-------|-------|
| data_analy / po / design / sa / team_lead | **OK** — 42 cột · GPS/TUBE/VENT/SECTION/ROUTE · Kind B+D · Asset API |
| dev | **OK** — FE page + BE entity/migration · builds PASS |
| qa | **OK** — scenarios PASS · PNG evidence · **cấm** phase=done ở QA (Review owns close) |

## Debt (non-blocking · **không** fix_gaps)

| GAP | Sev | Note |
|-----|-----|------|
| GAP-QA-E2E-PW-01 | P2 | `yarn e2e-qa` hang → chrome channel fallback |
| GAP-CSDL-ORG-01 | P2 | manageUnit SearchInput DEFER |
| GAP-CSDL-XLS-01 | OUT | XLS stub |
| Auth wire | DEFER | `asset.csdl-records.*` |
| Deploy | ops | `dotnet ef database update` Schema_CsdlBieu3 |
| Legacy detail* backfill | optional | not run |

## review_confirm

- **approve** (autoApprove ON) · verdict **PASS** · **không** fix_gaps
- Pipeline step 6 → **confirmed** · feature ready for close (ops deploy riêng)

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-review |
| skillVersion | 2026.08.29.03 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
