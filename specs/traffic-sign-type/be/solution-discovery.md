# Solution discovery — traffic-sign-type

> Status: **confirmed** (`solution_confirm=approve` · Autopilot · roleOnly=sa · task `task_f9f8d4ee`)  
> Domain: **Integration** (DOMAIN-MAP) · **share_a** · **tz_na** · **xco_na**  
> Route: `api/v1/integration/traffic-sign-types` · BFF proxy · **cấm** `api/v1/rmms/*` · **cấm** ERP.*  
> Scaffold: **live** (API + BFF + entity + Master page) — SA chốt FormMode↔API + DOMAIN-MAP slug; **cấm** invent API / pict / mã

| Field | Value |
|-------|-------|
| feature | `traffic-sign-type` |
| packKind | `master` (Kind B flat + Slideout) |
| changeScope | `new_page` |
| status | `confirmed` |
| design_confirm | approve |
| domain_map | **Integration** · slug `traffic-sign-type` (**GAP-TST-DM-01 closed**) |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **share_a** (Type A · no tenant) |
| solution_confirm | **approve** |
| formPattern | Slideout · `data-form-cols=2` · `footer_actions_only` |
| contentHash | `sha256:e3aada6d5b40ee2b06635701491bbf3cca71444f95c42b42bbc1bc9d0f03ddbb` |
| updatedAt | `2026-09-06T02:50:00.000Z` |
| taskId | `task_f9f8d4ee` |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · `/mas/loai-bien-bao` · `mfeStdUrl` `http://localhost:9318/mas/loai-bien-bao` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `Domains/Integration/` · `TrafficSignTypesController` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/TrafficSignTypeDtos.cs` |
| Persistence | `TrafficSignTypeEntity` · table `rmms_traffic_sign_types` |
| Migrations | `Schema_RmmsTrafficSignTypes` + `Schema_TrafficSignTypeOfficialCatalog` — **đã ship** · **cấm** Step 4b @ SA |
| BFF | `TrafficSignTypesBffController` · **proxy only** |
| Seed / import | `data-import/so-hieu-bien-bao/` · CSV + Excel QCVN · `TrafficSignTypeCatalogHandler` · set `gov-vn` · icon **NULL** |
| Consumer | Asset `so-ts-traffic-sign` · SearchInput `catalogKind=traffic-sign-type` |

## Architecture

| Layer | Choice |
|-------|--------|
| Domain prefix | `api/v1/integration` · BFF `web-bff/api/v1/integration` |
| Resource | `/traffic-sign-types` |
| Persist | flat `TrafficSignTypeEntity` · UK `code` (keep case) · `group_code` P/W/R/I/S/KHAC |
| Auth perm | `master.traffic-sign-types.read\|create\|update\|delete` · menu `rmms-master-loai-bien-bao` **ADMIN** |
| Response | `ApiResponse` / paged |
| FE BASE | `/integration/traffic-sign-types` (`src/services/trafficSignType/endpoint.ts`) |

## Implement gates

| Gate | Decision |
|------|----------|
| TZ | **tz_na** (catalog master · no tenant zone) |
| XCO | **xco_na** (shared Type A · no cross-org GET gate) |
| SHARE | **share_a** Type A |

## 2. Field map

| uiField | controlHint | dtoField | dbColumn | notes |
|---------|-------------|----------|----------|-------|
| search | SearchTextInput | — | — | query `search` · mã + nội dung |
| groupCode (filter/form) | Dropdown | GroupCode | `group_code` | init-data `groupCodes` |
| code | Text code | Code | `code` | lock on edit · keep case · create only |
| name | Text | Name | `name` | VN SSOT |
| nameEn | Text | NameEn | `name_en` | no extra translate |
| shape | Text | Shape | `shape` | |
| width | Text | Width | `width` | catalog size ≠ install |
| height | Text | Height | `height` | catalog size ≠ install |
| icon | Text URL/path | Icon | `icon` | NULL default · **cấm** invent pict |
| isActive | Switch | IsActive | `is_active` | soft-delete via false |
| — | — | SortOrder | `sort_order` | server |
| trafficSignTypeCode (consumer) | SearchInput | Code | — | `GET …/search` · peer Asset |

## 3. API catalog

Base API: `api/v1/integration/traffic-sign-types`  
BFF: `web-bff/api/v1/integration/traffic-sign-types/**` proxy-only.

| id | Method | Path | Purpose |
|----|--------|------|---------|
| API-01 | GET | `/` | List/search paged · `search?` `groupCode?` `page` `pageSize` |
| API-02 | GET | `/search` | **SearchInput** consumer (Asset TRAFFIC_SIGN) |
| API-03 | GET | `/init-data` | `groupCodes` Dropdown options |
| API-04 | GET | `/by-code/{code}` | Lookup by mã (import / resolve) |
| API-05 | GET | `/{id}` | Get by Guid |
| API-06 | POST | `/` | Create |
| API-07 | PUT | `/{id}` | Update (**cấm** đổi `code`) |
| API-08 | DELETE | `/{id}` | Soft-delete (`IsActive=false`) |

### FormType pack (`master` / Kind B) — FormMode↔API (REQUIRED)

| Surface | FormMode | Endpoint |
|---------|----------|----------|
| List search/page + filter | — | API-01 GET `/` |
| SearchInput consumer | — | API-02 GET `/search` |
| Dropdown groupCode | create/edit | API-03 GET `/init-data` |
| View / Edit / Copy load | view/edit/copy | API-05 GET `/{id}` |
| Create / Copy save | create/copy | API-06 POST `/` |
| Edit save | edit | API-07 PUT `/{id}` |
| Delete | — | API-08 DELETE `/{id}` |
| By-code resolve | — | API-04 GET `/by-code/{code}` |
| History | — | DEFER (toolbar toast · CommonLib history stub) |
| Leave dirty | — | LeaveConfirmModal (UI only) |

**GAP-SA-FORMTYPE-01:** closed — map above (cite live controller · **cấm** invent endpoints).

### API-02 SearchInput (consumer)

| | |
|--|--|
| controlHint | **SearchInput** — **cấm** free Text |
| catalogKind | `traffic-sign-type` |
| Request | `search` · `page` · `pageSize` · `excludeCode?` |
| Response | `{ code, name, groupCode, icon?, isSelectable }[]` |

## 4. Gaps (chốt)

| ID | Decision |
|----|----------|
| GAP-TST-DM-01 | **closed** — DOMAIN-MAP row `traffic-sign-type` → Integration |
| GAP-TST-FORM-01 | **closed** (PO+Design) — Slideout |
| GAP-TST-ICON-01 | **chốt** — icon NULL · **cấm** invent pict |
| GAP-TST-SEED-01 | **chốt** — seed chỉ CSV/Excel QCVN · **cấm** invent mã |
| History | DEFER stub — không block CRUD |

## Handoff → TL

Tasks (form-type-task-pack master):  
T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 · T-QA-CRUD-01 · T-BFF-01 · T-CTX-01 · T-SEED-01 (verify gov-vn · no invent)  
devSlash=`/agent-dev` · Source BE/UI = run packet paths.  
**Cấm** Step 4b / migration / e2e / yarn build / start:std @ SA · E2E queued `/agent-qa*`.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-06T02:50:00.000Z |
| versionGate | rechecked · prior design/data_analy aligned |
| autoApprove | ON |
| e2eQa | ON (queued `/agent-qa*` only) |
