# Team lead — Task — web-rmms-field

| Field | Value |
|-------|-------|
| feature | `web-rmms-field` |
| title | Hub Field — chrome native · 2 cửa TD/TK · sync · tiles×7 · session badge |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-field`) |
| packKind | `list` (**phone Field hub** ≠ desktop Kind B grid) |
| changeScope | `new_page` |
| formPattern | Mobile Field hub / full · phone max-width **430** · N/A ERP Modal/Slideout · **no** master form · DES-LEAVE **N/A** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-field` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-field` |
| productRoute | `/field*` (cite Design · product deep peers) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol · Mobile.Bff `:5202` · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/**` · Live `GET patrol/sessions` badge only · **cấm** web-bff · **cấm** hub POST/PUT |
| DOMAIN-MAP | `web-rmms-field` → Patrol/`patrol` · CLOSED (SA) |
| demo | **N/A** · Live-only · hash skip |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-26T02:25:00.000Z` |
| taskId | `task_aa5e308d` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-field/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone Field hub).  
> Entity/migration / Step 4b = **none** · reuse `PatrolSessionsController` · **cấm** invent Field hub CRUD.  
> Ownership: Field hub = **FL-*** only · deep CRUD = peer A (`web-rmms-mobile-a`) · sync deep = `web-rmms-offline`.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-field` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl · STD-PORT `:9301`) |
| B | `/field` only (no web- prefix) | rejected as mfeStdRoute · product `/field*` ok for deep cite |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-field]` · draft `mfeStdRoute` giữ nguyên.

## FormType pack adapt (phone Field hub)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-FL-01** | DES-GRID N/A · phone Field hub FL-* |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone Field hub · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 | **WAIVE** | no master/Create form on hub · doors = nav mount |
| T-UI-LEAVE-01 | **WAIVE** | DES-LEAVE N/A · hub nav-only |
| T-UI-ACT · FIELD · PROD · UX · RESP · HIST | **KEEP** | list-form-quality-gates adapted Field hub |
| T-UI-LKP-01 | **WAIVE** | hub không SearchInput catalog |
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | Live sessions GET · LOOKUP_STATIC labels |
| T-QA-CRUD-01 · T-QA-FL-01 | **KEEP** | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ theo surface phone Field hub + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| FL-00 | Field hub root / stack | Full 430 | — | shell chrome | T-UI-FL-01 | `/agent-dev` |
| FL-01 | 2 cửa TD / TK | Button/Nav | — | → tuan-duong / tuan-kiem · peer A | T-UI-FL-01 · T-UI-ACT-01 | `/agent-dev` |
| FL-02 | Sync btn + badge | Button · Number RO | — | → offline · local queue count | T-UI-FL-01 · T-UI-ACT-01 | `/agent-dev` |
| FL-03 | Tiles×7 peer nav | Button/Nav | — | attendance/history/NT/cam/reflect/supervise/map | T-UI-FL-01 · T-UI-ACT-01 | `/agent-dev` |
| — | sessionHint | Text RO | — | GET patrol/sessions | T-UI-FL-01 · T-UI-FIELD-01 | `/agent-dev` |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* · web-bff |
| BE | PatrolSessionsController Live GET · CommonLib `ApiResponse` | invent Field entity · hub POST/PUT sessions · parent `*Json` |
| GPS | **none** on hub · peer deep only | `navigator.geolocation` on hub |
| Copy | Android/iOS Field home 1-1 | sửa iOS/Android native |
| Peer | doors deep = `web-rmms-mobile-a` · sync = `web-rmms-offline` · tiles = attendance / nghiem-thu / cam-patrol / field-reflect / supervise / patrol-map / history | duplicate peer CRUD on hub |
| Ownership | Field owns **FL-*** only | implement deep TD/TK CRUD here |

## implement.wire

| From | To | Note |
|------|----|------|
| sessionHint + active badge | `GET mobile-bff/api/v1/patrol/sessions?pageSize=50` | Text/Number RO · **cấm** POST/PUT từ hub |
| doorPatrol | navigate peer A / tuan-duong | hub mount · deep=A |
| doorInspect | navigate peer A / tuan-kiem | hub mount · deep=A |
| syncBtn + queue badge | local queue count · navigate `/offline` (cite) | 0 = ẩn badge · **cấm** invent sync API on hub |
| tileAttendance | navigate attendance peer | nav-only |
| tileHistory | navigate history peer | nav-only |
| tileNghiemThu | navigate nghiem-thu peer | nav-only |
| tileCam | navigate cam-patrol peer | nav-only |
| tileReflect | navigate field-reflect peer | nav-only |
| tileSupervise | navigate supervise peer | nav-only |
| tileMap | navigate patrol-map peer | nav-only |

## implement.state

- Route Field hub phone **430** · react-router under `/web-rmms-field`
- FL-00…FL-03 · doors + sync + tiles×7 · sessionHint Live
- Labels: `useFormOptions()` keys only · UTF-8 VN
- GPS **none** on hub
- STD-PORT `:9301` · mfeStdUrl STATUS
- **cấm** hub CRUD / POST / PUT sessions
- Prototype modes cite: `?badge=1` · `?sync=3` · `?empty=1` · `?error=1`

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| field.door.* / field.tile.* / field.sync.* labels | LOOKUP_STATIC `useFormOptions()` | hardcode VN string |
| sessionHint / active ca | GET patrol/sessions | invent session · demo fake |
| sync badge count | local offline queue | invent hub sync endpoint |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| doorPatrol | Button/Nav | useFormOptions field.door.* | → peer A tuan-duong |
| doorInspect | Button/Nav | useFormOptions field.door.* | → peer A tuan-kiem |
| syncBtn | Button/Nav | field.sync.* | → offline |
| syncBadge | Number RO | local queue | 0=ẩn |
| tileAttendance | Button/Nav | field.tile.* | attendance peer |
| tileHistory | Button/Nav | field.tile.* | history peer |
| tileNghiemThu | Button/Nav | field.tile.* | nghiem-thu peer |
| tileCam | Button/Nav | field.tile.* | cam-patrol peer |
| tileReflect | Button/Nav | field.tile.* | field-reflect peer |
| tileSupervise | Button/Nav | field.tile.* | supervise peer |
| tileMap | Button/Nav | field.tile.* | patrol-map peer |
| sessionHint | Text RO | GET patrol/sessions | — |

---

## Tasks

### T-BE-CRUD-01 — Patrol sessions GET (Live badge)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Wire Live `GET mobile-bff/api/v1/patrol/sessions?pageSize=50` → sessionHint + active badge · **migration none** · ApiResponse · **cấm ERP.*** · **cấm** invent Field entity/controller · **cấm** hub POST/PUT · tiles/doors = nav-only
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-INIT-01 — LOOKUP_STATIC labels
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** door/tile/sync/session labels từ `useFormOptions()` · **cấm** hardcode KIND_LABEL / VN string · **cấm** invent Field init-data endpoint
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Auth gate (Field hub)
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** unauth → redirect/shell login cite · auth → FL-* + Live sessions · UI hide/disable theo auth · **cấm** call sessions khi unauth · **cấm** bypass
- **skills:** `/agent-dev`

### T-UI-FL-01 — Phone Field hub surfaces
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** FL-00…FL-03 · phone 430 · 2 cửa + sync(+badge) + tiles×7 + sessionHint · empty/loading/error · UTF-8 VN · **cấm** DES-GRID / LinErpListFilterBar · **cấm** deep TD/TK CRUD · Android/iOS Field home 1-1 · GPS none
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** sessions GET · nav doors/tiles/sync
- **implement.state:** route under `/web-rmms-field`

### T-UI-ACT-01 — Action inventory (doors · sync · tiles)
- **role:** Dev · **deps:** T-UI-FL-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút door/sync/tile → handler + nav · **cấm** dead button (**GAP-P2-ACT-***) · deep routes đúng peer SCREENS · hub mount doors; deep=A
- **skills:** `/agent-dev`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-FL-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→API khớp SA · Text RO sessionHint · Number RO syncBadge · Button/Nav doors/tiles · **cấm** GPS trên hub · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user Field hub
- **role:** Dev · **deps:** T-UI-FL-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone Field)
- **role:** Dev · **deps:** T-UI-FL-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary 430 · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-UI-HIST-01 — Alert / toast overlay
- **role:** Dev · **deps:** T-UI-FL-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** sessions network fail → toast/inline SSOT · **cấm** `alert()` · (**GAP-LIST-HIST-01** adapted)
- **skills:** `/agent-dev`

### T-QA-CRUD-01 — Field Live API scenarios (queued)
- **role:** QA · **deps:** T-UI-FL-01 · T-BE-CRUD-01 · **status:** pending
- **DoD:** scenarios GET sessions badge/hint · empty/error · **cấm** hub POST · queued `/agent-qa*` only · **cấm** TL/Dev chạy e2e
- **skills:** `/agent-qa`

### T-QA-FL-01 — Field hub UI / nav scenarios (queued)
- **role:** QA · **deps:** T-UI-ACT-01 · **status:** pending
- **DoD:** FL-00…03 · doors→peer A · sync→offline · tiles×7 · modes badge/sync/empty/error · phone 430 · queued `/agent-qa*` · e2eQa=ON
- **skills:** `/agent-qa`

---

## Dev assign (agent-dev-assign)

| Wave | Tasks | Owner |
|------|-------|-------|
| W1 BE bind | T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | `/agent-dev` |
| W2 Hub UI | T-UI-FL-01 · T-UI-ACT-01 · T-UI-FIELD-01 | `/agent-dev` |
| W3 Polish | T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01 · T-UI-HIST-01 | `/agent-dev` · `/dev-web-responsive` |
| W4 QA | T-QA-CRUD-01 · T-QA-FL-01 | `/agent-qa*` (queued) |

**next:** `/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued QA.

## DoR checklist

- [x] changeScope=new_page · control-hint + real-data exist
- [x] prior compact PASS · UNCLEAR DOMAIN-MAP/HUB/PORT resolved
- [x] route_confirm=approve `/web-rmms-field`
- [x] FormType adapt + waive cite · GAP-TL-FORMTYPE-01 PASS
- [x] T-* đủ · no pseudo / TODO bỏ lửng
- [x] team_lead-compact.md written
- [x] **cấm** implement · **cấm** e2e · Step 4b skip
