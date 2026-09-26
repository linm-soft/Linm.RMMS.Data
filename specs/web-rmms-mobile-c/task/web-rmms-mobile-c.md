# Team lead — Task — web-rmms-mobile-c

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-c` |
| title | Tuần kiểm đợt C — danh mục, phiếu, đối chiếu, kiểm tra lại (TK-02…05) |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/web-rmms-mobile-c`) |
| packKind | `list` (**phone Field list+form** ≠ desktop Kind B grid) |
| changeScope | `edit_page` |
| formPattern | Full (TK-02 list · TK-03 form · TK-04 review · TK-05 detail+recheck) · phone max-width **430** · `LeaveConfirmModal` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-mobile-c` (**route_confirm** autoApprove=ON · giữ path STATUS) |
| mfeStdUrl | `http://localhost:9301/web-rmms-mobile-c` (Dev điền live) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Auth + Files · **cấm ERP.*** |
| BFF bind | `mobile-bff/api/v1/patrol/**` · cite peer `web-bff` · API owns |
| demo | **N/A** · wave **C** · out TK-06/07 · WO assign · feedback (D) |
| contentHash | `sha256:0654e7b6359dfa34767872c7ea3a74f94605bd1b73fd125e241d6c95592133a4` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T09:15:00.000Z` |
| taskId | `task_eeebef9d` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-c/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · UNCLEAR closed SA |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone).  
> **HARD:** `Schema_PatrolFinding` + `PatrolFindingEntity` pair + migration C (findings + journal review cols) **trước** form TK-03.  
> Code gen: `TK-{yyyyMMdd}-{seq:D3}` **server-only** on POST findings.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default) | `/web-rmms-mobile-c` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl) |
| B | `/tk-findings-c` | rejected |
| C custom | — | N/A |

`source.routes` = `[/web-rmms-mobile-c]` · draft `mfeStdRoute` giữ nguyên · Leave Back→hub A · peer journal B.

## FormType pack adapt (phone findings list+form)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-LIST-01** (phone **List cards**) | DES-GRID N/A · TK-02 finding cards |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone · Chip/Select `status`·`route` · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema wave C |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 · LEAVE · ACT · FIELD · PROD · UX · RESP | **KEEP** (mobile surface) | list-form-quality-gates |
| T-UI-FORM-02 (TK-04 review) · T-UI-FORM-03 (TK-05 recheck) | **KEEP** (extra Full surfaces) | wave C 4 screens |
| T-UI-LKP-01 SearchInput | **WAIVE** | Dropdown LOOKUP only · hangMuc PO slugs |
| T-UI-HIST-01 | **WAIVE** | no history overlay wave C |
| T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · T-PERM-01 | **KEEP** | **Mới** findings + review cols · migration C |
| T-QA-CRUD-01 · T-QA-FORM-01 | **KEEP** (phone flows) | queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone list+form + extra TK-04/05 + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| TK-02 | Danh mục phiếu | Full 430 | — | empty·cards·filter·tap·create | T-UI-LIST-01 | `/agent-dev` |
| TK-03 | Lập/sửa phiếu | Full 430 | Create/Edit | GPS·save·cancel | T-UI-FORM-01 | `/agent-dev` |
| TK-04 | Đối chiếu journal | Full 430 | Review | khớp/lệch·createFromLech | T-UI-FORM-02 | `/agent-dev` |
| TK-05 | Chi tiết + recheck | Full 430 | Recheck | GPS·dat/chua·confirmDone | T-UI-FORM-03 | `/agent-dev` |
| DES-LEAVE | Dirty leave | Modal | — | stay·leave | T-UI-LEAVE-01 | `/agent-dev` |

Leave nav: TK-02↔03/05 · TK-04→03 prefill · Back→hub A · Save TK-03→TK-05.

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · `useFormOptions()` | clone Lin* · hardcode VN labels |
| HTTP | apiClient SSOT · prefix `mobile-bff` | invent axios · ERP.* |
| BE | Patrol · CommonLib `ApiResponse` · Auth RequirePermission | parent `*Json` · fake GPS |
| Files | `files/init`→`object`→`commit` · guid only | full URL persist |
| Schema | `Schema_PatrolFinding` + entity pair **trước** form · journal review cols migration C | form trước schema |
| Parent | `PatrolSession` Live · peer journal-lines B | invent session · rewrite TD narrative |
| Code | server `TK-{yyyyMMdd}-{seq:D3}` on POST | client invent code |

## implement.wire

| From | To | Note |
|------|----|------|
| TK-02 list | `GET …/findings?sessionId&status&route` | empty OK · page optional |
| TK-03 create | `POST …/findings` | body + GPS · code server |
| TK-03/05 get | `GET …/findings/{id}` | |
| TK-05 recheck | `POST …/findings/{id}/recheck` | dat→xong · chua→da-giao |
| TK-04 review | `PUT …/journal-lines/{id}/review` | review · reviewNote · findingId |
| Peer | `GET …/journal-lines` / `GET …/journal-lines/{id}` | prefill GPS · **cấm** rewrite narrative |
| Parent | `GET …/sessions/{id}` | sessionId required |
| Media | files/* | mediaIds guid[] |

## implement.state

- Route shell phone **430** · react-router under `/web-rmms-mobile-c` · entry từ hub A
- GPS deny → **block** TK-03 save + TK-05 recheck confirm · **cấm** fake coords
- TK-04 prefill GPS from journal · no new GPS unless user retake
- Dirty → `LeaveConfirmModal` / `useFormLeaveGuard` · **cấm** `window.confirm`/`alert`
- Labels: `useFormOptions()` keys only · hangMuc PO slugs · source 5 · findingKind 7 · side 5 · scope bdtx/vuot-bdtx
- Chip/Select filter only · **cấm** LinErpListFilterBar

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| source · findingKind · side · hangMuc · scope · recheckResult | LOOKUP_STATIC `useFormOptions()` / PO slugs | invent init-data · hardcode VN |
| lat/lng/accuracyM | navigator.geolocation (TK-03/05) · journal (TK-04) | fake / hardcode |
| code | server on POST | client invent |

## Field → control (T-UI-FIELD)

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| findingList | List cards | GET findings | — |
| filter.status/route | Chip/Select | phone query | — |
| source | Dropdown | useFormOptions 5 · journal if tuan-duong | Source |
| findingKind | Dropdown | useFormOptions 7 | FindingKind |
| kmFrom/kmTo | Text | — | KmFrom/KmTo |
| side | Dropdown | useFormOptions 5 | Side |
| hangMuc | Dropdown | PO slugs CTX §5 | HangMuc |
| description | TextArea | required | Description |
| scope | Radio | bdtx/vuot-bdtx | Scope |
| lat/lng/accuracyM | GPS | geolocation · TK-03/05 HARD | Lat/Lng/AccuracyM |
| dueAt | Date | if bdtx | DueAt |
| mediaIds | FileMulti | files/* | guid[] |
| review/reviewNote | Radio+Text | TK-04 · lech note required | Review/ReviewNote |
| createFromLech | Button | → TK-03 prefill | — |
| recheckResult | Radio | dat/chua-dat | RecheckResult |
| confirmDone | Button | only if dat | — |

---

## Tasks

### T-BE-SCHEMA-01 — Schema + entity + migration C (HARD trước form)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** `Schema_PatrolFinding` Live · `PatrolFindingEntity` · table `rmms_patrol_findings` · migration C add Review·ReviewNote·FindingId trên journal-lines · pair entity↔schema · **cấm** ship TK-03 trước schema · **cấm ERP.***
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol · Step 4b (Dev only)

### T-BE-CRUD-01 — findings + recheck + review API
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · **status:** pending
- **DoD:** `GET/POST findings` · `GET findings/{id}` · `POST findings/{id}/recheck` · `PUT journal-lines/{id}/review` · peer journal-lines · parent sessions · code `TK-{yyyyMMdd}-{seq:D3}` server-only · ApiResponse · TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`tenant_keep` · **cấm ERP.***
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-INIT-01 — LOOKUP_STATIC options
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** source(5) · findingKind(7) · side(5) · hangMuc PO slugs · scope · recheckResult từ `useFormOptions()` · **cấm** hardcode VN · **cấm** invent init-data endpoint wave C
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Permission codes
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** Patrol finding/review/recheck permission codes · RequirePermission trên API · UI hide/disable theo code · cite peer Patrol session/journal perms
- **skills:** `/agent-dev`

### T-UI-LIST-01 — Phone finding list cards (TK-02)
- **role:** Dev · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-02 · phone 430 · List cards (not Kind B grid) · L-01 empty · L-02 data · L-03 Chip/Select filter · L-04 tap → TK-05 · L-05 create → TK-03 · L-06 parent session · L-07 no mock · UTF-8 VN · **cấm** DES-GRID / LinErpListFilterBar
- **skills:** `/agent-dev` · `/dev-web-responsive` · `dev-ui-ux-constitution` · prototype reviewUrl
- **ssot.reuse:** common-components mobile kit
- **implement.wire:** GET findings · GET sessions/{id}
- **implement.state:** route under `/web-rmms-mobile-c`

### T-UI-FORM-01 — Finding create/edit (TK-03)
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-03 Create/Edit · field map 1:1 control-hint · GPS deny **blocks** save · description required · dueAt if bdtx · media guid · F-01…F-08 · Save→TK-05 · phone Full stack per prototype · `dev-form-review-checklist` adapted mobile
- **skills:** `/agent-dev` · `/implement-show-leave-confirm` · form review checklist
- **implement.wire:** POST/GET findings · files/* · GET sessions/{id}
- **implement.init_data:** useFormOptions LOOKUP_STATIC

### T-UI-FORM-02 — Journal review đối chiếu (TK-04)
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-04 · prefill GPS from journal · R-01 review khớp/lệch · lech → reviewNote required · R-02 createFromLech → TK-03 prefill · R-03 **cấm** rewrite TD narrative · PUT journal-lines/{id}/review
- **skills:** `/agent-dev` · prototype reviewUrl
- **implement.wire:** GET journal-lines/{id} · PUT …/review · optional POST findings from lech

### T-UI-FORM-03 — Detail + recheck (TK-05)
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-UI-FORM-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-05 · GET findings/{id} · K-01 GPS deny blocks recheck · K-02 dat → confirmDone · K-03 chua → da-giao · K-04 out D (no WO/feedback) · POST …/recheck
- **skills:** `/agent-dev` · `/implement-show-leave-confirm`
- **implement.wire:** GET findings/{id} · POST …/recheck · geolocation

### T-UI-ACT-01 — Action inventory work
- **role:** Dev · **deps:** T-UI-LIST-01 · T-UI-FORM-01 · T-UI-FORM-02 · T-UI-FORM-03 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút (Tạo phiếu · tap card · Lưu · Hủy · Back · createFromLech · confirmDone · filter chips) → handler + FormMode/API · **cấm** dead button (**GAP-P2-ACT-***)
- **skills:** `/agent-dev`

### T-UI-LEAVE-01 — Dirty leave Modal
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-FORM-02 · T-UI-FORM-03 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** DES-LEAVE · `LeaveConfirmModal` · TK-02↔03/05 · TK-04 dirty · Back→hub A · **cấm** `window.confirm`/`alert`/`prompt` · **/implement-show-leave-confirm**
- **skills:** `/implement-show-leave-confirm`

### T-UI-FIELD-01 — Field type + DTO map
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-FORM-02 · T-UI-FORM-03 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** bảng field→control→DTO/API khớp SA · Date UTC · GPS · FileMulti guid · Dropdown keys · review Radio+Text · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user chrome
- **role:** Dev · **deps:** T-UI-LIST-01 · T-UI-FORM-* · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone)
- **role:** Dev · **deps:** T-UI-LIST-01 · T-UI-FORM-* · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing 4/8/12/16/24/32 · Lin* only · empty/loading/error · phone primary shell 430 · radio/checkbox **20×20** `choiceRow`/`choiceGrid`/`toggleRow` · **cấm** text-field chrome trên radio|checkbox · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · **không** shrink mù · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-QA-CRUD-01 — List · forms · leave · GPS · review · recheck
- **role:** QA · **deps:** all T-UI-* + T-BE-* · **status:** pending
- **DoD:** scenarios L-01…L-07 · F-01…F-08 · R-01…R-03 · K-01…K-04 · schema-before-form · Leave Modal · **e2e chỉ** `/agent-qa*` (queued)
- **skills:** `/agent-qa`

### T-QA-FORM-01 — Form field ↔ body
- **role:** QA · **deps:** T-QA-CRUD-01 · **status:** pending
- **DoD:** từng field required · UI value = request body · mediaIds guid · GPS deny TK-03/05 · reviewNote if lech · (**GAP-QA-FORM-FIELD-01**)
- **skills:** `/agent-qa` · `form-field-e2e`

---

## Deps (order)

```
T-BE-SCHEMA-01 ─┬─► T-BE-CRUD-01 ─┬─► T-PERM-01
                │                 ├─► T-UI-LIST-01 ─┬─► T-UI-ACT-01
T-BE-INIT-01 ───┴─► T-UI-FORM-01 ─┤                 │   T-UI-LEAVE-01
                    T-UI-FORM-02 ─┤                 │   T-UI-FIELD-01
                    T-UI-FORM-03 ─┘                 │   T-UI-PROD-01 · T-UI-UX-01 · T-UI-RESP-01
                                                    └─► T-QA-CRUD-01 · T-QA-FORM-01
```

## WAIVE register (Kind B desktop)

| id | status | cite |
|----|--------|------|
| T-UI-LIST-01 Kind B grid | WAIVE→phone cards | SA FormType · DES-GRID N/A |
| T-UI-FILTER-01 | WAIVE | PO/Design phone · Chip/Select |
| T-UI-CFG-01 | WAIVE | no catalog editor |
| T-BE-UISCHEMA-01 | WAIVE | no ui-schema C |
| T-UI-LKP-01 | WAIVE | no SearchInput C |
| T-UI-HIST-01 | WAIVE | no history C |
| T-QA-FILTER-01/02 | WAIVE | no filter-bar |

## Next

- `/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued QA  
- **cấm** yarn build / e2e / start:std / Step 4b migration ở team_lead (Dev chạy BE+migration)
