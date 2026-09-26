# Team lead — Task — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| title | Tuần đường đợt B — sổ và dòng nhật ký (TD-04 · TD-05) |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-mobile-b`) |
| packKind | `list` (**phone Field list+form** ≠ desktop Kind B grid) |
| changeScope | `edit_page` |
| formPattern | Full (TD-04 list · TD-05 create/edit) · phone max-width **430** · `LeaveConfirmModal` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-b` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-b` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Auth + Files · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/patrol/**` · cite peer `web-bff` · API owns |
| demo | **N/A** · wave **B** · out TD-06 · TK-02…07 · WO/scope đợt D |
| contentHash | `sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T08:35:00.000Z` |
| taskId | `task_273bea89` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-b/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · UNCLEAR closed SA |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone).  
> **HARD:** Schema_PatrolJournalLine + entity pair + migration **trước** form TD-05.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-mobile-b` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl) |
| B | `/td-journal-b` | rejected |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-mobile-b]` · draft `mfeStdRoute` giữ nguyên · parent TD-01 → TD-04.

## FormType pack adapt (phone journal list+form)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-LIST-01** (phone **List cards**) | DES-GRID N/A · TD-04 journal cards |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone · query `sessionId`·`page`·`pageSize` · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema wave B |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 · LEAVE · ACT · FIELD · PROD · UX · RESP | **KEEP** (mobile surface) | list-form-quality-gates |
| T-UI-LKP-01 SearchInput | **WAIVE** | no SearchInput field wave B (Dropdown LOOKUP_STATIC only) |
| T-UI-HIST-01 | **WAIVE** | no history overlay surface B (TD-07 wave A) |
| T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | **Mới** journal-lines · migration B |
| T-QA-CRUD-01 · T-QA-FORM-01 | **KEEP** (phone flows) | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone list+form + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| TD-04 | Sổ dòng nhật ký | Full 430 | — | empty·cards·tap·back TD-01 | T-UI-LIST-01 | `/agent-dev` |
| TD-05 | Dòng nhật ký | Full 430 | Create/Edit | GPS·save·cancel | T-UI-FORM-01 | `/agent-dev` |
| DES-LEAVE | Dirty leave | Modal | — | stay·leave | T-UI-LEAVE-01 | `/agent-dev` |

Leave nav: TD-04↔TD-05 · Back→TD-01 · Save→TD-04.

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN labels |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* |
| BE | Patrol · CommonLib `ApiResponse` · Auth RequirePermission | parent `*Json` · fake GPS |
| Files | `files/init`→`object`→`commit` · guid only | full URL persist |
| Schema | `Schema_PatrolJournalLine` + entity pair **trước** form | form trước schema |
| Parent | `PatrolSession` Live · sessionId required | invent session |

## implement.wire

| From | To | Note |
|------|----|------|
| TD-04 list | `GET …/sessions/{id}/journal-lines` | page·pageSize · empty OK |
| TD-05 create | `POST …/journal-lines` | body sessionId + fields (PATH CLOSED SA) |
| TD-05 edit | `GET/PUT …/journal-lines/{id}` | |
| Parent | `GET …/sessions/{id}` | ca Note → default direction |
| Profile | `GET …/auth/profile` | userName RO |
| Media | files/* | mediaIds guid[] |

## implement.state

- Route shell phone **430** · react-router under `/web-rmms-mobile-b` · entry từ TD-01 (wave A)
- **check-in ≠ journal list** — TD-04 không render check-in cards
- GPS deny → **block** TD-05 save · **cấm** fake coords
- Dirty → `LeaveConfirmModal` / `useFormLeaveGuard` · **cấm** `window.confirm`/`alert`
- Labels: `useFormOptions()` keys only · weather 6 · kind 9 · status 4 · direction default ca Note `chieu=`
- kmText **tay** (GAP-TD-LRS-01 CLOSED) · narrative required

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| direction · weather · kind · status | LOOKUP_STATIC `useFormOptions()` | invent init-data · hardcode VN |
| userName | auth/profile | editable |
| lat/lng/accuracyM | navigator.geolocation | fake / hardcode |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| journalList | List cards | GET journal-lines | — |
| at | DateTime | — | At |
| userName | Text RO | auth/profile | UserName |
| lat/lng/accuracyM | GPS | geolocation | Lat/Lng/AccuracyM |
| kmText | Text | tay | KmText |
| direction | Dropdown | useFormOptions · default Note chieu= | Direction |
| weather | Dropdown | useFormOptions 6 keys | Weather |
| kind | Radio/Dropdown | useFormOptions 9 keys | Kind |
| narrative | TextArea | required | Narrative |
| mediaIds | FileMulti | files/* | guid[] |
| onSiteAction/Result | Toggle+Text | — | OnSiteAction/Result |
| reportedTo/At | Button+DateTime | no TK-03 | ReportedTo/At |
| violationFlag | Button | if kind=hanh-lang | ViolationFlag |
| status | Dropdown | useFormOptions 4 keys | Status |

---

## Tasks

### T-BE-SCHEMA-01 — Schema + entity + migration (HARD trước form)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** `Schema_PatrolJournalLine` Live · `PatrolJournalLineEntity` · table `rmms_patrol_journal_lines` · migration B · pair entity↔schema · **cấm** ship TD-05 trước schema · **cấm ERP.***
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-CRUD-01 — journal-lines API
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · **status:** pending
- **DoD:** `GET sessions/{id}/journal-lines` · `POST journal-lines` · `GET/PUT journal-lines/{id}` · parent `GET sessions/{id}` · ApiResponse · TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`tenant_keep` · **cấm ERP.***
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-INIT-01 — LOOKUP_STATIC options
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** direction · weather (6) · kind (9) · status (4) từ `useFormOptions()` · **cấm** hardcode KIND_LABEL · **cấm** invent init-data endpoint wave B
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Permission codes
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** Patrol journal-line permission codes · RequirePermission trên API · UI hide/disable theo code · cite peer Patrol session perms
- **skills:** `/agent-dev`

### T-UI-LIST-01 — Phone journal list cards (TD-04)
- **role:** Dev · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-04 · phone 430 · List cards (not Kind B grid) · L-01 empty · L-02 data · L-03 **≠ check-in** · L-04 tap → TD-05 · L-05 no session · L-06 no mock · page/pageSize · UTF-8 VN · **cấm** DES-GRID / LinErpListFilterBar
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** GET sessions/{id}/journal-lines · GET sessions/{id}
- **implement.state:** route under `/web-rmms-mobile-b`

### T-UI-FORM-01 — Journal line create/edit (TD-05)
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-05 Create/Edit · field map 1:1 control-hint · GPS deny **blocks** save · nút «Ghim vị trí hiện tại» · dòng OK `[lat, lng]` 6 số · narrative required · media guid · report TK button (no TK-03) · violation if hanh-lang · F-01…F-07 · phone Full stack per prototype · `dev-form-review-checklist` adapted mobile
- **skills:** `/agent-dev` · `/implement-show-leave-confirm` · form review checklist
- **implement.wire:** POST/GET/PUT journal-lines · files/* · auth/profile · GET sessions/{id}
- **implement.init_data:** useFormOptions LOOKUP_STATIC

### T-UI-ACT-01 — Action inventory work
- **role:** Dev · **deps:** T-UI-LIST-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút (Thêm dòng · tap card · Lưu · Hủy · Back · báo TK · đề nghị BB) → handler + FormMode/API · **cấm** dead button (**GAP-P2-ACT-***)
- **skills:** `/agent-dev`

### T-UI-LEAVE-01 — Dirty leave Modal
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** DES-LEAVE · `LeaveConfirmModal` · TD-04↔TD-05 · Back→TD-01 · **cấm** `window.confirm`/`alert`/`prompt` · **/implement-show-leave-confirm**
- **skills:** `/implement-show-leave-confirm`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→DTO/API khớp SA · DateTime UTC · GPS · FileMulti guid · Dropdown keys · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user chrome
- **role:** Dev · **deps:** T-UI-LIST-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone)
- **role:** Dev · **deps:** T-UI-LIST-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary shell 430 · radio/checkbox **20×20** `choiceRow`/`toggleRow` · **cấm** text-field chrome trên radio|checkbox · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-QA-CRUD-01 — List · create/edit · leave · GPS
- **role:** QA · **deps:** all T-UI-* + T-BE-* · **status:** pending
- **DoD:** scenarios L-01…L-06 · F-01…F-07 · schema-before-form · Leave Modal · **e2e chỉ** `/agent-qa*` (queued)
- **skills:** `/agent-qa`

### T-QA-FORM-01 — Form field ↔ body
- **role:** QA · **deps:** T-QA-CRUD-01 · **status:** pending
- **DoD:** từng field required · UI value = request body · mediaIds guid · GPS deny · (**GAP-QA-FORM-FIELD-01**)
- **skills:** `/agent-qa` · `form-field-e2e`

---

## Deps (order)

```
T-BE-SCHEMA-01 ─┬─► T-BE-CRUD-01 ─┬─► T-PERM-01
                │                 └─► T-UI-LIST-01 ─┬─► T-UI-ACT-01
T-BE-INIT-01 ───┴─► T-UI-FORM-01 ──────────────────┤   T-UI-LEAVE-01
                                                    │   T-UI-FIELD-01
                                                    │   T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01
                                                    └─► T-QA-CRUD-01 · T-QA-FORM-01
```

## WAIVE register (Kind B desktop)

| id | status | cite |
|----|--------|------|
| T-UI-LIST-01 Kind B grid | WAIVE→phone cards | SA FormType · DES-GRID N/A |
| T-UI-FILTER-01 | WAIVE | PO/Design phone · sessionId query |
| T-UI-CFG-01 | WAIVE | no catalog editor |
| T-BE-UISCHEMA-01 | WAIVE | no ui-schema B |
| T-UI-LKP-01 | WAIVE | no SearchInput B |
| T-UI-HIST-01 | WAIVE | no TD-07 B |
| T-QA-FILTER-01/02 | WAIVE | no filter-bar |

## Next

- `/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued QA  
- **cấm** yarn build / e2e / start:std / Step 4b migration ở team_lead (Dev chạy BE+migration)
