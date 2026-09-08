# SA — Solution discovery — khu-1-pilot (Pilot dữ liệu Khu I)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_dad46d96`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · ssot-no-duplicate · sa-implement-gates · list-form-quality-gates  
> SA detail: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md`  
> Requires: design **confirmed** · controlHint + real-data §B · prototype + reviewUrl  
> **Cấm:** Write MFE/native · invent lookup API song song live · ERP.* · `api/v1/rmms/*` · re-scan demo · yarn build/e2e/start:std · Step 4b/migration ở role SA · invent-seed · gộp zone→gov-vn · khu-2/khu-4 · typed CSDL re-enqueue · mobile

| Field | Value |
|-------|-------|
| feature | `khu-1-pilot` |
| title | Pilot dữ liệu Khu I |
| this role | `sa` · `/agent-sa` |
| changeScope | **`new_page`** |
| packKind | **`list`** (Kind **A/B** list · **không** form CRUD / Thêm mới) |
| Feature Kind | **A/B** (list + FilterBar + ops toolbar) |
| status | `confirmed` |
| design_confirm | approve |
| solution_confirm | **approve** (autoApprove=ON) |
| domain_map | **D1** Asset · DOMAIN-MAP row patched |
| sa_tz_gate | **tz_yes** (`lastImportAt` timestamptz → UTC store · display TZ) |
| sa_xco_gate | **xco_na** (list/ops · không GET/{id} form) |
| sa_shared_table | **share_a** (counts/fingerprints shared catalogs · filter zone) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| demo | **N/A** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/khu-1-pilot`** |
| mfeStdUrl | `http://localhost:9301/khu-1-pilot` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/khu-1-pilot/ui/prototype/khu-1-pilot-list-prototype.html` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **`api/v1/asset`** (+ Integration lookups) |
| domain | **Asset** (page) · **Integration** (lookups cite) |
| resource | **`khu-1-pilot`** |
| controlHint | `specs/_data-analy/features/khu-1-pilot-control-hint.md` |
| realData | `specs/_data-analy/features/khu-1-pilot-real-data.md` |
| design | `specs/khu-1-pilot/ui/design.md` (confirmed) |
| contentHash | `sha256:721f9c659b694240f987553196aa422ceba50f1f2c1e7849e42fe27050168056` |
| headerFingerprint | `sha256:39ac2fc4e677a0980881d50eb9a10daa22430065a0fafa39ff57485d505940a3` |
| analyReuse | **hash match** — **cấm** re-scan demo / invent control |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_dad46d96` |
| priorTask | design `task_57fde78f` · po `task_25122961` · analy `task_d855768c` |
| updatedAt | `2026-09-06T15:48:00.000Z` |
| versionGate | `rechecked` |

## § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this SA) | Action |
|------|----------------|---------------|--------|
| DOMAIN-MAP | thiếu slug `khu-1-pilot` | Asset row | **GAP-K1-DM-01** ✅ patched |
| MFE page | **0** `/khu-1-pilot` | Kind A/B list + FilterBar REG-I | Dev T-UI · **GAP-K1-PAGE-01** |
| Pilot list/status API | **0** | Asset `khu-1-pilot` GET | **GAP-K1-API-01** Dev T-BE |
| Lookups | Integration org/route/partner/scope **live** | **giữ** cite — **cấm** invent | cite |
| ReImport/ReInit | config `DataImport__*` startup · **nationwide** | HTTP ops **scoped `REG-I`** | **GAP-K1-SCOPE-01** Dev+Data |
| Alias risk | II.1 / QL.1 demo | lock REG-I · exclude VP-II.* | Design shell · Dev **GAP-K1-ALIAS-01** |
| Typed CSDL | 16 biểu + 10 sổ done | **cấm** re-enqueue | OUT |

**Không đổi:** Integration lookup prefixes · FilterBar `/rmms-filter-org` contract · import sets `drvn-org`/`gov-vn`/`t6-org-scope` · leave-confirm ops · toast · DEM N/A.

---

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · route **`/khu-1-pilot`** |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain (page) | **`Asset`** — `api/src/RMMS.Service.Api/Domains/Asset/` |
| Controllers | `Khu1PilotController` (new) |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/` |
| Persistence | **không** bảng mới P1 — aggregate counts + `DataImport` fingerprints · filter qua `org-route-scopes` ⊆ REG-I |
| Migrations | **n/a** P1 (`/new-endpoint` only) · scoped wipe logic = code · **không** invent-seed |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/` · **proxy only = yes** |
| Lookups | Integration **live** — `OrgUnits` · `RoadRoutes` · `PartnerUnits` · `OrgRouteScopes` |
| DOMAIN-MAP | `docs/DOMAIN-MAP.md` · slug `khu-1-pilot` → Asset (**patched**) |
| Import runtime | `Linm.Platform.DataImport` · extend invoke **with zone filter** — **cấm** bind mock `POST integration/assets/import` |

**Cấm** `ERP.Service.*` · `ERP.Master.*` · `api/v1/rmms/*` · `Domains/Master` ERP.

### Route / domain (chốt)

| | Choice |
|--|--------|
| DOMAIN-MAP | slug **`khu-1-pilot`** → domain **Asset** |
| Domain prefix | `api/v1/asset` · BFF `web-bff/api/v1/asset` |
| Resource | **`/khu-1-pilot`** → full `api/v1/asset/khu-1-pilot` |
| UI route | **`/khu-1-pilot`** |
| FE BASE (Dev) | `/asset/khu-1-pilot` |
| Rationale | Pilot counts/ops trên Asset data · lookups Integration cite · không domain 16th |

**Confirmed `domain_map=D1`:** Asset · DOMAIN-MAP row `khu-1-pilot` · UI `/khu-1-pilot`.

---

## Architecture

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | **Asset** / `asset` (page) × Integration reads |
| API host | `Domains/Asset/` · `Khu1PilotController` |
| BFF | `…Asset.Bff/` · **proxy only = yes** |
| MFE | `Linm.Web.RMMS.Asset` |
| Response | `Linm.Platform.CommonLib` ApiResponse / paged |
| Auth perm | `asset.khu-1-pilot.read` · `asset.khu-1-pilot.reimport` · `asset.khu-1-pilot.reinit` |
| Persist | P1 **read aggregate** — **cấm** parent JSON blob · **cấm** demo JSON |
| Out of pack | typed CSDL forms · map canvas API · khu-2/4 · ERP fork · mobile · nationwide wipe UI |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · SearchInput · LeaveConfirmModal — **cấm** local Lin* clone |
| Filter | `/rmms-filter-org` | zone lock REG-I · đoạn=`km_skip` |
| HTTP | `apiClient` SSOT | re-export only |
| Lookups | Integration paths **live** (real-data §B1) | **cấm** invent peer path · **cấm** default II.1 / QL.1 |
| Import | `DataImport` + sets CTX | **cấm** mock SyncJob import · **cấm** invent-seed |
| BFF | proxy only | no business logic |

## Implement gates (confirm) — RECORDED

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| **TZ** | **yes** (`tz_yes`) | `lastImportAt` | store/compare **UTC** · UI TZ |
| **XCO** | **n/a** (`xco_na`) | list + ops · no form GET/{id} | vẫn gửi `X-Company-Id` |
| **SHARE** | **Type A** (`share_a`) | catalogs/fingerprints shared | filter **zoneOrgCode=REG-I** server-side |

AskQuestion (autoApprove recorded): `domain_map=D1` · `sa_tz_gate=tz_yes` · `sa_xco_gate=xco_na` · `sa_shared_table=share_a` · `solution_confirm=approve` · `2026-09-06T15:48:00.000Z`.

---

## 2. Form data analysis (REQUIRED · Kind A/B list · no CRUD form)

> Typography: label **13** · input D14/M16.  
> **Cấm** đổi SearchInput → free Text khi controlHint = SearchInput.  
> **Cấm** Thêm mới / Zone F schema editor trên pack này.

### 2a. Screens / FormMode

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| SCR-K1-01 List (A/B) | Zone B filters + Zone C grid + DES-OPS | query list + lookups | **không** RMMS form entity |
| S-ACT-REIMPORT | confirm · scope chip REG-I · importSet | POST ops | job result DTO |
| S-ACT-REINIT | danger confirm · scope REG-I | POST ops | job result DTO |
| SCR-K1-MAP | filter consume only | client filter keys | **cấm** invent map API |

**FormMode↔API:** List only · **không** Create/Edit/View/Copy/Delete form.

### 2b. Filter keys (Zone B) → query

| uiField | controlHint | Wire query | API source | Rule |
|---------|-------------|------------|------------|------|
| zoneOrgCode | locked chip / SearchInput RO | `zoneOrgCode` **required** | Integration org-units | **force `REG-I`** · 422 nếu ≠ REG-I |
| vpOrgCode | SearchInput | `vpOrgCode` | `…/org-units/search?kind=VP&parentCode=REG-I` | ⊆ REG-I · **cấm** VP-II.* |
| assigneeCode | SearchInput | `assigneeCode` | org-unit \| partner-unit peer | tách tree |
| routeCode | SearchInput | `routeCode` | road-routes + org-route-scopes | ⊆ Khu I · **cấm** QL.1 demo default |
| search | SearchTextInput | `search` | list GAP→API-01 | 🔍 phải · no nút Tìm |
| đoạn | — | — | — | **`km_skip`** |

### 2c. Grid columns (Zone C) → DTO

| uiField | Label | dtoField | Wire | Notes |
|---------|-------|----------|------|-------|
| catalog | Catalog | `catalog` | API-01 | import set / catalog kind label |
| countInScope | Số lượng | `countInScope` | API-01 | DB count ⊆ REG-I · **cấm** mock |
| lastImportAt | Lần import | `lastImportAt` | API-01 | fingerprint UTC · TZ display |
| status | Trạng thái | `status` | API-01 | `imported` / `empty` / `running` / `failed` |

### 2d. Ops toolbar

| uiField | control | Wire | Rule |
|---------|---------|------|------|
| importSet | chips RO | body `importSets[]` | chỉ `gov-vn` · `t6-org-scope` · `drvn-org` |
| pilotScope | locked chip | `zoneOrgCode=REG-I` | always |
| reImport | Button + confirm | API-02 | scoped · **cấm** nationwide silent |
| reInit | Button danger + confirm | API-03 | scoped wipe fingerprints/rows **trong REG-I** only |

---

## 3. API catalog

Base app FE: `web-bff/api/v1`. Path **không** lặp prefix trong `apiClient`.

### API-01: GET `/api/v1/asset/khu-1-pilot` · **DELTA** · **GAP-K1-API-01**

| | |
|--|--|
| Purpose | List catalog status + counts scoped Khu I |
| Permission | `asset.khu-1-pilot.read` |
| Tenant | `X-Company-Id` |
| Request | `zoneOrgCode` **required** (=`REG-I`) · `vpOrgCode?` · `assigneeCode?` · `routeCode?` · `search?` · `page` · `pageSize` |
| Response | paged `{ items: Khu1PilotRowDto[], totalCount }` |
| Errors | 422 zone ≠ REG-I · 200 empty items |
| BFF | `web-bff/api/v1/asset/khu-1-pilot` proxy-only |
| Count source | Aggregate DB (assets/routes/scopes) **JOIN** org-route-scope ⊆ REG-I · fingerprint `lastImportAt` |
| Migration | **none** P1 |
| Live | **GAP** — Dev `/new-endpoint` |

### API-02: POST `/api/v1/asset/khu-1-pilot/re-import` · **DELTA** · **GAP-K1-SCOPE-01**

| | |
|--|--|
| Purpose | Queue scoped ReImportSeed for selected sets · zone REG-I |
| Permission | `asset.khu-1-pilot.reimport` |
| Body | `{ zoneOrgCode: "REG-I", importSets: string[] }` |
| Response | `Khu1PilotJobDto` `{ jobId, status, zoneOrgCode, importSets }` |
| Errors | 422 zone ≠ REG-I · invalid set · 409 job running |
| Impl note | Invoke `IDataImportSetRunner` / hosted path với **zone filter** — **cấm** reuse mock `POST integration/assets/import` · **cấm** flip global `DataImport__ReImportSeed` without scope |
| BFF | proxy-only |

### API-03: POST `/api/v1/asset/khu-1-pilot/re-init` · **DELTA** · **GAP-K1-SCOPE-01**

| | |
|--|--|
| Purpose | Scoped ReInitData (clear fingerprints + re-apply) **chỉ** data thuộc REG-I |
| Permission | `asset.khu-1-pilot.reinit` |
| Body | same as API-02 |
| Response | `Khu1PilotJobDto` |
| Errors | 422 · 409 · **cấm** wipe ngoài scope |
| BFF | proxy-only |

### API-LKP (existing · cite · **cấm** invent)

| Catalog | Path |
|---------|------|
| org-unit | `GET /web-bff/api/v1/integration/org-units{/tree,/search,}` |
| road-route | `GET /web-bff/api/v1/integration/road-routes{/search,}` |
| partner-unit | `GET /web-bff/api/v1/integration/partner-units{/search,}` |
| org-route-scope | `GET /web-bff/api/v1/integration/org-route-scopes` (+ zone) |

### FormType pack (`list` / Kind A/B)

| Surface | Pattern | Endpoint |
|---------|---------|----------|
| List | A/B + FilterBar | API-01 + LKP |
| ReImport confirm | DES-ALERT | API-02 |
| ReInit confirm | DES-ALERT danger | API-03 |
| CRUD form | **OUT** | — |

---

## 4. DTO (delta)

```csharp
public sealed class Khu1PilotRowDto
{
    public string Catalog { get; set; } = string.Empty;
    public int CountInScope { get; set; }
    public DateTimeOffset? LastImportAt { get; set; }
    public string Status { get; set; } = string.Empty;
}

public sealed class Khu1PilotOpsRequest
{
    public string ZoneOrgCode { get; set; } = "REG-I";
    public string[] ImportSets { get; set; } = [];
}

public sealed class Khu1PilotJobDto
{
    public string JobId { get; set; } = string.Empty;
    public string Status { get; set; } = string.Empty;
    public string ZoneOrgCode { get; set; } = string.Empty;
    public string[] ImportSets { get; set; } = [];
}
```

---

## 5. Persistence / migration

| Item | Decision |
|------|----------|
| New table P1 | **No** |
| Step 4b | **`/new-endpoint`** Asset · **cấm** `/database-migration` trừ Dev chứng minh cần job/audit table |
| Count filter | org-route-scope segments ⊆ `REG-I` (+ optional vp/route) |
| Fingerprint | `DataImport` fingerprint store (existing) |
| Scoped ReInit | code path must **not** deactivate/wipe rows outside REG-I scope — **GAP-K1-SCOPE-01** implement detail |

---

## 6. Security / RBAC

- User ngoài Khu I: API-01 returns empty or 403 per claim (Dev chốt với Auth) — **không** leak nationwide counts trên page này.
- Ops permissions tách read vs reimport vs reinit.
- Confirm modals bắt buộc trước API-02/03.

---

## 7. Tasks (ids → Team-Lead)

| ID | Layer | Summary |
|----|-------|---------|
| T-DM-01 | DOMAIN-MAP | slug `khu-1-pilot` → Asset (**done SA**) |
| T-BE-01 | API | `Khu1PilotController` GET list/status |
| T-BE-02 | API | POST re-import scoped |
| T-BE-03 | API | POST re-init scoped + wipe guard |
| T-BE-04 | DataImport | zone filter hook REG-I (**GAP-K1-SCOPE-01**) |
| T-BFF-01 | BFF | proxy Asset `khu-1-pilot` (+ ops) |
| T-FE-01 | MFE | route `/khu-1-pilot` + FilterBar REG-I lock |
| T-FE-02 | MFE | grid bind API-01 · empty/toast |
| T-FE-03 | MFE | ops confirm → API-02/03 |
| T-FE-04 | MFE | alias exclude II.1/QL.1 (**GAP-K1-ALIAS-01**) |
| T-OUT-01 | Peer | Gis/Field consume filter only · **cấm** map API |
| T-QA-01 | QA | scenarios + e2e queued |

**devSlash:** `/agent-dev` · **tlSlash:** `/agent-team-lead`

---

## 8. GAP closure (this role)

| ID | Resolution |
|----|------------|
| GAP-K1-DM-01 | **CLOSED** — DOMAIN-MAP `khu-1-pilot` → Asset |
| GAP-K1-API-01 | **CHỐT** — API-01/02/03 paths + DTOs · implement Dev |
| GAP-K1-SCOPE-01 | **CHỐT contract** — ops body zone+sets · wipe/import scoped REG-I · implement Dev/Data |
| GAP-K1-PAGE-01 | remain → Dev |
| GAP-K1-ALIAS-01 | remain → Dev (Design shell chốt) |
| GAP-ORS-CASCADE-01 | peer |
| GAP-K1-MOBILE-01 | TL · **cấm** mobile this pack |

---

## 9. DoR SA

- [x] Design confirmed + compact
- [x] real-data §B cited · **không** invent live lookup
- [x] DOMAIN-MAP patched
- [x] FormMode↔API (list/ops only)
- [x] Gates TZ/XCO/SHARE recorded
- [x] `solution_confirm=approve` (autoApprove)
- [x] compact `handoff/sa-compact.md`
- [x] **không** Write MFE · **không** Step 4b · **không** e2e

## Next

`role=team-lead` · `task/khu-1-pilot.md` · Autopilot ON
