# SA — Solution discovery — iot (Danh sách IoT)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_5c19e499`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **form-field-grid** (full 5 cột) · **list-form-quality-gates**  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API ngoài DOMAIN-MAP `iot`  
> **Cấm:** Write MFE/native · ERP.* · yarn build/e2e/start:std · Step 4b/migration ở role SA · dùng health response làm list rows

| Field | Value |
|-------|-------|
| feature | `iot` |
| title | Danh sách IoT |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **B** CatalogListShell A–D+F + Kind **D** full-page form 5 cột) |
| status | `confirmed` |
| design_confirm | approve (`task_6ee25171`) |
| solution_confirm | **approve** (autoApprove=ON · `task_5c19e499`) |
| domain_map | **Iot** · kebab `iot` · API `api/v1/iot` · BFF `web-bff/api/v1/iot` |
| sa_tz_gate | **`tz_na`** |
| sa_xco_gate | **`xco_get_only`** |
| sa_shared_table | **`share_tenant`** |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Iot` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot` |
| mfeStdRoute | `/iot` |
| mfeStdUrl | `http://localhost:9309/iot` |
| peerStdUrl | `http://localhost:9309/iot` |
| liveForm | `/iot/tao-moi` · `/iot/:id` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/iot`** |
| domain | **Iot** |
| controlHint | `specs/_data-analy/features/iot-control-hint.md` |
| realData | `specs/_data-analy/features/iot-real-data.md` |
| design | `specs/iot/ui/design.md` (confirmed) |
| contentHashPrior | `sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_5c19e499` |
| priorTask | `task_6ee25171` (design completed) |
| demo | **N/A** |
| updatedAt | `2026-09-05T04:20:00.000Z` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.05.2` |
| versionGate | `rechecked` (stub draft → first fill) |

## § Delta Current vs New (`new_page` · SA)

| Area | Current (live) | New (Design+analy+PO) | Action |
|------|----------------|----------------------|--------|
| API prefix | `api/v1/iot` · **health only** | **giữ** prefix · thêm resource `/devices` | cite DOMAIN-MAP Iot |
| Health | `IotHealthController` `GET …/health` | **giữ** · **cấm** map → grid | keep |
| Devices CRUD | **thiếu** (GAP-IOT-02) | Entity + Controller + BFF proxy + init-data | **ship** Dev |
| Entity / table | none | `IotDeviceEntity` · `rmms_iot_devices` · flat scalars | Schema_* (Dev · **không** SA Step 4b) |
| IdCode | UNCLEAR | create/import prefix **`IOT-`** (**Q-IOT-CODE-01** chốt) | DefaultCodePrefix |
| type enum | UNCLEAR | `sensor` \| `logger` (**Q-IOT-TYPE-01** PO) · init-data | LOOKUP_STATIC |
| status | online/offline CTX | LOOKUP_STATIC init-data · connectivity scalar | Dropdown |
| routeCode | planned SearchInput | Integration `road-routes` search · **cấm** free-text | validate lookup |
| MFE list/form | scaffold empty (GAP-IOT-01) | CatalogListShell + Full form 5 cols | FE wire khi BE ready |
| Menu | `rmms-iot-iot` ADMIN | **giữ** ADMIN only (GAP-IOT-03) | **cấm** STAFF |
| Delete | — | **soft** (`IsActive=false`) | DELETE soft |
| TZ / XCO / SHARE | — | tz_na · xco_get_only · share_tenant | recorded |

**Không đổi:** DOMAIN-MAP Iot · BFF prefix · **cấm ERP.*** · health ≠ list · packKind=list · map OUT.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Iot` · list `IotListPage` · form `IotFormPage` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| API domain | **Iot** — `api/src/RMMS.Service.Api/Domains/Iot/` |
| Controller (live) | `IotHealthController` · `[Route("api/v1/iot")]` · `GET health` |
| Controller (new) | `IotDevicesController` · `[Route("api/v1/iot/devices")]` |
| Service | extend `IIotService` / `IotService` **hoặc** `IIotDeviceService` (SSOT 1 domain) |
| Models / DTO | `api/domains/iot/LINM.RMMS.Iot.Models/DTOs/` · `IotDeviceDtos.cs` (+ giữ `IotHealthResponse`) |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/IotDeviceEntity.cs` · table `rmms_iot_devices` |
| Migrations | `Schema_RmmsIotDevices` (+ optional `Seed_RmmsIotDevices`) — **flag Dev** · **cấm** Step 4b ở SA |
| BFF | `bff/domains/iot/LINM.RMMS.Iot.Bff/` · extend proxy **`…/iot/devices/**`** (+ giữ health) · **proxy only = yes** |
| FE service | `src/services/iot/endpoint.ts` · `BASE=/iot/devices` (apiClient → BFF) |
| DOMAIN-MAP | `docs/DOMAIN-MAP.md` row **Iot** · `api/v1/iot` |
| Docs | `docs/context/features/iot.md` |
| Catalog peer | Integration `road-routes` search · seed `road-route-seed.json` |

**Cấm** `ERP.Service.*` · invent parallel host · invent prefix ngoài `iot`.

### Route / domain (DOMAIN-MAP)

| Surface | Path |
|---------|------|
| UI list | `/iot` |
| UI form | `/iot/tao-moi` · `/iot/:id` |
| API devices | `api/v1/iot/devices` |
| API health | `api/v1/iot/health` (ops · **không** CRUD) |
| BFF | `web-bff/api/v1/iot/devices/**` · `…/iot/health` |
| FE BASE | `/iot/devices` |
| Lookups | init-data type/status · Integration `road-routes` SearchInput |

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | **Iot** / `iot` · DOMAIN-MAP |
| API host | `Domains/Iot/` · `IotDevicesController` + `IotHealthController` |
| BFF | `bff/domains/iot/…` · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Iot` |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | BE `iot.devices.read\|create\|update\|delete` · FE `rmms-iot:devices:read\|write` |
| Tenant | `TenantEntity` + `X-Company-Id` |
| Persist | flat scalars · **cấm** parent `*Json` |

### SSOT / anti-duplicate

Một resource CRUD devices trong domain Iot. Không clone ERP. Không dual prefix. Health endpoint **tách** — **cấm** reuse health DTO cho grid. Ui-schema optional P2 — P1 có thể FE columns theo inventory (TL chốt).

---

## 2. FormType pack (`packKind=list`)

| Surface | Pattern | FormMode ↔ API |
|---------|---------|----------------|
| List A–D + F + H | Kind B CatalogListShell · `LinErpListFilterBar` | API-01 list |
| Form create | Full page `/iot/tao-moi` · 5 cols | API-04 POST |
| Form edit | Full page `/iot/:id` | API-03 GET + API-05 PUT |
| Form view | Full page `/iot/:id` · view mode | API-03 GET |
| Delete | toolbar / row | API-06 DELETE soft |
| Leave | LeaveConfirmModal | FE only |
| Health | ops / scaffold | API-00 GET health · **≠** list |

Filter query keys (list): `search` · `status` · `type` · `routeCode` · `page` · `pageSize` — shell `LinErpListFilterBar` (**cấm** `filterItems` HOW).

Dev slash: **`/agent-dev`**. Canonical TL ids: T-CTX · T-PERM · T-UI-LIST · T-UI-FORM · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-BE-CRUD · T-BE-SCHEMA · T-BE-INIT · T-BFF · T-QA-CRUD · T-MENU (ADMIN).

---

## 3. Form data inventory (controlHint → API)

| Screen / FormMode | Fields (UI) | Source type | Persist | Notes |
|-------------------|-------------|-------------|---------|-------|
| List filter | search · status · type · routeCode | query | — | SearchTextInput · Dropdown · SearchInput |
| List grid | code · name · type · status · routeCode · km | transaction | Entity | empty «Chưa có thiết bị IoT» |
| Create/Edit | code · name · type · status · routeCode · km | body | Entity | required: code · name · type · status · routeCode |
| View | same | GET | Entity | read-only |

### 3a. controlHint → API shape

| controlHint | SA decision |
|-------------|-------------|
| SearchTextInput `search` | query `search` API-01 (code · name) |
| Dropdown `status` (filter/form) | LOOKUP_STATIC API-02 init-data `statuses[]` · values `online`/`offline` |
| Dropdown `type` (filter/form) | LOOKUP_STATIC API-02 init-data `types[]` · values `sensor`/`logger` |
| SearchInput `routeCode` | Integration `GET …/integration/road-routes/search` · **cấm** free-text · 422 nếu không tồn tại |
| Text/IdCode `code` | scalar · create prefix **`IOT-`** · UK per tenant |
| Text `name` | scalar |
| Number `km` | scalar `decimal?` / `double?` · optional OK nếu PO không required — **SA:** optional (null allowed) |

### 3b. Persist gate

Flat columns trên `IotDeviceEntity`. **Cấm** `DevicesJson` / blob inventory. Soft-delete `IsActive`.

### 3c. Field map

| uiField | dtoField | dbColumn | notes |
|---------|----------|----------|-------|
| code | Code | `code` | UK + tenant · prefix `IOT-` |
| name | Name | `name` | required |
| type | Type | `type` | `sensor`\|`logger` |
| status | Status | `status` | `online`\|`offline` |
| routeCode | RouteCode | `route_code` | FK logical Integration |
| km | Km | `km` | nullable |
| — | IsActive | `is_active` | soft delete |
| — | CompanyId | tenant | TenantEntity |
| — | CreatedAt/UpdatedAt | `created_at`/`updated_at` | UTC |

---

## 4. API catalog

Base devices: `api/v1/iot/devices` · BFF `web-bff/api/v1/iot/devices` · FE `/iot/devices`  
Health: `api/v1/iot/health` (giữ)

### API-00: GET /api/v1/iot/health

| | |
|--|--|
| Purpose | Domain health probe |
| Permission | public/ops stub (live AllowAnonymous) → JWT later |
| Response | `IotHealthResponse` |
| Form surfaces | **none** list/form |
| Migration | none |
| Note | **cấm** bind grid |

### API-01: GET /api/v1/iot/devices

| | |
|--|--|
| Purpose | Paged list + filter |
| Permission | `iot.devices.read` · FE `rmms-iot:devices:read` |
| Tenant | `X-Company-Id` |
| Request | query: `search?` `status?` `type?` `routeCode?` `page` `pageSize` |
| Response | paged `IotDeviceListItemDto[]` + `totalCount` |
| Errors | 403 |
| Form surfaces | S-LIST |
| Field map | §3c |
| Context | `docs/context/features/iot.md` §3 |
| Demo | **N/A** |
| data-import | **N/A** (master seed optional sau) |
| Migration | Schema_RmmsIotDevices |

### API-02: GET /api/v1/iot/devices/init-data

| | |
|--|--|
| Purpose | LOOKUP_STATIC type + status |
| Permission | `iot.devices.read` |
| Response | `{ types: [{value,label}], statuses: [{value,label}] }` |
| Form surfaces | filter Dropdown · form Dropdown |
| **Cấm** | static enum FE-only làm master |

### API-03: GET /api/v1/iot/devices/{id}

| | |
|--|--|
| Purpose | Detail by Guid |
| Permission | `iot.devices.read` |
| Errors | 404 → toast · back `/iot` |
| Form surfaces | edit · view |

### API-04: POST /api/v1/iot/devices

| | |
|--|--|
| Purpose | Create |
| Permission | `iot.devices.create` · FE write |
| Request | body §3c · `code` auto/IdCode `IOT-…` |
| Errors | 409 duplicate code · 422 routeCode/type/status |
| Form surfaces | create |

### API-05: PUT /api/v1/iot/devices/{id}

| | |
|--|--|
| Purpose | Update flat scalars |
| Permission | `iot.devices.update` |
| Request | body §3c (code immutable sau create — TL) |
| Form surfaces | edit |

### API-06: DELETE /api/v1/iot/devices/{id}

| | |
|--|--|
| Purpose | Soft-delete (`IsActive=false`) |
| Permission | `iot.devices.delete` |
| Form surfaces | S-ACT-DELETE |

### Peer lookup (không thuộc Iot controller)

| id | Method | Path | Purpose |
|----|--------|------|---------|
| LKP-01 | GET | `api/v1/integration/road-routes/search` | SearchInput `routeCode` |

BFF: proxy-only passthrough query + body cho mọi API-01…06 (+ health).

---

## 5. Entity / migration (flags — **không** chạy SA)

| Item | Decision |
|------|----------|
| Entity | `IotDeviceEntity : TenantEntity` |
| Table | `rmms_iot_devices` |
| Migration | `Schema_RmmsIotDevices` · indexes: `(company_id, code)` UK · CI search `(code, name)` |
| Seed | optional empty / sample — TL |
| Soft delete | yes |
| Flatten / child tables | **none** |

---

## 6. Implement gates (autoApprove)

| Gate | Decision | Rationale |
|------|----------|-----------|
| **sa_tz_gate** | **`tz_na`** | Form không DateTime filter/period · CreatedAt/UpdatedAt server UTC only |
| **sa_xco_gate** | **`xco_get_only`** | List/get tenant-scoped · write cùng company · không multi-company write |
| **sa_shared_table** | **`share_tenant`** | Bảng tenant-owned devices · không share Type A global |

---

## 7. Gaps resolved / open

| ID | Decision |
|----|----------|
| GAP-IOT-02 | **SA plan** Entity+CRUD+BFF+init-data · Dev implement |
| Q-IOT-CODE-01 | **chốt** prefix **`IOT-`** |
| Q-IOT-TYPE-01 | **PO** `sensor`\|`logger` · SA init-data |
| GAP-IOT-01 | FE CatalogListShell/form — TL/Dev khi BE ready |
| GAP-IOT-03 | Menu **ADMIN only** · **cấm** STAFF |
| open SA-blocking | **none** |

---

## 8. Handoff → TL

- Artifacts: this file · `handoff/sa-compact.md`
- FormMode↔API: Create/Edit/View/List/Delete ↔ API-01…06 · health API-00
- Gates: tz_na · xco_get_only · share_tenant
- Migration flag: Schema_RmmsIotDevices (**Dev** · không SA)
- **Cấm** ERP.* · health≠list · free-text routeCode · FE-only enum

## Confirmed by

ai-autocode-autopilot · `task_5c19e499` · roleOnly=`sa` · `solution_confirm=approve`

---
<!-- Version meta: skillVersion=2026.08.25.02 · workflowVersion=2026.09.01.02 · rulesVersion=2026.09.05.2 · contentHashPrior=sha256:b4425f2faa85d5abfa66660ff6082401389281a346dd70bd77f024d0695a41b3 · versionGate=rechecked · status=confirmed · solution_confirm=approve -->
