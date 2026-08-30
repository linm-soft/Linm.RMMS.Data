# Team-lead — incident (edit_page · fill_gaps · crud_formtype delta)

| Field | Value |
|-------|-------|
| feature | `incident` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| packKind | `list` |
| Feature Kind | **B** catalog A–D+F + **Kind D Slideout** Z1–Z3 |
| changeScope | `edit_page` |
| gap | `crud_formtype` · FormType CRUD **CLOSED** · delta P1 dưới |
| runMode | `fill_gaps` |
| autoApprove | **ON** (`task_0387effb`) |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role TL |
| taskId | `task_0387effb` |
| prior · sa | `confirmed` · `be/solution-discovery.md` · `task_d95d36f3` |
| prior · design | `confirmed` · `ui/design.md` + prototype · `task_c4cdbe48` |
| prior · po | `confirmed` · `po/requirement.md` · `task_4fa6ad08` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/incident-control-hint.md` · `incident-real-data.md` · contentHash `sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577` |
| updatedAt | `2026-08-29T02:55:29.972Z` |

**SUPERSEDED:** prior `task/incident.md` (`task_28ef1042`) — FormType ACT/CRUD **CLOSED**. Pack này **re-lock** SA+Design 2026-08-29 delta P1 · **cấm** re-CRUD rewrite LIST/FORM shell.

---

## Source assignment

| Layer | Path | Confirm |
|-------|------|---------|
| UI | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `pages/IncidentListPage` · `IncidentFormSlideout` | `ui_repo_confirm=approve` |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Incident** | `be_repo_confirm=approve` |
| Routes | **`source.routes`:** `/su-co` · form `?form=` Slideout | `route_confirm=route_keep` (autopilot · prior Design/SA/STATUS lock · **không** đổi URL) |
| API | **`api/v1/incident/incidents`** · BFF `web-bff/api/v1/incident/incidents` | **cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/su-co/*` |
| Lookup | Integration **`api/v1/integration/road-routes/search`** (LKP-01 · share_a) | **cấm** clone vào Incident domain |
| mfeStdRoute | `/su-co` | draft OK |
| mfeStdUrl | `http://localhost:9304/su-co` | Dev verify sau start:std |
| **devSlash** | **`/agent-dev`** | **cấm** `/agent-dev-oms-map` · `/agent-dev-ai-detect` · `/agent-dev-camera-connect` |

**route_confirm:** A=`/su-co` (Sự cố) · B=`/sc` · packet header `/incident` **REJECT** (lệch SSOT Design/SA). Autopilot **keep A** `/su-co`.

---

## retry.ssot_rereview (HARD — fill_gaps)

Checklist: `tl-grid-ssot` · `list_parity` · `tl-list-shell-height` · `dev-form-review-checklist` · `tl-retry-ssot-rereview`.

| Check | Live (cite SA 2026-08-29) | Result |
|-------|---------------------------|--------|
| 1× `LinPageLayout` kind=catalog · **cấm** nested `CatalogListShell` | Incident list live | **PASS** (giữ) |
| `LinCatalogDataGrid` + kéo cột default ON · `buildDynamicGridColumns` | live | **PASS** (giữ) |
| Footer `LinCatalogListPagination` 50/100/200/500 | live | **PASS** (giữ) |
| flex + skeleton · LAYOUT-06 | live | **PASS** (giữ) |
| toolbar FULL · config `fa-cog` · schema `incidents` | live | **PASS** (giữ) |
| FormType C/E/V/Copy + Delete + assign/close | CLOSED | **PASS** — **cấm** re-open |
| Filter `LinErpListFilterBar` + **route SearchInput** + **type 6** + query `routeName`/`incidentType` | Text free · 4 types · thiếu QS | **GAP** → T-UI-FILTER-01 · T-BE-LIST-Q-01 |
| Form `routeName` SearchInput · types init-data · footer-only · History modal | Text · 4 types · top actions · `alert` | **GAP** → T-UI-LKP-01 · T-BE-INIT-01 · T-UI-FORM-01δ · T-UI-HIST-01 |
| tree_master? | — | **n/a** |
| LeaveConfirmModal | live | **PASS** verify T-UI-LEAVE-01 |

**Dev HARD:** re-review checklist § trên **trước Write** · **fix_all** GAP P1 cùng surface · **cấm** chỉ patch 1 chỗ.

---

## DES-GRID → Lin\*

| Zone | Design | Component | DoD this pack |
|------|--------|-----------|---------------|
| A | DES-GRID-A | `LinPageLayout` / header | giữ «Sự cố / Vấn đề» · **cấm** Thêm trên A · **cấm** AI badge |
| B | DES-GRID-B | `catalogToolbar` | giữ refresh · history · cog · create · Delete · row view/edit |
| FILTER | DES-GRID-FILTER | `LinErpListFilterBar` | **delta** SearchInput route · type Dropdown · query keys |
| C | DES-GRID-C* | `LinCatalogDataGrid` · row menu | giữ · **cấm** rewrite columns shell |
| D | DES-GRID-D | `LinCatalogListPagination` | giữ 50/100/200/500 |
| F | DES-GRID-F | `LinCatalogUiSchemaEditorModal` | giữ kind=`incidents` · **cấm** configHint |
| H | DES-GRID-H | `LinCatalogHistoryModal` | **delta** **cấm** `window.alert` |
| Z | DES-GRID-Z | Slideout `data-form-cols=2` | **delta** footer-only · SearchInput route · Dropdown 6 |

---

## GAPs P1 (Dev phải đóng) · DEFER

| ID | Surface | Live | Required | Task |
|----|---------|------|----------|------|
| GAP-SA-INC-Q01 | API+FE list | thiếu `routeName` · `incidentType` QS | + exact filters | **T-BE-LIST-Q-01** · **T-UI-FILTER-01** |
| GAP-SA-INC-INIT / GAP-INC-TYPE-01 | API+FE | no init-data · FE 4 types | API-08 · seed 6 · FE consume | **T-BE-INIT-01** · **T-UI-LKP-01** |
| GAP-SA-INC-LKP / GAP-INC-ROUTE-01 | filter+form | Text free | SearchInput road-route · persist **Code** | **T-UI-LKP-01** |
| GAP-SA-INC-VAL | BE Create/Update | no catalog check | RouteName ∈ active road-routes · Type ∈ 6 · Status ∈ 3 · 422 | **T-BE-VAL-01** |
| GAP-INC-HIST-01 | FE History | `window.alert` | `LinCatalogHistoryModal` · stub timeline OK · **no** new history API P1 | **T-UI-HIST-01** |
| GAP-INC-FOOTER-01 | Slideout | top Quay lại/Hủy/Lưu | footer-only (`slideout-form-layout`) | **T-UI-FORM-01** delta |
| GAP-INC-ORG-01 | filter | — | org-unit tree | **DEFER P2** |
| GAP-RPT-SRC-INC-* | entity | no DurationMin/child/DefectItem | — | **DEFER** |
| GAP-INC-MAP-01 | Kind F | — | — | **DEFER** |
| FormType CRUD | list/form/ACT | CLOSED | **giữ** | **CLOSED** — **cấm** re-open |

---

## FormType pack (canonical · `form-type-task-pack` §2a)

| Task id | Role | Status | Maps to / notes |
|---------|------|--------|-----------------|
| T-CTX-01 | docs | **done** | context Signed — stamp filter-bar path |
| T-BE-01 / T-BE-CRUD-01 | Dev | **done** | API-01…07 path giữ · **cấm** rewrite |
| T-BE-02 | migration | **n/a** | `rmms_incidents` exists · **cấm** add DurationMin/DefectItem P1 |
| T-BFF-01 | Dev | **done** + **delta** | proxy CRUD · **+** init-data forward · QS passthrough keys mới |
| T-PERM-01 | Dev | **done** | `incident.incidents.*` · stub BE OK |
| T-BE-UISCHEMA-01 | Dev | **done** verify | catalogKind `incidents` |
| T-BE-LIST-Q-01 | Dev | **pending** | **GAP-SA-INC-Q01** |
| T-BE-INIT-01 | Dev | **pending** | **API-08** · **GAP-SA-INC-INIT** |
| T-BE-VAL-01 | Dev | **pending** | **GAP-SA-INC-VAL** |
| T-UI-LIST-01 | Dev | **done** | A–D shell · **cấm** rewrite · verify LAYOUT-06 |
| T-UI-FILTER-01 | Dev | **pending** | load `incident-filter-bar.md` · **GAP-TL-FILTER-01** closed by TL context |
| T-UI-CFG-01 | Dev | **done** verify | schema editor FULL |
| T-UI-FORM-01 | Dev | **done** + **delta** | C/E/V/Copy giữ · **GAP-INC-FOOTER-01** |
| T-UI-LEAVE-01 | Dev | **done** verify | LeaveConfirmModal · **cấm** native |
| T-UI-ACT-01 | Dev | **done** | Delete + assign/close · **cấm** re-open |
| T-UI-LKP-01 | Dev | **pending** | road-route SearchInput · init-data Dropdowns |
| T-UI-FIELD-01 | Dev | **pending** verify | Design §5.2 map · readonly View |
| T-UI-PROD-01 | Dev | **pending** verify | **cấm** demo-json SSOT |
| T-UI-UX-01 | Dev | **pending** | typography 13/D14 · form grid 2-col slideout |
| T-UI-RESP-01 | Dev | **pending** | `/dev-web-responsive` 1280/768/375 |
| T-UI-HIST-01 | Dev | **pending** | **GAP-INC-HIST-01** |
| T-UI-MAP-FORM | — | **n/a** | packKind=list |
| T-QA-CRUD-01 | QA | **done** prior + **re-smoke** pending | đến lượt QA |
| T-QA-FORM-01 | QA | **pending** | đến lượt |
| T-QA-FILTER-01 | QA | **pending** | đến lượt · V1–V5 + filter-bar fields |
| T-QA-TYP-01 | QA | **pending** | đến lượt |
| T-PILOT-01 | QA+docs | **pending** | `task/pilot-su-co.md` · **sau** Dev delta + QA |

---

## Task details (delta P1)

### T-BE-LIST-Q-01 — List query keys

**status:** pending  
**devSlash:** `/agent-dev`  
**deps:** T-BE-CRUD-01 (done)  
**skills:** solution-discovery API-01 · DOMAIN-MAP Incident  

**ssot.reuse:**
- http: existing `IncidentsController.GetList` · BFF QS forward
- **cấm** new controller / ERP path

**implement.wire:**
- API GET `…/incidents` query += **`routeName?`** (exact trim Code) · **`incidentType?`** (exact)
- Service filter `CompanyCode` + existing search/status/severity
- BFF: passthrough querystring (đã có pattern)
- FE: `incidentEndpoint.getList` / `incidentService` params 1:1

**DoD:**
- [ ] Live list filter by route Code + type returns subset · empty → totalCount=0
- [ ] pageSize 50/100/200/500 unchanged
- [ ] **cấm** migration
- [ ] Dev: `dotnet build` API+BFF PASS (role Dev only)

### T-BE-INIT-01 — API-08 init-data

**status:** pending  
**deps:** T-BE-CRUD-01  
**skills:** `tl-dropdown-from-backend`  

**implement.init_data:**
- `GET /api/v1/incident/incidents/init-data` → `IncidentInitDataDto`
- Seed Design §5.3: statuses(3) · severities(4) · **incidentTypes(6):** `o-ga` · `sat-taluy` · `bien-bao` · `ngap-ung` · `un-tac` · `khac` · handleDirections(4) · readStatuses(2) · reportStatuses(3)
- BFF `GET …/init-data` proxy
- Migration: **none** (in-memory / service const)

**DoD:**
- [ ] 200 + arrays `{value,label}[]`
- [ ] FE consume · fallback const **chỉ** khi fail
- [ ] **cấm** FE hardcode-only 4 types as SSOT

### T-BE-VAL-01 — Create/Update validation

**status:** pending  
**deps:** T-BE-INIT-01 (types) · Integration RoadRouteEntity read  
**skills:** solution GAP-SA-INC-VAL  

**implement:**
- `RouteName` non-empty → ∈ `rmms_road_routes.Code` **IsActive** (DbSet read) · else **422**
- `IncidentType` ∈ 6 · `Status` ∈ 3 · else **422**
- **cấm** invent Incident-local road-routes API

**DoD:**
- [ ] Unknown route / bad type → 422 message VN
- [ ] Happy path create/update unchanged IdCode

### T-BFF-01δ — Init-data + QS

**status:** pending (delta on done proxy)  
**deps:** T-BE-INIT-01 · T-BE-LIST-Q-01  
**DoD:**
- [ ] `GET web-bff/api/v1/incident/incidents/init-data` forwards
- [ ] List QS includes `routeName` · `incidentType`
- [ ] proxy-only — **cấm** business logic BFF

### T-UI-FILTER-01 — List filter bar

**status:** pending  
**devSlash:** `/agent-dev`  
**skills (REQUIRED load trước Write):**
- `/filter-bar-context` · `/erp-filter-form` · `filter-bar-layout-hard`
- context: `D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/incident-filter-bar.md`
- deps: T-BE-LIST-Q-01 · T-BE-INIT-01

**ssot.reuse:**
- ui_filter: `LinErpListFilterBar` · fragment leading · `data-lin-list-layout="erp-filter-bar"`
- init_data: Select options từ API-08 only
- http: query keys đúng filter-bar §1

**implement.filter:**
- Fields 1:1 `incident-filter-bar.md` · SearchInput road-route · Dropdown type/status/severity
- filter đổi → page=1 · onSearch trên bar
- **cấm:** `ErpListHeaderFilters` · `LinListFilterField` · export trên bar · orgTree P1

**DoD:**
- [ ] Context fields 1:1
- [ ] V1–V5 layout PASS (QA verifies)
- [ ] Search/filter work vs API
- [ ] `rg` 0 ErpListHeaderFilters / LinListFilterField on page

### T-UI-LKP-01 — Lookups

**status:** pending  
**deps:** T-BE-INIT-01 · LKP-01 Integration live  
**skills:** SearchInput road-route peer (attendance/org)  

**implement:**
- Filter + form `routeName`: **SearchInput** → `/integration/road-routes/search` · value=**Code**
- All Dropdowns: init-data arrays · **cấm** `INCIDENT_TYPES` 4-only SSOT
- **cấm** free-text route khi master READY

**DoD:**
- [ ] Persist `RouteName` = Code (vd `QL.1`)
- [ ] 6 loại visible filter+form

### T-UI-FORM-01δ — Footer-only + fields

**status:** pending (delta · shell done)  
**deps:** T-UI-LKP-01 · T-BE-VAL-01  
**skills:** `slideout-form-layout` · `dev-form-review-checklist`  

**implement:**
- **GAP-INC-FOOTER-01:** Z1 **cấm** top Quay lại/Hủy/Lưu · actions **chỉ** Z3 footer
- View = readOnly display · **cấm** Input disabled xám
- Create/Edit/Copy/View FormMode↔API giữ SA table
- **cấm** invent DurationMin / DefectItem / sourceKind fields

**DoD:**
- [ ] footer-only PASS visual
- [ ] route SearchInput · type Dropdown 6
- [ ] leave-confirm vẫn Modal

### T-UI-HIST-01 — History modal

**status:** pending  
**skills:** `dev-history-alert-overlay` · `/implement-history`  

**implement:**
- Replace `window.alert` / stub toast history bằng `LinCatalogHistoryModal` + `useCatalogHistoryModal`
- Overlay `stacked` khi Slideout mở
- **không** new history API P1 (stub timeline OK)

**DoD:**
- [ ] `rg` 0 `window.alert` / `confirm` / `prompt` trên incident pages (history path)
- [ ] toolbar + row menu History mở Modal

### T-UI-FIELD-01 / T-UI-PROD-01 / T-UI-UX-01 / T-UI-RESP-01

**status:** pending verify/delta  
**DoD:** Design §5 field map · no demo-json · label 13px · input D14/M16 · responsive 1280/768/375 · **cấm** AI badge Zone A

### T-UI-LIST-01 / T-UI-ACT-01 / T-UI-LEAVE-01 / T-PERM-01

**status:** **done** — verify no regression · **cấm** rewrite shell / ACT inventory

### T-QA-* / T-PILOT-01

**status:** pending đến lượt QA · e2e **chỉ** `/agent-qa*`  
**T-QA-FILTER-01:** V1–V5 + `incident-filter-bar.md` fields  
**T-QA-FORM-01:** field body = request · required  
**T-QA-CRUD-01:** re-smoke C/E/V/D + assign/close + route/type filters  
**T-PILOT-01:** `task/pilot-su-co.md` — **sau** Dev+QA delta · API path SSOT = `api/v1/incident/incidents` (pilot MD legacy `su-co` segment = **sai** · QA/docs align khi tới lượt)

---

## Deps (delta)

```
T-BE-CRUD-01 (done)
  → T-BE-LIST-Q-01 → T-BE-INIT-01 → T-BE-VAL-01 → T-BFF-01δ
  → T-UI-FILTER-01 → T-UI-LKP-01 → T-UI-FORM-01δ → T-UI-HIST-01
  → T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01
  → T-QA-FILTER-01 · T-QA-FORM-01 · T-QA-CRUD-01 → T-PILOT-01 → Review
```

---

## ssot.reuse (global)

| Concern | Package / path |
|---------|----------------|
| UI | `@linm-soft-org/linm-web-common-components` — LinErpListFilterBar · LinCatalog* · LeaveConfirmModal · LinCatalogHistoryModal |
| HTTP | `apiClient` SSOT |
| BE | Incident domain · CommonLib ApiResponse · **cấm** ERP.Service.* |
| Road-route | Integration Type A read-only |
| Auth | `incident.incidents.read\|create\|update\|delete` |
| Persist | flat `IncidentEntity` · **cấm** parent JSON |

## implement.wire / state (HOW — TL)

| Surface | Wire |
|---------|------|
| S-LIST | GET list + filter QS · ui-schema columns · pager |
| S-FORM-* | GET byId / POST / PUT · init-data options · LKP search |
| S-ACT-DELETE | DELETE soft |
| S-ACT-ASSIGN/CLOSE | POST assign/close · optional Platform Task cite `rmms-task-integrate` |
| S-HIST | Modal stub local · no API |
| state | list query in URL/searchParams · form draft dirty → leave guard · page reset on filter |

## SD flags

| Flag | Value |
|------|-------|
| SD-AUTH | stub `[RequirePermission]` TODO OK P1 |
| SD-BFF | proxy-only |
| SD-JOB | n/a |
| SD-MAP | Kind F **DEFER** |
| SD-COMMENT | DEFER |
| SD-SLA | DEFER |

## list_parity / form

- list_parity Kind B — **PASS** prior · giữ shell
- form checklist Z1–Z3 — **PASS** prior · **delta** footer + LKP + types
- tl-list-shell-height (LAYOUT-06) — **PASS** prior · **cấm** DEFER
- tree_master — n/a

---

## Handoff → Dev (`/agent-dev`)

| Field | Value |
|-------|-------|
| Next | **T-BE-LIST-Q-01** → **T-BE-INIT-01** → **T-BE-VAL-01** → **T-UI-FILTER-01** → **T-UI-LKP-01** → **T-UI-FORM-01δ** → **T-UI-HIST-01** |
| Anti-dup | reuse Integration road-routes · existing CRUD/BFF · **cấm** ERP · **cấm** invent API segment |
| UI SSOT | `Linm.Web.RMMS.Field` · `/su-co` |
| BE SSOT | `Linm.RMMS.WebService` · `api/v1/incident/incidents` |
| HARD | `tl-retry-ssot-rereview` · fix_all P1 · **cấm** re-CRUD FormType CLOSED · **cấm** e2e ở Dev nếu packet cấm (e2e = QA) |
| filter context | `docs/context/features/incident-filter-bar.md` |
| blockedReason | — |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.19.04 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-08-29T02:55:29.972Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 |
| orchestratorSkillVersion | 2026.08.25.02 |
| saSkillVersion | 2026.08.24.01 |
| designSkillVersion | 2026.08.25.02 |
| poSkillVersion | 2026.08.25.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| taskId | `task_0387effb` |

---
<!-- Version meta: skillId=agent-team-lead skillVersion=2026.08.19.04 schemaVersion=2 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 taskId=task_0387effb -->
