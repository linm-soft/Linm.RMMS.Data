# Team-lead — attendance (crud_formtype)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| this role | `team_lead` · `/agent-team-lead` |
| status | `done` |
| packKind | `list` |
| changeScope | `edit_page` |
| gap | `crud_formtype` |
| mode | `fix_gaps` |
| Feature Kind | **B** — catalog A–D + **Slideout** (`AttendanceFormSlideout`) |
| taskId | `task_96c3edd5` |
| autoApprove | **OFF** |
| design_confirm | **approve** (board APPROVE→CHAIN) |
| solution_confirm | **approve** (board APPROVE→CHAIN · SA artifact `await_confirm` stamped; board tick) |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| updatedAt | `2026-08-14T16:50:00.000Z` |

## Source assignment

| Field | Value |
|-------|-------|
| `source.mfe` | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` |
| `source.routes` | `/patrol/attendance` · form overlay Slideout |
| `source.backend` | `D:/AI-QLBD/Linm.RMMS.WebService` |
| `source.domain` | **Patrol** (DOMAIN-MAP slug `attendance`) |
| `source.api` | `api/src/RMMS.Service.Api/Domains/Patrol/` · **`api/v1/patrol/attendance-logs`** |
| `source.bff` | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/AttendanceLogsBffController.cs` · **`web-bff/api/v1/patrol/attendance-logs`** |
| Lookup | Integration **`api/v1/integration/road-routes/search`** — **không** copy vào Patrol |
| FE BASE | `/patrol/attendance-logs` |
| Lookup FE | `/integration/road-routes` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/attendance/ui/prototype/attendance-list-prototype.html` |
| mfeStdRoute | `/patrol/attendance` |
| mfeStdUrl | `http://localhost:9304/patrol/attendance` |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · prefix `/api/v1/attendance/*`. **Cấm** parent JSON string.

## Prior (kept — **cấm rewrite**)

CRUD list/form/ACT **đã PASS** (`task_7ab2529d` / `task_13e76e73`). Pack này **chỉ delta** controlHint + SA query/validate.

| id | Status | Note |
|----|--------|------|
| T-CTX-01 | **done** | context API Signed |
| T-BE-01 | **done** | CRUD attendance-logs |
| T-BE-02 | **done** | `rmms_attendance_logs` · **không** migration mới pack này |
| T-PERM-01 | **done** | `patrol.attendance-logs.*` |
| T-UI-LIST-01 | **done** | A–D shell · **cấm rewrite** — chỉ **extend** Zone B filter |
| T-UI-FORM-01 | **done** | Slideout C/E/V/Copy · footer-only · **cấm rewrite** — chỉ đổi control `route` |
| T-UI-ACT-01 | **done** | Delete + footer-only |
| T-BE-CRUD-01 | **done** | C/U/D verify |
| T-QA-01 / T-QA-CRUD-01 | **done** (prior) | QA role **re-open** sau Dev delta |
| T-UI-MAP-FORM | **n/a** | packKind=`list` |

## Live audit (TL · trước emit)

| Surface | Live | Pack required |
|---------|------|----------------|
| Shell | 1× `LinPageLayout` kind=catalog · `LinCatalogDataGrid` resizable ON · footer `LinCatalogListPagination` | KEEP |
| Nested CatalogListShell / footerPagination / pageSizeBar / raw table | **không** | KEEP |
| Zone B | SearchTextInput + status Select | + SearchInput **route** + Checkbox **onlyOutZone** |
| Form `route` | `Input` Text | **SearchInput** `road-route` |
| `getList` | `search` · `status` · page | + `route` · `onlyOutZone` |
| BE GetList | search (no Lat/Lng Contains) · no route/onlyOutZone | GAP-SA-ATT-Q01/Q02 |
| BE Create/Update | trim Route · no catalog · status free | GAP-SA-ATT-VAL/ENUM |
| Mock | `attendanceStore` / `patrolStore` **`QL.22`** | alias **`QL.1`** |
| Title icon | `fa-map-marker-alt` | Design `fa-user-clock` |
| `filterMaxWidthPx={1000}` | present | constitution **cấm** |

## Implement HOW

| Topic | Decision |
|-------|----------|
| Wire list | Page → `attendanceService` → `endpoint.ts` → apiClient → BFF → API |
| Wire lookup | SearchInput → Integration `/integration/road-routes/search` — **cấm** Patrol duplicate search |
| List | **1×** `LinPageLayout` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` kéo cột **default ON** |
| Footer | `LinCatalogListPagination` 50/100/200/500 — **cấm** footerPagination / pageSizeBar |
| Form | **Slideout** — **cấm** Resource · **cấm** full-page |
| View | `readOnly` — **cấm** disabled xám toàn form |
| Persist route | **code** string (`QL.1`) — **không** FK Guid · **không** JSON |
| Skills | `/erp-form-context` · `form-type-task-pack` · `list-form-quality-gates` · `tl-retry-ssot-rereview` · `dev-ui-ux-constitution` · `ssot-no-duplicate` |

**ssot.reuse:**
  ui: LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · LinCatalogRowActionMenu · SearchInput (road-route) · SearchTextInput (text search)
  http: apiClient · attendanceEndpoint · Integration road-routes search (existing Master/Integration client nếu đã có)
  grid: no footerPagination · no pageSizeBar · no nested CatalogListShell
**implement.list_parity:**
  layout: flex-root + GAP-P2-LAYOUT-06
  tree: n/a
  filter: search + status Dropdown + route SearchInput + onlyOutZone Checkbox · filter đổi → page=1 · **no Tìm btn**
  loading: useServerPagedListLoading + skeleton
  footer: LinCatalogListPagination
  row_menu: Xem · Sửa · Sao chép · Xóa · Lịch sử stub
  zone_f: fa-cog (existing hint OK P1)
  perm: patrol.attendance-logs.*
**implement.form:**
  View: Input/SearchInput/Select **readOnly**
  route: SearchInput LKP-01
  slideout_layout: footer_actions_only
**DoD (retry HARD):**
- [ ] Dev re-review `tl-retry-ssot-rereview` **trước Write** — ghi `retry.ssot_rereview` trên implement MD
- [ ] 1× LinPageLayout · no nested CatalogListShell
- [ ] LinCatalogDataGrid kéo cột ON · footer LinCatalogListPagination
- [ ] Flex + skeleton · toolbar config
- [ ] Form View readOnly · **cấm** Resource
- [ ] Cùng surface: đóng hết GAP-SA-ATT-* + GAP-TL-ATT-* — **cấm** patch 1 chỗ
- [ ] MFE `yarn build` PASS · BE `dotnet build` API + Patrol BFF PASS · implement § Build

## GAP inventory (Dev phải đóng)

| ID | Gap | Task |
|----|-----|------|
| GAP-SA-ATT-Q01 | List thiếu query `route` · `onlyOutZone` | T-BE-Q-01 · T-BFF-01 · T-FE-API-01 · T-UI-LIST-01-ext |
| GAP-SA-ATT-Q02 | search không match Lat/Lng ToString | T-BE-Q-01 |
| GAP-SA-ATT-LKP | form+filter `route` = Text | T-UI-LKP-01 |
| GAP-SA-ATT-VAL | Route không ∈ road-routes active | T-BE-VAL-01 |
| GAP-SA-ATT-ENUM | Status free string | T-BE-VAL-01 |
| GAP-SA-ATT-SEED | mock `QL.22` | T-UI-PROD-01 |
| GAP-PO-ATT-01 | alias QL.22→QL.1 · cấm invent 38 | T-UI-PROD-01 |
| GAP-PO-ATT-02 | SearchInput road-route | T-UI-LKP-01 |
| GAP-PO-ATT-03 | userName Text P1 | T-UI-FIELD-01 (KEEP) |
| GAP-PO-ATT-04 | Zone B Checkbox lệch zone | T-UI-LIST-01-ext |
| GAP-PO-ATT-05 | giữ Slideout | T-UI-PROD-01 |
| GAP-TL-ATT-ICON | header icon ≠ `fa-user-clock` | T-UI-UX-01 |
| GAP-TL-ATT-FILTER-MAX | `filterMaxWidthPx` | T-UI-UX-01 |

**Out of pack:** Kind E report · Leaflet · Kind D zones · Face/NFC · Excel · `GET /api/v1/attendance/*` · users LKP · index `(CompanyCode, Route)` P2 · migration schema mới.

## Task pack (canonical · `form-type-task-pack`)

### T-CTX-01
**layer:** docs · **status:** **done** (verify)  
**DoD:** context Signed · DOMAIN-MAP Patrol · **không** ERP path.

### T-PERM-01
**layer:** ui+api · **status:** **done**  
**DoD:** `patrol.attendance-logs.read|create|update|delete` · lookup `master.road-routes.read` (stub).

### T-BE-01 / T-BE-CRUD-01 / T-BE-02
**status:** **done**  
**DoD:** CRUD + table đã có · pack **không** `Schema_*` mới.

### T-BE-Q-01
**layer:** api · **status:** pending · **deps:** T-BE-01  
**skills:** `/new-endpoint` (edit existing)  
**DoD:**
- [ ] `GET /api/v1/patrol/attendance-logs` query: `search?` · `status?` · **`route?`** (exact trim = `AttendanceLog.Route`) · **`onlyOutZone?`** (`true`/`1` → `InZone == false`) · `page` · `pageSize` 50/100/200/500
- [ ] `search` AND filters; GPS: `Lat`/`Lng` `ToString` Contains (PO DoD-1)
- [ ] Sort `CheckInAt` DESC · `IsActive=true`
- [ ] Controller + `IAttendanceLogService.GetListAsync` signature
- [ ] `dotnet build` API PASS

### T-BE-VAL-01
**layer:** api · **status:** pending · **deps:** T-BE-Q-01  
**DoD:**
- [ ] Create/Update: `Route` ∈ `rmms_road_routes.Code` **IsActive** — 422 VN nếu unknown / `QL.22`
- [ ] Status allow-list **Đúng tuyến · Lệch zone · Thiếu điểm** — 422 else
- [ ] Required UserName/Route/Status/Lat/Lng · **cấm** persist `QL.22`
- [ ] Read `DbSet<RoadRouteEntity>` — **không** copy entity sang Patrol
- [ ] `dotnet build` PASS

### T-BFF-01
**layer:** bff · **status:** pending (verify passthrough) · **deps:** T-BE-Q-01  
**skills:** `/create-bff-api-feature` (edit existing)  
**DoD:**
- [ ] `AttendanceLogsBffController` forward GET list **kèm** `route` + `onlyOutZone` (`Request.QueryString`)
- [ ] **Không** business logic · **không** proxy road-routes từ Patrol BFF
- [ ] `dotnet build` Patrol BFF PASS

### T-FE-API-01
**layer:** ui · **status:** pending · **deps:** T-BFF-01  
**DoD:**
- [ ] `attendanceEndpoint.getList` params `route?` · `onlyOutZone?` (+ existing search/status/page/pageSize)
- [ ] `attendanceService.getList` passthrough

### T-UI-LIST-01 (extend — **cấm rewrite shell**)
**layer:** ui · **status:** pending (delta) · **deps:** T-FE-API-01 · T-UI-LKP-01  
**from_design:** zones **A,B,C,D**  
**DoD:**
- [ ] **KEEP** 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · skeleton
- [ ] Zone A: title **Chấm công và định vị** · icon `fa-user-clock` · **cấm** Tạo mới trên A
- [ ] Zone B: SearchInput text search · Dropdown status · SearchInput **tuyến** · Checkbox **Chỉ lệch zone** · Làm mới · Lịch sử stub · `fa-cog` · **Tạo mới primary chỉ trên B**
- [ ] Filter đổi → `page=1` · search must work
- [ ] Zone C: STT · □ · Mã · NV · Tuyến · Thời điểm · Lý trình · InZone · Trạng thái · GPS · ⋯ — tuyến hiển thị code master **không** `QL.22`
- [ ] Zone D: pageSize 50/100/200/500
- [ ] MFE `yarn build` PASS

### T-UI-FORM-01 (extend)
**layer:** ui · **status:** pending (delta) · **deps:** T-UI-LKP-01 · T-UI-FIELD-01  
**DoD:**
- [ ] **KEEP** Slideout C/E/V/Copy · footer-only Lưu/Hủy · leave-confirm dirty · Copy → POST new
- [ ] `route` = SearchInput (thay `Input`) · userName **Text**
- [ ] View = readOnly
- [ ] MFE `yarn build` PASS

### T-UI-ACT-01
**status:** **done** (verify) — Search/status/refresh/create/edit/view/delete/history/row menu/deep-link. **Delta:** filter route + onlyOutZone handlers → T-UI-LIST-01.

### T-UI-LKP-01
**layer:** ui · **status:** pending · **deps:** T-PERM-01  
**DoD:**
- [ ] Form + Zone B **route**: SearchInput → `GET /api/v1/integration/road-routes/search` (`search` · `page` · `pageSize` · `excludeCode?`)
- [ ] Display `code — name` · persist **`code`**
- [ ] Seed 38 CUC2 · có `QL.1` · **không** `QL.22`
- [ ] BFF down → FE fallback subset **chỉ mã có trong seed** (QL.1…)
- [ ] **Cấm** Input Text tuyến · **Cấm** LKP users P1 · **Cấm** Search endpoint trong Patrol

### T-UI-FIELD-01
**layer:** ui · **status:** pending · **deps:** T-UI-LKP-01  
**control-map ↔ DTO**

| uiField | Control | dtoField | Required | Notes |
|---------|---------|----------|----------|-------|
| code | Text readonly IdCode | Code | auto | server `CC-yyyyMMdd-nnn` · body **không** gửi code Create |
| userName | Text | UserName | * | P1 **không** SearchInput users |
| route | SearchInput road-route | Route | * | code 38 |
| checkInAt | Date datetime-local | CheckInAt | * | store UTC · display local |
| kmPoint | Text | KmPoint | | |
| lat / lng | Text number | Lat / Lng | * | decimal(12,8) |
| inZone | Dropdown Trong/Ngoài | InZone | | true/false |
| status | Dropdown 3 enum | Status | * | exact VN |
| note | Text multiline | Note | | |
| updatedAt | Date readonly | UpdatedAt | | |
| (filter) onlyOutZone | Checkbox | query | | **không** cột mới |

**DoD:**
- [ ] Types khớp SA field map · **cấm** parent JSON
- [ ] InZone labels `Trong zone`/`Ngoài zone` — **không** auto-sync Status P1

### T-UI-PROD-01
**layer:** ui · **status:** pending · **deps:** T-UI-LKP-01  
**DoD:**
- [ ] Mock `attendanceStore` + `patrolStore` **`QL.22` → `QL.1`**
- [ ] **Cấm** invent `QL.22` vào 38 CUC2
- [ ] **Cấm** Resource · **giữ** Slideout
- [ ] Excel / Leaflet / Face / Kind E **out of pack**

### T-UI-UX-01
**layer:** ui · **status:** pending · **deps:** T-UI-LIST-01 · T-UI-FORM-01  
**skills:** `dev-ui-ux-constitution`  
**DoD:**
- [ ] spacing 4/8/16 · Lin* · **bỏ** `filterMaxWidthPx` (GAP-TL-ATT-FILTER-MAX)
- [ ] Input pad 6×10 · min-height 32 · focus shadow
- [ ] Checkbox 24×24 · cột 48px · ellipsis
- [ ] AppLayout height · title không clip (GAP-P2-LAYOUT-06)
- [ ] header icon `fa-user-clock` (GAP-TL-ATT-ICON)
- [ ] SearchInput dropdown portal ON
- [ ] code/view **readonly** không disabled xám

### T-QA-01 / T-QA-CRUD-01
**layer:** qa · **status:** pending (QA role — **không** làm ở Dev)  
**deps:** T-UI-LIST-01 · T-UI-FORM-01 · T-UI-LKP-01 · T-BE-Q-01 · T-BE-VAL-01  
**DoD:**
- [ ] scenarios: filter route + onlyOutZone · SearchInput 38 · seed QL.1 · 422 QL.22 · GPS search · mfeStdUrl · no ERP

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
| Anti-dup | reuse CRUD/shell/Slideout/BFF — **cấm** rewrite T-UI-LIST shell |
| UI SSOT | `@linm-soft-org/linm-web-common-components` |
| BE SSOT | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration read |
| HARD | `tl-retry-ssot-rereview` · đóng GAP cùng surface |
| Build | MFE `yarn build` · BE `dotnet build` API+BFF · implement § Build |
| **cấm** | `ERP.*` · parent JSON · Resource form · invent QL.22 · users LKP P1 |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-team-lead |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T16:50:00.000Z |
| versionGate | rechecked |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.14.5 |
| designSkillVersion | 2026.08.14.5 |
| saSkillVersion | 2026.08.14.5 |
| contentHashPriorDataAnaly | sha256:1ec355a64b1bcdf471e211c98b74d77fbdca665bd23472f63456457aa538fba4 |
| contentHashPriorPo | sha256:po-requirement-task_be41b753 |
| priorDesign | design.md · task_dcdef46b |
| priorSa | solution-discovery.md · task_9869676e |
| taskId | `task_96c3edd5` |
