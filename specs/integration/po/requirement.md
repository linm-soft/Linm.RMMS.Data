# PO — integration (Open API và tích hợp)

| Field | Value |
|-------|-------|
| feature | `integration` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **G** system hub + **Kind B** sync/partners catalogs + **Kind D** Import slideout |
| status | `confirmed` (autopilot · task_805cde43) |
| updatedAt | 2026-08-09T16:30:00.000Z |

## 1. Goal

Chỉnh **Open API và tích hợp** từ demo mock (tabs Endpoints/Sync/Partners + Import slideout) → MFE hub parity (erp-form-context Kind G) + CatalogListShell A–D cho Sync jobs / Partners + Import Kind D. Align demo → MFE `Linm.Web.RMMS.Integration` · BE `Linm.RMMS.WebService` domain **Integration**.

**≠** feedback / citizen / partner-unit (master) — slug hub OpenAPI riêng.

## 2. Current → New (edit_page)

| Layer | Current | New (delta) |
|-------|---------|-------------|
| Demo | Kind G hub · Kind D import · localStorage · no BE | Giữ SSOT UX; pack align MFE+BE |
| MFE | Scaffold raw table `/integration` | `LinPageLayout` hub · tabs · `LinCatalogDataGrid` Sync/Partners · Import slideout |
| API client | scaffold `/integration` CRUD stub | `/integration/sync-jobs` · `/partners` · `/endpoints` · `/assets/import` · `/sync/offline-batch` |
| BE | health only | Greenfield sync_jobs + partner_adapters + endpoints catalog (**cấm** ERP.*) |

## 3. Personas / DoD

- Persona: Dev tích hợp · IT khách
- DoD:
  1. Hub tabs Endpoints · Sync · Partners · Guide
  2. Sync list: search + syncType/status filter · row menu Xem log · Retry
  3. Partners list: health · Bật/Tắt · pagination A–D
  4. Import slideout Z1–Z3 · leave-confirm dirty · IdCode `SYNC-YYYYMMDD-NNNN`
  5. Offline-batch contract modal · Swagger stub panel
  6. FE `yarn typecheck` + build PASS · BE Release PASS
  7. 1× `LinPageLayout` — cấm nested CatalogListShell

## 4. CTX / DEM inventory

| Source | Path | Notes |
|--------|------|-------|
| CTX-INT | `docs/context/features/integration.md` | Hub · Import · Sync · Partners |
| DEM-INT | `Demo/.../integration-demo.html` → `integration/integration.html` | 19 actions |
| DI-INT | — | No Excel this pack |

### Sync columns

STT · Mã job · Loại · Partner · Trạng thái · Số bản ghi · Bắt đầu · Kết thúc · Lỗi · actions

### Partner columns

Partner · Loại hệ thống · Auth · Health · Phase · Enabled · actions

### Import fields (*)

code (readonly) · jobStatus · assetType* · region* · route* · section · file* · note

### controlHint (synthetic)

| Field | controlHint |
|-------|-------------|
| endpointSearch | SearchInput |
| phaseFilter | Dropdown |
| jobSearch | SearchInput |
| syncTypeFilter | Dropdown |
| jobStatusFilter | Dropdown |
| assetType / region / route | Dropdown |
| section / note | Text |
| importFile | File |

## 5. Grid AC (REQUIRED · list surfaces)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** trên Sync & Partners |
| AC-G-02 | Search + filters → page=1 |
| AC-G-03 | Row menu Sync: Xem log · Retry · Partners: Bật/Tắt |
| AC-G-04 | `LinCatalogDataGrid` + column resize default ON |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |

## 6. Out of scope

- Public citizen API P3 — DEFER
- Real SAP/ETC webhook runtime — DEFER
- Full Swagger UI host — stub panel P1

## 7. Handoff → Design

- Kind G hub content-only prototype + reviewUrl
- Sync/Partners Kind B A–D · Import Kind D Z1–Z3

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:30:00.000Z |
| versionGate | rechecked |
