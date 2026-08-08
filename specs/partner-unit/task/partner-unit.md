# Team lead — tasks — partner-unit

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | `master` (Kind B flat + Modal) |
| solution_confirm | **approve** |
| domain_map | **Integration** |
| gates | TZ=`tz_na` · XCO=`xco_na` · SHARE=`share_a` |
| updatedAt | 2026-08-08T12:12:00.000Z |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| `source.routes` | `/master/partner-unit` · Modal form |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Integration** |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Integration/` |
| `source.bff` | `bff/domains/integration/LINM.RMMS.Integration.Bff/` |
| Seed | `docs/context/seed/partner-unit-seed.json` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/partner-unit/ui/prototype/partner-unit-list-prototype.html` |

## Implement HOW

| Topic | Decision |
|-------|----------|
| Wire | Page → `services/partnerUnit/endpoint.ts` → apiClient → BFF → API |
| List | LinPageLayout + CatalogListShell flat · page-hooks |
| Form | Modal local · View readOnly · `/erp-form-context` |
| partnerUnitCode | **SearchInput** → API-02 — **cấm** Text (consumer) |
| partnerKind | Dropdown ← init-data |
| FE BASE | `/integration/partner-units` |

## Task pack

### T-CTX-01
**DoD:** Context + DOMAIN-MAP Integration · API path `api/v1/integration/partner-units`

### T-BE-01
**layer:** api · deps: T-CTX-01  
**DoD:** Entity + DTOs + Service + Controller API-01…07 · share_a · `dotnet build` PASS

### T-BE-02
**layer:** migration Schema · deps: T-BE-01  
**DoD:** `Schema_RmmsPartnerUnits` · UK code · IX partner_kind · seed 13 · build PASS

### T-SEED-01
**layer:** Seed · deps: T-BE-02  
**DoD:** seed in schema migration · JSON SSOT 13 rows

### T-BFF-01
**layer:** bff · deps: T-BE-01  
**DoD:** proxy `web-bff/api/v1/integration/partner-units/**`

### T-PERM-01
**DoD:** codes `master.partner-units.*` documented (stub TODO RequirePermission)

### T-UI-LIST-01
**page:** `/master/partner-unit` · deps: T-BFF-01  
**DoD:** zones A–D · search CI · CatalogListShell · yarn build PASS

### T-UI-FORM-01
**deps:** T-UI-LIST-01  
**DoD:** Modal CRUD · init-data kinds · province · legacyFolder · View readOnly

### T-QA-01
**deps:** T-UI-FORM-01  
**DoD:** `qa/scenarios.md`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.21 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T12:12:00.000Z |
| versionGate | ok |
