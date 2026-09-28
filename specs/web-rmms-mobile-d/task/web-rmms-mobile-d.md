# Team lead — Task — web-rmms-mobile-d (delta SUBMIT-VALIDATE)

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-d` |
| title | Delta — Pattern B + SearchInput users/routes + BFF users (TD-06 · TK-06) |
| role | `team_lead` · `/agent-team-lead` |
| status | `done` (autoApprove=ON · `route_confirm=approve` path `/kien-nghi/moi`) |
| packKind | `list` (**phone Field list+form** ≠ desktop Kind B grid) |
| changeScope | `edit_page` · keep prior baseline · overlay `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` only |
| formPattern | Full (TD-06 · TK-06) · phone max-width **430** · Pattern B Lưu · `LeaveConfirmModal` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/kien-nghi/moi` (**route_confirm** autoApprove=ON · khớp STATUS/PO/Design/SA) |
| mfeStdUrl | `http://localhost:9301/kien-nghi/moi` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Patrol + Maintenance + Integration · **cấm ERP.*** · **cấm** new WS API this delta |
| BFF bind | `mobile-bff` · forward `GET integration/users` · cite `road-routes/search` · `mobileApiBase()` only · **cấm** web-bff |
| demo | **N/A** · hash skip · **cấm** re-scan |
| contentHash | `sha256:5f81d29ed889b244e81f537e7e3f8e8d4033a5f3a2e8b37e000d83ad97784488` |
| skillVersion | `2026.09.05.03` |
| workflowVersion | `2026.09.19.02` |
| rulesVersion | `2026.09.25.2` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T08:56:00.000Z` |
| taskId | `task_db778375` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-mobile-d/ui/prototype/index.html` |
| prior | data_analy·po·design·sa = **confirmed** · compact exist · UNCLEAR all CLOSED SA |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` |

> TL **chia HOW + DoD + T-*** · **cấm** implement product code · **cấm** e2e / yarn build / start:std / Step 4b migration ở role này.  
> Kind B grid / `LinErpListFilterBar` / ui-schema editor = **N/A** (PO·Design·SA chốt phone).  
> **HARD delta:** Pattern B (always-on Lưu · validate-on-click · banner+inline) trên TD-06 + TK-06 · `receiverName` = Mobile **SearchInput users** · `route` = **SearchInput road-routes** · remove `ROAD_ROUTE_SEED` · BFF forward users · **cấm** free-text receiver · **cấm** ERP UserSearchInput.  
> Keep baseline: Schema_PatrolPetition · TK-03 assign · TK-05 feedback · Note `D1|` · IsPaused · GPS TK-06 deny+no-face.  
> Align: `/align-mobile-to-mfe` · 430 · **no** new tab/route/icon · no android/ios prototype.

## route_confirm

| Option | Path | Decision |
|--------|------|----------|
| A (default STATUS) | `/kien-nghi/moi` | **approve** (autoApprove=ON · khớp STATUS · peerStdUrl PO/Design/SA) |
| B | `/web-rmms-mobile-d` | superseded by STATUS real path |
| C custom | — | N/A |

`source.routes` = `[/kien-nghi/moi]` · draft `mfeStdRoute` giữ STATUS · Leave Back→hub A · peer A sessions · B journal · C findings.

## FormType pack adapt (phone list+form · delta)

| Canonical (form-type-task-pack §2a) | Adapt | Reason |
|-------------------------------------|-------|--------|
| T-UI-LIST-01 Kind B `tl-grid-task-template` | → **T-UI-LIST-01** keep baseline phone cards | DES-GRID N/A · no list delta this wave |
| T-UI-FILTER-01 `LinErpListFilterBar` | **WAIVE** | phone · **cấm** desktop filter bar |
| T-UI-CFG-01 `LinCatalogUiSchemaEditorModal` | **WAIVE** | no catalog Kind B |
| T-BE-UISCHEMA-01 | **WAIVE** | no ui-schema |
| T-QA-FILTER-01 / T-QA-FILTER-02 | **WAIVE** | no filter-bar DTM |
| T-UI-FORM-01 (TD-06) · T-UI-FORM-03 (TK-06) · LEAVE · FIELD · PROD · UX · RESP | **KEEP + delta** | Pattern B · SearchInput · list-form-quality-gates |
| T-UI-ACT-02 (TK-03) · T-UI-FORM-02 (TK-05) | **KEEP baseline** | no submit-validate delta |
| T-UI-LKP-01 SearchInput | **KEEP** (delta) | users + road-routes · was WAIVE baseline |
| T-UI-HIST-01 | **WAIVE** | no history |
| T-BE-SCHEMA-01 | **KEEP baseline done** | no new entity this delta |
| T-BE-BFF-01 · T-BE-CRUD-01 (light) · T-BE-INIT-01 · T-PERM-01 | **KEEP / mint** | BFF users · no-seed · LOOKUP_STATIC |
| T-QA-CRUD-01 · T-QA-FORM-01 | **KEEP + delta AC** | S-08/09 · P-02/07/08 · B-01…03 · queued `/agent-qa*` |

**GAP-TL-FORMTYPE-01:** PASS — pack đủ phone + LKP SearchInput delta + waive có cite.  
**GAP-TL-FILTER-01:** N/A (waive). **GAP-TL-GRID-*-01:** N/A.

## Screens → tasks

| id | Surface | Pattern | FormMode | Actions | Task | devSlash |
|----|---------|---------|----------|---------|------|----------|
| TD-06 | Kết ca / bàn giao / tạm dừng | Full 430 · Pattern B | Edit session | Radio · SearchInput users · save | T-UI-FORM-01 · T-UI-LKP-01 | `/agent-dev` |
| TK-06 | Tạo kiến nghị | Full 430 · Pattern B | Create | SearchInput route · save · GPS/noFace | T-UI-FORM-03 · T-UI-LKP-01 | `/agent-dev` |
| TK-03 | Giao BDTX | keep baseline | Assign | assignWo | T-UI-ACT-02 | `/agent-dev` |
| TK-05 | Phản hồi | keep baseline | Feedback | save | T-UI-FORM-02 | `/agent-dev` |
| DES-LEAVE | Dirty leave | Modal | — | stay·leave | T-UI-LEAVE-01 | `/agent-dev` |

Leave nav: dirty TD-06 / TK-06 create → LeaveConfirm · Back→hub A · Save TD-06 PUT · petition create→list.

## ssot.reuse

| Concern | Reuse | Cấm |
|---------|-------|-----|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · Mobile SearchInput (road-routes pattern) · `useFormOptions()` | clone Lin* · ERP UserSearchInput · hardcode VN |
| HTTP | apiClient SSOT · `mobileApiBase()` · prefix `mobile-bff` | invent axios · web-bff · ERP.* |
| BE | Patrol · Maintenance · Integration users Live · CommonLib `ApiResponse` | new WS API · parent `*Json` · fake GPS |
| Users | BFF forward `GET …/integration/users` · map `username\|code` + `fullName` | invent roster · free-text receiver |
| Routes | `GET …/road-routes/search` Live | `ROAD_ROUTE_SEED` · QL.22 seed |
| Schema | keep Schema_PatrolPetition + session cols (baseline done) | re-migrate unless GAP |
| Parent | PatrolSession Live · findings peer C · journal peer B | invent session · inbox=sổ KN |
| Note tạm | keep `D1\|` until cols Live | JSON blob · multi format |

## implement.wire

| From | To | Note |
|------|----|------|
| TD-06 load | `GET …/patrol/sessions/{id}` | no active → chặn (peer A) |
| TD-06 ket-ca / ban-giao / tam-dung | `PUT …/patrol/sessions/{id}` | Pattern B validate-on-click · Status / IsPaused / Note `D1\|` |
| receiver SearchInput | `GET mobile-bff/…/integration/users?q=` | BFF forward · miss `--` · **cấm** free-text |
| open lines | `GET …/journal-lines?sessionId&open` | peer B · handoverOpenIds |
| TK-06 route SearchInput | `GET …/road-routes/search?q=` | no seed · miss `--` |
| TK-06 create | `POST …/patrol/petitions` | Pattern B · status `moi` · GPS optional if noFace |
| TK-06 list | `GET …/patrol/petitions` | keep · **cấm** mock |
| profile | `GET auth/profile` | senderUnit prefill |
| Media | files/* | mediaIds guid[] |

## implement.state

- Route shell phone **430** · react-router under `/kien-nghi/moi` · entry từ hub A
- Pattern B: Lưu **always-on** except `saving` · validate-on-click · `validationAttempted` · banner `string[]` + inline
- GPS: TD-06 **none** · TK-06 deny → block nút cần tọa độ · **no-face** → save w/o coords · **cấm** fake lat/lng
- Dirty → `LeaveConfirmModal` / `useFormLeaveGuard` · **cấm** `window.confirm`/`alert`
- Labels: `useFormOptions()` keys only · **cấm** ROAD_ROUTE_SEED · **cấm** LinErpListFilterBar · **cấm** ERP.*

## implement.init_data

| Field | Source | Cấm |
|-------|--------|-----|
| actionKind · pauseReason · feedbackQuality · petitionKind · petition.status | LOOKUP_STATIC `useFormOptions()` | invent init-data · hardcode VN |
| receiverName | SearchInput → integration/users | free-text · ERP UserSearchInput |
| route | SearchInput → road-routes/search | ROAD_ROUTE_SEED · free invent |
| lat/lng/accuracyM · noFace | navigator.geolocation (TK-06) | fake / hardcode |
| code (petition) | server on POST | client invent |

## Field → control (T-UI-FIELD) — delta overlay

| uiField | controlHint | catalogKind / source | write |
|---------|-------------|----------------------|-------|
| actionKind | Radio | useFormOptions ket-ca/ban-giao/tam-dung | Status / IsPaused |
| handoverNote | TextArea | required on-submit if ban-giao | HandoverNote / Note tạm |
| receiverName | **SearchInput users** | BFF `integration/users` · miss `--` | ReceiverName |
| handoverOpenLineIds | MultiSelect/hidden | GET open journal-lines | HandoverOpenLineIds CSV |
| pauseReason | Dropdown | useFormOptions 5 keys required on-submit if tam-dung | PauseReason |
| saveSession | Button Pattern B | disable only saving · PUT sessions | — |
| route | **SearchInput road-routes** | `road-routes/search` · no seed · miss `--` | Route |
| senderUnit | Text | profile prefill | SenderUnit |
| kmText / content / kind | Text/TextArea/Dropdown | required on-submit | KmText / Content / Kind |
| lat/lng · noFace | GPS+Flag | geolocation · no-face OK | Lat/Lng · NoFace |
| savePetition | Button Pattern B | disable only saving · POST petitions | — |
| assignWo / feedback.* | keep baseline | TK-03 / TK-05 | WorkOrderId / feedback |

---

## Tasks

### T-BE-SCHEMA-01 — Schema keep (baseline done · no new this delta)
- **role:** Dev · **deps:** none · **status:** pending (verify keep)
- **DoD:** confirm `Schema_PatrolPetition` + session handover/pause cols + finding WO/feedback still Live · **no** new migration this delta unless GAP · **cấm ERP.*** · Step 4b **Dev only** if repair needed
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-BFF-01 — Mobile.Bff forward users (GAP-DA-MOB-D-USERS-01)
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** BFF route forward `GET integration/users` (q/search) → Integration Live · DTO map `username|code` + `fullName` · **cấm** new WS API · **cấm** web-bff · transport `mobileApiBase()` only · cite DOMAIN-MAP Integration
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Integration

### T-BE-CRUD-01 — sessions / petitions keep · no-seed routes
- **role:** Dev · **deps:** T-BE-SCHEMA-01 · **status:** pending
- **DoD:** keep PUT sessions · GET|POST petitions · GET road-routes/search Live · **remove** `ROAD_ROUTE_SEED` / any QL.22 seed fallback (GAP-DA-MOB-D-SEED-01) · ApiResponse · TZ=`tz_required` · XCO=`xco_get_only` · SHARE=`tenant_keep` · **cấm ERP.*** · **cấm** invent roster WS
- **skills:** `/agent-dev` · SA solution · DOMAIN-MAP Patrol

### T-BE-INIT-01 — LOOKUP_STATIC options keep
- **role:** Dev · **deps:** none · **status:** pending
- **DoD:** actionKind · pauseReason · petitionKind · petition.status từ `useFormOptions()` · **cấm** hardcode VN · **cấm** invent init-data for users/routes (SearchInput APIs)
- **skills:** `tl-dropdown-from-backend` (LOOKUP_STATIC path)

### T-PERM-01 — Permission codes keep
- **role:** Dev · **deps:** T-BE-CRUD-01 · **status:** pending
- **DoD:** session-close/handover/pause · petition list/create · users/routes GET perms cite peer · UI hide/disable theo code
- **skills:** `/agent-dev`

### T-UI-LKP-01 — SearchInput users + road-routes
- **role:** Dev · **deps:** T-BE-BFF-01 · T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-06 `receiverName` Mobile SearchInput users (same pattern as road-routes · **cấm** ERP UserSearchInput) · miss → `--` · **cấm** free-text · TK-06 `route` SearchInput road-routes · no seed · miss `--` · keyboard/select AC · UTF-8 VN
- **skills:** `/agent-dev` · design compact · prototype reviewUrl
- **implement.wire:** GET integration/users · GET road-routes/search

### T-UI-FORM-01 — Session close Pattern B (TD-06)
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · T-UI-LKP-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TD-06 · Radio actionKind · Pattern B Lưu always-on except saving · validate-on-click · banner+inline · ban-giao→handoverNote+receiver required · tam-dung→pauseReason required · ket-ca→Hoàn thành · **no GPS** · S-08/09 + prior S-* · phone Full 430 · `dev-form-review-checklist` adapted mobile
- **skills:** `/agent-dev` · `/implement-show-leave-confirm` · form review checklist
- **implement.wire:** GET/PUT sessions/{id} · GET journal-lines open · GET auth/profile · SearchInput users

### T-UI-ACT-02 — Assign WO (TK-03) keep baseline
- **role:** Dev · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending (verify keep)
- **DoD:** keep assignWo Live · **no** submit-validate delta · W-* AC
- **skills:** `/agent-dev`

### T-UI-FORM-02 — Feedback (TK-05) keep baseline
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · **devSlash:** `/agent-dev`
- **status:** pending (verify keep)
- **DoD:** keep feedback form · **no** submit-validate delta · F-* AC
- **skills:** `/agent-dev` · `/implement-show-leave-confirm`

### T-UI-LIST-01 — Petition list cards keep
- **role:** Dev · **deps:** T-BE-CRUD-01 · **devSlash:** `/agent-dev`
- **status:** pending (verify keep)
- **DoD:** TK-06 list keep · phone 430 · **cấm** mock · **cấm** DES-GRID / LinErpListFilterBar
- **skills:** `/agent-dev` · `/dev-web-responsive`
- **implement.state:** route under `/kien-nghi/moi`

### T-UI-FORM-03 — Petition create Pattern B + route SearchInput (TK-06)
- **role:** Dev · **deps:** T-BE-CRUD-01 · T-BE-INIT-01 · T-UI-LKP-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** TK-06 create · Pattern B Lưu · validate-on-click · banner+inline · route SearchInput no seed · GPS deny blocks · **no-face** save w/o coords · **cấm** fake · P-02/07/08 + prior P-* · Save→list · code server-only
- **skills:** `/agent-dev` · `/implement-show-leave-confirm` · form review checklist
- **implement.wire:** POST petitions · GET auth/profile · road-routes/search · geolocation

### T-UI-ACT-01 — Action inventory work
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-FORM-03 · T-UI-LKP-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** mọi nút (Lưu TD-06/TK-06 · SearchInput select · Back · Leave) → handler + FormMode/API · **cấm** dead button (**GAP-P2-ACT-***)
- **skills:** `/agent-dev`

### T-UI-LEAVE-01 — Dirty leave Modal
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-FORM-03 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** DES-LEAVE · `LeaveConfirmModal` · dirty TD-06 / TK-06 create · Back→hub A · **cấm** `window.confirm`/`alert`/`prompt`
- **skills:** `/implement-show-leave-confirm`

### T-UI-FIELD-01 — Field type + DTO map (delta)
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-FORM-03 · T-UI-LKP-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** field→control→DTO khớp SA delta · SearchInput users/routes · Pattern B banner/inline · Date UTC · GPS/noFace · (**GAP-LIST-FIELD-01**)
- **skills:** list-form-quality-gates §2

### T-UI-PROD-01 — End-user chrome
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-FORM-03 · T-UI-LKP-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** **cấm** note Dev / GAP / SSOT / stub trên UI · title nghiệp vụ UTF-8 · (**GAP-DEV-DEMO-NOTE-01**)
- **skills:** `demo-to-real-enduser`

### T-UI-UX-01 — UI-Ux constitution (phone)
- **role:** Dev · **deps:** T-UI-FORM-01 · T-UI-FORM-03 · T-UI-LKP-01 · **devSlash:** `/agent-dev`
- **status:** pending
- **DoD:** Principles 1–7 · spacing · Lin* only · empty/loading/error SearchInput · phone shell 430 · radio **20×20** · (**GAP-DEV-UX-01**)
- **skills:** `dev-ui-ux-constitution`

### T-UI-RESP-01 — Responsive web
- **role:** Dev · **deps:** T-UI-UX-01 · **devSlash:** `/dev-web-responsive`
- **status:** pending
- **DoD:** verify **375** (primary) · 768 · 1280 · `/dev-ui-review` · (**GAP-DEV-UX-RESP-***)
- **skills:** `/dev-web-responsive` · `/dev-ui-review`

### T-QA-CRUD-01 — Pattern B · SearchInput · BFF · no-seed · leave · GPS
- **role:** QA · **deps:** all T-UI-* + T-BE-* · **status:** pending
- **DoD:** S-08/09 Pattern B+users · P-02/07/08 Pattern B+route · B-01…03 BFF/seed/transport · prior S/W/F/L/P keep · Leave Modal · GPS deny-vs-no-face · **e2e chỉ** `/agent-qa*` (queued)
- **skills:** `/agent-qa`

### T-QA-FORM-01 — Form field ↔ body (delta)
- **role:** QA · **deps:** T-QA-CRUD-01 · **status:** pending
- **DoD:** required on-submit Pattern B · receiver = selected user code/name · route = selected road-route · UI value = request body · noFace omit coords · (**GAP-QA-FORM-FIELD-01**)
- **skills:** `/agent-qa` · `form-field-e2e`

---

## Deps (order)

```
T-BE-SCHEMA-01 (keep) ─┬─► T-BE-CRUD-01 (no-seed) ─┬─► T-PERM-01
T-BE-BFF-01 ───────────┤                           ├─► T-UI-LKP-01 ─┬─► T-UI-FORM-01 (Pattern B)
T-BE-INIT-01 ──────────┴───────────────────────────┤                 ├─► T-UI-FORM-03 (Pattern B)
                                                    │                 ├─► T-UI-ACT-01 · LEAVE · FIELD · PROD · UX · RESP
T-UI-ACT-02 / T-UI-FORM-02 / T-UI-LIST-01 (keep) ───┘                 └─► T-QA-CRUD-01 · T-QA-FORM-01
```

## WAIVE register (Kind B desktop)

| id | status | cite |
|----|--------|------|
| T-UI-LIST-01 Kind B grid | WAIVE→phone cards | SA FormType · DES-GRID N/A |
| T-UI-FILTER-01 | WAIVE | PO/Design phone |
| T-UI-CFG-01 | WAIVE | no catalog editor |
| T-BE-UISCHEMA-01 | WAIVE | no ui-schema |
| T-UI-HIST-01 | WAIVE | no history |
| T-QA-FILTER-01/02 | WAIVE | no filter-bar |
| T-UI-LKP-01 | **KEEP** (delta) | SearchInput users + road-routes |

## Next

- `/agent-dev` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued QA  
- **cấm** yarn build / e2e / start:std / Step 4b migration ở team_lead (Dev chạy BFF+FE)
