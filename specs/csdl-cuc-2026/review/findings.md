# Review — Findings — csdl-cuc-2026

> Status: **confirmed** · task `task_861ea153` · role `review` · packKind `list` · Kind **G** hub  
> Written: `2026-09-07T03:12:00.000Z` · autoApprove ON · `review_confirm=approve`  
> contentHash `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` · **hash skip** (unchanged vs analy→qa)

| | |
|--|--|
| Feature | `csdl-cuc-2026` |
| Title | CSDL Cục — import Excel + hub KPI 16+10 |
| Role | `review` |
| Verdict | **PASS** |
| Lane | `web` |
| mfeStdRoute | `/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |
| Prior | data_analy→po→design→sa→tl→dev→qa **confirmed** |

## Scope checked

- Kind G hub: KPI/catalog **16+10** · Import Excel 16 sheet + skipBridge · Export CSV · alias route
- **Cấm** typed re-queue · hang-muc merge · ERP.* · e2e/build ở role này
- Evidence: compact priors · implement · QA scenarios/S0–S1–QA-20 · FE `CsdlSoSachPage`/`endpoint` · BE controller+excel+BFF

## Hash gate

| Check | Result |
|-------|--------|
| contentHash align analy→qa | **MATCH** · skip demo/context re-scan |
| demoHash / headerFingerprint | **MATCH** priors |

## QUERY

| ID | Severity | Finding | Status |
|----|----------|---------|--------|
| Q-01 | — | List/catalog/export dùng query params typed + service layer · không raw SQL ad-hoc trên controller | **PASS** |
| Q-02 | — | Import sheetMap JSON + resource map validate trong `CsdlCatalogExcelService` | **PASS** |
| Q-03 | P3 | Catalog `search` free-text — OK EF filter; không injection surface mới | **PASS** (note) |

## SEC

| ID | Severity | Finding | Status |
|----|----------|---------|--------|
| S-01 | — | FE `CSDL_PERMS` read/write · toolbar gated | **PASS** |
| S-02 | P2 | API `[RequirePermission]` **stub/TODO** (T-PERM-01 Auth debt) — documented, không regress scope | **ACCEPT** debt |
| S-03 | — | BFF proxy-only · CopyAuthHeaders · RequestSizeLimit 50MB import | **PASS** |
| S-04 | — | **0** ERP.* trên FE hub/import path | **PASS** |
| S-05 | — | Tenant `CompanyCode` theo SA contract (shell create) | **PASS** (cite SA) |

## UI-FN

| ID | Severity | Finding | Status |
|----|----------|---------|--------|
| U-01 | — | Alias `index.tsx` `/csdl-cuc-2026` → `CsdlSoSachPage` ↔ hub live | **PASS** |
| U-02 | — | Zones DES-HUB-A/B/TAB/KPI/FILTER/C · Import modal · QA AC-G-01..10 PASS | **PASS** |
| U-03 | — | Cards `formNo`+title+count · resource key ẩn slug UI | **PASS** |
| U-04 | — | Import: preview/commit + `skipBridge` default true · sheetMap 16 Biểu | **PASS** |
| U-05 | — | Export `getBlob` · empty VN · no mock (QA-CH-01) | **PASS** |
| U-06 | P3 | `StandaloneMockTopbar` / `devRoutes` label còn “12 biểu + 8 sổ” (cosmetic std chrome) | **OPEN** debt |

## BE-FN

| ID | Severity | Finding | Status |
|----|----------|---------|--------|
| B-01 | — | Catalog DTO widen formNo/kind/bieuCount/soCount 16/10 | **PASS** |
| B-02 | — | `POST import/preview` + `POST import` multipart · skipBridge Biểu1 cầu âm | **PASS** |
| B-03 | — | `GET export?resource=` CSV UTF-8 BOM · BFF file pass-through | **PASS** |
| B-04 | P3 | `.xls` binary unsupported → 422 VN (xlsx/csv only) — Dev debt documented | **ACCEPT** debt |
| B-05 | P3 | Typed-required cols may fail commit rows — preview lists errors | **ACCEPT** debt |

## Traceability (T-11)

| Source | Result |
|--------|--------|
| T-01..T-09 Dev | shipped · build PASS (prior) |
| T-10 QA | S0/S1/QA-20 PASS · AC-G-01..10 PASS |
| T-11 Review | this artifact |
| GAP-CSDL-CUC-01/02 · XLS-01 · ROUTE-01 · TYP-01 | **CLOSED** |
| GAP-CUC-TYPED-00 · CUC-11 | enforced · no typed re-queue |
| GAP-QA-E2E-PW-01 | P2 open (QA chrome fallback) |
| GAP-CATALOG-KPI-FIELDS | P3 open (FE fallback 16+10 OK) |

## review_confirm

| Field | Value |
|-------|-------|
| decision | **approve** |
| autoApprove | ON |
| fix_gaps | none blocking |
| handoff | compact `handoff/review-compact.md` |
| next | pipeline complete · **cấm** phase=done override · e2e already QA |

## Debt carry (non-blocking)

1. T-PERM-01 RequirePermission stub (P2)
2. GAP-QA-E2E-PW-01 yarn e2e-qa hang (P2)
3. GAP-CATALOG-KPI-FIELDS (P3)
4. `.xls` + typed-required import edge (P3)
5. Mock topbar/devRoutes label 12+8 (P3)

## DoR

- [x] QUERY/SEC/UI-FN/BE-FN filled
- [x] hash skip documented
- [x] review_confirm approve
- [x] no implement · no e2e · no yarn build
- [x] STATUS → confirmed · handoff compact

<!-- review schemaVersion=1 role=review feature=csdl-cuc-2026 taskId=task_861ea153 verdict=PASS -->
