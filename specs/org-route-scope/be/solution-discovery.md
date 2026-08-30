# SA — Solution discovery — org-route-scope (Phân khu lý trình · zone km)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_0c95c02f`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **shared-master-catalog** · **master-catalog-no-demo** · **form-type-task-pack** (`master`)  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · controlHint + real-data §B · prototype + reviewUrl  
> **Cấm:** Write MFE/native · invent API song song live · ERP.* · `api/v1/rmms/*` · re-scan DEM · yarn build/e2e/start:std · Step 4b/migration ở role SA · invent-seed dump (**GOV-IMP-01/03**)

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| title | Phân khu lý trình (zone km) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`master`** (Kind B · Modal form + nested đoạn) |
| Feature Kind | **B** |
| status | `confirmed` |
| design_confirm | approve |
| solution_confirm | **approve** (autoApprove=ON) |
| domain_map | **Integration** (`D1` · DOMAIN-MAP row patched) |
| sa_tz_gate | **tz_yes** (effectiveFrom/To · filter effectiveAt → UTC) |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **share_a** (Type A · assignment + segment) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Master` |
| demo | **N/A** (`master-catalog-no-demo.md`) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdRoute | **`/mas/phan-khu`** (SA **chốt**) |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` · `/mas/tuyen-duong` · `/mas/doi-tac` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/integration`** |
| domain | **Integration** |
| resource | **`org-route-scopes`** |
| controlHint | `specs/_data-analy/features/org-route-scope-control-hint.md` |
| realData | `specs/_data-analy/features/org-route-scope-real-data.md` |
| design | `specs/org-route-scope/ui/design.md` (confirmed) |
| contentHash | `sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc` |
| headerFingerprint | `sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent control |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_0c95c02f` |
| priorTask | design `task_4126a205` · po `task_70c1a441` · analy `task_8a74dc46` |
| updatedAt | `2026-08-30T11:35:00.000Z` |
| versionGate | `rechecked` |

## § Delta Current vs New (`new_page`)

| Area | Current (live 2026-08-30) | New (this SA) | Action |
|------|---------------------------|---------------|--------|
| Zone page MFE | **0** `/mas/phan-khu` | Kind B list + Modal gán + nested đoạn | Dev T-UI-* |
| Zone API / entity | **0** · DOMAIN-MAP thiếu | Integration `org-route-scopes` + segments · Schema pair | DOMAIN-MAP ✅ · Dev T-BE + Step 4b |
| Peer lookups | org-unit / road-route / partner-unit **live** | **giữ** cite — **cấm** invent peer path | cite |
| Seed gán | dump gap-no-source | **0** invent-seed · Schema empty | GAP-ORS-01 |
| Km catalog RoadRoute | **0** KmFrom/KmTo cột | **P0 km trên assignment only** · catalog cột = **defer P1** | GAP-ORS-04 |
| Overlap | — | validation 422 cùng tuyến + cửa sổ HL | GAP-ORS-08 |
| SearchInput org mix Sở | GAP-ORS-UI-01 live | peer fix P1 — **OOS** deep CRUD this pack | note |

**Không đổi:** peer Kind B CRUD live · seed 60 DRVN · Integration peer prefixes · leave-confirm · toast · DEM skip · **cấm** Slideout hồ sơ lớn · **cấm** `pavement-section` làm đoạn quản lý.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · route **`/mas/phan-khu`** (chốt) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` |
| API domain | **`Integration`** — `api/src/RMMS.Service.Api/Domains/Integration/` |
| Controllers | `OrgRouteScopesController` (+ nested segments) |
| Models / DTO | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` · entities mới |
| Migrations | `api/shared/RMMS.Service.Migrations/` — `Schema_RmmsOrgRouteScopes` (+ Designer) · **không** Seed invent |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/` · **proxy only = yes** |
| DOMAIN-MAP | `docs/DOMAIN-MAP.md` · slug `org-route-scope` → Integration (**patched**) |
| Docs / peers | CTX `org-route-scope.md` · `20-ORG-STRUCTURE-DRVN.md` · LRS §6 · peers org-unit / road-route / partner-unit |
| Peer FE cite | `src/services/{orgUnit,roadRoute,partnerUnit}/endpoint.ts` **live** |

**Cấm** `ERP.Service.*` · `ERP.Master.*` · `api/v1/rmms/*`.

### Route / domain (chốt)

| | Choice |
|--|--------|
| DOMAIN-MAP | slug **`org-route-scope`** → domain **Integration** |
| Domain prefix | `api/v1/integration` · BFF `web-bff/api/v1/integration` |
| Resource | **`/org-route-scopes`** → full `api/v1/integration/org-route-scopes` |
| Child | `/org-route-scopes/{id}/segments` |
| UI route | **`/mas/phan-khu`** (khớp peer `/mas/*` · **không** `/master/*`) |
| FE BASE (Dev) | `/integration/org-route-scopes` (mirror peers) |
| Rationale | Cùng domain Integration với master catalogs · không domain 16th |

**Confirmed `domain_map=D1`:** Integration · DOMAIN-MAP row `org-route-scope` · UI `/mas/phan-khu`.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | **Integration** / `integration` |
| API host | `Domains/Integration/` · `OrgRouteScopesController` |
| BFF | `…Integration.Bff/` · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Master` · ui_repo_confirm |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | `master.org-route-scopes.read\|create\|update\|delete\|approve` |
| Persist | flat parent `OrgRouteScopeEntity` + child `OrgRouteScopeSegmentEntity` · **cấm** `SegmentsJson` / parent blob |
| Out of pack | reopen peer CRUD · UserRoute/ContractRoute entity · consumer cascade deep CRUD · map canvas · Excel wizard · ERP fork |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | SearchInput · LinErpListFilterBar · LinCatalog* · LeaveConfirmModal · LinCatalogHistoryModal — **cấm** local Lin* clone |
| HTTP | `apiClient` SSOT | re-export only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Auth | Authentication + `[RequirePermission]` | codes Auth |
| Persist | `no-parent-json-field` | child table FK — **cấm** JSON lines |
| Shared | `ISharedMasterCatalogEntity` / SharedMasterCatalog | Type A |
| BFF | proxy only | no business logic |
| Config | CatalogUiSchemaRegistry + seed `org-route-scope` | FULL — **cấm** `configHint` / Zone F-only modal |
| Lookups | peer Integration paths **live** | **cấm** free-text master · **cấm** mix partner vào org tree |

## Implement gates (confirm) — RECORDED

> Matrix: Kind B **dm shared** · master catalog zone assignment.  
> autoApprove=ON → tự confirm.

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| **TZ** | **yes** (`tz_yes`) | effectiveFrom · effectiveTo · filter `effectiveAt` | `/review-timezone-implement` | store/compare **UTC** timestamptz · History audit UTC |
| **XCO** | **n/a** (`xco_na`) | Shared Scope — không tenant filter | `/implement-view-cross-company` | GET/{id} global shared · vẫn gửi `X-Company-Id` (audit) |
| **SHARE** | **Type A** (`share_a`) | `OrgRouteScopeEntity` · `OrgRouteScopeSegmentEntity` | `/implement-shared-table` | Master assignment dùng chung toàn RMMS |

AskQuestion (autoApprove recorded): `domain_map=D1` · `sa_tz_gate=tz_yes` · `sa_xco_gate=xco_na` · `sa_shared_table=share_a` · `2026-08-30T11:35:00.000Z`.  
`solution_confirm=approve` · cùng timestamp.

---

## 2. Form data analysis (REQUIRED · controlHint / Design chốt)

> Typography: label **13** · input D14/M16 (**GAP-TYP-01**).  
> **Cấm** đổi SearchInput → Text/Dropdown free khi controlHint = SearchInput master.

### 2a. Screens / FormMode

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| S-LIST filter | search · zoneOrgCode (tabs) · routeCode · isActive · effectiveAt? · page · pageSize | query | — |
| S-LIST grid | Khu · Tuyến · Km từ–đến · HL từ–đến · Trạng thái | master | `OrgRouteScopeEntity` |
| S-FORM create/edit/copy | zoneOrgCode* · routeCode* · kmFrom* · kmTo* · effectiveFrom* · effectiveTo* · isActive | master | `OrgRouteScopeEntity` |
| S-FORM view | same · readOnly | master | `OrgRouteScopeEntity` |
| S-SEG-CHILD | parentAssignmentId · kmFrom* · kmTo* · assigneeKind* · assigneeCode* | master child | `OrgRouteScopeSegmentEntity` |
| Lookups | org-unit / road-route / partner-unit | peer **live** | cite |
| History | stub toolbar | — | DEFER invent History path |

### 2b. Field map — zone assignment (parent)

| uiField | Label VN | Control | dtoField | dbColumn | Notes |
|---------|----------|---------|----------|----------|-------|
| zoneOrgCode | Khu QLĐB | **SearchInput** tree | ZoneOrgCode | `zone_org_code` | * · org-unit · leaf `REG-I`…`REG-IV` — **cấm** node nhóm `REG` |
| routeCode | Tuyến chính | **SearchInput** | RouteCode | `route_code` | * · road-route · ưu tiên QUOC_LO/HCM/CAO_TOC — **cấm** `KM0+000-*` |
| kmFrom | Km từ | Number LRS | KmFrom | `km_from` | * · decimal ≥ 0 |
| kmTo | Km đến | Number LRS | KmTo | `km_to` | * · kmTo > kmFrom |
| effectiveFrom | Hiệu lực từ | Date/Datetime UTC | EffectiveFrom | `effective_from` | * · timestamptz |
| effectiveTo | Hiệu lực đến | Date/Datetime UTC | EffectiveTo | `effective_to` | * · ≥ effectiveFrom |
| isActive | Hiệu lực | Switch | IsActive | `is_active` | default true · soft-delete |
| — | — | — | Id | `id` | Guid PK |
| — | — | — | CreatedAt/UpdatedAt | UTC | audit |

**UK business:** unique `(zone_org_code, route_code, km_from, km_to, effective_from)` trên bản ghi active (hoặc toàn bảng + soft via is_active rule Dev).

### 2c. Field map — đoạn child

| uiField | Label VN | Control | dtoField | dbColumn | Notes |
|---------|----------|---------|----------|----------|-------|
| parentAssignmentId | Gán zone cha | hidden | ParentAssignmentId | `parent_assignment_id` | * · FK → parent Id |
| kmFrom | Km đoạn từ | Number | KmFrom | `km_from` | * · ⊆ parent km |
| kmTo | Km đoạn đến | Number | KmTo | `km_to` | * · ⊆ parent · kmTo > kmFrom |
| assigneeKind | Loại đơn vị | Dropdown | AssigneeKind | `assignee_kind` | * · LOOKUP `VP` · `SU` · `PARTNER` |
| assigneeCode | Đơn vị | **SearchInput** | AssigneeCode | `assignee_code` | * · org-unit (VP/SU) **hoặc** partner-unit — **cấm** mix Sở vào org tree |
| isActive | Hiệu lực | Switch | IsActive | `is_active` | soft |
| — | — | — | Id · CreatedAt/UpdatedAt | | |

**Cấm** parent `SegmentsJson`.

### 2d. List filter query keys

| key | Control | Notes |
|-----|---------|-------|
| search | SearchTextInput | mã tuyến · zone code · **cụm phải** với 🔍 |
| zoneOrgCode | Tabs REG-I…IV (+ Tất cả) | filter list — **không** tree CRUD OrgUnit trên page |
| routeCode | SearchInput | road-route peer |
| isActive | Dropdown | Tất cả / Đang / Ngừng |
| effectiveAt | Date (P1) | cửa sổ chứa thời điểm — TZ UTC |
| page · pageSize | pager | 50/100/200/500 |

UI filter = **`LinErpListFilterBar`** (1 hàng wrap) — **cấm** nút Tìm riêng · **cấm** `ErpListHeaderFilters`.

### 2e. Peer lookup bind (cite live · real-data §B1)

| uiField | catalogKind | GET (live) | sameMfe |
|---------|-------------|------------|---------|
| zoneOrgCode | org-unit | `GET …/org-units/search?kind=REG` · `/tree` | cite peer |
| routeCode | road-route | `GET …/road-routes/search` | cite peer |
| assigneeCode VP/SU | org-unit | `GET …/org-units/search` | cite |
| assigneeCode PARTNER | partner-unit | `GET …/partner-units/search` | cite · **tách** |

Prefix peers: `web-bff/api/v1/integration/{org-units,road-routes,partner-units}`.

---

## 3. API catalog

Base: `api/v1/integration/org-route-scopes` · BFF mirror `web-bff/api/v1/integration/org-route-scopes`.  
**Chốt** resource name — closes **GAP-ORS-API-01**.

### API-01: GET `/api/v1/integration/org-route-scopes`

| | |
|--|--|
| Purpose | List/search paged Zone C + D |
| Permission | `master.org-route-scopes.read` |
| Tenant | Shared — **skip** company filter · gửi `X-Company-Id` audit |
| Request | query: `search?` · `zoneOrgCode?` · `routeCode?` · `isActive?` · `effectiveAt?` · `page` · `pageSize` |
| Response | `{ items: OrgRouteScopeDto[], totalCount, page, pageSize, totalPages }` |
| Errors | 401 · 403 · toast |
| Form surfaces | S-LIST |
| gates.tz | **yes** (`effectiveAt`) |
| gates.xco | n/a |
| gates.shared | share_a |
| Context | `features/org-route-scope.md` |
| Demo HTML | **N/A** · prototype UX only |
| data-import | **none** — GAP-ORS-01 |
| Migration | Schema_RmmsOrgRouteScopes |

### API-02: GET `/api/v1/integration/org-route-scopes/search`

| | |
|--|--|
| Purpose | **SearchInput** consumer LRS bước 2 (zone trên tuyến) + filter |
| Permission | `master.org-route-scopes.read` |
| Request | `search`/`q` · `routeCode?` · `zoneOrgCode?` · `effectiveAt?` · `take`/`page`/`pageSize` |
| Response | `{ items: [{ id, zoneOrgCode, routeCode, kmFrom, kmTo, label, isSelectable }] }` |
| Form surfaces | consumer zoneOnRoute · form copy helpers |
| controlHint | **SearchInput** — **cấm** free Text |
| gates | tz_yes · share_a |

### API-03: GET `/api/v1/integration/org-route-scopes/init-data`

| | |
|--|--|
| Purpose | LOOKUP assigneeKind + labels VN · optional zone tab codes |
| Permission | `master.org-route-scopes.read` |
| Response | `{ assigneeKinds: [{ value, label }], zoneCodes?: [{ value, label }] }` |
| Form surfaces | S-SEG-CHILD Dropdown · tabs |

### API-04: GET `/api/v1/integration/org-route-scopes/{id}`

| | |
|--|--|
| Purpose | View / Edit / Copy load (+ optional segments summary) |
| Permission | `master.org-route-scopes.read` |
| Request | path `id` Guid |
| Response | `OrgRouteScopeDto` (+ `segments[]` optional on detail) |
| Errors | 404 |
| Form surfaces | view · edit · copy |
| gates.xco | n/a · shared |
| gates.shared | share_a |

### API-05: POST `/api/v1/integration/org-route-scopes`

| | |
|--|--|
| Purpose | Create dòng gán |
| Permission | `master.org-route-scopes.create` |
| Request | body: zoneOrgCode* · routeCode* · kmFrom* · kmTo* · effectiveFrom* · effectiveTo* · isActive? |
| Response | 201 `OrgRouteScopeDto` |
| Errors | 409 unique · **422 overlap** (GAP-ORS-08) · 422 zone not REG leaf · 422 route invalid/KM* · 422 km/HL |
| Form surfaces | Modal create/copy |
| gates.tz | **yes** |
| Migration | UK + overlap validation service |

### API-06: PUT `/api/v1/integration/org-route-scopes/{id}`

| | |
|--|--|
| Purpose | Update |
| Permission | `master.org-route-scopes.update` |
| Errors | 404 · 409 · 422 overlap / km / HL · 422 child out-of-range nếu thu hẹp km |
| Form surfaces | Modal edit |
| gates.tz | **yes** |

### API-07: DELETE `/api/v1/integration/org-route-scopes/{id}`

| | |
|--|--|
| Purpose | Soft-delete (`is_active=false`) · cascade soft segments |
| Permission | `master.org-route-scopes.delete` |
| Form surfaces | row menu · confirm Modal |
| Errors | 404 · 409 in-use (consumer P1) |

### API-08: GET `/api/v1/integration/org-route-scopes/{id}/segments`

| | |
|--|--|
| Purpose | Nested đoạn list (tab Modal) |
| Permission | `master.org-route-scopes.read` |
| Response | `{ items: OrgRouteScopeSegmentDto[] }` |
| Form surfaces | S-SEG-CHILD |

### API-09: POST `/api/v1/integration/org-route-scopes/{id}/segments`

| | |
|--|--|
| Purpose | Create đoạn ⊆ parent |
| Permission | `master.org-route-scopes.create` / `.update` |
| Request | kmFrom* · kmTo* · assigneeKind* · assigneeCode* · isActive? |
| Errors | 422 not ⊆ parent · 422 segment overlap cùng parent · 422 assigneeKind/catalog mismatch |
| Form surfaces | tab Đoạn create |

### API-10: PUT `/api/v1/integration/org-route-scopes/{id}/segments/{segmentId}` · DELETE

| | |
|--|--|
| Purpose | Update · soft-delete đoạn |
| Permission | update / delete |
| Form surfaces | tab Đoạn edit/delete |

### API-11 (consumer P1 note): GET search segments

| | |
|--|--|
| Purpose | SearchInput bước 3 `segmentOnZone` |
| Path | `GET …/org-route-scopes/{id}/segments/search` **hoặc** query `parentAssignmentId` trên list segments |
| Note | P1 consumer — pack này ship nested CRUD tab; consumer deep wire **OUT** deep CRUD |

### FormType pack (`master` / Kind B) — REQUIRED

| Surface | FormMode | Endpoint |
|---------|----------|----------|
| List search/page | — | API-01 GET `/` |
| SearchInput zone (consumer) | filter | API-02 GET `/search` |
| Dropdown assigneeKind | create/edit | API-03 GET `/init-data` |
| View / Edit / Copy load | view/edit/copy | API-04 GET `/{id}` |
| Create / Copy save | create/copy | API-05 POST `/` |
| Edit save | edit | API-06 PUT `/{id}` |
| Delete | — | API-07 DELETE `/{id}` |
| Segments list | nested | API-08 GET `/{id}/segments` |
| Segment C/E/D | nested | API-09/10 |
| Peer SearchInput zone/route/assignee | create/edit | peer live §2e |
| History | — | DEFER stub `LinCatalogHistoryModal` |
| UI schema config | Zone F | Integration catalogs ui-schema · `catalogKind=org-route-scope` |

**GAP-SA-FORMTYPE-01:** closed — FormMode↔API map above.

---

## 4. Entity / migration

| | |
|--|--|
| Parent entity | `OrgRouteScopeEntity` : **shared** Type A |
| Parent table | `rmms_org_route_scopes` |
| Child entity | `OrgRouteScopeSegmentEntity` : **shared** Type A |
| Child table | `rmms_org_route_scope_segments` |
| Schema | **`Schema_RmmsOrgRouteScopes`** — pair `.cs` + `.Designer.cs` (EF CLI) — columns §2 · UK parent · IX `(route_code, is_active)` · IX `(zone_org_code, is_active)` · IX child `parent_assignment_id` |
| Seed | **none** invent — **cấm** Seed từ dump / `manage_unit` Sở (**GAP-ORS-01** · **GOV-IMP-01/03**) · empty table OK · admin config tay / file quản trị sau |
| EF gate | CLI `dotnet ef migrations add` — **cấm** hand-write only · **cấm** chạy migration ở role SA (Step 4b = Dev) |
| FK semantic | `zone_org_code` → `rmms_org_units.code` (REG leaf) · `route_code` → `rmms_road_routes.code` — enforce ở service (peer pattern) |
| **Cấm** | nhét km vào `OrgUnit` · thêm bắt buộc KmFrom/KmTo lên `RoadRoute` P0 |

### Overlap rule (**GAP-ORS-08** chốt)

Cùng `route_code`, hai bản ghi **active** (`is_active=true`) có khoảng km giao nhau **và** cửa sổ `[effectiveFrom, effectiveTo]` giao nhau → **422** (không silent). Soft-deleted **không** tham gia.  
Đoạn: cùng `parent_assignment_id`, active, km overlap → **422**. Đoạn phải `parent.kmFrom ≤ seg.kmFrom < seg.kmTo ≤ parent.kmTo`.

### GAP-ORS-04 chốt

| Decision | Value |
|----------|-------|
| P0 | Km **chỉ** trên assignment (+ đoạn child) |
| RoadRoute catalog KmFrom/KmTo cột | **defer P1** — không Schema RoadRoute trong pack này |
| Extent check | optional soft validate khi catalog có extent sau P1 |

---

## 5. Gaps chốt (SA)

| ID | Severity | Decision |
|----|----------|----------|
| **GAP-ORS-01** | P0 | Nguồn gán = config tay / file quản trị · **0** invent-seed · empty OK |
| **GAP-ORS-03** | P0 | Bảng `rmms_org_route_scopes` (+ segments) — **không** nhét km vào OrgUnit |
| **GAP-ORS-API-01** | P0 | **Chốt** path `api/v1/integration/org-route-scopes` (+ nested `/segments`) |
| **GAP-ORS-DM-01** | P0 | **Chốt** DOMAIN-MAP row `org-route-scope` → Integration (patched) |
| **GAP-ORS-04** | P1 | Km trên assignment P0 · cột catalog RoadRoute = **defer P1** |
| **GAP-ORS-08** | P2→P0 validation | Overlap cùng tuyến + HL → **422** (rule §4) |
| **GAP-ORS-UI-01** | P0 peer | org SearchInput DRVN-only · partner tách — T-UI peer note · **không** reopen org-unit CRUD pack |
| **GAP-ORS-05** | P1 | Search route filter exclude `KM0+000-*` / NHANH/TRANH/GOM làm tuyến chính |
| **GAP-ORS-06** | P1 | Đoạn quản lý ≠ `pavement-section` — giữ |
| **GAP-ORS-07** | P1 | UserRoute/ContractRoute — **OOS** pack · peer login |
| Route UI | — | **`/mas/phan-khu`** chốt |

Empty/fail: empty copy VN · toast — **cấm** mock seed che API · API chưa migrate → toast «chưa cấu hình».  
Leave/alert: dirty → **LeaveConfirmModal** · xóa → **useAlert/Modal** — WHAT only.

---

## 6. FormType pack — task ids gợi ý TL (WHAT · không HOW)

`packKind=master` · `devSlash=/agent-dev` · deps T-BE/Schema → T-UI.

| Task id | Owner | Scope |
|---------|-------|-------|
| T-CTX-01 | Dev/docs | Sync CTX checklist SA done · cite DOMAIN-MAP |
| T-DM-01 | Dev/docs | Verify DOMAIN-MAP row `org-route-scope` |
| T-BE-SCHEMA-01 | Dev | EF `Schema_RmmsOrgRouteScopes` pair · entities + DbSet · **Step 4b** |
| T-BE-CRUD-01 | Dev | OrgRouteScopesController API-01…07 + overlap validation |
| T-BE-SEG-01 | Dev | Nested segments API-08…10 |
| T-BE-INIT-01 | Dev | init-data assigneeKinds |
| T-BE-SEARCH-01 | Dev | `/search` SearchInput + routeKind filter exclude KM* |
| T-BE-UISCHEMA-01 | Dev | catalogKind `org-route-scope` registry+seed |
| T-BFF-01 | Dev | `OrgRouteScopesBffController` proxy-only |
| T-PERM-01 | Dev | `master.org-route-scopes.*` |
| T-SEED-01 | Dev | **no invent-seed** · empty OK · admin import later |
| T-UI-LIST-01 | Dev | Kind B `/mas/phan-khu` · tabs REG · LinCatalogUiSchemaEditorModal FULL |
| T-UI-FORM-01 | Dev | Modal C/E/V/Copy · `data-form-cols="2"` · tab Đoạn |
| T-UI-FILTER-01 | Dev | LinErpListFilterBar · query keys §2d |
| T-UI-LKP-01 | Dev | SearchInput peers · assignee split org/partner |
| T-UI-LEAVE-01 | Dev | LeaveConfirmModal |
| T-UI-ACT-01 | Dev | Toolbar FULL + row menu |
| T-QA-01 | QA | scenarios · E2E queued `/agent-qa*` |

---

## 7. Handoff → Team-lead

| Field | Value |
|-------|-------|
| feature | `org-route-scope` |
| phase_from / phase_to | sa → team-lead |
| packKind | **master** |
| changeScope | `new_page` |
| Kind / Form | B · **Modal** · `data-form-cols="2"` · nested đoạn tab |
| solution_confirm | **approve** |
| gates | tz_yes · xco_na · share_a |
| Architecture | BackendRoot RMMS.WebService · Domain Integration · resource `org-route-scopes` · BFF proxy · MFE Master `/mas/phan-khu` |
| FormMode↔API | §3 map |
| Schema | `Schema_RmmsOrgRouteScopes` · **0** invent-seed |
| controlHint | Design §3 = analy · **không** đổi |
| realData | §B — peers live · zone path **chốt** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/org-route-scope/ui/prototype/org-route-scope-list-prototype.html` |
| peerStdUrl | `http://localhost:9318/mas/co-cau-tc` |
| mfeStdUrl | `http://localhost:9318/mas/phan-khu` |
| Blockers | Dev wire cần Schema+API — **unblocked** bởi SA DOMAIN-MAP + contract này · migration = Step 4b Dev |
| Next | `/agent-team-lead` · **cấm** start TL trong task SA này (**GAP-PKT-ROLE-01**) |
| Out | **cấm** Write MFE ở SA · **cấm** e2e/start:std/build ở SA · **cấm** Step 4b ở SA |

---

## DoR checklist (PASS)

| Check | Pass |
|-------|------|
| Design confirmed + controlHint + real-data §B đọc | ✅ |
| Architecture + SSOT + Implement gates | ✅ |
| FormMode↔API + FormType pack | ✅ |
| DOMAIN-MAP slug + resource path chốt (không invent song song) | ✅ |
| SearchInput → peer/search API · Dropdown → init-data · Number/Date scalar | ✅ |
| no-parent-json · share_a · nested child table | ✅ |
| GAP-ORS-01/03/04/08/API-01/DM-01 chốt | ✅ |
| mfeStdRoute `/mas/phan-khu` chốt | ✅ |
| solution_confirm approve (autoApprove) | ✅ |
| Version meta | ✅ |
| **Không** Write MFE · **không** e2e/build/start:std · **không** migration | ✅ |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.29.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.29.04 |
| rulesVersion | 2026.08.30.5 |
| contentHash | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| headerFingerprint | sha256:72758524d03f6b4b62ccf4262873b39bdd01601654b368e153678ecc84d1865d |
| generatedAt | 2026-08-30T11:35:00.000Z |
| versionGate | rechecked |
| taskId | task_0c95c02f |
| contentHashPriorDataAnaly | sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc |
| orchestratorWorkflowVersion | 2026.08.29.04 |
| dataAnalySkillVersion | 2026.08.25.01 |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.29.01 schemaVersion=1 workflowVersion=2026.08.29.04 rulesVersion=2026.08.30.5 versionGate=rechecked contentHash=sha256:81b3c9a520472625cc78375571d1d94ae34a6badc62a7a7bf21f0a2eac7894dc taskId=task_0c95c02f -->
