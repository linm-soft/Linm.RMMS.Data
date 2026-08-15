# Team-lead — patrol (crud_formtype)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| Feature Kind | **B** — catalog A–D + **full-page** (`PatrolFormPage`) |
| taskId | `task_a4508318` |
| autoApprove | **ON** |
| design_confirm | **approve** (`task_5e7961be`) |
| solution_confirm | **approve** (`task_91df2c14`) |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| updatedAt | `2026-08-14T18:40:00.000Z` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| `source.routes` | `/patrol` · `/patrol/new` · `/patrol/:id` |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Patrol** (DOMAIN-MAP slug `patrol`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Patrol/` · **`api/v1/patrol/sessions`** |
| `source.bff` | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/PatrolSessionsBffController.cs` · **`web-bff/api/v1/patrol/sessions`** |
| Lookup | Integration **`api/v1/integration/road-routes/search`** — **không** copy vào Patrol |
| FE BASE | `/patrol/sessions` |
| Lookup FE | `/integration/road-routes` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/patrol/ui/prototype/patrol-list-prototype.html` |
| mfeStdRoute | `/patrol` |
| mfeStdUrl | `http://localhost:9304/patrol` |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`. **Cấm** parent JSON string.

## Prior (kept — **cấm rewrite shell**)

CRUD list/form/ACT **đã PASS** (`task_1ede6934`). Pack này **chỉ delta** controlHint + SA query/validate.

| id | Status | Note |
|----|--------|------|
| T-CTX-01 | **done** (verify) | context API Signed |
| T-BE-01 | **done** | CRUD sessions |
| T-BE-02 | **done** | `rmms_patrol_sessions` · **không** migration mới |
| T-PERM-01 | **done** | `patrol.sessions.*` |
| T-UI-LIST-01 | **done** (shell) | A–D · **cấm rewrite** — chỉ **extend** Zone B filter `route` |
| T-UI-FORM-01 | **done** (page) | Full-page C/E/V/Copy · View `<dl>` · **cấm rewrite** — chỉ đổi control `route` + footer-only |
| T-UI-ACT-01 | **done** | Delete toolbar + row menu |
| T-BE-CRUD-01 | **done** | C/U/D verify |
| T-QA-01 / T-QA-CRUD-01 | **done** (prior) | QA **re-open** sau Dev delta |
| T-UI-MAP-FORM | **n/a** | packKind=`list` |

## Live audit (TL · trước emit · `tl-retry-ssot-rereview`)

| Check | Live | Pack required |
|-------|------|----------------|
| 1× `LinPageLayout` kind=catalog | **PASS** (`PatrolListPage`) | KEEP |
| Nested `CatalogListShell` | **không** | KEEP |
| `LinCatalogDataGrid` `resizable: true` | **PASS** | KEEP |
| Footer `LinCatalogListPagination` | **PASS** 50 default | KEEP |
| `footerPagination` / `pageSizeBar` / raw table | **không** | KEEP |
| flex + skeleton | **PASS** `useServerPagedListLoading` · 8 rows | KEEP |
| toolbar refresh · history · `fa-cog` · create · delete | **PASS** | KEEP |
| filter SearchTextInput + status SearchInput | **PASS** | KEEP + **route** SearchInput |
| `filterMaxWidthPx` | **không** | KEEP |
| list_parity Kind B | **PASS** shell | KEEP |
| tree_master | n/a | n/a |
| form full-page · View `<dl>` | **PASS** | KEEP |
| form `route` | **`Input` Text** | **SearchInput** `road-route` |
| Zone B `route` filter | **thiếu** | SearchInput LKP-01 |
| `getList` / endpoint | `search` · `status` · page | + **`route`** |
| BE `GetListAsync` | search · status only | GAP-SA-PAT-Q01 |
| BE Create/Update | trim Route · **không** catalog · enum free | GAP-SA-PAT-VAL/ENUM |
| BFF list | `Request.QueryString` passthrough | verify `?route=` |
| seed FE | `QL.1` OK · **`ĐT.784` · `QL.1A`** | **không** ∈ 38 CUC2 (`road-route-seed.json` có `QL.1`) |
| form Z1 Lưu/Hủy trên header | **có** (`btn-save-top`) | Design **footer-only** |
| listTitle | `Sổ phiên tuần tra` | Design `Sổ phiên tuần tra / check-in` |
| Resource / Slideout | **không** | KEEP |

### retry.ssot_rereview (TL stamp)

| Field | Value |
|-------|-------|
| result | **gaps** (not pass-all) — shell PASS · **GAP cùng surface** LKP/FIELD/BE/seed/footer |
| rule | Dev **cấm** chỉ patch 1 chỗ user nêu — đóng hết GAP-SA-PAT-* + GAP-TL-PAT-* |

## Implement HOW

| Topic | Decision |
|-------|----------|
| Wire list | Page → `patrolService` → `endpoint.ts` → apiClient → BFF → API |
| Wire lookup | SearchInput → Integration `/integration/road-routes/search` — **cấm** Patrol duplicate search |
| List | **1×** `LinPageLayout` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` kéo cột **default ON** |
| Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar |
| Form | **Full-page** `PatrolFormPage` — **cấm** Resource · **cấm** Slideout |
| View | **`<dl>` display** — **cấm** Input `readOnly` xám · **cấm** disabled toàn form |
| Persist route | **code** string (`QL.1`) — **không** FK Guid · **không** JSON |
| Persist enum | **nhãn VN** (`Đang tuần` · `Tuần đường`) — **không** Design codes `in_progress`/`road` |
| Skills | `/erp-form-context` · `form-type-task-pack` · `list-form-quality-gates` · `tl-retry-ssot-rereview` · `dev-ui-ux-constitution` · `/new-endpoint` · `/create-bff-api-feature` |

**ssot.reuse:**
  ui: LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · LinCatalogRowActionMenu · SearchInput (road-route + enum) · SearchTextInput
  http: apiClient · patrolEndpoint · Integration road-routes search (reuse attendance/road-route client nếu đã có)
  grid: no footerPagination · no pageSizeBar · no nested CatalogListShell
**implement.list_parity:**
  layout: flex-root + GAP-P2-LAYOUT-06
  tree: n/a
  filter: search + status SearchInput + route SearchInput · filter đổi → page=1 · **no Tìm btn**
  loading: useServerPagedListLoading + skeleton
  footer: LinCatalogListPagination
  row_menu: Xem · Sửa · Sao chép · Xóa · Lịch sử stub
  zone_f: fa-cog (existing hint OK P1)
  perm: patrol.sessions.*
**implement.form:**
  View: `<dl>`
  route: SearchInput LKP-01
  footer_actions_only: Lưu/Hủy — **gỡ** Lưu/Hủy trên Z1 header
**DoD (retry HARD):**
- [ ] Dev re-review `tl-retry-ssot-rereview` **trước Write** — ghi `retry.ssot_rereview` trên implement MD
- [ ] 1× LinPageLayout · no nested CatalogListShell
- [ ] LinCatalogDataGrid kéo cột ON · footer LinCatalogListPagination
- [ ] Flex + skeleton · toolbar config
- [ ] Form View `<dl>` · **cấm** Resource · **cấm** Slideout
- [ ] Cùng surface: đóng hết GAP-SA-PAT-* + GAP-TL-PAT-* — **cấm** patch 1 chỗ
- [ ] MFE `yarn build` PASS · BE `dotnet build` API + Patrol BFF PASS · implement § Build

## GAP inventory (Dev phải đóng)

| ID | Gap | Task |
|----|-----|------|
| GAP-SA-PAT-Q01 | List thiếu query `route` | T-BE-Q-01 · T-BFF-01 · T-FE-API-01 · T-UI-LIST-01-ext |
| GAP-SA-PAT-LKP | form `route` = Text · list chưa filter tuyến | T-UI-LKP-01 |
| GAP-SA-PAT-VAL | Route không ∈ road-routes active | T-BE-VAL-01 |
| GAP-SA-PAT-ENUM | Status / PatrolType free string | T-BE-VAL-01 |
| GAP-SA-PAT-SEED | mock `ĐT.784` · `QL.1A` | T-UI-PROD-01 |
| GAP-PO-PAT-01 | SearchInput road-route form | T-UI-LKP-01 |
| GAP-PO-PAT-02 | Zone B filter tuyến + `?route=` | T-UI-LIST-01-ext · T-BE-Q-01 |
| GAP-PO-PAT-03 | Full-page · View `<dl>` | T-UI-PROD-01 (KEEP) |
| GAP-PO-PAT-04 | userName Text P1 | T-UI-FIELD-01 (KEEP) |
| GAP-TL-PAT-FOOTER-ACT | Z1 header có Lưu/Hủy | T-UI-FORM-01 · T-UI-UX-01 |
| GAP-TL-PAT-LIST-TITLE | listTitle thiếu `/ check-in` | T-UI-LIST-01-ext |
| GAP-TL-PAT-FALLBACK-ROUTE | `filterRows` local thiếu `route` exact | T-FE-API-01 |

**Out of pack:** Kind E report · Leaflet · KPI · check-ins/tracks/coverage/kpi API · Excel · orgUnit/staffType/date range · users LKP · index `(CompanyCode, Route)` P2 · migration schema mới · GAP-F-PAT-01.

## Task pack (canonical · `form-type-task-pack`)

### T-CTX-01
**layer:** docs · **status:** **done** (verify)  
**DoD:** context Signed · DOMAIN-MAP Patrol · **không** ERP path.

### T-PERM-01
**layer:** ui+api · **status:** **done**  
**DoD:** `patrol.sessions.read|create|update|delete` · lookup `master.road-routes.read` (stub).

### T-BE-01 / T-BE-CRUD-01 / T-BE-02
**status:** **done**  
**DoD:** CRUD + table đã có · pack **không** `Schema_*` mới.

### T-BE-Q-01
**layer:** api · **status:** pending · **deps:** T-BE-01  
**skills:** `/new-endpoint` (edit existing)  
**DoD:**
- [ ] `GET /api/v1/patrol/sessions` query: `search?` · `status?` · **`route?`** (exact trim = `PatrolSession.Route`) · `page` · `pageSize` 50/100/200/500 (else 50)
- [ ] `search` AND Contains Code/UserName/Route/PatrolType/Status (đã có)
- [ ] Sort `PlannedDate` DESC · `UpdatedAt` DESC · `IsActive=true`
- [ ] Controller + `IPatrolSessionService.GetListAsync` thêm `route`
- [ ] **Cấm** `ERP.*` · **cấm** `api/v1/rmms/*`
- [ ] `dotnet build` API PASS

### T-BE-VAL-01
**layer:** api · **status:** pending · **deps:** T-BE-Q-01  
**DoD:**
- [ ] Create/Update: `Route` ∈ `rmms_road_routes.Code` **IsActive** — 422 VN nếu unknown (`ĐT.784` / `QL.1A`)
- [ ] Status allow-list **Đang tuần · Hoàn thành · Bỏ sót · Offline queue**
- [ ] PatrolType allow-list **Tuần đường · Tuần kiểm**
- [ ] Required UserName/Route/PatrolType/Status · CheckInCount ≥0 · Coverage 0–100
- [ ] Read `DbSet<RoadRouteEntity>` — **không** copy entity sang Patrol (cùng pattern attendance)
- [ ] `dotnet build` PASS

### T-BFF-01
**layer:** bff · **status:** pending (verify passthrough) · **deps:** T-BE-Q-01  
**skills:** `/create-bff-api-feature` (edit existing)  
**DoD:**
- [ ] `PatrolSessionsBffController.BuildListPath` forward GET list **kèm** `route` (`Request.QueryString` — **không** controller mới nếu đã passthrough)
- [ ] **Không** business logic · **không** proxy road-routes từ Patrol BFF
- [ ] `dotnet build` Patrol BFF PASS

### T-FE-API-01
**layer:** ui · **status:** pending · **deps:** T-BFF-01  
**DoD:**
- [ ] `patrolEndpoint.getList` params `route?` (+ existing search/status/page/pageSize)
- [ ] `patrolService.getList` + `localList` / `filterRows` exact `route`
- [ ] MFE `yarn build` PASS

### T-UI-LIST-01 (extend — **cấm rewrite shell**)
**layer:** ui · **status:** pending (delta) · **deps:** T-FE-API-01 · T-UI-LKP-01  
**from_design:** zones **A,B,C,D**  
**DoD:**
- [ ] **KEEP** 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · skeleton
- [ ] Zone A: title **Tuần đường / tuần kiểm** · icon `fa-route` · **cấm** Tạo mới trên A
- [ ] Zone B: SearchTextInput · SearchInput status · SearchInput **tuyến** · Làm mới · Lịch sử stub · `fa-cog` · Xóa · **Tạo mới primary chỉ trên B**
- [ ] Filter đổi → `page=1` · search must work · `filterCols` đủ 3 field
- [ ] Zone C: STT · □ · Mã phiên · Nhân viên · Tuyến · Loại tuần · Ngày KH · Check-in · Coverage % · Trạng thái · Offline · ⋯ — tuyến hiển thị **code 38**
- [ ] `listTitle` **Sổ phiên tuần tra / check-in**
- [ ] Zone D: pageSize 50/100/200/500
- [ ] MFE `yarn build` PASS

### T-UI-FORM-01 (extend)
**layer:** ui · **status:** pending (delta) · **deps:** T-UI-LKP-01 · T-UI-FIELD-01  
**DoD:**
- [ ] **KEEP** full-page C/E/V/Copy · leave-confirm dirty · Copy → POST new · IdCode server `TD-yyyyMMdd-nnn`
- [ ] `route` = SearchInput (thay `Input`) · userName **Text**
- [ ] View = `<dl>`
- [ ] Footer-only Lưu/Hủy — **gỡ** `btn-save-top` / `btn-cancel-top` trên Z1 (giữ Quay lại · Sửa · Sao chép khi view)
- [ ] MFE `yarn build` PASS

### T-UI-ACT-01
**status:** **done** (verify) — Search/status/refresh/create/edit/view/delete/history/row menu/deep-link. **Delta:** filter route handler → T-UI-LIST-01.

### T-UI-LKP-01
**layer:** ui · **status:** pending · **deps:** T-PERM-01  
**DoD:**
- [ ] Form + Zone B **route**: SearchInput → `GET /api/v1/integration/road-routes/search` (`search` · `page` · `pageSize` · `excludeCode?`)
- [ ] Display `code — name` · persist **`code`**
- [ ] Seed 38 CUC2 · có `QL.1` · **không** invent ngoài seed
- [ ] BFF down → FE fallback subset **chỉ mã có trong seed**
- [ ] **Cấm** Input Text tuyến · **Cấm** LKP users P1 · **Cấm** Search endpoint trong Patrol
- [ ] Enum status / patrolType / offline: **KEEP** SearchInput local (`lookups.ts`) value = nhãn VN

### T-UI-FIELD-01
**layer:** ui · **status:** pending · **deps:** T-UI-LKP-01  
**control-map ↔ DTO**

| uiField | Control | dtoField | Required | Notes |
|---------|---------|----------|----------|-------|
| code | Text readonly IdCode | Code | auto | server `TD-yyyyMMdd-nnn` · body **không** gửi code Create |
| userName | Text | UserName | * | P1 **không** SearchInput users |
| route | SearchInput road-route | Route | * | code 38 |
| patrolType | SearchInput enum | PatrolType | * | VN allow-list |
| plannedDate | Date `type=date` | PlannedDate | * | DateOnly |
| startedAt | Date datetime-local | StartedAt | | store UTC · display local |
| checkInCount | Text number ≥0 | CheckInCount | * | int |
| coveragePercent | Text number 0–100 | CoveragePercent | | decimal |
| status | SearchInput enum | Status | * | VN allow-list |
| offlineQueued | SearchInput bool | OfflineQueued | | true/false |
| note | Text | Note | | |
| updatedAt | Date readonly | UpdatedAt | | View display |
| (filter) route | SearchInput | query `route` | | **không** cột mới |

**DoD:**
- [ ] Types khớp SA field map · **cấm** parent JSON
- [ ] Filter `?status=` / persist enum = **nhãn VN**

### T-UI-PROD-01
**layer:** ui · **status:** pending · **deps:** T-UI-LKP-01  
**DoD:**
- [ ] `patrolStore` SEED: **`ĐT.784` → mã ∈ 38** (ưu tiên `QL.1` hoặc `HCM`) · **`QL.1A` → mã ∈ 38** — bump `STORAGE_KEY` để localStorage cũ không giữ mã lạ
- [ ] **Cấm** invent mã ngoài 38
- [ ] **Cấm** Resource · **cấm** Slideout · View `<dl>`
- [ ] Excel / Leaflet / Kind E **out of pack**

### T-UI-UX-01
**layer:** ui · **status:** pending · **deps:** T-UI-LIST-01 · T-UI-FORM-01  
**skills:** `dev-ui-ux-constitution`  
**DoD:**
- [ ] spacing 4/8/16 · Lin* · **không** `filterMaxWidthPx`
- [ ] Input pad 6×10 · min-height 32 · focus shadow
- [ ] AppLayout height · title không clip (GAP-P2-LAYOUT-06)
- [ ] SearchInput dropdown portal ON
- [ ] code View/create **readonly** không disabled xám toàn form (code field disabled OK)
- [ ] GAP-TL-PAT-FOOTER-ACT đóng

### T-QA-01 / T-QA-CRUD-01
**layer:** qa · **status:** pending (QA role — **không** làm ở Dev)  
**deps:** T-UI-LIST-01 · T-UI-FORM-01 · T-UI-LKP-01 · T-BE-Q-01 · T-BE-VAL-01  
**DoD:**
- [ ] scenarios: filter route · SearchInput 38 · seed QL.1 · 422 mã lạ · mfeStdUrl · no ERP · footer-only Lưu

## Deps

```
T-CTX-01 · T-PERM-01 · T-BE-01 · T-BE-02 · T-UI-ACT-01 · T-BE-CRUD-01  [done]
T-BE-Q-01 → T-BE-VAL-01 → T-BFF-01 → T-FE-API-01
T-UI-LKP-01 → T-UI-FIELD-01
            → T-UI-PROD-01
T-FE-API-01 + T-UI-LKP-01 → T-UI-LIST-01 (extend)
T-UI-LKP-01 + T-UI-FIELD-01 → T-UI-FORM-01 (extend)
T-UI-LIST-01 + T-UI-FORM-01 → T-UI-UX-01
T-UI-* + T-BE-* → T-QA-01 · T-QA-CRUD-01  (QA role)
```

## Handoff → Dev

| Field | Value |
|-------|-------|
| Next | `/agent-dev` · **chỉ** delta: T-BE-Q-01 · T-BE-VAL-01 · T-BFF-01 · T-FE-API-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-LIST-01 extend · T-UI-FORM-01 extend · T-UI-UX-01 |
| `devSlash` | `/agent-dev` — **không** `/erp-feature` · **không** OMS/AI |
| Anti-dup | reuse CRUD/shell/full-page/BFF — **cấm** rewrite T-UI-LIST shell |
| UI SSOT | `@linm-soft-org/linm-web-common-components` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration read |
| HARD | `tl-retry-ssot-rereview` · đóng GAP cùng surface |
| Build | MFE `yarn build` · BE `dotnet build` API+BFF · implement § Build |
| **cấm** | `ERP.*` · parent JSON · Resource · Slideout · invent ĐT.784/QL.1A · users LKP P1 · persist Design codes `in_progress`/`road` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T18:40:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS orchestrator `2026.08.09.02` · TL SSOT sibling attendance `2026.08.14.5`) |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.14.5 |
| designSkillVersion | 2026.08.14.5 |
| saSkillVersion | 2026.08.14.5 |
| contentHashPriorDataAnaly | sha256:1d25897d8fbcaa2b7be1174adf71f0840253c187980d23b9618bb3251febbcd5 |
| contentHashPriorPo | sha256:po-requirement-task_af761fcc |
| priorDesign | design.md · task_5e7961be |
| priorSa | solution-discovery.md · task_91df2c14 |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| taskId | `task_a4508318` |

---
<!-- Version meta: skillVersion=2026.08.14.5 · schemaVersion=2 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
