# Team-lead — citizen (Cổng người dân)

| Field | Value |
|-------|-------|
| feature | `citizen` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| packKind | `list` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| runMode | `full_pipeline` |
| taskId | `task_02c1095b` |
| prior · sa | `confirmed` · `be/solution-discovery.md` · `task_de8336cd` |
| prior · design | `confirmed` · `ui/design.md` + prototype · `task_5c19b559` |
| prior · po | `done` · GAP-PO-CIT-01..10 · `task_a77e191e` |
| prior · data_analy | `done` · hash `aed65b28a0…` · `task_067181fe` |
| updatedAt | `2026-08-14T17:40:00.000Z` |
| autoApprove | **ON** |

> TL emit T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · **T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX** · T-BE/BFF.  
> **Cấm** rewrite Kind B shell đã PASS. **Cấm** Slideout/Resource. **Cấm** `ERP.*` · `api/v1/rmms/*`.  
> **≠** Mobile **Góp ý** (`feedback`).

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` | `ui_repo_confirm=approve` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Integration** | `be_repo_confirm=approve` |
| Routes | `mfeStdRoute=/integration/citizen` · `mfeStdUrl=http://localhost:9314/integration/citizen` | packet |
| API | `api/v1/integration/citizen-incidents` | SA locked |
| BFF | `web-bff/api/v1/integration/citizen-incidents` | proxy-only |
| Lookup | `api/v1/integration/road-routes/search` | LKP-01 |

## Live SSOT re-review (HARD — trước Write)

Audit `CitizenListPage` + `CitizenFormPage` + `citizenService`/`citizenEndpoint` + `CitizenIncidentsController`/`CitizenIncidentService` + BFF `BuildListPath` QueryString.

| Gate | Live | Verdict |
|------|------|---------|
| 1× `LinPageLayout` kind=catalog | Có · **không** nested `CatalogListShell` | **PASS** — giữ |
| `LinCatalogDataGrid` + kéo cột default ON | `tableConfig.resizable: true` | **PASS** — giữ |
| Footer `LinCatalogListPagination` | Có · **không** footerPagination / pageSizeBar / raw table | **PASS** — giữ |
| Flex + skeleton | `showTableLoading` · `skeletonRows={8}` | **PASS** — giữ |
| Toolbar config | refresh · history · fa-cog · create · edit/view/delete | **PASS** — giữ |
| list_parity Kind B A–D | Header + filters + grid + pager | **PASS** shell |
| tree_master | n/a | **n/a** |
| Form full-page | `CitizenFormPage` · routes `/new` · `/:id` · View `<dl>` · footer Lưu/Hủy · leave-confirm | **PASS** shell |
| Zone B filter `road` SearchInput | Chỉ search + status · **không** tuyến | **GAP** |
| Form `road` | `Input` Text · **không** SearchInput road-route | **GAP** |
| FE `getList` param `road` | endpoint/service **không** có `road` | **GAP** |
| BE `GET` query `road` | `GetList(search, status, page, pageSize)` only | **GAP-SA-CIT-Q01** |
| BE Road ∈ catalog · enum allow-list | `ValidateRequired` only · **không** `DbSet<RoadRouteEntity>` | **GAP-SA-CIT-VAL** |
| FE gọi `road-routes/search` | **0** usage trong Integration MFE | **GAP-SA-CIT-LKP** |
| BFF query passthrough | `Request.QueryString` as-is | **PASS** verify — không controller mới |
| Perm FE | `integration.citizen-incidents.*` | **PASS** — giữ |
| Migration | `Schema_RmmsCitizenIncidents` đã có | **n/a** — **không** schema mới |
| Seed display | `QL.1` demo | **PASS** nếu không invent mã lạ |

`retry.ssot_rereview` = **done** this turn · **cấm** chỉ patch 1 chỗ nếu còn GAP cùng surface (list filter + form LKP + BE query + VAL + FE param = **cùng pack P1**).

## DES-GRID → Lin\*

| Zone | Component | DoD |
|------|-----------|-----|
| A | `LinPageLayout` header `fa-users` «Cổng người dân» | 1 shell · **cấm** Thêm mới trên A · badge ≠ feedback |
| B | `catalogToolbar` + `ErpListHeaderFilters` | refresh · history stub · fa-cog · create · **SearchInput road** |
| C | `LinCatalogDataGrid` | resize default ON · row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| D | `LinCatalogListPagination` | 50/100/200/500 · **cấm** footerPagination/pageSizeBar |

## Tasks (canonical — `form-type-task-pack` · `list-form-quality-gates`)

| id | layer | Role | Status | deps | DoD |
|----|-------|------|--------|------|-----|
| T-CTX-01 | docs | Dev | **done** (TL this turn) | — | `docs/context/features/citizen.md`: inbox Kind B · query `?road=` · LKP `road-routes/search` · persist `Road`=code · public Kind G **P2** · **cấm** ERP |
| T-PERM-01 | ui+api | Dev | **done** (verify live) | — | FE `permissions.ts` `integration.citizen-incidents.*` · BE `[RequirePermission]` **TODO stub** giữ |
| T-BE-02 | migration | — | **n/a** | — | `rmms_citizen_incidents` đã có · **không** `Schema_*` mới · index `(CompanyCode, Road)` **P2 OUT** |
| T-BE-01 / T-BE-Q-01 | api | Dev | **pending** | T-CTX-01 | GAP-SA-CIT-Q01: `GET` + `ICitizenIncidentService.GetListAsync` + `road?` exact trim AND search · pageSize 50/100/200/500 · **cấm** ERP |
| T-BE-VAL-01 | api | Dev | **pending** | T-BE-01 | GAP-SA-CIT-VAL: Road set → ∈ `rmms_road_routes.Code` **IsActive** · 422 unknown · Status ∈ 5 · IncidentType ∈ 6 · Source create **force** `citizen` · message VN |
| T-BE-CRUD-01 | api | Dev | **pending** (delta Q+VAL) | T-BE-01 | Verify API-01…05 vẫn PASS + Q01 + VAL · XCO GetById · route Integration · `dotnet build` |
| T-BFF-01 | bff | Dev | **pending** (verify) | T-BE-01 | Proxy-only · `QueryString` đã passthrough `road` · **không** controller mới · smoke `?road=` |
| T-FE-API-01 | ui | Dev | **pending** | T-BFF-01 | `citizenEndpoint.getList` + `citizenService` + localStorage fallback nhận `road` exact |
| T-UI-LIST-01 | ui | Dev | **pending** (delta Zone B) | T-FE-API-01 · T-PERM-01 | **Không** rewrite A–C–D shell. Thêm Zone B SearchInput `road` · filter đổi → `page=1` · search must work |
| T-UI-FORM-01 | ui | Dev | **pending** (delta road) | T-UI-LIST-01 | Giữ full-page C/E/V/Copy · View `<dl>` · footer-only · leave-confirm · **cấm** Slideout/Resource · **cấm** Input `road` |
| T-UI-LKP-01 | ui | Dev | **pending** | T-UI-FORM-01 | Form + Zone B `road` → `GET …/road-routes/search` · display `code — name` · persist **code** · fallback seed 38 **chỉ mã seed** · `incidentType`/`status` SearchInput static (form đã có) |
| T-UI-FIELD-01 | ui | Dev | **pending** | T-UI-LKP-01 | controlHint ↔ DTO: Date UTC · decimal GPS · enum 5/6 · Road code · **cấm** parent JSON |
| T-UI-PROD-01 | ui | Dev | **pending** | T-UI-FORM-01 | Seed `QL.1` · badge ≠ feedback · **cấm** invent tuyến ngoài seed |
| T-UI-UX-01 | ui | Dev | **pending** | T-UI-PROD-01 | constitution · 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · View `<dl>` · spacing 4/8/16 · **cấm** `filterMaxWidthPx` |
| T-UI-ACT-01 | ui | Dev | **pending** (delta road filter) | T-UI-FORM-01 | Inventory dưới · wire filter `road` · **không** regress Delete đã có |
| T-UI-MAP-FORM | — | — | **n/a** | — | packKind=`list` · Leaflet **P2 OUT** |
| T-QA-01 | qa | QA | **pending** | T-UI-UX-01 | `qa/scenarios.md` + mfeStdUrl |
| T-QA-CRUD-01 | qa | QA | **pending** | T-UI-ACT-01 · T-BE-CRUD-01 | Create→Edit→View→Delete + filter road + SearchInput tuyến |

### T-UI-ACT-01 — action inventory

| Action | Surface | Handler | API |
|--------|---------|---------|-----|
| Search | S-LIST filter | `SearchTextInput` → `applyFilters` | GET `?search=` |
| Status filter | S-LIST filter | `SearchInput` static 5 | GET `?status=` |
| **Road filter** | S-LIST filter | `SearchInput` LKP-01 | GET `?road=` **NEW** |
| Refresh | toolbar | `reloadAll` | GET `/` |
| +Tạo mới | toolbar B only | `openCreate` → `/integration/citizen/new` | POST `/` |
| Edit / View / Delete | toolbar | `openRow` / `deleteRow` | GET/PUT/DELETE `/{id}` |
| History | toolbar | stub cần 1 dòng | DEFER |
| Config `fa-cog` | toolbar | config hint | P1 schema later |
| Row View/Edit/Copy/Delete/History | row menu | `handleRowMenuSelect` | same |
| Deep-link `?form=` | URL | create/edit/view/copy | GET `/{id}` |
| Form Save/Cancel | Form footer only | `CitizenFormPage` | POST/PUT |
| Form Quay lại | header Z1 only | `goList` + leave-confirm | — |

**GAP-P2-ACT-DELETE:** **CLOSED** live — `canDelete`/`onDelete` · `showDelete` · `case 'delete'`. **Cấm** regress.

### T-UI-LKP-01 — lookup (SA chốt)

| catalogKind | Surface | API | Persist |
|-------------|---------|-----|---------|
| **road-route** | form `road` + Zone B filter | `GET /integration/road-routes/search?search=&page=&pageSize=` | `CitizenIncident.Road` = **code** (`QL.1`) |
| incidentType static 6 | form | không API | `o-ga`…`khac` |
| status static 5 | form + Zone B | không API | `draft`…`done` · filter trống = tất cả |

**Cấm** free-text `road`. **Cấm** native `<select>`. **Cấm** map `incidentType` → `asset-type`. Fallback BFF down: subset 38 seed only.

### T-UI-FIELD-01 — field map (Design → DTO)

Giữ bảng SA «Field map». Dev **không** đổi controlHint. GPS `lat`/`lng` number. `reportedAt` datetime-local FE / UTC BE. `mediaMeta` string stub. `source` readonly `citizen`. `trackingCode` server `CIT-yyyyMMdd-nnnn`.

## GAP register (Dev IN P1)

| ID | Layer | Fix |
|----|-------|-----|
| GAP-SA-CIT-Q01 | API + FE | query `road` exact |
| GAP-SA-CIT-LKP | FE | SearchInput road-route form + list |
| GAP-SA-CIT-VAL | API | catalog Road + enum 5/6 + Source=`citizen` · 422 |
| GAP-SA-CIT-SEED | FE mock | `QL.1` only from 38 |
| GAP-PO-CIT-01..03 | UI | SearchInput road · Zone B filter · full-page (shell PASS) |
| GAP-PO-CIT-04..08 | — | **OUT P1** (public/map/presign/OTP/adapter) |
| GAP-PO-CIT-09 | all | **cấm** parent JSON · **cấm** ERP |
| GAP-PO-CIT-10 | UI | badge ≠ feedback (list title đã có) |

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-TOKEN | Citizen temp token DEFER · public anonymous P2 |
| SD-PII | enc-at-rest DEFER |
| SD-MEDIA | mediaMeta string stub · presign DEFER |
| SD-MAP | Leaflet Kind F **OUT P1** |

## list_parity / form

- list_parity Kind B shell — **PASS** · delta filter `road` **required**
- form checklist full-page Z1–Z3 · `actions=footer_only` · View `<dl>` — **PASS** shell · delta LKP `road`
- tree_master — n/a
- tl-list-shell-height (LAYOUT-06) — **PASS** required giữ
- **cấm** nested CatalogListShell · Resource · Slideout · View=Input readOnly

## Deps

```
T-CTX-01 **done** → T-BE-01 (Q01) → T-BE-VAL-01 → T-BE-CRUD-01
                ↘ T-BFF-01 (verify) → T-FE-API-01
T-PERM-01 done
T-FE-API-01 → T-UI-LIST-01 (road filter) → T-UI-FORM-01 (cấm Text road)
T-UI-FORM-01 → T-UI-LKP-01 → T-UI-FIELD-01
T-UI-FORM-01 → T-UI-PROD-01 → T-UI-UX-01
T-UI-FORM-01 → T-UI-ACT-01 → T-QA-CRUD-01
T-UI-UX-01 → T-QA-01
T-BE-02 n/a
T-UI-MAP-FORM n/a
```

## Anti-dup / HARD

- Reuse `CitizenIncidentsController` · `CitizenIncidentService` · `CitizenIncidentsBffController` · `citizenService` · `CitizenListPage` · `CitizenFormPage`.
- Lookup: gọi **Integration** `road-routes/search` đã có — **cấm** duplicate Search endpoint · **cấm** domain mới.
- BE write **chỉ** `D:/AI-QLBD/Linm.RMMS.WebService` · `Domains/Integration`.
- Dev: `yarn build` MFE PASS · `dotnet build` API+BFF PASS · ghi implement § Build — **cấm** `completed` nếu fail.
- Skills Dev: `/new-endpoint` · `/create-bff-api-feature` · `/erp-form-context` · `dev-ui-ux-constitution` · **không** `/erp-feature` lifecycle.

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` · implement `specs/citizen/implement/citizen.md` |
| Scope | Q01 + VAL + FE `road` param + Zone B + form SearchInput LKP-01 · **không** rewrite list shell |
| UI SSOT | `Linm.Web.RMMS.Integration` · `pages/CitizenListPage` · `pages/CitizenFormPage` |
| BE SSOT | `Linm.RMMS.WebService` · Integration |
| Form routes | `/integration/citizen/new` · `/integration/citizen/:id` · View `<dl>` |
| Out | Kind G public · Leaflet · OTP · presign · Incident adapter |

## Confirm

`team_lead` = **confirmed** — autoApprove **ON** · agent self-confirm · chain Dev **pending** enqueue (`roleOnly` this task = TL only).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T17:40:00.000Z |
| versionGate | rechecked |
| taskId | `task_02c1095b` |
| contentHashPriorSa | solution-discovery.md · task_de8336cd |
| contentHashPriorDesign | design.md · task_5c19b559 |
| contentHashPriorPo | sha256:po-requirement-task_a77e191e |
| contentHashPriorDataAnaly | sha256:aed65b28a023535141cbe64a35d1089c5bfa537acd0d5191e64049f5f248e023 |
