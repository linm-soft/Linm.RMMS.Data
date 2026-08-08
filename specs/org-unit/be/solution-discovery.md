# Solution discovery — org-unit

> Status: **confirmed** (`solution_confirm=approve` · 2026-08-08)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE) · **shared-master-catalog**  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md` · `master-catalog-no-demo.md` · stack `qlbd-tech-stack.md`  
> Requires: `ui/design.md` **confirmed** · prototype + reviewUrl · parentCode=**SearchInput**  
> Version meta: rules `2026.08.08.14` · solution `2026.08.08.1`  
> **Tasks:** `specs/org-unit/task/org-unit.md` (TL) · phase → **dev** (board repo confirm)

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| packKind | `master` (Kind B tree + Modal) |
| status | `confirmed` |
| design_confirm | approve |
| domain_map | **Integration** (`D1` · 2026-08-08) |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **share_a** (Type A · user `shared 3A`) |
| solution_confirm | **approve** (2026-08-08) |
| gapOrg01 | `keep_legacy` |
| updatedAt | 2026-08-08T17:51:00.000Z |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (`/master/org-unit`) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain (proposed) | **`Integration`** — `api/src/RMMS.Service.Api/Domains/Integration/` |
| Models / DTO | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` |
| Migrations | `api/shared/RMMS.Service.Migrations/` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/` · **proxy only** |
| Docs | `Linm.RMMS.Data/docs/context/features/org-unit.md` · `20-ORG-STRUCTURE-DRVN.md` |
| Seed | `docs/context/seed/org-unit-seed.json` (60) |

**Cấm** `ERP.Service.*` · `ERP.Master.*`.

### Route decision (DOMAIN-MAP)

| | Choice |
|--|--------|
| DOMAIN-MAP today | **chưa** có `org-unit` / Master domain (14 domains) |
| **Proposed** | Map slug `org-unit` (+ sau: `road-route` · `asset-type` · `partner-unit`) → domain **Integration** |
| Domain prefix | `api/v1/integration` · BFF `web-bff/api/v1/integration` |
| Resource | `/org-units` → full `api/v1/integration/org-units` |
| FE hiện tại | `endpoint.ts` = `/api/v1/rmms/org-units` → **GAP-SA-ROUTE-01**: đổi → `/integration/org-units` |
| Rationale | Không tạo domain 15th; Integration = shared platform lookups · MFE Master vẫn sở hữu UI |

**Confirmed `domain_map=D1`:** Integration · patch DOMAIN-MAP `org-unit` → Integration · FE GAP-SA-ROUTE-01 → `/integration/org-units`.

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Integration** / `integration` · DOMAIN-MAP patch (`D1`) |
| API host | `Domains/Integration/` · Controllers OrgUnits |
| BFF | `bff/domains/integration/…` · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Master` · ui_repo_confirm |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | `master.org-units.read|create|update|delete|approve` (shared catalog) |
| Persist | no-parent-json · `OrgUnitEntity` flat scalars + `parent_code` |
| Out of pack | partner-unit · road-route · asset-type · Excel wizard |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | `SearchInput` · LinTree* · pager — no local clone |
| HTTP | `apiClient` SSOT · SETUP-P2-12 | re-export only |
| BE | `Linm.Platform.CommonLib` | ApiResponse |
| Auth | Authentication + `[RequirePermission]` | codes Auth |
| Persist | `no-parent-json-field` | no `*Json` blob tree |
| Shared | `ISharedMasterCatalogEntity` / SharedMasterCatalog | Type A |
| BFF | proxy only | no business logic |

## Implement gates (confirm) — RECORDED

> Matrix: Kind B **dm shared** · master catalog.  
> User: `D1 G2 shared 3A` → SHARE **Type A**; TZ/XCO giữ đề xuất n/a.

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| **TZ** | **n/a** (`tz_na`) | API-01…06 — không DATE / fromDate-toDate | `/review-timezone-implement` | History timestamps UTC only |
| **XCO** | **n/a** (`xco_na`) | Shared Scope — không tenant filter trên OrgUnit | `/implement-view-cross-company` | GET/{id} global shared |
| **SHARE** | **Type A** (`share_a`) | `OrgUnitEntity` · `ISharedMasterCatalogEntity` | `/implement-shared-table` | Master catalog dùng chung toàn RMMS |

AskQuestion recorded: `domain_map=D1` · `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_a` · 2026-08-08T17:49:00.000Z.  
**Next:** `solution_confirm` approve / revise / abort.

---

## 2. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity | data-import / seed |
|-------------------|-------------|-------------|--------|-------------------|
| List filter | `search`, `page`, `pageSize` | query | — | SEED-01 |
| List tree | tree nodes code/name/kind | master | `OrgUnitEntity` | SEED-01 |
| List grid | mã · tên · loại · tên gọi cũ | derived | `OrgUnitEntity` | |
| Create / Edit / Copy | code* · kind* · name* · parentCode (SearchInput) · legacyAlias · isActive | master | `OrgUnitEntity` | |
| View | same · all readOnly | master | `OrgUnitEntity` | |
| parentCode lookup | SearchInput → search API | master | `OrgUnitEntity` | **cấm** Text |

### Field map (ui → dto → db)

| uiField | Label VN | dtoField | dbColumn | Notes |
|---------|----------|----------|----------|-------|
| code | Mã đơn vị | Code | `code` | UK · uppercase · business key |
| name | Tên đơn vị | Name | `name` | required |
| parentCode | Đơn vị cha | ParentCode | `parent_code` | nullable FK self · SearchInput |
| kind | Loại đơn vị | Kind | `kind` | ORG\|HQ\|ADV\|REG\|VP\|SU\|ROOM |
| legacyAlias | Tên gọi cũ | LegacyAlias | `legacy_alias` | optional |
| isActive | Đang dùng | IsActive | `is_active` | default true |
| — | — | IsLegacyExtra | `is_legacy_extra` | GAP-ORG-01 · badge «hệ cũ» |
| — | — | SortOrder | `sort_order` | seed order |
| — | — | CreatedAt/UpdatedAt | UTC | |

**Persist:** flat table only — **cấm** parent `ChildrenJson` / tree blob.

---

## 3. API catalog

Base (sau DOMAIN-MAP): `api/v1/integration/org-units` · BFF mirror `web-bff/api/v1/integration/org-units`.

### API-01: GET /api/v1/integration/org-units

| | |
|--|--|
| Purpose | List/search paged (Zone C flat search + D) |
| Permission | `master.org-units.read` |
| Tenant | Shared — **skip** company filter · vẫn gửi `X-Company-Id` (audit) |
| Request | query: `search?`, `kind?`, `parentCode?`, `page`, `pageSize` (50/100/200/500) |
| Response | `{ items: OrgUnitDto[], totalCount, page, pageSize, totalPages }` |
| Errors | 401 · 403 |
| Form surfaces | list search · pagination |
| Field map | §2 |
| gates.tz | n/a |
| gates.xco | n/a |
| gates.shared | share_a |
| Context | `features/org-unit.md` · `20-ORG-STRUCTURE-DRVN.md` |
| Demo HTML | **N/A** (master) · prototype `ui/prototype/org-unit-list-prototype.html` |
| data-import | folder map `RMMS CUC 2/Chi cục QLĐB II.x` → `VP-II.x` + legacyAlias |
| Sample | `VP-II.2` · Văn phòng QLĐB II.2 · alias Chi cục QLĐB II.2 |
| Migration | đọc Schema + Seed |

### API-02: GET /api/v1/integration/org-units/tree

| | |
|--|--|
| Purpose | Tree nav **folders only** — không trả leaf (last item of tree) |
| Permission | `master.org-units.read` |
| Request | optional `rootCode?` · `includeInactive?` |
| Response | nested `OrgUnitTreeNodeDto[]` (`code`, `name`, `kind`, `isLegacyExtra`, `childCount`, `descendantCount`, `children[]` non-leaf) |
| Form surfaces | Zone C tree |
| Note | Leaf load via list `?parentCode=` — không nằm trong `/tree` |
| gates | tz n/a · xco n/a · shared A |
| Context | SSOT tree §2 |
| data-import / seed | SEED-01 60 nodes |
| Migration | none extra |

### API-03: GET /api/v1/integration/org-units/search

| | |
|--|--|
| Purpose | **SearchInput** Đơn vị cha + consumer Asset `orgUnitCode` |
| Permission | `master.org-units.read` |
| Request | `q` (CI · không dấu) · `take` (default 20) · `excludeCode?` |
| Response | `{ items: [{ code, name, kind, legacyAlias, isSelectable }] }` |
| Form surfaces | Modal parentCode · Asset lookup |
| controlHint | **SearchInput** — **cấm** chỉ Text |
| gates | shared A |
| Context | design §3 · `form-catalog-lookup-input` |
| Migration | index `(code)`, `(name)` / trigram nếu cần |

### API-04: GET /api/v1/integration/org-units/{id}

| | |
|--|--|
| Purpose | View / Edit load |
| Permission | `master.org-units.read` |
| Request | path `id` (Guid) **hoặc** route by `code` — **chốt:** `{id:guid}` + optional `GET …/by-code/{code}` |
| Response | `OrgUnitDto` |
| Errors | 404 |
| gates.xco | **n/a** (shared) |
| gates.shared | A |
| Context | design Modal View |
| Migration | PK Guid |

### API-05: POST /api/v1/integration/org-units

| | |
|--|--|
| Purpose | Create |
| Permission | `master.org-units.create` (+ approve shared nếu rule RMMS) |
| Request | body: code*, name*, kind*, parentCode?, legacyAlias?, isActive? |
| Response | 201 `OrgUnitDto` |
| Errors | 409 duplicate code · 422 parent not found · 422 kind |
| Form surfaces | Modal create/copy |
| Migration | Schema indexes unique `code` |

### API-06: PUT /api/v1/integration/org-units/{id} · DELETE

| | |
|--|--|
| Purpose | Update · soft-delete (`is_active=false`) hoặc hard nếu không consumer |
| Permission | `master.org-units.update` / `.delete` |
| Errors | 404 · 422 cycle parent · 409 in-use (Asset refs) |
| Form surfaces | Modal edit · row menu |
| gates.shared | A |

### API-07 (optional pack): GET init-data

| | |
|--|--|
| Purpose | LOOKUP_STATIC kinds + labels VN |
| Path | `GET …/org-units/init-data` hoặc form-init shared |
| Response | `{ kinds: [{ value, label }] }` |

---

## 4. Entity / migration

| | |
|--|--|
| Entity | `OrgUnitEntity` : **shared** master (`ISharedMasterCatalogEntity` / skip tenant filter) |
| Table | `rmms_org_units` (hoặc `org_units` theo convention Persistence) |
| Schema | `Schema_RmmsOrgUnits` — columns §2 · UK `code` · IX `parent_code` · IX search |
| Seed | `Seed_RmmsOrgUnits` — load **SEED-01** JSON · `gapOrg01=keep_legacy` · VP-II.1/II.6 `is_legacy_extra=true` |
| EF gate | CLI `dotnet ef migrations add` pair `.cs`+`.Designer.cs` — **cấm** hand-write only |

---

## 5. data-import / seed

| ID | Path | Use |
|----|------|-----|
| SEED-01 | `docs/context/seed/org-unit-seed.json` | BE Seed_* SSOT |
| DI-01 | `data-import/RMMS CUC 2/Chi cục QLĐB II.2`…`II.5` | alias → VP-II.2…5 |
| DI-02 | `…/II.1` · `II.6` | keep_legacy · isLegacyExtra |
| DI-03 | Sở / BOT / Cty | **OOS** → partner-unit |

---

## 6. Gaps

| ID | Mô tả | Action |
|----|-------|--------|
| GAP-SA-ROUTE-01 | FE `/rmms/org-units` ≠ DOMAIN-MAP | Đổi → `/integration/org-units` sau confirm domain |
| GAP-SA-DOMAIN-01 | DOMAIN-MAP thiếu org-unit | Patch map → Integration (hoặc Ask Master domain) |
| GAP-ORG-01 | II.1/II.6 | keep_legacy ✅ |
| GAP-ORG-02 | Label VN | Design chốt ✅ |

---

## Handoff → Team lead

| Field | Value |
|-------|-------|
| feature | `org-unit` |
| phase_from / phase_to | sa → team_lead (sau solution_confirm) |
| Architecture | Integration · shared Type A · no-parent-json |
| APIs | API-01…06 (+07) |
| controlHint | parentCode=SearchInput · kind=LOOKUP_STATIC |
| Seed | SEED-01 60 |
| Open | **`solution_confirm`** (domain+gates đã ghi) |
| Blockers | board be_repo / ui_repo vẫn false — Dev gate sau |
| Next AskQuestion | gates + domain + solution_confirm |
