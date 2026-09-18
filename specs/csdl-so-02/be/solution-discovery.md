# SA — Solution discovery — csdl-so-02 (CR PDF Wave A · edit_page)

> Status: **confirmed** (`solution_confirm=approve` · autoApprove=ON · `task_e5236699`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** · **form-type-task-pack** (`list`) · **filter-bar-layout-hard** · **slideout-form-layout**  
> Requires: Design **confirmed** · controlHint + real-data §B · **cấm** re-scan demo · **cấm** invent API  
> **Cấm:** Write MFE/native · ERP.* · `api/v1/so-ts/*` · `api/v1/infra/*` · `api/v1/rmms/*` · parent `*Json` · yarn build/e2e/start:std · Step 4b/migration ở role SA

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| title | CSDL Sổ 02 — Nhật ký tuần đường (CR PDF Wave A) |
| this role | `sa` · `/agent-sa` |
| changeScope | **`edit_page`** |
| packKind | **`list`** (Kind **B** A–D+F+H · Kind **D** Slideout 2col · entries `inline_grid`) |
| status | `confirmed` |
| design_confirm | approve (`task_b40a0dad`) |
| solution_confirm | **approve** (autoApprove=ON · `task_e5236699`) |
| cr | `nktd-pdf-20260917` · `SRC-NKTD-PDF` |
| domain_map | **Asset** (`csdl-so-02` → `asset` · **giữ** T-DM-01 prior) |
| sa_tz_gate | **`tz_list_and_form`** (giữ) |
| sa_xco_gate | **`xco_get_only`** (giữ) |
| sa_shared_table | **`share_tenant`** (giữ) |
| be_repo_confirm | `Linm.RMMS.WebService` |
| ui_repo_confirm | `Linm.Web.RMMS.Asset` |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | `/csdl-so-02` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| hubDeepLink | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| peerSoTs | — · **cấm** merge Sổ TS |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · prefix **live** `api/v1/asset/csdl-records` |
| domain | **Asset** |
| resource | `patrol-logs` |
| formNo | `02` · label «Sổ 02 — Nhật ký tuần đường» |
| IdCode | `SO-yyyyMMdd-nnnn` (BE generate · **cấm** Guid) |
| catalogKind | `patrol-logs` (typed UiSchema) |
| controlHint | `specs/_data-analy/features/csdl-so-02-control-hint.md` |
| realData | `specs/_data-analy/features/csdl-so-02-real-data.md` |
| design | `specs/csdl-so-02/ui/design.md` (confirmed) |
| contentHashPriorDataAnaly | `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` |
| headerFingerprintPrior | `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` |
| analyReuse | **hash skip** — **cấm** re-scan demo / invent API |
| priorNewPageSa | `task_c4f160af` · baseline **giữ** · **cấm** wipe |
| autoApprove | **ON** |
| e2eQa | **ON** (queued — chỉ `/agent-qa*`) |
| taskId | `task_e5236699` |
| priorTask | `task_b40a0dad` (design completed) |
| updatedAt | `2026-09-18T03:50:00.000Z` |
| versionGate | `aligned` (contentHash match data_analy / po / design compact) |

## § Delta Current vs New (`edit_page` · Wave A)

| Area | Current live (post new_page) | New (CR Wave A) | Action |
|------|------------------------------|-----------------|--------|
| Entry location | `locationKm` Number * · entity `LocationKm` · **không** `LocationText` | **+** `entries.locationText` Text · DTO/`LocationText` nvarchar · OR Km\|Text | **GAP-NKTD-LOC-01** |
| Validation | `eventAt` + `locationKm` + `weatherEvent` required | `eventAt` + (`locationKm` **OR** non-empty `locationText`) + `weatherEvent` · View no-req | FE+BE soft OR |
| weatherEvent | Input 1 dòng · field string OK | UI **Textarea** rows=3 maxLength=2000 · **giữ** write field | **GAP-NKTD-WEATHER-01** |
| List grid | thiếu cột vị trí chữ | **luôn** cột «Vị trí» (text ưu tiên · fallback Km) · G-11/G-12 | list projection |
| Persist | `Schema_CsdlSo02` · LocationKm only | **+** col `LocationText` via **`Schema_CsdlSo02LocationText`** CLI pair | migration Dev/4b |
| File | sketch/media text-id | **GAP-SO02-FILE-01** debt · **cấm** invent file API | P1 keep text-id |
| API prefix | `api/v1/asset/csdl-records?resource=patrol-logs` | **giữ** · widen DTO · **cấm** invent `api/v1/patrol-logs` | keep |
| Report | Kind E seed | Wave B `rpt-nhat-ky-tuan-duong` **park** | **GAP-NKTD-RPT-PARK** |
| Sổ 01 `Location` | exists on `CsdlBookEntryEntity` | **không** reuse cho Sổ 02 | **cấm** map `locationText` → `Location` |

**Không đổi (giữ new_page):** BFF proxy · soft-delete · tenant `CompanyCode` · pageSize 50/100/200/500 · LeaveConfirm · filter-bar-layout-hard · routes `/csdl-so-02` + hub · IdCode `SO-` · map none · **cấm** ERP.*.

---

## 1. Ownership (giữ + Wave A delta)

| Layer | Repo / module |
|-------|---------------|
| MFE | `Linm.Web.RMMS.Asset` · `CsdlSo02Page` / `CsdlSo02FormSlideout` · **+** locationText · weather Textarea · list col Vị trí |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | **Asset** — `Domains/Asset/` |
| Controller | `CsdlCatalogRecordsController` · `[Route("api/v1/asset/csdl-records")]` · **giữ** |
| Service | `CsdlCatalogService` · branch `patrol-logs` · **widen** entry map + OR validation |
| Models / DTO | `CsdlSo02Dtos` / entry DTO · **+** `locationText` / `LocationText` |
| Persistence entries | `CsdlBookEntryEntity` · **+** `LocationText` nvarchar(512) · **không** dùng `Location` (Sổ 01) |
| Schema name | **`Schema_CsdlSo02LocationText`** (CLI pair `.cs`+`.Designer.cs` · Dev/4b — **không** chạy ở SA) |
| BFF | `CsdlCatalogRecordsBffController` · **proxy only = yes** |
| FE service | `services/csdlSoSach/endpoint.ts` BASE `/asset/csdl-records` · **giữ** |
| UiSchema | catalogKind `patrol-logs` · seed field `locationText` |
| File | FileService · **GAP-SO02-FILE-01** · **cấm** invent |

### Route / domain

| Surface | Path |
|---------|------|
| UI alias | `/csdl-so-02` |
| UI hub | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| API | `api/v1/asset/csdl-records` |
| BFF | `web-bff/api/v1/asset/csdl-records` |
| FE BASE | `/asset/csdl-records` |

---

## Implement gates (confirm) — RECORDED (giữ)

| Gate | Decision | Note |
|------|----------|------|
| TZ | **`tz_list_and_form`** | list period · form period · entries `eventAt` UTC |
| XCO | **`xco_get_only`** | GET `/{id}` View |
| SHARE | **`share_tenant`** | shell + typed + entries · `CompanyCode` |

AskQuestion (autoApprove=ON · agent confirm): `sa_tz_gate=tz_list_and_form` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-18T03:50:00.000Z`

---

## FormType pack (`list`) — FormMode ↔ API

| FormMode | Load | Save / action | Wave A notes |
|----------|------|---------------|--------------|
| list | GET `?resource=patrol-logs` | — | projection **+** vị trí text (fallback Km) |
| create | empty form + entries | POST | body `entries[].locationText` · OR validation |
| edit | GET `/{id}` | PUT `/{id}` | replace-all entries incl. `locationText` |
| view | GET `/{id}` | — | readOnly · **no-req** OR-rule |
| copy | GET → clear id/code | POST | copy `locationText` |
| delete | — | DELETE soft | unchanged |

### Validation (HARD · cite real-data §B / PO)

- Required (create/edit): `eventAt` · `weatherEvent` · (`locationKm` has value **OR** `locationText` not empty)
- View / Copy load: no-req on OR pair until save
- FE: highlight cả hai field khi thiếu cả hai · toast VN
- BE: mirror OR · **không** bắt buộc `LocationKm` đơn lẻ

---

## 2. Form data analysis — Wave A field map

| uiField | controlHint | dtoField | Persist | Notes |
|---------|-------------|----------|---------|-------|
| entries[].locationKm | Number | LocationKm | `CsdlBookEntryEntity.LocationKm` | soft OR · giữ |
| **entries[].locationText** | **Text** | **LocationText** | **`CsdlBookEntryEntity.LocationText`** nvarchar(512) | **GAP-NKTD-LOC-01** · **cấm** map → `Location` |
| entries[].weatherEvent | **Textarea** rows=3 max=2000 | WeatherEvent | `WeatherEvent` nvarchar(2000) | UI-only change · field giữ |
| (list) Vị trí | — | derived | prefer `LocationText` else format Km | G-11/G-12 |

Header / shell / typed / other entries: **giữ** prior new_page map (real-data §B).

### Typed DTO delta

`entries[]` **+** `locationText` (string | null) on GET/POST/PUT 1:1.

List row: include `locationText` (and/or display `locationDisplay`) for cột «Vị trí».

### UiSchema

catalogKind `patrol-logs` — seed **`locationText`** Text beside `locationKm` · weather control → Textarea.

### File bind

| Field | Rule |
|-------|------|
| sketchRef / mediaIds | **GAP-SO02-FILE-01** · text-id P1 · **cấm** invent file API / picker Wave A |

---

## 3. API catalog (giữ prefix · widen body)

| ID | Method | Path | Wave A |
|----|--------|------|--------|
| API-01 | GET | `/web-bff/api/v1/asset/csdl-records?resource=patrol-logs&…` | list + vị trí |
| API-02 | GET | `/web-bff/api/v1/asset/csdl-records/{id}` | entries + `locationText` |
| API-03 | POST | `/web-bff/api/v1/asset/csdl-records` | body + `locationText` · OR validate |
| API-04 | PUT | `/web-bff/api/v1/asset/csdl-records/{id}` | same |
| API-05 | DELETE | `/web-bff/api/v1/asset/csdl-records/{id}` | soft · giữ |
| API-LKP-01 | GET | `/web-bff/api/v1/integration/road-routes/search` | giữ |
| API-FILE | POST | FileService upload | debt · không block Wave A form |

API mirror `api/v1/asset/…`. **Cấm** invent `api/v1/patrol-logs`.

---

## 4. Entity / migration (plan only — Dev/Step 4b)

| Item | Spec |
|------|------|
| Entity | `CsdlBookEntryEntity` **+** `public string? LocationText { get; set; }` · `[MaxLength(512)]` |
| Table | `rmms_csdl_book_entries` · col `LocationText` nvarchar(512) null |
| **Cấm** | reuse column `Location` (Sổ 01) cho Sổ 02 `locationText` |
| Migration name | **`Schema_CsdlSo02LocationText`** |
| CLI | pair `.cs` + `.Designer.cs` · **cấm** Write tay Schema · **cấm** Schema+Seed 1 file |
| Backfill | optional none (new nullable) |
| Validation code | replace hard `LocationKm` required → OR (`LocationKm` OR non-empty `LocationText`) when resource=patrol-logs |
| Map | Create/Update/Detail entry mappers · list projection |
| **SA** | document only · **cấm** chạy migration / Step 4b |

---

## 5. BFF vs API

| Concern | Decision |
|---------|----------|
| BFF | **proxy only** — forward body/query · no remap |
| Validation | API service OR-rule + weather/eventAt |
| Permissions | reuse `asset.csdl-records.*` |
| Errors | 422 validation · 404 detail · **cấm** alert |

---

## 6. Tasks for Team Lead (Wave A ids)

| ID | Scope |
|----|-------|
| T-BE-LOC-01 | Entity + EF `LocationText` on `CsdlBookEntryEntity` |
| T-BE-LOC-02 | Migration **`Schema_CsdlSo02LocationText`** CLI pair (Dev/4b) |
| T-BE-LOC-03 | DTO map GET/POST/PUT · list projection vị trí |
| T-BE-LOC-04 | Validation OR Km\|Text · View no-req |
| T-BFF-01 | verify proxy unchanged |
| T-FE-LOC-01 | Form: `locationText` Text cạnh `locationKm` · OR UX |
| T-FE-LOC-02 | `weatherEvent` → Textarea rows=3 maxLength=2000 |
| T-FE-LOC-03 | List luôn cột «Vị trí» · G-11/G-12 |
| T-FE-LOC-04 | UiSchema seed `locationText` |
| T-FILE-01 | **GAP-SO02-FILE-01** keep text-id · không invent picker |
| T-RPT-PARK | **GAP-NKTD-RPT-PARK** · park report Wave B |
| T-CR-TASK | TL: T-* từ `specs/_cr/nktd-pdf-20260917/task-csdl-so-02.md` · **cấm** overwrite `task/csdl-so-02.md` |

Prior new_page T-* completed — **không** re-open trừ regression.

---

## 7. Open questions

- **none** (Q-LOC-REQ · Q-WEATHER · Q-FILE · Q-LIST-COL chốt PO/Design · autoApprove)

## 8. Cấm (SA)

- ERP.* · invent `api/v1/patrol-logs` · invent map · invent file API  
- Reuse `Location` (Sổ 01) cho `locationText` · wipe new_page · Guid IdCode · merge Sổ TS  
- Write MFE/native · yarn build/e2e/start:std · Step 4b/migration/e2e @ SA  
- parent `*Json` · re-scan demo · enqueue report Wave B  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.25.01 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| packKind | list |
| changeScope | edit_page |
| solution_confirm | approve |
| writtenAt | 2026-09-18T03:50:00.000Z |
| contentHashPrior | sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6 |
| headerFingerprintPrior | sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471 |
| cr | nktd-pdf-20260917 |
