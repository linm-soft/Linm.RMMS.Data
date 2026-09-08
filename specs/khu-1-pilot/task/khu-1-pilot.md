# Team lead — Task — khu-1-pilot

| Field | Value |
|-------|-------|
| feature | `khu-1-pilot` |
| title | Pilot dữ liệu Khu I |
| status | `confirmed` |
| changeScope | `new_page` |
| packKind | **`list`** (Kind **A/B** list + FilterBar + ops · **không** form CRUD / Thêm mới) |
| formType | **`list`** / Kind A/B |
| Feature Kind | **A/B** |
| solution_confirm | **approve** (SA `task_dad46d96`) |
| design_confirm | **approve** (Design `task_57fde78f`) |
| domain_map | **Asset** (`D1`) · DOMAIN-MAP slug `khu-1-pilot` → Asset (**T-DM-01 done**) |
| gates | TZ=`tz_yes` · XCO=`xco_na` · SHARE=`share_a` |
| route_confirm | **`route_a`** (autoApprove=ON) · lock **`/khu-1-pilot`** — A=`/khu-1-pilot` (SA/Design/STATUS) · B=`/asset/khu-1-pilot` (alt) · C=custom — **không** AskQuestion |
| mfeStdRoute | **`/khu-1-pilot`** |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` — **Dev/QA** điền sau `yarn start:std` |
| demo | **N/A** |
| autoApprove | **ON** |
| e2eQa | **ON** (queued `/agent-qa*` only — **cấm** e2e/start:std ở TL) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| taskId | `task_1c181bf3` |
| prior · sa | `task_dad46d96` · solution **confirmed** |
| contentHash | `sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056` |
| headerFingerprint | `sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3` |
| updatedAt | `2026-09-06T15:55:00.000Z` |
| versionGate | `rechecked` |
| TL SSOT | `tl-platform-ssot` · `ssot-no-duplicate` · `form-type-task-pack` · `tl-grid-task-template` · `tl-design-grid-component-map` · `tl-filter-bar-task` · `tl-route-vn-abbrev-confirm` · `list-form-quality-gates` · `filter-bar-layout-hard` · `agent-dev-assign` |
| **devSlash** | **`/agent-dev`** (list — `agent-dev-assign`) — **GAP-TL-DEV-ASSIGN-01** closed |

**Cấm:** implement product code · invent-seed · ERP.* · `api/v1/rmms/*` · yarn build/e2e/start:std · Step 4b/migration · start role khác (**GAP-PKT-ROLE-01**) · Thêm mới / typed CSDL re-enqueue · mobile (**GAP-K1-MOBILE-01 OUT**) · nationwide wipe · mock `POST integration/assets/import`.

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/khu-1-pilot/ui/design.md` + reviewUrl | T-FE-01..04 · DES-GRID-A/B/B-FILTER/C0/C2/D · DES-OPS · S-ACT-* |
| Solution | `specs/khu-1-pilot/be/solution-discovery.md` | T-BE-01..04 · T-BFF-01 · API-01..03 · FormMode↔API list/ops |
| Prototype | `ui/prototype/khu-1-pilot-list-prototype.html` | UI DoD parity |
| ControlHint / real-data | `_data-analy/features/khu-1-pilot-*.md` | control-map · peer cite · **0** invent control |
| Filter | `/rmms-filter-org` peer | T-FE-01 · zone lock REG-I · đoạn=`km_skip` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | T-DM-01 **done** |

## Platform SSOT (REQUIRED)

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `MFE-COMMON/Linm.Web.Common.Components` | npm `@linm-soft-org/linm-web-common-components` · SearchInput · LinErpListFilterBar · LinCatalog* · LeaveConfirmModal |
| **BE** | `API-LIB/Linm.Platform.CommonLib` | NuGet · ApiResponse · `[RequirePermission]` |
| **Auth** | `API-CORE/Linm.Platform.Authentication` | `asset.khu-1-pilot.read` · `.reimport` · `.reinit` |
| **Import** | `Linm.Platform.DataImport` | scoped zone filter REG-I — **cấm** invent-seed / mock SyncJob |

## Implement HOW (TL)

| Topic | Decision |
|-------|----------|
| **Wire** | Page → `services/khu1Pilot/endpoint.ts` → `apiClient` → `web-bff/api/v1/asset/khu-1-pilot` → `api/v1/asset/khu-1-pilot` |
| **List state** | page-hooks + server paged — **không** local auth/ui slice |
| **Form** | **OUT** — list + ops only · **cấm** Create/Edit/View routes |
| **Filter** | `/rmms-filter-org` · `zoneOrgCode=REG-I` **lock** · `vpOrgCode` · `assigneeCode` · `routeCode` · `search` · đoạn=`km_skip` |
| **Lookups** | Integration **live** cite — org-units / road-routes / partner-units / org-route-scopes — **cấm** invent |
| **Ops** | importSet chips RO · reImport → API-02 · reInit(danger) → API-03 · body `{ zoneOrgCode:"REG-I", importSets[] }` |
| **FE BASE** | `/asset/khu-1-pilot` |
| **Persist P1** | **no** new table · aggregate counts + DataImport fingerprints · Step 4b = `/new-endpoint` only |
| **Alias** | **cấm** default II.1 / QL.1 / VP-II.* (**GAP-K1-ALIAS-01**) |

### ssot.reuse (REQUIRED mọi T-FE / T-BE)

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | common-components `Lin*` / `SearchInput` / FilterBar | local Button/Input/Modal/Table/Pager |
| HTTP | `apiClient` re-export | `class ApiClient` local |
| State | page-hooks + common reducers | local `authSlice` / toast fork |
| BE | CommonLib ApiResponse | ad-hoc envelope |
| Auth | `[RequirePermission]` | custom perm attr |
| BFF | proxy only | business logic in BFF |
| Lookups | Integration paths live | invent peer / demo default |
| Import | DataImport + zone filter | mock `POST integration/assets/import` · invent-seed · nationwide wipe |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| `source.routes` | **`/khu-1-pilot`** · list+ops only — **route_confirm=route_a** |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Asset** (`asset`) + Integration lookups cite |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Asset/` · `Khu1PilotController` · Models `…Asset.Models/DTOs/` |
| `source.bff` | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only = yes** |
| `source.layout` | `micro-src` |
| `source.persistence` | **n/a new table P1** — aggregate + fingerprints |
| `source.migrations` | **n/a P1** · Step 4b `/new-endpoint` — **cấm** `/database-migration` trừ Dev chứng minh |
| Context | `docs/context/features/khu-1-pilot.md` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/ui/prototype/khu-1-pilot-list-prototype.html` |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| **Board** | `be_repo_confirm` + `ui_repo_confirm` **đã approve** (PO/SA) |

## Route confirm (autoApprove)

| Option | Path | Decision |
|--------|------|----------|
| A | `/khu-1-pilot` | **CHỐT** — khớp Design · SA · STATUS · mfeStdUrl |
| B | `/asset/khu-1-pilot` | alternate FE BASE only (không chọn UI route) |
| C | custom | N/A |

**Không** child form routes.

## API contract (from solution)

| id | Method | Path | Perm |
|----|--------|------|------|
| API-01 | GET | `/api/v1/asset/khu-1-pilot` | `asset.khu-1-pilot.read` |
| API-02 | POST | `/api/v1/asset/khu-1-pilot/re-import` | `asset.khu-1-pilot.reimport` |
| API-03 | POST | `/api/v1/asset/khu-1-pilot/re-init` | `asset.khu-1-pilot.reinit` |
| LKP | GET | Integration org-units / road-routes / partner-units / org-route-scopes | cite live |

BFF: `web-bff/api/v1/asset/khu-1-pilot/**`. FE BASE: **`/asset/khu-1-pilot`**.

Query API-01: `zoneOrgCode` **required** (`REG-I`) · `vpOrgCode?` · `assigneeCode?` · `routeCode?` · `search?` · `page` · `pageSize`.  
Body API-02/03: `{ zoneOrgCode: "REG-I", importSets: string[] }` — sets chỉ `gov-vn` · `t6-org-scope` · `drvn-org`.  
DTO: `Khu1PilotRowDto` · `Khu1PilotOpsRequest` · `Khu1PilotJobDto` (solution §4).

## Implement gates (from solution — REQUIRED)

| Gate | Decision | Apply |
|------|----------|-------|
| TZ | **yes** (`tz_yes`) | `lastImportAt` UTC store · UI TZ |
| XCO | **n/a** (`xco_na`) | list+ops · no GET/{id} form · vẫn `X-Company-Id` |
| SHARE | **Type A** (`share_a`) | catalogs/fingerprints shared · filter zone REG-I server-side |

## System design

| ID | Flag | Note |
|----|------|------|
| SD-LIB-UI | **required** | common-components · FilterBar · SearchInput · LeaveConfirmModal |
| SD-LIB-BE | **required** | CommonLib ApiResponse + RequirePermission |
| SD-AUTH | **required** | `asset.khu-1-pilot.*` |
| SD-BFF | **required** | Proxy only |
| SD-HEADER | **required** | `X-Company-Id` |
| SD-JOB | **required** | re-import/re-init job DTO · 409 if running |
| SD-TENANT | **shared** | Type A · zone filter REG-I |
| SD-NO-JSON | **required** | flat DTO rows — **cấm** parent blob |
| SD-SEARCH | **required** | API-01 paged |
| SD-TZ | **required** | `lastImportAt` timestamptz |
| SD-XCO | **n/a** | |
| SD-SHARE | **required** | Type A |
| SD-LKP | **required** | Integration SearchInput peers |
| SD-LEAVE | **required** | confirm modals ops only (S-ACT-REIMPORT / S-ACT-REINIT) |
| SD-FORM | **n/a OUT** | **cấm** Thêm mới / CRUD form |
| SD-MOBILE | **OUT** | **GAP-K1-MOBILE-01** closed TL — web only |

## DES-GRID → Lin\* map (`tl-design-grid-component-map`)

| Design zone | Component SSOT |
|-------------|----------------|
| DES-GRID-A | `LinPageLayout` header · title «Pilot dữ liệu Khu I» |
| DES-GRID-B / DES-OPS | toolbar ops · importSet chips · reImport · reInit(danger) · pilotScope REG-I chip |
| DES-GRID-B-FILTER | **`LinErpListFilterBar`** + `/rmms-filter-org` · zone lock REG-I |
| DES-GRID-C0 | listTitle |
| DES-GRID-C2 | **`LinCatalogDataGrid`** · cols `catalog` · `countInScope` · `lastImportAt` · `status` · **cấm** mock |
| DES-GRID-D | **`LinCatalogListPagination`** only |
| S-ACT-REIMPORT / S-ACT-REINIT | DES-ALERT · LeaveConfirmModal / confirm · scope chip REG-I |
| DES-GRID-F / H / Z | **OUT** (no schema editor / history CRUD / form) |
| SCR-K1-MAP | peer consume filter only · **T-OUT-01** · **cấm** invent map API |

**GAP-TL-GRID-MAP-01:** closed (list A/B subset).

## FormType pack (canonical — `form-type-task-pack` § list Kind A/B)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-DM-01 | SA | **done** | DOMAIN-MAP `khu-1-pilot` → Asset |
| T-CTX-01 | Dev | pending | context + DOMAIN-MAP cite · contentHash match |
| T-BE-01 | Dev `/agent-dev` | pending | API-01 GET list/status · **GAP-K1-API-01** |
| T-BE-02 | Dev | pending | API-02 POST re-import scoped |
| T-BE-03 | Dev | pending | API-03 POST re-init scoped + wipe guard |
| T-BE-04 | Dev | pending | DataImport zone filter REG-I · **GAP-K1-SCOPE-01** |
| T-BFF-01 | Dev | pending | proxy Asset `khu-1-pilot` (+ ops) |
| T-PERM-01 | Dev | pending | register `asset.khu-1-pilot.read|reimport|reinit` |
| T-FE-01 | Dev `/agent-dev` | pending | route `/khu-1-pilot` + FilterBar REG-I lock · **GAP-K1-PAGE-01** · ≡ T-UI-LIST/FILTER |
| T-FE-02 | Dev | pending | grid bind API-01 · empty/toast · **cấm** mock |
| T-FE-03 | Dev | pending | ops confirm → API-02/03 · ≡ T-UI-ACT + T-UI-LEAVE |
| T-FE-04 | Dev | pending | alias exclude II.1/QL.1/VP-II.* · **GAP-K1-ALIAS-01** |
| T-OUT-01 | Peer/Dev | pending | Gis/Field consume filter only · **cấm** map API |
| T-QA-01 | QA `/agent-qa` | pending | scenarios + e2e queued · **cấm** TL run e2e |

### deps

```
T-DM-01(done) → T-CTX-01
T-BE-01..04 → T-BFF-01 → T-PERM-01
T-BFF-01 → T-FE-01 → T-FE-02 → T-FE-03
T-FE-01 → T-FE-04
T-FE-* → T-QA-01
T-OUT-01 // peer parallel (non-blocking P1 list)
```

## Filter keys (Zone B) — DoD

| uiField | controlHint | Rule |
|---------|-------------|------|
| zoneOrgCode | locked chip / SearchInput RO | **force REG-I** · cấm II…IV |
| vpOrgCode | SearchInput | VP-I.1…I.4 · cấm VP-II.* |
| assigneeCode | SearchInput | cascade · SU/partner tách |
| routeCode | SearchInput | ⊆ Khu I · cấm QL.1 demo default |
| search | SearchTextInput | 🔍 phải · no nút Tìm |
| đoạn | — | **`km_skip`** |

## Grid columns (Zone C) — DoD

| uiField | dtoField | Notes |
|---------|----------|-------|
| catalog | `catalog` | import set / catalog kind |
| countInScope | `countInScope` | DB ⊆ REG-I · **cấm** mock |
| lastImportAt | `lastImportAt` | UTC · TZ display |
| status | `status` | imported / empty / running / failed |

## Ops toolbar — DoD

| uiField | Rule |
|---------|------|
| importSet | chips RO · gov-vn · t6-org-scope · drvn-org |
| pilotScope | locked REG-I |
| reImport | Button + confirm → API-02 |
| reInit | Button danger + confirm → API-03 · scoped wipe only |

## GAP closure (this role)

| ID | State |
|----|-------|
| GAP-K1-DM-01 | CLOSED (SA) |
| GAP-K1-API-01 | CHỐT → Dev T-BE-01..03 |
| GAP-K1-SCOPE-01 | CHỐT → Dev T-BE-04 |
| GAP-K1-PAGE-01 | → Dev T-FE-01 |
| GAP-K1-ALIAS-01 | → Dev T-FE-04 |
| GAP-ORS-CASCADE-01 | peer (org-route-scope) |
| GAP-K1-MOBILE-01 | **CLOSED TL** — OUT mobile this pack |
| GAP-TL-FORMTYPE-01 | closed — list A/B pack stamped · **no** form tasks |
| GAP-TL-FILTER-01 | closed — FilterBar + `/rmms-filter-org` |
| GAP-TL-LEAVE-01 | closed — ops confirm only |
| GAP-TL-DEV-ASSIGN-01 | closed — `devSlash=/agent-dev` |
| GAP-TL-GRID-MAP-01 | closed |

## DoR Team-Lead

- [x] Prior compact data_analy/po/design/sa PASS · contentHash match
- [x] changeScope=`new_page` · control-hint + real-data exist
- [x] `route_confirm=route_a` `/khu-1-pilot` (autoApprove)
- [x] FormType list Kind A/B T-* đủ · no CRUD form
- [x] API-01..03 + LKP cite · gates TZ/XCO/SHARE
- [x] DES-GRID map · ssot.reuse · **cấm** ERP.*
- [x] compact `handoff/team_lead-compact.md`
- [x] STATUS → team_lead **confirmed** · next `dev` pending
- [x] **không** implement code · **không** e2e · **không** Step 4b

## Next

`role=dev` · `implement/khu-1-pilot.md` · `/agent-dev` · Autopilot ON · e2e queued QA
