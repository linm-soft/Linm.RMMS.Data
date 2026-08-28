# Team lead — Task — kcht-cong-trinh (Công trình KCHT · Khu QLĐB IV)

> Team lead · `/agent-team-lead` · `task_ed77c1b0` · autoApprove ON  
> Status: **done** · `route_confirm` = Design/SA (autopilot) · `2026-08-27T00:15:00.000Z`  
> Serial by page+layer · **cấm** parallel same parcel/common file  
> **Cấm** implement product code ở role TL · **cấm** e2e / `yarn start:std` / build

| Field | Value |
|-------|-------|
| feature | `kcht-cong-trinh` |
| title | [Team lead] Công trình KCHT — Kind B list + full-page 4 tab |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` |
| packKind | **`list`** (Kind **B** catalog A–D+F + **full-page** form **4 tab**) |
| formType | **`list`** + full-page multi-tab form |
| changeScope | `new_page` |
| gap | `crud_formtype` · GAP-KCT-01…09 |
| mode | `feature_context` · sourceKind=synthetic · **no Excel** · **no GOVOne demo** |
| design_confirm | **approve** (`task_64fb2fd7`) |
| solution_confirm | **approve** (`task_dd7ab2e1`) |
| route_confirm | **locked** (autopilot) — § route_confirm |
| be_repo_confirm | **`Linm.RMMS.WebService`** |
| ui_repo_confirm | **`Linm.Web.RMMS.Contract`** |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` only |
| Dev slash | **`/agent-dev`** · Step 4b `/database-migration` + `/new-endpoint` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Contract** widen × **KchtProject** NEW |
| mfeStdRoute | `/kcht-cong-trinh` |
| mfeStdUrl | `http://localhost:9301/kcht-cong-trinh` |
| prior · data_analy | **done** · `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` · `kcht-cong-trinh-real-data.md` · hash `sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe` |
| prior · po | **done** · `po/requirement.md` · `task_3b4ed0d9` |
| prior · design | **done** · `ui/design.md` + prototype · `task_64fb2fd7` |
| prior · sa | **confirmed** · `be/solution-discovery.md` · `task_dd7ab2e1` |
| taskId | `task_ed77c1b0` |
| TL SSOT | `form-type-task-pack` · `list-form-quality-gates` · `tl-retry-ssot-rereview` · `tl-list-shell-height` · `tl-catalog-list-parity` · `ssot-no-duplicate` · `dev-ui-ux-constitution` · `slideout-form-layout` |

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** Slideout form CT · **cấm** KPI strip wave 1 · **cấm** PH2–PH5 trong wave 1 · **cấm** nhồi CT vào `contract` parent-less.

---

## from design / solution (scope gate)

| Source | Path | Task dùng |
|--------|------|-----------|
| Design | `specs/kcht-cong-trinh/ui/design.md` + prototype A–D+F + full-page 4 tab | T-UI-LIST · T-UI-CFG · T-UI-FORM · T-UI-TAB-* · T-CTX |
| Solution | `specs/kcht-cong-trinh/be/solution-discovery.md` | T-BE-KCT-* · T-BFF-KCT-01 · T-PERM-KCT-01 · TZ/XCO/SHARE |
| Prototype | `ui/prototype/kcht-cong-trinh-prototype.html` | UI DoD parity |
| controlHint | `specs/_data-analy/features/kcht-cong-trinh-control-hint.md` · hash `sha256:77c91b35…` | T-UI-LKP · T-UI-FIELD |
| PO | `po/requirement.md` | DoD đo được · Grid AC · Leave §8 |
| Context | `docs/context/features/kcht-cong-trinh.md` | T-CTX-01 · DOMAIN-MAP row |

**SA chốt:** prefix **`api/v1/kcht-ct/projects`** · BFF proxy-only · migration **IN P1** (4 tables + widen contracts) · province **P1 FE static** · ownerUserId **optional P1** · FileService presign tab 3 · **cấm** parent JSON blob.

---

## route_confirm (LOCKED · autopilot)

AskQuestion `route_confirm` **skipped wait** (`autoApprove=ON`) · chốt routes Design + SA §2.

| Key | Path | Notes |
|-----|------|-------|
| **mfeStdRoute** | `/kcht-cong-trinh` | List Kind B catalog |
| S-LIST | `/kcht-cong-trinh` | Zone A–D+F |
| S-FORM-CREATE | `/kcht-cong-trinh/tao-moi` | full-page 4 tab · create |
| S-FORM-EDIT/VIEW | `/kcht-cong-trinh/:id` | `?mode=view` view `<dl>` · edit default |
| S-HD-HANDOFF | `/hd-ns/:contractId?from=kcht&projectId={id}` | read-only ↗ từ tab Hợp đồng · **reuse** route HĐ live |
| PH2–PH5 | — | **Cấm** route mới wave 1 |

**source.routes (confirmed):**

```text
list:     /kcht-cong-trinh
create:   /kcht-cong-trinh/tao-moi
detail:   /kcht-cong-trinh/:id
handoff:  /hd-ns/:contractId?from=kcht&projectId={projectId}
```

**Dev MUST:** register routes trong `src/index.tsx` · `devRoutes.ts` · webpack mount guide (peer `/kcht-cong-trinh` when host mounts).

---

## Platform SSOT

| Layer | Package / repo | Consume |
|-------|----------------|---------|
| **UI** | `@linm-soft-org/linm-web-common-components` | `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LeaveConfirmModal` |
| **MFE cite** | `ContractListPage` · `ContractFormPage` | Kind B list shell + full-page form shell — **add** 4 tab + KCHT services |
| **BE** | `D:/AI-QLBD/Linm.RMMS.WebService` · **Contract** domain widen | `KchtProjectsController` · junction + child tables |
| **BFF** | `LINM.RMMS.Contract.Bff` | `KchtProjectsBffController` proxy-only |
| **Integration** | road-route · org-unit · partner-unit · users (P2 scope) | SearchInput live cite |
| **File** | FileService `/integrate-file-upload-web` | presign · metadata on `rmms_kcht_project_attachments` |
| **Auth** | `kcht.projects.read\|create\|update\|delete` | FE gate · BE stub `[RequirePermission]` **OUT pack** |

### ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| List shell | Pattern `ContractListPage` | nested `CatalogListShell` · raw table pager · KPI strip PH1 |
| Form shell | Pattern `ContractFormPage` + **tab bar** | Slideout · Resource · View=`readOnly` Input xám |
| Lookups | `orgLookupConfig()` Integration + in-memory enum | native `<select>` · free-text master substitute |
| Province P1 | FE static `PROVINCE_LOOKUP` (align pavement-section) | invent Integration GET P1 |
| Contract child | `contractService` + `/hd-ns` handoff | delete contract row on unlink |
| HTTP | `apiClient` → BFF | local ApiClient fork |
| Ui-schema | Integration `catalogs/kcht-projects/ui-schema` | clone schema vào Contract BFF |
| ERP | — | `ERP.Service.*` · `api/v1/rmms/*` |

---

## Source assignment (`be_repo_confirm` · `ui_repo_confirm`)

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` |
| `source.routes` | `/kcht-cong-trinh` · `/kcht-cong-trinh/tao-moi` · `/kcht-cong-trinh/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Contract** (`Domains/Contract/`) |
| `source.api` | `KchtProjectsController` · route `api/v1/kcht-ct/projects` |
| `source.bff` | `bff/domains/contract/LINM.RMMS.Contract.Bff/` · `KchtProjectsBffController` |
| `source.persistence` | `KchtProjectEntity` · `KchtProjectDecisionEntity` · `KchtProjectContractEntity` · `KchtProjectAttachmentEntity` · widen `ContractEntity` |
| `source.migrations` | 4 tables + widen `rmms_contracts` — **IN P1** |
| `source.uiSchema` | Integration kind **`kcht-projects`** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/kcht-cong-trinh/ui/prototype/kcht-cong-trinh-prototype.html` |
| `mfeStdUrl` | `http://localhost:9301/kcht-cong-trinh` |

---

## API contract (from SA — Dev P1)

Base API: `api/v1/kcht-ct` · BFF: `web-bff/api/v1/kcht-ct` · FE service prefix: `/kcht-ct/projects`.

| id | Method | Path | Perm | Notes |
|----|--------|------|------|-------|
| API-01 | GET | `/kcht-ct/projects` | read | filters §PO · pageSize 50/100/200/500 |
| API-02 | GET | `/kcht-ct/projects/{id}` | read · **XCO** | include decisions · contracts summary · attachments metadata |
| API-03 | POST | `/kcht-ct/projects` | create | IdCode `CT-yyyyMMdd-nnnn` · optional nested decisions |
| API-04 | PUT | `/kcht-ct/projects/{id}` | update | replace decision lines |
| API-05 | DELETE | `/kcht-ct/projects/{id}` | delete | soft `IsActive=false` |
| API-06 | GET | `/kcht-ct/projects/{id}/contracts` | read | junction linked HĐ |
| API-07 | POST | `/kcht-ct/projects/{id}/contracts` | update | link or create+link |
| API-08 | DELETE | `/kcht-ct/projects/{id}/contracts/{contractId}` | update | unlink only |
| API-09 | GET | `/kcht-ct/projects/{id}/attachments` | read | metadata |
| API-10 | POST | `/kcht-ct/projects/{id}/attachments` | update | bind after presign |
| API-11 | DELETE | `/kcht-ct/projects/{id}/attachments/{attachmentId}` | update | soft-delete ref |
| C-01…04 | * | `/contract/contracts` | reuse | child HĐ CRUD + handoff read-only |
| UI-06/07 | GET/PUT | `/integration/catalogs/kcht-projects/ui-schema` | read/update | Zone F schema |

BFF: **proxy only** — forward `Request.QueryString` (**T-BFF-KCT-01**).

---

## Implement gates (from SA)

| Gate | Decision | Apply | Skill |
|------|----------|-------|-------|
| TZ | **tz_na** (list) | List filter **không** date P1 · form dates UTC store | `/review-timezone-implement` |
| XCO | **xco_get_only** | API-02 GET by id | `/implement-view-cross-company` |
| SHARE | **share_tenant** | `KchtProjectEntity` · `ContractEntity` · `ICompanyContext` | `/implement-shared-table` |

---

## System design checklist

| ID | Chuẩn | Status | Notes |
|----|-------|--------|-------|
| SD-LIB-UI | Lin* only | **required** | Kind B A–D+F + full-page 4 tab |
| SD-BFF | `/create-bff-api-feature` | **required** | proxy-only KchtProjectsBffController |
| SD-AUTH | `/review-ui-authentication` | stub | `kcht.projects.*` · RequirePermission OUT pack |
| SD-NO-JSON | flat scalars + child tables | **required** | **cấm** parent JSON blob |
| SD-SEARCH | pageSize 50/100/200/500 | **required** | list |
| SD-TZ | tz_na list | **required** | form UTC dates |
| SD-XCO | get_only | **required** | detail GET |
| SD-TENANT | share_tenant | **required** | junction children follow parent tenant |
| SD-JOB | `/review-event-job` | **n/a** | wave 1 |
| T-BE-INIT | **n/a P1** | enums in-memory + Integration lookups |
| T-UI-MAP-FORM | **n/a** | packKind=list |

---

## retry.ssot_rereview (TL live cite · `new_page` · trước Dev Write)

Audit `Linm.Web.RMMS.Contract` live inventory 2026-08-27 — **cite** `ContractListPage` / `ContractFormPage` · **GAP expected** cho surfaces KCHT chưa ship.

| # | Check | Live cite / target | Verdict |
|---|-------|-------------------|---------|
| 1 | 1× `LinPageLayout` kind=catalog — cấm nested `CatalogListShell` | ContractListPage **PASS** | reuse |
| 2 | Footer `LinCatalogListPagination` 50/100/200/500 | ContractListPage **PASS** | reuse |
| 3 | Flex + skeleton + LAYOUT-06 | ContractListPage **PASS** | reuse |
| 4 | Toolbar: refresh · history · config · delete · **Tạo mới chỉ Zone B** | ContractListPage **PASS** | reuse + relabel |
| 5 | Filter SearchTextInput + SearchInput → page=1 | Contract 4 filter **PARTIAL** — KCHT cần 8 filter | **GAP-KCT-FILTER-01** |
| 6 | `LinCatalogDataGrid` + column resize ON + schema-driven | ContractListPage **PASS** pattern | reuse kind `kcht-projects` |
| 7 | Zone F `LinCatalogUiSchemaEditorModal` — cấm `configHint` | Contract wired FE · BE seed **GAP** | **T-BE-SCHEMA-KCT-01** |
| 8 | Empty list «Chưa có công trình» — cấm fake row | Contract empty OK | reuse pattern |
| 9 | KPI strip metric cards | **OUT** wave 1 | **PASS** không thêm |
| 10 | Route `/kcht-cong-trinh*` registered | **MISSING** — chỉ `/hd-ns` | **GAP-KCT-UI-01** |
| 11 | Form full-page 4 tab index 0–3 lock | ContractFormPage **no tabs** | **GAP-KCT-UI-01** |
| 12 | View = `<dl>` — cấm Input readOnly xám | ContractFormPage view **PASS** | reuse |
| 13 | Tab 1 inline grid QĐ · Tab 2 child HĐ · Tab 3 FileService | **MISSING** | **GAP-KCT-DECISION-01** · **GAP-KCT-CHILD-HD-01** · **GAP-KCT-FILE-01** |
| 14 | Lookup SearchInput Integration road/org/partner | Contract demo seed local **PARTIAL** | **GAP-KCT-LOOKUP-01** |
| 15 | Province SearchInput P1 static | **MISSING** in Contract MFE | **IN** Dev static lookup |
| 16 | Lin confirm — cấm `window.confirm` | ContractListPage/FormPage dùng `window.confirm` **FAIL** | **GAP-TL-CONFIRM-01** |
| 17 | KchtProject API live | **GAP** net-new | **T-BE-KCT-01** |
| 18 | ERP.* / `api/v1/rmms/*` | none on cite | **PASS** |
| 19 | Handoff `/hd-ns/:id?from=kcht&projectId=` | route `/hd-ns/:id` **PASS** · query handler **GAP** | **T-UI-HANDOFF-01** |
| 20 | Slideout form CT | none | **PASS** cấm |

**Cấm** Dev chỉ patch 1 chỗ nếu còn GAP cùng surface. Dev **phải** copy bảng này vào `implement/kcht-cong-trinh.md` và re-audit sau Write.

---

## Live GAP → task map

| ID | Gap | Task |
|----|-----|------|
| GAP-KCT-UI-01 | Route + pages KCHT chưa có | **T-UI-ROUTE-01** · **T-UI-LIST-01** · **T-UI-FORM-01** |
| GAP-KCT-FILTER-01 | 8 filter Zone B | **T-UI-LIST-01** |
| GAP-KCT-LOOKUP-01 | Integration SearchInput | **T-UI-LKP-01** |
| GAP-KCT-DECISION-01 | Tab QĐ child grid | **T-UI-TAB-DECISION-01** |
| GAP-KCT-CHILD-HD-01 | Tab HĐ junction | **T-UI-TAB-CONTRACT-01** |
| GAP-KCT-FILE-01 | Tab File presign | **T-UI-TAB-FILE-01** |
| GAP-KCT-API-01 | API scaffold | **T-BE-KCT-01** · **T-BFF-KCT-01** |
| GAP-SA-SCHEMA-KCT | ui-schema kind missing | **T-BE-SCHEMA-KCT-01** · **T-UI-CFG-01** |
| GAP-TL-CONFIRM-01 | `window.confirm` on cite pages | **T-UI-ACT-01** · **T-UI-UX-01** (KCHT pages Lin confirm from day 1) |
| GAP-TAB-01 | Tab index 0–3 lock | **T-UI-FORM-01** |
| GAP-TYP-01 | Typography label 13 · input D14/M16 | **T-UI-UX-01** |
| PH2–PH5 | đoạn tuyến · tiến độ · giải ngân · BC | **DEFER** |

---

## FormType pack (canonical — `form-type-task-pack` §2a list + full-page form)

### T-CTX-01
**layer:** docs  
**status:** **pending**  
**DoD:**
- [ ] Add `kcht-cong-trinh` row DOMAIN-MAP → Contract widen
- [ ] Context `docs/context/features/kcht-cong-trinh.md` align route `/kcht-cong-trinh` + API prefix
- [ ] **cấm ERP.*** · **cấm** `api/v1/rmms/*`

### T-PERM-KCT-01
**layer:** ui+api  
**status:** **pending**  
**DoD:**
- [ ] FE `kchtProjectListPermissions` · codes `kcht.projects.read|create|update|delete`
- [ ] BE `[RequirePermission]` stub **OUT pack** (NuGet TODO)

### T-BE-KCT-01
**layer:** api  
**status:** **pending**  
**from_solution:** API-01…05 · API-06…11  
**source:** `Domains/Contract/` · `KchtProjectsController`  
**skills:** `/new-endpoint` · `/implement-view-cross-company` · `/implement-shared-table`  
**DoD:**
- [ ] CRUD projects + nested decisions in GET/PUT DTO
- [ ] List query: search · projectType · roadRouteCode · provinceCode · orgUnitCode · bqlOrgUnitCode · ownerUserId · contractorCode · status · page · pageSize
- [ ] IdCode `CT-yyyyMMdd-nnnn` on create
- [ ] Soft delete · XCO get_only · share_tenant
- [ ] Junction contracts + attachments endpoints
- [ ] **cấm** parent JSON · **cấm ERP.***

### T-BE-KCT-02
**layer:** migration  
**status:** **pending** · deps: T-BE-KCT-01  
**skills:** `/database-migration`  
**DoD:**
- [ ] `rmms_kcht_projects` · `rmms_kcht_project_decisions` · `rmms_kcht_project_contracts` · `rmms_kcht_project_attachments`
- [ ] Widen `rmms_contracts` KCHT date/appendix fields §SA
- [ ] `dotnet build` PASS

### T-BE-KCT-03
**layer:** api  
**status:** **pending** · deps: T-BE-KCT-02  
**DoD:**
- [ ] Widen `ContractEntity` + DTO KCHT fields (startDate · completionDate · durationMonths · extensionDate · completionAfterExtension · adjustedAmount · appendices)
- [ ] Reuse `ContractsController` for child HĐ create/update

### T-BE-SCHEMA-KCT-01
**layer:** api Integration  
**status:** **pending** · deps: T-BE-KCT-02  
**from_solution:** GAP CatalogUiSchema `kcht-projects`  
**DoD:**
- [ ] Registry + Seed kind **`kcht-projects`** — cols Design Zone C
- [ ] `GET/PUT api/v1/integration/catalogs/kcht-projects/ui-schema`
- [ ] **cấm** `configHint` · **cấm** clone vào Contract BFF

### T-BFF-KCT-01
**layer:** bff  
**status:** **pending** · deps: T-BE-KCT-01  
**skills:** `/create-bff-api-feature`  
**DoD:**
- [ ] `KchtProjectsBffController` proxy GET list **forward QueryString**
- [ ] GET/{id} · POST · PUT · DELETE · nested contracts/attachments routes
- [ ] Ui-schema **không** qua Contract BFF

### T-UI-ROUTE-01
**layer:** ui  
**status:** **pending** · deps: T-CTX-01  
**DoD:**
- [ ] Register `/kcht-cong-trinh` · `/kcht-cong-trinh/tao-moi` · `/kcht-cong-trinh/:id` in `index.tsx` + `devRoutes.ts`
- [ ] Lazy pages `KchtProjectListPage` · `KchtProjectFormPage`
- [ ] **cấm** break existing `/hd-ns` routes

### T-UI-LIST-01
**layer:** ui  
**status:** **pending** · deps: T-BFF-KCT-01 · T-UI-ROUTE-01  
**DoD zones A–D+F:**
- [ ] A: title «Công trình KCHT» · **cấm** Tạo mới trên A
- [ ] B: SearchTextInput + 7 SearchInput filter + refresh · history · config · delete | Tạo mới primary
- [ ] C: `LinCatalogDataGrid` schema-driven · row menu Xem/Sửa/Xóa/Lịch sử
- [ ] D: `LinCatalogListPagination` 50/100/200/500
- [ ] F: `LinCatalogUiSchemaEditorModal` kind=`kcht-projects`
- [ ] Empty «Chưa có công trình» · filter → page=1 · LAYOUT-06

### T-UI-CFG-01
**layer:** ui  
**status:** **pending** · deps: T-BE-SCHEMA-KCT-01 · T-UI-LIST-01  
**DoD:**
- [ ] `useCatalogUiSchema('kcht-projects')` · `buildDynamicGridColumns`
- [ ] **cấm** `LinListTableConfigModal` editor cột · leftover `const columns`

### T-UI-FORM-01
**layer:** ui  
**status:** **pending** · deps: T-BFF-KCT-01 · T-UI-ROUTE-01  
**DoD:**
- [ ] Full-page C/E/V · footer Lưu/Hủy · **4 tab index 0 Chung · 1 QĐ · 2 HĐ · 3 File** — **cấm** reorder (**GAP-TAB-01**)
- [ ] View = `<dl>` · IdCode readonly `CT-yyyyMMdd-nnnn`
- [ ] Tab 0 required fields PO §3 · leave-confirm dirty
- [ ] **cấm** Slideout · **cấm** Resource

### T-UI-TAB-DECISION-01
**layer:** ui  
**status:** **pending** · deps: T-UI-FORM-01  
**DoD:**
- [ ] Inline grid decisions · add/remove Lin confirm
- [ ] Required decisionKind · decisionNo · decisionDate
- [ ] Nested in project PUT or dedicated endpoint per SA

### T-UI-TAB-CONTRACT-01
**layer:** ui  
**status:** **pending** · deps: T-UI-FORM-01 · T-BE-KCT-03  
**DoD:**
- [ ] 1–n HĐ list · link existing · create child via `POST /contract/contracts` + junction
- [ ] Unlink junction **cấm** delete contract row
- [ ] Open ↗ `/hd-ns/:id?from=kcht&projectId={id}` read-only handoff

### T-UI-TAB-FILE-01
**layer:** ui  
**status:** **pending** · deps: T-UI-FORM-01  
**DoD:**
- [ ] Upload presign `/integrate-file-upload-web` · POST bind metadata API-10
- [ ] Download presign GET · delete soft ref · **cấm** bytes on business DB

### T-UI-HANDOFF-01
**layer:** ui  
**status:** **pending** · deps: T-UI-TAB-CONTRACT-01  
**DoD:**
- [ ] `ContractFormPage` read-only when `from=kcht` query (or dedicated view mode)
- [ ] Back link → `/kcht-cong-trinh/:projectId`

### T-UI-ACT-01
**layer:** ui  
**status:** **pending** · deps: T-UI-LIST-01 · T-UI-FORM-01  

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search + 7 filters | S-LIST | applyFilters page=1 | GET API-01 |
| Refresh | toolbar | reloadAll | GET |
| +Tạo mới | toolbar B | `/kcht-cong-trinh/tao-moi` | POST |
| Row Xem/Sửa/Xóa/Lịch sử | grid | row menu | GET/PUT/DELETE |
| Config | toolbar | schema modal | ui-schema |
| Form Lưu/Hủy | footer | create/update | POST/PUT |
| Tab QĐ add/remove | tab 1 | inline grid | nested |
| Tab HĐ link/create/unlink | tab 2 | junction | API-06…08 · C-01…02 |
| Tab File up/down/del | tab 3 | presign + bind | API-09…11 |
| Open HĐ ↗ | tab 2 | navigate handoff | C-04 |

**DoD:** Lin confirm all deletes · dirty leave · **cấm** `window.alert` / `window.confirm` on **new** KCHT pages.

### T-UI-LKP-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] SearchInput enums: projectType · status · continuityKind · decisionKind · contract type · capitalSourceKind · docKind — in-memory `useFormOptions()`
- [ ] Integration: road-route · org-unit · partner-unit · users (owner optional P1)
- [ ] Province **static FE** P1 — **cấm** Integration GET P1
- [ ] **cấm** native `<select>`

### T-UI-FIELD-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] controlHint ↔ DTO field map SA §3 · PO §5
- [ ] List query keys khớp API-01
- [ ] Money · Date UTC write · local display FE

### T-UI-PROD-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] **cấm** Slideout · Resource · KPI strip · GOVOne chrome
- [ ] Form = `KchtProjectFormPage` full-page 4 tab only

### T-UI-UX-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] Typography label 13 · input D14/M16 (**GAP-TYP-01**)
- [ ] spacing 4/8/16 · toast 4xx/5xx · `dev-ui-ux-constitution`
- [ ] **cấm** `filterMaxWidthPx` ad-hoc on list layout

### T-UI-SVC-01
**layer:** ui  
**status:** **pending**  
**DoD:**
- [ ] `src/services/kchtProject/endpoint.ts` · `kchtProjectService.ts` · request/response models
- [ ] FE BASE `/kcht-ct/projects` via BFF
- [ ] `catalogUiSchemaService` kind `kcht-projects`

### T-QA-CRUD-01
**layer:** qa  
**status:** **pending** (QA role — **cấm** TL/Dev e2e)  
**deps:** all Dev tasks  
**DoD:**
- [ ] Smoke list A–D+F + Create→Edit→View `<dl>`→Delete + row menu
- [ ] 4 tab save paths · handoff HĐ read-only
- [ ] Zone F schema kind `kcht-projects`
- [ ] Lin confirm · toast errors
- [ ] mfeStdUrl `http://localhost:9301/kcht-cong-trinh`
- [ ] Update `qa/scenarios.md`

---

## Screens (form-type-task-pack)

| id | Surface | Pattern | Route | Tab index | Actions |
|----|---------|---------|-------|-----------|---------|
| S-LIST | Kind B catalog A–D+F | list | `/kcht-cong-trinh` | — | search · 7 filter · Tạo mới · Refresh · Delete · config · History |
| S-FORM-CREATE | full-page 4 tab | create | `/kcht-cong-trinh/tao-moi` | 0–3 lock | Lưu · Hủy · leave-confirm |
| S-FORM-EDIT | full-page 4 tab | edit | `/kcht-cong-trinh/:id` | 0–3 | Lưu · Hủy |
| S-FORM-VIEW | full-page 4 tab | view | `/kcht-cong-trinh/:id?mode=view` | 0–3 | `<dl>` · Sửa header |
| S-HD-HANDOFF | Contract detail | view | `/hd-ns/:contractId?from=kcht&projectId={id}` | — | ↗ read-only |
| S-SKIP | PH2–PH5 | — | — | — | **Cấm** wave 1 |

---

## Deps

```
T-CTX-01 → T-PERM-KCT-01 · T-UI-ROUTE-01
T-BE-KCT-01 → T-BE-KCT-02 → T-BE-KCT-03
T-BE-KCT-02 → T-BE-SCHEMA-KCT-01
T-BE-KCT-01 → T-BFF-KCT-01
T-BFF-KCT-01 + T-UI-ROUTE-01 → T-UI-LIST-01
T-BE-SCHEMA-KCT-01 → T-UI-CFG-01
T-BFF-KCT-01 + T-UI-ROUTE-01 → T-UI-FORM-01
T-UI-FORM-01 → T-UI-TAB-DECISION-01 · T-UI-TAB-CONTRACT-01 · T-UI-TAB-FILE-01
T-BE-KCT-03 + T-UI-TAB-CONTRACT-01 → T-UI-HANDOFF-01
T-UI-LIST-01 · T-UI-FORM-01 → T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01
T-UI-SVC-01 → T-BFF-KCT-01
(all UI) → T-QA-CRUD-01
```

---

## Handoff → Dev (`/agent-dev`)

| Field | Value |
|-------|-------|
| Next | Dev **pending** chain · autoApprove ON · roleOnly=`dev` |
| Step 4b | `/database-migration` T-BE-KCT-02 · `/new-endpoint` T-BE-KCT-01 on Contract domain |
| Anti-dup | **cấm** clone ContractListPage verbatim without KCHT filters/tabs · **cấm** ERP.* · **cấm** Slideout |
| Delta IN | Net-new KCHT surfaces §Live GAP map · reuse Contract Kind B + full-page patterns |
| Verify | CRUD API-01…11 · list A–D+F · 4 tab · View `<dl>` · handoff HĐ · File presign · TZ na · XCO GET · SHARE tenant |
| UI SSOT | `Linm.Web.RMMS.Contract` · `/kcht-cong-trinh` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Contract widen + Integration ui-schema |
| HARD | `tl-retry-ssot-rereview` · stamp `retry.ssot_rereview` on implement MD |
| Build | MFE `yarn build` PASS · BE `dotnet build` PASS — **cấm** Dev completed nếu fail |
| Out of pack | PH2–PH5 · KPI strip · RBAC 111 user · province Integration GET P2 · RequirePermission mount · ERP.* |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.21.01 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.21.01 |
| rulesVersion | 2026.08.25.4 |
| generatedAt | 2026-08-27T00:15:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe |
| orchestratorSkillVersion | 2026.08.21.01 |
| saSkillVersion | 2026.08.21.01 |
| designSkillVersion | 2026.08.21.01 |
| poSkillVersion | 2026.08.21.01 |
| dataAnalySkillVersion | 2026.08.21.01 |
| formTypePack | task_ed77c1b0 · gap=crud_formtype · changeScope=new_page |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.21.01 schemaVersion=qldb-workflow-skill-v1 workflowVersion=2026.08.21.01 rulesVersion=2026.08.25.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:77c91b35d170a15297c00fd9219f11fbe1f9e51bcab589c0c9b1d7283c702bbe taskId=task_ed77c1b0 -->
