# Team lead — Task — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| title | Tuần đường / Tuần kiểm đợt A — hub · mở ca · check-in · lịch sử |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-mobile-a`) |
| packKind | `list` (**phone Field hub** ≠ desktop Kind B grid) |
| changeScope | `new_page` |
| formPattern | Full (TD-00/01/02/07 · TK-00/01) · Sheet (TD-03) · phone max-width **430** · `LeaveConfirmModal` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-a` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-a` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Integration + Auth + Files · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/patrol/**` · cite peer `web-bff` · **cấm** đổi Live path |
| demo | **N/A** · wave **A Live-only** · out TD-04/05/06 · TK-02…07 · journal/findings |
| contentHash | `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T07:30:00.000Z` |
| taskId | `task_0169a610` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-a/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone hub).

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-mobile-a` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl) |
| B | `/td-tk-a` | rejected |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-mobile-a]` · draft `mfeStdRoute` giữ nguyên.

## FormType pack adapt (phone hub)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-HUB-01** | DES-GRID N/A · card hub/history |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone hub · query `status`/`route`/`page` client · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema wave A |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 · LEAVE · ACT · LKP · FIELD · PROD · UX · RESP · HIST | **KEEP** (mobile surface) | list-form-quality-gates |
| T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | Live Patrol · LOOKUP_STATIC |
| T-QA-CRUD-01 · T-QA-FORM-01 | **KEEP** (phone flows) | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ theo surface phone hub + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| TD-00 | Hub Tuần đường | Full 430 | — | open·active·history | T-UI-HUB-01 | `/agent-dev` |
| TK-00 | Hub Tuần kiểm | Full 430 | — | open·active | T-UI-HUB-01 | `/agent-dev` |
| TD-01 | Session detail | Full 430 | View | check-in·chips | T-UI-HUB-01 | `/agent-dev` |
| TD-02 | Mở ca TD | Full | Create | save·cancel | T-UI-FORM-01 | `/agent-dev` |
| TK-01 | Mở ca TK | Full | Create | save·cancel | T-UI-FORM-01 | `/agent-dev` |
| TD-03 | Check-in | Sheet | Create | GPS·photo·save | T-UI-FORM-01 | `/agent-dev` |
| TD-07 | Lịch sử | Full 430 | — | list·CI cards | T-UI-HUB-01 | `/agent-dev` |
| DES-LEAVE | Dirty leave | Modal | — | stay·leave | T-UI-LEAVE-01 | `/agent-dev` |

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN labels |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* |
| BE | Patrol Live · CommonLib `ApiResponse` · Auth RequirePermission | parent `*Json` · fake GPS |
| Files | `files/init`→`object`→`commit` · guid only | full URL persist |
| Catalog | `integration/road-routes/search` SearchInput | free-text khi có hit |
| Note | opaque `key=value` join `; ` (SA § Note-encode) | JSON object trong Note |

## implement.wire

| From | To | Note |
|------|----|------|
| UI forms | `POST/GET mobile-bff/api/v1/patrol/sessions*` | Live path · API owns |
| Check-in | `POST …/sessions/{id}/check-ins` | GPS HARD deny→block |
| Plan points | `GET …/sessions/{id}/plan-points` | empty OK · no auto MatchOk |
| Route | `GET …/integration/road-routes/search` | SearchInput |
| Profile | `GET …/auth/profile` | userName RO |
| Media | files/* | MediaIds / PhotoLocalIds guid[] |

## implement.state

- Route shell phone **430** · react-router under `/web-rmms-mobile-a`
- Session active: nếu đã `Đang tuần` cùng user+tuyến+loại → **navigate TD-01** · **cấm** POST thứ hai
- Note encode TD-02 / TK-01 per SA · parse token trim
- Dirty → `LeaveConfirmModal` / `useFormLeaveGuard` · **cấm** `window.confirm`/`alert`
- Labels: `useFormOptions()` keys only

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| direction · inspectMode | LOOKUP_STATIC `useFormOptions()` | invent `patrol/init-data` wave A · KIND_LABEL FE |
| route | road-routes/search | hardcode options |

## Field → control (T-UI-LKP / FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| route | SearchInput | road-route · search API | Route / RouteCode |
| direction | Dropdown | useFormOptions `chieu-*` | Note `chieu=` |
| userName | Text RO | auth/profile | UserName |
| plannedDate | Date | — | PlannedDate |
| kmFrom/kmTo | Number | — | Note kmFrom/kmTo |
| inspectMode | Dropdown | useFormOptions dinh-ky/dot-xuat | Note `mode=` |
| inspectReason | Text | if dot-xuat | Note `reason=` |
| planPointLabel | Text | plan-points GET | PlanPointLabel (empty OK) |
| lat/lng/accuracyM | GPS | geolocation | Lat/Lng/AccuracyM |
| content | Text | — | Content |
| photoLocalIds | FileMulti | files/* | guid[] |
| historyCards | List cards | GET sessions | — |

---

## Tasks

### T-BE-CRUD-01 — Patrol sessions + check-ins (Live)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** Wire Live `GET/POST sessions` · `GET/{id}` · `POST/GET check-ins` · `GET plan-points` · **migration none** wave A · ApiResponse · **cấm ERP.*** · Note opaque encode · duplicate open → 409/navigate rule
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-INIT-01 — LOOKUP_STATIC options
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** direction + inspectMode từ `useFormOptions()` · **cấm** hardcode KIND_LABEL · **cấm** invent init-data endpoint wave A
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Permission codes
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** Keep peer Patrol session/check-in permission codes · RequirePermission trên API · UI hide/disable theo code
- **skills:** `/agent-dev`

### T-UI-HUB-01 — Phone hubs + detail + history cards
- **role:** Dev · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-00 · TK-00 · TD-01 · TD-07 · phone 430 · list cards (not Kind B grid) · active filter `status=Đang tuần` · history page/route query · PatrolType client filter · empty/loading/error · UTF-8 VN · **cấm** DES-GRID / pager clone / LinErpListFilterBar
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** GET sessions · GET/{id} · GET check-ins
- **implement.state:** route children under `/web-rmms-mobile-a`

### T-UI-FORM-01 — Open session + check-in sheet
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-02 Create · TK-01 Create · TD-03 Sheet · field map 1:1 control-hint · Note-encode SA · GPS deny **blocks** TD-03 save · plan-points empty OK · photos guid · View RO chips trên TD-01 · **cấm** footer Lưu pattern desktop 5-col (phone Full stack per prototype) · `dev-form-review-checklist` adapted mobile
- **skills:** `/agent-dev` · `/implement-show-leave-confirm` · form review checklist
- **implement.wire:** POST sessions · POST check-ins · files/* · road-routes · profile
- **implement.init_data:** useFormOptions LOOKUP_STATIC

### T-UI-ACT-01 — Action inventory work
- **role:** Dev · **deps:** T-UI-HUB-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút hub/form (Mở ca · Check-in · Lịch sử · Lưu · Hủy · quay lại) → handler + FormMode/API · **cấm** dead button (**GAP-P2-ACT-***)
- **skills:** `/agent-dev`

### T-UI-LEAVE-01 — Dirty leave Modal
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** DES-LEAVE · `LeaveConfirmModal` · **cấm** `window.confirm`/`alert`/`prompt` · **/implement-show-leave-confirm**
- **skills:** `/implement-show-leave-confirm`

### T-UI-LKP-01 — Lookup SearchInput
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** route = SearchInput road-route · **cấm** native select / Text free khi có hit · (**GAP-LIST-LKP-01**)
- **skills:** list-form-quality-gates §1

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→DTO/API khớp SA · Date UTC · Number km · GPS · FileMulti guid · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user chrome
- **role:** Dev · **deps:** T-UI-HUB-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone)
- **role:** Dev · **deps:** T-UI-HUB-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary shell 430 · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-UI-HIST-01 — History + alert overlay
- **role:** Dev · **deps:** T-UI-HUB-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-07 history cards work · chặn/xóa/toast = Modal/`useAlert` · **cấm** native dialog · overlay stacked SSOT
- **skills:** `dev-history-alert-overlay`

### T-QA-CRUD-01 — Hub · open · check-in · history
- **role:** QA · **deps:** all T-UI-* + T-BE-* · **status:** pending
- **DoD:** scenarios TD-00→02→01→03→07 · TK-00→01 · duplicate open · GPS deny · plan-points empty · Leave Modal · **e2e chỉ** `/agent-qa*` (queued)
- **skills:** `/agent-qa`

### T-QA-FORM-01 — Form field ↔ body
- **role:** QA · **deps:** T-QA-CRUD-01 · **status:** pending
- **DoD:** từng field required · UI value = request body · Note tokens · MediaIds guid · (**GAP-QA-FORM-FIELD-01**)
- **skills:** `/agent-qa` · `form-field-e2e`

---

## Deps (order)

```
T-BE-CRUD-01 ─┬─► T-PERM-01
T-BE-INIT-01 ─┤
              └─► T-UI-HUB-01 ─┬─► T-UI-ACT-01
                  T-UI-FORM-01 ┘     T-UI-LEAVE-01
                                     T-UI-LKP-01 · T-UI-FIELD-01
                                     T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01
                                     T-UI-HIST-01
                              └─► T-QA-CRUD-01 · T-QA-FORM-01
```

## WAIVE register (Kind B desktop)

| id | status | cite |
|----|--------|------|
| T-UI-LIST-01 Kind B | WAIVE | SA FormType pack · DES-GRID N/A |
| T-UI-FILTER-01 | WAIVE | PO/Design phone hub |
| T-UI-CFG-01 | WAIVE | no catalog editor |
| T-BE-UISCHEMA-01 | WAIVE | no ui-schema A |
| T-QA-FILTER-01/02 | WAIVE | no filter-bar |

## Next

- `/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued QA  
- **cấm** yarn build / e2e / start:std ở team_lead
