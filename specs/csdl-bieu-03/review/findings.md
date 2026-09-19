# Review — Findings — csdl-bieu-03

> Status: **confirmed** · `review_confirm=approve` (autoApprove ON) · task `task_d08de1b6`  
> Prior QA `task_1df2c910` **PASS** · Dev `task_310ad88c` **done** · contentHash `sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9` (unchanged — hash skip re-analy)

| | |
|--|--|
| Feature | `csdl-bieu-03` |
| Title | CSDL Biểu 03 — Hầm đường bộ · Xuất Excel (T-XLS-S03) |
| Role | `review` · `/agent-review` |
| packKind | `list` |
| changeScope | `edit_page` |
| resource | `road-tunnels` · formNo `03` · columns `42` · IdCode `TN-` |
| verdict | **PASS** |
| review_confirm | **approve** |
| writtenAt | `2026-09-18T02:53:30.000Z` |

## Gate summary

| Gate | Verdict | Notes |
|------|---------|-------|
| QUERY | **PASS** | Export `GET …/asset/csdl-records/export?resource=road-tunnels` · filter QS parity list · filter-all · **cấm ERP.*** · BFF binary proxy |
| SEC | **PASS** | Export GET-only · share_tenant KEEP · Auth wire DEFER (known) · soft-delete CRUD KEEP |
| UI-FN | **PASS** | catalogToolbar Xuất · Import ẩn · **0** export trên filter-bar · filename fallback `Bieu03_HamDuongBo_{yyyyMMdd}.xls` · typed CRUD KEEP |
| BE-FN | **PASS** | OOXML sheet Biểu 3 · 42 headers · GPS×3 · XLS-TUBE 1row/ống · empty=headers-only · no new migration @ XLS |

## QUERY

| ID | Check | Result |
|----|-------|--------|
| R-Q-01 | Domain Asset · export path `…/asset/csdl-records/export?resource=road-tunnels` | **PASS** (API + BFF) |
| R-Q-02 | **0** `ERP.*` FE `CsdlBieu03*` / BE Asset Csdl* | **PASS** |
| R-Q-03 | Export filter QS = list filters (`tunnelClass`/`tubeCount`/search/…) | **PASS** (controller + FE `handleExportExcel`) |
| R-Q-04 | filter-all · ignore page/pageSize · pageSize=cap | **PASS** (`CsdlCatalogExcelService.ExportAsync`) |
| R-Q-05 | BFF binary proxy-only (no invent infra) | **PASS** (dev/sa · BFF `…/export`) |

## SEC

| ID | Check | Result |
|----|-------|--------|
| R-S-01 | Export method GET-only · xco_get_only | **PASS** |
| R-S-02 | Tenant/share_tenant · CompanyCode scope KEEP | **PASS** (via GetListAsync) |
| R-S-03 | Soft delete CRUD KEEP · no hard purge on export | **PASS** |
| R-S-04 | Auth permission wire full | **DEFER** (TODO stub · known debt · not blocker) |
| R-S-05 | IdCode `TN-` · **cấm** Guid-as-code KEEP | **PASS** |

## UI-FN

| ID | Check | Result |
|----|-------|--------|
| R-U-01 | Route `/csdl-bieu-03` + hub `?resource=road-tunnels` KEEP | **PASS** |
| R-U-02 | catalogToolbar `onExportExcel` · testid `…-export-excel-btn` | **PASS** |
| R-U-03 | Import DEFER · **cấm** `onImportExcel`/`canImportExcel` | **PASS** |
| R-U-04 | **0** Xuất trên `LinErpListFilterBar` (GAP-FILTER-BAR-08) | **PASS** |
| R-U-05 | Filename `Bieu03_HamDuongBo_{yyyyMMdd}.xls` · toast fail/empty OK | **PASS** (endpoint fallback + page toast) |
| R-U-06 | Typed CRUD 42col / GPS / tube **KEEP** · **cấm** reopen | **PASS** (QA-20 + compact) |
| R-U-07 | E2E S0/S1/QA-20 evidence | **PASS** (qa-compact sha16) |

## BE-FN

| ID | Check | Result |
|----|-------|--------|
| R-B-01 | Sheet name `Biểu 3` · `Bieu3ExportHeaders` length **42** | **PASS** |
| R-B-02 | GPS start/mid/end × lat/lng (6 fields) | **PASS** |
| R-B-03 | XLS-TUBE: 1 Excel row = 1 ống (`tubeIndex` from row · no merge) | **PASS** |
| R-B-04 | Filename `Bieu03_HamDuongBo_{yyyyMMdd}.xls` · OOXML bytes | **PASS** |
| R-B-05 | Empty filter → headers-only | **PASS** |
| R-B-06 | Migration **none** @ XLS · Schema_CsdlBieu3 KEEP | **PASS** |

## Align vs prior compact

| Prior | Align |
|-------|-------|
| data_analy / po / design / sa / team_lead | **OK** — edit_page T-XLS-S03 · filtered · `.xls` · Import DEFER · GAP-FILTER-BAR-08 |
| dev | **OK** — T-XLS-BE/BFF/FE done · yarn+dotnet PASS · gaps 01/02/04/05 closed |
| qa | **OK** — T-XLS-QA-01 PASS · S0/S1/QA-20 · **cấm** phase=done ở QA |

## Debt (non-blocking · **không** fix_gaps)

| GAP | Sev | Note |
|-----|-----|------|
| GAP-QA-E2E-PW-01 | P2 | playwright resolve → chrome createRequire |
| Auth / T-PERM-01 | P2 | RequirePermission stub on export/CRUD |
| Import Excel | P1 | DEFER · UI ẩn |
| getBlob CD strip | P2 | FE fallback filename when Content-Disposition stripped |
| GAP-CSDL-ORG-01 | P2 | org DEFER (prior) |

## review_confirm

**approve** (autoApprove ON) · phase=`done` · next pipeline closed for edit_page Wave 1 T-XLS-S03.
