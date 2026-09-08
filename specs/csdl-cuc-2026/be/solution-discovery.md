# SA — Solution — csdl-cuc-2026

> Status: **confirmed** · autoApprove ON · task `task_23772fff` · `2026-09-07T02:45:00.000Z`  
> Lane **web** · domain **Asset** · **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*`

| | |
|--|--|
| Feature | `csdl-cuc-2026` |
| Title | CSDL Cục — hub KPI 16+10 + import Excel |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| contentHash | `sha256:8DED37798D5ACEDFA3E106C0308B26152C9DEB7D1977DD7EDF5EB87991834BE2` |
| demoHash | `sha256:C2C9F8194CB104B3202BCAA46A589C9BABA5CF8062AA12E7D0872A9E96EBA7AE` |
| headerFingerprint | `sha256:e9caffb7922b7d81264750b2701a9318aae1f180b145f3f204a4fd5e6b2dcd33` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-cuc-2026` |
| hubLive | `/so-ts/csdl-so-sach` |
| solution_confirm | **approve** |

## 1. Scope chốt

- Kind **G** hub: catalog/KPI **16 biểu + 10 sổ** + Import Excel Cục 16 sheet + Export.
- Alias route `/csdl-cuc-2026` ↔ hub live `CsdlSoSachPage` (cùng shell).
- Typed `csdl-bieu-01…16` / `csdl-so-01…10` **done** — deep-link only · **cấm** re-queue.
- **Cấm** merge hang-muc / Sổ TS row (**GAP-CSDL-CUC-11**).
- Hub **không** Slideout/FormMode Edit generic — FormMode hub = **Catalog/List** + modal **Import**.

## 2. DOMAIN-MAP (**GAP-CUC-DM-01** CLOSED)

| slug | Domain | prefix |
|------|--------|--------|
| `csdl-cuc-2026` | Asset | `asset` |
| `csdl-so-sach` | Asset | `asset` (peer hub — giữ) |

Row `csdl-cuc-2026` = alias cùng Asset hub/import ops với `csdl-so-sach`. Typed children giữ nguyên map.

## 3. BFF vs API

| Layer | Role | Notes |
|-------|------|-------|
| BFF | Proxy-only | `CsdlCatalogRecordsBffController` → forward `api/v1/asset/csdl-records/**` · multipart import **không** parse business ở BFF |
| API Asset | Business | `CsdlCatalogRecordsController` + `ICsdlCatalogService` · widen catalog · import/export handlers |
| Integration | Lookups only | `road-route` · `org-unit` (cite typed child) — **không** gộp entity |

Tenant: header `X-Company-Id` / `CompanyCode` trên mọi call.

## 4. FormMode ↔ API

| UI zone / FormMode | Method | Path (MFE → BFF) | Live? |
|--------------------|--------|------------------|-------|
| Catalog/List · KPI cards | GET | `/web-bff/api/v1/asset/csdl-records/catalog?search=` | **live** — widen seed **16+10** |
| Refresh / deep-link list | GET | `/web-bff/api/v1/asset/csdl-records?resource=` | **live** |
| Card open typed | nav | `/csdl-bieu-*` · `/csdl-so-*` · hoặc `?resource=` | **live** children |
| Import modal · preview | POST | `/web-bff/api/v1/asset/csdl-records/import/preview` | **new** (Dev) · multipart + sheetMap JSON |
| Import modal · commit | POST | `/web-bff/api/v1/asset/csdl-records/import` | **new** (Dev) · `skipBridge` flag · 1 sheet↔1 resource |
| Export | GET | `/web-bff/api/v1/asset/csdl-records/export?resource=` | **new** (Dev) · merge header Excel |
| CRUD shell row | POST/PUT/DELETE | `/web-bff/api/v1/asset/csdl-records[/{id}]` | **live** (typed children prefer own APIs) |

API mirror (no `/web-bff`): `api/v1/asset/csdl-records/...`.

**Cấm** coi path import/export là live cho đến Dev ship — contract SA chốt ở đây (**GAP-CSDL-XLS-01** / **GAP-CUC-API-01**).

### Control → API bind

| key | controlHint | API |
|-----|-------------|-----|
| tab | Tabs `bieu`\|`so` | client filter trên catalog `kind` |
| search | SearchTextInput | `GET …/catalog?search=` |
| resource | chip/QS | `?resource=` + card deep-link |
| kpiBieu / kpiSo | Badge | catalog aggregate count kind=bieu\|so → **16** / **10** |
| formNo / titleVn / count | card Text/Number | catalog DTO · **cấm** slug UI |
| importXls | Button+file | POST import/preview → import |
| sheetMap | table | body `sheets[{sheetName,resource}]` |
| skipBridge | Checkbox | body `skipBridge=true` (Biểu 1 cầu âm) |
| exportXls / refresh | Button | GET export · GET catalog |

## 5. Entity / migration (SA note · **không** chạy Step 4b ở role này)

| Item | Decision |
|------|----------|
| Shell entity | `CsdlCatalogRecordEntity` → `rmms_csdl_catalog_records` |
| Catalog widen | Seed/catalog metadata **16+10** (formNo Cục · giữ resource key) — migration/seed Dev |
| Typed tables | **reuse** child done — import ghi vào typed tables theo `resource` |
| Import staging | Optional `rmms_csdl_import_jobs` (jobId, status, skipCount, errors) — Dev nếu cần async; P0 sync OK |
| IdCode | Hub **không** invent · thuộc typed · **cấm** Guid nghiệp vụ |

## 6. Catalog map SSOT (resource keys — giữ)

Biểu 01–16 / Sổ S1–S10 theo real-data §A (`pavement-sections` … `interchanges` · `inspection-logs` … bình đồ). formNo Cục đổi label **không** đổi key.

## 7. GAP disposition

| ID | Disposition |
|----|-------------|
| GAP-CUC-DM-01 | **CLOSED** — DOMAIN-MAP row `csdl-cuc-2026` → Asset |
| GAP-CUC-API-01 | **CLOSED** — catalog live widen; import/export contract §4 |
| GAP-CSDL-XLS-01 | **OPEN→Dev** — implement POST import(+preview) + GET export + BFF forward multipart |
| GAP-CSDL-CUC-01/02 · ROUTE-01 · TYP-01 | **OPEN→Dev** — FE hub 16+10 · alias route · typography |
| GAP-CSDL-CUC-11 · TYPED-00 | **HARD** — All/TL · no merge · no re-queue typed |

## 8. Leave / cấm

- Re-implement typed Slideout · Q-PEER sync batch · report/mobile.
- ERP.* · infra invent · invent import path as **live** trước Dev.
- yarn build / e2e / start:std / Step 4b ở SA.

## 9. Handoff

| Next | Need |
|------|------|
| TL | Tasks: DOMAIN-MAP done · catalog seed 16+10 · import/export API+BFF · MFE hub alias · **cấm** typed re-queue |
| Dev | Implement theo §4–§5 · AC-G-01…10 |
| QA | After Dev · e2e queued (`e2eQa` ON) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| generatedAt | 2026-09-07T02:45:00.000Z |
| solution_confirm | approve |
| sourceCite | design-compact · po-compact · data_analy-compact · real-data §A–§B · DOMAIN-MAP · CsdlCatalogRecords(Bff)Controller |
